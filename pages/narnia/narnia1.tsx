import BlogImage from "../../components/elements/BlogImage/BlogImage"
import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const narnia1 = () => {
  return (
    <div>
      <h1>Narnia 1</h1>
      <Keyword>
        <Tag>buffer-overflow</Tag>
        <Tag>exploit-db</Tag>
        <Tag>shellcode</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          Starting this level, we again start by looking at the source code.
        </p>
        <CodeBlock language="c">{`int main(){
int (*ret)();

if(getenv("EGG")==NULL){
  printf("Give me something to execute at the env-variable EGG\n");
  exit(1);
}

printf("Trying to execute EGG!\n");
ret = getenv("EGG");
ret();

return 0;
}`}</CodeBlock>
        <p>
          We may observe several interesting thing, first a declaration of a
          pointer called <code>ret</code> which points to a function. There is also
          a usage of <code>getenv</code> which gets an environment variable, which here
          seems to be called <em>EGG</em>. It then sets the function pointer to
          whatever is inside the EGG environment varialbe and then executes it. So,
          clearly, we must insert some type of program into the EGG environment variable
          to obtain the password for Narnia 2.
        </p>
        <p>
          I could understand so far that we must set the environment variable to
          something executable, however, I did not know how to proceed. Searching
          setting environment variable vulnerabilities led to a <a href="https://owasp.org/www-community/attacks/Buffer_Overflow_via_Environment_Variables">page in owasp.org</a>.
          This seem tangentially related, however, it uses environment variable to create a buffer
          overflow rather than creating an executable function. Lastly, I was forced to
          find hints regarding this level. I learnt that we were supposed to use something
          called shellcode.
        </p>
        <p>
          As the creation of shellcodes could be quite difficult especially in relation to
          removing null bytes, we can use a ready shellcode taken from websites such as <a href='http://shell-storm.org/shellcode/'>exploit-db</a>. If we analyse the code of narnia0,
          it calls <code>execve</code> with <code>/bin/sh</code> as arguments, so searching
          for a shellcode that does those, I found one from <a href='https://www.exploit-db.com/exploits/39160'>exploit-db</a>. It took several tries to find a working
          shellcode. We must then
          write this hex code to an environment variable without it being considered as
          merely a string, so we use the <code>printf</code> shell function. Export
          the environment variable like so:
        </p>
      <CodeBlock language="shell">
        {`export EGG=$(printf "\\x6a\\x0b\\x58\\x31\\xf6\\x56\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\\x62\\x69\\x6e\\x89\\xe3\\x31\\xc9\\x89\\xca\\xcd\\x80")`}
      </CodeBlock>
      <p>
        This will run the shell just like in Narnia 0, and we would just use <code>cat</code> to
        obtain the password for Narnia2.
      </p>
      </section>
      <section>
        <h2>Research</h2>
        <p>
          What is shellcode? Shellcode is just a general term for an injected payload that will be
          executed by a target program. The term shellcode does not mean it is related to shell 
          commands. The term came from its background as a payload to create a shell for the
          attacker to utilise. In relation to the shellcode shown, each hex number
          represents an assembly operation. A good understanding could be earned if we consider a
          small C code. For example, a small program printing hello world.
        </p>
        <CodeBlock language="c">
          {`#include <stdio.h>

int main(void) {
  printf("Hello world");
  return 0;
}`}
        </CodeBlock>
        <p>
          When this is compiled, we can see the hex representation of all the assembly
          instructions using <code>objdump</code>. It is located at the centre, as seen
          in the picture below.
        </p>
        <BlogImage src='/images/narnia1-1.png' alt='the hex representation of assembly instruction
        located at the centre of the objdump result'/>
        <p>
          These are the operation codes to run the program of printing hello world.
          The main problem with this is that, the usage of null bytes in a string could
          terminate the string, this is undesirable product.Therefore, normally,
          these opcode shellcodes are written directly using assembly or at least edited to
          avoid operations with null bytes. It is also possible to find shellcodes already made by 
          others, namely, in the website <a href='http://shell-storm.org/shellcode/'> shell-storm</a>. To read more about shellcode, I would
          recommend reading about them in this, <a href='https://www.exploit-db.com/docs/english/13019-shell-code-for-beginners.pdf'>document written by exploit-db.com</a>
        </p>
        <p>
          Another thing to consider was that since these shellcodes utilises hex representation
          of operation codes, it is limited to the specific infrastructure that uses the
          same operation codes.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This was quite a difficult CTF level, but I&apos;ve learnt a few things that
          I had not known before. Namely that we may insert what seems to be just a string
          of hex, when instead it is an fully executable program. That was quite interesting
          to see. When doing buffer overflow attack, it at first seem limited to what
          we can do. However, seeing how it is possible to write assembly instructions,
          it reveals to me what a buffer overflow attack can fully accomplish. This
          made me reconsider how I should perceive potential overflow problems.
        </p>
        <p>
          In terms of completing the challenge, I did feel that I may have taken too long
          in trying to figure out what I should insert in the environment variable.
          While I still feel that requiring hints was a little dissapointing, at the
          end I was able to find my own shellcode and assign it to the environment
          variable with my own understanding of what I&apos;m trying to accomplish
          and how everything should work.
        </p>
      </section>
      <SpoilerKey>{`nairiepecu`}</SpoilerKey>
      <PageNav link1='/narnia/narnia0' link2='/narnia/narnia2' />
    </div>
  )
}
export default narnia1

