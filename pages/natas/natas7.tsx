import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas7 = () => {
  return (
    <div>
      <h1>Natas 7</h1>
      <Keyword>
        <Tag>php</Tag>
        <Tag>local-file-inclusion</Tag>
        <Tag>remote-file-inclusion</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          In this level, we are greeted with two links, one labeled
          &quot;Home&quot; and one labeled &quot;About&quot;. When the links
          are linked it changes the url but not as we have previously seen.
          For example, when the About link is clicked, it appends{' '}
          <code>index.php?page=home</code>. This appears to
          reference a php file followed by a query of <code>page=home</code>.
        </p>
        <p>
          Based on previous limited encounters with php, it seem that php is used
          to change the content of the document based on the query and all we had to
          do was to find the right query. Inspecting the page, I noticed the following comment.
        </p>
        <CodeBlock language="">
          {'<!-- hint: password for webuser natas8 is in /etc/natas_webpass/natas8 -->'}
        </CodeBlock>
        <p>
          I put that path as my query, and the website loaded the password for the next level.
        </p>
      </section>
      <section>
        <h2>Research</h2>
        <p>
          What is php and what role does it play in website servers? The <a href='https://en.wikipedia.org/wiki/PHP'>Wikipedia
            entry</a> for php states that it is a
          <q>
            general-purpose scripting language geared
            towards web development.
          </q>
          So, in other words, in this case, it seems to just be a scripting language used
          in the server to change the html elements served to the users. Php scripts
          may look like a typical html file with a php script written using a special
          angular bracket notation with a question mark.
        </p>
        <p>
          I noticed that the difference between using a general purpose script and simply
          using a typical website directory system, is that it might be possible to access
          files which we are not supposed to. A <a href='https://brightsec.com/blog/file-inclusion-vulnerabilities/'>blog from Bright.com</a>{' '}
          discusses about something called the <em>File Inclusion Vulnerability</em>. File inclusion
          vulnerability occurs when user inputs are not properly validated and inserted into a
          file inclusion command in a scripting language. There are two potential types of file inclusion attack,
          <em>Local File Inclusion</em> (LFI) and <em>Remote File Inclusion</em>(RFI)
        </p>
        <p>
          LFI pertains to using local files in the server, allowing access to them or
          even execution. RFI on the other hand involves letting the server download a
          remote file and executing it. These are both dangerous and may lead to remote
          code execution and hence letting attackers create web shells. Prevention
          are similar to how we may prevent other mixing-input-in-control-sequence attacks,
          that is sanitising the input and validating it. Ensure that the program has limited
          access as well, don&apos;t use unneeded permissions when running it.
        </p>
        <p>
          <a href='https://en.wikipedia.org/wiki/File_inclusion_vulnerability'>Wikipedia</a> has an entry on file inclusion vulnerability which includes example
          vulnerable code.
        </p>
      </section>

      <section>
        <h2>Reflection</h2>
        <p>
          I reflected on what I&apos;ve learnt from this exercise. I guess, I learnt a
          little bit about php, but during my reflection, i questioned whether this was another
          reminder that attackers could simply guess urls. This doesn&apos;t seem to be the
          main concern. I then asked myself how this is any different from appending the
          url with the path itself? Well, I realised that the difference is that a general-purpose
          script was being run and it might be possible to access files from the server
          which users are not supposed to have access to. That was how I ended up reseaching about
          the file inclusion vulnerability.
        </p>
        <p>
          So I thought this was a good introduction to server side security. By using a system
          that can read files from the server, it exposes much more to attackers. This is especially
          important to remember as web applications are becoming ever more popular, that while
          they allow for more functionalities, it is also exposed to more dangerous attacks.
        </p>
      </section>
      <SpoilerKey>
        {`DBfUBfqQG69KvJvJ1iAbMoIpwSNQ9bWe`}
      </SpoilerKey>
      <PageNav link1='/natas/natas6' link2='/natas/natas8' />
    </div>
  )
}
export default natas7