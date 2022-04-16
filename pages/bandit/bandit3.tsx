import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const bandit3 = () => {
  return (
    <div>
      <h1>Bandit 3</h1>
      <section>
        <h2>Experience</h2>
        <p>
          In this one, we are greeted with a directory named &quot;inhere&quot;.
          When you move to into that directory however, it appears empty if
          you simply used <code>ls</code>.
        </p>
        <p>
          This level was about hidden files. Files with a dot prefix is generally
          known as a hidden file and does not normally appear unless specified to
          be shown. This case we can use <code>ls -A</code> to show a file
          named &quot;.hidden&quot;.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          I suppose, the main takeaway here is to first, not rely on making
          files hidden. Because, hidden are not hidden for purposes of security.
          The purpose of hidden files are to make a directory cleaner, normally,
          hidden files are not for users to use.
        </p>
        <p>
          Also learnt about other ways of using <code>ls</code>, such as the flags{' '}
          <code>-l</code> which would show more information about the files, most
          notably the permissions, size and date. The lowercase <code>-a</code>{' '}
          is also different to <code>-A</code>, the lowercase one shows other
          special files such as the &quot;current directory&quot; file and the &quot;above directory&quot;
          file that is the double dot. These are for the purpose of pathname&apos;s
          implementation.
        </p>
      </section>

      <SpoilerKey>{'pIwrPrtPN36QITSp3EQaw936yaFoFgAB'}</SpoilerKey>
      <PageNav link1='/bandit/bandit2' link2='/bandit/bandit4' />
    </div>
  )
}
export default bandit3