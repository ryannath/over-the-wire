import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from '../../components/elements/PageNav/PageNav'
import SpoilerKey from '../../components/elements/SpoilerKey/SpoilerKey'

const natas8 = () => {
  return (
    <div>
      <p>
        Looking straight to the source code, I knew the key was in the
        following lines:
      </p>
      <CodeBlock language='php'>
        {`$encodedSecret = "3d3d516343746d4d6d6c315669563362";
        function encodeSecret($secret) {
          return bin2hex(strrev(base64_encode($secret)));
        }`}
      </CodeBlock>
      <p>
        Using an <a href='https://sandbox.onlinephpfunctions.com/'>online php editor</a> I basically
        reversed the order of the encoding like so:        
      </p>
      <CodeBlock language='php'>
        {`$encodedSecret = "3d3d516343746d4d6d6c315669563362";

        $decodedSecret = base64_decode(strrev(hex2bin($encodedSecret)));
        print($decodedSecret);`}
      </CodeBlock>
      <SpoilerKey>
        {`W0mMhUcRRnG8dcghE4qvk3JA9lGt8nDl`}
      </SpoilerKey>
      <PageNav link1='natas7' link2='natas9' />
    </div>
  )
  
}
export default natas8