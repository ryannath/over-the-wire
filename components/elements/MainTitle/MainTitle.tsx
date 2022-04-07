import styles from './MainTitle.module.scss'
import { ReactNode } from 'react'

const MainTitle = ({children}: {children: ReactNode}) => {
  return (
    <h1 className={styles.title}>{children}</h1>
  )
}
export default MainTitle