"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[3746],{3615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(4848),s=r(8453);r(8597);const a={sidebar_position:2},c=void 0,i={id:"data format conversion/list()",title:"list()",description:"list(arr)",source:"@site/docs/data format conversion/list().md",sourceDirName:"data format conversion",slug:"/data format conversion/list()",permalink:"/bpd-reference/docs/data format conversion/list()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/data format conversion/list().md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"np.array",permalink:"/bpd-reference/docs/data format conversion/np.array"},next:{title:"Querying",permalink:"/bpd-reference/docs/category/querying"}},o={},d=[];function l(e){const t={code:"code",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{children:"list(arr)"}),"\n",(0,n.jsxs)("div",{className:"base",children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Casts an array into a list."})}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"term",children:"Input:"}),(0,n.jsxs)("dd",{className:"parameter",children:["arr : ",(0,n.jsx)("em",{children:"array"})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"Array that you want to cast into a list"}),(0,n.jsx)("dt",{className:"term",children:"Returns:"}),(0,n.jsx)("dd",{children:"new_list - A new list that contains every element from the array, in list form."}),(0,n.jsx)("dt",{className:"term",children:"Return Type:"}),(0,n.jsx)("dd",{children:"List"})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'pets_arr = np.array(["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"])\npet_arr\n'})}),"\n",(0,n.jsx)(t.p,{children:'array(["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"])'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"pet_list = list(pet_arr)\npet_list\n"})}),"\n",(0,n.jsx)(t.p,{children:'["dog", "cat", "hamster", "cat", "cat", "dog", "dog", "hamster", "hamster"]'})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8597:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(4848);const s=e=>{let{data:t}=e,r=[],s=[],a="",c=[];if(t){const e=JSON.parse(t);r=e.columns||[],s=e.data||[],a=e.indexName||"Index",c=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:a})," ",r.map(((e,t)=>(0,n.jsx)("th",{children:e},t)))]})}),(0,n.jsx)("tbody",{children:s.map(((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:c[t]})," ",e.map(((e,t)=>(0,n.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},t)))]},t)))})]})})}},8453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(6540);const s={},a=n.createContext(s);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);