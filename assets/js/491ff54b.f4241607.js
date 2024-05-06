"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[9278],{5886:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=t(4848),s=t(8453),d=t(8597);const r={sidebar_position:6},c=void 0,i={id:"accessing-data/df.take()",title:"df.take()",description:"df.take(indices)",source:"@site/docs/accessing-data/df.take().md",sourceDirName:"accessing-data",slug:"/accessing-data/df.take()",permalink:"/bpd-reference/docs/accessing-data/df.take()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/accessing-data/df.take().md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"df.index",permalink:"/bpd-reference/docs/accessing-data/df.index"},next:{title:"Series Methods",permalink:"/bpd-reference/docs/series-methods/"}},o={},l=[];function h(e){const a={code:"code",hr:"hr",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{children:"df.take(indices)"}),"\n",(0,n.jsxs)("div",{className:"base",children:[(0,n.jsx)("p",{children:(0,n.jsxs)("strong",{children:["Return the elements in the given ",(0,n.jsx)("em",{children:"positional"})," indices."]})}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"term",children:"Input:"}),(0,n.jsxs)("dd",{className:"parameter",children:["indices : ",(0,n.jsx)("em",{children:"array"})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"An array of ints indicating which positions to take."}),(0,n.jsx)("dt",{className:"term",children:"Returns:"}),(0,n.jsx)("dd",{children:"df - DataFrame with only the indices specified."}),(0,n.jsx)("dt",{className:"term",children:"Return Type:"}),(0,n.jsx)("dd",{children:"DataFrame"})]})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"pets\n"})}),"\n",(0,n.jsx)(d.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4,5,6,7],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],["ham_001","hamster","black",1.0,3.0,false,"No, thank you!"],["ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],["cat_003","cat","black",10.0,0.0,true,"No, thank you!"]]}'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"# 0, 2, 4 indices.\npets.take(np.arange(0, 6, 2))\n"})}),"\n",(0,n.jsx)(d.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,2,4],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."]]}'})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8597:(e,a,t)=>{t.d(a,{A:()=>s});t(6540);var n=t(4848);const s=e=>{let{data:a}=e,t=[],s=[],d="",r=[];if(a){const e=JSON.parse(a);t=e.columns||[],s=e.data||[],d=e.indexName||"Index",r=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:d})," ",t.map(((e,a)=>(0,n.jsx)("th",{children:e},a)))]})}),(0,n.jsx)("tbody",{children:s.map(((e,a)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:r[a]})," ",e.map(((e,a)=>(0,n.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},a)))]},a)))})]})})}},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>c});var n=t(6540);const s={},d=n.createContext(s);function r(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);