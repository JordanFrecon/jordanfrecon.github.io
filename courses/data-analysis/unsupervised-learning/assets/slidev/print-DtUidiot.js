import{d as p,_ as u,y as h,b as a,e as t,x as s,A as r,F as f,Z as v,o as n,$ as g,l as x,g as b}from"../modules/vue-FSadVnGy.js";import{e as y,h as N,c as m,b as k}from"../index-DclaTtbZ.js";import{N as w}from"./NoteDisplay-JNBotTUX.js";import"../modules/shiki-MuFg0Zmw.js";const D={id:"page-root"},H={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},B={class:"text-lg"},S={class:"font-bold flex gap-2"},j={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},F=p({__name:"print",setup(M){const{slides:_,total:d}=y();u(`
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
`),N({title:`Notes - ${m.title}`});const i=h(()=>_.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),a("div",D,[t("div",H,[t("div",L,[t("h1",T,s(r(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,v(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",S,[t("div",j,s(e==null?void 0:e.no)+"/"+s(r(d)),1),g(" "+s(e==null?void 0:e.title)+" ",1),A])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",C)):b("v-if",!0)]))),128))])]))}}),W=k(F,[["__file","/home/fj103585/Documents/GitHub/course-data-analysis/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{W as default};
