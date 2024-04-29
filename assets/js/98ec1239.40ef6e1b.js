"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[1345],{8427:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var n=a(4848),t=a(8453),c=a(8597),r=a(8205);const d={sidebar_position:1},i=void 0,o={id:"accessing-data/df.get()",title:"df.get()",description:"df.get(columnname)ordf.get([col1name, ..., colk_name])",source:"@site/docs/accessing-data/df.get().md",sourceDirName:"accessing-data",slug:"/accessing-data/df.get()",permalink:"/bpd-reference/docs/accessing-data/df.get()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/accessing-data/df.get().md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Accessing Data",permalink:"/bpd-reference/docs/category/accessing-data"},next:{title:"df.index[]",permalink:"/bpd-reference/docs/accessing-data/df.index[]"}},l={},m=[];function p(e){const s={code:"code",hr:"hr",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{children:"df.get(column_name)"}),"\n",(0,n.jsx)("strong",{children:"or"}),"\n",(0,n.jsx)("code",{children:"df.get([col_1_name, ..., col_k_name])"}),"\n",(0,n.jsxs)("div",{className:"base",children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Return column(s) from DataFrame"})}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"term",children:"Returns:"}),(0,n.jsx)("dd",{children:"Series or Dataframe with the corresponding key(s)"}),(0,n.jsx)("dt",{className:"term",children:"Return Type:"}),(0,n.jsx)("dd",{children:"Series or DataFrame"}),(0,n.jsx)("dt",{className:"term",children:"Note:"}),(0,n.jsx)("dd",{children:"Can return a dataframe of one column by putting the column name in square brackets"})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"pets\n"})}),"\n",(0,n.jsx)(c.A,{data:'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"pets.get('Species')\n"})}),"\n",(0,n.jsx)(r.A,{data:'{"name":"Species","index":[0,1,2,3,4,5,6,7],"data":["dog","cat","cat","dog","dog","hamster","hamster","cat"], "dtype":"object"}'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"pets.get(['Species'])\n"})}),"\n",(0,n.jsx)(c.A,{data:'{"columns":["Species"],"index":[0,1,2,3,4,5,6,7],"data":[["dog"],["cat"],["cat"],["dog"],["dog"],["hamster"],["hamster"],["cat"]]}'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"pets.get(['Species', 'Color'])\n"})}),"\n",(0,n.jsx)(c.A,{data:'{"columns":["Species","Color"],"index":[0,1,2,3,4,5,6,7],"data":[["dog","black"],["cat","golden"],["cat","black"],["dog","white"],["dog","black"],["hamster","black"],["hamster","golden"],["cat","black"]]}'})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8597:(e,s,a)=>{a.d(s,{A:()=>t});a(6540);var n=a(4848);const t=e=>{let{data:s}=e,a=[],t=[],c="",r=[];if(s){const e=JSON.parse(s);a=e.columns||[],t=e.data||[],c=e.indexName||"Index",r=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:c})," ",a.map(((e,s)=>(0,n.jsx)("th",{children:e},s)))]})}),(0,n.jsx)("tbody",{children:t.map(((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:r[s]})," ",e.map(((e,s)=>(0,n.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},s)))]},s)))})]})})}},8205:(e,s,a)=>{a.d(s,{A:()=>t});a(6540);var n=a(4848);const t=e=>{let{data:s}=e,a=[],t=[],c="",r="";if(s)try{const e=JSON.parse(s);c=e.name||"",r=e.dtype||"Unknown type",a=e.index||[],t=e.data||[]}catch(i){console.error("Error parsing data prop in SeriesComponent:",i)}const d=t.map((e=>JSON.stringify(e)));return(0,n.jsxs)("div",{className:"series-container",children:[(0,n.jsx)("ul",{className:"series-list",children:d.map(((e,s)=>(0,n.jsxs)("li",{className:"series-item",children:[(0,n.jsx)("span",{className:"series-index",children:a[s]}),(0,n.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,n.jsxs)("div",{className:"series-footer",children:["Name: ",c,", dtype: ",r]})]})}},8453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>d});var n=a(6540);const t={},c=n.createContext(t);function r(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);