import Head from "next/head"
import NatasIndexList from "../../components/elements/IndexList/NatasIndexList";
import MainTitle from "../../components/elements/MainTitle/MainTitle";
import PageNav from "../../components/elements/PageNav/PageNav";

const natas = () => {
  return (
    <>
      <Head>
        <title>Natas</title>
      </Head>
      <MainTitle>Natas</MainTitle>
      <p>
        As stated by the description on the OverTheWire page,
        natas revolves around serverside web security. That is,
        the server which websites are hosted on. Many of these vulnerabilities
        involve features popularly implemented on websites. Beginner
        website developers will find this very useful to keep in mind
        so that they will be able to develop safer websites. These
        common features may include, taking user input to search in
        server directory, uploading files, searching for entries
        in the website, etc.
      </p>
      <h2>List of levels</h2>
      <NatasIndexList />
      <PageNav link1='' link2='natas/natas0'/>
    </>
      
  )
}
export default natas