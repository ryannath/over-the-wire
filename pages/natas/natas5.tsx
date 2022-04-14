import BlogImage from "../../components/elements/BlogImage/BlogImage"
import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas5 = () => {
  return (
    <div>
      <h1>Natas 5</h1>
      <Keyword>
        <Tag>cookies</Tag>
        <Tag>developer-tools</Tag>
        <Tag>third-party-cookies</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          In this capture the flag, we are greeted by yet another
          puzzling statement about how we are not logged in.
        </p>
        <BlogImage
          src='/images/natas5-1.png'
          alt='Page reads "access disallowed. You are not logged in"'
        />
        <p>
          I was actually quite unsure on what to do specifically. I checked
          the page&apos;s source code to see if there were some hints again
          like last time. Unfortunately there wasn&apos; any. So I thought,
          what web related technology is used to check if we are logged in.
          By asking myself, I meant, ask Google that very question. As expected,
          there has been plenty of people who has asked the same question, one instance
          is at the popular question asking website,{' '}
          <a href='https://www.quora.com/How-do-websites-remember-you-are-logged-in'>Quora</a>.
          The answer was cookie!.
        </p>
        <BlogImage src='/images/natas5-2.png' alt='Cookie shown on the developer tools' width={400}/>
        <p>
          I found out that it is possible to see your cookie using the developer tools
          on the application tab.
          Most of the cookies seem to be quite cryptic, except one named &quot;loggedin&quot;.
          The loggedin cookie has a value of 0. So I searched up ways to make that 0 to a 1.
          Apparently, it was as simple as changing it on the developer tools and then reloading
          the site, then there it was, the password.
        </p>
        <p>
          To challenge myself, I also tried to get the cookie via Javascript. I learnt that
          you can use the following command to change that cookie. This was actually quite peculiar,
          more about it in the research section.
        </p>
        <CodeBlock language="javascript">
          {`document.cookie = 'loggin=1'`}
        </CodeBlock>
      </section>
      <section>
        <h2>Research</h2>
        <p>
          What are cookies? Cookies are just some stored data which assist websites in
          identifying who you are. The type of data which they store may vary. It really depends
          on the website you go to. But they are generally used for things like giving visitors
          a more personalised experience, remembering your past activities so you can
          get right back at where you left off, your likes and dislikes to target you
          with more relevant content, remembering credentials so you don&apos;t have to
          login everytime, or store your shopping carts. It is noticeable that, even with these
          justifications, it is a little scary how much data they may store about you.
          They can even store
          things such as the length of time you&apos;ve spent on their websites. Now
          fortunately, not everyone can read each other&apos;s cookies, the cookies
          made by one domain is limited to be read and edited by the same domain. More
          can be read about cookies on the following <a href='https://www.kaspersky.com/resource-center/definitions/cookies'>webpage by Kaspersky</a>
        </p>
        <p>
          Unfortunately, there exists another type of cookie, third party cookies. Third
          party cookies refer to cookies left not by the primary domain you are looking at.
          For examples, if you are looking at a website and that website has several ads, the
          provider of the ads may store cookies on you. This may also include other third party
          services the website uses. They should still not have access to the cookies of the
          website you&apos;re looking at, however, this could leave what is called a
          cookie trail. If the third party service exist in many websites you visit, they
          will be able to paint quite an accurate picture of who you are.
        </p>
        <p>
          Now regarding why I said it was interesting how cookies are set using Javascript is
          that although <code>document.cookie</code> appear to return a string, I couldn&apos;t
          change it like a normal string. I know strings are immutable in Javascript, but what I 
          meant was that I couldn&apos;t change what the string point towards. I had to look around
          to see how to actually change it. The syntax to change cookies is a bit weird, you
          merely let <code>document.cookie</code> equal a string which has a key and a value,
          as seen in the code i used.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This was quite an eye opening activity. As you can guess by now, I am not so much
          focused on the capture the flag task specifically, but I am also trying to learn
          the technology behind it and get a little bit more context. I started this project
          because, I did not know that much about security, so I think it is important
          to see each technology in depth.
        </p>
        <p>
          Cookies are quite interesting after learning about it, I never knew you could change
          your own cookie, albeit this will probably very very difficult considering most cookies
          seem hashed or at least encrypted. But it is definitely possible that perhaps some
          websites does not create such high quality cookies that could be easily read. I guess
          as security engineer, this might pose a risk, if we rely on cookies heavily
          to do authentication, if an attacker was able to just copy an authorised cookie, they
          could access the software and this again emphasise how harmful Cross Site Scripting (XSS)
          can be as they may get your cookies.
        </p>
        <p>
          As a user, it is definitely scary to see how much data these websites actually collect.
          It make sense for them to collect such data, but often do not contemplate too much about
          it. With a collection of cookies, one could definitely paint a realistic picture
          of who you are. In addition, third party cookies, allow them to essentially stalk
          your internet activity if you encounter their ads often.
        </p>
      </section>
      <SpoilerKey>
        {`aGoY4q2Dc6MgDq4oL4YtoKtyAg9PeHa1`}
      </SpoilerKey>
      <PageNav link1='/natas/natas4' link2='/natas/natas6' />
    </div>
  )
}
export default natas5