import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas0 = () => {
  return (
    <div>
      <h1>Natas 0</h1>
      <Keyword>
        <Tag>developer-tools</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          This level was quite simple, I used the developer tools (right click + inspect)
          and found a password stored as a comment.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          I supposed this exercise reminds
          website developers that unlike other programs software engineers develop, the contents
          of webpages are <strong>meant</strong> to be read and hence much more
          accessible. Though comments are not rendered directly
          by web browsers, the source of the page is still exposed.
        </p>
      </section>
      <SpoilerKey>
        {`gtVrDuiDfck831PqWsLEZy5gyDz1clto`}
      </SpoilerKey>


      <PageNav link1='/natas' link2='/natas/natas1' />
    </div>
  )
}
export default natas0