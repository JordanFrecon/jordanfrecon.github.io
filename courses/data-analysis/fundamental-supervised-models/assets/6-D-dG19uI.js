import{r as i,o as r,c as o,k as t,e as s,l as n,q as c,s as p,A as e,$ as a}from"./modules/vue-DnkrJioT.js";import{I as h}from"./slidev/default-Bdt7nzaz.js";import{b as u,G as m}from"./index-OhIvRzYI.js";import{p as d,u as g,f as x}from"./slidev/context-GRvs4aS6.js";import"./modules/shiki-DQpr8KuN.js";const _="/courses/data-analysis/fundamental-supervised-models/chap3/knn-regression.png",b=s("h1",null,"K-NN (Regression)",-1),k=s("p",null,"It was later extended to regression tasks",-1),w={class:"row"},y=s("div",{class:"column"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Task"),s("th",null,"Regression")])]),s("tbody",null,[s("tr",null,[s("td",null,"Type"),s("td",null,"Non-parametric")]),s("tr",null,[s("td",null,"Input/Output"),s("td",null,[a("Point in "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",{mathvariant:"double-struck"},"R"),s("mi",null,"d")])]),s("annotation",{encoding:"application/x-tex"},"\\mathbb{R}^d")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8491em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathbb"},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8491em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"d")])])])])])])])])])]),a(" / Value in "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"double-struck"},"R")]),s("annotation",{encoding:"application/x-tex"},"\\mathbb{R}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6889em"}}),s("span",{class:"mord mathbb"},"R")])])])])]),s("tr",null,[s("td",null,"Hyperparameter"),s("td",null,[a("Number of neighbors "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k"),s("mo",null,"∈"),s("msup",null,[s("mi",{mathvariant:"double-struck"},"N"),s("mo",null,"+")])]),s("annotation",{encoding:"application/x-tex"},"k\\in\\mathbb{N}^+")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7713em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathbb"},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7713em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mbin mtight"},"+")])])])])])])])])])])])])])])],-1),v={class:"column"},f=s("br",null,null,-1),M=s("img",{src:_,style:{height:"200px"},border:"rounded"},null,-1),N={class:"box"},R=s("p",null,[a("Given a "),s("span",{style:{color:"#00B000"}},"new point"),a(", we predict its value as the average value of its k nearest neighbors")],-1),z=s("p",null,[a("Example: for "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k"),s("mo",null,"="),s("mn",null,"3")]),s("annotation",{encoding:"application/x-tex"},"k=3")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"3")])])]),a(" its predicted value is 3.4 while for "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k"),s("mo",null,"="),s("mn",null,"5")]),s("annotation",{encoding:"application/x-tex"},"k=5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"5")])])]),a(" it’s 3.0")],-1),L={__name:"6",setup(B){return d(m),g(),(I,P)=>{const l=i("center");return r(),o(h,c(p(e(x)(e(m),5))),{default:t(()=>[b,k,s("div",w,[y,s("div",v,[n(l,null,{default:t(()=>[f,M]),_:1})])]),s("div",N,[n(l,null,{default:t(()=>[R]),_:1})]),z]),_:1},16)}}},q=u(L,[["__file","/@slidev/slides/6.md"]]);export{q as default};