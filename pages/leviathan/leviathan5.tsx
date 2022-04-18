import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const leviathan5 = () => {
  return (
    <div>
      <h1>Leviathan 5</h1>
      <section>
        <h2>Experience</h2>
        <p>
          In this challenge, we are presented with another executable called
          <code>leviathan5</code>. When ran, it prompted with an error
          that it could&apos;t find a file with the path <code>/tmp/file.log</code>
        </p>
        <p>
          So, using what we have already learnt previously, I instantly thought of
          using a symbolic link. Simply, create a symbolic link that matches
          the file it is reading and link it to the location of the password.
        </p>
        <CodeBlock language="">
          {`ln -s /etc/leviathan_pass/leviathan6 /tmp/file.log`}
        </CodeBlock>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This was again another easy challenge, but it has shown to me how useful
          it was to do some of the other challenges from overthewire. It has helped
          me learn more about the tools I could use to exploit systems. While this level
          was quite obvious, it still show something quite valuable in that
          if a program were to try and open a file that does not exist, an attacker
          could create a symbolic link to other files that they would be interested in.
          This could potentially happen when a program attempts to open a file
          that is dynamically created, if an attacker could trace and observe it
          attempt to open a file not there, they could definitely attempt to
          use this method.
        </p>
        <p>
          This level also reminded me, how important it is to learn more about the tools
          that exist in Linux operating systems as many servers are hosted on a Linux-like system, they could be used by attackers and provide them tools to explore
          the exploited system.
        </p>
      </section>
      <SpoilerKey>
        {'UgaoFee4li'}
      </SpoilerKey>
      <PageNav link1='/leviathan/leviathan4' link2='/leviathan/leviathan6' />
    </div>
  )
}
export default leviathan5