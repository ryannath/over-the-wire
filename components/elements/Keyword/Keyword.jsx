import styles from './Keyword.module.scss'

const Keyword = ({ children }) => {
  return (
    <div className={styles.keyword}>
      <p className={styles.keywordHead}>Keywords: </p>
      {children}
    </div>
  )
}
export default Keyword