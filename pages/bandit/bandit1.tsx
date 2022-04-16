import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const bandit1 = () => {
  return (
    <div>
      <h1>Bandit 1</h1>
      <section>
        <h2>Experience</h2>
        <p>
          So, as a common first step for these challenges, I used <code>ls</code>
          to just see what files exist. Interestingly, this time we have a file
          with a dash (&quot;-&quot;) for a name. I thought it was obvious that the
          password must be there, so I attempted to use the <code>cat</code> command.
          But, it ended up echoing back whatever I type in subsequently. I found
          out that dash is often used as convention for stdin/stdout.
        </p>
        <p>
          After searching, a <a href='https://unix.stackexchange.com/questions/16357/usage-of-dash-in-place-of-a-filename'>StackExchange answer</a> then taught me,
          that we simply had to write a fuller path to distinguish it, like
          so <code>cat ./-</code>.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          Not much to say, this level was really about syntax, I learnt that dash
          could be a special character which stands for stdin.
          But I supposed, it&apos;s really more about introducing that some functions
          may have special arguments and also how users could potentially escape
          these sepcial meaningss. This could potentially be useful.
        </p>
      </section>
      <SpoilerKey>
        {`CV1DtqXWVFXTvM2F0k09SHz0YwRINYA9`}
      </SpoilerKey>
      <PageNav link1='/bandit/bandit0' link2='/bandit/bandit2'/>
    </div>
  )
}
export default bandit1