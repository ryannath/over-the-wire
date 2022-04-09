import Head from "next/head"
import BanditIndexList from "../../components/elements/IndexList/BanditIndexList";
import MainTitle from "../../components/elements/MainTitle/MainTitle";
import PageNav from "../../components/elements/PageNav/PageNav";


const bandit = () => {
  return (
    <>
      <Head>
        <title>Bandit</title>
      </Head>
      <MainTitle>Bandit</MainTitle>
      <p>
        While bandit is aimed at absolute beginners, there are several key concepts
        that are useful to learn for other wargames.
      </p>
      <p>
        The lower level of bandit
        teaches participants about many useful shell commands. These commands could
        then be useful when the participant wishes to interact with Unix and other
        Unix based system. For example, during <em>Natas</em>, another wargame,
        one of the vulnerability requires the user to run a shell command remotely
        to obtain the password located in the server.
      </p>
      <h2>List of levels</h2>
      <BanditIndexList />
      <PageNav link1='' link2='bandit/bandit0'/>
    </>
  );
}
export default bandit