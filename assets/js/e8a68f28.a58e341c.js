"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[265],{7851:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var t=s(4848),a=s(8453),r=s(8597),i=s(8205);const c={sidebar_position:2},o=void 0,d={id:"Functions/Applying Functions",title:"Applying Functions",description:"df.get(columnname).apply(functionname)",source:"@site/docs/Functions/Applying Functions.md",sourceDirName:"Functions",slug:"/Functions/Applying Functions",permalink:"/bpd-reference/docs/Functions/Applying Functions",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/Functions/Applying Functions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Writing Functions",permalink:"/bpd-reference/docs/Functions/Writing Functions"},next:{title:"groupby",permalink:"/bpd-reference/docs/grouping/groupby"}},l={},p=[];function u(e){const n={code:"code",hr:"hr",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:"df.get(column_name).apply(function_name)"}),"\n",(0,t.jsxs)("div",{className:"base",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Applies a function of one parameter to every entry in the column."})}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{className:"term",children:"Input:"}),(0,t.jsxs)("dd",{className:"parameter",children:["function_name: ",(0,t.jsx)("em",{children:"a python function"})]}),(0,t.jsx)("dd",{className:"parameter-description",children:"The function to apply to every entry in the column. This function should take a single parameter and return a value."}),(0,t.jsx)("dt",{className:"term",children:"Returns:"}),(0,t.jsx)("dd",{children:" A Series of the same size containing the results of the function application."}),(0,t.jsx)("dt",{className:"term",children:"Return Type:"}),(0,t.jsx)("dd",{className:"parameter",children:"Series:"}),(0,t.jsx)("dd",{className:"parameter-description",children:"The returned Series will have the same index as the input Series and will contain the transformed values based on the applied function."})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets\n"})}),"\n",(0,t.jsx)(r.A,{data:'{"columns":["Species","Color","Weight","Age"],"index":[0,1,2,3,4,5,6],"data":[["dog","black",40.0,5.0],["cat","golden",15.0,8.0],["cat","black",20.0,9.0],["dog","white",80.0,2.0],["dog","black",25.0,0.5],["hamster","black",1.0,3.0],["hamster","golden",0.25,0.2]]}'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets.get('Species').apply(is_dog)\n"})}),"\n",(0,t.jsx)(i.A,{data:'{"name":"Species","dtype":"bool", "index":["0","1","2","3","4","5","6"],"data":["True","False","False","True","True","False","False"]}'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pets.get('Weight').apply(np.sqrt)\n"})}),"\n",(0,t.jsx)(i.A,{data:'{"name":"Weights","dtype":"float64", "index":["0","1","2","3","4","5","6","7"],"data":["6.324555","3.872983","4.472136","8.944272","5.000000","1.000000","0.500000"]}'})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8597:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var t=s(4848);const a=e=>{let{data:n}=e,s=[],a=[],r="",i=[];if(n){const e=JSON.parse(n);s=e.columns||[],a=e.data||[],r=e.indexName||"Index",i=e.index||[]}return(0,t.jsx)("div",{className:"dataframe-container",children:(0,t.jsxs)("table",{className:"dataframe-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:r})," ",s.map(((e,n)=>(0,t.jsx)("th",{children:e},n)))]})}),(0,t.jsx)("tbody",{children:a.map(((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"index-value",children:i[n]})," ",e.map(((e,n)=>(0,t.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},n)))]},n)))})]})})}},8205:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var t=s(4848);const a=e=>{let{data:n}=e,s=[],a=[],r="",i="";if(n)try{const e=JSON.parse(n);r=e.name||"",i=e.dtype||"Unknown type",s=e.index||[],a=e.data||[]}catch(o){console.error("Error parsing data prop in SeriesComponent:",o)}const c=a.map((e=>JSON.stringify(e)));return(0,t.jsxs)("div",{className:"series-container",children:[(0,t.jsx)("ul",{className:"series-list",children:c.map(((e,n)=>(0,t.jsxs)("li",{className:"series-item",children:[(0,t.jsx)("span",{className:"series-index",children:s[n]}),(0,t.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},n)))}),(0,t.jsxs)("div",{className:"series-footer",children:["Name: ",r,", dtype: ",i]})]})}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);