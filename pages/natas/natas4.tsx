import BlogImage from "../../components/elements/BlogImage/BlogImage"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas4 = () => {
  return (
    <div>
      <h1>Natas 4</h1>
      <Keyword>
        <Tag>http-header</Tag>
        <Tag>referrer</Tag>
        <Tag>rest-client</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          While we were able to access the website using the password found previously
          we were instantly greeted with the following comment seen in the picture below.
        </p>
        <BlogImage src='/images/natas4-1.png' alt='Message reads accessed disallowed. You
          are visiting from "" while authorizes users should come only
          from "http://natas5.labs.overthewire.org/"'/>
        <p>
          It seems that, we are supposed to access this page through the natas5 website.
          How could we achieve this if we do not have access to the natas5 website? So,
          similar to before, I looked up what seems interesting in this greeting message,
          the fact that it knows where we came from!
        </p>
        <p>
          I learnt about <em>referer</em> HTTP request header (read more in the research section)
          and then I tried to find ways to edit this header information. The answers on          StackOverflow didn&apos; quite make sense to me so I began trying things out.
        </p>
        <p>
          I went to the natas5 website to simply look around. Obviously, since I did not have
          the key to the website, I clicked on the cancel button which prompted for credentials.
          I thought this would have moved me to a different site, however, that does not
          appear to be the case. I was still on that url. So, I simply began editing the
          webpage through the developer tools, adding a link to natas4.
        </p>
        <BlogImage src='/images/natas4-2.png' alt='Picture showing an anchor tag added to the natas5 site so that it links to natas4 if clicked' />
        <p>
          As simple is that, without access to the natas5 website, natas4 seem to think
          I had come from natas5. It then displayed the password for natas5.
        </p>
      </section>
      <section>
        <h2>Research on Referer</h2>
        <p>
          Referer is a key you can put in a HTTP request header. Its
          documentation could be found on <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer'>MDN Web Docs</a>, and it essentially contain the path from which
          a request came from. In the case of links, it&apos;ll be the path of where the link
          was located in, i.e. where the user came from. However, as noted in the documentations,
          there are actually some security concerns with it, mainly that if a page
          contain things such as social media widgets or images from a third party, since they are
          requested from an external site, they would be able to access what page those requests
          are coming from. The main concern MDN highlighted was if such widgets and images are
          located on a sensitive page, such as a reset password page. MDN recommends to use
          a POST request rather than a GET requst as I deduce that a GET request would expose the
          referer header.
        </p>
        <p>
          Considering that it is a HTTP request header, I thought, what about using a REST client.
          This might be an alternative solution, I felt a little cheap not manipulating the header
          directly. Say that I fully do not have access to the website, could I simply change my
          header? The answer was surprisingly yes. So, using POSTMAN, a popular REST client, I
          set the request to GET, put the right link, then I typed in Referer as one of the key
          in the header, and the natas5 website link as the value. Note however that, to access
          the site, we had to insert a password. This is why I didn&apos;t try this method earlier.
          However, after looking at the actual header when I go to the website (I found that you
          can find this in the developer tools on the Network tab), I noticed several keys,
          specifically one called Authorization. I pasted the Authorization on the REST client
          header as well.
        </p>
        <BlogImage src='/images/natas4-3.png' alt='Inserting a Referer key on the REST client' width={700} />
        <p>
          Just like that, this method worked too.
        </p>
      </section>

      <section>
        <h2>Reflection</h2>
        <p>
          This challenge was interesting because it touches upon HTTP headers, these information
          are often neglected by beginner developers and users of the internet. I&apos;ve never
          actually inspected them closely so it was surprising that they actually store
          information such as where you came from. I suppose, it&apos;s not the most private
          information for users, but it make me question what other things are hidden in these
          headers. Well I suppose, authorization keys, as shown by my attempt at using
          a REST client. There could potentially be sensitive information that may be visible
          in the HTTP headers. As mentioned by MDN, these referer are often used for
          data analytics, it made me wonder, what other data are being obtained by websites
          when we simply use them? Since, most users would inspect the developer tools
          thoroughly, much less the network tab, it really challenged my notion of how much
          data are being collected about us on the internet.
        </p>
        <p>
          Another thing that was interesting was how easy it was to edit your header information.
          Without putting the actual password, and simply copying the authorization key, I
          was able to login from a completely different application.
        </p>
      </section>
      <SpoilerKey>
        {`iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq`}
      </SpoilerKey>
      <PageNav link1='/natas/natas3' link2='/natas/natas5' />
    </div>
  )
}
export default natas4