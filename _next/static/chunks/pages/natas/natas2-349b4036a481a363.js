(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{9114:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/natas/natas2",function(){return t(9140)}])},4655:function(e,i,t){"use strict";var s=t(5893),n=t(335),o=t.n(n);i.Z=function(e){var i=e.src,t=e.alt,n=e.width,l=void 0===n?600:n;return(0,s.jsx)("div",{className:o().imgContainer,children:(0,s.jsx)("img",{src:i,alt:t,width:l})})}},9242:function(e,i,t){"use strict";var s=t(5893),n=t(1664),o=t(8574),l=t.n(o);i.Z=function(e){var i=e.link1,t=e.link2;return(0,s.jsxs)("div",{className:l().pageNav,children:[(0,s.jsx)("div",{children:i?(0,s.jsx)(n.default,{href:i,children:(0,s.jsx)("a",{title:"Previous page",className:l().navButton,children:"\u25c0"})}):""}),(0,s.jsx)("div",{children:t?(0,s.jsx)(n.default,{href:t,children:(0,s.jsx)("a",{title:"Next page",className:l().navButton,children:"\u25b6"})}):""})]})}},586:function(e,i,t){"use strict";var s=t(5893),n=t(6655),o=t.n(n),l=t(5227),r=t(4283),a=t(7294);i.Z=function(e){var i=e.children,t=(0,a.useState)(!1),n=t[0],h=t[1];return(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Key"}),(0,s.jsxs)("div",{className:o().codeBlock,children:[(0,s.jsx)("div",{className:o().spoilerToggler,children:(0,s.jsx)("button",{onClick:function(){return h(!n)},children:"Click to Reveal"})}),(0,s.jsx)("div",{className:o().spoilerContainer,children:(0,s.jsx)("div",{className:"".concat(o().spoiler," ").concat(n?o().show:""),children:(0,s.jsx)(l.Z,{language:"",style:r.cL,customStyle:{margin:0},children:i})})})]})]})}},9140:function(e,i,t){"use strict";t.r(i);var s=t(5893),n=t(4655),o=t(9242),l=t(586);i.default=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Natas 2"}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Experience"}),(0,s.jsx)("p",{children:"I noticed a picture of a single pixel, first I thought, perhaps it is hidden in this dubious one pixel picture. I tried inspecting its contents using vim and xxd without much luck. Perhaps the hint that there's nothing in this page is true."}),(0,s.jsx)("p",{children:"Then I thought, this pixel picture is an indicator that there might be other files in the web server, and potentially one with the flag we are looking for. I attempted to inspect the list of files on the developer tools, however the developer tools didn't show any other files worth noting, see the picture below."}),(0,s.jsx)(n.Z,{src:"/natas2.png",alt:"Image showing file hierarchy shown by developer tools",width:200}),(0,s.jsxs)("p",{children:['I did however notice that the pixel photo was located in the "files" directory. So I tried appending ',(0,s.jsx)("code",{children:"/files"})," to the url, and there it was, ",(0,s.jsx)("code",{children:"users.txt"}),". I simply clicked this file and it displayed the password for the next level."]}),(0,s.jsx)(n.Z,{src:"/natas2-2.png",alt:"The directory page shown after /files was appended, listed as one of the file is users.txt",width:320})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Reflection"}),(0,s.jsx)("p",{children:"This exercise was a little bit harder than before as I had no previous knowledge on what I am supposed to do. The website itself seems very clean and even the folder hierarchy in the developer tools is clean. I've now learnt that while files that are not linked to by the website is not shown on the developer tools, it is still possible to access them. This seems particularly dangerous. If a developer were simply checking if any potentially sensitive files were put in this public directory, the developer tools won't show it."}),(0,s.jsx)("p",{children:"The level also introduced that webpages may comprised of files and directories as well. So not only is something written in the html document is public, every other client side files are also publically available."})]}),(0,s.jsx)(l.Z,{children:"sJIJNW6ucpu6HPZ1ZAchaDtwd7oGrD14"}),(0,s.jsx)(o.Z,{link1:"natas1",link2:"natas3"})]})}},335:function(e){e.exports={imgContainer:"BlogImage_imgContainer__s2tL6"}},8574:function(e){e.exports={pageNav:"PageNav_pageNav__NXqbT",navButton:"PageNav_navButton__yHhmO"}},6655:function(e){e.exports={codeBlock:"SpoilerKey_codeBlock__KWl0d",spoilerToggler:"SpoilerKey_spoilerToggler__HCeWZ",spoiler:"SpoilerKey_spoiler__YWx_s",show:"SpoilerKey_show__VIJ75",spoilerContainer:"SpoilerKey_spoilerContainer__O76It"}}},function(e){e.O(0,[369,774,888,179],(function(){return i=9114,e(e.s=i);var i}));var i=e.O();_N_E=i}]);