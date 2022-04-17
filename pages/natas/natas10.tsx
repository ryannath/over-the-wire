import BlogImage from "../../components/elements/BlogImage/BlogImage"
import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas10 = () => {
  return (
    <div>
      <h1>Natas 10</h1>
      <Keyword>
        <Tag>php</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          This is an upgraded version of natas9 where they have filtered certain
          characters out. This really links back to blacklisting, they have essentially
          blacklisted several characters.
        </p>
        <BlogImage src='/images/natas10-1.png' alt='Source code for natas10, showing the
        characters banned using regex, namely semicolon, pipe, and ampersand'/>
        <p>
          The source code above shows a regular expression with the
          characters which have been blacklisted.
          This meant that our previous method of using a different
          command will not work. So, I looked into the <code>grep</code> command
          more deeply this time around. One of the interesting thing I found
          was that you are allowed to provide several files to search through.
        </p>
        <p>
          Using this knowledge about grep, I used the command <code>&quot;.&quot; /etc/natas_webpass/natas11</code>. The dot would match anything, and hence would match
          the content of natas11. This returned the password for natas11.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          I thought this was quite difficult at the start since I was not familiar
          with the grep command. Furthermore, the usage of the regex pattern
          was a bit confusing in terms of its implementation. If we use <code>.*</code> instead
          of treating this as a pattern, it seem that it treats it as files with a dot
          in front and anything afterwards (a wildcard). The reason behind this is that we
          are running a shell command and the star is used for globbing. But, after recognising
          what was going on, it was quite simple to get the key.
        </p>
        <p>
          As I&apos;ve mentioned several time, blacklisting can be quite fragile. The
          blacklist used here only target things that uses other shell command like
          what I did in Natas 9. However, it does not account for other potential
          vulnerabilities such as grep itself. I think it is also important to
          notice that these extensive lists could provide an unearned sense
          of security and really solidifies a defender mindset rather than
          utilising an attacker mindset. By recognising this, we could
          think more freely in terms of what things should be included in
          the blacklist or if there are other methods that could be more effective.
        </p>
      </section>
      <SpoilerKey>
        {`U82q5TCMMQ9xuFoI3dYX61s7OZD9JKoK`}
      </SpoilerKey>
      <PageNav link1='/natas/natas9' link2='/natas/natas11' />
    </div>
  )
}
export default natas10