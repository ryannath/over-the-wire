import Head from "next/head"
import Link from "next/link"
import IndexList from "../../components/elements/IndexList/IndexList"
import MainTitle from "../../components/elements/MainTitle/MainTitle";

const numPages = 1;

const bandit = () => {
  return (
    <>
    <Head>
      <title>Bandit</title>
    </Head>
      <MainTitle>Bandit</MainTitle>
      <IndexList
        path='/bandit/'
        text='bandit'
        range={numPages}
      />
    </>
  );
}
export default bandit