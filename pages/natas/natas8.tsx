import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from '../../components/elements/PageNav/PageNav'
import SpoilerKey from '../../components/elements/SpoilerKey/SpoilerKey'

const natas8 = () => {
  const code1 = `$encodedSecret = "3d3d516343746d4d6d6c315669563362";
function encodeSecret($secret) {
    return bin2hex(strrev(base64_encode($secret)));
}`;

  const code2 = `$encodedSecret = "3d3d516343746d4d6d6c315669563362";
$decodedSecret = base64_decode(strrev(hex2bin($encodedSecret)));
print($decodedSecret);`

  return (
    <div>
      <h1>Natas 8</h1>
      <section>
        <h2>Experience</h2>
        <p>
          Here, we were greeted by a similar screen asking for some secret input.
          Unlike natas6, when we look at the source code, the secret is available to us
          but it appears to be encoded.
        </p>
        <p>
          Looking straight to the source code, I knew the key was in the
          following lines:
        </p>
        <CodeBlock language='php'>
          {code1}
        </CodeBlock>
        <p>
          I tried using other tools which are supposed to do what each of the php functions
          seem to do, however with no luck. So at the end, I thought, why not just use php.
          Using an <a href='https://sandbox.onlinephpfunctions.com/'>online php editor</a> I basically reversed the the encoding using corresponding decoding functions.
        </p>
        <CodeBlock language='php'>
          {code2}
        </CodeBlock>
        <p>
          It then gave me the plain secret, which I inserted to the input and obtained
          the password for natas9.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          For reflection, I think it is simply a matter of encoding secrets. Encoding
          is not the most secure method of storing secrets. They are easily reversible.
          A good method for improving the security of secret storing might be to use
          a hash function. By only storing the hash of the secret, it is still possible
          to check if the secret matches by hashing the input and comparing with the
          hashed secret. However, by the nature of hashes, they are not reversible.
        </p>
      </section>
      <SpoilerKey>
        {`W0mMhUcRRnG8dcghE4qvk3JA9lGt8nDl`}
      </SpoilerKey>
      <PageNav link1='natas7' link2='natas9' />
    </div>
  )

}
export default natas8