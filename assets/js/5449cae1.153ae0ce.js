(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),i=(n(0),n(91)),a={title:"Starting the server"},s={unversionedId:"server/starting",id:"server/starting",isDocsHomePage:!1,title:"Starting the server",description:"This page will help you on how to run the backend of this repo",source:"@site/docs/server/starting.md",slug:"/server/starting",permalink:"/graphing/docs/server/starting",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/server/starting.md",version:"current",sidebar:"docs",previous:{title:"Stack",permalink:"/graphing/docs/stack"},next:{title:"Starting the client",permalink:"/graphing/docs/client/starting"}},c=[{value:"Requirements",id:"requirements",children:[]}],p={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page will help you on how to run the backend of this repo"),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"You will need to have NodeJS on your machine and an account and cluster on ",Object(i.b)("a",{parentName:"p",href:"https://www.mongodb.com/cloud/atlas"},"MongoDB Atlas"),". With that setup, ",Object(i.b)("inlineCode",{parentName:"p"},"cd")," to ",Object(i.b)("inlineCode",{parentName:"p"},"graphing/server")," and run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install\n")),Object(i.b)("p",null,"for this project I'm running the NodeJS server with ",Object(i.b)("a",{parentName:"p",href:"https://github.com/remy/nodemon"},"nodemon"),". To do so you can type:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"nodemon app\n")),Object(i.b)("p",null,"The only thing last is to add the URL of your MongoDB Atlas cluster to mongoose.connect on ",Object(i.b)("inlineCode",{parentName:"p"},"app.js"),". Mine looks something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"'mongodb+srv://USER_NAME:USER_PASS@cluster0.xyz.mongodb.net/'\n")),Object(i.b)("p",null,"So you're ready to go and the server is listening for requests on port ",Object(i.b)("inlineCode",{parentName:"p"},"4000")))}d.isMDXComponent=!0}}]);