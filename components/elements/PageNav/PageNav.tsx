import Link from "next/link"
import styles from './PageNav.module.scss'

const PageNav = ({link1, link2}: {link1: string, link2: string}) => {
  return (
    <div className={styles.pageNav}>
      <div >
        {link1? <Link href={link1}><a className={styles.navButton}>◀</a></Link> : ''}
      </div>
      <div>
        {link2? <Link href={link2}><a className={styles.navButton}>▶</a></Link> : ''}
      </div>
    </div>
  )
}
export default PageNav