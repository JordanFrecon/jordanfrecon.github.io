import{r as n,o as m,c as i,k as t,l as p,q as r,s as c,A as a,e as s}from"./modules/vue-meR8CJdo.js";import{I as o}from"./slidev/default-3FAAb6Np.js";import{b as h,G as e}from"./index-DCw-oydg.js";import{p as g,u,f as d}from"./slidev/context-DpX7zjXc.js";import"./modules/shiki-sO5EEXa4.js";const y="/courses/data-analysis/numerical-optimization/chap2/optim2d-3.png",_=s("h1",null,"2D Illustration of Gradient Descent",-1),v=s("p",null,"Gradient descent can be thought of as a ball rolling down a hill",-1),f=s("br",null,null,-1),w=s("img",{src:y,style:{height:"250px"},border:"rounded"},null,-1),z=s("p",null,"Go one step down the hill",-1),x=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"iterate"),s("mtext",null,"  "),s("mo",{stretchy:"false"},"("),s("msubsup",null,[s("mi",null,"w"),s("mn",null,"1"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",{stretchy:"false"},")")])]),s("mo",{separator:"true"},","),s("msubsup",null,[s("mi",null,"w"),s("mn",null,"2"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",{stretchy:"false"},")")])]),s("mo",{stretchy:"false"},")"),s("mspace",{width:"1em"}),s("mo",null,"→"),s("mspace",{width:"1em"}),s("mtext",null,"iterate"),s("mtext",null,"  "),s("mo",{stretchy:"false"},"("),s("msubsup",null,[s("mi",null,"w"),s("mn",null,"1"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])]),s("mo",{separator:"true"},","),s("msubsup",null,[s("mi",null,"w"),s("mn",null,"2"),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\text{iterate}\\;(w^{(0)}_1,w^{(0)}_2)\\quad\\rightarrow\\quad \\text{iterate}\\;(w^{(1)}_1,w^{(1)}_2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.3111em","vertical-align":"-0.2663em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"iterate")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.0448em"}},[s("span",{style:{top:"-2.4337em","margin-left":"-0.0269em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])]),s("span",{style:{top:"-3.2198em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mtight"},"0"),s("span",{class:"mclose mtight"},")")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2663em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.0448em"}},[s("span",{style:{top:"-2.4337em","margin-left":"-0.0269em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])]),s("span",{style:{top:"-3.2198em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mtight"},"0"),s("span",{class:"mclose mtight"},")")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2663em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"1em"}}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"→"),s("span",{class:"mspace",style:{"margin-right":"1em"}}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.3111em","vertical-align":"-0.2663em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"iterate")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.0448em"}},[s("span",{style:{top:"-2.4337em","margin-left":"-0.0269em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])]),s("span",{style:{top:"-3.2198em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mtight"},"1"),s("span",{class:"mclose mtight"},")")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2663em"}},[s("span")])])])])]),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.0448em"}},[s("span",{style:{top:"-2.4337em","margin-left":"-0.0269em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])]),s("span",{style:{top:"-3.2198em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mopen mtight"},"("),s("span",{class:"mord mtight"},"1"),s("span",{class:"mclose mtight"},")")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2663em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")])])])],-1),b={__name:"7",setup(k){return g(e),u(),(G,q)=>{const l=n("center");return m(),i(o,r(c(a(d)(a(e),6))),{default:t(()=>[_,v,f,p(l,null,{default:t(()=>[w,z,x]),_:1})]),_:1},16)}}},D=h(b,[["__file","/@slidev/slides/7.md"]]);export{D as default};