import BlogImage from "../../components/elements/BlogImage/BlogImage"
import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const natas3 = () => {
  return (
    <div>
      <h1>Natas 3</h1>
      <section>
        <h2>Experience</h2>
        <p>
          Opening the developer tools, the page actually looked quite clean. There is
          nothing obvious except a snarky cheeky remark about how even Google
          can&apos; find it. I had a look around the file structure and there was nothing there as well.
        </p>
        <BlogImage
          alt="The html page showing nothing much except a comment about how not even Google will find any information leak"
          src="/images/natas3-1.png"
        />
        <p>
          Without much luck, I tried using that clue, of not being able to be seen by Google, and searched
          &quot;programming how to hide sometthing in website from google&quot;.
          I found the following article {' '}
          <a href='https://www.searchenginejournal.com/google-explains-how-to-hide-a-website-from-search-results/428341/'>
            How to Hide a Website from Search Result
          </a> which presented several ideas. The first method is to use a password, I don&apos;t
          see any links which required a password in the page, so it can&apos;t be that one. The second method
          mention blocking it from web crawlers by adding a robots.txt. So I appended robots.txt
          to the web address, and voila, was greeted with the text:
        </p>
      </section>
      <CodeBlock language='s'>
        {`User-agent: *\nDisallow: /s3cr3t/`}
      </CodeBlock>
      <p>
        So I appended this to the root address, and I found it to be a directory path with a users.txt which
        had the password within it.
      </p>
      <section>
        <h2>Research on robots.txt</h2>
        <p>
          What is robots.txt? According to{' '}
          <a href='https://developers.google.com/search/docs/advanced/robots/intro'>Google Search Central</a>
          {' '}robots.txt tells web crawlers what website urls it is allowed to access. It is actually not
          as Google-proof as the comment stated it was. As Google Search Central state:{' '}
          <q>it is not a mechanism for keeping a web page out of Google.</q> The main problem
          is that while it tell webcrawlers of prohibited pages in a website, if the pages itself are linked
          from other websites, it is still possible for the page to be indexed by web crawlers.
          Google Search Central then points out to use{' '}
          <a href='https://developers.google.com/search/docs/advanced/crawling/block-indexing'>noindex</a>.
        </p>
        <p>
          So what about noindex? As described on the site, noindex is a meta data which you can include
          in a meta tag of a document or on a HTML request header. When this is read by web crawlers,
          it informs them to not index the page. Would that have made the webpage unaccessible? Nope, none of these would
          defend against malicious web crawlers.
        </p>
        <p>
          While robots.txt is said to inform web crawlers of what urls it can access, this action still
          depends on the web crawler itself. A malicious web crawler could actually simply ignore the robots.txt
          and the noindex. So these are mainly used for <em>Search Engine Optimization</em> (SEO), not for
          security purposes.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          Overall, the challenge just informs us of features that may at first seem like security
          features, but which is in fact not. As website development is a massive field of study,
          there are bound to be time where we would search how to do certain things. This challenge
          has taught me to be extra careful at such times. In a rush, I may have not realised
          that robots.txt was not supposed to secure against malicious web crawlers. The first line of information
          about it on Google Search Central itself mention that it <strong>is</strong> used to
          tell web crawlers which urls it can access. The wording is quite vague and people could
          be misled if they did not read further on the page.
        </p>
        <p>
          In general, I suppose, this encourages software developers to always read the documentations
          first. Also, as contributing software developer ourselves, we should be writing clearer
          documentations about the proper use of our technology and any warnings people should know.
          Doing so would help others in the community to create more secure programs. Another interesting thought
          is that, as developers, we should always checked if what we have implemented actually does
          what we intended it to do. By simply, adding robots.txt to the url, the developer could have
          easily notice the vulnerability.
        </p>
      </section>
      <SpoilerKey>
        {`Z9tkRkWmpt9Qr7XrR5jWRkgOU901swEZ`}
      </SpoilerKey>
      <PageNav link1='natas2' link2='natas4' />
    </div>
  )
}
export default natas3