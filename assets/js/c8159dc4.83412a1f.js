"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[1126],{8993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(4848),s=n(8453);n(8597);const a={sidebar_position:4},i=void 0,d={id:"plotting/Line Plot",title:"Line Plot",description:"df.plot(kind='line', x = datacol, y=datacol)",source:"@site/docs/plotting/Line Plot.md",sourceDirName:"plotting",slug:"/plotting/Line Plot",permalink:"/bpd-reference/docs/plotting/Line Plot",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/plotting/Line Plot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bar Plot",permalink:"/bpd-reference/docs/plotting/Bar Plot"},next:{title:"for-loops",permalink:"/bpd-reference/docs/for-loops/"}},o={},l=[];function c(e){const t={a:"a",code:"code",hr:"hr",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:"df.plot(kind='line', x = data_col, y=data_col)"}),"\n",(0,r.jsxs)("div",{className:"base",children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"Create a line plot using a DataFrame."})}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{className:"term",children:"Input:"}),(0,r.jsxs)("dd",{className:"parameter",children:["kind : ",(0,r.jsx)("em",{children:"string"})]}),(0,r.jsx)("dd",{className:"parameter-description",children:"To create a scatter plot, use kind='line'"}),(0,r.jsxs)("dd",{className:"parameter",children:["x : ",(0,r.jsx)("em",{children:"label"})]}),(0,r.jsx)("dd",{className:"parameter-description",children:"Column for horizontal coordinates of each point."}),(0,r.jsxs)("dd",{className:"parameter",children:["y : ",(0,r.jsx)("em",{children:"label"})]}),(0,r.jsx)("dd",{className:"parameter-description",children:"Column for vertical coordinates of each point.."}),(0,r.jsx)("dt",{className:"term",children:"Returns:"}),(0,r.jsxs)("dd",{children:["plot - Matplotlib plot created using ",(0,r.jsx)(t.a,{href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html",children:"parameters"}),"."]}),(0,r.jsx)("dt",{className:"term",children:"Return Type:"}),(0,r.jsx)("dd",{children:"Matplotlib plot"})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"pets.plot(kind='line', x='Age', y='Weight')\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Line plot example 1",src:n(8940).A+"",width:"543",height:"432"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8597:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4848);const s=e=>{let{data:t}=e,n=[],s=[],a="",i=[];if(t){const e=JSON.parse(t);n=e.columns||[],s=e.data||[],a=e.indexName||"Index",i=e.index||[]}return(0,r.jsx)("div",{className:"dataframe-container",children:(0,r.jsxs)("table",{className:"dataframe-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:a})," ",n.map(((e,t)=>(0,r.jsx)("th",{children:e},t)))]})}),(0,r.jsx)("tbody",{children:s.map(((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"index-value",children:i[t]})," ",e.map(((e,t)=>(0,r.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},t)))]},t)))})]})})}},8940:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/lineex1-578a2e67cd622b79f6f20f37ecd04702.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);