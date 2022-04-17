import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas14 = () => {
  return (
    <div>
      <h1>Natas 14</h1>
      <Keyword>
        <Tag>sqli</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          In this level, we are supposed to type in a username and a password,
          which if correct would return the key for the next level. The
          code as to how this is done can be seen below.
        </p>
        <CodeBlock language='php'>
          {`$query = "SELECT * from users where username=\\"".$_REQUEST["username"]."\\" and password=\\"".$_REQUEST["password"]."\\"";
if(array_key_exists("debug", $_GET)) {
echo "Executing query: $query<br>";
}

if(mysql_num_rows(mysql_query($query, $link)) > 0) {
  echo "Successful login! The password for natas15 is <censored><br>";
} else {
  echo "Access denied!<br>";
}`}
        </CodeBlock>
        <p>
          It puts the user inputs and insert them to a string to be used as an sql query.
          Now the query itself can be quite confusing to read, so first, I would
          convert it to a more readable format.
        </p>
        <CodeBlock language='sql'>
          {`SELECT * from users where username="USERNAME" and password="PASSWORD"`}
        </CodeBlock>
        <p>
          The string USERNAME and PASSWORD would be where our inputs would actually
          go. From here, it is a lot clearer that if we want to write a statement that always
          succeed, we could do so by typing <code>{`" OR 1 #`}</code>. The first double
          quote ends the username query, then we insert the OR keyword and use the truthy 1,
          then we simply comment out the rest, that is the <code>{`" and password="PASSWORD"`}</code>. 
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This was quite an easy SQL injection example, and we essentially escaped the location
          where we were supposed to insert the username by inserting a double quote, allowing
          us to then write any arbitrary command afterwards. This is another example of having to be
          careful when asking for user inputs that will be a part of an executed command. Without
          all the background knowledge of SQL injection, this type of inserting input would actually
          seem quite familiar.
        </p>
      </section>
      <SpoilerKey>
        {`AwWj0w5cvxrZiONgZ9J5stNVkmxdk39J`}
      </SpoilerKey>
      <PageNav link1='/natas/natas13' link2='/natas/natas15' />
    </div>
  )
}
export default natas14