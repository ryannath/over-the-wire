import Head from "next/head"
import Link from "next/link"

const bandit = () => {

  return (
    <div>
      <Head>
        <title>Bandit</title>
      </Head>
      <h1>Bandit</h1>
      <ul>
        <li>
          <Link href='/bandit/level0'>Level 0</Link>
        </li>
      </ul>
    </div>
  )
}
export default bandit