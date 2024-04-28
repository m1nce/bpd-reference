"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[5633],{98:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var t=r(4848),n=r(8453),o=r(8205);const a={sidebar_position:10},i=void 0,d={id:"series-methods/ser.str.lower()",title:"ser.str.lower()",description:"ser.str.lower()",source:"@site/docs/series-methods/ser.str.lower().md",sourceDirName:"series-methods",slug:"/series-methods/ser.str.lower()",permalink:"/bpd-reference/docs/series-methods/ser.str.lower()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/series-methods/ser.str.lower().md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"ser.str.strip()",permalink:"/bpd-reference/docs/series-methods/ser.str.strip()"},next:{title:"ser.str.upper()",permalink:"/bpd-reference/docs/series-methods/ser.str.upper()"}},c={},l=[];function p(e){const s={code:"code",hr:"hr",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"ser.str.lower()"}),"\n",(0,t.jsxs)("div",{className:"base",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Converts strings in the Series to lowercase."})}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{className:"term",children:"Returns:"}),(0,t.jsx)("dd",{children:"Returns a Series with each element lowercased."}),(0,t.jsx)("dt",{className:"term",children:"Return Type:"}),(0,t.jsx)("dd",{children:"Series"})]})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"comment_ser = pets.get('Owner_Comment')\ncomment_ser\n"})}),"\n",(0,t.jsx)(o.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"comment_ser.str.lower()\n"})}),"\n",(0,t.jsx)(o.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      there are no bad dogs, only bad owners.","my best birthday present ever!!!","****all you need is love and a cat.****","love is a wet nose and a wagging tail.","be the person your dog thinks you are.","no, thank you!","no, thank you!","no, thank you!"]}'})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8205:(e,s,r)=>{r.d(s,{A:()=>n});r(6540);var t=r(4848);const n=e=>{let{data:s}=e,r=[],n=[],o="",a="";if(s)try{const e=JSON.parse(s);o=e.name||"",a=e.dtype||"Unknown type",r=e.index||[],n=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const i=n.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:i.map(((e,s)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:r[s]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",o,", dtype: ",a]})]})}},8453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>i});var t=r(6540);const n={},o=t.createContext(n);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);