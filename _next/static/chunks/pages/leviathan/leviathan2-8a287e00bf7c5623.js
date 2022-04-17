(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[952],{26890:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leviathan/leviathan2",function(){return n(29467)}])},34655:function(e,t,n){"use strict";var s=n(85893),i=n(40335),r=n.n(i);t.Z=function(e){var t=e.src,n=e.alt,i=e.width,a=void 0===i?600:i;return(0,s.jsx)("div",{className:r().imgContainer,children:(0,s.jsx)("img",{src:"/over-the-wire"+t,alt:n,width:a})})}},90654:function(e,t,n){"use strict";var s=n(85893),i=n(23457),r=n.n(i),a=n(5227),o=n(84283);t.Z=function(e){var t=e.children,n=e.language;return(0,s.jsx)("div",{className:r().CodeBlock,children:(0,s.jsx)(a.Z,{language:n,style:o.cL,children:t})})}},87582:function(e,t,n){"use strict";var s=n(85893),i=n(76992),r=n.n(i);t.Z=function(e){var t=e.children;return(0,s.jsxs)("div",{className:r().keyword,children:[(0,s.jsx)("p",{className:r().keywordHead,children:"Keywords: "}),t]})}},69242:function(e,t,n){"use strict";var s=n(85893),i=n(41664),r=n(98574),a=n.n(r);t.Z=function(e){var t=e.link1,n=e.link2;return(0,s.jsxs)("div",{className:a().pageNav,children:[(0,s.jsx)("div",{children:t?(0,s.jsx)(i.default,{href:t,children:(0,s.jsx)("a",{title:"Previous page",className:a().navButton,children:"\u25c0"})}):""}),(0,s.jsx)("div",{children:n?(0,s.jsx)(i.default,{href:n,children:(0,s.jsx)("a",{title:"Next page",className:a().navButton,children:"\u25b6"})}):""})]})}},20586:function(e,t,n){"use strict";var s=n(85893),i=n(86655),r=n.n(i),a=n(5227),o=n(84283),l=n(67294);t.Z=function(e){var t=e.children,n=(0,l.useState)(!1),i=n[0],c=n[1];return(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Key"}),(0,s.jsxs)("div",{className:r().codeBlock,children:[(0,s.jsx)("div",{className:r().spoilerToggler,children:(0,s.jsx)("button",{onClick:function(){return c(!i)},children:"Click to Reveal"})}),(0,s.jsx)("div",{className:r().spoilerContainer,children:(0,s.jsx)("div",{className:"".concat(r().spoiler," ").concat(i?r().show:""),children:(0,s.jsx)(a.Z,{language:"",style:o.cL,customStyle:{margin:0},children:t})})})]})]})}},35934:function(e,t,n){"use strict";var s=n(85893),i=n(96979),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.Z=function(e){var t=e.children,n=o(e,["children"]);return(0,s.jsx)("span",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){a(e,t,n[t])}))}return e}({className:r().tag},n,{children:t}))}},29467:function(e,t,n){"use strict";n.r(t);var s=n(85893),i=n(34655),r=n(90654),a=n(87582),o=n(69242),l=n(20586),c=n(35934);t.default=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Leviathan 2"}),(0,s.jsx)(a.Z,{children:(0,s.jsx)(c.Z,{children:"symlink"})}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Experience"}),(0,s.jsx)("p",{children:"Greeted by another executable, this time called printfile. Running the program tells us that it will print the file we put as argument. However, as expected, it was not that simple, inserting the path to the leviathan3 password, i.e. /etc/leviathan_pass/leviathan3 returns the statement that we do not have access to that file. Now, using our trusty ltrace, we can see what the program is doing in the background. I also learnt about other ltrace flags, -f to trace processes if there is fork or clone and more interestingly -S to show system calls as well. These were not as useful for this exercise, but I read through the manual a bit to learn more about ltrace as it seems quite useful."}),(0,s.jsx)(i.Z,{src:"/images/leviathan2-1.png",alt:"ltrace of printfile showing the call of library function, access"}),(0,s.jsx)("p",{children:"As shown in the image, it seems to be using a function called access to determine whether we are allowed to access the file. I then had a look at what it would do, if we do indeed have access to the file. So, create a temporary directory as directed by overthewire, and a file you have access to."}),(0,s.jsx)(r.Z,{language:"",children:"mkdir /tmp/insertrandom523\necho test > /tmp/insertrandom523/test.txt\n./printfile /tmp/insertrandom523/test.txt"}),(0,s.jsx)("p",{children:"Using ltrace for this case, we obtain:"}),(0,s.jsx)(r.Z,{language:"",children:'__libc_start_main(0x804852b, 2, 0xffffd744, 0x8048610 <unfinished ...>\naccess("/tmp/insertrandom523/test.txt", 4)               = 0\nsnprintf("/bin/cat /tmp/insertrandom523/te"..., 511, "/bin/cat %s", "/tmp/insertrandom523/test.txt") = 38\ngeteuid()                                                = 12002\ngeteuid()                                                = 12002\nsetreuid(12002, 12002)                                   = 0\nsystem("/bin/cat /tmp/insertrandom523/te"...test'}),(0,s.jsxs)("p",{children:["Interestingly, access and the shell command would use different user ids. It appears that when using the ",(0,s.jsx)("code",{children:"system"})," function, it sets the real user id to the effetive user id. The effective user id is what is normally used to check whether we have access to a file or not, surprisingly we actually have a read access to the leviathan password file."]}),(0,s.jsx)(i.Z,{src:"/images/leviathan2-1.png",alt:"read access is shown for users for all leviathan passwords"}),(0,s.jsxs)("p",{children:["Therefore, at the system function call, the shell should have the permission to read from the leviathan passwords. I'm not sure why normally, you can't access the passwords, as ",(0,s.jsx)("code",{children:"ls -la"})," showed read access, perhaps it does a separate checking which will not occur in this case. With that knowledge, we must bypass the ",(0,s.jsx)("code",{children:"access"})," function."]}),(0,s.jsxs)("p",{children:["This was quite difficult to do, however, looking at the trace, I noticed that the string used for ",(0,s.jsx)("code",{children:"access"})," and the string used by ",(0,s.jsx)("code",{children:"snprintf"}),"is different. Namely that the string for ",(0,s.jsx)("code",{children:"access"})," have a double quote for the entire argument that was given to the program, however for the ",(0,s.jsx)("code",{children:"snprintf"}),", it appears that the double quote has been trimmed. That is, instead of:"]}),(0,s.jsx)(r.Z,{language:"",children:'"/bin/cat \\"/tmp/insertrandom523/...\\""'}),(0,s.jsx)("p",{children:"It is instead:"}),(0,s.jsx)(r.Z,{language:"",children:'"/bin/cat /tmp/insertrandom523/..."'}),(0,s.jsxs)("p",{children:["More research led me to learning about symbolic links. With all these information, we could combine and solve this challenge. First create a file with a space in its name, this would allow it to be interpreted as two separate files by ",(0,s.jsx)("code",{children:"cat"})," due to the trimming of the double quote. So e.g."]}),(0,s.jsx)(r.Z,{language:"",children:"echo > a\\ test.txt"}),(0,s.jsx)("p",{children:"Then, write a symbolic link with the name of the first part of that file to the leviathan password file."}),(0,s.jsx)(r.Z,{language:"",children:"ln -s /etc/leviathan_pass/leviathan3 a"}),(0,s.jsxs)("p",{children:["Then we simply run ",(0,s.jsx)("code",{children:"printfile"})," on the file we have access to (the non symbolic link file). This would give us the key to Leviathan 3"]})]}),(0,s.jsx)("section",{children:(0,s.jsx)("h2",{children:"Reflection"})}),(0,s.jsx)(l.Z,{children:"Ahdiemoo1j"}),(0,s.jsx)(o.Z,{link1:"/leviathan/leviathan1",link2:"/leviathan/leviathan3"})]})}},40335:function(e){e.exports={imgContainer:"BlogImage_imgContainer__s2tL6"}},23457:function(e){e.exports={CodeBlock:"CodeBlock_CodeBlock___IBBd"}},76992:function(e){e.exports={keywordHead:"Keyword_keywordHead__40fuD",keyword:"Keyword_keyword__javqt"}},98574:function(e){e.exports={pageNav:"PageNav_pageNav__NXqbT",navButton:"PageNav_navButton__yHhmO"}},86655:function(e){e.exports={codeBlock:"SpoilerKey_codeBlock__KWl0d",spoilerToggler:"SpoilerKey_spoilerToggler__HCeWZ",spoiler:"SpoilerKey_spoiler__YWx_s",show:"SpoilerKey_show__VIJ75",spoilerContainer:"SpoilerKey_spoilerContainer__O76It"}},96979:function(e){e.exports={tag:"Tag_tag__AJnTY"}}},function(e){e.O(0,[369,774,888,179],(function(){return t=26890,e(e.s=t);var t}));var t=e.O();_N_E=t}]);