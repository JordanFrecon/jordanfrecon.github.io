import{r as p,au as o,o as t,c as h,k as e,a1 as n,b as m,l as g,q as u,s as d,A as i,e as s,$ as a}from"../modules/vue-DwENgbWJ.js";import{I as y}from"./default-B568jjv4.js";import{b as x,V as r}from"../index-B2H57gRK.js";import{p as v,u as w,f as b}from"./context-M60Ey3P2.js";import"../modules/shiki-BDpg2llW.js";const _=s("h1",null,"Generalization",-1),k=s("p",null,[a("How to select an hypothesis "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"h"),s("mo",null,"∈"),s("mi",{mathvariant:"script"},"H")]),s("annotation",{encoding:"application/x-tex"},"h\\in\\mathcal{H}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.00965em"}},"H")])])]),a(" which generalizes well to unseen data?")],-1),f={class:"box-top-left"},M=s("span",{class:"box-title"}," Generalization Bound",-1),z=s("div",{syle:"font-size:smaller"},[s("p",null,[s("em",null,[a("Given some hypothesis "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"h"),s("mo",null,"∈"),s("mi",{mathvariant:"script"},"H")]),s("annotation",{encoding:"application/x-tex"},"h\\in\\mathcal{H}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∈"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.00965em"}},"H")])])]),a(", "),s("span",{style:{color:"#32CD32"}},"the error made on all possible data"),a(" is smaller than the "),s("span",{style:{color:"#5eb2fcff"}},"error on your available data "),a(" plus some complexity measure")])])],-1),H=s("br",null,null,-1),L=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("munder",null,[s("munder",null,[s("mstyle",{mathcolor:"LimeGreen"},[s("msub",null,[s("mtext",null,"Error"),s("mtext",null,"all data")]),s("mo",{stretchy:"false"},"("),s("mi",null,"h"),s("mo",{stretchy:"false"},")")]),s("mo",{stretchy:"true"},"⏟")]),s("mtext",null,"unknown")]),s("mo",null,"≤"),s("mstyle",{mathcolor:"SkyBlue"},[s("msub",null,[s("mtext",null,"Error"),s("mtext",null,"available data")]),s("mo",{stretchy:"false"},"("),s("mi",null,"h"),s("mo",{stretchy:"false"},")")]),s("mo",null,"+"),s("munder",null,[s("munder",null,[s("mrow",null,[s("mtext",null,"Complexity"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"script"},"H"),s("mo",{separator:"true"},","),s("mtext",null,"number of available data"),s("mo",{stretchy:"false"},")")]),s("mo",{stretchy:"true"},"⏟")]),s("mtext",null,"usually hard to compute")])]),s("annotation",{encoding:"application/x-tex"},"\\underbrace{\\textcolor{LimeGreen}{\\text{Error}_{\\text{all data}}(h)}}_{\\text{unknown}} \\leq \\textcolor{SkyBlue}{\\text{Error}_{\\text{available data}}(h)} + \\underbrace{\\text{Complexity}(\\mathcal{H}, \\text{number of available data})}_{\\text{usually hard to compute}}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3341em","vertical-align":"-1.5841em"}}),s("span",{class:"mord munder"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.75em"}},[s("span",{style:{top:"-1.4159em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"unknown")])])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord munder"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.75em"}},[s("span",{class:"svg-align",style:{top:"-2.102em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"stretchy",style:{height:"0.548em","min-width":"1.6em"}},[s("span",{class:"brace-left",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`})])]),s("span",{class:"brace-center",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMidYMin slice"},[s("path",{d:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`})])]),s("span",{class:"brace-right",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMaxYMin slice"},[s("path",{d:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`})])])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{color:"LimeGreen"}},[s("span",{class:"mord text",style:{color:"LimeGreen"}},[s("span",{class:"mord",style:{color:"LimeGreen"}},"Error")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight",style:{color:"LimeGreen"}},[s("span",{class:"mord mtight",style:{color:"LimeGreen"}},[s("span",{class:"mord text mtight",style:{color:"LimeGreen"}},[s("span",{class:"mord mtight",style:{color:"LimeGreen"}},"all data")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen",style:{color:"LimeGreen"}},"("),s("span",{class:"mord mathnormal",style:{color:"LimeGreen"}},"h"),s("span",{class:"mclose",style:{color:"LimeGreen"}},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.898em"}},[s("span")])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5841em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord",style:{color:"SkyBlue"}},[s("span",{class:"mord text",style:{color:"SkyBlue"}},[s("span",{class:"mord",style:{color:"SkyBlue"}},"Error")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight",style:{color:"SkyBlue"}},[s("span",{class:"mord mtight",style:{color:"SkyBlue"}},[s("span",{class:"mord text mtight",style:{color:"SkyBlue"}},[s("span",{class:"mord mtight",style:{color:"SkyBlue"}},"available data")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen",style:{color:"SkyBlue"}},"("),s("span",{class:"mord mathnormal",style:{color:"SkyBlue"}},"h"),s("span",{class:"mclose",style:{color:"SkyBlue"}},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4702em","vertical-align":"-1.7202em"}}),s("span",{class:"mord munder"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.75em"}},[s("span",{style:{top:"-1.4159em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"usually hard to compute")])])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord munder"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.75em"}},[s("span",{class:"svg-align",style:{top:"-2.102em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"stretchy",style:{height:"0.548em","min-width":"1.6em"}},[s("span",{class:"brace-left",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`})])]),s("span",{class:"brace-center",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMidYMin slice"},[s("path",{d:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`})])]),s("span",{class:"brace-right",style:{height:"0.548em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMaxYMin slice"},[s("path",{d:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`})])])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"Complexity")]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathcal",style:{"margin-right":"0.00965em"}},"H"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"number of available data")]),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.898em"}},[s("span")])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.7202em"}},[s("span")])])])])])])])],-1),B={style:{"font-size":"smaller"}},C=s("br",null,null,-1),G=s("p",null,[a("For complex "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"H")]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{H}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.00965em"}},"H")])])]),a(": "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mspace",{width:"1em"}),s("msub",null,[s("mtext",null,"Error"),s("mtext",null,"available data")]),s("mo",{stretchy:"false"},"("),s("mi",null,"h"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\quad\\text{Error}_{\\text{available data}}(h)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mspace",style:{"margin-right":"1em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"Error")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"available data")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mclose"},")")])])]),a(" is "),s("span",{style:{color:"green"}},"small"),a(" but "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"Complexity"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"script"},"H"),s("mo",{separator:"true"},","),s("mtext",null,"number of available data"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\text{Complexity}(\\mathcal{H}, \\text{number of available data})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"Complexity")]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathcal",style:{"margin-right":"0.00965em"}},"H"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"number of available data")]),s("span",{class:"mclose"},")")])])]),a(" is "),s("span",{style:{color:"red"}},"high"),s("br")],-1),E=s("p",null,[a("For simple "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"H")]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{H}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.00965em"}},"H")])])]),a(": "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"  "),s("mtext",null,"  "),s("mtext",null," "),s("mspace",{width:"1em"}),s("msub",null,[s("mtext",null,"Error"),s("mtext",null,"available data")]),s("mo",{stretchy:"false"},"("),s("mi",null,"h"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\;\\;\\,\\quad\\text{Error}_{\\text{available data}}(h)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mspace",style:{"margin-right":"1em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"Error")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"available data")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mclose"},")")])])]),a(" is "),s("span",{style:{color:"red"}},"high"),a(" but "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"Complexity"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"script"},"H"),s("mo",{separator:"true"},","),s("mtext",null,"number of available data"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\text{Complexity}(\\mathcal{H}, \\text{number of available data})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"Complexity")]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathcal",style:{"margin-right":"0.00965em"}},"H"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"number of available data")]),s("span",{class:"mclose"},")")])])]),a(" is "),s("span",{style:{color:"green"}},"small")],-1),S=[C,G,E],V={__name:"22",setup(A){return v(r),w(),(R,Y)=>{const c=p("center"),l=o("click");return t(),h(y,u(d(i(b)(i(r),21))),{default:e(()=>[_,k,n((t(),m("div",f,[M,z,H,g(c,null,{default:e(()=>[L]),_:1})])),[[l,1]]),n((t(),m("div",B,[...S])),[[l,2]])]),_:1},16)}}},I=x(V,[["__file","/@slidev/slides/22.md"]]);export{I as default};