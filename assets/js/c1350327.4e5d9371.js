(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(94)),l={title:"Mutations"},i={unversionedId:"server/mutations",id:"server/mutations",isDocsHomePage:!1,title:"Mutations",description:"A brief look on how mutations for this project looks like. In case you want to know what mutations are within GraphQL you can check this link",source:"@site/docs/server/mutations.md",slug:"/server/mutations",permalink:"/graphing/docs/server/mutations",version:"current",sidebar:"docs",previous:{title:"Root Query",permalink:"/graphing/docs/server/root-query"},next:{title:"Starting the client",permalink:"/graphing/docs/client/starting-client"}},b=[{value:"Mutation declaration",id:"mutation-declaration",children:[{value:"addBook",id:"addbook",children:[]},{value:"addAuthor",id:"addauthor",children:[]}]}],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A brief look on how mutations for this project looks like. In case you want to know what mutations are within GraphQL you can check ",Object(o.b)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#mutations"},"this link")),Object(o.b)("h2",{id:"mutation-declaration"},"Mutation declaration"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Field"),Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"addBook"),Object(o.b)("td",{parentName:"tr",align:null},"Book")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"addAuthor"),Object(o.b)("td",{parentName:"tr",align:null},"Author")))),Object(o.b)("h3",{id:"addbook"},"addBook"),Object(o.b)("h5",{id:"type-book"},"type: Book"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Argument"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"name"),Object(o.b)("td",{parentName:"tr",align:null},"GraphQLString"),Object(o.b)("td",{parentName:"tr",align:null},"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"genre"),Object(o.b)("td",{parentName:"tr",align:null},"GraphQLString"),Object(o.b)("td",{parentName:"tr",align:null},"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"authorId"),Object(o.b)("td",{parentName:"tr",align:null},"GraphQLID"),Object(o.b)("td",{parentName:"tr",align:null},"true")))),Object(o.b)("h3",{id:"addauthor"},"addAuthor"),Object(o.b)("h5",{id:"type-author"},"type: Author"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Argument"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"name"),Object(o.b)("td",{parentName:"tr",align:null},"GraphQLString"),Object(o.b)("td",{parentName:"tr",align:null},"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"age"),Object(o.b)("td",{parentName:"tr",align:null},"GraphQLInt"),Object(o.b)("td",{parentName:"tr",align:null},"true")))),Object(o.b)("p",null,"You can find the mutation declaration ",Object(o.b)("a",{parentName:"p",href:"https://github.com/chmiiller/graphing/blob/main/server/schema/schema.js#L81"},"here"),". This is an example on how it looks like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const Mutation = new GraphQLObjectType({\n    name: 'Mutation',\n    fields: {\n        addAuthor: {\n            type: AuthorType,\n            args: { \n                name: { type: new GraphQLNonNull(GraphQLString) },\n                age: { type: new GraphQLNonNull(GraphQLInt) },\n            },\n            resolve(parent, args) {\n                const author = new Author({\n                    name: args.name,\n                    age: args.age,\n                });\n                // Mongo DB save\n            }\n        },\n        addBook: {\n            type: BookType,\n            args: {\n                name: { type: new GraphQLNonNull(GraphQLString) },\n                genre: { type: new GraphQLNonNull(GraphQLString) },\n                authorId: { type: new GraphQLNonNull(GraphQLID) },\n            },\n            resolve(parent, args) {\n                const book = new Book({\n                    name: args.name,\n                    genre: args.genre,\n                    authorId: args.authorId\n                });\n                // Mongo DB save\n            }\n        },\n    },\n});\n")))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,s=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(s,i(i({ref:t},c),{},{components:n})):a.a.createElement(s,i({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);