import{d as v,r as k,A as d,o,c as p,k as C,f as g,b as u,y as m,F as N,Z as q,i as S,l as y,g as b,h as L}from"../modules/vue-DnkrJioT.js";import{e as $,b as h,$ as T}from"../index-OhIvRzYI.js";import{T as A}from"./title-renderer-Pm-Ohx42.js";import{u as D}from"./context-GRvs4aS6.js";const P=["href","innerHTML"],H=["href"],I=v({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(c){const{isPrintMode:n}=$();return(t,i)=>{const l=k("RouterLink");return!d(n)&&t.title?(o(),p(l,{key:0,to:String(t.to),onClick:i[0]||(i[0]=a=>a.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!d(n)&&!t.title?(o(),p(l,{key:1,to:String(t.to),onClick:i[1]||(i[1]=a=>a.target.blur())},{default:C(()=>[g(t.$slots,"default")]),_:3},8,["to"])):d(n)&&t.title?(o(),u("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,P)):(o(),u("a",{key:3,href:`#${t.to}`},[g(t.$slots,"default")],8,H))}}}),M=h(I,[["__file","/home/fj103585/Documents/GitHub/course-data-analysis/node_modules/@slidev/client/builtin/Link.vue"]]),j=["start"],B=v({__name:"TocList",props:{level:{type:Number,required:!0,default:1},start:{type:Number,required:!1},listStyle:{type:[String,Array],required:!1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(c){const n=c,t=m(()=>[...T(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]),i=m(()=>[...T(n.listStyle||[])]);return(l,a)=>{const f=M,s=k("TocList",!0);return l.list&&l.list.length>0?(o(),u("ol",{key:0,class:S(t.value),start:l.level===1?l.start:void 0,style:L(i.value.length>=l.level?`list-style:${i.value[l.level-1]}`:void 0)},[(o(!0),u(N,null,q(l.list,e=>(o(),u("li",{key:e.path,class:S(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[y(f,{to:e.path},{default:C(()=>[y(d(A),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(o(),p(s,{key:0,level:l.level+1,"list-style":l.listStyle,list:e.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):b("v-if",!0)],2))),128))],14,j)):b("v-if",!0)}}}),F=h(B,[["__file","/home/fj103585/Documents/GitHub/course-data-analysis/node_modules/@slidev/client/builtin/TocList.vue"]]),G=v({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},start:{type:[String,Number],required:!1,default:1},listStyle:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:Number.POSITIVE_INFINITY},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(c){const n=c,{$slidev:t}=D();function i(s,e=1){if(e>Number(n.maxDepth))return[];if(e<Number(n.minDepth)){const r=s.find(_=>_.active||_.activeParent);return r?i(r.children,e+1):[]}return s.map(r=>({...r,children:i(r.children,e+1)}))}function l(s){return s.filter(e=>e.active||e.activeParent||e.hasActiveParent).map(e=>({...e,children:l(e.children)}))}function a(s){const e=s.some(r=>r.active||r.activeParent||r.hasActiveParent);return s.filter(()=>e).map(r=>({...r,children:a(r.children)}))}const f=m(()=>{const s=t==null?void 0:t.nav.tocTree;if(!s)return[];let e=i(s);return n.mode==="onlyCurrentTree"?e=l(e):n.mode==="onlySiblings"&&(e=a(e)),e});return(s,e)=>{const r=F;return o(),u("div",{class:"slidev-toc",style:L(`column-count:${s.columns}`)},[y(r,{level:1,start:s.start,"list-style":s.listStyle,list:f.value,"list-class":s.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),R=h(G,[["__file","/home/fj103585/Documents/GitHub/course-data-analysis/node_modules/@slidev/client/builtin/Toc.vue"]]);export{R as _};