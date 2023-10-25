import{d,i as _,a as u,u as p,b as h,c as m,e as f,o as n,f as r,g as t,t as s,h as a,F as g,r as v,n as x,j as b,k as y,l as N,m as k,p as P,q as j,_ as w}from"./index-eb2d954b.js";import{N as S}from"./NoteDisplay-35cc1897.js";const V={class:"m-4"},D={class:"mb-10"},H={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(u),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=f(()=>b.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),r("div",{id:"page-root",style:x(a(j))},[t("div",V,[t("div",D,[t("h1",H,s(a(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(n(!0),r(g,null,v(a(i),(e,c)=>(n(),r("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",C,s(e==null?void 0:e.no)+"/"+s(a(y)),1),N(" "+s(e==null?void 0:e.title)+" ",1),z])]),k(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(n(),r("hr",F)):P("v-if",!0)]))),128))])],4))}}),G=w(M,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{G as default};
