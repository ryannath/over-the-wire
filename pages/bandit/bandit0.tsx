import type { NextPage } from 'next'
import Head from 'next/head'
import PageNav from '../../components/elements/PageNav/PageNav'
import styles from '../../styles/Home.module.css'
import Tag from '../../components/elements/Tag/Tag'
import Keyword from '../../components/elements/Keyword/Keyword'

const level0: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bandit level 0</title>
      </Head>
      <div className={styles.container}>
        <h1>Level 0</h1>
        <Keyword>
          <Tag>ssh</Tag>
        </Keyword>
        <h2>Experience</h2>
        <p>
          In this beginning challenge, it asks us to connect to the <em>Over The Wire</em> (OTW) server
          using SSH. It may be surprising but I have actually never used
          SSH previously. I have used SSH key for the purpose of Git, however, I&apos;ve never really
          delve into it. So what is SSH and how do we login to the OTW server? Read my research in the
          SSH background subheading.
        </p>
        <p>
          With a solid foundation on SSH, I began researching how to connect to the server using ssh.
          Reading the VS Code guide on using SSH, I found that we should use the following
          syntax: <code>ssh user@hostname</code>. VS Code is supposed to support SSH through its GUI, but
          I wasn&apos;t able to use it, but I am quite comfortable with just using the command line.
          Then for the port I found a <a href='https://askubuntu.com/questions/264046/how-to-ssh-on-a-port-other-than-22'>StackExchange answer</a>
          which informed me to use the <code>-p</code> flag to indicate the port of the server I wish to connect.
          With that, I was able to obtain the password for the next level.
        </p>

        <h2>Research</h2>
        <p>
          SSH (Secure Shell) is a protocol for secure remote login to a computer. It uses encryption to
          protect communicated data and its integrity. It provides alternative to other login protocols
          such as telnet or file transfer system such as FTP. It is used to conduct file transfer and
          issue remote commands to the server.
        </p>
        <p>
          As security engineers it is worth taking a look at what authentication and
          encryption is used to make SSH secure. For authentication, the most commonly used methods
          were passwords and public key authentication. The usage of public key authentication
          began from the idea of allowing automation in communication. These authentication keys are known
          as SSH keys. SSH keys are asymmetric, it comes in a pair of public and private keys. As expected,
          this system involves the user holding a pair of public and private keys, the server would
          use the user&apos;s public key to encrypt data and the user would use their private key to decrypt it.
          For servers, this involves copying the public keys of authorised users to a file.
        </p>
        <p>
          In terms of potential vulnerabilities, the largest vulnerability seem to come from the handling of
          user&apos;s private keys. <a href='https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-3_Meli_paper.pdf'>A paper</a> has estimated that thousands of git repositories leaked secrets every day including SSH keys. It is stated that for user-based functionalities, the private keys are generally
          protected through some passphrase, however this is not the case for automated systems wherein the <a href='https://www.ssh.com/academy/ssh/protocol'>ssh website</a>
          {' '}states that <q>careful planning and key management practises need to be excercised to remain secure</q>.
        </p>
        <p>
          Another potential vulnerability is the man-in-the-middle attack which involves a third party pretending to be the
          trusted party in the communication by intercepting messages. This attack may occur during the process of sharing
          public keys. The attacker would intercept the message containing the public key of the trusted party and then
          in its place send his public key. When the user would like to send a message to the trusted party, they would
          mistakenly use the third party&apos;s public key and if the attacker intercepts this, he would be able to
          read the content of the message. It appears that in the <a href='https://www.ssh.com/academy/attack/man-in-the-middle'>SSH guide to man-in-the-middle attack</a> several methods of preventing this attack
          is implemented depending on the implementation of the SSH system. However, these are not fullproof,
          especially interesting is the possibiliity of generating fake trusted certificates to bypass security
          measures, security certificate might be another interesting topic.
        </p>
        <p>
          Besides vulnerabilities in the keys, previous versions of the SSH protocol has been attacked
          in other ways. <a href='https://www.venafi.com/education-center/ssh/security-and-vulnerabilities#:~:text=In%201998%2C%20a%20vulnerability%20was,introduced%20to%20fix%20this%20flaw.'>Venafi</a>
          {' '}specifically highlights how the first version of SSH was vulnerable to insertion attack and 
          integer overflow attacks.
        </p>
        <h2>Reflection</h2>
        <p>
          The main thoughts I had after the completion of this level, especially the research to find what
          SSH specifically was, is that, there are so many protocols and technology that is used in software
          development. Not in a way that overwhelms you, more so in that there are so many great ideas out there.
          One way we can become better software developer is to learn about these methodology others have
          already researched and implemented. Moreover, it also brings to light potential vulnerabilities that
          we ourselves may be writing.
        </p>
      </div>
      <PageNav link1='/bandit' link2='/natas'/>
    </div>
  )
}
export default level0