import BlogImage from "../../components/elements/BlogImage/BlogImage"
import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas11 = () => {
  return (
    <div>
      <h1>Natas 11</h1>
      <Keyword>
        <Tag>encryption</Tag>
        <Tag>cookie</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          Here we are greeted with something that is not
          obviously vulnerable. The input is merely to change a background color.
          However it does give us a hint to look into cookies. Looking at the source code,
          it uses the an encrypted cookie to determine whether the password should be shown
          or not. So first step was to get the cookie called data. This could be obtained
          from the Application tab of the developer tools, or simply using some Javascript.
        </p>
        <BlogImage src='/images/natas11-1.png' alt='obtaining cookies' width={450}/>
        <p>
          Then, we analyse what is being done in the source code. There are many function
          definitions in between, but for the first case, it basically create a <code>defaultdata</code> variable, then load that then save the return. The <code>saveData</code> function
          simply sets the cookie to the argument it&apos;s given. Another important thing to
          note is that it checks if the <code>showpassword</code> key inside the cookie maps to a
          <code>yes</code>, if so, it will print a password. So our goal, is to modify the cookie.
          The main problem is that we do not have the function to encrypt the cookie into the
          valid form required.
        </p>
        <CodeBlock language='php'>
          {`$defaultdata = array( "showpassword"=>"no", "bgcolor"=>"#ffffff");
$data = loadData($defaultdata);
saveData($data);

<?
if($data["showpassword"] == "yes") {
    print "The password for natas12 is <censored><br>";
}

?>`}
        </CodeBlock>
        <p>
          For now, we must examine the function <code>loadData</code> and what it does.
        </p>
        <CodeBlock language="php">
          {`function loadData($def) {
    global $_COOKIE;
    $mydata = $def;
    if(array_key_exists("data", $_COOKIE)) {
    $tempdata = json_decode(xor_encrypt(base64_decode($_COOKIE["data"])), true);
    if(is_array($tempdata) && array_key_exists("showpassword", $tempdata) && array_key_exists("bgcolor", $tempdata)) {
        if (preg_match('/^#(?:[a-f\d]{6})$/i', $tempdata['bgcolor'])) {
        $mydata['showpassword'] = $tempdata['showpassword'];
        $mydata['bgcolor'] = $tempdata['bgcolor'];
        }
    }
    }
    return $mydata;
}`}
        </CodeBlock>
        <p>
          <code>loadData</code> is a sizeable function, however, the main
          thing to consider is that it uses the <code>xor_encrypt</code> function.
          So, what is an XOR encryption?
        </p>
        <CodeBlock language="php">
          {`function xor_encrypt($in) {
    $key = '<censored>';
    $text = $in;
    $outText = '';

    // Iterate through each character
    for($i=0;$i<strlen($text);$i++) {
    $outText .= $text[$i] ^ $key[$i % strlen($key)];
    }

    return $outText;
}`}
        </CodeBlock>
        <p>
          Looking at the code, is simply performs exclusive or (XOR) on the
          text with some ssecret key. With background knowledge on XOR, we
          know that XOR is reversible.
        </p>
        <CodeBlock language="">
          {`10 XOR 11 --> 01
11 XOR 01 --> 10
--------------------
in other words:
A XOR B = C
B XOR C = A`}
        </CodeBlock>
        <p>
          Now, we know the default and we also have access to the resulting cookie.
          All we are missing is the key. Using the principle of how XOR works, I
          XOR the default data and it&apos;s respective XOR cookie.
        </p>
        <BlogImage src='/images/natas11-2.png' alt='Code used to get the key' />
        <BlogImage src='/images/natas11-3.png' alt='Key used by xor encrypt' />
        <p>
          From the code of the encryptiong function, we know that it simply
          repeats itself, this is another potential way of finding the key if
          it didn&apos;t have that reversible property. Therefore, the key
          is simply just <code>qw8J</code>. We may then fill in the key
          inside the encryption function then create our own cookie where the{' '}
          <code>showpassword</code> key has a value of <code>yes</code>
        </p>
        <BlogImage src='/images/natas11-4.png' alt='' />
        <BlogImage src='/images/natas11-5.png' alt='' />
        <BlogImage src='/images/natas11-66.png' alt='' />
        <p>
          The last picture above shows the cookie, not the password for the next level.
          So then, we can set the cookie via the developer tools and reload the page to
          get the password.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          I think this was an example of breaking an encryption only using
          the start and end result. If the encryption is not as simple, I could
          picture breaking it just by comparison, as you would be allowed
          to set the background colour to anything and analysed how it
          changed the cookie. This might be difficult, but it seem quite
          possible.
        </p>
        <p>
          In regards to perspective, it was quite shocking how even for a
          website that changes background colour, there are these potential
          loop holes that I would have never thought about as a developer
          of the website. Using cookies can definitely be quite vulnerable
          as seen in this case as they are changeable, so it&apos;s
          really about ensuring that the encryption is difficult to break.
        </p>
      </section>
      <SpoilerKey>
        {`EDXp0pS26wLKHZy1rDBPUZk0RKfLGIR3`}
      </SpoilerKey>
      <PageNav link1='natas10' link2='natas12' />
    </div>
  )
}
export default natas11