"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[5622],{1168:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var t=r(4848),a=r(8453),s=(r(8597),r(8205));const c={sidebar_position:1},i=void 0,d={id:"documentation/arrays-and-numpy/np.percentile()",title:"np.percentile()",description:"np.percentile(arr, p)",source:"@site/docs/documentation/arrays-and-numpy/np.percentile().md",sourceDirName:"documentation/arrays-and-numpy",slug:"/documentation/arrays-and-numpy/np.percentile()",permalink:"/bpd-reference/docs/documentation/arrays-and-numpy/np.percentile()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/arrays-and-numpy/np.percentile().md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"np.count_nonzero()",permalink:"/bpd-reference/docs/documentation/arrays-and-numpy/np.count_nonzero()"},next:{title:"np.round()",permalink:"/bpd-reference/docs/documentation/arrays-and-numpy/np.round()"}},o={},l=[];function p(e){const n={code:"code",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"np.percentile(arr, p)"}),"\n",(0,t.jsxs)("div",{className:"base",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"The pth percentile of the numbers in arr."})}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{className:"term",children:"Input:"}),(0,t.jsxs)("dd",{className:"parameter",children:["arr : ",(0,t.jsx)("em",{children:"array"})]}),(0,t.jsx)("dd",{className:"parameter-description",children:"The array from which to calculate the percentile."}),(0,t.jsxs)("dd",{className:"parameter",children:["p : ",(0,t.jsx)("em",{children:"float or array of floats"})]}),(0,t.jsx)("dd",{className:"parameter-description",children:"Percentile or sequence of percentiles to compute, which must be between 0 and 100 inclusive."}),(0,t.jsx)("dt",{className:"term",children:"Returns:"}),(0,t.jsx)("dd",{children:"percentile - The pth percentile of the array values."}),(0,t.jsx)("dt",{className:"term",children:"Return Type:"}),(0,t.jsx)("dd",{children:"float or ndarray"}),(0,t.jsx)("dd",{className:"return-description",children:"The result is a single float if p is a single percentile or an ndarray if multiple percentiles are given."})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"weight_ser = pets.get('Weight')\r\nweight_ser\n"})}),"\n",(0,t.jsx)(s.A,{data:'{"name":"Weight","dtype":"float64","index":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002"],"data":[40.0,15.0,20.0,80.0,25.0,1.0,0.25]}'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"weight_arr = np.array(weight_ser)\r\nweight_arr\n"})}),"\n",(0,t.jsx)(n.p,{children:"array([40.  , 15.  , 20.  , 80.  , 25.  ,  1.  ,  0.25])"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"np.percentile(weight_arr, 50)\n"})}),"\n",(0,t.jsx)(n.p,{children:"12.5"})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8597:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4848);const a=e=>{let{data:n}=e,r=[],a=[],s="",c=[];if(n){const e=JSON.parse(n);r=e.columns||[],a=e.data||[],s=e.indexName||"Index",c=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:s}),r.map(((e,n)=>(0,t.jsx)("th",{children:e},n)))]})}),(0,t.jsx)("tbody",{children:a.map(((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:c[n]}),e.map(((e,n)=>{return(0,t.jsx)("td",{children:(r=e,"boolean"==typeof r?r.toString().charAt(0).toUpperCase()+r.toString().slice(1):r)},n);var r}))]},n)))})]})})}},8205:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4848);const a=e=>{let{data:n}=e,r=[],a=[],s="",c="";if(n)try{const e=JSON.parse(n);s=e.name||"",c=e.dtype||"Unknown type",r=e.index||[],a=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const i=a.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:i.map(((e,n)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:r[n]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",s,", dtype: ",c]})]})}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(6540);const a={},s=t.createContext(a);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);