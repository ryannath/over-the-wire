import styles from './Tag.module.scss'

const Tag = ({children, ...props}) => {
  return (
    <span className={styles.tag} {...props}>
      {children}
    </span>
  )
}
export default Tag