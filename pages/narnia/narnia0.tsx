import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const narnia0 = () => {
  return (
    <div>
      <h1>Narnia 0</h1>
      <Keyword>
        <Tag>buffer-overflow</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          For Narnia, the source code is given to us.
        </p>
        <CodeBlock language='c'>
          {`int main(){
    long val=0x41414141;
    char buf[20];

    printf("Correct val's value from 0x41414141 -> 0xdeadbeef!\\n");
    printf("Here is your chance: ");
    scanf("%24s",&buf);
    printf("buf: %s\\n",buf);
    printf("val: 0x%08x\\n",val);

    if(val==0xdeadbeef){
      setreuid(geteuid(),geteuid());
      system("/bin/sh");
    }
    else {
      printf("WAY OFF!!!!\\n");
      exit(1);
    }

    return 0;
    `}
        </CodeBlock>
        <p>
          Before starting, the files does not appear to be there, change directory
          to <code>/narnia</code> before starting. We are given the source code for this level.
          We are given hints for this level in the strings of the <code>printf</code>.
          The goal is to change the value of <code>val</code> to <code>0xdeadbeef</code>.
          Clearly, this would require some form of buffer overflow. Analysing the code,
          we can tell that this is possible since the size of the scanf maximum input
          length is 24 meanwhile the buffer itself is only 20 bytes in size.
        </p>
        <p>
          This was simple enough, testing with the following code indicate that it
          seems to work.
        </p>
        <CodeBlock language="shell">
          {`python -c 'print("a"*20 + "b"*4)' | ./narnia0`}
        </CodeBlock>
        <p>
          Next, we must convert change the value so that it matches <code>0xdeadbeef</code>.
          To do so, we must convert it to a little endian format, this involves putting
          the smallest byte first, like so: <code>ef eb ad de</code>. Put together,
          the command we could use is as follows.
        </p>
        <CodeBlock language="shell">
          {`python -c 'print("a"*20 +"\\xef\\xbe\\xad\\xde")' | ./narnia0`}
        </CodeBlock>
        <p>
          Here was where it got confusing, this successfuly changed the value of <code>val</code>, however,
          the program simply runs <code>setreuid</code> and <code>system</code> then simply closes.
          The main problem is that the program runs <code>system</code> which calls a
          <code>/bin/sh</code> which is the shell, then nothing occured and it simply closes. After
          being stuck for quite a long time, I found that, we may use the <code>cat</code> command
          in conjunction.
        </p>
        <CodeBlock language="shell">
          {`(python -c 'print("a"*20 +"\\xef\\xbe\\xad\\xde")'; cat) | ./narnia0`}
        </CodeBlock>
        <p>
          Unlike how I had normally used <code>cat</code>, without any arguments,
          <code>cat</code> simply copies standard input to standard output. Now using the pipe,
          the cat will send the standard input to the shell running instead, allowing us to
          use the shell inside the program.
          I simply used <code>cat /etc/narnia_pass/narnia1</code>{' '}
          to then obtain the password for Narnia 1.
        </p>
      </section>

      <section>
        <h2>Reflection</h2>
        <p>
          This was an interesting level to have completed. I have not use <code>cat</code>
          in that manner previously and it took quite a while to come to that conclusion.
          Perhaps, it would have been better to search for hints. But this definitely
          showcased the difference in difficulty of this wargames to the ones before. An
          interesting idea that came to mind was how this may relate to the mentions of
          creating a remote shell seen during the Natas wargames. Perhaps this could
          be used to create such remote shell, at least as a method of taking inputs in.
        </p>
        <p>
          In terms of security, this demonstrated the common vulnerability of a buffer overflow.
          Since, the memory allocated for the array was only 20 bytes long, by
          writing extra bytes, it overwrites the ones stored previously, namely the
          <code>val</code> variable in this instance. This is a common type of vulnerability
          especially when taking in user input we must always allocate enough space or
          prevent overwriting other data. Standard libraries already allow such feature,
          in this case however, the vulnerability exist because of the mistmatch of the
          <code>scanf</code> command&apos;s specified limit and the length of buffer used.
          So this is something to look out for, especially when using lower level programming.
        </p>
      </section>
      <SpoilerKey>
        {`efeidiedae`}
      </SpoilerKey>
      <PageNav link1='/narnia/' link2='/narnia/narnia1' />
    </div>
  )
}
export default narnia0