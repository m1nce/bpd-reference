"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[59],{1056:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(4848),t=n(8453),a=(n(8597),n(8205));const i={sidebar_position:1},d=void 0,c={id:"arrays-and-numpy/arr[]",title:"arr[]",description:"arr[index]",source:"@site/docs/arrays-and-numpy/arr[].md",sourceDirName:"arrays-and-numpy",slug:"/arrays-and-numpy/arr[]",permalink:"/bpd-reference/docs/arrays-and-numpy/arr[]",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/arrays-and-numpy/arr[].md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Arrays and NumPy",permalink:"/bpd-reference/docs/category/arrays-and-numpy"},next:{title:"Plotting",permalink:"/bpd-reference/docs/category/plotting"}},o={},l=[];function p(e){const r={code:"code",hr:"hr",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("code",{children:"arr[index]"}),"\n",(0,s.jsxs)("div",{className:"base",children:[(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Retrieve the element at position index in the array arr. The first element is arr[0]."})}),(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{className:"term",children:"Input:"}),(0,s.jsxs)("dd",{className:"parameter",children:["index : ",(0,s.jsx)("em",{children:"integer"})]}),(0,s.jsx)("dd",{className:"parameter-description",children:"Position of desired element to retrieve in array."}),(0,s.jsx)("dt",{className:"term",children:"Returns:"}),(0,s.jsx)("dd",{children:"element - data in the specified index of the array"}),(0,s.jsx)("dt",{className:"term",children:"Return Type:"}),(0,s.jsx)("dd",{children:"integer, float, string, list, etc."})]})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"weight_ser = pets.get('Weight')\nweight_ser\n"})}),"\n",(0,s.jsx)(a.A,{data:'{"name":"Weight","dtype":"float64","index":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002"],"data":[40.0,15.0,20.0,80.0,25.0,1.0,0.25]}'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"weight_arr = np.array(weight_ser)\nweight_arr\n"})}),"\n",(0,s.jsx)(r.p,{children:"array([40.  , 15.  , 20.  , 80.  , 25.  ,  1.  ,  0.25])"})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8597:(e,r,n)=>{n.d(r,{A:()=>t});n(6540);var s=n(4848);const t=e=>{let{data:r}=e,n=[],t=[],a="",i=[];if(r){const e=JSON.parse(r);n=e.columns||[],t=e.data||[],a=e.indexName||"Index",i=e.index||[]}return(0,s.jsx)("div",{className:"dataframe-container",children:(0,s.jsxs)("table",{className:"dataframe-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:a})," ",n.map(((e,r)=>(0,s.jsx)("th",{children:e},r)))]})}),(0,s.jsx)("tbody",{children:t.map(((e,r)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"index-value",children:i[r]})," ",e.map(((e,r)=>(0,s.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},r)))]},r)))})]})})}},8205:(e,r,n)=>{n.d(r,{A:()=>t});n(6540);var s=n(4848);const t=e=>{let{data:r}=e,n=[],t=[],a="",i="";if(r)try{const e=JSON.parse(r);a=e.name||"",i=e.dtype||"Unknown type",n=e.index||[],t=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const d=t.map((e=>JSON.stringify(e)));return(0,s.jsxs)("div",{className:"series-container",children:[(0,s.jsx)("ul",{className:"series-list",children:d.map(((e,r)=>(0,s.jsxs)("li",{className:"series-item",children:[(0,s.jsx)("span",{className:"series-index",children:n[r]}),(0,s.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},r)))}),(0,s.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",i]})]})}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var s=n(6540);const t={},a=s.createContext(t);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);