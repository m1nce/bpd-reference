"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[1860],{4544:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(4848),t=n(8453),a=n(8205);const i={sidebar_position:16},o=void 0,c={id:"series-methods/ser.str.contains()",title:"ser.str.contains()",description:"ser.str.contains(substring)",source:"@site/docs/series-methods/ser.str.contains().md",sourceDirName:"series-methods",slug:"/series-methods/ser.str.contains()",permalink:"/bpd-reference/docs/series-methods/ser.str.contains()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/series-methods/ser.str.contains().md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"ser.str.len()",permalink:"/bpd-reference/docs/series-methods/ser.str.len()"},next:{title:"Arrays and NumPy",permalink:"/bpd-reference/docs/category/arrays-and-numpy"}},d={},l=[];function m(e){const s={code:"code",hr:"hr",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:"ser.str.contains(substring)"}),"\n",(0,r.jsxs)("div",{className:"base",children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Tests if a substring is contained within each element of the Series."})}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{className:"term",children:"Input:"}),(0,r.jsxs)("dd",{className:"parameter",children:["substring : ",(0,r.jsx)("em",{children:"string"})]}),(0,r.jsx)("dd",{className:"parameter-description",children:"String to search for."}),(0,r.jsx)("dt",{className:"term",children:"Returns:"}),(0,r.jsx)("dd",{children:"Returns a Series with a boolean value for each element expressing if each element contained the inputted substring."}),(0,r.jsx)("dt",{className:"term",children:"Return Type:"}),(0,r.jsx)("dd",{children:"Series"})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"comment_ser = pets.get('Owner_Comment')\ncomment_ser\n"})}),"\n",(0,r.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"comment_ser.str.contains('dog')\n"})}),"\n",(0,r.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"bool","index":[0,1,2,3,4,5,6,7],"data":[true,false,false,false,true,false,false,false]}'})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8205:(e,s,n)=>{n.d(s,{A:()=>t});n(6540);var r=n(4848);const t=e=>{let{data:s}=e,n=[],t=[],a="",i="";if(s)try{const e=JSON.parse(s);a=e.name||"",i=e.dtype||"Unknown type",n=e.index||[],t=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const o=t.map((e=>JSON.stringify(e)));return(0,r.jsxs)("div",{className:"series-container",children:[(0,r.jsx)("ul",{className:"series-list",children:o.map(((e,s)=>(0,r.jsxs)("li",{className:"series-item",children:[(0,r.jsx)("span",{className:"series-index",children:n[s]}),(0,r.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,r.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",i]})]})}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var r=n(6540);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);