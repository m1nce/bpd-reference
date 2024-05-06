"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[7006],{8861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),s=t(8453);t(8597);const i={sidebar_position:1},a=void 0,c={id:"Functions/Writing Functions",title:"Writing Functions",description:"def function_name(parameters):",source:"@site/docs/Functions/Writing Functions.md",sourceDirName:"Functions",slug:"/Functions/Writing Functions",permalink:"/bpd-reference/docs/Functions/Writing Functions",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/Functions/Writing Functions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"df[]",permalink:"/bpd-reference/docs/querying/df[]"},next:{title:"Applying Functions",permalink:"/bpd-reference/docs/Functions/Applying Functions"}},o={},d=[];function l(e){const n={code:"code",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:"def function_name(parameters):"}),"\n",(0,r.jsxs)("div",{className:"base",children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Define a customise function in Python."})}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{className:"term",children:"Input:"}),(0,r.jsxs)("dd",{className:"parameter",children:["parameters: ",(0,r.jsx)("em",{children:"any data type"})]}),(0,r.jsx)("dd",{className:"parameter-description",children:"These parameters are variables that act as placeholders for the values you pass to the function. A function can take a single parameter or a comma-separated list of parameters. Including parameters is optional; a function may operate without any."}),(0,r.jsx)("dt",{className:"term",children:"Returns:"}),(0,r.jsx)("dd",{children:"The result of the function. If there is no return statement, the function returns None by default."}),(0,r.jsx)("dt",{className:"term",children:"Return Type:"}),(0,r.jsx)("dd",{children:"The type of the returned object depends on the value provided by the return expression. If no return statement is used, the return type is NoneType."})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def is_dog(species):\n    if species == 'dog':\n        return True\n    return False\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"is_dog('dog')\n"})}),"\n",(0,r.jsx)(n.p,{children:"True"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8597:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4848);const s=e=>{let{data:n}=e,t=[],s=[],i="",a=[];if(n){const e=JSON.parse(n);t=e.columns||[],s=e.data||[],i=e.indexName||"Index",a=e.index||[]}return(0,r.jsx)("div",{className:"dataframe-container",children:(0,r.jsxs)("table",{className:"dataframe-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:i})," ",t.map(((e,n)=>(0,r.jsx)("th",{children:e},n)))]})}),(0,r.jsx)("tbody",{children:s.map(((e,n)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"index-value",children:a[n]})," ",e.map(((e,n)=>(0,r.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},n)))]},n)))})]})})}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);