import Head from "next/head"
import NarniaIndexList from "../../components/elements/IndexList/NarniaIndexList"
import MainTitle from "../../components/elements/MainTitle/MainTitle"
import PageNav from "../../components/elements/PageNav/PageNav"

const index = () => {
  return (
    <div>
      <Head>
        <title>Narnia</title>
      </Head>
      <MainTitle>Narnia</MainTitle>
      <h2>List of levels</h2>
      <NarniaIndexList />
      <PageNav link1='/leviathan/leviathan6' link2='narnia/narnia0'/>
    </div>
  )
}
export default index