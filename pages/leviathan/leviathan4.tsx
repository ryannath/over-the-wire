import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const leviathan4 = () => {
  return (
    <div>
      <h1>Leviathan 4</h1>
      <Keyword>
        <Tag>encoding</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          We found an empty directory using <code>ls</code>, so
          it appears that the file is hidden. After using <code>ls -la</code>
          we found that there is a directory called <em>.trash</em>. Inside
          is an executable. Running this program, it returns several
          binary strings.
        </p>
        <CodeBlock language="">
          {`01010100 01101001 01110100 01101000 00110100 01100011 01101111 01101011 01100101 01101001 00001010`}
        </CodeBlock>
        <p>
          Converting this binary to ASCII, we found the password.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This was quite an easy level, I guess the main thing to consider is that
          conversion to binary does not secure your code. It may seem complex to
          a person unfamiliar with it, but there are many online conversion tools
          to reverse from binary to ASCII in this case. So, really, we must
          consider something more difficult to reverse, a different method
          of encryption.
        </p>
        <p>
          An interesting part of this was also how the hidden folder is called
          &quot;.trash&quot;. So it reminds us that when we delete something,
          it is always important to check if the files we deleted is truly
          deleted (overwritten). Otherwise, as demonstrated, it could be
          possible for an attacker to still recover it and read those files.
          Even when fully deleted from the recycling bin, it could be the
          case that the memory locations are indicated to be empty but
          not overwritten. So that is something to consider when
          you have perhaps stored a file with sensitive information.
        </p>
      </section>
      <SpoilerKey>
        {'Tith4cokei'}
      </SpoilerKey>
      <PageNav link1='/leviathan/leviathan3' link2='/leviathan/leviathan5' />
    </div>
  )
}
export default leviathan4