import Head from "next/head"
import Link from "next/link"
import IndexList from "../../components/elements/IndexList/IndexList";
import MainTitle from "../../components/elements/MainTitle/MainTitle";

const natas = () => {
  return (
    <>
      <Head>
        <title>Natas</title>
      </Head>
      <MainTitle>
        Natas
      </MainTitle>
      <IndexList path='/natas/' text='natas' range={6}/>
    </>
      
  )
}
export default natas