import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const leviathan0 = () => {
  return (
    <div>
      <h1>Leviathan 0</h1>
      <section>
        <h2>Experience</h2>
        <p>
          Starting out, I used ls to see what file we have, and surprise surprise, it doesn&apos;t show
          anything. So I used <code>ls - la</code>, saw a hidden directory called backup and inside
          it a bookmarks.html file with a large amount of text. This might have been the place
          where doing bandit might have helped since I&apos;m sure several commands will be helpful
          for the remaining capture the flag levels.
        </p>
        <p>
          So I actually, struggled with this, because, I wasn&apos;t really familiar with the
          Unix environment. My first attempt was basically to write a python script on a temp
          folder, and search leviathan in the html file. This worked. But now, after doing
          natas, I realised, we can use grep here.
        </p>
        <CodeBlock language="shell">
          {`grep leviathan bookmarks.html`}
        </CodeBlock>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          Writing this reflection after the fact, I realised that, skipping bandit might not
          have been a good idea. Although some of the levels are too easy, it would
          have been very beneficial to me to learn more about the commands I could use
          when interacting with a Unix device.
        </p>
      </section>
      <SpoilerKey>
        {`rioGegei8m`}
      </SpoilerKey>
      <PageNav link1='/leviathan' link2='/leviathan/leviathan1' />
    </div>
  )
}
export default leviathan0