import{r as n,o as i,c as r,k as t,l as c,q as p,s as o,A as l,e as s,$ as a}from"./modules/vue-B8uRXbDq.js";import{I as h}from"./slidev/default-Dc9oCRCu.js";import{b as g,G as e}from"./index-HcqJsV3o.js";import{p as u,u as y,f as d}from"./slidev/context-BWFe9akF.js";import"./modules/shiki-D3W0EY2g.js";const v="/courses/data-analysis/advanced-supervised-models/chap4/illustration_entropy.png",f=s("h1",null,"Decision Tree: Training",-1),x=s("p",null,[a("The notion of best attribute is related to the concept of "),s("strong",null,"Information Gain"),s("br"),a(" which, in turns, relies on the "),s("strong",null,"Entropy")],-1),_=s("div",{class:"box-top-left"},[s("span",{class:"box-title"},"Information entropy"),s("p",null,[a("Given a subset "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"S")]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{S}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S")])])]),a(" of the dataset, its entropy reads")]),s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"H"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"script"},"S"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"c"),s("mi",{mathvariant:"normal"},"l"),s("mi",{mathvariant:"normal"},"a"),s("mi",{mathvariant:"normal"},"s"),s("mi",{mathvariant:"normal"},"s")]),s("mtext",null," "),s("mi",null,"k"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"c")]),s("mo",null,"−"),s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",null,"∈"),s("mi",{mathvariant:"script"},"S"),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"y"),s("mo",null,"="),s("mi",null,"k"),s("mo",{stretchy:"false"},")"),s("msub",null,[s("mrow",null,[s("mi",null,"log"),s("mo",null,"⁡")]),s("mn",null,"2")]),s("mo",{fence:"false",stretchy:"true",minsize:"1.8em",maxsize:"1.8em"},"("),s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",null,"∈"),s("mi",{mathvariant:"script"},"S"),s("mi",{mathvariant:"normal"},"∣"),s("mi",null,"y"),s("mo",null,"="),s("mi",null,"k"),s("mo",{stretchy:"false"},")"),s("mo",{fence:"false",stretchy:"true",minsize:"1.8em",maxsize:"1.8em"},")")]),s("annotation",{encoding:"application/x-tex"},"H(\\mathcal{S})=\\sum_{\\mathrm{class}\\, k=1}^c - p(x\\in\\mathcal{S}|y=k) \\log_2 \\Big(p(x\\in\\mathcal{S}|y=k)\\Big) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.9535em","vertical-align":"-1.3021em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8479em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathrm mtight"},"class")]),s("span",{class:"mspace mtight",style:{"margin-right":"0.1952em"}}),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"c")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3021em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.8em","vertical-align":"-0.65em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop"},[a("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.207em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"delimsizing size2"},"(")]),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),s("span",{class:"mord"},"∣"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.8em","vertical-align":"-0.65em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mclose"},")"),s("span",{class:"mord"},[s("span",{class:"delimsizing size2"},")")])])])])])])],-1),k=s("img",{src:v,style:{height:"170px"},border:"rounded"},null,-1),b={__name:"6",setup(z){return u(e),y(),(w,S)=>{const m=n("center");return i(),r(h,p(o(l(d)(l(e),5))),{default:t(()=>[f,x,_,c(m,null,{default:t(()=>[k]),_:1})]),_:1},16)}}},G=g(b,[["__file","/@slidev/slides/6.md"]]);export{G as default};