import styles from './SpoilerKey.module.scss'
import { Prism } from 'react-syntax-highlighter'
import type { SyntaxHighlighterProps } from "react-syntax-highlighter"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { ReactNode, useState } from 'react'


const SpoilerKey = ({ children }: { children: ReactNode }) => {
  const [hide, setHidden] = useState(false);

  return (
    <section>
      <h2>Key</h2>
      <div className={styles.codeBlock}>
        <div className={styles.spoilerToggler}>
          <button onClick={() => setHidden(!hide)}>Click to Reveal</button>
        </div>
        <div className={styles.spoilerContainer}>
          <div className={`${styles.spoiler} ${hide ? styles.show : ''}`}>
            <Prism language='' style={dracula} customStyle={{ margin: 0 }}>
              {children}
            </Prism>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SpoilerKey