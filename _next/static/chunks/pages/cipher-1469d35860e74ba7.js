(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{46633:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cipher",function(){return n(37549)}])},37549:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(85893),o=n(67294);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=function(e){var t=e.setEncodedText,n=e.setDecodedText,a=e.encodedText,l=e.decodedText,u=e.lastSelected,c=(0,o.useState)(0),s=c[0],d=c[1],f=i(function(e){for(var t={},n=[],r=0;r<26;r++){var o=String.fromCharCode("a".charCodeAt(0)+r);t[o]=r,n[r]=o}return[t,n]}(),2),h=f[0],p=f[1],v=function(e,t){for(var n=[],r=0;r<e.length;r++)if(e[r].toLowerCase()in h){var o=h[e[r].toLowerCase()]+t,a=p.length;o=(o%a+a)%a;var i=e[r]<"a"?"a".charCodeAt(0)-"A".charCodeAt(0):0;n[r]=String.fromCharCode(p[o].charCodeAt(0)-i)}else n[r]=e[r];return console.log(n),n.join("")};return(0,o.useEffect)((function(){0==u?t(v(l,s||0)):n(v(a,-s||0))})),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Caesar Cipher"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Shift by: "}),(0,r.jsx)("input",{type:"number",value:s,onChange:function(e){var r=parseInt(e.target.value);if(d(r),0==u){var o=v(l,r||0);t(o)}else{var i=v(a,-r||0);n(i)}}})]})]})},u=n(79120),c=n.n(u);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(e){var t=e.setEncodedText,n=e.setDecodedText,a=e.encodedText,i=e.decodedText,l=e.lastSelected,u="abcdefghijklmnopqrstuvwxyz",s="zyxwvutsrqponmlkjihgfedcba",f=(0,o.useState)(u),h=f[0],p=f[1],v=(0,o.useState)(s),x=v[0],y=v[1],j=d(function(e,t){for(var n={},r={},o=0;o<e.length&&o<t.length;o++)n[e[o]]=t[o],r[t[o]]=e[o];return console.log(n),console.log(r),[n,r]}(h,x),2),g=j[0],b=j[1],C=function(e,t){for(var n=[],r=0;r<e.length;r++)e[r].toLowerCase()in t?e[r]==e[r].toUpperCase()?n[r]=t[e[r].toLowerCase()].toUpperCase():n[r]=t[e[r]]:n[r]=e[r];return n.join("")};return(0,o.useEffect)((function(){0==l?t(C(i,g)):n(C(a,b))})),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Substitution Cipher"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)("label",{children:"Plain letters"})}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",placeholder:u,className:c().input,value:h,onChange:function(e){return p(e.target.value)}})}),(0,r.jsx)("div",{className:c().secondInput,children:(0,r.jsx)("label",{children:"Corresponding substitution letters"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"text",placeholder:s,className:c().input,value:x,onChange:function(e){return y(e.target.value)}}),(0,r.jsx)("button",{onClick:function(){return y(function(){for(var e=u.split(""),t=Math.floor(50*Math.random())+20,n=0;n<t;n++){var r=e[n],o=Math.floor(26*Math.random());e[n]=e[o],e[o]=r}return e.join("")}())},children:"Randomise substitution"})]})]})]})},h=n(56040),p=n.n(h);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x,y,j=(x=function(e){for(var t={},n=[],r=0;r<26;r++){var o=String.fromCharCode("a".charCodeAt(0)+r);t[o]=r,n[r]=o}return[t,n]}(),y=2,function(e){if(Array.isArray(e))return e}(x)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(x,y)||function(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(x,y)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=j[0],b=j[1],C=function(e){var t=e.setEncodedText,n=e.setDecodedText,a=e.encodedText,i=e.decodedText,l=e.lastSelected,u="abcdefghijklmnopqrstuvwxyz",c=(0,o.useState)(u),s=c[0],d=c[1],f=function(e,t){for(var n=function(){for(var e=[],t=0;t<s.length;t++)s[t].toLowerCase()in g&&e.push(g[s[t].toLowerCase()]);return console.log("offsets: "+e),e}(),r=[],o=0,a=0;o<e.length;o++)if(e[o].toLowerCase()in g){var i=g[e[o].toLowerCase()];0===t?i+=n[a%n.length]||0:i-=n[a%n.length]||0;var l=b.length,u=b[i=(i%l+l)%l];r[o]=e[o].toUpperCase()===e[o]?u.toUpperCase():u,a++}else r[o]=e[o];return console.log(r),r.join("")};return(0,o.useEffect)((function(){0===l?t(f(i,l)):n(f(a,l))})),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Vigen\xe8re Cipher"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)("label",{children:"Key"})}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",className:p().input,placeholder:u,value:s,onChange:function(e){d(e.target.value)}})})]})]})},m=n(29420),w=n.n(m);function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}var A=function(){var e=(0,o.useState)(0),t=e[0],n=e[1],a=(0,o.useState)(""),i=a[0],u=a[1],c=(0,o.useState)(""),s=c[0],d=c[1],h=(0,o.useState)(0),p=h[0],v=h[1],x={setEncodedText:d,setDecodedText:u,encodedText:s,decodedText:i,lastSelected:p},y=null;switch(t){case 0:default:y=(0,r.jsx)(l,_({},x));break;case 1:y=(0,r.jsx)(f,_({},x));break;case 2:y=(0,r.jsx)(C,_({},x))}return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:w().dropDownContainer,children:(0,r.jsxs)("select",{className:w().dropDown,value:t,onChange:function(e){return n(parseInt(e.target.value))},children:[(0,r.jsx)("option",{value:0,children:"Caesar Cipher"}),(0,r.jsx)("option",{value:1,children:"Substitution Cipher"}),(0,r.jsx)("option",{value:2,children:"Vigen\xe8re Cipher"})]})}),y,(0,r.jsxs)("div",{className:w().container,children:[(0,r.jsx)("label",{children:"Plain text / decoded"}),(0,r.jsx)("textarea",{className:"".concat(w().textField," ").concat(p?"":w().selected),value:i,onSelect:function(){return v(0)},onChange:function(e){return u(e.target.value)}})]}),(0,r.jsxs)("div",{className:w().container,children:[(0,r.jsx)("label",{children:"Encrypted"}),(0,r.jsx)("textarea",{className:"".concat(w().textField," ").concat(p?w().selected:""),value:s,onSelect:function(){return v(1)},onChange:function(e){return d(e.target.value)}})]})]})},T=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(A,{})})}},29420:function(e){e.exports={textField:"Cipher_textField__FXZlF",container:"Cipher_container__iOkUK",selected:"Cipher_selected__oo9ri",dropDown:"Cipher_dropDown__fyRzJ",dropDownContainer:"Cipher_dropDownContainer__jNaoT"}},79120:function(e){e.exports={secondInput:"SubCipher_secondInput__DAjTj",input:"SubCipher_input__1kcHL"}},56040:function(e){e.exports={input:"VigCipher_input__4MWet"}}},function(e){e.O(0,[774,888,179],(function(){return t=46633,e(e.s=t);var t}));var t=e.O();_N_E=t}]);