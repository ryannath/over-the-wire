import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const leviathan3 = () => {
  return (
    <div>
      <h1>Leviathan 3</h1>
      <section>
        <h2>Experience</h2>
        <p>
          Starting off, I used <code>ltrace</code> as I ran
          the executable we have for this level. This provided me with
          the following output. I noticed that the initial <code>strcmp</code>
          failed but does not seem to do anything. Then there is another
          <code>strcmp</code> which compares my input &apos;ya&apos; with
          &apos;snlprintf&apos;.
        </p>
        <CodeBlock language="">
          {`leviathan3@leviathan:~$ ltrace ./level3
__libc_start_main(0x8048618, 1, 0xffffd784, 0x80486d0 <unfinished ...>
strcmp("h0no33", "kakaka")                                                      = -1
printf("Enter the password> ")                                                  = 20
fgets(Enter the password> ya
"ya\\n", 256, 0xf7fc55a0)                                                  = 0xffffd590
strcmp("ya\\n", "snlprintf\\n")                                                   = 1
puts("bzzzzzzzzap. WRONG"bzzzzzzzzap. WRONG
)                                                      = 19
+++ exited (status 0) +++`}
        </CodeBlock>
        <p>
          Therefore, I tried typing &quot;snlprintf&quot; instead as my input, that
          worked and a shell was opened where I simply <code>cat</code> the password
          for leviathan4.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          I suppose this is another example of how useful ltrace can be.
          Programs which compares inputs can be quite common and before learning
          about ltrace, I would have thought it was safe to do such a comparison.
          But as can be seen here, we could see exactly what our input
          is being compared with.
        </p>
      </section>
      <SpoilerKey>
        {`vuH0coox6m`}
      </SpoilerKey>
      <PageNav link1='/leviathan/leviathan2' link2='/leviathan/leviathan4' />
    </div>
  )
}
export default leviathan3