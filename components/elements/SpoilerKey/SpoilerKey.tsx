import { ReactNode } from "react"
import CodeBlock from "../CodeBlock/CodeBlock"

const SpoilerKey = ({children}: {children: ReactNode}) => {
  return (
    <section>
      <h2>Key</h2>
      <CodeBlock language=''>
        {children}
      </CodeBlock>
    </section>
  )
}
export default SpoilerKey