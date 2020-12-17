(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(99)),b={title:"IDX library"},c={unversionedId:"libs-idx",id:"libs-idx",isDocsHomePage:!1,title:"IDX library",description:"Installation",source:"@site/docs/libs-idx.md",slug:"/libs-idx",permalink:"/docs/libs-idx",editUrl:"https://github.com/ceramicstudio/js-idx/edit/master/website/docs/libs-idx.md",version:"current",sidebar:"docs",previous:{title:"IDX Tools library",permalink:"/docs/libs-tools"},next:{title:"Getting started with the CLI",permalink:"/docs/guide-cli"}},o=[{value:"Installation",id:"installation",children:[]},{value:"IDX class",id:"idx-class",children:[{value:"constructor",id:"constructor",children:[]},{value:".authenticated",id:"authenticated",children:[]},{value:".ceramic",id:"ceramic",children:[]},{value:".id",id:"id",children:[]},{value:".has",id:"has",children:[]},{value:".get",id:"get",children:[]},{value:".set",id:"set",children:[]},{value:".merge",id:"merge",children:[]},{value:".setAll",id:"setall",children:[]},{value:".setDefaults",id:"setdefaults",children:[]},{value:".remove",id:"remove",children:[]},{value:".getIDXContent",id:"getidxcontent",children:[]},{value:".contentIterator",id:"contentiterator",children:[]},{value:".getDefinition",id:"getdefinition",children:[]}]}],l={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"npm install @ceramicstudio/idx\n")),Object(r.b)("h2",{id:"idx-class"},"IDX class"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/libs-types#idxoptions"}),Object(r.b)("inlineCode",{parentName:"a"},"options: IDXOptions")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<void>")),Object(r.b)("h3",{id:"authenticated"},".authenticated"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("h3",{id:"ceramic"},".ceramic"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#ceramicapi"}),Object(r.b)("inlineCode",{parentName:"a"},"CeramicApi"))),Object(r.b)("h3",{id:"id"},".id"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Accessing this property will throw an error if the instance is not authenticated")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("h3",{id:"has"},".has"),Object(r.b)("p",null,"Returns whether an entry with the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," alias, ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#indexkey"}),Object(r.b)("inlineCode",{parentName:"a"},"IndexKey"))," or definition ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#docid"}),Object(r.b)("inlineCode",{parentName:"a"},"DocID string"))," exists in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index")," of the specified ",Object(r.b)("inlineCode",{parentName:"p"},"did")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"name: string")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"did?: string = this.id"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<boolean>")),Object(r.b)("h3",{id:"get"},".get"),Object(r.b)("p",null,"Returns the referenced content for the given ",Object(r.b)("inlineCode",{parentName:"p"},"name")," alias, ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#indexkey"}),Object(r.b)("inlineCode",{parentName:"a"},"IndexKey"))," or definition ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#docid"}),Object(r.b)("inlineCode",{parentName:"a"},"DocID string"))," of the specified ",Object(r.b)("inlineCode",{parentName:"p"},"did")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"name: string")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"did?: string = this.id"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<unknown>")),Object(r.b)("h3",{id:"set"},".set"),Object(r.b)("p",null,"Sets the content for the given ",Object(r.b)("inlineCode",{parentName:"p"},"name")," alias, ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#indexkey"}),Object(r.b)("inlineCode",{parentName:"a"},"IndexKey"))," or definition ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#docid"}),Object(r.b)("inlineCode",{parentName:"a"},"DocID string"))," in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index")," of the authenticated ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#did"}),"DID")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The provided options are only applied if the document is being created, if it already exists they are ignored")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"name: string")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"content: unknown")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"options?: CreateOptions"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<DocID>")," the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#docid"}),Object(r.b)("inlineCode",{parentName:"a"},"DocID"))," of the created content document"),Object(r.b)("h3",{id:"merge"},".merge"),Object(r.b)("p",null,"Performs a shallow (only one level) merge the contents for the given ",Object(r.b)("inlineCode",{parentName:"p"},"name")," alias, ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#indexkey"}),Object(r.b)("inlineCode",{parentName:"a"},"IndexKey"))," or definition ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#docid"}),Object(r.b)("inlineCode",{parentName:"a"},"DocID string"))," in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index")," of the authenticated ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#did"}),"DID")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The provided options are only applied if the document is being created, if it already exists they are ignored")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"name: string")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"content: unknown")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"options?: CreateOptions"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<DocID>")," the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#docid"}),Object(r.b)("inlineCode",{parentName:"a"},"DocID"))," of the created content document"),Object(r.b)("h3",{id:"setall"},".setAll"),Object(r.b)("p",null,"Similar to the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#set"}),Object(r.b)("inlineCode",{parentName:"a"},"set")," method")," but for setting multiple keys at once in a more efficient way."),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index")," document will only get updated if all the contents are successfully set."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"contents: Record<string, unknown>")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"options?: CreateOptions"))),Object(r.b)("h3",{id:"setdefaults"},".setDefaults"),Object(r.b)("p",null,"Similar to the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#setall"}),Object(r.b)("inlineCode",{parentName:"a"},"setAll")," method")," but only sets contents for keys that are not already present in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index")," document."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"contents: Record<string, unknown>")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"options?: CreateOptions"))),Object(r.b)("h3",{id:"remove"},".remove"),Object(r.b)("p",null,"Removes the definition for the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," alias, ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#indexkey"}),Object(r.b)("inlineCode",{parentName:"a"},"IndexKey"))," or definition ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#docid"}),Object(r.b)("inlineCode",{parentName:"a"},"DocID string"))," in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index")," of the authenticated ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#did"}),"DID")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"name: string"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<void>")),Object(r.b)("h3",{id:"getidxcontent"},".getIDXContent"),Object(r.b)("p",null,"Returns the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#identityindexcontent"}),"contents")," of the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/terminology#identity-index--idx"}),"Identity Index")," associated to the given ",Object(r.b)("inlineCode",{parentName:"p"},"did")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"did?: string = this.id"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<IdentityIndexContent | null>")),Object(r.b)("h3",{id:"contentiterator"},".contentIterator"),Object(r.b)("p",null,"Returns an async iterator of ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#contententry"}),Object(r.b)("inlineCode",{parentName:"a"},"ContentEntry"))," for the given ",Object(r.b)("inlineCode",{parentName:"p"},"did")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"did?: string = this.id"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"AsyncIterableIterator<ContentEntry>")),Object(r.b)("h3",{id:"getdefinition"},".getDefinition"),Object(r.b)("p",null,"Loads an existing ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#definition"}),"Definition")," by its ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#docid"}),Object(r.b)("inlineCode",{parentName:"a"},"DocID string"))," or ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/libs-types#indexkey"}),Object(r.b)("inlineCode",{parentName:"a"},"IndexKey"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Arguments")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"id: string"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns")," ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<Definition>")))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),O=i,j=d["".concat(b,".").concat(O)]||d[O]||s[O]||r;return n?a.a.createElement(j,c(c({ref:t},l),{},{components:n})):a.a.createElement(j,c({ref:t},l))}));function j(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,b=new Array(r);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,b[1]=c;for(var l=2;l<r;l++)b[l]=n[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);