import BlogImage from "../../components/elements/BlogImage/BlogImage"
import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const natas12 = () => {
  return (
    <div>
      <h1>Natas 12</h1>
      <Keyword>
        <Tag>file-upload</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          For my first impression, nothing really seem out of the ordinary
          in the source file. No execution of shell commands, no obvious
          variable storing the password, it seems to do what it is supposed
          to do. So, considering that the level asks to upload a file, it
          must then be the uploading of a file that is the vulnerability.
          The question is, what could we upload to obtain the password?
        </p>
        <BlogImage src='/images/natas12-1.png' alt='The challenge page consists of a
        prompt asking for choosing a jpeg file to upload and the upload button' />
        <p>
          The tutorial by <a href="https://www.hacksplaining.com/exercises/file-upload#/start">hacksplaining</a> showed in general the process of uploading malicious
          code, essentially, if the file upload is unrestricted, we will be able
          to run the code by simply going to the url to that file.
        </p>
        <CodeBlock language="php">
          {`<?
function makeRandomPath($dir, $ext) {
    do {
    $path = $dir."/".genRandomString().".".$ext;
    } while(file_exists($path));
    return $path;
}

function makeRandomPathFromFilename($dir, $fn) {
    $ext = pathinfo($fn, PATHINFO_EXTENSION);
    return makeRandomPath($dir, $ext);
}

if(array_key_exists("filename", $_POST)) {
    $target_path = makeRandomPathFromFilename("upload", $_POST["filename"]);


        if(filesize($_FILES['uploadedfile']['tmp_name']) > 1000) {
        echo "File is too big";
    } else {
        if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path)) {
            echo "The file <a href=\"$target_path\">$target_path</a> has been uploaded";
        } else{
            echo "There was an error uploading the file, please try again!";
        }
    }
} else {
?>

<form enctype="multipart/form-data" action="index.php" method="POST">
<input type="hidden" name="MAX_FILE_SIZE" value="1000" />
<input type="hidden" name="filename" value="<? print genRandomString(); ?>.jpg" />
Choose a JPEG to upload (max 1KB):<br/>
<input name="uploadedfile" type="file" /><br />
<input type="submit" value="Upload File" />`}
        </CodeBlock>
        <p>
          The above snippet of code highlights the main parts important for us.
          We note that there is a hidden input component named <em>filename</em>
          that will get a random string followed by a jpg extension which will be
          then used by the server as the name of the uploaded file. To execute the file
          we upload, we must ensure that it keeps the original extension. But firstly
          what should the uploaded malicious code do? We simply need to obtain the
          password inside <code>/etc/natas_webpass/natas13</code>, so what we need
          is to use a shell command, specifically <code>cat</code>.
        </p>
        <CodeBlock language="php">
          {`<?php system("cat /etc/natas_webpass/natas13");?>`}
        </CodeBlock>
        <p>
          We then upload that file. Now, to go around the file extension was actually
          surprisingly simple, the &quot;hidden&quot; filename value is available
          to us through the developer tool. Therefore, we could simply change the
          value.
        </p>
        <BlogImage src='/images/natas12-2.png' alt='page source code after the filename extension
        was changed to .php' />
        <p>
          Now notice from the source code of
          the page that when filename exist, it will call the <code>makeRandomPathFromFilename</code> function.
          This will change the name of the file from the value of filename, however it keeps
          the extension of that value. The only other thing preventing an invalid image is the
          filesize. With a single line php code, this shouldn&apos;t be a problem.
          Now with everything done, we then upload the file. 
        </p>
        <BlogImage src='/images/natas12-3.png' alt='resulting page when the file is uploaded' />
        <p>
          As we see, the php file is kept, and we simply append that path to the url or
          in this case, we can simply click on the link they have conveniently given us.
          Like that we will get the password for natas13.
        </p>
      </section>
      <section>
        <h2>Research</h2>
        <p>
          Owasp has a good <a href="https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload">entry regarding unrestricted file upload</a>.
          A potential risk, I didn&apos;t think about was overwriting critical files using
          relative paths, potentially changing files such as index.php itself, this would allow the
          attacker to modify the website for everyone else, creating a phising page. File uploads is a common
          method of Cross Site Scripting attacks that effect every user who subsequently
          visit the website. But in general, with high enough authorisation, it could
          run arbitrary shell command with limitless possibility, e.g. exploring the
          file directory of the server, execute a malware, obtain user data, etc.
        </p>
        <p>
          The same Owasp webpage also lists several potential file upload
          vulnerability practices. An example was to
          check the file extension, this could be vulnerable to perhaps double extensions.
          Or, there could be a flaw in the function replacing the dangerous extension. Or,
          an attacker could use neutral characters after a filename, so that it doesn&apos;t
          end in the forbidden extension.
        </p>
        <p>
          There are several potential solutions that could be use to make file uploading
          functionality more secure and are better used in combination. One prevention method
          could be to not allow users direct access to the filename and extension of the file
          when it will be saved on the server, so in this scenario, it should have changed
          the extension during the uploading process, rather than using a hidden form input element.
          Limiting the filename was also listed as this would make it more difficult to
          fool name checking functions. Removing control characters in filename, including
          its unicode representation. Restrict permission on the directory
          that stores the uploaded files.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This was a really fun challenge and a good introduction to how file
          uploads could be used by attackers. Uploading files could be dangerous
          as it will store user input inside the server which may be executable.
          This could then be used in file inclusion attacks we have seen previously,
          XSS, or we could simply run any commands we would like. There isn&apos;t
          really a limit once we are able to execute arbitrary commands on a computer.
        </p>
        <p>
          Therefore, this level really reminded me to be careful when not only taking user
          inputs in form of text but also in form of files themselves. This functionality
          is often used in many websites, for example for the purpose of adding a
          profile picture, but in turns out that something this simple and widely done
          also have a very huge potential for being exploited. I guess it&apos;s a
          reminder to be ever vigilant about the code we write.
        </p>
        <p>

        </p>
      </section>
      <SpoilerKey>
        {`jmLTY0qiPZBbaKc9341cqPQZBJv7MQbY`}
      </SpoilerKey>
      <PageNav link1='natas11' link2='natas13' />
    </div>
  )
}
export default natas12