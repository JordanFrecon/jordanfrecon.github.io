import{_ as l}from"./slidev/CodeBlockWrapper-CpikBxAS.js";import{o as e,c as n,k as a,e as i,l as r,m as p,q as d,s as g,A as t,$ as s}from"./modules/vue-B8uRXbDq.js";import{I as B}from"./slidev/default-BGtRafHG.js";import{b as o,a1 as h}from"./index-VcO50jvg.js";import{p as y,u as A,f as D}from"./slidev/context-D9eSa3oU.js";import"./modules/unplugin-icons-BftMORqB.js";import"./modules/shiki-D3W0EY2g.js";const c="/courses/data-analysis/introduction/chap0/matplotlib_example1.png",C=i("h1",null,"Matplotlib",-1),_=i("p",null,"Create a simple plot",-1),m={grid:"~ cols-2 gap-2",m:"-t-2"},F=i("pre",{class:"shiki shiki-themes Vitesse Dark Vitesse Light slidev-code",style:{"--shiki-dark":"#dbd7ca","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-py"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"t "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," np"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"arange"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"("),i("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}},"0.0"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},","),i("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 2.0"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},","),i("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 0.01"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"s "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"="),i("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}}," 1"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," np"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"sin"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"("),i("span",{style:{"--shiki-dark":"#6394BF","--shiki-light":"#296AA3"}},"2"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *"),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," np"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"pi "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"*"),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," t"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"fig"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},","),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," ax "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"="),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," plt"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"subplots"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"ax"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"plot"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"t"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},","),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," s"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"ax"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"set"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"("),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#8C862B"}},"xlabel"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'time (s)'"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},","),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#8C862B"}}," ylabel"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'voltage (mV)'"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#8C862B"}},"       title"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"'About as simple as it gets, folks'"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"ax"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"."),i("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}},"grid"),i("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"()")])])],-1),f=i("img",{src:c,border:"rounded"},null,-1),E={__name:"26",setup(u){return y(h),A(),(x,b)=>{const k=l;return e(),n(B,d(g(t(D)(t(h),25))),{default:a(()=>[C,_,i("div",m,[r(k,p({},{ranges:[]}),{default:a(()=>[F]),_:1},16),f])]),_:1},16)}}},j=o(E,[["__file","/@slidev/slides/26.md"]]);export{j as default};