import Head from "next/head"
import LeviathanIndexList from "../../components/elements/IndexList/LeviathanIndexList";
import MainTitle from "../../components/elements/MainTitle/MainTitle";
import PageNav from "../../components/elements/PageNav/PageNav";

const leviathan = () => {
  return (
    <>
      <Head>
        <title>Leviathan</title>
      </Head>
      <MainTitle>Leviathan</MainTitle>
      <p>
      </p>
      <h2>List of levels</h2>
      <LeviathanIndexList />
      <PageNav link1='' link2='leviathan/leviathan0'/>
    </>
      
  )
}
export default leviathan