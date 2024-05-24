"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[9894],{6171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=n(4848),i=n(8453),a=n(8597),r=n(5158);const o={sidebar_position:7,sidebar_label:"Permutation Test",title:"Permutation Test",tags:["querying","functions","for-loop","histogram"]},l=void 0,c={id:"statistical-inference/permutation_test",title:"Permutation Test",description:"Concept",source:"@site/docs/statistical-inference/permutation_test.md",sourceDirName:"statistical-inference",slug:"/statistical-inference/permutation_test",permalink:"/bpd-reference/docs/statistical-inference/permutation_test",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/statistical-inference/permutation_test.md",tags:[{label:"querying",permalink:"/bpd-reference/docs/tags/querying"},{label:"functions",permalink:"/bpd-reference/docs/tags/functions"},{label:"for-loop",permalink:"/bpd-reference/docs/tags/for-loop"},{label:"histogram",permalink:"/bpd-reference/docs/tags/histogram"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Permutation Test",title:"Permutation Test",tags:["querying","functions","for-loop","histogram"]},sidebar:"statsSidebar",previous:{title:"Hypothesis Test",permalink:"/bpd-reference/docs/statistical-inference/hypothesis_test"},next:{title:"Standard Units, Correlation, Regression",permalink:"/bpd-reference/docs/statistical-inference/standard_units"}},d={},h=[{value:"Concept",id:"concept",level:2},{value:"Code Example",id:"code-example",level:2},{value:"1. State the question/hypothesis",id:"1-state-the-questionhypothesis",level:3},{value:"2. Query the DataFrame",id:"2-query-the-dataframe",level:3},{value:"3. Create a function to calculate test statistic",id:"3-create-a-function-to-calculate-test-statistic",level:3},{value:"4. Simulate the permutation test",id:"4-simulate-the-permutation-test",level:3},{value:"5. Conclusion",id:"5-conclusion",level:3},{value:"6. Extra",id:"6-extra",level:3}];function u(e){const t={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",math:"math",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,s.jsx)(t.admonition,{title:"Key Idea",type:"tip",children:(0,s.jsx)(t.p,{children:"We use a permutation test to test whether two samples are drawn from the same population."})}),"\n",(0,s.jsxs)(t.admonition,{title:"Terminology",type:"info",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Permutation"}),": A permutation of a sequence is a rearrangement of the elements in that sequence."]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Example: 'BAC' and 'CAB' are both permutations of the string 'ABC'."}),"\n",(0,s.jsx)(t.li,{children:"We create permutations by shuffling."}),"\n"]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Permutation tests:"})," A permutation test is a type of A/B test (and a type of hypothesis test). It tests whether two samples come from the same population distribution. To conduct a permutation test:"]}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Shuffle the group labels (i.e. the Trues and Falses) to generate two new samples under the null."}),"\n",(0,s.jsx)(t.li,{children:"Compute the test statistic (i.e. the difference in group means)."}),"\n",(0,s.jsx)(t.li,{children:"Repeat steps 1 and 2 to generate an empirical distribution of the test statistics (i.e. the difference in group means)."}),"\n",(0,s.jsx)(t.li,{children:"See where the observed statistic lies in the empirical distribution. If, in our simulations, we rarely saw a difference in group means as extreme as the observed difference in group means, we have evidence to reject the null."}),"\n"]})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"While shuffling, the size of the two new samples should be the same as the observed samples."})}),"\n",(0,s.jsxs)(t.p,{children:["The diagram below provides an overview of conducting a permutation test, although it references a different dataset. ",(0,s.jsx)(t.a,{href:"https://www.jwilber.me/permutationtest/",children:"Here"})," is another useful visualization. For additional helpful visual guides, please visit the ",(0,s.jsx)(t.a,{href:"https://dsc10.com/diagrams/",children:"Diagrams"})," site."]}),"\n",(0,s.jsx)(r.A,{src:"https://docs.google.com/presentation/d/e/2PACX-1vSovXDonR6EmjrT45h4pY1mwmcKFMWVSdgpbKHC5HNTm9sbG7dojvvCDEQCjuk2dk1oA4gmwMogr8ZL/embed?start=true&loop=false&delayms=3000&rm=minimal",sourceLink:"https://docs.google.com/presentation/d/1TTWoQ7FU4tzBGc7EskF6WYccIn1BWQbTSizAiFc2p2o/edit?usp=sharing"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"code-example",children:"Code Example"}),"\n",(0,s.jsx)(t.h3,{id:"1-state-the-questionhypothesis",children:"1. State the question/hypothesis"}),"\n",(0,s.jsxs)(t.admonition,{title:"Hypotheses",type:"info",children:[(0,s.jsx)(t.p,{children:"Our pair of hypotheses is:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Null Hypothesis:"})," The mean weights of dogs and cats are the ",(0,s.jsx)(t.em,{children:"same"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Alternative Hypothesis:"})," The mean weights of dogs and cats are ",(0,s.jsx)(t.em,{children:"different"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(t.p,{children:['Since the alternative hypothesis is of the form "A and B are different," the ',(0,s.jsx)(t.strong,{children:"test statistic"})," should measure distance and use an absolute value."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsx)(t.mrow,{children:(0,s.jsx)(t.mo,{children:"\u2234"})}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\therefore"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.6922em"}}),(0,s.jsx)(t.span,{className:"mrel amsrm",children:"\u2234"})]})})]})," Use ",(0,s.jsx)(t.strong,{children:"absolute difference in group means"})," as the test statistic."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"2-query-the-dataframe",children:"2. Query the DataFrame"}),"\n",(0,s.jsx)(t.p,{children:"Since we want to compare the distributions of only cats and dogs, we need to make sure to only include the relevant pieces of data (e.g., cats and dogs weights)."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# Create a boolean Series that references which rows fulfill either condition.\nquerying_condition = (full_pets.get('Species') == 'dog') | (full_pets.get('Species') == 'cat')\n# Query.\ncats_dogs = full_pets[querying_condition]\n# Display the first 5 rows only.\ncats_dogs.take(np.arange(5)) \n"})}),"\n",(0,s.jsx)(a.A,{data:'{"columns":["ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[0,1,2,3,4],"data":[["dog_001","dog","black",40.0,5.0,false,"      There are no bad dogs, only bad owners."],["cat_001","cat","golden",1.5,0.2,true,"My best birthday present ever!!!"],["cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],["dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],["dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."]]}'}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"3-create-a-function-to-calculate-test-statistic",children:"3. Create a function to calculate test statistic"}),"\n",(0,s.jsx)(t.p,{children:"Since our hypotheses depend on the test statistic, create a function to be able to calculate it during every trial of our permutation test."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def difference_in_means(cats_dogs):\n    \"\"\"\n    Calculate the absolute difference in the mean weight of dogs and cats.\n    ---\n    Input:\n      cats_dogs: a DataFrame containing the columns 'Species' and 'Weight'.\n    ---\n    Output:\n        The absolute difference in the mean weight of dogs and cats.\n    \"\"\"\n    means = cats_dogs.groupby('Species').mean()\n    return np.abs((means.get('Weight').loc['dog'] - means.get('Weight').loc['cat']))\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Note: Although we can simply do this in the for-loop shown in the next step, we can practice good coding habits by separating our code into readable bits!"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"4-simulate-the-permutation-test",children:"4. Simulate the permutation test"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"n = 500 # Number of simulations.\nstatistics = np.array([]) # Array to keep track of the difference in means for each iteration.\nfor i in np.arange(n): # Run the simulation `n` number of times\n    # 1. Shuffle the species.\n    shuffled = cats_dogs.assign(Species=np.random.permutation(cats_dogs.get('Species')))\n\n    # 2. Compute the test statistic.\n    statistic = difference_in_means(shuffled)\n\n    # 3. Save the result.\n    statistics = np.append(statistics, statistic)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This code will run the permutation test 500 times, but a different reasonable number can be used instead. It is ",(0,s.jsx)(t.strong,{children:"crucial"})," to keep track of the difference in means each time our for-loop runs so that the number of simulated values can be displayed."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"5-conclusion",children:"5. Conclusion"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'observed = difference_in_means(cats_dogs)\np_value = np.count_nonzero(statistics >= observed) / n\n\nprint("The observed value of the test statistic is:", observed)\nprint("The p-value is:", p_value)\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"The observed value of the test statistic is: 30.361111111111107"})," ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.strong,{children:"The p-value is: 0.004"})]}),"\n",(0,s.jsx)(t.p,{children:"Using a significance level of 0.05:"}),"\n",(0,s.jsx)(t.admonition,{title:"Conclusion",type:"info",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Under the null hypothesis, we rarely see a difference greater than the observed value."}),"\n",(0,s.jsxs)(t.li,{children:["Therefore, we ",(0,s.jsx)(t.strong,{children:"reject"})," the null hypothesis: the evidence implies that the two groups do not come from the same distribution."]}),"\n",(0,s.jsx)(t.li,{children:"Still, we cannot conclude that species causes a different weight because there may be other confounding variables."}),"\n"]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"6-extra",children:"6. Extra"}),"\n",(0,s.jsx)(t.p,{children:"Let's see how our observed statistic compares to the overall simulated values!"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# Create the histogram.\nbpd.DataFrame().assign(statistics=statistics).plot(kind='hist', bins=20, density=True, ec='w')\n# Don't worry about this line - you won't need to know it for this course!\nplt.axvline(x=observed, c='black', linewidth=4, label='population difference in means')\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Distribution",src:n(5771).A+"",width:"576",height:"413"})}),"\n",(0,s.jsxs)(t.p,{children:["From this graph, we can tell that there is barely any data to the ",(0,s.jsx)(t.strong,{children:"right"})," of the black vertical line (our test statistic), meaning we have a very low p-value!"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8597:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4848);const i=e=>{let{data:t}=e,n=[],i=[],a="",r=[];if(t){const e=JSON.parse(t);n=e.columns||[],i=e.data||[],a=e.indexName||"Index",r=e.index||[]}return(0,s.jsx)("div",{className:"dataframe-container",children:(0,s.jsxs)("table",{className:"dataframe-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:a}),n.map(((e,t)=>(0,s.jsx)("th",{children:e},t)))]})}),(0,s.jsx)("tbody",{children:i.map(((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"index-value",children:r[t]}),e.map(((e,t)=>{return(0,s.jsx)("td",{children:(n=e,"boolean"==typeof n?n.toString().charAt(0).toUpperCase()+n.toString().slice(1):n)},t);var n}))]},t)))})]})})}},5158:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(6540),i=n(4848);const a=function(e){let{src:t,sourceLink:n,width:a="100%",height:r="100%",paddingBottom:o="56.25%"}=e;const[l,c]=(0,s.useState)(0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{position:"relative",height:"0",paddingBottom:o,overflow:"hidden",maxWidth:"100%"},children:(0,i.jsx)("iframe",{src:t,style:{position:"absolute",top:0,left:0,width:a,height:r,frameBorder:"0",allowFullScreen:!0}},l)}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,i.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,i.jsx)("button",{onClick:()=>{c((e=>e+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#45a049",onMouseOut:e=>e.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},5771:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/permutation-test-fae4df12733e667b05989b96bf08d9a9.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);