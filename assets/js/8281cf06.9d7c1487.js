"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[6157],{8593:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var a=n(4848),t=n(8453),r=n(8597);const d={sidebar_position:1},c=void 0,o={id:"accessing-data/df.shape",title:"df.shape",description:"df.shape",source:"@site/docs/accessing-data/df.shape.md",sourceDirName:"accessing-data",slug:"/accessing-data/df.shape",permalink:"/bpd-reference/docs/accessing-data/df.shape",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/accessing-data/df.shape.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Accessing Data",permalink:"/bpd-reference/docs/accessing-data/"},next:{title:"df.get()",permalink:"/bpd-reference/docs/accessing-data/df.get()"}},i={},l=[];function h(e){const s={code:"code",hr:"hr",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{children:"df.shape"}),"\n",(0,a.jsxs)("div",{className:"base",children:[(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"Return a tuple representing the dimensionality of the DataFrame."})}),(0,a.jsxs)("dl",{children:[(0,a.jsx)("dt",{className:"term",children:"Returns:"}),(0,a.jsx)("dd",{children:"a tuple representing the dimensionality of the DataFrame."}),(0,a.jsx)("dt",{className:"term",children:"Return Type:"}),(0,a.jsx)("dd",{children:"Tuple"}),(0,a.jsx)("dt",{className:"term",children:"Note:"}),(0,a.jsxs)("dd",{children:[(0,a.jsx)(s.code,{children:"df.shape[0]"})," returns the number of ",(0,a.jsx)("strong",{children:"observations (rows)"})," in the DataFrame."]}),(0,a.jsxs)("dd",{children:[(0,a.jsx)(s.code,{children:"df.shape[1]"})," returns the number of ",(0,a.jsx)("strong",{children:"variables (columns)"})," in the DataFrame."]})]})]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"pets\n"})}),"\n",(0,a.jsx)(r.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"pets.shape\n"})}),"\n",(0,a.jsx)(s.p,{children:"(8, 7)"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"pets.shape[0]\n"})}),"\n",(0,a.jsx)(s.p,{children:"8"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"pets.shape[1]\n"})}),"\n",(0,a.jsx)(s.p,{children:"7"})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8597:(e,s,n)=>{n.d(s,{A:()=>t});n(6540);var a=n(4848);const t=e=>{let{data:s}=e,n=[],t=[],r="",d=[];if(s){const e=JSON.parse(s);n=e.columns||[],t=e.data||[],r=e.indexName||"Index",d=e.index||[]}return(0,a.jsx)("div",{className:"dataframe-container",children:(0,a.jsxs)("table",{className:"dataframe-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:r})," ",n.map(((e,s)=>(0,a.jsx)("th",{children:e},s)))]})}),(0,a.jsx)("tbody",{children:t.map(((e,s)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"index-value",children:d[s]})," ",e.map(((e,s)=>(0,a.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},s)))]},s)))})]})})}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var a=n(6540);const t={},r=a.createContext(t);function d(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);