import BlogImage from "../../components/elements/BlogImage/BlogImage"
import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const bandit4 = () => {
  return (
    <div>
      <h1>Bandit 4</h1>
      <section>
        <h2>Experience</h2>
        <p>
          In this level, there are several files within the &quot;inhere&quot; directory.
          We are supposed to find which file actually contains the password. There are
          many methods of doing this.
        </p>
        <p>
          I had previously done this page by just going through
          all the files, using cat per file. However, after one of the last leviathan
          CTF levels, I now learnt a little about writing for loops in shell.
          So, if there were much more files, the following command could be used.
          It basically prints a number indicating the file followed by
          the contents of the file.
        </p>
        <CodeBlock language="shell">
          {`for i in {1..9}; do echo $i; cat ./-file0$i; echo -e '\n'; done`}
        </CodeBlock>
        <p>
          Another simpler way of doing this was to use the <code>file</code>
          command. This command basically show the type of each files.
          So when I typed <code>file ./*</code>, it runs for all files
          in this directory and showed that only <em>-file07</em> is an
          ASCII text file.
        </p>
        <BlogImage src='/images/bandit4-1.png' alt='Result of the file command
        showing that all the other files are "data" files while -file07
        is an ASCII file' width={300} />
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This level actually taught me a a little about the commands in
          the UNIX operating system. I didn&apos;t know about writing
          loops in shell previously, nor about the <code>file</code> command.
        </p>
        <p>
          This level also showcased how an attacker may be able to explore
          a server&apos;s or person&apos;s directory and files to find potentially important
          files. It is especially easy since they wouldn&apos;t need to
          write any additional programs on the users&apos; computer, rather
          they could rely on already existing ones. By writing, I meant
          write on storage. This mean that the attacker won&apos;t leave
          any files during their attack, potentially making it difficult
          to even know that an attacker has been looking through
          your computer.
        </p>
      </section>
      <SpoilerKey>
        {`koReBOKuIDDepwhWk7jZC0RTdopnAYKh`}
      </SpoilerKey>
      <PageNav link1='/bandit/bandit3' link2='/bandit/bandit5'/>
    </div>
  )
}
export default bandit4