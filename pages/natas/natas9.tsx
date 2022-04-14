import Link from "next/link";
import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword";
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag";

const natas9 = () => {
  const code = `<?
$key = "";

if(array_key_exists("needle", $_REQUEST)) {
    $key = $_REQUEST["needle"];
}

if($key != "") {
    passthru("grep -i $key dictionary.txt");
}
?>`;

  return (
    <div>
      <h1>Natas 9</h1>
      <Keyword>
        <Tag>php</Tag>
        <Tag>documentation</Tag>
        <Tag>mixing-input-and-controls</Tag>
        <Tag>input-sanitisation</Tag>
        <Tag>owasp</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          Jumping right to it, this seems like another challenge
          to find the right query to get the passwords stored somewhere in the
          server. The main logic of the search function can be seen below:
        </p>
        <CodeBlock language="php">
          {code}
        </CodeBlock>
        <p>
          If any none empty string is inserted in the input box, it will
          run a grep command which appears to find that word from a dictionary.txt
          file. My understanding of grep is quite limited, although, I do know
          that it is a shell command. Looking up what &quot;passthru&quot; does,
          it confirmed my suspicion that it is running a shell command. This as
          one might expect is not very secure.
        </p>
        <p>
          I&apos;m sure that it is possible to use grep somehow, but what I did was
          to simply use a semicolon which marks the end of the shell statement, then,
          use the <code>cat</code> command instead which will read out the content of a file we
          specified. We already know that the password is located at <code>
            /etc/natas_webpass/natas10
          </code> and so we simply specify that for <code>cat</code>.
        </p>
        <CodeBlock language="shell">
          {`;cat /etc/natas_webpass/natas10;`}
        </CodeBlock>
        <p>
          Inserting another semicolon at the end, it ensures that at least the cat command
          is correct. Just like that, I was able to obtain the flag.
        </p>
      </section>
      <section>
        <h2>Research</h2>
        <p>
          Looking at the <a href='https://www.php.net/manual/en/function.passthru.php'>php manual</a>{' '}
          for passthru, under the notes it clearly warns of &quot;user-supplied data&quot; which
          this is an example of. The main problem with this site is that user inputs
          are mixed with controls without the inputs being properly sanitised. As the manual
          suggested, <code>escapeshellarg()</code> should have been used in this case instead.
          This function would ensure that the input only act as an argument of the shell command.
        </p>
        <p>
          What is input sanitisation specifically? Input sanitisation really refers to cleaning
          user inputs, checking that it is in an acceptable format. There are multiple ways to do
          this, as stated in <a href="https://www.webopedia.com/definitions/input-sanitization/">webopedia</a>, most importantly
          whitelisting and blacklisting.
        </p>
        <p>
          Whitelisting involves ensuring that user inputs
          are limited to things that matches the whitelist, on a character by character basis or
          on a whole string basis, or template basis, etc. Whitelisting might be difficult
          to implement, especially in a system which should allow a range of user input. If too
          little are whitelisted, the system might be rigid and frustrating for users to use,
          too much, then it might allow for some forms of insecure inputs.
        </p>
        <p>
          Blacklisting is quite similar, but
          it looks at things from the opposite site, if things matches what is on the blacklist,
          it removes them, this is often problematic as there might be a large set of
          strings that must be removed, or the method of removal itself may be vulnerable.
          If the checking is linear, an attacker may put blacklisted strings
          between what they actually intent on typing, e.g. if &apos;WORD&apos; is blacklisted,
          the user could input &apos;WO<i>WORD</i>RD&apos;, and it would result in them
          successfully going around the blacklist. Another problem is that, blacklisted words
          may also be valid inputs, for example &quot;and&quot; or single quote in a name like
          Brian O&apos;Connor.
        </p>
        <p>
          Another interesting example where blacklisting might fail is with unicode or other
          encoding. <a href='https://owasp.org/www-community/attacks/Unicode_Encoding'>Owasp</a> details a potential attack using unicode encoding. The scenario detailed is of one
          for path traversal attack, if the system blacklisted &quot;../&quot; only, it will
          be vulnerable to attackers using the equivalent unicode &quot;%C0AE%C0AE%C0AF%&quot;.
          Owasp is a good website to look at common types of attacks. Another potential
          reading are <a href='https://www.sciencedirect.com/topics/computer-science/input-validation'>Science Direct articles on input validation</a>.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          When writing quick programs, it is often difficult to make oneself read a whole
          documentation of a small function before use, however, this whole
          level really demonstrated how this could be a potential source of exploitation.
          It seems that especially in terms of taking inputs from users, it is essential
          to always see whether the functions used are safe. This also show the need
          for testing in terms of user inputs, not only of edge cases, but also
          potentially dangerous inputs.
        </p>
        <p>
          Relating to checking if the functions used to process user inputs are safe, is
          to validate user inputs themselves through whitelisting and blacklisting. Further
          it is essential to use already created libraries/functions that are trusted and
          secure to process user inputs. As I notice during research about whitelisting
          and blacklisting, it can be very difficult to write a proper list, especially
          considering different types of encoding such as for unicode.
        </p>
      </section>
      <SpoilerKey>
        {`nOpp1igQAkUzaI1GUUjzn1bFVj7xCNzu`}
      </SpoilerKey>
      <PageNav link1='natas8' link2='natas10' />
    </div>
  )
}
export default natas9