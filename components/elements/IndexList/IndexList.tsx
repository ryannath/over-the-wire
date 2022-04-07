import Link from "next/link";
import styles from './IndexList.module.scss'

const IndexList = ({path, text, range}: {path:string, text: string, range:number}) => {
  let arr: Array<string> = [];
  for (let num: number = 0; num < range; num++) {
    arr[num] = text + ' ' + num;
  }

  return (
    <ol className={styles.list}>
      {
        arr.map((indexName, indexNum) => {
          return (
            <li key={indexNum} className={styles.listItem}>
              <Link href={path+text.toLowerCase()+indexNum}>
                <a>{indexName}</a>
              </Link>
            </li>
          )
        })
      }
  </ol>
  )

};

export default IndexList;