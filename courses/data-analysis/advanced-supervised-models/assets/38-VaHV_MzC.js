import{r as i,o as p,c as r,k as a,e as s,l as t,q as c,s as o,A as n,$ as m}from"./modules/vue-B8uRXbDq.js";import{I as h}from"./slidev/default-Dc9oCRCu.js";import{b as u,al as e}from"./index-HcqJsV3o.js";import{p as g,u as d,f as y}from"./slidev/context-BWFe9akF.js";import"./modules/shiki-D3W0EY2g.js";const v="/courses/data-analysis/advanced-supervised-models/chap4/svm-illustration.png",w=s("h1",null,"Support Vector Machine",-1),x={class:"row"},_=s("div",{class:"column"},[s("p",null,"The equation of an hyperplane is"),s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"w"),s("mi",{mathvariant:"normal"},"⊤")]),s("mi",null,"x"),s("mo",null,"−"),s("mi",null,"b"),s("mo",null,"="),s("mn",null,"0")]),s("annotation",{encoding:"application/x-tex"},"w^\\top x - b =0 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9824em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8991em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"⊤")])])])])])])]),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])])])])]),s("p",null,"The equations of the hyperplanes defining the margins are"),s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mo",{fence:"true"},"{"),s("mtable",{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("msup",null,[s("mi",null,"w"),s("mi",{mathvariant:"normal"},"⊤")]),s("mi",null,"x"),s("mo",null,"−"),s("mi",null,"b")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mo",null,"+"),s("mn",null,"1")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("msup",null,[s("mi",null,"w"),s("mi",{mathvariant:"normal"},"⊤")]),s("mi",null,"x"),s("mo",null,"−"),s("mi",null,"b")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mo",null,"−"),s("mn",null,"1")])])])])])]),s("annotation",{encoding:"application/x-tex"},"\\left\\{ \\begin{aligned} w^\\top x - b &= + 1 \\\\ w^\\top x - b &= - 1 \\end{aligned}\\right. ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.1182em","vertical-align":"-1.3091em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"{")]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8091em"}},[s("span",{style:{top:"-3.91em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8991em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"⊤")])])])])])])]),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"b")])]),s("span",{style:{top:"-2.3509em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8991em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"⊤")])])])])])])]),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"b")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3091em"}},[s("span")])])])]),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8091em"}},[s("span",{style:{top:"-3.91em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"+"),s("span",{class:"mord"},"1")])]),s("span",{style:{top:"-2.3509em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3091em"}},[s("span")])])])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])]),s("p",null,[m("The margin distance is "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mi",{mathvariant:"normal"},"/"),s("mi",{mathvariant:"normal"},"∥"),s("mi",null,"w"),s("msup",null,[s("mi",{mathvariant:"normal"},"∥"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"1/\\|w\\|^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1/∥"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord"},[s("span",{class:"mord"},"∥"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])])])],-1),b={class:"column"},f=s("br",null,null,-1),z=s("br",null,null,-1),k=s("img",{src:v,style:{height:"200px"},border:"rounded"},null,-1),M={class:"box"},T=s("p",null,[m("The main goal of SVM is to maximize the margin, this means to minimize the value of "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∥"),s("mi",null,"w"),s("msup",null,[s("mi",{mathvariant:"normal"},"∥"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"\\|w\\|^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"∥"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord"},[s("span",{class:"mord"},"∥"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])])],-1),L={__name:"38",setup(V){return g(e),d(),(q,B)=>{const l=i("center");return p(),r(h,c(o(n(y)(n(e),37))),{default:a(()=>[w,s("div",x,[_,s("div",b,[t(l,null,{default:a(()=>[f,z,k]),_:1})])]),s("div",M,[t(l,null,{default:a(()=>[T]),_:1})])]),_:1},16)}}},j=u(L,[["__file","/@slidev/slides/38.md"]]);export{j as default};