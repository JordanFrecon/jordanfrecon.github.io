function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-CBO2DLNH.js","assets/modules/unplugin-icons-J--EtTlH.js","assets/modules/vue-FSadVnGy.js","assets/modules/shiki-MuFg0Zmw.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-DiV3ZdtH.js","assets/index-DclaTtbZ.js","assets/index-6Ljjn--K.css","assets/slidev/bottom-y2iWeYB-.js","assets/slidev/context-LPCYGaKJ.js","assets/bottom-DbIWt59F.css","assets/slidev/SlidesShow-C-ZoxhTo.js","assets/slidev/title-renderer-LaWvATUG.js","assets/SlidesShow-DZAAkYiM.css","assets/DrawingControls-C5T1oZL5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as h,c as g,e as j,_ as E}from"../index-DclaTtbZ.js";import{d as b,a7 as H,o as a,c as u,A as e,b as w,e as t,f as G,i as D,g as n,a8 as I,y as P,k as M,a6 as _,$ as z,M as y,l as d,F as $,t as B,h as O}from"../modules/vue-FSadVnGy.js";import{b as x,e as C,f as S,h as R,j as N,w as A,k as T,l as U}from"./bottom-y2iWeYB-.js";import{Q as L,G as F,r as Q,u as W,S as K,a as X,N as Y}from"./SlidesShow-C-ZoxhTo.js";import{P as q}from"./PrintStyle-B_lP8e2a.js";import{u as J}from"./DrawingPreview-DiV3ZdtH.js";import"../modules/shiki-MuFg0Zmw.js";import"./context-LPCYGaKJ.js";import"../modules/unplugin-icons-J--EtTlH.js";import"./title-renderer-LaWvATUG.js";const Z="/courses/data-analysis/unsupervised-learning/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=b({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:l}){const i=c,o=H(i,"modelValue",l);function s(){o.value=!1}return(m,r)=>(a(),u(I,null,[e(o)?(a(),w("div",ee,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=f=>s())}),t("div",{class:D(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[G(m.$slots,"default")],2)])):n("v-if",!0)],1024))}}),se=h(oe,[["__file","/home/fj103585/Documents/GitHub/course-data-analysis/node_modules/@slidev/client/internals/Modal.vue"]]),te={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ae=["innerHTML"],le=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),z("dev ")])])],-1),ie=b({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:l}){const o=H(c,"modelValue",l),s=P(()=>typeof g.info=="string");return(m,r)=>(a(),u(se,{modelValue:e(o),"onUpdate:modelValue":r[0]||(r[0]=f=>_(o)?o.value=f:null),class:"px-6 py-4"},{default:M(()=>[t("div",te,[s.value?(a(),w("div",{key:0,class:"mb-4",innerHTML:e(g).info},null,8,ae)):n("v-if",!0),le])]),_:1},8,["modelValue"]))}}),ne=h(ie,[["__file","/home/fj103585/Documents/GitHub/course-data-analysis/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=b({__name:"Controls",setup(c){const l=y(),i=y();return(v,o)=>(a(),w($,null,[d(L,{modelValue:e(x),"onUpdate:modelValue":o[0]||(o[0]=s=>_(x)?x.value=s:null)},null,8,["modelValue"]),d(F),l.value?(a(),u(e(l),{key:0})):n("v-if",!0),i.value?(a(),u(e(i),{key:1,modelValue:e(C),"onUpdate:modelValue":o[1]||(o[1]=s=>_(C)?C.value=s:null)},null,8,["modelValue"])):n("v-if",!0),e(g).info?(a(),u(ne,{key:2,modelValue:e(S),"onUpdate:modelValue":o[2]||(o[2]=s=>_(S)?S.value=s:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),ue=h(re,[["__file","/home/fj103585/Documents/GitHub/course-data-analysis/node_modules/@slidev/client/internals/Controls.vue"]]),de=b({__name:"play",setup(c){Q();const{next:l,prev:i,isEmbedded:v,isPrintMode:o}=j(),{isDrawing:s}=J(),m=B();function r(p){var k;N.value||((k=p.target)==null?void 0:k.id)==="slide-container"&&(p.screenX/window.innerWidth>.6?l():i())}W(m);const f=P(()=>R.value||N.value);y();const V=y();return E(()=>import("./DrawingControls-CBO2DLNH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(p=>V.value=p.default),(p,k)=>(a(),w($,null,[e(o)?(a(),u(q,{key:0})):n("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:m,class:D(["grid",e(U)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[d(K,{class:"w-full h-full",style:O({background:"var(--slidev-slide-container-background, black)"}),width:e(o)?e(A).width.value:void 0,scale:e(T),"is-main":!0,onPointerdown:r},{default:M(()=>[d(X,{"render-context":"slide"})]),controls:M(()=>[t("div",{class:D(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[f.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[d(Y,{class:"m-auto",persist:f.value},null,8,["persist"])],2),!e(g).drawings.presenterOnly&&!e(v)&&V.value?(a(),u(e(V),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],2),d(ue)],64))}}),we=h(de,[["__file","/home/fj103585/Documents/GitHub/course-data-analysis/node_modules/@slidev/client/pages/play.vue"]]);export{we as default};