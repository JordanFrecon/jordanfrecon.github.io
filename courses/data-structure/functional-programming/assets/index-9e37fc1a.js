(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Un(t,n){const s=Object.create(null),o=t.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return n?l=>!!s[l.toLowerCase()]:l=>!!s[l]}const He=Object.freeze({}),Ms=Object.freeze([]),Dt=()=>{},bp=()=>!1,Qh=/^on[^a-z]/,Vo=t=>Qh.test(t),$l=t=>t.startsWith("onUpdate:"),Ve=Object.assign,ta=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},Jh=Object.prototype.hasOwnProperty,ke=(t,n)=>Jh.call(t,n),le=Array.isArray,fs=t=>zo(t)==="[object Map]",Ap=t=>zo(t)==="[object Set]",Xh=t=>zo(t)==="[object RegExp]",de=t=>typeof t=="function",ze=t=>typeof t=="string",na=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",sa=t=>Oe(t)&&de(t.then)&&de(t.catch),Bp=Object.prototype.toString,zo=t=>Bp.call(t),oa=t=>zo(t).slice(8,-1),Cp=t=>zo(t)==="[object Object]",la=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_l=Un(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ey=Un("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),er=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},ty=/-(\w)/g,rn=er(t=>t.replace(ty,(n,s)=>s?s.toUpperCase():"")),ny=/\B([A-Z])/g,An=er(t=>t.replace(ny,"-$1").toLowerCase()),As=er(t=>t.charAt(0).toUpperCase()+t.slice(1)),ts=er(t=>t?`on${As(t)}`:""),xo=(t,n)=>!Object.is(t,n),ss=(t,n)=>{for(let s=0;s<t.length;s++)t[s](n)},Fl=(t,n,s)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:s})},sy=t=>{const n=parseFloat(t);return isNaN(n)?t:n},oy=t=>{const n=ze(t)?Number(t):NaN;return isNaN(n)?t:n};let nc;const Tl=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nt(t){if(le(t)){const n={};for(let s=0;s<t.length;s++){const o=t[s],l=ze(o)?ay(o):nt(o);if(l)for(const r in l)n[r]=l[r]}return n}else{if(ze(t))return t;if(Oe(t))return t}}const ly=/;(?![^(]*\))/g,ry=/:([^]+)/,iy=/\/\*[^]*?\*\//g;function ay(t){const n={};return t.replace(iy,"").split(ly).forEach(s=>{if(s){const o=s.split(ry);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Le(t){let n="";if(ze(t))n=t;else if(le(t))for(let s=0;s<t.length;s++){const o=Le(t[s]);o&&(n+=o+" ")}else if(Oe(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}function we(t){if(!t)return null;let{class:n,style:s}=t;return n&&!ze(n)&&(t.class=Le(n)),s&&(t.style=nt(s)),t}const cy="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",uy="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Dp=Un(cy),py=Un(uy),dy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fy=Un(dy);function wp(t){return!!t||t===""}const lt=t=>ze(t)?t:t==null?"":le(t)||Oe(t)&&(t.toString===Bp||!de(t.toString))?JSON.stringify(t,xp,2):String(t),xp=(t,n)=>n&&n.__v_isRef?xp(t,n.value):fs(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:Ap(n)?{[`Set(${n.size})`]:[...n.values()]}:Oe(n)&&!le(n)&&!Cp(n)?String(n):n;function Sl(t,...n){console.warn(`[Vue warn] ${t}`,...n)}let Et;class kp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!n&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=Et;try{return Et=this,n()}finally{Et=s}}else Sl("cannot run an inactive effect scope.")}on(){Et=this}off(){Et=this.parent}stop(n){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function hy(t){return new kp(t)}function yy(t,n=Et){n&&n.active&&n.effects.push(t)}function ra(){return Et}function Ep(t){Et?Et.cleanups.push(t):Sl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ia=t=>{const n=new Set(t);return n.w=0,n.n=0,n},$p=t=>(t.w&qn)>0,Fp=t=>(t.n&qn)>0,my=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=qn},gy=t=>{const{deps:n}=t;if(n.length){let s=0;for(let o=0;o<n.length;o++){const l=n[o];$p(l)&&!Fp(l)?l.delete(t):n[s++]=l,l.w&=~qn,l.n&=~qn}n.length=s}},Ol=new WeakMap;let ro=0,qn=1;const Xr=30;let gt;const hs=Symbol("iterate"),ei=Symbol("Map key iterate");class aa{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,yy(this,o)}run(){if(!this.active)return this.fn();let n=gt,s=Pn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=gt,gt=this,Pn=!0,qn=1<<++ro,ro<=Xr?my(this):sc(this),this.fn()}finally{ro<=Xr&&gy(this),qn=1<<--ro,gt=this.parent,Pn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(sc(this),this.onStop&&this.onStop(),this.active=!1)}}function sc(t){const{deps:n}=t;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(t);n.length=0}}let Pn=!0;const Tp=[];function Cs(){Tp.push(Pn),Pn=!1}function Ds(){const t=Tp.pop();Pn=t===void 0?!0:t}function pt(t,n,s){if(Pn&&gt){let o=Ol.get(t);o||Ol.set(t,o=new Map);let l=o.get(s);l||o.set(s,l=ia()),Sp(l,{effect:gt,target:t,type:n,key:s})}}function Sp(t,n){let s=!1;ro<=Xr?Fp(t)||(t.n|=qn,s=!$p(t)):s=!t.has(gt),s&&(t.add(gt),gt.deps.push(t),gt.onTrack&&gt.onTrack(Ve({effect:gt},n)))}function an(t,n,s,o,l,r){const i=Ol.get(t);if(!i)return;let a=[];if(n==="clear")a=[...i.values()];else if(s==="length"&&le(t)){const p=Number(o);i.forEach((d,f)=>{(f==="length"||f>=p)&&a.push(d)})}else switch(s!==void 0&&a.push(i.get(s)),n){case"add":le(t)?la(s)&&a.push(i.get("length")):(a.push(i.get(hs)),fs(t)&&a.push(i.get(ei)));break;case"delete":le(t)||(a.push(i.get(hs)),fs(t)&&a.push(i.get(ei)));break;case"set":fs(t)&&a.push(i.get(hs));break}const c={target:t,type:n,key:s,newValue:o,oldValue:l,oldTarget:r};if(a.length===1)a[0]&&ti(a[0],c);else{const p=[];for(const d of a)d&&p.push(...d);ti(ia(p),c)}}function ti(t,n){const s=le(t)?t:[...t];for(const o of s)o.computed&&oc(o,n);for(const o of s)o.computed||oc(o,n)}function oc(t,n){(t!==gt||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Ve({effect:t},n)),t.scheduler?t.scheduler():t.run())}function vy(t,n){var s;return(s=Ol.get(t))==null?void 0:s.get(n)}const _y=Un("__proto__,__v_isRef,__isVue"),Op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(na)),by=tr(),Ay=tr(!1,!0),By=tr(!0),Cy=tr(!0,!0),lc=Dy();function Dy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...s){const o=ye(this);for(let r=0,i=this.length;r<i;r++)pt(o,"get",r+"");const l=o[n](...s);return l===-1||l===!1?o[n](...s.map(ye)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...s){Cs();const o=ye(this)[n].apply(this,s);return Ds(),o}}),t}function wy(t){const n=ye(this);return pt(n,"has",t),n.hasOwnProperty(t)}function tr(t=!1,n=!1){return function(o,l,r){if(l==="__v_isReactive")return!t;if(l==="__v_isReadonly")return t;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&r===(t?n?Hp:Rp:n?Np:jp).get(o))return o;const i=le(o);if(!t){if(i&&ke(lc,l))return Reflect.get(lc,l,r);if(l==="hasOwnProperty")return wy}const a=Reflect.get(o,l,r);return(na(l)?Op.has(l):_y(l))||(t||pt(o,"get",l),n)?a:Se(a)?i&&la(l)?a:a.value:Oe(a)?t?Wt(a):Ue(a):a}}const xy=Pp(),ky=Pp(!0);function Pp(t=!1){return function(s,o,l,r){let i=s[o];if(Vn(i)&&Se(i)&&!Se(l))return!1;if(!t&&(!Pl(l)&&!Vn(l)&&(i=ye(i),l=ye(l)),!le(s)&&Se(i)&&!Se(l)))return i.value=l,!0;const a=le(s)&&la(o)?Number(o)<s.length:ke(s,o),c=Reflect.set(s,o,l,r);return s===ye(r)&&(a?xo(l,i)&&an(s,"set",o,l,i):an(s,"add",o,l)),c}}function Ey(t,n){const s=ke(t,n),o=t[n],l=Reflect.deleteProperty(t,n);return l&&s&&an(t,"delete",n,void 0,o),l}function $y(t,n){const s=Reflect.has(t,n);return(!na(n)||!Op.has(n))&&pt(t,"has",n),s}function Fy(t){return pt(t,"iterate",le(t)?"length":hs),Reflect.ownKeys(t)}const Ip={get:by,set:xy,deleteProperty:Ey,has:$y,ownKeys:Fy},Mp={get:By,set(t,n){return Sl(`Set operation on key "${String(n)}" failed: target is readonly.`,t),!0},deleteProperty(t,n){return Sl(`Delete operation on key "${String(n)}" failed: target is readonly.`,t),!0}},Ty=Ve({},Ip,{get:Ay,set:ky}),Sy=Ve({},Mp,{get:Cy}),ca=t=>t,nr=t=>Reflect.getPrototypeOf(t);function tl(t,n,s=!1,o=!1){t=t.__v_raw;const l=ye(t),r=ye(n);s||(n!==r&&pt(l,"get",n),pt(l,"get",r));const{has:i}=nr(l),a=o?ca:s?ua:ko;if(i.call(l,n))return a(t.get(n));if(i.call(l,r))return a(t.get(r));t!==l&&t.get(n)}function nl(t,n=!1){const s=this.__v_raw,o=ye(s),l=ye(t);return n||(t!==l&&pt(o,"has",t),pt(o,"has",l)),t===l?s.has(t):s.has(t)||s.has(l)}function sl(t,n=!1){return t=t.__v_raw,!n&&pt(ye(t),"iterate",hs),Reflect.get(t,"size",t)}function rc(t){t=ye(t);const n=ye(this);return nr(n).has.call(n,t)||(n.add(t),an(n,"add",t,t)),this}function ic(t,n){n=ye(n);const s=ye(this),{has:o,get:l}=nr(s);let r=o.call(s,t);r?Lp(s,o,t):(t=ye(t),r=o.call(s,t));const i=l.call(s,t);return s.set(t,n),r?xo(n,i)&&an(s,"set",t,n,i):an(s,"add",t,n),this}function ac(t){const n=ye(this),{has:s,get:o}=nr(n);let l=s.call(n,t);l?Lp(n,s,t):(t=ye(t),l=s.call(n,t));const r=o?o.call(n,t):void 0,i=n.delete(t);return l&&an(n,"delete",t,void 0,r),i}function cc(){const t=ye(this),n=t.size!==0,s=fs(t)?new Map(t):new Set(t),o=t.clear();return n&&an(t,"clear",void 0,void 0,s),o}function ol(t,n){return function(o,l){const r=this,i=r.__v_raw,a=ye(i),c=n?ca:t?ua:ko;return!t&&pt(a,"iterate",hs),i.forEach((p,d)=>o.call(l,c(p),c(d),r))}}function ll(t,n,s){return function(...o){const l=this.__v_raw,r=ye(l),i=fs(r),a=t==="entries"||t===Symbol.iterator&&i,c=t==="keys"&&i,p=l[t](...o),d=s?ca:n?ua:ko;return!n&&pt(r,"iterate",c?ei:hs),{next(){const{value:f,done:h}=p.next();return h?{value:f,done:h}:{value:a?[d(f[0]),d(f[1])]:d(f),done:h}},[Symbol.iterator](){return this}}}}function wn(t){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${As(t)} operation ${s}failed: target is readonly.`,ye(this))}return t==="delete"?!1:this}}function Oy(){const t={get(r){return tl(this,r)},get size(){return sl(this)},has:nl,add:rc,set:ic,delete:ac,clear:cc,forEach:ol(!1,!1)},n={get(r){return tl(this,r,!1,!0)},get size(){return sl(this)},has:nl,add:rc,set:ic,delete:ac,clear:cc,forEach:ol(!1,!0)},s={get(r){return tl(this,r,!0)},get size(){return sl(this,!0)},has(r){return nl.call(this,r,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:ol(!0,!1)},o={get(r){return tl(this,r,!0,!0)},get size(){return sl(this,!0)},has(r){return nl.call(this,r,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:ol(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ll(r,!1,!1),s[r]=ll(r,!0,!1),n[r]=ll(r,!1,!0),o[r]=ll(r,!0,!0)}),[t,s,n,o]}const[Py,Iy,My,Ly]=Oy();function sr(t,n){const s=n?t?Ly:My:t?Iy:Py;return(o,l,r)=>l==="__v_isReactive"?!t:l==="__v_isReadonly"?t:l==="__v_raw"?o:Reflect.get(ke(s,l)&&l in o?s:o,l,r)}const jy={get:sr(!1,!1)},Ny={get:sr(!1,!0)},Ry={get:sr(!0,!1)},Hy={get:sr(!0,!0)};function Lp(t,n,s){const o=ye(s);if(o!==s&&n.call(t,o)){const l=oa(t);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const jp=new WeakMap,Np=new WeakMap,Rp=new WeakMap,Hp=new WeakMap;function qy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vy(t){return t.__v_skip||!Object.isExtensible(t)?0:qy(oa(t))}function Ue(t){return Vn(t)?t:or(t,!1,Ip,jy,jp)}function zy(t){return or(t,!1,Ty,Ny,Np)}function Wt(t){return or(t,!0,Mp,Ry,Rp)}function io(t){return or(t,!0,Sy,Hy,Hp)}function or(t,n,s,o,l){if(!Oe(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(n&&t.__v_isReactive))return t;const r=l.get(t);if(r)return r;const i=Vy(t);if(i===0)return t;const a=new Proxy(t,i===2?o:s);return l.set(t,a),a}function ys(t){return Vn(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function Pl(t){return!!(t&&t.__v_isShallow)}function Il(t){return ys(t)||Vn(t)}function ye(t){const n=t&&t.__v_raw;return n?ye(n):t}function lr(t){return Fl(t,"__v_skip",!0),t}const ko=t=>Oe(t)?Ue(t):t,ua=t=>Oe(t)?Wt(t):t;function pa(t){Pn&&gt&&(t=ye(t),Sp(t.dep||(t.dep=ia()),{target:t,type:"get",key:"value"}))}function da(t,n){t=ye(t);const s=t.dep;s&&ti(s,{target:t,type:"set",key:"value",newValue:n})}function Se(t){return!!(t&&t.__v_isRef===!0)}function U(t){return qp(t,!1)}function cn(t){return qp(t,!0)}function qp(t,n){return Se(t)?t:new Gy(t,n)}class Gy{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:ye(n),this._value=s?n:ko(n)}get value(){return pa(this),this._value}set value(n){const s=this.__v_isShallow||Pl(n)||Vn(n);n=s?n:ye(n),xo(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:ko(n),da(this,n))}}function $(t){return Se(t)?t.value:t}const Uy={get:(t,n,s)=>$(Reflect.get(t,n,s)),set:(t,n,s,o)=>{const l=t[n];return Se(l)&&!Se(s)?(l.value=s,!0):Reflect.set(t,n,s,o)}};function Vp(t){return ys(t)?t:new Proxy(t,Uy)}class Wy{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>pa(this),()=>da(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function fa(t){return new Wy(t)}function Ky(t){Il(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=le(t)?new Array(t.length):{};for(const s in t)n[s]=zp(t,s);return n}class Yy{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return vy(ye(this._object),this._key)}}class Zy{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Qy(t,n,s){return Se(t)?t:de(t)?new Zy(t):Oe(t)&&arguments.length>1?zp(t,n,s):U(t)}function zp(t,n,s){const o=t[n];return Se(o)?o:new Yy(t,n,s)}class Jy{constructor(n,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new aa(n,()=>{this._dirty||(this._dirty=!0,da(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=ye(this);return pa(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Xy(t,n,s=!1){let o,l;const r=de(t);r?(o=t,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=t.get,l=t.set);const i=new Jy(o,l,r||!l,s);return n&&!s&&(i.effect.onTrack=n.onTrack,i.effect.onTrigger=n.onTrigger),i}const ms=[];function bl(t){ms.push(t)}function Al(){ms.pop()}function N(t,...n){Cs();const s=ms.length?ms[ms.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=em();if(o)_n(o,s,11,[t+n.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${yr(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${t}`,...n];l.length&&r.push(`
`,...tm(l)),console.warn(...r)}Ds()}function em(){let t=ms[ms.length-1];if(!t)return[];const n=[];for(;t;){const s=n[0];s&&s.vnode===t?s.recurseCount++:n.push({vnode:t,recurseCount:0});const o=t.component&&t.component.parent;t=o&&o.vnode}return n}function tm(t){const n=[];return t.forEach((s,o)=>{n.push(...o===0?[]:[`
`],...nm(s))}),n}function nm({vnode:t,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",o=t.component?t.component.parent==null:!1,l=` at <${yr(t.component,t.type,o)}`,r=">"+s;return t.props?[l,...sm(t.props),r]:[l+r]}function sm(t){const n=[],s=Object.keys(t);return s.slice(0,3).forEach(o=>{n.push(...Gp(o,t[o]))}),s.length>3&&n.push(" ..."),n}function Gp(t,n,s){return ze(n)?(n=JSON.stringify(n),s?n:[`${t}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${t}=${n}`]:Se(n)?(n=Gp(t,ye(n.value),!0),s?n:[`${t}=Ref<`,n,">"]):de(n)?[`${t}=fn${n.name?`<${n.name}>`:""}`]:(n=ye(n),s?n:[`${t}=`,n])}function om(t,n){t!==void 0&&(typeof t!="number"?N(`${n} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&N(`${n} is NaN - the duration expression might be incorrect.`))}const ha={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function _n(t,n,s,o){let l;try{l=o?t(...o):t()}catch(r){rr(r,n,s)}return l}function Rt(t,n,s,o){if(de(t)){const r=_n(t,n,s,o);return r&&sa(r)&&r.catch(i=>{rr(i,n,s)}),r}const l=[];for(let r=0;r<t.length;r++)l.push(Rt(t[r],n,s,o));return l}function rr(t,n,s,o=!0){const l=n?n.vnode:null;if(n){let r=n.parent;const i=n.proxy,a=ha[s];for(;r;){const p=r.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](t,i,a)===!1)return}r=r.parent}const c=n.appContext.config.errorHandler;if(c){_n(c,null,10,[t,i,a]);return}}lm(t,s,l,o)}function lm(t,n,s,o=!0){{const l=ha[n];if(s&&bl(s),N(`Unhandled error${l?` during execution of ${l}`:""}`),s&&Al(),o)throw t;console.error(t)}}let Eo=!1,ni=!1;const it=[];let tn=0;const Ls=[];let en=null,$n=0;const Up=Promise.resolve();let ya=null;const rm=100;function at(t){const n=ya||Up;return t?n.then(this?t.bind(this):t):n}function im(t){let n=tn+1,s=it.length;for(;n<s;){const o=n+s>>>1;$o(it[o])<t?n=o+1:s=o}return n}function ir(t){(!it.length||!it.includes(t,Eo&&t.allowRecurse?tn+1:tn))&&(t.id==null?it.push(t):it.splice(im(t.id),0,t),Wp())}function Wp(){!Eo&&!ni&&(ni=!0,ya=Up.then(Zp))}function am(t){const n=it.indexOf(t);n>tn&&it.splice(n,1)}function Kp(t){le(t)?Ls.push(...t):(!en||!en.includes(t,t.allowRecurse?$n+1:$n))&&Ls.push(t),Wp()}function uc(t,n=Eo?tn+1:0){for(t=t||new Map;n<it.length;n++){const s=it[n];if(s&&s.pre){if(ma(t,s))continue;it.splice(n,1),n--,s()}}}function Yp(t){if(Ls.length){const n=[...new Set(Ls)];if(Ls.length=0,en){en.push(...n);return}for(en=n,t=t||new Map,en.sort((s,o)=>$o(s)-$o(o)),$n=0;$n<en.length;$n++)ma(t,en[$n])||en[$n]();en=null,$n=0}}const $o=t=>t.id==null?1/0:t.id,cm=(t,n)=>{const s=$o(t)-$o(n);if(s===0){if(t.pre&&!n.pre)return-1;if(n.pre&&!t.pre)return 1}return s};function Zp(t){ni=!1,Eo=!0,t=t||new Map,it.sort(cm);const n=s=>ma(t,s);try{for(tn=0;tn<it.length;tn++){const s=it[tn];if(s&&s.active!==!1){if(n(s))continue;_n(s,null,14)}}}finally{tn=0,it.length=0,Yp(t),Eo=!1,ya=null,(it.length||Ls.length)&&Zp(t)}}function ma(t,n){if(!t.has(n))t.set(n,1);else{const s=t.get(n);if(s>rm){const o=n.ownerInstance,l=o&&So(o.type);return N(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(n,s+1)}}let In=!1;const Ps=new Set;Tl().__VUE_HMR_RUNTIME__={createRecord:Ar(Qp),rerender:Ar(dm),reload:Ar(fm)};const Bs=new Map;function um(t){const n=t.type.__hmrId;let s=Bs.get(n);s||(Qp(n,t.type),s=Bs.get(n)),s.instances.add(t)}function pm(t){Bs.get(t.type.__hmrId).instances.delete(t)}function Qp(t,n){return Bs.has(t)?!1:(Bs.set(t,{initialDef:ho(n),instances:new Set}),!0)}function ho(t){return $d(t)?t.__vccOpts:t}function dm(t,n){const s=Bs.get(t);s&&(s.initialDef.render=n,[...s.instances].forEach(o=>{n&&(o.render=n,ho(o.type).render=n),o.renderCache=[],In=!0,o.update(),In=!1}))}function fm(t,n){const s=Bs.get(t);if(!s)return;n=ho(n),pc(s.initialDef,n);const o=[...s.instances];for(const l of o){const r=ho(l.type);Ps.has(r)||(r!==s.initialDef&&pc(r,n),Ps.add(r)),l.appContext.propsCache.delete(l.type),l.appContext.emitsCache.delete(l.type),l.appContext.optionsCache.delete(l.type),l.ceReload?(Ps.add(r),l.ceReload(n.styles),Ps.delete(r)):l.parent?ir(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Kp(()=>{for(const l of o)Ps.delete(ho(l.type))})}function pc(t,n){Ve(t,n);for(const s in t)s!=="__file"&&!(s in n)&&delete t[s]}function Ar(t){return(n,s)=>{try{return t(n,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let nn,ao=[],si=!1;function Go(t,...n){nn?nn.emit(t,...n):si||ao.push({event:t,args:n})}function Jp(t,n){var s,o;nn=t,nn?(nn.enabled=!0,ao.forEach(({event:l,args:r})=>nn.emit(l,...r)),ao=[]):typeof window<"u"&&window.HTMLElement&&!((o=(s=window.navigator)==null?void 0:s.userAgent)!=null&&o.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Jp(r,n)}),setTimeout(()=>{nn||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,si=!0,ao=[])},3e3)):(si=!0,ao=[])}function hm(t,n){Go("app:init",t,n,{Fragment:Fe,Text:Wo,Comment:vt,Static:Bl})}function ym(t){Go("app:unmount",t)}const oi=ga("component:added"),Xp=ga("component:updated"),mm=ga("component:removed"),gm=t=>{nn&&typeof nn.cleanupBuffer=="function"&&!nn.cleanupBuffer(t)&&mm(t)};function ga(t){return n=>{Go(t,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const vm=ed("perf:start"),_m=ed("perf:end");function ed(t){return(n,s,o)=>{Go(t,n.appContext.app,n.uid,n,s,o)}}function bm(t,n,s){Go("component:emit",t.appContext.app,t,n,s)}function Am(t,n,...s){if(t.isUnmounted)return;const o=t.vnode.props||He;{const{emitsOptions:d,propsOptions:[f]}=t;if(d)if(!(n in d))(!f||!(ts(n)in f))&&N(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${ts(n)}" prop.`);else{const h=d[n];de(h)&&(h(...s)||N(`Invalid event arguments: event validation failed for event "${n}".`))}}let l=s;const r=n.startsWith("update:"),i=r&&n.slice(7);if(i&&i in o){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:h}=o[d]||He;h&&(l=s.map(y=>ze(y)?y.trim():y)),f&&(l=s.map(sy))}bm(t,n,l);{const d=n.toLowerCase();d!==n&&o[ts(d)]&&N(`Event "${d}" is emitted in component ${yr(t,t.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${An(n)}" instead of "${n}".`)}let a,c=o[a=ts(n)]||o[a=ts(rn(n))];!c&&r&&(c=o[a=ts(An(n))]),c&&Rt(c,t,6,l);const p=o[a+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rt(p,t,6,l)}}function td(t,n,s=!1){const o=n.emitsCache,l=o.get(t);if(l!==void 0)return l;const r=t.emits;let i={},a=!1;if(!de(t)){const c=p=>{const d=td(p,n,!0);d&&(a=!0,Ve(i,d))};!s&&n.mixins.length&&n.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Oe(t)&&o.set(t,null),null):(le(r)?r.forEach(c=>i[c]=null):Ve(i,r),Oe(t)&&o.set(t,i),i)}function ar(t,n){return!t||!Vo(n)?!1:(n=n.slice(2).replace(/Once$/,""),ke(t,n[0].toLowerCase()+n.slice(1))||ke(t,An(n))||ke(t,n))}let tt=null,cr=null;function Ml(t){const n=tt;return tt=t,cr=t&&t.type.__scopeId||null,n}function fS(t){cr=t}function hS(){cr=null}function I(t,n=tt,s){if(!n||t._n)return t;const o=(...l)=>{o._d&&wc(-1);const r=Ml(n);let i;try{i=t(...l)}finally{Ml(r),o._d&&wc(1)}return Xp(n),i};return o._n=!0,o._c=!0,o._d=!0,o}let li=!1;function Ll(){li=!0}function Br(t){const{type:n,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[i],slots:a,attrs:c,emit:p,render:d,renderCache:f,data:h,setupState:y,ctx:m,inheritAttrs:A}=t;let B,C;const D=Ml(t);li=!1;try{if(s.shapeFlag&4){const k=l||o;B=Ut(d.call(k,k,f,r,y,h,m)),C=c}else{const k=n;c===r&&Ll(),B=Ut(k.length>1?k(r,{get attrs(){return Ll(),c},slots:a,emit:p}):k(r,null)),C=n.props?c:Cm(c)}}catch(k){yo.length=0,rr(k,t,1),B=T(vt)}let b=B,x;if(B.patchFlag>0&&B.patchFlag&2048&&([b,x]=Bm(B)),C&&A!==!1){const k=Object.keys(C),{shapeFlag:F}=b;if(k.length){if(F&7)i&&k.some($l)&&(C=Dm(C,i)),b=un(b,C);else if(!li&&b.type!==vt){const j=Object.keys(c),P=[],H=[];for(let ne=0,ce=j.length;ne<ce;ne++){const W=j[ne];Vo(W)?$l(W)||P.push(W[2].toLowerCase()+W.slice(3)):H.push(W)}H.length&&N(`Extraneous non-props attributes (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),P.length&&N(`Extraneous non-emits event listeners (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(dc(b)||N("Runtime directive used on component with non-element root node. The directives will not function as intended."),b=un(b),b.dirs=b.dirs?b.dirs.concat(s.dirs):s.dirs),s.transition&&(dc(b)||N("Component inside <Transition> renders non-element root node that cannot be animated."),b.transition=s.transition),x?x(b):B=b,Ml(D),B}const Bm=t=>{const n=t.children,s=t.dynamicChildren,o=nd(n);if(!o)return[t,void 0];const l=n.indexOf(o),r=s?s.indexOf(o):-1,i=a=>{n[l]=a,s&&(r>-1?s[r]=a:a.patchFlag>0&&(t.dynamicChildren=[...s,a]))};return[Ut(o),i]};function nd(t){let n;for(let s=0;s<t.length;s++){const o=t[s];if(zn(o)){if(o.type!==vt||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Cm=t=>{let n;for(const s in t)(s==="class"||s==="style"||Vo(s))&&((n||(n={}))[s]=t[s]);return n},Dm=(t,n)=>{const s={};for(const o in t)(!$l(o)||!(o.slice(9)in n))&&(s[o]=t[o]);return s},dc=t=>t.shapeFlag&7||t.type===vt;function wm(t,n,s){const{props:o,children:l,component:r}=t,{props:i,children:a,patchFlag:c}=n,p=r.emitsOptions;if((l||a)&&In||n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return o?fc(o,i,p):!!i;if(c&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(i[h]!==o[h]&&!ar(p,h))return!0}}}else return(l||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?fc(o,i,p):!0:!!i;return!1}function fc(t,n,s){const o=Object.keys(n);if(o.length!==Object.keys(t).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(n[r]!==t[r]&&!ar(s,r))return!0}return!1}function xm({vnode:t,parent:n},s){for(;n&&n.subTree===t;)(t=n.vnode).el=s,n=n.parent}const sd=t=>t.__isSuspense;function km(t,n){n&&n.pendingBranch?le(t)?n.effects.push(...t):n.effects.push(t):Kp(t)}function ws(t,n){return va(t,null,n)}const rl={};function ge(t,n,s){return de(n)||N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),va(t,n,s)}function va(t,n,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:i}=He){var a;n||(s!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=k=>{N("Invalid watch source: ",k,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=ra()===((a=et)==null?void 0:a.scope)?et:null;let d,f=!1,h=!1;if(Se(t)?(d=()=>t.value,f=Pl(t)):ys(t)?(d=()=>t,o=!0):le(t)?(h=!0,f=t.some(k=>ys(k)||Pl(k)),d=()=>t.map(k=>{if(Se(k))return k.value;if(ys(k))return us(k);if(de(k))return _n(k,p,2);c(k)})):de(t)?n?d=()=>_n(t,p,2):d=()=>{if(!(p&&p.isUnmounted))return y&&y(),Rt(t,p,3,[m])}:(d=Dt,c(t)),n&&o){const k=d;d=()=>us(k())}let y,m=k=>{y=b.onStop=()=>{_n(k,p,4)}},A;if(To)if(m=Dt,n?s&&Rt(n,p,3,[d(),h?[]:void 0,m]):d(),l==="sync"){const k=Ig();A=k.__watcherHandles||(k.__watcherHandles=[])}else return Dt;let B=h?new Array(t.length).fill(rl):rl;const C=()=>{if(b.active)if(n){const k=b.run();(o||f||(h?k.some((F,j)=>xo(F,B[j])):xo(k,B)))&&(y&&y(),Rt(n,p,3,[k,B===rl?void 0:h&&B[0]===rl?[]:B,m]),B=k)}else b.run()};C.allowRecurse=!!n;let D;l==="sync"?D=C:l==="post"?D=()=>ot(C,p&&p.suspense):(C.pre=!0,p&&(C.id=p.uid),D=()=>ir(C));const b=new aa(d,D);b.onTrack=r,b.onTrigger=i,n?s?C():B=b.run():l==="post"?ot(b.run.bind(b),p&&p.suspense):b.run();const x=()=>{b.stop(),p&&p.scope&&ta(p.scope.effects,b)};return A&&A.push(x),x}function Em(t,n,s){const o=this.proxy,l=ze(t)?t.includes(".")?od(o,t):()=>o[t]:t.bind(o,o);let r;de(n)?r=n:(r=n.handler,s=n);const i=et;Hs(this);const a=va(l,r.bind(o),s);return i?Hs(i):vs(),a}function od(t,n){const s=n.split(".");return()=>{let o=t;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function us(t,n){if(!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),Se(t))us(t.value,n);else if(le(t))for(let s=0;s<t.length;s++)us(t[s],n);else if(Ap(t)||fs(t))t.forEach(s=>{us(s,n)});else if(Cp(t))for(const s in t)us(t[s],n);return t}function ld(t){ey(t)&&N("Do not use built-in directive ids as custom directive id: "+t)}function ae(t,n){const s=tt;if(s===null)return N("withDirectives can only be used inside render functions."),t;const o=hr(s)||s.proxy,l=t.dirs||(t.dirs=[]);for(let r=0;r<n.length;r++){let[i,a,c,p=He]=n[r];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&us(a),l.push({dir:i,instance:o,value:a,oldValue:void 0,arg:c,modifiers:p}))}return t}function Zn(t,n,s,o){const l=t.dirs,r=n&&n.dirs;for(let i=0;i<l.length;i++){const a=l[i];r&&(a.oldValue=r[i].value);let c=a.dir[o];c&&(Cs(),Rt(c,s,8,[t.el,a,t,n]),Ds())}}function $m(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wn(()=>{t.isMounted=!0}),Uo(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],Fm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt};function Tm(t,n){const{leavingVNodes:s}=t;let o=s.get(n.type);return o||(o=Object.create(null),s.set(n.type,o)),o}function ri(t,n,s,o){const{appear:l,mode:r,persisted:i=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:y,onLeaveCancelled:m,onBeforeAppear:A,onAppear:B,onAfterAppear:C,onAppearCancelled:D}=n,b=String(t.key),x=Tm(s,t),k=(P,H)=>{P&&Rt(P,o,9,H)},F=(P,H)=>{const ne=H[1];k(P,H),le(P)?P.every(ce=>ce.length<=1)&&ne():P.length<=1&&ne()},j={mode:r,persisted:i,beforeEnter(P){let H=a;if(!s.isMounted)if(l)H=A||a;else return;P._leaveCb&&P._leaveCb(!0);const ne=x[b];ne&&os(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),k(H,[P])},enter(P){let H=c,ne=p,ce=d;if(!s.isMounted)if(l)H=B||c,ne=C||p,ce=D||d;else return;let W=!1;const me=P._enterCb=ve=>{W||(W=!0,ve?k(ce,[P]):k(ne,[P]),j.delayedLeave&&j.delayedLeave(),P._enterCb=void 0)};H?F(H,[P,me]):me()},leave(P,H){const ne=String(t.key);if(P._enterCb&&P._enterCb(!0),s.isUnmounting)return H();k(f,[P]);let ce=!1;const W=P._leaveCb=me=>{ce||(ce=!0,H(),me?k(m,[P]):k(y,[P]),P._leaveCb=void 0,x[ne]===t&&delete x[ne])};x[ne]=t,h?F(h,[P,W]):W()},clone(P){return ri(P,n,s,o)}};return j}function jl(t,n){t.shapeFlag&6&&t.component?jl(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function rd(t,n=!1,s){let o=[],l=0;for(let r=0;r<t.length;r++){let i=t[r];const a=s==null?i.key:String(s)+String(i.key!=null?i.key:r);i.type===Fe?(i.patchFlag&128&&l++,o=o.concat(rd(i.children,n,a))):(n||i.type!==vt)&&o.push(a!=null?un(i,{key:a}):i)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function be(t,n){return de(t)?(()=>Ve({name:t.name},n,{setup:t}))():t}const js=t=>!!t.type.__asyncLoader,_a=t=>t.type.__isKeepAlive,Sm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const s=Ot(),o=s.ctx;if(!o.renderer)return()=>{const D=n.default&&n.default();return D&&D.length===1?D[0]:D};const l=new Map,r=new Set;let i=null;s.__v_cache=l;const a=s.suspense,{renderer:{p:c,m:p,um:d,o:{createElement:f}}}=o,h=f("div");o.activate=(D,b,x,k,F)=>{const j=D.component;p(D,b,x,0,a),c(j.vnode,D,b,x,j,a,k,D.slotScopeIds,F),ot(()=>{j.isDeactivated=!1,j.a&&ss(j.a);const P=D.props&&D.props.onVnodeMounted;P&&Lt(P,j.parent,D)},a),oi(j)},o.deactivate=D=>{const b=D.component;p(D,h,null,1,a),ot(()=>{b.da&&ss(b.da);const x=D.props&&D.props.onVnodeUnmounted;x&&Lt(x,b.parent,D),b.isDeactivated=!0},a),oi(b)};function y(D){Cr(D),d(D,s,a,!0)}function m(D){l.forEach((b,x)=>{const k=So(b.type);k&&(!D||!D(k))&&A(x)})}function A(D){const b=l.get(D);!i||!os(b,i)?y(b):i&&Cr(i),l.delete(D),r.delete(D)}ge(()=>[t.include,t.exclude],([D,b])=>{D&&m(x=>co(D,x)),b&&m(x=>!co(b,x))},{flush:"post",deep:!0});let B=null;const C=()=>{B!=null&&l.set(B,Dr(s.subTree))};return Wn(C),pr(C),Uo(()=>{l.forEach(D=>{const{subTree:b,suspense:x}=s,k=Dr(b);if(D.type===k.type&&D.key===k.key){Cr(k);const F=k.component.da;F&&ot(F,x);return}y(D)})}),()=>{if(B=null,!n.default)return null;const D=n.default(),b=D[0];if(D.length>1)return N("KeepAlive should contain exactly one component child."),i=null,D;if(!zn(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return i=null,b;let x=Dr(b);const k=x.type,F=So(js(x)?x.type.__asyncResolved||{}:k),{include:j,exclude:P,max:H}=t;if(j&&(!F||!co(j,F))||P&&F&&co(P,F))return i=x,b;const ne=x.key==null?k:x.key,ce=l.get(ne);return x.el&&(x=un(x),b.shapeFlag&128&&(b.ssContent=x)),B=ne,ce?(x.el=ce.el,x.component=ce.component,x.transition&&jl(x,x.transition),x.shapeFlag|=512,r.delete(ne),r.add(ne)):(r.add(ne),H&&r.size>parseInt(H,10)&&A(r.values().next().value)),x.shapeFlag|=256,i=x,sd(b.type)?b:x}}},id=Sm;function co(t,n){return le(t)?t.some(s=>co(s,n)):ze(t)?t.split(",").includes(n):Xh(t)?t.test(n):!1}function ad(t,n){ud(t,"a",n)}function cd(t,n){ud(t,"da",n)}function ud(t,n,s=et){const o=t.__wdc||(t.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return t()});if(ur(n,o,s),s){let l=s.parent;for(;l&&l.parent;)_a(l.parent.vnode)&&Om(o,n,s,l),l=l.parent}}function Om(t,n,s,o){const l=ur(n,t,o,!0);dr(()=>{ta(o[n],l)},s)}function Cr(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Dr(t){return t.shapeFlag&128?t.ssContent:t}function ur(t,n,s=et,o=!1){if(s){const l=s[t]||(s[t]=[]),r=n.__weh||(n.__weh=(...i)=>{if(s.isUnmounted)return;Cs(),Hs(s);const a=Rt(n,s,t,i);return vs(),Ds(),a});return o?l.unshift(r):l.push(r),r}else{const l=ts(ha[t].replace(/ hook$/,""));N(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Dn=t=>(n,s=et)=>(!To||t==="sp")&&ur(t,(...o)=>n(...o),s),Pm=Dn("bm"),Wn=Dn("m"),Im=Dn("bu"),pr=Dn("u"),Uo=Dn("bum"),dr=Dn("um"),Mm=Dn("sp"),Lm=Dn("rtg"),jm=Dn("rtc");function Nm(t,n=et){ur("ec",t,n)}const ii="components",Rm="directives";function Ge(t,n){return pd(ii,t,!0,n)||t}const Hm=Symbol.for("v-ndc");function We(t){return pd(Rm,t)}function pd(t,n,s=!0,o=!1){const l=tt||et;if(l){const r=l.type;if(t===ii){const a=So(r,!1);if(a&&(a===n||a===rn(n)||a===As(rn(n))))return r}const i=hc(l[t]||r[t],n)||hc(l.appContext[t],n);if(!i&&o)return r;if(s&&!i){const a=t===ii?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";N(`Failed to resolve ${t.slice(0,-1)}: ${n}${a}`)}return i}else N(`resolve${As(t.slice(0,-1))} can only be used in render() or setup().`)}function hc(t,n){return t&&(t[n]||t[rn(n)]||t[As(rn(n))])}function xs(t,n,s,o){let l;const r=s&&s[o];if(le(t)||ze(t)){l=new Array(t.length);for(let i=0,a=t.length;i<a;i++)l[i]=n(t[i],i,void 0,r&&r[i])}else if(typeof t=="number"){Number.isInteger(t)||N(`The v-for range expect an integer value but got ${t}.`),l=new Array(t);for(let i=0;i<t;i++)l[i]=n(i+1,i,void 0,r&&r[i])}else if(Oe(t))if(t[Symbol.iterator])l=Array.from(t,(i,a)=>n(i,a,void 0,r&&r[a]));else{const i=Object.keys(t);l=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const p=i[a];l[a]=n(t[p],p,a,r&&r[a])}}else l=[];return s&&(s[o]=l),l}function dt(t,n,s={},o,l){if(tt.isCE||tt.parent&&js(tt.parent)&&tt.parent.isCE)return n!=="default"&&(s.name=n),T("slot",s,o&&o());let r=t[n];r&&r.length>1&&(N("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),v();const i=r&&dd(r(s)),a=X(Fe,{key:s.key||i&&i.key||`_${n}`},i||(o?o():[]),i&&t._===1?64:-2);return!l&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function dd(t){return t.some(n=>zn(n)?!(n.type===vt||n.type===Fe&&!dd(n.children)):!0)?t:null}const ai=t=>t?xd(t)?hr(t)||t.proxy:ai(t.parent):null,gs=Ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>io(t.props),$attrs:t=>io(t.attrs),$slots:t=>io(t.slots),$refs:t=>io(t.refs),$parent:t=>ai(t.parent),$root:t=>ai(t.root),$emit:t=>t.emit,$options:t=>Aa(t),$forceUpdate:t=>t.f||(t.f=()=>ir(t.update)),$nextTick:t=>t.n||(t.n=at.bind(t.proxy)),$watch:t=>Em.bind(t)}),ba=t=>t==="_"||t==="$",wr=(t,n)=>t!==He&&!t.__isScriptSetup&&ke(t,n),fd={get({_:t},n){const{ctx:s,setupState:o,data:l,props:r,accessCache:i,type:a,appContext:c}=t;if(n==="__isVue")return!0;let p;if(n[0]!=="$"){const y=i[n];if(y!==void 0)switch(y){case 1:return o[n];case 2:return l[n];case 4:return s[n];case 3:return r[n]}else{if(wr(o,n))return i[n]=1,o[n];if(l!==He&&ke(l,n))return i[n]=2,l[n];if((p=t.propsOptions[0])&&ke(p,n))return i[n]=3,r[n];if(s!==He&&ke(s,n))return i[n]=4,s[n];ci&&(i[n]=0)}}const d=gs[n];let f,h;if(d)return n==="$attrs"?(pt(t,"get",n),Ll()):n==="$slots"&&pt(t,"get",n),d(t);if((f=a.__cssModules)&&(f=f[n]))return f;if(s!==He&&ke(s,n))return i[n]=4,s[n];if(h=c.config.globalProperties,ke(h,n))return h[n];tt&&(!ze(n)||n.indexOf("__v")!==0)&&(l!==He&&ba(n[0])&&ke(l,n)?N(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===tt&&N(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:t},n,s){const{data:o,setupState:l,ctx:r}=t;return wr(l,n)?(l[n]=s,!0):l.__isScriptSetup&&ke(l,n)?(N(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):o!==He&&ke(o,n)?(o[n]=s,!0):ke(t.props,n)?(N(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in t?(N(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in t.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:s}):r[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:o,appContext:l,propsOptions:r}},i){let a;return!!s[i]||t!==He&&ke(t,i)||wr(n,i)||(a=r[0])&&ke(a,i)||ke(o,i)||ke(gs,i)||ke(l.config.globalProperties,i)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:ke(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};fd.ownKeys=t=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function qm(t){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(gs).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>gs[s](t),set:Dt})}),n}function Vm(t){const{ctx:n,propsOptions:[s]}=t;s&&Object.keys(s).forEach(o=>{Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>t.props[o],set:Dt})})}function zm(t){const{ctx:n,setupState:s}=t;Object.keys(ye(s)).forEach(o=>{if(!s.__isScriptSetup){if(ba(o[0])){N(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:Dt})}})}function Gm(){return Um().slots}function Um(){const t=Ot();return t||N("useContext() called without active instance."),t.setupContext||(t.setupContext=Ed(t))}function yc(t){return le(t)?t.reduce((n,s)=>(n[s]=null,n),{}):t}function Wm(){const t=Object.create(null);return(n,s)=>{t[s]?N(`${n} property "${s}" is already defined in ${t[s]}.`):t[s]=n}}let ci=!0;function Km(t){const n=Aa(t),s=t.proxy,o=t.ctx;ci=!1,n.beforeCreate&&mc(n.beforeCreate,t,"bc");const{data:l,computed:r,methods:i,watch:a,provide:c,inject:p,created:d,beforeMount:f,mounted:h,beforeUpdate:y,updated:m,activated:A,deactivated:B,beforeDestroy:C,beforeUnmount:D,destroyed:b,unmounted:x,render:k,renderTracked:F,renderTriggered:j,errorCaptured:P,serverPrefetch:H,expose:ne,inheritAttrs:ce,components:W,directives:me,filters:ve}=n,Ae=Wm();{const[ee]=t.propsOptions;if(ee)for(const re in ee)Ae("Props",re)}if(p&&Ym(p,o,Ae),i)for(const ee in i){const re=i[ee];de(re)?(Object.defineProperty(o,ee,{value:re.bind(s),configurable:!0,enumerable:!0,writable:!0}),Ae("Methods",ee)):N(`Method "${ee}" has type "${typeof re}" in the component definition. Did you reference the function correctly?`)}if(l){de(l)||N("The data option must be a function. Plain object usage is no longer supported.");const ee=l.call(s,s);if(sa(ee)&&N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Oe(ee))N("data() should return an object.");else{t.data=Ue(ee);for(const re in ee)Ae("Data",re),ba(re[0])||Object.defineProperty(o,re,{configurable:!0,enumerable:!0,get:()=>ee[re],set:Dt})}}if(ci=!0,r)for(const ee in r){const re=r[ee],xe=de(re)?re.bind(s,s):de(re.get)?re.get.bind(s,s):Dt;xe===Dt&&N(`Computed property "${ee}" has no getter.`);const Me=!de(re)&&de(re.set)?re.set.bind(s):()=>{N(`Write operation failed: computed property "${ee}" is readonly.`)},Pt=S({get:xe,set:Me});Object.defineProperty(o,ee,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:rt=>Pt.value=rt}),Ae("Computed",ee)}if(a)for(const ee in a)hd(a[ee],o,s,ee);if(c){const ee=de(c)?c.call(s):c;Reflect.ownKeys(ee).forEach(re=>{$t(re,ee[re])})}d&&mc(d,t,"c");function je(ee,re){le(re)?re.forEach(xe=>ee(xe.bind(s))):re&&ee(re.bind(s))}if(je(Pm,f),je(Wn,h),je(Im,y),je(pr,m),je(ad,A),je(cd,B),je(Nm,P),je(jm,F),je(Lm,j),je(Uo,D),je(dr,x),je(Mm,H),le(ne))if(ne.length){const ee=t.exposed||(t.exposed={});ne.forEach(re=>{Object.defineProperty(ee,re,{get:()=>s[re],set:xe=>s[re]=xe})})}else t.exposed||(t.exposed={});k&&t.render===Dt&&(t.render=k),ce!=null&&(t.inheritAttrs=ce),W&&(t.components=W),me&&(t.directives=me)}function Ym(t,n,s=Dt){le(t)&&(t=ui(t));for(const o in t){const l=t[o];let r;Oe(l)?"default"in l?r=q(l.from||o,l.default,!0):r=q(l.from||o):r=q(l),Se(r)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):n[o]=r,s("Inject",o)}}function mc(t,n,s){Rt(le(t)?t.map(o=>o.bind(n.proxy)):t.bind(n.proxy),n,s)}function hd(t,n,s,o){const l=o.includes(".")?od(s,o):()=>s[o];if(ze(t)){const r=n[t];de(r)?ge(l,r):N(`Invalid watch handler specified by key "${t}"`,r)}else if(de(t))ge(l,t.bind(s));else if(Oe(t))if(le(t))t.forEach(r=>hd(r,n,s,o));else{const r=de(t.handler)?t.handler.bind(s):n[t.handler];de(r)?ge(l,r,t):N(`Invalid watch handler specified by key "${t.handler}"`,r)}else N(`Invalid watch option: "${o}"`,t)}function Aa(t){const n=t.type,{mixins:s,extends:o}=n,{mixins:l,optionsCache:r,config:{optionMergeStrategies:i}}=t.appContext,a=r.get(n);let c;return a?c=a:!l.length&&!s&&!o?c=n:(c={},l.length&&l.forEach(p=>Nl(c,p,i,!0)),Nl(c,n,i)),Oe(n)&&r.set(n,c),c}function Nl(t,n,s,o=!1){const{mixins:l,extends:r}=n;r&&Nl(t,r,s,!0),l&&l.forEach(i=>Nl(t,i,s,!0));for(const i in n)if(o&&i==="expose")N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=Zm[i]||s&&s[i];t[i]=a?a(t[i],n[i]):n[i]}return t}const Zm={data:gc,props:vc,emits:vc,methods:uo,computed:uo,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:uo,directives:uo,watch:Jm,provide:gc,inject:Qm};function gc(t,n){return n?t?function(){return Ve(de(t)?t.call(this,this):t,de(n)?n.call(this,this):n)}:n:t}function Qm(t,n){return uo(ui(t),ui(n))}function ui(t){if(le(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function ht(t,n){return t?[...new Set([].concat(t,n))]:n}function uo(t,n){return t?Ve(Object.create(null),t,n):n}function vc(t,n){return t?le(t)&&le(n)?[...new Set([...t,...n])]:Ve(Object.create(null),yc(t),yc(n??{})):n}function Jm(t,n){if(!t)return n;if(!n)return t;const s=Ve(Object.create(null),t);for(const o in n)s[o]=ht(t[o],n[o]);return s}function yd(){return{app:null,config:{isNativeTag:bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xm=0;function eg(t,n){return function(o,l=null){de(o)||(o=Ve({},o)),l!=null&&!Oe(l)&&(N("root props passed to app.mount() must be an object."),l=null);const r=yd();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){N("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const i=new Set;let a=!1;const c=r.app={_uid:Xm++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Vl,get config(){return r.config},set config(p){N("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return i.has(p)?N("Plugin has already been applied to target app."):p&&de(p.install)?(i.add(p),p.install(c,...d)):de(p)?(i.add(p),p(c,...d)):N('A plugin must either be a function or an object with an "install" function.'),c},mixin(p){return r.mixins.includes(p)?N("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):r.mixins.push(p),c},component(p,d){return yi(p,r.config),d?(r.components[p]&&N(`Component "${p}" has already been registered in target app.`),r.components[p]=d,c):r.components[p]},directive(p,d){return ld(p),d?(r.directives[p]&&N(`Directive "${p}" has already been registered in target app.`),r.directives[p]=d,c):r.directives[p]},mount(p,d,f){if(a)N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=T(o,l);return h.appContext=r,r.reload=()=>{t(un(h),p,f)},d&&n?n(h,p):t(h,p,f),a=!0,c._container=p,p.__vue_app__=c,c._instance=h.component,hm(c,Vl),hr(h.component)||h.component.proxy}},unmount(){a?(t(null,c._container),c._instance=null,ym(c),delete c._container.__vue_app__):N("Cannot unmount an app that is not mounted.")},provide(p,d){return p in r.provides&&N(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),r.provides[p]=d,c},runWithContext(p){Rl=c;try{return p()}finally{Rl=null}}};return c}}let Rl=null;function $t(t,n){if(!et)N("provide() can only be used inside setup().");else{let s=et.provides;const o=et.parent&&et.parent.provides;o===s&&(s=et.provides=Object.create(o)),s[t]=n}}function q(t,n,s=!1){const o=et||tt;if(o||Rl){const l=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Rl._context.provides;if(l&&t in l)return l[t];if(arguments.length>1)return s&&de(n)?n.call(o&&o.proxy):n;N(`injection "${String(t)}" not found.`)}else N("inject() can only be used inside setup() or functional components.")}function tg(t,n,s,o=!1){const l={},r={};Fl(r,fr,1),t.propsDefaults=Object.create(null),md(t,n,l,r);for(const i in t.propsOptions[0])i in l||(l[i]=void 0);vd(n||{},l,t),s?t.props=o?l:zy(l):t.type.props?t.props=l:t.props=r,t.attrs=r}function ng(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function sg(t,n,s,o){const{props:l,attrs:r,vnode:{patchFlag:i}}=t,a=ye(l),[c]=t.propsOptions;let p=!1;if(!ng(t)&&(o||i>0)&&!(i&16)){if(i&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(ar(t.emitsOptions,h))continue;const y=n[h];if(c)if(ke(r,h))y!==r[h]&&(r[h]=y,p=!0);else{const m=rn(h);l[m]=pi(c,a,m,y,t,!1)}else y!==r[h]&&(r[h]=y,p=!0)}}}else{md(t,n,l,r)&&(p=!0);let d;for(const f in a)(!n||!ke(n,f)&&((d=An(f))===f||!ke(n,d)))&&(c?s&&(s[f]!==void 0||s[d]!==void 0)&&(l[f]=pi(c,a,f,void 0,t,!0)):delete l[f]);if(r!==a)for(const f in r)(!n||!ke(n,f))&&(delete r[f],p=!0)}p&&an(t,"set","$attrs"),vd(n||{},l,t)}function md(t,n,s,o){const[l,r]=t.propsOptions;let i=!1,a;if(n)for(let c in n){if(_l(c))continue;const p=n[c];let d;l&&ke(l,d=rn(c))?!r||!r.includes(d)?s[d]=p:(a||(a={}))[d]=p:ar(t.emitsOptions,c)||(!(c in o)||p!==o[c])&&(o[c]=p,i=!0)}if(r){const c=ye(s),p=a||He;for(let d=0;d<r.length;d++){const f=r[d];s[f]=pi(l,c,f,p[f],t,!ke(p,f))}}return i}function pi(t,n,s,o,l,r){const i=t[s];if(i!=null){const a=ke(i,"default");if(a&&o===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&de(c)){const{propsDefaults:p}=l;s in p?o=p[s]:(Hs(l),o=p[s]=c.call(null,n),vs())}else o=c}i[0]&&(r&&!a?o=!1:i[1]&&(o===""||o===An(s))&&(o=!0))}return o}function gd(t,n,s=!1){const o=n.propsCache,l=o.get(t);if(l)return l;const r=t.props,i={},a=[];let c=!1;if(!de(t)){const d=f=>{c=!0;const[h,y]=gd(f,n,!0);Ve(i,h),y&&a.push(...y)};!s&&n.mixins.length&&n.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return Oe(t)&&o.set(t,Ms),Ms;if(le(r))for(let d=0;d<r.length;d++){ze(r[d])||N("props must be strings when using array syntax.",r[d]);const f=rn(r[d]);_c(f)&&(i[f]=He)}else if(r){Oe(r)||N("invalid props options",r);for(const d in r){const f=rn(d);if(_c(f)){const h=r[d],y=i[f]=le(h)||de(h)?{type:h}:Ve({},h);if(y){const m=Ac(Boolean,y.type),A=Ac(String,y.type);y[0]=m>-1,y[1]=A<0||m<A,(m>-1||ke(y,"default"))&&a.push(f)}}}}const p=[i,a];return Oe(t)&&o.set(t,p),p}function _c(t){return t[0]!=="$"?!0:(N(`Invalid prop name: "${t}" is a reserved property.`),!1)}function di(t){const n=t&&t.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:t===null?"null":""}function bc(t,n){return di(t)===di(n)}function Ac(t,n){return le(n)?n.findIndex(s=>bc(s,t)):de(n)&&bc(n,t)?0:-1}function vd(t,n,s){const o=ye(n),l=s.propsOptions[0];for(const r in l){let i=l[r];i!=null&&og(r,o[r],i,!ke(t,r)&&!ke(t,An(r)))}}function og(t,n,s,o){const{type:l,required:r,validator:i,skipCheck:a}=s;if(r&&o){N('Missing required prop: "'+t+'"');return}if(!(n==null&&!r)){if(l!=null&&l!==!0&&!a){let c=!1;const p=le(l)?l:[l],d=[];for(let f=0;f<p.length&&!c;f++){const{valid:h,expectedType:y}=rg(n,p[f]);d.push(y||""),c=h}if(!c){N(ig(t,n,d));return}}i&&!i(n)&&N('Invalid prop: custom validator check failed for prop "'+t+'".')}}const lg=Un("String,Number,Boolean,Function,Symbol,BigInt");function rg(t,n){let s;const o=di(n);if(lg(o)){const l=typeof t;s=l===o.toLowerCase(),!s&&l==="object"&&(s=t instanceof n)}else o==="Object"?s=Oe(t):o==="Array"?s=le(t):o==="null"?s=t===null:s=t instanceof n;return{valid:s,expectedType:o}}function ig(t,n,s){let o=`Invalid prop: type check failed for prop "${t}". Expected ${s.map(As).join(" | ")}`;const l=s[0],r=oa(n),i=Bc(n,l),a=Bc(n,r);return s.length===1&&Cc(l)&&!ag(l,r)&&(o+=` with value ${i}`),o+=`, got ${r} `,Cc(r)&&(o+=`with value ${a}.`),o}function Bc(t,n){return n==="String"?`"${t}"`:n==="Number"?`${Number(t)}`:`${t}`}function Cc(t){return["string","number","boolean"].some(s=>t.toLowerCase()===s)}function ag(...t){return t.some(n=>n.toLowerCase()==="boolean")}const _d=t=>t[0]==="_"||t==="$stable",Ba=t=>le(t)?t.map(Ut):[Ut(t)],cg=(t,n,s)=>{if(n._n)return n;const o=I((...l)=>(et&&N(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ba(n(...l))),s);return o._c=!1,o},bd=(t,n,s)=>{const o=t._ctx;for(const l in t){if(_d(l))continue;const r=t[l];if(de(r))n[l]=cg(l,r,o);else if(r!=null){N(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const i=Ba(r);n[l]=()=>i}}},Ad=(t,n)=>{_a(t.vnode)||N("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Ba(n);t.slots.default=()=>s},ug=(t,n)=>{if(t.vnode.shapeFlag&32){const s=n._;s?(t.slots=ye(n),Fl(n,"_",s)):bd(n,t.slots={})}else t.slots={},n&&Ad(t,n);Fl(t.slots,fr,1)},pg=(t,n,s)=>{const{vnode:o,slots:l}=t;let r=!0,i=He;if(o.shapeFlag&32){const a=n._;a?In?(Ve(l,n),an(t,"set","$slots")):s&&a===1?r=!1:(Ve(l,n),!s&&a===1&&delete l._):(r=!n.$stable,bd(n,l)),i=n}else n&&(Ad(t,n),i={default:1});if(r)for(const a in l)!_d(a)&&!(a in i)&&delete l[a]};function fi(t,n,s,o,l=!1){if(le(t)){t.forEach((h,y)=>fi(h,n&&(le(n)?n[y]:n),s,o,l));return}if(js(o)&&!l)return;const r=o.shapeFlag&4?hr(o.component)||o.component.proxy:o.el,i=l?null:r,{i:a,r:c}=t;if(!a){N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=n&&n.r,d=a.refs===He?a.refs={}:a.refs,f=a.setupState;if(p!=null&&p!==c&&(ze(p)?(d[p]=null,ke(f,p)&&(f[p]=null)):Se(p)&&(p.value=null)),de(c))_n(c,a,12,[i,d]);else{const h=ze(c),y=Se(c);if(h||y){const m=()=>{if(t.f){const A=h?ke(f,c)?f[c]:d[c]:c.value;l?le(A)&&ta(A,r):le(A)?A.includes(r)||A.push(r):h?(d[c]=[r],ke(f,c)&&(f[c]=d[c])):(c.value=[r],t.k&&(d[t.k]=c.value))}else h?(d[c]=i,ke(f,c)&&(f[c]=i)):y?(c.value=i,t.k&&(d[t.k]=i)):N("Invalid template ref type:",c,`(${typeof c})`)};i?(m.id=-1,ot(m,s)):m()}else N("Invalid template ref type:",c,`(${typeof c})`)}}let Ks,Sn;function fn(t,n){t.appContext.config.performance&&Hl()&&Sn.mark(`vue-${n}-${t.uid}`),vm(t,n,Hl()?Sn.now():Date.now())}function hn(t,n){if(t.appContext.config.performance&&Hl()){const s=`vue-${n}-${t.uid}`,o=s+":end";Sn.mark(o),Sn.measure(`<${yr(t,t.type)}> ${n}`,s,o),Sn.clearMarks(s),Sn.clearMarks(o)}_m(t,n,Hl()?Sn.now():Date.now())}function Hl(){return Ks!==void 0||(typeof window<"u"&&window.performance?(Ks=!0,Sn=window.performance):Ks=!1),Ks}function dg(){const t=[];if(t.length){const n=t.length>1;console.warn(`Feature flag${n?"s":""} ${t.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const ot=km;function fg(t){return hg(t)}function hg(t,n){dg();const s=Tl();s.__VUE__=!0,Jp(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:i,createText:a,createComment:c,setText:p,setElementText:d,parentNode:f,nextSibling:h,setScopeId:y=Dt,insertStaticContent:m}=t,A=(g,_,E,L=null,M=null,z=null,Q=!1,V=null,G=In?!1:!!_.dynamicChildren)=>{if(g===_)return;g&&!os(g,_)&&(L=Z(g),At(g,M,z,!0),g=null),_.patchFlag===-2&&(G=!1,_.dynamicChildren=null);const{type:R,ref:oe,shapeFlag:se}=_;switch(R){case Wo:B(g,_,E,L);break;case vt:C(g,_,E,L);break;case Bl:g==null?D(_,E,L,Q):b(g,_,E,Q);break;case Fe:me(g,_,E,L,M,z,Q,V,G);break;default:se&1?F(g,_,E,L,M,z,Q,V,G):se&6?ve(g,_,E,L,M,z,Q,V,G):se&64||se&128?R.process(g,_,E,L,M,z,Q,V,G,te):N("Invalid VNode type:",R,`(${typeof R})`)}oe!=null&&M&&fi(oe,g&&g.ref,z,_||g,!_)},B=(g,_,E,L)=>{if(g==null)o(_.el=a(_.children),E,L);else{const M=_.el=g.el;_.children!==g.children&&p(M,_.children)}},C=(g,_,E,L)=>{g==null?o(_.el=c(_.children||""),E,L):_.el=g.el},D=(g,_,E,L)=>{[g.el,g.anchor]=m(g.children,_,E,L,g.el,g.anchor)},b=(g,_,E,L)=>{if(_.children!==g.children){const M=h(g.anchor);k(g),[_.el,_.anchor]=m(_.children,E,M,L)}else _.el=g.el,_.anchor=g.anchor},x=({el:g,anchor:_},E,L)=>{let M;for(;g&&g!==_;)M=h(g),o(g,E,L),g=M;o(_,E,L)},k=({el:g,anchor:_})=>{let E;for(;g&&g!==_;)E=h(g),l(g),g=E;l(_)},F=(g,_,E,L,M,z,Q,V,G)=>{Q=Q||_.type==="svg",g==null?j(_,E,L,M,z,Q,V,G):ne(g,_,M,z,Q,V,G)},j=(g,_,E,L,M,z,Q,V)=>{let G,R;const{type:oe,props:se,shapeFlag:ie,transition:he,dirs:Ee}=g;if(G=g.el=i(g.type,z,se&&se.is,se),ie&8?d(G,g.children):ie&16&&H(g.children,G,null,L,M,z&&oe!=="foreignObject",Q,V),Ee&&Zn(g,null,L,"created"),P(G,g,g.scopeId,Q,L),se){for(const Re in se)Re!=="value"&&!_l(Re)&&r(G,Re,null,se[Re],z,g.children,L,M,O);"value"in se&&r(G,"value",null,se.value),(R=se.onVnodeBeforeMount)&&Lt(R,L,g)}Object.defineProperty(G,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(G,"__vueParentComponent",{value:L,enumerable:!1}),Ee&&Zn(g,null,L,"beforeMount");const qe=(!M||M&&!M.pendingBranch)&&he&&!he.persisted;qe&&he.beforeEnter(G),o(G,_,E),((R=se&&se.onVnodeMounted)||qe||Ee)&&ot(()=>{R&&Lt(R,L,g),qe&&he.enter(G),Ee&&Zn(g,null,L,"mounted")},M)},P=(g,_,E,L,M)=>{if(E&&y(g,E),L)for(let z=0;z<L.length;z++)y(g,L[z]);if(M){let z=M.subTree;if(z.patchFlag>0&&z.patchFlag&2048&&(z=nd(z.children)||z),_===z){const Q=M.vnode;P(g,Q,Q.scopeId,Q.slotScopeIds,M.parent)}}},H=(g,_,E,L,M,z,Q,V,G=0)=>{for(let R=G;R<g.length;R++){const oe=g[R]=V?Fn(g[R]):Ut(g[R]);A(null,oe,_,E,L,M,z,Q,V)}},ne=(g,_,E,L,M,z,Q)=>{const V=_.el=g.el;let{patchFlag:G,dynamicChildren:R,dirs:oe}=_;G|=g.patchFlag&16;const se=g.props||He,ie=_.props||He;let he;E&&Qn(E,!1),(he=ie.onVnodeBeforeUpdate)&&Lt(he,E,_,g),oe&&Zn(_,g,E,"beforeUpdate"),E&&Qn(E,!0),In&&(G=0,Q=!1,R=null);const Ee=M&&_.type!=="foreignObject";if(R?(ce(g.dynamicChildren,R,V,E,L,Ee,z),ql(g,_)):Q||xe(g,_,V,null,E,L,Ee,z,!1),G>0){if(G&16)W(V,_,se,ie,E,L,M);else if(G&2&&se.class!==ie.class&&r(V,"class",null,ie.class,M),G&4&&r(V,"style",se.style,ie.style,M),G&8){const qe=_.dynamicProps;for(let Re=0;Re<qe.length;Re++){const Ye=qe[Re],Vt=se[Ye],$s=ie[Ye];($s!==Vt||Ye==="value")&&r(V,Ye,Vt,$s,M,g.children,E,L,O)}}G&1&&g.children!==_.children&&d(V,_.children)}else!Q&&R==null&&W(V,_,se,ie,E,L,M);((he=ie.onVnodeUpdated)||oe)&&ot(()=>{he&&Lt(he,E,_,g),oe&&Zn(_,g,E,"updated")},L)},ce=(g,_,E,L,M,z,Q)=>{for(let V=0;V<_.length;V++){const G=g[V],R=_[V],oe=G.el&&(G.type===Fe||!os(G,R)||G.shapeFlag&70)?f(G.el):E;A(G,R,oe,null,L,M,z,Q,!0)}},W=(g,_,E,L,M,z,Q)=>{if(E!==L){if(E!==He)for(const V in E)!_l(V)&&!(V in L)&&r(g,V,E[V],null,Q,_.children,M,z,O);for(const V in L){if(_l(V))continue;const G=L[V],R=E[V];G!==R&&V!=="value"&&r(g,V,R,G,Q,_.children,M,z,O)}"value"in L&&r(g,"value",E.value,L.value)}},me=(g,_,E,L,M,z,Q,V,G)=>{const R=_.el=g?g.el:a(""),oe=_.anchor=g?g.anchor:a("");let{patchFlag:se,dynamicChildren:ie,slotScopeIds:he}=_;(In||se&2048)&&(se=0,G=!1,ie=null),he&&(V=V?V.concat(he):he),g==null?(o(R,E,L),o(oe,E,L),H(_.children,E,oe,M,z,Q,V,G)):se>0&&se&64&&ie&&g.dynamicChildren?(ce(g.dynamicChildren,ie,E,M,z,Q,V),ql(g,_)):xe(g,_,E,oe,M,z,Q,V,G)},ve=(g,_,E,L,M,z,Q,V,G)=>{_.slotScopeIds=V,g==null?_.shapeFlag&512?M.ctx.activate(_,E,L,Q,G):Ae(_,E,L,M,z,Q,G):je(g,_,G)},Ae=(g,_,E,L,M,z,Q)=>{const V=g.component=wg(g,L,M);if(V.type.__hmrId&&um(V),bl(g),fn(V,"mount"),_a(g)&&(V.ctx.renderer=te),fn(V,"init"),kg(V),hn(V,"init"),V.asyncDep){if(M&&M.registerDep(V,ee),!g.el){const G=V.subTree=T(vt);C(null,G,_,E)}return}ee(V,g,_,E,M,z,Q),Al(),hn(V,"mount")},je=(g,_,E)=>{const L=_.component=g.component;if(wm(g,_,E))if(L.asyncDep&&!L.asyncResolved){bl(_),re(L,_,E),Al();return}else L.next=_,am(L.update),L.update();else _.el=g.el,L.vnode=_},ee=(g,_,E,L,M,z,Q)=>{const V=()=>{if(g.isMounted){let{next:oe,bu:se,u:ie,parent:he,vnode:Ee}=g,qe=oe,Re;bl(oe||g.vnode),Qn(g,!1),oe?(oe.el=Ee.el,re(g,oe,Q)):oe=Ee,se&&ss(se),(Re=oe.props&&oe.props.onVnodeBeforeUpdate)&&Lt(Re,he,oe,Ee),Qn(g,!0),fn(g,"render");const Ye=Br(g);hn(g,"render");const Vt=g.subTree;g.subTree=Ye,fn(g,"patch"),A(Vt,Ye,f(Vt.el),Z(Vt),g,M,z),hn(g,"patch"),oe.el=Ye.el,qe===null&&xm(g,Ye.el),ie&&ot(ie,M),(Re=oe.props&&oe.props.onVnodeUpdated)&&ot(()=>Lt(Re,he,oe,Ee),M),Xp(g),Al()}else{let oe;const{el:se,props:ie}=_,{bm:he,m:Ee,parent:qe}=g,Re=js(_);if(Qn(g,!1),he&&ss(he),!Re&&(oe=ie&&ie.onVnodeBeforeMount)&&Lt(oe,qe,_),Qn(g,!0),se&&Ne){const Ye=()=>{fn(g,"render"),g.subTree=Br(g),hn(g,"render"),fn(g,"hydrate"),Ne(se,g.subTree,g,M,null),hn(g,"hydrate")};Re?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Ye()):Ye()}else{fn(g,"render");const Ye=g.subTree=Br(g);hn(g,"render"),fn(g,"patch"),A(null,Ye,E,L,g,M,z),hn(g,"patch"),_.el=Ye.el}if(Ee&&ot(Ee,M),!Re&&(oe=ie&&ie.onVnodeMounted)){const Ye=_;ot(()=>Lt(oe,qe,Ye),M)}(_.shapeFlag&256||qe&&js(qe.vnode)&&qe.vnode.shapeFlag&256)&&g.a&&ot(g.a,M),g.isMounted=!0,oi(g),_=E=L=null}},G=g.effect=new aa(V,()=>ir(R),g.scope),R=g.update=()=>G.run();R.id=g.uid,Qn(g,!0),G.onTrack=g.rtc?oe=>ss(g.rtc,oe):void 0,G.onTrigger=g.rtg?oe=>ss(g.rtg,oe):void 0,R.ownerInstance=g,R()},re=(g,_,E)=>{_.component=g;const L=g.vnode.props;g.vnode=_,g.next=null,sg(g,_.props,L,E),pg(g,_.children,E),Cs(),uc(),Ds()},xe=(g,_,E,L,M,z,Q,V,G=!1)=>{const R=g&&g.children,oe=g?g.shapeFlag:0,se=_.children,{patchFlag:ie,shapeFlag:he}=_;if(ie>0){if(ie&128){Pt(R,se,E,L,M,z,Q,V,G);return}else if(ie&256){Me(R,se,E,L,M,z,Q,V,G);return}}he&8?(oe&16&&O(R,M,z),se!==R&&d(E,se)):oe&16?he&16?Pt(R,se,E,L,M,z,Q,V,G):O(R,M,z,!0):(oe&8&&d(E,""),he&16&&H(se,E,L,M,z,Q,V,G))},Me=(g,_,E,L,M,z,Q,V,G)=>{g=g||Ms,_=_||Ms;const R=g.length,oe=_.length,se=Math.min(R,oe);let ie;for(ie=0;ie<se;ie++){const he=_[ie]=G?Fn(_[ie]):Ut(_[ie]);A(g[ie],he,E,null,M,z,Q,V,G)}R>oe?O(g,M,z,!0,!1,se):H(_,E,L,M,z,Q,V,G,se)},Pt=(g,_,E,L,M,z,Q,V,G)=>{let R=0;const oe=_.length;let se=g.length-1,ie=oe-1;for(;R<=se&&R<=ie;){const he=g[R],Ee=_[R]=G?Fn(_[R]):Ut(_[R]);if(os(he,Ee))A(he,Ee,E,null,M,z,Q,V,G);else break;R++}for(;R<=se&&R<=ie;){const he=g[se],Ee=_[ie]=G?Fn(_[ie]):Ut(_[ie]);if(os(he,Ee))A(he,Ee,E,null,M,z,Q,V,G);else break;se--,ie--}if(R>se){if(R<=ie){const he=ie+1,Ee=he<oe?_[he].el:L;for(;R<=ie;)A(null,_[R]=G?Fn(_[R]):Ut(_[R]),E,Ee,M,z,Q,V,G),R++}}else if(R>ie)for(;R<=se;)At(g[R],M,z,!0),R++;else{const he=R,Ee=R,qe=new Map;for(R=Ee;R<=ie;R++){const ft=_[R]=G?Fn(_[R]):Ut(_[R]);ft.key!=null&&(qe.has(ft.key)&&N("Duplicate keys found during update:",JSON.stringify(ft.key),"Make sure keys are unique."),qe.set(ft.key,R))}let Re,Ye=0;const Vt=ie-Ee+1;let $s=!1,Xa=0;const Ws=new Array(Vt);for(R=0;R<Vt;R++)Ws[R]=0;for(R=he;R<=se;R++){const ft=g[R];if(Ye>=Vt){At(ft,M,z,!0);continue}let Xt;if(ft.key!=null)Xt=qe.get(ft.key);else for(Re=Ee;Re<=ie;Re++)if(Ws[Re-Ee]===0&&os(ft,_[Re])){Xt=Re;break}Xt===void 0?At(ft,M,z,!0):(Ws[Xt-Ee]=R+1,Xt>=Xa?Xa=Xt:$s=!0,A(ft,_[Xt],E,null,M,z,Q,V,G),Ye++)}const ec=$s?yg(Ws):Ms;for(Re=ec.length-1,R=Vt-1;R>=0;R--){const ft=Ee+R,Xt=_[ft],tc=ft+1<oe?_[ft+1].el:L;Ws[R]===0?A(null,Xt,E,tc,M,z,Q,V,G):$s&&(Re<0||R!==ec[Re]?rt(Xt,E,tc,2):Re--)}}},rt=(g,_,E,L,M=null)=>{const{el:z,type:Q,transition:V,children:G,shapeFlag:R}=g;if(R&6){rt(g.component.subTree,_,E,L);return}if(R&128){g.suspense.move(_,E,L);return}if(R&64){Q.move(g,_,E,te);return}if(Q===Fe){o(z,_,E);for(let se=0;se<G.length;se++)rt(G[se],_,E,L);o(g.anchor,_,E);return}if(Q===Bl){x(g,_,E);return}if(L!==2&&R&1&&V)if(L===0)V.beforeEnter(z),o(z,_,E),ot(()=>V.enter(z),M);else{const{leave:se,delayLeave:ie,afterLeave:he}=V,Ee=()=>o(z,_,E),qe=()=>{se(z,()=>{Ee(),he&&he()})};ie?ie(z,Ee,qe):qe()}else o(z,_,E)},At=(g,_,E,L=!1,M=!1)=>{const{type:z,props:Q,ref:V,children:G,dynamicChildren:R,shapeFlag:oe,patchFlag:se,dirs:ie}=g;if(V!=null&&fi(V,null,E,g,!0),oe&256){_.ctx.deactivate(g);return}const he=oe&1&&ie,Ee=!js(g);let qe;if(Ee&&(qe=Q&&Q.onVnodeBeforeUnmount)&&Lt(qe,_,g),oe&6)It(g.component,E,L);else{if(oe&128){g.suspense.unmount(E,L);return}he&&Zn(g,null,_,"beforeUnmount"),oe&64?g.type.remove(g,_,E,M,te,L):R&&(z!==Fe||se>0&&se&64)?O(R,_,E,!1,!0):(z===Fe&&se&384||!M&&oe&16)&&O(G,_,E),L&&Jt(g)}(Ee&&(qe=Q&&Q.onVnodeUnmounted)||he)&&ot(()=>{qe&&Lt(qe,_,g),he&&Zn(g,null,_,"unmounted")},E)},Jt=g=>{const{type:_,el:E,anchor:L,transition:M}=g;if(_===Fe){g.patchFlag>0&&g.patchFlag&2048&&M&&!M.persisted?g.children.forEach(Q=>{Q.type===vt?l(Q.el):Jt(Q)}):Yn(E,L);return}if(_===Bl){k(g);return}const z=()=>{l(E),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(g.shapeFlag&1&&M&&!M.persisted){const{leave:Q,delayLeave:V}=M,G=()=>Q(E,z);V?V(g.el,z,G):G()}else z()},Yn=(g,_)=>{let E;for(;g!==_;)E=h(g),l(g),g=E;l(_)},It=(g,_,E)=>{g.type.__hmrId&&pm(g);const{bum:L,scope:M,update:z,subTree:Q,um:V}=g;L&&ss(L),M.stop(),z&&(z.active=!1,At(Q,g,_,E)),V&&ot(V,_),ot(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),gm(g)},O=(g,_,E,L=!1,M=!1,z=0)=>{for(let Q=z;Q<g.length;Q++)At(g[Q],_,E,L,M)},Z=g=>g.shapeFlag&6?Z(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),J=(g,_,E)=>{g==null?_._vnode&&At(_._vnode,null,null,!0):A(_._vnode||null,g,_,null,null,null,E),uc(),Yp(),_._vnode=g},te={p:A,um:At,m:rt,r:Jt,mt:Ae,mc:H,pc:xe,pbc:ce,n:Z,o:t};let De,Ne;return n&&([De,Ne]=n(te)),{render:J,hydrate:De,createApp:eg(J,De)}}function Qn({effect:t,update:n},s){t.allowRecurse=n.allowRecurse=s}function ql(t,n,s=!1){const o=t.children,l=n.children;if(le(o)&&le(l))for(let r=0;r<o.length;r++){const i=o[r];let a=l[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=l[r]=Fn(l[r]),a.el=i.el),s||ql(i,a)),a.type===Wo&&(a.el=i.el),a.type===vt&&!a.el&&(a.el=i.el)}}function yg(t){const n=t.slice(),s=[0];let o,l,r,i,a;const c=t.length;for(o=0;o<c;o++){const p=t[o];if(p!==0){if(l=s[s.length-1],t[l]<p){n[o]=l,s.push(o);continue}for(r=0,i=s.length-1;r<i;)a=r+i>>1,t[s[a]]<p?r=a+1:i=a;p<t[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,i=s[r-1];r-- >0;)s[r]=i,i=n[i];return s}const mg=t=>t.__isTeleport,Ns=t=>t&&(t.disabled||t.disabled===""),Dc=t=>typeof SVGElement<"u"&&t instanceof SVGElement,hi=(t,n)=>{const s=t&&t.to;if(ze(s))if(n){const o=n(s);return o||N(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return N("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Ns(t)&&N(`Invalid Teleport target: ${s}`),s},gg={__isTeleport:!0,process(t,n,s,o,l,r,i,a,c,p){const{mc:d,pc:f,pbc:h,o:{insert:y,querySelector:m,createText:A,createComment:B}}=p,C=Ns(n.props);let{shapeFlag:D,children:b,dynamicChildren:x}=n;if(In&&(c=!1,x=null),t==null){const k=n.el=B("teleport start"),F=n.anchor=B("teleport end");y(k,s,o),y(F,s,o);const j=n.target=hi(n.props,m),P=n.targetAnchor=A("");j?(y(P,j),i=i||Dc(j)):C||N("Invalid Teleport target on mount:",j,`(${typeof j})`);const H=(ne,ce)=>{D&16&&d(b,ne,ce,l,r,i,a,c)};C?H(s,F):j&&H(j,P)}else{n.el=t.el;const k=n.anchor=t.anchor,F=n.target=t.target,j=n.targetAnchor=t.targetAnchor,P=Ns(t.props),H=P?s:F,ne=P?k:j;if(i=i||Dc(F),x?(h(t.dynamicChildren,x,H,l,r,i,a),ql(t,n,!0)):c||f(t,n,H,ne,l,r,i,a,!1),C)P||il(n,s,k,p,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const ce=n.target=hi(n.props,m);ce?il(n,ce,null,p,0):N("Invalid Teleport target on update:",F,`(${typeof F})`)}else P&&il(n,F,j,p,1)}Bd(n)},remove(t,n,s,o,{um:l,o:{remove:r}},i){const{shapeFlag:a,children:c,anchor:p,targetAnchor:d,target:f,props:h}=t;if(f&&r(d),(i||!Ns(h))&&(r(p),a&16))for(let y=0;y<c.length;y++){const m=c[y];l(m,n,s,!0,!!m.dynamicChildren)}},move:il,hydrate:vg};function il(t,n,s,{o:{insert:o},m:l},r=2){r===0&&o(t.targetAnchor,n,s);const{el:i,anchor:a,shapeFlag:c,children:p,props:d}=t,f=r===2;if(f&&o(i,n,s),(!f||Ns(d))&&c&16)for(let h=0;h<p.length;h++)l(p[h],n,s,2);f&&o(a,n,s)}function vg(t,n,s,o,l,r,{o:{nextSibling:i,parentNode:a,querySelector:c}},p){const d=n.target=hi(n.props,c);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if(Ns(n.props))n.anchor=p(i(t),n,a(t),s,o,l,r),n.targetAnchor=f;else{n.anchor=i(t);let h=f;for(;h;)if(h=i(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,d._lpa=n.targetAnchor&&i(n.targetAnchor);break}p(f,n,d,s,o,l,r)}Bd(n)}return n.anchor&&i(n.anchor)}const _g=gg;function Bd(t){const n=t.ctx;if(n&&n.ut){let s=t.children[0].el;for(;s!==t.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Fe=Symbol.for("v-fgt"),Wo=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),Bl=Symbol.for("v-stc"),yo=[];let Kt=null;function v(t=!1){yo.push(Kt=t?null:[])}function bg(){yo.pop(),Kt=yo[yo.length-1]||null}let Fo=1;function wc(t){Fo+=t}function Cd(t){return t.dynamicChildren=Fo>0?Kt||Ms:null,bg(),Fo>0&&Kt&&Kt.push(t),t}function w(t,n,s,o,l,r){return Cd(e(t,n,s,o,l,r,!0))}function X(t,n,s,o,l){return Cd(T(t,n,s,o,l,!0))}function zn(t){return t?t.__v_isVNode===!0:!1}function os(t,n){return n.shapeFlag&6&&Ps.has(n.type)?(t.shapeFlag&=-257,n.shapeFlag&=-513,!1):t.type===n.type&&t.key===n.key}const Ag=(...t)=>Bg(...t),fr="__vInternal",Dd=({key:t})=>t??null,Cl=({ref:t,ref_key:n,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Se(t)||de(t)?{i:tt,r:t,k:n,f:!!s}:t:null);function e(t,n=null,s=null,o=0,l=null,r=t===Fe?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Dd(n),ref:n&&Cl(n),scopeId:cr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:tt};return a?(Ca(c,s),r&128&&t.normalize(c)):s&&(c.shapeFlag|=ze(s)?8:16),c.key!==c.key&&N("VNode created with invalid key (NaN). VNode type:",c.type),Fo>0&&!i&&Kt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Kt.push(c),c}const T=Ag;function Bg(t,n=null,s=null,o=0,l=null,r=!1){if((!t||t===Hm)&&(t||N(`Invalid vnode type when creating vnode: ${t}.`),t=vt),zn(t)){const a=un(t,n,!0);return s&&Ca(a,s),Fo>0&&!r&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(t)]=a:Kt.push(a)),a.patchFlag|=-2,a}if($d(t)&&(t=t.__vccOpts),n){n=Ce(n);let{class:a,style:c}=n;a&&!ze(a)&&(n.class=Le(a)),Oe(c)&&(Il(c)&&!le(c)&&(c=Ve({},c)),n.style=nt(c))}const i=ze(t)?1:sd(t)?128:mg(t)?64:Oe(t)?4:de(t)?2:0;return i&4&&Il(t)&&(t=ye(t),N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),e(t,n,s,o,l,i,r,!0)}function Ce(t){return t?Il(t)||fr in t?Ve({},t):t:null}function un(t,n,s=!1){const{props:o,ref:l,patchFlag:r,children:i}=t,a=n?ue(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dd(a),ref:n&&n.ref?s&&l?le(l)?l.concat(Cl(n)):[l,Cl(n)]:Cl(n):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&le(i)?i.map(wd):i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Fe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function wd(t){const n=un(t);return le(t.children)&&(n.children=t.children.map(wd)),n}function u(t=" ",n=0){return T(Wo,null,t,n)}function pe(t="",n=!1){return n?(v(),X(vt,null,t)):T(vt,null,t)}function Ut(t){return t==null||typeof t=="boolean"?T(vt):le(t)?T(Fe,null,t.slice()):typeof t=="object"?Fn(t):T(Wo,null,String(t))}function Fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function Ca(t,n){let s=0;const{shapeFlag:o}=t;if(n==null)n=null;else if(le(n))s=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),Ca(t,l()),l._c&&(l._d=!0));return}else{s=32;const l=n._;!l&&!(fr in n)?n._ctx=tt:l===3&&tt&&(tt.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else de(n)?(n={default:n,_ctx:tt},s=32):(n=String(n),o&64?(s=16,n=[u(n)]):s=8);t.children=n,t.shapeFlag|=s}function ue(...t){const n={};for(let s=0;s<t.length;s++){const o=t[s];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=Le([n.class,o.class]));else if(l==="style")n.style=nt([n.style,o.style]);else if(Vo(l)){const r=n[l],i=o[l];i&&r!==i&&!(le(r)&&r.includes(i))&&(n[l]=r?[].concat(r,i):i)}else l!==""&&(n[l]=o[l])}return n}function Lt(t,n,s,o=null){Rt(t,n,7,[s,o])}const Cg=yd();let Dg=0;function wg(t,n,s){const o=t.type,l=(n?n.appContext:t.appContext)||Cg,r={uid:Dg++,vnode:t,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gd(o,l),emitsOptions:td(o,l),emit:null,emitted:null,propsDefaults:He,inheritAttrs:o.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=qm(r),r.root=n?n.root:r,r.emit=Am.bind(null,r),t.ce&&t.ce(r),r}let et=null;const Ot=()=>et||tt;let Da,Fs,xc="__VUE_INSTANCE_SETTERS__";(Fs=Tl()[xc])||(Fs=Tl()[xc]=[]),Fs.push(t=>et=t),Da=t=>{Fs.length>1?Fs.forEach(n=>n(t)):Fs[0](t)};const Hs=t=>{Da(t),t.scope.on()},vs=()=>{et&&et.scope.off(),Da(null)},xg=Un("slot,component");function yi(t,n){const s=n.isNativeTag||bp;(xg(t)||s(t))&&N("Do not use built-in or reserved HTML elements as component id: "+t)}function xd(t){return t.vnode.shapeFlag&4}let To=!1;function kg(t,n=!1){To=n;const{props:s,children:o}=t.vnode,l=xd(t);tg(t,s,l,n),ug(t,o);const r=l?Eg(t,n):void 0;return To=!1,r}function Eg(t,n){var s;const o=t.type;{if(o.name&&yi(o.name,t.appContext.config),o.components){const r=Object.keys(o.components);for(let i=0;i<r.length;i++)yi(r[i],t.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let i=0;i<r.length;i++)ld(r[i])}o.compilerOptions&&$g()&&N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=lr(new Proxy(t.ctx,fd)),Vm(t);const{setup:l}=o;if(l){const r=t.setupContext=l.length>1?Ed(t):null;Hs(t),Cs();const i=_n(l,t,0,[io(t.props),r]);if(Ds(),vs(),sa(i)){if(i.then(vs,vs),n)return i.then(a=>{kc(t,a,n)}).catch(a=>{rr(a,t,0)});if(t.asyncDep=i,!t.suspense){const a=(s=o.name)!=null?s:"Anonymous";N(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else kc(t,i,n)}else kd(t,n)}function kc(t,n,s){de(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Oe(n)?(zn(n)&&N("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=n,t.setupState=Vp(n),zm(t)):n!==void 0&&N(`setup() should return an object. Received: ${n===null?"null":typeof n}`),kd(t,s)}let mi;const $g=()=>!mi;function kd(t,n,s){const o=t.type;if(!t.render){if(!n&&mi&&!o.render){const l=o.template||Aa(t).template;if(l){fn(t,"compile");const{isCustomElement:r,compilerOptions:i}=t.appContext.config,{delimiters:a,compilerOptions:c}=o,p=Ve(Ve({isCustomElement:r,delimiters:a},i),c);o.render=mi(l,p),hn(t,"compile")}}t.render=o.render||Dt}Hs(t),Cs(),Km(t),Ds(),vs(),!o.render&&t.render===Dt&&!n&&(o.template?N('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):N("Component is missing template or render function."))}function Fg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(n,s){return Ll(),pt(t,"get","$attrs"),n[s]},set(){return N("setupContext.attrs is readonly."),!1},deleteProperty(){return N("setupContext.attrs is readonly."),!1}}))}function Tg(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(n,s){return pt(t,"get","$slots"),n[s]}}))}function Ed(t){return Object.freeze({get attrs(){return Fg(t)},get slots(){return Tg(t)},get emit(){return(s,...o)=>t.emit(s,...o)},expose:s=>{if(t.exposed&&N("expose() should be called only once per setup()."),s!=null){let o=typeof s;o==="object"&&(le(s)?o="array":Se(s)&&(o="ref")),o!=="object"&&N(`expose() should be passed a plain object, received ${o}.`)}t.exposed=s||{}}})}function hr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vp(lr(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in gs)return gs[s](t)},has(n,s){return s in n||s in gs}}))}const Sg=/(?:^|[-_])(\w)/g,Og=t=>t.replace(Sg,n=>n.toUpperCase()).replace(/[-_]/g,"");function So(t,n=!0){return de(t)?t.displayName||t.name:t.name||n&&t.__name}function yr(t,n,s=!1){let o=So(n);if(!o&&n.__file){const l=n.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&t&&t.parent){const l=r=>{for(const i in r)if(r[i]===n)return i};o=l(t.components||t.parent.type.components)||l(t.appContext.components)}return o?Og(o):s?"App":"Anonymous"}function $d(t){return de(t)&&"__vccOpts"in t}const S=(t,n)=>Xy(t,n,To);function _t(t,n,s){const o=arguments.length;return o===2?Oe(n)&&!le(n)?zn(n)?T(t,null,[n]):T(t,n):T(t,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&zn(s)&&(s=[s]),T(t,n,s))}const Pg=Symbol.for("v-scx"),Ig=()=>{{const t=q(Pg);return t||N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function xr(t){return!!(t&&t.__v_isShallow)}function Mg(){if(typeof window>"u")return;const t={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(f){return Oe(f)?f.__isVue?["div",t,"VueInstance"]:Se(f)?["div",{},["span",t,d(f)],"<",a(f.value),">"]:ys(f)?["div",{},["span",t,xr(f)?"ShallowReactive":"Reactive"],"<",a(f),`>${Vn(f)?" (readonly)":""}`]:Vn(f)?["div",{},["span",t,xr(f)?"ShallowReadonly":"Readonly"],"<",a(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...r(f.$)]}};function r(f){const h=[];f.type.props&&f.props&&h.push(i("props",ye(f.props))),f.setupState!==He&&h.push(i("setup",f.setupState)),f.data!==He&&h.push(i("data",ye(f.data)));const y=c(f,"computed");y&&h.push(i("computed",y));const m=c(f,"inject");return m&&h.push(i("injected",m)),h.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),h}function i(f,h){return h=Ve({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(y=>["div",{},["span",o,y+": "],a(h[y],!1)])]]:["span",{}]}function a(f,h=!0){return typeof f=="number"?["span",n,f]:typeof f=="string"?["span",s,JSON.stringify(f)]:typeof f=="boolean"?["span",o,f]:Oe(f)?["object",{object:h?ye(f):f}]:["span",s,String(f)]}function c(f,h){const y=f.type;if(de(y))return;const m={};for(const A in f.ctx)p(y,A,h)&&(m[A]=f.ctx[A]);return m}function p(f,h,y){const m=f[y];if(le(m)&&m.includes(h)||Oe(m)&&h in m||f.extends&&p(f.extends,h,y)||f.mixins&&f.mixins.some(A=>p(A,h,y)))return!0}function d(f){return xr(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Vl="3.3.4",Lg="http://www.w3.org/2000/svg",ls=typeof document<"u"?document:null,Ec=ls&&ls.createElement("template"),jg={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,o)=>{const l=n?ls.createElementNS(Lg,t):ls.createElement(t,s?{is:s}:void 0);return t==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:t=>ls.createTextNode(t),createComment:t=>ls.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ls.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,s,o,l,r){const i=s?s.previousSibling:n.lastChild;if(l&&(l===r||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{Ec.innerHTML=o?`<svg>${t}</svg>`:t;const a=Ec.content;if(o){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}n.insertBefore(a,s)}return[i?i.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Ng(t,n,s){const o=t._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}function Rg(t,n,s){const o=t.style,l=ze(s);if(s&&!l){if(n&&!ze(n))for(const r in n)s[r]==null&&gi(o,r,"");for(const r in s)gi(o,r,s[r])}else{const r=o.display;l?n!==s&&(o.cssText=s):n&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const Hg=/[^\\];\s*$/,$c=/\s*!important$/;function gi(t,n,s){if(le(s))s.forEach(o=>gi(t,n,o));else if(s==null&&(s=""),Hg.test(s)&&N(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))t.setProperty(n,s);else{const o=qg(t,n);$c.test(s)?t.setProperty(An(o),s.replace($c,""),"important"):t[o]=s}}const Fc=["Webkit","Moz","ms"],kr={};function qg(t,n){const s=kr[n];if(s)return s;let o=rn(n);if(o!=="filter"&&o in t)return kr[n]=o;o=As(o);for(let l=0;l<Fc.length;l++){const r=Fc[l]+o;if(r in t)return kr[n]=r}return n}const Tc="http://www.w3.org/1999/xlink";function Vg(t,n,s,o,l){if(o&&n.startsWith("xlink:"))s==null?t.removeAttributeNS(Tc,n.slice(6,n.length)):t.setAttributeNS(Tc,n,s);else{const r=fy(n);s==null||r&&!wp(s)?t.removeAttribute(n):t.setAttribute(n,r?"":s)}}function zg(t,n,s,o,l,r,i){if(n==="innerHTML"||n==="textContent"){o&&i(o,l,r),t[n]=s??"";return}const a=t.tagName;if(n==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=s;const p=a==="OPTION"?t.getAttribute("value"):t.value,d=s??"";p!==d&&(t.value=d),s==null&&t.removeAttribute(n);return}let c=!1;if(s===""||s==null){const p=typeof t[n];p==="boolean"?s=wp(s):s==null&&p==="string"?(s="",c=!0):p==="number"&&(s=0,c=!0)}try{t[n]=s}catch(p){c||N(`Failed setting prop "${n}" on <${a.toLowerCase()}>: value ${s} is invalid.`,p)}c&&t.removeAttribute(n)}function Gg(t,n,s,o){t.addEventListener(n,s,o)}function Ug(t,n,s,o){t.removeEventListener(n,s,o)}function Wg(t,n,s,o,l=null){const r=t._vei||(t._vei={}),i=r[n];if(o&&i)i.value=o;else{const[a,c]=Kg(n);if(o){const p=r[n]=Qg(o,l);Gg(t,a,p,c)}else i&&(Ug(t,a,i,c),r[n]=void 0)}}const Sc=/(?:Once|Passive|Capture)$/;function Kg(t){let n;if(Sc.test(t)){n={};let o;for(;o=t.match(Sc);)t=t.slice(0,t.length-o[0].length),n[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):An(t.slice(2)),n]}let Er=0;const Yg=Promise.resolve(),Zg=()=>Er||(Yg.then(()=>Er=0),Er=Date.now());function Qg(t,n){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Rt(Jg(o,s.value),n,5,[o])};return s.value=t,s.attached=Zg(),s}function Jg(t,n){if(le(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const Oc=/^on[a-z]/,Xg=(t,n,s,o,l=!1,r,i,a,c)=>{n==="class"?Ng(t,o,l):n==="style"?Rg(t,s,o):Vo(n)?$l(n)||Wg(t,n,s,o,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):ev(t,n,o,l))?zg(t,n,o,r,i,a,c):(n==="true-value"?t._trueValue=o:n==="false-value"&&(t._falseValue=o),Vg(t,n,o,l))};function ev(t,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in t&&Oc.test(n)&&de(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||Oc.test(n)&&ze(s)?!1:n in t}const xn="transition",Ys="animation",Fd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tv=Ve({},Fm,Fd),Jn=(t,n=[])=>{le(t)?t.forEach(s=>s(...n)):t&&t(...n)},Pc=t=>t?le(t)?t.some(n=>n.length>1):t.length>1:!1;function nv(t){const n={};for(const W in t)W in Fd||(n[W]=t[W]);if(t.css===!1)return n;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:i=`${s}-enter-active`,enterToClass:a=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:p=i,appearToClass:d=a,leaveFromClass:f=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:y=`${s}-leave-to`}=t,m=sv(l),A=m&&m[0],B=m&&m[1],{onBeforeEnter:C,onEnter:D,onEnterCancelled:b,onLeave:x,onLeaveCancelled:k,onBeforeAppear:F=C,onAppear:j=D,onAppearCancelled:P=b}=n,H=(W,me,ve)=>{En(W,me?d:a),En(W,me?p:i),ve&&ve()},ne=(W,me)=>{W._isLeaving=!1,En(W,f),En(W,y),En(W,h),me&&me()},ce=W=>(me,ve)=>{const Ae=W?j:D,je=()=>H(me,W,ve);Jn(Ae,[me,je]),Ic(()=>{En(me,W?c:r),yn(me,W?d:a),Pc(Ae)||Mc(me,o,A,je)})};return Ve(n,{onBeforeEnter(W){Jn(C,[W]),yn(W,r),yn(W,i)},onBeforeAppear(W){Jn(F,[W]),yn(W,c),yn(W,p)},onEnter:ce(!1),onAppear:ce(!0),onLeave(W,me){W._isLeaving=!0;const ve=()=>ne(W,me);yn(W,f),Sd(),yn(W,h),Ic(()=>{W._isLeaving&&(En(W,f),yn(W,y),Pc(x)||Mc(W,o,B,ve))}),Jn(x,[W,ve])},onEnterCancelled(W){H(W,!1),Jn(b,[W])},onAppearCancelled(W){H(W,!0),Jn(P,[W])},onLeaveCancelled(W){ne(W),Jn(k,[W])}})}function sv(t){if(t==null)return null;if(Oe(t))return[$r(t.enter),$r(t.leave)];{const n=$r(t);return[n,n]}}function $r(t){const n=oy(t);return om(n,"<transition> explicit duration"),n}function yn(t,n){n.split(/\s+/).forEach(s=>s&&t.classList.add(s)),(t._vtc||(t._vtc=new Set)).add(n)}function En(t,n){n.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const{_vtc:s}=t;s&&(s.delete(n),s.size||(t._vtc=void 0))}function Ic(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ov=0;function Mc(t,n,s,o){const l=t._endId=++ov,r=()=>{l===t._endId&&o()};if(s)return setTimeout(r,s);const{type:i,timeout:a,propCount:c}=Td(t,n);if(!i)return o();const p=i+"end";let d=0;const f=()=>{t.removeEventListener(p,h),r()},h=y=>{y.target===t&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},a+1),t.addEventListener(p,h)}function Td(t,n){const s=window.getComputedStyle(t),o=m=>(s[m]||"").split(", "),l=o(`${xn}Delay`),r=o(`${xn}Duration`),i=Lc(l,r),a=o(`${Ys}Delay`),c=o(`${Ys}Duration`),p=Lc(a,c);let d=null,f=0,h=0;n===xn?i>0&&(d=xn,f=i,h=r.length):n===Ys?p>0&&(d=Ys,f=p,h=c.length):(f=Math.max(i,p),d=f>0?i>p?xn:Ys:null,h=d?d===xn?r.length:c.length:0);const y=d===xn&&/\b(transform|all)(,|$)/.test(o(`${xn}Property`).toString());return{type:d,timeout:f,propCount:h,hasTransform:y}}function Lc(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max(...n.map((s,o)=>jc(s)+jc(t[o])))}function jc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Sd(){return document.body.offsetHeight}const Od=new WeakMap,Pd=new WeakMap,Id={name:"TransitionGroup",props:Ve({},tv,{tag:String,moveClass:String}),setup(t,{slots:n}){const s=Ot(),o=$m();let l,r;return pr(()=>{if(!l.length)return;const i=t.moveClass||`${t.name||"v"}-move`;if(!uv(l[0].el,s.vnode.el,i))return;l.forEach(iv),l.forEach(av);const a=l.filter(cv);Sd(),a.forEach(c=>{const p=c.el,d=p.style;yn(p,i),d.transform=d.webkitTransform=d.transitionDuration="";const f=p._moveCb=h=>{h&&h.target!==p||(!h||/transform$/.test(h.propertyName))&&(p.removeEventListener("transitionend",f),p._moveCb=null,En(p,i))};p.addEventListener("transitionend",f)})}),()=>{const i=ye(t),a=nv(i);let c=i.tag||Fe;l=r,r=n.default?rd(n.default()):[];for(let p=0;p<r.length;p++){const d=r[p];d.key!=null?jl(d,ri(d,a,o,s)):N("<TransitionGroup> children must be keyed.")}if(l)for(let p=0;p<l.length;p++){const d=l[p];jl(d,ri(d,a,o,s)),Od.set(d,d.el.getBoundingClientRect())}return T(c,null,r)}}},lv=t=>delete t.mode;Id.props;const rv=Id;function iv(t){const n=t.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function av(t){Pd.set(t,t.el.getBoundingClientRect())}function cv(t){const n=Od.get(t),s=Pd.get(t),o=n.left-s.left,l=n.top-s.top;if(o||l){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",t}}function uv(t,n,s){const o=t.cloneNode();t._vtc&&t._vtc.forEach(i=>{i.split(/\s+/).forEach(a=>a&&o.classList.remove(a))}),s.split(/\s+/).forEach(i=>i&&o.classList.add(i)),o.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(o);const{hasTransform:r}=Td(o);return l.removeChild(o),r}const pv=["ctrl","shift","alt","meta"],dv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,n)=>pv.some(s=>t[`${s}Key`]&&!n.includes(s))},fv=(t,n)=>(s,...o)=>{for(let l=0;l<n.length;l++){const r=dv[n[l]];if(r&&r(s,n))return}return t(s,...o)},hv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},al=(t,n)=>s=>{if(!("key"in s))return;const o=An(s.key);if(n.some(l=>l===o||hv[l]===o))return t(s)},Md={beforeMount(t,{value:n},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&n?s.beforeEnter(t):Zs(t,n)},mounted(t,{value:n},{transition:s}){s&&n&&s.enter(t)},updated(t,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(t),Zs(t,!0),o.enter(t)):o.leave(t,()=>{Zs(t,!1)}):Zs(t,n))},beforeUnmount(t,{value:n}){Zs(t,n)}};function Zs(t,n){t.style.display=n?t._vod:"none"}const yv=Ve({patchProp:Xg},jg);let Nc;function mv(){return Nc||(Nc=fg(yv))}const gv=(...t)=>{const n=mv().createApp(...t);vv(n),_v(n);const{mount:s}=n;return n.mount=o=>{const l=bv(o);if(!l)return;const r=n._component;!de(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const i=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},n};function vv(t){Object.defineProperty(t.config,"isNativeTag",{value:n=>Dp(n)||py(n),writable:!1})}function _v(t){{const n=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return n},set(){N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=t.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return N(o),s},set(){N(o)}})}}function bv(t){if(ze(t)){const n=document.querySelector(t);return n||N(`Failed to mount app: mount target selector "${t}" returned null.`),n}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function Av(){Mg()}Av();function vi(t,n={},s){for(const o in t){const l=t[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?vi(l,n,r):typeof l=="function"&&(n[r]=l)}return n}const Bv={run:t=>t()},Cv=()=>Bv,Ld=typeof console.createTask<"u"?console.createTask:Cv;function Dv(t,n){const s=n.shift(),o=Ld(s);return t.reduce((l,r)=>l.then(()=>o.run(()=>r(...n))),Promise.resolve())}function wv(t,n){const s=n.shift(),o=Ld(s);return Promise.all(t.map(l=>o.run(()=>l(...n))))}function Fr(t,n){for(const s of[...t])s(n)}class xv{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,s,o={}){if(!n||typeof s!="function")return()=>{};const l=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!o.allowDeprecated){let i=r.message;i||(i=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(s),()=>{s&&(this.removeHook(n,s),s=void 0)}}hookOnce(n,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(n,l),o}removeHook(n,s){if(this._hooks[n]){const o=this._hooks[n].indexOf(s);o!==-1&&this._hooks[n].splice(o,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,s){this._deprecatedHooks[n]=typeof s=="string"?{to:s}:s;const o=this._hooks[n]||[];delete this._hooks[n];for(const l of o)this.hook(n,l)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const s in n)this.deprecateHook(s,n[s])}addHooks(n){const s=vi(n),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(n){const s=vi(n);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...s){return s.unshift(n),this.callHookWith(Dv,n,...s)}callHookParallel(n,...s){return s.unshift(n),this.callHookWith(wv,n,...s)}callHookWith(n,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&Fr(this._before,l);const r=n(s in this._hooks?[...this._hooks[s]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&Fr(this._after,l)}):(this._after&&l&&Fr(this._after,l),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const s=this._before.indexOf(n);s!==-1&&this._before.splice(s,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const s=this._after.indexOf(n);s!==-1&&this._after.splice(s,1)}}}}function kv(){return new xv}function Ev(t){return Array.isArray(t)?t:[t]}const jd=["title","script","style","noscript"],Nd=["base","meta","link","style","script","noscript"],$v=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Fv=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Tv=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Rd(t){let n=9;for(let s=0;s<t.length;)n=Math.imul(n^t.charCodeAt(s++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function _i(t){return Rd(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`)}function Sv(t){let n=9;for(const s of t)for(let o=0;o<s.length;)n=Math.imul(n^s.charCodeAt(o++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Hd(t,n){const{props:s,tag:o}=t;if(Fv.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const i=String(s[r]);return n&&!n(i)?!1:`${o}:${r}:${i}`}return!1}function Rc(t,n){return t==null?n||null:typeof t=="function"?t(n):t}function cl(t,n=!1,s){const{tag:o,$el:l}=t;l&&(Object.entries(o.props).forEach(([r,i])=>{i=String(i);const a=`attr:${r}`;if(r==="class"){if(!i)return;for(const c of i.split(" ")){const p=`${a}:${c}`;s&&s(t,p,()=>l.classList.remove(c)),l.classList.contains(c)||l.classList.add(c)}return}s&&!r.startsWith("data-h-")&&s(t,a,()=>l.removeAttribute(r)),(n||l.getAttribute(r)!==i)&&l.setAttribute(r,i)}),jd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))}let Qs=!1;async function qd(t,n={}){var h,y;const s={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=n.document||t.resolvedOptions.document||window.document,l=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(Qs=Qs||t._hash||!1,Qs)){const m=Sv(l.map(A=>A.tag._h));if(Qs===m)return;Qs=m}const r=t._popSideEffectQueue();t.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([A,B])=>{r[A]=B})});const i=(m,A,B)=>{A=`${m.renderId}:${A}`,m.entry&&(m.entry._sde[A]=B),delete r[A]};function a(m){const A=t.headEntries().find(C=>C._i===m._e),B={renderId:m._d||_i(m),$el:null,shouldRender:!0,tag:m,entry:A,markSideEffect:(C,D)=>i(B,C,D)};return B}const c=[],p={body:[],head:[]},d=m=>{t._elMap[m.renderId]=m.$el,c.push(m),i(m,"el",()=>{var A;(A=m.$el)==null||A.remove(),delete t._elMap[m.renderId]})};for(const m of l){if(await t.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:A}=m;if(A.tag==="title"){o.title=A.textContent||"",c.push(m);continue}if(A.tag==="htmlAttrs"||A.tag==="bodyAttrs"){m.$el=o[A.tag==="htmlAttrs"?"documentElement":"body"],cl(m,!1,i),c.push(m);continue}if(m.$el=t._elMap[m.renderId],!m.$el&&A.key&&(m.$el=o.querySelector(`${(h=A.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${A.tag}[data-h-${A._h}]`)),m.$el){m.tag._d&&cl(m),d(m);continue}p[(y=A.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(m)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([m,A])=>{var C;if(!A.length)return;const B=(C=o==null?void 0:o[m])==null?void 0:C.children;if(B){for(const D of[...B].reverse()){const b=D.tagName.toLowerCase();if(!Nd.includes(b))continue;const x=D.getAttributeNames().reduce((P,H)=>({...P,[H]:D.getAttribute(H)}),{}),k={tag:b,props:x};D.innerHTML&&(k.innerHTML=D.innerHTML);const F=_i(k);let j=A.findIndex(P=>(P==null?void 0:P.renderId)===F);if(j===-1){const P=Hd(k);j=A.findIndex(H=>(H==null?void 0:H.tag._d)&&H.tag._d===P)}if(j!==-1){const P=A[j];P.$el=D,cl(P),d(P),delete A[j]}}A.forEach(D=>{const b=D.tag.tagPosition||"head";f[b]=f[b]||o.createDocumentFragment(),D.$el||(D.$el=o.createElement(D.tag.tag),cl(D,!0)),f[b].appendChild(D.$el),d(D)})}}),f.head&&o.head.appendChild(f.head),f.bodyOpen&&o.body.insertBefore(f.bodyOpen,o.body.firstChild),f.bodyClose&&o.body.appendChild(f.bodyClose);for(const m of c)await t.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let Tr=null;async function Vd(t,n={}){function s(){return Tr=null,qd(t,n)}const o=n.delayFn||(l=>setTimeout(l,10));return Tr=Tr||new Promise(l=>o(()=>l(s())))}function Ov(t){return{hooks:{"entries:updated":function(n){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let s=t==null?void 0:t.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),Vd(n,{document:(t==null?void 0:t.document)||window.document,delayFn:s})}}}}function Pv(t){var n;return((n=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const Hc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function qc(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const n=t.tagPriority||t.tag;return n in Hc?Hc[n]:10}const Iv=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Mv(){return{hooks:{"tags:resolve":t=>{const n=s=>{var o;return(o=t.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of Iv)for(const l of t.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=n(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}t.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>qc(s)-qc(o))}}}}function Lv(){return{hooks:{"tags:resolve":t=>{const{tags:n}=t;let s=n.findIndex(l=>l.tag==="titleTemplate");const o=n.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=Rc(n[s].textContent,n[o].textContent);l!==null?n[o].textContent=l||n[o].textContent:delete n[o]}else if(s!==-1){const l=Rc(n[s].textContent);l!==null&&(n[s].textContent=l,n[s].tag="title",s=-1)}s!==-1&&delete n[s],t.tags=n.filter(Boolean)}}}}function jv(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const Nv=["link","style","script","noscript"];function Rv(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:n})=>{n.experimentalHashHydration===!0&&(t._h=_i(t)),t.key&&Nv.includes(t.tag)&&(t._h=Rd(t.key),t.props[`data-h-${t._h}`]="")}}}}const Vc=["script","link","bodyAttrs"];function Hv(){const t=(n,s)=>{const o={},l={};Object.entries(s.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?l[i]=a:o[i]=a});let r;return n==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(s=>(!Vc.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=t("ssr",s).props),s))},"dom:beforeRenderTag":function(n){if(!Vc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([r,i])=>r.startsWith("on")&&typeof i=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=t("dom",n.tag);Object.keys(o).length&&(n.tag.props=s,n.tag._eventHandlers=o,n.tag._delayedSrc=l)},"dom:renderTag":function(n){const s=n.$el;if(!n.tag._eventHandlers||!s)return;const o=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(n.tag._eventHandlers).forEach(([l,r])=>{const i=`${n.tag._d||n.tag._p}:${l}`,a=l.slice(2).toLowerCase(),c=`data-h-${a}`;if(n.markSideEffect(i,()=>{}),s.hasAttribute(c))return;const p=r;s.setAttribute(c,""),o.addEventListener(a,p),n.entry&&(n.entry._sde[i]=()=>{o.removeEventListener(a,p),s.removeAttribute(c)})}),n.tag._delayedSrc&&s.setAttribute("src",n.tag._delayedSrc)}}}}const qv=["templateParams","htmlAttrs","bodyAttrs"];function Vv(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(o=>{t.props[o]&&(t.key=t.props[o],delete t.props[o])});const s=Hd(t)||(t.key?`${t.tag}:${t.key}`:!1);s&&(t._d=s)},"tags:resolve":function(t){const n={};t.tags.forEach(o=>{const l=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,r=n[l];if(r){let a=o==null?void 0:o.tagDuplicateStrategy;if(!a&&qv.includes(o.tag)&&(a="merge"),a==="merge"){const c=r.props;["class","style"].forEach(p=>{o.props[p]&&c[p]&&(p==="style"&&!c[p].endsWith(";")&&(c[p]+=";"),o.props[p]=`${c[p]} ${o.props[p]}`)}),n[l].props={...c,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}}const i=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Nd.includes(o.tag)&&i===0){delete n[l];return}n[l]=o});const s=[];Object.values(n).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),t.tags=s}}}}function ul(t,n){function s(r){if(["s","pageTitle"].includes(r))return n.pageTitle;let i;return r.includes(".")?i=r.split(".").reduce((a,c)=>a&&a[c]||void 0,n):i=n[r],typeof i<"u"?i||"":!1}let o=t;try{o=decodeURI(t)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const i=s(r.slice(1));typeof i=="string"&&(t=t.replace(new RegExp(`\\${r}(\\W|$)`,"g"),`${i}$1`).trim())}),n.separator&&(t.endsWith(n.separator)&&(t=t.slice(0,-n.separator.length).trim()),t.startsWith(n.separator)&&(t=t.slice(n.separator.length).trim()),t=t.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),t}function zv(){return{hooks:{"tags:resolve":t=>{var r;const{tags:n}=t,s=(r=n.find(i=>i.tag==="title"))==null?void 0:r.textContent,o=n.findIndex(i=>i.tag==="templateParams"),l=o!==-1?n[o].props:{};l.pageTitle=l.pageTitle||s||"";for(const i of n)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=ul(i.textContent,l);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=ul(i.props.content,l);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=ul(i.props.href,l);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(a,c)=>typeof c=="string"?ul(c,l):c)}catch{}t.tags=n.filter(i=>i.tag!=="templateParams")}}}}const Gv=typeof window<"u";let zd;function Uv(t){return zd=t}function Wv(){return zd}async function Kv(t,n){const s={tag:t,props:{}};return t==="templateParams"?(s.props=n,s):["title","titleTemplate"].includes(t)?(s.textContent=n instanceof Promise?await n:n,s):typeof n=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?s.props.src=n:s.innerHTML=n,s):!1:(s.props=await Zv(t,{...n}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>Tv.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||jd.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=Yv(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function Yv(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(n=>t[n])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function Zv(t,n){for(const s of Object.keys(n)){const o=s.startsWith("data-");n[s]instanceof Promise&&(n[s]=await n[s]),String(n[s])==="true"?n[s]=o?"true":"":String(n[s])==="false"&&(o?n[s]="false":delete n[s])}return n}const Qv=10;async function Jv(t){const n=[];return Object.entries(t.resolvedInput).filter(([s,o])=>typeof o<"u"&&$v.includes(s)).forEach(([s,o])=>{const l=Ev(o);n.push(...l.map(r=>Kv(s,r)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((s,o)=>(s._e=t._i,s._p=(t._i<<Qv)+o,s))}function Xv(){return[Vv(),Mv(),zv(),Lv(),Rv(),Hv(),jv()]}function e_(t={}){return[Ov({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function t_(t={}){const n=n_({...t,plugins:[...e_(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=Pv(n.resolvedOptions.document)),Uv(n),n}function n_(t={}){let n=[],s={},o=0;const l=kv();t!=null&&t.hooks&&l.addHooks(t.hooks),t.plugins=[...Xv(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&l.addHooks(a.hooks)),t.document=t.document||(Gv?document:void 0);const r=()=>l.callHook("entries:updated",i),i={resolvedOptions:t,headEntries(){return n},get hooks(){return l},use(a){a.hooks&&l.addHooks(a.hooks)},push(a,c){const p={_i:o++,input:a,_sde:{}};return c!=null&&c.mode&&(p._m=c==null?void 0:c.mode),c!=null&&c.transform&&(p._t=c==null?void 0:c.transform),n.push(p),r(),{dispose(){n=n.filter(d=>d._i!==p._i?!0:(s={...s,...d._sde||{}},d._sde={},r(),!1))},patch(d){n=n.map(f=>(f._i===p._i&&(p.input=f.input=d,r()),f))}}},async resolveTags(){const a={tags:[],entries:[...n]};await l.callHook("entries:resolve",a);for(const c of a.entries){const p=c._t||(d=>d);if(c.resolvedInput=p(c.resolvedInput||c.input),c.resolvedInput)for(const d of await Jv(c)){const f={tag:d,entry:c,resolvedOptions:i.resolvedOptions};await l.callHook("tag:normalise",f),a.tags.push(f.tag)}}return await l.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...s};return s={},a},_elMap:{}};return i.hooks.callHook("init",i),i}function s_(t){return typeof t=="function"?t():$(t)}function zl(t,n=""){if(t instanceof Promise)return t;const s=s_(t);return!t||!s?s:Array.isArray(s)?s.map(o=>zl(o,n)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,$(l)]:[o,zl(l,o)])):s}const o_=Vl.startsWith("3"),l_=typeof window<"u",Gd="usehead";function wa(){return Ot()&&q(Gd)||Wv()}function r_(t){return{install(s){o_&&(s.config.globalProperties.$unhead=t,s.config.globalProperties.$head=t,s.provide(Gd,t))}}.install}function i_(t={}){const n=t_({...t,domDelayFn:s=>setTimeout(()=>at(()=>s()),10),plugins:[a_(),...(t==null?void 0:t.plugins)||[]]});return n.install=r_(n),n}function a_(){return{hooks:{"entries:resolve":function(t){for(const n of t.entries)n.resolvedInput=zl(n.input)}}}}function c_(t,n={}){const s=wa(),o=U(!1),l=U({});ws(()=>{l.value=o.value?{}:zl(t)});const r=s.push(l.value,n);return ge(l,a=>{r.patch(a)}),Ot()&&(Uo(()=>{r.dispose()}),cd(()=>{o.value=!0}),ad(()=>{o.value=!1})),r}function u_(t,n={}){return wa().push(t,n)}function Ud(t,n={}){var o;const s=wa();if(s){const l=l_||!!((o=s.resolvedOptions)!=null&&o.document);return n.mode==="server"&&l||n.mode==="client"&&!l?void 0:l?c_(t,n):u_(t,n)}}function p_(t,n){const s=i_(n||{}),o={unhead:s,install(l){Vl.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const i=Ud(l,r);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?qd(s,{document:l}):Vd(s,{delayFn:i=>setTimeout(()=>i(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),t&&o.addHeadObjs(t),o}const mo=Symbol("v-click-clicks"),rs=Symbol("v-click-clicks-elements"),bi=Symbol("v-click-clicks-order-map"),go=Symbol("v-click-clicks-disabled"),Wd=Symbol("slidev-slide-scale"),K=Symbol("slidev-slidev-context"),d_=Symbol("slidev-route"),f_=Symbol("slidev-slide-context"),ns="slidev-vclick-target",Sr="slidev-vclick-hidden",h_="slidev-vclick-fade",Or="slidev-vclick-hidden-explicitly",Js="slidev-vclick-current",pl="slidev-vclick-prior",y_=["localhost","127.0.0.1"];let m_=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");function g_(t){return t=t??[],Array.isArray(t)?t:[t]}function Ai(t,n){if(!t)return!1;const s=t.indexOf(n);return s>=0?(t.splice(s,1),!0):!1}function v_(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function __(t){return t!=null}function b_(t,n){return Object.fromEntries(Object.entries(t).map(([s,o])=>n(s,o)).filter(__))}const po={theme:"academic",title:"Functional Programming",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},fonts:{sans:['"Montserrat"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Roboto Slab"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Roboto Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Montserrat","Roboto Slab","Roboto Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},hightlighter:"prism",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap2/cover.png",class:"text-white",coverDate:null,hideInToc:!0},Te=po,Mn=Te.aspectRatio??16/9,Ln=Te.canvasWidth??980,xa=Math.ceil(Ln/Mn),ka=S(()=>b_(Te.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function Kd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function qt(t,n,s){Object.defineProperty(t,n,{value:s,writable:!0,enumerable:!1})}const ks=Ue({page:0,clicks:0});let A_=[],B_=[];qt(ks,"$syncUp",!0);qt(ks,"$syncDown",!0);qt(ks,"$paused",!1);qt(ks,"$onSet",t=>A_.push(t));qt(ks,"$onPatch",t=>B_.push(t));Kd();qt(ks,"$patch",async()=>!1);function Yd(t,n,s=!1){const o=[];let l=!1,r=!1,i,a;const c=Ue(n);function p(y){o.push(y)}function d(y,m){c[y]!==m&&(clearTimeout(i),l=!0,c[y]=m,i=setTimeout(()=>l=!1,0))}function f(y){l||(clearTimeout(a),r=!0,Object.entries(y).forEach(([m,A])=>{c[m]=A}),a=setTimeout(()=>r=!1,0))}function h(y){let m;s?s&&window.addEventListener("storage",B=>{B&&B.key===y&&B.newValue&&f(JSON.parse(B.newValue))}):(m=new BroadcastChannel(y),m.addEventListener("message",B=>f(B.data)));function A(){!s&&m&&!r?m.postMessage(ye(c)):s&&!r&&window.localStorage.setItem(y,JSON.stringify(c)),l||o.forEach(B=>B(c))}if(ge(c,A,{deep:!0,flush:"sync"}),s){const B=window.localStorage.getItem(y);B&&f(JSON.parse(B))}}return{init:h,onPatch:p,patch:d,state:c}}const{init:C_,onPatch:D_,patch:Xs,state:Pr}=Yd(ks,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Es=Ue({});let w_=[],x_=[];qt(Es,"$syncUp",!0);qt(Es,"$syncDown",!0);qt(Es,"$paused",!1);qt(Es,"$onSet",t=>w_.push(t));qt(Es,"$onPatch",t=>x_.push(t));Kd();qt(Es,"$patch",async()=>!1);const{init:k_,onPatch:E_,patch:Zd,state:Gl}=Yd(Es,{},!1),$_="modulepreload",F_=function(t){return"/courses/data-structure/functional-programming/"+t},zc={},jn=function(n,s,o){if(!s||s.length===0)return n();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=F_(r),r in zc)return;zc[r]=!0;const i=r.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const f=l[d];if(f.href===r&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const p=document.createElement("link");if(p.rel=i?"stylesheet":$_,i||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),i)return new Promise((d,f)=>{p.addEventListener("load",d),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};function T_(t,n){let s,o,l;const r=U(!0),i=()=>{r.value=!0,l()};ge(t,i,{flush:"sync"});const a=typeof n=="function"?n:n.get,c=typeof n=="function"?void 0:n.set,p=fa((d,f)=>(o=d,l=f,{get(){return r.value&&(s=a(),r.value=!1),o(),s},set(h){c==null||c(h)}}));return Object.isExtensible(p)&&(p.trigger=i),p}function pn(t){return ra()?(Ep(t),!0):!1}function Ze(t){return typeof t=="function"?t():$(t)}function S_(t){if(!Se(t))return Ue(t);const n=new Proxy({},{get(s,o,l){return $(Reflect.get(t.value,o,l))},set(s,o,l){return Se(t.value[o])&&!Se(l)?t.value[o].value=l:t.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(t.value,o)},has(s,o){return Reflect.has(t.value,o)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ue(n)}const Yt=typeof window<"u",O_=t=>typeof t<"u",P_=t=>t!=null,I_=Object.prototype.toString,Bi=t=>I_.call(t)==="[object Object]",Ci=()=>+Date.now(),_s=()=>{},M_=L_();function L_(){var t;return Yt&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function j_(t,n){function s(...o){return new Promise((l,r)=>{Promise.resolve(t(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(l).catch(r)})}return s}const Qd=t=>t();function N_(t=Qd){const n=U(!0);function s(){n.value=!1}function o(){n.value=!0}const l=(...r)=>{n.value&&t(...r)};return{isActive:Wt(n),pause:s,resume:o,eventFilter:l}}function R_(t,n){var s;if(typeof t=="number")return t+n;const o=((s=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=t.slice(o.length),r=Number.parseFloat(o)+n;return Number.isNaN(r)?t:r+l}function Jd(...t){if(t.length!==1)return Qy(...t);const n=t[0];return typeof n=="function"?Wt(fa(()=>({get:n,set:_s}))):U(n)}var H_=Object.defineProperty,q_=Object.defineProperties,V_=Object.getOwnPropertyDescriptors,Gc=Object.getOwnPropertySymbols,z_=Object.prototype.hasOwnProperty,G_=Object.prototype.propertyIsEnumerable,Uc=(t,n,s)=>n in t?H_(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,U_=(t,n)=>{for(var s in n||(n={}))z_.call(n,s)&&Uc(t,s,n[s]);if(Gc)for(var s of Gc(n))G_.call(n,s)&&Uc(t,s,n[s]);return t},W_=(t,n)=>q_(t,V_(n));function K_(t){if(!Se(t))return Ky(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const s in t.value)n[s]=fa(()=>({get(){return t.value[s]},set(o){if(Array.isArray(t.value)){const l=[...t.value];l[s]=o,t.value=l}else{const l=W_(U_({},t.value),{[s]:o});Object.setPrototypeOf(l,t.value),t.value=l}}}));return n}function Xd(t,n=!0){Ot()?Wn(t):n?t():at(t)}function Y_(t){Ot()&&dr(t)}function Z_(t,n=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const i=U(!1);function a(){r&&(clearInterval(r),r=null)}function c(){i.value=!1,a()}function p(){const d=Ze(n);d<=0||(i.value=!0,l&&t(),a(),r=setInterval(t,d))}if(o&&Yt&&p(),Se(n)||typeof n=="function"){const d=ge(n,()=>{i.value&&Yt&&p()});pn(d)}return pn(c),{isActive:i,pause:c,resume:p}}function Q_(t,n,s={}){const{immediate:o=!0}=s,l=U(!1);let r=null;function i(){r&&(clearTimeout(r),r=null)}function a(){l.value=!1,i()}function c(...p){i(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,t(...p)},Ze(n))}return o&&(l.value=!0,Yt&&c()),pn(a),{isPending:Wt(l),start:c,stop:a}}function ef(t=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,l=Se(t),r=U(t);function i(a){if(arguments.length)return r.value=a,r.value;{const c=Ze(s);return r.value=r.value===c?Ze(o):c,r.value}}return l?i:[r,i]}var Wc=Object.getOwnPropertySymbols,J_=Object.prototype.hasOwnProperty,X_=Object.prototype.propertyIsEnumerable,e1=(t,n)=>{var s={};for(var o in t)J_.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Wc)for(var o of Wc(t))n.indexOf(o)<0&&X_.call(t,o)&&(s[o]=t[o]);return s};function t1(t,n,s={}){const o=s,{eventFilter:l=Qd}=o,r=e1(o,["eventFilter"]);return ge(t,j_(l,n),r)}var n1=Object.defineProperty,s1=Object.defineProperties,o1=Object.getOwnPropertyDescriptors,Ul=Object.getOwnPropertySymbols,tf=Object.prototype.hasOwnProperty,nf=Object.prototype.propertyIsEnumerable,Kc=(t,n,s)=>n in t?n1(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,l1=(t,n)=>{for(var s in n||(n={}))tf.call(n,s)&&Kc(t,s,n[s]);if(Ul)for(var s of Ul(n))nf.call(n,s)&&Kc(t,s,n[s]);return t},r1=(t,n)=>s1(t,o1(n)),i1=(t,n)=>{var s={};for(var o in t)tf.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Ul)for(var o of Ul(t))n.indexOf(o)<0&&nf.call(t,o)&&(s[o]=t[o]);return s};function a1(t,n,s={}){const o=s,{eventFilter:l}=o,r=i1(o,["eventFilter"]),{eventFilter:i,pause:a,resume:c,isActive:p}=N_(l);return{stop:t1(t,n,r1(l1({},r),{eventFilter:i})),pause:a,resume:c,isActive:p}}function ct(t){var n;const s=Ze(t);return(n=s==null?void 0:s.$el)!=null?n:s}const st=Yt?window:void 0,sf=Yt?window.document:void 0,c1=Yt?window.navigator:void 0;function Be(...t){let n,s,o,l;if(typeof t[0]=="string"||Array.isArray(t[0])?([s,o,l]=t,n=st):[n,s,o,l]=t,!n)return _s;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],i=()=>{r.forEach(d=>d()),r.length=0},a=(d,f,h,y)=>(d.addEventListener(f,h,y),()=>d.removeEventListener(f,h,y)),c=ge(()=>[ct(n),Ze(l)],([d,f])=>{i(),d&&r.push(...s.flatMap(h=>o.map(y=>a(d,h,y,f))))},{immediate:!0,flush:"post"}),p=()=>{c(),i()};return pn(p),p}let Yc=!1;function u1(t,n,s={}){const{window:o=st,ignore:l=[],capture:r=!0,detectIframe:i=!1}=s;if(!o)return;M_&&!Yc&&(Yc=!0,Array.from(o.document.body.children).forEach(h=>h.addEventListener("click",_s)));let a=!0;const c=h=>l.some(y=>{if(typeof y=="string")return Array.from(o.document.querySelectorAll(y)).some(m=>m===h.target||h.composedPath().includes(m));{const m=ct(y);return m&&(h.target===m||h.composedPath().includes(m))}}),d=[Be(o,"click",h=>{const y=ct(t);if(!(!y||y===h.target||h.composedPath().includes(y))){if(h.detail===0&&(a=!c(h)),!a){a=!0;return}n(h)}},{passive:!0,capture:r}),Be(o,"pointerdown",h=>{const y=ct(t);y&&(a=!h.composedPath().includes(y)&&!c(h))},{passive:!0}),i&&Be(o,"blur",h=>{setTimeout(()=>{var y;const m=ct(t);((y=o.document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&n(h)},0)})].filter(Boolean);return()=>d.forEach(h=>h())}function p1(t){return typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):()=>!0}function d1(...t){let n,s,o={};t.length===3?(n=t[0],s=t[1],o=t[2]):t.length===2?typeof t[1]=="object"?(n=!0,s=t[0],o=t[1]):(n=t[0],s=t[1]):(n=!0,s=t[0]);const{target:l=st,eventName:r="keydown",passive:i=!1,dedupe:a=!1}=o,c=p1(n);return Be(l,r,d=>{d.repeat&&Ze(a)||c(d)&&s(d)},i)}function f1(t={}){var n;const{window:s=st}=t,o=(n=t.document)!=null?n:s==null?void 0:s.document,l=T_(()=>null,()=>o==null?void 0:o.activeElement);return s&&(Be(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),Be(s,"focus",l.trigger,!0)),l}function h1(){const t=U(!1);return Ot()&&Wn(()=>{t.value=!0}),t}function Ko(t){const n=h1();return S(()=>(n.value,!!t()))}function y1(t,n={}){const{immediate:s=!0,window:o=st}=n,l=U(!1);let r=0,i=null;function a(d){if(!l.value||!o)return;const f=d-r;t({delta:f,timestamp:d}),r=d,i=o.requestAnimationFrame(a)}function c(){!l.value&&o&&(l.value=!0,i=o.requestAnimationFrame(a))}function p(){l.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return s&&c(),pn(p),{isActive:Wt(l),pause:p,resume:c}}function is(t,n={}){const{window:s=st}=n,o=Ko(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=U(!1),i=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",a):l.removeListener(a))},a=()=>{o.value&&(i(),l=s.matchMedia(Jd(t).value),r.value=!!(l!=null&&l.matches),l&&("addEventListener"in l?l.addEventListener("change",a):l.addListener(a)))};return ws(a),pn(()=>i()),r}const m1={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function g1(t,n={}){function s(a,c){let p=t[a];return c!=null&&(p=R_(p,c)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=st}=n;function l(a){return o?o.matchMedia(a).matches:!1}const r=a=>is(`(min-width: ${s(a)})`,n),i=Object.keys(t).reduce((a,c)=>(Object.defineProperty(a,c,{get:()=>r(c),enumerable:!0,configurable:!0}),a),{});return Object.assign(i,{greater(a){return is(`(min-width: ${s(a,.1)})`,n)},greaterOrEqual:r,smaller(a){return is(`(max-width: ${s(a,-.1)})`,n)},smallerOrEqual(a){return is(`(max-width: ${s(a)})`,n)},between(a,c){return is(`(min-width: ${s(a)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(a){return l(`(min-width: ${s(a,.1)})`)},isGreaterOrEqual(a){return l(`(min-width: ${s(a)})`)},isSmaller(a){return l(`(max-width: ${s(a,-.1)})`)},isSmallerOrEqual(a){return l(`(max-width: ${s(a)})`)},isInBetween(a,c){return l(`(min-width: ${s(a)}) and (max-width: ${s(c,-.1)})`)},current(){const a=Object.keys(t).map(c=>[c,r(c)]);return S(()=>a.filter(([,c])=>c.value).map(([c])=>c))}})}function v1(t={}){const{navigator:n=c1,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=t,i=["copy","cut"],a=Ko(()=>n&&"clipboard"in n),c=S(()=>a.value||r),p=U(""),d=U(!1),f=Q_(()=>d.value=!1,l);function h(){a.value?n.clipboard.readText().then(B=>{p.value=B}):p.value=A()}if(c.value&&s)for(const B of i)Be(B,h);async function y(B=Ze(o)){c.value&&B!=null&&(a.value?await n.clipboard.writeText(B):m(B),p.value=B,d.value=!0,f.start())}function m(B){const C=document.createElement("textarea");C.value=B??"",C.style.position="absolute",C.style.opacity="0",document.body.appendChild(C),C.select(),document.execCommand("copy"),C.remove()}function A(){var B,C,D;return(D=(C=(B=document==null?void 0:document.getSelection)==null?void 0:B.call(document))==null?void 0:C.toString())!=null?D:""}return{isSupported:c,text:p,copied:d,copy:y}}function _1(t){return JSON.parse(JSON.stringify(t))}const dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fl="__vueuse_ssr_handlers__",b1=A1();function A1(){return fl in dl||(dl[fl]=dl[fl]||{}),dl[fl]}function B1(t,n){return b1[t]||n}function C1(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var D1=Object.defineProperty,Zc=Object.getOwnPropertySymbols,w1=Object.prototype.hasOwnProperty,x1=Object.prototype.propertyIsEnumerable,Qc=(t,n,s)=>n in t?D1(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Jc=(t,n)=>{for(var s in n||(n={}))w1.call(n,s)&&Qc(t,s,n[s]);if(Zc)for(var s of Zc(n))x1.call(n,s)&&Qc(t,s,n[s]);return t};const k1={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Xc="vueuse-storage";function E1(t,n,s,o={}){var l;const{flush:r="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:p=!1,shallow:d,window:f=st,eventFilter:h,onError:y=P=>{console.error(P)}}=o,m=(d?cn:U)(n);if(!s)try{s=B1("getDefaultStorage",()=>{var P;return(P=st)==null?void 0:P.localStorage})()}catch(P){y(P)}if(!s)return m;const A=Ze(n),B=C1(A),C=(l=o.serializer)!=null?l:k1[B],{pause:D,resume:b}=a1(m,()=>x(m.value),{flush:r,deep:i,eventFilter:h});return f&&a&&(Be(f,"storage",j),Be(f,Xc,F)),j(),m;function x(P){try{if(P==null)s.removeItem(t);else{const H=C.write(P),ne=s.getItem(t);ne!==H&&(s.setItem(t,H),f&&f.dispatchEvent(new CustomEvent(Xc,{detail:{key:t,oldValue:ne,newValue:H,storageArea:s}})))}}catch(H){y(H)}}function k(P){const H=P?P.newValue:s.getItem(t);if(H==null)return c&&A!==null&&s.setItem(t,C.write(A)),A;if(!P&&p){const ne=C.read(H);return typeof p=="function"?p(ne,A):B==="object"&&!Array.isArray(ne)?Jc(Jc({},A),ne):ne}else return typeof H!="string"?H:C.read(H)}function F(P){j(P.detail)}function j(P){if(!(P&&P.storageArea!==s)){if(P&&P.key==null){m.value=A;return}if(!(P&&P.key!==t)){D();try{m.value=k(P)}catch(H){y(H)}finally{P?at(b):b()}}}}}function $1(t){return is("(prefers-color-scheme: dark)",t)}var F1=Object.defineProperty,T1=Object.defineProperties,S1=Object.getOwnPropertyDescriptors,eu=Object.getOwnPropertySymbols,O1=Object.prototype.hasOwnProperty,P1=Object.prototype.propertyIsEnumerable,tu=(t,n,s)=>n in t?F1(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,I1=(t,n)=>{for(var s in n||(n={}))O1.call(n,s)&&tu(t,s,n[s]);if(eu)for(var s of eu(n))P1.call(n,s)&&tu(t,s,n[s]);return t},M1=(t,n)=>T1(t,S1(n));function yS(t,n={}){var s,o;const{pointerTypes:l,preventDefault:r,stopPropagation:i,exact:a,onMove:c,onEnd:p,onStart:d,initialValue:f,axis:h="both",draggingElement:y=st,handle:m=t}=n,A=U((s=Ze(f))!=null?s:{x:0,y:0}),B=U(),C=F=>l?l.includes(F.pointerType):!0,D=F=>{Ze(r)&&F.preventDefault(),Ze(i)&&F.stopPropagation()},b=F=>{if(!C(F)||Ze(a)&&F.target!==Ze(t))return;const j=Ze(t).getBoundingClientRect(),P={x:F.clientX-j.left,y:F.clientY-j.top};(d==null?void 0:d(P,F))!==!1&&(B.value=P,D(F))},x=F=>{if(!C(F)||!B.value)return;let{x:j,y:P}=A.value;(h==="x"||h==="both")&&(j=F.clientX-B.value.x),(h==="y"||h==="both")&&(P=F.clientY-B.value.y),A.value={x:j,y:P},c==null||c(A.value,F),D(F)},k=F=>{C(F)&&B.value&&(B.value=void 0,p==null||p(A.value,F),D(F))};if(Yt){const F={capture:(o=n.capture)!=null?o:!0};Be(m,"pointerdown",b,F),Be(y,"pointermove",x,F),Be(y,"pointerup",k,F)}return M1(I1({},K_(A)),{position:A,isDragging:S(()=>!!B.value),style:S(()=>`left:${A.value.x}px;top:${A.value.y}px;`)})}var nu=Object.getOwnPropertySymbols,L1=Object.prototype.hasOwnProperty,j1=Object.prototype.propertyIsEnumerable,N1=(t,n)=>{var s={};for(var o in t)L1.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&nu)for(var o of nu(t))n.indexOf(o)<0&&j1.call(t,o)&&(s[o]=t[o]);return s};function R1(t,n,s={}){const o=s,{window:l=st}=o,r=N1(o,["window"]);let i;const a=Ko(()=>l&&"ResizeObserver"in l),c=()=>{i&&(i.disconnect(),i=void 0)},p=S(()=>Array.isArray(t)?t.map(h=>ct(h)):[ct(t)]),d=ge(p,h=>{if(c(),a.value&&l){i=new ResizeObserver(n);for(const y of h)y&&i.observe(y,r)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{c(),d()};return pn(f),{isSupported:a,stop:f}}function H1(t,n={width:0,height:0},s={}){const{window:o=st,box:l="content-box"}=s,r=S(()=>{var c,p;return(p=(c=ct(t))==null?void 0:c.namespaceURI)==null?void 0:p.includes("svg")}),i=U(n.width),a=U(n.height);return R1(t,([c])=>{const p=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const d=ct(t);if(d){const f=o.getComputedStyle(d);i.value=Number.parseFloat(f.width),a.value=Number.parseFloat(f.height)}}else if(p){const d=Array.isArray(p)?p:[p];i.value=d.reduce((f,{inlineSize:h})=>f+h,0),a.value=d.reduce((f,{blockSize:h})=>f+h,0)}else i.value=c.contentRect.width,a.value=c.contentRect.height},s),ge(()=>ct(t),c=>{i.value=c?n.width:0,a.value=c?n.height:0}),{width:i,height:a}}function q1(t,n,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:i=st,immediate:a=!0}=s,c=Ko(()=>i&&"IntersectionObserver"in i),p=S(()=>{const m=Ze(t);return(Array.isArray(m)?m:[m]).map(ct).filter(P_)});let d=_s;const f=U(a),h=c.value?ge(()=>[p.value,ct(o),f.value],([m,A])=>{if(d(),!f.value||!m.length)return;const B=new IntersectionObserver(n,{root:ct(A),rootMargin:l,threshold:r});m.forEach(C=>C&&B.observe(C)),d=()=>{B.disconnect(),d=_s}},{immediate:a,flush:"post"}):_s,y=()=>{d(),h(),f.value=!1};return pn(y),{isSupported:c,isActive:f,pause(){d(),f.value=!1},resume(){f.value=!0},stop:y}}const su=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function V1(t,n={}){const{document:s=sf,autoExit:o=!1}=n,l=S(()=>{var C;return(C=ct(t))!=null?C:s==null?void 0:s.querySelector("html")}),r=U(!1),i=S(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(C=>s&&C in s||l.value&&C in l.value)),a=S(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(C=>s&&C in s||l.value&&C in l.value)),c=S(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(C=>s&&C in s||l.value&&C in l.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(C=>s&&C in s),d=Ko(()=>l.value&&s&&i.value!==void 0&&a.value!==void 0&&c.value!==void 0),f=()=>p?(s==null?void 0:s[p])===l.value:!1,h=()=>{if(c.value){if(s&&s[c.value]!=null)return s[c.value];{const C=l.value;if((C==null?void 0:C[c.value])!=null)return!!C[c.value]}}return!1};async function y(){if(d.value){if(a.value)if((s==null?void 0:s[a.value])!=null)await s[a.value]();else{const C=l.value;(C==null?void 0:C[a.value])!=null&&await C[a.value]()}r.value=!1}}async function m(){if(!d.value)return;h()&&await y();const C=l.value;i.value&&(C==null?void 0:C[i.value])!=null&&(await C[i.value](),r.value=!0)}async function A(){await(r.value?y():m())}const B=()=>{const C=h();(!C||C&&f())&&(r.value=C)};return Be(s,su,B,!1),Be(()=>ct(l),su,B,!1),o&&pn(y),{isSupported:d,isFullscreen:r,enter:m,exit:y,toggle:A}}function Zt(t,n,s={}){const{window:o=st}=s;return E1(t,n,o==null?void 0:o.localStorage,s)}const z1={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function G1(t={}){const{reactive:n=!1,target:s=st,aliasMap:o=z1,passive:l=!0,onEventFired:r=_s}=t,i=Ue(new Set),a={toJSON(){return{}},current:i},c=n?Ue(a):a,p=new Set,d=new Set;function f(A,B){A in c&&(n?c[A]=B:c[A].value=B)}function h(){i.clear();for(const A of d)f(A,!1)}function y(A,B){var C,D;const b=(C=A.key)==null?void 0:C.toLowerCase(),k=[(D=A.code)==null?void 0:D.toLowerCase(),b].filter(Boolean);b&&(B?i.add(b):i.delete(b));for(const F of k)d.add(F),f(F,B);b==="meta"&&!B?(p.forEach(F=>{i.delete(F),f(F,!1)}),p.clear()):typeof A.getModifierState=="function"&&A.getModifierState("Meta")&&B&&[...i,...k].forEach(F=>p.add(F))}Be(s,"keydown",A=>(y(A,!0),r(A)),{passive:l}),Be(s,"keyup",A=>(y(A,!1),r(A)),{passive:l}),Be("blur",h,{passive:!0}),Be("focus",h,{passive:!0});const m=new Proxy(c,{get(A,B,C){if(typeof B!="string")return Reflect.get(A,B,C);if(B=B.toLowerCase(),B in o&&(B=o[B]),!(B in c))if(/[+_-]/.test(B)){const b=B.split(/[+_-]/g).map(x=>x.trim());c[B]=S(()=>b.every(x=>Ze(m[x])))}else c[B]=U(!1);const D=Reflect.get(A,B,C);return n?Ze(D):D}});return m}const U1={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function mS(t={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=st,target:i=r,eventFilter:a}=t,c=U(l.x),p=U(l.y),d=U(null),f=typeof n=="function"?n:U1[n],h=C=>{const D=f(C);D&&([c.value,p.value]=D,d.value="mouse")},y=C=>{if(C.touches.length>0){const D=f(C.touches[0]);D&&([c.value,p.value]=D,d.value="touch")}},m=()=>{c.value=l.x,p.value=l.y},A=a?C=>a(()=>h(C),{}):C=>h(C),B=a?C=>a(()=>y(C),{}):C=>y(C);return i&&(Be(i,"mousemove",A,{passive:!0}),Be(i,"dragover",A,{passive:!0}),s&&n!=="movement"&&(Be(i,"touchstart",B,{passive:!0}),Be(i,"touchmove",B,{passive:!0}),o&&Be(i,"touchend",m,{passive:!0}))),{x:c,y:p,sourceType:d}}function W1(t,n={}){const s=Jd(t),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:i}=n,a=Ue({x:0,y:0}),c=(F,j)=>{a.x=F,a.y=j},p=Ue({x:0,y:0}),d=(F,j)=>{p.x=F,p.y=j},f=S(()=>a.x-p.x),h=S(()=>a.y-p.y),{max:y,abs:m}=Math,A=S(()=>y(m(f.value),m(h.value))>=o),B=U(!1),C=U(!1),D=S(()=>A.value?m(f.value)>m(h.value)?f.value>0?"left":"right":h.value>0?"up":"down":"none"),b=F=>{var j,P,H;const ne=F.buttons===0,ce=F.buttons===1;return(H=(P=(j=n.pointerTypes)==null?void 0:j.includes(F.pointerType))!=null?P:ne||ce)!=null?H:!0},x=[Be(t,"pointerdown",F=>{var j,P;if(!b(F))return;C.value=!0,(P=(j=s.value)==null?void 0:j.style)==null||P.setProperty("touch-action","none");const H=F.target;H==null||H.setPointerCapture(F.pointerId);const{clientX:ne,clientY:ce}=F;c(ne,ce),d(ne,ce),i==null||i(F)}),Be(t,"pointermove",F=>{if(!b(F)||!C.value)return;const{clientX:j,clientY:P}=F;d(j,P),!B.value&&A.value&&(B.value=!0),B.value&&(l==null||l(F))}),Be(t,"pointerup",F=>{var j,P;b(F)&&(B.value&&(r==null||r(F,D.value)),C.value=!1,B.value=!1,(P=(j=s.value)==null?void 0:j.style)==null||P.setProperty("touch-action","initial"))})],k=()=>x.forEach(F=>F());return{isSwiping:Wt(B),direction:Wt(D),posStart:Wt(a),posEnd:Wt(p),distanceX:f,distanceY:h,stop:k}}let K1=0;function gS(t,n={}){const s=U(!1),{document:o=sf,immediate:l=!0,manual:r=!1,id:i=`vueuse_styletag_${++K1}`}=n,a=U(t);let c=()=>{};const p=()=>{if(!o)return;const f=o.getElementById(i)||o.createElement("style");f.isConnected||(f.type="text/css",f.id=i,n.media&&(f.media=n.media),o.head.appendChild(f)),!s.value&&(c=ge(a,h=>{f.textContent=h},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(c(),o.head.removeChild(o.getElementById(i)),s.value=!1)};return l&&!r&&Xd(p),r||pn(d),{id:i,css:a,unload:d,load:p,isLoaded:Wt(s)}}var Y1=Object.defineProperty,ou=Object.getOwnPropertySymbols,Z1=Object.prototype.hasOwnProperty,Q1=Object.prototype.propertyIsEnumerable,lu=(t,n,s)=>n in t?Y1(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,J1=(t,n)=>{for(var s in n||(n={}))Z1.call(n,s)&&lu(t,s,n[s]);if(ou)for(var s of ou(n))Q1.call(n,s)&&lu(t,s,n[s]);return t};function vS(t={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=t,i=U(Ci()+s),a=()=>i.value=Ci()+s,c=r?()=>{a(),r(i.value)}:a,p=l==="requestAnimationFrame"?y1(c,{immediate:o}):Z_(c,l,{immediate:o});return n?J1({timestamp:i},p):i}function sn(t,n,s,o={}){var l,r,i;const{clone:a=!1,passive:c=!1,eventName:p,deep:d=!1,defaultValue:f,shouldEmit:h}=o,y=Ot(),m=s||(y==null?void 0:y.emit)||((l=y==null?void 0:y.$emit)==null?void 0:l.bind(y))||((i=(r=y==null?void 0:y.proxy)==null?void 0:r.$emit)==null?void 0:i.bind(y==null?void 0:y.proxy));let A=p;n||(n="modelValue"),A=A||`update:${n.toString()}`;const B=b=>a?typeof a=="function"?a(b):_1(b):b,C=()=>O_(t[n])?B(t[n]):f,D=b=>{h?h(b)&&m(A,b):m(A,b)};if(c){const b=C(),x=U(b);return ge(()=>t[n],k=>x.value=B(k)),ge(x,k=>{(k!==t[n]||d)&&D(k)},{deep:d}),x}else return S({get(){return C()},set(b){D(b)}})}function _S({window:t=st}={}){if(!t)return U(!1);const n=U(t.document.hasFocus());return Be(t,"blur",()=>{n.value=!1}),Be(t,"focus",()=>{n.value=!0}),n}function X1(t={}){const{window:n=st,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=t,i=U(s),a=U(o),c=()=>{n&&(r?(i.value=n.innerWidth,a.value=n.innerHeight):(i.value=n.document.documentElement.clientWidth,a.value=n.document.documentElement.clientHeight))};if(c(),Xd(c),Be("resize",c,{passive:!0}),l){const p=is("(orientation: portrait)");ge(p,()=>c())}return{width:i,height:a}}function e8(){return of().__VUE_DEVTOOLS_GLOBAL_HOOK__}function of(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const t8=typeof Proxy=="function",n8="devtools-plugin:setup",s8="plugin:settings:set";let Ts,Di;function o8(){var t;return Ts!==void 0||(typeof window<"u"&&window.performance?(Ts=!0,Di=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Ts=!0,Di=global.perf_hooks.performance):Ts=!1),Ts}function l8(){return o8()?Di.now():Date.now()}class r8{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const o={};if(n.settings)for(const i in n.settings){const a=n.settings[i];o[i]=a.defaultValue}const l=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},o);try{const i=localStorage.getItem(l),a=JSON.parse(i);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(i){try{localStorage.setItem(l,JSON.stringify(i))}catch{}r=i},now(){return l8()}},s&&s.on(s8,(i,a)=>{i===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(i,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(i,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(p=>{this.targetQueue.push({method:a,args:c,resolve:p})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function i8(t,n){const s=t,o=of(),l=e8(),r=t8&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(n8,t,n);else{const i=r?new r8(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:i}),i&&n(i.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const gn=typeof window<"u";function a8(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function Ir(t,n){const s={};for(const o in n){const l=n[o];s[o]=St(l)?l.map(t):t(l)}return s}const vo=()=>{},St=Array.isArray;function $e(t){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(n))}const c8=/\/$/,u8=t=>t.replace(c8,"");function Mr(t,n,s="/"){let o,l={},r="",i="";const a=n.indexOf("#");let c=n.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(o=n.slice(0,c),r=n.slice(c+1,a>-1?a:n.length),l=t(r)),a>-1&&(o=o||n.slice(0,a),i=n.slice(a,n.length)),o=f8(o??n,s),{fullPath:o+(r&&"?")+r+i,path:o,query:l,hash:i}}function p8(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function ru(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function iu(t,n,s){const o=n.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&Gn(n.matched[o],s.matched[l])&&lf(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function Gn(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function lf(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!d8(t[s],n[s]))return!1;return!0}function d8(t,n){return St(t)?au(t,n):St(n)?au(n,t):t===n}function au(t,n){return St(n)?t.length===n.length&&t.every((s,o)=>s===n[o]):t.length===1&&t[0]===n}function f8(t,n){if(t.startsWith("/"))return t;if(!n.startsWith("/"))return $e(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${n}". It should look like "/${n}".`),t;if(!t)return n;const s=n.split("/"),o=t.split("/"),l=o[o.length-1];(l===".."||l===".")&&o.push("");let r=s.length-1,i,a;for(i=0;i<o.length;i++)if(a=o[i],a!==".")if(a==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+o.slice(i-(i===o.length?1:0)).join("/")}var Oo;(function(t){t.pop="pop",t.push="push"})(Oo||(Oo={}));var _o;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_o||(_o={}));function h8(t){if(!t)if(gn){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),u8(t)}const y8=/^[^#]+#/;function m8(t,n){return t.replace(y8,"#")+n}function g8(t,n){const s=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function v8(t){let n;if("el"in t){const s=t.el,o=typeof s=="string"&&s.startsWith("#");if(typeof t.el=="string"&&(!o||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(o&&r){$e(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{$e(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){$e(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}n=g8(l,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function cu(t,n){return(history.state?history.state.position-n:-1)+t}const wi=new Map;function _8(t,n){wi.set(t,n)}function b8(t){const n=wi.get(t);return wi.delete(t),n}let A8=()=>location.protocol+"//"+location.host;function rf(t,n){const{pathname:s,search:o,hash:l}=n,r=t.indexOf("#");if(r>-1){let a=l.includes(t.slice(r))?t.slice(r).length:1,c=l.slice(a);return c[0]!=="/"&&(c="/"+c),ru(c,"")}return ru(s,t)+o+l}function B8(t,n,s,o){let l=[],r=[],i=null;const a=({state:h})=>{const y=rf(t,location),m=s.value,A=n.value;let B=0;if(h){if(s.value=y,n.value=h,i&&i===m){i=null;return}B=A?h.position-A.position:0}else o(y);l.forEach(C=>{C(s.value,m,{delta:B,type:Oo.pop,direction:B?B>0?_o.forward:_o.back:_o.unknown})})};function c(){i=s.value}function p(h){l.push(h);const y=()=>{const m=l.indexOf(h);m>-1&&l.splice(m,1)};return r.push(y),y}function d(){const{history:h}=window;h.state&&h.replaceState(Ie({},h.state,{scroll:mr()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:p,destroy:f}}function uu(t,n,s,o=!1,l=!1){return{back:t,current:n,forward:s,replaced:o,position:window.history.length,scroll:l?mr():null}}function C8(t){const{history:n,location:s}=window,o={value:rf(t,s)},l={value:n.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,p,d){const f=t.indexOf("#"),h=f>-1?(s.host&&document.querySelector("base")?t:t.slice(f))+c:A8()+t+c;try{n[d?"replaceState":"pushState"](p,"",h),l.value=p}catch(y){$e("Error with push/replace State",y),s[d?"replace":"assign"](h)}}function i(c,p){const d=Ie({},n.state,uu(l.value.back,c,l.value.forward,!0),p,{position:l.value.position});r(c,d,!0),o.value=c}function a(c,p){const d=Ie({},l.value,n.state,{forward:c,scroll:mr()});n.state||$e(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const f=Ie({},uu(o.value,c,null),{position:d.position+1},p);r(c,f,!1),o.value=c}return{location:o,state:l,push:a,replace:i}}function D8(t){t=h8(t);const n=C8(t),s=B8(t,n.state,n.location,n.replace);function o(r,i=!0){i||s.pauseListeners(),history.go(r)}const l=Ie({location:"",base:t,go:o,createHref:m8.bind(null,t)},n,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function w8(t){return typeof t=="string"||t&&typeof t=="object"}function af(t){return typeof t=="string"||typeof t=="symbol"}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cf=Symbol("navigation failure");var pu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pu||(pu={}));const x8={1({location:t,currentLocation:n}){return`No match for
 ${JSON.stringify(t)}${n?`
while being at
`+JSON.stringify(n):""}`},2({from:t,to:n}){return`Redirected from "${t.fullPath}" to "${E8(n)}" via a navigation guard.`},4({from:t,to:n}){return`Navigation aborted from "${t.fullPath}" to "${n.fullPath}" via a navigation guard.`},8({from:t,to:n}){return`Navigation cancelled from "${t.fullPath}" to "${n.fullPath}" with a new navigation.`},16({from:t,to:n}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function qs(t,n){return Ie(new Error(x8[t](n)),{type:t,[cf]:!0},n)}function dn(t,n){return t instanceof Error&&cf in t&&(n==null||!!(t.type&n))}const k8=["params","query","hash"];function E8(t){if(typeof t=="string")return t;if("path"in t)return t.path;const n={};for(const s of k8)s in t&&(n[s]=t[s]);return JSON.stringify(n,null,2)}const du="[^/]+?",$8={sensitive:!1,strict:!1,start:!0,end:!0},F8=/[.+*?^${}()[\]/\\]/g;function T8(t,n){const s=Ie({},$8,n),o=[];let l=s.start?"^":"";const r=[];for(const p of t){const d=p.length?[]:[90];s.strict&&!p.length&&(l+="/");for(let f=0;f<p.length;f++){const h=p[f];let y=40+(s.sensitive?.25:0);if(h.type===0)f||(l+="/"),l+=h.value.replace(F8,"\\$&"),y+=40;else if(h.type===1){const{value:m,repeatable:A,optional:B,regexp:C}=h;r.push({name:m,repeatable:A,optional:B});const D=C||du;if(D!==du){y+=10;try{new RegExp(`(${D})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+x.message)}}let b=A?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;f||(b=B&&p.length<2?`(?:/${b})`:"/"+b),B&&(b+="?"),l+=b,y+=20,B&&(y+=-8),A&&(y+=-20),D===".*"&&(y+=-50)}d.push(y)}o.push(d)}if(s.strict&&s.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const i=new RegExp(l,s.sensitive?"":"i");function a(p){const d=p.match(i),f={};if(!d)return null;for(let h=1;h<d.length;h++){const y=d[h]||"",m=r[h-1];f[m.name]=y&&m.repeatable?y.split("/"):y}return f}function c(p){let d="",f=!1;for(const h of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const y of h)if(y.type===0)d+=y.value;else if(y.type===1){const{value:m,repeatable:A,optional:B}=y,C=m in p?p[m]:"";if(St(C)&&!A)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=St(C)?C.join("/"):C;if(!D)if(B)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=D}}return d||"/"}return{re:i,score:o,keys:r,parse:a,stringify:c}}function S8(t,n){let s=0;for(;s<t.length&&s<n.length;){const o=n[s]-t[s];if(o)return o;s++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function O8(t,n){let s=0;const o=t.score,l=n.score;for(;s<o.length&&s<l.length;){const r=S8(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(fu(o))return 1;if(fu(l))return-1}return l.length-o.length}function fu(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const P8={type:0,value:""},I8=/[a-zA-Z0-9_]/;function M8(t){if(!t)return[[]];if(t==="/")return[[P8]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function n(y){throw new Error(`ERR (${s})/"${p}": ${y}`)}let s=0,o=s;const l=[];let r;function i(){r&&l.push(r),r=[]}let a=0,c,p="",d="";function f(){p&&(s===0?r.push({type:0,value:p}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),p="")}function h(){p+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:c==="/"?(p&&f(),i()):c===":"?(f(),s=1):h();break;case 4:h(),s=o;break;case 1:c==="("?s=2:I8.test(c)?h():(f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:s=3:d+=c;break;case 3:f(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${p}"`),f(),i(),l}function L8(t,n,s){const o=T8(M8(t.path),s);{const r=new Set;for(const i of o.keys)r.has(i.name)&&$e(`Found duplicated params with name "${i.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(i.name)}const l=Ie(o,{record:t,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function j8(t,n){const s=[],o=new Map;n=mu({strict:!1,end:!0,sensitive:!1},n);function l(d){return o.get(d)}function r(d,f,h){const y=!h,m=N8(d);V8(m,f),m.aliasOf=h&&h.record;const A=mu(n,d),B=[m];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of b)B.push(Ie({},m,{components:h?h.record.components:m.components,path:x,aliasOf:h?h.record:m}))}let C,D;for(const b of B){const{path:x}=b;if(f&&x[0]!=="/"){const k=f.record.path,F=k[k.length-1]==="/"?"":"/";b.path=f.record.path+(x&&F+x)}if(b.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(C=L8(b,f,A),f&&x[0]==="/"&&z8(C,f),h?(h.alias.push(C),q8(h,C)):(D=D||C,D!==C&&D.alias.push(C),y&&d.name&&!yu(C)&&i(d.name)),m.children){const k=m.children;for(let F=0;F<k.length;F++)r(k[F],C,h&&h.children[F])}h=h||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return D?()=>{i(D)}:vo}function i(d){if(af(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return s}function c(d){let f=0;for(;f<s.length&&O8(d,s[f])>=0&&(d.record.path!==s[f].record.path||!uf(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!yu(d)&&o.set(d.record.name,d)}function p(d,f){let h,y={},m,A;if("name"in d&&d.name){if(h=o.get(d.name),!h)throw qs(1,{location:d});{const D=Object.keys(d.params||{}).filter(b=>!h.keys.find(x=>x.name===b));D.length&&$e(`Discarded invalid param(s) "${D.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}A=h.record.name,y=Ie(hu(f.params,h.keys.filter(D=>!D.optional).map(D=>D.name)),d.params&&hu(d.params,h.keys.map(D=>D.name))),m=h.stringify(y)}else if("path"in d)m=d.path,m.startsWith("/")||$e(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=s.find(D=>D.re.test(m)),h&&(y=h.parse(m),A=h.record.name);else{if(h=f.name?o.get(f.name):s.find(D=>D.re.test(f.path)),!h)throw qs(1,{location:d,currentLocation:f});A=h.record.name,y=Ie({},f.params,d.params),m=h.stringify(y)}const B=[];let C=h;for(;C;)B.unshift(C.record),C=C.parent;return{name:A,path:m,params:y,matched:B,meta:H8(B)}}return t.forEach(d=>r(d)),{addRoute:r,resolve:p,removeRoute:i,getRoutes:a,getRecordMatcher:l}}function hu(t,n){const s={};for(const o of n)o in t&&(s[o]=t[o]);return s}function N8(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:R8(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function R8(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const o in t.components)n[o]=typeof s=="boolean"?s:s[o];return n}function yu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function H8(t){return t.reduce((n,s)=>Ie(n,s.meta),{})}function mu(t,n){const s={};for(const o in t)s[o]=o in n?n[o]:t[o];return s}function xi(t,n){return t.name===n.name&&t.optional===n.optional&&t.repeatable===n.repeatable}function q8(t,n){for(const s of t.keys)if(!s.optional&&!n.keys.find(xi.bind(null,s)))return $e(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!t.keys.find(xi.bind(null,s)))return $e(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`)}function V8(t,n){n&&n.record.name&&!t.name&&!t.path&&$e(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function z8(t,n){for(const s of n.keys)if(!t.keys.find(xi.bind(null,s)))return $e(`Absolute path "${t.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function uf(t,n){return n.children.some(s=>s===t||uf(t,s))}const pf=/#/g,G8=/&/g,U8=/\//g,W8=/=/g,K8=/\?/g,df=/\+/g,Y8=/%5B/g,Z8=/%5D/g,ff=/%5E/g,Q8=/%60/g,hf=/%7B/g,J8=/%7C/g,yf=/%7D/g,X8=/%20/g;function Ea(t){return encodeURI(""+t).replace(J8,"|").replace(Y8,"[").replace(Z8,"]")}function e3(t){return Ea(t).replace(hf,"{").replace(yf,"}").replace(ff,"^")}function ki(t){return Ea(t).replace(df,"%2B").replace(X8,"+").replace(pf,"%23").replace(G8,"%26").replace(Q8,"`").replace(hf,"{").replace(yf,"}").replace(ff,"^")}function t3(t){return ki(t).replace(W8,"%3D")}function n3(t){return Ea(t).replace(pf,"%23").replace(K8,"%3F")}function s3(t){return t==null?"":n3(t).replace(U8,"%2F")}function Po(t){try{return decodeURIComponent(""+t)}catch{$e(`Error decoding "${t}". Using original value`)}return""+t}function o3(t){const n={};if(t===""||t==="?")return n;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(df," "),i=r.indexOf("="),a=Po(i<0?r:r.slice(0,i)),c=i<0?null:Po(r.slice(i+1));if(a in n){let p=n[a];St(p)||(p=n[a]=[p]),p.push(c)}else n[a]=c}return n}function gu(t){let n="";for(let s in t){const o=t[s];if(s=t3(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(St(o)?o.map(r=>r&&ki(r)):[o&&ki(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function l3(t){const n={};for(const s in t){const o=t[s];o!==void 0&&(n[s]=St(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}const r3=Symbol("router view location matched"),vu=Symbol("router view depth"),$a=Symbol("router"),mf=Symbol("route location"),Ei=Symbol("router view location");function eo(){let t=[];function n(o){return t.push(o),()=>{const l=t.indexOf(o);l>-1&&t.splice(l,1)}}function s(){t=[]}return{add:n,list:()=>t,reset:s}}function Tn(t,n,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((i,a)=>{const c=f=>{f===!1?a(qs(4,{from:s,to:n})):f instanceof Error?a(f):w8(f)?a(qs(2,{from:n,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),i())},p=t.call(o&&o.instances[l],n,s,i3(c,n,s));let d=Promise.resolve(p);if(t.length<3&&(d=d.then(c)),t.length>2){const f=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(h=>c._called?h:($e(f),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!c._called){$e(f),a(new Error("Invalid navigation guard"));return}}d.catch(f=>a(f))})}function i3(t,n,s){let o=0;return function(){o++===1&&$e(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,o===1&&t.apply(null,arguments)}}function Lr(t,n,s,o){const l=[];for(const r of t){!r.components&&!r.children.length&&$e(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const i in r.components){let a=r.components[i];{if(!a||typeof a!="object"&&typeof a!="function")throw $e(`Component "${i}" in record with path "${r.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){$e(`Component "${i}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=a;a=()=>c}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,$e(`Component "${i}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[i]))if(a3(a)){const p=(a.__vccOpts||a)[n];p&&l.push(Tn(p,s,o,r,i))}else{let c=a();"catch"in c||($e(`Component "${i}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));const d=a8(p)?p.default:p;r.components[i]=d;const h=(d.__vccOpts||d)[n];return h&&Tn(h,s,o,r,i)()}))}}}return l}function a3(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _u(t){const n=q($a),s=q(mf),o=S(()=>n.resolve($(t.to))),l=S(()=>{const{matched:c}=o.value,{length:p}=c,d=c[p-1],f=s.matched;if(!d||!f.length)return-1;const h=f.findIndex(Gn.bind(null,d));if(h>-1)return h;const y=bu(c[p-2]);return p>1&&bu(d)===y&&f[f.length-1].path!==y?f.findIndex(Gn.bind(null,c[p-2])):h}),r=S(()=>l.value>-1&&d3(s.params,o.value.params)),i=S(()=>l.value>-1&&l.value===s.matched.length-1&&lf(s.params,o.value.params));function a(c={}){return p3(c)?n[$(t.replace)?"replace":"push"]($(t.to)).catch(vo):Promise.resolve()}if(gn){const c=Ot();if(c){const p={route:o.value,isActive:r.value,isExactActive:i.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(p),ws(()=>{p.route=o.value,p.isActive=r.value,p.isExactActive=i.value},{flush:"post"})}}return{route:o,href:S(()=>o.value.href),isActive:r,isExactActive:i,navigate:a}}const c3=be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_u,setup(t,{slots:n}){const s=Ue(_u(t)),{options:o}=q($a),l=S(()=>({[Au(t.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Au(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return t.custom?r:_t("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),u3=c3;function p3(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function d3(t,n){for(const s in n){const o=n[s],l=t[s];if(typeof o=="string"){if(o!==l)return!1}else if(!St(l)||l.length!==o.length||o.some((r,i)=>r!==l[i]))return!1}return!0}function bu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Au=(t,n,s)=>t??n??s,f3=be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){y3();const o=q(Ei),l=S(()=>t.route||o.value),r=q(vu,0),i=S(()=>{let p=$(r);const{matched:d}=l.value;let f;for(;(f=d[p])&&!f.components;)p++;return p}),a=S(()=>l.value.matched[i.value]);$t(vu,S(()=>i.value+1)),$t(r3,a),$t(Ei,l);const c=U();return ge(()=>[c.value,a.value,t.name],([p,d,f],[h,y,m])=>{d&&(d.instances[f]=p,y&&y!==d&&p&&p===h&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),p&&d&&(!y||!Gn(d,y)||!h)&&(d.enterCallbacks[f]||[]).forEach(A=>A(p))},{flush:"post"}),()=>{const p=l.value,d=t.name,f=a.value,h=f&&f.components[d];if(!h)return Bu(s.default,{Component:h,route:p});const y=f.props[d],m=y?y===!0?p.params:typeof y=="function"?y(p):y:null,B=_t(h,Ie({},m,n,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[d]=null)},ref:c}));if(gn&&B.ref){const C={depth:i.value,name:f.name,path:f.path,meta:f.meta};(St(B.ref)?B.ref.map(b=>b.i):[B.ref.i]).forEach(b=>{b.__vrv_devtools=C})}return Bu(s.default,{Component:B,route:p})||B}}});function Bu(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const h3=f3;function y3(){const t=Ot(),n=t.parent&&t.parent.type.name,s=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(n&&(n==="KeepAlive"||n.includes("Transition"))&&typeof s=="object"&&s.name==="RouterView"){const o=n==="KeepAlive"?"keep-alive":"transition";$e(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function to(t,n){const s=Ie({},t,{matched:t.matched.map(o=>D3(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:n,value:s}}}function hl(t){return{_custom:{display:t}}}let m3=0;function g3(t,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const o=m3++;i8({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,f)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:to(n.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:f})=>{if(f.__vrv_devtools){const h=f.__vrv_devtools;d.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:gf})}St(f.__vrl_devtools)&&(f.__devtoolsApi=l,f.__vrl_devtools.forEach(h=>{let y=bf,m="";h.isExactActive?(y=_f,m="This is exactly active"):h.isActive&&(y=vf,m="This link is active"),d.tags.push({label:h.route.path,textColor:0,tooltip:m,backgroundColor:y})}))}),ge(n.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(a),l.sendInspectorState(a)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),n.onError((d,f)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:f.meta.__navigationId}})});let i=0;n.beforeEach((d,f)=>{const h={guard:hl("beforeEach"),from:to(f,"Current Location during this navigation"),to:to(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:i++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:h,groupId:d.meta.__navigationId}})}),n.afterEach((d,f,h)=>{const y={guard:hl("afterEach")};h?(y.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},y.status=hl("❌")):y.status=hl("✅"),y.from=to(f,"Current Location during this navigation"),y.to=to(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:y,logType:h?"warning":"default",groupId:d.meta.__navigationId}})});const a="router-inspector:"+o;l.addInspector({id:a,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!p)return;const d=p;let f=s.getRoutes().filter(h=>!h.parent);f.forEach(Cf),d.filter&&(f=f.filter(h=>$i(h,d.filter.toLowerCase()))),f.forEach(h=>Bf(h,n.currentRoute.value)),d.rootNodes=f.map(Af)}let p;l.on.getInspectorTree(d=>{p=d,d.app===t&&d.inspectorId===a&&c()}),l.on.getInspectorState(d=>{if(d.app===t&&d.inspectorId===a){const h=s.getRoutes().find(y=>y.record.__vd_id===d.nodeId);h&&(d.state={options:_3(h)})}}),l.sendInspectorTree(a),l.sendInspectorState(a)})}function v3(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function _3(t){const{record:n}=t,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(o=>`${o.name}${v3(o)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),t.alias.length&&s.push({editable:!1,key:"aliases",value:t.alias.map(o=>o.record.path)}),Object.keys(t.record.meta).length&&s.push({editable:!1,key:"meta",value:t.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),s}const gf=15485081,vf=2450411,_f=8702998,b3=2282478,bf=16486972,A3=6710886;function Af(t){const n=[],{record:s}=t;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:b3}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:bf}),t.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:gf}),t.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:_f}),t.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:vf}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:A3});let o=s.__vd_id;return o==null&&(o=String(B3++),s.__vd_id=o),{id:o,label:s.path,tags:n,children:t.children.map(Af)}}let B3=0;const C3=/^\/(.*)\/([a-z]*)$/;function Bf(t,n){const s=n.matched.length&&Gn(n.matched[n.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=s,s||(t.__vd_active=n.matched.some(o=>Gn(o,t.record))),t.children.forEach(o=>Bf(o,n))}function Cf(t){t.__vd_match=!1,t.children.forEach(Cf)}function $i(t,n){const s=String(t.re).match(C3);if(t.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return t.children.forEach(i=>$i(i,n)),t.record.path!=="/"||n==="/"?(t.__vd_match=t.re.test(n),!0):!1;const l=t.record.path.toLowerCase(),r=Po(l);return!n.startsWith("/")&&(r.includes(n)||l.includes(n))||r.startsWith(n)||l.startsWith(n)||t.record.name&&String(t.record.name).includes(n)?!0:t.children.some(i=>$i(i,n))}function D3(t,n){const s={};for(const o in t)n.includes(o)||(s[o]=t[o]);return s}function w3(t){const n=j8(t.routes,t),s=t.parseQuery||o3,o=t.stringifyQuery||gu,l=t.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=eo(),i=eo(),a=eo(),c=cn(kn);let p=kn;gn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ir.bind(null,O=>""+O),f=Ir.bind(null,s3),h=Ir.bind(null,Po);function y(O,Z){let J,te;return af(O)?(J=n.getRecordMatcher(O),te=Z):te=O,n.addRoute(te,J)}function m(O){const Z=n.getRecordMatcher(O);Z?n.removeRoute(Z):$e(`Cannot remove non-existent route "${String(O)}"`)}function A(){return n.getRoutes().map(O=>O.record)}function B(O){return!!n.getRecordMatcher(O)}function C(O,Z){if(Z=Ie({},Z||c.value),typeof O=="string"){const _=Mr(s,O,Z.path),E=n.resolve({path:_.path},Z),L=l.createHref(_.fullPath);return L.startsWith("//")?$e(`Location "${O}" resolved to "${L}". A resolved location cannot start with multiple slashes.`):E.matched.length||$e(`No match found for location with path "${O}"`),Ie(_,E,{params:h(E.params),hash:Po(_.hash),redirectedFrom:void 0,href:L})}let J;if("path"in O)"params"in O&&!("name"in O)&&Object.keys(O.params).length&&$e(`Path "${O.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),J=Ie({},O,{path:Mr(s,O.path,Z.path).path});else{const _=Ie({},O.params);for(const E in _)_[E]==null&&delete _[E];J=Ie({},O,{params:f(_)}),Z.params=f(Z.params)}const te=n.resolve(J,Z),De=O.hash||"";De&&!De.startsWith("#")&&$e(`A \`hash\` should always start with the character "#". Replace "${De}" with "#${De}".`),te.params=d(h(te.params));const Ne=p8(o,Ie({},O,{hash:e3(De),path:te.path})),g=l.createHref(Ne);return g.startsWith("//")?$e(`Location "${O}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):te.matched.length||$e(`No match found for location with path "${"path"in O?O.path:O}"`),Ie({fullPath:Ne,hash:De,query:o===gu?l3(O.query):O.query||{}},te,{redirectedFrom:void 0,href:g})}function D(O){return typeof O=="string"?Mr(s,O,c.value.path):Ie({},O)}function b(O,Z){if(p!==O)return qs(8,{from:Z,to:O})}function x(O){return j(O)}function k(O){return x(Ie(D(O),{replace:!0}))}function F(O){const Z=O.matched[O.matched.length-1];if(Z&&Z.redirect){const{redirect:J}=Z;let te=typeof J=="function"?J(O):J;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=D(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw $e(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${O.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ie({query:O.query,hash:O.hash,params:"path"in te?{}:O.params},te)}}function j(O,Z){const J=p=C(O),te=c.value,De=O.state,Ne=O.force,g=O.replace===!0,_=F(J);if(_)return j(Ie(D(_),{state:typeof _=="object"?Ie({},De,_.state):De,force:Ne,replace:g}),Z||J);const E=J;E.redirectedFrom=Z;let L;return!Ne&&iu(o,te,J)&&(L=qs(16,{to:E,from:te}),Pt(te,te,!0,!1)),(L?Promise.resolve(L):ne(E,te)).catch(M=>dn(M)?dn(M,2)?M:Me(M):re(M,E,te)).then(M=>{if(M){if(dn(M,2))return iu(o,C(M.to),E)&&Z&&(Z._count=Z._count?Z._count+1:1)>30?($e(`Detected a possibly infinite redirection in a navigation guard when going from "${te.fullPath}" to "${E.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):j(Ie({replace:g},D(M.to),{state:typeof M.to=="object"?Ie({},De,M.to.state):De,force:Ne}),Z||E)}else M=W(E,te,!0,g,De);return ce(E,te,M),M})}function P(O,Z){const J=b(O,Z);return J?Promise.reject(J):Promise.resolve()}function H(O){const Z=Jt.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(O):O()}function ne(O,Z){let J;const[te,De,Ne]=x3(O,Z);J=Lr(te.reverse(),"beforeRouteLeave",O,Z);for(const _ of te)_.leaveGuards.forEach(E=>{J.push(Tn(E,O,Z))});const g=P.bind(null,O,Z);return J.push(g),It(J).then(()=>{J=[];for(const _ of r.list())J.push(Tn(_,O,Z));return J.push(g),It(J)}).then(()=>{J=Lr(De,"beforeRouteUpdate",O,Z);for(const _ of De)_.updateGuards.forEach(E=>{J.push(Tn(E,O,Z))});return J.push(g),It(J)}).then(()=>{J=[];for(const _ of O.matched)if(_.beforeEnter&&!Z.matched.includes(_))if(St(_.beforeEnter))for(const E of _.beforeEnter)J.push(Tn(E,O,Z));else J.push(Tn(_.beforeEnter,O,Z));return J.push(g),It(J)}).then(()=>(O.matched.forEach(_=>_.enterCallbacks={}),J=Lr(Ne,"beforeRouteEnter",O,Z),J.push(g),It(J))).then(()=>{J=[];for(const _ of i.list())J.push(Tn(_,O,Z));return J.push(g),It(J)}).catch(_=>dn(_,8)?_:Promise.reject(_))}function ce(O,Z,J){for(const te of a.list())H(()=>te(O,Z,J))}function W(O,Z,J,te,De){const Ne=b(O,Z);if(Ne)return Ne;const g=Z===kn,_=gn?history.state:{};J&&(te||g?l.replace(O.fullPath,Ie({scroll:g&&_&&_.scroll},De)):l.push(O.fullPath,De)),c.value=O,Pt(O,Z,J,g),Me()}let me;function ve(){me||(me=l.listen((O,Z,J)=>{if(!Yn.listening)return;const te=C(O),De=F(te);if(De){j(Ie(De,{replace:!0}),te).catch(vo);return}p=te;const Ne=c.value;gn&&_8(cu(Ne.fullPath,J.delta),mr()),ne(te,Ne).catch(g=>dn(g,12)?g:dn(g,2)?(j(g.to,te).then(_=>{dn(_,20)&&!J.delta&&J.type===Oo.pop&&l.go(-1,!1)}).catch(vo),Promise.reject()):(J.delta&&l.go(-J.delta,!1),re(g,te,Ne))).then(g=>{g=g||W(te,Ne,!1),g&&(J.delta&&!dn(g,8)?l.go(-J.delta,!1):J.type===Oo.pop&&dn(g,20)&&l.go(-1,!1)),ce(te,Ne,g)}).catch(vo)}))}let Ae=eo(),je=eo(),ee;function re(O,Z,J){Me(O);const te=je.list();return te.length?te.forEach(De=>De(O,Z,J)):($e("uncaught error during route navigation:"),console.error(O)),Promise.reject(O)}function xe(){return ee&&c.value!==kn?Promise.resolve():new Promise((O,Z)=>{Ae.add([O,Z])})}function Me(O){return ee||(ee=!O,ve(),Ae.list().forEach(([Z,J])=>O?J(O):Z()),Ae.reset()),O}function Pt(O,Z,J,te){const{scrollBehavior:De}=t;if(!gn||!De)return Promise.resolve();const Ne=!J&&b8(cu(O.fullPath,0))||(te||!J)&&history.state&&history.state.scroll||null;return at().then(()=>De(O,Z,Ne)).then(g=>g&&v8(g)).catch(g=>re(g,O,Z))}const rt=O=>l.go(O);let At;const Jt=new Set,Yn={currentRoute:c,listening:!0,addRoute:y,removeRoute:m,hasRoute:B,getRoutes:A,resolve:C,options:t,push:x,replace:k,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:je.add,isReady:xe,install(O){const Z=this;O.component("RouterLink",u3),O.component("RouterView",h3),O.config.globalProperties.$router=Z,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>$(c)}),gn&&!At&&c.value===kn&&(At=!0,x(l.location).catch(De=>{$e("Unexpected error when starting the router:",De)}));const J={};for(const De in kn)J[De]=S(()=>c.value[De]);O.provide($a,Z),O.provide(mf,Ue(J)),O.provide(Ei,c);const te=O.unmount;Jt.add(O),O.unmount=function(){Jt.delete(O),Jt.size<1&&(p=kn,me&&me(),me=null,c.value=kn,At=!1,ee=!1),te()},gn&&g3(O,Z,n)}};function It(O){return O.reduce((Z,J)=>Z.then(()=>H(J)),Promise.resolve())}return Yn}function x3(t,n){const s=[],o=[],l=[],r=Math.max(n.matched.length,t.matched.length);for(let i=0;i<r;i++){const a=n.matched[i];a&&(t.matched.find(p=>Gn(p,a))?o.push(a):s.push(a));const c=t.matched[i];c&&(n.matched.find(p=>Gn(p,c))||l.push(c))}return[s,o,l]}const jr=U(!1),bo=U(!1),Is=U(!1),k3=U(!0),Fi=g1({xs:460,...m1}),bs=X1(),Df=G1(),E3=S(()=>bs.height.value-bs.width.value/Mn>180),wf=V1(Yt?document.body:null),Nn=f1(),$3=S(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=Nn.value)==null?void 0:t.tagName)||"")||((n=Nn.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),F3=S(()=>{var t;return["BUTTON","A"].includes(((t=Nn.value)==null?void 0:t.tagName)||"")});Zt("slidev-camera","default");Zt("slidev-mic","default");const Dl=Zt("slidev-scale",0),yt=Zt("slidev-show-overview",!1),Nr=Zt("slidev-presenter-cursor",!0),Cu=Zt("slidev-show-editor",!1);Zt("slidev-editor-width",Yt?window.innerWidth*.4:100);const xf=ef(yt);function Du(t,n,s,o=l=>l){return t*o(.5-n*(.5-s))}function T3(t){return[-t[0],-t[1]]}function Gt(t,n){return[t[0]+n[0],t[1]+n[1]]}function jt(t,n){return[t[0]-n[0],t[1]-n[1]]}function zt(t,n){return[t[0]*n,t[1]*n]}function S3(t,n){return[t[0]/n,t[1]/n]}function no(t){return[t[1],-t[0]]}function wu(t,n){return t[0]*n[0]+t[1]*n[1]}function O3(t,n){return t[0]===n[0]&&t[1]===n[1]}function P3(t){return Math.hypot(t[0],t[1])}function I3(t){return t[0]*t[0]+t[1]*t[1]}function xu(t,n){return I3(jt(t,n))}function kf(t){return S3(t,P3(t))}function M3(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function so(t,n,s){let o=Math.sin(s),l=Math.cos(s),r=t[0]-n[0],i=t[1]-n[1],a=r*l-i*o,c=r*o+i*l;return[a+n[0],c+n[1]]}function Ti(t,n,s){return Gt(t,zt(jt(n,t),s))}function ku(t,n,s){return Gt(t,zt(n,s))}var{min:Ss,PI:L3}=Math,Eu=.275,oo=L3+1e-4;function j3(t,n={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:i=ee=>ee,start:a={},end:c={},last:p=!1}=n,{cap:d=!0,easing:f=ee=>ee*(2-ee)}=a,{cap:h=!0,easing:y=ee=>--ee*ee*ee+1}=c;if(t.length===0||s<=0)return[];let m=t[t.length-1].runningLength,A=a.taper===!1?0:a.taper===!0?Math.max(s,m):a.taper,B=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,C=Math.pow(s*o,2),D=[],b=[],x=t.slice(0,10).reduce((ee,re)=>{let xe=re.pressure;if(r){let Me=Ss(1,re.distance/s),Pt=Ss(1,1-Me);xe=Ss(1,ee+(Pt-ee)*(Me*Eu))}return(ee+xe)/2},t[0].pressure),k=Du(s,l,t[t.length-1].pressure,i),F,j=t[0].vector,P=t[0].point,H=P,ne=P,ce=H,W=!1;for(let ee=0;ee<t.length;ee++){let{pressure:re}=t[ee],{point:xe,vector:Me,distance:Pt,runningLength:rt}=t[ee];if(ee<t.length-1&&m-rt<3)continue;if(l){if(r){let te=Ss(1,Pt/s),De=Ss(1,1-te);re=Ss(1,x+(De-x)*(te*Eu))}k=Du(s,l,re,i)}else k=s/2;F===void 0&&(F=k);let At=rt<A?f(rt/A):1,Jt=m-rt<B?y((m-rt)/B):1;k=Math.max(.01,k*Math.min(At,Jt));let Yn=(ee<t.length-1?t[ee+1]:t[ee]).vector,It=ee<t.length-1?wu(Me,Yn):1,O=wu(Me,j)<0&&!W,Z=It!==null&&It<0;if(O||Z){let te=zt(no(j),k);for(let De=1/13,Ne=0;Ne<=1;Ne+=De)ne=so(jt(xe,te),xe,oo*Ne),D.push(ne),ce=so(Gt(xe,te),xe,oo*-Ne),b.push(ce);P=ne,H=ce,Z&&(W=!0);continue}if(W=!1,ee===t.length-1){let te=zt(no(Me),k);D.push(jt(xe,te)),b.push(Gt(xe,te));continue}let J=zt(no(Ti(Yn,Me,It)),k);ne=jt(xe,J),(ee<=1||xu(P,ne)>C)&&(D.push(ne),P=ne),ce=Gt(xe,J),(ee<=1||xu(H,ce)>C)&&(b.push(ce),H=ce),x=re,j=Me}let me=t[0].point.slice(0,2),ve=t.length>1?t[t.length-1].point.slice(0,2):Gt(t[0].point,[1,1]),Ae=[],je=[];if(t.length===1){if(!(A||B)||p){let ee=ku(me,kf(no(jt(me,ve))),-(F||k)),re=[];for(let xe=1/13,Me=xe;Me<=1;Me+=xe)re.push(so(ee,me,oo*2*Me));return re}}else{if(!(A||B&&t.length===1))if(d)for(let re=1/13,xe=re;xe<=1;xe+=re){let Me=so(b[0],me,oo*xe);Ae.push(Me)}else{let re=jt(D[0],b[0]),xe=zt(re,.5),Me=zt(re,.51);Ae.push(jt(me,xe),jt(me,Me),Gt(me,Me),Gt(me,xe))}let ee=no(T3(t[t.length-1].vector));if(B||A&&t.length===1)je.push(ve);else if(h){let re=ku(ve,ee,k);for(let xe=1/29,Me=xe;Me<1;Me+=xe)je.push(so(re,ve,oo*3*Me))}else je.push(Gt(ve,zt(ee,k)),Gt(ve,zt(ee,k*.99)),jt(ve,zt(ee,k*.99)),jt(ve,zt(ee,k)))}return D.concat(je,b.reverse(),Ae)}function N3(t,n={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=n;if(t.length===0)return[];let i=.15+(1-o)*.85,a=Array.isArray(t[0])?t:t.map(({x:y,y:m,pressure:A=.5})=>[y,m,A]);if(a.length===2){let y=a[1];a=a.slice(0,-1);for(let m=1;m<5;m++)a.push(Ti(a[0],y,m/4))}a.length===1&&(a=[...a,[...Gt(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,f=c[0],h=a.length-1;for(let y=1;y<a.length;y++){let m=r&&y===h?a[y].slice(0,2):Ti(f.point,a[y],i);if(O3(f.point,m))continue;let A=M3(m,f.point);if(d+=A,y<h&&!p){if(d<l)continue;p=!0}f={point:m,pressure:a[y][2]>=0?a[y][2]:.5,vector:kf(jt(f.point,m)),distance:A,runningLength:d},c.push(f)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function R3(t,n={}){return j3(N3(t,n),n)}var H3=()=>({events:{},emit(t,...n){let s=this.events[t]||[];for(let o=0,l=s.length;o<l;o++)s[o](...n)},on(t,n){var s;return(s=this.events[t])!=null&&s.push(n)||(this.events[t]=[n]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(l=>n!==l)}}});function Wl(t,n){return t-n}function q3(t){return t<0?-1:1}function Kl(t){return[Math.abs(t),q3(t)]}function Ef(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var V3=2,vn=V3,zs=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var n;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-l.left)*o,y:(t.pageY-l.top)*o,pressure:t.pressure}}else{const l=this.drauu.svgPoint;l.x=t.clientX,l.y=t.clientY;const r=l.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*o,y:r.y*o,pressure:t.pressure}}}createElement(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg",t),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(vn))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},z3=class extends zs{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=R3(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[l,r],i,a)=>{const[c,p]=a[(i+1)%a.length];return o.push(l,r,(l+c)/2,(r+p)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},G3=class extends zs{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Kl(t.x-this.start.x),[o,l]=Kl(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,i]=[this.start.x,this.start.x+n*s].sort(Wl),[a,c]=[this.start.y,this.start.y+o*l].sort(Wl);this.attr("cx",(r+i)/2),this.attr("cy",(a+c)/2),this.attr("rx",(i-r)/2),this.attr("ry",(c-a)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function $f(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",t),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var U3=class extends zs{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=Ef(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append($f(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:s}=t;if(this.shiftPressed){const o=t.x-this.start.x,l=t.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+l*r,s=this.start.y+l):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},W3=class extends zs{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Kl(t.x-this.start.x),[o,l]=Kl(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,i]=[this.start.x,this.start.x+n*s].sort(Wl),[a,c]=[this.start.y,this.start.y+o*l].sort(Wl);this.attr("x",r),this.attr("y",a),this.attr("width",i-r),this.attr("height",c-a)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function K3(t,n){const s=t.x-n.x,o=t.y-n.y;return s*s+o*o}function Y3(t,n,s){let o=n.x,l=n.y,r=s.x-o,i=s.y-l;if(r!==0||i!==0){const a=((t.x-o)*r+(t.y-l)*i)/(r*r+i*i);a>1?(o=s.x,l=s.y):a>0&&(o+=r*a,l+=i*a)}return r=t.x-o,i=t.y-l,r*r+i*i}function Z3(t,n){let s=t[0];const o=[s];let l;for(let r=1,i=t.length;r<i;r++)l=t[r],K3(l,s)>n&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function Si(t,n,s,o,l){let r=o,i=0;for(let a=n+1;a<s;a++){const c=Y3(t[a],t[n],t[s]);c>r&&(i=a,r=c)}r>o&&(i-n>1&&Si(t,n,i,o,l),l.push(t[i]),s-i>1&&Si(t,i,s,o,l))}function Q3(t,n){const s=t.length-1,o=[t[0]];return Si(t,0,s,n,o),o.push(t[s]),o}function $u(t,n,s=!1){if(t.length<=2)return t;const o=n!==void 0?n*n:1;return t=s?t:Z3(t,o),t=Q3(t,o),t}var J3=class extends zs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=Ef();const n=$f(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=$u(this.points,1,!0),this.count=0),this.attr("d",Tu(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",Tu($u(this.points,1,!0))),!t.getTotalLength()))}};function X3(t,n){const s=n.x-t.x,o=n.y-t.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function Fu(t,n,s,o){const l=n||t,r=s||t,i=.2,a=X3(l,r),c=a.angle+(o?Math.PI:0),p=a.length*i,d=t.x+Math.cos(c)*p,f=t.y+Math.sin(c)*p;return{x:d,y:f}}function e0(t,n,s){const o=Fu(s[n-1],s[n-2],t),l=Fu(t,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(vn)},${o.y.toFixed(vn)} ${l.x.toFixed(vn)},${l.y.toFixed(vn)} ${t.x.toFixed(vn)},${t.y.toFixed(vn)}`}function Tu(t){return t.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(vn)},${s.y.toFixed(vn)}`:`${n} ${e0(s,o,l)}`,"")}var t0=class extends zs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const i=r.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const c=r.getPointAtLength(i*a/this.pathSubFactor),p=r.getPointAtLength(i*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:p.x,y1:c.y,y2:p.y,segment:a,element:o||r})}}else r.children&&n(r.children,r)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!t.includes(s))),t.length>0}lineLineIntersect(t,n){const s=t.x1,o=t.x2,l=n.x1,r=n.x2,i=t.y1,a=t.y2,c=n.y1,p=n.y2,d=(s-o)*(c-p)-(i-a)*(l-r),f=(s*a-i*o)*(l-r)-(s-o)*(l*p-c*r),h=(s*a-i*o)*(c-p)-(i-a)*(l*p-c*r),y=(m,A,B)=>m>=A&&m<=B?!0:m>=B&&m<=A;if(d===0)return!1;{const m={x:f/d,y:h/d};return y(m.x,s,o)&&y(m.y,i,a)&&y(m.x,l,r)&&y(m.y,c,p)}}};function n0(t){return{draw:new J3(t),stylus:new z3(t),line:new U3(t),rectangle:new W3(t),ellipse:new G3(t),eraseLine:new t0(t)}}var s0=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=H3(),this._models=n0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function o0(t){return new s0(t)}const Oi=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],on=Zt("slidev-drawing-enabled",!1),bS=Zt("slidev-drawing-pinned",!1),l0=U(!1),r0=U(!1),i0=U(!1),Io=U(!1),ps=S_(Zt("slidev-drawing-brush",{color:Oi[0],size:4,mode:"stylus"})),Su=U("stylus"),Ff=S(()=>Te.drawings.syncAll||Ct.value);let Mo=!1;const lo=S({get(){return Su.value},set(t){Su.value=t,t==="arrow"?(ps.mode="line",ps.arrowEnd=!0):(ps.mode=t,ps.arrowEnd=!1)}}),a0=Ue({brush:ps,acceptsInputTypes:S(()=>on.value&&(!Te.drawings.presenterOnly||Ct.value)?void 0:["pen"]),coordinateTransform:!1}),bt=lr(o0(a0));function c0(){bt.clear(),Ff.value&&Zd(Ke.value,"")}function Fa(){var t;r0.value=bt.canRedo(),l0.value=bt.canUndo(),i0.value=!!((t=bt.el)!=null&&t.children.length)}function u0(t){Mo=!0;const n=Gl[t||Ke.value];n!=null?bt.load(n):bt.clear(),Fa(),Mo=!1}bt.on("changed",()=>{if(Fa(),!Mo){const t=bt.dump(),n=Ke.value;(Gl[n]||"")!==t&&Ff.value&&Zd(n,bt.dump())}});E_(t=>{Mo=!0,t[Ke.value]!=null&&bt.load(t[Ke.value]||""),Mo=!1,Fa()});at(()=>{ge(Ke,()=>{bt.mounted&&u0()},{immediate:!0})});bt.on("start",()=>Io.value=!0);bt.on("end",()=>Io.value=!1);window.addEventListener("keydown",t=>{if(!on.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let s=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?bt.redo():bt.undo():t.code==="Escape"?on.value=!1:t.code==="KeyL"&&n?lo.value="line":t.code==="KeyA"&&n?lo.value="arrow":t.code==="KeyS"&&n?lo.value="stylus":t.code==="KeyR"&&n?lo.value="rectangle":t.code==="KeyE"&&n?lo.value="ellipse":t.code==="KeyC"&&n?c0():t.code.startsWith("Digit")&&n&&+t.code[5]<=Oi.length?ps.color=Oi[+t.code[5]-1]:s=!1,s&&(t.preventDefault(),t.stopPropagation())},!1);function Xe(...t){return S(()=>t.every(n=>Ze(n)))}function kt(t){return S(()=>!Ze(t))}const Ou=$1(),Rr=Zt("slidev-color-schema","auto"),Pi=S(()=>Te.colorSchema!=="auto"),Ta=S({get(){return Pi.value?Te.colorSchema==="dark":Rr.value==="auto"?Ou.value:Rr.value==="dark"},set(t){Pi.value||(Rr.value=t===Ou.value?"auto":t?"dark":"light")}}),Tf=ef(Ta);Yt&&ge(Ta,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});const wl=U(1),xl=S(()=>Qe.length),Tt=U(0),Sa=U(0);function p0(){Tt.value>wl.value&&(Tt.value-=1)}function d0(){Tt.value<xl.value&&(Tt.value+=1)}function f0(){if(Tt.value>wl.value){let t=Tt.value-Sa.value;t<wl.value&&(t=wl.value),Tt.value=t}}function h0(){if(Tt.value<xl.value){let t=Tt.value+Sa.value;t>xl.value&&(t=xl.value),Tt.value=t}}function y0(){const{escape:t,space:n,shift:s,left:o,right:l,up:r,down:i,enter:a,d:c,g:p,o:d}=Df;let f=[{name:"next_space",key:Xe(n,kt(s)),fn:Rn,autoRepeat:!0},{name:"prev_space",key:Xe(n,s),fn:Hn,autoRepeat:!0},{name:"next_right",key:Xe(l,kt(s),kt(yt)),fn:Rn,autoRepeat:!0},{name:"prev_left",key:Xe(o,kt(s),kt(yt)),fn:Hn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Rn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Hn,autoRepeat:!0},{name:"next_down",key:Xe(i,kt(yt)),fn:jo,autoRepeat:!0},{name:"prev_up",key:Xe(r,kt(yt)),fn:()=>No(!1),autoRepeat:!0},{name:"next_shift",key:Xe(l,s),fn:jo,autoRepeat:!0},{name:"prev_shift",key:Xe(o,s),fn:()=>No(!1),autoRepeat:!0},{name:"toggle_dark",key:Xe(c,kt(on)),fn:Tf},{name:"toggle_overview",key:Xe(d,kt(on)),fn:xf},{name:"hide_overview",key:Xe(t,kt(on)),fn:()=>yt.value=!1},{name:"goto",key:Xe(p,kt(on)),fn:()=>Is.value=!Is.value},{name:"next_overview",key:Xe(l,yt),fn:d0},{name:"prev_overview",key:Xe(o,yt),fn:p0},{name:"up_overview",key:Xe(r,yt),fn:f0},{name:"down_overview",key:Xe(i,yt),fn:h0},{name:"goto_from_overview",key:Xe(a,yt),fn:()=>{Vs(Tt.value),yt.value=!1}}];const h=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&h.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const Sf=Xe(kt($3),kt(F3),k3);function m0(t,n,s=!1){typeof t=="string"&&(t=Df[t]);const o=Xe(t,Sf);let l=0,r;const i=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(i,Math.max(1e3-l*250,150)),l++),n()};return ge(o,i,{flush:"sync"})}function g0(t,n){return d1(t,s=>{Sf.value&&(s.repeat||n())})}function v0(){const t=y0();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&m0(s.key,s.fn,s.autoRepeat)}),g0("f",()=>wf.toggle())}const _0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},b0=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),A0=[b0];function B0(t,n){return v(),w("svg",_0,A0)}const C0={name:"carbon-close",render:B0};function Oa(t,n=""){var l,r;const s=["slidev-page",n],o=(r=(l=t==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const D0=be({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;q(K);const s=U(),o=H1(s),l=S(()=>n.width?n.width:o.width.value),r=S(()=>n.width?n.width/Mn:o.height.value);n.width&&ws(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const i=S(()=>l.value/r.value),a=S(()=>n.scale&&!bn.value?n.scale:i.value<Mn?l.value/Ln:r.value*Mn/Ln),c=S(()=>({height:`${xa}px`,width:`${Ln}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),p=S(()=>({"select-none":!Te.selectable}));return $t(Wd,a),(d,f)=>(v(),w("div",{id:"slide-container",ref_key:"root",ref:s,class:Le(p.value)},[e("div",{id:"slide-content",style:nt(c.value)},[dt(d.$slots,"default")],4),dt(d.$slots,"controls")],2))}});const Y=(t,n)=>{const s=t.__vccOpts||t;for(const[o,l]of n)s[o]=l;return s},Of=Y(D0,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Pa=be({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const s=sn(t,"clicks",n),o=sn(t,"clicksElements",n),l=sn(t,"clicksDisabled",n),r=sn(t,"clicksOrderMap",n);o.value.length=0,$t(d_,t.route),$t(f_,t.context),$t(mo,s),$t(go,l),$t(rs,o),$t(bi,r)},render(){var t,n;return this.$props.is?_t(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}}),w0=["innerHTML"],x0=be({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){return q(K),(n,s)=>$(Gl)[n.page]?(v(),w("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:$(Gl)[n.page]},null,8,w0)):pe("v-if",!0)}}),Pf=Y(x0,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),k0=Object.freeze(Object.defineProperty({__proto__:null,default:Pf},Symbol.toStringTag,{value:"Module"})),E0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},$0=["onClick"],Hr=4*16*2,Pu=2*16,F0=be({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(t,{emit:n}){const s=t;q(K);const o=sn(s,"modelValue",n);function l(){o.value=!1}function r(f){Vs(f),l()}function i(f){return f===Tt.value}const a=Fi.smaller("xs"),c=Fi.smaller("sm"),p=S(()=>a.value?bs.width.value-Hr:c.value?(bs.width.value-Hr-Pu)/2:300),d=S(()=>Math.floor((bs.width.value-Hr)/(p.value+Pu)));return ws(()=>{Tt.value=Ke.value,Sa.value=d.value}),(f,h)=>{const y=C0;return v(),w(Fe,null,[ae(e("div",E0,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:nt(`grid-template-columns: repeat(auto-fit,minmax(${p.value}px,1fr))`)},[(v(!0),w(Fe,null,xs($(Qe),(m,A)=>(v(),w("div",{key:m.path,class:"relative"},[e("div",{class:Le(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(A+1),"border-gray-400":!i(A+1)}]),style:nt($(ka)),onClick:B=>r(+m.path)},[(v(),X(Of,{key:m.path,width:p.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:I(()=>[m!=null&&m.component?(v(),X($(Pa),{key:0,is:m.component,"clicks-disabled":!0,class:Le($(Oa)(m)),route:m,context:"overview"},null,8,["is","class","route"])):pe("v-if",!0),T(Pf,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,$0),e("div",{class:"absolute top-0 opacity-50",style:nt(`left: ${p.value+5}px`)},lt(A+1),5)]))),128))],4)],512),[[Md,$(o)]]),$(o)?(v(),w("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[T(y)])):pe("v-if",!0)],64)}}});const T0=Y(F0,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),S0="/courses/data-structure/functional-programming/assets/logo-b72bde5d.png",O0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},P0=be({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const s=t;q(K);const o=sn(s,"modelValue",n);function l(){o.value=!1}return(r,i)=>(v(),X(id,null,[$(o)?(v(),w("div",O0,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=a=>l())}),e("div",{class:Le(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[dt(r.$slots,"default")],2)])):pe("v-if",!0)],1024))}}),I0=Y(P0,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Modal.vue"]]),M0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},L0=["innerHTML"],j0=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:S0,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),u("dev ")])])],-1),N0=be({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const s=t;q(K);const o=sn(s,"modelValue",n),l=S(()=>typeof Te.info=="string");return(r,i)=>(v(),X(I0,{modelValue:$(o),"onUpdate:modelValue":i[0]||(i[0]=a=>Se(o)?o.value=a:null),class:"px-6 py-4"},{default:I(()=>[e("div",M0,[l.value?(v(),w("div",{key:0,class:"mb-4",innerHTML:$(Te).info},null,8,L0)):pe("v-if",!0),j0])]),_:1},8,["modelValue"]))}});const R0=Y(N0,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function Bn(t){return Array.isArray?Array.isArray(t):Lf(t)==="[object Array]"}const H0=1/0;function q0(t){if(typeof t=="string")return t;let n=t+"";return n=="0"&&1/t==-H0?"-0":n}function V0(t){return t==null?"":q0(t)}function ln(t){return typeof t=="string"}function If(t){return typeof t=="number"}function z0(t){return t===!0||t===!1||G0(t)&&Lf(t)=="[object Boolean]"}function Mf(t){return typeof t=="object"}function G0(t){return Mf(t)&&t!==null}function Ft(t){return t!=null}function qr(t){return!t.trim().length}function Lf(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const U0="Incorrect 'index' type",W0=t=>`Invalid value for key ${t}`,K0=t=>`Pattern length exceeds max of ${t}.`,Y0=t=>`Missing ${t} property in key`,Z0=t=>`Property 'weight' in key '${t}' must be a positive integer`,Iu=Object.prototype.hasOwnProperty;class Q0{constructor(n){this._keys=[],this._keyMap={};let s=0;n.forEach(o=>{let l=jf(o);s+=l.weight,this._keys.push(l),this._keyMap[l.id]=l,s+=l.weight}),this._keys.forEach(o=>{o.weight/=s})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function jf(t){let n=null,s=null,o=null,l=1,r=null;if(ln(t)||Bn(t))o=t,n=Mu(t),s=Ii(t);else{if(!Iu.call(t,"name"))throw new Error(Y0("name"));const i=t.name;if(o=i,Iu.call(t,"weight")&&(l=t.weight,l<=0))throw new Error(Z0(i));n=Mu(i),s=Ii(i),r=t.getFn}return{path:n,id:s,weight:l,src:o,getFn:r}}function Mu(t){return Bn(t)?t:t.split(".")}function Ii(t){return Bn(t)?t.join("."):t}function J0(t,n){let s=[],o=!1;const l=(r,i,a)=>{if(Ft(r))if(!i[a])s.push(r);else{let c=i[a];const p=r[c];if(!Ft(p))return;if(a===i.length-1&&(ln(p)||If(p)||z0(p)))s.push(V0(p));else if(Bn(p)){o=!0;for(let d=0,f=p.length;d<f;d+=1)l(p[d],i,a+1)}else i.length&&l(p,i,a+1)}};return l(t,ln(n)?n.split("."):n,0),o?s:s[0]}const X0={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},e5={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,n)=>t.score===n.score?t.idx<n.idx?-1:1:t.score<n.score?-1:1},t5={location:0,threshold:.6,distance:100},n5={useExtendedSearch:!1,getFn:J0,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var fe={...e5,...X0,...t5,...n5};const s5=/[^ ]+/g;function o5(t=1,n=3){const s=new Map,o=Math.pow(10,n);return{get(l){const r=l.match(s5).length;if(s.has(r))return s.get(r);const i=1/Math.pow(r,.5*t),a=parseFloat(Math.round(i*o)/o);return s.set(r,a),a},clear(){s.clear()}}}class Ia{constructor({getFn:n=fe.getFn,fieldNormWeight:s=fe.fieldNormWeight}={}){this.norm=o5(s,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ln(this.docs[0])?this.docs.forEach((n,s)=>{this._addString(n,s)}):this.docs.forEach((n,s)=>{this._addObject(n,s)}),this.norm.clear())}add(n){const s=this.size();ln(n)?this._addString(n,s):this._addObject(n,s)}removeAt(n){this.records.splice(n,1);for(let s=n,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(n,s){return n[this._keysMap[s]]}size(){return this.records.length}_addString(n,s){if(!Ft(n)||qr(n))return;let o={v:n,i:s,n:this.norm.get(n)};this.records.push(o)}_addObject(n,s){let o={i:s,$:{}};this.keys.forEach((l,r)=>{let i=l.getFn?l.getFn(n):this.getFn(n,l.path);if(Ft(i)){if(Bn(i)){let a=[];const c=[{nestedArrIndex:-1,value:i}];for(;c.length;){const{nestedArrIndex:p,value:d}=c.pop();if(Ft(d))if(ln(d)&&!qr(d)){let f={v:d,i:p,n:this.norm.get(d)};a.push(f)}else Bn(d)&&d.forEach((f,h)=>{c.push({nestedArrIndex:h,value:f})})}o.$[r]=a}else if(ln(i)&&!qr(i)){let a={v:i,n:this.norm.get(i)};o.$[r]=a}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Nf(t,n,{getFn:s=fe.getFn,fieldNormWeight:o=fe.fieldNormWeight}={}){const l=new Ia({getFn:s,fieldNormWeight:o});return l.setKeys(t.map(jf)),l.setSources(n),l.create(),l}function l5(t,{getFn:n=fe.getFn,fieldNormWeight:s=fe.fieldNormWeight}={}){const{keys:o,records:l}=t,r=new Ia({getFn:n,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(l),r}function yl(t,{errors:n=0,currentLocation:s=0,expectedLocation:o=0,distance:l=fe.distance,ignoreLocation:r=fe.ignoreLocation}={}){const i=n/t.length;if(r)return i;const a=Math.abs(o-s);return l?i+a/l:a?1:i}function r5(t=[],n=fe.minMatchCharLength){let s=[],o=-1,l=-1,r=0;for(let i=t.length;r<i;r+=1){let a=t[r];a&&o===-1?o=r:!a&&o!==-1&&(l=r-1,l-o+1>=n&&s.push([o,l]),o=-1)}return t[r-1]&&r-o>=n&&s.push([o,r-1]),s}const as=32;function i5(t,n,s,{location:o=fe.location,distance:l=fe.distance,threshold:r=fe.threshold,findAllMatches:i=fe.findAllMatches,minMatchCharLength:a=fe.minMatchCharLength,includeMatches:c=fe.includeMatches,ignoreLocation:p=fe.ignoreLocation}={}){if(n.length>as)throw new Error(K0(as));const d=n.length,f=t.length,h=Math.max(0,Math.min(o,f));let y=r,m=h;const A=a>1||c,B=A?Array(f):[];let C;for(;(C=t.indexOf(n,m))>-1;){let j=yl(n,{currentLocation:C,expectedLocation:h,distance:l,ignoreLocation:p});if(y=Math.min(j,y),m=C+d,A){let P=0;for(;P<d;)B[C+P]=1,P+=1}}m=-1;let D=[],b=1,x=d+f;const k=1<<d-1;for(let j=0;j<d;j+=1){let P=0,H=x;for(;P<H;)yl(n,{errors:j,currentLocation:h+H,expectedLocation:h,distance:l,ignoreLocation:p})<=y?P=H:x=H,H=Math.floor((x-P)/2+P);x=H;let ne=Math.max(1,h-H+1),ce=i?f:Math.min(h+H,f)+d,W=Array(ce+2);W[ce+1]=(1<<j)-1;for(let ve=ce;ve>=ne;ve-=1){let Ae=ve-1,je=s[t.charAt(Ae)];if(A&&(B[Ae]=+!!je),W[ve]=(W[ve+1]<<1|1)&je,j&&(W[ve]|=(D[ve+1]|D[ve])<<1|1|D[ve+1]),W[ve]&k&&(b=yl(n,{errors:j,currentLocation:Ae,expectedLocation:h,distance:l,ignoreLocation:p}),b<=y)){if(y=b,m=Ae,m<=h)break;ne=Math.max(1,2*h-m)}}if(yl(n,{errors:j+1,currentLocation:h,expectedLocation:h,distance:l,ignoreLocation:p})>y)break;D=W}const F={isMatch:m>=0,score:Math.max(.001,b)};if(A){const j=r5(B,a);j.length?c&&(F.indices=j):F.isMatch=!1}return F}function a5(t){let n={};for(let s=0,o=t.length;s<o;s+=1){const l=t.charAt(s);n[l]=(n[l]||0)|1<<o-s-1}return n}class Rf{constructor(n,{location:s=fe.location,threshold:o=fe.threshold,distance:l=fe.distance,includeMatches:r=fe.includeMatches,findAllMatches:i=fe.findAllMatches,minMatchCharLength:a=fe.minMatchCharLength,isCaseSensitive:c=fe.isCaseSensitive,ignoreLocation:p=fe.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:p},this.pattern=c?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(h,y)=>{this.chunks.push({pattern:h,alphabet:a5(h),startIndex:y})},f=this.pattern.length;if(f>as){let h=0;const y=f%as,m=f-y;for(;h<m;)d(this.pattern.substr(h,as),h),h+=as;if(y){const A=f-as;d(this.pattern.substr(A),A)}}else d(this.pattern,0)}searchIn(n){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(n=n.toLowerCase()),this.pattern===n){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,n.length-1]]),m}const{location:l,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:c,ignoreLocation:p}=this.options;let d=[],f=0,h=!1;this.chunks.forEach(({pattern:m,alphabet:A,startIndex:B})=>{const{isMatch:C,score:D,indices:b}=i5(n,m,A,{location:l+B,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:c,includeMatches:o,ignoreLocation:p});C&&(h=!0),f+=D,C&&b&&(d=[...d,...b])});let y={isMatch:h,score:h?f/this.chunks.length:1};return h&&o&&(y.indices=d),y}}class Kn{constructor(n){this.pattern=n}static isMultiMatch(n){return Lu(n,this.multiRegex)}static isSingleMatch(n){return Lu(n,this.singleRegex)}search(){}}function Lu(t,n){const s=t.match(n);return s?s[1]:null}class c5 extends Kn{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const s=n===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class u5 extends Kn{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const o=n.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,n.length-1]}}}class p5 extends Kn{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const s=n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class d5 extends Kn{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const s=!n.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class f5 extends Kn{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const s=n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class h5 extends Kn{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const s=!n.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,n.length-1]}}}class Hf extends Kn{constructor(n,{location:s=fe.location,threshold:o=fe.threshold,distance:l=fe.distance,includeMatches:r=fe.includeMatches,findAllMatches:i=fe.findAllMatches,minMatchCharLength:a=fe.minMatchCharLength,isCaseSensitive:c=fe.isCaseSensitive,ignoreLocation:p=fe.ignoreLocation}={}){super(n),this._bitapSearch=new Rf(n,{location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:p})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class qf extends Kn{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let s=0,o;const l=[],r=this.pattern.length;for(;(o=n.indexOf(this.pattern,s))>-1;)s=o+r,l.push([o,s-1]);const i=!!l.length;return{isMatch:i,score:i?0:1,indices:l}}}const Mi=[c5,qf,p5,d5,h5,f5,u5,Hf],ju=Mi.length,y5=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,m5="|";function g5(t,n={}){return t.split(m5).map(s=>{let o=s.trim().split(y5).filter(r=>r&&!!r.trim()),l=[];for(let r=0,i=o.length;r<i;r+=1){const a=o[r];let c=!1,p=-1;for(;!c&&++p<ju;){const d=Mi[p];let f=d.isMultiMatch(a);f&&(l.push(new d(f,n)),c=!0)}if(!c)for(p=-1;++p<ju;){const d=Mi[p];let f=d.isSingleMatch(a);if(f){l.push(new d(f,n));break}}}return l})}const v5=new Set([Hf.type,qf.type]);class _5{constructor(n,{isCaseSensitive:s=fe.isCaseSensitive,includeMatches:o=fe.includeMatches,minMatchCharLength:l=fe.minMatchCharLength,ignoreLocation:r=fe.ignoreLocation,findAllMatches:i=fe.findAllMatches,location:a=fe.location,threshold:c=fe.threshold,distance:p=fe.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:o,minMatchCharLength:l,findAllMatches:i,ignoreLocation:r,location:a,threshold:c,distance:p},this.pattern=s?n:n.toLowerCase(),this.query=g5(this.pattern,this.options)}static condition(n,s){return s.useExtendedSearch}searchIn(n){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:l}=this.options;n=l?n:n.toLowerCase();let r=0,i=[],a=0;for(let c=0,p=s.length;c<p;c+=1){const d=s[c];i.length=0,r=0;for(let f=0,h=d.length;f<h;f+=1){const y=d[f],{isMatch:m,indices:A,score:B}=y.search(n);if(m){if(r+=1,a+=B,o){const C=y.constructor.type;v5.has(C)?i=[...i,...A]:i.push(A)}}else{a=0,r=0,i.length=0;break}}if(r){let f={isMatch:!0,score:a/r};return o&&(f.indices=i),f}}return{isMatch:!1,score:1}}}const Li=[];function b5(...t){Li.push(...t)}function ji(t,n){for(let s=0,o=Li.length;s<o;s+=1){let l=Li[s];if(l.condition(t,n))return new l(t,n)}return new Rf(t,n)}const Yl={AND:"$and",OR:"$or"},Ni={PATH:"$path",PATTERN:"$val"},Ri=t=>!!(t[Yl.AND]||t[Yl.OR]),A5=t=>!!t[Ni.PATH],B5=t=>!Bn(t)&&Mf(t)&&!Ri(t),Nu=t=>({[Yl.AND]:Object.keys(t).map(n=>({[n]:t[n]}))});function Vf(t,n,{auto:s=!0}={}){const o=l=>{let r=Object.keys(l);const i=A5(l);if(!i&&r.length>1&&!Ri(l))return o(Nu(l));if(B5(l)){const c=i?l[Ni.PATH]:r[0],p=i?l[Ni.PATTERN]:l[c];if(!ln(p))throw new Error(W0(c));const d={keyId:Ii(c),pattern:p};return s&&(d.searcher=ji(p,n)),d}let a={children:[],operator:r[0]};return r.forEach(c=>{const p=l[c];Bn(p)&&p.forEach(d=>{a.children.push(o(d))})}),a};return Ri(t)||(t=Nu(t)),o(t)}function C5(t,{ignoreFieldNorm:n=fe.ignoreFieldNorm}){t.forEach(s=>{let o=1;s.matches.forEach(({key:l,norm:r,score:i})=>{const a=l?l.weight:null;o*=Math.pow(i===0&&a?Number.EPSILON:i,(a||1)*(n?1:r))}),s.score=o})}function D5(t,n){const s=t.matches;n.matches=[],Ft(s)&&s.forEach(o=>{if(!Ft(o.indices)||!o.indices.length)return;const{indices:l,value:r}=o;let i={indices:l,value:r};o.key&&(i.key=o.key.src),o.idx>-1&&(i.refIndex=o.idx),n.matches.push(i)})}function w5(t,n){n.score=t.score}function x5(t,n,{includeMatches:s=fe.includeMatches,includeScore:o=fe.includeScore}={}){const l=[];return s&&l.push(D5),o&&l.push(w5),t.map(r=>{const{idx:i}=r,a={item:n[i],refIndex:i};return l.length&&l.forEach(c=>{c(r,a)}),a})}class Gs{constructor(n,s={},o){this.options={...fe,...s},this.options.useExtendedSearch,this._keyStore=new Q0(this.options.keys),this.setCollection(n,o)}setCollection(n,s){if(this._docs=n,s&&!(s instanceof Ia))throw new Error(U0);this._myIndex=s||Nf(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){Ft(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const s=[];for(let o=0,l=this._docs.length;o<l;o+=1){const r=this._docs[o];n(r,o)&&(this.removeAt(o),o-=1,l-=1,s.push(r))}return s}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:s=-1}={}){const{includeMatches:o,includeScore:l,shouldSort:r,sortFn:i,ignoreFieldNorm:a}=this.options;let c=ln(n)?ln(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return C5(c,{ignoreFieldNorm:a}),r&&c.sort(i),If(s)&&s>-1&&(c=c.slice(0,s)),x5(c,this._docs,{includeMatches:o,includeScore:l})}_searchStringList(n){const s=ji(n,this.options),{records:o}=this._myIndex,l=[];return o.forEach(({v:r,i,n:a})=>{if(!Ft(r))return;const{isMatch:c,score:p,indices:d}=s.searchIn(r);c&&l.push({item:r,idx:i,matches:[{score:p,value:r,norm:a,indices:d}]})}),l}_searchLogical(n){const s=Vf(n,this.options),o=(a,c,p)=>{if(!a.children){const{keyId:f,searcher:h}=a,y=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:h});return y&&y.length?[{idx:p,item:c,matches:y}]:[]}const d=[];for(let f=0,h=a.children.length;f<h;f+=1){const y=a.children[f],m=o(y,c,p);if(m.length)d.push(...m);else if(a.operator===Yl.AND)return[]}return d},l=this._myIndex.records,r={},i=[];return l.forEach(({$:a,i:c})=>{if(Ft(a)){let p=o(s,a,c);p.length&&(r[c]||(r[c]={idx:c,item:a,matches:[]},i.push(r[c])),p.forEach(({matches:d})=>{r[c].matches.push(...d)}))}}),i}_searchObjectList(n){const s=ji(n,this.options),{keys:o,records:l}=this._myIndex,r=[];return l.forEach(({$:i,i:a})=>{if(!Ft(i))return;let c=[];o.forEach((p,d)=>{c.push(...this._findMatches({key:p,value:i[d],searcher:s}))}),c.length&&r.push({idx:a,item:i,matches:c})}),r}_findMatches({key:n,value:s,searcher:o}){if(!Ft(s))return[];let l=[];if(Bn(s))s.forEach(({v:r,i,n:a})=>{if(!Ft(r))return;const{isMatch:c,score:p,indices:d}=o.searchIn(r);c&&l.push({score:p,key:n,value:r,idx:i,norm:a,indices:d})});else{const{v:r,n:i}=s,{isMatch:a,score:c,indices:p}=o.searchIn(r);a&&l.push({score:c,key:n,value:r,norm:i,indices:p})}return l}}Gs.version="6.6.2";Gs.createIndex=Nf;Gs.parseIndex=l5;Gs.config=fe;Gs.parseQuery=Vf;b5(_5);const k5={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},E5=["value","disabled","onKeydown"],$5=["border","onClick"],F5={"w-4":"","text-right":"",op50:"","text-sm":""},T5=be({__name:"Goto",setup(t){q(K);const n=U(),s=U(),o=U(),l=U(),r=U(""),i=U(0);function a(b){return b!=null}const c=S(()=>new Gs(Qe.map(b=>{var x;return(x=b.meta)==null?void 0:x.slide}).filter(a),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=S(()=>r.value.startsWith("/")?r.value.substring(1):r.value),d=S(()=>c.value.search(p.value).map(b=>b.item)),f=S(()=>!!d.value.length);function h(){if(f.value){const b=d.value.at(i.value||0);b&&Vs(b.no)}y()}function y(){r.value="",Is.value=!1}function m(b){b.preventDefault(),i.value++,i.value>=d.value.length&&(i.value=0),B()}function A(b){b.preventDefault(),i.value--,i.value<=-2&&(i.value=d.value.length-1),B()}function B(){var x;const b=(x=l.value)==null?void 0:x[i.value];b&&o.value&&(b.offsetTop+b.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:b.offsetTop+b.offsetHeight-o.value.offsetHeight+1}):b.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:b.offsetTop}))}function C(b){i.value=0,r.value=b.target.value}function D(b){Vs(b),y()}return ge(Is,async b=>{var x;b?(r.value="",i.value=0,setTimeout(()=>{var k;return(k=s.value)==null?void 0:k.focus()},0)):(x=s.value)==null||x.blur()}),ge(Nn,()=>{var b;(b=n.value)!=null&&b.contains(Nn.value)||y()}),(b,x)=>(v(),w("div",{id:"slidev-goto-dialog",ref_key:"container",ref:n,class:Le(["fixed right-5 transition-all",$(Is)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[e("div",k5,[e("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:r.value,type:"text",disabled:!$(Is),class:Le(["outline-none bg-transparent",{"text-red-400":!f.value&&r.value}]),placeholder:"Goto...",onKeydown:[al(h,["enter"]),al(y,["escape"]),al(m,["down"]),al(A,["up"])],onInput:C},null,42,E5)]),d.value.length>0?(v(),w("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(v(!0),w(Fe,null,xs(d.value,(k,F)=>(v(),w("li",{ref_for:!0,ref_key:"items",ref:l,key:k.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:F===0?"":"t main",class:Le(i.value===F?"bg-active op100":"op80"),onClick:fv(j=>D(k.no),["stop"])},[e("div",F5,lt(k.no),1),u(" "+lt(k.title),1)],10,$5))),128))],512)):pe("v-if",!0)],2))}});const S5=Y(T5,[["__scopeId","data-v-f5ee02a7"],["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Goto.vue"]]),O5=be({__name:"Controls",setup(t){q(K);const n=cn(),s=cn();return(o,l)=>(v(),w(Fe,null,[T(T0,{modelValue:$(yt),"onUpdate:modelValue":l[0]||(l[0]=r=>Se(yt)?yt.value=r:null)},null,8,["modelValue"]),T(S5),n.value?(v(),X($(n),{key:0})):pe("v-if",!0),s.value?(v(),X($(s),{key:1,modelValue:$(jr),"onUpdate:modelValue":l[1]||(l[1]=r=>Se(jr)?jr.value=r:null)},null,8,["modelValue"])):pe("v-if",!0),$(Te).info?(v(),X(R0,{key:2,modelValue:$(bo),"onUpdate:modelValue":l[2]||(l[2]=r=>Se(bo)?bo.value=r:null)},null,8,["modelValue"])):pe("v-if",!0)],64))}}),P5=Y(O5,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Controls.vue"]]),I5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M5=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),L5=[M5];function j5(t,n){return v(),w("svg",I5,L5)}const N5={name:"carbon-settings-adjust",render:j5},R5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H5=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),q5=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),V5=[H5,q5];function z5(t,n){return v(),w("svg",R5,V5)}const G5={name:"carbon-information",render:z5},U5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W5=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),K5=[W5];function Y5(t,n){return v(),w("svg",U5,K5)}const Z5={name:"carbon-download",render:Y5},Q5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},J5=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),X5=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),eb=[J5,X5];function tb(t,n){return v(),w("svg",Q5,eb)}const nb={name:"carbon-user-speaker",render:tb},sb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ob=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),lb=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),rb=[ob,lb];function ib(t,n){return v(),w("svg",sb,rb)}const ab={name:"carbon-presentation-file",render:ib},cb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ub=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),pb=[ub];function db(t,n){return v(),w("svg",cb,pb)}const fb={name:"carbon-pen",render:db},hb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},yb=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),mb=[yb];function gb(t,n){return v(),w("svg",hb,mb)}const vb={name:"ph-cursor-duotone",render:gb},_b={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},bb=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),Ab=[bb];function Bb(t,n){return v(),w("svg",_b,Ab)}const zf={name:"ph-cursor-fill",render:Bb},Cb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Db=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),wb=[Db];function xb(t,n){return v(),w("svg",Cb,wb)}const kb={name:"carbon-sun",render:xb},Eb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$b=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Fb=[$b];function Tb(t,n){return v(),w("svg",Eb,Fb)}const Sb={name:"carbon-moon",render:Tb},Ob={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pb=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Ib=[Pb];function Mb(t,n){return v(),w("svg",Ob,Ib)}const Lb={name:"carbon-apps",render:Mb},jb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nb=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Rb=[Nb];function Hb(t,n){return v(),w("svg",jb,Rb)}const qb={name:"carbon-arrow-right",render:Hb},Vb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zb=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Gb=[zb];function Ub(t,n){return v(),w("svg",Vb,Gb)}const Wb={name:"carbon-arrow-left",render:Ub},Kb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yb=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Zb=[Yb];function Qb(t,n){return v(),w("svg",Kb,Zb)}const Jb={name:"carbon-maximize",render:Qb},Xb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eA=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),tA=[eA];function nA(t,n){return v(),w("svg",Xb,tA)}const sA={name:"carbon-minimize",render:nA},oA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lA=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),rA=[lA];function iA(t,n){return v(),w("svg",oA,rA)}const aA={name:"carbon-checkmark",render:iA},cA={class:"select-list"},uA={class:"title"},pA={class:"items"},dA=["onClick"],fA=be({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const s=t;q(K);const o=sn(s,"modelValue",n,{passive:!0});return(l,r)=>{const i=aA;return v(),w("div",cA,[e("div",uA,lt(t.title),1),e("div",pA,[(v(!0),w(Fe,null,xs(t.items,a=>(v(),w("div",{key:a.value,class:Le(["item",{active:$(o)===a.value}]),onClick:()=>{var c;o.value=a.value,(c=a.onClick)==null||c.call(a)}},[T(i,{class:Le(["text-green-500",{"opacity-0":$(o)!==a.value}])},null,8,["class"]),u(" "+lt(a.display||a.value),1)],10,dA))),128))])])}}});const hA=Y(fA,[["__scopeId","data-v-3f89fa11"],["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/SelectList.vue"]]),yA={class:"text-sm"},mA=be({__name:"Settings",setup(t){q(K);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(v(),w("div",yA,[T(hA,{modelValue:$(Dl),"onUpdate:modelValue":o[0]||(o[0]=l=>Se(Dl)?Dl.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),gA=Y(mA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Settings.vue"]]),vA={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},_A=be({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const s=t;q(K);const o=sn(s,"modelValue",n,{passive:!0}),l=U();return u1(l,()=>{o.value=!1}),(r,i)=>(v(),w("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Le({disabled:t.disabled}),onClick:i[0]||(i[0]=a=>o.value=!$(o))},[dt(r.$slots,"button",{class:Le({disabled:t.disabled})})],2),(v(),X(id,null,[$(o)?(v(),w("div",vA,[dt(r.$slots,"menu")])):pe("v-if",!0)],1024))],512))}}),bA=Y(_A,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/MenuButton.vue"]]),AA={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},BA={__name:"VerticalDivider",setup(t){return q(K),(n,s)=>(v(),w("div",AA))}},ml=Y(BA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),CA={render(){return[]}},DA={class:"slidev-icon-btn"},wA={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},xA={class:"my-auto"},kA={class:"opacity-50"},EA=be({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;q(K);const s=Fi.smaller("md"),{isFullscreen:o,toggle:l}=wf,r=S(()=>Vi.value?`?password=${Vi.value}`:""),i=S(()=>`/presenter/${Ke.value}${r.value}`),a=S(()=>`/${Ke.value}${r.value}`),c=U();function p(){c.value&&Nn.value&&c.value.contains(Nn.value)&&Nn.value.blur()}const d=S(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=cn(),h=cn();return jn(()=>import("./DrawingControls-30928430.js"),[]).then(y=>h.value=y.default),(y,m)=>{const A=sA,B=Jb,C=Wb,D=qb,b=Lb,x=Sb,k=kb,F=zf,j=vb,P=fb,H=ab,ne=Ge("RouterLink"),ce=nb,W=Z5,me=G5,ve=N5;return v(),w("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:Le(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:p},[$(mn)?pe("v-if",!0):(v(),w("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...Ae)=>$(l)&&$(l)(...Ae))},[$(o)?(v(),X(A,{key:0})):(v(),X(B,{key:1}))])),e("button",{class:Le(["slidev-icon-btn",{disabled:!$(ME)}]),onClick:m[1]||(m[1]=(...Ae)=>$(Hn)&&$(Hn)(...Ae))},[T(C)],2),e("button",{class:Le(["slidev-icon-btn",{disabled:!$(IE)}]),title:"Next",onClick:m[2]||(m[2]=(...Ae)=>$(Rn)&&$(Rn)(...Ae))},[T(D)],2),$(mn)?pe("v-if",!0):(v(),w("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Ae=>$(xf)())},[T(b)])),$(Pi)?pe("v-if",!0):(v(),w("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Ae=>$(Tf)())},[$(Ta)?(v(),X(x,{key:0})):(v(),X(k,{key:1}))])),T(ml),$(mn)?pe("v-if",!0):(v(),w(Fe,{key:3},[!$(Ct)&&!$(s)&&f.value?(v(),w(Fe,{key:0},[T($(f)),T(ml)],64)):pe("v-if",!0),$(Ct)?(v(),w("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Ae=>Nr.value=!$(Nr))},[$(Nr)?(v(),X(F,{key:0})):(v(),X(j,{key:1,class:"opacity-50"}))])):pe("v-if",!0)],64)),(!$(Te).drawings.presenterOnly||$(Ct))&&!$(mn)?(v(),w(Fe,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Ae=>on.value=!$(on))},[T(P),$(on)?(v(),w("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:nt({background:$(ps).color})},null,4)):pe("v-if",!0)]),T(ml)],64)):pe("v-if",!0),$(mn)?pe("v-if",!0):(v(),w(Fe,{key:5},[$(Ct)?(v(),X(ne,{key:0,to:a.value,class:"slidev-icon-btn",title:"Play Mode"},{default:I(()=>[T(H)]),_:1},8,["to"])):pe("v-if",!0),$(FE)?(v(),X(ne,{key:1,to:i.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:I(()=>[T(ce)]),_:1},8,["to"])):pe("v-if",!0),pe("v-if",!0)],64)),(v(),w(Fe,{key:6},[$(Te).download?(v(),w("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...Ae)=>$(zi)&&$(zi)(...Ae))},[T(W)])):pe("v-if",!0)],64)),!$(Ct)&&$(Te).info&&!$(mn)?(v(),w("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=Ae=>bo.value=!$(bo))},[T(me)])):pe("v-if",!0),!$(Ct)&&!$(mn)?(v(),X(bA,{key:8},{button:I(()=>[e("button",DA,[T(ve)])]),menu:I(()=>[T(gA)]),_:1})):pe("v-if",!0),$(mn)?pe("v-if",!0):(v(),X(ml,{key:9})),e("div",wA,[e("div",xA,[u(lt($(Ke))+" ",1),e("span",kA,"/ "+lt($(TE)),1)])]),T($(CA))],34)],512)}}}),$A=Y(EA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/NavControls.vue"]]),FA={__name:"SlidesTotal",setup(t){const n=q(K);return(s,o)=>(v(),w("span",null,lt($(n).nav.total),1))}},TA=Y(FA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/SlidesTotal.vue"]]),SA={__name:"SlideCurrentNo",setup(t){const n=q(K);return(s,o)=>(v(),w("span",null,lt($(n).nav.currentPage),1))}},OA=Y(SA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/SlideCurrentNo.vue"]]),PA=be({__name:"Pagination",props:{classNames:{type:[Array,String]},x:{default:"r",type:String,validator:t=>t==="l"||t==="r"},y:{default:"t",type:String,validator:t=>t==="b"||t==="t"}},setup(t){const{classNames:n,x:s,y:o}=t;q(K);const l=S(()=>[...n?Array.isArray(n)?n:[n]:[],s==="l"&&"left-0",s==="r"&&"right-0",o==="t"&&"top-0",o==="b"&&"bottom-0"]);return(r,i)=>{const a=OA,c=TA;return v(),w("div",{class:Le(["absolute p-2 text-xs",l.value])},[T(a),u(" / "),T(c)],2)}}}),IA=Y(PA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/components/Pagination.vue"]]),MA={__name:"global-top",setup(t){const n=q(K);return(s,o)=>{var r;const l=IA;return $(n).nav.currentPage!==$(n).nav.total+1&&!((r=$(n).themeConfigs.paginationPagesDisabled)!=null&&r.includes($(n).nav.currentPage))&&($(n).themeConfigs.paginationX||$(n).themeConfigs.paginationY)?(v(),X(l,{key:0,x:$(n).themeConfigs.paginationX,y:$(n).themeConfigs.paginationY},null,8,["x","y"])):pe("v-if",!0)}}},LA=Y(MA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/global-top.vue"]]),Gf={render(){return[_t(LA)]}},jA={class:"absolute bottom-0 left-0 right-0 p-2"},NA=e("p",{style:{"font-size":"8px"}},[e("a",{rel:"license",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"(cc) BY-NC-SA - Jordan Frecon-Deloire (2022-2023)")],-1),RA=[NA],HA={__name:"global-bottom",setup(t){return q(K),(n,s)=>(v(),w("footer",jA,RA))}},qA=Y(HA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/global-bottom.vue"]]),Uf={render(){return[_t(qA)]}},VA={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},zA=be({__name:"PresenterMouse",setup(t){return q(K),(n,s)=>{const o=zf;return $(Pr).cursor?(v(),w("div",VA,[T(o,{class:"absolute",style:nt({left:`${$(Pr).cursor.x}%`,top:`${$(Pr).cursor.y}%`})},null,8,["style"])])):pe("v-if",!0)}}}),GA=Y(zA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),UA=be({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(t){q(K),ge(mt,()=>{var o,l;(o=mt.value)!=null&&o.meta&&mt.value.meta.preload!==!1&&(mt.value.meta.__preloaded=!0),(l=Vr.value)!=null&&l.meta&&Vr.value.meta.preload!==!1&&(Vr.value.meta.__preloaded=!0)},{immediate:!0});const n=cn();jn(()=>import("./DrawingLayer-452cd979.js"),[]).then(o=>n.value=o.default);const s=S(()=>Qe.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===mt.value}));return(o,l)=>(v(),w(Fe,null,[pe(" Global Bottom "),T($(Uf)),pe(" Slides "),T(rv,ue($(NE),{id:"slideshow",tag:"div"}),{default:I(()=>[(v(!0),w(Fe,null,xs(s.value,r=>{var i;return ae((v(),X($(Pa),{key:r.path,is:r==null?void 0:r.component,clicks:r===$(mt)?$(Nt):0,"clicks-elements":((i=r.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:Le($(Oa)(r)),route:r,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Md,r===$(mt)]])}),128))]),_:1},16),pe(" Global Top "),T($(Gf)),n.value?(v(),X($(n),{key:0})):pe("v-if",!0),$(Ct)?pe("v-if",!0):(v(),X(GA,{key:1}))],64))}});const WA=Y(UA,[["__scopeId","data-v-afb4231e"],["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/SlidesShow.vue"]]),KA=be({__name:"PrintStyle",setup(t){q(K);function n(s,{slots:o}){if(o.default)return _t("style",o.default())}return(s,o)=>(v(),X(n,null,{default:I(()=>[u(" @page { size: "+lt($(Ln))+"px "+lt($(xa))+"px; margin: 0px; } ",1)]),_:1}))}}),Wf=Y(KA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PrintStyle.vue"]]),YA=be({__name:"Play",setup(t){q(K),v0();const n=U();function s(r){var i;Cu.value||((i=r.target)==null?void 0:i.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Rn():Hn())}RE(n);const o=S(()=>E3.value||Cu.value);cn();const l=cn();return jn(()=>import("./DrawingControls-30928430.js"),[]).then(r=>l.value=r.default),(r,i)=>(v(),w(Fe,null,[$(bn)?(v(),X(Wf,{key:0})):pe("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:nt($(ka))},[T(Of,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:$(bn)?$(bs).width.value:void 0,scale:$(Dl),onPointerdown:s},{default:I(()=>[T(WA,{context:"slide"})]),controls:I(()=>[e("div",{class:Le(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",$(Io)?"pointer-events-none":""]])},[T($A,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!$(Te).drawings.presenterOnly&&!$(mn)&&l.value?(v(),X($(l),{key:0,class:"ml-0"})):pe("v-if",!0)]),_:1},8,["style","width","scale"]),pe("v-if",!0)],4),T(P5)],64))}}),ZA=Y(YA,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Kf(t){return typeof t>"u"||t===null}function QA(t){return typeof t=="object"&&t!==null}function JA(t){return Array.isArray(t)?t:Kf(t)?[]:[t]}function XA(t,n){var s,o,l,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)l=r[s],t[l]=n[l];return t}function eB(t,n){var s="",o;for(o=0;o<n;o+=1)s+=t;return s}function tB(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var nB=Kf,sB=QA,oB=JA,lB=eB,rB=tB,iB=XA,Ma={isNothing:nB,isObject:sB,toArray:oB,repeat:lB,isNegativeZero:rB,extend:iB};function Yf(t,n){var s="",o=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(s+='in "'+t.mark.name+'" '),s+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(s+=`

`+t.mark.snippet),o+" "+s):o}function Lo(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=Yf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Lo.prototype=Object.create(Error.prototype);Lo.prototype.constructor=Lo;Lo.prototype.toString=function(n){return this.name+": "+Yf(this,n)};var cs=Lo,aB=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],cB=["scalar","sequence","mapping"];function uB(t){var n={};return t!==null&&Object.keys(t).forEach(function(s){t[s].forEach(function(o){n[String(o)]=s})}),n}function pB(t,n){if(n=n||{},Object.keys(n).forEach(function(s){if(aB.indexOf(s)===-1)throw new cs('Unknown option "'+s+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=uB(n.styleAliases||null),cB.indexOf(this.kind)===-1)throw new cs('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var ut=pB;function Ru(t,n){var s=[];return t[n].forEach(function(o){var l=s.length;s.forEach(function(r,i){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=i)}),s[l]=o}),s}function dB(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return t}function Hi(t){return this.extend(t)}Hi.prototype.extend=function(n){var s=[],o=[];if(n instanceof ut)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new cs("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof ut))throw new cs("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new cs("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new cs("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof ut))throw new cs("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Hi.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Ru(l,"implicit"),l.compiledExplicit=Ru(l,"explicit"),l.compiledTypeMap=dB(l.compiledImplicit,l.compiledExplicit),l};var fB=Hi,hB=new ut("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),yB=new ut("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),mB=new ut("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),gB=new fB({explicit:[hB,yB,mB]});function vB(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function _B(){return null}function bB(t){return t===null}var AB=new ut("tag:yaml.org,2002:null",{kind:"scalar",resolve:vB,construct:_B,predicate:bB,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function BB(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function CB(t){return t==="true"||t==="True"||t==="TRUE"}function DB(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var wB=new ut("tag:yaml.org,2002:bool",{kind:"scalar",resolve:BB,construct:CB,predicate:DB,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function xB(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function kB(t){return 48<=t&&t<=55}function EB(t){return 48<=t&&t<=57}function $B(t){if(t===null)return!1;var n=t.length,s=0,o=!1,l;if(!n)return!1;if(l=t[s],(l==="-"||l==="+")&&(l=t[++s]),l==="0"){if(s+1===n)return!0;if(l=t[++s],l==="b"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!xB(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!kB(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<n;s++)if(l=t[s],l!=="_"){if(!EB(t.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function FB(t){var n=t,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function TB(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!Ma.isNegativeZero(t)}var SB=new ut("tag:yaml.org,2002:int",{kind:"scalar",resolve:$B,construct:FB,predicate:TB,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),OB=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function PB(t){return!(t===null||!OB.test(t)||t[t.length-1]==="_")}function IB(t){var n,s;return n=t.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var MB=/^[-+]?[0-9]+e/;function LB(t,n){var s;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ma.isNegativeZero(t))return"-0.0";return s=t.toString(10),MB.test(s)?s.replace("e",".e"):s}function jB(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||Ma.isNegativeZero(t))}var NB=new ut("tag:yaml.org,2002:float",{kind:"scalar",resolve:PB,construct:IB,predicate:jB,represent:LB,defaultStyle:"lowercase"}),RB=gB.extend({implicit:[AB,wB,SB,NB]}),HB=RB,Zf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Qf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function qB(t){return t===null?!1:Zf.exec(t)!==null||Qf.exec(t)!==null}function VB(t){var n,s,o,l,r,i,a,c=0,p=null,d,f,h;if(n=Zf.exec(t),n===null&&(n=Qf.exec(t)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(s,o,l));if(r=+n[4],i=+n[5],a=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(d=+n[10],f=+(n[11]||0),p=(d*60+f)*6e4,n[9]==="-"&&(p=-p)),h=new Date(Date.UTC(s,o,l,r,i,a,c)),p&&h.setTime(h.getTime()-p),h}function zB(t){return t.toISOString()}var GB=new ut("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:qB,construct:VB,instanceOf:Date,represent:zB});function UB(t){return t==="<<"||t===null}var WB=new ut("tag:yaml.org,2002:merge",{kind:"scalar",resolve:UB}),La=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function KB(t){if(t===null)return!1;var n,s,o=0,l=t.length,r=La;for(s=0;s<l;s++)if(n=r.indexOf(t.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function YB(t){var n,s,o=t.replace(/[\r\n=]/g,""),l=o.length,r=La,i=0,a=[];for(n=0;n<l;n++)n%4===0&&n&&(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)),i=i<<6|r.indexOf(o.charAt(n));return s=l%4*6,s===0?(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)):s===18?(a.push(i>>10&255),a.push(i>>2&255)):s===12&&a.push(i>>4&255),new Uint8Array(a)}function ZB(t){var n="",s=0,o,l,r=t.length,i=La;for(o=0;o<r;o++)o%3===0&&o&&(n+=i[s>>18&63],n+=i[s>>12&63],n+=i[s>>6&63],n+=i[s&63]),s=(s<<8)+t[o];return l=r%3,l===0?(n+=i[s>>18&63],n+=i[s>>12&63],n+=i[s>>6&63],n+=i[s&63]):l===2?(n+=i[s>>10&63],n+=i[s>>4&63],n+=i[s<<2&63],n+=i[64]):l===1&&(n+=i[s>>2&63],n+=i[s<<4&63],n+=i[64],n+=i[64]),n}function QB(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var JB=new ut("tag:yaml.org,2002:binary",{kind:"scalar",resolve:KB,construct:YB,predicate:QB,represent:ZB}),XB=Object.prototype.hasOwnProperty,eC=Object.prototype.toString;function tC(t){if(t===null)return!0;var n=[],s,o,l,r,i,a=t;for(s=0,o=a.length;s<o;s+=1){if(l=a[s],i=!1,eC.call(l)!=="[object Object]")return!1;for(r in l)if(XB.call(l,r))if(!i)i=!0;else return!1;if(!i)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function nC(t){return t!==null?t:[]}var sC=new ut("tag:yaml.org,2002:omap",{kind:"sequence",resolve:tC,construct:nC}),oC=Object.prototype.toString;function lC(t){if(t===null)return!0;var n,s,o,l,r,i=t;for(r=new Array(i.length),n=0,s=i.length;n<s;n+=1){if(o=i[n],oC.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[n]=[l[0],o[l[0]]]}return!0}function rC(t){if(t===null)return[];var n,s,o,l,r,i=t;for(r=new Array(i.length),n=0,s=i.length;n<s;n+=1)o=i[n],l=Object.keys(o),r[n]=[l[0],o[l[0]]];return r}var iC=new ut("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:lC,construct:rC}),aC=Object.prototype.hasOwnProperty;function cC(t){if(t===null)return!0;var n,s=t;for(n in s)if(aC.call(s,n)&&s[n]!==null)return!1;return!0}function uC(t){return t!==null?t:{}}var pC=new ut("tag:yaml.org,2002:set",{kind:"mapping",resolve:cC,construct:uC});HB.extend({implicit:[GB,WB],explicit:[JB,sC,iC,pC]});function Hu(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}var dC=new Array(256),fC=new Array(256);for(var Os=0;Os<256;Os++)dC[Os]=Hu(Os)?1:0,fC[Os]=Hu(Os);function hC(t){return Array.from(new Set(t))}function qu(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function Jf(t,n){if(!n||n==="all"||n==="*")return qu(1,t+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...qu(+l,r?+r+1:t+1))}return hC(s).filter(o=>o<=t).sort((o,l)=>o-l)}function Xf(t){const n=S(()=>t.value.path),s=S(()=>Qe.length),o=S(()=>Number.parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=S(()=>gr(o.value)),r=S(()=>Qe.find(h=>h.path===`${o.value}`)),i=S(()=>{var h,y,m;return(m=(y=(h=r.value)==null?void 0:h.meta)==null?void 0:y.slide)==null?void 0:m.id}),a=S(()=>{var h,y;return((y=(h=r.value)==null?void 0:h.meta)==null?void 0:y.layout)||(o.value===1?"cover":"default")}),c=S(()=>Qe.find(h=>h.path===`${Math.min(Qe.length,o.value+1)}`)),p=S(()=>Qe.filter(h=>{var y,m;return(m=(y=h.meta)==null?void 0:y.slide)==null?void 0:m.title}).reduce((h,y)=>(ja(h,y),h),[])),d=S(()=>Na(p.value,r.value)),f=S(()=>Ra(d.value));return{route:t,path:n,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:i,currentLayout:a,nextRoute:c,rawTree:p,treeWithActiveStatuses:d,tree:f,downloadPDF:zi,next:Rn,nextSlide:jo,openInEditor:HE,prev:Hn,prevSlide:No}}function eh(t,n,s){const o=U(0);at(()=>{wt.afterEach(async()=>{await at(),o.value+=1})});const l=S(()=>{var c,p;return o.value,((p=(c=n.value)==null?void 0:c.meta)==null?void 0:p.__clicksElements)||[]}),r=S(()=>{var c,p;return+(((p=(c=n.value)==null?void 0:c.meta)==null?void 0:p.clicks)??l.value.length)}),i=S(()=>s.value<Qe.length-1||t.value<r.value),a=S(()=>s.value>1||t.value>0);return{clicks:t,clicksElements:l,clicksTotal:r,hasNext:i,hasPrev:a}}const yC=["id"],mC=be({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(t,{emit:n}){const s=t,o=sn(s,"clicksElements",n),l=S(()=>({height:`${xa}px`,width:`${Ln}px`})),r=cn();jn(()=>Promise.resolve().then(()=>k0),void 0).then(p=>r.value=p.default);const i=S(()=>s.clicks),a=eh(i,s.nav.currentRoute,s.nav.currentPage),c=S(()=>`${s.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return $t(K,Ue({nav:{...s.nav,...a},configs:Te,themeConfigs:S(()=>Te.themeConfig)})),(p,d)=>{var f;return v(),w("div",{id:c.value,class:"print-slide-container",style:nt(l.value)},[T($(Uf)),T($(Pa),{is:(f=p.route)==null?void 0:f.component,"clicks-elements":$(o),"onUpdate:clicksElements":d[0]||(d[0]=h=>Se(o)?o.value=h:null),clicks:i.value,"clicks-disabled":!1,class:Le($(Oa)(p.route)),route:p.route},null,8,["is","clicks-elements","clicks","class","route"]),r.value?(v(),X($(r),{key:0,page:+p.route.path},null,8,["page"])):pe("v-if",!0),T($(Gf))],12,yC)}}}),Vu=Y(mC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),gC=be({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(t){var r;const n=t;q(K);const s=U(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=S(()=>n.route),l=Xf(o);return(i,a)=>(v(),w(Fe,null,[T(Vu,{"clicks-elements":s.value,"onUpdate:clicksElements":a[0]||(a[0]=c=>s.value=c),clicks:0,nav:$(l),route:o.value},null,8,["clicks-elements","nav","route"]),$(Ao)?pe("v-if",!0):(v(!0),w(Fe,{key:0},xs(s.value.length,c=>(v(),X(Vu,{key:c,clicks:c,nav:$(l),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),vC=Y(gC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PrintSlide.vue"]]),_C={id:"print-content"},bC=be({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(t){const n=t;q(K);const s=S(()=>n.width),o=S(()=>n.width/Mn),l=S(()=>s.value/o.value),r=S(()=>l.value<Mn?s.value/Ln:o.value*Mn/Ln);let i=Qe;Ht.value.query.range&&(i=Jf(i.length,Ht.value.query.range).map(p=>i[p-1]));const a=S(()=>({"select-none":!Te.selectable}));return $t(Wd,r),(c,p)=>(v(),w("div",{id:"print-container",class:Le(a.value)},[e("div",_C,[(v(!0),w(Fe,null,xs($(i),d=>(v(),X(vC,{key:d.path,route:d},null,8,["route"]))),128))]),dt(c.$slots,"controls")],2))}});const AC=Y(bC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PrintContainer.vue"]]),BC=be({__name:"Print",setup(t){return q(K),ws(()=>{bn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(v(),w(Fe,null,[$(bn)?(v(),X(Wf,{key:0})):pe("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:nt($(ka))},[T(AC,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:$(bs).width.value},null,8,["style","width"])],4)],64))}});const CC=Y(BC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Print.vue"]]);const DC="/courses/data-structure/functional-programming/front/logo.png",wC={key:0},xC=["href"],kC=be({__name:"TextWithOptionalLink",props:{link:{type:String,required:!1},text:{type:String,required:!0}},setup(t){return q(K),(n,s)=>n.link?(v(),w("a",{key:1,href:n.link,rel:"noreferrer",target:"_blank"},lt(n.text),9,xC)):(v(),w("span",wC,lt(n.text),1))}}),EC=Y(kC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/components/TextWithOptionalLink.vue"]]);function qi(t){return t.startsWith("/")?"/courses/data-structure/functional-programming/"+t.slice(1):t}function $C(t,n=!1){const s=t&&["#","rgb","hsl"].some(l=>t.indexOf(l)===0),o={background:s?t:void 0,backgroundImage:s?void 0:t?n?`linear-gradient(#0009, #0009), url(${qi(t)})`:`url("${qi(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const FC={class:"my-auto w-full"},TC={key:0,class:"absolute bottom-12"},SC={key:0},OC={key:1,class:"absolute bottom-0 font-extralight mb-1 mr-2 right-0 text-xs"},PC=be({__name:"cover",props:{coverAuthor:{type:String,required:!1},coverAuthorUrl:{type:String,required:!1},coverBackgroundUrl:{type:String,required:!1},coverBackgroundSource:{type:String,required:!1},coverBackgroundSourceUrl:{type:String,required:!1},coverDate:{type:[String,Date],required:!1,default:new Date().toLocaleDateString()}},setup(t){const{coverBackgroundUrl:n}=t;q(K);const s=S(()=>$C(n,!0));return(o,l)=>{const r=EC;return v(),w("div",{class:"slidev-layout cover",style:nt(s.value)},[e("div",FC,[dt(o.$slots,"default"),o.coverAuthor||o.coverDate?(v(),w("div",TC,[T(r,{link:o.coverAuthorUrl,text:o.coverAuthor},null,8,["link","text"]),o.coverDate?(v(),w("span",SC,lt(o.coverAuthor&&o.coverDate?`, ${o.coverDate}`:o.coverDate),1)):pe("v-if",!0)])):pe("v-if",!0),o.coverBackgroundSource?(v(),w("div",OC,[T(r,{link:o.coverBackgroundSourceUrl,text:o.coverBackgroundSource},null,8,["link","text"])])):pe("v-if",!0)])],4)}}}),IC=Y(PC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/layouts/cover.vue"]]),MC=e("h1",null,"Data Structures in C/C++",-1),LC=e("h2",null,"Chapter 2: Functional Programming",-1),jC=e("img",{src:DC,class:"image-bottom",style:{height:"70px",width:"auto"}},null,-1),NC={__name:"1",setup(t){const n={theme:"academic",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap2/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},coverDate:null,hideInToc:!0};return q(K),(s,o)=>(v(),X(IC,we(Ce(n)),{default:I(()=>[MC,LC,jC]),_:1},16))}},RC=Y(NC,[["__file","/@slidev/slides/1.md"]]),HC=["href","innerHTML"],qC=["href"],VC=be({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(t){return q(K),(n,s)=>{const o=Ge("RouterLink");return!$(bn)&&n.title?(v(),X(o,{key:0,to:String(n.to),onClick:s[0]||(s[0]=l=>l.target.blur()),innerHTML:n.title},null,8,["to","innerHTML"])):!$(bn)&&!n.title?(v(),X(o,{key:1,to:String(n.to),onClick:s[1]||(s[1]=l=>l.target.blur())},{default:I(()=>[dt(n.$slots,"default")]),_:3},8,["to"])):$(bn)&&n.title?(v(),w("a",{key:2,href:`#${n.to}`,innerHTML:n.title},null,8,HC)):(v(),w("a",{key:3,href:`#${n.to}`},[dt(n.$slots,"default")],8,qC))}}}),zC=Y(VC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/Link.vue"]]),GC={key:0},UC={key:1},WC={key:2},KC={key:3},YC={key:4},ZC={key:5},QC={key:6},JC={key:7},XC={key:8},eD={key:9},tD={key:10},nD={key:11},sD={key:12},oD={key:13},lD={key:14},rD={key:15},iD={key:16},aD={key:17},cD={key:18},uD={key:19},pD={key:20},dD={key:21},fD={key:22},hD={key:23},yD={key:24},mD={key:25},gD={key:26},vD={key:27},_D={key:28},bD={key:29},AD={key:30},BD={key:31},CD={key:32},DD={key:33},wD=e("code",null,"-D",-1),xD={key:34},kD={key:35},ED={key:36},$D={key:37},FD={key:38},TD=be({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(t){return(n,s)=>(v(),w("div",null,[+n.no==1?(v(),w("p",GC,"Functional Programming")):+n.no==2?(v(),w("p",UC,"Table of contents")):+n.no==3?(v(),w("p",WC,"Functional Programming")):+n.no==4?(v(),w("p",KC,"Introduction")):+n.no==5?(v(),w("p",YC,"Functions!")):+n.no==6?(v(),w("p",ZC,"Functions")):+n.no==7?(v(),w("p",QC,"Prototyping")):+n.no==8?(v(),w("p",JC,"Function prototype")):+n.no==9?(v(),w("p",XC,"Defining")):+n.no==10?(v(),w("p",eD,"Function definition")):+n.no==11?(v(),w("p",tD,"Function definition")):+n.no==12?(v(),w("p",nD,"Calling")):+n.no==13?(v(),w("p",sD,"Example summarizing all 3 phases")):+n.no==14?(v(),w("p",oD,"undefined")):+n.no==15?(v(),w("p",lD,"Quiz 1: Find the correct prototype(s)")):+n.no==16?(v(),w("p",rD,"Quiz 2: What happens?")):+n.no==17?(v(),w("p",iD,"Quiz 3: What happens?")):+n.no==18?(v(),w("p",aD,"Project Tree Structure")):+n.no==19?(v(),w("p",cD,"Tree structure")):+n.no==20?(v(),w("p",uD,"Project files")):+n.no==21?(v(),w("p",pD,"Project files")):+n.no==22?(v(),w("p",dD,"Precompilation Directives")):+n.no==23?(v(),w("p",fD,"#include directive")):+n.no==24?(v(),w("p",hD,"#include directive")):+n.no==25?(v(),w("p",yD,"#include directive")):+n.no==26?(v(),w("p",mD,"#include directive")):+n.no==27?(v(),w("p",gD,"Quiz: Find the correct directive(s)")):+n.no==28?(v(),w("p",vD,"Handling multiply-defined symbols")):+n.no==29?(v(),w("p",_D,"Handling multiply-defined symbols")):+n.no==30?(v(),w("p",bD,"Precompilation directives")):+n.no==31?(v(),w("p",AD,"Understanding compilers")):+n.no==32?(v(),w("p",BD,"Understanding compilers")):+n.no==33?(v(),w("p",CD,"Example: Handling Configurations")):+n.no==34?(v(),w("p",DD,[wD,u(" Flag")])):+n.no==35?(v(),w("p",xD,"Example: Handling Configurations")):+n.no==36?(v(),w("p",kD,"undefined")):+n.no==37?(v(),w("p",ED,"To Recap")):+n.no==38?(v(),w("p",$D,"To Go Further")):+n.no==39?(v(),w("p",FD,"To Go Even Further")):pe("v-if",!0)]))}}),SD=Y(TD,[["__file","/@slidev/titles.md"]]),OD=be({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(t){const n=t;q(K);const s=S(()=>[...g_(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]);return(o,l)=>{const r=zC,i=Ge("TocList",!0);return o.list&&o.list.length>0?(v(),w("ol",{key:0,class:Le(s.value)},[(v(!0),w(Fe,null,xs(o.list,a=>(v(),w("li",{key:a.path,class:Le(["slidev-toc-item",[{"slidev-toc-item-active":a.active},{"slidev-toc-item-parent-active":a.activeParent}]])},[T(r,{to:a.path},{default:I(()=>[T($(SD),{no:a.path},null,8,["no"])]),_:2},1032,["to"]),a.children.length>0?(v(),X(i,{key:0,level:o.level+1,list:a.children,"list-class":o.listClass},null,8,["level","list","list-class"])):pe("v-if",!0)],2))),128))],2)):pe("v-if",!0)}}});const PD=Y(OD,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/TocList.vue"]]),ID=be({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(t){const n=t,s=q(K);function o(a,c=1){if(c>Number(n.maxDepth))return[];if(c<Number(n.minDepth)){const p=a.find(d=>d.active||d.activeParent);return p?o(p.children,c+1):[]}return a.map(p=>({...p,children:o(p.children,c+1)}))}function l(a){return a.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:l(c.children)}))}function r(a){const c=a.some(p=>p.active||p.activeParent||p.hasActiveParent);return a.filter(()=>c).map(p=>({...p,children:r(p.children)}))}const i=S(()=>{const a=s==null?void 0:s.nav.tree;if(!a)return[];let c=o(a);return n.mode==="onlyCurrentTree"?c=l(c):n.mode==="onlySiblings"&&(c=r(c)),c});return(a,c)=>{const p=PD;return v(),w("div",{class:"slidev-toc",style:nt(`column-count:${a.columns}`)},[T(p,{level:1,list:i.value,"list-class":a.listClass},null,8,["list","list-class"])],4)}}}),Yo=Y(ID,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/Toc.vue"]]),MD={class:"slidev-layout default"},LD={__name:"default",setup(t){return q(K),(n,s)=>(v(),w("div",MD,[dt(n.$slots,"default")]))}},Pe=Y(LD,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/layouts/default.vue"]]),jD=e("h1",null,"Table of contents",-1),ND={__name:"2",setup(t){const n={hideInToc:!0};return q(K),(s,o)=>{const l=Yo;return v(),X(Pe,we(Ce(n)),{default:I(()=>[jD,T(l,{columns:"1",maxDepth:"3"})]),_:1},16)}}},RD=Y(ND,[["__file","/@slidev/slides/2.md"]]),HD={class:"slidev-layout intro"},qD={class:"my-auto"},VD={__name:"intro",setup(t){return q(K),(n,s)=>(v(),w("div",HD,[e("div",qD,[dt(n.$slots,"default")])]))}},Zo=Y(VD,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/layouts/intro.vue"]]),zD=e("span",{style:{"font-weight":"700","font-size":"30px"}},"1. Functional Programming",-1),GD=e("br",null,null,-1),UD=e("br",null,null,-1),WD={style:{"text-align":"left",display:"inline-block"}},KD={__name:"3",setup(t){const n={layout:"intro",level:1};return q(K),(s,o)=>{const l=Yo,r=Ge("center");return v(),X(Zo,we(Ce(n)),{default:I(()=>[T(r,null,{default:I(()=>[zD,GD,UD,e("div",WD,[T(l,{minDepth:"2",mode:"onlyCurrentTree"})])]),_:1})]),_:1},16)}}},YD=Y(KD,[["__file","/@slidev/slides/3.md"]]);function zu(t){return t.startsWith("/")?"/courses/data-structure/functional-programming/"+t.slice(1):t}function ZD(t,n=!1){const s=t&&(t[0]==="#"||t.startsWith("rgb")),o={background:s?t:void 0,color:t&&!s?"white":void 0,backgroundImage:s?void 0:t?n?`linear-gradient(#0005, #0008), url(${zu(t)})`:`url("${zu(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const QD={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},JD=be({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(t){const n=t;q(K);const s=S(()=>ZD(n.image));return(o,l)=>(v(),w("div",QD,[e("div",{class:Le(["slidev-layout default",n.class])},[dt(o.$slots,"default")],2),e("div",{class:"w-full w-full",style:nt(s.value)},null,4)]))}}),XD=Y(JD,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/layouts/image-right.vue"]]),e9=e("h1",null,"Functions?",-1),t9=e("p",null,"Before, codes used to look like this …",-1),n9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"10 i = 0")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"20 i = i + 1")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'30 PRINT i; " squared = "; i * i')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"40 IF i >= 10 THEN GOTO 60")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"50 GOTO 20")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},'60 PRINT "Program Completed."')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"70 END")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"10 i = 0")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"20 i = i + 1")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'30 PRINT i; " squared = "; i * i')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"40 IF i >= 10 THEN GOTO 60")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"50 GOTO 20")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},'60 PRINT "Program Completed."')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"70 END")])])])],-1),s9=e("p",null,[u("They were unstructured, tangled codes with excessive dependencies and lack of modularity… known as "),e("strong",null,"spaghetti codes")],-1),o9=e("p",null,[e("em",null,"What does the program display?")],-1),l9=[o9],r9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"1 squared = 1")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"2 squared = 4")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"...")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"9 squared = 81")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"Program Completed.")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"1 squared = 1")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"2 squared = 4")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"...")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"9 squared = 81")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"Program Completed.")])])])],-1),i9=[r9],a9={__name:"4",setup(t){const n={layout:"image-right",image:"/chap2/spaghetti.png",level:2};return q(K),(s,o)=>{const l=We("click");return v(),X(XD,we(Ce(n)),{default:I(()=>[e9,t9,n9,s9,ae((v(),w("div",null,l9)),[[l,1]]),ae((v(),w("div",null,i9)),[[l,2]])]),_:1},16)}}},c9=Y(a9,[["__file","/@slidev/slides/4.md"]]),u9="/courses/data-structure/functional-programming/chap2/fight.png",p9=e("h1",null,"Functions!",-1),d9=e("p",null,"Functions are used to:",-1),f9=e("ul",null,[e("li",null,"Divide the code into logical and manageable blocks of instructions."),e("li",null,"Avoid code duplication.")],-1),h9=e("br",null,null,-1),y9=e("br",null,null,-1),m9=e("br",null,null,-1),g9=e("img",{src:u9,style:{height:"250px"}},null,-1),v9={__name:"5",setup(t){const n={hideInToc:!0,level:2};return q(K),(s,o)=>{const l=Ge("center"),r=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[p9,d9,f9,h9,ae((v(),w("div",null,[T(l,null,{default:I(()=>[u(" Functional programming was invented to combat spaghetti programming"),y9,m9,g9]),_:1})])),[[r,1]])]),_:1},16)}}},_9=Y(v9,[["__file","/@slidev/slides/5.md"]]),th="/courses/data-structure/functional-programming/chap2/prototype.png",nh="/courses/data-structure/functional-programming/chap2/definition.png",sh="/courses/data-structure/functional-programming/chap2/call.png",b9=e("h1",null,"Functions",-1),A9=e("p",null,"There are 3 phases occuring in functional programming",-1),B9={class:"row"},C9={class:"three-column"},D9=e("img",{src:th,style:{height:"70px"},border:"rounded"},null,-1),w9=e("br",null,null,-1),x9=e("br",null,null,-1),k9=e("span",{style:{"font-size":"small"}},"Function signature declaration",-1),E9=e("br",null,null,-1),$9=e("br",null,null,-1),F9={class:"three-column"},T9=e("img",{src:nh,style:{height:"70px"},border:"rounded"},null,-1),S9=e("br",null,null,-1),O9=e("br",null,null,-1),P9=e("span",{style:{"font-size":"small"}},"Implementing function behavior",-1),I9=e("br",null,null,-1),M9=e("br",null,null,-1),L9={class:"three-column"},j9=e("img",{src:sh,style:{height:"70px"},border:"rounded"},null,-1),N9=e("br",null,null,-1),R9=e("br",null,null,-1),H9=e("span",{style:{"font-size":"small"}},"Invoking functions",-1),q9=e("br",null,null,-1),V9=e("br",null,null,-1),z9=e("br",null,null,-1),G9=e("br",null,null,-1),U9=e("br",null,null,-1),W9=e("br",null,null,-1),K9={__name:"6",setup(t){const n={hideInToc:!0,level:2};return q(K),(s,o)=>{const l=Ge("center"),r=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[b9,A9,T(l,null,{default:I(()=>[e("div",B9,[e("div",C9,[ae((v(),w("span",null,[D9,w9,u(" Prototyping"),x9,k9])),[[r,1]]),E9,$9]),e("div",F9,[ae((v(),w("span",null,[T9,S9,u(" Defining"),O9,P9])),[[r,2]]),I9,M9]),e("div",L9,[ae((v(),w("span",null,[j9,N9,u(" Calling"),R9,H9])),[[r,3]]),q9,V9])]),ae((v(),w("div",null,[z9,G9,u(" We are going to recap all three 3 phases"),U9,W9,u(" and show how to link them together ")])),[[r,4]])]),_:1})]),_:1},16)}}},Y9=Y(K9,[["__file","/@slidev/slides/6.md"]]),Z9={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Q9=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),J9=[Q9];function X9(t,n){return v(),w("svg",Z9,J9)}const e7={name:"ph-clipboard",render:X9},t7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},n7=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),s7=[n7];function o7(t,n){return v(),w("svg",t7,s7)}const l7={name:"ph-check-circle",render:o7},r7=["title"],i7=be({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:Te.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const n=t;q(K);const s=q(mo),o=q(rs),l=q(go);function r(f=5){const h=[],y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=y.length;for(let A=0;A<f;A++)h.push(y.charAt(Math.floor(Math.random()*m)));return h.join("")}const i=U(),a=Ot();Wn(()=>{const f=n.at==null?o==null?void 0:o.value.length:n.at,h=S(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),y=S(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),A=v_(n.ranges.length-1).map(B=>m+B);o!=null&&o.value&&(o.value.push(...A),dr(()=>A.forEach(B=>Ai(o.value,B)),a))}ws(()=>{if(!i.value)return;const A=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value],B=n.startLine;for(const C of A){const D=Array.from(C.querySelectorAll(".line")),b=Jf(D.length+B-1,y.value);if(D.forEach((x,k)=>{const F=b.includes(k+B);x.classList.toggle(ns,!0),x.classList.toggle("highlighted",F),x.classList.toggle("dishonored",!F)}),n.maxHeight){const x=Array.from(C.querySelectorAll(".line.highlighted"));x.reduce((F,j)=>j.offsetHeight+F,0)>i.value.offsetHeight?x[0].scrollIntoView({behavior:"smooth",block:"start"}):x.length>0&&x[Math.round((x.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:p}=v1();function d(){var h,y;const f=(y=(h=i.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:y.textContent;f&&p(f)}return(f,h)=>{const y=l7,m=e7;return v(),w("div",{ref_key:"el",ref:i,class:Le(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":n.lines}]),style:nt({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0,"--start":n.startLine})},[dt(f.$slots,"default"),$(Te).codeCopy?(v(),w("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:$(c)?"Copied":"Copy",onClick:h[0]||(h[0]=A=>d())},[$(c)?(v(),X(y,{key:0,class:"p-2 w-8 h-8"})):(v(),X(m,{key:1,class:"p-2 w-8 h-8"}))],8,r7)):pe("v-if",!0)],6)}}}),Je=Y(i7,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),a7=e("h1",null,"Function prototype",-1),c7={class:"box-top-left"},u7=e("p",null,[e("span",{class:"box-title"},"Definition: Function prototype"),u(" A "),e("strong",null,"function prototype"),u(" is a declaration specifying a function’s name "),e("code",null,"function_name"),u(", return type "),e("code",null,"type_return"),u(", and parameter types ("),e("code",null,"type1"),u(", "),e("code",null,"type2"),u(", …), enabling its use before definition.")],-1),p7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"type_return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"function_name"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"type1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"arg1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"type2"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"arg2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," ..."),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"type_return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"function_name"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"type1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"arg1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"type2"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"arg2"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," ..."),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),d7=e("ul",null,[e("li",null,"Each function in a program has a unique prototype."),e("li",null,"The compiler uses the prototype to validate function calls and perform type conversions if necessary."),e("li",null,"Parameter names can be omitted (but not the types), although it is recommended to provide meaningful names for clarity.")],-1),f7=[d7],h7={__name:"7",setup(t){const n={level:2};return q(K),(s,o)=>{const l=Je,r=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[a7,e("div",c7,[u7,T(l,ue({},{ranges:[""]}),{default:I(()=>[p7]),_:1},16)]),ae((v(),w("div",null,f7)),[[r,1]])]),_:1},16)}}},y7=Y(h7,[["__file","/@slidev/slides/7.md"]]),m7=e("h1",null,"Function prototype",-1),g7=e("p",null,[u("Let us imagine a function printing the squares of integers (equally separated by "),e("code",null,"step"),u(") between "),e("code",null,"first"),u(" and "),e("code",null,"last")],-1),v7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),_7=e("br",null,null,-1),b7=e("br",null,null,-1),A7=e("br",null,null,-1),B7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),C7=e("p",null,"Incorrect declarations:",-1),D7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),w7={__name:"8",setup(t){const n={hideInToc:!0,level:2};return q(K),(s,o)=>{const l=Je,r=Ge("center"),i=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[m7,g7,T(l,ue({},{ranges:[""]}),{default:I(()=>[v7]),_:1},16),ae((v(),w("div",null,[_7,T(r,null,{default:I(()=>[u("Default values can be specified starting from the right")]),_:1})])),[[i,1]]),b7,A7,ae((v(),w("div",null,[u(" Correct declarations: "),T(l,ue({},{ranges:[""]}),{default:I(()=>[B7]),_:1},16),C7,T(l,ue({},{ranges:[""]}),{default:I(()=>[D7]),_:1},16)])),[[i,2]])]),_:1},16)}}},x7=Y(w7,[["__file","/@slidev/slides/8.md"]]),k7=e("h1",null,"Function definition",-1),E7=e("p",null,"You have already seen functions!",-1),$7=e("p",null,[u("For instance the "),e("code",null,"main"),u(" function of your program")],-1),F7=[$7],T7={class:"row"},S7={class:"column"},O7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// Your code")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Why?")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// Your code")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Why?")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),P7={class:"column"},I7=e("p",null,[u("It returns an "),e("code",null,"int"),u(" value to indicate the status or exit code of the program"),e("br")],-1),M7=e("blockquote",null,[e("p",null,[u("value = 0: successful execution"),e("br"),u(" value > 0: error or exceptional condition")])],-1),L7=[I7,M7],j7={class:"row"},N7={class:"column"},R7=e("p",null,[u("… or the function "),e("code",null,"f"),u(" from Chapter 1")],-1),H7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"f"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," x"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"f"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," x"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),q7=e("div",{class:"column"},[e("br"),e("br"),e("br"),e("p",null,[u("It has the return type "),e("code",null,"void"),u(" since it returns nothing")]),e("p",null,"It takes no input parameter")],-1),V7={__name:"9",setup(t){const n={level:2};return q(K),(s,o)=>{const l=Je,r=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[k7,E7,ae((v(),w("div",null,F7)),[[r,1]]),e("div",T7,[ae((v(),w("div",S7,[T(l,ue({},{ranges:[""]}),{default:I(()=>[O7]),_:1},16)])),[[r,2]]),ae((v(),w("div",P7,L7)),[[r,3]])]),ae((v(),w("div",null,[e("div",j7,[e("div",N7,[R7,T(l,ue({},{ranges:[""]}),{default:I(()=>[H7]),_:1},16)]),q7])])),[[r,4]])]),_:1},16)}}},z7=Y(V7,[["__file","/@slidev/slides/9.md"]]),G7=e("h1",null,"Function definition",-1),U7=e("p",null,[u("How would you write the function "),e("code",null,"print_squares"),u(" ?")],-1),W7=e("p",null,[e("strong",null,"Function prototype")],-1),K7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),Y7=e("br",null,null,-1),Z7={class:"row"},Q7=e("p",null,[e("strong",null,"Function definition")],-1),J7={class:"column"},X7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," square"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"i "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," first"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"<="),e("span",{style:{color:"#DBD7CA"}}," last"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"+="),e("span",{style:{color:"#DBD7CA"}}," step"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        square "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"printf"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"%d"),e("span",{style:{color:"#C98A7D"}}," squared: "),e("span",{style:{color:"#D4976C"}},"%d\\n"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," square"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," square"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"i "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," first"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"<="),e("span",{style:{color:"#393A34"}}," last"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"+="),e("span",{style:{color:"#393A34"}}," step"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        square "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"printf"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"%d"),e("span",{style:{color:"#B56959"}}," squared: "),e("span",{style:{color:"#A65E2B"}},"%d\\n"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," square"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),e6=e("div",{class:"column"},[e("blockquote",null,[e("p",null,[e("code",null,"i+=step"),u(" is equivalent to "),e("code",null,"i=i+step"),e("br"),e("code",null,"i++"),u(" is equivalent to to "),e("code",null,"i=i+1")])])],-1),t6={__name:"10",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>{const l=Je,r=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[G7,U7,W7,T(l,ue({},{ranges:[""]}),{default:I(()=>[K7]),_:1},16),Y7,ae((v(),w("div",Z7,[Q7,e("div",J7,[T(l,ue({},{ranges:[""]}),{default:I(()=>[X7]),_:1},16)]),e6])),[[r,1]])]),_:1},16)}}},n6=Y(t6,[["__file","/@slidev/slides/10.md"]]),s6=e("h1",null,"Function definition",-1),o6=e("p",null,"There are two recurring mistakes …",-1),l6=e("ol",null,[e("li",null,"Be careful to always check that you are returning a value!")],-1),r6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"isPositive"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"a"),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"a"),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"false"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"isPositive"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"a"),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"a"),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"false"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),i6=e("ol",{start:"2"},[e("li",null,[u("There can only be one function "),e("code",null,"int main() {}"),e("br"),u(" This is the program’s entry point: it is through this code that the program’s execution will start before any other sub-function that may be called within "),e("code",null,"main()"),u(".")])],-1),a6=[i6],c6={__name:"11",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>{const l=Je,r=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[s6,o6,ae((v(),w("div",null,[l6,T(l,ue({},{ranges:[""]}),{default:I(()=>[r6]),_:1},16)])),[[r,1]]),ae((v(),w("div",null,a6)),[[r,2]])]),_:1},16)}}},u6=Y(c6,[["__file","/@slidev/slides/11.md"]]),p6=e("h1",null,"Function calling",-1),d6=e("p",null,"For instance, executing the following code…",-1),f6={class:"row"},h6={class:"column"},y6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"<="),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"*="),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"i"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}},"						  ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"<="),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"*="),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"i"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}},"						  ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),m6=e("div",{class:"column"},[e("blockquote",null,[e("p",null,[e("code",null,"i*=10"),u(" is equivalent to "),e("code",null,"i=i*10"),u(),e("br"),e("code",null,"i/=10"),u(" is equivalent to to "),e("code",null,"i=i/10")])])],-1),g6=e("p",null,"would display…",-1),v6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"1 squared: 1")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"3 squared: 9")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"5 squared: 25")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"10 squared: 100")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"12 squared: 144")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"14 squared: 196")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"100 squared: 10000")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"102 squared: 10404")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"104 squared: 10816")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"1 squared: 1")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"3 squared: 9")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"5 squared: 25")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"10 squared: 100")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"12 squared: 144")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"14 squared: 196")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"100 squared: 10000")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"102 squared: 10404")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"104 squared: 10816")])])])],-1),_6={__name:"12",setup(t){const n={level:2};return q(K),(s,o)=>{const l=Je;return v(),X(Pe,we(Ce(n)),{default:I(()=>[p6,d6,e("div",f6,[e("div",h6,[T(l,ue({},{ranges:[""]}),{default:I(()=>[y6]),_:1},16)]),m6]),g6,v6]),_:1},16)}}},b6=Y(_6,[["__file","/@slidev/slides/12.md"]]),A6=e("h1",null,"Example summarizing all 3 phases",-1),B6={class:"row"},C6={class:"column"},D6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," square"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"i "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," first"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"<="),e("span",{style:{color:"#DBD7CA"}}," last"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"+="),e("span",{style:{color:"#DBD7CA"}}," step"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        square "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"printf"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"%d"),e("span",{style:{color:"#C98A7D"}}," squared: "),e("span",{style:{color:"#D4976C"}},"%d\\n"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," square"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," square"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"i "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," first"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"<="),e("span",{style:{color:"#393A34"}}," last"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"+="),e("span",{style:{color:"#393A34"}}," step"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        square "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"printf"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"%d"),e("span",{style:{color:"#B56959"}}," squared: "),e("span",{style:{color:"#A65E2B"}},"%d\\n"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," square"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),w6={class:"one-third",style:{"margin-left":"15%"}},x6=e("br",null,null,-1),k6=e("i",null,"What happens?",-1),E6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"5 squared: 25")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"6 squared: 36")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"7 squared: 49")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"8 squared: 64")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"9 squared: 81")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"10 squared: 100")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"5 squared: 25")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"6 squared: 36")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"7 squared: 49")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"8 squared: 64")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"9 squared: 81")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"10 squared: 100")])])])],-1),$6=[E6],F6={class:"danger-box"},T6={__name:"13",setup(t){const n={level:2,hideInToc:!0,clicks:2};return q(K),(s,o)=>{const l=Je,r=Ge("center"),i=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[A6,ae((v(),w("div",B6,[e("div",C6,[T(l,ue({},{ranges:[""]}),{default:I(()=>[D6]),_:1},16)]),e("div",w6,[x6,k6,ae((v(),w("div",null,$6)),[[i,2]])])])),[[i,1]]),ae((v(),w("div",F6,[T(r,null,{default:I(()=>[u(" Remember, you should put the default arguments in the prototype, not the definition ")]),_:1})])),[[i,2]])]),_:1},16)}}},S6=Y(T6,[["__file","/@slidev/slides/13.md"]]),O6=e("div",{class:"fieldset-box"},[e("div",{class:"legend"},"Wooclap"),u(" Event: DATASTRUCT2 ")],-1),P6={__name:"14",setup(t){const n={layout:"intro",level:2,hideInToc:!0};return q(K),(s,o)=>{const l=Ge("center");return v(),X(Zo,we(Ce(n)),{default:I(()=>[T(l,null,{default:I(()=>[u(" Let's practice! "),O6]),_:1})]),_:1},16)}}},I6=Y(P6,[["__file","/@slidev/slides/14.md"]]),M6=e("h1",null,"Quiz 1: Find the correct prototype(s)",-1),L6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateTotalCost"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"unsigned"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"quantity"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"pricePerUnit"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"discount"),e("span",{style:{color:"#858585"}},")")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // Calculate the total cost after applying the discount")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," totalCost "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," quantity "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," pricePerUnit "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}},"discount"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," totalCost"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," cost "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateTotalCost"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"19.90"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.1"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," cost"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateTotalCost"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"unsigned"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"quantity"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"pricePerUnit"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"discount"),e("span",{style:{color:"#8E8F8B"}},")")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // Calculate the total cost after applying the discount")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," totalCost "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," quantity "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," pricePerUnit "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}},"discount"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," totalCost"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," cost "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateTotalCost"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"19.90"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.1"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," cost"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),j6=e("br",null,null,-1),N6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateTotalCost"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"unsigned"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"quantity"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"pricePerUnit"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"discount"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateTotalCost"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"unsigned"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," 			// Since the names do not matter")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateTotalCost"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"unsigned"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}},"		// Since the names do not matter")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateTotalCost"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"unsigned"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"quantity"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"pricePerUnit"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"discount"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateTotalCost"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"unsigned"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," 			// Since the names do not matter")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateTotalCost"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"unsigned"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}},"		// Since the names do not matter")])])])],-1),R6={__name:"15",setup(t){const n={level:2,hideInToc:!0,clicks:1};return q(K),(s,o)=>{const l=Je,r=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[M6,T(l,ue({},{ranges:[""]}),{default:I(()=>[L6]),_:1},16),j6,ae((v(),w("div",null,[u(" Correct prototypes : "),T(l,ue({},{ranges:[""]}),{default:I(()=>[N6]),_:1},16)])),[[r,1]])]),_:1},16)}}},H6=Y(R6,[["__file","/@slidev/slides/15.md"]]),q6=e("h1",null,"Quiz 2: What happens?",-1),V6={class:"remove"},z6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"MyStruct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"MyStruct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"divide"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"b "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," MyStruct"),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"};")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," MyStruct"),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}},"a "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," b"),e("span",{style:{color:"#858585"}},"};")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," numerator "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," denominator "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," result "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"divide"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"numerator"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," denominator"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Result of division: "'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"result"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"MyStruct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"MyStruct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"divide"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"b "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," MyStruct"),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"};")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," MyStruct"),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}},"a "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," b"),e("span",{style:{color:"#8E8F8B"}},"};")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," numerator "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," denominator "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," result "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"divide"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"numerator"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," denominator"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Result of division: "'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"result"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),G6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"MyStruct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"MyStruct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"divide"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"b "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," MyStruct"),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"};"),e("span",{style:{color:"#758575"}},' 		// Brace initialization (see "To Go Further" in Chapter 1)')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," MyStruct"),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}},"a "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," b"),e("span",{style:{color:"#858585"}},"};"),e("span",{style:{color:"#758575"}},'		// Brace initialization (see "To Go Further" in Chapter 1)')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," numerator "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," denominator "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," result "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"divide"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"numerator"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," denominator"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," 	// KO, incorrect type!")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Result of division: "'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"result"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"MyStruct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"MyStruct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"divide"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"b "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," MyStruct"),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"};"),e("span",{style:{color:"#A0ADA0"}},' 		// Brace initialization (see "To Go Further" in Chapter 1)')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," MyStruct"),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}},"a "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," b"),e("span",{style:{color:"#8E8F8B"}},"};"),e("span",{style:{color:"#A0ADA0"}},'		// Brace initialization (see "To Go Further" in Chapter 1)')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," numerator "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," denominator "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," result "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"divide"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"numerator"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," denominator"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," 	// KO, incorrect type!")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Result of division: "'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"result"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),U6=e("p",null,[u("The correct choice is "),e("code",null,"MyStruct result = divide(numerator, denominator);")],-1),W6={__name:"16",setup(t){const n={level:2,hideInToc:!0,clicks:1};return q(K),(s,o)=>{const l=Je,r=Ge("center"),i=We("click-hide"),a=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[q6,e("div",V6,[ae((v(),w("div",null,[T(l,ue({},{ranges:[""]}),{default:I(()=>[z6]),_:1},16)])),[[i,1]]),ae((v(),w("div",null,[T(l,ue({},{ranges:["7,9,16"]}),{default:I(()=>[G6]),_:1},16),T(r,null,{default:I(()=>[U6]),_:1})])),[[a,1]])])]),_:1},16)}}},K6=Y(W6,[["__file","/@slidev/slides/16.md"]]),Y6=e("h1",null,"Quiz 3: What happens?",-1),Z6={class:"remove"},Q6={class:"row"},J6={class:"column"},X6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateFactorial"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"n"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"n "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," factorial "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"<="),e("span",{style:{color:"#DBD7CA"}}," n"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#DBD7CA"}},"i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            factorial "),e("span",{style:{color:"#CB7676"}},"*="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," factorial"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateFactorial"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"n"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"n "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," factorial "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"<="),e("span",{style:{color:"#393A34"}}," n"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#393A34"}},"i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            factorial "),e("span",{style:{color:"#AB5959"}},"*="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," factorial"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),e2={class:"column"},t2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," a "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," result "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateFactorial"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"a"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"result "),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Factorial of "'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," a "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'" is "'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," result"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," a "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," result "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateFactorial"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"a"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"result "),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Factorial of "'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," a "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'" is "'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," result"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),n2={class:"row"},s2={class:"column"},o2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateFactorial"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"n"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"n "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," factorial "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"<="),e("span",{style:{color:"#DBD7CA"}}," n"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#DBD7CA"}},"i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            factorial "),e("span",{style:{color:"#CB7676"}},"*="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," factorial"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateFactorial"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"n"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"n "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," factorial "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"<="),e("span",{style:{color:"#393A34"}}," n"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#393A34"}},"i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            factorial "),e("span",{style:{color:"#AB5959"}},"*="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," factorial"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),l2={class:"column"},r2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," a "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," result "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"calculateFactorial"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"a"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"result "),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Factorial of "'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," a "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'" is "'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," result"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," a "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," result "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"calculateFactorial"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"a"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"result "),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Factorial of "'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," a "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'" is "'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," result"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),i2={class:"danger-box"},a2=e("p",null,[u("There is an error due to the scope of "),e("code",null,"factorial"),u(" !"),e("br"),e("code",null,"factorial"),u(" is not defined outside the else loop")],-1),c2={__name:"17",setup(t){const n={level:2,hideInToc:!0,clicks:1};return q(K),(s,o)=>{const l=Je,r=Ge("center"),i=We("click-hide"),a=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[Y6,e("div",Z6,[ae((v(),w("div",null,[e("div",Q6,[e("div",J6,[T(l,ue({},{ranges:[""]}),{default:I(()=>[X6]),_:1},16)]),e("div",e2,[T(l,ue({},{ranges:[""]}),{default:I(()=>[t2]),_:1},16)])])])),[[i,1]]),ae((v(),w("div",null,[e("div",n2,[e("div",s2,[T(l,ue({},{ranges:["10"]}),{default:I(()=>[o2]),_:1},16)]),e("div",l2,[T(l,ue({},{ranges:["0"]}),{default:I(()=>[r2]),_:1},16)])])])),[[a,1]])]),ae((v(),w("div",i2,[T(r,null,{default:I(()=>[a2]),_:1})])),[[a,1]])]),_:1},16)}}},u2=Y(c2,[["__file","/@slidev/slides/17.md"]]),p2=e("span",{style:{"font-weight":"700","font-size":"30px"}},"2. Project Tree Structure",-1),d2=e("br",null,null,-1),f2=e("br",null,null,-1),h2={style:{"text-align":"left",display:"inline-block"}},y2={__name:"18",setup(t){const n={layout:"intro",level:1};return q(K),(s,o)=>{const l=Yo,r=Ge("center");return v(),X(Zo,we(Ce(n)),{default:I(()=>[T(r,null,{default:I(()=>[p2,d2,f2,e("div",h2,[T(l,{minDepth:"2",mode:"onlyCurrentTree"})])]),_:1})]),_:1},16)}}},m2=Y(y2,[["__file","/@slidev/slides/18.md"]]),Qt="/courses/data-structure/functional-programming/chap2/hfile.png",Cn="/courses/data-structure/functional-programming/chap2/cfile.png",g2=e("h1",null,"Tree structure",-1),v2=e("p",null,"Now that we have seen all 3 phases, let’s organize the project tree structure into files",-1),_2=e("div",{class:"row"},[e("div",{class:"three-column"},[e("img",{src:th,style:{height:"70px"},border:"rounded"}),e("br"),u(" Prototyping"),e("br"),e("span",{style:{"font-size":"small"}},"Function signature declaration"),e("br"),e("br"),e("blockquote",null,[e("p",null,[e("img",{src:Qt,style:{height:"40px"},border:"rounded"}),e("span",{style:{"font-size":"small"}},"in header files .h")])])]),e("div",{class:"three-column"},[e("img",{src:nh,style:{height:"70px"},border:"rounded"}),e("br"),u(" Defining"),e("br"),e("span",{style:{"font-size":"small"}},"Implementing function behavior"),e("br"),e("br"),e("blockquote",null,[e("p",null,[e("img",{src:Cn,style:{height:"40px"},border:"rounded"}),e("span",{style:{"font-size":"small"}},"in body files .c/.cpp")])])]),e("div",{class:"three-column"},[e("img",{src:sh,style:{height:"70px"},border:"rounded"}),e("br"),u(" Calling"),e("br"),e("span",{style:{"font-size":"small"}},"Invoking functions"),e("br"),e("br"),e("blockquote",null,[e("p",null,[e("img",{src:Cn,style:{height:"40px"},border:"rounded"}),e("span",{style:{"font-size":"small"}},"in body files .c/.cpp")])])])],-1),b2=e("p",null,[u("For instance, we would like to create a math project with functions similar to "),e("code",null,"print_squares")],-1),A2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"- math_project")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── README.md 			//All good projects have a README file")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── math_functions.h 		//Functions prototypes")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── math_functions.cpp	//Functions definitions")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  └── my_main_code.cpp		//Main code calling other functions")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"- math_project")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── README.md 			//All good projects have a README file")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── math_functions.h 		//Functions prototypes")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── math_functions.cpp	//Functions definitions")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  └── my_main_code.cpp		//Main code calling other functions")])])])],-1),B2=[b2,A2],C2={__name:"19",setup(t){const n={level:2};return q(K),(s,o)=>{const l=Ge("center"),r=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[g2,v2,T(l,null,{default:I(()=>[_2]),_:1}),ae((v(),w("div",null,B2)),[[r,1]])]),_:1},16)}}},D2=Y(C2,[["__file","/@slidev/slides/19.md"]]),w2=e("h1",null,"Project files",-1),x2={class:"row"},k2={class:"column"},E2=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Qt,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," math_functions.h")],-1),$2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//do not forget the `;` at the end!")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//do not forget the `;` at the end!")])])])],-1),F2={class:"column"},T2=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Cn,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," math_functions.cpp")],-1),S2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," square"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"i "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," first"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"<="),e("span",{style:{color:"#DBD7CA"}}," last"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"+="),e("span",{style:{color:"#DBD7CA"}}," step"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        square "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"printf"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"%d"),e("span",{style:{color:"#C98A7D"}}," squared: "),e("span",{style:{color:"#D4976C"}},"%d\\n"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," square"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," square"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"i "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," first"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"<="),e("span",{style:{color:"#393A34"}}," last"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"+="),e("span",{style:{color:"#393A34"}}," step"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        square "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"printf"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"%d"),e("span",{style:{color:"#B56959"}}," squared: "),e("span",{style:{color:"#A65E2B"}},"%d\\n"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," square"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),O2={class:"row"},P2={class:"column"},I2=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Cn,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," my_main_code.cpp")],-1),M2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"math_functions.h"'),e("span",{style:{color:"#DBD7CA"}},"   ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"<="),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"*="),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"i"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}},"						  ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"math_functions.h"'),e("span",{style:{color:"#393A34"}},"   ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"<="),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"*="),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"i"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}},"						  ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),L2={__name:"20",setup(t){const n={level:2};return q(K),(s,o)=>{const l=Je,r=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[w2,e("div",x2,[ae((v(),w("div",k2,[E2,T(l,ue({},{ranges:[""]}),{default:I(()=>[$2]),_:1},16)])),[[r,1]]),ae((v(),w("div",F2,[T2,T(l,ue({},{ranges:[""]}),{default:I(()=>[S2]),_:1},16)])),[[r,2]])]),e("div",O2,[ae((v(),w("div",P2,[I2,T(l,ue({},{ranges:[""]}),{default:I(()=>[M2]),_:1},16)])),[[r,3]])])]),_:1},16)}}},j2=Y(L2,[["__file","/@slidev/slides/20.md"]]),N2=e("h1",null,"Project files",-1),R2={class:"row"},H2={class:"column"},q2=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Qt,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," math_functions.h")],-1),V2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"//do not forget the `;` at the end!")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"//do not forget the `;` at the end!")])])])],-1),z2={class:"column"},G2=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Cn,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," math_functions.cpp")],-1),U2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"last"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"step"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," square"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"i "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," first"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"<="),e("span",{style:{color:"#DBD7CA"}}," last"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"+="),e("span",{style:{color:"#DBD7CA"}}," step"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        square "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," i "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"printf"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"%d"),e("span",{style:{color:"#C98A7D"}}," squared: "),e("span",{style:{color:"#D4976C"}},"%d\\n"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," square"),e("span",{style:{color:"#858585"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"last"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"step"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," square"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"i "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," first"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"<="),e("span",{style:{color:"#393A34"}}," last"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"+="),e("span",{style:{color:"#393A34"}}," step"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        square "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," i "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"printf"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"%d"),e("span",{style:{color:"#B56959"}}," squared: "),e("span",{style:{color:"#A65E2B"}},"%d\\n"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," square"),e("span",{style:{color:"#8E8F8B"}},");")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),W2={class:"row"},K2={class:"column"},Y2=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Cn,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," my_main_code.cpp")],-1),Z2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"math_functions.h"'),e("span",{style:{color:"#DBD7CA"}},"   ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"<="),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"*="),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#A1B567"}},"print_squares"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"i"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}},"						  ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"math_functions.h"'),e("span",{style:{color:"#393A34"}},"   ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"<="),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"*="),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#6C7834"}},"print_squares"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"i"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}},"						  ")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Q2=e("div",{class:"column"},[e("p",null,[u("One includes the functions from the header file "),e("code",null,"math_functions.h"),u(" with the "),e("em",null,"precompilation directive"),u(),e("code",null,"#include")])],-1),J2={__name:"21",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>{const l=Je;return v(),X(Pe,we(Ce(n)),{default:I(()=>[N2,e("div",R2,[e("div",H2,[q2,T(l,ue({},{ranges:["0"]}),{default:I(()=>[V2]),_:1},16)]),e("div",z2,[G2,T(l,ue({},{ranges:["0"]}),{default:I(()=>[U2]),_:1},16)])]),e("div",W2,[e("div",K2,[Y2,T(l,ue({},{ranges:["1"]}),{default:I(()=>[Z2]),_:1},16)]),Q2])]),_:1},16)}}},X2=Y(J2,[["__file","/@slidev/slides/21.md"]]),e4=e("span",{style:{"font-weight":"700","font-size":"30px"}},"3. Precompilation Directives",-1),t4=e("br",null,null,-1),n4=e("br",null,null,-1),s4={style:{"text-align":"left",display:"inline-block"}},o4={__name:"22",setup(t){const n={layout:"intro",level:1};return q(K),(s,o)=>{const l=Yo,r=Ge("center");return v(),X(Zo,we(Ce(n)),{default:I(()=>[T(r,null,{default:I(()=>[e4,t4,n4,e("div",s4,[T(l,{minDepth:"2",mode:"onlyCurrentTree"})])]),_:1})]),_:1},16)}}},l4=Y(o4,[["__file","/@slidev/slides/22.md"]]),r4=e("h1",null,"#include directive",-1),i4=e("div",{class:"box-top-left"},[e("p",null,[e("span",{class:"box-title"},"Definition: #include directive"),u(" The "),e("code",null,"#include"),u(" directive in C/C++ is used to include the content of a header file into the source code file at the point where the directive is specified. It allows you to access and utilize functions, constants, and definitions defined in the included header file.")])],-1),a4=e("p",null,"This directive helps in organizing code by separating reusable components into header files and including them where needed, promoting modularity and code reuse.",-1),c4={__name:"23",setup(t){const n={level:2};return q(K),(s,o)=>(v(),X(Pe,we(Ce(n)),{default:I(()=>[r4,i4,a4]),_:1},16))}},u4=Y(c4,[["__file","/@slidev/slides/23.md"]]),p4=e("h1",null,"#include directive",-1),d4=e("p",null,"Let us consider the following basic tree structure",-1),f4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"- project")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── main.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  └── include")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"      └── file.h")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"- project")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── main.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  └── include")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"      └── file.h")])])])],-1),h4={class:"row"},y4={class:"column"},m4=e("p",null,[e("code",null,'#include "file.h"')],-1),g4=e("div",{style:{"font-size":"small"}},[u("The preprocessor will search for the header file (file.h) "),e("u",null,"relative to"),u(" the current directory where the source file (main.cpp) is located. "),e("br"),e("br"),e("br"),e("br"),u("Therefore, in main.cpp, you would write:")],-1),v4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"include/file.h"')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"include/file.h"')])])])],-1),_4={class:"column"},b4=e("p",null,[e("code",null,"#include <file.h>")],-1),A4=e("div",{style:{"font-size":"small"}},[u("The preprocessor will search for the header file (file.h) in the system directories or directories specified in the "),e("u",null,"compiler's paths"),u(". This syntax is also used to include a standard library or external library header files. "),e("br"),e("br"),u("Therefore, in main.cpp, you would write:")],-1),B4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"<file.h>")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"<file.h>")])])])],-1),C4=e("br",null,null,-1),D4=e("blockquote",null,[e("p",null,"Note: The actual file paths may vary depending on the specific project structure and build system used.")],-1),w4=[D4],x4={__name:"24",setup(t){const n={level:2,hideInToc:!0,clicks:2};return q(K),(s,o)=>{const l=Ge("center"),r=Je,i=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[p4,d4,f4,e("div",h4,[ae((v(),w("div",y4,[T(l,null,{default:I(()=>[m4]),_:1}),g4,T(r,ue({},{ranges:[""]}),{default:I(()=>[v4]),_:1},16)])),[[i,1]]),ae((v(),w("div",_4,[T(l,null,{default:I(()=>[b4]),_:1}),A4,T(r,ue({},{ranges:[""]}),{default:I(()=>[B4]),_:1},16)])),[[i,2]])]),C4,ae((v(),w("div",null,w4)),[[i,2]])]),_:1},16)}}},k4=Y(x4,[["__file","/@slidev/slides/24.md"]]),E4=e("h1",null,"#include directive",-1),$4=e("p",null,"If you have a more complex project tree structure…",-1),F4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"- project")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── main.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── include")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  ├── utils")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  │  ├── math.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  │  └── string.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── src")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  ├── core")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  │  ├── engine.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  ├── modules")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  │  ├── rendering")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  │  │  ├── graphics.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  ├── utils")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  │  ├── file.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  │  │  └── logger.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  └── tests")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"     ├── unit")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"     │  ├── math_test.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"     └── integration")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"        └── graphics_test.cpp")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"- project")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── main.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── include")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  ├── utils")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  │  ├── math.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  │  └── string.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── src")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  ├── core")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  │  ├── engine.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  ├── modules")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  │  ├── rendering")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  │  │  ├── graphics.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  ├── utils")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  │  ├── file.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  │  │  └── logger.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  └── tests")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"     ├── unit")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"     │  ├── math_test.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"     └── integration")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"        └── graphics_test.cpp")])])])],-1),T4={__name:"25",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>(v(),X(Pe,we(Ce(n)),{default:I(()=>[E4,$4,F4]),_:1},16))}},S4=Y(T4,[["__file","/@slidev/slides/25.md"]]),O4="/courses/data-structure/functional-programming/chap2/handmade.png",P4="/courses/data-structure/functional-programming/chap2/books.png",I4=e("h1",null,"#include directive",-1),M4=e("p",null,[u("If you have a more complex project tree structure… the "),e("strong",null,"search order"),u(" will be important")],-1),L4={class:"row"},j4={class:"column"},N4=e("p",null,[e("code",null,'#include "file.h"')],-1),R4=e("div",{style:{"font-size":"small"}},[e("ol",null,[e("li",null,"Directory of the file containing this directive."),e("li",null,[u("Directories of each file in the project that includes (using "),e("code",null,"#include"),u(") this file.")]),e("li",null,"Directories specified by the /I option of the compiler."),e("li",null,[u("Directories present in the environment variable "),e("code",null,"include"),u(".")])])],-1),H4={class:"column"},q4=e("p",null,[e("code",null,"#include <file.h>")],-1),V4=e("div",{style:{"font-size":"small"}},[e("ol",null,[e("li",null,"Directory specified by the -I option of the compiler."),e("li",null,[u("Directories present in the environment variable "),e("code",null,"include"),u(".")])])],-1),z4=e("br",null,null,-1),G4=e("br",null,null,-1),U4={class:"row"},W4=e("div",{class:"column"},[e("img",{src:O4,style:{height:"80px"}}),e("br"),u(" To include your custom files ")],-1),K4=e("div",{class:"column"},[e("img",{src:P4,style:{height:"80px"}}),e("br"),u(" To include libraries ")],-1),Y4=[W4,K4],Z4={__name:"26",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>{const l=Ge("center"),r=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[I4,M4,e("div",L4,[ae((v(),w("div",j4,[T(l,null,{default:I(()=>[N4]),_:1}),R4])),[[r,1]]),ae((v(),w("div",H4,[T(l,null,{default:I(()=>[q4]),_:1}),V4])),[[r,2]])]),z4,G4,T(l,null,{default:I(()=>[ae((v(),w("div",U4,Y4)),[[r,3]])]),_:1})]),_:1},16)}}},Q4=Y(Z4,[["__file","/@slidev/slides/26.md"]]),J4=e("h1",null,"Quiz: Find the correct directive(s)",-1),X4={class:"row"},ew=e("div",{class:"column"},[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"project/")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"├── main.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"├── includes/")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"│   └── custom/")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"│       ├── utility.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"│       └── utility.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"└── libraries/")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"    └── custom/")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"        ├── math.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"        └── math.cpp")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"project/")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"├── main.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"├── includes/")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"│   └── custom/")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"│       ├── utility.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"│       └── utility.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"└── libraries/")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"    └── custom/")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"        ├── math.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"        └── math.cpp")])])])])],-1),tw={class:"column"},nw=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Cn,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," main.cpp")],-1),sw={class:"remove"},ow=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Add the correct precompilation directives(s)")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Add the correct precompilation directives(s)")])])])],-1),lw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"utility.h"'),e("span",{style:{color:"#DBD7CA"}},"					"),e("span",{style:{color:"#758575"}},"// Solution 1")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"includes/custom/utility.h"'),e("span",{style:{color:"#DBD7CA"}}," 	"),e("span",{style:{color:"#758575"}},"// Solution 2")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"utility.h"'),e("span",{style:{color:"#393A34"}},"					"),e("span",{style:{color:"#A0ADA0"}},"// Solution 1")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"includes/custom/utility.h"'),e("span",{style:{color:"#393A34"}}," 	"),e("span",{style:{color:"#A0ADA0"}},"// Solution 2")])])])],-1),rw=e("br",null,null,-1),iw=e("p",null,[u("In "),e("code",null,"main.cpp"),u(", which "),e("code",null,"#include"),u(" directive should you use to include the functions in "),e("code",null,"utility.cpp"),u("?")],-1),aw=e("br",null,null,-1),cw={class:"remove"},uw={style:{"font-size":"smaller"}},pw=e("p",null,[u("We could also have used "),e("code",null,"#include <utility.h>"),e("br"),u(" even though it is prefered to use them for standard libraries")],-1),dw=[pw],fw={class:"fieldset-box"},hw=e("div",{class:"legend"},"Wooclap",-1),yw={__name:"27",setup(t){const n={level:2,hideInToc:!0,clicks:1};return q(K),(s,o)=>{const l=Je,r=Ge("center"),i=We("click-hide"),a=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[J4,e("div",X4,[ew,e("div",tw,[nw,e("div",sw,[ae((v(),w("div",null,[T(l,ue({},{ranges:[""]}),{default:I(()=>[ow]),_:1},16)])),[[i,1]]),ae((v(),w("div",null,[T(l,ue({},{ranges:[""]}),{default:I(()=>[lw]),_:1},16)])),[[a,1]])])])]),rw,iw,aw,T(r,null,{default:I(()=>[e("div",cw,[ae((v(),w("div",uw,dw)),[[a,1]]),ae((v(),w("div",fw,[hw,u(" Event: DATASTRUCT2 ")])),[[i,1]])])]),_:1})]),_:1},16)}}},mw=Y(yw,[["__file","/@slidev/slides/27.md"]]),gw=e("h1",null,"Handling multiply-defined symbols",-1),vw=e("p",null,"Let us consider the following project",-1),_w={class:"row"},bw=e("div",{class:"three-column"},[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"- project")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── main.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── car.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── driver.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  └── owner.h")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"- project")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── main.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── car.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── driver.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  └── owner.h")])])])])],-1),Aw={class:"three-column"},Bw=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Qt,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," driver.h")],-1),Cw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"car.h"')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"car.h"')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")])])])],-1),Dw={class:"three-column"},ww=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Qt,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," owner.h")],-1),xw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"car.h"')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"car.h"')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")])])])],-1),kw=e("p",null,[u("The two header files include "),e("code",null,"car.h"),u(" to make use of the type "),e("code",null,"car")],-1),Ew=[kw],$w={class:"row"},Fw={class:"column"},Tw=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Qt,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," car.h")],-1),Sw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"typedef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// ...")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"car"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"typedef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// ...")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"car"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),Ow={class:"column"},Pw={class:"danger-box"},Iw=e("b",null,"multiply-defined",-1),Mw=e("p",null,[e("span",{style:{"font-size":"small"}},[u("The type "),e("code",null,"car"),u(" is defined twice, one for each include of "),e("code",null,"car.h")])],-1),Lw={__name:"28",setup(t){const n={level:2,clicks:3};return q(K),(s,o)=>{const l=Je,r=Ge("center"),i=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[gw,vw,e("div",_w,[bw,ae((v(),w("div",Aw,[Bw,T(l,ue({},{ranges:[""]}),{default:I(()=>[Cw]),_:1},16)])),[[i,1]]),ae((v(),w("div",Dw,[ww,T(l,ue({},{ranges:[""]}),{default:I(()=>[xw]),_:1},16)])),[[i,1]])]),ae((v(),w("div",null,Ew)),[[i,2]]),e("div",$w,[ae((v(),w("div",Fw,[Tw,T(l,ue({},{ranges:[""]}),{default:I(()=>[Sw]),_:1},16)])),[[i,2]]),ae((v(),w("div",Ow,[e("div",Pw,[T(r,null,{default:I(()=>[u("You get a "),Iw,u(" error")]),_:1}),Mw])])),[[i,3]])])]),_:1},16)}}},jw=Y(Lw,[["__file","/@slidev/slides/28.md"]]),Nw=e("h1",null,"Handling multiply-defined symbols",-1),Rw=e("p",null,"Let us consider the following project",-1),Hw={class:"row"},qw=e("div",{class:"three-column"},[e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"- project")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── main.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── car.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── driver.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  └── owner.h")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"- project")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── main.cpp")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── car.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── driver.h")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  └── owner.h")])])])])],-1),Vw={class:"three-column"},zw=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Qt,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," driver.h")],-1),Gw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"car.h"')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"car.h"')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")])])])],-1),Uw={class:"three-column"},Ww=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Qt,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," owner.h")],-1),Kw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"car.h"')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// ...")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"car.h"')]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// ...")])])])],-1),Yw=e("p",null,[u("The two header files include "),e("code",null,"car.h"),u(" to make use of the type "),e("code",null,"car")],-1),Zw={class:"row"},Qw={class:"column"},Jw=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Qt,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," car.h")],-1),Xw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}}," ifndef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"__CAR__")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}}," define"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"__CAR_")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"typedef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// ...")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"car"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}}," endif")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}}," ifndef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"__CAR__")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}}," define"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"__CAR_")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"typedef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// ...")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"car"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}}," endif")])])])],-1),ex=e("div",{class:"column"},[e("div",{class:"box"},[u(" We resort to "),e("b",null,"precompilation directives"),u(" to create macros in order to handle multiply-defined symbols ")])],-1),tx={__name:"29",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>{const l=Je;return v(),X(Pe,we(Ce(n)),{default:I(()=>[Nw,Rw,e("div",Hw,[qw,e("div",Vw,[zw,T(l,ue({},{ranges:[""]}),{default:I(()=>[Gw]),_:1},16)]),e("div",Uw,[Ww,T(l,ue({},{ranges:[""]}),{default:I(()=>[Kw]),_:1},16)])]),Yw,e("div",Zw,[e("div",Qw,[Jw,T(l,ue({},{ranges:["1,2,6"]}),{default:I(()=>[Xw]),_:1},16)]),ex])]),_:1},16)}}},nx=Y(tx,[["__file","/@slidev/slides/29.md"]]),sx=e("h1",null,"Precompilation directives",-1),ox=e("p",null,"Here a list of the most popular ones",-1),lx=e("div",{class:"table-condensed"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Directive"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"#include")]),e("td",null,"Includes a header file")]),e("tr",null,[e("td",null,[e("code",null,"#define")]),e("td",null,"Defines a macro or constant value")]),e("tr",null,[e("td",null,[e("code",null,"#ifdef")]),e("td",null,"Checks if a macro is defined")]),e("tr",null,[e("td",null,[e("code",null,"#ifndef")]),e("td",null,"Checks if a macro is not defined")]),e("tr",null,[e("td",null,[e("code",null,"#if")]),e("td",null,"Conditional compilation based on a constant expr")]),e("tr",null,[e("td",null,[e("code",null,"#else")]),e("td",null,"Executes code if preceding condition is false")]),e("tr",null,[e("td",null,[e("code",null,"#elif")]),e("td",null,[u("Alternative condition for preceding "),e("code",null,"#if")])]),e("tr",null,[e("td",null,[e("code",null,"#endif")]),e("td",null,"Ends a conditional block of code")]),e("tr",null,[e("td",null,[e("span",{class:"highlight-row"},[e("code",null,"#pragma")])]),e("td",null,[e("span",{class:"highlight-row"},"Compiler-specific instructions or settings")])]),e("tr",null,[e("td",null,[e("code",null,"#error")]),e("td",null,"Generates a compilation error")]),e("tr",null,[e("td",null,[e("code",null,"#warning")]),e("td",null,"Generates a compilation warning")])])])],-1),rx={__name:"30",setup(t){const n={level:2};return q(K),(s,o)=>(v(),X(Pe,we(Ce(n)),{default:I(()=>[sx,ox,lx]),_:1},16))}},ix=Y(rx,[["__file","/@slidev/slides/30.md"]]),ax={key:0},cx=be({__name:"Footnotes",props:{filled:{default:!1,type:Boolean},separator:{default:!1,type:Boolean},x:{default:"r",type:String,validator:t=>t==="l"||t==="r"}},setup(t){return q(K),(n,s)=>(v(),w("div",{class:Le(["absolute bottom-0 left-0 w-full",{"bg-main":t.filled}])},[t.separator?(v(),w("hr",ax)):pe("v-if",!0),e("ul",{class:Le(["flex flex-wrap !list-none p-2",{"justify-start":t.x==="l","justify-end":t.x==="r"}])},[dt(n.$slots,"default")],2)],2))}}),ux=Y(cx,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/components/Footnotes.vue"]]),px={class:"text-xs whitespace-nowrap"},dx={key:0},fx=be({__name:"Footnote",props:{number:{type:Number,required:!1}},setup(t){return q(K),(n,s)=>(v(),w("li",px,[n.number?(v(),w("sup",dx,lt(n.number),1)):pe("v-if",!0),dt(n.$slots,"default")]))}}),hx=Y(fx,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/components/Footnote.vue"]]),yx="/courses/data-structure/functional-programming/chap2/precompiler.png",mx="/courses/data-structure/functional-programming/chap2/compiler.png",gx="/courses/data-structure/functional-programming/chap2/linking.png",vx=e("h1",null,"Understanding compilers",-1),_x=e("p",null,"In C/C++, the source code can be compiled into an .exe file as follows",-1),bx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"gcc"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"program.c"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"program.exe"),e("span",{style:{color:"#DBD7CA"}}," 		"),e("span",{style:{color:"#C98A7D"}},"//"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"For"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"C")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"g++"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"program.cpp"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"program.exe"),e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#C98A7D"}},"//"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"For"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"C++")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"gcc"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"program.c"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"program.exe"),e("span",{style:{color:"#393A34"}}," 		"),e("span",{style:{color:"#B56959"}},"//"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"For"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"C")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"g++"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"program.cpp"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"program.exe"),e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#B56959"}},"//"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"For"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"C++")])])])],-1),Ax=e("p",null,"A compiler doesn’t just compile. In reality, it carries out the following three successive steps:",-1),Bx={class:"row"},Cx={class:"three-column"},Dx=e("img",{src:yx,style:{height:"70px"},border:"rounded"},null,-1),wx=e("br",null,null,-1),xx=e("br",null,null,-1),kx=e("div",{style:{"font-size":"small"}},[u("Expands macros and includes header files"),e("br"),u("Interpret precompilation directives")],-1),Ex=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"gcc"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-E"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"source.c"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"preprocessed")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"g++"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-E"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"source.cpp"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"preprocessed")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"gcc"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-E"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"source.c"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"preprocessed")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"g++"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-E"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"source.cpp"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"preprocessed")])])])],-1),$x=e("br",null,null,-1),Fx=e("br",null,null,-1),Tx={class:"three-column"},Sx=e("img",{src:mx,style:{height:"70px"},border:"rounded"},null,-1),Ox=e("br",null,null,-1),Px=e("br",null,null,-1),Ix=e("div",{style:{"font-size":"small"}},[u("Syntax checking and type matching"),e("br"),u("Translates source code to object code")],-1),Mx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"gcc"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-c"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"source.c"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"object.o")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"g++"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-c"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"source.cpp"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"object.o")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"gcc"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-c"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"source.c"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"object.o")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"g++"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-c"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"source.cpp"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"object.o")])])])],-1),Lx=e("br",null,null,-1),jx=e("br",null,null,-1),Nx={class:"three-column"},Rx=e("img",{src:gx,style:{height:"70px"},border:"rounded"},null,-1),Hx=e("br",null,null,-1),qx=e("br",null,null,-1),Vx=e("div",{style:{"font-size":"small"}},[u("Add external libraries"),e("br"),u("Combines object files to create executables"),e("sup",null,"1")],-1),zx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"gcc"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"obj1.o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"obj2.o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"executable.exe")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"g++"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"obj1.o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"obj2.o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"executable.exe")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"gcc"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"obj1.o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"obj2.o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"executable.exe")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"g++"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"obj1.o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"obj2.o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"executable.exe")])])])],-1),Gx=e("br",null,null,-1),Ux=e("br",null,null,-1),Wx={__name:"31",setup(t){const n={level:2,clicks:3};return q(K),(s,o)=>{const l=Je,r=Ge("center"),i=hx,a=ux,c=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[vx,_x,T(l,ue({},{ranges:[""]}),{default:I(()=>[bx]),_:1},16),Ax,T(r,null,{default:I(()=>[e("div",Bx,[e("div",Cx,[ae((v(),w("span",null,[Dx,wx,u(" Precompilation"),xx,kx,T(l,ue({},{ranges:[""]}),{default:I(()=>[Ex]),_:1},16)])),[[c,1]]),$x,Fx]),e("div",Tx,[ae((v(),w("span",null,[Sx,Ox,u(" Compilation"),Px,Ix,T(l,ue({},{ranges:[""]}),{default:I(()=>[Mx]),_:1},16)])),[[c,2]]),Lx,jx]),e("div",Nx,[ae((v(),w("span",null,[Rx,Hx,u(" Linking"),qx,Vx,T(l,ue({},{ranges:[""]}),{default:I(()=>[zx]),_:1},16)])),[[c,3]]),Gx,Ux])])]),_:1}),ae((v(),w("div",null,[T(a,{separator:""},{default:I(()=>[T(i,{number:1},{default:I(()=>[u("One can also create libraries .lib")]),_:1})]),_:1})])),[[c,3]])]),_:1},16)}}},Kx=Y(Wx,[["__file","/@slidev/slides/31.md"]]),Yx={class:"flex flex-col items-center justify-center"},Zx=["alt","src"],Qx={key:0,class:"mt-3 text-center text-xs"},Jx={key:0},Xx=be({__name:"FigureWithOptionalCaption",props:{caption:{type:String,required:!1},footnoteNumber:{type:Number,required:!1},url:{type:String,required:!0}},setup(t){return q(K),(n,s)=>(v(),w("figure",Yx,[e("img",{alt:n.caption,class:"max-h-full",src:$(qi)(n.url)},null,8,Zx),n.caption?(v(),w("figcaption",Qx,[u(lt(n.caption),1),n.footnoteNumber?(v(),w("sup",Jx,lt(n.footnoteNumber),1)):pe("v-if",!0)])):pe("v-if",!0)]))}}),ek=Y(Xx,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/components/FigureWithOptionalCaption.vue"]]),tk={class:"slidev-layout default h-full"},nk=be({__name:"figure",props:{figureCaption:{type:String,required:!1},figureFootnoteNumber:{type:Number,required:!1},figureUrl:{type:String,required:!0}},setup(t){return q(K),(n,s)=>{const o=ek;return v(),w("div",tk,[dt(n.$slots,"default"),T(o,{class:"h-5/6 p-4",caption:n.figureCaption,footnoteNumber:n.figureFootnoteNumber,url:n.figureUrl},null,8,["caption","footnoteNumber","url"])])}}}),sk=Y(nk,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/layouts/figure.vue"]]),ok=e("h1",null,"Understanding compilers",-1),lk=e("p",null,"Note that: platform-specific libraries → platform-specific executable",-1),rk={__name:"32",setup(t){const n={level:2,hideInToc:!0,layout:"figure",figureUrl:"chap2/compilesteps.png"};return q(K),(s,o)=>(v(),X(sk,we(Ce(n)),{default:I(()=>[ok,lk]),_:1},16))}},ik=Y(rk,[["__file","/@slidev/slides/32.md"]]),ak=e("h1",null,"Example: Handling Configurations",-1),ck={class:"row"},uk={class:"column"},pk=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Qt,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," config.h")],-1),dk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"ifndef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG_H")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"define"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG_H")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"ifndef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"define"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG"),e("span",{style:{color:"#DBD7CA"}}," RELEASE")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"	"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"endif")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"ifdef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	    "),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"DEBUG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"			cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Debug Mode"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"	    "),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"elif"),e("span",{style:{color:"#DBD7CA"}}," CONFIG "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," RELEASE")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"			cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Release Mode"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"	    "),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"endif")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"	"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"endif")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"endif")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"ifndef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG_H")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"define"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG_H")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"ifndef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"define"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG"),e("span",{style:{color:"#393A34"}}," RELEASE")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"	"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"endif")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"ifdef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	    "),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"DEBUG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"			cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Debug Mode"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"	    "),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"elif"),e("span",{style:{color:"#393A34"}}," CONFIG "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," RELEASE")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"			cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Release Mode"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"	    "),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"endif")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"	"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"endif")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"endif")])])])],-1),fk={class:"column"},hk=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Cn,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," main.cpp")],-1),yk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"<iostream>")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"config.h"')]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello, World!"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"<iostream>")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"config.h"')]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello, World!"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),mk={__name:"33",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>{const l=Je,r=Ge("center");return v(),X(Pe,we(Ce(n)),{default:I(()=>[ak,e("div",ck,[e("div",uk,[pk,T(l,ue({},{ranges:[""]}),{default:I(()=>[dk]),_:1},16)]),e("div",fk,[hk,T(l,ue({},{ranges:[""]}),{default:I(()=>[yk]),_:1},16)])]),T(r,null,{default:I(()=>[u(" What happens at compile time? ")]),_:1})]),_:1},16)}}},gk=Y(mk,[["__file","/@slidev/slides/33.md"]]),vk="/courses/data-structure/functional-programming/chap2/switching.png",_k="/courses/data-structure/functional-programming/chap2/toggling.png",bk="/courses/data-structure/functional-programming/chap2/plateform.png",Ak=e("h1",null,[e("code",null,"-D"),u(" Flag")],-1),Bk=e("div",{class:"box-top-left"},[e("span",{class:"box-title"},"Definition: `-D` flag"),e("p",null,[u("The -D flag defines preprocessor macros (e.g., "),e("code",null,"MYFLAG"),u(") at compile time."),e("br"),u(" It allows you to set macro values without modifying the source code directly.")])],-1),Ck={class:"three-column",style:{"margin-left":"31%"}},Dk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"g++"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-DMYFLAG"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"main.cpp"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"myprogram")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"g++"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-DMYFLAG"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"main.cpp"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"myprogram")])])])],-1),wk=e("p",null,[e("br"),e("br")],-1),xk={class:"row"},kk={class:"three-column"},Ek=e("img",{src:vk,style:{height:"50px"},border:"rounded"},null,-1),$k=e("br",null,null,-1),Fk=e("br",null,null,-1),Tk=e("span",{style:{"font-size":"small"}},[u("Compile different versions"),e("br"),u(" (debug, release, etc.)")],-1),Sk={class:"three-column"},Ok=e("img",{src:_k,style:{height:"50px"},border:"rounded"},null,-1),Pk=e("br",null,null,-1),Ik=e("br",null,null,-1),Mk=e("span",{style:{"font-size":"small"}},[u("Enables/disable specific features"),e("br"),u(" in your application")],-1),Lk={class:"three-column"},jk=e("img",{src:bk,style:{height:"50px"},border:"rounded"},null,-1),Nk=e("br",null,null,-1),Rk=e("br",null,null,-1),Hk=e("span",{style:{"font-size":"small"}},[u("Indicate the platform during compilation"),e("br"),u(" `-DWIN32` or `-DLINUX`")],-1),qk={__name:"34",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>{const l=Je,r=Ge("center"),i=We("click");return v(),X(Pe,we(Ce(n)),{default:I(()=>[Ak,Bk,T(r,null,{default:I(()=>[e("div",Ck,[T(l,ue({},{ranges:[""]}),{default:I(()=>[Dk]),_:1},16)])]),_:1}),wk,T(r,null,{default:I(()=>[e("div",xk,[e("div",kk,[ae((v(),w("span",null,[Ek,$k,u(" Switching"),Fk,Tk])),[[i,1]])]),e("div",Sk,[ae((v(),w("span",null,[Ok,Pk,u(" Toggling"),Ik,Mk])),[[i,2]])]),e("div",Lk,[ae((v(),w("span",null,[jk,Nk,u(" Bulding"),Rk,Hk])),[[i,3]])])])]),_:1})]),_:1},16)}}},Vk=Y(qk,[["__file","/@slidev/slides/34.md"]]),zk=e("h1",null,"Example: Handling Configurations",-1),Gk={class:"row"},Uk={class:"column"},Wk=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Qt,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," config.h")],-1),Kk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"ifndef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG_H")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"define"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG_H")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"ifndef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"define"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG"),e("span",{style:{color:"#DBD7CA"}}," RELEASE")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"	"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"endif")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"ifdef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	    "),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"CONFIG"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"DEBUG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"			cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Debug Mode"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"	    "),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"elif"),e("span",{style:{color:"#DBD7CA"}}," CONFIG "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," RELEASE")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"			cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Release Mode"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"	    "),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"endif")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"	"),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"endif")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"endif")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"ifndef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG_H")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"define"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG_H")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"ifndef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"define"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG"),e("span",{style:{color:"#393A34"}}," RELEASE")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"	"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"endif")]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"ifdef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	    "),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"CONFIG"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"DEBUG")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"			cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Debug Mode"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"	    "),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"elif"),e("span",{style:{color:"#393A34"}}," CONFIG "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," RELEASE")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"			cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Release Mode"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"	    "),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"endif")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"	"),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"endif")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"endif")])])])],-1),Yk={class:"column"},Zk=e("div",{style:{display:"flex","align-items":"center"}},[e("img",{src:Cn,style:{height:"50px","border-radius":"50%","margin-right":"10px"}}),e("span",{style:{"font-size":"small"}}," main.cpp")],-1),Qk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"<iostream>")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#4D9375"}},"include"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"config.h"')]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Hello, World!"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"<iostream>")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#1C6B48"}},"include"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"config.h"')]),u(`
`),e("span",{class:"line"}),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Hello, World!"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),u(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Jk={class:"row"},Xk={class:"column"},eE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"g++"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-DCONFIG=DEBUG"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"main.cpp"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"myprogram")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"g++"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-DCONFIG=DEBUG"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"main.cpp"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"myprogram")])])])],-1),tE={class:"column"},nE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"g++"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-DCONFIG=RELEASE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"main.cpp"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-o"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"myprogram")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"g++"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-DCONFIG=RELEASE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"main.cpp"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-o"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"myprogram")])])])],-1),sE={__name:"35",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>{const l=Je;return v(),X(Pe,we(Ce(n)),{default:I(()=>[zk,e("div",Gk,[e("div",Uk,[Wk,T(l,ue({},{ranges:["0"]}),{default:I(()=>[Kk]),_:1},16)]),e("div",Yk,[Zk,T(l,ue({},{ranges:["0"]}),{default:I(()=>[Qk]),_:1},16)])]),e("div",Jk,[e("div",Xk,[u(" For DEBUG mode "),T(l,ue({},{ranges:[""]}),{default:I(()=>[eE]),_:1},16)]),e("div",tE,[u(" For RELEASE mode "),T(l,ue({},{ranges:[""]}),{default:I(()=>[nE]),_:1},16)])])]),_:1},16)}}},oE=Y(sE,[["__file","/@slidev/slides/35.md"]]),lE=e("span",{style:{"font-weight":"700","font-size":"30px"}},"Conclusion",-1),rE=e("br",null,null,-1),iE=e("br",null,null,-1),aE={style:{"text-align":"left",display:"inline-block"}},cE={__name:"36",setup(t){const n={layout:"intro",level:1,hideInToc:!0};return q(K),(s,o)=>{const l=Yo,r=Ge("center");return v(),X(Zo,we(Ce(n)),{default:I(()=>[T(r,null,{default:I(()=>[lE,rE,iE,e("div",aE,[T(l,{minDepth:"2",mode:"onlyCurrentTree"})])]),_:1})]),_:1},16)}}},uE=Y(cE,[["__file","/@slidev/slides/36.md"]]),pE=e("h1",null,"To Recap",-1),dE=e("p",null,"We have seen …",-1),fE=e("ol",null,[e("li",null,"How to prototype, define and call a function"),e("li",null,"The header and body files"),e("li",null,"How to use precompilation directives to connect header and body files"),e("li",null,"The 3 main stages of a compiler")],-1),hE={__name:"37",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>(v(),X(Pe,we(Ce(n)),{default:I(()=>[pE,dE,fE]),_:1},16))}},yE=Y(hE,[["__file","/@slidev/slides/37.md"]]),mE=e("h1",null,"To Go Further",-1),gE=e("ol",null,[e("li",null,[e("p",null,"Functional Programming"),e("ul",null,[e("li",null,[e("span",{style:{"font-size":"smaller"}}," Learn about lambda expressions")])])]),e("li",null,[e("p",null,"Header Files and Source Files (Body Files)"),e("ul",null,[e("li",null,[e("span",{style:{"font-size":"smaller"}}," Practice creating your own header files and source file")])])]),e("li",null,[e("p",null,"Precompilation Directives"),e("ul",null,[e("li",null,[e("span",{style:{"font-size":"smaller"}},[u(" Study the precompilation directive "),e("code",null,"#pragma")])]),e("li",null,[e("span",{style:{"font-size":"smaller"}},[u(" Study the header guard "),e("code",null,"#pragma once"),u(),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,"⟹")]),e("annotation",{encoding:"application/x-tex"},"\\Longrightarrow")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.549em","vertical-align":"-0.024em"}}),e("span",{class:"mrel"},"⟹")])])]),u(),e("i",null,"A volonteer?")])])])])],-1),vE={__name:"38",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>(v(),X(Pe,we(Ce(n)),{default:I(()=>[mE,gE]),_:1},16))}},_E=Y(vE,[["__file","/@slidev/slides/38.md"]]),bE=e("h1",null,"To Go Even Further",-1),AE=e("p",null,"Prototyping",-1),BE=e("ul",null,[e("li",null,[e("span",{style:{"font-size":"smaller"}}," Explore rapid prototyping frameworks such as Qt or SD")]),e("li",null,[e("span",{style:{"font-size":"smaller"}}," Learn about Python to create prototypes that interact with C/C++ code")])],-1),CE={__name:"39",setup(t){const n={level:2,hideInToc:!0};return q(K),(s,o)=>(v(),X(Pe,we(Ce(n)),{default:I(()=>[bE,AE,BE]),_:1},16))}},DE=Y(CE,[["__file","/@slidev/slides/39.md"]]),wE=[{path:"1",name:"page-1",component:RC,meta:{theme:"academic",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap2/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},title:"Functional Programming",coverDate:null,hideInToc:!0,slide:{raw:`---
theme: academic
layout: cover
coverAuthor: Jordan Frecon-Deloire
coverBackgroundUrl: chap2/cover.png
highlighter: shiki
lineNumbers: false
class: text-white
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled:
    - 1
title: Functional Programming
coverDate: null
hideInToc: true
---


# Data Structures in C/C++
## Chapter 2: Functional Programming
<img src="/front/logo.png" class="image-bottom" style="height:70px;width:auto"/>

`,title:"Functional Programming",content:`# Data Structures in C/C++
## Chapter 2: Functional Programming
<img src="/front/logo.png" class="image-bottom" style="height:70px;width:auto"/>`,frontmatter:{theme:"academic",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap2/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},title:"Functional Programming",coverDate:null,hideInToc:!0},index:0,start:0,end:24,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:RD,meta:{hideInToc:!0,slide:{raw:`---
hideInToc: true
---

# Table of contents

<Toc columns="1" maxDepth="3"/>

`,title:"Table of contents",level:1,content:`# Table of contents

<Toc columns="1" maxDepth="3"/>`,frontmatter:{hideInToc:!0},index:1,start:24,end:33,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:YD,meta:{layout:"intro",title:"Functional Programming",level:1,slide:{raw:`---
layout: intro
title: Functional Programming
level: 1
---

<center>
<span style="font-weight:700;font-size:30px">1. Functional Programming</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>

`,title:"Functional Programming",level:1,content:`<center>
<span style="font-weight:700;font-size:30px">1. Functional Programming</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>`,frontmatter:{layout:"intro",title:"Functional Programming",level:1},index:2,start:33,end:48,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:c9,meta:{layout:"image-right",image:"/chap2/spaghetti.png",level:2,title:"Introduction",slide:{raw:`---
layout: image-right
image: /chap2/spaghetti.png
level: 2
title: Introduction
---

# Functions?

Before, codes used to look like this ...

\`\`\`
10 i = 0
20 i = i + 1
30 PRINT i; " squared = "; i * i
40 IF i >= 10 THEN GOTO 60
50 GOTO 20
60 PRINT "Program Completed."
70 END
\`\`\`

They were unstructured, tangled codes with excessive dependencies and lack of modularity... known as **spaghetti codes**

<div v-click="1">

*What does the program display?*
</div><div v-click="2">
	
\`\`\`
1 squared = 1
2 squared = 4
...
9 squared = 81
Program Completed.
\`\`\`
</div>

`,title:"Introduction",level:2,content:`# Functions?

Before, codes used to look like this ...

\`\`\`
10 i = 0
20 i = i + 1
30 PRINT i; " squared = "; i * i
40 IF i >= 10 THEN GOTO 60
50 GOTO 20
60 PRINT "Program Completed."
70 END
\`\`\`

They were unstructured, tangled codes with excessive dependencies and lack of modularity... known as **spaghetti codes**

<div v-click="1">

*What does the program display?*
</div><div v-click="2">
	
\`\`\`
1 squared = 1
2 squared = 4
...
9 squared = 81
Program Completed.
\`\`\`
</div>`,frontmatter:{layout:"image-right",image:"/chap2/spaghetti.png",level:2,title:"Introduction"},index:3,start:48,end:86,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:_9,meta:{hideInToc:!0,level:2,slide:{raw:`---
hideInToc: true
level: 2
---

# Functions!

Functions are used to:
  - Divide the code into logical and manageable blocks of instructions.
  - Avoid code duplication.

<br>
<div v-click="1">
<center>
Functional programming was invented to combat spaghetti programming<br><br>
	
<img src="/chap2/fight.png" style="height:250px">
</center>
</div>
`,title:"Functions!",level:2,content:`# Functions!

Functions are used to:
  - Divide the code into logical and manageable blocks of instructions.
  - Avoid code duplication.

<br>
<div v-click="1">
<center>
Functional programming was invented to combat spaghetti programming<br><br>
	
<img src="/chap2/fight.png" style="height:250px">
</center>
</div>`,frontmatter:{hideInToc:!0,level:2},index:4,start:86,end:106,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Y9,meta:{hideInToc:!0,level:2,slide:{raw:`---
hideInToc: true
level: 2
---

# Functions

There are 3 phases occuring in functional programming

<center>
<div class="row">
<div class="three-column">
<span v-click="1">
<img src="/chap2/prototype.png" style="height:70px" border="rounded"/><br>
Prototyping<br>
<span style="font-size:small">Function signature declaration</span>
</span>
<br><br>

</div>


<div class="three-column">
<span v-click="2">
<img src="/chap2/definition.png" style="height:70px" border="rounded"/><br>
Defining<br>
<span style="font-size:small">Implementing function behavior</span>
</span>
<br><br>
</div>

<div class="three-column">
<span v-click="3">
<img src="/chap2/call.png" style="height:70px" border="rounded"/><br>
Calling<br>
<span style="font-size:small">Invoking functions</span>
</span>
<br><br>
</div>

</div>
  
<div v-click="4"><br><br>
We are going to recap all three 3 phases<br><br>
and show how to link them together
</div>

  
</center>


`,title:"Functions",level:2,content:`# Functions

There are 3 phases occuring in functional programming

<center>
<div class="row">
<div class="three-column">
<span v-click="1">
<img src="/chap2/prototype.png" style="height:70px" border="rounded"/><br>
Prototyping<br>
<span style="font-size:small">Function signature declaration</span>
</span>
<br><br>

</div>


<div class="three-column">
<span v-click="2">
<img src="/chap2/definition.png" style="height:70px" border="rounded"/><br>
Defining<br>
<span style="font-size:small">Implementing function behavior</span>
</span>
<br><br>
</div>

<div class="three-column">
<span v-click="3">
<img src="/chap2/call.png" style="height:70px" border="rounded"/><br>
Calling<br>
<span style="font-size:small">Invoking functions</span>
</span>
<br><br>
</div>

</div>
  
<div v-click="4"><br><br>
We are going to recap all three 3 phases<br><br>
and show how to link them together
</div>

  
</center>`,frontmatter:{hideInToc:!0,level:2},index:5,start:106,end:158,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:y7,meta:{title:"Prototyping",level:2,slide:{raw:`---
title: Prototyping
level: 2
---

# Function prototype

<div class="box-top-left">
	
<span class="box-title">Definition: Function prototype</span>
A **function prototype** is a declaration specifying a function's  name \`function_name\`, return type \`type_return\`, and parameter types (\`type1\`, \`type2\`, ...), enabling its use before definition.

\`\`\`cpp
type_return function_name(type1 arg1, type2 arg2, ...);
\`\`\` 
</div>
<div v-click="1">
  
 	


- Each function in a program has a unique prototype.
- The compiler uses the prototype to validate function calls and perform type conversions if necessary.
- Parameter names can be omitted (but not the types), although it is recommended to provide meaningful names for clarity.
</div>
`,title:"Prototyping",level:2,content:`# Function prototype

<div class="box-top-left">
	
<span class="box-title">Definition: Function prototype</span>
A **function prototype** is a declaration specifying a function's  name \`function_name\`, return type \`type_return\`, and parameter types (\`type1\`, \`type2\`, ...), enabling its use before definition.

\`\`\`cpp
type_return function_name(type1 arg1, type2 arg2, ...);
\`\`\` 
</div>
<div v-click="1">
  
 	


- Each function in a program has a unique prototype.
- The compiler uses the prototype to validate function calls and perform type conversions if necessary.
- Parameter names can be omitted (but not the types), although it is recommended to provide meaningful names for clarity.
</div>`,frontmatter:{title:"Prototyping",level:2},index:6,start:158,end:184,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:x7,meta:{hideInToc:!0,level:2,slide:{raw:`---
hideInToc: true
level: 2
---

# Function prototype

Let us imagine a function printing the squares of integers (equally separated by \`step\`) between \`first\` and \`last\`
  
\`\`\`cpp
void print_squares(int first, int last, int step);
\`\`\`


<div v-click="1"><br>

<center>Default values can be specified starting from the right</center>
</div><br><br>



<div v-click="2">
Correct declarations:
\`\`\`cpp
void print_squares(int first=1, int last=10, int step=1);
void print_squares(int first, int last=10, int step=1);
void print_squares(int first, int last, int step=1);
\`\`\`


Incorrect declarations:
\`\`\`cpp
void print_squares(int first=1, int last=10, int step);
void print_squares(int first=1, int last, int step);
\`\`\`
</div>
`,title:"Function prototype",level:2,content:`# Function prototype

Let us imagine a function printing the squares of integers (equally separated by \`step\`) between \`first\` and \`last\`
  
\`\`\`cpp
void print_squares(int first, int last, int step);
\`\`\`


<div v-click="1"><br>

<center>Default values can be specified starting from the right</center>
</div><br><br>



<div v-click="2">
Correct declarations:
\`\`\`cpp
void print_squares(int first=1, int last=10, int step=1);
void print_squares(int first, int last=10, int step=1);
void print_squares(int first, int last, int step=1);
\`\`\`


Incorrect declarations:
\`\`\`cpp
void print_squares(int first=1, int last=10, int step);
void print_squares(int first=1, int last, int step);
\`\`\`
</div>`,frontmatter:{hideInToc:!0,level:2},index:7,start:184,end:221,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:z7,meta:{title:"Defining",level:2,slide:{raw:`---
title: Defining
level: 2
---

# Function definition
You have already seen functions!

<div v-click="1">

For instance the \`main\` function of your program
</div>
<div class="row">
<div class="column" v-click="2">
\`\`\`cpp
int main() {
	// Your code
	return 0; // Why?
}
\`\`\`
</div>
<div class="column" v-click="3">
	
It returns an \`int\` value to indicate the status or exit code of the program<br>
> value = 0: successful execution<br>
	value > 0: error or exceptional condition
</div>
</div>
	

<div v-click="4">
<div class="row">
<div class="column">

... or the function \`f\` from Chapter 1
\`\`\`cpp

void f() {
	cout << x;
}
\`\`\`


</div>
<div class="column"><br><br><br>

It has the return type \`void\` since it returns nothing
  
It takes no input parameter
 
</div>
</div>
</div>

`,title:"Defining",level:2,content:`# Function definition
You have already seen functions!

<div v-click="1">

For instance the \`main\` function of your program
</div>
<div class="row">
<div class="column" v-click="2">
\`\`\`cpp
int main() {
	// Your code
	return 0; // Why?
}
\`\`\`
</div>
<div class="column" v-click="3">
	
It returns an \`int\` value to indicate the status or exit code of the program<br>
> value = 0: successful execution<br>
	value > 0: error or exceptional condition
</div>
</div>
	

<div v-click="4">
<div class="row">
<div class="column">

... or the function \`f\` from Chapter 1
\`\`\`cpp

void f() {
	cout << x;
}
\`\`\`


</div>
<div class="column"><br><br><br>

It has the return type \`void\` since it returns nothing
  
It takes no input parameter
 
</div>
</div>
</div>`,frontmatter:{title:"Defining",level:2},index:8,start:221,end:276,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:n6,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Function definition

How would you write the function \`print_squares\` ?

**Function prototype**
\`\`\`cpp
void print_squares(int first, int last, int step); 
\`\`\`


<br>
<div class="row" v-click="1">

**Function definition**
<div class="column">
\`\`\`cpp
void print_squares(int first, int last, int step) {
    int i;
	int square;
    for (i = first; i <= last; i += step) {
        square = i * i;
        printf("%d squared: %d\\n", i, square);
    }
}
\`\`\`
</div>
<div class="column">

> \`i+=step\` is equivalent to \`i=i+step\`<br>
> \`i++\` is equivalent to to \`i=i+1\`
</div>
</div>
`,title:"Function definition",level:2,content:`# Function definition

How would you write the function \`print_squares\` ?

**Function prototype**
\`\`\`cpp
void print_squares(int first, int last, int step); 
\`\`\`


<br>
<div class="row" v-click="1">

**Function definition**
<div class="column">
\`\`\`cpp
void print_squares(int first, int last, int step) {
    int i;
	int square;
    for (i = first; i <= last; i += step) {
        square = i * i;
        printf("%d squared: %d\\n", i, square);
    }
}
\`\`\`
</div>
<div class="column">

> \`i+=step\` is equivalent to \`i=i+step\`<br>
> \`i++\` is equivalent to to \`i=i+1\`
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:9,start:276,end:314,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:u6,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Function definition
There are two recurring mistakes ..


<div v-click="1">

1. Be careful to always check that you are returning a value!
	
\`\`\`cpp
 bool isPositive(int a) {
    if (a>0)
        return true;
    else if (a<0)
         return false;
 }
\`\`\`
</div>

<div v-click="2">

2. There can only be one function \`int main() {}\`<br>
This is the program's entry point: it is through this code that the program's execution will start before any other sub-function that may be called within \`main()\`.
</div>
	`,title:"Function definition",level:2,content:`# Function definition
There are two recurring mistakes ..


<div v-click="1">

1. Be careful to always check that you are returning a value!
	
\`\`\`cpp
 bool isPositive(int a) {
    if (a>0)
        return true;
    else if (a<0)
         return false;
 }
\`\`\`
</div>

<div v-click="2">

2. There can only be one function \`int main() {}\`<br>
This is the program's entry point: it is through this code that the program's execution will start before any other sub-function that may be called within \`main()\`.
</div>`,frontmatter:{level:2,hideInToc:!0},index:10,start:314,end:343,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:b6,meta:{level:2,title:"Calling",slide:{raw:`---
level: 2
title: Calling
---

# Function calling
	
For instance, executing the following code...
<div class="row">
<div class="column">

\`\`\`cpp
int main() {
	for (int i=1; i<=100; i*=10) {
		print_squares(i, i+5, 2);						  
	}
	return 0;
}
\`\`\`
</div>
<div class="column">
	
> \`i*=10\` is equivalent to \`i=i*10\`	<br>
> \`i/=10\` is equivalent to to \`i=i/10\`
</div>
</div>
						 
would display...
\`\`\`
1 squared: 1
3 squared: 9
5 squared: 25
10 squared: 100
12 squared: 144
14 squared: 196
100 squared: 10000
102 squared: 10404
104 squared: 10816
\`\`\`
`,title:"Calling",level:2,content:`# Function calling
	
For instance, executing the following code...
<div class="row">
<div class="column">

\`\`\`cpp
int main() {
	for (int i=1; i<=100; i*=10) {
		print_squares(i, i+5, 2);						  
	}
	return 0;
}
\`\`\`
</div>
<div class="column">
	
> \`i*=10\` is equivalent to \`i=i*10\`	<br>
> \`i/=10\` is equivalent to to \`i=i/10\`
</div>
</div>
						 
would display...
\`\`\`
1 squared: 1
3 squared: 9
5 squared: 25
10 squared: 100
12 squared: 144
14 squared: 196
100 squared: 10000
102 squared: 10404
104 squared: 10816
\`\`\``,frontmatter:{level:2,title:"Calling"},index:11,start:343,end:383,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:S6,meta:{level:2,hideInToc:!0,clicks:2,slide:{raw:`---
level: 2
hideInToc: true
clicks: 2
---

# Example summarizing all 3 phases

<div class="row" v-click="1">
<div class="column">
\`\`\`cpp
void print_squares(int first=1, int last=10, int step=1);

void print_squares(int first, int last, int step) {
    int i;
	int square;
    for (i = first; i <= last; i += step) {
        square = i * i;
        printf("%d squared: %d\\n", i, square);
    }
}

int main() {
    print_squares(5);
    return 0;
}
\`\`\`
</div>
<div class="one-third" style="margin-left:15%">
<br>
<i>What happens?</i>
<div v-click="2">

\`\`\`
5 squared: 25
6 squared: 36
7 squared: 49
8 squared: 64
9 squared: 81
10 squared: 100
\`\`\` 

</div>

</div>
</div>


<div class="danger-box" v-click="2"><center>
Remember, you should put the default arguments in the prototype, not the definition
</center></div>

`,title:"Example summarizing all 3 phases",level:2,content:`# Example summarizing all 3 phases

<div class="row" v-click="1">
<div class="column">
\`\`\`cpp
void print_squares(int first=1, int last=10, int step=1);

void print_squares(int first, int last, int step) {
    int i;
	int square;
    for (i = first; i <= last; i += step) {
        square = i * i;
        printf("%d squared: %d\\n", i, square);
    }
}

int main() {
    print_squares(5);
    return 0;
}
\`\`\`
</div>
<div class="one-third" style="margin-left:15%">
<br>
<i>What happens?</i>
<div v-click="2">

\`\`\`
5 squared: 25
6 squared: 36
7 squared: 49
8 squared: 64
9 squared: 81
10 squared: 100
\`\`\` 

</div>

</div>
</div>


<div class="danger-box" v-click="2"><center>
Remember, you should put the default arguments in the prototype, not the definition
</center></div>`,frontmatter:{level:2,hideInToc:!0,clicks:2},index:12,start:383,end:436,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:I6,meta:{layout:"intro",level:2,hideInToc:!0,slide:{raw:`---
layout: intro
level: 2
hideInToc: true
---
	
<center>
Let's practice!
	
	
<div class="fieldset-box">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT2
</div>  
</center>	

	`,level:2,content:`<center>
Let's practice!
	
	
<div class="fieldset-box">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT2
</div>  
</center>`,frontmatter:{layout:"intro",level:2,hideInToc:!0},index:13,start:436,end:453,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:H6,meta:{level:2,hideInToc:!0,clicks:1,slide:{raw:`---
level: 2
hideInToc: true
clicks: 1
---

# Quiz 1: Find the correct prototype(s)
	
\`\`\`cpp
float calculateTotalCost(unsigned int quantity, float pricePerUnit, float discount)
{
    // Calculate the total cost after applying the discount
    float totalCost = quantity * pricePerUnit * (1-discount);
    return totalCost;
}

int main() {
    float cost = calculateTotalCost(5, 19.90, 0.1);
    cout << cost;
	return 0;
}
\`\`\`
	
<br>
<div v-click="1">
Correct prototypes :
	
\`\`\`cpp
float calculateTotalCost(unsigned int quantity, float pricePerUnit, float discount);
float calculateTotalCost(unsigned int, float, float); 			// Since the names do not matter
float calculateTotalCost(unsigned int a, float b, float c);		// Since the names do not matter
\`\`\`
</div>
	`,title:"Quiz 1: Find the correct prototype(s)",level:2,content:`# Quiz 1: Find the correct prototype(s)
	
\`\`\`cpp
float calculateTotalCost(unsigned int quantity, float pricePerUnit, float discount)
{
    // Calculate the total cost after applying the discount
    float totalCost = quantity * pricePerUnit * (1-discount);
    return totalCost;
}

int main() {
    float cost = calculateTotalCost(5, 19.90, 0.1);
    cout << cost;
	return 0;
}
\`\`\`
	
<br>
<div v-click="1">
Correct prototypes :
	
\`\`\`cpp
float calculateTotalCost(unsigned int quantity, float pricePerUnit, float discount);
float calculateTotalCost(unsigned int, float, float); 			// Since the names do not matter
float calculateTotalCost(unsigned int a, float b, float c);		// Since the names do not matter
\`\`\`
</div>`,frontmatter:{level:2,hideInToc:!0,clicks:1},index:14,start:453,end:487,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:K6,meta:{level:2,hideInToc:!0,clicks:1,slide:{raw:`---
level: 2
hideInToc: true
clicks: 1
---

# Quiz 2: What happens?

<div class="remove">
<div v-click-hide="1">
\`\`\`cpp
struct MyStruct {
    int value;
};

MyStruct divide(int a, int b) {
    if (b == 0) {
        return MyStruct{0};
    } else {
        return MyStruct{a / b};
    }
}

int main() {
    int numerator = 10;
    int denominator = 2;
	int result = divide(numerator, denominator);
    cout << "Result of division: " << result.value << endl;
    return 0;
}
\`\`\`
</div>
<div v-click="1">
\`\`\`cpp{7,9,16}
struct MyStruct {
    int value;
};

MyStruct divide(int a, int b) {
    if (b == 0) {
        return MyStruct{0}; 		// Brace initialization (see "To Go Further" in Chapter 1)
    } else {
        return MyStruct{a / b};		// Brace initialization (see "To Go Further" in Chapter 1)
    }
}

int main() {
    int numerator = 10;
    int denominator = 2;
	int result = divide(numerator, denominator); 	// KO, incorrect type!
    cout << "Result of division: " << result.value << endl;
    return 0;
}
\`\`\`
<center>

The correct choice is \`MyStruct result = divide(numerator, denominator);\`
</center>
</div>
</div>

`,title:"Quiz 2: What happens?",level:2,content:`# Quiz 2: What happens?

<div class="remove">
<div v-click-hide="1">
\`\`\`cpp
struct MyStruct {
    int value;
};

MyStruct divide(int a, int b) {
    if (b == 0) {
        return MyStruct{0};
    } else {
        return MyStruct{a / b};
    }
}

int main() {
    int numerator = 10;
    int denominator = 2;
	int result = divide(numerator, denominator);
    cout << "Result of division: " << result.value << endl;
    return 0;
}
\`\`\`
</div>
<div v-click="1">
\`\`\`cpp{7,9,16}
struct MyStruct {
    int value;
};

MyStruct divide(int a, int b) {
    if (b == 0) {
        return MyStruct{0}; 		// Brace initialization (see "To Go Further" in Chapter 1)
    } else {
        return MyStruct{a / b};		// Brace initialization (see "To Go Further" in Chapter 1)
    }
}

int main() {
    int numerator = 10;
    int denominator = 2;
	int result = divide(numerator, denominator); 	// KO, incorrect type!
    cout << "Result of division: " << result.value << endl;
    return 0;
}
\`\`\`
<center>

The correct choice is \`MyStruct result = divide(numerator, denominator);\`
</center>
</div>
</div>`,frontmatter:{level:2,hideInToc:!0,clicks:1},index:15,start:487,end:549,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:u2,meta:{level:2,hideInToc:!0,clicks:1,slide:{raw:`---
level: 2
hideInToc: true
clicks: 1
---

# Quiz 3: What happens?


<div class="remove">
<div v-click-hide="1">
<div class="row">
<div class="column">
\`\`\`cpp
int calculateFactorial(int n) {
    if (n < 0) {
        return -1;
    } else {
        int factorial = 1;
        for (int i = 1; i <= n; ++i) {
            factorial *= i;
        }
    }
    return factorial;
}
\`\`\`
</div>
<div class="column">
\`\`\`cpp
int main() {
    int a = 3;
    int result = calculateFactorial(a);
    if (result > 0) {
        cout << "Factorial of " << a << " is " << result;
    }
    return 0;
}
\`\`\`
</div>
</div>
</div>
<div v-click="1">
<div class="row">
<div class="column">
\`\`\`cpp{10}
int calculateFactorial(int n) {
    if (n < 0) {
        return -1;
    } else {
        int factorial = 1;
        for (int i = 1; i <= n; ++i) {
            factorial *= i;
        }
    }
    return factorial;
}
\`\`\`
</div>
<div class="column">
\`\`\`cpp{0}
int main() {
    int a = 3;
    int result = calculateFactorial(a);
    if (result > 0) {
        cout << "Factorial of " << a << " is " << result;
    }
    return 0;
}
\`\`\`
</div>
</div>
</div>
</div>



<div class="danger-box" v-click="1"><center>

There is an error due to the scope of \`factorial\` !<br>
\`factorial\` is not defined outside the else loop
</center></div>

`,title:"Quiz 3: What happens?",level:2,content:`# Quiz 3: What happens?


<div class="remove">
<div v-click-hide="1">
<div class="row">
<div class="column">
\`\`\`cpp
int calculateFactorial(int n) {
    if (n < 0) {
        return -1;
    } else {
        int factorial = 1;
        for (int i = 1; i <= n; ++i) {
            factorial *= i;
        }
    }
    return factorial;
}
\`\`\`
</div>
<div class="column">
\`\`\`cpp
int main() {
    int a = 3;
    int result = calculateFactorial(a);
    if (result > 0) {
        cout << "Factorial of " << a << " is " << result;
    }
    return 0;
}
\`\`\`
</div>
</div>
</div>
<div v-click="1">
<div class="row">
<div class="column">
\`\`\`cpp{10}
int calculateFactorial(int n) {
    if (n < 0) {
        return -1;
    } else {
        int factorial = 1;
        for (int i = 1; i <= n; ++i) {
            factorial *= i;
        }
    }
    return factorial;
}
\`\`\`
</div>
<div class="column">
\`\`\`cpp{0}
int main() {
    int a = 3;
    int result = calculateFactorial(a);
    if (result > 0) {
        cout << "Factorial of " << a << " is " << result;
    }
    return 0;
}
\`\`\`
</div>
</div>
</div>
</div>



<div class="danger-box" v-click="1"><center>

There is an error due to the scope of \`factorial\` !<br>
\`factorial\` is not defined outside the else loop
</center></div>`,frontmatter:{level:2,hideInToc:!0,clicks:1},index:16,start:549,end:632,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:m2,meta:{layout:"intro",title:"Project Tree Structure",level:1,slide:{raw:`---
layout: intro
title: Project Tree Structure
level: 1
---
<center>
<span style="font-weight:700;font-size:30px">2. Project Tree Structure</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>
	
	
	
	`,title:"Project Tree Structure",level:1,content:`<center>
<span style="font-weight:700;font-size:30px">2. Project Tree Structure</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>`,frontmatter:{layout:"intro",title:"Project Tree Structure",level:1},index:17,start:632,end:648,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:D2,meta:{level:2,slide:{raw:`---
level: 2
---

# Tree structure
Now that we have seen all 3 phases, let's organize the project tree structure into files

<center>
<div class="row">
<div class="three-column">
<img src="/chap2/prototype.png" style="height:70px" border="rounded"/><br>
Prototyping<br>
<span style="font-size:small">Function signature declaration</span>
<br><br>
	
> <img src="/chap2/hfile.png" style="height:40px" border="rounded"/><span style="font-size:small">in header files .h</span>
	

</div>


<div class="three-column">
<img src="/chap2/definition.png" style="height:70px" border="rounded"/><br>
Defining<br>
<span style="font-size:small">Implementing function behavior</span>
<br><br>
	
> <img src="/chap2/cfile.png" style="height:40px" border="rounded"/><span style="font-size:small">in body files .c/.cpp</span>
	
</div>

<div class="three-column">
<img src="/chap2/call.png" style="height:70px" border="rounded"/><br>
Calling<br>
<span style="font-size:small">Invoking functions</span>
<br><br>
	
> <img src="/chap2/cfile.png" style="height:40px" border="rounded"/><span style="font-size:small">in body files .c/.cpp</span>
	
</div>
</div>
</center><div v-click="1">

For instance, we would like to create a math project with functions similar to \`print_squares\`

\`\`\`	
- math_project
  ├── README.md 			//All good projects have a README file
  ├── math_functions.h 		//Functions prototypes
  ├── math_functions.cpp	//Functions definitions
  └── my_main_code.cpp		//Main code calling other functions
\`\`\`
</div>
`,title:"Tree structure",level:2,content:`# Tree structure
Now that we have seen all 3 phases, let's organize the project tree structure into files

<center>
<div class="row">
<div class="three-column">
<img src="/chap2/prototype.png" style="height:70px" border="rounded"/><br>
Prototyping<br>
<span style="font-size:small">Function signature declaration</span>
<br><br>
	
> <img src="/chap2/hfile.png" style="height:40px" border="rounded"/><span style="font-size:small">in header files .h</span>
	

</div>


<div class="three-column">
<img src="/chap2/definition.png" style="height:70px" border="rounded"/><br>
Defining<br>
<span style="font-size:small">Implementing function behavior</span>
<br><br>
	
> <img src="/chap2/cfile.png" style="height:40px" border="rounded"/><span style="font-size:small">in body files .c/.cpp</span>
	
</div>

<div class="three-column">
<img src="/chap2/call.png" style="height:70px" border="rounded"/><br>
Calling<br>
<span style="font-size:small">Invoking functions</span>
<br><br>
	
> <img src="/chap2/cfile.png" style="height:40px" border="rounded"/><span style="font-size:small">in body files .c/.cpp</span>
	
</div>
</div>
</center><div v-click="1">

For instance, we would like to create a math project with functions similar to \`print_squares\`

\`\`\`	
- math_project
  ├── README.md 			//All good projects have a README file
  ├── math_functions.h 		//Functions prototypes
  ├── math_functions.cpp	//Functions definitions
  └── my_main_code.cpp		//Main code calling other functions
\`\`\`
</div>`,frontmatter:{level:2},index:18,start:648,end:702,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:j2,meta:{level:2,slide:{raw:`---
level: 2
---

# Project files
	

<div class="row">
<div class="column" v-click="1">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> math_functions.h</span></div>
\`\`\`cpp
void print_squares(int first, int last, int step);
//do not forget the \`;\` at the end!
\`\`\`
</div>
<div class="column" v-click="2">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> math_functions.cpp</span></div>
\`\`\`cpp
void print_squares(int first, int last, int step) {
    int i;
	int square;
    for (i = first; i <= last; i += step) {
        square = i * i;
        printf("%d squared: %d\\n", i, square);
    }
}
\`\`\`
</div>
</div>
	
	
<div class="row">
<div class="column" v-click="3">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> my_main_code.cpp</span></div>
\`\`\`cpp
#include "math_functions.h"   
  
int main() {
	for (int i=1; i<=100; i*=10) {
		print_squares(i, i+5, 2);						  
	}
	return 0;
}
\`\`\`
</div>
</div>
	
	`,title:"Project files",level:2,content:`# Project files
	

<div class="row">
<div class="column" v-click="1">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> math_functions.h</span></div>
\`\`\`cpp
void print_squares(int first, int last, int step);
//do not forget the \`;\` at the end!
\`\`\`
</div>
<div class="column" v-click="2">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> math_functions.cpp</span></div>
\`\`\`cpp
void print_squares(int first, int last, int step) {
    int i;
	int square;
    for (i = first; i <= last; i += step) {
        square = i * i;
        printf("%d squared: %d\\n", i, square);
    }
}
\`\`\`
</div>
</div>
	
	
<div class="row">
<div class="column" v-click="3">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> my_main_code.cpp</span></div>
\`\`\`cpp
#include "math_functions.h"   
  
int main() {
	for (int i=1; i<=100; i*=10) {
		print_squares(i, i+5, 2);						  
	}
	return 0;
}
\`\`\`
</div>
</div>`,frontmatter:{level:2},index:19,start:702,end:756,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:X2,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---
	
# Project files
	

<div class="row">
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> math_functions.h</span></div>
\`\`\`cpp {0}
void print_squares(int first, int last, int step);
//do not forget the \`;\` at the end!
\`\`\`
</div>
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> math_functions.cpp</span></div>
\`\`\`cpp {0}
void print_squares(int first, int last, int step) {
    int i;
	int square;
    for (i = first; i <= last; i += step) {
        square = i * i;
        printf("%d squared: %d\\n", i, square);
    }
}
\`\`\`
</div>
</div>
	
	
<div class="row">
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> my_main_code.cpp</span></div>
\`\`\`cpp {1}
#include "math_functions.h"   
  
int main() {
	for (int i=1; i<=100; i*=10) {
		print_squares(i, i+5, 2);						  
	}
	return 0;
}
\`\`\`
</div>
<div class="column">

One includes the functions from the header file \`math_functions.h\` with the *precompilation directive* \`#include\`
</div>
</div>

	`,title:"Project files",level:2,content:`# Project files
	

<div class="row">
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> math_functions.h</span></div>
\`\`\`cpp {0}
void print_squares(int first, int last, int step);
//do not forget the \`;\` at the end!
\`\`\`
</div>
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> math_functions.cpp</span></div>
\`\`\`cpp {0}
void print_squares(int first, int last, int step) {
    int i;
	int square;
    for (i = first; i <= last; i += step) {
        square = i * i;
        printf("%d squared: %d\\n", i, square);
    }
}
\`\`\`
</div>
</div>
	
	
<div class="row">
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> my_main_code.cpp</span></div>
\`\`\`cpp {1}
#include "math_functions.h"   
  
int main() {
	for (int i=1; i<=100; i*=10) {
		print_squares(i, i+5, 2);						  
	}
	return 0;
}
\`\`\`
</div>
<div class="column">

One includes the functions from the header file \`math_functions.h\` with the *precompilation directive* \`#include\`
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:20,start:756,end:815,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:l4,meta:{layout:"intro",title:"Precompilation Directives",level:1,slide:{raw:`---
layout: intro
title: Precompilation Directives
level: 1
---
<center>
<span style="font-weight:700;font-size:30px">3. Precompilation Directives</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>
	`,title:"Precompilation Directives",level:1,content:`<center>
<span style="font-weight:700;font-size:30px">3. Precompilation Directives</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>`,frontmatter:{layout:"intro",title:"Precompilation Directives",level:1},index:21,start:815,end:828,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:u4,meta:{level:2,title:null,slide:{raw:`---
level: 2
title: #include directive
---
	
# #include directive

<div class="box-top-left">
	
<span class="box-title">Definition: #include directive</span>
The \`#include\` directive in C/C++ is used to include the content of a header file into the source code file at the point where the directive is specified. It allows you to access and utilize functions, constants, and definitions defined in the included header file.
</div>

This directive helps in organizing code by separating reusable components into header files and including them where needed, promoting modularity and code reuse.	
	`,title:"#include directive",level:2,content:`# #include directive

<div class="box-top-left">
	
<span class="box-title">Definition: #include directive</span>
The \`#include\` directive in C/C++ is used to include the content of a header file into the source code file at the point where the directive is specified. It allows you to access and utilize functions, constants, and definitions defined in the included header file.
</div>

This directive helps in organizing code by separating reusable components into header files and including them where needed, promoting modularity and code reuse.`,frontmatter:{level:2,title:null},index:22,start:828,end:843,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:k4,meta:{level:2,hideInToc:!0,clicks:2,slide:{raw:`---
level: 2
hideInToc: true
clicks: 2
---

# #include directive
Let us consider the following basic tree structure	

\`\`\`
- project
  ├── main.cpp
  └── include
      └── file.h
\`\`\`
	
<div class="row">
<div class="column" v-click="1">
<center>

\`#include "file.h"\`
</center>
<div style="font-size:small">The preprocessor will search for the header file (file.h) <u>relative to</u> the current directory where the source file (main.cpp) is located.
<br><br><br><br>Therefore, in main.cpp, you would write:</div>

\`\`\`cpp
#include "include/file.h"
\`\`\`
</div>
<div class="column" v-click="2">
<center>

\`#include <file.h>\`
</center>
<div style="font-size:small">The preprocessor will search for the header file (file.h) in the system directories or directories specified in the <u>compiler's paths</u>. This syntax is also used to include a standard library or external library header files.
<br><br>Therefore, in main.cpp, you would write:</div>

\`\`\`cpp
#include <file.h>
\`\`\`
</div>
</div>
<br><div v-click="2">
	
> Note: The actual file paths may vary depending on the specific project structure and build system used.	
</div>

`,title:"#include directive",level:2,content:`# #include directive
Let us consider the following basic tree structure	

\`\`\`
- project
  ├── main.cpp
  └── include
      └── file.h
\`\`\`
	
<div class="row">
<div class="column" v-click="1">
<center>

\`#include "file.h"\`
</center>
<div style="font-size:small">The preprocessor will search for the header file (file.h) <u>relative to</u> the current directory where the source file (main.cpp) is located.
<br><br><br><br>Therefore, in main.cpp, you would write:</div>

\`\`\`cpp
#include "include/file.h"
\`\`\`
</div>
<div class="column" v-click="2">
<center>

\`#include <file.h>\`
</center>
<div style="font-size:small">The preprocessor will search for the header file (file.h) in the system directories or directories specified in the <u>compiler's paths</u>. This syntax is also used to include a standard library or external library header files.
<br><br>Therefore, in main.cpp, you would write:</div>

\`\`\`cpp
#include <file.h>
\`\`\`
</div>
</div>
<br><div v-click="2">
	
> Note: The actual file paths may vary depending on the specific project structure and build system used.	
</div>`,frontmatter:{level:2,hideInToc:!0,clicks:2},index:23,start:843,end:891,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:S4,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# #include directive
If you have a more complex project tree structure...
	
\`\`\`
- project
  ├── main.cpp
  ├── include
  │  ├── utils
  │  │  ├── math.h
  │  │  └── string.h
  ├── src
  │  ├── core
  │  │  ├── engine.cpp
  │  ├── modules
  │  │  ├── rendering
  │  │  │  ├── graphics.cpp
  │  ├── utils
  │  │  ├── file.cpp
  │  │  └── logger.cpp
  └── tests
     ├── unit
     │  ├── math_test.cpp
     └── integration
        └── graphics_test.cpp
\`\`\`

`,title:"#include directive",level:2,content:`# #include directive
If you have a more complex project tree structure...
	
\`\`\`
- project
  ├── main.cpp
  ├── include
  │  ├── utils
  │  │  ├── math.h
  │  │  └── string.h
  ├── src
  │  ├── core
  │  │  ├── engine.cpp
  │  ├── modules
  │  │  ├── rendering
  │  │  │  ├── graphics.cpp
  │  ├── utils
  │  │  ├── file.cpp
  │  │  └── logger.cpp
  └── tests
     ├── unit
     │  ├── math_test.cpp
     └── integration
        └── graphics_test.cpp
\`\`\``,frontmatter:{level:2,hideInToc:!0},index:24,start:891,end:923,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Q4,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# #include directive
If you have a more complex project tree structure... the **search order** will be important

	
<div class="row">
<div class="column" v-click="1">
<center>

\`#include "file.h"\`
</center>
<div style="font-size:small"> 

1. Directory of the file containing this directive.
2. Directories of each file in the project that includes (using \`#include\`) this file.
3. Directories specified by the /I option of the compiler.
4. Directories present in the environment variable \`include\`.
</div>
</div>
<div class="column" v-click="2">
<center>

\`#include <file.h>\`
</center>
<div style="font-size:small">

1. Directory specified by the -I option of the compiler.
2. Directories present in the environment variable \`include\`.
</div>
</div>
</div>
<br><br>

<center>
<div class="row" v-click="3">
<div class="column">
<img src="/chap2/handmade.png" style="height:80px"><br>
To include your custom files
</div>
<div class="column">
<img src="/chap2/books.png" style="height:80px"><br>
To include libraries
</div>
</div>	
</center>
	
[//]: <> (<div class="danger-box" v-click="3" style="display: flex;justify-content:center">)
[//]: <> (Be careful not to include multiple times the same header files)
[//]: <> (</div>)

`,title:"#include directive",level:2,content:`# #include directive
If you have a more complex project tree structure... the **search order** will be important

	
<div class="row">
<div class="column" v-click="1">
<center>

\`#include "file.h"\`
</center>
<div style="font-size:small"> 

1. Directory of the file containing this directive.
2. Directories of each file in the project that includes (using \`#include\`) this file.
3. Directories specified by the /I option of the compiler.
4. Directories present in the environment variable \`include\`.
</div>
</div>
<div class="column" v-click="2">
<center>

\`#include <file.h>\`
</center>
<div style="font-size:small">

1. Directory specified by the -I option of the compiler.
2. Directories present in the environment variable \`include\`.
</div>
</div>
</div>
<br><br>

<center>
<div class="row" v-click="3">
<div class="column">
<img src="/chap2/handmade.png" style="height:80px"><br>
To include your custom files
</div>
<div class="column">
<img src="/chap2/books.png" style="height:80px"><br>
To include libraries
</div>
</div>	
</center>
	
[//]: <> (<div class="danger-box" v-click="3" style="display: flex;justify-content:center">)
[//]: <> (Be careful not to include multiple times the same header files)
[//]: <> (</div>)`,frontmatter:{level:2,hideInToc:!0},index:25,start:923,end:978,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:mw,meta:{level:2,hideInToc:!0,clicks:1,slide:{raw:`---
level: 2
hideInToc: true
clicks: 1
---

# Quiz: Find the correct directive(s)

<div class="row">
<div class="column">

\`\`\`
project/
├── main.cpp
├── includes/
│   └── custom/
│       ├── utility.h
│       └── utility.cpp
└── libraries/
    └── custom/
        ├── math.h
        └── math.cpp
\`\`\`
</div>
<div class="column">

<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> main.cpp</span></div>
<div class="remove">
<div v-click-hide="1">
\`\`\`cpp

// Add the correct precompilation directives(s)
\`\`\`


</div>
<div v-click="1">
\`\`\`cpp

#include "utility.h"					// Solution 1
#include "includes/custom/utility.h" 	// Solution 2
\`\`\`
</div>
</div>
</div>
</div>
<br>

In \`main.cpp\`, which \`#include\` directive should you use to include the functions in \`utility.cpp\`?


<br>
<center>
<div class="remove">
<div style="font-size:smaller" v-click="1">

We could also have used \`#include <utility.h>\`<br> even though it is prefered to use them for standard libraries
</div>
<div v-click-hide="1" class="fieldset-box">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT2
</div>
</div>
</center>

`,title:"Quiz: Find the correct directive(s)",level:2,content:`# Quiz: Find the correct directive(s)

<div class="row">
<div class="column">

\`\`\`
project/
├── main.cpp
├── includes/
│   └── custom/
│       ├── utility.h
│       └── utility.cpp
└── libraries/
    └── custom/
        ├── math.h
        └── math.cpp
\`\`\`
</div>
<div class="column">

<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> main.cpp</span></div>
<div class="remove">
<div v-click-hide="1">
\`\`\`cpp

// Add the correct precompilation directives(s)
\`\`\`


</div>
<div v-click="1">
\`\`\`cpp

#include "utility.h"					// Solution 1
#include "includes/custom/utility.h" 	// Solution 2
\`\`\`
</div>
</div>
</div>
</div>
<br>

In \`main.cpp\`, which \`#include\` directive should you use to include the functions in \`utility.cpp\`?


<br>
<center>
<div class="remove">
<div style="font-size:smaller" v-click="1">

We could also have used \`#include <utility.h>\`<br> even though it is prefered to use them for standard libraries
</div>
<div v-click-hide="1" class="fieldset-box">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT2
</div>
</div>
</center>`,frontmatter:{level:2,hideInToc:!0,clicks:1},index:26,start:978,end:1046,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:jw,meta:{level:2,clicks:3,slide:{raw:`---
level: 2
clicks: 3
---

# Handling multiply-defined symbols
Let us consider the following project
	
<div class="row">
<div class="three-column">

\`\`\`
- project
  ├── main.cpp
  ├── car.h
  ├── driver.h
  └── owner.h
\`\`\`
</div>
<div class="three-column" v-click="1">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> driver.h</span></div>
\`\`\`cpp
#include "car.h"
// ...
\`\`\`
</div>
<div class="three-column" v-click="1">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> owner.h</span></div>
\`\`\`cpp
#include "car.h"
// ...
\`\`\`
</div>
</div><div v-click="2">

The two header files include \`car.h\` to make use of the type \`car\`	
</div>	
<div class="row">
<div class="column" v-click="2">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> car.h</span></div>
\`\`\`cpp
typedef struct {
	// ...
} car ;
\`\`\`
</div>
<div class="column" v-click="3">
<div class="danger-box">

<center>You get a <b>multiply-defined</b> error</center>

<span style="font-size:small">The type \`car\` is defined twice, one for each include of \`car.h\`</span>
</div>
</div>
</div>

	`,title:"Handling multiply-defined symbols",level:2,content:`# Handling multiply-defined symbols
Let us consider the following project
	
<div class="row">
<div class="three-column">

\`\`\`
- project
  ├── main.cpp
  ├── car.h
  ├── driver.h
  └── owner.h
\`\`\`
</div>
<div class="three-column" v-click="1">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> driver.h</span></div>
\`\`\`cpp
#include "car.h"
// ...
\`\`\`
</div>
<div class="three-column" v-click="1">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> owner.h</span></div>
\`\`\`cpp
#include "car.h"
// ...
\`\`\`
</div>
</div><div v-click="2">

The two header files include \`car.h\` to make use of the type \`car\`	
</div>	
<div class="row">
<div class="column" v-click="2">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> car.h</span></div>
\`\`\`cpp
typedef struct {
	// ...
} car ;
\`\`\`
</div>
<div class="column" v-click="3">
<div class="danger-box">

<center>You get a <b>multiply-defined</b> error</center>

<span style="font-size:small">The type \`car\` is defined twice, one for each include of \`car.h\`</span>
</div>
</div>
</div>`,frontmatter:{level:2,clicks:3},index:27,start:1046,end:1109,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:nx,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: True
---

# Handling multiply-defined symbols
Let us consider the following project
	
<div class="row">
<div class="three-column">

\`\`\`
- project
  ├── main.cpp
  ├── car.h
  ├── driver.h
  └── owner.h
\`\`\`
</div>
<div class="three-column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> driver.h</span></div>
\`\`\`cpp
#include "car.h"
// ...
\`\`\`
</div>
<div class="three-column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> owner.h</span></div>
\`\`\`cpp
#include "car.h"
// ...
\`\`\`
</div>
</div>

The two header files include \`car.h\` to make use of the type \`car\`	

<div class="row">
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> car.h</span></div>
\`\`\`cpp{1,2,6}
# ifndef __CAR__
# define __CAR_
typedef struct {
	// ...
} car ;
# endif
\`\`\`
</div>
<div class="column">
<div class="box">
We resort to <b>precompilation directives</b> to create macros in order to handle multiply-defined symbols
</div>
</div>
</div>	
	`,title:"Handling multiply-defined symbols",level:2,content:`# Handling multiply-defined symbols
Let us consider the following project
	
<div class="row">
<div class="three-column">

\`\`\`
- project
  ├── main.cpp
  ├── car.h
  ├── driver.h
  └── owner.h
\`\`\`
</div>
<div class="three-column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> driver.h</span></div>
\`\`\`cpp
#include "car.h"
// ...
\`\`\`
</div>
<div class="three-column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> owner.h</span></div>
\`\`\`cpp
#include "car.h"
// ...
\`\`\`
</div>
</div>

The two header files include \`car.h\` to make use of the type \`car\`	

<div class="row">
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
<span style="font-size:small"> car.h</span></div>
\`\`\`cpp{1,2,6}
# ifndef __CAR__
# define __CAR_
typedef struct {
	// ...
} car ;
# endif
\`\`\`
</div>
<div class="column">
<div class="box">
We resort to <b>precompilation directives</b> to create macros in order to handle multiply-defined symbols
</div>
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:28,start:1109,end:1171,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:ix,meta:{level:2,slide:{raw:'---\nlevel: 2\n---\n	\n# Precompilation directives\nHere a list of the most popular ones\n	\n<div class="table-condensed">\n	\n| Directive    | Description                                      |\n|--------------|--------------------------------------------------|\n| `#include`   | Includes a header file                           |\n| `#define`    | Defines a macro or constant value                |\n| `#ifdef`     | Checks if a macro is defined                     |\n| `#ifndef`    | Checks if a macro is not defined                 |\n| `#if`        | Conditional compilation based on a constant expr |\n| `#else`      | Executes code if preceding condition is false    |\n| `#elif`      | Alternative condition for preceding `#if`        |\n| `#endif`     | Ends a conditional block of code                 |\n| <span class="highlight-row"> `#pragma`</span>    | <span class="highlight-row">Compiler-specific instructions or settings</span>       |\n| `#error`     | Generates a compilation error                    |\n| `#warning`   | Generates a compilation warning                  |\n</div>\n',title:"Precompilation directives",level:2,content:'# Precompilation directives\nHere a list of the most popular ones\n	\n<div class="table-condensed">\n	\n| Directive    | Description                                      |\n|--------------|--------------------------------------------------|\n| `#include`   | Includes a header file                           |\n| `#define`    | Defines a macro or constant value                |\n| `#ifdef`     | Checks if a macro is defined                     |\n| `#ifndef`    | Checks if a macro is not defined                 |\n| `#if`        | Conditional compilation based on a constant expr |\n| `#else`      | Executes code if preceding condition is false    |\n| `#elif`      | Alternative condition for preceding `#if`        |\n| `#endif`     | Ends a conditional block of code                 |\n| <span class="highlight-row"> `#pragma`</span>    | <span class="highlight-row">Compiler-specific instructions or settings</span>       |\n| `#error`     | Generates a compilation error                    |\n| `#warning`   | Generates a compilation warning                  |\n</div>',frontmatter:{level:2},index:29,start:1171,end:1195,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Kx,meta:{level:2,clicks:3,slide:{raw:`---
level: 2
clicks: 3
---
	
# Understanding compilers
	
	
In C/C++, the source code can be compiled into an .exe file as follows
\`\`\`sh
gcc program.c -o program.exe 		// For C
g++ program.cpp -o program.exe		// For C++
\`\`\`
	
A compiler doesn't just compile. In reality, it
carries out the following three successive steps:
	
<center>
<div class="row">
<div class="three-column">
<span v-click="1">
<img src="/chap2/precompiler.png" style="height:70px" border="rounded"/><br>
Precompilation<br>
<div style="font-size:small">Expands macros and includes header files<br>Interpret precompilation directives</div>
	
\`\`\`sh
gcc -E source.c -o preprocessed
g++ -E source.cpp -o preprocessed
\`\`\`
</span>
<br><br>

</div>


<div class="three-column">
<span v-click="2">
<img src="/chap2/compiler.png" style="height:70px" border="rounded"/><br>
Compilation<br>
<div style="font-size:small">Syntax checking and type matching<br>Translates source code to object code</div>

\`\`\`sh
gcc -c source.c -o object.o
g++ -c source.cpp -o object.o
\`\`\`
</span>
<br><br>
</div>

<div class="three-column">
<span v-click="3">
<img src="/chap2/linking.png" style="height:70px" border="rounded"/><br>
Linking<br>
<div style="font-size:small">Add external libraries<br>Combines object files to create executables<sup>1</sup></div>
	
\`\`\`sh
gcc obj1.o obj2.o -o executable.exe
g++ obj1.o obj2.o -o executable.exe
\`\`\`
</span>
<br><br>
</div>

</div>
</center>
	
<div v-click="3">
<Footnotes separator>
	<Footnote :number=1>One can also create libraries .lib</Footnote>
</Footnotes>
</div>`,title:"Understanding compilers",level:2,content:`# Understanding compilers
	
	
In C/C++, the source code can be compiled into an .exe file as follows
\`\`\`sh
gcc program.c -o program.exe 		// For C
g++ program.cpp -o program.exe		// For C++
\`\`\`
	
A compiler doesn't just compile. In reality, it
carries out the following three successive steps:
	
<center>
<div class="row">
<div class="three-column">
<span v-click="1">
<img src="/chap2/precompiler.png" style="height:70px" border="rounded"/><br>
Precompilation<br>
<div style="font-size:small">Expands macros and includes header files<br>Interpret precompilation directives</div>
	
\`\`\`sh
gcc -E source.c -o preprocessed
g++ -E source.cpp -o preprocessed
\`\`\`
</span>
<br><br>

</div>


<div class="three-column">
<span v-click="2">
<img src="/chap2/compiler.png" style="height:70px" border="rounded"/><br>
Compilation<br>
<div style="font-size:small">Syntax checking and type matching<br>Translates source code to object code</div>

\`\`\`sh
gcc -c source.c -o object.o
g++ -c source.cpp -o object.o
\`\`\`
</span>
<br><br>
</div>

<div class="three-column">
<span v-click="3">
<img src="/chap2/linking.png" style="height:70px" border="rounded"/><br>
Linking<br>
<div style="font-size:small">Add external libraries<br>Combines object files to create executables<sup>1</sup></div>
	
\`\`\`sh
gcc obj1.o obj2.o -o executable.exe
g++ obj1.o obj2.o -o executable.exe
\`\`\`
</span>
<br><br>
</div>

</div>
</center>
	
<div v-click="3">
<Footnotes separator>
	<Footnote :number=1>One can also create libraries .lib</Footnote>
</Footnotes>
</div>`,frontmatter:{level:2,clicks:3},index:30,start:1195,end:1266,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:ik,meta:{level:2,hideInToc:!0,layout:"figure",figureUrl:"chap2/compilesteps.png",slide:{raw:`---
level: 2
hideInToc: true
layout: figure
figureUrl: 'chap2/compilesteps.png'
---
	
# Understanding compilers
Note that: platform-specific libraries → platform-specific executable
	
	`,title:"Understanding compilers",level:2,content:`# Understanding compilers
Note that: platform-specific libraries → platform-specific executable`,frontmatter:{level:2,hideInToc:!0,layout:"figure",figureUrl:"chap2/compilesteps.png"},index:31,start:1266,end:1277,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:gk,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Example: Handling Configurations



<div class="row">
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> config.h</span></div>
\`\`\`cpp
#ifndef CONFIG_H
	#define CONFIG_H

	#ifndef CONFIG
		#define CONFIG RELEASE
	#endif

	#ifdef CONFIG
	    #if CONFIG == DEBUG
			cout << "Debug Mode" << endl;
	    #elif CONFIG == RELEASE
			cout << "Release Mode" << endl;
	    #endif
	#endif
#endif
\`\`\`
</div>
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> main.cpp</span></div>
\`\`\`cpp
#include <iostream>
#include "config.h"

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`
</div>
</div>

<center>
What happens at compile time?
</center>

	`,title:"Example: Handling Configurations",level:2,content:`# Example: Handling Configurations



<div class="row">
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> config.h</span></div>
\`\`\`cpp
#ifndef CONFIG_H
	#define CONFIG_H

	#ifndef CONFIG
		#define CONFIG RELEASE
	#endif

	#ifdef CONFIG
	    #if CONFIG == DEBUG
			cout << "Debug Mode" << endl;
	    #elif CONFIG == RELEASE
			cout << "Release Mode" << endl;
	    #endif
	#endif
#endif
\`\`\`
</div>
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> main.cpp</span></div>
\`\`\`cpp
#include <iostream>
#include "config.h"

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`
</div>
</div>

<center>
What happens at compile time?
</center>`,frontmatter:{level:2,hideInToc:!0},index:32,start:1277,end:1330,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Vk,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# \`-D\` Flag

<div class="box-top-left">
<span class="box-title">Definition: \`-D\` flag</span>

The -D flag defines preprocessor macros (e.g., \`MYFLAG\`) at compile time.<br> It allows you to set macro values without modifying the source code directly.
</div>	


<center>
<div class="three-column" style="margin-left:31%">
\`\`\`sh
g++ -DMYFLAG main.cpp -o myprogram
\`\`\`
</div>
</center>


<br><br>
<center>
<div class="row">
<div class="three-column">
<span v-click="1">
<img src="/chap2/switching.png" style="height:50px" border="rounded"/><br>
Switching<br>
<span style="font-size:small">Compile different versions<br> (debug, release, etc.)</span>
</span>
</div>

<div class="three-column">
<span v-click="2">
<img src="/chap2/toggling.png" style="height:50px" border="rounded"/><br>
Toggling<br>
<span style="font-size:small">Enables/disable specific features<br> in your application</span>
</span>
</div>

<div class="three-column">
<span v-click="3">
<img src="/chap2/plateform.png" style="height:50px" border="rounded"/><br>
Bulding<br>
<span style="font-size:small">Indicate the platform during compilation<br> \`-DWIN32\` or \`-DLINUX\`</span>
</span>
</div>

</div>	
</center>
	
`,title:"`-D` Flag",level:2,content:`# \`-D\` Flag

<div class="box-top-left">
<span class="box-title">Definition: \`-D\` flag</span>

The -D flag defines preprocessor macros (e.g., \`MYFLAG\`) at compile time.<br> It allows you to set macro values without modifying the source code directly.
</div>	


<center>
<div class="three-column" style="margin-left:31%">
\`\`\`sh
g++ -DMYFLAG main.cpp -o myprogram
\`\`\`
</div>
</center>


<br><br>
<center>
<div class="row">
<div class="three-column">
<span v-click="1">
<img src="/chap2/switching.png" style="height:50px" border="rounded"/><br>
Switching<br>
<span style="font-size:small">Compile different versions<br> (debug, release, etc.)</span>
</span>
</div>

<div class="three-column">
<span v-click="2">
<img src="/chap2/toggling.png" style="height:50px" border="rounded"/><br>
Toggling<br>
<span style="font-size:small">Enables/disable specific features<br> in your application</span>
</span>
</div>

<div class="three-column">
<span v-click="3">
<img src="/chap2/plateform.png" style="height:50px" border="rounded"/><br>
Bulding<br>
<span style="font-size:small">Indicate the platform during compilation<br> \`-DWIN32\` or \`-DLINUX\`</span>
</span>
</div>

</div>	
</center>`,frontmatter:{level:2,hideInToc:!0},index:33,start:1330,end:1384,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:oE,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---


# Example: Handling Configurations



<div class="row">
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> config.h</span></div>
\`\`\`cpp{0}
#ifndef CONFIG_H
	#define CONFIG_H

	#ifndef CONFIG
		#define CONFIG RELEASE
	#endif

	#ifdef CONFIG
	    #if CONFIG == DEBUG
			cout << "Debug Mode" << endl;
	    #elif CONFIG == RELEASE
			cout << "Release Mode" << endl;
	    #endif
	#endif
#endif
\`\`\`
</div>
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> main.cpp</span></div>
\`\`\`cpp{0}
#include <iostream>
#include "config.h"

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`
</div>
</div>

		
<div class="row">
<div class="column">
For DEBUG mode
		
\`\`\`sh
g++ -DCONFIG=DEBUG main.cpp -o myprogram
\`\`\`
</div>
<div class="column">
For RELEASE mode

\`\`\`sh
g++ -DCONFIG=RELEASE main.cpp -o myprogram
\`\`\`
</div>
</div>
	

	`,title:"Example: Handling Configurations",level:2,content:`# Example: Handling Configurations



<div class="row">
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/hfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> config.h</span></div>
\`\`\`cpp{0}
#ifndef CONFIG_H
	#define CONFIG_H

	#ifndef CONFIG
		#define CONFIG RELEASE
	#endif

	#ifdef CONFIG
	    #if CONFIG == DEBUG
			cout << "Debug Mode" << endl;
	    #elif CONFIG == RELEASE
			cout << "Release Mode" << endl;
	    #endif
	#endif
#endif
\`\`\`
</div>
<div class="column">
<div style="display: flex; align-items: center;">
<img src="/chap2/cfile.png" style="height:50px; border-radius: 50%;margin-right: 10px" />
	<span style="font-size:small"> main.cpp</span></div>
\`\`\`cpp{0}
#include <iostream>
#include "config.h"

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`
</div>
</div>

		
<div class="row">
<div class="column">
For DEBUG mode
		
\`\`\`sh
g++ -DCONFIG=DEBUG main.cpp -o myprogram
\`\`\`
</div>
<div class="column">
For RELEASE mode

\`\`\`sh
g++ -DCONFIG=RELEASE main.cpp -o myprogram
\`\`\`
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:34,start:1384,end:1453,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:uE,meta:{layout:"intro",level:1,hideInToc:!0,slide:{raw:`---
layout: intro
level: 1
hideInToc: true
---
<center>
<span style="font-weight:700;font-size:30px">Conclusion</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>

	`,level:1,content:`<center>
<span style="font-weight:700;font-size:30px">Conclusion</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>`,frontmatter:{layout:"intro",level:1,hideInToc:!0},index:35,start:1453,end:1467,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:yE,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---
	
# To Recap
	
We have seen ...

1. How to prototype, define and call a function
2. The header and body files
3. How to use precompilation directives to connect header and body files
4. The 3 main stages of a compiler
`,title:"To Recap",level:2,content:`# To Recap
	
We have seen ...

1. How to prototype, define and call a function
2. The header and body files
3. How to use precompilation directives to connect header and body files
4. The 3 main stages of a compiler`,frontmatter:{level:2,hideInToc:!0},index:36,start:1467,end:1481,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:_E,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---
	
# To Go Further

1. Functional Programming
	- <span style="font-size:smaller"> Learn about lambda expressions</span>

2. Header Files and Source Files (Body Files)
   - <span style="font-size:smaller"> Practice creating your own header files and source file</span>

3. Precompilation Directives
   - <span style="font-size:smaller"> Study the precompilation directive \`#pragma\`</span>
	- <span style="font-size:smaller"> Study the header guard \`#pragma once\` $\\Longrightarrow$ <i>A volonteer?</i></span>
	
	`,title:"To Go Further",level:2,content:`# To Go Further

1. Functional Programming
	- <span style="font-size:smaller"> Learn about lambda expressions</span>

2. Header Files and Source Files (Body Files)
   - <span style="font-size:smaller"> Practice creating your own header files and source file</span>

3. Precompilation Directives
   - <span style="font-size:smaller"> Study the precompilation directive \`#pragma\`</span>
	- <span style="font-size:smaller"> Study the header guard \`#pragma once\` $\\Longrightarrow$ <i>A volonteer?</i></span>`,frontmatter:{level:2,hideInToc:!0},index:37,start:1481,end:1499,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:DE,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# To Go Even Further


Prototyping
   - <span style="font-size:smaller"> Explore rapid prototyping frameworks such as Qt or SD</span>
   - <span style="font-size:smaller"> Learn about Python to create prototypes that interact with C/C++ code</span>
`,title:"To Go Even Further",level:2,content:`# To Go Even Further


Prototyping
   - <span style="font-size:smaller"> Explore rapid prototyping frameworks such as Qt or SD</span>
   - <span style="font-size:smaller"> Learn about Python to create prototypes that interact with C/C++ code</span>`,frontmatter:{level:2,hideInToc:!0},index:38,start:1499,end:1511,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/2-functional-programming.md",id:38,no:39},__clicksElements:[],__preloaded:!1}}],xE=[],Qe=wE,fo=[{name:"play",path:"/",component:ZA,children:[...Qe,...xE]},{name:"print",path:"/print",component:CC},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let t=function(n){if(!po.remote||po.remote===n.query.password)return!0;if(po.remote&&n.query.password===void 0){const s=prompt("Enter password");if(po.remote===s)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};fo.push({path:"/presenter/print",component:()=>jn(()=>import("./PresenterPrint-e5dc1d9a.js"),["assets/PresenterPrint-e5dc1d9a.js","assets/NoteDisplay-8290dafa.js"])}),fo.push({name:"notes",path:"/notes",component:()=>jn(()=>import("./NotesView-7d0c3645.js"),["assets/NotesView-7d0c3645.js","assets/NoteDisplay-8290dafa.js"]),beforeEnter:t}),fo.push({name:"presenter",path:"/presenter/:no",component:()=>jn(()=>import("./Presenter-e02a1322.js"),["assets/Presenter-e02a1322.js","assets/NoteDisplay-8290dafa.js","assets/DrawingControls-30928430.js","assets/Presenter-aa6741a8.css"]),beforeEnter:t}),fo.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const wt=w3({history:D8("/courses/data-structure/functional-programming/"),routes:fo});function kE(t,n,{mode:s="replace"}={}){return S({get(){const o=wt.currentRoute.value.query[t];return o==null?n??null:Array.isArray(o)?o.filter(Boolean):o},set(o){at(()=>{wt[$(s)]({query:{...wt.currentRoute.value.query,[t]:o}})})}})}const oh=U(0);at(()=>{wt.afterEach(async()=>{await at(),oh.value+=1})});const lh=U(0),Ht=S(()=>wt.currentRoute.value),bn=S(()=>Ht.value.query.print!==void 0),EE=S(()=>Ht.value.query.print==="clicks"),mn=S(()=>Ht.value.query.embedded!==void 0),Ct=S(()=>Ht.value.path.startsWith("/presenter")),$E=S(()=>Ht.value.path.startsWith("/notes")),Ao=S(()=>bn.value&&!EE.value),Vi=S(()=>Ht.value.query.password),FE=S(()=>!Ct.value&&(!Te.remote||Vi.value===Te.remote)),Gu=kE("clicks","0"),TE=S(()=>Qe.length),SE=S(()=>Ht.value.path),Ke=S(()=>Number.parseInt(SE.value.split(/\//g).slice(-1)[0])||1);S(()=>gr(Ke.value));const mt=S(()=>Qe.find(t=>t.path===`${Ke.value}`));S(()=>{var t,n,s;return(s=(n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:s.id});S(()=>{var t,n;return((n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.layout)||(Ke.value===1?"cover":"default")});const Vr=S(()=>Qe.find(t=>t.path===`${Math.min(Qe.length,Ke.value+1)}`)),OE=S(()=>Qe.find(t=>t.path===`${Math.max(1,Ke.value-1)}`)),PE=S(()=>{var t,n;return oh.value,((n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),Nt=S({get(){if(Ao.value)return 99999;let t=+(Gu.value||0);return Number.isNaN(t)&&(t=0),t},set(t){Gu.value=t.toString()}}),Zl=S(()=>{var t,n;return+(((n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.clicks)??PE.value.length)}),IE=S(()=>Ke.value<Qe.length||Nt.value<Zl.value),ME=S(()=>Ke.value>1||Nt.value>0),LE=S(()=>Qe.filter(t=>{var n,s;return(s=(n=t.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((t,n)=>(ja(t,n),t),[])),jE=S(()=>Na(LE.value,mt.value));S(()=>Ra(jE.value));const NE=S(()=>zE(lh.value,mt.value,OE.value));ge(mt,(t,n)=>{lh.value=Number(t==null?void 0:t.path)-Number(n==null?void 0:n.path)});function Rn(){Zl.value<=Nt.value?jo():Nt.value+=1}async function Hn(){Nt.value<=0?await No():Nt.value-=1}function gr(t){return Ct.value?`/presenter/${t}`:`/${t}`}function jo(){const t=Math.min(Qe.length,Ke.value+1);return Vs(t)}async function No(t=!0){const n=Math.max(1,Ke.value-1);await Vs(n),t&&Zl.value&&wt.replace({query:{...Ht.value.query,clicks:Zl.value}})}function Vs(t,n){return wt.push({path:gr(t),query:{...Ht.value.query,clicks:n}})}function RE(t){const n=U(0),{direction:s,distanceX:o,distanceY:l}=W1(t,{onSwipeStart(r){r.pointerType==="touch"&&(Io.value||(n.value=Ci()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Io.value)return;const i=Math.abs(o.value),a=Math.abs(l.value);i/window.innerWidth>.3||i>100?s.value==="left"?Rn():Hn():(a/window.innerHeight>.4||a>200)&&(s.value==="down"?No():jo())}})}async function zi(){const{saveAs:t}=await jn(()=>import("./FileSaver.min-23a5d44b.js").then(n=>n.F),[]);t(typeof Te.download=="string"?Te.download:Te.exportFilename?`${Te.exportFilename}.pdf`:"/courses/data-structure/functional-programming/slidev-exported.pdf",`${Te.title}.pdf`)}async function HE(t){var n,s;if(t==null){const o=(s=(n=mt.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;t=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function ja(t,n,s=1){var l,r,i,a,c;const o=(r=(l=n.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&t.length>0?ja(t[t.length-1].children,n,s+1):t.push({children:[],level:s,path:n.path,hideInToc:!!((i=n.meta)!=null&&i.hideInToc),title:(c=(a=n.meta)==null?void 0:a.slide)==null?void 0:c.title})}function Na(t,n,s=!1,o){return t.map(l=>{const r={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=Na(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function Ra(t,n=1){return t.filter(s=>!s.hideInToc).map(s=>({...s,children:Ra(s.children,n+1)}))}const qE={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function VE(t,n=!1){if(!t||(typeof t=="string"&&(t={name:t}),!t.name))return;let s=t.name.includes("|")?t.name:qE[t.name]||t.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=n?l:o}if(s)return{...t,name:s}}function zE(t,n,s){var l,r;let o=t>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=n==null?void 0:n.meta)==null?void 0:r.transition;return o||(o=Te.transition),VE(o,t<0)}function GE(){const t=Te.titleTemplate.replace("%s",Te.title||"Slidev");Ud({title:t,htmlAttrs:Te.htmlAttrs}),C_(`${t} - shared`),k_(`${t} - drawings`);const n=`${location.origin}_${m_()}`;function s(){$E.value||!Ct.value&&!y_.includes(location.host.split(":")[0])||(Ct.value?(Xs("page",+Ke.value),Xs("clicks",Nt.value)):(Xs("viewerPage",+Ke.value),Xs("viewerClicks",Nt.value)),Xs("lastUpdate",{id:n,type:Ct.value?"presenter":"viewer",time:new Date().getTime()}))}wt.afterEach(s),ge(Nt,s),D_(o=>{var r;wt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ke.value||+Nt.value!=+o.clicks)&&wt.replace({path:gr(o.page),query:{...wt.currentRoute.value.query,clicks:o.clicks||0}})})}const UE=be({__name:"App",setup(t){return q(K),GE(),(n,s)=>{const o=Ge("RouterView"),l=Ge("StarportCarrier");return v(),w(Fe,null,[T(o),T(l)],64)}}}),WE=Y(UE,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/App.vue"]]);function zr(t){return t!==null&&typeof t=="object"}function Gi(t,n,s=".",o){if(!zr(n))return Gi(t,{},s,o);const l=Object.assign({},n);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const i=t[r];i!=null&&(o&&o(l,r,i,s)||(Array.isArray(i)&&Array.isArray(l[r])?l[r]=[...i,...l[r]]:zr(i)&&zr(l[r])?l[r]=Gi(i,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=i))}return l}function KE(t){return(...n)=>n.reduce((s,o)=>Gi(s,o,"",t),{})}const YE=KE(),rh=1/60*1e3,ZE=typeof performance<"u"?()=>performance.now():()=>Date.now(),ih=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(ZE()),rh);function QE(t){let n=[],s=[],o=0,l=!1,r=!1;const i=new WeakSet,a={schedule:(c,p=!1,d=!1)=>{const f=d&&l,h=f?n:s;return p&&i.add(c),h.indexOf(c)===-1&&(h.push(c),f&&l&&(o=n.length)),c},cancel:c=>{const p=s.indexOf(c);p!==-1&&s.splice(p,1),i.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let p=0;p<o;p++){const d=n[p];d(c),i.has(d)&&(a.schedule(d),t())}l=!1,r&&(r=!1,a.process(c))}};return a}const JE=40;let Ui=!0,Ro=!1,Wi=!1;const Rs={delta:0,timestamp:0},Qo=["read","update","preRender","render","postRender"],vr=Qo.reduce((t,n)=>(t[n]=QE(()=>Ro=!0),t),{}),Ki=Qo.reduce((t,n)=>{const s=vr[n];return t[n]=(o,l=!1,r=!1)=>(Ro||t$(),s.schedule(o,l,r)),t},{}),XE=Qo.reduce((t,n)=>(t[n]=vr[n].cancel,t),{});Qo.reduce((t,n)=>(t[n]=()=>vr[n].process(Rs),t),{});const e$=t=>vr[t].process(Rs),ah=t=>{Ro=!1,Rs.delta=Ui?rh:Math.max(Math.min(t-Rs.timestamp,JE),1),Rs.timestamp=t,Wi=!0,Qo.forEach(e$),Wi=!1,Ro&&(Ui=!1,ih(ah))},t$=()=>{Ro=!0,Ui=!0,Wi||ih(ah)},ch=()=>Rs;function uh(t,n){var s={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(s[o[l]]=t[o[l]]);return s}var Ha=function(){},Ho=function(){};Ha=function(t,n){!t&&typeof console<"u"&&console.warn(n)},Ho=function(t,n){if(!t)throw new Error(n)};const Yi=(t,n,s)=>Math.min(Math.max(s,t),n),Gr=.001,n$=.01,Uu=10,s$=.05,o$=1;function l$({duration:t=800,bounce:n=.25,velocity:s=0,mass:o=1}){let l,r;Ha(t<=Uu*1e3,"Spring duration must be 10 seconds or less");let i=1-n;i=Yi(s$,o$,i),t=Yi(n$,Uu,t/1e3),i<1?(l=p=>{const d=p*i,f=d*t,h=d-s,y=Zi(p,i),m=Math.exp(-f);return Gr-h/y*m},r=p=>{const f=p*i*t,h=f*s+s,y=Math.pow(i,2)*Math.pow(p,2)*t,m=Math.exp(-f),A=Zi(Math.pow(p,2),i);return(-l(p)+Gr>0?-1:1)*((h-y)*m)/A}):(l=p=>{const d=Math.exp(-p*t),f=(p-s)*t+1;return-Gr+d*f},r=p=>{const d=Math.exp(-p*t),f=(s-p)*(t*t);return d*f});const a=5/t,c=i$(l,r,a);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const p=Math.pow(c,2)*o;return{stiffness:p,damping:i*2*Math.sqrt(o*p),duration:t}}}const r$=12;function i$(t,n,s){let o=s;for(let l=1;l<r$;l++)o=o-t(o)/n(o);return o}function Zi(t,n){return t*Math.sqrt(1-n*n)}const a$=["duration","bounce"],c$=["stiffness","damping","mass"];function Wu(t,n){return n.some(s=>t[s]!==void 0)}function u$(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!Wu(t,c$)&&Wu(t,a$)){const s=l$(t);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function qa(t){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:l}=t,r=uh(t,["from","to","restSpeed","restDelta"]);const i={done:!1,value:n};let{stiffness:a,damping:c,mass:p,velocity:d,duration:f,isResolvedFromDuration:h}=u$(r),y=Ku,m=Ku;function A(){const B=d?-(d/1e3):0,C=s-n,D=c/(2*Math.sqrt(a*p)),b=Math.sqrt(a/p)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-n)/100,.4)),D<1){const x=Zi(b,D);y=k=>{const F=Math.exp(-D*b*k);return s-F*((B+D*b*C)/x*Math.sin(x*k)+C*Math.cos(x*k))},m=k=>{const F=Math.exp(-D*b*k);return D*b*F*(Math.sin(x*k)*(B+D*b*C)/x+C*Math.cos(x*k))-F*(Math.cos(x*k)*(B+D*b*C)-x*C*Math.sin(x*k))}}else if(D===1)y=x=>s-Math.exp(-b*x)*(C+(B+b*C)*x);else{const x=b*Math.sqrt(D*D-1);y=k=>{const F=Math.exp(-D*b*k),j=Math.min(x*k,300);return s-F*((B+D*b*C)*Math.sinh(j)+x*C*Math.cosh(j))/x}}}return A(),{next:B=>{const C=y(B);if(h)i.done=B>=f;else{const D=m(B)*1e3,b=Math.abs(D)<=o,x=Math.abs(s-C)<=l;i.done=b&&x}return i.value=i.done?s:C,i},flipTarget:()=>{d=-d,[n,s]=[s,n],A()}}}qa.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const Ku=t=>0,ph=(t,n,s)=>{const o=n-t;return o===0?1:(s-t)/o},Va=(t,n,s)=>-s*t+s*n+t,dh=(t,n)=>s=>Math.max(Math.min(s,n),t),Bo=t=>t%1?Number(t.toFixed(5)):t,qo=/(-)?([\d]*\.?[\d])+/g,Qi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,p$=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Jo(t){return typeof t=="string"}const Xo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Co=Object.assign(Object.assign({},Xo),{transform:dh(0,1)}),gl=Object.assign(Object.assign({},Xo),{default:1}),za=t=>({test:n=>Jo(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Xn=za("deg"),Do=za("%"),_e=za("px"),Yu=Object.assign(Object.assign({},Do),{parse:t=>Do.parse(t)/100,transform:t=>Do.transform(t*100)}),Ga=(t,n)=>s=>!!(Jo(s)&&p$.test(s)&&s.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(s,n)),fh=(t,n,s)=>o=>{if(!Jo(o))return o;const[l,r,i,a]=o.match(qo);return{[t]:parseFloat(l),[n]:parseFloat(r),[s]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},ds={test:Ga("hsl","hue"),parse:fh("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(t)+", "+Do.transform(Bo(n))+", "+Do.transform(Bo(s))+", "+Bo(Co.transform(o))+")"},d$=dh(0,255),Ur=Object.assign(Object.assign({},Xo),{transform:t=>Math.round(d$(t))}),On={test:Ga("rgb","red"),parse:fh("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:o=1})=>"rgba("+Ur.transform(t)+", "+Ur.transform(n)+", "+Ur.transform(s)+", "+Bo(Co.transform(o))+")"};function f$(t){let n="",s="",o="",l="";return t.length>5?(n=t.substr(1,2),s=t.substr(3,2),o=t.substr(5,2),l=t.substr(7,2)):(n=t.substr(1,1),s=t.substr(2,1),o=t.substr(3,1),l=t.substr(4,1),n+=n,s+=s,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Ji={test:Ga("#"),parse:f$,transform:On.transform},Bt={test:t=>On.test(t)||Ji.test(t)||ds.test(t),parse:t=>On.test(t)?On.parse(t):ds.test(t)?ds.parse(t):Ji.parse(t),transform:t=>Jo(t)?t:t.hasOwnProperty("red")?On.transform(t):ds.transform(t)},hh="${c}",yh="${n}";function h$(t){var n,s,o,l;return isNaN(t)&&Jo(t)&&((s=(n=t.match(qo))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((l=(o=t.match(Qi))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function mh(t){typeof t=="number"&&(t=`${t}`);const n=[];let s=0;const o=t.match(Qi);o&&(s=o.length,t=t.replace(Qi,hh),n.push(...o.map(Bt.parse)));const l=t.match(qo);return l&&(t=t.replace(qo,yh),n.push(...l.map(Xo.parse))),{values:n,numColors:s,tokenised:t}}function gh(t){return mh(t).values}function vh(t){const{values:n,numColors:s,tokenised:o}=mh(t),l=n.length;return r=>{let i=o;for(let a=0;a<l;a++)i=i.replace(a<s?hh:yh,a<s?Bt.transform(r[a]):Bo(r[a]));return i}}const y$=t=>typeof t=="number"?0:t;function m$(t){const n=gh(t);return vh(t)(n.map(y$))}const el={test:h$,parse:gh,createTransformer:vh,getAnimatableNone:m$},g$=new Set(["brightness","contrast","saturate","opacity"]);function v$(t){let[n,s]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[o]=s.match(qo)||[];if(!o)return t;const l=s.replace(o,"");let r=g$.has(n)?1:0;return o!==s&&(r*=100),n+"("+r+l+")"}const _$=/([a-z-]*)\(.*?\)/g,Xi=Object.assign(Object.assign({},el),{getAnimatableNone:t=>{const n=t.match(_$);return n?n.map(v$).join(" "):t}});function Wr(t,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(n-t)*6*s:s<1/2?n:s<2/3?t+(n-t)*(2/3-s)*6:t}function Zu({hue:t,saturation:n,lightness:s,alpha:o}){t/=360,n/=100,s/=100;let l=0,r=0,i=0;if(!n)l=r=i=s;else{const a=s<.5?s*(1+n):s+n-s*n,c=2*s-a;l=Wr(c,a,t+1/3),r=Wr(c,a,t),i=Wr(c,a,t-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(i*255),alpha:o}}const b$=(t,n,s)=>{const o=t*t,l=n*n;return Math.sqrt(Math.max(0,s*(l-o)+o))},A$=[Ji,On,ds],Qu=t=>A$.find(n=>n.test(t)),Ju=t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`,_h=(t,n)=>{let s=Qu(t),o=Qu(n);Ho(!!s,Ju(t)),Ho(!!o,Ju(n));let l=s.parse(t),r=o.parse(n);s===ds&&(l=Zu(l),s=On),o===ds&&(r=Zu(r),o=On);const i=Object.assign({},l);return a=>{for(const c in i)c!=="alpha"&&(i[c]=b$(l[c],r[c],a));return i.alpha=Va(l.alpha,r.alpha,a),s.transform(i)}},B$=t=>typeof t=="number",C$=(t,n)=>s=>n(t(s)),bh=(...t)=>t.reduce(C$);function Ah(t,n){return B$(t)?s=>Va(t,n,s):Bt.test(t)?_h(t,n):Ch(t,n)}const Bh=(t,n)=>{const s=[...t],o=s.length,l=t.map((r,i)=>Ah(r,n[i]));return r=>{for(let i=0;i<o;i++)s[i]=l[i](r);return s}},D$=(t,n)=>{const s=Object.assign(Object.assign({},t),n),o={};for(const l in s)t[l]!==void 0&&n[l]!==void 0&&(o[l]=Ah(t[l],n[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function Xu(t){const n=el.parse(t),s=n.length;let o=0,l=0,r=0;for(let i=0;i<s;i++)o||typeof n[i]=="number"?o++:n[i].hue!==void 0?r++:l++;return{parsed:n,numNumbers:o,numRGB:l,numHSL:r}}const Ch=(t,n)=>{const s=el.createTransformer(n),o=Xu(t),l=Xu(n);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?bh(Bh(o.parsed,l.parsed),s):(Ha(!0,`Complex values '${t}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?n:t}`)},w$=(t,n)=>s=>Va(t,n,s);function x$(t){if(typeof t=="number")return w$;if(typeof t=="string")return Bt.test(t)?_h:Ch;if(Array.isArray(t))return Bh;if(typeof t=="object")return D$}function k$(t,n,s){const o=[],l=s||x$(t[0]),r=t.length-1;for(let i=0;i<r;i++){let a=l(t[i],t[i+1]);if(n){const c=Array.isArray(n)?n[i]:n;a=bh(c,a)}o.push(a)}return o}function E$([t,n],[s]){return o=>s(ph(t,n,o))}function $$(t,n){const s=t.length,o=s-1;return l=>{let r=0,i=!1;if(l<=t[0]?i=!0:l>=t[o]&&(r=o-1,i=!0),!i){let c=1;for(;c<s&&!(t[c]>l||c===o);c++);r=c-1}const a=ph(t[r],t[r+1],l);return n[r](a)}}function Dh(t,n,{clamp:s=!0,ease:o,mixer:l}={}){const r=t.length;Ho(r===n.length,"Both input and output ranges must be the same length"),Ho(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[r-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const i=k$(n,o,l),a=r===2?E$(t,i):$$(t,i);return s?c=>a(Yi(t[0],t[r-1],c)):a}const _r=t=>n=>1-t(1-n),Ua=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,F$=t=>n=>Math.pow(n,t),wh=t=>n=>n*n*((t+1)*n-t),T$=t=>{const n=wh(t);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},xh=1.525,S$=4/11,O$=8/11,P$=9/10,kh=t=>t,Wa=F$(2),I$=_r(Wa),Eh=Ua(Wa),$h=t=>1-Math.sin(Math.acos(t)),Fh=_r($h),M$=Ua(Fh),Ka=wh(xh),L$=_r(Ka),j$=Ua(Ka),N$=T$(xh),R$=4356/361,H$=35442/1805,q$=16061/1805,Ql=t=>{if(t===1||t===0)return t;const n=t*t;return t<S$?7.5625*n:t<O$?9.075*n-9.9*t+3.4:t<P$?R$*n-H$*t+q$:10.8*t*t-20.52*t+10.72},V$=_r(Ql),z$=t=>t<.5?.5*(1-Ql(1-t*2)):.5*Ql(t*2-1)+.5;function G$(t,n){return t.map(()=>n||Eh).splice(0,t.length-1)}function U$(t){const n=t.length;return t.map((s,o)=>o!==0?o/(n-1):0)}function W$(t,n){return t.map(s=>s*n)}function kl({from:t=0,to:n=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:t},i=Array.isArray(n)?n:[t,n],a=W$(o&&o.length===i.length?o:U$(i),l);function c(){return Dh(a,i,{ease:Array.isArray(s)?s:G$(i,s)})}let p=c();return{next:d=>(r.value=p(d),r.done=d>=l,r),flipTarget:()=>{i.reverse(),p=c()}}}function K$({velocity:t=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const i={done:!1,value:n};let a=s*t;const c=n+a,p=r===void 0?c:r(c);return p!==c&&(a=p-n),{next:d=>{const f=-a*Math.exp(-d/o);return i.done=!(f>l||f<-l),i.value=i.done?p:p+f,i},flipTarget:()=>{}}}const ep={keyframes:kl,spring:qa,decay:K$};function Y$(t){if(Array.isArray(t.to))return kl;if(ep[t.type])return ep[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?kl:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?qa:kl}function Th(t,n,s=0){return t-n-s}function Z$(t,n,s=0,o=!0){return o?Th(n+-t,n,s):n-(t-n)+s}function Q$(t,n,s,o){return o?t>=n+s:t<=-s}const J$=t=>{const n=({delta:s})=>t(s);return{start:()=>Ki.update(n,!0),stop:()=>XE.update(n)}};function Sh(t){var n,s,{from:o,autoplay:l=!0,driver:r=J$,elapsed:i=0,repeat:a=0,repeatType:c="loop",repeatDelay:p=0,onPlay:d,onStop:f,onComplete:h,onRepeat:y,onUpdate:m}=t,A=uh(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:B}=A,C,D=0,b=A.duration,x,k=!1,F=!0,j;const P=Y$(A);!((s=(n=P).needsInterpolation)===null||s===void 0)&&s.call(n,o,B)&&(j=Dh([0,100],[o,B],{clamp:!1}),o=0,B=100);const H=P(Object.assign(Object.assign({},A),{from:o,to:B}));function ne(){D++,c==="reverse"?(F=D%2===0,i=Z$(i,b,p,F)):(i=Th(i,b,p),c==="mirror"&&H.flipTarget()),k=!1,y&&y()}function ce(){C.stop(),h&&h()}function W(ve){if(F||(ve=-ve),i+=ve,!k){const Ae=H.next(Math.max(0,i));x=Ae.value,j&&(x=j(x)),k=F?Ae.done:i<=0}m==null||m(x),k&&(D===0&&(b??(b=i)),D<a?Q$(i,b,p,F)&&ne():ce())}function me(){d==null||d(),C=r(W),C.start()}return l&&me(),{stop:()=>{f==null||f(),C.stop()}}}function Oh(t,n){return n?t*(1e3/n):0}function X$({from:t=0,velocity:n=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:i=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:p,driver:d,onUpdate:f,onComplete:h,onStop:y}){let m;function A(b){return s!==void 0&&b<s||o!==void 0&&b>o}function B(b){return s===void 0?o:o===void 0||Math.abs(s-b)<Math.abs(o-b)?s:o}function C(b){m==null||m.stop(),m=Sh(Object.assign(Object.assign({},b),{driver:d,onUpdate:x=>{var k;f==null||f(x),(k=b.onUpdate)===null||k===void 0||k.call(b,x)},onComplete:h,onStop:y}))}function D(b){C(Object.assign({type:"spring",stiffness:i,damping:a,restDelta:c},b))}if(A(t))D({from:t,velocity:n,to:B(t)});else{let b=l*n+t;typeof p<"u"&&(b=p(b));const x=B(b),k=x===s?-1:1;let F,j;const P=H=>{F=j,j=H,n=Oh(H-F,ch().delta),(k===1&&H>x||k===-1&&H<x)&&D({from:H,to:x,velocity:n})};C({type:"decay",from:t,velocity:n,timeConstant:r,power:l,restDelta:c,modifyTarget:p,onUpdate:A(b)?P:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Ph=(t,n)=>1-3*n+3*t,Ih=(t,n)=>3*n-6*t,Mh=t=>3*t,Jl=(t,n,s)=>((Ph(n,s)*t+Ih(n,s))*t+Mh(n))*t,Lh=(t,n,s)=>3*Ph(n,s)*t*t+2*Ih(n,s)*t+Mh(n),eF=1e-7,tF=10;function nF(t,n,s,o,l){let r,i,a=0;do i=n+(s-n)/2,r=Jl(i,o,l)-t,r>0?s=i:n=i;while(Math.abs(r)>eF&&++a<tF);return i}const sF=8,oF=.001;function lF(t,n,s,o){for(let l=0;l<sF;++l){const r=Lh(n,s,o);if(r===0)return n;const i=Jl(n,s,o)-t;n-=i/r}return n}const El=11,vl=1/(El-1);function rF(t,n,s,o){if(t===n&&s===o)return kh;const l=new Float32Array(El);for(let i=0;i<El;++i)l[i]=Jl(i*vl,t,s);function r(i){let a=0,c=1;const p=El-1;for(;c!==p&&l[c]<=i;++c)a+=vl;--c;const d=(i-l[c])/(l[c+1]-l[c]),f=a+d*vl,h=Lh(f,t,s);return h>=oF?lF(i,f,t,s):h===0?f:nF(i,a,a+vl,t,s)}return i=>i===0||i===1?i:Jl(r(i),n,o)}const Kr={};class iF{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(n,s,o)}clear(){this.subscriptions.clear()}}function tp(t){return!isNaN(parseFloat(t))}class aF{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new iF,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=ch();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Ki.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ki.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=tp(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=tp(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Oh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function cF(t){return new aF(t)}const{isArray:uF}=Array;function pF(){const t=U({}),n=o=>{const l=r=>{t.value[r]&&(t.value[r].stop(),t.value[r].destroy(),delete t.value[r])};o?uF(o)?o.forEach(l):l(o):Object.keys(t.value).forEach(l)},s=(o,l,r)=>{if(t.value[o])return t.value[o];const i=cF(l);return i.onChange(a=>r[o]=a),t.value[o]=i,i};return Y_(n),{motionValues:t,get:s,stop:n}}function dF(t){return Array.isArray(t)}function es(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Yr(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function fF(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function Zr(){return{type:"keyframes",ease:"linear",duration:300}}function hF(t){return{type:"keyframes",duration:800,values:t}}const np={default:fF,x:es,y:es,z:es,rotate:es,rotateX:es,rotateY:es,rotateZ:es,scaleX:Yr,scaleY:Yr,scale:Yr,backgroundColor:Zr,color:Zr,opacity:Zr};function jh(t,n){let s;return dF(n)?s=hF:s=np[t]||np.default,{to:n,...s(n)}}const sp={...Xo,transform:Math.round},Nh={color:Bt,backgroundColor:Bt,outlineColor:Bt,fill:Bt,stroke:Bt,borderColor:Bt,borderTopColor:Bt,borderRightColor:Bt,borderBottomColor:Bt,borderLeftColor:Bt,borderWidth:_e,borderTopWidth:_e,borderRightWidth:_e,borderBottomWidth:_e,borderLeftWidth:_e,borderRadius:_e,radius:_e,borderTopLeftRadius:_e,borderTopRightRadius:_e,borderBottomRightRadius:_e,borderBottomLeftRadius:_e,width:_e,maxWidth:_e,height:_e,maxHeight:_e,size:_e,top:_e,right:_e,bottom:_e,left:_e,padding:_e,paddingTop:_e,paddingRight:_e,paddingBottom:_e,paddingLeft:_e,margin:_e,marginTop:_e,marginRight:_e,marginBottom:_e,marginLeft:_e,rotate:Xn,rotateX:Xn,rotateY:Xn,rotateZ:Xn,scale:gl,scaleX:gl,scaleY:gl,scaleZ:gl,skew:Xn,skewX:Xn,skewY:Xn,distance:_e,translateX:_e,translateY:_e,translateZ:_e,x:_e,y:_e,z:_e,perspective:_e,transformPerspective:_e,opacity:Co,originX:Yu,originY:Yu,originZ:_e,zIndex:sp,filter:Xi,WebkitFilter:Xi,fillOpacity:Co,strokeOpacity:Co,numOctaves:sp},Ya=t=>Nh[t];function Rh(t,n){return n&&typeof t=="number"&&n.transform?n.transform(t):t}function yF(t,n){let s=Ya(t);return s!==Xi&&(s=el),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const mF={linear:kh,easeIn:Wa,easeInOut:Eh,easeOut:I$,circIn:$h,circInOut:M$,circOut:Fh,backIn:Ka,backInOut:j$,backOut:L$,anticipate:N$,bounceIn:V$,bounceInOut:z$,bounceOut:Ql};function op(t){if(Array.isArray(t)){const[n,s,o,l]=t;return rF(n,s,o,l)}else if(typeof t=="string")return mF[t];return t}function gF(t){return Array.isArray(t)&&typeof t[0]!="number"}function lp(t,n){return t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&el.test(n)&&!n.startsWith("url("))}function vF(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function _F({ease:t,times:n,delay:s,...o}){const l={...o};return n&&(l.offset=n),t&&(l.ease=gF(t)?t.map(op):op(t)),s&&(l.elapsed=-s),l}function bF(t,n,s){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),vF(n),AF(t)||(t={...t,...jh(s,n.to)}),{...n,..._F(t)}}function AF({delay:t,repeat:n,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function BF(t,n){return t[n]||t.default||t}function CF(t,n,s,o,l){const r=BF(o,t);let i=r.from===null||r.from===void 0?n.get():r.from;const a=lp(t,s);i==="none"&&a&&typeof s=="string"&&(i=yF(t,s));const c=lp(t,i);function p(f){const h={from:i,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:y=>n.set(y)};return r.type==="inertia"||r.type==="decay"?X$({...h,...r}):Sh({...bF(r,h,t),onUpdate:y=>{h.onUpdate(y),r.onUpdate&&r.onUpdate(y)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}})}function d(f){return n.set(s),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!c||!a||r.type===!1?d:p}function DF(){const{motionValues:t,stop:n,get:s}=pF();return{motionValues:t,stop:n,push:(l,r,i,a={},c)=>{const p=i[l],d=s(l,p,i);if(a&&a.immediate){d.set(r);return}const f=CF(l,d,r,a,c);d.start(f)}}}function wF(t,n={},{motionValues:s,push:o,stop:l}=DF()){const r=$(n),i=U(!1);ge(s,f=>{i.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const a=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},c=f=>(typeof f=="string"&&(f=a(f)),Promise.all(Object.entries(f).map(([h,y])=>{if(h!=="transition")return new Promise(m=>o(h,y,t,f.transition||jh(h,f[h]),m))}).filter(Boolean)));return{isAnimating:i,apply:c,set:f=>{const h=Bi(f)?f:a(f);Object.entries(h).forEach(([y,m])=>{y!=="transition"&&o(y,m,t,{immediate:!0})})},leave:async f=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){f();return}await c(h),f()},stop:l}}const Za=typeof window<"u",xF=()=>Za&&window.onpointerdown===null,kF=()=>Za&&window.ontouchstart===null,EF=()=>Za&&window.onmousedown===null;function $F({target:t,state:n,variants:s,apply:o}){const l=$(s),r=U(!1),i=U(!1),a=U(!1),c=S(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),p=S(()=>{const d={};Object.assign(d,n.value),r.value&&l.hovered&&Object.assign(d,l.hovered),i.value&&l.tapped&&Object.assign(d,l.tapped),a.value&&l.focused&&Object.assign(d,l.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});l.hovered&&(Be(t,"mouseenter",()=>r.value=!0),Be(t,"mouseleave",()=>{r.value=!1,i.value=!1}),Be(t,"mouseout",()=>{r.value=!1,i.value=!1})),l.tapped&&(EF()&&(Be(t,"mousedown",()=>i.value=!0),Be(t,"mouseup",()=>i.value=!1)),xF()&&(Be(t,"pointerdown",()=>i.value=!0),Be(t,"pointerup",()=>i.value=!1)),kF()&&(Be(t,"touchstart",()=>i.value=!0),Be(t,"touchend",()=>i.value=!1))),l.focused&&(Be(t,"focus",()=>a.value=!0),Be(t,"blur",()=>a.value=!1)),ge(p,o)}function FF({set:t,target:n,variants:s,variant:o}){const l=$(s);ge(()=>n,()=>{l&&(l.initial&&t("initial"),l.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function TF({state:t,apply:n}){ge(t,s=>{s&&n(s)},{immediate:!0})}function SF({target:t,variants:n,variant:s}){const o=$(n);o&&(o.visible||o.visibleOnce)&&q1(t,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function OF(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&FF(t),n.syncVariants&&TF(t),n.visibilityHooks&&SF(t),n.eventListeners&&$F(t)}function Hh(t={}){const n=Ue({...t}),s=U({});return ge(n,()=>{const o={};for(const[l,r]of Object.entries(n)){const i=Ya(l),a=Rh(r,i);o[l]=a}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}function Qa(t,n){ge(()=>ct(t),s=>{s&&n(s)},{immediate:!0})}const PF={x:"translateX",y:"translateY",z:"translateZ"};function qh(t={},n=!0){const s=Ue({...t}),o=U("");return ge(s,l=>{let r="",i=!1;if(n&&(l.x||l.y||l.z)){const a=[l.x||0,l.y||0,l.z||0].map(_e.transform).join(",");r+=`translate3d(${a}) `,i=!0}for(const[a,c]of Object.entries(l)){if(n&&(a==="x"||a==="y"||a==="z"))continue;const p=Ya(a),d=Rh(c,p);r+=`${PF[a]||a}(${d}) `}n&&!i&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const IF=["","X","Y","Z"],MF=["perspective","translate","scale","rotate","skew"],Vh=["transformPerspective","x","y","z"];MF.forEach(t=>{IF.forEach(n=>{const s=t+n;Vh.push(s)})});const LF=new Set(Vh);function Ja(t){return LF.has(t)}const jF=new Set(["originX","originY","originZ"]);function zh(t){return jF.has(t)}function NF(t){const n={},s={};return Object.entries(t).forEach(([o,l])=>{Ja(o)||zh(o)?n[o]=l:s[o]=l}),{transform:n,style:s}}function Gh(t){const{transform:n,style:s}=NF(t),{transform:o}=qh(n),{style:l}=Hh(s);return o.value&&(l.value.transform=o.value),l.value}function RF(t,n){let s,o;const{state:l,style:r}=Hh();return Qa(t,i=>{o=i;for(const a of Object.keys(Nh))i.style[a]===null||i.style[a]===""||Ja(a)||zh(a)||(l[a]=i.style[a]);s&&Object.entries(s).forEach(([a,c])=>i.style[a]=c),n&&n(l)}),ge(r,i=>{if(!o){s=i;return}for(const a in i)o.style[a]=i[a]},{immediate:!0}),{style:l}}function HF(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,l)=>{if(!l)return o;const[r,i]=l.split("("),c=i.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),p=c.length===1?c[0]:c;return{...o,[r]:p}},{})}function qF(t,n){Object.entries(HF(n)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>t[r]=0);return}o.forEach((r,i)=>t[l[i]]=r);return}if(o=parseFloat(o),s==="translateX"){t.x=o;return}if(s==="translateY"){t.y=o;return}if(s==="translateZ"){t.z=o;return}t[s]=o})}function VF(t,n){let s,o;const{state:l,transform:r}=qh();return Qa(t,i=>{o=i,i.style.transform&&qF(l,i.style.transform),s&&(i.style.transform=s),n&&n(l)}),ge(r,i=>{if(!o){s=i;return}o.style.transform=i},{immediate:!0}),{transform:l}}function zF(t,n){const s=Ue({}),o=i=>Object.entries(i).forEach(([a,c])=>s[a]=c),{style:l}=RF(t,o),{transform:r}=VF(t,o);return ge(s,i=>{Object.entries(i).forEach(([a,c])=>{const p=Ja(a)?r:l;p[a]&&p[a]===c||(p[a]=c)})},{immediate:!0,deep:!0}),Qa(t,()=>n&&o(n)),{motionProperties:s,style:l,transform:r}}function GF(t={}){const n=$(t),s=U();return{state:S(()=>{if(s.value)return n[s.value]}),variant:s}}function Uh(t,n={},s){const{motionProperties:o}=zF(t),{variant:l,state:r}=GF(n),i=wF(o,n),a={target:t,variant:l,variants:n,state:r,motionProperties:o,...i};return OF(a,s),a}const UF=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function WF(t,n){const s=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};s&&(s.variants&&Bi(s.variants)&&(n.value={...n.value,...s.variants}),UF.forEach(o=>{if(o==="delay"){if(s&&s[o]&&typeof s[o]=="number"){const l=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:l,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:l,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:l,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&Bi(s[o])&&(n.value[o]=s[o])}))}function Qr(t){return{created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Kr[r]&&Kr[r].stop();const i=U(t||{});typeof o.value=="object"&&(i.value=o.value),WF(l,i);const a=Uh(s,i);s.motionInstance=a,r&&(Kr[r]=a)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=$(l);const r=YE((t==null?void 0:t.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:Gh(r)}}}}const KF={initial:{opacity:0},enter:{opacity:1}},YF={initial:{opacity:0},visible:{opacity:1}},ZF={initial:{opacity:0},visibleOnce:{opacity:1}},QF={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},JF={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},XF={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},eT={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},tT={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},nT={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},sT={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},oT={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},lT={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},rT={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},iT={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},aT={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},cT={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},uT={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},pT={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},dT={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},fT={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},hT={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},yT={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},mT={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},gT={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},vT={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},_T={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},bT={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},AT={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},BT={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},CT={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ea={__proto__:null,fade:KF,fadeVisible:YF,fadeVisibleOnce:ZF,pop:QF,popVisible:JF,popVisibleOnce:XF,rollBottom:cT,rollLeft:eT,rollRight:sT,rollTop:rT,rollVisibleBottom:uT,rollVisibleLeft:tT,rollVisibleOnceBottom:pT,rollVisibleOnceLeft:nT,rollVisibleOnceRight:lT,rollVisibleOnceTop:aT,rollVisibleRight:oT,rollVisibleTop:iT,slideBottom:AT,slideLeft:dT,slideRight:yT,slideTop:vT,slideVisibleBottom:BT,slideVisibleLeft:fT,slideVisibleOnceBottom:CT,slideVisibleOnceLeft:hT,slideVisibleOnceRight:gT,slideVisibleOnceTop:bT,slideVisibleRight:mT,slideVisibleTop:_T},DT=be({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var a;const n=Gm(),s=Ue({});if(!t.is&&!n.default)return()=>_t("div",{});const o=S(()=>{let c;return t.preset&&(c=ea[t.preset]),c}),l=S(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),r=S(()=>{const c={...l.value,...o.value||{},...t.variants||{}};return t.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(t.delay)),c}),i=S(()=>{if(!t.is)return;let c=t.is;return typeof i.value=="string"&&!Dp(c)&&(c=Ge(c)),c});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||process!=null&&process.dev){const c=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var f,h,y;(f=p.variants)!=null&&f.enter&&p.apply("enter"),(h=p.variants)!=null&&h.visible&&p.apply("visible"),(y=p.variants)!=null&&y.visibleOnce&&p.apply("visibleOnce")},10)};pr(()=>Object.entries(s).forEach(([p,d])=>c(d)))}return{slots:n,component:i,motionConfig:r,instances:s}},render({slots:t,motionConfig:n,instances:s,component:o}){var a;const l=Gh(n.initial||{}),r=(c,p)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:d})=>{const f=Uh(d,n);s[p]=f},c);if(o){const c=_t(o,void 0,t);return r(c,0),c}return(((a=t.default)==null?void 0:a.call(t))||[]).map((c,p)=>r(c,p))}});function wT(t){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(n.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const xT={install(t,n){if(t.directive("motion",Qr()),t.component("Motion",DT),!n||n&&!n.excludePresets)for(const s in ea){const o=ea[s];t.directive(`motion-${wT(s)}`,Qr(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,t.directive(`motion-${s}`,Qr(o))}}};var rp;const wo=typeof window<"u",kT=Object.prototype.toString,ET=t=>kT.call(t)==="[object Object]";wo&&((rp=window==null?void 0:window.navigator)!=null&&rp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function $T(t){return ra()?(Ep(t),!0):!1}function FT(t){var n;const s=$(t);return(n=s==null?void 0:s.$el)!=null?n:s}const TT=wo?window:void 0,ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ap="__vueuse_ssr_handlers__";ip[ap]=ip[ap]||{};function ST(t,n={}){const{immediate:s=!0,window:o=TT}=n,l=U(!1);let r=null;function i(){!l.value||!o||(t(),r=o.requestAnimationFrame(i))}function a(){!l.value&&o&&(l.value=!0,i())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&a(),$T(c),{isActive:l,pause:c,resume:a}}var cp;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(cp||(cp={}));const br="vue-starport-injection",Wh="vue-starport-options",OT={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Kh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var PT=Object.defineProperty,Xl=Object.getOwnPropertySymbols,Yh=Object.prototype.hasOwnProperty,Zh=Object.prototype.propertyIsEnumerable,up=(t,n,s)=>n in t?PT(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,IT=(t,n)=>{for(var s in n||(n={}))Yh.call(n,s)&&up(t,s,n[s]);if(Xl)for(var s of Xl(n))Zh.call(n,s)&&up(t,s,n[s]);return t},pp=(t,n)=>{var s={};for(var o in t)Yh.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Xl)for(var o of Xl(t))n.indexOf(o)<0&&Zh.call(t,o)&&(s[o]=t[o]);return s};const MT=be({name:"StarportProxy",props:IT({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Kh),setup(t,n){const s=q(br),o=S(()=>s.getInstance(t.port,t.component)),l=U(),r=o.value.generateId(),i=U(!1);return o.value.isVisible||(o.value.land(),i.value=!0),Wn(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${t.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await at(),i.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const a=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${t.port}") has no ${a} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Uo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,i.value=!1,!o.value.options.keepAlive&&(await at(),await at(),!o.value.el&&s.dispose(o.value.port))}),ge(()=>t,async()=>{o.value.props&&await at();const a=t,{props:c}=a,p=pp(a,["props"]);o.value.props=c||{},o.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const a=t,{initialProps:c,mountedProps:p}=a,d=pp(a,["initialProps","mountedProps"]),f=ue(d,(i.value?p:c)||{});return _t("div",ue(f,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?_t(n.slots.default):void 0)}}});var LT=Object.defineProperty,jT=Object.defineProperties,NT=Object.getOwnPropertyDescriptors,dp=Object.getOwnPropertySymbols,RT=Object.prototype.hasOwnProperty,HT=Object.prototype.propertyIsEnumerable,fp=(t,n,s)=>n in t?LT(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,qT=(t,n)=>{for(var s in n||(n={}))RT.call(n,s)&&fp(t,s,n[s]);if(dp)for(var s of dp(n))HT.call(n,s)&&fp(t,s,n[s]);return t},VT=(t,n)=>jT(t,NT(n));const zT=be({name:"Starport",inheritAttrs:!0,props:Kh,setup(t,n){const s=U(!1);return Wn(()=>{if(s.value=!0,!q(br))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,a;const o=(a=(i=n.slots).default)==null?void 0:a.call(i);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!ET(r)||zn(r))&&(r={render(){return o}}),_t(MT,VT(qT({},t),{key:t.port,component:lr(r),props:l.props}))}}});function GT(t){const n=Ue({height:0,width:0,left:0,top:0,update:o,listen:r,pause:i,margin:"0px",padding:"0px"}),s=wo?document.documentElement||document.body:void 0;function o(){if(!wo)return;const a=FT(t);if(!a)return;const{height:c,width:p,left:d,top:f}=a.getBoundingClientRect(),h=window.getComputedStyle(a),y=h.margin,m=h.padding;Object.assign(n,{height:c,width:p,left:d,top:s.scrollTop+f,margin:y,padding:m})}const l=ST(o,{immediate:!1});function r(){wo&&(o(),l.resume())}function i(){l.pause()}return n}let UT=(t,n=21)=>(s=n)=>{let o="",l=s;for(;l--;)o+=t[Math.random()*t.length|0];return o};const hp=UT("abcdefghijklmnopqrstuvwxyz",5);function yp(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function WT(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var KT=Object.defineProperty,mp=Object.getOwnPropertySymbols,YT=Object.prototype.hasOwnProperty,ZT=Object.prototype.propertyIsEnumerable,gp=(t,n,s)=>n in t?KT(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Jr=(t,n)=>{for(var s in n||(n={}))YT.call(n,s)&&gp(t,s,n[s]);if(mp)for(var s of mp(n))ZT.call(n,s)&&gp(t,s,n[s]);return t};function QT(t,n,s={}){const o=WT(n),l=yp(o)||hp(),r=U(),i=U(null),a=U(!1),c=U(!1),p=hy(!0),d=U({}),f=S(()=>Jr(Jr(Jr({},OT),s),d.value)),h=U(0);let y;p.run(()=>{y=GT(r),ge(r,async C=>{C&&(c.value=!0),await at(),r.value||(c.value=!1)})});const m=yp(t);function A(){return`starport-${l}-${m}-${hp()}`}const B=A();return Ue({el:r,id:B,port:t,props:i,rect:y,scope:p,isLanded:a,isVisible:c,options:f,liftOffTime:h,component:n,componentName:o,componentId:l,generateId:A,setLocalOptions(C={}){d.value=JSON.parse(JSON.stringify(C))},elRef(){return r},liftOff(){a.value&&(a.value=!1,h.value=Date.now(),y.listen())},land(){a.value||(a.value=!0,y.pause())}})}function JT(t){const n=Ue(new Map);function s(l,r){let i=n.get(l);return i||(i=QT(l,r,t),n.set(l,i)),i.component=r,i}function o(l){var r;(r=n.get(l))==null||r.scope.stop(),n.delete(l)}return{portMap:n,dispose:o,getInstance:s}}var XT=Object.defineProperty,eS=Object.defineProperties,tS=Object.getOwnPropertyDescriptors,vp=Object.getOwnPropertySymbols,nS=Object.prototype.hasOwnProperty,sS=Object.prototype.propertyIsEnumerable,_p=(t,n,s)=>n in t?XT(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,oS=(t,n)=>{for(var s in n||(n={}))nS.call(n,s)&&_p(t,s,n[s]);if(vp)for(var s of vp(n))sS.call(n,s)&&_p(t,s,n[s]);return t},lS=(t,n)=>eS(t,tS(n));const rS=be({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=q(br);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=S(()=>n.getInstance(t.port,t.component)),o=S(()=>{var i;return((i=s.value.el)==null?void 0:i.id)||s.value.id}),l=S(()=>{const i=Date.now()-s.value.liftOffTime,a=Math.max(0,s.value.options.duration-i),c=s.value.rect,p={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?lS(oS({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:s.value.options.easing}),p)}),r={onTransitionend(i){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const i=!!(s.value.isLanded&&s.value.el);return _t("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},_t(_g,{to:i?`#${o.value}`:"body",disabled:!i},_t(s.value.component,ue(r,s.value.props))))}}}),iS=be({name:"StarportCarrier",setup(t,{slots:n}){const s=JT(q(Wh,{}));return Ot().appContext.app.provide(br,s),()=>{var l;return[(l=n.default)==null?void 0:l.call(n),Array.from(s.portMap.entries()).map(([r,{component:i}])=>_t(rS,{key:r,port:r,component:i}))]}}});function aS(t={}){return{install(n){n.provide(Wh,t),n.component("Starport",zT),n.component("StarportCarrier",iS)}}}function cS(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(xT),t.app.use(aS({keepAlive:!0}))}function xt(t,n,s){var o;return((o=t.instance)==null?void 0:o.$).provides[n]??s}function uS(){return{install(t){t.directive("click",{name:"v-click",mounted(n,s){var d,f,h,y,m,A;if(Ao.value||(d=xt(s,go))!=null&&d.value)return;const o=xt(s,rs),l=xt(s,mo),r=xt(s,bi),i=s.modifiers.hide!==!1&&s.modifiers.hide!=null,a=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,p=a?h_:Sr;if(o&&!((h=o==null?void 0:o.value)!=null&&h.includes(n))&&o.value.push(n),s.value==null&&(s.value=(y=o==null?void 0:o.value)==null?void 0:y.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(s.value)),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((A=r==null?void 0:r.value.get(s.value))!=null&&A.includes(n))){const B=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(B))}n==null||n.classList.toggle(ns,!0),l&&ge(l,()=>{const B=(l==null?void 0:l.value)??0,C=s.value!=null?B>=s.value:B>c;n.classList.contains(Or)||n.classList.toggle(p,!C),i!==!1&&i!==void 0&&n.classList.toggle(p,C),n.classList.toggle(Js,!1);const D=r==null?void 0:r.value.get(B);D==null||D.forEach((b,x)=>{b.classList.toggle(pl,!1),x===D.length-1?b.classList.toggle(Js,!0):b.classList.toggle(pl,!0)}),n.classList.contains(Js)||n.classList.toggle(pl,C)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(ns,!1);const o=xt(s,rs);o!=null&&o.value&&Ai(o.value,n)}}),t.directive("after",{name:"v-after",mounted(n,s){var a,c,p;if(Ao.value||(a=xt(s,go))!=null&&a.value)return;const o=xt(s,rs),l=xt(s,mo),r=xt(s,bi),i=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(s.value)),r!=null&&r.value.has(s.value)?(p=r==null?void 0:r.value.get(s.value))==null||p.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(ns,!0),l&&ge(l,()=>{const d=(l.value??0)>=(s.value??i??0);n.classList.contains(Or)||n.classList.toggle(Sr,!d),n.classList.toggle(Js,!1),n.classList.contains(Js)||n.classList.toggle(pl,d)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(ns,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,s){var i,a,c;if(Ao.value||(i=xt(s,go))!=null&&i.value)return;const o=xt(s,rs),l=xt(s,mo),r=((a=o==null?void 0:o.value)==null?void 0:a.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(n))&&o.value.push(n),n==null||n.classList.toggle(ns,!0),l&&ge(l,()=>{const p=(l==null?void 0:l.value)??0,d=s.value!=null?p>=s.value:p>r;n.classList.toggle(Sr,d),n.classList.toggle(Or,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(ns,!1);const o=xt(s,rs);o!=null&&o.value&&Ai(o.value,n)}})}}}function pS(t,n){const s=Xf(t),o=eh(n,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Te,themeConfigs:S(()=>Te.themeConfig)}}function dS(){return{install(t){const n=pS(Ht,Nt);t.provide(K,Ue(n))}}}const Us=gv(WE);Us.use(wt);Us.use(p_());Us.use(uS());Us.use(dS());cS({app:Us,router:wt});Us.mount("#app");export{WA as $,Jb as A,U as B,vS as C,mt as D,Le as E,Fe as F,v0 as G,RE as H,Nt as I,Zl as J,IE as K,Vr as L,Wn as M,Ue as N,mS as O,_S as P,ge as Q,I as R,Of as S,Se as T,yt as U,T0 as V,fS as W,hS as X,Io as Y,Nr as Z,Y as _,K as a,Oa as a0,Pa as a1,$A as a2,Ke as a3,S5 as a4,yS as a5,dt as a6,lo as a7,ml as a8,ps as a9,on as aa,Oi as ab,l0 as ac,r0 as ad,i0 as ae,c0 as af,ae as ag,Md as ah,bS as ai,bt as aj,fb as ak,Wd as al,u0 as am,Uo as an,Ud as b,Te as c,be as d,Xy as e,w as f,e as g,$ as h,q as i,Qe as j,TE as k,u as l,T as m,nt as n,v as o,pe as p,ka as q,xs as r,Zt as s,lt as t,gS as u,S as v,Pr as w,X as x,wf as y,sA as z};
