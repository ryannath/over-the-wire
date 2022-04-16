import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const bandit5 = () => {
  return (
    <div>
      <h1>Bandit 5</h1>
      <section>
        <h2>Experience</h2>
        <p>
          Seems familiar to Bandit 4, this time, we are instructed to find
          a file that is human-readable, 1033 bytes in size and not an executable.
          I could try something similar to how I solved Bandit 4, however, it doesn&apos;t
          specifically give files which meet the criteria. I didn&apos;t know where to go
          for this level. However, looking at the overthewire website, we are told about
          commands that may be useful, the one that seem most relevant was <code>find</code>.
        </p>
        <p>
          Using just <code>find</code>, it returns all the files on the directories. Reading further
          about the function, there are several flags that can be useful. To select a 1033 byte
          file, we could use <code>-size 1033c</code>. To select non-executable, we could use
          <code>! -executable</code>. The last criteria of being human readable was a bit less
          clear. One possible way I found was to use the <code>-exec</code> flag which allows
          find to run other commands.
        </p>
        <CodeBlock language="shell">
          {`find ! -executable -size 1033c -exec file {} ';'`}
        </CodeBlock>
        <p>
          
        </p>
        <p>
          Learnt about using the find command and found a <a href='https://unix.stackexchange.com/questions/389705/understanding-the-exec-option-of-find'>useful explanation</a> about the <code>-exec</code> flag. Using it like in the code above will find all files
          that are not executable and have a size of 1033 bytes then list what type of file they
          are. This could further be modified by adding <code>grep</code> to get all the files
          which are of a specific type, like so:
        </p>
        <CodeBlock language='shell'>
          {`find ! -executable -size 1033c -exec file {} ';' | grep ASCII`}
        </CodeBlock>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This was actually a really nice learning experience, though it was not overly
          challenging, it really highlighted the point of doing all these to explore
          what tools exist.
        </p>
        <p>
          In terms of security again, this could be a potential method of exploring
          target&apos;s files, what directories exist. More interestingly, we could see
          that this is a potential method of exploiting file searching. Say that a 
          web server searchest through a directory using the <code>find</code> command.
          Then, we could perform other shell commands using the <code>-exec</code> flag.
          This also showcased how blacklisting might not be a viable solution. For example,
          a person could prevent users from inputting other commands by blacklisting 
          semicolons. Well, the <code>-exec</code> flag would actually not need semicolons.
          The one above does use it, but you could also use a plus instead. So there
          are many many ways of doing the same things and as a defender, you might
          not always think about all those potential ways.
        </p>
      </section>
      <SpoilerKey>{`DXjZPULLxYr17uwoI01bNLQbtFemEgo7`}</SpoilerKey>
      <PageNav link1='/bandit/bandit4' link2='/natas' />
    </div>
  )
}
export default bandit5