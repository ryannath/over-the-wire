import BlogImage from "../../components/elements/BlogImage/BlogImage"
import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const leviathan2 = () => {
  return (
    <div>
      <h1>Leviathan 2</h1>
      <Keyword>
        <Tag>symlink</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          Greeted by another executable, this time called printfile. Running
          the program tells us that it will print the file we put as argument.
          However, as expected, it was not that simple, inserting the path to
          the leviathan3 password, i.e. /etc/leviathan_pass/leviathan3 returns
          the statement that we do not have access to that file. Now, using
          our trusty ltrace, we can see what the program is doing in the background.
          I also learnt about other ltrace flags, -f to trace processes if there is
          fork or clone and more interestingly -S to show system calls as well.
          These were not as useful for this exercise, but I read through the
          manual a bit to learn more about ltrace as it seems quite useful.
        </p>
        <BlogImage src='/images/leviathan2-1.png' alt='ltrace of printfile showing
        the call of library function, access' />
        <p>
          As shown in the image, it seems to be using a function called access to
          determine whether we are allowed to access the file. I then had a look
          at what it would do, if we do indeed have access to the file. So, create a
          temporary directory as directed by overthewire, and a file you have access to.
        </p>
        <CodeBlock language=''>
          {`mkdir /tmp/insertrandom523
echo test > /tmp/insertrandom523/test.txt
./printfile /tmp/insertrandom523/test.txt`}
        </CodeBlock>
        <p>
          Using ltrace for this case, we obtain:
        </p>
        <CodeBlock language=''>
          {`__libc_start_main(0x804852b, 2, 0xffffd744, 0x8048610 <unfinished ...>
access("/tmp/insertrandom523/test.txt", 4)               = 0
snprintf("/bin/cat /tmp/insertrandom523/te"..., 511, "/bin/cat %s", "/tmp/insertrandom523/test.txt") = 38
geteuid()                                                = 12002
geteuid()                                                = 12002
setreuid(12002, 12002)                                   = 0
system("/bin/cat /tmp/insertrandom523/te"...test`}
        </CodeBlock>
        <p>
          Interestingly, access and the shell command would use different user ids.
          It appears that when using the <code>system</code> function, it sets
          the real user id to the effetive user id. The effective user id is what
          is normally used to check whether we have access to a file or not, surprisingly
          we actually have a read access to the leviathan password file.
        </p>
        <BlogImage src='/images/leviathan2-1.png' alt='read access is shown for users for all leviathan passwords' />
        <p>
          Therefore, at the system function call, the shell should have the permission to
          read from the leviathan passwords. I&apos;m not sure why normally, you can&apos;t
          access the passwords, as <code>ls -la</code> showed read access, perhaps it
          does a separate checking which will not occur in this case. With that knowledge,
          we must bypass the <code>access</code> function.
        </p>
        <p>
          This was quite difficult to do, however, looking at the trace, I noticed that
          the string used for <code>access</code> and the string used by <code>snprintf</code>
          is different. Namely that the string for <code>access</code> have a double quote
          for the entire argument that was given to the program, however for the <code>snprintf</code>,
          it appears that the double quote has been trimmed. That is, instead of:
        </p>
        <CodeBlock language="">
          {`"/bin/cat \\"/tmp/insertrandom523/...\\""`}
        </CodeBlock>
        <p>
          It is instead:
        </p>
        <CodeBlock language=''>
          {`"/bin/cat /tmp/insertrandom523/..."`}
        </CodeBlock>
        <p>
          More research led me to learning about symbolic links. With all these information,
          we could combine and solve this challenge. First create a file with a space
          in its name, this would allow it to be interpreted as two separate files
          by <code>cat</code> due to the trimming of the double quote. So e.g.
        </p>
        <CodeBlock language="">
          {`echo > a\\ test.txt`}
        </CodeBlock>
        <p>
          Then, write a symbolic link with the name of the first part of that file to
          the leviathan password file.
        </p>
        <CodeBlock language="">
          {`ln -s /etc/leviathan_pass/leviathan3 a`}
        </CodeBlock>
        <p>
          Then we simply run <code>printfile</code> on the file we have
          access to (the non symbolic link file). This would give us the key to Leviathan 3
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
      </section>
      <SpoilerKey>
        {`Ahdiemoo1j`}
      </SpoilerKey>
      <PageNav link1='/leviathan/leviathan1' link2='/leviathan/leviathan3' />
    </div >
  )
}
export default leviathan2