import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const bandit2 = () => {
  return (
    <div>
      <h1>Bandit 2</h1>
      <section>
        <h2>Experience</h2>
        <p>
          This one was about spaces in a filename, simply,
          we have to escape the spaces using a backslash{' '}
          <code>cat spaces\ in\ this\ filename</code>
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          Again, not much to reflect upon, just teaches
          the usage of backslash for escaping. So for those who
          are completely new, it teaches that some characters have special
          meanings but it&apos;s possible to escape these special meanings.
          This could be a potential vulnerability both in terms of
          using characters with special meaning or escaping them. For example,
          the semicolon could be used by attackers to declare the end of a shell
          command then write another different shell command to execute. An
          example of escaping would be escaping quotation marks. An answer by
          <a href="https://security.stackexchange.com/questions/203917/what-would-be-an-example-of-an-attack-that-exploits-escape-characters">Sjoerd from StackExhange</a> uses the following SQL example.
        </p>
        <CodeBlock language="sql">
          {`SELECT * FROM users WHERE username='$username' AND password='$password`}
        </CodeBlock>
        <p>
          So normally, this would select users with a username that matches the input
          and also have the password as inputted by the user. However, by inputting
          the username <code>\</code>, this would escape the following single quote, and
          include everything up to the single quote after <code>password=</code>.
          At that point, we could write another statement for the password,
          e.g. <code>OR 1=1 --</code> which will comment out the last single quote
          and is also always true.
        </p>
        <CodeBlock language='sql'>
          {`SELECT * FROM users WHERE username='\\' AND password=' OR 1=1 -- '`}
        </CodeBlock>
        <p>
          So, the resulting statement seen above, would select an entry if its username
          exactly equals <code>&apos;\&apos; AND password=</code> or when 1 is equal to 1, which
          is always true. Therefore, it will select every entry.
        </p>
      </section>
      <SpoilerKey>
        {`UmHadQclWmgdLOKQ3YNgjWxGoRMb5luK`}
      </SpoilerKey>
      <PageNav link1='/bandit/bandit1' link2='/bandit/bandit3' />
    </div>
  )
}
export default bandit2