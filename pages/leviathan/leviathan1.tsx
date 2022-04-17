import BlogImage from "../../components/elements/BlogImage/BlogImage"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const leviathan1 = () => {
  return (
    <div>
      <h1>Leviathan 1</h1>
      <Keyword>
        <Tag>ltrace</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          So, here we were greeted with an executable called &apos;check&apos;.
          A good first step, I ran the executable at which point it then
          prompted me for a password. So, somehow, we are supposed to find this
          password it is comparing to.
        </p>
        <p>
          I tried looking at the data part of the program using{' '}
          <code>objdump -s -j .rodata ./check</code>. This didn&apos;t
          show anything beside the error prompt. I tried using GDB and analysing
          the comparison steps, putting a breakpoint at a call to strcmp and seeing
          the register informations, but I wasn&apos;t able to find the string
          it is comparing to.
        </p>
        <p>
          After a good amount of time on looking at the assembly code, I researched
          other methods, I discovered that we can use <code>ltrace</code> to
          basically see what library and system calls were made before the program exits.
        </p>
        <BlogImage src='/images/leviathan1-1.png' alt='ltrace was used to show what arguments
        are given to strcmp'/>
        <p>
          As seen, the correct password is &quot;sex&quot;. Using that password for the
          prompt, it appears to run a shell. So I tried using it to access <code>/etc/leviathan_pass/leviathan2</code>. I simply used <code>cat</code> with that path,
          and I received the password for the next level.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          Reflecting on the time I took to complete this level, I feel that it might
          have been better to just search for answers. I spent way too much time
          trying to understand the assembly, when in reality, the level uses something
          that I didn&apos;t know about. Spending time trying things out was great, but
          it prevents me from doing more levels and hence learn more in the long term.
        </p>
        <p>
          In terms of security, it&apos;s really about learning the many tools
          available to reverse engineer a program even when it is in compiled form.
          It may be difficult to do using gdb and objdump, so I was fooled into thinking
          that while possible it is very difficult, but there are many other programs
          built to analysed these codes. So, we should keep that in mind while writing
          programs. Stored company secret in a program for example could be
          found by doing such reverse engineering hence it might not be a good idea.
          For example, writing credentials inside a user program.
        </p>
      </section>
      <SpoilerKey>
        {`ougahZi8Ta`}
      </SpoilerKey>
      <PageNav link1='/leviathan/leviathan0' link2='/leviathan/leviathan2' />
    </div>
  )
}
export default leviathan1