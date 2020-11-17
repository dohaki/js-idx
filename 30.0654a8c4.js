(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,n){"use strict";var o=n(0);const a=Object(o.createContext)(void 0);t.a=a},102:function(e,t,n){"use strict";var o=n(0),a=n(103);t.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},103:function(e,t,n){"use strict";var o=n(0);const a=n.n(o).a.createContext(void 0);t.a=a},104:function(e,t,n){"use strict";var o=n(0),a=n(101);t.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},115:function(e,t,n){"use strict";const o=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let r=!1;a.rangeCount>0&&(r=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(c){}return n.remove(),r&&(a.removeAllRanges(),a.addRange(r)),o&&o.focus(),s};e.exports=o,e.exports.default=o},116:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],o=t[2],a=t[3];if(n&&a){var r=[],s=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=o&&".."!=o&&"\u2025"!=o||(a+=s);for(var c=n;c!=a;c+=s)r.push(c);return r}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},120:function(e,t,n){"use strict";var o=n(2),a=n(0),r=n.n(a),s=n(93),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(20).a,theme:c};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=u({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=u({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var g=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==a&&(r.style=void 0!==r.style?u({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),i(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var s=o?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,s=u({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(s.style=void 0!==s.style?u({},s.style,a):a),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,s=0,c=[],l=[c];s>-1;){for(;(r=o[s]++)<a[s];){var i=void 0,u=t[s],y=n[s][r];if("string"==typeof y?(u=s>0?u:["plain"],i=y):(u=m(u,y.type),y.alias&&(u=m(u,y.alias)),i=y.content),"string"==typeof i){var h=i.split(p),g=h.length;c.push({types:u,content:h[0]});for(var f=1;f<g;f++)d(c),l.push(c=[]),c.push({types:u,content:h[f]})}else s++,t.push(u),n.push(i),o.push(0),a.push(i.length)}s--,t.pop(),n.pop(),o.pop(),a.pop()}return d(c),l}(void 0!==s?t.tokenize(o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),f=n(115),b=n.n(f),v=n(116),k=n.n(v),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(102),C=n(92);var E=()=>{const{prism:e}=Object(C.a)(),{isDarkTheme:t}=Object(O.a)(),n=e.theme||j,o=e.darkTheme||n;return t?o:n},w=n(47),T=n.n(w);const x=/{([\d,-]+)}/,S=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)},N=/title=".*"/;t.a=({children:e,className:t,metastring:n})=>{const{prism:c}=Object(C.a)(),[i,u]=Object(a.useState)(!1),[p,d]=Object(a.useState)(!1);Object(a.useEffect)((()=>{d(!0)}),[]);const m=Object(a.useRef)(null);let y=[],h="";const f=E();if(n&&x.test(n)){const e=n.match(x)[1];y=k.a.parse(e).filter((e=>e>0))}n&&N.test(n)&&(h=n.match(N)[0].split("title=")[1].replace(/"+/g,""));let v=t&&t.replace(/language-/,"");!v&&c.defaultLanguage&&(v=c.defaultLanguage);let j=e.replace(/\n$/,"");if(0===y.length&&void 0!==v){let t="";const n=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}})(v),o=e.replace(/\n$/,"").split("\n");let a;for(let e=0;e<o.length;){const r=e+1,s=o[e].match(n);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=`${r},`;break;case"highlight-start":a=r;break;case"highlight-end":t+=`${a}-${r-1},`}o.splice(e,1)}else e+=1}y=k.a.parse(t),j=o.join("\n")}const O=()=>{b()(j),u(!0),setTimeout((()=>u(!1)),2e3)};return r.a.createElement(g,Object(o.a)({},l,{key:String(p),theme:f,code:j,language:v}),(({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:c})=>r.a.createElement(r.a.Fragment,null,h&&r.a.createElement("div",{style:t,className:T.a.codeBlockTitle},h),r.a.createElement("div",{className:T.a.codeBlockContent},r.a.createElement("button",{tabIndex:0,ref:m,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(T.a.copyButton,{[T.a.copyButtonWithTitle]:h}),onClick:O},i?"Copied":"Copy"),r.a.createElement("div",{className:Object(s.a)(e,T.a.codeBlock,{[T.a.codeBlockWithTitle]:h})},r.a.createElement("div",{className:T.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return y.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(o.a)({key:t},n),e.map(((e,t)=>r.a.createElement("span",Object(o.a)({key:t},c({token:e,key:t}))))))}))))))))}},121:function(e,t,n){"use strict";var o=n(0),a=n.n(o);const r="docusaurus.tab.";var s=()=>{const[e,t]=Object(o.useState)({}),n=Object(o.useCallback)(((e,t)=>{try{localStorage.setItem(`docusaurus.tab.${e}`,t)}catch(n){console.error(n)}}),[]);return Object(o.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith(r)){e[n.substring(r.length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,o)=>{t((t=>({...t,[e]:o}))),n(e,o)}}},c=n(92);const l="docusaurus.announcement.dismiss",i="docusaurus.announcement.id";var u=()=>{const{announcementBar:e}=Object(c.a)(),[t,n]=Object(o.useState)(!0),a=Object(o.useCallback)((()=>{localStorage.setItem(l,"true"),n(!0)}),[]);return Object(o.useEffect)((()=>{if(!e)return;const{id:t}=e;let o=localStorage.getItem(i);"annoucement-bar"===o&&(o="announcement-bar");const a=t!==o;localStorage.setItem(i,t),a&&localStorage.setItem(l,"false"),(a||"false"===localStorage.getItem(l))&&n(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:a}},p=n(101);t.a=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=s(),{isAnnouncementBarClosed:o,closeAnnouncementBar:r}=u();return a.a.createElement(p.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:r}},e.children)}},122:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(10),s=n(92);const c="light",l="dark",i=e=>e===l?l:c,u=()=>r.a.canUseDOM?i(document.documentElement.getAttribute("data-theme")):c,p=e=>{try{localStorage.setItem("theme",i(e))}catch(t){console.error(t)}};var d=()=>{const{colorMode:{disableSwitch:e=!1}}=Object(s.a)(),[t,n]=Object(o.useState)(u),a=Object(o.useCallback)((()=>{n(c),p(c)}),[]),r=Object(o.useCallback)((()=>{n(l),p(l)}),[]);return Object(o.useEffect)((()=>{document.documentElement.setAttribute("data-theme",i(t))}),[t]),Object(o.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(i(e))}catch(t){console.error(t)}}),[n]),Object(o.useEffect)((()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{n(e?l:c)}))}),[]),{isDarkTheme:t===l,setLightTheme:a,setDarkTheme:r}},m=n(103);t.a=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:o}=d();return a.a.createElement(m.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:o}},e.children)}},150:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(104),s=n(93),c=n(66),l=n.n(c);const i=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:d,className:m}=e,{tabGroupChoices:y,setTabGroupChoices:h}=Object(r.a)(),[g,f]=Object(o.useState)(c),[b,v]=Object(o.useState)(!1);if(null!=d){const e=y[d];null!=e&&e!==g&&p.some((t=>t.value===e))&&f(e)}const k=e=>{f(e),null!=d&&h(d,e)},j=[],O=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},C=()=>{v(!1)};return Object(o.useEffect)((()=>(window.addEventListener("keydown",O),window.addEventListener("mousedown",C),()=>{window.removeEventListener("keydown",O),window.removeEventListener("mousedown",C)})),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},m)},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===e}),style:b?{}:{outline:"none"},key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),O(e)},onFocus:()=>k(e),onClick:()=>{k(e),v(!1)},onPointerDown:()=>v(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((e=>e.props.value===g))[0]))}},151:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);