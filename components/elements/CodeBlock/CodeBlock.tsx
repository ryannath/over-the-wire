import { ReactNode } from "react"
import styles from './CodeBlock.module.scss'
import { Prism } from 'react-syntax-highlighter'
import type { SyntaxHighlighterProps } from "react-syntax-highlighter"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock = (
  {children, language}:
  {children: ReactNode, language: SyntaxHighlighterProps['language']}
  ) => {
  return (
    <div className={styles.CodeBlock}>
      <Prism language={language} style={dracula}>
        {children}
      </Prism>
    </div>
  )
}
export default CodeBlock