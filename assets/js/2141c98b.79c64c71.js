"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[6363],{3618:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=t(4848),r=t(8453),a=(t(8597),t(8205));const o={sidebar_position:9},i=void 0,d={id:"documentation/series-methods/ser.str.strip()",title:"ser.str.strip()",description:"ser.str.strip(to_strip = None)",source:"@site/docs/documentation/series-methods/ser.str.strip().md",sourceDirName:"documentation/series-methods",slug:"/documentation/series-methods/ser.str.strip()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.strip()",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/series-methods/ser.str.strip().md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"ser.str.split()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.split()"},next:{title:"ser.str.lower()",permalink:"/bpd-reference/docs/documentation/series-methods/ser.str.lower()"}},c={},l=[];function h(e){const s={code:"code",hr:"hr",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{children:"ser.str.strip(to_strip = None)"}),"\n",(0,n.jsxs)("div",{className:"base",children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Removes the specified character from each string in the Series from left and right sides."})}),(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"term",children:"Input:"}),(0,n.jsxs)("dd",{className:"parameter",children:["to_strip : ",(0,n.jsx)("em",{children:"string or None, default None"})]}),(0,n.jsx)("dd",{className:"parameter-description",children:"A specified character/a set of characters to be removed. All combinations of this set of characters will be stripped. If not specified, removes whitespace (including newlines)."}),(0,n.jsx)("dt",{className:"term",children:"Returns:"}),(0,n.jsx)("dd",{children:"Returns a Series with each element as a list of strings stripped by the specified character/set of characters."}),(0,n.jsx)("dt",{className:"term",children:"Return Type:"}),(0,n.jsx)("dd",{children:"Series"})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"comment_ser = pets.get('Owner_Comment')\r\ncomment_ser\n"})}),"\n",(0,n.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"comment_ser.str.strip()\n"})}),"\n",(0,n.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"comment_ser.str.strip('*')\n"})}),"\n",(0,n.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","All you need is love and a cat.","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"# Notice how nothing changes\r\ncomment_ser.str.strip('?')\n"})}),"\n",(0,n.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["      There are no bad dogs, only bad owners.","My best birthday present ever!!!","****All you need is love and a cat.****","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("br",{})," ",(0,n.jsxs)(s.strong,{children:["Remove a set of characters simultaneously. (e.g. remove both ",(0,n.jsx)(s.code,{children:"*"})," and whitespace)"]})," "]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"comment_ser.str.strip('* ')\n"})}),"\n",(0,n.jsx)(a.A,{data:'{"name":"Owner_Comment","dtype":"object","index":[0,1,2,3,4,5,6,7],"data":["There are no bad dogs, only bad owners.","My best birthday present ever!!!","All you need is love and a cat.","Love is a wet nose and a wagging tail.","Be the person your dog thinks you are.","No, thank you!","No, thank you!","No, thank you!"]}'})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8597:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4848);const r=e=>{let{data:s}=e,t=[],r=[],a="",o=[];if(s){const e=JSON.parse(s);t=e.columns||[],r=e.data||[],a=e.indexName||"Index",o=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:a}),t.map(((e,s)=>(0,n.jsx)("th",{children:e},s)))]})}),(0,n.jsx)("tbody",{children:r.map(((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:o[s]}),e.map(((e,s)=>{return(0,n.jsx)("td",{children:(t=e,"boolean"==typeof t?t.toString().charAt(0).toUpperCase()+t.toString().slice(1):t)},s);var t}))]},s)))})]})})}},8205:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var n=t(4848);const r=e=>{let{data:s}=e,t=[],r=[],a="",o="";if(s)try{const e=JSON.parse(s);a=e.name||"",o=e.dtype||"Unknown type",t=e.index||[],r=e.data||[]}catch(d){console.error("Error parsing data prop in SeriesComponent:",d)}const i=r.map((e=>JSON.stringify(e)));return(0,n.jsxs)("div",{className:"series-container",children:[(0,n.jsx)("ul",{className:"series-list",children:i.map(((e,s)=>(0,n.jsxs)("li",{className:"series-item",children:[(0,n.jsx)("span",{className:"series-index",children:t[s]}),(0,n.jsx)("span",{className:"series-value",children:"true"===e||"false"===e?e.charAt(0).toUpperCase()+e.slice(1):e})]},s)))}),(0,n.jsxs)("div",{className:"series-footer",children:["Name: ",a,", dtype: ",o]})]})}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(6540);const r={},a=n.createContext(r);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);