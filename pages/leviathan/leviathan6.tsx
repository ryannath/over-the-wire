import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import Keyword from "../../components/elements/Keyword/Keyword"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"
import Tag from "../../components/elements/Tag/Tag"

const leviathan6 = () => {
  return (
    <div>
      <h1>Leviathan 6</h1>
      <Keyword>
        <Tag>brute-force</Tag>
      </Keyword>
      <section>
        <h2>Experience</h2>
        <p>
          In this challenge, we are greeted with a pin
          protected executable. So I thought, well, it is possible
          to show what is being compared with gdb. I found the location
          of where it might be comparing the values.
        </p>
        <CodeBlock language="">
          {`8048587:       e8 94 fe ff ff          call   8048420 <atoi@plt>
804858c:       83 c4 10                add    $0x10,%esp
804858f:       3b 45 f4                cmp    -0xc(%ebp),%eax
8048592:       75 2b                   jne    80485bf <main+0x84>`}
        </CodeBlock>
        <p>
          So, creating a breakpoint at 0x804858f, I found that the eax register
          holds our input, but unfortunately, I was not able
          to access the memory location -0xc. Here I got a little stuck again,
          but looking for hints, it appears that all that was expected was
          to brute force the pin and so I did. Writing a simple loop
          using shell script as seen below.
        </p>
        <CodeBlock language="shell">
          {'for i in {1..9999}; do ~/leviathan6 $i; done'}
        </CodeBlock>
        <p>
          I had first written a similar loop using python as I am more comfortable
          with said language, however, it didn&apos;t seem to execute all possible
          permutations. But, running this command, it will run the program
          until it finds the correct pin. When it did, it ran a shell, which
          I used to find the last password.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          This was where I had learnt that perhaps, when I am stuck, I should try
          to look for hints. Looking through the gdb and the assembly code,
          I was quite perplexed as to why it didn&apos;t work, and what other methods
          could I have used which took quite a bit of time. However, after seeing a hint,
          I was able to fully do the challenge. The hint itself did not take
          away too much of the experience because I did not copy the code they used and
          I still had to do much of the rest myself, but it did provide me with
          new perspective.
        </p>
        <p>
          Leviathan 6 was quite an interseting level, as it showed me how easy a 4 pin
          passcode could be broken. It barely took a couple of second, before the shell
          script was able to find the right permutation and open the shell. It was interesting
          because of how often things use 4 pin passcodes, for example phones, ATMs, computers, and
          financial apps. So I had thought that brute force would not be a viable solution.
          I learnt that as an attacker, we must not assume anything to not work until we have
          tried them. I was fully capable of writing a brute force attack, but the mere
          thought just did not occur to me. So I really found that, we should really
          attempt all ways to break things, even if it seem like not a viable solution.
        </p>
      </section>

      <SpoilerKey>
        {'ahy7MaeBo9'}
      </SpoilerKey>
      <PageNav link1='/leviathan/leviathan5' link2='/narnia' />
    </div>
  )
}
export default leviathan6

