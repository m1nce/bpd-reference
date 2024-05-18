"use strict";(self.webpackChunkbpd_reference=self.webpackChunkbpd_reference||[]).push([[2302],{3331:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>w,contentTitle:()=>C,default:()=>i,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var a=t(4848),r=t(8453),s=t(8597);t(8205);const n={sidebar_position:3},C=void 0,c={id:"documentation/plotting/Bar Plot",title:"Bar Plot",description:"df.plot(kind='bar', x=datacol, y=datacol)",source:"@site/docs/documentation/plotting/Bar Plot.md",sourceDirName:"documentation/plotting",slug:"/documentation/plotting/Bar Plot",permalink:"/bpd-reference/docs/documentation/plotting/Bar Plot",draft:!1,unlisted:!1,editUrl:"https://github.com/dsc-courses/bpd-reference/tree/main/docs/documentation/plotting/Bar Plot.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Scatter Plot",permalink:"/bpd-reference/docs/documentation/plotting/Scatter Plot"},next:{title:"Line Plot",permalink:"/bpd-reference/docs/documentation/plotting/Line Plot"}},w={},l=[];function d(A){const e={a:"a",code:"code",hr:"hr",img:"img",p:"p",pre:"pre",...(0,r.R)(),...A.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{children:"df.plot(kind='bar', x=data_col, y=data_col)"}),"\n",(0,a.jsxs)("div",{className:"base",children:[(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"Create a bar plot using a DataFrame."})}),(0,a.jsxs)("dl",{children:[(0,a.jsx)("dt",{className:"term",children:"Input:"}),(0,a.jsxs)("dd",{className:"parameter",children:["kind : ",(0,a.jsx)("em",{children:"string"})]}),(0,a.jsx)("dd",{className:"parameter-description",children:"To create a bar plot, use kind='bar'"}),(0,a.jsxs)("dd",{className:"parameter-description",children:["To create a ",(0,a.jsx)("em",{children:"horizontal"})," bar plot, use kind='barh'"]}),(0,a.jsxs)("dd",{className:"parameter",children:["x : ",(0,a.jsx)("em",{children:"label, optional"})]}),(0,a.jsx)("dd",{className:"parameter-description",children:"Column containing categorical data for group labels. If not specified, the index of the DataFrame is used."}),(0,a.jsxs)("dd",{className:"parameter",children:["y : ",(0,a.jsx)("em",{children:"label, optional"})]}),(0,a.jsx)("dd",{className:"parameter-description",children:"Column containing numerical data for the groups in x. If not specified, all numerical columns are used."}),(0,a.jsx)("dt",{className:"term",children:"Returns:"}),(0,a.jsxs)("dd",{children:["plot - Matplotlib plot created using ",(0,a.jsx)(e.a,{href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html",children:"parameters"}),"."]}),(0,a.jsx)("dt",{className:"term",children:"Return Type:"}),(0,a.jsx)("dd",{children:"Matplotlib plot"}),(0,a.jsx)("dt",{className:"term",children:"Note:"}),(0,a.jsx)("dd",{children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["When kind='bar', you can sort your DataFrame in ",(0,a.jsx)("em",{children:"descending"})," order by your y column before plotting to create a ",(0,a.jsx)("em",{children:"vertical"})," bar plot that goes from tall to short from left to right."]}),(0,a.jsxs)("li",{children:["When kind='barh', you can sort your DataFrame in ",(0,a.jsx)("em",{children:"ascending"})," order by your y column before plotting to create a ",(0,a.jsx)("em",{children:"horizontal"})," bar plot that goes from tall to short from top to bottom."]})]})})]})]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Creating a DataFrame to use for bar plots below\navg_species_weights = pets.get(['Species', 'Weight']).groupby('Species').mean().reset_index()\navg_species_weights\n"})}),"\n",(0,a.jsx)(s.A,{data:'{"columns":["Species","Weight"],"index":[0,1,2],"data":[["cat",8.8333333333],["dog",48.3333333333],["hamster",0.625]]}'}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"avg_species_weights.sort_values(by='Weight', ascending=False).plot(kind='bar', x='Species', y='Weight')\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Bar plot example 1",src:t(2340).A+"",width:"543",height:"476"})}),"\n",(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"If the group label is the index of the DataFrame, the x parameter can be omitted."})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"# Creating a DataFrame to use for bar plots below\nspecies_count = pets.get(['Species','ID']).groupby('Species').count()\nspecies_count = species_count.assign(Count = species_count.get('ID')).drop(columns = ['ID'])\nspecies_count\n"})}),"\n",(0,a.jsx)(s.A,{data:'{"columns":["Count"],"index":["cat","dog","hamster"],"data":[[3],[3],[2]]}'}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"species_count.plot(kind='bar', y='Count', title='Distribution of Species');\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Bar plot example 2",src:t(7814).A+"",width:"640",height:"480"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"avg_species_weights.sort_values(by='Weight', ascending=True).plot(kind='barh', x='Species', y='Weight')\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Bar plot example 3",src:t(5903).A+"",width:"604",height:"413"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"pets.groupby('Species').count().plot(kind='bar', y='ID', title='Distribution of Species')\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Bar plot example 3",src:t(2073).A+"",width:"547",height:"496"})})]})}function i(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,a.jsx)(e,{...A,children:(0,a.jsx)(d,{...A})}):d(A)}},8597:(A,e,t)=>{t.d(e,{A:()=>r});t(6540);var a=t(4848);const r=A=>{let{data:e}=A,t=[],r=[],s="",n=[];if(e){const A=JSON.parse(e);t=A.columns||[],r=A.data||[],s=A.indexName||"Index",n=A.index||[]}return(0,a.jsx)("div",{className:"dataframe-container",children:(0,a.jsxs)("table",{className:"dataframe-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:s})," ",t.map(((A,e)=>(0,a.jsx)("th",{children:A},e)))]})}),(0,a.jsx)("tbody",{children:r.map(((A,e)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"index-value",children:n[e]})," ",A.map(((A,e)=>(0,a.jsx)("td",{children:"boolean"==typeof A?A.toString().charAt(0).toUpperCase()+A.toString().slice(1):A},e)))]},e)))})]})})}},8205:(A,e,t)=>{t.d(e,{A:()=>r});t(6540);var a=t(4848);const r=A=>{let{data:e}=A,t=[],r=[],s="",n="";if(e)try{const A=JSON.parse(e);s=A.name||"",n=A.dtype||"Unknown type",t=A.index||[],r=A.data||[]}catch(c){console.error("Error parsing data prop in SeriesComponent:",c)}const C=r.map((A=>JSON.stringify(A)));return(0,a.jsxs)("div",{className:"series-container",children:[(0,a.jsx)("ul",{className:"series-list",children:C.map(((A,e)=>(0,a.jsxs)("li",{className:"series-item",children:[(0,a.jsx)("span",{className:"series-index",children:t[e]}),(0,a.jsx)("span",{className:"series-value",children:"true"===A||"false"===A?A.charAt(0).toUpperCase()+A.slice(1):A})]},e)))}),(0,a.jsxs)("div",{className:"series-footer",children:["Name: ",s,", dtype: ",n]})]})}},2340:(A,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/barex1-21e546e39652d57da5a66250931ada7d.png"},5903:(A,e,t)=>{t.d(e,{A:()=>a});const a="data:image/png;base64,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AABcQnD169dPBw4cUKNGjdSvX7/z3s7hcJzzHYwAAADV1UUHl8vlOud/AwAA4MK8/i5FAAAAXByvguvJJ5/UlClTymyfOnWqUlNTL3emSmn06NFq37693WMAAIAKyKvgmjdvnm688cYy22+44QZ98sknlz0UAABAVeJVcP3yyy8KCwsrsz00NFSHDh267KHs4nK5NHHiRMXFxSkoKEhNmzbVyy+/LEl67rnnFB8fr+DgYDVv3lwvvPCCTp06JUmaPn26xowZo2+++UYOh0MOh0PTp0+38ZEAAICKxKvP4YqLi9PixYs1dOhQj+2LFi1S8+bNfTKYHUaNGqX33ntPr732mrp06aKCggJ99913kiSn06np06crMjJSmzdv1iOPPCKn06kRI0aof//+2rJlixYvXqylS5dK0jmDVJKKi4tVXFzsvl5YWGj+gQEAAFt5FVzDhw/X0KFD9fPPP+vmm2+WJC1btkyvvvqqx3csViZFRUV64403NHXqVD3wwAOSpNjYWHXp0kWS9Ne//tV92+joaD399NP66KOPNGLECNWqVUshISHy9/dXRETEBX/P+PHjNWbMGHMPBAAAVDheBdegQYNUXFysl19+WS+99JKk0xEybdo0DRw40KcDlpdt27apuLhYt9xyyzn3f/LJJ3r99df1n//8R0ePHlVJSYlCQ0Mv+feMGjVKw4cPd18vLCxUVFSU13MDAICKz+uv9hkyZIiGDBmin3/+2X2EpzK70HdArl69Wvfcc4/GjBmjHj16KCwsTHPmzNGrr756yb8nKChIQUFBlzMqAACoZLz+HK6SkhItXbpU8+fPl2VZkqT9+/fr6NGjPhuuPLVo0UK1atXSsmXLyuzLyclRs2bN9Pzzz6tTp05q0aKF9uzZ43GbwMBAPmEfAACck1dHuPbs2aOePXtq7969Ki4uVkpKipxOpyZNmqQTJ04oPT3d13MaV7NmTT333HMaMWKEAgMDdeONN+rnn3/W1q1bFRcXp71792rOnDm65ppr9O9//1uffvqpx89HR0dr165dysvLU5MmTeR0OjmSBQAAJHl5hGvYsGHq1KmTDh8+7PFS3B133HHOI0SVxQsvvKCnn35aL774oq688kr1799fBw8eVN++ffXUU09p6NChat++vVatWqUXXnjB42f/8Ic/qGfPnkpOTlbDhg01e/Zsmx4FAACo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xcUqLCz0uAAAgKrN3+4B2rZtq7S0NElSixYtNHXqVC1btkwpKSke51LFxMTopZde0pAhQ/T222+7t586dUrTpk1TbGysJOmuu+7SzJkz9dNPPykkJEStWrVScnKyMjMz1b9/f+3du1e1a9fWrbfeKqfTqWbNmunqq6+WJIWFhSkwMFDBwcGKiIhw/45p06apQ4cO+tvf/ube9sEHHygqKkrff/+94uPjJUlxcXGaNGnSBR/v+PHjNWbMmMt70gAAQKVi+xGutm3belxv3LixDh48KEnKzMxUSkqKrrjiCjmdTg0cOFC//PKLjh075r59cHCwO7YkKTw8XNHR0QoJCfHYduY+U1JS1KxZMzVv3lz333+/Zs2apePHj19wxtzcXGVmZiokJMR9admypSRpx44d7tt16tTpdx/vqFGjdOTIEfdl3759v/szAACgcrM9uAICAjyuOxwOuVwu7dmzR71791br1q01b9485ebm6q233pJ0+qjWhX7+fPcpSU6nUxs2bNDs2bPVuHFjvfjii2rXrp1+/fXX887ocrl02223KS8vz+OSn5/vfjlSkmrXrv27jzcoKEihoaEeFwAAULXZ/pLi+axfv14lJSV69dVX5ed3ugvnzp3rk/v29/dXt27d1K1bN6WlpalOnTpavny57rzzTgUGBnqcYC9JHTp00Lx58xQdHS1//wr7lAEAgArK9iNc5xMbG6uSkhK9+eab2rlzp2bOnKn09PTLvt/PP/9cU6ZMUV5envbs2aMZM2bI5XIpISFBkhQdHa01a9Zo9+7dOnTokFwulx5//HH997//1b333qu1a9dq586d+vLLLzVo0KAycQYAAHC2Chtc7du31+TJkzVx4kS1bt1as2bN0vjx4y/7fuvUqaP58+fr5ptv1pVXXqn09HTNnj1bV111lSTpmWeeUY0aNdSqVSs1bNhQe/fuVWRkpHJyclRaWqoePXqodevWGjZsmMLCwtxH3wAAAM7HYVmWZfcQ1VlhYaHCwsIUlTpXfkHBHvt2T+hj01QAAOBCzvz9PnLkyEWdj83hGQAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMILgAAAMMI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"},7814:(A,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/barex3-10f7f96ec4c5c233666af459ad98447d.png"},2073:(A,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/barex4-243bfdca4b1a1d8f6fdc72a0cd9af62e.png"},8453:(A,e,t)=>{t.d(e,{R:()=>n,x:()=>C});var a=t(6540);const r={},s=a.createContext(r);function n(A){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function C(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:n(A.components),a.createElement(s.Provider,{value:e},A.children)}}}]);