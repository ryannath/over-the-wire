import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas1 = () => {
  return (
    <div>
      <h1>Natas 1</h1>
      <Keyword>
        <Tag>developer-tools</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          To get started, I quickly attempted to view the page source using the
          developer tools again. However, in this page, we are prevented from
          doing so. I presume this was done using Javascript. Unfortunately
          this security is not enough to prevent us from viewing the
          developer tools. Web browsers normally have a shortkey to open developer
          tools. I simply used F12 and the developer tools pops out for the page.
          Similar to before, the key was stored as a comment.
        </p>
        <p>
          Another thing we could have done is disable JavaScript on the web browser.
          This prevents any scripts from running and hence prevent the alert
          window when we right click. Why have I pointed this out when the solution
          is clear, you can use F12? I shall mention the reason in my reflection below.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          Firstly, I&apos;d like to mention that while this and natas0 seem like
          a very stupid mistake to make, and indeed it is, these may occur by accidents.
          While developing, may simply put sensitive information in the software
          for the purpose of accessing it quickly. Another case that similarly exposes
          sensitive information is to use <code>git add -A</code>, which adds all
          changed files, this often lead to pushing files containing sensitive information.
          This teaches us to be more wary when handling sensitive information.
        </p>
        <p>
          Secondly, this easy activity demonstrates one of the main problem with
          attempting to <em>blacklist</em> known methods of attacks. Blacklists
          require constant updates for every single new attack and it takes a
          reactive approach rather than proactive. It often distracts developer
          from actually fixing the root cause of the problem, which in this
          case is having sensitive information in the html document.
        </p>
        <p>
          Now lastly, the reason I mentioned the ability to disable Javascript on
          websites is because of what it implies. Unlike other softwares we develop,
          users have control over whether they want to allow the program to run
          correctly or not. This means that if we perform some type of checking on
          the client side e.g. input checking, using Javascript, it is completely
          possible for the user to bypass that checking by simply disabling
          Javascript.
        </p>
      </section>
      <SpoilerKey>
        {`ZluruAthQk7Q2MqmDeTiUij2ZvWy2mBi`}
      </SpoilerKey>
      <PageNav link1='/natas/natas0' link2='/natas/natas2'/>
    </div>
  )
}
export default natas1