import{r as i,o as m,c as r,k as t,e as s,l as p,q as c,s as o,A as l,$ as a}from"./modules/vue-FSadVnGy.js";import{I as h}from"./slidev/default-CztGQ3vS.js";import{b as u,E as n}from"./index-DclaTtbZ.js";import{p as g,u as d,f as v}from"./slidev/context-LPCYGaKJ.js";import"./modules/shiki-MuFg0Zmw.js";const y="/courses/data-analysis/unsupervised-learning/chap6/kmeans.png",b=s("h1",null,"K-Means",-1),_=s("p",null,"K-Means clustering is a method to divide a dataset into a certain number of clusters. A cluster is a group of points that have minimal distance between them.",-1),x={class:"row"},k=s("div",{class:"column"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Task"),s("th",null,"Clustering")])]),s("tbody",null,[s("tr",null,[s("td",null,"Type"),s("td",null,"Non-parametric")]),s("tr",null,[s("td",null,"Input"),s("td",null,[a("Point in "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",{mathvariant:"double-struck"},"R"),s("mi",null,"d")])]),s("annotation",{encoding:"application/x-tex"},"\\mathbb{R}^d")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8491em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathbb"},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8491em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"d")])])])])])])])])])])])]),s("tr",null,[s("td",null,"Parameters"),s("td",null,[a("Centroids "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"{"),s("msub",null,[s("mi",null,"c"),s("mi",null,"k")]),s("msubsup",null,[s("mo",{stretchy:"false"},"}"),s("mrow",null,[s("mi",null,"k"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"K")])]),s("annotation",{encoding:"application/x-tex"},"\\{c_k\\}_{k=1}^K")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1244em","vertical-align":"-0.2831em"}}),s("span",{class:"mopen"},"{"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"c"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},[s("span",{class:"mclose"},"}"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8413em"}},[s("span",{style:{top:"-2.4169em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.07153em"}},"K")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2831em"}},[s("span")])])])])])])])]),a(" each in "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",{mathvariant:"double-struck"},"R"),s("mi",null,"d")])]),s("annotation",{encoding:"application/x-tex"},"\\mathbb{R}^d")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8491em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathbb"},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8491em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"d")])])])])])])])])])])])]),s("tr",null,[s("td",null,"Hyperparameter"),s("td",null,[a("Number of clusters "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"K"),s("mo",null,"∈"),s("msub",null,[s("mi",{mathvariant:"double-struck"},"N"),s("mo",null,"+")])]),s("annotation",{encoding:"application/x-tex"},"K\\in\\mathbb{N}_+")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7224em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"K"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8972em","vertical-align":"-0.2083em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathbb"},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2583em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mbin mtight"},"+")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])])])])])])])])])],-1),w={class:"column"},f=s("br",null,null,-1),z=s("img",{src:y,style:{height:"200px"},border:"rounded"},null,-1),M={__name:"4",setup(K){return g(n),d(),(N,R)=>{const e=i("center");return m(),r(h,c(o(l(v)(l(n),3))),{default:t(()=>[b,_,s("div",x,[k,s("div",w,[p(e,null,{default:t(()=>[f,z]),_:1})])])]),_:1},16)}}},I=u(M,[["__file","/@slidev/slides/4.md"]]);export{I as default};