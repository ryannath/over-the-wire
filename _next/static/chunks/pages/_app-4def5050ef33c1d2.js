(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{76363:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(12647)}])},31551:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,i=(o=r(67294))&&o.__esModule?o:{default:o},l=r(41003),u=r(80880),c=r(69246);var f={};function s(e,n,r,t){if(e&&l.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;f[n+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var n,r=!1!==e.prefetch,t=u.useRouter(),o=i.default.useMemo((function(){var n=a(l.resolveHref(t,e.href,!0),2),r=n[0],o=n[1];return{href:r,as:e.as?l.resolveHref(t,e.as):o||r}}),[t,e.href,e.as]),d=o.href,v=o.as,h=e.children,p=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(n=i.default.Children.only(h))&&"object"===typeof n&&n.ref,j=a(c.useIntersection({rootMargin:"200px"}),2),x=j[0],_=j[1],L=i.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);i.default.useEffect((function(){var e=_&&r&&l.isLocalURL(d),n="undefined"!==typeof b?b:t&&t.locale,a=f[d+"%"+v+(n?"%"+n:"")];e&&!a&&s(t,d,v,{locale:n})}),[v,d,_,b,r,t]);var w={ref:L,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,o,i,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),n[a?"replace":"push"](r,t,{shallow:o,locale:u,scroll:i}))}(e,t,d,v,p,y,m,b)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(d)&&s(t,d,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof b?b:t&&t.locale,N=t&&t.isLocaleDomain&&l.getDomainLocale(v,k,t&&t.locales,t&&t.domainLocales);w.href=N||l.addBasePath(l.addLocale(v,k,t&&t.defaultLocale))}return i.default.cloneElement(n,w)};n.default=d},69246:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,t=e.disabled||!l,f=o.useRef(),s=a(o.useState(!1),2),d=s[0],v=s[1],h=a(o.useState(n?n.current:null),2),p=h[0],y=h[1],m=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),t||d||e&&e.tagName&&(f.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=u.get(t):(n=u.get(r),c.push(r));if(n)return n;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return u.set(r,n={id:r,observer:o,elements:a}),n}(r),a=t.id,o=t.observer,i=t.elements;return i.set(e,n),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),u.delete(a);var n=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&v(e)}),{root:p,rootMargin:r}))}),[t,p,r,d]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return v(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){n&&y(n.current)}),[n]),[m,d]};var o=r(67294),i=r(44686),l="undefined"!==typeof IntersectionObserver;var u=new Map,c=[]},12647:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(85893),a=(r(97039),r(47454)),o=r.n(a),i=function(e){var n=e.children;return(0,t.jsx)("div",{className:o().mainContainer,children:n})},l=r(41664),u=r(42178),c=r.n(u),f=function(){return(0,t.jsx)("nav",{className:c().navBar,children:(0,t.jsxs)("ul",{className:c().navItems,children:[(0,t.jsx)("li",{className:c().navLink,children:(0,t.jsx)(l.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})}),(0,t.jsx)("li",{className:c().navLink,children:(0,t.jsx)(l.default,{href:"/bandit",children:(0,t.jsx)("a",{children:"Bandit"})})}),(0,t.jsx)("li",{className:c().navLink,children:(0,t.jsx)(l.default,{href:"/natas",children:(0,t.jsx)("a",{children:"Natas"})})}),(0,t.jsx)("li",{className:c().navLink,children:(0,t.jsx)(l.default,{href:"/leviathan",children:(0,t.jsx)("a",{children:"Leviathan"})})}),(0,t.jsx)("li",{className:c().navLink,children:(0,t.jsx)(l.default,{href:"/narnia",children:(0,t.jsx)("a",{children:"Narnia"})})}),(0,t.jsx)("li",{className:c().navLink,children:(0,t.jsx)(l.default,{href:"/cipher",children:(0,t.jsx)("a",{children:"Cipher"})})})]})})},s=function(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{}),(0,t.jsx)(i,{children:n})]})};function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var v=function(e){var n=e.Component,r=e.pageProps,a=(n.getLayout,(0,t.jsx)(n,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}({},r)));return n.getLayout&&(a=n.getLayout(a)),(0,t.jsx)(s,{children:a})}},47454:function(e){e.exports={mainContainer:"MainContainer_mainContainer__0FIFy"}},42178:function(e){e.exports={navBar:"Nav_navBar__ioQlk",navItems:"Nav_navItems__n_3aD",navLink:"Nav_navLink__4k_2G"}},97039:function(){},41664:function(e,n,r){e.exports=r(31551)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(76363),n(80880)}));var r=e.O();_N_E=r}]);