(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{6633:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cipher",function(){return n(6058)}])},6058:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),o=n(7294);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=function(e){var t=e.setEncodedText,n=e.setDecodedText,a=e.encodedText,l=e.decodedText,u=e.lastSelected,c=(0,o.useState)(0),s=c[0],d=c[1],f=i(function(e){for(var t={},n=[],r=0;r<26;r++){var o=String.fromCharCode("a".charCodeAt(0)+r);t[o]=r,n[r]=o}return[t,n]}(),2),h=f[0],p=f[1],v=function(e,t){for(var n=[],r=0;r<e.length;r++)if(e[r].toLowerCase()in h){var o=h[e[r].toLowerCase()]+t,a=p.length;o=(o%a+a)%a;var i=e[r]<"a"?"a".charCodeAt(0)-"A".charCodeAt(0):0;n[r]=String.fromCharCode(p[o].charCodeAt(0)-i)}else n[r]=e[r];return console.log(n),n.join("")};return 0==u?t(v(l,s||0)):n(v(a,-s||0)),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Caesar Cipher"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Shift by: "}),(0,r.jsx)("input",{type:"number",value:s,onChange:function(e){var r=parseInt(e.target.value);if(d(r),0==u){var o=v(l,r||0);t(o)}else{var i=v(a,-r||0);n(i)}}})]})]})},u=n(9120),c=n.n(u);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(e){var t=e.setEncodedText,n=e.setDecodedText,a=e.encodedText,i=e.decodedText,l=e.lastSelected,u="abcdefghijklmnopqrstuvwxyz",s="zyxwvutsrqponmlkjihgfedcba",f=(0,o.useState)(u),h=f[0],p=f[1],v=(0,o.useState)(s),x=v[0],j=v[1],y=d(function(e,t){for(var n={},r={},o=0;o<e.length;o++)n[e[o]]=t[o],r[e[o]]=t[o];return[n,r]}(h,x),2),b=y[0],C=y[1],m=function(e,t){for(var n=[],r=0;r<e.length;r++)e[r].toLowerCase()in t?e[r]==e[r].toUpperCase()?n[r]=t[e[r].toLowerCase()].toUpperCase():n[r]=t[e[r]]:n[r]=e[r];return n.join("")};return 0==l?t(m(i,b)):n(m(a,C)),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Substitution Cipher"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)("label",{children:"Plain letters"})}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",placeholder:u,className:c().input,value:h,onChange:function(e){return p(e.target.value)}})}),(0,r.jsx)("div",{className:c().secondInput,children:(0,r.jsx)("label",{children:"Corresponding substitution letters"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"text",placeholder:s,className:c().input,value:x,onChange:function(e){return j(e.target.value)}}),(0,r.jsx)("button",{onClick:function(){return j(function(){for(var e=u.split(""),t=Math.floor(50*Math.random())+20,n=0;n<t;n++){var r=e[n],o=Math.floor(26*Math.random());e[n]=e[o],e[o]=r}return e.join("")}())},children:"Randomise substitution"})]})]})]})},h=n(9420),p=n.n(h);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}var j=function(){var e=(0,o.useState)(0),t=e[0],n=e[1],a=(0,o.useState)(""),i=a[0],u=a[1],c=(0,o.useState)(""),s=c[0],d=c[1],h=(0,o.useState)(0),v=h[0],j=h[1],y={setEncodedText:d,setDecodedText:u,encodedText:s,decodedText:i,lastSelected:v},b=null;switch(t){case 0:default:b=(0,r.jsx)(l,x({},y));break;case 1:b=(0,r.jsx)(f,x({},y))}return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:p().dropDownContainer,children:(0,r.jsxs)("select",{className:p().dropDown,value:t,onChange:function(e){return n(parseInt(e.target.value))},children:[(0,r.jsx)("option",{value:0,children:"Caesar Cipher"}),(0,r.jsx)("option",{value:1,children:"Substitution Cipher"})]})}),b,(0,r.jsxs)("div",{className:p().container,children:[(0,r.jsx)("label",{children:"Plain text / decoded"}),(0,r.jsx)("textarea",{className:"".concat(p().textField," ").concat(v?"":p().selected),value:i,onSelect:function(){return j(0)},onChange:function(e){return u(e.target.value)}})]}),(0,r.jsxs)("div",{className:p().container,children:[(0,r.jsx)("label",{children:"Encrypted"}),(0,r.jsx)("textarea",{className:"".concat(p().textField," ").concat(v?p().selected:""),value:s,onSelect:function(){return j(1)},onChange:function(e){return d(e.target.value)}})]})]})},y=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(j,{})})}},9420:function(e){e.exports={textField:"Cipher_textField__FXZlF",container:"Cipher_container__iOkUK",selected:"Cipher_selected__oo9ri",dropDown:"Cipher_dropDown__fyRzJ",dropDownContainer:"Cipher_dropDownContainer__jNaoT"}},9120:function(e){e.exports={secondInput:"SubCipher_secondInput__DAjTj",input:"SubCipher_input__1kcHL"}}},function(e){e.O(0,[774,888,179],(function(){return t=6633,e(e.s=t);var t}));var t=e.O();_N_E=t}]);