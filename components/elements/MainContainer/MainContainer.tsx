import { ReactNode } from 'react'
import styles from './MainContainer.module.scss'

const MainContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className={styles.mainContainer}>
      {children}
    </div>
  )
}
export default MainContainer