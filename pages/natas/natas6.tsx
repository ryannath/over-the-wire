import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const natas6 = () => {
  return (
    <div>
      <h1>Natas 6</h1>
      <section>
        <h2>Experience</h2>
        <p>
          In this level, the user is greeted with an input asking
          for a certain secret to be inputted. Alongside it, a
          link which shows the source code of the page. By clicking on
          the source code, it can be noticed that it is not a pure
          html document, there is a php script included which
          compares the key to some secret. The secret itself is not defined
          in the code, however, I noticed that an include statement exist.
        </p>
        <CodeBlock language="php">
          {`include "includes/secret.inc";`}
        </CodeBlock>
        <p>
          This was clearly how they defined the secret, so I appended
          the include path to the url. As expected it contains a
          variable named &quot;secret&quot; defined with the following string:
          &quot;FOEIUWGHFEEUHOFUOIU&quot;. I inserted that secret,
          and obtained the flag for the next level.
        </p>
      </section>
      <section>
        <h2>
          Reflection
        </h2>
        <p>
          This level exposes us to a bit of php, a technology that may be familiar
          to many web developers. While it seem that this is merely an introductory
          exercise and that under normal circumstance,
          users should not have access to the php files running, this reminded me that
          guessing paths can be a genuine method of attack. A bot could be used to
          guess possible paths to potentially interesting files by using several
          common dictionary words.
        </p>
        <p>
          As programmers, we are taught that using semantically meaningful names for
          variable names, including filenames, are generally good as they make code
          more readable. In a security perspective here, it poses a genuine risk that
          attackers could exploit. This page relies mostly on secrecy as its security.
          If a determined attacker exist and was certain that there might be
          potential vulnerabilities, their bot could guess that path sooner or later.
        </p>
      </section>
      <SpoilerKey>
        {'7z3hEENjQtflzgnT29q7wAvMNfZdh0i9'}
      </SpoilerKey>
      <PageNav link1='natas5' link2='natas7' />
    </div>
  )
}
export default natas6