(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{68556:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leviathan/leviathan5",function(){return i(65588)}])},90654:function(e,t,i){"use strict";var n=i(85893),a=i(23457),l=i.n(a),s=i(5227),o=i(84283);t.Z=function(e){var t=e.children,i=e.language;return(0,n.jsx)("div",{className:l().CodeBlock,children:(0,n.jsx)(s.Z,{language:i,style:o.cL,children:t})})}},69242:function(e,t,i){"use strict";var n=i(85893),a=i(41664),l=i(98574),s=i.n(l);t.Z=function(e){var t=e.link1,i=e.link2;return(0,n.jsxs)("div",{className:s().pageNav,children:[(0,n.jsx)("div",{children:t?(0,n.jsx)(a.default,{href:t,children:(0,n.jsx)("a",{title:"Previous page",className:s().navButton,children:"\u25c0"})}):""}),(0,n.jsx)("div",{children:i?(0,n.jsx)(a.default,{href:i,children:(0,n.jsx)("a",{title:"Next page",className:s().navButton,children:"\u25b6"})}):""})]})}},20586:function(e,t,i){"use strict";var n=i(85893),a=i(86655),l=i.n(a),s=i(5227),o=i(84283),r=i(67294);t.Z=function(e){var t=e.children,i=(0,r.useState)(!1),a=i[0],c=i[1];return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"Key"}),(0,n.jsxs)("div",{className:l().codeBlock,children:[(0,n.jsx)("div",{className:l().spoilerToggler,children:(0,n.jsx)("button",{onClick:function(){return c(!a)},children:"Click to Reveal"})}),(0,n.jsx)("div",{className:l().spoilerContainer,children:(0,n.jsx)("div",{className:"".concat(l().spoiler," ").concat(a?l().show:""),children:(0,n.jsx)(s.Z,{language:"",style:o.cL,customStyle:{margin:0},children:t})})})]})]})}},65588:function(e,t,i){"use strict";i.r(t);var n=i(85893),a=i(90654),l=i(69242),s=i(20586);t.default=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Leviathan 5"}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"Experience"}),(0,n.jsxs)("p",{children:["In this challenge, we are presented with another executable called",(0,n.jsx)("code",{children:"leviathan5"}),". When ran, it prompted with an error that it could't find a file with the path ",(0,n.jsx)("code",{children:"/tmp/file.log"})]}),(0,n.jsx)("p",{children:"So, using what we have already learnt previously, I instantly thought of using a symbolic link. Simply, create a symbolic link that matches the file it is reading and link it to the location of the password."}),(0,n.jsx)(a.Z,{language:"",children:"ln -s /etc/leviathan_pass/leviathan6 /tmp/file.log"})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"Reflection"}),(0,n.jsx)("p",{children:"This was again another easy challenge, but it has shown to me how useful it was to do some of the other challenges from overthewire. It has helped me learn more about the tools I could use to exploit systems. While this level was quite obvious, it still show something quite valuable in that if a program were to try and open a file that does not exist, an attacker could create a symbolic link to other files that they would be interested in. This could potentially happen when a program attempts to open a file that is dynamically created, if an attacker could trace and observe it attempt to open a file not there, they could definitely attempt to use this method."}),(0,n.jsx)("p",{children:"This level also reminded me, how important it is to learn more about the tools that exist in Linux operating systems as many servers are hosted on a Linux-like system, they could be used by attackers and provide them tools to explore the exploited system."})]}),(0,n.jsx)(s.Z,{children:"UgaoFee4li"}),(0,n.jsx)(l.Z,{link1:"/leviathan/leviathan4",link2:"/leviathan/leviathan6"})]})}},23457:function(e){e.exports={CodeBlock:"CodeBlock_CodeBlock___IBBd"}},98574:function(e){e.exports={pageNav:"PageNav_pageNav__NXqbT",navButton:"PageNav_navButton__yHhmO"}},86655:function(e){e.exports={codeBlock:"SpoilerKey_codeBlock__KWl0d",spoilerToggler:"SpoilerKey_spoilerToggler__HCeWZ",spoiler:"SpoilerKey_spoiler__YWx_s",show:"SpoilerKey_show__VIJ75",spoilerContainer:"SpoilerKey_spoilerContainer__O76It"}}},function(e){e.O(0,[369,774,888,179],(function(){return t=68556,e(e.s=t);var t}));var t=e.O();_N_E=t}]);