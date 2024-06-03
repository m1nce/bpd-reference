"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[28],{8406:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(4848),a=t(8453),s=t(8597),r=t(5158);const i={sidebar_position:8,sidebar_label:"Boostrapping and Confidence Intervals",title:"Bootstrapping and Confidence Intervals",tags:["for-loop","histogram"]},o=void 0,l={id:"statistical-inference/bootstrapping",title:"Bootstrapping and Confidence Intervals",description:"Concept",source:"@site/docs/statistical-inference/bootstrapping.md",sourceDirName:"statistical-inference",slug:"/statistical-inference/bootstrapping",permalink:"/bpd-reference/docs/statistical-inference/bootstrapping",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/statistical-inference/bootstrapping.md",tags:[{label:"for-loop",permalink:"/bpd-reference/docs/tags/for-loop"},{label:"histogram",permalink:"/bpd-reference/docs/tags/histogram"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Boostrapping and Confidence Intervals",title:"Bootstrapping and Confidence Intervals",tags:["for-loop","histogram"]},sidebar:"statsSidebar",previous:{title:"Hypothesis Test",permalink:"/bpd-reference/docs/statistical-inference/hypothesis_test"},next:{title:"Permutation Test",permalink:"/bpd-reference/docs/statistical-inference/permutation_test"}},d={},c=[{value:"Concept",id:"concept",level:2},{value:"Code Example",id:"code-example",level:2},{value:"1. Take a random sample of size 12 from the <code>full_pets</code> DataFrame.",id:"1-take-a-random-sample-of-size-12-from-the-full_pets-dataframe",level:3},{value:"2. Find the observed parameter",id:"2-find-the-observed-parameter",level:3},{value:"3. Bootstrap the sample 10,000 times with replacement",id:"3-bootstrap-the-sample-10000-times-with-replacement",level:3},{value:"4. Create a 95% confidence interval",id:"4-create-a-95-confidence-interval",level:3},{value:"5. Conclusion",id:"5-conclusion",level:3},{value:"6. Extra",id:"6-extra",level:3}];function p(e){const A={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.h2,{id:"concept",children:"Concept"}),"\n",(0,n.jsx)(A.admonition,{title:"Key Idea",type:"tip",children:(0,n.jsx)(A.p,{children:"We use a bootstrapping to estimate the distribution of the sample statistic to see how different our it could have been. We use confidence intervals to define a range that captures most of the bootstrapped distribution of the sample statistic."})}),"\n",(0,n.jsxs)(A.admonition,{title:"Terminology",type:"info",children:[(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.strong,{children:"Bootstrapping"}),": Bootstrapping is a type of hypothesis test that involves resampling from a single sample to estimate the\ndistribution of the sample statistic. It answers the question of how different the sample statistic could have been if given a different sample. To conduct bootstrapping:"]}),(0,n.jsxs)(A.ol,{children:["\n",(0,n.jsx)(A.li,{children:"Resample from the original sample with replacement."}),"\n",(0,n.jsx)(A.li,{children:"Calculate the sample statistic on the bootstrapped resample."}),"\n",(0,n.jsx)(A.li,{children:"Save the results into an array."}),"\n",(0,n.jsx)(A.li,{children:"Repeat steps 1 through 3 to generate an empirical distribution of the test statistic."}),"\n",(0,n.jsx)(A.li,{children:"Calculate the confidence interval and see if the observed statistic lies in it. If the observed statistic is not\nin our confidence interval, we have evidence to reject the null."}),"\n"]}),(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.strong,{children:"Confidence Intervals:"})," A confidence interval is a range that captures most of the distribution of the bootstrapped sample statistic in\nthe hopes of also containing the true population parameter within it. If\nwe were to construct a 95% confidence interval, we aren't saying that there is a 95% chance that the true population parameter lies in the\ninterval as the interval either contains it or it doesn't. Instead, we are saying that approximately 95% of the time, the intervals you\ncreate will contain the true population parameter. For example, if we generated 100 confidence intervals, about 95 of them will have the\ntrue population parameter."]})]}),"\n",(0,n.jsx)(A.admonition,{type:"note",children:(0,n.jsx)(A.p,{children:"When resampling, the size of the resample should be the same as the original sample with replacement."})}),"\n",(0,n.jsx)(A.p,{children:"The diagram below provides an overview of conducting bootstrapping, although it references a different dataset."}),"\n",(0,n.jsx)(r.A,{src:"https://docs.google.com/presentation/d/e/2PACX-1vS_iYHJYXSVMMZ-YQVFwMEFR6EFN3FDSAvaMyUm-YJfLQgRMTHm3vI-wWJJ5999eFJq70nWp2hyItZg/embed?start=true&loop=false&delayms=3000&rm=minimal",sourceLink:"https://docs.google.com/presentation/d/1oYakqMdI7z61BthvgWUJvbT21bKTXg01KmAibglepBI/edit?usp=sharing"}),"\n",(0,n.jsxs)(A.p,{children:["The diagram below provides an overview of creating confidence intervals, although it references a different situation. For additional helpful visual guides, please visit the ",(0,n.jsx)(A.a,{href:"https://dsc10.com/diagrams/",children:"Diagrams"})," site."]}),"\n",(0,n.jsx)(r.A,{src:"https://docs.google.com/presentation/d/e/2PACX-1vTaPZsueXI6fey_5cj2Y1TevkR1joBvpwaWVsZNvgBlnJSrw1EiBLHJywkFH_QNLU5Tdr6JZgDrhFxG/embed?start=true&loop=false&delayms=3000&rm=minimal",sourceLink:"https://docs.google.com/presentation/d/1l5GVyl60FrornEaZnGL6REV4gjEydRncNVi6k1hHUsA/edit?usp=sharing"}),"\n",(0,n.jsx)(A.hr,{}),"\n",(0,n.jsx)(A.h2,{id:"code-example",children:"Code Example"}),"\n",(0,n.jsxs)(A.h3,{id:"1-take-a-random-sample-of-size-12-from-the-full_pets-dataframe",children:["1. Take a random sample of size 12 from the ",(0,n.jsx)(A.code,{children:"full_pets"})," DataFrame."]}),"\n",(0,n.jsxs)(A.p,{children:["Let's say we didn't have access to all of the information in the ",(0,n.jsx)(A.code,{children:"full_pets"})," DataFrame and were only able to collect a sample of 12 pets."]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-python",children:"# Magic to ensure that we get the same results every time this code is run. \nnp.random.seed(42)\n\n# sample\npets_sample = full_pets.sample(12, replace=False)\npets_sample\n"})}),"\n",(0,n.jsx)(s.A,{data:'{"columns":["Unnamed: 0","ID","Species","Color","Weight","Age","Is_Cat","Owner_Comment"],"index":[18,14,4,13,10,7,6,3,2,15,17,8],"data":[[18,"cat_006","cat","black",3.0,0.5,true,"No, thank you!"],[14,"dog_007","dog","white",50.0,6.1,false,"No, thank you!"],[4,"dog_003","dog","black",25.0,0.5,false,"Be the person your dog thinks you are."],[13,"ham_003","hamster","black",0.5,0.1,false,"No, thank you!"],[10,"dog_006","dog","golden",35.0,4.0,false,"No, thank you!"],[7,"cat_003","cat","black",10.0,0.0,true,"No, thank you!"],[6,"ham_002","hamster","golden",0.25,0.2,false,"No, thank you!"],[3,"dog_002","dog","white",80.0,2.0,false,"Love is a wet nose and a wagging tail."],[2,"cat_002","cat","black",15.0,9.0,true,"****All you need is love and a cat.****"],[15,"ham_004","hamster","golden",0.25,0.2,false,"No, thank you!"],[17,"dog_009","dog","white",30.0,4.8,false,"No, thank you!"],[8,"dog_004","dog","black",45.0,6.7,false,"No, thank you!"]]}'}),"\n",(0,n.jsx)(A.hr,{}),"\n",(0,n.jsx)(A.h3,{id:"2-find-the-observed-parameter",children:"2. Find the observed parameter"}),"\n",(0,n.jsx)(A.p,{children:"In this case, we are interested in finding the median weight of the entire population."}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-python",children:"pets_sample = full_pets.sample(12, replace=False)\nprint('Median of pets_sample weight:', pets_sample.get('Weight').median())\n"})}),"\n",(0,n.jsx)(A.p,{children:"Median of pets_sample weight: 20.0"}),"\n",(0,n.jsx)(A.hr,{}),"\n",(0,n.jsx)(A.h3,{id:"3-bootstrap-the-sample-10000-times-with-replacement",children:"3. Bootstrap the sample 10,000 times with replacement"}),"\n",(0,n.jsx)(A.p,{children:"Since we were only able to collect one random sample from the full population, we can't be sure if this singular guess predicts the\ntrue population parameter well. We can't go out and collect\nanother random sample, so we will resample from the original sample with replacement to simulate what could've been."}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-python",children:"boot_medians = np.array([])\nfor i in np.arange(10000):\n    # 1. resample the data\n    resample = pets_sample.sample(pets_sample.shape[0], replace=True)\n\n    # 2. calculate the median of the resample\n    boot_median = resample.get('Weight').median()\n\n    # 3. append the median to the array\n    boot_medians = np.append(boot_medians, boot_median)\n"})}),"\n",(0,n.jsx)(A.p,{children:"This code will create 10,000 bootstrapped samples and calculate the median for each of them, but a different\nreasonable number can be used instead. Since these samples are all random, the information in each sample and\nmedian will be different from one another."}),"\n",(0,n.jsx)(A.hr,{}),"\n",(0,n.jsx)(A.h3,{id:"4-create-a-95-confidence-interval",children:"4. Create a 95% confidence interval"}),"\n",(0,n.jsx)(A.p,{children:"Instead of using a single number to estimate the true population parameter, we create a range of where we think it is."}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-python",children:"# Get the 95% confidence interval\nleft = np.percentile(boot_medians, 2.5) # 2.5th percentile\nright = np.percentile(boot_medians, 97.5) # 97.5th percentile\n"})}),"\n",(0,n.jsx)(A.p,{children:"Remember that the 95% confidence interval does not mean we have a 95% chance of containing the true population parameter. It means\nthat about 95% of all intervals we create will contain the true population parameter."}),"\n",(0,n.jsx)(A.hr,{}),"\n",(0,n.jsx)(A.h3,{id:"5-conclusion",children:"5. Conclusion"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-python",children:"left, right\n"})}),"\n",(0,n.jsx)(A.p,{children:"(1.75, 40.0)"}),"\n",(0,n.jsx)(A.admonition,{title:"Conclusion",type:"info",children:(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsx)(A.li,{children:"From this interval, we are 95% confident that the true population median lies somewhere between 1.75 and 40."}),"\n",(0,n.jsx)(A.li,{children:"We have no way of knowing where exactly in this interval does the true population median falls or even if it is contained at all."}),"\n",(0,n.jsx)(A.li,{children:"What we do know is that if we were to repeat the process and generate multiple confidence intervals, roughly 95% of them will\ncontain the true population median."}),"\n"]})}),"\n",(0,n.jsx)(A.hr,{}),"\n",(0,n.jsx)(A.h3,{id:"6-extra",children:"6. Extra"}),"\n",(0,n.jsx)(A.p,{children:"Let's look at the distribution of the bootstrapped medians!"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-python",children:"# Create the histogram.\n# Plot the histogram of boot_medians\nplt.hist(boot_medians, bins=20, density=True, ec = 'w')\n\nplt.show()\n"})}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Distribution",src:t(7370).A+"",width:"556",height:"413"})}),"\n",(0,n.jsxs)(A.p,{children:["A 95% confidence level means that ",(0,n.jsx)(A.strong,{children:"approximately 95% of the time, the intervals you create through this process will contain the true population parameter"}),"."]})]})}function h(e={}){const{wrapper:A}={...(0,a.R)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8597:(e,A,t)=>{t.d(A,{A:()=>a});t(6540);var n=t(4848);const a=e=>{let{data:A}=e,t=[],a=[],s="",r=[];if(A){const e=JSON.parse(A);t=e.columns||[],a=e.data||[],s=e.indexName||"Index",r=e.index||[]}return(0,n.jsx)("div",{className:"dataframe-container",children:(0,n.jsxs)("table",{className:"dataframe-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:s}),t.map(((e,A)=>(0,n.jsx)("th",{children:e},A)))]})}),(0,n.jsx)("tbody",{children:a.map(((e,A)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"index-value",children:r[A]}),e.map(((e,A)=>{return(0,n.jsx)("td",{children:(t=e,"boolean"==typeof t?t.toString().charAt(0).toUpperCase()+t.toString().slice(1):t)},A);var t}))]},A)))})]})})}},5158:(e,A,t)=>{t.d(A,{A:()=>s});var n=t(6540),a=t(4848);const s=function(e){let{src:A,sourceLink:t,aspectRatio:s=16/9}=e;const[r,i]=(0,n.useState)(0),[o,l]=(0,n.useState)(0),d=(0,n.useRef)(null);return(0,n.useEffect)((()=>{const e=()=>{if(d.current){const e=d.current.offsetWidth;l(e/s)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[s]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:d,style:{width:"100%",position:"relative",maxWidth:"100%",backgroundColor:"white"},children:(0,a.jsx)("iframe",{src:A,style:{width:"100%",height:`${o}px`,border:"0",allowFullScreen:!0}},r)}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px 0"},children:(0,a.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:"(Source)"})}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:(0,a.jsx)("button",{onClick:()=>{i((e=>e+1))},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",outline:"none",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 8px rgba(0,0,0,0.1)",transition:"background-color 0.3s"},onMouseOver:e=>e.currentTarget.style.backgroundColor="#45a049",onMouseOut:e=>e.currentTarget.style.backgroundColor="#4CAF50",children:"Restart Diagram"})})]})}},7370:(e,A,t)=>{t.d(A,{A:()=>n});const n="data:image/png;base64,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8vK8PqoN/507d0633367tmzZ4vPxV155RVVVVdqyZYuOHj2qpKQk3XfffTp79uwkrzS8NTU16amnntIHH3ygxsZGXbhwQTk5OTp37pxnDHsdGDfccIM2btyoY8eO6dixY/re976nBx980PMvcPY58I4ePart27dr0aJFXufZ68D5+te/rp6eHs9x4sQJz2Mh3+dL/qahq9A3v/lNq7Cw0OvcggULrOeeey5EK5p6JFn79+/3/Dw6OmolJSVZGzdu9Jz74osvrPj4eKu2tjYEK5w63G63JclqamqyLIu9DrZrr73Weu2119jnIDh79qx10003WY2NjdaSJUus4uJiy7L4Mx1I69evt26//Xafj5mwz7zD8l+Gh4fV0tKinJwcr/M5OTk6cuRIiFY19XV0dKi3t9dr3x0Oh5YsWcK+f0X9/f2SpOuuu04Sex0sIyMjqq+v17lz55SZmck+B8FTTz2l+++/X/fee6/XefY6sD755BMlJycrNTVVK1as0KeffirJjH2e0G9rnqr6+vo0MjIy5pcuJiYmjvnljAici3vra99PnToViiVNCZZlqaysTN/5zne0cOFCSex1oJ04cUKZmZn64osvFBsbq/379+vWW2/1/AucfQ6M+vp6HT9+XEePHh3zGH+mA+euu+7Srl27dPPNN+uf//ynXnrpJWVlZamtrc2IfSZYfLDZbF4/W5Y15hwCj30PrKeffloffvihz9/JxV4Hxi233KLW1lb9+9//1t69e/XEE0+oqanJ8zj7/NV1dXWpuLhYBw4cUExMzLjj2OuvLi8vz/Ofb7vtNmVmZmrevHn6/e9/r29961uSQrvPXBL6L7NmzVJkZOSYd1PcbveYqkTgXLwLnX0PnJ/97Gf685//rHfffVc33HCD5zx7HVjR0dGaP3++MjIyVFFRodtvv12bNm1inwOopaVFbrdbTqdTdrtddrtdTU1N2rx5s+x2u2c/2evAmz59um677TZ98sknRvyZJlj+S3R0tJxOpxobG73ONzY2KisrK0SrmvpSU1OVlJTkte/Dw8Nqampi3/1kWZaefvpp7du3T3/729+Umprq9Th7HVyWZWloaIh9DqB77rlHJ06cUGtrq+fIyMjQo48+qtbWVqWlpbHXQTI0NKSTJ0/q+uuvN+PP9KTc2htG6uvrraioKKuurs766KOPrJKSEmv69OnWZ599FuqlhbWzZ89aLpfLcrlcliSrqqrKcrlc1qlTpyzLsqyNGzda8fHx1r59+6wTJ05YjzzyiHX99ddbAwMDIV55ePnpT39qxcfHWwcPHrR6eno8x+eff+4Zw14HRnl5ufXee+9ZHR0d1ocffmitXbvWioiIsA4cOGBZFvscTP/9KSHLYq8D5ec//7l18OBB69NPP7U++OAD6/vf/741Y8YMz99/od5ngsWHrVu3WnPnzrWio6Otb3zjG56PhGLi3n33XUvSmOOJJ56wLOvLj8ytX7/eSkpKshwOh3X33XdbJ06cCO2iw5CvPZZk/e53v/OMYa8DY+XKlZ5/TyQkJFj33HOPJ1Ysi30Opv8NFvY6MPLz863rr7/eioqKspKTk60f/vCHVltbm+fxUO+zzbIsa3LeywEAAJgY7mEBAADGI1gAAIDxCBYAAGA8ggUAABiPYAEAAMYjWAAAgPEIFgAAYDyCBQAAGI9gAQAAxiNYAACA8QgWAABgPIIFAAAY7/8BZJNJj2p0yyEAAAAASUVORK5CYII="},8453:(e,A,t)=>{t.d(A,{R:()=>r,x:()=>i});var n=t(6540);const a={},s=n.createContext(a);function r(e){const A=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function i(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:A},e.children)}}}]);