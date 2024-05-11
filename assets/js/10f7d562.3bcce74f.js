"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[2720],{1923:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=a(4848),s=a(8453),r=a(8597);a(8205);const i={sidebar_position:7},o=void 0,c={id:"documentation/Grouping/aggregation/min()",title:"min()",description:"df.groupby(column_name).min()",source:"@site/docs/documentation/Grouping/aggregation/min().md",sourceDirName:"documentation/Grouping/aggregation",slug:"/documentation/Grouping/aggregation/min()",permalink:"/bpd-reference/docs/documentation/Grouping/aggregation/min()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/Grouping/aggregation/min().md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"median()",permalink:"/bpd-reference/docs/documentation/Grouping/aggregation/median()"},next:{title:"sum()",permalink:"/bpd-reference/docs/documentation/Grouping/aggregation/sum()"}},d={},l=[];function m(e){const n={code:"code",hr:"hr",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"df.groupby(column_name).min()"}),"\n",(0,t.jsxs)("div",{className:"base",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Returns a DataFrame, with rows as groups, and each column as the min of the column values within each group."})}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{className:"term",children:"Note:"}),(0,t.jsxs)("dd",{children:["Columns with String values display the minimum alphabetical starting character (ex. ",(0,t.jsx)("code",{children:'"black"'})," is alphabetically before ",(0,t.jsx)("code",{children:'"golden"'})," and ",(0,t.jsx)("code",{children:'"white"'}),")."]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets\n"})}),"\n",(0,t.jsx)(r.A,{data:'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets.groupby('Species').min()\n"})}),"\n",(0,t.jsx)(r.A,{data:'{"columns":["ID","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":["cat","dog","hamster"],"data":[["cat_001","black",1.5,0.0,true,"****All you need is love and a cat.****"],["dog_001","black",25.0,0.5,false,"      There are no bad dogs, only bad owners."],["ham_001","black",0.25,0.2,false,"No, thank you!"]]}'})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8597:(e,n,a)=>{a.d(n,{A:()=>s});a(6540);var t=a(4848);const s=e=>{let{data:n}=e,a=[],s=[],r="",i=[];if(n){const e=JSON.parse(n);a=e.columns||[],s=e.data||[],r=e.indexName||"Index",i=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:r})," ",a.map(((e,n)=>(0,t.jsx)("th",{children:e},n)))]})}),(0,t.jsx)("tbody",{children:s.map(((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:i[n]})," ",e.map(((e,n)=>(0,t.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},n)))]},n)))})]})})}},8205:(e,n,a)=>{a.d(n,{A:()=>s});a(6540);var t=a(4848);const s=e=>{let{data:n}=e,a=[],s=[],r="",i="";if(n)try{const e=JSON.parse(n);r=e.name||"",i=e.dtype||"Unknown type",a=e.index||[],s=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const o=s.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:o.map(((e,n)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:a[n]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",r,", dtype: ",i]})]})}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);