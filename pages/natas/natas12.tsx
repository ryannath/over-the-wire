import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const natas12 = () => {
  return (
    <div>
      <h1>Natas 12</h1>
      <p>
        First impression, nothing really seem out of the ordinary in the
        source file. No execution of shell commands, no obvious password
        variable to obtain, code seems to do what it does, random name
        generation does not seem all that useful. So, it led me to think
        that we are meant to upload something which will allow us to
        obtain the password.
        https://www.hacksplaining.com/exercises/file-upload#/start
      </p>
      <SpoilerKey>
        {`jmLTY0qiPZBbaKc9341cqPQZBJv7MQbY`}
      </SpoilerKey>
      <PageNav link1='natas11' link2='natas13' />
    </div>
  )
}
export default natas12