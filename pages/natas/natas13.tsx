import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas13 = () => {
  return (
    <div>
      <h1>Natas 13</h1>
      <Keyword>
        <Tag>file-upload</Tag>
        <Tag>documentation</Tag>
        <Tag>magic-number</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          This is quite similar to the previous level, with the main
          difference being that it&apos;s supposed to check what type of
          file has been uploaded. So the main question I asked was, how
          would it know?
        </p>
        <CodeBlock language="php">
          {`} else if (! exif_imagetype($_FILES['uploadedfile']['tmp_name'])) {
        echo "File is not an image";`}
        </CodeBlock>
        <p>
          the above code is a snippet of the source code available and it shows
          the usage of <code>exif_imagetypes</code>. Reading the <a href="https://www.php.net/manual/en/function.exif-imagetype.php">php manual</a> regarding this function, it appears
          to simply check the first couple of bytes, that is the <em>magic number</em> of the file. Magic numbers are essentially unique signatures that indicates what type a file is. This
          is not meant to be used for thorough checking of the actual type of file. This mirrors how
          may mistakenly think a <code>robots.txt</code> will prevent web crawlers from
          accessing a page, when in reality, they are there as standards which malicious attackers
          do not need to follow.
        </p>
        <p>
          Simple enough, I used the same file as before, however I added the appropriate .jpg
          magic numbers to the start of the file, that is <code>FF D8 FF</code>. To do so, I used the program <a href="https://mh-nexus.de/en/hxd/">HxD</a> which allowed me to modify the
          code&apos;s hex representation. To add bytes to the file using HxD, we need to be on
          insert mode, otherwise, it will only rewrite existing bytes.
        </p>
        <p>
          The rest of the procedure is the same as with Natas 12, select the php file
          to upload, change the extension using developer tools, upload, then go to
          the url.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This is perhaps a common mistake new developers may employ to prevent full unrestricted
          file uploads. One could imagine that without a good knowledge of how <code>exif_imagetypes</code> actually checks the file type, a developer
          may think it is an already implemented function that can check thoroughly
          the type of file uploaded. When instead, it relies on a easy to replicate
          meta data header in the form of some magic numbers. This again emphasise
          the importance of knowing how functions we call work especially when handling
          potentially security risking areas of a program. The documentation
          would have been clear that it does not thoroughly check the whole file, only
          the first couple of bytes.
        </p>
        <p>
          I could also take this as an indicator that teaching common
          vulnerabilities to junior developers should be a major priority especially
          if they are writing programs that interface with users. An important distionction
          must also be made about what type of things are standard but not necessarily
          true, e.g. that the magic number will match the actual type of the file.
        </p>
      </section>
      <SpoilerKey>
        {`Lg96M10TdfaPyVBkJdjymbllQ5L6qdl1`}
      </SpoilerKey>
      <PageNav link1='natas12' link2='natas14' />
    </div>
  )
}
export default natas13