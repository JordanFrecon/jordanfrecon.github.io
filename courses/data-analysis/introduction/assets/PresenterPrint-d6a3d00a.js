import{a5 as x,a6 as b,a7 as R,a8 as w,d as N,i as D,a as V,a9 as E,aa as P,ab as v,o as u,f as d,g as n,t as l,h as f,F as j,r as B,n as M,ac as C,ad as H,l as L,m as z,p as F,ae as A,_ as G}from"./index-0bc928c2.js";import{N as W}from"./NoteDisplay-dbbff89d.js";let $;function q(t,e=$){e&&e.active&&e.effects.push(t)}const I=t=>{const e=new Set(t);return e.w=0,e.n=0,e},T=t=>(t.w&r)>0,S=t=>(t.n&r)>0,J=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=r},K=t=>{const{deps:e}=t;if(e.length){let s=0;for(let a=0;a<e.length;a++){const i=e[a];T(i)&&!S(i)?i.delete(t):e[s++]=i,i.w&=~r,i.n&=~r}e.length=s}};let h=0,r=1;const g=30;let o;class Q{constructor(e,s=null,a){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,q(this,a)}run(){if(!this.active)return this.fn();let e=o,s=p;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=o,o=this,p=!0,r=1<<++h,h<=g?J(this):y(this),this.fn()}finally{h<=g&&K(this),r=1<<--h,o=this.parent,p=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){o===this?this.deferStop=!0:this.active&&(y(this),this.onStop&&this.onStop(),this.active=!1)}}function y(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}let p=!0;function U(t,e){let s=!1;h<=g?S(t)||(t.n|=r,s=!T(t)):s=!t.has(o),s&&(t.add(o),o.deps.push(t),o.onTrack&&o.onTrack(w({effect:o},e)))}function X(t,e){const s=R(t)?t:[...t];for(const a of s)a.computed&&k(a,e);for(const a of s)a.computed||k(a,e)}function k(t,e){(t!==o||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(w({effect:t},e)),t.scheduler?t.scheduler():t.run())}new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(x));function _(t){const e=t&&t.__v_raw;return e?_(e):t}function Y(t){p&&o&&(t=_(t),U(t.dep||(t.dep=I()),{target:t,type:"get",key:"value"}))}function Z(t,e){t=_(t);const s=t.dep;s&&X(s,{target:t,type:"set",key:"value",newValue:e})}class O{constructor(e,s,a,i){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Q(e,()=>{this._dirty||(this._dirty=!0,Z(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=a}get value(){const e=_(this);return Y(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tt(t,e,s=!1){let a,i;const c=b(t);c?(a=t,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(a=t.get,i=t.set);const m=new O(a,i,c||!i,s);return e&&!s&&(m.effect.onTrack=e.onTrack,m.effect.onTrigger=e.onTrigger),m}const et={class:"m-4"},st={class:"mb-10"},at={class:"text-4xl font-bold mt-2"},it={class:"opacity-50"},ot={class:"text-lg"},nt={class:"font-bold flex gap-2"},rt={class:"opacity-50"},ct=n("div",{class:"flex-auto"},null,-1),lt={key:0,class:"border-gray-400/50 mb-8"},ft=N({__name:"PresenterPrint",setup(t){D(V),E(`
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
`),P({title:`Notes - ${v.title}`});const e=tt(()=>C.map(s=>{var a;return(a=s.meta)==null?void 0:a.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,a)=>(u(),d("div",{id:"page-root",style:M(f(A))},[n("div",et,[n("div",st,[n("h1",at,l(f(v).title),1),n("div",it,l(new Date().toLocaleString()),1)]),(u(!0),d(j,null,B(f(e),(i,c)=>(u(),d("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[n("div",null,[n("h2",ot,[n("div",nt,[n("div",rt,l(i==null?void 0:i.no)+"/"+l(f(H)),1),L(" "+l(i==null?void 0:i.title)+" ",1),ct])]),z(W,{"note-html":i.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<f(e).length-1?(u(),d("hr",lt)):F("v-if",!0)]))),128))])],4))}}),dt=G(ft,[["__file","/home/fj103585/Documents/GitHub/course-advanced-stats/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{dt as default};