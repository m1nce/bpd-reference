"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[6073],{1836:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=r(4848),a=r(8453);r(8597),r(8205);const t={sidebar_position:1},d=void 0,c={id:"arrays-and-numpy/np.arange()",title:"np.arange()",description:"np.arange(start, stop, step)",source:"@site/docs/arrays-and-numpy/np.arange().md",sourceDirName:"arrays-and-numpy",slug:"/arrays-and-numpy/np.arange()",permalink:"/bpd-reference/docs/arrays-and-numpy/np.arange()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/arrays-and-numpy/np.arange().md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"np.append()",permalink:"/bpd-reference/docs/arrays-and-numpy/np.append()"},next:{title:"np.count_nonzero()",permalink:"/bpd-reference/docs/arrays-and-numpy/np.count_nonzero()"}},i={},o=[];function l(e){const n={code:"code",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:"np.arange(start, stop, step)"}),"\n",(0,s.jsxs)("div",{className:"base",children:[(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"An array of numbers starting with start, increasing/decreasing in increments of step, and stopping before (excluding) stop. If start or step are omitted, the default values are 0 and 1, respectively."})}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{className:"term",children:"Input:"}),(0,s.jsxs)("dd",{className:"parameter",children:["start : ",(0,s.jsx)("em",{children:"integer (default 0)"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"The starting value of the sequence."}),(0,s.jsxs)("dd",{className:"parameter",children:["stop : ",(0,s.jsx)("em",{children:"integer"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"The end value of the sequence, which is not included in the output."}),(0,s.jsxs)("dd",{className:"parameter",children:["step : ",(0,s.jsx)("em",{children:"integer (default 1)"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"The difference between each two consecutive values."}),(0,s.jsx)("dt",{className:"term",children:"Returns:"}),(0,s.jsx)("dd",{children:"array - an array of numbers from start to stop, incremented by step"}),(0,s.jsx)("dt",{className:"term",children:"Return Type:"}),(0,s.jsx)("dd",{children:"array"})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"np.arange(1, 9, 2)\n"})}),"\n",(0,s.jsx)(n.p,{children:"array([1, 3, 5, 7])"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"np.arange(10, 2, -3)\n"})}),"\n",(0,s.jsx)(n.p,{children:"array([10,  7,  4])"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8597:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var s=r(4848);const a=e=>{let{data:n}=e,r=[],a=[],t="",d=[];if(n){const e=JSON.parse(n);r=e.columns||[],a=e.data||[],t=e.indexName||"Index",d=e.index||[]}return(0,s.jsx)("div",{className:"dataframe-container",children:(0,s.jsxs)("table",{className:"dataframe-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:t})," ",r.map(((e,n)=>(0,s.jsx)("th",{children:e},n)))]})}),(0,s.jsx)("tbody",{children:a.map(((e,n)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"index-value",children:d[n]})," ",e.map(((e,n)=>(0,s.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},n)))]},n)))})]})})}},8205:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var s=r(4848);const a=e=>{let{data:n}=e,r=[],a=[],t="",d="";if(n)try{const e=JSON.parse(n);t=e.name||"",d=e.dtype||"Unknown type",r=e.index||[],a=e.data||[]}catch(i){console.error("Error parsing data prop in SeriesComponent:",i)}const c=a.map((e=>JSON.stringify(e)));return(0,s.jsxs)("div",{className:"series-container",children:[(0,s.jsx)("ul",{className:"series-list",children:c.map(((e,n)=>(0,s.jsxs)("li",{className:"series-item",children:[(0,s.jsx)("span",{className:"series-index",children:r[n]}),(0,s.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,s.jsxs)("div",{className:"series-footer",children:["Name: ",t,", dtype: ",d]})]})}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(6540);const a={},t=s.createContext(a);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);