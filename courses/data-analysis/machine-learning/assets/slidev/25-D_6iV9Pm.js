import{r as p,au as h,o as t,c as o,k as e,a1 as n,b as m,l as g,q as u,s as d,A as i,e as s,$ as a}from"../modules/vue-DwENgbWJ.js";import{I as y}from"./default-B568jjv4.js";import{b as v,Y as r}from"../index-B2H57gRK.js";import{p as x,u as w,f as _}from"./context-M60Ey3P2.js";import"../modules/shiki-BDpg2llW.js";const b=s("h1",null,"Model",-1),f=s("p",null,"In practice, each hypothesis (i.e., each candidate model) is parametrized",-1),k=s("div",{class:"box-top-left"},[s("span",{class:"box-title"},"Parametric model"),s("p",null,[a("The model "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"f"),s("mi",null,"θ")]),s("mo",{stretchy:"false"},"("),s("mo",null,"⋅"),s("mo",{separator:"true"},","),s("mi",null,"w"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f_\\theta(\\cdot,w)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.1076em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"θ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"⋅"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mclose"},")")])])]),a(" is made of "),s("strong",null,"parameters"),a(),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"w"),s("mo",null,"∈"),s("mi",{mathvariant:"script"},"W")]),s("annotation",{encoding:"application/x-tex"},"w\\in\\mathcal{W}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.08222em"}},"W")])])]),a(" and "),s("strong",null,"hyperparameters"),a(),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"θ"),s("mo",null,"∈"),s("mi",{mathvariant:"normal"},"Θ")]),s("annotation",{encoding:"application/x-tex"},"\\theta\\in\\Theta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord"},"Θ")])])]),s("br")])],-1),M=s("p",null,[a("The distinction between parameters and hyperparameters is fuzzy."),s("br"),a(" As a rule of thumb, the hyperparameters can")],-1),z=s("ul",null,[s("li",null,"… impact the complexity of the model"),s("li",null,[a("… help in partitioning the hypothesis space "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"H"),s("mo",null,"="),s("msub",null,[s("mo",null,"∪"),s("mrow",null,[s("mi",null,"θ"),s("mo",null,"∈"),s("mi",{mathvariant:"normal"},"Θ")])]),s("msub",null,[s("mi",{mathvariant:"script"},"H"),s("mi",null,"θ")])]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{H}=\\cup_{\\theta\\in\\Theta} \\mathcal{H}_\\theta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.00965em"}},"H"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8607em","vertical-align":"-0.1774em"}}),s("span",{class:"mord"},[s("span",{class:"mbin"},"∪"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"θ"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mtight"},"Θ")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1774em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathcal",style:{"margin-right":"0.00965em"}},"H"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0097em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"θ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a(" so that:")])],-1),H=s("p",null,[a("for each "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"θ"),s("mo",null,"∈"),s("mi",{mathvariant:"normal"},"Θ")]),s("annotation",{encoding:"application/x-tex"},"\\theta\\in\\Theta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"θ"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord"},"Θ")])])]),a(" one can implement an "),s("strong",null,"algorithm"),a(" which finds the best hypothesis in "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",{mathvariant:"script"},"H"),s("mi",null,"θ")])]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{H}_\\theta")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathcal",style:{"margin-right":"0.00965em"}},"H"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0097em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"θ")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])])],-1),L=s("br",null,null,-1),T=s("blockquote",null,[s("p",null,[s("em",null,[a("Devising interpretable "),s("strong",null,"models"),a(" and theoretically grounded "),s("strong",null,"algorithms"),a(" is the core of ML research")])])],-1),B=[L,T],P={__name:"25",setup(C){return x(r),w(),(D,I)=>{const c=p("center"),l=h("click");return t(),o(y,u(d(i(_)(i(r),24))),{default:e(()=>[b,f,k,n((t(),m("div",null,[M,z,g(c,null,{default:e(()=>[H]),_:1})])),[[l,1]]),n((t(),m("div",null,[...B])),[[l,2]])]),_:1},16)}}},j=v(P,[["__file","/@slidev/slides/25.md"]]);export{j as default};