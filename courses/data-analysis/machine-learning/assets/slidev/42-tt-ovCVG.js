import{au as m,o as t,c as i,k as p,e as s,a1 as r,b as c,q as h,s as o,A as l,$ as a}from"../modules/vue-DwENgbWJ.js";import{I as g}from"./default-B568jjv4.js";import{b as u,al as e}from"../index-B2H57gRK.js";import{p as y,u as d,f as v}from"./context-M60Ey3P2.js";import"../modules/shiki-BDpg2llW.js";const z=s("h1",null,"Regularization",-1),w=s("blockquote",null,[s("p",null,[a("We have seen that, given some hyperparameters "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"θ")]),s("annotation",{encoding:"application/x-tex"},"\\theta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ")])])]),a(", the model parameters "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"w")]),s("annotation",{encoding:"application/x-tex"},"w")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w")])])]),a(" are learned by minimizing a cost function "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"L")]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{L}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathcal"},"L")])])])])],-1),f={style:{"font-size":"smaller"}},x=s("p",null,[a("So far, we have considered the simplest form where the "),s("strong",null,"training error"),a(" is minimized")],-1),b=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,[s("munder",null,[s("mo",null,[s("mi",null,"min"),s("mo",null,"⁡")]),s("mrow",null,[s("mi",null,"w"),s("mo",null,"∈"),s("mi",{mathvariant:"script"},"W")])])]),s("mo",{fence:"false",stretchy:"true",minsize:"1.8em",maxsize:"1.8em"},"["),s("mi",{mathvariant:"script"},"L"),s("mo",{stretchy:"false"},"("),s("mi",null,"w"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("msup",null,[s("mi",null,"n"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"t"),s("mi",null,"r"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])])]),s("msubsup",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("msup",null,[s("mi",null,"n"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"t"),s("mi",null,"r"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])])]),s("mi",{mathvariant:"normal"},"ℓ"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"f"),s("mi",null,"θ")]),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",{separator:"true"},","),s("mi",null,"w"),s("mo",{stretchy:"false"},")"),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")"),s("mo",{fence:"false",stretchy:"true",minsize:"1.8em",maxsize:"1.8em"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\underset{w\\in\\mathcal{W}}{\\min} \\Big[\\mathcal{L}(w) = \\frac{1}{n^{(trn)}}\\sum_{i=1}^{n^{(trn)}} \\ell ( f_\\theta(x_i,w),y_i)\\Big]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.9217em","vertical-align":"-0.7717em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6679em"}},[s("span",{style:{top:"-2.3557em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mathcal mtight",style:{"margin-right":"0.08222em"}},"W")])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",null,[s("span",{class:"mop"},[s("span",{class:"mop"},"min")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7717em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"delimsizing size2"},"[")]),s("span",{class:"mord mathcal"},"L"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.8296em","vertical-align":"-0.65em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.6146em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.822em"}},[s("span",{style:{top:"-2.822em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5357em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"t"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mclose mtight"},")")])])])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3854em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1796em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9667em"}},[s("span",{style:{top:"-2.9667em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5357em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"t"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mclose mtight"},")")])])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2997em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"ℓ"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"θ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mclose"},")"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mord"},[s("span",{class:"delimsizing size2"},"]")])])])])],-1),_=s("br",null,null,-1),k=s("p",null,[a("Later in the course, we will see more complex cost functions where an additional "),s("span",{style:{color:"blue"}},[s("strong",null,"regularization term")]),a(" is added to impose some structure on "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"w")]),s("annotation",{encoding:"application/x-tex"},"w")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w")])])]),a(" ("),s("em",null,[a("hence controlling the complexity of "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"f"),s("mi",null,"θ")])]),s("annotation",{encoding:"application/x-tex"},"f_\\theta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"θ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])])]),a(")")],-1),M=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,[s("munder",null,[s("mo",null,[s("mi",null,"min"),s("mo",null,"⁡")]),s("mrow",null,[s("mi",null,"w"),s("mo",null,"∈"),s("mi",{mathvariant:"script"},"W")])])]),s("mo",{fence:"false",stretchy:"true",minsize:"1.8em",maxsize:"1.8em"},"["),s("mi",{mathvariant:"script"},"L"),s("mo",{stretchy:"false"},"("),s("mi",null,"w"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("msup",null,[s("mi",null,"n"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"t"),s("mi",null,"r"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])])]),s("msubsup",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("msup",null,[s("mi",null,"n"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"t"),s("mi",null,"r"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])])]),s("mi",{mathvariant:"normal"},"ℓ"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"f"),s("mi",null,"θ")]),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"x"),s("mi",null,"i")]),s("mo",{separator:"true"},","),s("mi",null,"w"),s("mo",{stretchy:"false"},")"),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"y"),s("mi",null,"i")]),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mstyle",{mathcolor:"blue"},[s("mi",{mathvariant:"script"},"R"),s("mo",{stretchy:"false"},"("),s("mi",null,"w"),s("mo",{separator:"true"},","),s("mover",{accent:"true"},[s("mi",null,"θ"),s("mo",null,"~")]),s("mo",{stretchy:"false"},")")]),s("mo",{fence:"false",stretchy:"true",minsize:"1.8em",maxsize:"1.8em"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\underset{w\\in\\mathcal{W}}{\\min} \\Big[\\mathcal{L}(w) = \\frac{1}{n^{(trn)}}\\sum_{i=1}^{n^{(trn)}} \\ell ( f_\\theta(x_i,w),y_i) + \\textcolor{blue}{\\mathcal{R}(w,\\tilde{\\theta})}\\Big]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.9217em","vertical-align":"-0.7717em"}}),s("span",{class:"mord"},[s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6679em"}},[s("span",{style:{top:"-2.3557em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mathcal mtight",style:{"margin-right":"0.08222em"}},"W")])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",null,[s("span",{class:"mop"},[s("span",{class:"mop"},"min")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7717em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"delimsizing size2"},"[")]),s("span",{class:"mord mathcal"},"L"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.565em","vertical-align":"-0.3854em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.6146em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.822em"}},[s("span",{style:{top:"-2.822em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5357em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"t"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mclose mtight"},")")])])])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3854em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.1796em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9667em"}},[s("span",{style:{top:"-2.9667em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5357em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mathnormal mtight"},"t"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mclose mtight"},")")])])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2997em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"ℓ"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"θ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mclose"},")"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.8em","vertical-align":"-0.65em"}}),s("span",{class:"mord mathcal",style:{color:"blue"}},"R"),s("span",{class:"mopen",style:{color:"blue"}},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em",color:"blue"}},"w"),s("span",{class:"mpunct",style:{color:"blue"}},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord accent",style:{color:"blue"}},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9313em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em",color:"blue"}},"θ")]),s("span",{style:{top:"-3.6134em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.1667em"}},[s("span",{class:"mord",style:{color:"blue"}},"~")])])])])])]),s("span",{class:"mclose",style:{color:"blue"}},")"),s("span",{class:"mord"},[s("span",{class:"delimsizing size2"},"]")])])])])],-1),L=s("p",null,[a("This regularization term may also involves some hyperparameters "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"θ"),s("mo",null,"~")])]),s("annotation",{encoding:"application/x-tex"},"\\tilde{\\theta}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9313em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9313em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ")]),s("span",{style:{top:"-3.6134em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.1667em"}},[s("span",{class:"mord"},"~")])])])])])])])])]),a(" to estimate")],-1),B=[k,M,L],W={__name:"42",setup(R){return y(e),d(),(P,T)=>{const n=m("click");return t(),i(g,h(o(l(v)(l(e),41))),{default:p(()=>[z,w,s("div",f,[x,b,_,r((t(),c("div",null,[...B])),[[n,1]])])]),_:1},16)}}},S=u(W,[["__file","/@slidev/slides/42.md"]]);export{S as default};