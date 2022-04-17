import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const leviathan6 = () => {
  return (
    <div>
      <CodeBlock language="shell">
        {'for i in {1..9999}; do ~/leviathan6 $i; done'}
      </CodeBlock>
      <SpoilerKey>
        {'ahy7MaeBo9'}
      </SpoilerKey>
      <PageNav link1='/leviathan/leviathan5' link2='/narnia' />
    </div>
  )
}
export default leviathan6