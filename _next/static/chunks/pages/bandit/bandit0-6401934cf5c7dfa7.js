(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{20554:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bandit/bandit0",function(){return s(89075)}])},87582:function(e,t,s){"use strict";var n=s(85893),i=s(76992),r=s.n(i);t.Z=function(e){var t=e.children;return(0,n.jsxs)("div",{className:r().keyword,children:[(0,n.jsx)("p",{className:r().keywordHead,children:"Keywords: "}),t]})}},69242:function(e,t,s){"use strict";var n=s(85893),i=s(41664),r=s(98574),o=s.n(r);t.Z=function(e){var t=e.link1,s=e.link2;return(0,n.jsxs)("div",{className:o().pageNav,children:[(0,n.jsx)("div",{children:t?(0,n.jsx)(i.default,{href:t,children:(0,n.jsx)("a",{title:"Previous page",className:o().navButton,children:"\u25c0"})}):""}),(0,n.jsx)("div",{children:s?(0,n.jsx)(i.default,{href:s,children:(0,n.jsx)("a",{title:"Next page",className:o().navButton,children:"\u25b6"})}):""})]})}},20586:function(e,t,s){"use strict";var n=s(85893),i=s(86655),r=s.n(i),o=s(5227),a=s(84283),c=s(67294);t.Z=function(e){var t=e.children,s=(0,c.useState)(!1),i=s[0],l=s[1];return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"Key"}),(0,n.jsxs)("div",{className:r().codeBlock,children:[(0,n.jsx)("div",{className:r().spoilerToggler,children:(0,n.jsx)("button",{onClick:function(){return l(!i)},children:"Click to Reveal"})}),(0,n.jsx)("div",{className:r().spoilerContainer,children:(0,n.jsx)("div",{className:"".concat(r().spoiler," ").concat(i?r().show:""),children:(0,n.jsx)(o.Z,{language:"",style:a.cL,customStyle:{margin:0},children:t})})})]})]})}},35934:function(e,t,s){"use strict";var n=s(85893),i=s(96979),r=s.n(i);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}t.Z=function(e){var t=e.children,s=a(e,["children"]);return(0,n.jsx)("span",function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),n.forEach((function(t){o(e,t,s[t])}))}return e}({className:r().tag},s,{children:t}))}},89075:function(e,t,s){"use strict";s.r(t);var n=s(85893),i=s(9008),r=s(69242),o=s(7160),a=s.n(o),c=s(35934),l=s(87582),h=s(20586);t.default=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(i.default,{children:(0,n.jsx)("title",{children:"Bandit level 0"})}),(0,n.jsxs)("div",{className:a().container,children:[(0,n.jsx)("h1",{children:"Level 0"}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(c.Z,{children:"ssh"})}),(0,n.jsx)("h2",{children:"Experience"}),(0,n.jsxs)("p",{children:["In this beginning challenge, it asks us to connect to the ",(0,n.jsx)("em",{children:"Over The Wire"})," (OTW) server using SSH. It might be surprising but I have actually never used SSH previously. I have used SSH key for the purpose of Git, however, I've never really delve into it. So what is SSH and how do we login to the OTW server? Read my research in the SSH background subheading."]}),(0,n.jsxs)("p",{children:["With a solid foundation on SSH, I began researching how to connect to the server using ssh. Reading the VS Code guide on using SSH, I found that we should use the following syntax: ",(0,n.jsx)("code",{children:"ssh user@hostname"}),". VS Code is supposed to support SSH through its GUI, but I wasn't able to use it, but I am quite comfortable with just using the command line. Then for the port I found a ",(0,n.jsx)("a",{href:"https://askubuntu.com/questions/264046/how-to-ssh-on-a-port-other-than-22",children:"StackExchange answer"})," ","which informed me to use the ",(0,n.jsx)("code",{children:"-p"})," flag to indicate the port of the server I wish to connect. With that, I was able to obtain the password for the next level."]}),(0,n.jsx)("h2",{children:"Research"}),(0,n.jsx)("p",{children:"SSH (Secure Shell) is a protocol for secure remote login to a computer. It uses encryption to protect communicated data and its integrity. It provides alternative to other login protocols such as telnet or file transfer system such as FTP. It is used to conduct file transfer and issue remote commands to the server."}),(0,n.jsx)("p",{children:"As security engineers it is worth taking a look at what authentication and encryption is used to make SSH secure. For authentication, the most commonly used methods were passwords and public key authentication. The usage of public key authentication began from the idea of allowing automation in communication. These authentication keys are known as SSH keys. SSH keys are asymmetric, it comes in a pair of public and private keys. As expected, this system involves the user holding a pair of public and private keys, the server would use the user's public key to encrypt data and the user would use their private key to decrypt it. For servers, this involves copying the public keys of authorised users to a file."}),(0,n.jsxs)("p",{children:["In terms of potential vulnerabilities, the largest vulnerability seem to come from the handling of user's private keys. ",(0,n.jsx)("a",{href:"https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-3_Meli_paper.pdf",children:"A paper"})," has estimated that thousands of git repositories leaked secrets every day including SSH keys. It is stated that for user-based functionalities, the private keys are generally protected through some passphrase, however this is not the case for automated systems wherein the ",(0,n.jsx)("a",{href:"https://www.ssh.com/academy/ssh/protocol",children:"ssh website"})," ","states that ",(0,n.jsx)("q",{children:"careful planning and key management practises need to be excercised to remain secure"}),"."]}),(0,n.jsxs)("p",{children:["Another potential vulnerability is the man-in-the-middle attack which involves a third party pretending to be the trusted party in the communication by intercepting messages. This attack may occur during the process of sharing public keys. The attacker would intercept the message containing the public key of the trusted party and then in its place send his public key. When the user would like to send a message to the trusted party, they would mistakenly use the third party's public key and if the attacker intercepts this, he would be able to read the content of the message. It appears that in the ",(0,n.jsx)("a",{href:"https://www.ssh.com/academy/attack/man-in-the-middle",children:"SSH guide to man-in-the-middle attack"})," several methods of preventing this attack is implemented depending on the implementation of the SSH system. However, these are not fullproof, especially interesting is the possibiliity of generating fake trusted certificates to bypass security measures, security certificate might be another interesting topic."]}),(0,n.jsxs)("p",{children:["Besides vulnerabilities in the keys, previous versions of the SSH protocol has been attacked in other ways. ",(0,n.jsx)("a",{href:"https://www.venafi.com/education-center/ssh/security-and-vulnerabilities#:~:text=In%201998%2C%20a%20vulnerability%20was,introduced%20to%20fix%20this%20flaw.",children:"Venafi"})," ","specifically highlights how the first version of SSH was vulnerable to insertion attack and integer overflow attacks."]}),(0,n.jsx)("h2",{children:"Reflection"}),(0,n.jsx)("p",{children:"The main thoughts I had after the completion of this level, especially the research to find what SSH specifically was, is that, there are so many protocols and technology that is used in software development. Not in a way that overwhelms you, more so in that there are so many great ideas out there. One way we can become better software developer is to learn about these methodology others have already researched and implemented. Moreover, it also brings to light potential vulnerabilities that we ourselves may be writing."})]}),(0,n.jsx)(h.Z,{children:"boJ9jbbUNNfktd78OOpsqOltutMc3MY1"}),(0,n.jsx)(r.Z,{link1:"/bandit",link2:"/bandit/bandit1"})]})}},7160:function(e){e.exports={sectionContainer:"Home_sectionContainer__IVbIU",List:"Home_List__VaowC",ctfTitle:"Home_ctfTitle__QqBBf"}},76992:function(e){e.exports={keywordHead:"Keyword_keywordHead__40fuD",keyword:"Keyword_keyword__javqt"}},98574:function(e){e.exports={pageNav:"PageNav_pageNav__NXqbT",navButton:"PageNav_navButton__yHhmO"}},86655:function(e){e.exports={codeBlock:"SpoilerKey_codeBlock__KWl0d",spoilerToggler:"SpoilerKey_spoilerToggler__HCeWZ",spoiler:"SpoilerKey_spoiler__YWx_s",show:"SpoilerKey_show__VIJ75",spoilerContainer:"SpoilerKey_spoilerContainer__O76It"}},96979:function(e){e.exports={tag:"Tag_tag__AJnTY"}},9008:function(e,t,s){e.exports=s(83121)}},function(e){e.O(0,[369,774,888,179],(function(){return t=20554,e(e.s=t);var t}));var t=e.O();_N_E=t}]);