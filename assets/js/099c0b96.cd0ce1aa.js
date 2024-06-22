"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[3717],{8284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(4848),s=n(8453);n(8597),n(5158);const i={sidebar_position:3,sidebar_label:"Parameters and Statistics",title:"Parameters and Statistics"},a=void 0,o={id:"statistical-inference/parameters-and-statistics",title:"Parameters and Statistics",description:"Concept",source:"@site/docs/statistical-inference/parameters-and-statistics.md",sourceDirName:"statistical-inference",slug:"/statistical-inference/parameters-and-statistics",permalink:"/bpd-reference/docs/statistical-inference/parameters-and-statistics",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/statistical-inference/parameters-and-statistics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Parameters and Statistics",title:"Parameters and Statistics"},sidebar:"statsSidebar",previous:{title:"Sample",permalink:"/bpd-reference/docs/statistical-inference/random sampling/df.sample()"},next:{title:"Null & Alternative Hypothesis",permalink:"/bpd-reference/docs/statistical-inference/null_and_alt"}},c={},d=[{value:"Concept",id:"concept",level:2}];function l(e){const t={admonition:"admonition",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,r.jsxs)(t.admonition,{title:"Terminology",type:"info",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Parameter"}),": A number associated with the population."]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Example: The population mean."}),"\n"]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Statistic"}),": A number computed from the ",(0,r.jsx)(t.strong,{children:"sample"}),"."]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Example: The sample mean."}),"\n"]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Statistical Inference"}),": The practice of making conclusions about a population, using data from a random sample. In other words, the practice of using statistic to predict parameter."]})]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsxs)(t.p,{children:["To remember: ",(0,r.jsx)(t.strong,{children:"p"}),"arameter and ",(0,r.jsx)(t.strong,{children:"p"}),"opulation both start with p, ",(0,r.jsx)(t.strong,{children:"s"}),"tatistic and ",(0,r.jsx)(t.strong,{children:"s"}),"ample both start with s."]})]}),"\n",(0,r.jsx)(t.p,{children:"The diagram below provides an overview of relationship between parameter and statistic."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8597:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4848);const s=e=>{let{data:t}=e,n=[],s=[],i="",a=[];if(t){const e=JSON.parse(t);n=e.columns||[],s=e.data||[],i=e.indexName||"Index",a=e.index||[]}return(0,r.jsx)("div",{className:"dataframe-container",children:(0,r.jsxs)("table",{className:"dataframe-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:i}),n.map(((e,t)=>(0,r.jsx)("th",{children:e},t)))]})}),(0,r.jsx)("tbody",{children:s.map(((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"index-value",children:a[t]}),e.map(((e,t)=>{return(0,r.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},t);var n}))]},t)))})]})})}},5158:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(6540),s=n(4848);const i=function(e){let{src:t,sourceLink:n,aspectRatio:i=16/9}=e;const[a,o]=(0,r.useState)(0),[c,d]=(0,r.useState)(0),l=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=()=>{if(l.current){const e=l.current.offsetWidth;d(e/i)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[i]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{ref:l,style:{width:"100%",position:"relative",maxWidth:"100%",backgroundColor:"white"},children:(0,s.jsx)("iframe",{src:t,style:{width:"100%",height:`${c}px`,border:"0",allowFullScreen:!0}},a)}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,s.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,s.jsx)("button",{onClick:()=>{o((e=>e+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#45a049",onMouseOut:e=>e.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);