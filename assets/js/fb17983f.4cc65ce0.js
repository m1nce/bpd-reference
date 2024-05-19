"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[9595],{2693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);n(8597),n(5158);const r={sidebar_position:4,sidebar_label:"Null & Alternative Hypothesis",title:"Null & Alternative Hypothesis"},o=void 0,a={id:"statistical-inference/null_and_alt",title:"Null & Alternative Hypothesis",description:"Concept",source:"@site/docs/statistical-inference/null_and_alt.md",sourceDirName:"statistical-inference",slug:"/statistical-inference/null_and_alt",permalink:"/bpd-reference/docs/statistical-inference/null_and_alt",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/statistical-inference/null_and_alt.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Null & Alternative Hypothesis",title:"Null & Alternative Hypothesis"},sidebar:"statsSidebar",previous:{title:"Parameters and Statistics",permalink:"/bpd-reference/docs/statistical-inference/parameteres-and-statistics"},next:{title:"Observed & Test Statistic",permalink:"/bpd-reference/docs/statistical-inference/obs_and_test_stats"}},l={},c=[{value:"Concept",id:"concept",level:2}];function d(e){const t={admonition:"admonition",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,i.jsxs)(t.admonition,{title:"Terminology",type:"tip",children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Null Hypothesis"}),": A precise assumption about how the data was generated."]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Example: The coin is fair."}),"\n"]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Alternative hypothesis"}),": A different view about how the data was generated"]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Example: The coin is not fair."}),"\n"]})]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"null hypothesis"})," must be written with ",(0,i.jsx)(t.strong,{children:"equal"})," sign. A statement with uncertainty, such as 'approximately equal', will not be considered as a null hypothesis."]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:['Example: "The coin is fair" can be interpreted as the probability of getting a head is 0.5. If the statement is "the coin is ',(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"almost"})}),' fair" or "the probability of getting a head is ',(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"approximately"})}),' equal to 0.5", it is ',(0,i.jsx)(t.strong,{children:"no longer"})," a null hypothesis."]}),"\n"]}),(0,i.jsxs)(t.p,{children:["Since the ",(0,i.jsx)(t.strong,{children:"alternative hypothesis"})," is different from the null, it can be less than, greater than, or not equal to, but cannot be ",(0,i.jsx)(t.strong,{children:">="})," or ",(0,i.jsx)(t.strong,{children:"<="}),"."]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8597:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var i=n(4848);const s=e=>{let{data:t}=e,n=[],s=[],r="",o=[];if(t){const e=JSON.parse(t);n=e.columns||[],s=e.data||[],r=e.indexName||"Index",o=e.index||[]}return(0,i.jsx)("div",{className:"dataframe-container",children:(0,i.jsxs)("table",{className:"dataframe-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:r})," ",n.map(((e,t)=>(0,i.jsx)("th",{children:e},t)))]})}),(0,i.jsx)("tbody",{children:s.map(((e,t)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"index-value",children:o[t]})," ",e.map(((e,t)=>(0,i.jsx)("td",{children:"boolean"==typeof e?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):e},t)))]},t)))})]})})}},5158:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(6540),s=n(4848);const r=function(e){let{src:t,sourceLink:n,width:r="100%",height:o="100%",paddingBottom:a="56.25%"}=e;const[l,c]=(0,i.useState)(0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"relative",height:"0",paddingBottom:a,overflow:"hidden",maxWidth:"100%"},children:(0,s.jsx)("iframe",{src:t,style:{position:"absolute",top:0,left:0,width:r,height:o,frameBorder:"0",allowFullScreen:!0}},l)}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,s.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,s.jsx)("button",{onClick:()=>{c((e=>e+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#45a049",onMouseOut:e=>e.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);