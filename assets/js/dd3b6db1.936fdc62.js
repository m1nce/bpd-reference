"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[2105],{1654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(4848),r=n(8453);n(8597),n(8205);const a={sidebar_position:4},i=void 0,o={id:"documentation/plotting/Line Plot",title:"Line Plot",description:"df.plot(kind='line', x = datacol, y=datacol)",source:"@site/docs/documentation/plotting/Line Plot.md",sourceDirName:"documentation/plotting",slug:"/documentation/plotting/Line Plot",permalink:"/bpd-reference/docs/documentation/plotting/Line Plot",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/plotting/Line Plot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Bar Plot",permalink:"/bpd-reference/docs/documentation/plotting/Bar Plot"},next:{title:"for-loops",permalink:"/bpd-reference/docs/documentation/for-loops/"}},d={},c=[];function l(e){const t={a:"a",code:"code",hr:"hr",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:"df.plot(kind='line', x = data_col, y=data_col)"}),"\n",(0,s.jsxs)("div",{className:"base",children:[(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Create a line plot using a DataFrame."})}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{className:"term",children:"Input:"}),(0,s.jsxs)("dd",{className:"parameter",children:["kind : ",(0,s.jsx)("em",{children:"string"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"To create a scatter plot, use kind='line'"}),(0,s.jsxs)("dd",{className:"parameter",children:["x : ",(0,s.jsx)("em",{children:"label"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"Column for horizontal coordinates of each point."}),(0,s.jsxs)("dd",{className:"parameter",children:["y : ",(0,s.jsx)("em",{children:"label"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"Column for vertical coordinates of each point.."}),(0,s.jsx)("dt",{className:"term",children:"Returns:"}),(0,s.jsxs)("dd",{children:["plot - Matplotlib plot created using ",(0,s.jsx)(t.a,{href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html",children:"parameters"}),"."]}),(0,s.jsx)("dt",{className:"term",children:"Return Type:"}),(0,s.jsx)("dd",{children:"Matplotlib plot"})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"pets.sort_values(by='Age').plot(kind='line', x='Age', y='Weight')\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Line plot example 1",src:n(3874).A+"",width:"543",height:"432"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8597:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4848);const r=e=>{let{data:t}=e,n=[],r=[],a="",i=[];if(t){const e=JSON.parse(t);n=e.columns||[],r=e.data||[],a=e.indexName||"Index",i=e.index||[]}return(0,s.jsx)("div",{className:"dataframe-container",children:(0,s.jsxs)("table",{className:"dataframe-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:a}),n.map(((e,t)=>(0,s.jsx)("th",{children:e},t)))]})}),(0,s.jsx)("tbody",{children:r.map(((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"index-value",children:i[t]}),e.map(((e,t)=>{return(0,s.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},t);var n}))]},t)))})]})})}},8205:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4848);const r=e=>{let{data:t}=e,n=[],r=[],a="",i="";if(t)try{const e=JSON.parse(t);a=e.name||"",i=e.dtype||"Unknown type",n=e.index||[],r=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const o=r.map((e=>JSON.stringify(e)));return(0,s.jsxs)("div",{className:"series-container",children:[(0,s.jsx)("ul",{className:"series-list",children:o.map(((e,t)=>(0,s.jsxs)("li",{className:"series-item",children:[(0,s.jsx)("span",{className:"series-index",children:n[t]}),(0,s.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},t)))}),(0,s.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",i]})]})}},3874:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/lineex1-bd977f88db38952c1460afeb3dd0635d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);