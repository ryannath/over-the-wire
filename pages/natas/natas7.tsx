import PageNav from "../../components/elements/PageNav/PageNav"

const natas7 = () => {
  return (
    <div>
      <h1>Natas 7</h1>
      <p>
        In this level, we are greeted with two links, one labeled
        &quot;Home&quot; and one labeled &quot;About&quot;. When the links
        are linked it changes the url but not as we have previously seen.
        For example, when the About link is clicked, it appends{' '}
        <code>index.php?page=home</code>. This appears to
        reference a php file followed by a query of <code>page=home</code>.
      </p>
      <p>
        What is php and what role does it play in website servers? The wikipedia
        entry for php states that it is a
        <q>
          general-purpose scripting language geared
          towards web development.
        </q>
        So, in other words, it is just a scripting language which is used in the
        server. After researching the basic syntax of php however, I discovered that
        one can basically write the html file in a php file. The php script itself
        is written between the typical html tags using a special angular bracket notation
        with a question mark. With this knowledge the url makes more sense, it
        is indeed accessing a php file, and that php file has the html document and
        I deduce, this php changes the content of the document based on the query.
        Now the main problem is to find the correct query.
      </p>
      <p>
        If the page is inspected, there is actually a comment giving us a hint
        as to where the password may be. The hint reads:
      </p>
      <pre>
        <code>{'<!-- hint: password for webuser natas8 is in /etc/natas_webpass/natas8 -->'}</code>
      </pre>
      <p>
        Inputting this path to the query, gave the key for natas8.
      </p>
      <p>
        I reflected on what I&apos;ve learnt from this exercise. I guess, I learnt a little bit about
        php, but how is this different from appending the url with the path itself? Well, I realised
        that the difference is that a general-purpose script was being run, so I searched up,
        whether this make it possible for me to access any files from the server remotely.
        A <a href='https://brightsec.com/blog/file-inclusion-vulnerabilities/'>blog from Bright.com</a>{' '}
        discusses about something called the <em>File Inclusion Vulnerability</em>. File inclusion
        vulnerability occurs when user inputs are not properly validated and inserted into a
        file inclusion command in a scripting language. There are two potential types of file inclusion attack,
        <em>Local File Inclusion</em> (LFI) and <em>Remote File Inclusion</em>(RFI)
      </p>
      <p>
        LFI pertains to using local files in the server, allowing access to them or
        even execution. RFI on the other hand involves letting the server download a
        remote file and executing it. These are both dangerous and may lead to remote
        code execution and hence letting attackers create web shells. Prevention
        are similar to how we may prevent other mixing-input-in-control-sequence attacks,
        that is sanitising the input and validating it. Ensure that the program has limited
        access as well, don&apos;t use unneeded permissions when running it.
      </p>
      <p>
        <a href='https://en.wikipedia.org/wiki/File_inclusion_vulnerability'>Wikipedia</a> has an entry on file inclusion vulnerability which includes example
        vulnerable code.
      </p>
      <PageNav link1='natas6' link2='natas8' />
    </div>
  )
}
export default natas7