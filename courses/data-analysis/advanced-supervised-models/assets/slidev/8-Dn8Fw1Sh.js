import{au as e,o as t,c as i,k as r,a1 as c,b as p,q as h,s as o,A as l,e as a,$ as s}from"../modules/vue-B8uRXbDq.js";import{I as g}from"./default-Dc9oCRCu.js";import{b as u,I as n}from"../index-HcqJsV3o.js";import{p as d,u as y,f as v}from"./context-BWFe9akF.js";import"../modules/shiki-D3W0EY2g.js";const x=a("h1",null,"Decision Tree: Training",-1),w=a("div",{class:"box-top-left"},[a("span",{class:"box-title"},"Information gain"),a("p",null,[s("Given a subset "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"script"},"S")]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{S}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S")])])]),s(" of the dataset, the information gain by fixing the attribute "),a("em",null,"a"),s(" reads")]),a("p",null,[a("span",{class:"katex-display"},[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("semantics",null,[a("mrow",null,[a("mi",null,"I"),a("mi",null,"G"),a("mo",{stretchy:"false"},"("),a("mi",{mathvariant:"script"},"S"),a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"a"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("mi",null,"H"),a("mo",{stretchy:"false"},"("),a("mi",{mathvariant:"script"},"S"),a("mo",{stretchy:"false"},")"),a("mo",null,"−"),a("mi",null,"H"),a("mo",{stretchy:"false"},"("),a("mi",{mathvariant:"script"},"S"),a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"a"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"IG(\\mathcal{S}|a)=H(\\mathcal{S}) - H(\\mathcal{S}|a) ")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),a("span",{class:"mord mathnormal"},"G"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),a("span",{class:"mord"},"∣"),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),a("span",{class:"mord"},"∣"),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mclose"},")")])])])])]),a("p",null,[s("where "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"H"),a("mo",{stretchy:"false"},"("),a("mi",{mathvariant:"script"},"S"),a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"a"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"H(\\mathcal{S}|a)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),a("span",{class:"mord"},"∣"),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mclose"},")")])])]),s(" is the conditional entropy of "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"script"},"S")]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{S}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S")])])]),s(" given the value of attribute "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s(".")])],-1),f={class:"box-top-left"},k=a("span",{class:"box-title"},"Conditional entropy",-1),b=a("p",null,[s("Given a subset "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"script"},"S")]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{S}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S")])])]),s(" of the dataset and an attribute "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s(", we let "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mrow",null,[a("mi",{mathvariant:"normal"},"v"),a("mi",{mathvariant:"normal"},"a"),a("mi",{mathvariant:"normal"},"l"),a("mi",{mathvariant:"normal"},"s")]),a("mo",{stretchy:"false"},"("),a("mi",null,"a"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"\\mathrm{vals}(a)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathrm"},"vals")]),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mclose"},")")])])]),s(" be all the possible values taken by "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),s(" and "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("msub",null,[a("mi",{mathvariant:"script"},"S"),a("mi",null,"a")]),a("mo",{stretchy:"false"},"("),a("mi",null,"v"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"\\mathcal{S}_a(v)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.1514em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.075em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"a")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])]),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),a("span",{class:"mclose"},")")])])]),s(" be the subset of data whose attribute "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a"),a("mo",null,"="),a("mi",null,"v")]),a("annotation",{encoding:"application/x-tex"},"a=v")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v")])])]),s(". Then,")],-1),S=a("p",null,[a("span",{class:"katex-display"},[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("semantics",null,[a("mrow",null,[a("mi",null,"H"),a("mo",{stretchy:"false"},"("),a("mi",{mathvariant:"script"},"S"),a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"a"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("munder",null,[a("mo",null,"∑"),a("mrow",null,[a("mi",null,"v"),a("mo",null,"∈"),a("mrow",null,[a("mi",{mathvariant:"normal"},"v"),a("mi",{mathvariant:"normal"},"a"),a("mi",{mathvariant:"normal"},"l"),a("mi",{mathvariant:"normal"},"s")]),a("mo",{stretchy:"false"},"("),a("mi",null,"a"),a("mo",{stretchy:"false"},")")])]),a("mfrac",null,[a("mrow",null,[a("mi",{mathvariant:"normal"},"∣"),a("msub",null,[a("mi",{mathvariant:"script"},"S"),a("mi",null,"a")]),a("mo",{stretchy:"false"},"("),a("mi",null,"v"),a("mo",{stretchy:"false"},")"),a("mi",{mathvariant:"normal"},"∣")]),a("mrow",null,[a("mi",{mathvariant:"normal"},"∣"),a("mi",{mathvariant:"script"},"S"),a("mi",{mathvariant:"normal"},"∣")])]),a("mi",null,"H"),a("mo",{stretchy:"false"},"("),a("msub",null,[a("mi",{mathvariant:"script"},"S"),a("mi",null,"a")]),a("mo",{stretchy:"false"},"("),a("mi",null,"v"),a("mo",{stretchy:"false"},")"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"H(\\mathcal{S}|a) = \\sum_{v\\in\\mathrm{vals}(a)} \\frac{|\\mathcal{S}_a(v)|}{|\\mathcal{S}|} H( \\mathcal{S}_a(v) ) ")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),a("span",{class:"mord"},"∣"),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"2.943em","vertical-align":"-1.516em"}}),a("span",{class:"mop op-limits"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.05em"}},[a("span",{style:{top:"-1.809em","margin-left":"0em"}},[a("span",{class:"pstrut",style:{height:"3.05em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"v"),a("span",{class:"mrel mtight"},"∈"),a("span",{class:"mord mtight"},[a("span",{class:"mord mathrm mtight"},"vals")]),a("span",{class:"mopen mtight"},"("),a("span",{class:"mord mathnormal mtight"},"a"),a("span",{class:"mclose mtight"},")")])])]),a("span",{style:{top:"-3.05em"}},[a("span",{class:"pstrut",style:{height:"3.05em"}}),a("span",null,[a("span",{class:"mop op-symbol large-op"},"∑")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.516em"}},[a("span")])])])]),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.427em"}},[a("span",{style:{top:"-2.314em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},"∣"),a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),a("span",{class:"mord"},"∣")])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.677em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},"∣"),a("span",{class:"mord"},[a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.1514em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.075em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"a")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])]),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),a("span",{class:"mclose"},")"),a("span",{class:"mord"},"∣")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.936em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})]),a("span",{class:"mord mathnormal",style:{"margin-right":"0.08125em"}},"H"),a("span",{class:"mopen"},"("),a("span",{class:"mord"},[a("span",{class:"mord mathcal",style:{"margin-right":"0.075em"}},"S"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.1514em"}},[a("span",{style:{top:"-2.55em","margin-left":"-0.075em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mathnormal mtight"},"a")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.15em"}},[a("span")])])])])]),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),a("span",{class:"mclose"},"))")])])])])],-1),M=[k,b,S],_={__name:"8",setup(H){return d(n),y(),(z,L)=>{const m=e("click");return t(),i(g,h(o(l(v)(l(n),7))),{default:r(()=>[x,w,c((t(),p("div",f,[...M])),[[m,1]])]),_:1},16)}}},D=u(_,[["__file","/@slidev/slides/8.md"]]);export{D as default};