"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[59],{1056:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var a=n(4848),s=n(8453),t=(n(8597),n(8205));const d={sidebar_position:1},i=void 0,c={id:"arrays-and-numpy/arr[]",title:"arr[]",description:"arr[index]",source:"@site/docs/arrays-and-numpy/arr[].md",sourceDirName:"arrays-and-numpy",slug:"/arrays-and-numpy/arr[]",permalink:"/bpd-reference/docs/arrays-and-numpy/arr[]",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/arrays-and-numpy/arr[].md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Arrays and NumPy",permalink:"/bpd-reference/docs/category/arrays-and-numpy"},next:{title:"np.append()",permalink:"/bpd-reference/docs/arrays-and-numpy/np.append()"}},o={},l=[];function p(e){const r={code:"code",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{children:"arr[index]"}),"\n",(0,a.jsxs)("div",{className:"base",children:[(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"Retrieve the element at position index in the array arr. The first element is arr[0]."})}),(0,a.jsxs)("dl",{children:[(0,a.jsx)("dt",{className:"term",children:"Input:"}),(0,a.jsxs)("dd",{className:"parameter",children:["index : ",(0,a.jsx)("em",{children:"integer"})]}),(0,a.jsx)("dd",{className:"parameter-description",children:"Position of desired element to retrieve in array."}),(0,a.jsx)("dt",{className:"term",children:"Returns:"}),(0,a.jsx)("dd",{children:"element - data in the specified index of the array"}),(0,a.jsx)("dt",{className:"term",children:"Return Type:"}),(0,a.jsx)("dd",{children:"integer, float, string, list, etc."})]})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"weight_ser = pets.get('Weight')\nweight_ser\n"})}),"\n",(0,a.jsx)(t.A,{data:'{"name":"Weight","dtype":"float64","index":["dog_001","cat_001","cat_002","dog_002","dog_003","ham_001","ham_002"],"data":[40.0,15.0,20.0,80.0,25.0,1.0,0.25]}'}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"weight_arr = np.array(weight_ser)\nweight_arr\n"})}),"\n",(0,a.jsx)(r.p,{children:"array([40.  , 15.  , 20.  , 80.  , 25.  ,  1.  ,  0.25])"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"age_ser = pets.get('Age')\nage_ser\n"})}),"\n",(0,a.jsx)(t.A,{data:'{"name":"Age","dtype":"float64","index":[0,1,2,3,4,5,6,7],"data":[5.0,0.2,9.0,2.0,0.5,3.0,0.2,0.0]}'}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"age_arr = np.array(pets.get('Age'))\nage_arr\n"})}),"\n",(0,a.jsx)(r.p,{children:"array([5. , 0.2, 9. , 2. , 0.5, 3. , 0.2, 0. ])"})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8597:(e,r,n)=>{n.d(r,{A:()=>s});n(6540);var a=n(4848);const s=e=>{let{data:r}=e,n=[],s=[],t="",d=[];if(r){const e=JSON.parse(r);n=e.columns||[],s=e.data||[],t=e.indexName||"Index",d=e.index||[]}return(0,a.jsx)("div",{className:"dataframe-container",children:(0,a.jsxs)("table",{className:"dataframe-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:t})," ",n.map(((e,r)=>(0,a.jsx)("th",{children:e},r)))]})}),(0,a.jsx)("tbody",{children:s.map(((e,r)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"index-value",children:d[r]})," ",e.map(((e,r)=>(0,a.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},r)))]},r)))})]})})}},8205:(e,r,n)=>{n.d(r,{A:()=>s});n(6540);var a=n(4848);const s=e=>{let{data:r}=e,n=[],s=[],t="",d="";if(r)try{const e=JSON.parse(r);t=e.name||"",d=e.dtype||"Unknown type",n=e.index||[],s=e.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const i=s.map((e=>JSON.stringify(e)));return(0,a.jsxs)("div",{className:"series-container",children:[(0,a.jsx)("ul",{className:"series-list",children:i.map(((e,r)=>(0,a.jsxs)("li",{className:"series-item",children:[(0,a.jsx)("span",{className:"series-index",children:n[r]}),(0,a.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},r)))}),(0,a.jsxs)("div",{className:"series-footer",children:["Name: ",t,", dtype: ",d]})]})}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var a=n(6540);const s={},t=a.createContext(s);function d(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);