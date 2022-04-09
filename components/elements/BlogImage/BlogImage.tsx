import styles from './BlogImage.module.scss'

const BlogImage = ({src, alt, width=600}: {src: string, alt: string, width?: number}) => {
  return (
    <div className={styles.imgContainer}>
      <img src={src} alt={alt} width={width}/>
    </div>
  )
}
export default BlogImage