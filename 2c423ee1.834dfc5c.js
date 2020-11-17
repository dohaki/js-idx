(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(91)),c={title:"Terminology",slug:"/terminology"},o={unversionedId:"idx-terminology",id:"idx-terminology",isDocsHomePage:!1,title:"Terminology",description:"DID",source:"@site/docs/idx-terminology.md",slug:"/terminology",permalink:"/docs/terminology",editUrl:"https://github.com/ceramicstudio/js-idx/edit/master/website/docs/idx-terminology.md",version:"current"},b=[{value:"DID",id:"did",children:[]},{value:"3ID",id:"3id",children:[]},{value:"Ceramic",id:"ceramic",children:[]},{value:"Document",id:"document",children:[]},{value:"DocID",id:"docid",children:[]},{value:"IndexKey",id:"indexkey",children:[]},{value:"Identity Index / IDX",id:"identity-index--idx",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Definition",id:"definition",children:[]}],d={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"did"},"DID"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Decentralized Identifiers (DIDs)")," are globally unique persistent identifiers as defined by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/TR/did-core/"}),"W3C DID specifications"),"."),Object(i.b)("h2",{id:"3id"},"3ID"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"3ID")," is a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#did"}),"DID")," document using the ",Object(i.b)("inlineCode",{parentName:"p"},"3")," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/TR/did-core/#did-syntax"}),"method name")," and stored by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#ceramic"}),"Ceramic network"),"."),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"3ID")," notably stores the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#docid"}),"DocID")," of the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index")," used by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/libs-idx"}),"IDX library"),"."),Object(i.b)("h2",{id:"ceramic"},"Ceramic"),Object(i.b)("p",null,"In this documentation, ",Object(i.b)("strong",{parentName:"p"},"Ceramic")," can refer to either the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ceramic.network/"}),"Ceramic network")," itself, or an instance of a Ceramic API used by the the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/libs-idx"}),"IDX library"),", as exposed by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ceramicnetwork/js-ceramic"}),Object(i.b)("inlineCode",{parentName:"a"},"js-ceramic")," repository"),"."),Object(i.b)("h2",{id:"document"},"Document"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Document")," is a representation of structured data on the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#ceramic"}),"Ceramic network")," along with metadata. The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/libs-idx"}),"IDX library")," provides high-level interfaces interacting with these documents."),Object(i.b)("h2",{id:"docid"},"DocID"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Document Identifier (DocID)")," is a URL representing a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#document"}),"Document"),". Multiple APIs in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/libs-idx"}),"IDX library")," use DocIDs as inputs and/or outputs."),Object(i.b)("h2",{id:"indexkey"},"IndexKey"),Object(i.b)("p",null,"An ",Object(i.b)("strong",{parentName:"p"},"Index Key")," is a key in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#identity-index--idx"}),"Identity Index"),". It should be treated as an opaque string."),Object(i.b)("h2",{id:"identity-index--idx"},"Identity Index / IDX"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Identity Index")," and ",Object(i.b)("strong",{parentName:"p"},"IDX")," can sometimes both be used to refer to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ceramicnetwork/CIP/blob/cip/idx/CIPs/CIP-11/CIP-11.md"}),"Identity Index specification CIP"),", but in this documentation the term ",Object(i.b)("strong",{parentName:"p"},"Identity Index")," will always be used to refer to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ceramicnetwork/CIP/issues/3"}),"specification CIP"),", while ",Object(i.b)("strong",{parentName:"p"},"IDX")," refers to the library, or possibly the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/libs-idx#idx-class"}),Object(i.b)("inlineCode",{parentName:"a"},"IDX")," class")," in code snippets."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Identity Index contents")," refers to the mapping of a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#definition"}),"Definition"),", represented by its ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#indexkey"}),"IndexKey"),", to a referenced ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#docid"}),"DocID"),".\nThe contents are stored in a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#document"}),"Document")," that the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/libs-idx"}),"IDX library")," interacts with."),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://json-schema.org/"}),"JSON schema")," may be used to validate the structure of a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#document"}),"Document"),". These schemas may be defined in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ceramicnetwork/CIP"}),"Ceramic CIPs"),", other specifications or created by developers for their application needs."),Object(i.b)("h2",{id:"definition"},"Definition"),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Definition")," is a specific type of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#document"}),"Document")," used by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/libs-idx"}),"IDX library")," to represent other documents in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index"),"."),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Definition")," is based on a specific ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#schema"}),"Schema")," describing the document it represents, notably the Schema used to validate the document."))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),s=p(n),l=r,u=s["".concat(c,".").concat(l)]||s[l]||m[l]||i;return n?a.a.createElement(u,o(o({ref:t},d),{},{components:n})):a.a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=l;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var d=2;d<i;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);