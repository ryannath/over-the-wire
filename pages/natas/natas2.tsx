import PageNav from "../../components/elements/PageNav/PageNav"
import genericStyles from '/styles/generic.module.scss'

const natas2 = () => {
  return (
    <div>
      <h1>Natas 2</h1>
      <section>
        <h2>Experience</h2>
        <p>
          I noticed a picture of a single pixel, first I thought,
          perhaps it is hidden in this dubious one pixel picture.
          I tried inspecting its contents using vim and xxd without
          much luck. Perhaps the hint that there&apos;s nothing in this
          page is true.
        </p>
        <p>
          Then I thought, this pixel picture is an indicator that there might
          be other files in the web server, and potentially one with the
          flag we are looking for. I attempted to inspect the list of files
          on the developer tools, however the developer tools didn&apos;t show
          any other files worth noting, see the picture below.
        </p>
        <div className={genericStyles.imgContainer}>
          <img src='/natas2.png' alt='Image showing file hierarchy shown by developer tools' width='200'/>
        </div>
        <p>
          I did however notice that the pixel photo was located in the
          &quot;files&quot; directory. So I tried appending <code>/files</code> to the
          url, and there it was, <code>users.txt</code>. I simply clicked this file
          and it displayed the password for the next level.
        </p>
        <div className={genericStyles.imgContainer}>
          <img src='/natas2-2.png' alt='The directory page shown after /files was appended, listed as
            one of the file is users.txt' width={320}/>
        </div>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This exercise was a little bit harder than before as I had no previous
          knowledge on what I am supposed to do. The website itself seems very clean and
          even the folder hierarchy in the developer tools is clean. I&apos;ve now
          learnt that while files that are not linked to by the website is not shown
          on the developer tools, it is still possible to access them. This seems
          particularly dangerous. If a developer were simply checking if any
          potentially sensitive files were put in this public directory, the developer
          tools won&apos;t show it.
        </p>
        <p>
          The level also introduced that webpages may comprised of files and directories
          as well. So not only is something written in the html document is public,
          every other client side files are also publically available.
        </p>
      </section>


      <PageNav link1='natas1' link2='natas3' />
    </div>
  )
}
export default natas2