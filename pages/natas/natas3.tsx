const natas3 = () => {
  return (
    <div>
      <p>
        I couldn't find anything in this webpage, the document
        looks quite clean except a comment about how even Google
        can't find it. So I searched "how to hide something in website programming from google"
        and the <a href='https://www.searchenginejournal.com/google-explains-how-to-hide-a-website-from-search-results/428341/'>first result</a> gave me several ways. The first method is to use a password, I don't
        see any links which requires password in the page, so it can't be that one. The second method
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
    </div>
  )
}
export default natas3