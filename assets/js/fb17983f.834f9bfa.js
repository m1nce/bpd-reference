"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[9595],{2693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(4848),i=n(8453);n(8597),n(5158);const a={sidebar_position:4,sidebar_label:"Null & Alternative Hypothesis",title:"Null & Alternative Hypothesis"},r=void 0,l={id:"statistical-inference/null_and_alt",title:"Null & Alternative Hypothesis",description:"Concept",source:"@site/docs/statistical-inference/null_and_alt.md",sourceDirName:"statistical-inference",slug:"/statistical-inference/null_and_alt",permalink:"/bpd-reference/docs/statistical-inference/null_and_alt",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/statistical-inference/null_and_alt.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Null & Alternative Hypothesis",title:"Null & Alternative Hypothesis"},sidebar:"statsSidebar",previous:{title:"Parameters and Statistics",permalink:"/bpd-reference/docs/statistical-inference/parameters-and-statistics"},next:{title:"Observed & Test Statistic",permalink:"/bpd-reference/docs/statistical-inference/obs_and_test_stats"}},o={},c=[{value:"Concept",id:"concept",level:2}];function d(e){const t={admonition:"admonition",annotation:"annotation",em:"em",h2:"h2",li:"li",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mo:"mo",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,s.jsxs)(t.admonition,{title:"Terminology",type:"info",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Null Hypothesis"}),": A precise assumption about how the data was generated."]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Example: The coin is fair (the probability of tossing a head is equal to 0.5)."}),"\n"]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Alternative Hypothesis"}),": A different view about how the data was generated."]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Example:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The coin is not fair (the probability of tossing a head is not equal to 0.5)."}),"\n",(0,s.jsx)(t.li,{children:"The coin is biased towards heads (the probability of tossing a head is greater then 0.5)."}),"\n",(0,s.jsx)(t.li,{children:"The coin is biased towards tails (the probability of tossing a head is less then 0.5)."}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"null hypothesis"})," must be written with ",(0,s.jsx)(t.strong,{children:"equal"})," sign. A statement with uncertainty, such as 'approximately equal', will not be considered as a null hypothesis."]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:['Example: "The coin is fair" can be interpreted as the probability of getting a head is 0.5. If the statement is "the coin is ',(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"almost"})}),' fair" or "the probability of tossing a head is ',(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"approximately"})}),' equal to 0.5", it is ',(0,s.jsx)(t.strong,{children:"no longer"})," a null hypothesis."]}),"\n"]}),(0,s.jsxs)(t.p,{children:["Since the ",(0,s.jsx)(t.strong,{children:"alternative hypothesis"})," is different from the null, it can be less than, greater than, or not equal to, but cannot be ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsx)(t.mrow,{children:(0,s.jsx)(t.mo,{children:"\u2265"})}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\geq"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.jsx)(t.span,{className:"mrel",children:"\u2265"})]})})]})," or ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsx)(t.mrow,{children:(0,s.jsx)(t.mo,{children:"\u2264"})}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\leq"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,s.jsx)(t.span,{className:"mrel",children:"\u2264"})]})})]}),"."]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8597:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4848);const i=e=>{let{data:t}=e,n=[],i=[],a="",r=[];if(t){const e=JSON.parse(t);n=e.columns||[],i=e.data||[],a=e.indexName||"Index",r=e.index||[]}return(0,s.jsx)("div",{className:"dataframe-container",children:(0,s.jsxs)("table",{className:"dataframe-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:a}),n.map(((e,t)=>(0,s.jsx)("th",{children:e},t)))]})}),(0,s.jsx)("tbody",{children:i.map(((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"index-value",children:r[t]}),e.map(((e,t)=>{return(0,s.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},t);var n}))]},t)))})]})})}},5158:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(6540),i=n(4848);const a=function(e){let{src:t,sourceLink:n,width:a="100%",height:r="100%",paddingBottom:l="56.25%"}=e;const[o,c]=(0,s.useState)(0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{position:"relative",height:"0",paddingBottom:l,overflow:"hidden",maxWidth:"100%"},children:(0,i.jsx)("iframe",{src:t,style:{position:"absolute",top:0,left:0,width:a,height:r,frameBorder:"0",allowFullScreen:!0}},o)}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,i.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,i.jsx)("button",{onClick:()=>{c((e=>e+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#45a049",onMouseOut:e=>e.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);