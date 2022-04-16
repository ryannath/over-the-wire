import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import BanditIndexList from '../components/elements/IndexList/BanditIndexList'
import NarniaIndexList from '../components/elements/IndexList/NarniaIndexList'
import LeviathanIndexList from '../components/elements/IndexList/LeviathanIndexList'
import NatasIndexList from '../components/elements/IndexList/NatasIndexList'
import MainTitle from '../components/elements/MainTitle/MainTitle'
import styles from '../styles/Home.module.css'
import style from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Over The Wire Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainTitle>Welcome to Security Explored</MainTitle>
        <div className={style.sectionContainer}>
          <h2>What is Security Explored?</h2>
          <p>
            As the name suggests, Security Explored is an exploration
            of the field of security engineering, primarily the type of vulnerabilities
            attackers can use to hack computer softwares. This exploration is done through
            attempting several capture the flag challenges hosted by{' '}
            <a href='https://overthewire.org/wargames/'>OverTheWire</a> . Throughout these
            wargames, new concepts are introduced and researched, allowing for a broad
            range of exposure to the multitude of ways attackers may exploit a system.
          </p>
        </div>
        <h2>List of Capture the Flags</h2>
        <ul className={style.List}>
          <li>
            <Link href='/bandit'><a className={style.ctfTitle}>Bandit</a></Link>
            <div>
              <BanditIndexList />
            </div>
          </li>
          <li>
            <Link href='/natas'><a className={style.ctfTitle}>Natas</a></Link>
            <div>
              <NatasIndexList />
            </div>
          </li>
          <li>
            <Link href='/leviathan'><a className={style.ctfTitle}>Leviathan</a></Link>
            <div>
              <LeviathanIndexList />
            </div>
          </li>
          <li>
            <Link href='/narnia'><a className={style.ctfTitle}>Narnia</a></Link>
            <div>
              <NarniaIndexList />
            </div>
          </li>
        </ul>
        <div style={{marginBottom: '10rem', borderTop: '1px solid black', marginTop: '2rem'}}>
          <h2>Cipher</h2>
          <Link href='/cipher'>Cipher page</Link>
          
        </div>
      </main>
    </div >
  )
}

export default Home
