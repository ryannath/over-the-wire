import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword";
import PageNav from '../../components/elements/PageNav/PageNav'
import SpoilerKey from '../../components/elements/SpoilerKey/SpoilerKey'
import Tag from "../../components/elements/Tag/Tag";

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
      <Keyword>
        <Tag>php</Tag>
        <Tag>encoding</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          A similar screen greets us like in natas6, asking for an input.
          Unlike natas6, when we look at the source code, the secret is available to us
          but appears encoded.
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
          seem to do with no luck. So at the end, I thought, why not just use php.
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
          is not the most secure method of storing secrets. In this case, it was easily
          reversible. To increase the security, it is possible to encrypt using a secret
          password that is not shared. As such, unauthorised users such as myself will
          not be able to use the same steps to reverse the encoding as I would not
          have the secret key.
        </p>
        <p>
          Another good method might be to use hashes especially for simple comparisons
          such as in this case. Result of hashes are mathematically irreversible and it is
          difficult to guess what values would map to the hash because of the avalanche
          effect of good hashes. But even with this, it is suggested to use obscure secrets,
          i.e. not common dictionary words as people have constructed tables of common words and
          what hash they map to.
        </p>
      </section>
      <SpoilerKey>
        {`W0mMhUcRRnG8dcghE4qvk3JA9lGt8nDl`}
      </SpoilerKey>
      <PageNav link1='/natas/natas7' link2='/natas/natas9' />
    </div>
  )

}
export default natas8