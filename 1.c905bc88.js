(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(108);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(116);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return o.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return o.DEFAULT_SEARCH_TAG}});var u=n(109);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return u.isDocsPluginEnabled}});var i=n(120);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return i.isSamePath}});var c=n(121);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return c.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return c.useDocsPreferredVersionByPluginId}});var a=n(110);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return a.DocsPreferredVersionContextProvider}})},102:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},103:function(e,t,n){try{e.exports=n(117)}catch(r){e.exports={}}},104:function(e,t,n){"use strict";var r=n(0),o=n.n(r),u=n(11),i=n(107),c=n(9),a=Object(r.createContext)({collectLink:function(){}}),s=n(106),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,l,d=e.isNavLink,v=e.to,g=e.href,h=e.activeClassName,m=e.isActive,b=e["data-noBrokenLinkCheck"],p=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),D=Object(s.b)().withBaseUrl,P=Object(r.useContext)(a),O=v||g,j=Object(i.a)(O),C=null==O?void 0:O.replace("pathname://",""),V=void 0!==C?function(e){return e.startsWith("/")}(n=C)?D(n):n:void 0,A=Object(r.useRef)(!1),y=d?u.e:u.c,w=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!w&&j&&window.docusaurus.prefetch(V),function(){w&&l&&l.disconnect()}}),[V,w,j]);var _=null!==(t=null==V?void 0:V.startsWith("#"))&&void 0!==t&&t,E=!V||!j||_;return V&&j&&!_&&!b&&P.collectLink(V),E?o.a.createElement("a",Object.assign({href:V},O&&!j&&{target:"_blank",rel:"noopener noreferrer"},p)):o.a.createElement(y,Object.assign({},p,{onMouseEnter:function(){A.current||(window.docusaurus.preload(V),A.current=!0)},innerRef:function(e){var t,n;w&&e&&j&&(t=e,n=function(){window.docusaurus.prefetch(V)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t),l.disconnect(),n())}))}))).observe(t))},to:V||""},d&&{isActive:m,activeClassName:h}))}},105:function(e,t,n){"use strict";n.r(t);var r=n(11);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var r=n(22),o=n(107);function u(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,c=void 0!==i&&i,a=u.absolute,s=void 0!==a&&a;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var f=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+f:f}(u,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},107:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},108:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var o=r(n(22));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var r=n(103);t.isDocsPluginEnabled=!!r.useAllDocsData},110:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var c=u(n(0)),a=n(108),s=n(109),f=n(103),l=i(n(122));function d(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=l.default.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(l.default.clear(e,n),{preferredVersionName:null})}(e)})),o}function v(){var e=f.useAllDocsData(),t=a.useThemeConfig().docs.versionPersistence,n=c.useMemo((function(){return Object.keys(e)}),[e]),r=c.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),o=r[0],u=r[1];return c.useEffect((function(){u(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[o,c.useMemo((function(){return{savePreferredVersion:function(e,n){l.default.save(e,t,n),u((function(t){var r;return Object.assign(Object.assign({},t),((r={})[e]={preferredVersionName:n},r))}))}}}),[u])]}var g=c.createContext(null);function h(e){var t=e.children,n=v();return c.default.createElement(g.Provider,{value:n},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return s.isDocsPluginEnabled?c.default.createElement(h,null,t):c.default.createElement(c.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=c.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},111:function(e,t,n){"use strict";var r=n(0),o=n(135);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(105),o=n(118),u=n(119);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return u.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:u.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return u.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return u.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return u.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return u.getDocVersionSuggestions(n,o)}},118:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return u})),n.d(t,"usePluginData",(function(){return i}));var r=n(22);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function u(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=u(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(105);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return u},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,u,i=t.getActiveVersion(e,n),c=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:c,alternateDocVersions:c?(o=c.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(u[e.name]=t)}))})),u):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),u=o.activeVersion!==r;return{latestDocSuggestion:u?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:u?r:void 0}}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)}},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var r=n(0),o=n(110),u=n(103),i=n(123);t.useDocsPreferredVersion=function(e){void 0===e&&(e=i.DEFAULT_PLUGIN_ID);var t=u.useDocsData(e),n=o.useDocsPreferredVersionContext(),c=n[0],a=n[1],s=c[e].preferredVersionName;return{preferredVersion:s?t.versions.find((function(e){return e.name===s})):null,savePreferredVersionName:r.useCallback((function(t){a.savePreferredVersion(e,t)}),[a])}},t.useDocsPreferredVersionByPluginId=function(){var e=u.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],n=Object.keys(e),r={};return n.forEach((function(n){r[n]=function(n){var r=e[n],o=t[n].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(n)})),r}},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"docs-preferred-version-"+e},o={save:function(e,t,n){"none"===t||window.localStorage.setItem(r(e),n)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(r(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},123:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));var r="default"},124:function(e,t,n){"use strict";var r=n(0),o=n(132);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},132:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},135:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext(void 0);t.a=o},147:function(e,t,n){"use strict";var r=n(0),o=n.n(r),u="docusaurus.tab.",i=function(){var e=Object(r.useState)({}),t=e[0],n=e[1],o=Object(r.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var r=localStorage.key(t);if(r.startsWith(u))e[r.substring(u.length)]=localStorage.getItem(r)}n(e)}catch(o){console.error(o)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),o(e,t)}}},c=n(101),a="docusaurus.announcement.dismiss",s="docusaurus.announcement.id",f=function(){var e=Object(c.useThemeConfig)().announcementBar,t=Object(r.useState)(!0),n=t[0],o=t[1],u=Object(r.useCallback)((function(){localStorage.setItem(a,"true"),o(!0)}),[]);return Object(r.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(s);"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;localStorage.setItem(s,t),r&&localStorage.setItem(a,"false"),(r||"false"===localStorage.getItem(a))&&o(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:u}},l=n(132);t.a=function(e){var t=i(),n=t.tabGroupChoices,r=t.setTabGroupChoices,u=f(),c=u.isAnnouncementBarClosed,a=u.closeAnnouncementBar;return o.a.createElement(l.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r,isAnnouncementBarClosed:c,closeAnnouncementBar:a}},e.children)}},148:function(e,t,n){"use strict";var r=n(0),o=n.n(r),u=n(9),i=n(101),c="light",a="dark",s=function(e){return e===a?a:c},f=function(){return u.a.canUseDOM?s(document.documentElement.getAttribute("data-theme")):c},l=function(e){try{localStorage.setItem("theme",s(e))}catch(t){console.error(t)}},d=function(){var e=Object(i.useThemeConfig)().colorMode.disableSwitch,t=void 0!==e&&e,n=Object(r.useState)(f),o=n[0],u=n[1],d=Object(r.useCallback)((function(){u(c),l(c)}),[]),v=Object(r.useCallback)((function(){u(a),l(a)}),[]);return Object(r.useEffect)((function(){document.documentElement.setAttribute("data-theme",s(o))}),[o]),Object(r.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&u(s(e))}catch(n){console.error(n)}}),[u]),Object(r.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;u(t?a:c)}))}),[]),{isDarkTheme:o===a,setLightTheme:d,setDarkTheme:v}},v=n(135);t.a=function(e){var t=d(),n=t.isDarkTheme,r=t.setLightTheme,u=t.setDarkTheme;return o.a.createElement(v.a.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:u}},e.children)}}}]);