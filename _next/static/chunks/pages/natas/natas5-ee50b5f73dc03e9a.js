(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[696],{5188:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/natas/natas5",function(){return o(42)}])},4655:function(e,t,o){"use strict";var i=o(5893),a=o(335),s=o.n(a);t.Z=function(e){var t=e.src,o=e.alt,a=e.width,n=void 0===a?600:a;return(0,i.jsx)("div",{className:s().imgContainer,children:(0,i.jsx)("img",{src:"/over-the-wire"+t,alt:o,width:n})})}},654:function(e,t,o){"use strict";var i=o(5893),a=o(3457),s=o.n(a),n=o(5227),r=o(4283);t.Z=function(e){var t=e.children,o=e.language;return(0,i.jsx)("div",{className:s().CodeBlock,children:(0,i.jsx)(n.Z,{language:o,style:r.cL,children:t})})}},7582:function(e,t,o){"use strict";var i=o(5893),a=o(6992),s=o.n(a);t.Z=function(e){var t=e.children;return(0,i.jsxs)("div",{className:s().keyword,children:[(0,i.jsx)("p",{className:s().keywordHead,children:"Keywords: "}),t]})}},9242:function(e,t,o){"use strict";var i=o(5893),a=o(1664),s=o(8574),n=o.n(s);t.Z=function(e){var t=e.link1,o=e.link2;return(0,i.jsxs)("div",{className:n().pageNav,children:[(0,i.jsx)("div",{children:t?(0,i.jsx)(a.default,{href:t,children:(0,i.jsx)("a",{title:"Previous page",className:n().navButton,children:"\u25c0"})}):""}),(0,i.jsx)("div",{children:o?(0,i.jsx)(a.default,{href:o,children:(0,i.jsx)("a",{title:"Next page",className:n().navButton,children:"\u25b6"})}):""})]})}},586:function(e,t,o){"use strict";var i=o(5893),a=o(6655),s=o.n(a),n=o(5227),r=o(4283),c=o(7294);t.Z=function(e){var t=e.children,o=(0,c.useState)(!1),a=o[0],l=o[1];return(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Key"}),(0,i.jsxs)("div",{className:s().codeBlock,children:[(0,i.jsx)("div",{className:s().spoilerToggler,children:(0,i.jsx)("button",{onClick:function(){return l(!a)},children:"Click to Reveal"})}),(0,i.jsx)("div",{className:s().spoilerContainer,children:(0,i.jsx)("div",{className:"".concat(s().spoiler," ").concat(a?s().show:""),children:(0,i.jsx)(n.Z,{language:"",style:r.cL,customStyle:{margin:0},children:t})})})]})]})}},5934:function(e,t,o){"use strict";var i=o(5893),a=o(1268),s=o.n(a);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}t.Z=function(e){var t=e.children,o=r(e,["children"]);return(0,i.jsx)("span",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},i=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),i.forEach((function(t){n(e,t,o[t])}))}return e}({className:s().tag},o,{children:t}))}},42:function(e,t,o){"use strict";o.r(t);var i=o(5893),a=o(4655),s=o(654),n=o(7582),r=o(9242),c=o(586),l=o(5934);t.default=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Natas 5"}),(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(l.Z,{children:"cookies"}),(0,i.jsx)(l.Z,{children:"developer-tools"}),(0,i.jsx)(l.Z,{children:"third-party-cookies"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Experience"}),(0,i.jsx)("p",{children:"In this capture the flag, we are greeted by yet another puzzling statement about how we are not logged in."}),(0,i.jsx)(a.Z,{src:"/images/natas5-1.png",alt:'Page reads "access disallowed. You are not logged in"'}),(0,i.jsxs)("p",{children:["I was actually quite unsure on what to do specifically. I checked the page's source code to see if there were some hints again like last time. Unfortunately there wasn' any. So I thought, what web related technology is used to check if we are logged in. By asking myself, I meant, ask Google that very question. As expected, there has been plenty of people who has asked the same question, one instance is at the popular question asking website,"," ",(0,i.jsx)("a",{href:"https://www.quora.com/How-do-websites-remember-you-are-logged-in",children:"Quora"}),". The answer was cookie!."]}),(0,i.jsx)(a.Z,{src:"/images/natas5-2.png",alt:"Cookie shown on the developer tools",width:400}),(0,i.jsx)("p",{children:'I found out that it is possible to see your cookie using the developer tools on the application tab. Most of the cookies seem to be quite cryptic, except one named "loggedin". The loggedin cookie has a value of 0. So I searched up ways to make that 0 to a 1. Apparently, it was as simple as changing it on the developer tools and then reloading the site, then there it was, the password.'}),(0,i.jsx)("p",{children:"To challenge myself, I also tried to get the cookie via Javascript. I learnt that you can use the following command to change that cookie. This was actually quite peculiar, more about it in the research section."}),(0,i.jsx)(s.Z,{language:"javascript",children:"document.cookie = 'loggin=1'"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Research"}),(0,i.jsxs)("p",{children:["What are cookies? Cookies are just some stored data which assist websites in identifying who you are. The type of data which they store may vary. It really depends on the website you go to. But they are generally used for things like giving visitors a more personalised experience, remembering your past activities so you can get right back at where you left off, your likes and dislikes to target you with more relevant content, remembering credentials so you don't have to login everytime, or store your shopping carts. It is noticeable that, even with these justifications, it is a little scary how much data they may store about you. They can even store things such as the length of time you've spent on their websites. Now fortunately, not everyone can read each other's cookies, the cookies made by one domain is limited to be read and edited by the same domain. More can be read about cookies on the following ",(0,i.jsx)("a",{href:"https://www.kaspersky.com/resource-center/definitions/cookies",children:"webpage by Kaspersky"})]}),(0,i.jsx)("p",{children:"Unfortunately, there exists another type of cookie, third party cookies. Third party cookies refer to cookies left not by the primary domain you are looking at. For examples, if you are looking at a website and that website has several ads, the provider of the ads may store cookies on you. This may also include other third party services the website uses. They should still not have access to the cookies of the website you're looking at, however, this could leave what is called a cookie trail. If the third party service exist in many websites you visit, they will be able to paint quite an accurate picture of who you are."}),(0,i.jsxs)("p",{children:["Now regarding why I said it was interesting how cookies are set using Javascript is that although ",(0,i.jsx)("code",{children:"document.cookie"})," appear to return a string, I couldn't change it like a normal string. I know strings are immutable in Javascript, but what I meant was that I couldn't change what the string point towards. I had to look around to see how to actually change it. The syntax to change cookies is a bit weird, you merely let ",(0,i.jsx)("code",{children:"document.cookie"})," equal a string which has a key and a value, as seen in the code i used."]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Reflection"}),(0,i.jsx)("p",{children:"This was quite an eye opening activity. As you can guess by now, I am not so much focused on the capture the flag task specifically, but I am also trying to learn the technology behind it and get a little bit more context. I started this project because, I did not know that much about security, so I think it is important to see each technology in depth."}),(0,i.jsx)("p",{children:"Cookies are quite interesting after learning about it, I never knew you could change your own cookie, albeit this will probably very very difficult considering most cookies seem hashed or at least encrypted. But it is definitely possible that perhaps some websites does not create such high quality cookies that could be easily read. I guess as security engineer, this might pose a risk, if we rely on cookies heavily to do authentication, if an attacker was able to just copy an authorised cookie, they could access the software and this again emphasise how harmful Cross Site Scripting (XSS) can be as they may get your cookies."}),(0,i.jsx)("p",{children:"As a user, it is definitely scary to see how much data these websites actually collect. It make sense for them to collect such data, but often do not contemplate too much about it. With a collection of cookies, one could definitely paint a realistic picture of who you are. In addition, third party cookies, allow them to essentially stalk your internet activity if you encounter their ads often."})]}),(0,i.jsx)(c.Z,{children:"aGoY4q2Dc6MgDq4oL4YtoKtyAg9PeHa1"}),(0,i.jsx)(r.Z,{link1:"/natas/natas4",link2:"/natas/natas6"})]})}},335:function(e){e.exports={imgContainer:"BlogImage_imgContainer__s2tL6"}},3457:function(e){e.exports={CodeBlock:"CodeBlock_CodeBlock___IBBd"}},6992:function(e){e.exports={keywordHead:"Keyword_keywordHead__40fuD",keyword:"Keyword_keyword__javqt"}},8574:function(e){e.exports={pageNav:"PageNav_pageNav__NXqbT",navButton:"PageNav_navButton__yHhmO"}},6655:function(e){e.exports={codeBlock:"SpoilerKey_codeBlock__KWl0d",spoilerToggler:"SpoilerKey_spoilerToggler__HCeWZ",spoiler:"SpoilerKey_spoiler__YWx_s",show:"SpoilerKey_show__VIJ75",spoilerContainer:"SpoilerKey_spoilerContainer__O76It"}},1268:function(e){e.exports={tag:"Tag_tag__AJnTY"}}},function(e){e.O(0,[369,774,888,179],(function(){return t=5188,e(e.s=t);var t}));var t=e.O();_N_E=t}]);