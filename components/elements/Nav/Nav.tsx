import Link from 'next/link'
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navItems}>
        <li className={styles.navLink}>
          <Link href='/'><a>Home</a></Link>
        </li>
        <li className={styles.navLink}>
          <Link href='/bandit'><a>Bandit</a></Link>
        </li>
        <li className={styles.navLink}>
          <Link href='/natas'><a>Natas</a></Link>
        </li>
        <li className={styles.navLink}>
          <Link href='/leviathan'><a>Leviathan</a></Link>
        </li>
        <li className={styles.navLink}>
          <Link href='/narnia'><a>Narnia</a></Link>
        </li>
        <li className={styles.navLink}>
          <Link href='/cipher'><a>Cipher</a></Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav