import{o as d,f as k,g as e,B as y,C as z,v as h,d as H,i as M,a as B,D as S,x as p,E as D,_ as P,G as I,H as R,c as b,b as j,I as $,J as A,K as E,L as G,M as L,N as q,O as F,P as O,Q as U,h as r,m as u,t as W,n as x,R as N,S as V,p as Z,T as J,U as w,V as K,F as Q,W as X,X as Y,w as ee,Y as te,Z as se,q as T,$ as oe,a0 as ae,a1 as le,a2 as ne,a3 as re,k as ie,a4 as ce}from"./index-3ef41b54.js";import{N as ue}from"./NoteDisplay-edea1ef9.js";import de from"./DrawingControls-d726fa5b.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),ve=[me];function pe(o,l){return d(),k("svg",_e,ve)}const he={name:"carbon-renew",render:pe},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(o,l){return d(),k("svg",fe,we)}const Se={name:"carbon-time",render:ye},ke="/courses/data-structure/characters-arrays/assets/logo-title-horizontal-96c3c915.png";function Ce(){const o=y(Date.now()),l=z({interval:1e3}),_=h(()=>{const t=(l.value-o.value)/1e3,a=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${a}`});function m(){o.value=l.value}return{timer:_,resetTimer:m}}const be=H({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const l=o;M(B);const _=h(()=>{var t,a,s;return(s=(a=(t=S.value)==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:s.note}),m=h(()=>{var t,a,s;return(s=(a=(t=S.value)==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:s.noteHTML});return(t,a)=>(d(),p(ue,{class:D(l.class),note:_.value,"note-html":m.value},null,8,["class","note","note-html"]))}}),$e=P(be,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(X("data-v-574fd206"),o=o(),Y(),o),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},He=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Me=f(()=>e("div",{class:"flex-auto"},null,-1)),Be={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},De=f(()=>e("div",{class:"context"}," current ",-1)),Pe=f(()=>e("div",{class:"context"}," next ",-1)),ze={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Re={class:"progress-bar"},je=H({__name:"Presenter",setup(o){M(B);const l=y();I(),R(l);const _=b.titleTemplate.replace("%s",b.title||"Slidev");j({title:`Presenter - ${_}`});const{timer:m,resetTimer:t}=Ce(),a=y([]),s=h(()=>$.value<A.value?{route:S.value,clicks:$.value+1}:E.value?{route:G.value,clicks:0}:null);return L(()=>{const C=l.value.querySelector("#slide-content"),i=q(F()),g=O();U(()=>{if(!g.value||te.value||!se.value)return;const c=C.getBoundingClientRect(),n=(i.x-c.left)/c.width*100,v=(i.y-c.top)/c.height*100;if(!(n<0||n>100||v<0||v>100))return{x:n,y:v}},c=>{ee.cursor=c})}),(C,i)=>{const g=Se,c=he;return d(),k(Q,null,[e("div",Ne,[e("div",Ve,[e("div",Te,[He,Me,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...n)=>r(t)&&r(t)(...n))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Be,W(r(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(r(T))},[u(V,{key:"main",class:"h-full w-full"},{default:N(()=>[u(oe,{context:"presenter"})]),_:1}),De],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(r(T))},[s.value?(d(),p(V,{key:"next",class:"h-full w-full"},{default:N(()=>{var n;return[u(r(le),{is:(n=s.value.route)==null?void 0:n.component,"clicks-elements":a.value,"onUpdate:clicksElements":i[1]||(i[1]=v=>a.value=v),clicks:s.value.clicks,"clicks-disabled":!1,class:D(r(ae)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):Z("v-if",!0),Pe],4),e("div",ze,[(d(),p($e,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(ne,{persist:!0})]),(d(),p(de,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(r(re)-1)/(r(ie)-1)*100}%`})},null,4)])]),u(ce),u(K,{modelValue:r(w),"onUpdate:modelValue":i[2]||(i[2]=n=>J(w)?w.value=n:null)},null,8,["modelValue"])],64)}}});const Le=P(je,[["__scopeId","data-v-574fd206"],["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};