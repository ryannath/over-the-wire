import PageNav from "../../components/elements/PageNav/PageNav"

const natas3 = () => {
  return (
    <div>
      <h1>Natas 3</h1>
      <p>
        T
      </p>
      <p>
        I couldn&apos;t find anything in this webpage, the document
        looks quite clean except a comment about how even Google
        can&apos;t find it. So I searched &quot;how to hide something in website programming from google&quot;
        and the <a href='https://www.searchenginejournal.com/google-explains-how-to-hide-a-website-from-search-results/428341/'>first result</a> gave me several ways. The first method is to use a password, I don&apos;t
        see any links which requires password in the page, so it can&apos;t be that one. The second method
        mention blocking it from web crawlers by adding a robots.txt. So I appended robots.txt
        to the web address, and voila, was greeted with the text:
      </p>
      <pre>
        User-agent: *
        Disallow: /s3cr3t/
      </pre>
      <p>
        So I appended this to the root address, and I found it to be a directory path with a users.txt and
        in it the password.
      </p>
      <PageNav link1='natas2' link2='natas4'/>
    </div>
  )
}
export default natas3