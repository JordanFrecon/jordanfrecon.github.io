import{r as e,o as i,c as p,k as l,l as r,q as c,s as h,A as t,e as s,$ as a}from"../modules/vue-B8uRXbDq.js";import{I as o}from"./default-Dc9oCRCu.js";import{b as g,an as n}from"../index-HcqJsV3o.js";import{p as u,u as y,f as d}from"./context-BWFe9akF.js";import"../modules/shiki-D3W0EY2g.js";const v=s("h1",null,"Support Vector Machine (Soft Margin): Training",-1),b=s("p",null,"The assumption that our dataset is linearly separable is strong and not true for most of the cases. We can create a new model that will find the optimal hyperplane, but do not try to correctly classify every training point",-1),z=s("p",null,[a("Instead of enforcing that every point "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"{"),s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("msubsup",null,[s("mo",{stretchy:"false"},"}"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"n")])]),s("annotation",{encoding:"application/x-tex"},"\\{x_i,y_i\\}_{i=1}^n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0087em","vertical-align":"-0.2587em"}}),s("span",{class:"mopen"},"{"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},[s("span",{class:"mclose"},"}"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-2.4413em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2587em"}},[s("span")])])])])])])])]),a(" is correcly classified, i.e.,")],-1),x=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"w"),s("mi",{mathvariant:"normal"},"⊤")]),s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",null,"−"),s("mi",null,"b"),s("mo",{stretchy:"false"},")"),s("mo",null,"≥"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"y_i(w^\\top x_i - b)\\geq 1 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1491em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8991em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"⊤")])])])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≥"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])])],-1),w=s("p",null,[a("We consider a soft penalty, called "),s("strong",null,"hinge loss"),a(", which penalizes the misclassified points")],-1),f=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"max"),s("mo",null,"⁡"),s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"w"),s("mi",{mathvariant:"normal"},"⊤")]),s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",null,"−"),s("mi",null,"b"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\max(0, 1 - y_i(w^\\top x_i - b)) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mop"},"max"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1491em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8991em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"⊤")])])])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mclose"},"))")])])])])],-1),_=s("br",null,null,-1),k=s("div",{class:"box"},[s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,[s("munder",null,[s("mo",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"i"),s("mi",{mathvariant:"normal"},"n"),s("mi",{mathvariant:"normal"},"i"),s("mi",{mathvariant:"normal"},"m"),s("mi",{mathvariant:"normal"},"i"),s("mi",{mathvariant:"normal"},"z"),s("mi",{mathvariant:"normal"},"e")])]),s("mrow",null,[s("mi",null,"w"),s("mo",null,"∈"),s("msup",null,[s("mi",{mathvariant:"double-struck"},"R"),s("mi",null,"d")]),s("mo",{separator:"true"},","),s("mi",null,"b"),s("mo",null,"∈"),s("mi",{mathvariant:"double-struck"},"R")])])]),s("mtext",null,"  "),s("mstyle",{mathcolor:"red"},[s("mi",null,"C")]),s("mi",{mathvariant:"normal"},"∥"),s("mi",null,"w"),s("msup",null,[s("mi",{mathvariant:"normal"},"∥"),s("mn",null,"2")]),s("mo",null,"+"),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"n")]),s("mi",null,"max"),s("mo",null,"⁡"),s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mn",null,"1"),s("mo",null,"−"),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"w"),s("mi",{mathvariant:"normal"},"⊤")]),s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",null,"−"),s("mi",null,"b"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\underset{w\\in\\mathbb{R}^d, b\\in\\mathbb{R}}{\\mathrm{minimize}}\\;\\textcolor{red}{C}\\|w\\|^2 + \\sum_{i=1}^n\\max(0, 1 - y_i(w^\\top x_i - b)) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.8136em","vertical-align":"-0.9495em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6679em"}},[s("span",{style:{top:"-2.2866em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mtight"},[s("span",{class:"mord mathbb mtight"},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.782em"}},[s("span",{style:{top:"-2.786em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mathnormal mtight"},"d")])])])])])])]),s("span",{class:"mpunct mtight"},","),s("span",{class:"mord mathnormal mtight"},"b"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mathbb mtight"},"R")])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",null,[s("span",{class:"mop"},[s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"minimize")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9495em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em",color:"red"}},"C"),s("span",{class:"mord"},"∥"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mord"},[s("span",{class:"mord"},"∥"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.9291em","vertical-align":"-1.2777em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},"max"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1491em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8991em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"⊤")])])])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mclose"},"))")])])])])])],-1),M=s("p",null,[a("However this model introduces an hyperparameter "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mstyle",{mathcolor:"red"},[s("mi",null,"C"),s("mo",null,"∈"),s("msub",null,[s("mi",{mathvariant:"double-struck"},"R"),s("mo",null,"+")])])]),s("annotation",{encoding:"application/x-tex"},"\\textcolor{red}{C\\in\\mathbb{R}_+}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7224em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em",color:"red"}},"C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel",style:{color:"red"}},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8972em","vertical-align":"-0.2083em"}}),s("span",{class:"mord",style:{color:"red"}},[s("span",{class:"mord mathbb",style:{color:"red"}},"R"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2583em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight",style:{color:"red"}},[s("span",{class:"mbin mtight",style:{color:"red"}},"+")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])])])])]),a(" which needs to be validated")],-1),R={__name:"40",setup(C){return u(n),y(),(L,T)=>{const m=e("center");return i(),p(o,c(h(t(d)(t(n),39))),{default:l(()=>[v,b,z,x,w,f,_,k,r(m,null,{default:l(()=>[M]),_:1})]),_:1},16)}}},S=g(R,[["__file","/@slidev/slides/40.md"]]);export{S as default};