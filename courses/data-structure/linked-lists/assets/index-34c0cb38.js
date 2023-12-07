(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function Vn(s,n){const t=Object.create(null),l=s.split(",");for(let o=0;o<l.length;o++)t[l[o]]=!0;return n?o=>!!t[o.toLowerCase()]:o=>!!t[o]}const Re=Object.freeze({}),It=Object.freeze([]),vs=()=>{},Cu=()=>!1,ef=/^on[^a-z]/,Rl=s=>ef.test(s),ko=s=>s.startsWith("onUpdate:"),Ve=Object.assign,Xa=(s,n)=>{const t=s.indexOf(n);t>-1&&s.splice(t,1)},sf=Object.prototype.hasOwnProperty,ke=(s,n)=>sf.call(s,n),ie=Array.isArray,ut=s=>Hl(s)==="[object Map]",Du=s=>Hl(s)==="[object Set]",nf=s=>Hl(s)==="[object RegExp]",fe=s=>typeof s=="function",Ue=s=>typeof s=="string",Qa=s=>typeof s=="symbol",Ie=s=>s!==null&&typeof s=="object",ec=s=>Ie(s)&&fe(s.then)&&fe(s.catch),bu=Object.prototype.toString,Hl=s=>bu.call(s),sc=s=>Hl(s).slice(8,-1),wu=s=>Hl(s)==="[object Object]",nc=s=>Ue(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,Bo=Vn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tf=Vn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Xo=s=>{const n=Object.create(null);return t=>n[t]||(n[t]=s(t))},lf=/-(\w)/g,ln=Xo(s=>s.replace(lf,(n,t)=>t?t.toUpperCase():"")),of=/\B([A-Z])/g,_n=Xo(s=>s.replace(of,"-$1").toLowerCase()),_t=Xo(s=>s.charAt(0).toUpperCase()+s.slice(1)),Qn=Xo(s=>s?`on${_t(s)}`:""),Dl=(s,n)=>!Object.is(s,n),st=(s,n)=>{for(let t=0;t<s.length;t++)s[t](n)},xo=(s,n,t)=>{Object.defineProperty(s,n,{configurable:!0,enumerable:!1,value:t})},rf=s=>{const n=parseFloat(s);return isNaN(n)?s:n},af=s=>{const n=Ue(s)?Number(s):NaN;return isNaN(n)?s:n};let li;const $o=()=>li||(li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function es(s){if(ie(s)){const n={};for(let t=0;t<s.length;t++){const l=s[t],o=Ue(l)?yf(l):es(l);if(o)for(const r in o)n[r]=o[r]}return n}else{if(Ue(s))return s;if(Ie(s))return s}}const cf=/;(?![^(]*\))/g,pf=/:([^]+)/,uf=/\/\*[^]*?\*\//g;function yf(s){const n={};return s.replace(uf,"").split(cf).forEach(t=>{if(t){const l=t.split(pf);l.length>1&&(n[l[0].trim()]=l[1].trim())}}),n}function We(s){let n="";if(Ue(s))n=s;else if(ie(s))for(let t=0;t<s.length;t++){const l=We(s[t]);l&&(n+=l+" ")}else if(Ie(s))for(const t in s)s[t]&&(n+=t+" ");return n.trim()}function te(s){if(!s)return null;let{class:n,style:t}=s;return n&&!Ue(n)&&(s.class=We(n)),t&&(s.style=es(t)),s}const df="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ff="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Eu=Vn(df),hf=Vn(ff),mf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bf=Vn(mf);function ku(s){return!!s||s===""}const Cs=s=>Ue(s)?s:s==null?"":ie(s)||Ie(s)&&(s.toString===bu||!fe(s.toString))?JSON.stringify(s,xu,2):String(s),xu=(s,n)=>n&&n.__v_isRef?xu(s,n.value):ut(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[l,o])=>(t[`${l} =>`]=o,t),{})}:Du(n)?{[`Set(${n.size})`]:[...n.values()]}:Ie(n)&&!ie(n)&&!wu(n)?String(n):n;function Fo(s,...n){console.warn(`[Vue warn] ${s}`,...n)}let ws;class $u{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ws,!n&&ws&&(this.index=(ws.scopes||(ws.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=ws;try{return ws=this,n()}finally{ws=t}}else Fo("cannot run an inactive effect scope.")}on(){ws=this}off(){ws=this.parent}stop(n){if(this._active){let t,l;for(t=0,l=this.effects.length;t<l;t++)this.effects[t].stop();for(t=0,l=this.cleanups.length;t<l;t++)this.cleanups[t]();if(this.scopes)for(t=0,l=this.scopes.length;t<l;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Af(s){return new $u(s)}function _f(s,n=ws){n&&n.active&&n.effects.push(s)}function tc(){return ws}function Fu(s){ws?ws.cleanups.push(s):Fo("onScopeDispose() is called when there is no active effect scope to be associated with.")}const lc=s=>{const n=new Set(s);return n.w=0,n.n=0,n},Tu=s=>(s.w&zn)>0,Su=s=>(s.n&zn)>0,vf=({deps:s})=>{if(s.length)for(let n=0;n<s.length;n++)s[n].w|=zn},gf=s=>{const{deps:n}=s;if(n.length){let t=0;for(let l=0;l<n.length;l++){const o=n[l];Tu(o)&&!Su(o)?o.delete(s):n[t++]=o,o.w&=~zn,o.n&=~zn}n.length=t}},To=new WeakMap;let ll=0,zn=1;const Jr=30;let ds;const yt=Symbol("iterate"),Xr=Symbol("Map key iterate");class oc{constructor(n,t=null,l){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,_f(this,l)}run(){if(!this.active)return this.fn();let n=ds,t=Tn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=ds,ds=this,Tn=!0,zn=1<<++ll,ll<=Jr?vf(this):oi(this),this.fn()}finally{ll<=Jr&&gf(this),zn=1<<--ll,ds=this.parent,Tn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ds===this?this.deferStop=!0:this.active&&(oi(this),this.onStop&&this.onStop(),this.active=!1)}}function oi(s){const{deps:n}=s;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(s);n.length=0}}let Tn=!0;const Ou=[];function gt(){Ou.push(Tn),Tn=!1}function Ct(){const s=Ou.pop();Tn=s===void 0?!0:s}function cs(s,n,t){if(Tn&&ds){let l=To.get(s);l||To.set(s,l=new Map);let o=l.get(t);o||l.set(t,o=lc()),Iu(o,{effect:ds,target:s,type:n,key:t})}}function Iu(s,n){let t=!1;ll<=Jr?Su(s)||(s.n|=zn,t=!Tu(s)):t=!s.has(ds),t&&(s.add(ds),ds.deps.push(s),ds.onTrack&&ds.onTrack(Ve({effect:ds},n)))}function on(s,n,t,l,o,r){const c=To.get(s);if(!c)return;let i=[];if(n==="clear")i=[...c.values()];else if(t==="length"&&ie(s)){const u=Number(l);c.forEach((y,d)=>{(d==="length"||d>=u)&&i.push(y)})}else switch(t!==void 0&&i.push(c.get(t)),n){case"add":ie(s)?nc(t)&&i.push(c.get("length")):(i.push(c.get(yt)),ut(s)&&i.push(c.get(Xr)));break;case"delete":ie(s)||(i.push(c.get(yt)),ut(s)&&i.push(c.get(Xr)));break;case"set":ut(s)&&i.push(c.get(yt));break}const p={target:s,type:n,key:t,newValue:l,oldValue:o,oldTarget:r};if(i.length===1)i[0]&&Qr(i[0],p);else{const u=[];for(const y of i)y&&u.push(...y);Qr(lc(u),p)}}function Qr(s,n){const t=ie(s)?s:[...s];for(const l of t)l.computed&&ri(l,n);for(const l of t)l.computed||ri(l,n)}function ri(s,n){(s!==ds||s.allowRecurse)&&(s.onTrigger&&s.onTrigger(Ve({effect:s},n)),s.scheduler?s.scheduler():s.run())}function Cf(s,n){var t;return(t=To.get(s))==null?void 0:t.get(n)}const Df=Vn("__proto__,__v_isRef,__isVue"),Lu=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Qa)),bf=Qo(),wf=Qo(!1,!0),Ef=Qo(!0),kf=Qo(!0,!0),ai=xf();function xf(){const s={};return["includes","indexOf","lastIndexOf"].forEach(n=>{s[n]=function(...t){const l=Ae(this);for(let r=0,c=this.length;r<c;r++)cs(l,"get",r+"");const o=l[n](...t);return o===-1||o===!1?l[n](...t.map(Ae)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{s[n]=function(...t){gt();const l=Ae(this)[n].apply(this,t);return Ct(),l}}),s}function $f(s){const n=Ae(this);return cs(n,"has",s),n.hasOwnProperty(s)}function Qo(s=!1,n=!1){return function(l,o,r){if(o==="__v_isReactive")return!s;if(o==="__v_isReadonly")return s;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&r===(s?n?Vu:Nu:n?Hu:Ru).get(l))return l;const c=ie(l);if(!s){if(c&&ke(ai,o))return Reflect.get(ai,o,r);if(o==="hasOwnProperty")return $f}const i=Reflect.get(l,o,r);return(Qa(o)?Lu.has(o):Df(o))||(s||cs(l,"get",o),n)?i:Oe(i)?c&&nc(o)?i:i.value:Ie(i)?s?qs(i):qe(i):i}}const Ff=Pu(),Tf=Pu(!0);function Pu(s=!1){return function(t,l,o,r){let c=t[l];if(Rn(c)&&Oe(c)&&!Oe(o))return!1;if(!s&&(!So(o)&&!Rn(o)&&(c=Ae(c),o=Ae(o)),!ie(t)&&Oe(c)&&!Oe(o)))return c.value=o,!0;const i=ie(t)&&nc(l)?Number(l)<t.length:ke(t,l),p=Reflect.set(t,l,o,r);return t===Ae(r)&&(i?Dl(o,c)&&on(t,"set",l,o,c):on(t,"add",l,o)),p}}function Sf(s,n){const t=ke(s,n),l=s[n],o=Reflect.deleteProperty(s,n);return o&&t&&on(s,"delete",n,void 0,l),o}function Of(s,n){const t=Reflect.has(s,n);return(!Qa(n)||!Lu.has(n))&&cs(s,"has",n),t}function If(s){return cs(s,"iterate",ie(s)?"length":yt),Reflect.ownKeys(s)}const Mu={get:bf,set:Ff,deleteProperty:Sf,has:Of,ownKeys:If},ju={get:Ef,set(s,n){return Fo(`Set operation on key "${String(n)}" failed: target is readonly.`,s),!0},deleteProperty(s,n){return Fo(`Delete operation on key "${String(n)}" failed: target is readonly.`,s),!0}},Lf=Ve({},Mu,{get:wf,set:Tf}),Pf=Ve({},ju,{get:kf}),rc=s=>s,er=s=>Reflect.getPrototypeOf(s);function Xl(s,n,t=!1,l=!1){s=s.__v_raw;const o=Ae(s),r=Ae(n);t||(n!==r&&cs(o,"get",n),cs(o,"get",r));const{has:c}=er(o),i=l?rc:t?ac:bl;if(c.call(o,n))return i(s.get(n));if(c.call(o,r))return i(s.get(r));s!==o&&s.get(n)}function Ql(s,n=!1){const t=this.__v_raw,l=Ae(t),o=Ae(s);return n||(s!==o&&cs(l,"has",s),cs(l,"has",o)),s===o?t.has(s):t.has(s)||t.has(o)}function eo(s,n=!1){return s=s.__v_raw,!n&&cs(Ae(s),"iterate",yt),Reflect.get(s,"size",s)}function ci(s){s=Ae(s);const n=Ae(this);return er(n).has.call(n,s)||(n.add(s),on(n,"add",s,s)),this}function ii(s,n){n=Ae(n);const t=Ae(this),{has:l,get:o}=er(t);let r=l.call(t,s);r?zu(t,l,s):(s=Ae(s),r=l.call(t,s));const c=o.call(t,s);return t.set(s,n),r?Dl(n,c)&&on(t,"set",s,n,c):on(t,"add",s,n),this}function pi(s){const n=Ae(this),{has:t,get:l}=er(n);let o=t.call(n,s);o?zu(n,t,s):(s=Ae(s),o=t.call(n,s));const r=l?l.call(n,s):void 0,c=n.delete(s);return o&&on(n,"delete",s,void 0,r),c}function ui(){const s=Ae(this),n=s.size!==0,t=ut(s)?new Map(s):new Set(s),l=s.clear();return n&&on(s,"clear",void 0,void 0,t),l}function so(s,n){return function(l,o){const r=this,c=r.__v_raw,i=Ae(c),p=n?rc:s?ac:bl;return!s&&cs(i,"iterate",yt),c.forEach((u,y)=>l.call(o,p(u),p(y),r))}}function no(s,n,t){return function(...l){const o=this.__v_raw,r=Ae(o),c=ut(r),i=s==="entries"||s===Symbol.iterator&&c,p=s==="keys"&&c,u=o[s](...l),y=t?rc:n?ac:bl;return!n&&cs(r,"iterate",p?Xr:yt),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:i?[y(d[0]),y(d[1])]:y(d),done:f}},[Symbol.iterator](){return this}}}}function Cn(s){return function(...n){{const t=n[0]?`on key "${n[0]}" `:"";console.warn(`${_t(s)} operation ${t}failed: target is readonly.`,Ae(this))}return s==="delete"?!1:this}}function Mf(){const s={get(r){return Xl(this,r)},get size(){return eo(this)},has:Ql,add:ci,set:ii,delete:pi,clear:ui,forEach:so(!1,!1)},n={get(r){return Xl(this,r,!1,!0)},get size(){return eo(this)},has:Ql,add:ci,set:ii,delete:pi,clear:ui,forEach:so(!1,!0)},t={get(r){return Xl(this,r,!0)},get size(){return eo(this,!0)},has(r){return Ql.call(this,r,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:so(!0,!1)},l={get(r){return Xl(this,r,!0,!0)},get size(){return eo(this,!0)},has(r){return Ql.call(this,r,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:so(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=no(r,!1,!1),t[r]=no(r,!0,!1),n[r]=no(r,!1,!0),l[r]=no(r,!0,!0)}),[s,t,n,l]}const[jf,zf,Rf,Hf]=Mf();function sr(s,n){const t=n?s?Hf:Rf:s?zf:jf;return(l,o,r)=>o==="__v_isReactive"?!s:o==="__v_isReadonly"?s:o==="__v_raw"?l:Reflect.get(ke(t,o)&&o in l?t:l,o,r)}const Nf={get:sr(!1,!1)},Vf={get:sr(!1,!0)},Wf={get:sr(!0,!1)},Uf={get:sr(!0,!0)};function zu(s,n,t){const l=Ae(t);if(l!==t&&n.call(s,l)){const o=sc(s);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ru=new WeakMap,Hu=new WeakMap,Nu=new WeakMap,Vu=new WeakMap;function qf(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gf(s){return s.__v_skip||!Object.isExtensible(s)?0:qf(sc(s))}function qe(s){return Rn(s)?s:nr(s,!1,Mu,Nf,Ru)}function Kf(s){return nr(s,!1,Lf,Vf,Hu)}function qs(s){return nr(s,!0,ju,Wf,Nu)}function ol(s){return nr(s,!0,Pf,Uf,Vu)}function nr(s,n,t,l,o){if(!Ie(s))return console.warn(`value cannot be made reactive: ${String(s)}`),s;if(s.__v_raw&&!(n&&s.__v_isReactive))return s;const r=o.get(s);if(r)return r;const c=Gf(s);if(c===0)return s;const i=new Proxy(s,c===2?l:t);return o.set(s,i),i}function dt(s){return Rn(s)?dt(s.__v_raw):!!(s&&s.__v_isReactive)}function Rn(s){return!!(s&&s.__v_isReadonly)}function So(s){return!!(s&&s.__v_isShallow)}function Oo(s){return dt(s)||Rn(s)}function Ae(s){const n=s&&s.__v_raw;return n?Ae(n):s}function tr(s){return xo(s,"__v_skip",!0),s}const bl=s=>Ie(s)?qe(s):s,ac=s=>Ie(s)?qs(s):s;function cc(s){Tn&&ds&&(s=Ae(s),Iu(s.dep||(s.dep=lc()),{target:s,type:"get",key:"value"}))}function ic(s,n){s=Ae(s);const t=s.dep;t&&Qr(t,{target:s,type:"set",key:"value",newValue:n})}function Oe(s){return!!(s&&s.__v_isRef===!0)}function Y(s){return Wu(s,!1)}function rn(s){return Wu(s,!0)}function Wu(s,n){return Oe(s)?s:new Yf(s,n)}class Yf{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:Ae(n),this._value=t?n:bl(n)}get value(){return cc(this),this._value}set value(n){const t=this.__v_isShallow||So(n)||Rn(n);n=t?n:Ae(n),Dl(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:bl(n),ic(this,n))}}function T(s){return Oe(s)?s.value:s}const Zf={get:(s,n,t)=>T(Reflect.get(s,n,t)),set:(s,n,t,l)=>{const o=s[n];return Oe(o)&&!Oe(t)?(o.value=t,!0):Reflect.set(s,n,t,l)}};function Uu(s){return dt(s)?s:new Proxy(s,Zf)}class Jf{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:l}=n(()=>cc(this),()=>ic(this));this._get=t,this._set=l}get value(){return this._get()}set value(n){this._set(n)}}function pc(s){return new Jf(s)}function Xf(s){Oo(s)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ie(s)?new Array(s.length):{};for(const t in s)n[t]=qu(s,t);return n}class Qf{constructor(n,t,l){this._object=n,this._key=t,this._defaultValue=l,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Cf(Ae(this._object),this._key)}}class eh{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function sh(s,n,t){return Oe(s)?s:fe(s)?new eh(s):Ie(s)&&arguments.length>1?qu(s,n,t):Y(s)}function qu(s,n,t){const l=s[n];return Oe(l)?l:new Qf(s,n,t)}class nh{constructor(n,t,l,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new oc(n,()=>{this._dirty||(this._dirty=!0,ic(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=l}get value(){const n=Ae(this);return cc(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function th(s,n,t=!1){let l,o;const r=fe(s);r?(l=s,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(l=s.get,o=s.set);const c=new nh(l,o,r||!o,t);return n&&!t&&(c.effect.onTrack=n.onTrack,c.effect.onTrigger=n.onTrigger),c}const ft=[];function Ao(s){ft.push(s)}function _o(){ft.pop()}function V(s,...n){gt();const t=ft.length?ft[ft.length-1].component:null,l=t&&t.appContext.config.warnHandler,o=lh();if(l)Bn(l,t,11,[s+n.join(""),t&&t.proxy,o.map(({vnode:r})=>`at <${dr(t,r.type)}>`).join(`
`),o]);else{const r=[`[Vue warn]: ${s}`,...n];o.length&&r.push(`
`,...oh(o)),console.warn(...r)}Ct()}function lh(){let s=ft[ft.length-1];if(!s)return[];const n=[];for(;s;){const t=n[0];t&&t.vnode===s?t.recurseCount++:n.push({vnode:s,recurseCount:0});const l=s.component&&s.component.parent;s=l&&l.vnode}return n}function oh(s){const n=[];return s.forEach((t,l)=>{n.push(...l===0?[]:[`
`],...rh(t))}),n}function rh({vnode:s,recurseCount:n}){const t=n>0?`... (${n} recursive calls)`:"",l=s.component?s.component.parent==null:!1,o=` at <${dr(s.component,s.type,l)}`,r=">"+t;return s.props?[o,...ah(s.props),r]:[o+r]}function ah(s){const n=[],t=Object.keys(s);return t.slice(0,3).forEach(l=>{n.push(...Gu(l,s[l]))}),t.length>3&&n.push(" ..."),n}function Gu(s,n,t){return Ue(n)?(n=JSON.stringify(n),t?n:[`${s}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?t?n:[`${s}=${n}`]:Oe(n)?(n=Gu(s,Ae(n.value),!0),t?n:[`${s}=Ref<`,n,">"]):fe(n)?[`${s}=fn${n.name?`<${n.name}>`:""}`]:(n=Ae(n),t?n:[`${s}=`,n])}function ch(s,n){s!==void 0&&(typeof s!="number"?V(`${n} is not a valid number - got ${JSON.stringify(s)}.`):isNaN(s)&&V(`${n} is NaN - the duration expression might be incorrect.`))}const uc={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Bn(s,n,t,l){let o;try{o=l?s(...l):s()}catch(r){lr(r,n,t)}return o}function Ms(s,n,t,l){if(fe(s)){const r=Bn(s,n,t,l);return r&&ec(r)&&r.catch(c=>{lr(c,n,t)}),r}const o=[];for(let r=0;r<s.length;r++)o.push(Ms(s[r],n,t,l));return o}function lr(s,n,t,l=!0){const o=n?n.vnode:null;if(n){let r=n.parent;const c=n.proxy,i=uc[t];for(;r;){const u=r.ec;if(u){for(let y=0;y<u.length;y++)if(u[y](s,c,i)===!1)return}r=r.parent}const p=n.appContext.config.errorHandler;if(p){Bn(p,null,10,[s,c,i]);return}}ih(s,t,o,l)}function ih(s,n,t,l=!0){{const o=uc[n];if(t&&Ao(t),V(`Unhandled error${o?` during execution of ${o}`:""}`),t&&_o(),l)throw s;console.error(s)}}let wl=!1,ea=!1;const ls=[];let Qs=0;const Lt=[];let Xs=null,En=0;const Ku=Promise.resolve();let yc=null;const ph=100;function os(s){const n=yc||Ku;return s?n.then(this?s.bind(this):s):n}function uh(s){let n=Qs+1,t=ls.length;for(;n<t;){const l=n+t>>>1;El(ls[l])<s?n=l+1:t=l}return n}function or(s){(!ls.length||!ls.includes(s,wl&&s.allowRecurse?Qs+1:Qs))&&(s.id==null?ls.push(s):ls.splice(uh(s.id),0,s),Yu())}function Yu(){!wl&&!ea&&(ea=!0,yc=Ku.then(Xu))}function yh(s){const n=ls.indexOf(s);n>Qs&&ls.splice(n,1)}function Zu(s){ie(s)?Lt.push(...s):(!Xs||!Xs.includes(s,s.allowRecurse?En+1:En))&&Lt.push(s),Yu()}function yi(s,n=wl?Qs+1:0){for(s=s||new Map;n<ls.length;n++){const t=ls[n];if(t&&t.pre){if(dc(s,t))continue;ls.splice(n,1),n--,t()}}}function Ju(s){if(Lt.length){const n=[...new Set(Lt)];if(Lt.length=0,Xs){Xs.push(...n);return}for(Xs=n,s=s||new Map,Xs.sort((t,l)=>El(t)-El(l)),En=0;En<Xs.length;En++)dc(s,Xs[En])||Xs[En]();Xs=null,En=0}}const El=s=>s.id==null?1/0:s.id,dh=(s,n)=>{const t=El(s)-El(n);if(t===0){if(s.pre&&!n.pre)return-1;if(n.pre&&!s.pre)return 1}return t};function Xu(s){ea=!1,wl=!0,s=s||new Map,ls.sort(dh);const n=t=>dc(s,t);try{for(Qs=0;Qs<ls.length;Qs++){const t=ls[Qs];if(t&&t.active!==!1){if(n(t))continue;Bn(t,null,14)}}}finally{Qs=0,ls.length=0,Ju(s),wl=!1,yc=null,(ls.length||Lt.length)&&Xu(s)}}function dc(s,n){if(!s.has(n))s.set(n,1);else{const t=s.get(n);if(t>ph){const l=n.ownerInstance,o=l&&$l(l.type);return V(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else s.set(n,t+1)}}let Sn=!1;const St=new Set;$o().__VUE_HMR_RUNTIME__={createRecord:_r(Qu),rerender:_r(mh),reload:_r(Bh)};const vt=new Map;function fh(s){const n=s.type.__hmrId;let t=vt.get(n);t||(Qu(n,s.type),t=vt.get(n)),t.instances.add(s)}function hh(s){vt.get(s.type.__hmrId).instances.delete(s)}function Qu(s,n){return vt.has(s)?!1:(vt.set(s,{initialDef:ul(n),instances:new Set}),!0)}function ul(s){return Ty(s)?s.__vccOpts:s}function mh(s,n){const t=vt.get(s);t&&(t.initialDef.render=n,[...t.instances].forEach(l=>{n&&(l.render=n,ul(l.type).render=n),l.renderCache=[],Sn=!0,l.update(),Sn=!1}))}function Bh(s,n){const t=vt.get(s);if(!t)return;n=ul(n),di(t.initialDef,n);const l=[...t.instances];for(const o of l){const r=ul(o.type);St.has(r)||(r!==t.initialDef&&di(r,n),St.add(r)),o.appContext.propsCache.delete(o.type),o.appContext.emitsCache.delete(o.type),o.appContext.optionsCache.delete(o.type),o.ceReload?(St.add(r),o.ceReload(n.styles),St.delete(r)):o.parent?or(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Zu(()=>{for(const o of l)St.delete(ul(o.type))})}function di(s,n){Ve(s,n);for(const t in s)t!=="__file"&&!(t in n)&&delete s[t]}function _r(s){return(n,t)=>{try{return s(n,t)}catch(l){console.error(l),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let en,rl=[],sa=!1;function Nl(s,...n){en?en.emit(s,...n):sa||rl.push({event:s,args:n})}function ey(s,n){var t,l;en=s,en?(en.enabled=!0,rl.forEach(({event:o,args:r})=>en.emit(o,...r)),rl=[]):typeof window<"u"&&window.HTMLElement&&!((l=(t=window.navigator)==null?void 0:t.userAgent)!=null&&l.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{ey(r,n)}),setTimeout(()=>{en||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,sa=!0,rl=[])},3e3)):(sa=!0,rl=[])}function Ah(s,n){Nl("app:init",s,n,{Fragment:Te,Text:Wl,Comment:fs,Static:vo})}function _h(s){Nl("app:unmount",s)}const na=fc("component:added"),sy=fc("component:updated"),vh=fc("component:removed"),gh=s=>{en&&typeof en.cleanupBuffer=="function"&&!en.cleanupBuffer(s)&&vh(s)};function fc(s){return n=>{Nl(s,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Ch=ny("perf:start"),Dh=ny("perf:end");function ny(s){return(n,t,l)=>{Nl(s,n.appContext.app,n.uid,n,t,l)}}function bh(s,n,t){Nl("component:emit",s.appContext.app,s,n,t)}function wh(s,n,...t){if(s.isUnmounted)return;const l=s.vnode.props||Re;{const{emitsOptions:y,propsOptions:[d]}=s;if(y)if(!(n in y))(!d||!(Qn(n)in d))&&V(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${Qn(n)}" prop.`);else{const f=y[n];fe(f)&&(f(...t)||V(`Invalid event arguments: event validation failed for event "${n}".`))}}let o=t;const r=n.startsWith("update:"),c=r&&n.slice(7);if(c&&c in l){const y=`${c==="modelValue"?"model":c}Modifiers`,{number:d,trim:f}=l[y]||Re;f&&(o=t.map(h=>Ue(h)?h.trim():h)),d&&(o=t.map(rf))}bh(s,n,o);{const y=n.toLowerCase();y!==n&&l[Qn(y)]&&V(`Event "${y}" is emitted in component ${dr(s,s.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_n(n)}" instead of "${n}".`)}let i,p=l[i=Qn(n)]||l[i=Qn(ln(n))];!p&&r&&(p=l[i=Qn(_n(n))]),p&&Ms(p,s,6,o);const u=l[i+"Once"];if(u){if(!s.emitted)s.emitted={};else if(s.emitted[i])return;s.emitted[i]=!0,Ms(u,s,6,o)}}function ty(s,n,t=!1){const l=n.emitsCache,o=l.get(s);if(o!==void 0)return o;const r=s.emits;let c={},i=!1;if(!fe(s)){const p=u=>{const y=ty(u,n,!0);y&&(i=!0,Ve(c,y))};!t&&n.mixins.length&&n.mixins.forEach(p),s.extends&&p(s.extends),s.mixins&&s.mixins.forEach(p)}return!r&&!i?(Ie(s)&&l.set(s,null),null):(ie(r)?r.forEach(p=>c[p]=null):Ve(c,r),Ie(s)&&l.set(s,c),c)}function rr(s,n){return!s||!Rl(n)?!1:(n=n.slice(2).replace(/Once$/,""),ke(s,n[0].toLowerCase()+n.slice(1))||ke(s,_n(n))||ke(s,n))}let Qe=null,ar=null;function Io(s){const n=Qe;return Qe=s,ar=s&&s.type.__scopeId||null,n}function OP(s){ar=s}function IP(){ar=null}function w(s,n=Qe,t){if(!n||s._n)return s;const l=(...o)=>{l._d&&ki(-1);const r=Io(n);let c;try{c=s(...o)}finally{Io(r),l._d&&ki(1)}return sy(n),c};return l._n=!0,l._c=!0,l._d=!0,l}let ta=!1;function Lo(){ta=!0}function vr(s){const{type:n,vnode:t,proxy:l,withProxy:o,props:r,propsOptions:[c],slots:i,attrs:p,emit:u,render:y,renderCache:d,data:f,setupState:h,ctx:m,inheritAttrs:g}=s;let C,D;const b=Io(s);ta=!1;try{if(t.shapeFlag&4){const $=o||l;C=Us(y.call($,$,d,r,h,f,m)),D=p}else{const $=n;p===r&&Lo(),C=Us($.length>1?$(r,{get attrs(){return Lo(),p},slots:i,emit:u}):$(r,null)),D=n.props?p:kh(p)}}catch($){yl.length=0,lr($,s,1),C=k(fs)}let v=C,x;if(C.patchFlag>0&&C.patchFlag&2048&&([v,x]=Eh(C)),D&&g!==!1){const $=Object.keys(D),{shapeFlag:S}=v;if($.length){if(S&7)c&&$.some(ko)&&(D=xh(D,c)),v=an(v,D);else if(!ta&&v.type!==fs){const N=Object.keys(p),L=[],U=[];for(let le=0,ye=N.length;le<ye;le++){const Z=N[le];Rl(Z)?ko(Z)||L.push(Z[2].toLowerCase()+Z.slice(3)):U.push(Z)}U.length&&V(`Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),L.length&&V(`Extraneous non-emits event listeners (${L.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return t.dirs&&(fi(v)||V("Runtime directive used on component with non-element root node. The directives will not function as intended."),v=an(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(fi(v)||V("Component inside <Transition> renders non-element root node that cannot be animated."),v.transition=t.transition),x?x(v):C=v,Io(b),C}const Eh=s=>{const n=s.children,t=s.dynamicChildren,l=ly(n);if(!l)return[s,void 0];const o=n.indexOf(l),r=t?t.indexOf(l):-1,c=i=>{n[o]=i,t&&(r>-1?t[r]=i:i.patchFlag>0&&(s.dynamicChildren=[...t,i]))};return[Us(l),c]};function ly(s){let n;for(let t=0;t<s.length;t++){const l=s[t];if(Hn(l)){if(l.type!==fs||l.children==="v-if"){if(n)return;n=l}}else return}return n}const kh=s=>{let n;for(const t in s)(t==="class"||t==="style"||Rl(t))&&((n||(n={}))[t]=s[t]);return n},xh=(s,n)=>{const t={};for(const l in s)(!ko(l)||!(l.slice(9)in n))&&(t[l]=s[l]);return t},fi=s=>s.shapeFlag&7||s.type===fs;function $h(s,n,t){const{props:l,children:o,component:r}=s,{props:c,children:i,patchFlag:p}=n,u=r.emitsOptions;if((o||i)&&Sn||n.dirs||n.transition)return!0;if(t&&p>=0){if(p&1024)return!0;if(p&16)return l?hi(l,c,u):!!c;if(p&8){const y=n.dynamicProps;for(let d=0;d<y.length;d++){const f=y[d];if(c[f]!==l[f]&&!rr(u,f))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:l===c?!1:l?c?hi(l,c,u):!0:!!c;return!1}function hi(s,n,t){const l=Object.keys(n);if(l.length!==Object.keys(s).length)return!0;for(let o=0;o<l.length;o++){const r=l[o];if(n[r]!==s[r]&&!rr(t,r))return!0}return!1}function Fh({vnode:s,parent:n},t){for(;n&&n.subTree===s;)(s=n.vnode).el=t,n=n.parent}const oy=s=>s.__isSuspense;function Th(s,n){n&&n.pendingBranch?ie(s)?n.effects.push(...s):n.effects.push(s):Zu(s)}function Dt(s,n){return hc(s,null,n)}const to={};function ve(s,n,t){return fe(n)||V("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),hc(s,n,t)}function hc(s,n,{immediate:t,deep:l,flush:o,onTrack:r,onTrigger:c}=Re){var i;n||(t!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),l!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const p=$=>{V("Invalid watch source: ",$,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=tc()===((i=Xe)==null?void 0:i.scope)?Xe:null;let y,d=!1,f=!1;if(Oe(s)?(y=()=>s.value,d=So(s)):dt(s)?(y=()=>s,l=!0):ie(s)?(f=!0,d=s.some($=>dt($)||So($)),y=()=>s.map($=>{if(Oe($))return $.value;if(dt($))return ct($);if(fe($))return Bn($,u,2);p($)})):fe(s)?n?y=()=>Bn(s,u,2):y=()=>{if(!(u&&u.isUnmounted))return h&&h(),Ms(s,u,3,[m])}:(y=vs,p(s)),n&&l){const $=y;y=()=>ct($())}let h,m=$=>{h=v.onStop=()=>{Bn($,u,4)}},g;if(xl)if(m=vs,n?t&&Ms(n,u,3,[y(),f?[]:void 0,m]):y(),o==="sync"){const $=zm();g=$.__watcherHandles||($.__watcherHandles=[])}else return vs;let C=f?new Array(s.length).fill(to):to;const D=()=>{if(v.active)if(n){const $=v.run();(l||d||(f?$.some((S,N)=>Dl(S,C[N])):Dl($,C)))&&(h&&h(),Ms(n,u,3,[$,C===to?void 0:f&&C[0]===to?[]:C,m]),C=$)}else v.run()};D.allowRecurse=!!n;let b;o==="sync"?b=D:o==="post"?b=()=>ns(D,u&&u.suspense):(D.pre=!0,u&&(D.id=u.uid),b=()=>or(D));const v=new oc(y,b);v.onTrack=r,v.onTrigger=c,n?t?D():C=v.run():o==="post"?ns(v.run.bind(v),u&&u.suspense):v.run();const x=()=>{v.stop(),u&&u.scope&&Xa(u.scope.effects,v)};return g&&g.push(x),x}function Sh(s,n,t){const l=this.proxy,o=Ue(s)?s.includes(".")?ry(l,s):()=>l[s]:s.bind(l,l);let r;fe(n)?r=n:(r=n.handler,t=n);const c=Xe;zt(this);const i=hc(o,r.bind(l),t);return c?zt(c):mt(),i}function ry(s,n){const t=n.split(".");return()=>{let l=s;for(let o=0;o<t.length&&l;o++)l=l[t[o]];return l}}function ct(s,n){if(!Ie(s)||s.__v_skip||(n=n||new Set,n.has(s)))return s;if(n.add(s),Oe(s))ct(s.value,n);else if(ie(s))for(let t=0;t<s.length;t++)ct(s[t],n);else if(Du(s)||ut(s))s.forEach(t=>{ct(t,n)});else if(wu(s))for(const t in s)ct(s[t],n);return s}function ay(s){tf(s)&&V("Do not use built-in directive ids as custom directive id: "+s)}function js(s,n){const t=Qe;if(t===null)return V("withDirectives can only be used inside render functions."),s;const l=yr(t)||t.proxy,o=s.dirs||(s.dirs=[]);for(let r=0;r<n.length;r++){let[c,i,p,u=Re]=n[r];c&&(fe(c)&&(c={mounted:c,updated:c}),c.deep&&ct(i),o.push({dir:c,instance:l,value:i,oldValue:void 0,arg:p,modifiers:u}))}return s}function Kn(s,n,t,l){const o=s.dirs,r=n&&n.dirs;for(let c=0;c<o.length;c++){const i=o[c];r&&(i.oldValue=r[c].value);let p=i.dir[l];p&&(gt(),Ms(p,t,8,[s.el,i,s,n]),Ct())}}function Oh(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wn(()=>{s.isMounted=!0}),Vl(()=>{s.isUnmounting=!0}),s}const Os=[Function,Array],Ih={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Os,onEnter:Os,onAfterEnter:Os,onEnterCancelled:Os,onBeforeLeave:Os,onLeave:Os,onAfterLeave:Os,onLeaveCancelled:Os,onBeforeAppear:Os,onAppear:Os,onAfterAppear:Os,onAppearCancelled:Os};function Lh(s,n){const{leavingVNodes:t}=s;let l=t.get(n.type);return l||(l=Object.create(null),t.set(n.type,l)),l}function la(s,n,t,l){const{appear:o,mode:r,persisted:c=!1,onBeforeEnter:i,onEnter:p,onAfterEnter:u,onEnterCancelled:y,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:g,onAppear:C,onAfterAppear:D,onAppearCancelled:b}=n,v=String(s.key),x=Lh(t,s),$=(L,U)=>{L&&Ms(L,l,9,U)},S=(L,U)=>{const le=U[1];$(L,U),ie(L)?L.every(ye=>ye.length<=1)&&le():L.length<=1&&le()},N={mode:r,persisted:c,beforeEnter(L){let U=i;if(!t.isMounted)if(o)U=g||i;else return;L._leaveCb&&L._leaveCb(!0);const le=x[v];le&&nt(s,le)&&le.el._leaveCb&&le.el._leaveCb(),$(U,[L])},enter(L){let U=p,le=u,ye=y;if(!t.isMounted)if(o)U=C||p,le=D||u,ye=b||y;else return;let Z=!1;const _e=L._enterCb=ge=>{Z||(Z=!0,ge?$(ye,[L]):$(le,[L]),N.delayedLeave&&N.delayedLeave(),L._enterCb=void 0)};U?S(U,[L,_e]):_e()},leave(L,U){const le=String(s.key);if(L._enterCb&&L._enterCb(!0),t.isUnmounting)return U();$(d,[L]);let ye=!1;const Z=L._leaveCb=_e=>{ye||(ye=!0,U(),_e?$(m,[L]):$(h,[L]),L._leaveCb=void 0,x[le]===s&&delete x[le])};x[le]=s,f?S(f,[L,Z]):Z()},clone(L){return la(L,n,t,l)}};return N}function Po(s,n){s.shapeFlag&6&&s.component?Po(s.component.subTree,n):s.shapeFlag&128?(s.ssContent.transition=n.clone(s.ssContent),s.ssFallback.transition=n.clone(s.ssFallback)):s.transition=n}function cy(s,n=!1,t){let l=[],o=0;for(let r=0;r<s.length;r++){let c=s[r];const i=t==null?c.key:String(t)+String(c.key!=null?c.key:r);c.type===Te?(c.patchFlag&128&&o++,l=l.concat(cy(c.children,n,i))):(n||c.type!==fs)&&l.push(i!=null?an(c,{key:i}):c)}if(o>1)for(let r=0;r<l.length;r++)l[r].patchFlag=-2;return l}function $e(s,n){return fe(s)?(()=>Ve({name:s.name},n,{setup:s}))():s}const Pt=s=>!!s.type.__asyncLoader,mc=s=>s.type.__isKeepAlive,Ph={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:n}){const t=Fs(),l=t.ctx;if(!l.renderer)return()=>{const b=n.default&&n.default();return b&&b.length===1?b[0]:b};const o=new Map,r=new Set;let c=null;t.__v_cache=o;const i=t.suspense,{renderer:{p,m:u,um:y,o:{createElement:d}}}=l,f=d("div");l.activate=(b,v,x,$,S)=>{const N=b.component;u(b,v,x,0,i),p(N.vnode,b,v,x,N,i,$,b.slotScopeIds,S),ns(()=>{N.isDeactivated=!1,N.a&&st(N.a);const L=b.props&&b.props.onVnodeMounted;L&&Is(L,N.parent,b)},i),na(N)},l.deactivate=b=>{const v=b.component;u(b,f,null,1,i),ns(()=>{v.da&&st(v.da);const x=b.props&&b.props.onVnodeUnmounted;x&&Is(x,v.parent,b),v.isDeactivated=!0},i),na(v)};function h(b){gr(b),y(b,t,i,!0)}function m(b){o.forEach((v,x)=>{const $=$l(v.type);$&&(!b||!b($))&&g(x)})}function g(b){const v=o.get(b);!c||!nt(v,c)?h(v):c&&gr(c),o.delete(b),r.delete(b)}ve(()=>[s.include,s.exclude],([b,v])=>{b&&m(x=>al(b,x)),v&&m(x=>!al(v,x))},{flush:"post",deep:!0});let C=null;const D=()=>{C!=null&&o.set(C,Cr(t.subTree))};return Wn(D),ir(D),Vl(()=>{o.forEach(b=>{const{subTree:v,suspense:x}=t,$=Cr(v);if(b.type===$.type&&b.key===$.key){gr($);const S=$.component.da;S&&ns(S,x);return}h(b)})}),()=>{if(C=null,!n.default)return null;const b=n.default(),v=b[0];if(b.length>1)return V("KeepAlive should contain exactly one component child."),c=null,b;if(!Hn(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return c=null,v;let x=Cr(v);const $=x.type,S=$l(Pt(x)?x.type.__asyncResolved||{}:$),{include:N,exclude:L,max:U}=s;if(N&&(!S||!al(N,S))||L&&S&&al(L,S))return c=x,v;const le=x.key==null?$:x.key,ye=o.get(le);return x.el&&(x=an(x),v.shapeFlag&128&&(v.ssContent=x)),C=le,ye?(x.el=ye.el,x.component=ye.component,x.transition&&Po(x,x.transition),x.shapeFlag|=512,r.delete(le),r.add(le)):(r.add(le),U&&r.size>parseInt(U,10)&&g(r.values().next().value)),x.shapeFlag|=256,c=x,oy(v.type)?v:x}}},iy=Ph;function al(s,n){return ie(s)?s.some(t=>al(t,n)):Ue(s)?s.split(",").includes(n):nf(s)?s.test(n):!1}function py(s,n){yy(s,"a",n)}function uy(s,n){yy(s,"da",n)}function yy(s,n,t=Xe){const l=s.__wdc||(s.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return s()});if(cr(n,l,t),t){let o=t.parent;for(;o&&o.parent;)mc(o.parent.vnode)&&Mh(l,n,t,o),o=o.parent}}function Mh(s,n,t,l){const o=cr(n,s,l,!0);pr(()=>{Xa(l[n],o)},t)}function gr(s){s.shapeFlag&=-257,s.shapeFlag&=-513}function Cr(s){return s.shapeFlag&128?s.ssContent:s}function cr(s,n,t=Xe,l=!1){if(t){const o=t[s]||(t[s]=[]),r=n.__weh||(n.__weh=(...c)=>{if(t.isUnmounted)return;gt(),zt(t);const i=Ms(n,t,s,c);return mt(),Ct(),i});return l?o.unshift(r):o.push(r),r}else{const o=Qn(uc[s].replace(/ hook$/,""));V(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const gn=s=>(n,t=Xe)=>(!xl||s==="sp")&&cr(s,(...l)=>n(...l),t),jh=gn("bm"),Wn=gn("m"),zh=gn("bu"),ir=gn("u"),Vl=gn("bum"),pr=gn("um"),Rh=gn("sp"),Hh=gn("rtg"),Nh=gn("rtc");function Vh(s,n=Xe){cr("ec",s,n)}const oa="components",Wh="directives";function He(s,n){return dy(oa,s,!0,n)||s}const Uh=Symbol.for("v-ndc");function Un(s){return dy(Wh,s)}function dy(s,n,t=!0,l=!1){const o=Qe||Xe;if(o){const r=o.type;if(s===oa){const i=$l(r,!1);if(i&&(i===n||i===ln(n)||i===_t(ln(n))))return r}const c=mi(o[s]||r[s],n)||mi(o.appContext[s],n);if(!c&&l)return r;if(t&&!c){const i=s===oa?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";V(`Failed to resolve ${s.slice(0,-1)}: ${n}${i}`)}return c}else V(`resolve${_t(s.slice(0,-1))} can only be used in render() or setup().`)}function mi(s,n){return s&&(s[n]||s[ln(n)]||s[_t(ln(n))])}function bt(s,n,t,l){let o;const r=t&&t[l];if(ie(s)||Ue(s)){o=new Array(s.length);for(let c=0,i=s.length;c<i;c++)o[c]=n(s[c],c,void 0,r&&r[c])}else if(typeof s=="number"){Number.isInteger(s)||V(`The v-for range expect an integer value but got ${s}.`),o=new Array(s);for(let c=0;c<s;c++)o[c]=n(c+1,c,void 0,r&&r[c])}else if(Ie(s))if(s[Symbol.iterator])o=Array.from(s,(c,i)=>n(c,i,void 0,r&&r[i]));else{const c=Object.keys(s);o=new Array(c.length);for(let i=0,p=c.length;i<p;i++){const u=c[i];o[i]=n(s[u],u,i,r&&r[i])}}else o=[];return t&&(t[l]=o),o}function zs(s,n,t={},l,o){if(Qe.isCE||Qe.parent&&Pt(Qe.parent)&&Qe.parent.isCE)return n!=="default"&&(t.name=n),k("slot",t,l&&l());let r=s[n];r&&r.length>1&&(V("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),A();const c=r&&fy(r(t)),i=z(Te,{key:t.key||c&&c.key||`_${n}`},c||(l?l():[]),c&&s._===1?64:-2);return!o&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function fy(s){return s.some(n=>Hn(n)?!(n.type===fs||n.type===Te&&!fy(n.children)):!0)?s:null}const ra=s=>s?xy(s)?yr(s)||s.proxy:ra(s.parent):null,ht=Ve(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>ol(s.props),$attrs:s=>ol(s.attrs),$slots:s=>ol(s.slots),$refs:s=>ol(s.refs),$parent:s=>ra(s.parent),$root:s=>ra(s.root),$emit:s=>s.emit,$options:s=>Ac(s),$forceUpdate:s=>s.f||(s.f=()=>or(s.update)),$nextTick:s=>s.n||(s.n=os.bind(s.proxy)),$watch:s=>Sh.bind(s)}),Bc=s=>s==="_"||s==="$",Dr=(s,n)=>s!==Re&&!s.__isScriptSetup&&ke(s,n),hy={get({_:s},n){const{ctx:t,setupState:l,data:o,props:r,accessCache:c,type:i,appContext:p}=s;if(n==="__isVue")return!0;let u;if(n[0]!=="$"){const h=c[n];if(h!==void 0)switch(h){case 1:return l[n];case 2:return o[n];case 4:return t[n];case 3:return r[n]}else{if(Dr(l,n))return c[n]=1,l[n];if(o!==Re&&ke(o,n))return c[n]=2,o[n];if((u=s.propsOptions[0])&&ke(u,n))return c[n]=3,r[n];if(t!==Re&&ke(t,n))return c[n]=4,t[n];aa&&(c[n]=0)}}const y=ht[n];let d,f;if(y)return n==="$attrs"?(cs(s,"get",n),Lo()):n==="$slots"&&cs(s,"get",n),y(s);if((d=i.__cssModules)&&(d=d[n]))return d;if(t!==Re&&ke(t,n))return c[n]=4,t[n];if(f=p.config.globalProperties,ke(f,n))return f[n];Qe&&(!Ue(n)||n.indexOf("__v")!==0)&&(o!==Re&&Bc(n[0])&&ke(o,n)?V(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):s===Qe&&V(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:s},n,t){const{data:l,setupState:o,ctx:r}=s;return Dr(o,n)?(o[n]=t,!0):o.__isScriptSetup&&ke(o,n)?(V(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):l!==Re&&ke(l,n)?(l[n]=t,!0):ke(s.props,n)?(V(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in s?(V(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in s.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:t}):r[n]=t,!0)},has({_:{data:s,setupState:n,accessCache:t,ctx:l,appContext:o,propsOptions:r}},c){let i;return!!t[c]||s!==Re&&ke(s,c)||Dr(n,c)||(i=r[0])&&ke(i,c)||ke(l,c)||ke(ht,c)||ke(o.config.globalProperties,c)},defineProperty(s,n,t){return t.get!=null?s._.accessCache[n]=0:ke(t,"value")&&this.set(s,n,t.value,null),Reflect.defineProperty(s,n,t)}};hy.ownKeys=s=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(s));function qh(s){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>s}),Object.keys(ht).forEach(t=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,get:()=>ht[t](s),set:vs})}),n}function Gh(s){const{ctx:n,propsOptions:[t]}=s;t&&Object.keys(t).forEach(l=>{Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>s.props[l],set:vs})})}function Kh(s){const{ctx:n,setupState:t}=s;Object.keys(Ae(t)).forEach(l=>{if(!t.__isScriptSetup){if(Bc(l[0])){V(`setup() return property ${JSON.stringify(l)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>t[l],set:vs})}})}function Yh(){return Zh().slots}function Zh(){const s=Fs();return s||V("useContext() called without active instance."),s.setupContext||(s.setupContext=Fy(s))}function Bi(s){return ie(s)?s.reduce((n,t)=>(n[t]=null,n),{}):s}function Jh(){const s=Object.create(null);return(n,t)=>{s[t]?V(`${n} property "${t}" is already defined in ${s[t]}.`):s[t]=n}}let aa=!0;function Xh(s){const n=Ac(s),t=s.proxy,l=s.ctx;aa=!1,n.beforeCreate&&Ai(n.beforeCreate,s,"bc");const{data:o,computed:r,methods:c,watch:i,provide:p,inject:u,created:y,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:g,deactivated:C,beforeDestroy:D,beforeUnmount:b,destroyed:v,unmounted:x,render:$,renderTracked:S,renderTriggered:N,errorCaptured:L,serverPrefetch:U,expose:le,inheritAttrs:ye,components:Z,directives:_e,filters:ge}=n,De=Jh();{const[se]=s.propsOptions;if(se)for(const pe in se)De("Props",pe)}if(u&&Qh(u,l,De),c)for(const se in c){const pe=c[se];fe(pe)?(Object.defineProperty(l,se,{value:pe.bind(t),configurable:!0,enumerable:!0,writable:!0}),De("Methods",se)):V(`Method "${se}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(o){fe(o)||V("The data option must be a function. Plain object usage is no longer supported.");const se=o.call(t,t);if(ec(se)&&V("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Ie(se))V("data() should return an object.");else{s.data=qe(se);for(const pe in se)De("Data",pe),Bc(pe[0])||Object.defineProperty(l,pe,{configurable:!0,enumerable:!0,get:()=>se[pe],set:vs})}}if(aa=!0,r)for(const se in r){const pe=r[se],Ee=fe(pe)?pe.bind(t,t):fe(pe.get)?pe.get.bind(t,t):vs;Ee===vs&&V(`Computed property "${se}" has no getter.`);const Pe=!fe(pe)&&fe(pe.set)?pe.set.bind(t):()=>{V(`Write operation failed: computed property "${se}" is readonly.`)},Ts=O({get:Ee,set:Pe});Object.defineProperty(l,se,{enumerable:!0,configurable:!0,get:()=>Ts.value,set:ts=>Ts.value=ts}),De("Computed",se)}if(i)for(const se in i)my(i[se],l,t,se);if(p){const se=fe(p)?p.call(t):p;Reflect.ownKeys(se).forEach(pe=>{Es(pe,se[pe])})}y&&Ai(y,s,"c");function Me(se,pe){ie(pe)?pe.forEach(Ee=>se(Ee.bind(t))):pe&&se(pe.bind(t))}if(Me(jh,d),Me(Wn,f),Me(zh,h),Me(ir,m),Me(py,g),Me(uy,C),Me(Vh,L),Me(Nh,S),Me(Hh,N),Me(Vl,b),Me(pr,x),Me(Rh,U),ie(le))if(le.length){const se=s.exposed||(s.exposed={});le.forEach(pe=>{Object.defineProperty(se,pe,{get:()=>t[pe],set:Ee=>t[pe]=Ee})})}else s.exposed||(s.exposed={});$&&s.render===vs&&(s.render=$),ye!=null&&(s.inheritAttrs=ye),Z&&(s.components=Z),_e&&(s.directives=_e)}function Qh(s,n,t=vs){ie(s)&&(s=ca(s));for(const l in s){const o=s[l];let r;Ie(o)?"default"in o?r=P(o.from||l,o.default,!0):r=P(o.from||l):r=P(o),Oe(r)?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>r.value,set:c=>r.value=c}):n[l]=r,t("Inject",l)}}function Ai(s,n,t){Ms(ie(s)?s.map(l=>l.bind(n.proxy)):s.bind(n.proxy),n,t)}function my(s,n,t,l){const o=l.includes(".")?ry(t,l):()=>t[l];if(Ue(s)){const r=n[s];fe(r)?ve(o,r):V(`Invalid watch handler specified by key "${s}"`,r)}else if(fe(s))ve(o,s.bind(t));else if(Ie(s))if(ie(s))s.forEach(r=>my(r,n,t,l));else{const r=fe(s.handler)?s.handler.bind(t):n[s.handler];fe(r)?ve(o,r,s):V(`Invalid watch handler specified by key "${s.handler}"`,r)}else V(`Invalid watch option: "${l}"`,s)}function Ac(s){const n=s.type,{mixins:t,extends:l}=n,{mixins:o,optionsCache:r,config:{optionMergeStrategies:c}}=s.appContext,i=r.get(n);let p;return i?p=i:!o.length&&!t&&!l?p=n:(p={},o.length&&o.forEach(u=>Mo(p,u,c,!0)),Mo(p,n,c)),Ie(n)&&r.set(n,p),p}function Mo(s,n,t,l=!1){const{mixins:o,extends:r}=n;r&&Mo(s,r,t,!0),o&&o.forEach(c=>Mo(s,c,t,!0));for(const c in n)if(l&&c==="expose")V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=em[c]||t&&t[c];s[c]=i?i(s[c],n[c]):n[c]}return s}const em={data:_i,props:vi,emits:vi,methods:cl,computed:cl,beforeCreate:ps,created:ps,beforeMount:ps,mounted:ps,beforeUpdate:ps,updated:ps,beforeDestroy:ps,beforeUnmount:ps,destroyed:ps,unmounted:ps,activated:ps,deactivated:ps,errorCaptured:ps,serverPrefetch:ps,components:cl,directives:cl,watch:nm,provide:_i,inject:sm};function _i(s,n){return n?s?function(){return Ve(fe(s)?s.call(this,this):s,fe(n)?n.call(this,this):n)}:n:s}function sm(s,n){return cl(ca(s),ca(n))}function ca(s){if(ie(s)){const n={};for(let t=0;t<s.length;t++)n[s[t]]=s[t];return n}return s}function ps(s,n){return s?[...new Set([].concat(s,n))]:n}function cl(s,n){return s?Ve(Object.create(null),s,n):n}function vi(s,n){return s?ie(s)&&ie(n)?[...new Set([...s,...n])]:Ve(Object.create(null),Bi(s),Bi(n??{})):n}function nm(s,n){if(!s)return n;if(!n)return s;const t=Ve(Object.create(null),s);for(const l in n)t[l]=ps(s[l],n[l]);return t}function By(){return{app:null,config:{isNativeTag:Cu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tm=0;function lm(s,n){return function(l,o=null){fe(l)||(l=Ve({},l)),o!=null&&!Ie(o)&&(V("root props passed to app.mount() must be an object."),o=null);const r=By();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){V("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const c=new Set;let i=!1;const p=r.app={_uid:tm++,_component:l,_props:o,_container:null,_context:r,_instance:null,version:Ho,get config(){return r.config},set config(u){V("app.config cannot be replaced. Modify individual options instead.")},use(u,...y){return c.has(u)?V("Plugin has already been applied to target app."):u&&fe(u.install)?(c.add(u),u.install(p,...y)):fe(u)?(c.add(u),u(p,...y)):V('A plugin must either be a function or an object with an "install" function.'),p},mixin(u){return r.mixins.includes(u)?V("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),p},component(u,y){return da(u,r.config),y?(r.components[u]&&V(`Component "${u}" has already been registered in target app.`),r.components[u]=y,p):r.components[u]},directive(u,y){return ay(u),y?(r.directives[u]&&V(`Directive "${u}" has already been registered in target app.`),r.directives[u]=y,p):r.directives[u]},mount(u,y,d){if(i)V("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&V("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=k(l,o);return f.appContext=r,r.reload=()=>{s(an(f),u,d)},y&&n?n(f,u):s(f,u,d),i=!0,p._container=u,u.__vue_app__=p,p._instance=f.component,Ah(p,Ho),yr(f.component)||f.component.proxy}},unmount(){i?(s(null,p._container),p._instance=null,_h(p),delete p._container.__vue_app__):V("Cannot unmount an app that is not mounted.")},provide(u,y){return u in r.provides&&V(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=y,p},runWithContext(u){jo=p;try{return u()}finally{jo=null}}};return p}}let jo=null;function Es(s,n){if(!Xe)V("provide() can only be used inside setup().");else{let t=Xe.provides;const l=Xe.parent&&Xe.parent.provides;l===t&&(t=Xe.provides=Object.create(l)),t[s]=n}}function P(s,n,t=!1){const l=Xe||Qe;if(l||jo){const o=l?l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:jo._context.provides;if(o&&s in o)return o[s];if(arguments.length>1)return t&&fe(n)?n.call(l&&l.proxy):n;V(`injection "${String(s)}" not found.`)}else V("inject() can only be used inside setup() or functional components.")}function om(s,n,t,l=!1){const o={},r={};xo(r,ur,1),s.propsDefaults=Object.create(null),Ay(s,n,o,r);for(const c in s.propsOptions[0])c in o||(o[c]=void 0);vy(n||{},o,s),t?s.props=l?o:Kf(o):s.type.props?s.props=o:s.props=r,s.attrs=r}function rm(s){for(;s;){if(s.type.__hmrId)return!0;s=s.parent}}function am(s,n,t,l){const{props:o,attrs:r,vnode:{patchFlag:c}}=s,i=Ae(o),[p]=s.propsOptions;let u=!1;if(!rm(s)&&(l||c>0)&&!(c&16)){if(c&8){const y=s.vnode.dynamicProps;for(let d=0;d<y.length;d++){let f=y[d];if(rr(s.emitsOptions,f))continue;const h=n[f];if(p)if(ke(r,f))h!==r[f]&&(r[f]=h,u=!0);else{const m=ln(f);o[m]=ia(p,i,m,h,s,!1)}else h!==r[f]&&(r[f]=h,u=!0)}}}else{Ay(s,n,o,r)&&(u=!0);let y;for(const d in i)(!n||!ke(n,d)&&((y=_n(d))===d||!ke(n,y)))&&(p?t&&(t[d]!==void 0||t[y]!==void 0)&&(o[d]=ia(p,i,d,void 0,s,!0)):delete o[d]);if(r!==i)for(const d in r)(!n||!ke(n,d))&&(delete r[d],u=!0)}u&&on(s,"set","$attrs"),vy(n||{},o,s)}function Ay(s,n,t,l){const[o,r]=s.propsOptions;let c=!1,i;if(n)for(let p in n){if(Bo(p))continue;const u=n[p];let y;o&&ke(o,y=ln(p))?!r||!r.includes(y)?t[y]=u:(i||(i={}))[y]=u:rr(s.emitsOptions,p)||(!(p in l)||u!==l[p])&&(l[p]=u,c=!0)}if(r){const p=Ae(t),u=i||Re;for(let y=0;y<r.length;y++){const d=r[y];t[d]=ia(o,p,d,u[d],s,!ke(u,d))}}return c}function ia(s,n,t,l,o,r){const c=s[t];if(c!=null){const i=ke(c,"default");if(i&&l===void 0){const p=c.default;if(c.type!==Function&&!c.skipFactory&&fe(p)){const{propsDefaults:u}=o;t in u?l=u[t]:(zt(o),l=u[t]=p.call(null,n),mt())}else l=p}c[0]&&(r&&!i?l=!1:c[1]&&(l===""||l===_n(t))&&(l=!0))}return l}function _y(s,n,t=!1){const l=n.propsCache,o=l.get(s);if(o)return o;const r=s.props,c={},i=[];let p=!1;if(!fe(s)){const y=d=>{p=!0;const[f,h]=_y(d,n,!0);Ve(c,f),h&&i.push(...h)};!t&&n.mixins.length&&n.mixins.forEach(y),s.extends&&y(s.extends),s.mixins&&s.mixins.forEach(y)}if(!r&&!p)return Ie(s)&&l.set(s,It),It;if(ie(r))for(let y=0;y<r.length;y++){Ue(r[y])||V("props must be strings when using array syntax.",r[y]);const d=ln(r[y]);gi(d)&&(c[d]=Re)}else if(r){Ie(r)||V("invalid props options",r);for(const y in r){const d=ln(y);if(gi(d)){const f=r[y],h=c[d]=ie(f)||fe(f)?{type:f}:Ve({},f);if(h){const m=Di(Boolean,h.type),g=Di(String,h.type);h[0]=m>-1,h[1]=g<0||m<g,(m>-1||ke(h,"default"))&&i.push(d)}}}}const u=[c,i];return Ie(s)&&l.set(s,u),u}function gi(s){return s[0]!=="$"?!0:(V(`Invalid prop name: "${s}" is a reserved property.`),!1)}function pa(s){const n=s&&s.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:s===null?"null":""}function Ci(s,n){return pa(s)===pa(n)}function Di(s,n){return ie(n)?n.findIndex(t=>Ci(t,s)):fe(n)&&Ci(n,s)?0:-1}function vy(s,n,t){const l=Ae(n),o=t.propsOptions[0];for(const r in o){let c=o[r];c!=null&&cm(r,l[r],c,!ke(s,r)&&!ke(s,_n(r)))}}function cm(s,n,t,l){const{type:o,required:r,validator:c,skipCheck:i}=t;if(r&&l){V('Missing required prop: "'+s+'"');return}if(!(n==null&&!r)){if(o!=null&&o!==!0&&!i){let p=!1;const u=ie(o)?o:[o],y=[];for(let d=0;d<u.length&&!p;d++){const{valid:f,expectedType:h}=pm(n,u[d]);y.push(h||""),p=f}if(!p){V(um(s,n,y));return}}c&&!c(n)&&V('Invalid prop: custom validator check failed for prop "'+s+'".')}}const im=Vn("String,Number,Boolean,Function,Symbol,BigInt");function pm(s,n){let t;const l=pa(n);if(im(l)){const o=typeof s;t=o===l.toLowerCase(),!t&&o==="object"&&(t=s instanceof n)}else l==="Object"?t=Ie(s):l==="Array"?t=ie(s):l==="null"?t=s===null:t=s instanceof n;return{valid:t,expectedType:l}}function um(s,n,t){let l=`Invalid prop: type check failed for prop "${s}". Expected ${t.map(_t).join(" | ")}`;const o=t[0],r=sc(n),c=bi(n,o),i=bi(n,r);return t.length===1&&wi(o)&&!ym(o,r)&&(l+=` with value ${c}`),l+=`, got ${r} `,wi(r)&&(l+=`with value ${i}.`),l}function bi(s,n){return n==="String"?`"${s}"`:n==="Number"?`${Number(s)}`:`${s}`}function wi(s){return["string","number","boolean"].some(t=>s.toLowerCase()===t)}function ym(...s){return s.some(n=>n.toLowerCase()==="boolean")}const gy=s=>s[0]==="_"||s==="$stable",_c=s=>ie(s)?s.map(Us):[Us(s)],dm=(s,n,t)=>{if(n._n)return n;const l=w((...o)=>(Xe&&V(`Slot "${s}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),_c(n(...o))),t);return l._c=!1,l},Cy=(s,n,t)=>{const l=s._ctx;for(const o in s){if(gy(o))continue;const r=s[o];if(fe(r))n[o]=dm(o,r,l);else if(r!=null){V(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const c=_c(r);n[o]=()=>c}}},Dy=(s,n)=>{mc(s.vnode)||V("Non-function value encountered for default slot. Prefer function slots for better performance.");const t=_c(n);s.slots.default=()=>t},fm=(s,n)=>{if(s.vnode.shapeFlag&32){const t=n._;t?(s.slots=Ae(n),xo(n,"_",t)):Cy(n,s.slots={})}else s.slots={},n&&Dy(s,n);xo(s.slots,ur,1)},hm=(s,n,t)=>{const{vnode:l,slots:o}=s;let r=!0,c=Re;if(l.shapeFlag&32){const i=n._;i?Sn?(Ve(o,n),on(s,"set","$slots")):t&&i===1?r=!1:(Ve(o,n),!t&&i===1&&delete o._):(r=!n.$stable,Cy(n,o)),c=n}else n&&(Dy(s,n),c={default:1});if(r)for(const i in o)!gy(i)&&!(i in c)&&delete o[i]};function ua(s,n,t,l,o=!1){if(ie(s)){s.forEach((f,h)=>ua(f,n&&(ie(n)?n[h]:n),t,l,o));return}if(Pt(l)&&!o)return;const r=l.shapeFlag&4?yr(l.component)||l.component.proxy:l.el,c=o?null:r,{i,r:p}=s;if(!i){V("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=n&&n.r,y=i.refs===Re?i.refs={}:i.refs,d=i.setupState;if(u!=null&&u!==p&&(Ue(u)?(y[u]=null,ke(d,u)&&(d[u]=null)):Oe(u)&&(u.value=null)),fe(p))Bn(p,i,12,[c,y]);else{const f=Ue(p),h=Oe(p);if(f||h){const m=()=>{if(s.f){const g=f?ke(d,p)?d[p]:y[p]:p.value;o?ie(g)&&Xa(g,r):ie(g)?g.includes(r)||g.push(r):f?(y[p]=[r],ke(d,p)&&(d[p]=y[p])):(p.value=[r],s.k&&(y[s.k]=p.value))}else f?(y[p]=c,ke(d,p)&&(d[p]=c)):h?(p.value=c,s.k&&(y[s.k]=c)):V("Invalid template ref type:",p,`(${typeof p})`)};c?(m.id=-1,ns(m,t)):m()}else V("Invalid template ref type:",p,`(${typeof p})`)}}let qt,$n;function un(s,n){s.appContext.config.performance&&zo()&&$n.mark(`vue-${n}-${s.uid}`),Ch(s,n,zo()?$n.now():Date.now())}function yn(s,n){if(s.appContext.config.performance&&zo()){const t=`vue-${n}-${s.uid}`,l=t+":end";$n.mark(l),$n.measure(`<${dr(s,s.type)}> ${n}`,t,l),$n.clearMarks(t),$n.clearMarks(l)}Dh(s,n,zo()?$n.now():Date.now())}function zo(){return qt!==void 0||(typeof window<"u"&&window.performance?(qt=!0,$n=window.performance):qt=!1),qt}function mm(){const s=[];if(s.length){const n=s.length>1;console.warn(`Feature flag${n?"s":""} ${s.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const ns=Th;function Bm(s){return Am(s)}function Am(s,n){mm();const t=$o();t.__VUE__=!0,ey(t.__VUE_DEVTOOLS_GLOBAL_HOOK__,t);const{insert:l,remove:o,patchProp:r,createElement:c,createText:i,createComment:p,setText:u,setElementText:y,parentNode:d,nextSibling:f,setScopeId:h=vs,insertStaticContent:m}=s,g=(B,_,F,j=null,M=null,G=null,X=!1,q=null,K=Sn?!1:!!_.dynamicChildren)=>{if(B===_)return;B&&!nt(B,_)&&(j=J(B),Bs(B,M,G,!0),B=null),_.patchFlag===-2&&(K=!1,_.dynamicChildren=null);const{type:W,ref:ce,shapeFlag:ae}=_;switch(W){case Wl:C(B,_,F,j);break;case fs:D(B,_,F,j);break;case vo:B==null?b(_,F,j,X):v(B,_,F,X);break;case Te:_e(B,_,F,j,M,G,X,q,K);break;default:ae&1?S(B,_,F,j,M,G,X,q,K):ae&6?ge(B,_,F,j,M,G,X,q,K):ae&64||ae&128?W.process(B,_,F,j,M,G,X,q,K,ne):V("Invalid VNode type:",W,`(${typeof W})`)}ce!=null&&M&&ua(ce,B&&B.ref,G,_||B,!_)},C=(B,_,F,j)=>{if(B==null)l(_.el=i(_.children),F,j);else{const M=_.el=B.el;_.children!==B.children&&u(M,_.children)}},D=(B,_,F,j)=>{B==null?l(_.el=p(_.children||""),F,j):_.el=B.el},b=(B,_,F,j)=>{[B.el,B.anchor]=m(B.children,_,F,j,B.el,B.anchor)},v=(B,_,F,j)=>{if(_.children!==B.children){const M=f(B.anchor);$(B),[_.el,_.anchor]=m(_.children,F,M,j)}else _.el=B.el,_.anchor=B.anchor},x=({el:B,anchor:_},F,j)=>{let M;for(;B&&B!==_;)M=f(B),l(B,F,j),B=M;l(_,F,j)},$=({el:B,anchor:_})=>{let F;for(;B&&B!==_;)F=f(B),o(B),B=F;o(_)},S=(B,_,F,j,M,G,X,q,K)=>{X=X||_.type==="svg",B==null?N(_,F,j,M,G,X,q,K):le(B,_,M,G,X,q,K)},N=(B,_,F,j,M,G,X,q)=>{let K,W;const{type:ce,props:ae,shapeFlag:ue,transition:Be,dirs:xe}=B;if(K=B.el=c(B.type,G,ae&&ae.is,ae),ue&8?y(K,B.children):ue&16&&U(B.children,K,null,j,M,G&&ce!=="foreignObject",X,q),xe&&Kn(B,null,j,"created"),L(K,B,B.scopeId,X,j),ae){for(const ze in ae)ze!=="value"&&!Bo(ze)&&r(K,ze,null,ae[ze],G,B.children,j,M,I);"value"in ae&&r(K,"value",null,ae.value),(W=ae.onVnodeBeforeMount)&&Is(W,j,B)}Object.defineProperty(K,"__vnode",{value:B,enumerable:!1}),Object.defineProperty(K,"__vueParentComponent",{value:j,enumerable:!1}),xe&&Kn(B,null,j,"beforeMount");const Ne=(!M||M&&!M.pendingBranch)&&Be&&!Be.persisted;Ne&&Be.beforeEnter(K),l(K,_,F),((W=ae&&ae.onVnodeMounted)||Ne||xe)&&ns(()=>{W&&Is(W,j,B),Ne&&Be.enter(K),xe&&Kn(B,null,j,"mounted")},M)},L=(B,_,F,j,M)=>{if(F&&h(B,F),j)for(let G=0;G<j.length;G++)h(B,j[G]);if(M){let G=M.subTree;if(G.patchFlag>0&&G.patchFlag&2048&&(G=ly(G.children)||G),_===G){const X=M.vnode;L(B,X,X.scopeId,X.slotScopeIds,M.parent)}}},U=(B,_,F,j,M,G,X,q,K=0)=>{for(let W=K;W<B.length;W++){const ce=B[W]=q?kn(B[W]):Us(B[W]);g(null,ce,_,F,j,M,G,X,q)}},le=(B,_,F,j,M,G,X)=>{const q=_.el=B.el;let{patchFlag:K,dynamicChildren:W,dirs:ce}=_;K|=B.patchFlag&16;const ae=B.props||Re,ue=_.props||Re;let Be;F&&Yn(F,!1),(Be=ue.onVnodeBeforeUpdate)&&Is(Be,F,_,B),ce&&Kn(_,B,F,"beforeUpdate"),F&&Yn(F,!0),Sn&&(K=0,X=!1,W=null);const xe=M&&_.type!=="foreignObject";if(W?(ye(B.dynamicChildren,W,q,F,j,xe,G),Ro(B,_)):X||Ee(B,_,q,null,F,j,xe,G,!1),K>0){if(K&16)Z(q,_,ae,ue,F,j,M);else if(K&2&&ae.class!==ue.class&&r(q,"class",null,ue.class,M),K&4&&r(q,"style",ae.style,ue.style,M),K&8){const Ne=_.dynamicProps;for(let ze=0;ze<Ne.length;ze++){const Ke=Ne[ze],Ns=ae[Ke],kt=ue[Ke];(kt!==Ns||Ke==="value")&&r(q,Ke,Ns,kt,M,B.children,F,j,I)}}K&1&&B.children!==_.children&&y(q,_.children)}else!X&&W==null&&Z(q,_,ae,ue,F,j,M);((Be=ue.onVnodeUpdated)||ce)&&ns(()=>{Be&&Is(Be,F,_,B),ce&&Kn(_,B,F,"updated")},j)},ye=(B,_,F,j,M,G,X)=>{for(let q=0;q<_.length;q++){const K=B[q],W=_[q],ce=K.el&&(K.type===Te||!nt(K,W)||K.shapeFlag&70)?d(K.el):F;g(K,W,ce,null,j,M,G,X,!0)}},Z=(B,_,F,j,M,G,X)=>{if(F!==j){if(F!==Re)for(const q in F)!Bo(q)&&!(q in j)&&r(B,q,F[q],null,X,_.children,M,G,I);for(const q in j){if(Bo(q))continue;const K=j[q],W=F[q];K!==W&&q!=="value"&&r(B,q,W,K,X,_.children,M,G,I)}"value"in j&&r(B,"value",F.value,j.value)}},_e=(B,_,F,j,M,G,X,q,K)=>{const W=_.el=B?B.el:i(""),ce=_.anchor=B?B.anchor:i("");let{patchFlag:ae,dynamicChildren:ue,slotScopeIds:Be}=_;(Sn||ae&2048)&&(ae=0,K=!1,ue=null),Be&&(q=q?q.concat(Be):Be),B==null?(l(W,F,j),l(ce,F,j),U(_.children,F,ce,M,G,X,q,K)):ae>0&&ae&64&&ue&&B.dynamicChildren?(ye(B.dynamicChildren,ue,F,M,G,X,q),Ro(B,_)):Ee(B,_,F,ce,M,G,X,q,K)},ge=(B,_,F,j,M,G,X,q,K)=>{_.slotScopeIds=q,B==null?_.shapeFlag&512?M.ctx.activate(_,F,j,X,K):De(_,F,j,M,G,X,K):Me(B,_,K)},De=(B,_,F,j,M,G,X)=>{const q=B.component=$m(B,j,M);if(q.type.__hmrId&&fh(q),Ao(B),un(q,"mount"),mc(B)&&(q.ctx.renderer=ne),un(q,"init"),Tm(q),yn(q,"init"),q.asyncDep){if(M&&M.registerDep(q,se),!B.el){const K=q.subTree=k(fs);D(null,K,_,F)}return}se(q,B,_,F,M,G,X),_o(),yn(q,"mount")},Me=(B,_,F)=>{const j=_.component=B.component;if($h(B,_,F))if(j.asyncDep&&!j.asyncResolved){Ao(_),pe(j,_,F),_o();return}else j.next=_,yh(j.update),j.update();else _.el=B.el,j.vnode=_},se=(B,_,F,j,M,G,X)=>{const q=()=>{if(B.isMounted){let{next:ce,bu:ae,u:ue,parent:Be,vnode:xe}=B,Ne=ce,ze;Ao(ce||B.vnode),Yn(B,!1),ce?(ce.el=xe.el,pe(B,ce,X)):ce=xe,ae&&st(ae),(ze=ce.props&&ce.props.onVnodeBeforeUpdate)&&Is(ze,Be,ce,xe),Yn(B,!0),un(B,"render");const Ke=vr(B);yn(B,"render");const Ns=B.subTree;B.subTree=Ke,un(B,"patch"),g(Ns,Ke,d(Ns.el),J(Ns),B,M,G),yn(B,"patch"),ce.el=Ke.el,Ne===null&&Fh(B,Ke.el),ue&&ns(ue,M),(ze=ce.props&&ce.props.onVnodeUpdated)&&ns(()=>Is(ze,Be,ce,xe),M),sy(B),_o()}else{let ce;const{el:ae,props:ue}=_,{bm:Be,m:xe,parent:Ne}=B,ze=Pt(_);if(Yn(B,!1),Be&&st(Be),!ze&&(ce=ue&&ue.onVnodeBeforeMount)&&Is(ce,Ne,_),Yn(B,!0),ae&&je){const Ke=()=>{un(B,"render"),B.subTree=vr(B),yn(B,"render"),un(B,"hydrate"),je(ae,B.subTree,B,M,null),yn(B,"hydrate")};ze?_.type.__asyncLoader().then(()=>!B.isUnmounted&&Ke()):Ke()}else{un(B,"render");const Ke=B.subTree=vr(B);yn(B,"render"),un(B,"patch"),g(null,Ke,F,j,B,M,G),yn(B,"patch"),_.el=Ke.el}if(xe&&ns(xe,M),!ze&&(ce=ue&&ue.onVnodeMounted)){const Ke=_;ns(()=>Is(ce,Ne,Ke),M)}(_.shapeFlag&256||Ne&&Pt(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&B.a&&ns(B.a,M),B.isMounted=!0,na(B),_=F=j=null}},K=B.effect=new oc(q,()=>or(W),B.scope),W=B.update=()=>K.run();W.id=B.uid,Yn(B,!0),K.onTrack=B.rtc?ce=>st(B.rtc,ce):void 0,K.onTrigger=B.rtg?ce=>st(B.rtg,ce):void 0,W.ownerInstance=B,W()},pe=(B,_,F)=>{_.component=B;const j=B.vnode.props;B.vnode=_,B.next=null,am(B,_.props,j,F),hm(B,_.children,F),gt(),yi(),Ct()},Ee=(B,_,F,j,M,G,X,q,K=!1)=>{const W=B&&B.children,ce=B?B.shapeFlag:0,ae=_.children,{patchFlag:ue,shapeFlag:Be}=_;if(ue>0){if(ue&128){Ts(W,ae,F,j,M,G,X,q,K);return}else if(ue&256){Pe(W,ae,F,j,M,G,X,q,K);return}}Be&8?(ce&16&&I(W,M,G),ae!==W&&y(F,ae)):ce&16?Be&16?Ts(W,ae,F,j,M,G,X,q,K):I(W,M,G,!0):(ce&8&&y(F,""),Be&16&&U(ae,F,j,M,G,X,q,K))},Pe=(B,_,F,j,M,G,X,q,K)=>{B=B||It,_=_||It;const W=B.length,ce=_.length,ae=Math.min(W,ce);let ue;for(ue=0;ue<ae;ue++){const Be=_[ue]=K?kn(_[ue]):Us(_[ue]);g(B[ue],Be,F,null,M,G,X,q,K)}W>ce?I(B,M,G,!0,!1,ae):U(_,F,j,M,G,X,q,K,ae)},Ts=(B,_,F,j,M,G,X,q,K)=>{let W=0;const ce=_.length;let ae=B.length-1,ue=ce-1;for(;W<=ae&&W<=ue;){const Be=B[W],xe=_[W]=K?kn(_[W]):Us(_[W]);if(nt(Be,xe))g(Be,xe,F,null,M,G,X,q,K);else break;W++}for(;W<=ae&&W<=ue;){const Be=B[ae],xe=_[ue]=K?kn(_[ue]):Us(_[ue]);if(nt(Be,xe))g(Be,xe,F,null,M,G,X,q,K);else break;ae--,ue--}if(W>ae){if(W<=ue){const Be=ue+1,xe=Be<ce?_[Be].el:j;for(;W<=ue;)g(null,_[W]=K?kn(_[W]):Us(_[W]),F,xe,M,G,X,q,K),W++}}else if(W>ue)for(;W<=ae;)Bs(B[W],M,G,!0),W++;else{const Be=W,xe=W,Ne=new Map;for(W=xe;W<=ue;W++){const is=_[W]=K?kn(_[W]):Us(_[W]);is.key!=null&&(Ne.has(is.key)&&V("Duplicate keys found during update:",JSON.stringify(is.key),"Make sure keys are unique."),Ne.set(is.key,W))}let ze,Ke=0;const Ns=ue-xe+1;let kt=!1,si=0;const Ut=new Array(Ns);for(W=0;W<Ns;W++)Ut[W]=0;for(W=Be;W<=ae;W++){const is=B[W];if(Ke>=Ns){Bs(is,M,G,!0);continue}let Js;if(is.key!=null)Js=Ne.get(is.key);else for(ze=xe;ze<=ue;ze++)if(Ut[ze-xe]===0&&nt(is,_[ze])){Js=ze;break}Js===void 0?Bs(is,M,G,!0):(Ut[Js-xe]=W+1,Js>=si?si=Js:kt=!0,g(is,_[Js],F,null,M,G,X,q,K),Ke++)}const ni=kt?_m(Ut):It;for(ze=ni.length-1,W=Ns-1;W>=0;W--){const is=xe+W,Js=_[is],ti=is+1<ce?_[is+1].el:j;Ut[W]===0?g(null,Js,F,ti,M,G,X,q,K):kt&&(ze<0||W!==ni[ze]?ts(Js,F,ti,2):ze--)}}},ts=(B,_,F,j,M=null)=>{const{el:G,type:X,transition:q,children:K,shapeFlag:W}=B;if(W&6){ts(B.component.subTree,_,F,j);return}if(W&128){B.suspense.move(_,F,j);return}if(W&64){X.move(B,_,F,ne);return}if(X===Te){l(G,_,F);for(let ae=0;ae<K.length;ae++)ts(K[ae],_,F,j);l(B.anchor,_,F);return}if(X===vo){x(B,_,F);return}if(j!==2&&W&1&&q)if(j===0)q.beforeEnter(G),l(G,_,F),ns(()=>q.enter(G),M);else{const{leave:ae,delayLeave:ue,afterLeave:Be}=q,xe=()=>l(G,_,F),Ne=()=>{ae(G,()=>{xe(),Be&&Be()})};ue?ue(G,xe,Ne):Ne()}else l(G,_,F)},Bs=(B,_,F,j=!1,M=!1)=>{const{type:G,props:X,ref:q,children:K,dynamicChildren:W,shapeFlag:ce,patchFlag:ae,dirs:ue}=B;if(q!=null&&ua(q,null,F,B,!0),ce&256){_.ctx.deactivate(B);return}const Be=ce&1&&ue,xe=!Pt(B);let Ne;if(xe&&(Ne=X&&X.onVnodeBeforeUnmount)&&Is(Ne,_,B),ce&6)Ss(B.component,F,j);else{if(ce&128){B.suspense.unmount(F,j);return}Be&&Kn(B,null,_,"beforeUnmount"),ce&64?B.type.remove(B,_,F,M,ne,j):W&&(G!==Te||ae>0&&ae&64)?I(W,_,F,!1,!0):(G===Te&&ae&384||!M&&ce&16)&&I(K,_,F),j&&Zs(B)}(xe&&(Ne=X&&X.onVnodeUnmounted)||Be)&&ns(()=>{Ne&&Is(Ne,_,B),Be&&Kn(B,null,_,"unmounted")},F)},Zs=B=>{const{type:_,el:F,anchor:j,transition:M}=B;if(_===Te){B.patchFlag>0&&B.patchFlag&2048&&M&&!M.persisted?B.children.forEach(X=>{X.type===fs?o(X.el):Zs(X)}):Gn(F,j);return}if(_===vo){$(B);return}const G=()=>{o(F),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(B.shapeFlag&1&&M&&!M.persisted){const{leave:X,delayLeave:q}=M,K=()=>X(F,G);q?q(B.el,G,K):K()}else G()},Gn=(B,_)=>{let F;for(;B!==_;)F=f(B),o(B),B=F;o(_)},Ss=(B,_,F)=>{B.type.__hmrId&&hh(B);const{bum:j,scope:M,update:G,subTree:X,um:q}=B;j&&st(j),M.stop(),G&&(G.active=!1,Bs(X,B,_,F)),q&&ns(q,_),ns(()=>{B.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&B.asyncDep&&!B.asyncResolved&&B.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),gh(B)},I=(B,_,F,j=!1,M=!1,G=0)=>{for(let X=G;X<B.length;X++)Bs(B[X],_,F,j,M)},J=B=>B.shapeFlag&6?J(B.component.subTree):B.shapeFlag&128?B.suspense.next():f(B.anchor||B.el),Q=(B,_,F)=>{B==null?_._vnode&&Bs(_._vnode,null,null,!0):g(_._vnode||null,B,_,null,null,null,F),yi(),Ju(),_._vnode=B},ne={p:g,um:Bs,m:ts,r:Zs,mt:De,mc:U,pc:Ee,pbc:ye,n:J,o:s};let we,je;return n&&([we,je]=n(ne)),{render:Q,hydrate:we,createApp:lm(Q,we)}}function Yn({effect:s,update:n},t){s.allowRecurse=n.allowRecurse=t}function Ro(s,n,t=!1){const l=s.children,o=n.children;if(ie(l)&&ie(o))for(let r=0;r<l.length;r++){const c=l[r];let i=o[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[r]=kn(o[r]),i.el=c.el),t||Ro(c,i)),i.type===Wl&&(i.el=c.el),i.type===fs&&!i.el&&(i.el=c.el)}}function _m(s){const n=s.slice(),t=[0];let l,o,r,c,i;const p=s.length;for(l=0;l<p;l++){const u=s[l];if(u!==0){if(o=t[t.length-1],s[o]<u){n[l]=o,t.push(l);continue}for(r=0,c=t.length-1;r<c;)i=r+c>>1,s[t[i]]<u?r=i+1:c=i;u<s[t[r]]&&(r>0&&(n[l]=t[r-1]),t[r]=l)}}for(r=t.length,c=t[r-1];r-- >0;)t[r]=c,c=n[c];return t}const vm=s=>s.__isTeleport,Mt=s=>s&&(s.disabled||s.disabled===""),Ei=s=>typeof SVGElement<"u"&&s instanceof SVGElement,ya=(s,n)=>{const t=s&&s.to;if(Ue(t))if(n){const l=n(t);return l||V(`Failed to locate Teleport target with selector "${t}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),l}else return V("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!t&&!Mt(s)&&V(`Invalid Teleport target: ${t}`),t},gm={__isTeleport:!0,process(s,n,t,l,o,r,c,i,p,u){const{mc:y,pc:d,pbc:f,o:{insert:h,querySelector:m,createText:g,createComment:C}}=u,D=Mt(n.props);let{shapeFlag:b,children:v,dynamicChildren:x}=n;if(Sn&&(p=!1,x=null),s==null){const $=n.el=C("teleport start"),S=n.anchor=C("teleport end");h($,t,l),h(S,t,l);const N=n.target=ya(n.props,m),L=n.targetAnchor=g("");N?(h(L,N),c=c||Ei(N)):D||V("Invalid Teleport target on mount:",N,`(${typeof N})`);const U=(le,ye)=>{b&16&&y(v,le,ye,o,r,c,i,p)};D?U(t,S):N&&U(N,L)}else{n.el=s.el;const $=n.anchor=s.anchor,S=n.target=s.target,N=n.targetAnchor=s.targetAnchor,L=Mt(s.props),U=L?t:S,le=L?$:N;if(c=c||Ei(S),x?(f(s.dynamicChildren,x,U,o,r,c,i),Ro(s,n,!0)):p||d(s,n,U,le,o,r,c,i,!1),D)L||lo(n,t,$,u,1);else if((n.props&&n.props.to)!==(s.props&&s.props.to)){const ye=n.target=ya(n.props,m);ye?lo(n,ye,null,u,0):V("Invalid Teleport target on update:",S,`(${typeof S})`)}else L&&lo(n,S,N,u,1)}by(n)},remove(s,n,t,l,{um:o,o:{remove:r}},c){const{shapeFlag:i,children:p,anchor:u,targetAnchor:y,target:d,props:f}=s;if(d&&r(y),(c||!Mt(f))&&(r(u),i&16))for(let h=0;h<p.length;h++){const m=p[h];o(m,n,t,!0,!!m.dynamicChildren)}},move:lo,hydrate:Cm};function lo(s,n,t,{o:{insert:l},m:o},r=2){r===0&&l(s.targetAnchor,n,t);const{el:c,anchor:i,shapeFlag:p,children:u,props:y}=s,d=r===2;if(d&&l(c,n,t),(!d||Mt(y))&&p&16)for(let f=0;f<u.length;f++)o(u[f],n,t,2);d&&l(i,n,t)}function Cm(s,n,t,l,o,r,{o:{nextSibling:c,parentNode:i,querySelector:p}},u){const y=n.target=ya(n.props,p);if(y){const d=y._lpa||y.firstChild;if(n.shapeFlag&16)if(Mt(n.props))n.anchor=u(c(s),n,i(s),t,l,o,r),n.targetAnchor=d;else{n.anchor=c(s);let f=d;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,y._lpa=n.targetAnchor&&c(n.targetAnchor);break}u(d,n,y,t,l,o,r)}by(n)}return n.anchor&&c(n.anchor)}const Dm=gm;function by(s){const n=s.ctx;if(n&&n.ut){let t=s.children[0].el;for(;t!==s.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const Te=Symbol.for("v-fgt"),Wl=Symbol.for("v-txt"),fs=Symbol.for("v-cmt"),vo=Symbol.for("v-stc"),yl=[];let Gs=null;function A(s=!1){yl.push(Gs=s?null:[])}function bm(){yl.pop(),Gs=yl[yl.length-1]||null}let kl=1;function ki(s){kl+=s}function wy(s){return s.dynamicChildren=kl>0?Gs||It:null,bm(),kl>0&&Gs&&Gs.push(s),s}function E(s,n,t,l,o,r){return wy(e(s,n,t,l,o,r,!0))}function z(s,n,t,l,o){return wy(k(s,n,t,l,o,!0))}function Hn(s){return s?s.__v_isVNode===!0:!1}function nt(s,n){return n.shapeFlag&6&&St.has(n.type)?(s.shapeFlag&=-257,n.shapeFlag&=-513,!1):s.type===n.type&&s.key===n.key}const wm=(...s)=>Em(...s),ur="__vInternal",Ey=({key:s})=>s??null,go=({ref:s,ref_key:n,ref_for:t})=>(typeof s=="number"&&(s=""+s),s!=null?Ue(s)||Oe(s)||fe(s)?{i:Qe,r:s,k:n,f:!!t}:s:null);function e(s,n=null,t=null,l=0,o=null,r=s===Te?0:1,c=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:s,props:n,key:n&&Ey(n),ref:n&&go(n),scopeId:ar,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:l,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Qe};return i?(vc(p,t),r&128&&s.normalize(p)):t&&(p.shapeFlag|=Ue(t)?8:16),p.key!==p.key&&V("VNode created with invalid key (NaN). VNode type:",p.type),kl>0&&!c&&Gs&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&Gs.push(p),p}const k=wm;function Em(s,n=null,t=null,l=0,o=null,r=!1){if((!s||s===Uh)&&(s||V(`Invalid vnode type when creating vnode: ${s}.`),s=fs),Hn(s)){const i=an(s,n,!0);return t&&vc(i,t),kl>0&&!r&&Gs&&(i.shapeFlag&6?Gs[Gs.indexOf(s)]=i:Gs.push(i)),i.patchFlag|=-2,i}if(Ty(s)&&(s=s.__vccOpts),n){n=ee(n);let{class:i,style:p}=n;i&&!Ue(i)&&(n.class=We(i)),Ie(p)&&(Oo(p)&&!ie(p)&&(p=Ve({},p)),n.style=es(p))}const c=Ue(s)?1:oy(s)?128:vm(s)?64:Ie(s)?4:fe(s)?2:0;return c&4&&Oo(s)&&(s=Ae(s),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,s)),e(s,n,t,l,o,c,r,!0)}function ee(s){return s?Oo(s)||ur in s?Ve({},s):s:null}function an(s,n,t=!1){const{props:l,ref:o,patchFlag:r,children:c}=s,i=n?oe(l||{},n):l;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:i,key:i&&Ey(i),ref:n&&n.ref?t&&o?ie(o)?o.concat(go(n)):[o,go(n)]:go(n):o,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:r===-1&&ie(c)?c.map(ky):c,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:n&&s.type!==Te?r===-1?16:r|16:r,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&an(s.ssContent),ssFallback:s.ssFallback&&an(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function ky(s){const n=an(s);return ie(s.children)&&(n.children=s.children.map(ky)),n}function a(s=" ",n=0){return k(Wl,null,s,n)}function he(s="",n=!1){return n?(A(),z(fs,null,s)):k(fs,null,s)}function Us(s){return s==null||typeof s=="boolean"?k(fs):ie(s)?k(Te,null,s.slice()):typeof s=="object"?kn(s):k(Wl,null,String(s))}function kn(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:an(s)}function vc(s,n){let t=0;const{shapeFlag:l}=s;if(n==null)n=null;else if(ie(n))t=16;else if(typeof n=="object")if(l&65){const o=n.default;o&&(o._c&&(o._d=!1),vc(s,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!(ur in n)?n._ctx=Qe:o===3&&Qe&&(Qe.slots._===1?n._=1:(n._=2,s.patchFlag|=1024))}else fe(n)?(n={default:n,_ctx:Qe},t=32):(n=String(n),l&64?(t=16,n=[a(n)]):t=8);s.children=n,s.shapeFlag|=t}function oe(...s){const n={};for(let t=0;t<s.length;t++){const l=s[t];for(const o in l)if(o==="class")n.class!==l.class&&(n.class=We([n.class,l.class]));else if(o==="style")n.style=es([n.style,l.style]);else if(Rl(o)){const r=n[o],c=l[o];c&&r!==c&&!(ie(r)&&r.includes(c))&&(n[o]=r?[].concat(r,c):c)}else o!==""&&(n[o]=l[o])}return n}function Is(s,n,t,l=null){Ms(s,n,7,[t,l])}const km=By();let xm=0;function $m(s,n,t){const l=s.type,o=(n?n.appContext:s.appContext)||km,r={uid:xm++,vnode:s,type:l,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new $u(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_y(l,o),emitsOptions:ty(l,o),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:l.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=qh(r),r.root=n?n.root:r,r.emit=wh.bind(null,r),s.ce&&s.ce(r),r}let Xe=null;const Fs=()=>Xe||Qe;let gc,xt,xi="__VUE_INSTANCE_SETTERS__";(xt=$o()[xi])||(xt=$o()[xi]=[]),xt.push(s=>Xe=s),gc=s=>{xt.length>1?xt.forEach(n=>n(s)):xt[0](s)};const zt=s=>{gc(s),s.scope.on()},mt=()=>{Xe&&Xe.scope.off(),gc(null)},Fm=Vn("slot,component");function da(s,n){const t=n.isNativeTag||Cu;(Fm(s)||t(s))&&V("Do not use built-in or reserved HTML elements as component id: "+s)}function xy(s){return s.vnode.shapeFlag&4}let xl=!1;function Tm(s,n=!1){xl=n;const{props:t,children:l}=s.vnode,o=xy(s);om(s,t,o,n),fm(s,l);const r=o?Sm(s,n):void 0;return xl=!1,r}function Sm(s,n){var t;const l=s.type;{if(l.name&&da(l.name,s.appContext.config),l.components){const r=Object.keys(l.components);for(let c=0;c<r.length;c++)da(r[c],s.appContext.config)}if(l.directives){const r=Object.keys(l.directives);for(let c=0;c<r.length;c++)ay(r[c])}l.compilerOptions&&Om()&&V('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}s.accessCache=Object.create(null),s.proxy=tr(new Proxy(s.ctx,hy)),Gh(s);const{setup:o}=l;if(o){const r=s.setupContext=o.length>1?Fy(s):null;zt(s),gt();const c=Bn(o,s,0,[ol(s.props),r]);if(Ct(),mt(),ec(c)){if(c.then(mt,mt),n)return c.then(i=>{$i(s,i,n)}).catch(i=>{lr(i,s,0)});if(s.asyncDep=c,!s.suspense){const i=(t=l.name)!=null?t:"Anonymous";V(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else $i(s,c,n)}else $y(s,n)}function $i(s,n,t){fe(n)?s.type.__ssrInlineRender?s.ssrRender=n:s.render=n:Ie(n)?(Hn(n)&&V("setup() should not return VNodes directly - return a render function instead."),s.devtoolsRawSetupState=n,s.setupState=Uu(n),Kh(s)):n!==void 0&&V(`setup() should return an object. Received: ${n===null?"null":typeof n}`),$y(s,t)}let fa;const Om=()=>!fa;function $y(s,n,t){const l=s.type;if(!s.render){if(!n&&fa&&!l.render){const o=l.template||Ac(s).template;if(o){un(s,"compile");const{isCustomElement:r,compilerOptions:c}=s.appContext.config,{delimiters:i,compilerOptions:p}=l,u=Ve(Ve({isCustomElement:r,delimiters:i},c),p);l.render=fa(o,u),yn(s,"compile")}}s.render=l.render||vs}zt(s),gt(),Xh(s),Ct(),mt(),!l.render&&s.render===vs&&!n&&(l.template?V('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):V("Component is missing template or render function."))}function Im(s){return s.attrsProxy||(s.attrsProxy=new Proxy(s.attrs,{get(n,t){return Lo(),cs(s,"get","$attrs"),n[t]},set(){return V("setupContext.attrs is readonly."),!1},deleteProperty(){return V("setupContext.attrs is readonly."),!1}}))}function Lm(s){return s.slotsProxy||(s.slotsProxy=new Proxy(s.slots,{get(n,t){return cs(s,"get","$slots"),n[t]}}))}function Fy(s){return Object.freeze({get attrs(){return Im(s)},get slots(){return Lm(s)},get emit(){return(t,...l)=>s.emit(t,...l)},expose:t=>{if(s.exposed&&V("expose() should be called only once per setup()."),t!=null){let l=typeof t;l==="object"&&(ie(t)?l="array":Oe(t)&&(l="ref")),l!=="object"&&V(`expose() should be passed a plain object, received ${l}.`)}s.exposed=t||{}}})}function yr(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Uu(tr(s.exposed)),{get(n,t){if(t in n)return n[t];if(t in ht)return ht[t](s)},has(n,t){return t in n||t in ht}}))}const Pm=/(?:^|[-_])(\w)/g,Mm=s=>s.replace(Pm,n=>n.toUpperCase()).replace(/[-_]/g,"");function $l(s,n=!0){return fe(s)?s.displayName||s.name:s.name||n&&s.__name}function dr(s,n,t=!1){let l=$l(n);if(!l&&n.__file){const o=n.__file.match(/([^/\\]+)\.\w+$/);o&&(l=o[1])}if(!l&&s&&s.parent){const o=r=>{for(const c in r)if(r[c]===n)return c};l=o(s.components||s.parent.type.components)||o(s.appContext.components)}return l?Mm(l):t?"App":"Anonymous"}function Ty(s){return fe(s)&&"__vccOpts"in s}const O=(s,n)=>th(s,n,xl);function hs(s,n,t){const l=arguments.length;return l===2?Ie(n)&&!ie(n)?Hn(n)?k(s,null,[n]):k(s,n):k(s,null,n):(l>3?t=Array.prototype.slice.call(arguments,2):l===3&&Hn(t)&&(t=[t]),k(s,n,t))}const jm=Symbol.for("v-scx"),zm=()=>{{const s=P(jm);return s||V("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),s}};function br(s){return!!(s&&s.__v_isShallow)}function Rm(){if(typeof window>"u")return;const s={style:"color:#3ba776"},n={style:"color:#0b1bc9"},t={style:"color:#b62e24"},l={style:"color:#9d288c"},o={header(d){return Ie(d)?d.__isVue?["div",s,"VueInstance"]:Oe(d)?["div",{},["span",s,y(d)],"<",i(d.value),">"]:dt(d)?["div",{},["span",s,br(d)?"ShallowReactive":"Reactive"],"<",i(d),`>${Rn(d)?" (readonly)":""}`]:Rn(d)?["div",{},["span",s,br(d)?"ShallowReadonly":"Readonly"],"<",i(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...r(d.$)]}};function r(d){const f=[];d.type.props&&d.props&&f.push(c("props",Ae(d.props))),d.setupState!==Re&&f.push(c("setup",d.setupState)),d.data!==Re&&f.push(c("data",Ae(d.data)));const h=p(d,"computed");h&&f.push(c("computed",h));const m=p(d,"inject");return m&&f.push(c("injected",m)),f.push(["div",{},["span",{style:l.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),f}function c(d,f){return f=Ve({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",l,h+": "],i(f[h],!1)])]]:["span",{}]}function i(d,f=!0){return typeof d=="number"?["span",n,d]:typeof d=="string"?["span",t,JSON.stringify(d)]:typeof d=="boolean"?["span",l,d]:Ie(d)?["object",{object:f?Ae(d):d}]:["span",t,String(d)]}function p(d,f){const h=d.type;if(fe(h))return;const m={};for(const g in d.ctx)u(h,g,f)&&(m[g]=d.ctx[g]);return m}function u(d,f,h){const m=d[h];if(ie(m)&&m.includes(f)||Ie(m)&&f in m||d.extends&&u(d.extends,f,h)||d.mixins&&d.mixins.some(g=>u(g,f,h)))return!0}function y(d){return br(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const Ho="3.3.4",Hm="http://www.w3.org/2000/svg",tt=typeof document<"u"?document:null,Fi=tt&&tt.createElement("template"),Nm={insert:(s,n,t)=>{n.insertBefore(s,t||null)},remove:s=>{const n=s.parentNode;n&&n.removeChild(s)},createElement:(s,n,t,l)=>{const o=n?tt.createElementNS(Hm,s):tt.createElement(s,t?{is:t}:void 0);return s==="select"&&l&&l.multiple!=null&&o.setAttribute("multiple",l.multiple),o},createText:s=>tt.createTextNode(s),createComment:s=>tt.createComment(s),setText:(s,n)=>{s.nodeValue=n},setElementText:(s,n)=>{s.textContent=n},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>tt.querySelector(s),setScopeId(s,n){s.setAttribute(n,"")},insertStaticContent(s,n,t,l,o,r){const c=t?t.previousSibling:n.lastChild;if(o&&(o===r||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===r||!(o=o.nextSibling)););else{Fi.innerHTML=l?`<svg>${s}</svg>`:s;const i=Fi.content;if(l){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}n.insertBefore(i,t)}return[c?c.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function Vm(s,n,t){const l=s._vtc;l&&(n=(n?[n,...l]:[...l]).join(" ")),n==null?s.removeAttribute("class"):t?s.setAttribute("class",n):s.className=n}function Wm(s,n,t){const l=s.style,o=Ue(t);if(t&&!o){if(n&&!Ue(n))for(const r in n)t[r]==null&&ha(l,r,"");for(const r in t)ha(l,r,t[r])}else{const r=l.display;o?n!==t&&(l.cssText=t):n&&s.removeAttribute("style"),"_vod"in s&&(l.display=r)}}const Um=/[^\\];\s*$/,Ti=/\s*!important$/;function ha(s,n,t){if(ie(t))t.forEach(l=>ha(s,n,l));else if(t==null&&(t=""),Um.test(t)&&V(`Unexpected semicolon at the end of '${n}' style value: '${t}'`),n.startsWith("--"))s.setProperty(n,t);else{const l=qm(s,n);Ti.test(t)?s.setProperty(_n(l),t.replace(Ti,""),"important"):s[l]=t}}const Si=["Webkit","Moz","ms"],wr={};function qm(s,n){const t=wr[n];if(t)return t;let l=ln(n);if(l!=="filter"&&l in s)return wr[n]=l;l=_t(l);for(let o=0;o<Si.length;o++){const r=Si[o]+l;if(r in s)return wr[n]=r}return n}const Oi="http://www.w3.org/1999/xlink";function Gm(s,n,t,l,o){if(l&&n.startsWith("xlink:"))t==null?s.removeAttributeNS(Oi,n.slice(6,n.length)):s.setAttributeNS(Oi,n,t);else{const r=Bf(n);t==null||r&&!ku(t)?s.removeAttribute(n):s.setAttribute(n,r?"":t)}}function Km(s,n,t,l,o,r,c){if(n==="innerHTML"||n==="textContent"){l&&c(l,o,r),s[n]=t??"";return}const i=s.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){s._value=t;const u=i==="OPTION"?s.getAttribute("value"):s.value,y=t??"";u!==y&&(s.value=y),t==null&&s.removeAttribute(n);return}let p=!1;if(t===""||t==null){const u=typeof s[n];u==="boolean"?t=ku(t):t==null&&u==="string"?(t="",p=!0):u==="number"&&(t=0,p=!0)}try{s[n]=t}catch(u){p||V(`Failed setting prop "${n}" on <${i.toLowerCase()}>: value ${t} is invalid.`,u)}p&&s.removeAttribute(n)}function Ym(s,n,t,l){s.addEventListener(n,t,l)}function Zm(s,n,t,l){s.removeEventListener(n,t,l)}function Jm(s,n,t,l,o=null){const r=s._vei||(s._vei={}),c=r[n];if(l&&c)c.value=l;else{const[i,p]=Xm(n);if(l){const u=r[n]=s5(l,o);Ym(s,i,u,p)}else c&&(Zm(s,i,c,p),r[n]=void 0)}}const Ii=/(?:Once|Passive|Capture)$/;function Xm(s){let n;if(Ii.test(s)){n={};let l;for(;l=s.match(Ii);)s=s.slice(0,s.length-l[0].length),n[l[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):_n(s.slice(2)),n]}let Er=0;const Qm=Promise.resolve(),e5=()=>Er||(Qm.then(()=>Er=0),Er=Date.now());function s5(s,n){const t=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=t.attached)return;Ms(n5(l,t.value),n,5,[l])};return t.value=s,t.attached=e5(),t}function n5(s,n){if(ie(n)){const t=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{t.call(s),s._stopped=!0},n.map(l=>o=>!o._stopped&&l&&l(o))}else return n}const Li=/^on[a-z]/,t5=(s,n,t,l,o=!1,r,c,i,p)=>{n==="class"?Vm(s,l,o):n==="style"?Wm(s,t,l):Rl(n)?ko(n)||Jm(s,n,t,l,c):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):l5(s,n,l,o))?Km(s,n,l,r,c,i,p):(n==="true-value"?s._trueValue=l:n==="false-value"&&(s._falseValue=l),Gm(s,n,l,o))};function l5(s,n,t,l){return l?!!(n==="innerHTML"||n==="textContent"||n in s&&Li.test(n)&&fe(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&s.tagName==="INPUT"||n==="type"&&s.tagName==="TEXTAREA"||Li.test(n)&&Ue(t)?!1:n in s}const Dn="transition",Gt="animation",Sy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},o5=Ve({},Ih,Sy),Zn=(s,n=[])=>{ie(s)?s.forEach(t=>t(...n)):s&&s(...n)},Pi=s=>s?ie(s)?s.some(n=>n.length>1):s.length>1:!1;function r5(s){const n={};for(const Z in s)Z in Sy||(n[Z]=s[Z]);if(s.css===!1)return n;const{name:t="v",type:l,duration:o,enterFromClass:r=`${t}-enter-from`,enterActiveClass:c=`${t}-enter-active`,enterToClass:i=`${t}-enter-to`,appearFromClass:p=r,appearActiveClass:u=c,appearToClass:y=i,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=s,m=a5(o),g=m&&m[0],C=m&&m[1],{onBeforeEnter:D,onEnter:b,onEnterCancelled:v,onLeave:x,onLeaveCancelled:$,onBeforeAppear:S=D,onAppear:N=b,onAppearCancelled:L=v}=n,U=(Z,_e,ge)=>{wn(Z,_e?y:i),wn(Z,_e?u:c),ge&&ge()},le=(Z,_e)=>{Z._isLeaving=!1,wn(Z,d),wn(Z,h),wn(Z,f),_e&&_e()},ye=Z=>(_e,ge)=>{const De=Z?N:b,Me=()=>U(_e,Z,ge);Zn(De,[_e,Me]),Mi(()=>{wn(_e,Z?p:r),dn(_e,Z?y:i),Pi(De)||ji(_e,l,g,Me)})};return Ve(n,{onBeforeEnter(Z){Zn(D,[Z]),dn(Z,r),dn(Z,c)},onBeforeAppear(Z){Zn(S,[Z]),dn(Z,p),dn(Z,u)},onEnter:ye(!1),onAppear:ye(!0),onLeave(Z,_e){Z._isLeaving=!0;const ge=()=>le(Z,_e);dn(Z,d),Iy(),dn(Z,f),Mi(()=>{Z._isLeaving&&(wn(Z,d),dn(Z,h),Pi(x)||ji(Z,l,C,ge))}),Zn(x,[Z,ge])},onEnterCancelled(Z){U(Z,!1),Zn(v,[Z])},onAppearCancelled(Z){U(Z,!0),Zn(L,[Z])},onLeaveCancelled(Z){le(Z),Zn($,[Z])}})}function a5(s){if(s==null)return null;if(Ie(s))return[kr(s.enter),kr(s.leave)];{const n=kr(s);return[n,n]}}function kr(s){const n=af(s);return ch(n,"<transition> explicit duration"),n}function dn(s,n){n.split(/\s+/).forEach(t=>t&&s.classList.add(t)),(s._vtc||(s._vtc=new Set)).add(n)}function wn(s,n){n.split(/\s+/).forEach(l=>l&&s.classList.remove(l));const{_vtc:t}=s;t&&(t.delete(n),t.size||(s._vtc=void 0))}function Mi(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let c5=0;function ji(s,n,t,l){const o=s._endId=++c5,r=()=>{o===s._endId&&l()};if(t)return setTimeout(r,t);const{type:c,timeout:i,propCount:p}=Oy(s,n);if(!c)return l();const u=c+"end";let y=0;const d=()=>{s.removeEventListener(u,f),r()},f=h=>{h.target===s&&++y>=p&&d()};setTimeout(()=>{y<p&&d()},i+1),s.addEventListener(u,f)}function Oy(s,n){const t=window.getComputedStyle(s),l=m=>(t[m]||"").split(", "),o=l(`${Dn}Delay`),r=l(`${Dn}Duration`),c=zi(o,r),i=l(`${Gt}Delay`),p=l(`${Gt}Duration`),u=zi(i,p);let y=null,d=0,f=0;n===Dn?c>0&&(y=Dn,d=c,f=r.length):n===Gt?u>0&&(y=Gt,d=u,f=p.length):(d=Math.max(c,u),y=d>0?c>u?Dn:Gt:null,f=y?y===Dn?r.length:p.length:0);const h=y===Dn&&/\b(transform|all)(,|$)/.test(l(`${Dn}Property`).toString());return{type:y,timeout:d,propCount:f,hasTransform:h}}function zi(s,n){for(;s.length<n.length;)s=s.concat(s);return Math.max(...n.map((t,l)=>Ri(t)+Ri(s[l])))}function Ri(s){return Number(s.slice(0,-1).replace(",","."))*1e3}function Iy(){return document.body.offsetHeight}const Ly=new WeakMap,Py=new WeakMap,My={name:"TransitionGroup",props:Ve({},o5,{tag:String,moveClass:String}),setup(s,{slots:n}){const t=Fs(),l=Oh();let o,r;return ir(()=>{if(!o.length)return;const c=s.moveClass||`${s.name||"v"}-move`;if(!f5(o[0].el,t.vnode.el,c))return;o.forEach(u5),o.forEach(y5);const i=o.filter(d5);Iy(),i.forEach(p=>{const u=p.el,y=u.style;dn(u,c),y.transform=y.webkitTransform=y.transitionDuration="";const d=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,wn(u,c))};u.addEventListener("transitionend",d)})}),()=>{const c=Ae(s),i=r5(c);let p=c.tag||Te;o=r,r=n.default?cy(n.default()):[];for(let u=0;u<r.length;u++){const y=r[u];y.key!=null?Po(y,la(y,i,l,t)):V("<TransitionGroup> children must be keyed.")}if(o)for(let u=0;u<o.length;u++){const y=o[u];Po(y,la(y,i,l,t)),Ly.set(y,y.el.getBoundingClientRect())}return k(p,null,r)}}},i5=s=>delete s.mode;My.props;const p5=My;function u5(s){const n=s.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function y5(s){Py.set(s,s.el.getBoundingClientRect())}function d5(s){const n=Ly.get(s),t=Py.get(s),l=n.left-t.left,o=n.top-t.top;if(l||o){const r=s.el.style;return r.transform=r.webkitTransform=`translate(${l}px,${o}px)`,r.transitionDuration="0s",s}}function f5(s,n,t){const l=s.cloneNode();s._vtc&&s._vtc.forEach(c=>{c.split(/\s+/).forEach(i=>i&&l.classList.remove(i))}),t.split(/\s+/).forEach(c=>c&&l.classList.add(c)),l.style.display="none";const o=n.nodeType===1?n:n.parentNode;o.appendChild(l);const{hasTransform:r}=Oy(l);return o.removeChild(l),r}const h5=["ctrl","shift","alt","meta"],m5={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,n)=>h5.some(t=>s[`${t}Key`]&&!n.includes(t))},B5=(s,n)=>(t,...l)=>{for(let o=0;o<n.length;o++){const r=m5[n[o]];if(r&&r(t,n))return}return s(t,...l)},A5={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},oo=(s,n)=>t=>{if(!("key"in t))return;const l=_n(t.key);if(n.some(o=>o===l||A5[o]===l))return s(t)},jy={beforeMount(s,{value:n},{transition:t}){s._vod=s.style.display==="none"?"":s.style.display,t&&n?t.beforeEnter(s):Kt(s,n)},mounted(s,{value:n},{transition:t}){t&&n&&t.enter(s)},updated(s,{value:n,oldValue:t},{transition:l}){!n!=!t&&(l?n?(l.beforeEnter(s),Kt(s,!0),l.enter(s)):l.leave(s,()=>{Kt(s,!1)}):Kt(s,n))},beforeUnmount(s,{value:n}){Kt(s,n)}};function Kt(s,n){s.style.display=n?s._vod:"none"}const _5=Ve({patchProp:t5},Nm);let Hi;function v5(){return Hi||(Hi=Bm(_5))}const g5=(...s)=>{const n=v5().createApp(...s);C5(n),D5(n);const{mount:t}=n;return n.mount=l=>{const o=b5(l);if(!o)return;const r=n._component;!fe(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const c=t(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),c},n};function C5(s){Object.defineProperty(s.config,"isNativeTag",{value:n=>Eu(n)||hf(n),writable:!1})}function D5(s){{const n=s.config.isCustomElement;Object.defineProperty(s.config,"isCustomElement",{get(){return n},set(){V("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const t=s.config.compilerOptions,l='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(s.config,"compilerOptions",{get(){return V(l),t},set(){V(l)}})}}function b5(s){if(Ue(s)){const n=document.querySelector(s);return n||V(`Failed to mount app: mount target selector "${s}" returned null.`),n}return window.ShadowRoot&&s instanceof window.ShadowRoot&&s.mode==="closed"&&V('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),s}function w5(){Rm()}w5();function ma(s,n={},t){for(const l in s){const o=s[l],r=t?`${t}:${l}`:l;typeof o=="object"&&o!==null?ma(o,n,r):typeof o=="function"&&(n[r]=o)}return n}const E5={run:s=>s()},k5=()=>E5,zy=typeof console.createTask<"u"?console.createTask:k5;function x5(s,n){const t=n.shift(),l=zy(t);return s.reduce((o,r)=>o.then(()=>l.run(()=>r(...n))),Promise.resolve())}function $5(s,n){const t=n.shift(),l=zy(t);return Promise.all(s.map(o=>l.run(()=>o(...n))))}function xr(s,n){for(const t of[...s])t(n)}class F5{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,t,l={}){if(!n||typeof t!="function")return()=>{};const o=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!l.allowDeprecated){let c=r.message;c||(c=`${o} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(c)||(console.warn(c),this._deprecatedMessages.add(c))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+n.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(t),()=>{t&&(this.removeHook(n,t),t=void 0)}}hookOnce(n,t){let l,o=(...r)=>(typeof l=="function"&&l(),l=void 0,o=void 0,t(...r));return l=this.hook(n,o),l}removeHook(n,t){if(this._hooks[n]){const l=this._hooks[n].indexOf(t);l!==-1&&this._hooks[n].splice(l,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,t){this._deprecatedHooks[n]=typeof t=="string"?{to:t}:t;const l=this._hooks[n]||[];delete this._hooks[n];for(const o of l)this.hook(n,o)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const t in n)this.deprecateHook(t,n[t])}addHooks(n){const t=ma(n),l=Object.keys(t).map(o=>this.hook(o,t[o]));return()=>{for(const o of l.splice(0,l.length))o()}}removeHooks(n){const t=ma(n);for(const l in t)this.removeHook(l,t[l])}removeAllHooks(){for(const n in this._hooks)delete this._hooks[n]}callHook(n,...t){return t.unshift(n),this.callHookWith(x5,n,...t)}callHookParallel(n,...t){return t.unshift(n),this.callHookWith($5,n,...t)}callHookWith(n,t,...l){const o=this._before||this._after?{name:t,args:l,context:{}}:void 0;this._before&&xr(this._before,o);const r=n(t in this._hooks?[...this._hooks[t]]:[],l);return r instanceof Promise?r.finally(()=>{this._after&&o&&xr(this._after,o)}):(this._after&&o&&xr(this._after,o),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{if(this._before!==void 0){const t=this._before.indexOf(n);t!==-1&&this._before.splice(t,1)}}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{if(this._after!==void 0){const t=this._after.indexOf(n);t!==-1&&this._after.splice(t,1)}}}}function T5(){return new F5}function S5(s){return Array.isArray(s)?s:[s]}const Ry=["title","script","style","noscript"],Hy=["base","meta","link","style","script","noscript"],O5=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],I5=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],L5=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Ny(s){let n=9;for(let t=0;t<s.length;)n=Math.imul(n^s.charCodeAt(t++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ba(s){return Ny(`${s.tag}:${s.textContent||s.innerHTML||""}:${Object.entries(s.props).map(([n,t])=>`${n}:${String(t)}`).join(",")}`)}function P5(s){let n=9;for(const t of s)for(let l=0;l<t.length;)n=Math.imul(n^t.charCodeAt(l++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Vy(s,n){const{props:t,tag:l}=s;if(I5.includes(l))return l;if(l==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const o=["id"];l==="meta"&&o.push("name","property","http-equiv");for(const r of o)if(typeof t[r]<"u"){const c=String(t[r]);return n&&!n(c)?!1:`${l}:${r}:${c}`}return!1}function Ni(s,n){return s==null?n||null:typeof s=="function"?s(n):s}function ro(s,n=!1,t){const{tag:l,$el:o}=s;o&&(Object.entries(l.props).forEach(([r,c])=>{c=String(c);const i=`attr:${r}`;if(r==="class"){if(!c)return;for(const p of c.split(" ")){const u=`${i}:${p}`;t&&t(s,u,()=>o.classList.remove(p)),o.classList.contains(p)||o.classList.add(p)}return}t&&!r.startsWith("data-h-")&&t(s,i,()=>o.removeAttribute(r)),(n||o.getAttribute(r)!==c)&&o.setAttribute(r,c)}),Ry.includes(l.tag)&&(l.textContent&&l.textContent!==o.textContent?o.textContent=l.textContent:l.innerHTML&&l.innerHTML!==o.innerHTML&&(o.innerHTML=l.innerHTML)))}let Yt=!1;async function Wy(s,n={}){var f,h;const t={shouldRender:!0};if(await s.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const l=n.document||s.resolvedOptions.document||window.document,o=(await s.resolveTags()).map(i);if(s.resolvedOptions.experimentalHashHydration&&(Yt=Yt||s._hash||!1,Yt)){const m=P5(o.map(g=>g.tag._h));if(Yt===m)return;Yt=m}const r=s._popSideEffectQueue();s.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([g,C])=>{r[g]=C})});const c=(m,g,C)=>{g=`${m.renderId}:${g}`,m.entry&&(m.entry._sde[g]=C),delete r[g]};function i(m){const g=s.headEntries().find(D=>D._i===m._e),C={renderId:m._d||Ba(m),$el:null,shouldRender:!0,tag:m,entry:g,markSideEffect:(D,b)=>c(C,D,b)};return C}const p=[],u={body:[],head:[]},y=m=>{s._elMap[m.renderId]=m.$el,p.push(m),c(m,"el",()=>{var g;(g=m.$el)==null||g.remove(),delete s._elMap[m.renderId]})};for(const m of o){if(await s.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:g}=m;if(g.tag==="title"){l.title=g.textContent||"",p.push(m);continue}if(g.tag==="htmlAttrs"||g.tag==="bodyAttrs"){m.$el=l[g.tag==="htmlAttrs"?"documentElement":"body"],ro(m,!1,c),p.push(m);continue}if(m.$el=s._elMap[m.renderId],!m.$el&&g.key&&(m.$el=l.querySelector(`${(f=g.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${g.tag}[data-h-${g._h}]`)),m.$el){m.tag._d&&ro(m),y(m);continue}u[(h=g.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const d={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,g])=>{var D;if(!g.length)return;const C=(D=l==null?void 0:l[m])==null?void 0:D.children;if(C){for(const b of[...C].reverse()){const v=b.tagName.toLowerCase();if(!Hy.includes(v))continue;const x=b.getAttributeNames().reduce((L,U)=>({...L,[U]:b.getAttribute(U)}),{}),$={tag:v,props:x};b.innerHTML&&($.innerHTML=b.innerHTML);const S=Ba($);let N=g.findIndex(L=>(L==null?void 0:L.renderId)===S);if(N===-1){const L=Vy($);N=g.findIndex(U=>(U==null?void 0:U.tag._d)&&U.tag._d===L)}if(N!==-1){const L=g[N];L.$el=b,ro(L),y(L),delete g[N]}}g.forEach(b=>{const v=b.tag.tagPosition||"head";d[v]=d[v]||l.createDocumentFragment(),b.$el||(b.$el=l.createElement(b.tag.tag),ro(b,!0)),d[v].appendChild(b.$el),y(b)})}}),d.head&&l.head.appendChild(d.head),d.bodyOpen&&l.body.insertBefore(d.bodyOpen,l.body.firstChild),d.bodyClose&&l.body.appendChild(d.bodyClose);for(const m of p)await s.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let $r=null;async function Uy(s,n={}){function t(){return $r=null,Wy(s,n)}const l=n.delayFn||(o=>setTimeout(o,10));return $r=$r||new Promise(o=>l(()=>o(t())))}function M5(s){return{hooks:{"entries:updated":function(n){if(typeof(s==null?void 0:s.document)>"u"&&typeof window>"u")return;let t=s==null?void 0:s.delayFn;!t&&typeof requestAnimationFrame<"u"&&(t=requestAnimationFrame),Uy(n,{document:(s==null?void 0:s.document)||window.document,delayFn:t})}}}}function j5(s){var n;return((n=s==null?void 0:s.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const Vi={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Wi(s){if(typeof s.tagPriority=="number")return s.tagPriority;if(s.tag==="meta"){if(s.props.charset)return-2;if(s.props["http-equiv"]==="content-security-policy")return 0}const n=s.tagPriority||s.tag;return n in Vi?Vi[n]:10}const z5=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function R5(){return{hooks:{"tags:resolve":s=>{const n=t=>{var l;return(l=s.tags.find(o=>o._d===t))==null?void 0:l._p};for(const{prefix:t,offset:l}of z5)for(const o of s.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(t))){const r=n(o.tagPriority.replace(t,""));typeof r<"u"&&(o._p=r+l)}s.tags.sort((t,l)=>t._p-l._p).sort((t,l)=>Wi(t)-Wi(l))}}}}function H5(){return{hooks:{"tags:resolve":s=>{const{tags:n}=s;let t=n.findIndex(o=>o.tag==="titleTemplate");const l=n.findIndex(o=>o.tag==="title");if(l!==-1&&t!==-1){const o=Ni(n[t].textContent,n[l].textContent);o!==null?n[l].textContent=o||n[l].textContent:delete n[l]}else if(t!==-1){const o=Ni(n[t].textContent);o!==null&&(n[t].textContent=o,n[t].tag="title",t=-1)}t!==-1&&delete n[t],s.tags=n.filter(Boolean)}}}}function N5(){return{hooks:{"tag:normalise":function({tag:s}){typeof s.props.body<"u"&&(s.tagPosition="bodyClose",delete s.props.body)}}}}const V5=["link","style","script","noscript"];function W5(){return{hooks:{"tag:normalise":({tag:s,resolvedOptions:n})=>{n.experimentalHashHydration===!0&&(s._h=Ba(s)),s.key&&V5.includes(s.tag)&&(s._h=Ny(s.key),s.props[`data-h-${s._h}`]="")}}}}const Ui=["script","link","bodyAttrs"];function U5(){const s=(n,t)=>{const l={},o={};Object.entries(t.props).forEach(([c,i])=>{c.startsWith("on")&&typeof i=="function"?o[c]=i:l[c]=i});let r;return n==="dom"&&t.tag==="script"&&typeof l.src=="string"&&typeof o.onload<"u"&&(r=l.src,delete l.src),{props:l,eventHandlers:o,delayedSrc:r}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(t=>(!Ui.includes(t.tag)||!Object.entries(t.props).find(([l,o])=>l.startsWith("on")&&typeof o=="function")||(t.props=s("ssr",t).props),t))},"dom:beforeRenderTag":function(n){if(!Ui.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([r,c])=>r.startsWith("on")&&typeof c=="function"))return;const{props:t,eventHandlers:l,delayedSrc:o}=s("dom",n.tag);Object.keys(l).length&&(n.tag.props=t,n.tag._eventHandlers=l,n.tag._delayedSrc=o)},"dom:renderTag":function(n){const t=n.$el;if(!n.tag._eventHandlers||!t)return;const l=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:t;Object.entries(n.tag._eventHandlers).forEach(([o,r])=>{const c=`${n.tag._d||n.tag._p}:${o}`,i=o.slice(2).toLowerCase(),p=`data-h-${i}`;if(n.markSideEffect(c,()=>{}),t.hasAttribute(p))return;const u=r;t.setAttribute(p,""),l.addEventListener(i,u),n.entry&&(n.entry._sde[c]=()=>{l.removeEventListener(i,u),t.removeAttribute(p)})}),n.tag._delayedSrc&&t.setAttribute("src",n.tag._delayedSrc)}}}}const q5=["templateParams","htmlAttrs","bodyAttrs"];function G5(){return{hooks:{"tag:normalise":function({tag:s}){["hid","vmid","key"].forEach(l=>{s.props[l]&&(s.key=s.props[l],delete s.props[l])});const t=Vy(s)||(s.key?`${s.tag}:${s.key}`:!1);t&&(s._d=t)},"tags:resolve":function(s){const n={};s.tags.forEach(l=>{const o=(l.key?`${l.tag}:${l.key}`:l._d)||l._p,r=n[o];if(r){let i=l==null?void 0:l.tagDuplicateStrategy;if(!i&&q5.includes(l.tag)&&(i="merge"),i==="merge"){const p=r.props;["class","style"].forEach(u=>{l.props[u]&&p[u]&&(u==="style"&&!p[u].endsWith(";")&&(p[u]+=";"),l.props[u]=`${p[u]} ${l.props[u]}`)}),n[o].props={...p,...l.props};return}else if(l._e===r._e){r._duped=r._duped||[],l._d=`${r._d}:${r._duped.length+1}`,r._duped.push(l);return}}const c=Object.keys(l.props).length+(l.innerHTML?1:0)+(l.textContent?1:0);if(Hy.includes(l.tag)&&c===0){delete n[o];return}n[o]=l});const t=[];Object.values(n).forEach(l=>{const o=l._duped;delete l._duped,t.push(l),o&&t.push(...o)}),s.tags=t}}}}function ao(s,n){function t(r){if(["s","pageTitle"].includes(r))return n.pageTitle;let c;return r.includes(".")?c=r.split(".").reduce((i,p)=>i&&i[p]||void 0,n):c=n[r],typeof c<"u"?c||"":!1}let l=s;try{l=decodeURI(s)}catch{}return(l.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const c=t(r.slice(1));typeof c=="string"&&(s=s.replace(new RegExp(`\\${r}(\\W|$)`,"g"),`${c}$1`).trim())}),n.separator&&(s.endsWith(n.separator)&&(s=s.slice(0,-n.separator.length).trim()),s.startsWith(n.separator)&&(s=s.slice(n.separator.length).trim()),s=s.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),s}function K5(){return{hooks:{"tags:resolve":s=>{var r;const{tags:n}=s,t=(r=n.find(c=>c.tag==="title"))==null?void 0:r.textContent,l=n.findIndex(c=>c.tag==="templateParams"),o=l!==-1?n[l].props:{};o.pageTitle=o.pageTitle||t||"";for(const c of n)if(["titleTemplate","title"].includes(c.tag)&&typeof c.textContent=="string")c.textContent=ao(c.textContent,o);else if(c.tag==="meta"&&typeof c.props.content=="string")c.props.content=ao(c.props.content,o);else if(c.tag==="link"&&typeof c.props.href=="string")c.props.href=ao(c.props.href,o);else if(c.tag==="script"&&["application/json","application/ld+json"].includes(c.props.type)&&typeof c.innerHTML=="string")try{c.innerHTML=JSON.stringify(JSON.parse(c.innerHTML),(i,p)=>typeof p=="string"?ao(p,o):p)}catch{}s.tags=n.filter(c=>c.tag!=="templateParams")}}}}const Y5=typeof window<"u";let qy;function Z5(s){return qy=s}function J5(){return qy}async function X5(s,n){const t={tag:s,props:{}};return s==="templateParams"?(t.props=n,t):["title","titleTemplate"].includes(s)?(t.textContent=n instanceof Promise?await n:n,t):typeof n=="string"?["script","noscript","style"].includes(s)?(s==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?t.props.src=n:t.innerHTML=n,t):!1:(t.props=await e3(s,{...n}),t.props.children&&(t.props.innerHTML=t.props.children),delete t.props.children,Object.keys(t.props).filter(l=>L5.includes(l)).forEach(l=>{(!["innerHTML","textContent"].includes(l)||Ry.includes(t.tag))&&(t[l]=t.props[l]),delete t.props[l]}),["innerHTML","textContent"].forEach(l=>{if(t.tag==="script"&&typeof t[l]=="string"&&["application/ld+json","application/json"].includes(t.props.type))try{t[l]=JSON.parse(t[l])}catch{t[l]=""}typeof t[l]=="object"&&(t[l]=JSON.stringify(t[l]))}),t.props.class&&(t.props.class=Q5(t.props.class)),t.props.content&&Array.isArray(t.props.content)?t.props.content.map(l=>({...t,props:{...t.props,content:l}})):t)}function Q5(s){return typeof s=="object"&&!Array.isArray(s)&&(s=Object.keys(s).filter(n=>s[n])),(Array.isArray(s)?s.join(" "):s).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function e3(s,n){for(const t of Object.keys(n)){const l=t.startsWith("data-");n[t]instanceof Promise&&(n[t]=await n[t]),String(n[t])==="true"?n[t]=l?"true":"":String(n[t])==="false"&&(l?n[t]="false":delete n[t])}return n}const s3=10;async function n3(s){const n=[];return Object.entries(s.resolvedInput).filter(([t,l])=>typeof l<"u"&&O5.includes(t)).forEach(([t,l])=>{const o=S5(l);n.push(...o.map(r=>X5(t,r)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((t,l)=>(t._e=s._i,t._p=(s._i<<s3)+l,t))}function t3(){return[G5(),R5(),K5(),H5(),W5(),U5(),N5()]}function l3(s={}){return[M5({document:s==null?void 0:s.document,delayFn:s==null?void 0:s.domDelayFn})]}function o3(s={}){const n=r3({...s,plugins:[...l3(s),...(s==null?void 0:s.plugins)||[]]});return s.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=j5(n.resolvedOptions.document)),Z5(n),n}function r3(s={}){let n=[],t={},l=0;const o=T5();s!=null&&s.hooks&&o.addHooks(s.hooks),s.plugins=[...t3(),...(s==null?void 0:s.plugins)||[]],s.plugins.forEach(i=>i.hooks&&o.addHooks(i.hooks)),s.document=s.document||(Y5?document:void 0);const r=()=>o.callHook("entries:updated",c),c={resolvedOptions:s,headEntries(){return n},get hooks(){return o},use(i){i.hooks&&o.addHooks(i.hooks)},push(i,p){const u={_i:l++,input:i,_sde:{}};return p!=null&&p.mode&&(u._m=p==null?void 0:p.mode),p!=null&&p.transform&&(u._t=p==null?void 0:p.transform),n.push(u),r(),{dispose(){n=n.filter(y=>y._i!==u._i?!0:(t={...t,...y._sde||{}},y._sde={},r(),!1))},patch(y){n=n.map(d=>(d._i===u._i&&(u.input=d.input=y,r()),d))}}},async resolveTags(){const i={tags:[],entries:[...n]};await o.callHook("entries:resolve",i);for(const p of i.entries){const u=p._t||(y=>y);if(p.resolvedInput=u(p.resolvedInput||p.input),p.resolvedInput)for(const y of await n3(p)){const d={tag:y,entry:p,resolvedOptions:c.resolvedOptions};await o.callHook("tag:normalise",d),i.tags.push(d.tag)}}return await o.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...t};return t={},i},_elMap:{}};return c.hooks.callHook("init",c),c}function a3(s){return typeof s=="function"?s():T(s)}function No(s,n=""){if(s instanceof Promise)return s;const t=a3(s);return!s||!t?t:Array.isArray(t)?t.map(l=>No(l,n)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([l,o])=>l==="titleTemplate"||l.startsWith("on")?[l,T(o)]:[l,No(o,l)])):t}const c3=Ho.startsWith("3"),i3=typeof window<"u",Gy="usehead";function Cc(){return Fs()&&P(Gy)||J5()}function p3(s){return{install(t){c3&&(t.config.globalProperties.$unhead=s,t.config.globalProperties.$head=s,t.provide(Gy,s))}}.install}function u3(s={}){const n=o3({...s,domDelayFn:t=>setTimeout(()=>os(()=>t()),10),plugins:[y3(),...(s==null?void 0:s.plugins)||[]]});return n.install=p3(n),n}function y3(){return{hooks:{"entries:resolve":function(s){for(const n of s.entries)n.resolvedInput=No(n.input)}}}}function d3(s,n={}){const t=Cc(),l=Y(!1),o=Y({});Dt(()=>{o.value=l.value?{}:No(s)});const r=t.push(o.value,n);return ve(o,i=>{r.patch(i)}),Fs()&&(Vl(()=>{r.dispose()}),uy(()=>{l.value=!0}),py(()=>{l.value=!1})),r}function f3(s,n={}){return Cc().push(s,n)}function Ky(s,n={}){var l;const t=Cc();if(t){const o=i3||!!((l=t.resolvedOptions)!=null&&l.document);return n.mode==="server"&&o||n.mode==="client"&&!o?void 0:o?d3(s,n):f3(s,n)}}function h3(s,n){const t=u3(n||{}),l={unhead:t,install(o){Ho.startsWith("3")&&(o.config.globalProperties.$head=t,o.provide("usehead",t))},use(o){t.use(o)},resolveTags(){return t.resolveTags()},headEntries(){return t.headEntries()},headTags(){return t.resolveTags()},push(o,r){return t.push(o,r)},addEntry(o,r){return t.push(o,r)},addHeadObjs(o,r){return t.push(o,r)},addReactiveEntry(o,r){const c=Ky(o,r);return typeof c<"u"?c.dispose:()=>{}},removeHeadObjs(){},updateDOM(o,r){r?Wy(t,{document:o}):Uy(t,{delayFn:c=>setTimeout(()=>c(),50),document:o})},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=l.addHeadObjs,t.updateDOM=l.updateDOM,t.hooks.hook("dom:beforeRender",o=>{for(const r of l.hooks["before:dom"])r()===!1&&(o.shouldRender=!1)}),s&&l.addHeadObjs(s),l}const dl=Symbol("v-click-clicks"),lt=Symbol("v-click-clicks-elements"),Aa=Symbol("v-click-clicks-order-map"),fl=Symbol("v-click-clicks-disabled"),Yy=Symbol("slidev-slide-scale"),R=Symbol("slidev-slidev-context"),m3=Symbol("slidev-route"),B3=Symbol("slidev-slide-context"),et="slidev-vclick-target",Fr="slidev-vclick-hidden",A3="slidev-vclick-fade",Tr="slidev-vclick-hidden-explicitly",Zt="slidev-vclick-current",co="slidev-vclick-prior",_3=["localhost","127.0.0.1"];let v3=(s=21)=>crypto.getRandomValues(new Uint8Array(s)).reduce((n,t)=>(t&=63,t<36?n+=t.toString(36):t<62?n+=(t-26).toString(36).toUpperCase():t>62?n+="-":n+="_",n),"");function g3(s){return s=s??[],Array.isArray(s)?s:[s]}function _a(s,n){if(!s)return!1;const t=s.indexOf(n);return t>=0?(s.splice(t,1),!0):!1}function C3(...s){let n,t,l;s.length===1?(n=0,l=1,[t]=s):[n,t,l=1]=s;const o=[];let r=n;for(;r<t;)o.push(r),r+=l||1;return o}function D3(s){return s!=null}function b3(s,n){return Object.fromEntries(Object.entries(s).map(([t,l])=>n(t,l)).filter(D3))}const il={theme:"academic",title:"Linked lists",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},fonts:{sans:['"Montserrat"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Roboto Slab"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Roboto Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Montserrat","Roboto Slab","Roboto Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},hightlighter:"prism",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap7/cover.png",class:"text-white",coverDate:null,hideInToc:!0},Se=il,On=Se.aspectRatio??16/9,In=Se.canvasWidth??980,Dc=Math.ceil(In/On),bc=O(()=>b3(Se.themeConfig||{},(s,n)=>[`--slidev-theme-${s}`,n]));function Zy(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Hs(s,n,t){Object.defineProperty(s,n,{value:t,writable:!0,enumerable:!1})}const wt=qe({page:0,clicks:0});let w3=[],E3=[];Hs(wt,"$syncUp",!0);Hs(wt,"$syncDown",!0);Hs(wt,"$paused",!1);Hs(wt,"$onSet",s=>w3.push(s));Hs(wt,"$onPatch",s=>E3.push(s));Zy();Hs(wt,"$patch",async()=>!1);function Jy(s,n,t=!1){const l=[];let o=!1,r=!1,c,i;const p=qe(n);function u(h){l.push(h)}function y(h,m){p[h]!==m&&(clearTimeout(c),o=!0,p[h]=m,c=setTimeout(()=>o=!1,0))}function d(h){o||(clearTimeout(i),r=!0,Object.entries(h).forEach(([m,g])=>{p[m]=g}),i=setTimeout(()=>r=!1,0))}function f(h){let m;t?t&&window.addEventListener("storage",C=>{C&&C.key===h&&C.newValue&&d(JSON.parse(C.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",C=>d(C.data)));function g(){!t&&m&&!r?m.postMessage(Ae(p)):t&&!r&&window.localStorage.setItem(h,JSON.stringify(p)),o||l.forEach(C=>C(p))}if(ve(p,g,{deep:!0,flush:"sync"}),t){const C=window.localStorage.getItem(h);C&&d(JSON.parse(C))}}return{init:f,onPatch:u,patch:y,state:p}}const{init:k3,onPatch:x3,patch:Jt,state:Sr}=Jy(wt,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Et=qe({});let $3=[],F3=[];Hs(Et,"$syncUp",!0);Hs(Et,"$syncDown",!0);Hs(Et,"$paused",!1);Hs(Et,"$onSet",s=>$3.push(s));Hs(Et,"$onPatch",s=>F3.push(s));Zy();Hs(Et,"$patch",async()=>!1);const{init:T3,onPatch:S3,patch:Xy,state:Vo}=Jy(Et,{},!1),O3="modulepreload",I3=function(s){return"/courses/data-structure/linked-lists/"+s},qi={},Ln=function(n,t,l){if(!t||t.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=I3(r),r in qi)return;qi[r]=!0;const c=r.endsWith(".css"),i=c?'[rel="stylesheet"]':"";if(!!l)for(let y=o.length-1;y>=0;y--){const d=o[y];if(d.href===r&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":O3,c||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),c)return new Promise((y,d)=>{u.addEventListener("load",y),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n()).catch(r=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r})};function L3(s,n){let t,l,o;const r=Y(!0),c=()=>{r.value=!0,o()};ve(s,c,{flush:"sync"});const i=typeof n=="function"?n:n.get,p=typeof n=="function"?void 0:n.set,u=pc((y,d)=>(l=y,o=d,{get(){return r.value&&(t=i(),r.value=!1),l(),t},set(f){p==null||p(f)}}));return Object.isExtensible(u)&&(u.trigger=c),u}function cn(s){return tc()?(Fu(s),!0):!1}function Ye(s){return typeof s=="function"?s():T(s)}function P3(s){if(!Oe(s))return qe(s);const n=new Proxy({},{get(t,l,o){return T(Reflect.get(s.value,l,o))},set(t,l,o){return Oe(s.value[l])&&!Oe(o)?s.value[l].value=o:s.value[l]=o,!0},deleteProperty(t,l){return Reflect.deleteProperty(s.value,l)},has(t,l){return Reflect.has(s.value,l)},ownKeys(){return Object.keys(s.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return qe(n)}const Ks=typeof window<"u",M3=s=>typeof s<"u",j3=s=>s!=null,z3=Object.prototype.toString,va=s=>z3.call(s)==="[object Object]",ga=()=>+Date.now(),Bt=()=>{},R3=H3();function H3(){var s;return Ks&&((s=window==null?void 0:window.navigator)==null?void 0:s.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function N3(s,n){function t(...l){return new Promise((o,r)=>{Promise.resolve(s(()=>n.apply(this,l),{fn:n,thisArg:this,args:l})).then(o).catch(r)})}return t}const Qy=s=>s();function V3(s=Qy){const n=Y(!0);function t(){n.value=!1}function l(){n.value=!0}const o=(...r)=>{n.value&&s(...r)};return{isActive:qs(n),pause:t,resume:l,eventFilter:o}}function W3(s,n){var t;if(typeof s=="number")return s+n;const l=((t=s.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",o=s.slice(l.length),r=Number.parseFloat(l)+n;return Number.isNaN(r)?s:r+o}function ed(...s){if(s.length!==1)return sh(...s);const n=s[0];return typeof n=="function"?qs(pc(()=>({get:n,set:Bt}))):Y(n)}var U3=Object.defineProperty,q3=Object.defineProperties,G3=Object.getOwnPropertyDescriptors,Gi=Object.getOwnPropertySymbols,K3=Object.prototype.hasOwnProperty,Y3=Object.prototype.propertyIsEnumerable,Ki=(s,n,t)=>n in s?U3(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,Z3=(s,n)=>{for(var t in n||(n={}))K3.call(n,t)&&Ki(s,t,n[t]);if(Gi)for(var t of Gi(n))Y3.call(n,t)&&Ki(s,t,n[t]);return s},J3=(s,n)=>q3(s,G3(n));function X3(s){if(!Oe(s))return Xf(s);const n=Array.isArray(s.value)?new Array(s.value.length):{};for(const t in s.value)n[t]=pc(()=>({get(){return s.value[t]},set(l){if(Array.isArray(s.value)){const o=[...s.value];o[t]=l,s.value=o}else{const o=J3(Z3({},s.value),{[t]:l});Object.setPrototypeOf(o,s.value),s.value=o}}}));return n}function sd(s,n=!0){Fs()?Wn(s):n?s():os(s)}function Q3(s){Fs()&&pr(s)}function eB(s,n=1e3,t={}){const{immediate:l=!0,immediateCallback:o=!1}=t;let r=null;const c=Y(!1);function i(){r&&(clearInterval(r),r=null)}function p(){c.value=!1,i()}function u(){const y=Ye(n);y<=0||(c.value=!0,o&&s(),i(),r=setInterval(s,y))}if(l&&Ks&&u(),Oe(n)||typeof n=="function"){const y=ve(n,()=>{c.value&&Ks&&u()});cn(y)}return cn(p),{isActive:c,pause:p,resume:u}}function sB(s,n,t={}){const{immediate:l=!0}=t,o=Y(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function i(){o.value=!1,c()}function p(...u){c(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,s(...u)},Ye(n))}return l&&(o.value=!0,Ks&&p()),cn(i),{isPending:qs(o),start:p,stop:i}}function nd(s=!1,n={}){const{truthyValue:t=!0,falsyValue:l=!1}=n,o=Oe(s),r=Y(s);function c(i){if(arguments.length)return r.value=i,r.value;{const p=Ye(t);return r.value=r.value===p?Ye(l):p,r.value}}return o?c:[r,c]}var Yi=Object.getOwnPropertySymbols,nB=Object.prototype.hasOwnProperty,tB=Object.prototype.propertyIsEnumerable,lB=(s,n)=>{var t={};for(var l in s)nB.call(s,l)&&n.indexOf(l)<0&&(t[l]=s[l]);if(s!=null&&Yi)for(var l of Yi(s))n.indexOf(l)<0&&tB.call(s,l)&&(t[l]=s[l]);return t};function oB(s,n,t={}){const l=t,{eventFilter:o=Qy}=l,r=lB(l,["eventFilter"]);return ve(s,N3(o,n),r)}var rB=Object.defineProperty,aB=Object.defineProperties,cB=Object.getOwnPropertyDescriptors,Wo=Object.getOwnPropertySymbols,td=Object.prototype.hasOwnProperty,ld=Object.prototype.propertyIsEnumerable,Zi=(s,n,t)=>n in s?rB(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,iB=(s,n)=>{for(var t in n||(n={}))td.call(n,t)&&Zi(s,t,n[t]);if(Wo)for(var t of Wo(n))ld.call(n,t)&&Zi(s,t,n[t]);return s},pB=(s,n)=>aB(s,cB(n)),uB=(s,n)=>{var t={};for(var l in s)td.call(s,l)&&n.indexOf(l)<0&&(t[l]=s[l]);if(s!=null&&Wo)for(var l of Wo(s))n.indexOf(l)<0&&ld.call(s,l)&&(t[l]=s[l]);return t};function yB(s,n,t={}){const l=t,{eventFilter:o}=l,r=uB(l,["eventFilter"]),{eventFilter:c,pause:i,resume:p,isActive:u}=V3(o);return{stop:oB(s,n,pB(iB({},r),{eventFilter:c})),pause:i,resume:p,isActive:u}}function rs(s){var n;const t=Ye(s);return(n=t==null?void 0:t.$el)!=null?n:t}const ss=Ks?window:void 0,od=Ks?window.document:void 0,dB=Ks?window.navigator:void 0;function be(...s){let n,t,l,o;if(typeof s[0]=="string"||Array.isArray(s[0])?([t,l,o]=s,n=ss):[n,t,l,o]=s,!n)return Bt;Array.isArray(t)||(t=[t]),Array.isArray(l)||(l=[l]);const r=[],c=()=>{r.forEach(y=>y()),r.length=0},i=(y,d,f,h)=>(y.addEventListener(d,f,h),()=>y.removeEventListener(d,f,h)),p=ve(()=>[rs(n),Ye(o)],([y,d])=>{c(),y&&r.push(...t.flatMap(f=>l.map(h=>i(y,f,h,d))))},{immediate:!0,flush:"post"}),u=()=>{p(),c()};return cn(u),u}let Ji=!1;function fB(s,n,t={}){const{window:l=ss,ignore:o=[],capture:r=!0,detectIframe:c=!1}=t;if(!l)return;R3&&!Ji&&(Ji=!0,Array.from(l.document.body.children).forEach(f=>f.addEventListener("click",Bt)));let i=!0;const p=f=>o.some(h=>{if(typeof h=="string")return Array.from(l.document.querySelectorAll(h)).some(m=>m===f.target||f.composedPath().includes(m));{const m=rs(h);return m&&(f.target===m||f.composedPath().includes(m))}}),y=[be(l,"click",f=>{const h=rs(s);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(i=!p(f)),!i){i=!0;return}n(f)}},{passive:!0,capture:r}),be(l,"pointerdown",f=>{const h=rs(s);h&&(i=!f.composedPath().includes(h)&&!p(f))},{passive:!0}),c&&be(l,"blur",f=>{setTimeout(()=>{var h;const m=rs(s);((h=l.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(l.document.activeElement))&&n(f)},0)})].filter(Boolean);return()=>y.forEach(f=>f())}function hB(s){return typeof s=="function"?s:typeof s=="string"?n=>n.key===s:Array.isArray(s)?n=>s.includes(n.key):()=>!0}function mB(...s){let n,t,l={};s.length===3?(n=s[0],t=s[1],l=s[2]):s.length===2?typeof s[1]=="object"?(n=!0,t=s[0],l=s[1]):(n=s[0],t=s[1]):(n=!0,t=s[0]);const{target:o=ss,eventName:r="keydown",passive:c=!1,dedupe:i=!1}=l,p=hB(n);return be(o,r,y=>{y.repeat&&Ye(i)||p(y)&&t(y)},c)}function BB(s={}){var n;const{window:t=ss}=s,l=(n=s.document)!=null?n:t==null?void 0:t.document,o=L3(()=>null,()=>l==null?void 0:l.activeElement);return t&&(be(t,"blur",r=>{r.relatedTarget===null&&o.trigger()},!0),be(t,"focus",o.trigger,!0)),o}function AB(){const s=Y(!1);return Fs()&&Wn(()=>{s.value=!0}),s}function Ul(s){const n=AB();return O(()=>(n.value,!!s()))}function _B(s,n={}){const{immediate:t=!0,window:l=ss}=n,o=Y(!1);let r=0,c=null;function i(y){if(!o.value||!l)return;const d=y-r;s({delta:d,timestamp:y}),r=y,c=l.requestAnimationFrame(i)}function p(){!o.value&&l&&(o.value=!0,c=l.requestAnimationFrame(i))}function u(){o.value=!1,c!=null&&l&&(l.cancelAnimationFrame(c),c=null)}return t&&p(),cn(u),{isActive:qs(o),pause:u,resume:p}}function ot(s,n={}){const{window:t=ss}=n,l=Ul(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let o;const r=Y(!1),c=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i))},i=()=>{l.value&&(c(),o=t.matchMedia(ed(s).value),r.value=!!(o!=null&&o.matches),o&&("addEventListener"in o?o.addEventListener("change",i):o.addListener(i)))};return Dt(i),cn(()=>c()),r}const vB={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function gB(s,n={}){function t(i,p){let u=s[i];return p!=null&&(u=W3(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:l=ss}=n;function o(i){return l?l.matchMedia(i).matches:!1}const r=i=>ot(`(min-width: ${t(i)})`,n),c=Object.keys(s).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>r(p),enumerable:!0,configurable:!0}),i),{});return Object.assign(c,{greater(i){return ot(`(min-width: ${t(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return ot(`(max-width: ${t(i,-.1)})`,n)},smallerOrEqual(i){return ot(`(max-width: ${t(i)})`,n)},between(i,p){return ot(`(min-width: ${t(i)}) and (max-width: ${t(p,-.1)})`,n)},isGreater(i){return o(`(min-width: ${t(i,.1)})`)},isGreaterOrEqual(i){return o(`(min-width: ${t(i)})`)},isSmaller(i){return o(`(max-width: ${t(i,-.1)})`)},isSmallerOrEqual(i){return o(`(max-width: ${t(i)})`)},isInBetween(i,p){return o(`(min-width: ${t(i)}) and (max-width: ${t(p,-.1)})`)},current(){const i=Object.keys(s).map(p=>[p,r(p)]);return O(()=>i.filter(([,p])=>p.value).map(([p])=>p))}})}function CB(s={}){const{navigator:n=dB,read:t=!1,source:l,copiedDuring:o=1500,legacy:r=!1}=s,c=["copy","cut"],i=Ul(()=>n&&"clipboard"in n),p=O(()=>i.value||r),u=Y(""),y=Y(!1),d=sB(()=>y.value=!1,o);function f(){i.value?n.clipboard.readText().then(C=>{u.value=C}):u.value=g()}if(p.value&&t)for(const C of c)be(C,f);async function h(C=Ye(l)){p.value&&C!=null&&(i.value?await n.clipboard.writeText(C):m(C),u.value=C,y.value=!0,d.start())}function m(C){const D=document.createElement("textarea");D.value=C??"",D.style.position="absolute",D.style.opacity="0",document.body.appendChild(D),D.select(),document.execCommand("copy"),D.remove()}function g(){var C,D,b;return(b=(D=(C=document==null?void 0:document.getSelection)==null?void 0:C.call(document))==null?void 0:D.toString())!=null?b:""}return{isSupported:p,text:u,copied:y,copy:h}}function DB(s){return JSON.parse(JSON.stringify(s))}const io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},po="__vueuse_ssr_handlers__",bB=wB();function wB(){return po in io||(io[po]=io[po]||{}),io[po]}function EB(s,n){return bB[s]||n}function kB(s){return s==null?"any":s instanceof Set?"set":s instanceof Map?"map":s instanceof Date?"date":typeof s=="boolean"?"boolean":typeof s=="string"?"string":typeof s=="object"?"object":Number.isNaN(s)?"any":"number"}var xB=Object.defineProperty,Xi=Object.getOwnPropertySymbols,$B=Object.prototype.hasOwnProperty,FB=Object.prototype.propertyIsEnumerable,Qi=(s,n,t)=>n in s?xB(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,ep=(s,n)=>{for(var t in n||(n={}))$B.call(n,t)&&Qi(s,t,n[t]);if(Xi)for(var t of Xi(n))FB.call(n,t)&&Qi(s,t,n[t]);return s};const TB={boolean:{read:s=>s==="true",write:s=>String(s)},object:{read:s=>JSON.parse(s),write:s=>JSON.stringify(s)},number:{read:s=>Number.parseFloat(s),write:s=>String(s)},any:{read:s=>s,write:s=>String(s)},string:{read:s=>s,write:s=>String(s)},map:{read:s=>new Map(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s.entries()))},set:{read:s=>new Set(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s))},date:{read:s=>new Date(s),write:s=>s.toISOString()}},sp="vueuse-storage";function SB(s,n,t,l={}){var o;const{flush:r="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:y,window:d=ss,eventFilter:f,onError:h=L=>{console.error(L)}}=l,m=(y?rn:Y)(n);if(!t)try{t=EB("getDefaultStorage",()=>{var L;return(L=ss)==null?void 0:L.localStorage})()}catch(L){h(L)}if(!t)return m;const g=Ye(n),C=kB(g),D=(o=l.serializer)!=null?o:TB[C],{pause:b,resume:v}=yB(m,()=>x(m.value),{flush:r,deep:c,eventFilter:f});return d&&i&&(be(d,"storage",N),be(d,sp,S)),N(),m;function x(L){try{if(L==null)t.removeItem(s);else{const U=D.write(L),le=t.getItem(s);le!==U&&(t.setItem(s,U),d&&d.dispatchEvent(new CustomEvent(sp,{detail:{key:s,oldValue:le,newValue:U,storageArea:t}})))}}catch(U){h(U)}}function $(L){const U=L?L.newValue:t.getItem(s);if(U==null)return p&&g!==null&&t.setItem(s,D.write(g)),g;if(!L&&u){const le=D.read(U);return typeof u=="function"?u(le,g):C==="object"&&!Array.isArray(le)?ep(ep({},g),le):le}else return typeof U!="string"?U:D.read(U)}function S(L){N(L.detail)}function N(L){if(!(L&&L.storageArea!==t)){if(L&&L.key==null){m.value=g;return}if(!(L&&L.key!==s)){b();try{m.value=$(L)}catch(U){h(U)}finally{L?os(v):v()}}}}}function OB(s){return ot("(prefers-color-scheme: dark)",s)}var IB=Object.defineProperty,LB=Object.defineProperties,PB=Object.getOwnPropertyDescriptors,np=Object.getOwnPropertySymbols,MB=Object.prototype.hasOwnProperty,jB=Object.prototype.propertyIsEnumerable,tp=(s,n,t)=>n in s?IB(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,zB=(s,n)=>{for(var t in n||(n={}))MB.call(n,t)&&tp(s,t,n[t]);if(np)for(var t of np(n))jB.call(n,t)&&tp(s,t,n[t]);return s},RB=(s,n)=>LB(s,PB(n));function LP(s,n={}){var t,l;const{pointerTypes:o,preventDefault:r,stopPropagation:c,exact:i,onMove:p,onEnd:u,onStart:y,initialValue:d,axis:f="both",draggingElement:h=ss,handle:m=s}=n,g=Y((t=Ye(d))!=null?t:{x:0,y:0}),C=Y(),D=S=>o?o.includes(S.pointerType):!0,b=S=>{Ye(r)&&S.preventDefault(),Ye(c)&&S.stopPropagation()},v=S=>{if(!D(S)||Ye(i)&&S.target!==Ye(s))return;const N=Ye(s).getBoundingClientRect(),L={x:S.clientX-N.left,y:S.clientY-N.top};(y==null?void 0:y(L,S))!==!1&&(C.value=L,b(S))},x=S=>{if(!D(S)||!C.value)return;let{x:N,y:L}=g.value;(f==="x"||f==="both")&&(N=S.clientX-C.value.x),(f==="y"||f==="both")&&(L=S.clientY-C.value.y),g.value={x:N,y:L},p==null||p(g.value,S),b(S)},$=S=>{D(S)&&C.value&&(C.value=void 0,u==null||u(g.value,S),b(S))};if(Ks){const S={capture:(l=n.capture)!=null?l:!0};be(m,"pointerdown",v,S),be(h,"pointermove",x,S),be(h,"pointerup",$,S)}return RB(zB({},X3(g)),{position:g,isDragging:O(()=>!!C.value),style:O(()=>`left:${g.value.x}px;top:${g.value.y}px;`)})}var lp=Object.getOwnPropertySymbols,HB=Object.prototype.hasOwnProperty,NB=Object.prototype.propertyIsEnumerable,VB=(s,n)=>{var t={};for(var l in s)HB.call(s,l)&&n.indexOf(l)<0&&(t[l]=s[l]);if(s!=null&&lp)for(var l of lp(s))n.indexOf(l)<0&&NB.call(s,l)&&(t[l]=s[l]);return t};function WB(s,n,t={}){const l=t,{window:o=ss}=l,r=VB(l,["window"]);let c;const i=Ul(()=>o&&"ResizeObserver"in o),p=()=>{c&&(c.disconnect(),c=void 0)},u=O(()=>Array.isArray(s)?s.map(f=>rs(f)):[rs(s)]),y=ve(u,f=>{if(p(),i.value&&o){c=new ResizeObserver(n);for(const h of f)h&&c.observe(h,r)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{p(),y()};return cn(d),{isSupported:i,stop:d}}function UB(s,n={width:0,height:0},t={}){const{window:l=ss,box:o="content-box"}=t,r=O(()=>{var p,u;return(u=(p=rs(s))==null?void 0:p.namespaceURI)==null?void 0:u.includes("svg")}),c=Y(n.width),i=Y(n.height);return WB(s,([p])=>{const u=o==="border-box"?p.borderBoxSize:o==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(l&&r.value){const y=rs(s);if(y){const d=l.getComputedStyle(y);c.value=Number.parseFloat(d.width),i.value=Number.parseFloat(d.height)}}else if(u){const y=Array.isArray(u)?u:[u];c.value=y.reduce((d,{inlineSize:f})=>d+f,0),i.value=y.reduce((d,{blockSize:f})=>d+f,0)}else c.value=p.contentRect.width,i.value=p.contentRect.height},t),ve(()=>rs(s),p=>{c.value=p?n.width:0,i.value=p?n.height:0}),{width:c,height:i}}function qB(s,n,t={}){const{root:l,rootMargin:o="0px",threshold:r=.1,window:c=ss,immediate:i=!0}=t,p=Ul(()=>c&&"IntersectionObserver"in c),u=O(()=>{const m=Ye(s);return(Array.isArray(m)?m:[m]).map(rs).filter(j3)});let y=Bt;const d=Y(i),f=p.value?ve(()=>[u.value,rs(l),d.value],([m,g])=>{if(y(),!d.value||!m.length)return;const C=new IntersectionObserver(n,{root:rs(g),rootMargin:o,threshold:r});m.forEach(D=>D&&C.observe(D)),y=()=>{C.disconnect(),y=Bt}},{immediate:i,flush:"post"}):Bt,h=()=>{y(),f(),d.value=!1};return cn(h),{isSupported:p,isActive:d,pause(){y(),d.value=!1},resume(){d.value=!0},stop:h}}const op=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function GB(s,n={}){const{document:t=od,autoExit:l=!1}=n,o=O(()=>{var D;return(D=rs(s))!=null?D:t==null?void 0:t.querySelector("html")}),r=Y(!1),c=O(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(D=>t&&D in t||o.value&&D in o.value)),i=O(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(D=>t&&D in t||o.value&&D in o.value)),p=O(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(D=>t&&D in t||o.value&&D in o.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(D=>t&&D in t),y=Ul(()=>o.value&&t&&c.value!==void 0&&i.value!==void 0&&p.value!==void 0),d=()=>u?(t==null?void 0:t[u])===o.value:!1,f=()=>{if(p.value){if(t&&t[p.value]!=null)return t[p.value];{const D=o.value;if((D==null?void 0:D[p.value])!=null)return!!D[p.value]}}return!1};async function h(){if(y.value){if(i.value)if((t==null?void 0:t[i.value])!=null)await t[i.value]();else{const D=o.value;(D==null?void 0:D[i.value])!=null&&await D[i.value]()}r.value=!1}}async function m(){if(!y.value)return;f()&&await h();const D=o.value;c.value&&(D==null?void 0:D[c.value])!=null&&(await D[c.value](),r.value=!0)}async function g(){await(r.value?h():m())}const C=()=>{const D=f();(!D||D&&d())&&(r.value=D)};return be(t,op,C,!1),be(()=>rs(o),op,C,!1),l&&cn(h),{isSupported:y,isFullscreen:r,enter:m,exit:h,toggle:g}}function Ys(s,n,t={}){const{window:l=ss}=t;return SB(s,n,l==null?void 0:l.localStorage,t)}const KB={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function YB(s={}){const{reactive:n=!1,target:t=ss,aliasMap:l=KB,passive:o=!0,onEventFired:r=Bt}=s,c=qe(new Set),i={toJSON(){return{}},current:c},p=n?qe(i):i,u=new Set,y=new Set;function d(g,C){g in p&&(n?p[g]=C:p[g].value=C)}function f(){c.clear();for(const g of y)d(g,!1)}function h(g,C){var D,b;const v=(D=g.key)==null?void 0:D.toLowerCase(),$=[(b=g.code)==null?void 0:b.toLowerCase(),v].filter(Boolean);v&&(C?c.add(v):c.delete(v));for(const S of $)y.add(S),d(S,C);v==="meta"&&!C?(u.forEach(S=>{c.delete(S),d(S,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&C&&[...c,...$].forEach(S=>u.add(S))}be(t,"keydown",g=>(h(g,!0),r(g)),{passive:o}),be(t,"keyup",g=>(h(g,!1),r(g)),{passive:o}),be("blur",f,{passive:!0}),be("focus",f,{passive:!0});const m=new Proxy(p,{get(g,C,D){if(typeof C!="string")return Reflect.get(g,C,D);if(C=C.toLowerCase(),C in l&&(C=l[C]),!(C in p))if(/[+_-]/.test(C)){const v=C.split(/[+_-]/g).map(x=>x.trim());p[C]=O(()=>v.every(x=>Ye(m[x])))}else p[C]=Y(!1);const b=Reflect.get(g,C,D);return n?Ye(b):b}});return m}const ZB={page:s=>[s.pageX,s.pageY],client:s=>[s.clientX,s.clientY],screen:s=>[s.screenX,s.screenY],movement:s=>s instanceof Touch?null:[s.movementX,s.movementY]};function PP(s={}){const{type:n="page",touch:t=!0,resetOnTouchEnds:l=!1,initialValue:o={x:0,y:0},window:r=ss,target:c=r,eventFilter:i}=s,p=Y(o.x),u=Y(o.y),y=Y(null),d=typeof n=="function"?n:ZB[n],f=D=>{const b=d(D);b&&([p.value,u.value]=b,y.value="mouse")},h=D=>{if(D.touches.length>0){const b=d(D.touches[0]);b&&([p.value,u.value]=b,y.value="touch")}},m=()=>{p.value=o.x,u.value=o.y},g=i?D=>i(()=>f(D),{}):D=>f(D),C=i?D=>i(()=>h(D),{}):D=>h(D);return c&&(be(c,"mousemove",g,{passive:!0}),be(c,"dragover",g,{passive:!0}),t&&n!=="movement"&&(be(c,"touchstart",C,{passive:!0}),be(c,"touchmove",C,{passive:!0}),l&&be(c,"touchend",m,{passive:!0}))),{x:p,y:u,sourceType:y}}function JB(s,n={}){const t=ed(s),{threshold:l=50,onSwipe:o,onSwipeEnd:r,onSwipeStart:c}=n,i=qe({x:0,y:0}),p=(S,N)=>{i.x=S,i.y=N},u=qe({x:0,y:0}),y=(S,N)=>{u.x=S,u.y=N},d=O(()=>i.x-u.x),f=O(()=>i.y-u.y),{max:h,abs:m}=Math,g=O(()=>h(m(d.value),m(f.value))>=l),C=Y(!1),D=Y(!1),b=O(()=>g.value?m(d.value)>m(f.value)?d.value>0?"left":"right":f.value>0?"up":"down":"none"),v=S=>{var N,L,U;const le=S.buttons===0,ye=S.buttons===1;return(U=(L=(N=n.pointerTypes)==null?void 0:N.includes(S.pointerType))!=null?L:le||ye)!=null?U:!0},x=[be(s,"pointerdown",S=>{var N,L;if(!v(S))return;D.value=!0,(L=(N=t.value)==null?void 0:N.style)==null||L.setProperty("touch-action","none");const U=S.target;U==null||U.setPointerCapture(S.pointerId);const{clientX:le,clientY:ye}=S;p(le,ye),y(le,ye),c==null||c(S)}),be(s,"pointermove",S=>{if(!v(S)||!D.value)return;const{clientX:N,clientY:L}=S;y(N,L),!C.value&&g.value&&(C.value=!0),C.value&&(o==null||o(S))}),be(s,"pointerup",S=>{var N,L;v(S)&&(C.value&&(r==null||r(S,b.value)),D.value=!1,C.value=!1,(L=(N=t.value)==null?void 0:N.style)==null||L.setProperty("touch-action","initial"))})],$=()=>x.forEach(S=>S());return{isSwiping:qs(C),direction:qs(b),posStart:qs(i),posEnd:qs(u),distanceX:d,distanceY:f,stop:$}}let XB=0;function MP(s,n={}){const t=Y(!1),{document:l=od,immediate:o=!0,manual:r=!1,id:c=`vueuse_styletag_${++XB}`}=n,i=Y(s);let p=()=>{};const u=()=>{if(!l)return;const d=l.getElementById(c)||l.createElement("style");d.isConnected||(d.type="text/css",d.id=c,n.media&&(d.media=n.media),l.head.appendChild(d)),!t.value&&(p=ve(i,f=>{d.textContent=f},{immediate:!0}),t.value=!0)},y=()=>{!l||!t.value||(p(),l.head.removeChild(l.getElementById(c)),t.value=!1)};return o&&!r&&sd(u),r||cn(y),{id:c,css:i,unload:y,load:u,isLoaded:qs(t)}}var QB=Object.defineProperty,rp=Object.getOwnPropertySymbols,eA=Object.prototype.hasOwnProperty,sA=Object.prototype.propertyIsEnumerable,ap=(s,n,t)=>n in s?QB(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,nA=(s,n)=>{for(var t in n||(n={}))eA.call(n,t)&&ap(s,t,n[t]);if(rp)for(var t of rp(n))sA.call(n,t)&&ap(s,t,n[t]);return s};function jP(s={}){const{controls:n=!1,offset:t=0,immediate:l=!0,interval:o="requestAnimationFrame",callback:r}=s,c=Y(ga()+t),i=()=>c.value=ga()+t,p=r?()=>{i(),r(c.value)}:i,u=o==="requestAnimationFrame"?_B(p,{immediate:l}):eB(p,o,{immediate:l});return n?nA({timestamp:c},u):c}function sn(s,n,t,l={}){var o,r,c;const{clone:i=!1,passive:p=!1,eventName:u,deep:y=!1,defaultValue:d,shouldEmit:f}=l,h=Fs(),m=t||(h==null?void 0:h.emit)||((o=h==null?void 0:h.$emit)==null?void 0:o.bind(h))||((c=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:c.bind(h==null?void 0:h.proxy));let g=u;n||(n="modelValue"),g=g||`update:${n.toString()}`;const C=v=>i?typeof i=="function"?i(v):DB(v):v,D=()=>M3(s[n])?C(s[n]):d,b=v=>{f?f(v)&&m(g,v):m(g,v)};if(p){const v=D(),x=Y(v);return ve(()=>s[n],$=>x.value=C($)),ve(x,$=>{($!==s[n]||y)&&b($)},{deep:y}),x}else return O({get(){return D()},set(v){b(v)}})}function zP({window:s=ss}={}){if(!s)return Y(!1);const n=Y(s.document.hasFocus());return be(s,"blur",()=>{n.value=!1}),be(s,"focus",()=>{n.value=!0}),n}function tA(s={}){const{window:n=ss,initialWidth:t=1/0,initialHeight:l=1/0,listenOrientation:o=!0,includeScrollbar:r=!0}=s,c=Y(t),i=Y(l),p=()=>{n&&(r?(c.value=n.innerWidth,i.value=n.innerHeight):(c.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};if(p(),sd(p),be("resize",p,{passive:!0}),o){const u=ot("(orientation: portrait)");ve(u,()=>p())}return{width:c,height:i}}function lA(){return rd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function rd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const oA=typeof Proxy=="function",rA="devtools-plugin:setup",aA="plugin:settings:set";let $t,Ca;function cA(){var s;return $t!==void 0||(typeof window<"u"&&window.performance?($t=!0,Ca=window.performance):typeof global<"u"&&(!((s=global.perf_hooks)===null||s===void 0)&&s.performance)?($t=!0,Ca=global.perf_hooks.performance):$t=!1),$t}function iA(){return cA()?Ca.now():Date.now()}class pA{constructor(n,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=t;const l={};if(n.settings)for(const c in n.settings){const i=n.settings[c];l[c]=i.defaultValue}const o=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},l);try{const c=localStorage.getItem(o),i=JSON.parse(c);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(c){try{localStorage.setItem(o,JSON.stringify(c))}catch{}r=c},now(){return iA()}},t&&t.on(aA,(c,i)=>{c===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(c,i)=>this.target?this.target.on[i]:(...p)=>{this.onQueue.push({method:i,args:p})}}),this.proxiedTarget=new Proxy({},{get:(c,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...p)=>(this.targetQueue.push({method:i,args:p,resolve:()=>{}}),this.fallbacks[i](...p)):(...p)=>new Promise(u=>{this.targetQueue.push({method:i,args:p,resolve:u})})})}async setRealTarget(n){this.target=n;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function uA(s,n){const t=s,l=rd(),o=lA(),r=oA&&t.enableEarlyProxy;if(o&&(l.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))o.emit(rA,s,n);else{const c=r?new pA(t,o):null;(l.__VUE_DEVTOOLS_PLUGINS__=l.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:n,proxy:c}),c&&n(c.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof window<"u";function yA(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const Le=Object.assign;function Or(s,n){const t={};for(const l in n){const o=n[l];t[l]=$s(o)?o.map(s):s(o)}return t}const hl=()=>{},$s=Array.isArray;function Fe(s){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+s].concat(n))}const dA=/\/$/,fA=s=>s.replace(dA,"");function Ir(s,n,t="/"){let l,o={},r="",c="";const i=n.indexOf("#");let p=n.indexOf("?");return i<p&&i>=0&&(p=-1),p>-1&&(l=n.slice(0,p),r=n.slice(p+1,i>-1?i:n.length),o=s(r)),i>-1&&(l=l||n.slice(0,i),c=n.slice(i,n.length)),l=BA(l??n,t),{fullPath:l+(r&&"?")+r+c,path:l,query:o,hash:c}}function hA(s,n){const t=n.query?s(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function cp(s,n){return!n||!s.toLowerCase().startsWith(n.toLowerCase())?s:s.slice(n.length)||"/"}function ip(s,n,t){const l=n.matched.length-1,o=t.matched.length-1;return l>-1&&l===o&&Nn(n.matched[l],t.matched[o])&&ad(n.params,t.params)&&s(n.query)===s(t.query)&&n.hash===t.hash}function Nn(s,n){return(s.aliasOf||s)===(n.aliasOf||n)}function ad(s,n){if(Object.keys(s).length!==Object.keys(n).length)return!1;for(const t in s)if(!mA(s[t],n[t]))return!1;return!0}function mA(s,n){return $s(s)?pp(s,n):$s(n)?pp(n,s):s===n}function pp(s,n){return $s(n)?s.length===n.length&&s.every((t,l)=>t===n[l]):s.length===1&&s[0]===n}function BA(s,n){if(s.startsWith("/"))return s;if(!n.startsWith("/"))return Fe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${s}" from "${n}". It should look like "/${n}".`),s;if(!s)return n;const t=n.split("/"),l=s.split("/"),o=l[l.length-1];(o===".."||o===".")&&l.push("");let r=t.length-1,c,i;for(c=0;c<l.length;c++)if(i=l[c],i!==".")if(i==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+l.slice(c-(c===l.length?1:0)).join("/")}var Fl;(function(s){s.pop="pop",s.push="push"})(Fl||(Fl={}));var ml;(function(s){s.back="back",s.forward="forward",s.unknown=""})(ml||(ml={}));function AA(s){if(!s)if(hn){const n=document.querySelector("base");s=n&&n.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),fA(s)}const _A=/^[^#]+#/;function vA(s,n){return s.replace(_A,"#")+n}function gA(s,n){const t=document.documentElement.getBoundingClientRect(),l=s.getBoundingClientRect();return{behavior:n.behavior,left:l.left-t.left-(n.left||0),top:l.top-t.top-(n.top||0)}}const fr=()=>({left:window.pageXOffset,top:window.pageYOffset});function CA(s){let n;if("el"in s){const t=s.el,l=typeof t=="string"&&t.startsWith("#");if(typeof s.el=="string"&&(!l||!document.getElementById(s.el.slice(1))))try{const r=document.querySelector(s.el);if(l&&r){Fe(`The selector "${s.el}" should be passed as "el: document.querySelector('${s.el}')" because it starts with "#".`);return}}catch{Fe(`The selector "${s.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof t=="string"?l?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o){Fe(`Couldn't find element using selector "${s.el}" returned by scrollBehavior.`);return}n=gA(o,s)}else n=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function up(s,n){return(history.state?history.state.position-n:-1)+s}const Da=new Map;function DA(s,n){Da.set(s,n)}function bA(s){const n=Da.get(s);return Da.delete(s),n}let wA=()=>location.protocol+"//"+location.host;function cd(s,n){const{pathname:t,search:l,hash:o}=n,r=s.indexOf("#");if(r>-1){let i=o.includes(s.slice(r))?s.slice(r).length:1,p=o.slice(i);return p[0]!=="/"&&(p="/"+p),cp(p,"")}return cp(t,s)+l+o}function EA(s,n,t,l){let o=[],r=[],c=null;const i=({state:f})=>{const h=cd(s,location),m=t.value,g=n.value;let C=0;if(f){if(t.value=h,n.value=f,c&&c===m){c=null;return}C=g?f.position-g.position:0}else l(h);o.forEach(D=>{D(t.value,m,{delta:C,type:Fl.pop,direction:C?C>0?ml.forward:ml.back:ml.unknown})})};function p(){c=t.value}function u(f){o.push(f);const h=()=>{const m=o.indexOf(f);m>-1&&o.splice(m,1)};return r.push(h),h}function y(){const{history:f}=window;f.state&&f.replaceState(Le({},f.state,{scroll:fr()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",y,{passive:!0}),{pauseListeners:p,listen:u,destroy:d}}function yp(s,n,t,l=!1,o=!1){return{back:s,current:n,forward:t,replaced:l,position:window.history.length,scroll:o?fr():null}}function kA(s){const{history:n,location:t}=window,l={value:cd(s,t)},o={value:n.state};o.value||r(l.value,{back:null,current:l.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(p,u,y){const d=s.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?s:s.slice(d))+p:wA()+s+p;try{n[y?"replaceState":"pushState"](u,"",f),o.value=u}catch(h){Fe("Error with push/replace State",h),t[y?"replace":"assign"](f)}}function c(p,u){const y=Le({},n.state,yp(o.value.back,p,o.value.forward,!0),u,{position:o.value.position});r(p,y,!0),l.value=p}function i(p,u){const y=Le({},o.value,n.state,{forward:p,scroll:fr()});n.state||Fe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(y.current,y,!0);const d=Le({},yp(l.value,p,null),{position:y.position+1},u);r(p,d,!1),l.value=p}return{location:l,state:o,push:i,replace:c}}function xA(s){s=AA(s);const n=kA(s),t=EA(s,n.state,n.location,n.replace);function l(r,c=!0){c||t.pauseListeners(),history.go(r)}const o=Le({location:"",base:s,go:l,createHref:vA.bind(null,s)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function $A(s){return typeof s=="string"||s&&typeof s=="object"}function id(s){return typeof s=="string"||typeof s=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pd=Symbol("navigation failure");var dp;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(dp||(dp={}));const FA={1({location:s,currentLocation:n}){return`No match for
 ${JSON.stringify(s)}${n?`
while being at
`+JSON.stringify(n):""}`},2({from:s,to:n}){return`Redirected from "${s.fullPath}" to "${SA(n)}" via a navigation guard.`},4({from:s,to:n}){return`Navigation aborted from "${s.fullPath}" to "${n.fullPath}" via a navigation guard.`},8({from:s,to:n}){return`Navigation cancelled from "${s.fullPath}" to "${n.fullPath}" with a new navigation.`},16({from:s,to:n}){return`Avoided redundant navigation to current location: "${s.fullPath}".`}};function Rt(s,n){return Le(new Error(FA[s](n)),{type:s,[pd]:!0},n)}function pn(s,n){return s instanceof Error&&pd in s&&(n==null||!!(s.type&n))}const TA=["params","query","hash"];function SA(s){if(typeof s=="string")return s;if("path"in s)return s.path;const n={};for(const t of TA)t in s&&(n[t]=s[t]);return JSON.stringify(n,null,2)}const fp="[^/]+?",OA={sensitive:!1,strict:!1,start:!0,end:!0},IA=/[.+*?^${}()[\]/\\]/g;function LA(s,n){const t=Le({},OA,n),l=[];let o=t.start?"^":"";const r=[];for(const u of s){const y=u.length?[]:[90];t.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const f=u[d];let h=40+(t.sensitive?.25:0);if(f.type===0)d||(o+="/"),o+=f.value.replace(IA,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:g,optional:C,regexp:D}=f;r.push({name:m,repeatable:g,optional:C});const b=D||fp;if(b!==fp){h+=10;try{new RegExp(`(${b})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+x.message)}}let v=g?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(v=C&&u.length<2?`(?:/${v})`:"/"+v),C&&(v+="?"),o+=v,h+=20,C&&(h+=-8),g&&(h+=-20),b===".*"&&(h+=-50)}y.push(h)}l.push(y)}if(t.strict&&t.end){const u=l.length-1;l[u][l[u].length-1]+=.7000000000000001}t.strict||(o+="/?"),t.end?o+="$":t.strict&&(o+="(?:/|$)");const c=new RegExp(o,t.sensitive?"":"i");function i(u){const y=u.match(c),d={};if(!y)return null;for(let f=1;f<y.length;f++){const h=y[f]||"",m=r[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function p(u){let y="",d=!1;for(const f of s){(!d||!y.endsWith("/"))&&(y+="/"),d=!1;for(const h of f)if(h.type===0)y+=h.value;else if(h.type===1){const{value:m,repeatable:g,optional:C}=h,D=m in u?u[m]:"";if($s(D)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=$s(D)?D.join("/"):D;if(!b)if(C)f.length<2&&(y.endsWith("/")?y=y.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);y+=b}}return y||"/"}return{re:c,score:l,keys:r,parse:i,stringify:p}}function PA(s,n){let t=0;for(;t<s.length&&t<n.length;){const l=n[t]-s[t];if(l)return l;t++}return s.length<n.length?s.length===1&&s[0]===40+40?-1:1:s.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function MA(s,n){let t=0;const l=s.score,o=n.score;for(;t<l.length&&t<o.length;){const r=PA(l[t],o[t]);if(r)return r;t++}if(Math.abs(o.length-l.length)===1){if(hp(l))return 1;if(hp(o))return-1}return o.length-l.length}function hp(s){const n=s[s.length-1];return s.length>0&&n[n.length-1]<0}const jA={type:0,value:""},zA=/[a-zA-Z0-9_]/;function RA(s){if(!s)return[[]];if(s==="/")return[[jA]];if(!s.startsWith("/"))throw new Error(`Route paths should start with a "/": "${s}" should be "/${s}".`);function n(h){throw new Error(`ERR (${t})/"${u}": ${h}`)}let t=0,l=t;const o=[];let r;function c(){r&&o.push(r),r=[]}let i=0,p,u="",y="";function d(){u&&(t===0?r.push({type:0,value:u}):t===1||t===2||t===3?(r.length>1&&(p==="*"||p==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:y,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):n("Invalid state to consume buffer"),u="")}function f(){u+=p}for(;i<s.length;){if(p=s[i++],p==="\\"&&t!==2){l=t,t=4;continue}switch(t){case 0:p==="/"?(u&&d(),c()):p===":"?(d(),t=1):f();break;case 4:f(),t=l;break;case 1:p==="("?t=2:zA.test(p)?f():(d(),t=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+p:t=3:y+=p;break;case 3:d(),t=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,y="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${u}"`),d(),c(),o}function HA(s,n,t){const l=LA(RA(s.path),t);{const r=new Set;for(const c of l.keys)r.has(c.name)&&Fe(`Found duplicated params with name "${c.name}" for path "${s.path}". Only the last one will be available on "$route.params".`),r.add(c.name)}const o=Le(l,{record:s,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function NA(s,n){const t=[],l=new Map;n=Ap({strict:!1,end:!0,sensitive:!1},n);function o(y){return l.get(y)}function r(y,d,f){const h=!f,m=VA(y);GA(m,d),m.aliasOf=f&&f.record;const g=Ap(n,y),C=[m];if("alias"in y){const v=typeof y.alias=="string"?[y.alias]:y.alias;for(const x of v)C.push(Le({},m,{components:f?f.record.components:m.components,path:x,aliasOf:f?f.record:m}))}let D,b;for(const v of C){const{path:x}=v;if(d&&x[0]!=="/"){const $=d.record.path,S=$[$.length-1]==="/"?"":"/";v.path=d.record.path+(x&&S+x)}if(v.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(D=HA(v,d,g),d&&x[0]==="/"&&KA(D,d),f?(f.alias.push(D),qA(f,D)):(b=b||D,b!==D&&b.alias.push(D),h&&y.name&&!Bp(D)&&c(y.name)),m.children){const $=m.children;for(let S=0;S<$.length;S++)r($[S],D,f&&f.children[S])}f=f||D,(D.record.components&&Object.keys(D.record.components).length||D.record.name||D.record.redirect)&&p(D)}return b?()=>{c(b)}:hl}function c(y){if(id(y)){const d=l.get(y);d&&(l.delete(y),t.splice(t.indexOf(d),1),d.children.forEach(c),d.alias.forEach(c))}else{const d=t.indexOf(y);d>-1&&(t.splice(d,1),y.record.name&&l.delete(y.record.name),y.children.forEach(c),y.alias.forEach(c))}}function i(){return t}function p(y){let d=0;for(;d<t.length&&MA(y,t[d])>=0&&(y.record.path!==t[d].record.path||!ud(y,t[d]));)d++;t.splice(d,0,y),y.record.name&&!Bp(y)&&l.set(y.record.name,y)}function u(y,d){let f,h={},m,g;if("name"in y&&y.name){if(f=l.get(y.name),!f)throw Rt(1,{location:y});{const b=Object.keys(y.params||{}).filter(v=>!f.keys.find(x=>x.name===v));b.length&&Fe(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=f.record.name,h=Le(mp(d.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),y.params&&mp(y.params,f.keys.map(b=>b.name))),m=f.stringify(h)}else if("path"in y)m=y.path,m.startsWith("/")||Fe(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=t.find(b=>b.re.test(m)),f&&(h=f.parse(m),g=f.record.name);else{if(f=d.name?l.get(d.name):t.find(b=>b.re.test(d.path)),!f)throw Rt(1,{location:y,currentLocation:d});g=f.record.name,h=Le({},d.params,y.params),m=f.stringify(h)}const C=[];let D=f;for(;D;)C.unshift(D.record),D=D.parent;return{name:g,path:m,params:h,matched:C,meta:UA(C)}}return s.forEach(y=>r(y)),{addRoute:r,resolve:u,removeRoute:c,getRoutes:i,getRecordMatcher:o}}function mp(s,n){const t={};for(const l of n)l in s&&(t[l]=s[l]);return t}function VA(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:WA(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function WA(s){const n={},t=s.props||!1;if("component"in s)n.default=t;else for(const l in s.components)n[l]=typeof t=="boolean"?t:t[l];return n}function Bp(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function UA(s){return s.reduce((n,t)=>Le(n,t.meta),{})}function Ap(s,n){const t={};for(const l in s)t[l]=l in n?n[l]:s[l];return t}function ba(s,n){return s.name===n.name&&s.optional===n.optional&&s.repeatable===n.repeatable}function qA(s,n){for(const t of s.keys)if(!t.optional&&!n.keys.find(ba.bind(null,t)))return Fe(`Alias "${n.record.path}" and the original record: "${s.record.path}" must have the exact same param named "${t.name}"`);for(const t of n.keys)if(!t.optional&&!s.keys.find(ba.bind(null,t)))return Fe(`Alias "${n.record.path}" and the original record: "${s.record.path}" must have the exact same param named "${t.name}"`)}function GA(s,n){n&&n.record.name&&!s.name&&!s.path&&Fe(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function KA(s,n){for(const t of n.keys)if(!s.keys.find(ba.bind(null,t)))return Fe(`Absolute path "${s.record.path}" must have the exact same param named "${t.name}" as its parent "${n.record.path}".`)}function ud(s,n){return n.children.some(t=>t===s||ud(s,t))}const yd=/#/g,YA=/&/g,ZA=/\//g,JA=/=/g,XA=/\?/g,dd=/\+/g,QA=/%5B/g,e_=/%5D/g,fd=/%5E/g,s_=/%60/g,hd=/%7B/g,n_=/%7C/g,md=/%7D/g,t_=/%20/g;function wc(s){return encodeURI(""+s).replace(n_,"|").replace(QA,"[").replace(e_,"]")}function l_(s){return wc(s).replace(hd,"{").replace(md,"}").replace(fd,"^")}function wa(s){return wc(s).replace(dd,"%2B").replace(t_,"+").replace(yd,"%23").replace(YA,"%26").replace(s_,"`").replace(hd,"{").replace(md,"}").replace(fd,"^")}function o_(s){return wa(s).replace(JA,"%3D")}function r_(s){return wc(s).replace(yd,"%23").replace(XA,"%3F")}function a_(s){return s==null?"":r_(s).replace(ZA,"%2F")}function Tl(s){try{return decodeURIComponent(""+s)}catch{Fe(`Error decoding "${s}". Using original value`)}return""+s}function c_(s){const n={};if(s===""||s==="?")return n;const l=(s[0]==="?"?s.slice(1):s).split("&");for(let o=0;o<l.length;++o){const r=l[o].replace(dd," "),c=r.indexOf("="),i=Tl(c<0?r:r.slice(0,c)),p=c<0?null:Tl(r.slice(c+1));if(i in n){let u=n[i];$s(u)||(u=n[i]=[u]),u.push(p)}else n[i]=p}return n}function _p(s){let n="";for(let t in s){const l=s[t];if(t=o_(t),l==null){l!==void 0&&(n+=(n.length?"&":"")+t);continue}($s(l)?l.map(r=>r&&wa(r)):[l&&wa(l)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+t,r!=null&&(n+="="+r))})}return n}function i_(s){const n={};for(const t in s){const l=s[t];l!==void 0&&(n[t]=$s(l)?l.map(o=>o==null?null:""+o):l==null?l:""+l)}return n}const p_=Symbol("router view location matched"),vp=Symbol("router view depth"),Ec=Symbol("router"),Bd=Symbol("route location"),Ea=Symbol("router view location");function Xt(){let s=[];function n(l){return s.push(l),()=>{const o=s.indexOf(l);o>-1&&s.splice(o,1)}}function t(){s=[]}return{add:n,list:()=>s,reset:t}}function xn(s,n,t,l,o){const r=l&&(l.enterCallbacks[o]=l.enterCallbacks[o]||[]);return()=>new Promise((c,i)=>{const p=d=>{d===!1?i(Rt(4,{from:t,to:n})):d instanceof Error?i(d):$A(d)?i(Rt(2,{from:n,to:d})):(r&&l.enterCallbacks[o]===r&&typeof d=="function"&&r.push(d),c())},u=s.call(l&&l.instances[o],n,t,u_(p,n,t));let y=Promise.resolve(u);if(s.length<3&&(y=y.then(p)),s.length>2){const d=`The "next" callback was never called inside of ${s.name?'"'+s.name+'"':""}:
${s.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)y=y.then(f=>p._called?f:(Fe(d),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!p._called){Fe(d),i(new Error("Invalid navigation guard"));return}}y.catch(d=>i(d))})}function u_(s,n,t){let l=0;return function(){l++===1&&Fe(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),s._called=!0,l===1&&s.apply(null,arguments)}}function Lr(s,n,t,l){const o=[];for(const r of s){!r.components&&!r.children.length&&Fe(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const c in r.components){let i=r.components[c];{if(!i||typeof i!="object"&&typeof i!="function")throw Fe(`Component "${c}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Fe(`Component "${c}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=i;i=()=>p}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Fe(`Component "${c}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[c]))if(y_(i)){const u=(i.__vccOpts||i)[n];u&&o.push(xn(u,t,l,r,c))}else{let p=i();"catch"in p||(Fe(`Component "${c}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),o.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${r.path}"`));const y=yA(u)?u.default:u;r.components[c]=y;const f=(y.__vccOpts||y)[n];return f&&xn(f,t,l,r,c)()}))}}}return o}function y_(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function gp(s){const n=P(Ec),t=P(Bd),l=O(()=>n.resolve(T(s.to))),o=O(()=>{const{matched:p}=l.value,{length:u}=p,y=p[u-1],d=t.matched;if(!y||!d.length)return-1;const f=d.findIndex(Nn.bind(null,y));if(f>-1)return f;const h=Cp(p[u-2]);return u>1&&Cp(y)===h&&d[d.length-1].path!==h?d.findIndex(Nn.bind(null,p[u-2])):f}),r=O(()=>o.value>-1&&m_(t.params,l.value.params)),c=O(()=>o.value>-1&&o.value===t.matched.length-1&&ad(t.params,l.value.params));function i(p={}){return h_(p)?n[T(s.replace)?"replace":"push"](T(s.to)).catch(hl):Promise.resolve()}if(hn){const p=Fs();if(p){const u={route:l.value,isActive:r.value,isExactActive:c.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(u),Dt(()=>{u.route=l.value,u.isActive=r.value,u.isExactActive=c.value},{flush:"post"})}}return{route:l,href:O(()=>l.value.href),isActive:r,isExactActive:c,navigate:i}}const d_=$e({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gp,setup(s,{slots:n}){const t=qe(gp(s)),{options:l}=P(Ec),o=O(()=>({[Dp(s.activeClass,l.linkActiveClass,"router-link-active")]:t.isActive,[Dp(s.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=n.default&&n.default(t);return s.custom?r:hs("a",{"aria-current":t.isExactActive?s.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},r)}}}),f_=d_;function h_(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const n=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return s.preventDefault&&s.preventDefault(),!0}}function m_(s,n){for(const t in n){const l=n[t],o=s[t];if(typeof l=="string"){if(l!==o)return!1}else if(!$s(o)||o.length!==l.length||l.some((r,c)=>r!==o[c]))return!1}return!0}function Cp(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const Dp=(s,n,t)=>s??n??t,B_=$e({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:n,slots:t}){__();const l=P(Ea),o=O(()=>s.route||l.value),r=P(vp,0),c=O(()=>{let u=T(r);const{matched:y}=o.value;let d;for(;(d=y[u])&&!d.components;)u++;return u}),i=O(()=>o.value.matched[c.value]);Es(vp,O(()=>c.value+1)),Es(p_,i),Es(Ea,o);const p=Y();return ve(()=>[p.value,i.value,s.name],([u,y,d],[f,h,m])=>{y&&(y.instances[d]=u,h&&h!==y&&u&&u===f&&(y.leaveGuards.size||(y.leaveGuards=h.leaveGuards),y.updateGuards.size||(y.updateGuards=h.updateGuards))),u&&y&&(!h||!Nn(y,h)||!f)&&(y.enterCallbacks[d]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=o.value,y=s.name,d=i.value,f=d&&d.components[y];if(!f)return bp(t.default,{Component:f,route:u});const h=d.props[y],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,C=hs(f,Le({},m,n,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[y]=null)},ref:p}));if(hn&&C.ref){const D={depth:c.value,name:d.name,path:d.path,meta:d.meta};($s(C.ref)?C.ref.map(v=>v.i):[C.ref.i]).forEach(v=>{v.__vrv_devtools=D})}return bp(t.default,{Component:C,route:u})||C}}});function bp(s,n){if(!s)return null;const t=s(n);return t.length===1?t[0]:t}const A_=B_;function __(){const s=Fs(),n=s.parent&&s.parent.type.name,t=s.parent&&s.parent.subTree&&s.parent.subTree.type;if(n&&(n==="KeepAlive"||n.includes("Transition"))&&typeof t=="object"&&t.name==="RouterView"){const l=n==="KeepAlive"?"keep-alive":"transition";Fe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${l}>
    <component :is="Component" />
  </${l}>
</router-view>`)}}function Qt(s,n){const t=Le({},s,{matched:s.matched.map(l=>x_(l,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:s.fullPath,tooltip:n,value:t}}}function uo(s){return{_custom:{display:s}}}let v_=0;function g_(s,n,t){if(n.__hasDevtools)return;n.__hasDevtools=!0;const l=v_++;uA({id:"org.vuejs.router"+(l?"."+l:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:s},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((y,d)=>{y.instanceData&&y.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Qt(n.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:y,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;y.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Ad})}$s(d.__vrl_devtools)&&(d.__devtoolsApi=o,d.__vrl_devtools.forEach(f=>{let h=gd,m="";f.isExactActive?(h=vd,m="This is exactly active"):f.isActive&&(h=_d,m="This link is active"),y.tags.push({label:f.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),ve(n.currentRoute,()=>{p(),o.notifyComponentUpdate(),o.sendInspectorTree(i),o.sendInspectorState(i)});const r="router:navigations:"+l;o.addTimelineLayer({id:r,label:`Router${l?" "+l:""} Navigations`,color:4237508}),n.onError((y,d)=>{o.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:o.now(),data:{error:y},groupId:d.meta.__navigationId}})});let c=0;n.beforeEach((y,d)=>{const f={guard:uo("beforeEach"),from:Qt(d,"Current Location during this navigation"),to:Qt(y,"Target location")};Object.defineProperty(y.meta,"__navigationId",{value:c++}),o.addTimelineEvent({layerId:r,event:{time:o.now(),title:"Start of navigation",subtitle:y.fullPath,data:f,groupId:y.meta.__navigationId}})}),n.afterEach((y,d,f)=>{const h={guard:uo("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=uo("❌")):h.status=uo("✅"),h.from=Qt(d,"Current Location during this navigation"),h.to=Qt(y,"Target location"),o.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:y.fullPath,time:o.now(),data:h,logType:f?"warning":"default",groupId:y.meta.__navigationId}})});const i="router-inspector:"+l;o.addInspector({id:i,label:"Routes"+(l?" "+l:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!u)return;const y=u;let d=t.getRoutes().filter(f=>!f.parent);d.forEach(bd),y.filter&&(d=d.filter(f=>ka(f,y.filter.toLowerCase()))),d.forEach(f=>Dd(f,n.currentRoute.value)),y.rootNodes=d.map(Cd)}let u;o.on.getInspectorTree(y=>{u=y,y.app===s&&y.inspectorId===i&&p()}),o.on.getInspectorState(y=>{if(y.app===s&&y.inspectorId===i){const f=t.getRoutes().find(h=>h.record.__vd_id===y.nodeId);f&&(y.state={options:D_(f)})}}),o.sendInspectorTree(i),o.sendInspectorState(i)})}function C_(s){return s.optional?s.repeatable?"*":"?":s.repeatable?"+":""}function D_(s){const{record:n}=s,t=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&t.push({editable:!1,key:"name",value:n.name}),t.push({editable:!1,key:"regexp",value:s.re}),s.keys.length&&t.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:s.keys.map(l=>`${l.name}${C_(l)}`).join(" "),tooltip:"Param keys",value:s.keys}}}),n.redirect!=null&&t.push({editable:!1,key:"redirect",value:n.redirect}),s.alias.length&&t.push({editable:!1,key:"aliases",value:s.alias.map(l=>l.record.path)}),Object.keys(s.record.meta).length&&t.push({editable:!1,key:"meta",value:s.record.meta}),t.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:s.score.map(l=>l.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:s.score}}}),t}const Ad=15485081,_d=2450411,vd=8702998,b_=2282478,gd=16486972,w_=6710886;function Cd(s){const n=[],{record:t}=s;t.name!=null&&n.push({label:String(t.name),textColor:0,backgroundColor:b_}),t.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:gd}),s.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:Ad}),s.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:vd}),s.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:_d}),t.redirect&&n.push({label:typeof t.redirect=="string"?`redirect: ${t.redirect}`:"redirects",textColor:16777215,backgroundColor:w_});let l=t.__vd_id;return l==null&&(l=String(E_++),t.__vd_id=l),{id:l,label:t.path,tags:n,children:s.children.map(Cd)}}let E_=0;const k_=/^\/(.*)\/([a-z]*)$/;function Dd(s,n){const t=n.matched.length&&Nn(n.matched[n.matched.length-1],s.record);s.__vd_exactActive=s.__vd_active=t,t||(s.__vd_active=n.matched.some(l=>Nn(l,s.record))),s.children.forEach(l=>Dd(l,n))}function bd(s){s.__vd_match=!1,s.children.forEach(bd)}function ka(s,n){const t=String(s.re).match(k_);if(s.__vd_match=!1,!t||t.length<3)return!1;if(new RegExp(t[1].replace(/\$$/,""),t[2]).test(n))return s.children.forEach(c=>ka(c,n)),s.record.path!=="/"||n==="/"?(s.__vd_match=s.re.test(n),!0):!1;const o=s.record.path.toLowerCase(),r=Tl(o);return!n.startsWith("/")&&(r.includes(n)||o.includes(n))||r.startsWith(n)||o.startsWith(n)||s.record.name&&String(s.record.name).includes(n)?!0:s.children.some(c=>ka(c,n))}function x_(s,n){const t={};for(const l in s)n.includes(l)||(t[l]=s[l]);return t}function $_(s){const n=NA(s.routes,s),t=s.parseQuery||c_,l=s.stringifyQuery||_p,o=s.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Xt(),c=Xt(),i=Xt(),p=rn(bn);let u=bn;hn&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=Or.bind(null,I=>""+I),d=Or.bind(null,a_),f=Or.bind(null,Tl);function h(I,J){let Q,ne;return id(I)?(Q=n.getRecordMatcher(I),ne=J):ne=I,n.addRoute(ne,Q)}function m(I){const J=n.getRecordMatcher(I);J?n.removeRoute(J):Fe(`Cannot remove non-existent route "${String(I)}"`)}function g(){return n.getRoutes().map(I=>I.record)}function C(I){return!!n.getRecordMatcher(I)}function D(I,J){if(J=Le({},J||p.value),typeof I=="string"){const _=Ir(t,I,J.path),F=n.resolve({path:_.path},J),j=o.createHref(_.fullPath);return j.startsWith("//")?Fe(`Location "${I}" resolved to "${j}". A resolved location cannot start with multiple slashes.`):F.matched.length||Fe(`No match found for location with path "${I}"`),Le(_,F,{params:f(F.params),hash:Tl(_.hash),redirectedFrom:void 0,href:j})}let Q;if("path"in I)"params"in I&&!("name"in I)&&Object.keys(I.params).length&&Fe(`Path "${I.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Q=Le({},I,{path:Ir(t,I.path,J.path).path});else{const _=Le({},I.params);for(const F in _)_[F]==null&&delete _[F];Q=Le({},I,{params:d(_)}),J.params=d(J.params)}const ne=n.resolve(Q,J),we=I.hash||"";we&&!we.startsWith("#")&&Fe(`A \`hash\` should always start with the character "#". Replace "${we}" with "#${we}".`),ne.params=y(f(ne.params));const je=hA(l,Le({},I,{hash:l_(we),path:ne.path})),B=o.createHref(je);return B.startsWith("//")?Fe(`Location "${I}" resolved to "${B}". A resolved location cannot start with multiple slashes.`):ne.matched.length||Fe(`No match found for location with path "${"path"in I?I.path:I}"`),Le({fullPath:je,hash:we,query:l===_p?i_(I.query):I.query||{}},ne,{redirectedFrom:void 0,href:B})}function b(I){return typeof I=="string"?Ir(t,I,p.value.path):Le({},I)}function v(I,J){if(u!==I)return Rt(8,{from:J,to:I})}function x(I){return N(I)}function $(I){return x(Le(b(I),{replace:!0}))}function S(I){const J=I.matched[I.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let ne=typeof Q=="function"?Q(I):Q;if(typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=b(ne):{path:ne},ne.params={}),!("path"in ne)&&!("name"in ne))throw Fe(`Invalid redirect found:
${JSON.stringify(ne,null,2)}
 when navigating to "${I.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Le({query:I.query,hash:I.hash,params:"path"in ne?{}:I.params},ne)}}function N(I,J){const Q=u=D(I),ne=p.value,we=I.state,je=I.force,B=I.replace===!0,_=S(Q);if(_)return N(Le(b(_),{state:typeof _=="object"?Le({},we,_.state):we,force:je,replace:B}),J||Q);const F=Q;F.redirectedFrom=J;let j;return!je&&ip(l,ne,Q)&&(j=Rt(16,{to:F,from:ne}),Ts(ne,ne,!0,!1)),(j?Promise.resolve(j):le(F,ne)).catch(M=>pn(M)?pn(M,2)?M:Pe(M):pe(M,F,ne)).then(M=>{if(M){if(pn(M,2))return ip(l,D(M.to),F)&&J&&(J._count=J._count?J._count+1:1)>30?(Fe(`Detected a possibly infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${F.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):N(Le({replace:B},b(M.to),{state:typeof M.to=="object"?Le({},we,M.to.state):we,force:je}),J||F)}else M=Z(F,ne,!0,B,we);return ye(F,ne,M),M})}function L(I,J){const Q=v(I,J);return Q?Promise.reject(Q):Promise.resolve()}function U(I){const J=Zs.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(I):I()}function le(I,J){let Q;const[ne,we,je]=F_(I,J);Q=Lr(ne.reverse(),"beforeRouteLeave",I,J);for(const _ of ne)_.leaveGuards.forEach(F=>{Q.push(xn(F,I,J))});const B=L.bind(null,I,J);return Q.push(B),Ss(Q).then(()=>{Q=[];for(const _ of r.list())Q.push(xn(_,I,J));return Q.push(B),Ss(Q)}).then(()=>{Q=Lr(we,"beforeRouteUpdate",I,J);for(const _ of we)_.updateGuards.forEach(F=>{Q.push(xn(F,I,J))});return Q.push(B),Ss(Q)}).then(()=>{Q=[];for(const _ of I.matched)if(_.beforeEnter&&!J.matched.includes(_))if($s(_.beforeEnter))for(const F of _.beforeEnter)Q.push(xn(F,I,J));else Q.push(xn(_.beforeEnter,I,J));return Q.push(B),Ss(Q)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),Q=Lr(je,"beforeRouteEnter",I,J),Q.push(B),Ss(Q))).then(()=>{Q=[];for(const _ of c.list())Q.push(xn(_,I,J));return Q.push(B),Ss(Q)}).catch(_=>pn(_,8)?_:Promise.reject(_))}function ye(I,J,Q){for(const ne of i.list())U(()=>ne(I,J,Q))}function Z(I,J,Q,ne,we){const je=v(I,J);if(je)return je;const B=J===bn,_=hn?history.state:{};Q&&(ne||B?o.replace(I.fullPath,Le({scroll:B&&_&&_.scroll},we)):o.push(I.fullPath,we)),p.value=I,Ts(I,J,Q,B),Pe()}let _e;function ge(){_e||(_e=o.listen((I,J,Q)=>{if(!Gn.listening)return;const ne=D(I),we=S(ne);if(we){N(Le(we,{replace:!0}),ne).catch(hl);return}u=ne;const je=p.value;hn&&DA(up(je.fullPath,Q.delta),fr()),le(ne,je).catch(B=>pn(B,12)?B:pn(B,2)?(N(B.to,ne).then(_=>{pn(_,20)&&!Q.delta&&Q.type===Fl.pop&&o.go(-1,!1)}).catch(hl),Promise.reject()):(Q.delta&&o.go(-Q.delta,!1),pe(B,ne,je))).then(B=>{B=B||Z(ne,je,!1),B&&(Q.delta&&!pn(B,8)?o.go(-Q.delta,!1):Q.type===Fl.pop&&pn(B,20)&&o.go(-1,!1)),ye(ne,je,B)}).catch(hl)}))}let De=Xt(),Me=Xt(),se;function pe(I,J,Q){Pe(I);const ne=Me.list();return ne.length?ne.forEach(we=>we(I,J,Q)):(Fe("uncaught error during route navigation:"),console.error(I)),Promise.reject(I)}function Ee(){return se&&p.value!==bn?Promise.resolve():new Promise((I,J)=>{De.add([I,J])})}function Pe(I){return se||(se=!I,ge(),De.list().forEach(([J,Q])=>I?Q(I):J()),De.reset()),I}function Ts(I,J,Q,ne){const{scrollBehavior:we}=s;if(!hn||!we)return Promise.resolve();const je=!Q&&bA(up(I.fullPath,0))||(ne||!Q)&&history.state&&history.state.scroll||null;return os().then(()=>we(I,J,je)).then(B=>B&&CA(B)).catch(B=>pe(B,I,J))}const ts=I=>o.go(I);let Bs;const Zs=new Set,Gn={currentRoute:p,listening:!0,addRoute:h,removeRoute:m,hasRoute:C,getRoutes:g,resolve:D,options:s,push:x,replace:$,go:ts,back:()=>ts(-1),forward:()=>ts(1),beforeEach:r.add,beforeResolve:c.add,afterEach:i.add,onError:Me.add,isReady:Ee,install(I){const J=this;I.component("RouterLink",f_),I.component("RouterView",A_),I.config.globalProperties.$router=J,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>T(p)}),hn&&!Bs&&p.value===bn&&(Bs=!0,x(o.location).catch(we=>{Fe("Unexpected error when starting the router:",we)}));const Q={};for(const we in bn)Q[we]=O(()=>p.value[we]);I.provide(Ec,J),I.provide(Bd,qe(Q)),I.provide(Ea,p);const ne=I.unmount;Zs.add(I),I.unmount=function(){Zs.delete(I),Zs.size<1&&(u=bn,_e&&_e(),_e=null,p.value=bn,Bs=!1,se=!1),ne()},hn&&g_(I,J,n)}};function Ss(I){return I.reduce((J,Q)=>J.then(()=>U(Q)),Promise.resolve())}return Gn}function F_(s,n){const t=[],l=[],o=[],r=Math.max(n.matched.length,s.matched.length);for(let c=0;c<r;c++){const i=n.matched[c];i&&(s.matched.find(u=>Nn(u,i))?l.push(i):t.push(i));const p=s.matched[c];p&&(n.matched.find(u=>Nn(u,p))||o.push(p))}return[t,l,o]}const Pr=Y(!1),Bl=Y(!1),Ot=Y(!1),T_=Y(!0),xa=gB({xs:460,...vB}),At=tA(),wd=YB(),S_=O(()=>At.height.value-At.width.value/On>180),Ed=GB(Ks?document.body:null),Pn=BB(),O_=O(()=>{var s,n;return["INPUT","TEXTAREA"].includes(((s=Pn.value)==null?void 0:s.tagName)||"")||((n=Pn.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),I_=O(()=>{var s;return["BUTTON","A"].includes(((s=Pn.value)==null?void 0:s.tagName)||"")});Ys("slidev-camera","default");Ys("slidev-mic","default");const Co=Ys("slidev-scale",0),us=Ys("slidev-show-overview",!1),Mr=Ys("slidev-presenter-cursor",!0),wp=Ys("slidev-show-editor",!1);Ys("slidev-editor-width",Ks?window.innerWidth*.4:100);const kd=nd(us);function Ep(s,n,t,l=o=>o){return s*l(.5-n*(.5-t))}function L_(s){return[-s[0],-s[1]]}function Ws(s,n){return[s[0]+n[0],s[1]+n[1]]}function Ls(s,n){return[s[0]-n[0],s[1]-n[1]]}function Vs(s,n){return[s[0]*n,s[1]*n]}function P_(s,n){return[s[0]/n,s[1]/n]}function el(s){return[s[1],-s[0]]}function kp(s,n){return s[0]*n[0]+s[1]*n[1]}function M_(s,n){return s[0]===n[0]&&s[1]===n[1]}function j_(s){return Math.hypot(s[0],s[1])}function z_(s){return s[0]*s[0]+s[1]*s[1]}function xp(s,n){return z_(Ls(s,n))}function xd(s){return P_(s,j_(s))}function R_(s,n){return Math.hypot(s[1]-n[1],s[0]-n[0])}function sl(s,n,t){let l=Math.sin(t),o=Math.cos(t),r=s[0]-n[0],c=s[1]-n[1],i=r*o-c*l,p=r*l+c*o;return[i+n[0],p+n[1]]}function $a(s,n,t){return Ws(s,Vs(Ls(n,s),t))}function $p(s,n,t){return Ws(s,Vs(n,t))}var{min:Ft,PI:H_}=Math,Fp=.275,nl=H_+1e-4;function N_(s,n={}){let{size:t=16,smoothing:l=.5,thinning:o=.5,simulatePressure:r=!0,easing:c=se=>se,start:i={},end:p={},last:u=!1}=n,{cap:y=!0,easing:d=se=>se*(2-se)}=i,{cap:f=!0,easing:h=se=>--se*se*se+1}=p;if(s.length===0||t<=0)return[];let m=s[s.length-1].runningLength,g=i.taper===!1?0:i.taper===!0?Math.max(t,m):i.taper,C=p.taper===!1?0:p.taper===!0?Math.max(t,m):p.taper,D=Math.pow(t*l,2),b=[],v=[],x=s.slice(0,10).reduce((se,pe)=>{let Ee=pe.pressure;if(r){let Pe=Ft(1,pe.distance/t),Ts=Ft(1,1-Pe);Ee=Ft(1,se+(Ts-se)*(Pe*Fp))}return(se+Ee)/2},s[0].pressure),$=Ep(t,o,s[s.length-1].pressure,c),S,N=s[0].vector,L=s[0].point,U=L,le=L,ye=U,Z=!1;for(let se=0;se<s.length;se++){let{pressure:pe}=s[se],{point:Ee,vector:Pe,distance:Ts,runningLength:ts}=s[se];if(se<s.length-1&&m-ts<3)continue;if(o){if(r){let ne=Ft(1,Ts/t),we=Ft(1,1-ne);pe=Ft(1,x+(we-x)*(ne*Fp))}$=Ep(t,o,pe,c)}else $=t/2;S===void 0&&(S=$);let Bs=ts<g?d(ts/g):1,Zs=m-ts<C?h((m-ts)/C):1;$=Math.max(.01,$*Math.min(Bs,Zs));let Gn=(se<s.length-1?s[se+1]:s[se]).vector,Ss=se<s.length-1?kp(Pe,Gn):1,I=kp(Pe,N)<0&&!Z,J=Ss!==null&&Ss<0;if(I||J){let ne=Vs(el(N),$);for(let we=1/13,je=0;je<=1;je+=we)le=sl(Ls(Ee,ne),Ee,nl*je),b.push(le),ye=sl(Ws(Ee,ne),Ee,nl*-je),v.push(ye);L=le,U=ye,J&&(Z=!0);continue}if(Z=!1,se===s.length-1){let ne=Vs(el(Pe),$);b.push(Ls(Ee,ne)),v.push(Ws(Ee,ne));continue}let Q=Vs(el($a(Gn,Pe,Ss)),$);le=Ls(Ee,Q),(se<=1||xp(L,le)>D)&&(b.push(le),L=le),ye=Ws(Ee,Q),(se<=1||xp(U,ye)>D)&&(v.push(ye),U=ye),x=pe,N=Pe}let _e=s[0].point.slice(0,2),ge=s.length>1?s[s.length-1].point.slice(0,2):Ws(s[0].point,[1,1]),De=[],Me=[];if(s.length===1){if(!(g||C)||u){let se=$p(_e,xd(el(Ls(_e,ge))),-(S||$)),pe=[];for(let Ee=1/13,Pe=Ee;Pe<=1;Pe+=Ee)pe.push(sl(se,_e,nl*2*Pe));return pe}}else{if(!(g||C&&s.length===1))if(y)for(let pe=1/13,Ee=pe;Ee<=1;Ee+=pe){let Pe=sl(v[0],_e,nl*Ee);De.push(Pe)}else{let pe=Ls(b[0],v[0]),Ee=Vs(pe,.5),Pe=Vs(pe,.51);De.push(Ls(_e,Ee),Ls(_e,Pe),Ws(_e,Pe),Ws(_e,Ee))}let se=el(L_(s[s.length-1].vector));if(C||g&&s.length===1)Me.push(ge);else if(f){let pe=$p(ge,se,$);for(let Ee=1/29,Pe=Ee;Pe<1;Pe+=Ee)Me.push(sl(pe,ge,nl*3*Pe))}else Me.push(Ws(ge,Vs(se,$)),Ws(ge,Vs(se,$*.99)),Ls(ge,Vs(se,$*.99)),Ls(ge,Vs(se,$)))}return b.concat(Me,v.reverse(),De)}function V_(s,n={}){var t;let{streamline:l=.5,size:o=16,last:r=!1}=n;if(s.length===0)return[];let c=.15+(1-l)*.85,i=Array.isArray(s[0])?s:s.map(({x:h,y:m,pressure:g=.5})=>[h,m,g]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push($a(i[0],h,m/4))}i.length===1&&(i=[...i,[...Ws(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,y=0,d=p[0],f=i.length-1;for(let h=1;h<i.length;h++){let m=r&&h===f?i[h].slice(0,2):$a(d.point,i[h],c);if(M_(d.point,m))continue;let g=R_(m,d.point);if(y+=g,h<f&&!u){if(y<o)continue;u=!0}d={point:m,pressure:i[h][2]>=0?i[h][2]:.5,vector:xd(Ls(d.point,m)),distance:g,runningLength:y},p.push(d)}return p[0].vector=((t=p[1])==null?void 0:t.vector)||[0,0],p}function W_(s,n={}){return N_(V_(s,n),n)}var U_=()=>({events:{},emit(s,...n){let t=this.events[s]||[];for(let l=0,o=t.length;l<o;l++)t[l](...n)},on(s,n){var t;return(t=this.events[s])!=null&&t.push(n)||(this.events[s]=[n]),()=>{var l;this.events[s]=(l=this.events[s])==null?void 0:l.filter(o=>n!==o)}}});function Uo(s,n){return s-n}function q_(s){return s<0?-1:1}function qo(s){return[Math.abs(s),q_(s)]}function $d(){const s=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${s()+s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`}var G_=2,mn=G_,Nt=class{constructor(s){this.drauu=s,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(s){}onUnselected(){}onStart(s){}onMove(s){return!1}onEnd(s){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(s){var n;const t=this.drauu.el,l=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(s.pageX-o.left)*l,y:(s.pageY-o.top)*l,pressure:s.pressure}}else{const o=this.drauu.svgPoint;o.x=s.clientX,o.y=s.clientY;const r=o.matrixTransform((n=t.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*l,y:r.y*l,pressure:s.pressure}}}createElement(s,n){const t=document.createElementNS("http://www.w3.org/2000/svg",s),l=n?{...this.brush,...n}:this.brush;return t.setAttribute("fill",l.fill??"transparent"),t.setAttribute("stroke",l.color),t.setAttribute("stroke-width",l.size.toString()),t.setAttribute("stroke-linecap","round"),l.dasharray&&t.setAttribute("stroke-dasharray",l.dasharray),t}attr(s,n){this.el.setAttribute(s,typeof n=="string"?n:n.toFixed(mn))}_setEvent(s){this.event=s,this.point=this.getMousePosition(s)}_eventDown(s){return this._setEvent(s),this.start=this.point,this.onStart(this.point)}_eventMove(s){return this._setEvent(s),this.onMove(this.point)}_eventUp(s){return this._setEvent(s),this.onEnd(this.point)}},K_=class extends Nt{constructor(){super(...arguments),this.points=[]}onStart(s){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[s],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&this.points.push(s),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!!s}getSvgData(s){const n=W_(s,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const t=n.reduce((l,[o,r],c,i)=>{const[p,u]=i[(c+1)%i.length];return l.push(o,r,(o+p)/2,(r+u)/2),l},["M",...n[0],"Q"]);return t.push("Z"),t.map(l=>typeof l=="number"?l.toFixed(2):l).join(" ")}},Y_=class extends Nt{onStart(s){return this.el=this.createElement("ellipse"),this.attr("cx",s.x),this.attr("cy",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[n,t]=qo(s.x-this.start.x),[l,o]=qo(s.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,l);n=r,l=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",l);else{const[r,c]=[this.start.x,this.start.x+n*t].sort(Uo),[i,p]=[this.start.y,this.start.y+l*o].sort(Uo);this.attr("cx",(r+c)/2),this.attr("cy",(i+p)/2),this.attr("rx",(c-r)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function Fd(s,n){const t=document.createElementNS("http://www.w3.org/2000/svg","defs"),l=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",n),l.setAttribute("id",s),l.setAttribute("viewBox","0 -5 10 10"),l.setAttribute("refX","5"),l.setAttribute("refY","0"),l.setAttribute("markerWidth","4"),l.setAttribute("markerHeight","4"),l.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),l.appendChild(o),t.appendChild(l),t}var Z_=class extends Nt{onStart(s){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",s.x),this.attr("y1",s.y),this.attr("x2",s.x),this.attr("y2",s.y),this.brush.arrowEnd){const n=$d(),t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.append(Fd(n,this.brush.color)),t.append(this.el),this.attr("marker-end",`url(#${n})`),t}return this.el}onMove(s){if(!this.el)return!1;let{x:n,y:t}=s;if(this.shiftPressed){const l=s.x-this.start.x,o=s.y-this.start.y;if(o!==0){let r=l/o;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+o*r,t=this.start.y+o):(n=this.start.x+l,t=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-t),this.attr("x2",n),this.attr("y2",t)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",t)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||s.getTotalLength()<5)}},J_=class extends Nt{onStart(s){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",s.x),this.attr("y",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[n,t]=qo(s.x-this.start.x),[l,o]=qo(s.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,l);n=r,l=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-l),this.attr("width",n*2),this.attr("height",l*2);else{const[r,c]=[this.start.x,this.start.x+n*t].sort(Uo),[i,p]=[this.start.y,this.start.y+l*o].sort(Uo);this.attr("x",r),this.attr("y",i),this.attr("width",c-r),this.attr("height",p-i)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function X_(s,n){const t=s.x-n.x,l=s.y-n.y;return t*t+l*l}function Q_(s,n,t){let l=n.x,o=n.y,r=t.x-l,c=t.y-o;if(r!==0||c!==0){const i=((s.x-l)*r+(s.y-o)*c)/(r*r+c*c);i>1?(l=t.x,o=t.y):i>0&&(l+=r*i,o+=c*i)}return r=s.x-l,c=s.y-o,r*r+c*c}function ev(s,n){let t=s[0];const l=[t];let o;for(let r=1,c=s.length;r<c;r++)o=s[r],X_(o,t)>n&&(l.push(o),t=o);return t!==o&&o&&l.push(o),l}function Fa(s,n,t,l,o){let r=l,c=0;for(let i=n+1;i<t;i++){const p=Q_(s[i],s[n],s[t]);p>r&&(c=i,r=p)}r>l&&(c-n>1&&Fa(s,n,c,l,o),o.push(s[c]),t-c>1&&Fa(s,c,t,l,o))}function sv(s,n){const t=s.length-1,l=[s[0]];return Fa(s,0,t,n,l),l.push(s[t]),l}function Tp(s,n,t=!1){if(s.length<=2)return s;const l=n!==void 0?n*n:1;return s=t?s:ev(s,l),s=sv(s,l),s}var nv=class extends Nt{constructor(){super(...arguments),this.points=[],this.count=0}onStart(s){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[s],this.brush.arrowEnd){this.arrowId=$d();const n=Fd(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&(this.points.push(s),this.count+=1),this.count>5&&(this.points=Tp(this.points,1,!0),this.count=0),this.attr("d",Op(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||(s.setAttribute("d",Op(Tp(this.points,1,!0))),!s.getTotalLength()))}};function tv(s,n){const t=n.x-s.x,l=n.y-s.y;return{length:Math.sqrt(t**2+l**2),angle:Math.atan2(l,t)}}function Sp(s,n,t,l){const o=n||s,r=t||s,c=.2,i=tv(o,r),p=i.angle+(l?Math.PI:0),u=i.length*c,y=s.x+Math.cos(p)*u,d=s.y+Math.sin(p)*u;return{x:y,y:d}}function lv(s,n,t){const l=Sp(t[n-1],t[n-2],s),o=Sp(s,t[n-1],t[n+1],!0);return`C ${l.x.toFixed(mn)},${l.y.toFixed(mn)} ${o.x.toFixed(mn)},${o.y.toFixed(mn)} ${s.x.toFixed(mn)},${s.y.toFixed(mn)}`}function Op(s){return s.reduce((n,t,l,o)=>l===0?`M ${t.x.toFixed(mn)},${t.y.toFixed(mn)}`:`${n} ${lv(t,l,o)}`,"")}var ov=class extends Nt{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(s){const n=(t,l)=>{if(t&&t.length)for(let o=0;o<t.length;o++){const r=t[o];if(r.getTotalLength){const c=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=r.getPointAtLength(c*i/this.pathSubFactor),u=r.getPointAtLength(c*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:i,element:l||r})}}else r.children&&n(r.children,r)}};s&&n(s.children)}onUnselected(){this.pathFragments=[]}onStart(s){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=s.x,this.svgPointPrevious.y=s.y}onMove(s){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=s.x,this.svgPointCurrent.y=s.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const s=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const t=this.pathFragments[n],l={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(t,l)&&(t.element.remove(),s.push(n))}return s.length&&(this.pathFragments=this.pathFragments.filter((n,t)=>!s.includes(t))),s.length>0}lineLineIntersect(s,n){const t=s.x1,l=s.x2,o=n.x1,r=n.x2,c=s.y1,i=s.y2,p=n.y1,u=n.y2,y=(t-l)*(p-u)-(c-i)*(o-r),d=(t*i-c*l)*(o-r)-(t-l)*(o*u-p*r),f=(t*i-c*l)*(p-u)-(c-i)*(o*u-p*r),h=(m,g,C)=>m>=g&&m<=C?!0:m>=C&&m<=g;if(y===0)return!1;{const m={x:d/y,y:f/y};return h(m.x,t,l)&&h(m.y,c,i)&&h(m.x,o,r)&&h(m.y,p,u)}}};function rv(s){return{draw:new nv(s),stylus:new K_(s),line:new Z_(s),rectangle:new J_(s),ellipse:new Y_(s),eraseLine:new ov(s)}}var av=class{constructor(s={}){this.options=s,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=U_(),this._models=rv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),s.el&&this.mount(s.el,s.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(s){this._models[this.mode].onUnselected(),this.options.brush.mode=s,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(s){this.options.brush=s}resolveSelector(s){return typeof s=="string"?document.querySelector(s):s||null}mount(s,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(s),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const t=this.resolveSelector(n)||this.el,l=this.eventStart.bind(this),o=this.eventMove.bind(this),r=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);t.addEventListener("pointerdown",l,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{t.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(s=>s()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(s,n){return this._emitter.on(s,n)}undo(){const s=this.el;return s.lastElementChild?(this._undoStack.push(s.lastElementChild.cloneNode(!0)),s.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var s;return!!((s=this.el)!=null&&s.lastElementChild)}eventMove(s){!this.acceptsInput(s)||!this.drawing||this.model._eventMove(s)&&(s.stopPropagation(),s.preventDefault(),this._emitter.emit("changed"))}eventStart(s){this.acceptsInput(s)&&(s.stopPropagation(),s.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(s),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(s){if(!this.acceptsInput(s)||!this.drawing)return;const n=this.model._eventUp(s);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(s){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(s.pointerType)}eventKeyboard(s){this.shiftPressed===s.shiftKey&&this.altPressed===s.altKey||(this.shiftPressed=s.shiftKey,this.altPressed=s.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const s=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",s)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(s){this.clear(),this.el.innerHTML=s}};function cv(s){return new av(s)}const Ta=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],nn=Ys("slidev-drawing-enabled",!1),RP=Ys("slidev-drawing-pinned",!1),iv=Y(!1),pv=Y(!1),uv=Y(!1),Sl=Y(!1),it=P3(Ys("slidev-drawing-brush",{color:Ta[0],size:4,mode:"stylus"})),Ip=Y("stylus"),Td=O(()=>Se.drawings.syncAll||_s.value);let Ol=!1;const tl=O({get(){return Ip.value},set(s){Ip.value=s,s==="arrow"?(it.mode="line",it.arrowEnd=!0):(it.mode=s,it.arrowEnd=!1)}}),yv=qe({brush:it,acceptsInputTypes:O(()=>nn.value&&(!Se.drawings.presenterOnly||_s.value)?void 0:["pen"]),coordinateTransform:!1}),ms=tr(cv(yv));function dv(){ms.clear(),Td.value&&Xy(Ge.value,"")}function kc(){var s;pv.value=ms.canRedo(),iv.value=ms.canUndo(),uv.value=!!((s=ms.el)!=null&&s.children.length)}function fv(s){Ol=!0;const n=Vo[s||Ge.value];n!=null?ms.load(n):ms.clear(),kc(),Ol=!1}ms.on("changed",()=>{if(kc(),!Ol){const s=ms.dump(),n=Ge.value;(Vo[n]||"")!==s&&Td.value&&Xy(n,ms.dump())}});S3(s=>{Ol=!0,s[Ge.value]!=null&&ms.load(s[Ge.value]||""),Ol=!1,kc()});os(()=>{ve(Ge,()=>{ms.mounted&&fv()},{immediate:!0})});ms.on("start",()=>Sl.value=!0);ms.on("end",()=>Sl.value=!1);window.addEventListener("keydown",s=>{if(!nn.value)return;const n=!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!s.metaKey;let t=!0;s.code==="KeyZ"&&(s.ctrlKey||s.metaKey)?s.shiftKey?ms.redo():ms.undo():s.code==="Escape"?nn.value=!1:s.code==="KeyL"&&n?tl.value="line":s.code==="KeyA"&&n?tl.value="arrow":s.code==="KeyS"&&n?tl.value="stylus":s.code==="KeyR"&&n?tl.value="rectangle":s.code==="KeyE"&&n?tl.value="ellipse":s.code==="KeyC"&&n?dv():s.code.startsWith("Digit")&&n&&+s.code[5]<=Ta.length?it.color=Ta[+s.code[5]-1]:t=!1,t&&(s.preventDefault(),s.stopPropagation())},!1);function Je(...s){return O(()=>s.every(n=>Ye(n)))}function bs(s){return O(()=>!Ye(s))}const Lp=OB(),jr=Ys("slidev-color-schema","auto"),Sa=O(()=>Se.colorSchema!=="auto"),xc=O({get(){return Sa.value?Se.colorSchema==="dark":jr.value==="auto"?Lp.value:jr.value==="dark"},set(s){Sa.value||(jr.value=s===Lp.value?"auto":s?"dark":"light")}}),Sd=nd(xc);Ks&&ve(xc,s=>{const n=document.querySelector("html");n.classList.toggle("dark",s),n.classList.toggle("light",!s)},{immediate:!0});const Do=Y(1),bo=O(()=>Ze.length),xs=Y(0),$c=Y(0);function hv(){xs.value>Do.value&&(xs.value-=1)}function mv(){xs.value<bo.value&&(xs.value+=1)}function Bv(){if(xs.value>Do.value){let s=xs.value-$c.value;s<Do.value&&(s=Do.value),xs.value=s}}function Av(){if(xs.value<bo.value){let s=xs.value+$c.value;s>bo.value&&(s=bo.value),xs.value=s}}function _v(){const{escape:s,space:n,shift:t,left:l,right:o,up:r,down:c,enter:i,d:p,g:u,o:y}=wd;let d=[{name:"next_space",key:Je(n,bs(t)),fn:Mn,autoRepeat:!0},{name:"prev_space",key:Je(n,t),fn:jn,autoRepeat:!0},{name:"next_right",key:Je(o,bs(t),bs(us)),fn:Mn,autoRepeat:!0},{name:"prev_left",key:Je(l,bs(t),bs(us)),fn:jn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Mn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:jn,autoRepeat:!0},{name:"next_down",key:Je(c,bs(us)),fn:Ll,autoRepeat:!0},{name:"prev_up",key:Je(r,bs(us)),fn:()=>Pl(!1),autoRepeat:!0},{name:"next_shift",key:Je(o,t),fn:Ll,autoRepeat:!0},{name:"prev_shift",key:Je(l,t),fn:()=>Pl(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(p,bs(nn)),fn:Sd},{name:"toggle_overview",key:Je(y,bs(nn)),fn:kd},{name:"hide_overview",key:Je(s,bs(nn)),fn:()=>us.value=!1},{name:"goto",key:Je(u,bs(nn)),fn:()=>Ot.value=!Ot.value},{name:"next_overview",key:Je(o,us),fn:mv},{name:"prev_overview",key:Je(l,us),fn:hv},{name:"up_overview",key:Je(r,us),fn:Bv},{name:"down_overview",key:Je(c,us),fn:Av},{name:"goto_from_overview",key:Je(i,us),fn:()=>{Ht(xs.value),us.value=!1}}];const f=new Set(d.map(m=>m.name));if(d.filter(m=>m.name&&f.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return d}const Od=Je(bs(O_),bs(I_),T_);function vv(s,n,t=!1){typeof s=="string"&&(s=wd[s]);const l=Je(s,Od);let o=0,r;const c=()=>{if(clearTimeout(r),!l.value){o=0;return}t&&(r=setTimeout(c,Math.max(1e3-o*250,150)),o++),n()};return ve(l,c,{flush:"sync"})}function gv(s,n){return mB(s,t=>{Od.value&&(t.repeat||n())})}function Cv(){const s=_v();new Map(s.map(t=>[t.key,t])).forEach(t=>{t.fn&&vv(t.key,t.fn,t.autoRepeat)}),gv("f",()=>Ed.toggle())}const Dv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bv=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),wv=[bv];function Ev(s,n){return A(),E("svg",Dv,wv)}const kv={name:"carbon-close",render:Ev};function Fc(s,n=""){var o,r;const t=["slidev-page",n],l=(r=(o=s==null?void 0:s.meta)==null?void 0:o.slide)==null?void 0:r.no;return l!=null&&t.push(`slidev-page-${l}`),t.filter(Boolean).join(" ")}const xv=$e({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(s){const n=s;P(R);const t=Y(),l=UB(t),o=O(()=>n.width?n.width:l.width.value),r=O(()=>n.width?n.width/On:l.height.value);n.width&&Dt(()=>{t.value&&(t.value.style.width=`${o.value}px`,t.value.style.height=`${r.value}px`)});const c=O(()=>o.value/r.value),i=O(()=>n.scale&&!An.value?n.scale:c.value<On?o.value/In:r.value*On/In),p=O(()=>({height:`${Dc}px`,width:`${In}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=O(()=>({"select-none":!Se.selectable}));return Es(Yy,i),(y,d)=>(A(),E("div",{id:"slide-container",ref_key:"root",ref:t,class:We(u.value)},[e("div",{id:"slide-content",style:es(p.value)},[zs(y.$slots,"default")],4),zs(y.$slots,"controls")],2))}});const H=(s,n)=>{const t=s.__vccOpts||s;for(const[l,o]of n)t[l]=o;return t},Id=H(xv,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Tc=$e({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(s,{emit:n}){const t=sn(s,"clicks",n),l=sn(s,"clicksElements",n),o=sn(s,"clicksDisabled",n),r=sn(s,"clicksOrderMap",n);l.value.length=0,Es(m3,s.route),Es(B3,s.context),Es(dl,t),Es(fl,o),Es(lt,l),Es(Aa,r)},render(){var s,n;return this.$props.is?hs(this.$props.is):(n=(s=this.$slots)==null?void 0:s.default)==null?void 0:n.call(s)}}),$v=["innerHTML"],Fv=$e({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(s){return P(R),(n,t)=>T(Vo)[n.page]?(A(),E("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:T(Vo)[n.page]},null,8,$v)):he("v-if",!0)}}),Ld=H(Fv,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Tv=Object.freeze(Object.defineProperty({__proto__:null,default:Ld},Symbol.toStringTag,{value:"Module"})),Sv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Ov=["onClick"],zr=4*16*2,Pp=2*16,Iv=$e({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(s,{emit:n}){const t=s;P(R);const l=sn(t,"modelValue",n);function o(){l.value=!1}function r(d){Ht(d),o()}function c(d){return d===xs.value}const i=xa.smaller("xs"),p=xa.smaller("sm"),u=O(()=>i.value?At.width.value-zr:p.value?(At.width.value-zr-Pp)/2:300),y=O(()=>Math.floor((At.width.value-zr)/(u.value+Pp)));return Dt(()=>{xs.value=Ge.value,$c.value=y.value}),(d,f)=>{const h=kv;return A(),E(Te,null,[js(e("div",Sv,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:es(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(A(!0),E(Te,null,bt(T(Ze),(m,g)=>(A(),E("div",{key:m.path,class:"relative"},[e("div",{class:We(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(g+1),"border-gray-400":!c(g+1)}]),style:es(T(bc)),onClick:C=>r(+m.path)},[(A(),z(Id,{key:m.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:w(()=>[m!=null&&m.component?(A(),z(T(Tc),{key:0,is:m.component,"clicks-disabled":!0,class:We(T(Fc)(m)),route:m,context:"overview"},null,8,["is","class","route"])):he("v-if",!0),k(Ld,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,Ov),e("div",{class:"absolute top-0 opacity-50",style:es(`left: ${u.value+5}px`)},Cs(g+1),5)]))),128))],4)],512),[[jy,T(l)]]),T(l)?(A(),E("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:o},[k(h)])):he("v-if",!0)],64)}}});const Lv=H(Iv,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Pv="/courses/data-structure/linked-lists/assets/logo-b72bde5d.png",Mv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},jv=$e({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(s,{emit:n}){const t=s;P(R);const l=sn(t,"modelValue",n);function o(){l.value=!1}return(r,c)=>(A(),z(iy,null,[T(l)?(A(),E("div",Mv,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=i=>o())}),e("div",{class:We(["m-auto rounded-md bg-main shadow",t.class]),"dark:border":"~ main"},[zs(r.$slots,"default")],2)])):he("v-if",!0)],1024))}}),zv=H(jv,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Modal.vue"]]),Rv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Hv=["innerHTML"],Nv=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Pv,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),a("dev ")])])],-1),Vv=$e({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(s,{emit:n}){const t=s;P(R);const l=sn(t,"modelValue",n),o=O(()=>typeof Se.info=="string");return(r,c)=>(A(),z(zv,{modelValue:T(l),"onUpdate:modelValue":c[0]||(c[0]=i=>Oe(l)?l.value=i:null),class:"px-6 py-4"},{default:w(()=>[e("div",Rv,[o.value?(A(),E("div",{key:0,class:"mb-4",innerHTML:T(Se).info},null,8,Hv)):he("v-if",!0),Nv])]),_:1},8,["modelValue"]))}});const Wv=H(Vv,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function vn(s){return Array.isArray?Array.isArray(s):jd(s)==="[object Array]"}const Uv=1/0;function qv(s){if(typeof s=="string")return s;let n=s+"";return n=="0"&&1/s==-Uv?"-0":n}function Gv(s){return s==null?"":qv(s)}function tn(s){return typeof s=="string"}function Pd(s){return typeof s=="number"}function Kv(s){return s===!0||s===!1||Yv(s)&&jd(s)=="[object Boolean]"}function Md(s){return typeof s=="object"}function Yv(s){return Md(s)&&s!==null}function ks(s){return s!=null}function Rr(s){return!s.trim().length}function jd(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const Zv="Incorrect 'index' type",Jv=s=>`Invalid value for key ${s}`,Xv=s=>`Pattern length exceeds max of ${s}.`,Qv=s=>`Missing ${s} property in key`,e1=s=>`Property 'weight' in key '${s}' must be a positive integer`,Mp=Object.prototype.hasOwnProperty;class s1{constructor(n){this._keys=[],this._keyMap={};let t=0;n.forEach(l=>{let o=zd(l);t+=o.weight,this._keys.push(o),this._keyMap[o.id]=o,t+=o.weight}),this._keys.forEach(l=>{l.weight/=t})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function zd(s){let n=null,t=null,l=null,o=1,r=null;if(tn(s)||vn(s))l=s,n=jp(s),t=Oa(s);else{if(!Mp.call(s,"name"))throw new Error(Qv("name"));const c=s.name;if(l=c,Mp.call(s,"weight")&&(o=s.weight,o<=0))throw new Error(e1(c));n=jp(c),t=Oa(c),r=s.getFn}return{path:n,id:t,weight:o,src:l,getFn:r}}function jp(s){return vn(s)?s:s.split(".")}function Oa(s){return vn(s)?s.join("."):s}function n1(s,n){let t=[],l=!1;const o=(r,c,i)=>{if(ks(r))if(!c[i])t.push(r);else{let p=c[i];const u=r[p];if(!ks(u))return;if(i===c.length-1&&(tn(u)||Pd(u)||Kv(u)))t.push(Gv(u));else if(vn(u)){l=!0;for(let y=0,d=u.length;y<d;y+=1)o(u[y],c,i+1)}else c.length&&o(u,c,i+1)}};return o(s,tn(n)?n.split("."):n,0),l?t:t[0]}const t1={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},l1={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,n)=>s.score===n.score?s.idx<n.idx?-1:1:s.score<n.score?-1:1},o1={location:0,threshold:.6,distance:100},r1={useExtendedSearch:!1,getFn:n1,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var me={...l1,...t1,...o1,...r1};const a1=/[^ ]+/g;function c1(s=1,n=3){const t=new Map,l=Math.pow(10,n);return{get(o){const r=o.match(a1).length;if(t.has(r))return t.get(r);const c=1/Math.pow(r,.5*s),i=parseFloat(Math.round(c*l)/l);return t.set(r,i),i},clear(){t.clear()}}}class Sc{constructor({getFn:n=me.getFn,fieldNormWeight:t=me.fieldNormWeight}={}){this.norm=c1(t,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((t,l)=>{this._keysMap[t.id]=l})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,tn(this.docs[0])?this.docs.forEach((n,t)=>{this._addString(n,t)}):this.docs.forEach((n,t)=>{this._addObject(n,t)}),this.norm.clear())}add(n){const t=this.size();tn(n)?this._addString(n,t):this._addObject(n,t)}removeAt(n){this.records.splice(n,1);for(let t=n,l=this.size();t<l;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(n,t){return n[this._keysMap[t]]}size(){return this.records.length}_addString(n,t){if(!ks(n)||Rr(n))return;let l={v:n,i:t,n:this.norm.get(n)};this.records.push(l)}_addObject(n,t){let l={i:t,$:{}};this.keys.forEach((o,r)=>{let c=o.getFn?o.getFn(n):this.getFn(n,o.path);if(ks(c)){if(vn(c)){let i=[];const p=[{nestedArrIndex:-1,value:c}];for(;p.length;){const{nestedArrIndex:u,value:y}=p.pop();if(ks(y))if(tn(y)&&!Rr(y)){let d={v:y,i:u,n:this.norm.get(y)};i.push(d)}else vn(y)&&y.forEach((d,f)=>{p.push({nestedArrIndex:f,value:d})})}l.$[r]=i}else if(tn(c)&&!Rr(c)){let i={v:c,n:this.norm.get(c)};l.$[r]=i}}}),this.records.push(l)}toJSON(){return{keys:this.keys,records:this.records}}}function Rd(s,n,{getFn:t=me.getFn,fieldNormWeight:l=me.fieldNormWeight}={}){const o=new Sc({getFn:t,fieldNormWeight:l});return o.setKeys(s.map(zd)),o.setSources(n),o.create(),o}function i1(s,{getFn:n=me.getFn,fieldNormWeight:t=me.fieldNormWeight}={}){const{keys:l,records:o}=s,r=new Sc({getFn:n,fieldNormWeight:t});return r.setKeys(l),r.setIndexRecords(o),r}function yo(s,{errors:n=0,currentLocation:t=0,expectedLocation:l=0,distance:o=me.distance,ignoreLocation:r=me.ignoreLocation}={}){const c=n/s.length;if(r)return c;const i=Math.abs(l-t);return o?c+i/o:i?1:c}function p1(s=[],n=me.minMatchCharLength){let t=[],l=-1,o=-1,r=0;for(let c=s.length;r<c;r+=1){let i=s[r];i&&l===-1?l=r:!i&&l!==-1&&(o=r-1,o-l+1>=n&&t.push([l,o]),l=-1)}return s[r-1]&&r-l>=n&&t.push([l,r-1]),t}const rt=32;function u1(s,n,t,{location:l=me.location,distance:o=me.distance,threshold:r=me.threshold,findAllMatches:c=me.findAllMatches,minMatchCharLength:i=me.minMatchCharLength,includeMatches:p=me.includeMatches,ignoreLocation:u=me.ignoreLocation}={}){if(n.length>rt)throw new Error(Xv(rt));const y=n.length,d=s.length,f=Math.max(0,Math.min(l,d));let h=r,m=f;const g=i>1||p,C=g?Array(d):[];let D;for(;(D=s.indexOf(n,m))>-1;){let N=yo(n,{currentLocation:D,expectedLocation:f,distance:o,ignoreLocation:u});if(h=Math.min(N,h),m=D+y,g){let L=0;for(;L<y;)C[D+L]=1,L+=1}}m=-1;let b=[],v=1,x=y+d;const $=1<<y-1;for(let N=0;N<y;N+=1){let L=0,U=x;for(;L<U;)yo(n,{errors:N,currentLocation:f+U,expectedLocation:f,distance:o,ignoreLocation:u})<=h?L=U:x=U,U=Math.floor((x-L)/2+L);x=U;let le=Math.max(1,f-U+1),ye=c?d:Math.min(f+U,d)+y,Z=Array(ye+2);Z[ye+1]=(1<<N)-1;for(let ge=ye;ge>=le;ge-=1){let De=ge-1,Me=t[s.charAt(De)];if(g&&(C[De]=+!!Me),Z[ge]=(Z[ge+1]<<1|1)&Me,N&&(Z[ge]|=(b[ge+1]|b[ge])<<1|1|b[ge+1]),Z[ge]&$&&(v=yo(n,{errors:N,currentLocation:De,expectedLocation:f,distance:o,ignoreLocation:u}),v<=h)){if(h=v,m=De,m<=f)break;le=Math.max(1,2*f-m)}}if(yo(n,{errors:N+1,currentLocation:f,expectedLocation:f,distance:o,ignoreLocation:u})>h)break;b=Z}const S={isMatch:m>=0,score:Math.max(.001,v)};if(g){const N=p1(C,i);N.length?p&&(S.indices=N):S.isMatch=!1}return S}function y1(s){let n={};for(let t=0,l=s.length;t<l;t+=1){const o=s.charAt(t);n[o]=(n[o]||0)|1<<l-t-1}return n}class Hd{constructor(n,{location:t=me.location,threshold:l=me.threshold,distance:o=me.distance,includeMatches:r=me.includeMatches,findAllMatches:c=me.findAllMatches,minMatchCharLength:i=me.minMatchCharLength,isCaseSensitive:p=me.isCaseSensitive,ignoreLocation:u=me.ignoreLocation}={}){if(this.options={location:t,threshold:l,distance:o,includeMatches:r,findAllMatches:c,minMatchCharLength:i,isCaseSensitive:p,ignoreLocation:u},this.pattern=p?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const y=(f,h)=>{this.chunks.push({pattern:f,alphabet:y1(f),startIndex:h})},d=this.pattern.length;if(d>rt){let f=0;const h=d%rt,m=d-h;for(;f<m;)y(this.pattern.substr(f,rt),f),f+=rt;if(h){const g=d-rt;y(this.pattern.substr(g),g)}}else y(this.pattern,0)}searchIn(n){const{isCaseSensitive:t,includeMatches:l}=this.options;if(t||(n=n.toLowerCase()),this.pattern===n){let m={isMatch:!0,score:0};return l&&(m.indices=[[0,n.length-1]]),m}const{location:o,distance:r,threshold:c,findAllMatches:i,minMatchCharLength:p,ignoreLocation:u}=this.options;let y=[],d=0,f=!1;this.chunks.forEach(({pattern:m,alphabet:g,startIndex:C})=>{const{isMatch:D,score:b,indices:v}=u1(n,m,g,{location:o+C,distance:r,threshold:c,findAllMatches:i,minMatchCharLength:p,includeMatches:l,ignoreLocation:u});D&&(f=!0),d+=b,D&&v&&(y=[...y,...v])});let h={isMatch:f,score:f?d/this.chunks.length:1};return f&&l&&(h.indices=y),h}}class qn{constructor(n){this.pattern=n}static isMultiMatch(n){return zp(n,this.multiRegex)}static isSingleMatch(n){return zp(n,this.singleRegex)}search(){}}function zp(s,n){const t=s.match(n);return t?t[1]:null}class d1 extends qn{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const t=n===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class f1 extends qn{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const l=n.indexOf(this.pattern)===-1;return{isMatch:l,score:l?0:1,indices:[0,n.length-1]}}}class h1 extends qn{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const t=n.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class m1 extends qn{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const t=!n.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,n.length-1]}}}class B1 extends qn{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const t=n.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class A1 extends qn{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const t=!n.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,n.length-1]}}}class Nd extends qn{constructor(n,{location:t=me.location,threshold:l=me.threshold,distance:o=me.distance,includeMatches:r=me.includeMatches,findAllMatches:c=me.findAllMatches,minMatchCharLength:i=me.minMatchCharLength,isCaseSensitive:p=me.isCaseSensitive,ignoreLocation:u=me.ignoreLocation}={}){super(n),this._bitapSearch=new Hd(n,{location:t,threshold:l,distance:o,includeMatches:r,findAllMatches:c,minMatchCharLength:i,isCaseSensitive:p,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class Vd extends qn{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let t=0,l;const o=[],r=this.pattern.length;for(;(l=n.indexOf(this.pattern,t))>-1;)t=l+r,o.push([l,t-1]);const c=!!o.length;return{isMatch:c,score:c?0:1,indices:o}}}const Ia=[d1,Vd,h1,m1,A1,B1,f1,Nd],Rp=Ia.length,_1=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,v1="|";function g1(s,n={}){return s.split(v1).map(t=>{let l=t.trim().split(_1).filter(r=>r&&!!r.trim()),o=[];for(let r=0,c=l.length;r<c;r+=1){const i=l[r];let p=!1,u=-1;for(;!p&&++u<Rp;){const y=Ia[u];let d=y.isMultiMatch(i);d&&(o.push(new y(d,n)),p=!0)}if(!p)for(u=-1;++u<Rp;){const y=Ia[u];let d=y.isSingleMatch(i);if(d){o.push(new y(d,n));break}}}return o})}const C1=new Set([Nd.type,Vd.type]);class D1{constructor(n,{isCaseSensitive:t=me.isCaseSensitive,includeMatches:l=me.includeMatches,minMatchCharLength:o=me.minMatchCharLength,ignoreLocation:r=me.ignoreLocation,findAllMatches:c=me.findAllMatches,location:i=me.location,threshold:p=me.threshold,distance:u=me.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:l,minMatchCharLength:o,findAllMatches:c,ignoreLocation:r,location:i,threshold:p,distance:u},this.pattern=t?n:n.toLowerCase(),this.query=g1(this.pattern,this.options)}static condition(n,t){return t.useExtendedSearch}searchIn(n){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:l,isCaseSensitive:o}=this.options;n=o?n:n.toLowerCase();let r=0,c=[],i=0;for(let p=0,u=t.length;p<u;p+=1){const y=t[p];c.length=0,r=0;for(let d=0,f=y.length;d<f;d+=1){const h=y[d],{isMatch:m,indices:g,score:C}=h.search(n);if(m){if(r+=1,i+=C,l){const D=h.constructor.type;C1.has(D)?c=[...c,...g]:c.push(g)}}else{i=0,r=0,c.length=0;break}}if(r){let d={isMatch:!0,score:i/r};return l&&(d.indices=c),d}}return{isMatch:!1,score:1}}}const La=[];function b1(...s){La.push(...s)}function Pa(s,n){for(let t=0,l=La.length;t<l;t+=1){let o=La[t];if(o.condition(s,n))return new o(s,n)}return new Hd(s,n)}const Go={AND:"$and",OR:"$or"},Ma={PATH:"$path",PATTERN:"$val"},ja=s=>!!(s[Go.AND]||s[Go.OR]),w1=s=>!!s[Ma.PATH],E1=s=>!vn(s)&&Md(s)&&!ja(s),Hp=s=>({[Go.AND]:Object.keys(s).map(n=>({[n]:s[n]}))});function Wd(s,n,{auto:t=!0}={}){const l=o=>{let r=Object.keys(o);const c=w1(o);if(!c&&r.length>1&&!ja(o))return l(Hp(o));if(E1(o)){const p=c?o[Ma.PATH]:r[0],u=c?o[Ma.PATTERN]:o[p];if(!tn(u))throw new Error(Jv(p));const y={keyId:Oa(p),pattern:u};return t&&(y.searcher=Pa(u,n)),y}let i={children:[],operator:r[0]};return r.forEach(p=>{const u=o[p];vn(u)&&u.forEach(y=>{i.children.push(l(y))})}),i};return ja(s)||(s=Hp(s)),l(s)}function k1(s,{ignoreFieldNorm:n=me.ignoreFieldNorm}){s.forEach(t=>{let l=1;t.matches.forEach(({key:o,norm:r,score:c})=>{const i=o?o.weight:null;l*=Math.pow(c===0&&i?Number.EPSILON:c,(i||1)*(n?1:r))}),t.score=l})}function x1(s,n){const t=s.matches;n.matches=[],ks(t)&&t.forEach(l=>{if(!ks(l.indices)||!l.indices.length)return;const{indices:o,value:r}=l;let c={indices:o,value:r};l.key&&(c.key=l.key.src),l.idx>-1&&(c.refIndex=l.idx),n.matches.push(c)})}function $1(s,n){n.score=s.score}function F1(s,n,{includeMatches:t=me.includeMatches,includeScore:l=me.includeScore}={}){const o=[];return t&&o.push(x1),l&&o.push($1),s.map(r=>{const{idx:c}=r,i={item:n[c],refIndex:c};return o.length&&o.forEach(p=>{p(r,i)}),i})}class Vt{constructor(n,t={},l){this.options={...me,...t},this.options.useExtendedSearch,this._keyStore=new s1(this.options.keys),this.setCollection(n,l)}setCollection(n,t){if(this._docs=n,t&&!(t instanceof Sc))throw new Error(Zv);this._myIndex=t||Rd(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){ks(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const t=[];for(let l=0,o=this._docs.length;l<o;l+=1){const r=this._docs[l];n(r,l)&&(this.removeAt(l),l-=1,o-=1,t.push(r))}return t}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:t=-1}={}){const{includeMatches:l,includeScore:o,shouldSort:r,sortFn:c,ignoreFieldNorm:i}=this.options;let p=tn(n)?tn(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return k1(p,{ignoreFieldNorm:i}),r&&p.sort(c),Pd(t)&&t>-1&&(p=p.slice(0,t)),F1(p,this._docs,{includeMatches:l,includeScore:o})}_searchStringList(n){const t=Pa(n,this.options),{records:l}=this._myIndex,o=[];return l.forEach(({v:r,i:c,n:i})=>{if(!ks(r))return;const{isMatch:p,score:u,indices:y}=t.searchIn(r);p&&o.push({item:r,idx:c,matches:[{score:u,value:r,norm:i,indices:y}]})}),o}_searchLogical(n){const t=Wd(n,this.options),l=(i,p,u)=>{if(!i.children){const{keyId:d,searcher:f}=i,h=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(p,d),searcher:f});return h&&h.length?[{idx:u,item:p,matches:h}]:[]}const y=[];for(let d=0,f=i.children.length;d<f;d+=1){const h=i.children[d],m=l(h,p,u);if(m.length)y.push(...m);else if(i.operator===Go.AND)return[]}return y},o=this._myIndex.records,r={},c=[];return o.forEach(({$:i,i:p})=>{if(ks(i)){let u=l(t,i,p);u.length&&(r[p]||(r[p]={idx:p,item:i,matches:[]},c.push(r[p])),u.forEach(({matches:y})=>{r[p].matches.push(...y)}))}}),c}_searchObjectList(n){const t=Pa(n,this.options),{keys:l,records:o}=this._myIndex,r=[];return o.forEach(({$:c,i})=>{if(!ks(c))return;let p=[];l.forEach((u,y)=>{p.push(...this._findMatches({key:u,value:c[y],searcher:t}))}),p.length&&r.push({idx:i,item:c,matches:p})}),r}_findMatches({key:n,value:t,searcher:l}){if(!ks(t))return[];let o=[];if(vn(t))t.forEach(({v:r,i:c,n:i})=>{if(!ks(r))return;const{isMatch:p,score:u,indices:y}=l.searchIn(r);p&&o.push({score:u,key:n,value:r,idx:c,norm:i,indices:y})});else{const{v:r,n:c}=t,{isMatch:i,score:p,indices:u}=l.searchIn(r);i&&o.push({score:p,key:n,value:r,norm:c,indices:u})}return o}}Vt.version="6.6.2";Vt.createIndex=Rd;Vt.parseIndex=i1;Vt.config=me;Vt.parseQuery=Wd;b1(D1);const T1={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},S1=["value","disabled","onKeydown"],O1=["border","onClick"],I1={"w-4":"","text-right":"",op50:"","text-sm":""},L1=$e({__name:"Goto",setup(s){P(R);const n=Y(),t=Y(),l=Y(),o=Y(),r=Y(""),c=Y(0);function i(v){return v!=null}const p=O(()=>new Vt(Ze.map(v=>{var x;return(x=v.meta)==null?void 0:x.slide}).filter(i),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=O(()=>r.value.startsWith("/")?r.value.substring(1):r.value),y=O(()=>p.value.search(u.value).map(v=>v.item)),d=O(()=>!!y.value.length);function f(){if(d.value){const v=y.value.at(c.value||0);v&&Ht(v.no)}h()}function h(){r.value="",Ot.value=!1}function m(v){v.preventDefault(),c.value++,c.value>=y.value.length&&(c.value=0),C()}function g(v){v.preventDefault(),c.value--,c.value<=-2&&(c.value=y.value.length-1),C()}function C(){var x;const v=(x=o.value)==null?void 0:x[c.value];v&&l.value&&(v.offsetTop+v.offsetHeight>l.value.offsetHeight+l.value.scrollTop?l.value.scrollTo({behavior:"smooth",top:v.offsetTop+v.offsetHeight-l.value.offsetHeight+1}):v.offsetTop<l.value.scrollTop&&l.value.scrollTo({behavior:"smooth",top:v.offsetTop}))}function D(v){c.value=0,r.value=v.target.value}function b(v){Ht(v),h()}return ve(Ot,async v=>{var x;v?(r.value="",c.value=0,setTimeout(()=>{var $;return($=t.value)==null?void 0:$.focus()},0)):(x=t.value)==null||x.blur()}),ve(Pn,()=>{var v;(v=n.value)!=null&&v.contains(Pn.value)||h()}),(v,x)=>(A(),E("div",{id:"slidev-goto-dialog",ref_key:"container",ref:n,class:We(["fixed right-5 transition-all",T(Ot)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[e("div",T1,[e("input",{id:"slidev-goto-input",ref_key:"input",ref:t,value:r.value,type:"text",disabled:!T(Ot),class:We(["outline-none bg-transparent",{"text-red-400":!d.value&&r.value}]),placeholder:"Goto...",onKeydown:[oo(f,["enter"]),oo(h,["escape"]),oo(m,["down"]),oo(g,["up"])],onInput:D},null,42,S1)]),y.value.length>0?(A(),E("ul",{key:0,ref_key:"list",ref:l,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(A(!0),E(Te,null,bt(y.value,($,S)=>(A(),E("li",{ref_for:!0,ref_key:"items",ref:o,key:$.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:S===0?"":"t main",class:We(c.value===S?"bg-active op100":"op80"),onClick:B5(N=>b($.no),["stop"])},[e("div",I1,Cs($.no),1),a(" "+Cs($.title),1)],10,O1))),128))],512)):he("v-if",!0)],2))}});const P1=H(L1,[["__scopeId","data-v-f5ee02a7"],["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Goto.vue"]]),M1=$e({__name:"Controls",setup(s){P(R);const n=rn(),t=rn();return(l,o)=>(A(),E(Te,null,[k(Lv,{modelValue:T(us),"onUpdate:modelValue":o[0]||(o[0]=r=>Oe(us)?us.value=r:null)},null,8,["modelValue"]),k(P1),n.value?(A(),z(T(n),{key:0})):he("v-if",!0),t.value?(A(),z(T(t),{key:1,modelValue:T(Pr),"onUpdate:modelValue":o[1]||(o[1]=r=>Oe(Pr)?Pr.value=r:null)},null,8,["modelValue"])):he("v-if",!0),T(Se).info?(A(),z(Wv,{key:2,modelValue:T(Bl),"onUpdate:modelValue":o[2]||(o[2]=r=>Oe(Bl)?Bl.value=r:null)},null,8,["modelValue"])):he("v-if",!0)],64))}}),j1=H(M1,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Controls.vue"]]),z1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R1=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),H1=[R1];function N1(s,n){return A(),E("svg",z1,H1)}const V1={name:"carbon-settings-adjust",render:N1},W1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U1=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),q1=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),G1=[U1,q1];function K1(s,n){return A(),E("svg",W1,G1)}const Y1={name:"carbon-information",render:K1},Z1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},J1=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),X1=[J1];function Q1(s,n){return A(),E("svg",Z1,X1)}const eg={name:"carbon-download",render:Q1},sg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ng=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),tg=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),lg=[ng,tg];function og(s,n){return A(),E("svg",sg,lg)}const rg={name:"carbon-user-speaker",render:og},ag={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cg=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),ig=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),pg=[cg,ig];function ug(s,n){return A(),E("svg",ag,pg)}const yg={name:"carbon-presentation-file",render:ug},dg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fg=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),hg=[fg];function mg(s,n){return A(),E("svg",dg,hg)}const Bg={name:"carbon-pen",render:mg},Ag={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_g=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),vg=[_g];function gg(s,n){return A(),E("svg",Ag,vg)}const Cg={name:"ph-cursor-duotone",render:gg},Dg={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},bg=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),wg=[bg];function Eg(s,n){return A(),E("svg",Dg,wg)}const Ud={name:"ph-cursor-fill",render:Eg},kg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xg=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),$g=[xg];function Fg(s,n){return A(),E("svg",kg,$g)}const Tg={name:"carbon-sun",render:Fg},Sg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Og=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Ig=[Og];function Lg(s,n){return A(),E("svg",Sg,Ig)}const Pg={name:"carbon-moon",render:Lg},Mg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jg=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),zg=[jg];function Rg(s,n){return A(),E("svg",Mg,zg)}const Hg={name:"carbon-apps",render:Rg},Ng={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vg=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Wg=[Vg];function Ug(s,n){return A(),E("svg",Ng,Wg)}const qg={name:"carbon-arrow-right",render:Ug},Gg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Kg=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Yg=[Kg];function Zg(s,n){return A(),E("svg",Gg,Yg)}const Jg={name:"carbon-arrow-left",render:Zg},Xg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qg=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),eC=[Qg];function sC(s,n){return A(),E("svg",Xg,eC)}const nC={name:"carbon-maximize",render:sC},tC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lC=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),oC=[lC];function rC(s,n){return A(),E("svg",tC,oC)}const aC={name:"carbon-minimize",render:rC},cC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iC=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),pC=[iC];function uC(s,n){return A(),E("svg",cC,pC)}const yC={name:"carbon-checkmark",render:uC},dC={class:"select-list"},fC={class:"title"},hC={class:"items"},mC=["onClick"],BC=$e({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(s,{emit:n}){const t=s;P(R);const l=sn(t,"modelValue",n,{passive:!0});return(o,r)=>{const c=yC;return A(),E("div",dC,[e("div",fC,Cs(s.title),1),e("div",hC,[(A(!0),E(Te,null,bt(s.items,i=>(A(),E("div",{key:i.value,class:We(["item",{active:T(l)===i.value}]),onClick:()=>{var p;l.value=i.value,(p=i.onClick)==null||p.call(i)}},[k(c,{class:We(["text-green-500",{"opacity-0":T(l)!==i.value}])},null,8,["class"]),a(" "+Cs(i.display||i.value),1)],10,mC))),128))])])}}});const AC=H(BC,[["__scopeId","data-v-3f89fa11"],["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/SelectList.vue"]]),_C={class:"text-sm"},vC=$e({__name:"Settings",setup(s){P(R);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(t,l)=>(A(),E("div",_C,[k(AC,{modelValue:T(Co),"onUpdate:modelValue":l[0]||(l[0]=o=>Oe(Co)?Co.value=o:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),gC=H(vC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Settings.vue"]]),CC={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},DC=$e({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(s,{emit:n}){const t=s;P(R);const l=sn(t,"modelValue",n,{passive:!0}),o=Y();return fB(o,()=>{l.value=!1}),(r,c)=>(A(),E("div",{ref_key:"el",ref:o,class:"flex relative"},[e("button",{class:We({disabled:s.disabled}),onClick:c[0]||(c[0]=i=>l.value=!T(l))},[zs(r.$slots,"button",{class:We({disabled:s.disabled})})],2),(A(),z(iy,null,[T(l)?(A(),E("div",CC,[zs(r.$slots,"menu")])):he("v-if",!0)],1024))],512))}}),bC=H(DC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/MenuButton.vue"]]),wC={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},EC={__name:"VerticalDivider",setup(s){return P(R),(n,t)=>(A(),E("div",wC))}},fo=H(EC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),kC={render(){return[]}},xC={class:"slidev-icon-btn"},$C={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},FC={class:"my-auto"},TC={class:"opacity-50"},SC=$e({__name:"NavControls",props:{persist:{default:!1}},setup(s){const n=s;P(R);const t=xa.smaller("md"),{isFullscreen:l,toggle:o}=Ed,r=O(()=>Ra.value?`?password=${Ra.value}`:""),c=O(()=>`/presenter/${Ge.value}${r.value}`),i=O(()=>`/${Ge.value}${r.value}`),p=Y();function u(){p.value&&Pn.value&&p.value.contains(Pn.value)&&Pn.value.blur()}const y=O(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=rn(),f=rn();return Ln(()=>import("./DrawingControls-effa453d.js"),[]).then(h=>f.value=h.default),(h,m)=>{const g=aC,C=nC,D=Jg,b=qg,v=Hg,x=Pg,$=Tg,S=Ud,N=Cg,L=Bg,U=yg,le=He("RouterLink"),ye=rg,Z=eg,_e=Y1,ge=V1;return A(),E("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",y.value]),onMouseleave:u},[T(fn)?he("v-if",!0):(A(),E("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...De)=>T(o)&&T(o)(...De))},[T(l)?(A(),z(g,{key:0})):(A(),z(C,{key:1}))])),e("button",{class:We(["slidev-icon-btn",{disabled:!T(nO)}]),onClick:m[1]||(m[1]=(...De)=>T(jn)&&T(jn)(...De))},[k(D)],2),e("button",{class:We(["slidev-icon-btn",{disabled:!T(sO)}]),title:"Next",onClick:m[2]||(m[2]=(...De)=>T(Mn)&&T(Mn)(...De))},[k(b)],2),T(fn)?he("v-if",!0):(A(),E("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=De=>T(kd)())},[k(v)])),T(Sa)?he("v-if",!0):(A(),E("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=De=>T(Sd)())},[T(xc)?(A(),z(x,{key:0})):(A(),z($,{key:1}))])),k(fo),T(fn)?he("v-if",!0):(A(),E(Te,{key:3},[!T(_s)&&!T(t)&&d.value?(A(),E(Te,{key:0},[k(T(d)),k(fo)],64)):he("v-if",!0),T(_s)?(A(),E("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=De=>Mr.value=!T(Mr))},[T(Mr)?(A(),z(S,{key:0})):(A(),z(N,{key:1,class:"opacity-50"}))])):he("v-if",!0)],64)),(!T(Se).drawings.presenterOnly||T(_s))&&!T(fn)?(A(),E(Te,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=De=>nn.value=!T(nn))},[k(L),T(nn)?(A(),E("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:es({background:T(it).color})},null,4)):he("v-if",!0)]),k(fo)],64)):he("v-if",!0),T(fn)?he("v-if",!0):(A(),E(Te,{key:5},[T(_s)?(A(),z(le,{key:0,to:i.value,class:"slidev-icon-btn",title:"Play Mode"},{default:w(()=>[k(U)]),_:1},8,["to"])):he("v-if",!0),T(ZS)?(A(),z(le,{key:1,to:c.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:w(()=>[k(ye)]),_:1},8,["to"])):he("v-if",!0),he("v-if",!0)],64)),(A(),E(Te,{key:6},[T(Se).download?(A(),E("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...De)=>T(Ha)&&T(Ha)(...De))},[k(Z)])):he("v-if",!0)],64)),!T(_s)&&T(Se).info&&!T(fn)?(A(),E("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=De=>Bl.value=!T(Bl))},[k(_e)])):he("v-if",!0),!T(_s)&&!T(fn)?(A(),z(bC,{key:8},{button:w(()=>[e("button",xC,[k(ge)])]),menu:w(()=>[k(gC)]),_:1})):he("v-if",!0),T(fn)?he("v-if",!0):(A(),z(fo,{key:9})),e("div",$C,[e("div",FC,[a(Cs(T(Ge))+" ",1),e("span",TC,"/ "+Cs(T(JS)),1)])]),k(T(kC))],34)],512)}}}),OC=H(SC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/NavControls.vue"]]),IC={__name:"SlidesTotal",setup(s){const n=P(R);return(t,l)=>(A(),E("span",null,Cs(T(n).nav.total),1))}},LC=H(IC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/SlidesTotal.vue"]]),PC={__name:"SlideCurrentNo",setup(s){const n=P(R);return(t,l)=>(A(),E("span",null,Cs(T(n).nav.currentPage),1))}},MC=H(PC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/SlideCurrentNo.vue"]]),jC=$e({__name:"Pagination",props:{classNames:{type:[Array,String]},x:{default:"r",type:String,validator:s=>s==="l"||s==="r"},y:{default:"t",type:String,validator:s=>s==="b"||s==="t"}},setup(s){const{classNames:n,x:t,y:l}=s;P(R);const o=O(()=>[...n?Array.isArray(n)?n:[n]:[],t==="l"&&"left-0",t==="r"&&"right-0",l==="t"&&"top-0",l==="b"&&"bottom-0"]);return(r,c)=>{const i=MC,p=LC;return A(),E("div",{class:We(["absolute p-2 text-xs",o.value])},[k(i),a(" / "),k(p)],2)}}}),zC=H(jC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/components/Pagination.vue"]]),RC={__name:"global-top",setup(s){const n=P(R);return(t,l)=>{var r;const o=zC;return T(n).nav.currentPage!==T(n).nav.total+1&&!((r=T(n).themeConfigs.paginationPagesDisabled)!=null&&r.includes(T(n).nav.currentPage))&&(T(n).themeConfigs.paginationX||T(n).themeConfigs.paginationY)?(A(),z(o,{key:0,x:T(n).themeConfigs.paginationX,y:T(n).themeConfigs.paginationY},null,8,["x","y"])):he("v-if",!0)}}},HC=H(RC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/global-top.vue"]]),qd={render(){return[hs(HC)]}},NC={class:"absolute bottom-0 left-0 right-0 p-2"},VC=e("p",{style:{"font-size":"8px"}},[e("a",{rel:"license",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"(cc) BY-NC-SA - Jordan Frecon-Deloire (2022-2023)")],-1),WC=[VC],UC={__name:"global-bottom",setup(s){return P(R),(n,t)=>(A(),E("footer",NC,WC))}},qC=H(UC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/global-bottom.vue"]]),Gd={render(){return[hs(qC)]}},GC={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},KC=$e({__name:"PresenterMouse",setup(s){return P(R),(n,t)=>{const l=Ud;return T(Sr).cursor?(A(),E("div",GC,[k(l,{class:"absolute",style:es({left:`${T(Sr).cursor.x}%`,top:`${T(Sr).cursor.y}%`})},null,8,["style"])])):he("v-if",!0)}}}),YC=H(KC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),ZC=$e({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(s){P(R),ve(ys,()=>{var l,o;(l=ys.value)!=null&&l.meta&&ys.value.meta.preload!==!1&&(ys.value.meta.__preloaded=!0),(o=Hr.value)!=null&&o.meta&&Hr.value.meta.preload!==!1&&(Hr.value.meta.__preloaded=!0)},{immediate:!0});const n=rn();Ln(()=>import("./DrawingLayer-8be555b7.js"),[]).then(l=>n.value=l.default);const t=O(()=>Ze.filter(l=>{var o;return((o=l.meta)==null?void 0:o.__preloaded)||l===ys.value}));return(l,o)=>(A(),E(Te,null,[he(" Global Bottom "),k(T(Gd)),he(" Slides "),k(p5,oe(T(oO),{id:"slideshow",tag:"div"}),{default:w(()=>[(A(!0),E(Te,null,bt(t.value,r=>{var c;return js((A(),z(T(Tc),{key:r.path,is:r==null?void 0:r.component,clicks:r===T(ys)?T(Ps):0,"clicks-elements":((c=r.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:We(T(Fc)(r)),route:r,context:l.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[jy,r===T(ys)]])}),128))]),_:1},16),he(" Global Top "),k(T(qd)),n.value?(A(),z(T(n),{key:0})):he("v-if",!0),T(_s)?he("v-if",!0):(A(),z(YC,{key:1}))],64))}});const JC=H(ZC,[["__scopeId","data-v-afb4231e"],["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/SlidesShow.vue"]]),XC=$e({__name:"PrintStyle",setup(s){P(R);function n(t,{slots:l}){if(l.default)return hs("style",l.default())}return(t,l)=>(A(),z(n,null,{default:w(()=>[a(" @page { size: "+Cs(T(In))+"px "+Cs(T(Dc))+"px; margin: 0px; } ",1)]),_:1}))}}),Kd=H(XC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PrintStyle.vue"]]),QC=$e({__name:"Play",setup(s){P(R),Cv();const n=Y();function t(r){var c;wp.value||((c=r.target)==null?void 0:c.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Mn():jn())}rO(n);const l=O(()=>S_.value||wp.value);rn();const o=rn();return Ln(()=>import("./DrawingControls-effa453d.js"),[]).then(r=>o.value=r.default),(r,c)=>(A(),E(Te,null,[T(An)?(A(),z(Kd,{key:0})):he("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:es(T(bc))},[k(Id,{class:"w-full h-full",style:es({background:"var(--slidev-slide-container-background, black)"}),width:T(An)?T(At).width.value:void 0,scale:T(Co),onPointerdown:t},{default:w(()=>[k(JC,{context:"slide"})]),controls:w(()=>[e("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[l.value?"opacity-100 right-0":"opacity-0 p-2",T(Sl)?"pointer-events-none":""]])},[k(OC,{class:"m-auto",persist:l.value},null,8,["persist"])],2),!T(Se).drawings.presenterOnly&&!T(fn)&&o.value?(A(),z(T(o),{key:0,class:"ml-0"})):he("v-if",!0)]),_:1},8,["style","width","scale"]),he("v-if",!0)],4),k(j1)],64))}}),e9=H(QC,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Yd(s){return typeof s>"u"||s===null}function s9(s){return typeof s=="object"&&s!==null}function n9(s){return Array.isArray(s)?s:Yd(s)?[]:[s]}function t9(s,n){var t,l,o,r;if(n)for(r=Object.keys(n),t=0,l=r.length;t<l;t+=1)o=r[t],s[o]=n[o];return s}function l9(s,n){var t="",l;for(l=0;l<n;l+=1)t+=s;return t}function o9(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}var r9=Yd,a9=s9,c9=n9,i9=l9,p9=o9,u9=t9,Oc={isNothing:r9,isObject:a9,toArray:c9,repeat:i9,isNegativeZero:p9,extend:u9};function Zd(s,n){var t="",l=s.reason||"(unknown reason)";return s.mark?(s.mark.name&&(t+='in "'+s.mark.name+'" '),t+="("+(s.mark.line+1)+":"+(s.mark.column+1)+")",!n&&s.mark.snippet&&(t+=`

`+s.mark.snippet),l+" "+t):l}function Il(s,n){Error.call(this),this.name="YAMLException",this.reason=s,this.mark=n,this.message=Zd(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Il.prototype=Object.create(Error.prototype);Il.prototype.constructor=Il;Il.prototype.toString=function(n){return this.name+": "+Zd(this,n)};var at=Il,y9=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],d9=["scalar","sequence","mapping"];function f9(s){var n={};return s!==null&&Object.keys(s).forEach(function(t){s[t].forEach(function(l){n[String(l)]=t})}),n}function h9(s,n){if(n=n||{},Object.keys(n).forEach(function(t){if(y9.indexOf(t)===-1)throw new at('Unknown option "'+t+'" is met in definition of "'+s+'" YAML type.')}),this.options=n,this.tag=s,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=f9(n.styleAliases||null),d9.indexOf(this.kind)===-1)throw new at('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}var as=h9;function Np(s,n){var t=[];return s[n].forEach(function(l){var o=t.length;t.forEach(function(r,c){r.tag===l.tag&&r.kind===l.kind&&r.multi===l.multi&&(o=c)}),t[o]=l}),t}function m9(){var s={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function l(o){o.multi?(s.multi[o.kind].push(o),s.multi.fallback.push(o)):s[o.kind][o.tag]=s.fallback[o.tag]=o}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(l);return s}function za(s){return this.extend(s)}za.prototype.extend=function(n){var t=[],l=[];if(n instanceof as)l.push(n);else if(Array.isArray(n))l=l.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(l=l.concat(n.explicit));else throw new at("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(r){if(!(r instanceof as))throw new at("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new at("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new at("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),l.forEach(function(r){if(!(r instanceof as))throw new at("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(za.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(l),o.compiledImplicit=Np(o,"implicit"),o.compiledExplicit=Np(o,"explicit"),o.compiledTypeMap=m9(o.compiledImplicit,o.compiledExplicit),o};var B9=za,A9=new as("tag:yaml.org,2002:str",{kind:"scalar",construct:function(s){return s!==null?s:""}}),_9=new as("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(s){return s!==null?s:[]}}),v9=new as("tag:yaml.org,2002:map",{kind:"mapping",construct:function(s){return s!==null?s:{}}}),g9=new B9({explicit:[A9,_9,v9]});function C9(s){if(s===null)return!0;var n=s.length;return n===1&&s==="~"||n===4&&(s==="null"||s==="Null"||s==="NULL")}function D9(){return null}function b9(s){return s===null}var w9=new as("tag:yaml.org,2002:null",{kind:"scalar",resolve:C9,construct:D9,predicate:b9,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function E9(s){if(s===null)return!1;var n=s.length;return n===4&&(s==="true"||s==="True"||s==="TRUE")||n===5&&(s==="false"||s==="False"||s==="FALSE")}function k9(s){return s==="true"||s==="True"||s==="TRUE"}function x9(s){return Object.prototype.toString.call(s)==="[object Boolean]"}var $9=new as("tag:yaml.org,2002:bool",{kind:"scalar",resolve:E9,construct:k9,predicate:x9,represent:{lowercase:function(s){return s?"true":"false"},uppercase:function(s){return s?"TRUE":"FALSE"},camelcase:function(s){return s?"True":"False"}},defaultStyle:"lowercase"});function F9(s){return 48<=s&&s<=57||65<=s&&s<=70||97<=s&&s<=102}function T9(s){return 48<=s&&s<=55}function S9(s){return 48<=s&&s<=57}function O9(s){if(s===null)return!1;var n=s.length,t=0,l=!1,o;if(!n)return!1;if(o=s[t],(o==="-"||o==="+")&&(o=s[++t]),o==="0"){if(t+1===n)return!0;if(o=s[++t],o==="b"){for(t++;t<n;t++)if(o=s[t],o!=="_"){if(o!=="0"&&o!=="1")return!1;l=!0}return l&&o!=="_"}if(o==="x"){for(t++;t<n;t++)if(o=s[t],o!=="_"){if(!F9(s.charCodeAt(t)))return!1;l=!0}return l&&o!=="_"}if(o==="o"){for(t++;t<n;t++)if(o=s[t],o!=="_"){if(!T9(s.charCodeAt(t)))return!1;l=!0}return l&&o!=="_"}}if(o==="_")return!1;for(;t<n;t++)if(o=s[t],o!=="_"){if(!S9(s.charCodeAt(t)))return!1;l=!0}return!(!l||o==="_")}function I9(s){var n=s,t=1,l;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),l=n[0],(l==="-"||l==="+")&&(l==="-"&&(t=-1),n=n.slice(1),l=n[0]),n==="0")return 0;if(l==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function L9(s){return Object.prototype.toString.call(s)==="[object Number]"&&s%1===0&&!Oc.isNegativeZero(s)}var P9=new as("tag:yaml.org,2002:int",{kind:"scalar",resolve:O9,construct:I9,predicate:L9,represent:{binary:function(s){return s>=0?"0b"+s.toString(2):"-0b"+s.toString(2).slice(1)},octal:function(s){return s>=0?"0o"+s.toString(8):"-0o"+s.toString(8).slice(1)},decimal:function(s){return s.toString(10)},hexadecimal:function(s){return s>=0?"0x"+s.toString(16).toUpperCase():"-0x"+s.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),M9=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function j9(s){return!(s===null||!M9.test(s)||s[s.length-1]==="_")}function z9(s){var n,t;return n=s.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var R9=/^[-+]?[0-9]+e/;function H9(s,n){var t;if(isNaN(s))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===s)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===s)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Oc.isNegativeZero(s))return"-0.0";return t=s.toString(10),R9.test(t)?t.replace("e",".e"):t}function N9(s){return Object.prototype.toString.call(s)==="[object Number]"&&(s%1!==0||Oc.isNegativeZero(s))}var V9=new as("tag:yaml.org,2002:float",{kind:"scalar",resolve:j9,construct:z9,predicate:N9,represent:H9,defaultStyle:"lowercase"}),W9=g9.extend({implicit:[w9,$9,P9,V9]}),U9=W9,Jd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Xd=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function q9(s){return s===null?!1:Jd.exec(s)!==null||Xd.exec(s)!==null}function G9(s){var n,t,l,o,r,c,i,p=0,u=null,y,d,f;if(n=Jd.exec(s),n===null&&(n=Xd.exec(s)),n===null)throw new Error("Date resolve error");if(t=+n[1],l=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(t,l,o));if(r=+n[4],c=+n[5],i=+n[6],n[7]){for(p=n[7].slice(0,3);p.length<3;)p+="0";p=+p}return n[9]&&(y=+n[10],d=+(n[11]||0),u=(y*60+d)*6e4,n[9]==="-"&&(u=-u)),f=new Date(Date.UTC(t,l,o,r,c,i,p)),u&&f.setTime(f.getTime()-u),f}function K9(s){return s.toISOString()}var Y9=new as("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:q9,construct:G9,instanceOf:Date,represent:K9});function Z9(s){return s==="<<"||s===null}var J9=new as("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Z9}),Ic=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function X9(s){if(s===null)return!1;var n,t,l=0,o=s.length,r=Ic;for(t=0;t<o;t++)if(n=r.indexOf(s.charAt(t)),!(n>64)){if(n<0)return!1;l+=6}return l%8===0}function Q9(s){var n,t,l=s.replace(/[\r\n=]/g,""),o=l.length,r=Ic,c=0,i=[];for(n=0;n<o;n++)n%4===0&&n&&(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)),c=c<<6|r.indexOf(l.charAt(n));return t=o%4*6,t===0?(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)):t===18?(i.push(c>>10&255),i.push(c>>2&255)):t===12&&i.push(c>>4&255),new Uint8Array(i)}function e6(s){var n="",t=0,l,o,r=s.length,c=Ic;for(l=0;l<r;l++)l%3===0&&l&&(n+=c[t>>18&63],n+=c[t>>12&63],n+=c[t>>6&63],n+=c[t&63]),t=(t<<8)+s[l];return o=r%3,o===0?(n+=c[t>>18&63],n+=c[t>>12&63],n+=c[t>>6&63],n+=c[t&63]):o===2?(n+=c[t>>10&63],n+=c[t>>4&63],n+=c[t<<2&63],n+=c[64]):o===1&&(n+=c[t>>2&63],n+=c[t<<4&63],n+=c[64],n+=c[64]),n}function s6(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}var n6=new as("tag:yaml.org,2002:binary",{kind:"scalar",resolve:X9,construct:Q9,predicate:s6,represent:e6}),t6=Object.prototype.hasOwnProperty,l6=Object.prototype.toString;function o6(s){if(s===null)return!0;var n=[],t,l,o,r,c,i=s;for(t=0,l=i.length;t<l;t+=1){if(o=i[t],c=!1,l6.call(o)!=="[object Object]")return!1;for(r in o)if(t6.call(o,r))if(!c)c=!0;else return!1;if(!c)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function r6(s){return s!==null?s:[]}var a6=new as("tag:yaml.org,2002:omap",{kind:"sequence",resolve:o6,construct:r6}),c6=Object.prototype.toString;function i6(s){if(s===null)return!0;var n,t,l,o,r,c=s;for(r=new Array(c.length),n=0,t=c.length;n<t;n+=1){if(l=c[n],c6.call(l)!=="[object Object]"||(o=Object.keys(l),o.length!==1))return!1;r[n]=[o[0],l[o[0]]]}return!0}function p6(s){if(s===null)return[];var n,t,l,o,r,c=s;for(r=new Array(c.length),n=0,t=c.length;n<t;n+=1)l=c[n],o=Object.keys(l),r[n]=[o[0],l[o[0]]];return r}var u6=new as("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:i6,construct:p6}),y6=Object.prototype.hasOwnProperty;function d6(s){if(s===null)return!0;var n,t=s;for(n in t)if(y6.call(t,n)&&t[n]!==null)return!1;return!0}function f6(s){return s!==null?s:{}}var h6=new as("tag:yaml.org,2002:set",{kind:"mapping",resolve:d6,construct:f6});U9.extend({implicit:[Y9,J9],explicit:[n6,a6,u6,h6]});function Vp(s){return s===48?"\0":s===97?"\x07":s===98?"\b":s===116||s===9?"	":s===110?`
`:s===118?"\v":s===102?"\f":s===114?"\r":s===101?"\x1B":s===32?" ":s===34?'"':s===47?"/":s===92?"\\":s===78?"":s===95?" ":s===76?"\u2028":s===80?"\u2029":""}var m6=new Array(256),B6=new Array(256);for(var Tt=0;Tt<256;Tt++)m6[Tt]=Vp(Tt)?1:0,B6[Tt]=Vp(Tt);function A6(s){return Array.from(new Set(s))}function Wp(...s){let n,t,l;s.length===1?(n=0,l=1,[t]=s):[n,t,l=1]=s;const o=[];let r=n;for(;r<t;)o.push(r),r+=l||1;return o}function Qd(s,n){if(!n||n==="all"||n==="*")return Wp(1,s+1);const t=[];for(const l of n.split(/[,;]/g))if(!l.includes("-"))t.push(+l);else{const[o,r]=l.split("-",2);t.push(...Wp(+o,r?+r+1:s+1))}return A6(t).filter(l=>l<=s).sort((l,o)=>l-o)}function e8(s){const n=O(()=>s.value.path),t=O(()=>Ze.length),l=O(()=>Number.parseInt(n.value.split(/\//g).slice(-1)[0])||1),o=O(()=>hr(l.value)),r=O(()=>Ze.find(f=>f.path===`${l.value}`)),c=O(()=>{var f,h,m;return(m=(h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:m.id}),i=O(()=>{var f,h;return((h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.layout)||(l.value===1?"cover":"default")}),p=O(()=>Ze.find(f=>f.path===`${Math.min(Ze.length,l.value+1)}`)),u=O(()=>Ze.filter(f=>{var h,m;return(m=(h=f.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((f,h)=>(Rc(f,h),f),[])),y=O(()=>Hc(u.value,r.value)),d=O(()=>Nc(y.value));return{route:s,path:n,total:t,currentPage:l,currentPath:o,currentRoute:r,currentSlideId:c,currentLayout:i,nextRoute:p,rawTree:u,treeWithActiveStatuses:y,tree:d,downloadPDF:Ha,next:Mn,nextSlide:Ll,openInEditor:aO,prev:jn,prevSlide:Pl}}function s8(s,n,t){const l=Y(0);os(()=>{gs.afterEach(async()=>{await os(),l.value+=1})});const o=O(()=>{var p,u;return l.value,((u=(p=n.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),r=O(()=>{var p,u;return+(((u=(p=n.value)==null?void 0:p.meta)==null?void 0:u.clicks)??o.value.length)}),c=O(()=>t.value<Ze.length-1||s.value<r.value),i=O(()=>t.value>1||s.value>0);return{clicks:s,clicksElements:o,clicksTotal:r,hasNext:c,hasPrev:i}}const _6=["id"],v6=$e({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(s,{emit:n}){const t=s,l=sn(t,"clicksElements",n),o=O(()=>({height:`${Dc}px`,width:`${In}px`})),r=rn();Ln(()=>Promise.resolve().then(()=>Tv),void 0).then(u=>r.value=u.default);const c=O(()=>t.clicks),i=s8(c,t.nav.currentRoute,t.nav.currentPage),p=O(()=>`${t.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return Es(R,qe({nav:{...t.nav,...i},configs:Se,themeConfigs:O(()=>Se.themeConfig)})),(u,y)=>{var d;return A(),E("div",{id:p.value,class:"print-slide-container",style:es(o.value)},[k(T(Gd)),k(T(Tc),{is:(d=u.route)==null?void 0:d.component,"clicks-elements":T(l),"onUpdate:clicksElements":y[0]||(y[0]=f=>Oe(l)?l.value=f:null),clicks:c.value,"clicks-disabled":!1,class:We(T(Fc)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),r.value?(A(),z(T(r),{key:0,page:+u.route.path},null,8,["page"])):he("v-if",!0),k(T(qd))],12,_6)}}}),Up=H(v6,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),g6=$e({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(s){var r;const n=s;P(R);const t=Y(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),l=O(()=>n.route),o=e8(l);return(c,i)=>(A(),E(Te,null,[k(Up,{"clicks-elements":t.value,"onUpdate:clicksElements":i[0]||(i[0]=p=>t.value=p),clicks:0,nav:T(o),route:l.value},null,8,["clicks-elements","nav","route"]),T(Al)?he("v-if",!0):(A(!0),E(Te,{key:0},bt(t.value.length,p=>(A(),z(Up,{key:p,clicks:p,nav:T(o),route:l.value},null,8,["clicks","nav","route"]))),128))],64))}}),C6=H(g6,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PrintSlide.vue"]]),D6={id:"print-content"},b6=$e({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(s){const n=s;P(R);const t=O(()=>n.width),l=O(()=>n.width/On),o=O(()=>t.value/l.value),r=O(()=>o.value<On?t.value/In:l.value*On/In);let c=Ze;Rs.value.query.range&&(c=Qd(c.length,Rs.value.query.range).map(u=>c[u-1]));const i=O(()=>({"select-none":!Se.selectable}));return Es(Yy,r),(p,u)=>(A(),E("div",{id:"print-container",class:We(i.value)},[e("div",D6,[(A(!0),E(Te,null,bt(T(c),y=>(A(),z(C6,{key:y.path,route:y},null,8,["route"]))),128))]),zs(p.$slots,"controls")],2))}});const w6=H(b6,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/PrintContainer.vue"]]),E6=$e({__name:"Print",setup(s){return P(R),Dt(()=>{An?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,t)=>(A(),E(Te,null,[T(An)?(A(),z(Kd,{key:0})):he("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:es(T(bc))},[k(w6,{class:"w-full h-full",style:es({background:"var(--slidev-slide-container-background, black)"}),width:T(At).width.value},null,8,["style","width"])],4)],64))}});const k6=H(E6,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/internals/Print.vue"]]);const x6="/courses/data-structure/linked-lists/front/logo.png",$6={key:0},F6=["href"],T6=$e({__name:"TextWithOptionalLink",props:{link:{type:String,required:!1},text:{type:String,required:!0}},setup(s){return P(R),(n,t)=>n.link?(A(),E("a",{key:1,href:n.link,rel:"noreferrer",target:"_blank"},Cs(n.text),9,F6)):(A(),E("span",$6,Cs(n.text),1))}}),S6=H(T6,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/components/TextWithOptionalLink.vue"]]);function qp(s){return s.startsWith("/")?"/courses/data-structure/linked-lists/"+s.slice(1):s}function O6(s,n=!1){const t=s&&["#","rgb","hsl"].some(o=>s.indexOf(o)===0),l={background:t?s:void 0,backgroundImage:t?void 0:s?n?`linear-gradient(#0009, #0009), url(${qp(s)})`:`url("${qp(s)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const I6={class:"my-auto w-full"},L6={key:0,class:"absolute bottom-12"},P6={key:0},M6={key:1,class:"absolute bottom-0 font-extralight mb-1 mr-2 right-0 text-xs"},j6=$e({__name:"cover",props:{coverAuthor:{type:String,required:!1},coverAuthorUrl:{type:String,required:!1},coverBackgroundUrl:{type:String,required:!1},coverBackgroundSource:{type:String,required:!1},coverBackgroundSourceUrl:{type:String,required:!1},coverDate:{type:[String,Date],required:!1,default:new Date().toLocaleDateString()}},setup(s){const{coverBackgroundUrl:n}=s;P(R);const t=O(()=>O6(n,!0));return(l,o)=>{const r=S6;return A(),E("div",{class:"slidev-layout cover",style:es(t.value)},[e("div",I6,[zs(l.$slots,"default"),l.coverAuthor||l.coverDate?(A(),E("div",L6,[k(r,{link:l.coverAuthorUrl,text:l.coverAuthor},null,8,["link","text"]),l.coverDate?(A(),E("span",P6,Cs(l.coverAuthor&&l.coverDate?`, ${l.coverDate}`:l.coverDate),1)):he("v-if",!0)])):he("v-if",!0),l.coverBackgroundSource?(A(),E("div",M6,[k(r,{link:l.coverBackgroundSourceUrl,text:l.coverBackgroundSource},null,8,["link","text"])])):he("v-if",!0)])],4)}}}),z6=H(j6,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/layouts/cover.vue"]]),R6=e("h1",null,"Data Structures in C/C++",-1),H6=e("h2",null,"Chapter 7: Linked Lists",-1),N6=e("img",{src:x6,class:"image-bottom",style:{height:"70px",width:"auto"}},null,-1),V6={__name:"1",setup(s){const n={theme:"academic",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap7/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},coverDate:null,hideInToc:!0};return P(R),(t,l)=>(A(),z(z6,te(ee(n)),{default:w(()=>[R6,H6,N6]),_:1},16))}},W6=H(V6,[["__file","/@slidev/slides/1.md"]]),U6={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},q6=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),G6=[q6];function K6(s,n){return A(),E("svg",U6,G6)}const Y6={name:"ph-clipboard",render:K6},Z6={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},J6=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),X6=[J6];function Q6(s,n){return A(),E("svg",Z6,X6)}const e7={name:"ph-check-circle",render:Q6},s7=["title"],n7=$e({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:Se.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(s){const n=s;P(R);const t=P(dl),l=P(lt),o=P(fl);function r(d=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let g=0;g<d;g++)f.push(h.charAt(Math.floor(Math.random()*m)));return f.join("")}const c=Y(),i=Fs();Wn(()=>{const d=n.at==null?l==null?void 0:l.value.length:n.at,f=O(()=>o!=null&&o.value?n.ranges.length-1:Math.min(Math.max(0,((t==null?void 0:t.value)||0)-(d||0)),n.ranges.length-1)),h=O(()=>n.ranges[f.value]||"");if(n.ranges.length>=2&&!(o!=null&&o.value)){const m=r(),g=C3(n.ranges.length-1).map(C=>m+C);l!=null&&l.value&&(l.value.push(...g),pr(()=>g.forEach(C=>_a(l.value,C)),i))}Dt(()=>{if(!c.value)return;const g=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value],C=n.startLine;for(const D of g){const b=Array.from(D.querySelectorAll(".line")),v=Qd(b.length+C-1,h.value);if(b.forEach((x,$)=>{const S=v.includes($+C);x.classList.toggle(et,!0),x.classList.toggle("highlighted",S),x.classList.toggle("dishonored",!S)}),n.maxHeight){const x=Array.from(D.querySelectorAll(".line.highlighted"));x.reduce((S,N)=>N.offsetHeight+S,0)>c.value.offsetHeight?x[0].scrollIntoView({behavior:"smooth",block:"start"}):x.length>0&&x[Math.round((x.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=CB();function y(){var f,h;const d=(h=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;d&&u(d)}return(d,f)=>{const h=e7,m=Y6;return A(),E("div",{ref_key:"el",ref:c,class:We(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":n.lines}]),style:es({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0,"--start":n.startLine})},[zs(d.$slots,"default"),T(Se).codeCopy?(A(),E("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:T(p)?"Copied":"Copy",onClick:f[0]||(f[0]=g=>y())},[T(p)?(A(),z(h,{key:0,class:"p-2 w-8 h-8"})):(A(),z(m,{key:1,class:"p-2 w-8 h-8"}))],8,s7)):he("v-if",!0)],6)}}}),de=H(n7,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),t7={class:"slidev-layout default"},l7={__name:"default",setup(s){return P(R),(n,t)=>(A(),E("div",t7,[zs(n.$slots,"default")]))}},re=H(l7,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/layouts/default.vue"]]),o7=e("h1",null,"Operations on Arrays",-1),r7=e("p",null,"Can you code a function which …",-1),a7=e("ul",null,[e("li",null,"copy one array into another one ?"),e("li",null,"append two arrays ?"),e("li",null,"…")],-1),c7=e("p",null,"What is the time complexity of such operation ?",-1),i7=e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"copy/append arrays"),e("mo",null,"∼"),e("mi",{mathvariant:"script"},"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"n"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"\\text{copy/append arrays}\\sim \\mathcal{O}(n)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord text"},[e("span",{class:"mord"},"copy/append arrays")]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"∼"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},")")])])])],-1),p7=[i7],u7=e("p",null,[a("That’s because arrays are stored in a contiguous memory block"),e("br"),a(" Which is also their strength !")],-1),y7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#B8A965"}},"tab"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"i"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#B8A965"}},"tab"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#CB7676"}},"*sizeof"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"tab"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"])")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8C862B"}},"tab"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"i"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8C862B"}},"tab"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#AB5959"}},"*sizeof"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"tab"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"])")])])])],-1),d7={__name:"2",setup(s){const n={hideInToc:!0,level:2};return P(R),(t,l)=>{const o=He("center"),r=de,c=Un("click");return A(),z(re,te(ee(n)),{default:w(()=>[o7,r7,a7,c7,k(o,null,{default:w(()=>[js((A(),E("div",null,p7)),[[c,1]])]),_:1}),js((A(),E("div",null,[u7,k(o,null,{default:w(()=>[k(r,oe({},{ranges:[""]}),{default:w(()=>[y7]),_:1},16)]),_:1})])),[[c,2]])]),_:1},16)}}},f7=H(d7,[["__file","/@slidev/slides/2.md"]]),h7="/courses/data-structure/linked-lists/chap7/array_complexity.png",m7=e("h1",null,"Arrays limitations",-1),B7=e("img",{src:h7,border:"rounded"},null,-1),A7=e("p",null,[e("br"),e("br"),e("br")],-1),_7=e("p",null,"Can we do better ?",-1),v7={__name:"3",setup(s){const n={hideInToc:!0,level:2};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[m7,B7,A7,k(o,null,{default:w(()=>[_7]),_:1})]),_:1},16)}}},g7=H(v7,[["__file","/@slidev/slides/3.md"]]),C7=["href","innerHTML"],D7=["href"],b7=$e({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(s){return P(R),(n,t)=>{const l=He("RouterLink");return!T(An)&&n.title?(A(),z(l,{key:0,to:String(n.to),onClick:t[0]||(t[0]=o=>o.target.blur()),innerHTML:n.title},null,8,["to","innerHTML"])):!T(An)&&!n.title?(A(),z(l,{key:1,to:String(n.to),onClick:t[1]||(t[1]=o=>o.target.blur())},{default:w(()=>[zs(n.$slots,"default")]),_:3},8,["to"])):T(An)&&n.title?(A(),E("a",{key:2,href:`#${n.to}`,innerHTML:n.title},null,8,C7)):(A(),E("a",{key:3,href:`#${n.to}`},[zs(n.$slots,"default")],8,D7))}}}),w7=H(b7,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/Link.vue"]]),E7={key:0},k7={key:1},x7={key:2},$7={key:3},F7={key:4},T7={key:5},S7={key:6},O7={key:7},I7={key:8},L7={key:9},P7={key:10},M7={key:11},j7={key:12},z7={key:13},R7={key:14},H7={key:15},N7={key:16},V7={key:17},W7={key:18},U7={key:19},q7={key:20},G7={key:21},K7={key:22},Y7={key:23},Z7={key:24},J7={key:25},X7={key:26},Q7={key:27},eD={key:28},sD={key:29},nD={key:30},tD={key:31},lD={key:32},oD={key:33},rD={key:34},aD={key:35},cD={key:36},iD={key:37},pD={key:38},uD={key:39},yD={key:40},dD={key:41},fD={key:42},hD={key:43},mD={key:44},BD={key:45},AD={key:46},_D={key:47},vD={key:48},gD={key:49},CD={key:50},DD={key:51},bD={key:52},wD={key:53},ED={key:54},kD={key:55},xD={key:56},$D={key:57},FD={key:58},TD={key:59},SD={key:60},OD={key:61},ID={key:62},LD={key:63},PD={key:64},MD={key:65},jD={key:66},zD={key:67},RD={key:68},HD={key:69},ND={key:70},VD={key:71},WD=$e({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(s){return(n,t)=>(A(),E("div",null,[+n.no==1?(A(),E("p",E7,"Linked lists")):+n.no==2?(A(),E("p",k7,"Operations on arrays")):+n.no==3?(A(),E("p",x7,"Complexity")):+n.no==4?(A(),E("p",$7,"Table of contents")):+n.no==5?(A(),E("p",F7,"Linked Lists")):+n.no==6?(A(),E("p",T7,"Motivation")):+n.no==7?(A(),E("p",S7,"Motivation")):+n.no==8?(A(),E("p",O7,"Motivation")):+n.no==9?(A(),E("p",I7,"Memory representation")):+n.no==10?(A(),E("p",L7,"Memory Representation")):+n.no==11?(A(),E("p",P7,"Implementation in C/C++")):+n.no==12?(A(),E("p",M7,"Case study - creation of linked list")):+n.no==13?(A(),E("p",j7,"Case Study: Creation of Linked lists")):+n.no==14?(A(),E("p",z7,"Case Study: Creation of Linked lists")):+n.no==15?(A(),E("p",R7,"Case Study: Creation of Linked lists")):+n.no==16?(A(),E("p",H7,"Case Study: Creation of Linked lists")):+n.no==17?(A(),E("p",N7,"Case Study: Creation of Linked lists")):+n.no==18?(A(),E("p",V7,"Case Study: Creation of Linked lists")):+n.no==19?(A(),E("p",W7,"Case Study: Creation of Linked lists")):+n.no==20?(A(),E("p",U7,"Case Study: Creation of Linked lists")):+n.no==21?(A(),E("p",q7,"Case Study: Creation of Linked lists")):+n.no==22?(A(),E("p",G7,"Case Study: Creation of Linked lists")):+n.no==23?(A(),E("p",K7,"Case Study: Creation of Linked lists")):+n.no==24?(A(),E("p",Y7,"Case Study: Creation of Linked lists")):+n.no==25?(A(),E("p",Z7,"Case Study: Creation of Linked lists")):+n.no==26?(A(),E("p",J7,"How does it look like in memory ?")):+n.no==27?(A(),E("p",X7,"How does it look like in memory ?")):+n.no==28?(A(),E("p",Q7,"Primitives Operations on Linked Lists")):+n.no==29?(A(),E("p",eD,"Display")):+n.no==30?(A(),E("p",sD,"Display")):+n.no==31?(A(),E("p",nD,"Display")):+n.no==32?(A(),E("p",tD,"Display")):+n.no==33?(A(),E("p",lD,"Display")):+n.no==34?(A(),E("p",oD,"Display")):+n.no==35?(A(),E("p",rD,"Display")):+n.no==36?(A(),E("p",aD,"Display")):+n.no==37?(A(),E("p",cD,"Display")):+n.no==38?(A(),E("p",iD,"Display")):+n.no==39?(A(),E("p",pD,"Insertion")):+n.no==40?(A(),E("p",uD,"Insertion")):+n.no==41?(A(),E("p",yD,"Insertion")):+n.no==42?(A(),E("p",dD,"Insertion")):+n.no==43?(A(),E("p",fD,"Insertion")):+n.no==44?(A(),E("p",hD,"Deletion")):+n.no==45?(A(),E("p",mD,"Deletion")):+n.no==46?(A(),E("p",BD,"Deletion")):+n.no==47?(A(),E("p",AD,"Deletion")):+n.no==48?(A(),E("p",_D,"Deletion")):+n.no==49?(A(),E("p",vD,"Deletion")):+n.no==50?(A(),E("p",gD,"Deletion")):+n.no==51?(A(),E("p",CD,"Deletion (improved)")):+n.no==52?(A(),E("p",DD,"Access")):+n.no==53?(A(),E("p",bD,"Access")):+n.no==54?(A(),E("p",wD,"Access")):+n.no==55?(A(),E("p",ED,"Access")):+n.no==56?(A(),E("p",kD,"Access")):+n.no==57?(A(),E("p",xD,"Access")):+n.no==58?(A(),E("p",$D,"Access")):+n.no==59?(A(),E("p",FD,"Access")):+n.no==60?(A(),E("p",TD,"Search")):+n.no==61?(A(),E("p",SD,"Search")):+n.no==62?(A(),E("p",OD,"Complexity")):+n.no==63?(A(),E("p",ID,"undefined")):+n.no==64?(A(),E("p",LD,"Advanced Linked Lists")):+n.no==65?(A(),E("p",PD,"Doubly linked lists")):+n.no==66?(A(),E("p",MD,"Doubly linked lists")):+n.no==67?(A(),E("p",jD,"Circular linked lists")):+n.no==68?(A(),E("p",zD,"Skip lists")):+n.no==69?(A(),E("p",RD,"Unrolled lists")):+n.no==70?(A(),E("p",HD,"Conclusion")):+n.no==71?(A(),E("p",ND,"To recap")):+n.no==72?(A(),E("p",VD,"To Go Further")):he("v-if",!0)]))}}),UD=H(WD,[["__file","/@slidev/titles.md"]]),qD=$e({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(s){const n=s;P(R);const t=O(()=>[...g3(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]);return(l,o)=>{const r=w7,c=He("TocList",!0);return l.list&&l.list.length>0?(A(),E("ol",{key:0,class:We(t.value)},[(A(!0),E(Te,null,bt(l.list,i=>(A(),E("li",{key:i.path,class:We(["slidev-toc-item",[{"slidev-toc-item-active":i.active},{"slidev-toc-item-parent-active":i.activeParent}]])},[k(r,{to:i.path},{default:w(()=>[k(T(UD),{no:i.path},null,8,["no"])]),_:2},1032,["to"]),i.children.length>0?(A(),z(c,{key:0,level:l.level+1,list:i.children,"list-class":l.listClass},null,8,["level","list","list-class"])):he("v-if",!0)],2))),128))],2)):he("v-if",!0)}}});const GD=H(qD,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/TocList.vue"]]),KD=$e({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(s){const n=s,t=P(R);function l(i,p=1){if(p>Number(n.maxDepth))return[];if(p<Number(n.minDepth)){const u=i.find(y=>y.active||y.activeParent);return u?l(u.children,p+1):[]}return i.map(u=>({...u,children:l(u.children,p+1)}))}function o(i){return i.filter(p=>p.active||p.activeParent||p.hasActiveParent).map(p=>({...p,children:o(p.children)}))}function r(i){const p=i.some(u=>u.active||u.activeParent||u.hasActiveParent);return i.filter(()=>p).map(u=>({...u,children:r(u.children)}))}const c=O(()=>{const i=t==null?void 0:t.nav.tree;if(!i)return[];let p=l(i);return n.mode==="onlyCurrentTree"?p=o(p):n.mode==="onlySiblings"&&(p=r(p)),p});return(i,p)=>{const u=GD;return A(),E("div",{class:"slidev-toc",style:es(`column-count:${i.columns}`)},[k(u,{level:1,list:c.value,"list-class":i.listClass},null,8,["list","list-class"])],4)}}}),ql=H(KD,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/builtin/Toc.vue"]]),YD=e("h1",null,"Table of contents",-1),ZD={style:{"font-size":"smaller"}},JD={__name:"4",setup(s){const n={hideInToc:!0};return P(R),(t,l)=>{const o=ql;return A(),z(re,te(ee(n)),{default:w(()=>[YD,e("div",ZD,[k(o,{columns:"1",maxDepth:"3",style:{"font-size":"smaller"}})])]),_:1},16)}}},XD=H(JD,[["__file","/@slidev/slides/4.md"]]),QD={class:"slidev-layout intro"},e0={class:"my-auto"},s0={__name:"intro",setup(s){return P(R),(n,t)=>(A(),E("div",QD,[e("div",e0,[zs(n.$slots,"default")])]))}},Gl=H(s0,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/slidev-theme-academic/layouts/intro.vue"]]),n0=e("span",{style:{"font-weight":"700","font-size":"30px"}},"1. Linked Lists",-1),t0=e("br",null,null,-1),l0=e("br",null,null,-1),o0={style:{"text-align":"left",display:"inline-block"}},r0={__name:"5",setup(s){const n={layout:"intro",level:1};return P(R),(t,l)=>{const o=ql,r=He("center");return A(),z(Gl,te(ee(n)),{default:w(()=>[k(r,null,{default:w(()=>[n0,t0,l0,e("div",o0,[k(o,{minDepth:"2",mode:"onlyCurrentTree"})])]),_:1})]),_:1},16)}}},a0=H(r0,[["__file","/@slidev/slides/5.md"]]),c0="/courses/data-structure/linked-lists/chap7/wagon.png",i0="/courses/data-structure/linked-lists/chap7/linked-wagons.png",p0=e("h1",null,"Motivation",-1),u0=e("img",{src:c0},null,-1),y0=e("br",null,null,-1),d0=e("p",null,[a("Store each item in memory independently from the others: "),e("strong",null,"not contiguous in memory")],-1),f0=e("p",null,[e("br"),e("br"),e("br")],-1),h0=e("img",{src:i0},null,-1),m0=e("br",null,null,-1),B0={__name:"6",setup(s){const n={level:2};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[p0,k(o,null,{default:w(()=>[u0]),_:1}),y0,d0,f0,k(o,null,{default:w(()=>[h0]),_:1}),m0,a(" Since all items are not stored contiguously, link them, i.e. each item provides a link to its successor making a sequence of items (a single successor per item) ")]),_:1},16)}}},A0=H(B0,[["__file","/@slidev/slides/6.md"]]),_0="/courses/data-structure/linked-lists/chap7/linked-wagons-representation.png",v0=e("h1",null,"Motivation",-1),g0=e("br",null,null,-1),C0=e("br",null,null,-1),D0=e("p",null,[a("Each item has a "),e("strong",null,"pointer"),a(" to the next item (its successor in the sequence)")],-1),b0=e("br",null,null,-1),w0=e("br",null,null,-1),E0=e("img",{src:_0},null,-1),k0=e("br",null,null,-1),x0=e("br",null,null,-1),$0=e("p",null,[a("Don’t forget a "),e("strong",null,"NULL"),a(" pointer at the end in order to test when the sequence ends")],-1),F0={__name:"7",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[v0,k(o,null,{default:w(()=>[g0,C0,D0]),_:1}),k(o,null,{default:w(()=>[b0,w0,E0]),_:1}),k0,x0,k(o,null,{default:w(()=>[$0]),_:1})]),_:1},16)}}},T0=H(F0,[["__file","/@slidev/slides/7.md"]]),Lc="/courses/data-structure/linked-lists/chap7/linked-wagons-head.png",S0=e("h1",null,"Motivation",-1),O0=e("br",null,null,-1),I0=e("br",null,null,-1),L0=e("p",null,"There is one missing piece … Why is it necessary ?",-1),P0=e("br",null,null,-1),M0=e("br",null,null,-1),j0=e("img",{src:Lc},null,-1),z0=e("br",null,null,-1),R0=e("br",null,null,-1),H0=e("p",null,[a("How else would you find the size of the list ("),e("code",null," size(.)"),a(") without knowing the start ?")],-1),N0={__name:"8",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=He("center"),r=Un("click");return A(),z(re,te(ee(n)),{default:w(()=>[S0,k(o,null,{default:w(()=>[O0,I0,L0]),_:1}),k(o,null,{default:w(()=>[P0,M0,j0]),_:1}),z0,R0,js((A(),E("div",null,[k(o,null,{default:w(()=>[H0]),_:1})])),[[r,1]])]),_:1},16)}}},V0=H(N0,[["__file","/@slidev/slides/8.md"]]),W0="/courses/data-structure/linked-lists/chap7/memory-1.png",U0=e("h1",null,"Memory Representation",-1),q0=e("p",null,"Linked lists are stored noncontigously !",-1),G0=e("img",{src:Lc},null,-1),K0=e("br",null,null,-1),Y0=e("br",null,null,-1),Z0=e("p",null,"So this scenario may happen",-1),J0=e("img",{src:W0},null,-1),X0={__name:"9",setup(s){const n={level:2};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[U0,q0,k(o,null,{default:w(()=>[G0]),_:1}),K0,Y0,Z0,k(o,null,{default:w(()=>[J0]),_:1})]),_:1},16)}}},Q0=H(X0,[["__file","/@slidev/slides/9.md"]]),e2="/courses/data-structure/linked-lists/chap7/memory-2.png",s2=e("h1",null,"Memory Representation",-1),n2=e("p",null,"Linked lists are stored noncontigously !",-1),t2=e("img",{src:Lc},null,-1),l2=e("br",null,null,-1),o2=e("br",null,null,-1),r2=e("p",null,"And this one also",-1),a2=e("img",{src:e2},null,-1),c2={__name:"10",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[s2,n2,k(o,null,{default:w(()=>[t2]),_:1}),l2,o2,r2,k(o,null,{default:w(()=>[a2]),_:1})]),_:1},16)}}},i2=H(c2,[["__file","/@slidev/slides/10.md"]]),p2="/courses/data-structure/linked-lists/chap7/wagon-only.png",u2="/courses/data-structure/linked-lists/chap7/head-only.png",y2=e("h1",null,"Implementation in C/C++",-1),d2={class:"row"},f2=e("div",{class:"column"},[e("img",{src:p2})],-1),h2={class:"column"},m2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"typedef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," data"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"    // Assume we store int’s")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," next"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"  // Pointer to the successor of this item")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"typedef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," data"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"    // Assume we store int’s")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," next"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"  // Pointer to the successor of this item")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),B2=e("br",null,null,-1),A2=e("br",null,null,-1),_2=e("br",null,null,-1),v2={class:"row"},g2=e("div",{class:"column"},[e("img",{src:u2})],-1),C2={class:"column"},D2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"typedef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"intlist")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," size"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"    // count of inserted values")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," first"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // pointer to the first list element")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"typedef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"intlist")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," size"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"    // count of inserted values")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," first"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // pointer to the first list element")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),b2={__name:"11",setup(s){const n={level:2};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[y2,e("div",d2,[f2,e("div",h2,[k(o,oe({},{ranges:[""]}),{default:w(()=>[m2]),_:1},16)])]),B2,A2,_2,e("div",v2,[g2,e("div",C2,[k(o,oe({},{ranges:[""]}),{default:w(()=>[D2]),_:1},16)])])]),_:1},16)}}},w2=H(b2,[["__file","/@slidev/slides/11.md"]]),E2=e("h1",null,"Case Study: Creation of Linked lists",-1),k2={class:"row"},x2={class:"column"},$2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),F2={class:"column"},T2=e("p",null,[a("Here we have used the "),e("strong",null,"arrow operator")],-1),S2={class:"row"},O2={class:"column"},I2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),L2=e("p",null,"The Arrow(->) operator exists to access the members of the structure or the unions using pointers.",-1),P2={class:"column"},M2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}},"ml"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}},"ml"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),j2=e("p",null,"The Dot(.) operator is used to normally access members of a structure or union",-1),z2={__name:"12",setup(s){const n={level:2};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[E2,e("div",k2,[e("div",x2,[k(o,oe({},{ranges:[""]}),{default:w(()=>[$2]),_:1},16)]),e("div",F2,[T2,e("div",S2,[e("div",O2,[k(o,oe({},{ranges:[""]}),{default:w(()=>[I2]),_:1},16),L2]),e("div",P2,[k(o,oe({},{ranges:[""]}),{default:w(()=>[M2]),_:1},16),j2])])])])]),_:1},16)}}},R2=H(z2,[["__file","/@slidev/slides/12.md"]]),H2="/courses/data-structure/linked-lists/chap7/ll-1.png",N2=e("h1",null,"Case Study: Creation of Linked lists",-1),V2={class:"row"},W2={class:"column"},U2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),q2=e("div",{class:"column"},[e("img",{src:H2})],-1),G2=e("p",null,[a("Dynamic allocation of a variable of type "),e("code",null,"intlist"),e("br"),a(" Returns a pointer "),e("code",null,"ml"),a(" to the corresponding memory emplacement")],-1),K2={__name:"13",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[N2,e("div",V2,[e("div",W2,[k(o,oe({},{ranges:["2"]}),{default:w(()=>[U2]),_:1},16)]),q2]),G2]),_:1},16)}}},Y2=H(K2,[["__file","/@slidev/slides/13.md"]]),Z2="/courses/data-structure/linked-lists/chap7/ll-2.png",J2=e("h1",null,"Case Study: Creation of Linked lists",-1),X2={class:"row"},Q2={class:"column"},e4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),s4=e("div",{class:"column"},[e("img",{src:Z2})],-1),n4=e("p",null,[a("The member "),e("code",null,"first"),a(" of the variable pointed by "),e("code",null,"ml"),a(" is assigned to the "),e("strong",null,"null pointer"),a(", i.e., "),e("code",null,"nullptr")],-1),t4={__name:"14",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[J2,e("div",X2,[e("div",Q2,[k(o,oe({},{ranges:["3"]}),{default:w(()=>[e4]),_:1},16)]),s4]),n4]),_:1},16)}}},l4=H(t4,[["__file","/@slidev/slides/14.md"]]),o4="/courses/data-structure/linked-lists/chap7/ll-3.png",r4=e("h1",null,"Case Study: Creation of Linked lists",-1),a4={class:"row"},c4={class:"column"},i4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),p4=e("div",{class:"column"},[e("img",{src:o4})],-1),u4=e("p",null,[a("The member "),e("code",null,"size"),a(" of the variable pointed by "),e("code",null,"ml"),a(" is assigned to 0")],-1),y4={__name:"15",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[r4,e("div",a4,[e("div",c4,[k(o,oe({},{ranges:["4"]}),{default:w(()=>[i4]),_:1},16)]),p4]),u4]),_:1},16)}}},d4=H(y4,[["__file","/@slidev/slides/15.md"]]),f4="/courses/data-structure/linked-lists/chap7/ll-4.png",h4=e("h1",null,"Case Study: Creation of Linked lists",-1),m4={class:"row"},B4={class:"column"},A4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_4=e("div",{class:"column"},[e("img",{src:f4})],-1),v4=e("p",null,[a("Dynamic allocation of a variable of type "),e("code",null,"node"),e("br"),a(" Returns a pointer "),e("code",null,"n1"),a(" to the corresponding memory emplacement")],-1),g4={__name:"16",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[h4,e("div",m4,[e("div",B4,[k(o,oe({},{ranges:["6"]}),{default:w(()=>[A4]),_:1},16)]),_4]),v4]),_:1},16)}}},C4=H(g4,[["__file","/@slidev/slides/16.md"]]),D4="/courses/data-structure/linked-lists/chap7/ll-5.png",b4=e("h1",null,"Case Study: Creation of Linked lists",-1),w4={class:"row"},E4={class:"column"},k4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),x4=e("div",{class:"column"},[e("img",{src:D4})],-1),$4=e("p",null,[a("The member "),e("code",null,"data"),a(" of the variable pointed by "),e("code",null,"n1"),a(" is assigned to 10")],-1),F4={__name:"17",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[b4,e("div",w4,[e("div",E4,[k(o,oe({},{ranges:["7"]}),{default:w(()=>[k4]),_:1},16)]),x4]),$4]),_:1},16)}}},T4=H(F4,[["__file","/@slidev/slides/17.md"]]),S4="/courses/data-structure/linked-lists/chap7/ll-6.png",O4=e("h1",null,"Case Study: Creation of Linked lists",-1),I4={class:"row"},L4={class:"column"},P4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),M4=e("div",{class:"column"},[e("img",{src:S4})],-1),j4=e("p",null,[a("The member "),e("code",null,"next"),a(" of the variable pointed by "),e("code",null,"n1"),a(" is assigned to the null pointer")],-1),z4={__name:"18",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[O4,e("div",I4,[e("div",L4,[k(o,oe({},{ranges:["8"]}),{default:w(()=>[P4]),_:1},16)]),M4]),j4]),_:1},16)}}},R4=H(z4,[["__file","/@slidev/slides/18.md"]]),H4="/courses/data-structure/linked-lists/chap7/ll-7.png",N4=e("h1",null,"Case Study: Creation of Linked lists",-1),V4={class:"row"},W4={class:"column"},U4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),q4=e("div",{class:"column"},[e("img",{src:H4})],-1),G4=e("p",null,[a("The member "),e("code",null,"first"),a(" of the variable pointed by "),e("code",null,"ml"),a(" is assigned to the value of "),e("code",null,"n1"),a(", that is the address of the variable pointed by "),e("code",null,"n1")],-1),K4={__name:"19",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[N4,e("div",V4,[e("div",W4,[k(o,oe({},{ranges:["9"]}),{default:w(()=>[U4]),_:1},16)]),q4]),G4]),_:1},16)}}},Y4=H(K4,[["__file","/@slidev/slides/19.md"]]),Z4="/courses/data-structure/linked-lists/chap7/ll-8.png",J4=e("h1",null,"Case Study: Creation of Linked lists",-1),X4={class:"row"},Q4={class:"column"},eb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),sb=e("div",{class:"column"},[e("img",{src:Z4})],-1),nb=e("p",null,[a("The member "),e("code",null,"size"),a(" of the variable pointed by "),e("code",null,"ml"),a(" is incremented")],-1),tb={__name:"20",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[J4,e("div",X4,[e("div",Q4,[k(o,oe({},{ranges:["10"]}),{default:w(()=>[eb]),_:1},16)]),sb]),nb]),_:1},16)}}},lb=H(tb,[["__file","/@slidev/slides/20.md"]]),ob="/courses/data-structure/linked-lists/chap7/ll-9.png",rb=e("h1",null,"Case Study: Creation of Linked lists",-1),ab={class:"row"},cb={class:"column"},ib=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),pb=e("div",{class:"column"},[e("img",{src:ob})],-1),ub=e("p",null,[a("Dynamic allocation of a variable of type "),e("code",null,"node"),e("br"),a(" Returns a pointer "),e("code",null,"n2"),a(" to the corresponding memory emplacement")],-1),yb={__name:"21",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[rb,e("div",ab,[e("div",cb,[k(o,oe({},{ranges:["12"]}),{default:w(()=>[ib]),_:1},16)]),pb]),ub]),_:1},16)}}},db=H(yb,[["__file","/@slidev/slides/21.md"]]),fb="/courses/data-structure/linked-lists/chap7/ll-10.png",hb=e("h1",null,"Case Study: Creation of Linked lists",-1),mb={class:"row"},Bb={class:"column"},Ab=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_b=e("div",{class:"column"},[e("img",{src:fb})],-1),vb=e("p",null,[a("The member "),e("code",null,"data"),a(" of the variable pointed by "),e("code",null,"n2"),a(" is assigned to 21")],-1),gb={__name:"22",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[hb,e("div",mb,[e("div",Bb,[k(o,oe({},{ranges:["13"]}),{default:w(()=>[Ab]),_:1},16)]),_b]),vb]),_:1},16)}}},Cb=H(gb,[["__file","/@slidev/slides/22.md"]]),Db="/courses/data-structure/linked-lists/chap7/ll-11.png",bb=e("h1",null,"Case Study: Creation of Linked lists",-1),wb={class:"row"},Eb={class:"column"},kb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),xb=e("div",{class:"column"},[e("img",{src:Db})],-1),$b=e("p",null,[a("The member "),e("code",null,"next"),a(" of the variable pointed by "),e("code",null,"n2"),a(" is assigned to the null pointer")],-1),Fb={__name:"23",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[bb,e("div",wb,[e("div",Eb,[k(o,oe({},{ranges:["14"]}),{default:w(()=>[kb]),_:1},16)]),xb]),$b]),_:1},16)}}},Tb=H(Fb,[["__file","/@slidev/slides/23.md"]]),Sb="/courses/data-structure/linked-lists/chap7/ll-12.png",Ob=e("h1",null,"Case Study: Creation of Linked lists",-1),Ib={class:"row"},Lb={class:"column"},Pb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Mb=e("div",{class:"column"},[e("img",{src:Sb})],-1),jb=e("p",null,[a("The member "),e("code",null,"next"),a(" of the variable pointed by "),e("code",null,"n1"),a(" is assigned to the value of "),e("code",null,"n2"),a(", that is the address of the variable pointed by "),e("code",null,"n2")],-1),zb={__name:"24",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[Ob,e("div",Ib,[e("div",Lb,[k(o,oe({},{ranges:["15"]}),{default:w(()=>[Pb]),_:1},16)]),Mb]),jb]),_:1},16)}}},Rb=H(zb,[["__file","/@slidev/slides/24.md"]]),Pc="/courses/data-structure/linked-lists/chap7/ll-13.png",Hb=e("h1",null,"Case Study: Creation of Linked lists",-1),Nb={class:"row"},Vb={class:"column"},Wb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," ml "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," intlist"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n1 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," n2 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"21"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n2"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"n1"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," n2"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," ml "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," intlist"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n1 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," n2 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"21"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n2"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"n1"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," n2"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Ub=e("div",{class:"column"},[e("img",{src:Pc})],-1),qb=e("p",null,[a("The member "),e("code",null,"size"),a(" of the variable pointed by "),e("code",null,"ml"),a(" is incremented")],-1),Gb={__name:"25",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[Hb,e("div",Nb,[e("div",Vb,[k(o,oe({},{ranges:["16"]}),{default:w(()=>[Wb]),_:1},16)]),Ub]),qb]),_:1},16)}}},Kb=H(Gb,[["__file","/@slidev/slides/25.md"]]),n8="/courses/data-structure/linked-lists/chap7/question-memory-1-true.png",Yb="/courses/data-structure/linked-lists/chap7/question-memory-2-false.png",Zb="/courses/data-structure/linked-lists/chap7/question-memory-3-false.png",Jb="/courses/data-structure/linked-lists/chap7/question-memory-4-false.png",Xb=e("h1",null,"How does it look like in memory ?",-1),Qb=e("div",{class:"row"},[e("div",{class:"column"},[e("img",{src:Pc,style:{width:"250px"}})]),e("div",{class:"column"},[e("div",{class:"fieldset-box",style:{"margin-top":"40px"}},[e("div",{class:"legend"},"Wooclap"),a(" Event: DATASTRUCT7 ")])])],-1),ew=e("br",null,null,-1),sw=e("br",null,null,-1),nw=e("div",{class:"row"},[e("div",{class:"column"},[a(" a) "),e("img",{src:n8,style:{width:"430px"}}),e("br"),a(" b) "),e("img",{src:Yb,style:{width:"430px"}})]),e("div",{class:"column"},[a(" c) "),e("img",{src:Zb,style:{width:"430px"}}),e("br"),a(" d) "),e("img",{src:Jb,style:{width:"430px"}})])],-1),tw={__name:"26",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[Xb,k(o,null,{default:w(()=>[Qb]),_:1}),ew,sw,nw]),_:1},16)}}},lw=H(tw,[["__file","/@slidev/slides/26.md"]]),ow=e("h1",null,"How does it look like in memory ?",-1),rw=e("div",{class:"row"},[e("div",{class:"column"},[e("img",{src:Pc,style:{width:"250px"}})]),e("div",{class:"column"})],-1),aw=e("br",null,null,-1),cw=e("p",null,"The correct answer is a)",-1),iw=e("img",{src:n8,style:{width:"600px"}},null,-1),pw=e("ul",null,[e("li",null,[e("code",null,"ml"),a(", "),e("code",null,"n1"),a(" and "),e("code",null,"n2"),a(" are pointers. They return the address of the variables dynamically allocated")]),e("li",null,[a("The variable pointed by "),e("code",null,"ml"),a(" starts at the address 59 and is of type intlist "),e("ul",null,[e("li",null,"member size: 2"),e("li",null,"member next: 55 = value of n1 = address of the variable pointed by n1")])])],-1),uw={__name:"27",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[ow,k(o,null,{default:w(()=>[rw]),_:1}),aw,cw,k(o,null,{default:w(()=>[iw]),_:1}),pw]),_:1},16)}}},yw=H(uw,[["__file","/@slidev/slides/27.md"]]),dw=e("span",{style:{"font-weight":"700","font-size":"30px"}},"2. Primitives Operations on Linked Lists",-1),fw=e("br",null,null,-1),hw=e("br",null,null,-1),mw={style:{"text-align":"left",display:"inline-block"}},Bw={__name:"28",setup(s){const n={layout:"intro",level:1};return P(R),(t,l)=>{const o=ql,r=He("center");return A(),z(Gl,te(ee(n)),{default:w(()=>[k(r,null,{default:w(()=>[dw,fw,hw,e("div",mw,[k(o,{minDepth:"2",mode:"onlyCurrentTree"})])]),_:1})]),_:1},16)}}},Aw=H(Bw,[["__file","/@slidev/slides/28.md"]]),_w="/courses/data-structure/linked-lists/chap7/display-1.png",vw=e("h1",null,"Display",-1),gw={class:"row"},Cw={class:"column"},Dw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),bw=e("div",{class:"column"},[e("img",{src:_w})],-1),ww={__name:"29",setup(s){const n={level:2};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[vw,e("div",gw,[e("div",Cw,[k(o,oe({},{ranges:[""]}),{default:w(()=>[Dw]),_:1},16)]),bw])]),_:1},16)}}},Ew=H(ww,[["__file","/@slidev/slides/29.md"]]),Mc="/courses/data-structure/linked-lists/chap7/display-2.png",kw=e("h1",null,"Display",-1),xw={class:"row"},$w={class:"column"},Fw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Tw=e("div",{class:"column"},[e("img",{src:Mc})],-1),Sw={__name:"30",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[kw,e("div",xw,[e("div",$w,[k(o,oe({},{ranges:["6"]}),{default:w(()=>[Fw]),_:1},16)]),Tw])]),_:1},16)}}},Ow=H(Sw,[["__file","/@slidev/slides/30.md"]]),Iw=e("h1",null,"Display",-1),Lw={class:"row"},Pw={class:"column"},Mw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),jw=e("div",{class:"column"},[e("img",{src:Mc})],-1),zw={__name:"31",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[Iw,e("div",Lw,[e("div",Pw,[k(o,oe({},{ranges:["7"]}),{default:w(()=>[Mw]),_:1},16)]),jw])]),_:1},16)}}},Rw=H(zw,[["__file","/@slidev/slides/31.md"]]),Hw=e("h1",null,"Display",-1),Nw={class:"row"},Vw={class:"column"},Ww=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Uw=e("div",{class:"column"},[e("img",{src:Mc})],-1),qw=e("p",null,"Display in console:",-1),Gw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"10")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"10")])])])],-1),Kw={__name:"32",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[Hw,e("div",Nw,[e("div",Vw,[k(o,oe({},{ranges:["8"]}),{default:w(()=>[Ww]),_:1},16)]),Uw]),qw,k(o,oe({},{ranges:[""]}),{default:w(()=>[Gw]),_:1},16)]),_:1},16)}}},Yw=H(Kw,[["__file","/@slidev/slides/32.md"]]),jc="/courses/data-structure/linked-lists/chap7/display-3.png",Zw=e("h1",null,"Display",-1),Jw={class:"row"},Xw={class:"column"},Qw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),eE=e("div",{class:"column"},[e("img",{src:jc})],-1),sE=e("p",null,"Display in console:",-1),nE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"10")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"10")])])])],-1),tE={__name:"33",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[Zw,e("div",Jw,[e("div",Xw,[k(o,oe({},{ranges:["9"]}),{default:w(()=>[Qw]),_:1},16)]),eE]),sE,k(o,oe({},{ranges:[""]}),{default:w(()=>[nE]),_:1},16)]),_:1},16)}}},lE=H(tE,[["__file","/@slidev/slides/33.md"]]),oE=e("h1",null,"Display",-1),rE={class:"row"},aE={class:"column"},cE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),iE=e("div",{class:"column"},[e("img",{src:jc})],-1),pE=e("p",null,"Display in console:",-1),uE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"10")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"10")])])])],-1),yE={__name:"34",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[oE,e("div",rE,[e("div",aE,[k(o,oe({},{ranges:["7"]}),{default:w(()=>[cE]),_:1},16)]),iE]),pE,k(o,oe({},{ranges:[""]}),{default:w(()=>[uE]),_:1},16)]),_:1},16)}}},dE=H(yE,[["__file","/@slidev/slides/34.md"]]),fE=e("h1",null,"Display",-1),hE={class:"row"},mE={class:"column"},BE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),AE=e("div",{class:"column"},[e("img",{src:jc})],-1),_E=e("p",null,"Display in console:",-1),vE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"10")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"21")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"10")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"21")])])])],-1),gE={__name:"35",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[fE,e("div",hE,[e("div",mE,[k(o,oe({},{ranges:["8"]}),{default:w(()=>[BE]),_:1},16)]),AE]),_E,k(o,oe({},{ranges:[""]}),{default:w(()=>[vE]),_:1},16)]),_:1},16)}}},CE=H(gE,[["__file","/@slidev/slides/35.md"]]),zc="/courses/data-structure/linked-lists/chap7/display-4.png",DE=e("h1",null,"Display",-1),bE={class:"row"},wE={class:"column"},EE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),kE=e("div",{class:"column"},[e("img",{src:zc})],-1),xE=e("p",null,"Display in console:",-1),$E=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"10")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"21")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"10")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"21")])])])],-1),FE={__name:"36",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[DE,e("div",bE,[e("div",wE,[k(o,oe({},{ranges:["9"]}),{default:w(()=>[EE]),_:1},16)]),kE]),xE,k(o,oe({},{ranges:[""]}),{default:w(()=>[$E]),_:1},16)]),_:1},16)}}},TE=H(FE,[["__file","/@slidev/slides/36.md"]]),SE=e("h1",null,"Display",-1),OE={class:"row"},IE={class:"column"},LE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),PE=e("div",{class:"column"},[e("img",{src:zc})],-1),ME=e("p",null,"Display in console:",-1),jE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"10")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"21")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"10")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"21")])])])],-1),zE={__name:"37",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[SE,e("div",OE,[e("div",IE,[k(o,oe({},{ranges:["7"]}),{default:w(()=>[LE]),_:1},16)]),PE]),ME,k(o,oe({},{ranges:[""]}),{default:w(()=>[jE]),_:1},16)]),_:1},16)}}},RE=H(zE,[["__file","/@slidev/slides/37.md"]]),HE=e("h1",null,"Display",-1),NE={class:"row"},VE={class:"column"},WE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		cout "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<<"),e("span",{style:{color:"#DBD7CA"}}," endl"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		cout "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<<"),e("span",{style:{color:"#393A34"}}," endl"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),UE=e("div",{class:"column"},[e("img",{src:zc})],-1),qE=e("p",null,"Display in console:",-1),GE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"10")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"21")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},".."),e("span",{style:{color:"#DBD7CA"}},".Program "),e("span",{style:{color:"#C98A7D"}},"finished"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"with"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"exit"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"code"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"Press"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"ENTER"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"to"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"exit"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"console.")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"C:\\>")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"10")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"21")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},".."),e("span",{style:{color:"#393A34"}},".Program "),e("span",{style:{color:"#B56959"}},"finished"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"with"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"exit"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"code"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"Press"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"ENTER"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"to"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"exit"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"console.")])])])],-1),KE={__name:"38",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[HE,e("div",NE,[e("div",VE,[k(o,oe({},{ranges:["10"]}),{default:w(()=>[WE]),_:1},16)]),UE]),qE,k(o,oe({},{ranges:[""]}),{default:w(()=>[GE]),_:1},16)]),_:1},16)}}},YE=H(KE,[["__file","/@slidev/slides/38.md"]]),t8="/courses/data-structure/linked-lists/chap7/insert-1.png",ZE=e("h1",null,"Insertion",-1),JE=e("p",null,"Can you code a function to insert a new element to the beginning of a list ?",-1),XE={class:"row"},QE={class:"column"},ek=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"insert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"newnode"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"newnode"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"insert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"newnode"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"newnode"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),sk=e("div",{class:"column"},[e("img",{src:t8,style:{height:"200px"}})],-1),nk=e("div",{class:"fieldset-box",style:{"margin-top":"40px"}},[e("div",{class:"legend"},"Wooclap"),a(" Event: DATASTRUCT7 ")],-1),tk={__name:"39",setup(s){const n={level:2};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[ZE,JE,e("div",XE,[e("div",QE,[k(o,oe({},{ranges:[""]}),{default:w(()=>[ek]),_:1},16)]),sk]),nk]),_:1},16)}}},lk=H(tk,[["__file","/@slidev/slides/39.md"]]),ok=e("h1",null,"Insertion",-1),rk=e("p",null,"Can you code a function to insert a new element to the beginning of a list ?",-1),ak={class:"row"},ck={class:"column"},ik=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"insert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"newnode"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"newnode"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," newnode"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"insert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"newnode"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"newnode"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," newnode"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),pk=e("div",{class:"column"},[e("img",{src:t8,style:{height:"200px"}})],-1),uk={__name:"40",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[ok,rk,e("div",ak,[e("div",ck,[k(o,oe({},{ranges:[""]}),{default:w(()=>[ik]),_:1},16)]),pk])]),_:1},16)}}},yk=H(uk,[["__file","/@slidev/slides/40.md"]]),dk="/courses/data-structure/linked-lists/chap7/insert-2.png",fk=e("h1",null,"Insertion",-1),hk=e("p",null,"Can you code a function to insert a new element to the beginning of a list ?",-1),mk={class:"row"},Bk={class:"column"},Ak=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"insert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"newnode"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"newnode"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," newnode"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"insert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"newnode"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"newnode"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," newnode"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_k=e("div",{class:"column"},[e("img",{src:dk,style:{height:"200px"}})],-1),vk={__name:"41",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[fk,hk,e("div",mk,[e("div",Bk,[k(o,oe({},{ranges:["3"]}),{default:w(()=>[Ak]),_:1},16)]),_k])]),_:1},16)}}},gk=H(vk,[["__file","/@slidev/slides/41.md"]]),Ck="/courses/data-structure/linked-lists/chap7/insert-3.png",Dk=e("h1",null,"Insertion",-1),bk=e("p",null,"Can you code a function to insert a new element to the beginning of a list ?",-1),wk={class:"row"},Ek={class:"column"},kk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"insert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"newnode"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"newnode"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," newnode"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"insert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"newnode"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"newnode"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," newnode"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),xk=e("div",{class:"column"},[e("img",{src:Ck,style:{height:"200px"}})],-1),$k={__name:"42",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[Dk,bk,e("div",wk,[e("div",Ek,[k(o,oe({},{ranges:["4"]}),{default:w(()=>[kk]),_:1},16)]),xk])]),_:1},16)}}},Fk=H($k,[["__file","/@slidev/slides/42.md"]]),Tk="/courses/data-structure/linked-lists/chap7/insert-4.png",Sk=e("h1",null,"Insertion",-1),Ok=e("p",null,"Can you code a function to insert a new element to the beginning of a list ?",-1),Ik={class:"row"},Lk={class:"column"},Pk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"insert"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"newnode"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"newnode"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," newnode"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"insert"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"newnode"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"newnode"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," newnode"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Mk=e("div",{class:"column"},[e("img",{src:Tk,style:{height:"200px"}})],-1),jk={__name:"43",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[Sk,Ok,e("div",Ik,[e("div",Lk,[k(o,oe({},{ranges:["5"]}),{default:w(()=>[Pk]),_:1},16)]),Mk])]),_:1},16)}}},zk=H(jk,[["__file","/@slidev/slides/43.md"]]),Rk="/courses/data-structure/linked-lists/chap7/delete-1.png",Hk=e("h1",null,"Deletion",-1),Nk=e("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),Vk={class:"row"},Wk={class:"column"},Uk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),qk=e("div",{class:"column"},[e("img",{src:Rk})],-1),Gk=e("div",{class:"fieldset-box",style:{"margin-top":"40px"}},[e("div",{class:"legend"},"Wooclap"),a(" Event: DATASTRUCT7 ")],-1),Kk={__name:"44",setup(s){const n={level:2};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[Hk,Nk,e("div",Vk,[e("div",Wk,[k(o,oe({},{ranges:[""]}),{default:w(()=>[Uk]),_:1},16)]),qk]),Gk]),_:1},16)}}},Yk=H(Kk,[["__file","/@slidev/slides/44.md"]]),Zk="/courses/data-structure/linked-lists/chap7/delete-2.png",Jk=e("h1",null,"Deletion",-1),Xk=e("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),Qk={class:"row"},ex={class:"column"},sx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"obsolete_node"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"delete"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"obsolete_node"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"delete"),e("span",{style:{color:"#393A34"}}," obsolete_node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),nx=e("div",{class:"column"},[e("img",{src:Zk})],-1),tx={__name:"45",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[Jk,Xk,e("div",Qk,[e("div",ex,[k(o,oe({},{ranges:["2"]}),{default:w(()=>[sx]),_:1},16)]),nx])]),_:1},16)}}},lx=H(tx,[["__file","/@slidev/slides/45.md"]]),ox="/courses/data-structure/linked-lists/chap7/delete-3.png",rx=e("h1",null,"Deletion",-1),ax=e("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),cx={class:"row"},ix={class:"column"},px=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"obsolete_node"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"delete"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"obsolete_node"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"delete"),e("span",{style:{color:"#393A34"}}," obsolete_node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ux=e("div",{class:"column"},[e("img",{src:ox})],-1),yx={__name:"46",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[rx,ax,e("div",cx,[e("div",ix,[k(o,oe({},{ranges:["3"]}),{default:w(()=>[px]),_:1},16)]),ux])]),_:1},16)}}},dx=H(yx,[["__file","/@slidev/slides/46.md"]]),fx="/courses/data-structure/linked-lists/chap7/delete-4.png",hx=e("h1",null,"Deletion",-1),mx=e("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),Bx={class:"row"},Ax={class:"column"},_x=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"obsolete_node"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"delete"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"obsolete_node"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"delete"),e("span",{style:{color:"#393A34"}}," obsolete_node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),vx=e("div",{class:"column"},[e("img",{src:fx})],-1),gx={__name:"47",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[hx,mx,e("div",Bx,[e("div",Ax,[k(o,oe({},{ranges:["4"]}),{default:w(()=>[_x]),_:1},16)]),vx])]),_:1},16)}}},Cx=H(gx,[["__file","/@slidev/slides/47.md"]]),Dx="/courses/data-structure/linked-lists/chap7/delete-5.png",bx=e("h1",null,"Deletion",-1),wx=e("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),Ex={class:"row"},kx={class:"column"},xx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"obsolete_node"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"delete"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"obsolete_node"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"delete"),e("span",{style:{color:"#393A34"}}," obsolete_node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$x=e("div",{class:"column"},[e("img",{src:Dx})],-1),Fx={__name:"48",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[bx,wx,e("div",Ex,[e("div",kx,[k(o,oe({},{ranges:["5"]}),{default:w(()=>[xx]),_:1},16)]),$x])]),_:1},16)}}},Tx=H(Fx,[["__file","/@slidev/slides/48.md"]]),Sx="/courses/data-structure/linked-lists/chap7/delete-6.png",Ox=e("h1",null,"Deletion",-1),Ix=e("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),Lx={class:"row"},Px={class:"column"},Mx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"obsolete_node"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"delete"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"obsolete_node"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"delete"),e("span",{style:{color:"#393A34"}}," obsolete_node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),jx=e("div",{class:"column"},[e("img",{src:Sx})],-1),zx={__name:"49",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[Ox,Ix,e("div",Lx,[e("div",Px,[k(o,oe({},{ranges:["6"]}),{default:w(()=>[Mx]),_:1},16)]),jx])]),_:1},16)}}},Rx=H(zx,[["__file","/@slidev/slides/49.md"]]),Hx=e("h1",null,"Deletion",-1),Nx=e("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),Vx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"obsolete_node"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"delete"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"obsolete_node"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"delete"),e("span",{style:{color:"#393A34"}}," obsolete_node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Wx=e("p",null,"What is the complexity?",-1),Ux=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"linked list deletion "),e("mo",null,"∼"),e("mi",{mathvariant:"script"},"O"),e("mo",{stretchy:"false"},"("),e("mn",null,"1"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"\\text{linked list deletion }\\sim\\mathcal{O}(1) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6944em"}}),e("span",{class:"mord text"},[e("span",{class:"mord"},"linked list deletion ")]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"∼"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},")")])])])])],-1),qx=[Ux],Gx={__name:"50",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de,r=Un("click");return A(),z(re,te(ee(n)),{default:w(()=>[Hx,Nx,k(o,oe({},{ranges:[""]}),{default:w(()=>[Vx]),_:1},16),Wx,js((A(),E("div",null,qx)),[[r,1]])]),_:1},16)}}},Kx=H(Gx,[["__file","/@slidev/slides/50.md"]]),Yx=e("h1",null,"Deletion (improved)",-1),Zx=e("p",null,"Actually a better version of the function is as follow, why?",-1),Jx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"void"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"p "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        obsolete_node "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"obsolete_node "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#B8A965"}},"p"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"obsolete_node"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   			"),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"size"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"           	"),e("span",{style:{color:"#CB7676"}},"delete"),e("span",{style:{color:"#DBD7CA"}}," obsolete_node"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"void"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"p "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        obsolete_node "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"obsolete_node "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8C862B"}},"p"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"obsolete_node"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   			"),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"size"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"           	"),e("span",{style:{color:"#AB5959"}},"delete"),e("span",{style:{color:"#393A34"}}," obsolete_node"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Xx=e("p",null,[a("Because it handle the cases where "),e("code",null,"p"),a(" is a null pointer or the last element of the linked list")],-1),Qx=[Xx],e$={__name:"51",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de,r=Un("click");return A(),z(re,te(ee(n)),{default:w(()=>[Yx,Zx,k(o,oe({},{ranges:[""]}),{default:w(()=>[Jx]),_:1},16),js((A(),E("div",null,Qx)),[[r,1]])]),_:1},16)}}},s$=H(e$,[["__file","/@slidev/slides/51.md"]]),n$=e("h1",null,"Access",-1),t$=e("p",null,"Can you code a function to access the i-th element of a linked list?",-1),l$=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        j"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"j "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," current"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        j"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"j "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," current"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),o$={__name:"52",setup(s){const n={level:2};return P(R),(t,l)=>{const o=de,r=Un("click");return A(),z(re,te(ee(n)),{default:w(()=>[n$,t$,js((A(),E("div",null,[k(o,oe({},{ranges:[""]}),{default:w(()=>[l$]),_:1},16)])),[[r,1]])]),_:1},16)}}},r$=H(o$,[["__file","/@slidev/slides/52.md"]]),a$="/courses/data-structure/linked-lists/chap7/access-2.png",c$=e("h1",null,"Access",-1),i$=e("p",null,"Can you code a function to access the i-th element of a linked list?",-1),p$={class:"row"},u$={class:"column"},y$=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        j"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"j "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," current"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        j"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"j "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," current"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),d$=e("div",{class:"column"},[e("img",{src:a$})],-1),f$={__name:"53",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[c$,i$,e("div",p$,[e("div",u$,[k(o,oe({},{ranges:["3,4"]}),{default:w(()=>[y$]),_:1},16)]),d$])]),_:1},16)}}},h$=H(f$,[["__file","/@slidev/slides/53.md"]]),m$="/courses/data-structure/linked-lists/chap7/access-3.png",B$=e("h1",null,"Access",-1),A$=e("p",null,"Can you code a function to access the i-th element of a linked list?",-1),_$={class:"row"},v$={class:"column"},g$=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        j"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"j "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," current"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        j"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"j "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," current"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),C$=e("div",{class:"column"},[e("img",{src:m$})],-1),D$={__name:"54",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[B$,A$,e("div",_$,[e("div",v$,[k(o,oe({},{ranges:["6"]}),{default:w(()=>[g$]),_:1},16)]),C$])]),_:1},16)}}},b$=H(D$,[["__file","/@slidev/slides/54.md"]]),w$="/courses/data-structure/linked-lists/chap7/access-4.png",E$=e("h1",null,"Access",-1),k$=e("p",null,"Can you code a function to access the i-th element of a linked list?",-1),x$={class:"row"},$$={class:"column"},F$=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        j"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"j "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," current"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        j"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"j "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," current"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),T$=e("div",{class:"column"},[e("img",{src:w$})],-1),S$={__name:"55",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[E$,k$,e("div",x$,[e("div",$$,[k(o,oe({},{ranges:["7"]}),{default:w(()=>[F$]),_:1},16)]),T$])]),_:1},16)}}},O$=H(S$,[["__file","/@slidev/slides/55.md"]]),I$="/courses/data-structure/linked-lists/chap7/access-5.png",L$=e("h1",null,"Access",-1),P$=e("p",null,"Can you code a function to access the i-th element of a linked list?",-1),M$={class:"row"},j$={class:"column"},z$=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        j"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"j "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," current"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        j"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"j "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," current"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),R$=e("div",{class:"column"},[e("img",{src:I$})],-1),H$={__name:"56",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[L$,P$,e("div",M$,[e("div",j$,[k(o,oe({},{ranges:["6"]}),{default:w(()=>[z$]),_:1},16)]),R$])]),_:1},16)}}},N$=H(H$,[["__file","/@slidev/slides/56.md"]]),l8="/courses/data-structure/linked-lists/chap7/access-6.png",V$=e("h1",null,"Access",-1),W$=e("p",null,"Can you code a function to access the i-th element of a linked list?",-1),U$={class:"row"},q$={class:"column"},G$=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        j"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"j "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," current"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        j"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"j "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," current"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),K$=e("div",{class:"column"},[e("img",{src:l8})],-1),Y$=e("p",null,[a("Since "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"j"),e("mo",null,"="),e("mi",null,"i"),e("mo",null,"="),e("mn",null,"2")]),e("annotation",{encoding:"application/x-tex"},"j=i=2")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6595em"}}),e("span",{class:"mord mathnormal"},"i"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"2")])])]),a(", it get outs the loop …")],-1),Z$={__name:"57",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[V$,W$,e("div",U$,[e("div",q$,[k(o,oe({},{ranges:["7"]}),{default:w(()=>[G$]),_:1},16)]),K$]),Y$]),_:1},16)}}},J$=H(Z$,[["__file","/@slidev/slides/57.md"]]),X$=e("h1",null,"Access",-1),Q$=e("p",null,"Can you code a function to access the i-th element of a linked list?",-1),eF={class:"row"},sF={class:"column"},nF=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        j"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"j "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," current"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        j"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"j "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," current"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),tF=e("div",{class:"column"},[e("img",{src:l8})],-1),lF=e("p",null,[a("Since "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"j"),e("mo",null,"="),e("mi",null,"i"),e("mo",null,"="),e("mn",null,"2")]),e("annotation",{encoding:"application/x-tex"},"j=i=2")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6595em"}}),e("span",{class:"mord mathnormal"},"i"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"2")])])]),a(", it get outs the loop … and return "),e("code",null,"current")],-1),oF={__name:"58",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[X$,Q$,e("div",eF,[e("div",sF,[k(o,oe({},{ranges:["10,11"]}),{default:w(()=>[nF]),_:1},16)]),tF]),lF]),_:1},16)}}},rF=H(oF,[["__file","/@slidev/slides/58.md"]]),aF=e("h1",null,"Access",-1),cF=e("p",null,"Can you code a function to access the i-th element of a linked list?",-1),iF={class:"row"},pF={class:"column"},uF=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," j "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        j"),e("span",{style:{color:"#CB7676"}},"++"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"j "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," i"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," current"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," j "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        j"),e("span",{style:{color:"#AB5959"}},"++"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"j "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," i"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," current"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),yF=e("div",{class:"column"},null,-1),dF=e("p",null,"What is the complexity?",-1),fF=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"linked list access "),e("mo",null,"∼"),e("mi",{mathvariant:"script"},"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"n"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"\\text{linked list access }\\sim\\mathcal{O}(n) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6944em"}}),e("span",{class:"mord text"},[e("span",{class:"mord"},"linked list access ")]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"∼"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},")")])])])])],-1),hF=[fF],mF={__name:"59",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de,r=Un("click");return A(),z(re,te(ee(n)),{default:w(()=>[aF,cF,e("div",iF,[e("div",pF,[k(o,oe({},{ranges:[""]}),{default:w(()=>[uF]),_:1},16)]),yF]),dF,js((A(),E("div",null,hF)),[[r,1]])]),_:1},16)}}},BF=H(mF,[["__file","/@slidev/slides/59.md"]]),o8="/courses/data-structure/linked-lists/chap7/access-1.png",AF=e("h1",null,"Search",-1),_F=e("p",null,"Can you code a function searching a node with a given value inside a linked list?",-1),vF={class:"row"},gF={class:"column"},CF=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"search"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"           ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"..."),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"search"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"           ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"..."),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),DF=e("div",{class:"column"},[e("img",{src:o8})],-1),bF={__name:"60",setup(s){const n={level:2};return P(R),(t,l)=>{const o=de;return A(),z(re,te(ee(n)),{default:w(()=>[AF,_F,e("div",vF,[e("div",gF,[k(o,oe({},{ranges:[""]}),{default:w(()=>[CF]),_:1},16)]),DF])]),_:1},16)}}},wF=H(bF,[["__file","/@slidev/slides/60.md"]]),EF=e("h1",null,"Search",-1),kF=e("p",null,"Can you code a function searching a node with a given value inside a linked list?",-1),xF={class:"row"},$F={class:"column"},FF=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"search"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ml"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"first"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nullptr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," data"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"       ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        current "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"current"),e("span",{style:{color:"#858585"}},"->"),e("span",{style:{color:"#B8A965"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," current"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"search"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"ml"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"first"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nullptr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," data"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"       ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        current "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"current"),e("span",{style:{color:"#8E8F8B"}},"->"),e("span",{style:{color:"#8C862B"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," current"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),TF=e("div",{class:"column"},[e("img",{src:o8})],-1),SF=e("p",null,"Search is a linear scan, just like searching in unsorted array. So what is the complexity ?",-1),OF=[SF],IF=e("p",null,[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"linked list search "),e("mo",null,"∼"),e("mi",{mathvariant:"script"},"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"n"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"\\text{linked list search }\\sim\\mathcal{O}(n) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6944em"}}),e("span",{class:"mord text"},[e("span",{class:"mord"},"linked list search ")]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"∼"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},")")])])])])],-1),LF=[IF],PF={__name:"61",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=de,r=Un("click");return A(),z(re,te(ee(n)),{default:w(()=>[EF,kF,e("div",xF,[e("div",$F,[k(o,oe({},{ranges:[""]}),{default:w(()=>[FF]),_:1},16)]),TF]),js((A(),E("div",null,OF)),[[r,1]]),js((A(),E("div",null,LF)),[[r,2]])]),_:1},16)}}},MF=H(PF,[["__file","/@slidev/slides/61.md"]]),jF="/courses/data-structure/linked-lists/chap7/linked-list-complexity.png",zF=e("h1",null,"Complexity of Operations on Linked Lists",-1),RF=e("br",null,null,-1),HF=e("br",null,null,-1),NF=e("br",null,null,-1),VF=e("br",null,null,-1),WF=e("img",{src:jF},null,-1),UF=e("br",null,null,-1),qF=e("br",null,null,-1),GF=e("p",null,"Linked lists have notable advantages over arrays … except for access",-1),KF={__name:"62",setup(s){const n={level:2};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[zF,k(o,null,{default:w(()=>[RF,HF,NF,VF,WF]),_:1}),UF,qF,GF]),_:1},16)}}},YF=H(KF,[["__file","/@slidev/slides/62.md"]]),ZF=e("div",{class:"fieldset-box"},[e("div",{class:"legend"},"Wooclap"),a(" Event: DATASTRUCT7 ")],-1),JF={__name:"63",setup(s){const n={layout:"intro",level:2,hideInToc:!0};return P(R),(t,l)=>{const o=He("center");return A(),z(Gl,te(ee(n)),{default:w(()=>[k(o,null,{default:w(()=>[a(" Let's practice! "),ZF]),_:1})]),_:1},16)}}},XF=H(JF,[["__file","/@slidev/slides/63.md"]]),QF=e("span",{style:{"font-weight":"700","font-size":"30px"}},"3. Advanced Linked Lists",-1),eT=e("br",null,null,-1),sT=e("br",null,null,-1),nT={style:{"text-align":"left",display:"inline-block"}},tT={__name:"64",setup(s){const n={layout:"intro",level:1};return P(R),(t,l)=>{const o=ql,r=He("center");return A(),z(Gl,te(ee(n)),{default:w(()=>[k(r,null,{default:w(()=>[QF,eT,sT,e("div",nT,[k(o,{minDepth:"2",mode:"onlyCurrentTree"})])]),_:1})]),_:1},16)}}},lT=H(tT,[["__file","/@slidev/slides/64.md"]]),r8="/courses/data-structure/linked-lists/chap7/double-linked-list.png",oT="/courses/data-structure/linked-lists/chap7/wagon-double.png",rT="/courses/data-structure/linked-lists/chap7/head-double.png",aT=e("h1",null,"Doubly Linked Lists",-1),cT=e("img",{src:r8},null,-1),iT=e("br",null,null,-1),pT=e("br",null,null,-1),uT={class:"row"},yT=e("div",{class:"column"},[e("img",{src:oT,style:{height:"100px"}})],-1),dT={class:"column"},fT=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"typedef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," previous"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," data"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"      ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"typedef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," previous"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," data"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"      ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),hT={class:"row"},mT=e("div",{class:"column"},[e("img",{src:rT,style:{height:"100px"}})],-1),BT={class:"column"},AT=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"typedef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"intlist"),e("span",{style:{color:"#DBD7CA"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"start"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," size"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"end"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"intlist")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"typedef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"intlist"),e("span",{style:{color:"#393A34"}}," ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"start"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," size"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"end"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"intlist")])])])],-1),_T={__name:"65",setup(s){const n={level:2};return P(R),(t,l)=>{const o=He("center"),r=de;return A(),z(re,te(ee(n)),{default:w(()=>[aT,k(o,null,{default:w(()=>[cT]),_:1}),iT,pT,e("div",uT,[yT,e("div",dT,[k(r,oe({},{ranges:[""]}),{default:w(()=>[fT]),_:1},16)])]),e("div",hT,[mT,e("div",BT,[k(r,oe({},{ranges:[""]}),{default:w(()=>[AT]),_:1},16)])])]),_:1},16)}}},vT=H(_T,[["__file","/@slidev/slides/65.md"]]),gT=e("h1",null,"Doubly linked lists",-1),CT=e("img",{src:r8},null,-1),DT=e("br",null,null,-1),bT=e("br",null,null,-1),wT=e("p",null,[e("strong",null,"Advantages:")],-1),ET=e("ul",null,[e("li",null,"Deletion of a node given its pointer becomes O(1)"),e("li",null,"Insertion before a given pointer to a node becomes O(1)"),e("li",null,"Easier to reverse the linked list (swap pointers in each item)")],-1),kT=e("p",null,[e("strong",null,"Drawbacks:")],-1),xT=e("ul",null,[e("li",null,"Stores n additional pointers"),e("li",null,"Maintains n additional pointers (or not if you use XOR double-linked lists)")],-1),$T={__name:"66",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[gT,k(o,null,{default:w(()=>[CT]),_:1}),DT,bT,wT,ET,kT,xT]),_:1},16)}}},FT=H($T,[["__file","/@slidev/slides/66.md"]]),TT="/courses/data-structure/linked-lists/chap7/circular-list.png",ST="/courses/data-structure/linked-lists/chap7/monopoly.png",OT=e("h1",null,"Circular Linked Lists",-1),IT=e("img",{style:{height:"100px"},src:TT},null,-1),LT=e("br",null,null,-1),PT=e("i",null,"In which circumstances can it be useful ?",-1),MT=e("br",null,null,-1),jT=e("br",null,null,-1),zT={class:"row"},RT={class:"column"},HT=e("img",{src:ST,style:{height:"150px"}},null,-1),NT=e("div",{class:"column"},[e("ul",null,[e("li",null,"Resource allocations"),e("li",null,"Music playlists"),e("li",null,"…")])],-1),VT=e("br",null,null,-1),WT=e("i",null,"One can go even further with circular doubly linked lists, etc.",-1),UT={__name:"67",setup(s){const n={level:2};return P(R),(t,l)=>{const o=He("center"),r=Un("click");return A(),z(re,te(ee(n)),{default:w(()=>[OT,k(o,null,{default:w(()=>[IT]),_:1}),LT,PT,MT,jT,js((A(),E("div",null,[e("div",zT,[e("div",RT,[k(o,null,{default:w(()=>[a(" Game development "),HT]),_:1})]),NT])])),[[r,1]]),VT,WT]),_:1},16)}}},qT=H(UT,[["__file","/@slidev/slides/67.md"]]),GT="/courses/data-structure/linked-lists/chap7/skip-list.png",KT="/courses/data-structure/linked-lists/chap7/skip-list-complexity.png",YT=e("h1",null,"Skip Lists",-1),ZT=e("br",null,null,-1),JT=e("br",null,null,-1),XT=e("br",null,null,-1),QT=e("img",{src:GT,style:{width:"500px"}},null,-1),eS=e("br",null,null,-1),sS=e("br",null,null,-1),nS=e("img",{src:KT,style:{width:"500px"}},null,-1),tS={__name:"68",setup(s){const n={level:2};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[YT,k(o,null,{default:w(()=>[ZT,JT,XT,QT,eS,sS,nS]),_:1})]),_:1},16)}}},lS=H(tS,[["__file","/@slidev/slides/68.md"]]),oS="/courses/data-structure/linked-lists/chap7/unrolled-list.png",rS="/courses/data-structure/linked-lists/chap7/unrolled-list-wagon.png",aS=e("h1",null,"Unrolled Lists",-1),cS=e("br",null,null,-1),iS=e("br",null,null,-1),pS=e("br",null,null,-1),uS=e("img",{src:oS,style:{width:"700px"}},null,-1),yS=e("br",null,null,-1),dS=e("br",null,null,-1),fS=e("br",null,null,-1),hS=e("br",null,null,-1),mS={class:"row"},BS=e("div",{class:"column"},[e("img",{src:rS})],-1),AS={class:"column"},_S=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"typedef"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    node"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}},"next"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	"),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," number_elements"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"number_elements"),e("span",{style:{color:"#858585"}},"];"),e("span",{style:{color:"#DBD7CA"}},"      ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"node"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"typedef"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    node"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}},"next"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	"),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," number_elements"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"number_elements"),e("span",{style:{color:"#8E8F8B"}},"];"),e("span",{style:{color:"#393A34"}},"      ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"node"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),vS={__name:"69",setup(s){const n={level:2};return P(R),(t,l)=>{const o=He("center"),r=de;return A(),z(re,te(ee(n)),{default:w(()=>[aS,k(o,null,{default:w(()=>[cS,iS,pS,uS]),_:1}),yS,dS,fS,hS,e("div",mS,[BS,e("div",AS,[k(r,oe({},{ranges:[""]}),{default:w(()=>[_S]),_:1},16)])])]),_:1},16)}}},gS=H(vS,[["__file","/@slidev/slides/69.md"]]),CS=e("span",{style:{"font-weight":"700","font-size":"30px"}},"5. Conclusion",-1),DS=e("br",null,null,-1),bS=e("br",null,null,-1),wS={style:{"text-align":"left",display:"inline-block"}},ES={__name:"70",setup(s){const n={layout:"intro",level:1,hideInToc:!0};return P(R),(t,l)=>{const o=ql,r=He("center");return A(),z(Gl,te(ee(n)),{default:w(()=>[k(r,null,{default:w(()=>[CS,DS,bS,e("div",wS,[k(o,{minDepth:"2",mode:"onlyCurrentTree"})])]),_:1})]),_:1},16)}}},kS=H(ES,[["__file","/@slidev/slides/70.md"]]),xS=e("h1",null,"To recap",-1),$S=e("p",null,"We have seen…",-1),FS=e("u",null,"linear",-1),TS=e("u",null,"non-contiguous",-1),SS=e("br",null,null,-1),OS=e("b",null,"Linked Lists",-1),IS=e("p",null,[e("br"),e("br")],-1),LS=e("ul",null,[e("li",null,"It has many advantages over arrays… except for accessing elements"),e("li",null,"It extensively relies on pointers")],-1),PS={__name:"71",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[xS,$S,k(o,null,{default:w(()=>[a(" a "),FS,a(" data structure where elements are stored in "),TS,a(" memory locations"),SS,OS]),_:1}),IS,LS]),_:1},16)}}},MS=H(PS,[["__file","/@slidev/slides/71.md"]]),jS=e("h1",null,"To Go Further",-1),zS=e("p",null,[e("br"),e("br")],-1),RS=e("ol",null,[e("li",null,[e("u",null,"Practice:"),a(" Implement all operations without looking at the course")]),e("li",null,[e("u",null,"Exercice:"),a(" Implement a function that tests if a given linked list is circular")])],-1),HS=e("br",null,null,-1),NS=e("p",null,[e("em",null,[a("Is there a curious programmer who would like to present"),e("br"),a(" an application with advanced linked lists?")])],-1),VS={__name:"72",setup(s){const n={level:2,hideInToc:!0};return P(R),(t,l)=>{const o=He("center");return A(),z(re,te(ee(n)),{default:w(()=>[jS,zS,RS,k(o,null,{default:w(()=>[HS,NS]),_:1})]),_:1},16)}}},WS=H(VS,[["__file","/@slidev/slides/72.md"]]),US=[{path:"1",name:"page-1",component:W6,meta:{theme:"academic",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap7/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},title:"Linked lists",coverDate:null,hideInToc:!0,slide:{raw:`---
theme: academic
layout: cover
coverAuthor: Jordan Frecon-Deloire
coverBackgroundUrl: chap7/cover.png
highlighter: shiki
lineNumbers: false
class: 'text-white'
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled: [1]
title: Linked lists
coverDate:
hideInToc: true
---


# Data Structures in C/C++
## Chapter 7: Linked Lists
<img src="/front/logo.png" class="image-bottom" style="height:70px;width:auto"/>




`,title:"Linked lists",content:`# Data Structures in C/C++
## Chapter 7: Linked Lists
<img src="/front/logo.png" class="image-bottom" style="height:70px;width:auto"/>`,frontmatter:{theme:"academic",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap7/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},title:"Linked lists",coverDate:null,hideInToc:!0},index:0,start:0,end:26,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:f7,meta:{hideInToc:!0,level:2,title:"Operations on arrays",slide:{raw:`---
hideInToc: true
level: 2
title: Operations on arrays
---

# Operations on Arrays

Can you code a function which ...
- copy one array into another one ?
- append two arrays ?
- ...

What is the time complexity of such operation ?

<center>
<div v-click="1">
	
$\\text{copy/append arrays}\\sim \\mathcal{O}(n)$
</div></center>

<div v-click="2">

That’s because arrays are stored in a contiguous memory block<br>
Which is also their strength ! 
<center>
\`\`\`cpp
&tab[i] = &tab[0] + i*sizeof(tab[0])
\`\`\`
</center>
</div>

`,title:"Operations on arrays",level:2,content:`# Operations on Arrays

Can you code a function which ...
- copy one array into another one ?
- append two arrays ?
- ...

What is the time complexity of such operation ?

<center>
<div v-click="1">
	
$\\text{copy/append arrays}\\sim \\mathcal{O}(n)$
</div></center>

<div v-click="2">

That’s because arrays are stored in a contiguous memory block<br>
Which is also their strength ! 
<center>
\`\`\`cpp
&tab[i] = &tab[0] + i*sizeof(tab[0])
\`\`\`
</center>
</div>`,frontmatter:{hideInToc:!0,level:2,title:"Operations on arrays"},index:1,start:26,end:59,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:g7,meta:{hideInToc:!0,level:2,title:"Complexity",slide:{raw:`---
hideInToc: true
level: 2
title: Complexity
---

# Arrays limitations

<img src="/chap7/array_complexity.png" border="rounded">

<br><br><br>
<center>
	
Can we do better ?
</center>



`,title:"Complexity",level:2,content:`# Arrays limitations

<img src="/chap7/array_complexity.png" border="rounded">

<br><br><br>
<center>
	
Can we do better ?
</center>`,frontmatter:{hideInToc:!0,level:2,title:"Complexity"},index:2,start:59,end:78,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:XD,meta:{hideInToc:!0,slide:{raw:`---
hideInToc: true
---

# Table of contents

<div style="font-size:smaller" >
<Toc columns="1" maxDepth="3" style="font-size:smaller"/>
</div>




`,title:"Table of contents",level:1,content:`# Table of contents

<div style="font-size:smaller" >
<Toc columns="1" maxDepth="3" style="font-size:smaller"/>
</div>`,frontmatter:{hideInToc:!0},index:3,start:78,end:92,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:a0,meta:{layout:"intro",title:"Linked Lists",level:1,slide:{raw:`---
layout: intro
title: Linked Lists
level: 1
---
<center>
<span style="font-weight:700;font-size:30px">1. Linked Lists</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>


`,title:"Linked Lists",level:1,content:`<center>
<span style="font-weight:700;font-size:30px">1. Linked Lists</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>`,frontmatter:{layout:"intro",title:"Linked Lists",level:1},index:4,start:92,end:107,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:A0,meta:{level:2,title:"Motivation",slide:{raw:`---
level: 2
title: Motivation
---

# Motivation

<center>
<img src="/chap7/wagon.png"></center><br>

Store each item in memory independently from the others: **not contiguous in memory**

<br><br><br>
<center>
<img src="/chap7/linked-wagons.png"></center><br>
Since all items are not stored contiguously, link them, i.e. each item provides a link to its successor making a sequence of items (a single successor per item)
`,title:"Motivation",level:2,content:`# Motivation

<center>
<img src="/chap7/wagon.png"></center><br>

Store each item in memory independently from the others: **not contiguous in memory**

<br><br><br>
<center>
<img src="/chap7/linked-wagons.png"></center><br>
Since all items are not stored contiguously, link them, i.e. each item provides a link to its successor making a sequence of items (a single successor per item)`,frontmatter:{level:2,title:"Motivation"},index:5,start:107,end:124,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:T0,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Motivation

<center><br><br>
	
Each item has a **pointer** to the next item (its successor in the sequence)
</center>
	
<center><br><br>
<img src="/chap7/linked-wagons-representation.png">
</center><br><br>

<center>
	
Don't forget a **NULL** pointer at the end in order to test when the sequence ends
</center>
`,title:"Motivation",level:2,content:`# Motivation

<center><br><br>
	
Each item has a **pointer** to the next item (its successor in the sequence)
</center>
	
<center><br><br>
<img src="/chap7/linked-wagons-representation.png">
</center><br><br>

<center>
	
Don't forget a **NULL** pointer at the end in order to test when the sequence ends
</center>`,frontmatter:{level:2,hideInToc:!0},index:6,start:124,end:145,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:V0,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Motivation

<center><br><br>
	
There is one missing piece ... Why is it necessary ?
</center>

<center><br><br>
<img src="/chap7/linked-wagons-head.png">
</center><br><br>

<div v-click="1"><center>
	
How else would you find the size of the list (\` size(.)\`) without knowing the start ?
	
</center></div>
`,title:"Motivation",level:2,content:`# Motivation

<center><br><br>
	
There is one missing piece ... Why is it necessary ?
</center>

<center><br><br>
<img src="/chap7/linked-wagons-head.png">
</center><br><br>

<div v-click="1"><center>
	
How else would you find the size of the list (\` size(.)\`) without knowing the start ?
	
</center></div>`,frontmatter:{level:2,hideInToc:!0},index:7,start:145,end:167,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Q0,meta:{level:2,title:"Memory representation",slide:{raw:`---
level: 2
title: Memory representation
---

# Memory Representation

Linked lists are stored noncontigously !

<center>
<img src="/chap7/linked-wagons-head.png">
</center><br><br>

So this scenario may happen

<center>
<img src="/chap7/memory-1.png">
</center>

`,title:"Memory representation",level:2,content:`# Memory Representation

Linked lists are stored noncontigously !

<center>
<img src="/chap7/linked-wagons-head.png">
</center><br><br>

So this scenario may happen

<center>
<img src="/chap7/memory-1.png">
</center>`,frontmatter:{level:2,title:"Memory representation"},index:8,start:167,end:187,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:i2,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Memory Representation

Linked lists are stored noncontigously !

<center>
<img src="/chap7/linked-wagons-head.png">
</center><br><br>

And this one also

<center>
<img src="/chap7/memory-2.png">
</center>
`,title:"Memory Representation",level:2,content:`# Memory Representation

Linked lists are stored noncontigously !

<center>
<img src="/chap7/linked-wagons-head.png">
</center><br><br>

And this one also

<center>
<img src="/chap7/memory-2.png">
</center>`,frontmatter:{level:2,hideInToc:!0},index:9,start:187,end:206,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:w2,meta:{level:2,title:"Implementation in C/C++",slide:{raw:`---
level: 2
title: Implementation in C/C++
---

# Implementation in C/C++

<div class="row">
<div class="column">
<img src="/chap7/wagon-only.png">
</div>
<div class="column">
\`\`\`cpp
typedef struct node 
{
    int data;    // Assume we store int’s
    node* next;  // Pointer to the successor of this item
} node;
\`\`\`
</div>
</div>
<br><br><br>	
<div class="row">
<div class="column">
<img src="/chap7/head-only.png">
</div>
<div class="column">
\`\`\`cpp
typedef struct intlist
{
    int size;    // count of inserted values
    node* first; // pointer to the first list element
} intlist;
\`\`\`
</div>
</div>
`,title:"Implementation in C/C++",level:2,content:`# Implementation in C/C++

<div class="row">
<div class="column">
<img src="/chap7/wagon-only.png">
</div>
<div class="column">
\`\`\`cpp
typedef struct node 
{
    int data;    // Assume we store int’s
    node* next;  // Pointer to the successor of this item
} node;
\`\`\`
</div>
</div>
<br><br><br>	
<div class="row">
<div class="column">
<img src="/chap7/head-only.png">
</div>
<div class="column">
\`\`\`cpp
typedef struct intlist
{
    int size;    // count of inserted values
    node* first; // pointer to the first list element
} intlist;
\`\`\`
</div>
</div>`,frontmatter:{level:2,title:"Implementation in C/C++"},index:10,start:206,end:243,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:R2,meta:{level:2,title:"Case study - creation of linked list",slide:{raw:`---
level: 2
title: Case study - creation of linked list
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">

\`\`\`cpp
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
	
Here we have used the **arrow operator**
<div class="row">
<div class="column">
\`\`\`cpp
ml->size =0;
\`\`\`

The Arrow(->) operator exists to access the members of the structure or the unions using pointers.
</div>
<div class="column">
\`\`\`cpp
(*ml).size = 0;
\`\`\`

The Dot(.) operator is used to normally access members of a structure or union
</div>
</div>
	

	

</div>
</div>
	
`,title:"Case study - creation of linked list",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">

\`\`\`cpp
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
	
Here we have used the **arrow operator**
<div class="row">
<div class="column">
\`\`\`cpp
ml->size =0;
\`\`\`

The Arrow(->) operator exists to access the members of the structure or the unions using pointers.
</div>
<div class="column">
\`\`\`cpp
(*ml).size = 0;
\`\`\`

The Dot(.) operator is used to normally access members of a structure or union
</div>
</div>
	

	

</div>
</div>`,frontmatter:{level:2,title:"Case study - creation of linked list"},index:11,start:243,end:300,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Y2,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists


<div class="row">
<div class="column">
\`\`\`cpp {2}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-1.png">
</div>
</div>

Dynamic allocation of a variable of type \`intlist\`<br>
Returns a pointer \`ml\` to the corresponding memory emplacement
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists


<div class="row">
<div class="column">
\`\`\`cpp {2}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-1.png">
</div>
</div>

Dynamic allocation of a variable of type \`intlist\`<br>
Returns a pointer \`ml\` to the corresponding memory emplacement`,frontmatter:{level:2,hideInToc:!0},index:12,start:300,end:338,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:l4,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {3}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-2.png">
</div>
</div>

The member \`first\` of the variable pointed by \`ml\` is assigned to the **null pointer**, i.e., \`nullptr\`
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {3}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-2.png">
</div>
</div>

The member \`first\` of the variable pointed by \`ml\` is assigned to the **null pointer**, i.e., \`nullptr\``,frontmatter:{level:2,hideInToc:!0},index:13,start:338,end:374,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:d4,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {4}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-3.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is assigned to 0
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {4}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-3.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is assigned to 0`,frontmatter:{level:2,hideInToc:!0},index:14,start:374,end:410,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:C4,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {6}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-4.png">
</div>
</div>

Dynamic allocation of a variable of type \`node\`<br>
Returns a pointer \`n1\` to the corresponding memory emplacement
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {6}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-4.png">
</div>
</div>

Dynamic allocation of a variable of type \`node\`<br>
Returns a pointer \`n1\` to the corresponding memory emplacement`,frontmatter:{level:2,hideInToc:!0},index:15,start:410,end:447,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:T4,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {7}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-5.png">
</div>
</div>

The member \`data\` of the variable pointed by \`n1\` is assigned to 10
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {7}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-5.png">
</div>
</div>

The member \`data\` of the variable pointed by \`n1\` is assigned to 10`,frontmatter:{level:2,hideInToc:!0},index:16,start:447,end:483,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:R4,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {8}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-6.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n1\` is assigned to the null pointer
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {8}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-6.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n1\` is assigned to the null pointer`,frontmatter:{level:2,hideInToc:!0},index:17,start:483,end:519,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Y4,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {9}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-7.png">
</div>
</div>

The member \`first\` of the variable pointed by \`ml\` is assigned to the value of \`n1\`, that is the address of the variable pointed by \`n1\`
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {9}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-7.png">
</div>
</div>

The member \`first\` of the variable pointed by \`ml\` is assigned to the value of \`n1\`, that is the address of the variable pointed by \`n1\``,frontmatter:{level:2,hideInToc:!0},index:18,start:519,end:555,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:lb,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {10}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-8.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is incremented
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {10}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-8.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is incremented`,frontmatter:{level:2,hideInToc:!0},index:19,start:555,end:591,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:db,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {12}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-9.png">
</div>
</div>

Dynamic allocation of a variable of type \`node\`<br>
Returns a pointer \`n2\` to the corresponding memory emplacement
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {12}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-9.png">
</div>
</div>

Dynamic allocation of a variable of type \`node\`<br>
Returns a pointer \`n2\` to the corresponding memory emplacement`,frontmatter:{level:2,hideInToc:!0},index:20,start:591,end:628,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Cb,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {13}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-10.png">
</div>
</div>

The member \`data\` of the variable pointed by \`n2\` is assigned to 21
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {13}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-10.png">
</div>
</div>

The member \`data\` of the variable pointed by \`n2\` is assigned to 21`,frontmatter:{level:2,hideInToc:!0},index:21,start:628,end:664,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Tb,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {14}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-11.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n2\` is assigned to the null pointer
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {14}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-11.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n2\` is assigned to the null pointer`,frontmatter:{level:2,hideInToc:!0},index:22,start:664,end:700,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Rb,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {15}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-12.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n1\` is assigned to the value of \`n2\`, that is the address of the variable pointed by \`n2\`
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {15}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-12.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n1\` is assigned to the value of \`n2\`, that is the address of the variable pointed by \`n2\``,frontmatter:{level:2,hideInToc:!0},index:23,start:700,end:736,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Kb,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {16}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-13.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is incremented
`,title:"Case Study: Creation of Linked lists",level:2,content:`# Case Study: Creation of Linked lists

<div class="row">
<div class="column">
\`\`\`cpp {16}
int main() {
    intlist* ml = new intlist;
    ml->first = nullptr;
    ml->size=0;

    node* n1 = new node;
    n1->data = 10;
    n1->next = nullptr;
    ml->first = n1;
    ml->size = ml->size + 1;
    
    node* n2 = new node;
    n2->data = 21;
    n2->next = nullptr;
    n1->next = n2;
    ml->size = ml->size + 1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/ll-13.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is incremented`,frontmatter:{level:2,hideInToc:!0},index:24,start:736,end:772,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:lw,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# How does it look like in memory ?

<center>
<div class="row">
<div class="column">
<img src="/chap7/ll-13.png" style="width:250px">
</div>
<div class="column">
<div class="fieldset-box"  style="margin-top:40px">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT7
</div>
</div>
</div>
</center><br><br>


<div class="row">
<div class="column">
a) <img src="/chap7/question-memory-1-true.png" style="width:430px"><br>
b) <img src="/chap7/question-memory-2-false.png" style="width:430px">
</div>
<div class="column">
c) <img src="/chap7/question-memory-3-false.png" style="width:430px"><br>
d) <img src="/chap7/question-memory-4-false.png" style="width:430px">
</div>
</div>



`,title:"How does it look like in memory ?",level:2,content:`# How does it look like in memory ?

<center>
<div class="row">
<div class="column">
<img src="/chap7/ll-13.png" style="width:250px">
</div>
<div class="column">
<div class="fieldset-box"  style="margin-top:40px">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT7
</div>
</div>
</div>
</center><br><br>


<div class="row">
<div class="column">
a) <img src="/chap7/question-memory-1-true.png" style="width:430px"><br>
b) <img src="/chap7/question-memory-2-false.png" style="width:430px">
</div>
<div class="column">
c) <img src="/chap7/question-memory-3-false.png" style="width:430px"><br>
d) <img src="/chap7/question-memory-4-false.png" style="width:430px">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:25,start:772,end:808,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:yw,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# How does it look like in memory ?

<center>
<div class="row">
<div class="column">
<img src="/chap7/ll-13.png" style="width:250px">
</div>
<div class="column">
</div>
</div>
</center><br>

The correct answer is a) 
<center>
<img src="/chap7/question-memory-1-true.png" style="width:600px">
</center>

- \`ml\`, \`n1\` and \`n2\` are pointers. They return the address of the variables dynamically allocated
- The variable pointed by \`ml\` starts at the address 59 and is of type intlist
	- member size: 2
	- member next: 55 = value of n1 = address of the variable pointed by n1


`,title:"How does it look like in memory ?",level:2,content:`# How does it look like in memory ?

<center>
<div class="row">
<div class="column">
<img src="/chap7/ll-13.png" style="width:250px">
</div>
<div class="column">
</div>
</div>
</center><br>

The correct answer is a) 
<center>
<img src="/chap7/question-memory-1-true.png" style="width:600px">
</center>

- \`ml\`, \`n1\` and \`n2\` are pointers. They return the address of the variables dynamically allocated
- The variable pointed by \`ml\` starts at the address 59 and is of type intlist
	- member size: 2
	- member next: 55 = value of n1 = address of the variable pointed by n1`,frontmatter:{level:2,hideInToc:!0},index:26,start:808,end:837,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Aw,meta:{layout:"intro",title:"Primitives Operations on Linked Lists",level:1,slide:{raw:`---
layout: intro
title: Primitives Operations on Linked Lists
level: 1
---
<center>
<span style="font-weight:700;font-size:30px">2. Primitives Operations on Linked Lists</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>


`,title:"Primitives Operations on Linked Lists",level:1,content:`<center>
<span style="font-weight:700;font-size:30px">2. Primitives Operations on Linked Lists</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>`,frontmatter:{layout:"intro",title:"Primitives Operations on Linked Lists",level:1},index:27,start:837,end:852,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Ew,meta:{level:2,slide:{raw:`---
level: 2
---

# Display

<div class="row">
<div class="column">
\`\`\`cpp
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-1.png">
</div>
</div>
	
	`,title:"Display",level:2,content:`# Display

<div class="row">
<div class="column">
\`\`\`cpp
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-1.png">
</div>
</div>`,frontmatter:{level:2},index:28,start:852,end:880,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Ow,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Display

<div class="row">
<div class="column">
\`\`\`cpp {6}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-2.png">
</div>
</div>
	`,title:"Display",level:2,content:`# Display

<div class="row">
<div class="column">
\`\`\`cpp {6}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-2.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:29,start:880,end:908,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Rw,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Display

<div class="row">
<div class="column">
\`\`\`cpp {7}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-2.png">
</div>
</div>
`,title:"Display",level:2,content:`# Display

<div class="row">
<div class="column">
\`\`\`cpp {7}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-2.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:30,start:908,end:936,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Yw,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Display

<div class="row">
<div class="column">
\`\`\`cpp {8}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-2.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\`
`,title:"Display",level:2,content:`# Display

<div class="row">
<div class="column">
\`\`\`cpp {8}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-2.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\``,frontmatter:{level:2,hideInToc:!0},index:31,start:936,end:970,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:lE,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Display

<div class="row">
<div class="column">
\`\`\`cpp {9}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\`
`,title:"Display",level:2,content:`# Display

<div class="row">
<div class="column">
\`\`\`cpp {9}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\``,frontmatter:{level:2,hideInToc:!0},index:32,start:970,end:1004,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:dE,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Display

<div class="row">
<div class="column">
\`\`\`cpp {7}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\`
`,title:"Display",level:2,content:`# Display

<div class="row">
<div class="column">
\`\`\`cpp {7}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\``,frontmatter:{level:2,hideInToc:!0},index:33,start:1004,end:1038,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:CE,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Display

<div class="row">
<div class="column">
\`\`\`cpp {8}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\`
`,title:"Display",level:2,content:`# Display

<div class="row">
<div class="column">
\`\`\`cpp {8}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\``,frontmatter:{level:2,hideInToc:!0},index:34,start:1038,end:1073,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:TE,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Display

<div class="row">
<div class="column">
\`\`\`cpp {9}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\`
`,title:"Display",level:2,content:`# Display

<div class="row">
<div class="column">
\`\`\`cpp {9}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\``,frontmatter:{level:2,hideInToc:!0},index:35,start:1073,end:1108,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:RE,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Display

<div class="row">
<div class="column">
\`\`\`cpp {7}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\`
`,title:"Display",level:2,content:`# Display

<div class="row">
<div class="column">
\`\`\`cpp {7}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\``,frontmatter:{level:2,hideInToc:!0},index:36,start:1108,end:1143,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:YE,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Display

<div class="row">
<div class="column">
\`\`\`cpp {10}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21

...Program finished with exit code 0
Press ENTER to exit console.
\`\`\`


`,title:"Display",level:2,content:`# Display

<div class="row">
<div class="column">
\`\`\`cpp {10}
int main() {
	
	(...)
	// supposed the list initialized as before
	
	node* current = ml->first;
	while (current != nullptr) {
		cout << current->data << endl;
		current = current->next;
	}
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21

...Program finished with exit code 0
Press ENTER to exit console.
\`\`\``,frontmatter:{level:2,hideInToc:!0},index:37,start:1143,end:1183,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:lk,meta:{level:2,slide:{raw:`---
level: 2
---

# Insertion

Can you code a function to insert a new element to the beginning of a list ?

<div class="row">
<div class="column">
\`\`\`cpp
void insert(intlist ml, node* newnode)
{
	newnode->next = (...)
	ml->first = (...)
	ml->size = (...)
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/insert-1.png" style="height:200px">
</div>
</div>
	
<div class="fieldset-box"  style="margin-top:40px">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT7
</div>	
	

`,title:"Insertion",level:2,content:`# Insertion

Can you code a function to insert a new element to the beginning of a list ?

<div class="row">
<div class="column">
\`\`\`cpp
void insert(intlist ml, node* newnode)
{
	newnode->next = (...)
	ml->first = (...)
	ml->size = (...)
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/insert-1.png" style="height:200px">
</div>
</div>
	
<div class="fieldset-box"  style="margin-top:40px">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT7
</div>`,frontmatter:{level:2},index:38,start:1183,end:1214,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:yk,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Insertion

Can you code a function to insert a new element to the beginning of a list ?

<div class="row">
<div class="column">
\`\`\`cpp
void insert(intlist ml, node* newnode)
{
	newnode->next = ml->first;
	ml->first = newnode;
	ml->size = ml->size+1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/insert-1.png" style="height:200px">
</div>
</div>

`,title:"Insertion",level:2,content:`# Insertion

Can you code a function to insert a new element to the beginning of a list ?

<div class="row">
<div class="column">
\`\`\`cpp
void insert(intlist ml, node* newnode)
{
	newnode->next = ml->first;
	ml->first = newnode;
	ml->size = ml->size+1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/insert-1.png" style="height:200px">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:39,start:1214,end:1240,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:gk,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Insertion

Can you code a function to insert a new element to the beginning of a list ?

<div class="row">
<div class="column">
\`\`\`cpp{3}
void insert(intlist ml, node* newnode)
{
	newnode->next = ml->first;
	ml->first = newnode;
	ml->size = ml->size+1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/insert-2.png" style="height:200px">
</div>
</div>
`,title:"Insertion",level:2,content:`# Insertion

Can you code a function to insert a new element to the beginning of a list ?

<div class="row">
<div class="column">
\`\`\`cpp{3}
void insert(intlist ml, node* newnode)
{
	newnode->next = ml->first;
	ml->first = newnode;
	ml->size = ml->size+1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/insert-2.png" style="height:200px">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:40,start:1240,end:1265,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Fk,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Insertion

Can you code a function to insert a new element to the beginning of a list ?

<div class="row">
<div class="column">
\`\`\`cpp{4}
void insert(intlist ml, node* newnode)
{
	newnode->next = ml->first;
	ml->first = newnode;
	ml->size = ml->size+1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/insert-3.png" style="height:200px">
</div>
</div>
`,title:"Insertion",level:2,content:`# Insertion

Can you code a function to insert a new element to the beginning of a list ?

<div class="row">
<div class="column">
\`\`\`cpp{4}
void insert(intlist ml, node* newnode)
{
	newnode->next = ml->first;
	ml->first = newnode;
	ml->size = ml->size+1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/insert-3.png" style="height:200px">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:41,start:1265,end:1290,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:zk,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Insertion

Can you code a function to insert a new element to the beginning of a list ?

<div class="row">
<div class="column">
\`\`\`cpp{5}
void insert(intlist ml, node* newnode)
{
	newnode->next = ml->first;
	ml->first = newnode;
	ml->size = ml->size+1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/insert-4.png" style="height:200px">
</div>
</div>


`,title:"Insertion",level:2,content:`# Insertion

Can you code a function to insert a new element to the beginning of a list ?

<div class="row">
<div class="column">
\`\`\`cpp{5}
void insert(intlist ml, node* newnode)
{
	newnode->next = ml->first;
	ml->first = newnode;
	ml->size = ml->size+1;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/insert-4.png" style="height:200px">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:42,start:1290,end:1317,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:Yk,meta:{level:2,slide:{raw:`---
level: 2
---

# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?


<div class="row">
<div class="column">
\`\`\`cpp
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = (...);
    obsolete_node = (...);
    p->next = (...);
    ml->size = (...);
    (...);
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-1.png">
</div>
</div>

<div class="fieldset-box"  style="margin-top:40px">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT7
</div>

`,title:"Deletion",level:2,content:`# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?


<div class="row">
<div class="column">
\`\`\`cpp
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = (...);
    obsolete_node = (...);
    p->next = (...);
    ml->size = (...);
    (...);
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-1.png">
</div>
</div>

<div class="fieldset-box"  style="margin-top:40px">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT7
</div>`,frontmatter:{level:2},index:43,start:1317,end:1350,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:lx,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?

<div class="row">
<div class="column">
\`\`\`cpp{2}
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-2.png">
</div>
</div>
	
	`,title:"Deletion",level:2,content:`# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?

<div class="row">
<div class="column">
\`\`\`cpp{2}
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-2.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:44,start:1350,end:1378,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:dx,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?

<div class="row">
<div class="column">
\`\`\`cpp{3}
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-3.png">
</div>
</div>
	`,title:"Deletion",level:2,content:`# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?

<div class="row">
<div class="column">
\`\`\`cpp{3}
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-3.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:45,start:1378,end:1405,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:Cx,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?

<div class="row">
<div class="column">
\`\`\`cpp{4}
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-4.png">
</div>
</div>
`,title:"Deletion",level:2,content:`# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?

<div class="row">
<div class="column">
\`\`\`cpp{4}
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-4.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:46,start:1405,end:1432,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:Tx,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?

<div class="row">
<div class="column">
\`\`\`cpp{5}
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-5.png">
</div>
</div>
`,title:"Deletion",level:2,content:`# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?

<div class="row">
<div class="column">
\`\`\`cpp{5}
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-5.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:47,start:1432,end:1459,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:Rx,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?

<div class="row">
<div class="column">
\`\`\`cpp{6}
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-6.png">
</div>
</div>

`,title:"Deletion",level:2,content:`# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?

<div class="row">
<div class="column">
\`\`\`cpp{6}
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/delete-6.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:48,start:1459,end:1487,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:Kx,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?


\`\`\`cpp
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`

What is the complexity?
<div v-click="1">
	
$$\\text{linked list deletion }\\sim\\mathcal{O}(1)$$
</div>
`,title:"Deletion",level:2,content:`# Deletion


 Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?


\`\`\`cpp
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    obsolete_node = p->next;
    p->next = obsolete_node->next;
    ml->size = ml->size-1;
    delete obsolete_node;
}
\`\`\`

What is the complexity?
<div v-click="1">
	
$$\\text{linked list deletion }\\sim\\mathcal{O}(1)$$
</div>`,frontmatter:{level:2,hideInToc:!0},index:49,start:1487,end:1514,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:s$,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Deletion (improved)

Actually a better version of the function is as follow, why?

\`\`\`cpp
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    if (p != nullptr) {
        obsolete_node = p->next;
        if (obsolete_node != nullptr) {
            p->next = obsolete_node->next;
   			ml->size=ml->size-1;
           	delete obsolete_node;
        } 
    }
}
\`\`\`

<div v-click="1">

Because it handle the cases where \`p\` is a null pointer or the last element of the linked list
</div>
`,title:"Deletion (improved)",level:2,content:`# Deletion (improved)

Actually a better version of the function is as follow, why?

\`\`\`cpp
void delete_next_given_ptr(intlist* ml, node* p) {
    node* obsolete_node = nullptr;
    if (p != nullptr) {
        obsolete_node = p->next;
        if (obsolete_node != nullptr) {
            p->next = obsolete_node->next;
   			ml->size=ml->size-1;
           	delete obsolete_node;
        } 
    }
}
\`\`\`

<div v-click="1">

Because it handle the cases where \`p\` is a null pointer or the last element of the linked list
</div>`,frontmatter:{level:2,hideInToc:!0},index:50,start:1514,end:1542,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:r$,meta:{level:2,slide:{raw:`---
level: 2
---

# Access

Can you code a function to access the i-th element of a linked list?

<div v-click="1">

\`\`\`cpp
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>

`,title:"Access",level:2,content:`# Access

Can you code a function to access the i-th element of a linked list?

<div v-click="1">

\`\`\`cpp
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>`,frontmatter:{level:2},index:51,start:1542,end:1571,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:h$,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{3,4}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-2.png">
</div>
</div>
	`,title:"Access",level:2,content:`# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{3,4}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-2.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:52,start:1571,end:1605,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:b$,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{6}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-3.png">
</div>
</div>
`,title:"Access",level:2,content:`# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{6}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-3.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:53,start:1605,end:1639,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:O$,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{7}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-4.png">
</div>
</div>
`,title:"Access",level:2,content:`# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{7}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-4.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:54,start:1639,end:1673,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:N$,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{6}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-5.png">
</div>
</div>
`,title:"Access",level:2,content:`# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{6}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-5.png">
</div>
</div>`,frontmatter:{level:2,hideInToc:!0},index:55,start:1673,end:1707,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:J$,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{7}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-6.png">
</div>
</div>

Since $j=i=2$, it get outs the loop ...
`,title:"Access",level:2,content:`# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{7}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-6.png">
</div>
</div>

Since $j=i=2$, it get outs the loop ...`,frontmatter:{level:2,hideInToc:!0},index:56,start:1707,end:1743,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:rF,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{10,11}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-6.png">
</div>
</div>

Since $j=i=2$, it get outs the loop ... and return \`current\`

`,title:"Access",level:2,content:`# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp{10,11}
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-6.png">
</div>
</div>

Since $j=i=2$, it get outs the loop ... and return \`current\``,frontmatter:{level:2,hideInToc:!0},index:57,start:1743,end:1780,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:BF,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
</div>
</div>

What is the complexity?
<div v-click="1">
	
$$\\text{linked list access }\\sim\\mathcal{O}(n)$$
</div>
`,title:"Access",level:2,content:`# Access

Can you code a function to access the i-th element of a linked list?

<div class="row">
<div class="column">

\`\`\`cpp
node* get(intlist* ml, int i) {

    int j = 0;
    node* current = ml->first;
    while (current != nullptr && j != i) {
        current = current->next;
        j++;
    }
    
    if (j == i) {
        return current;
    }
	return nullptr;
}
\`\`\`
</div>
<div class="column">
</div>
</div>

What is the complexity?
<div v-click="1">
	
$$\\text{linked list access }\\sim\\mathcal{O}(n)$$
</div>`,frontmatter:{level:2,hideInToc:!0},index:58,start:1780,end:1819,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:wF,meta:{level:2,slide:{raw:`---
level: 2
---

# Search

Can you code a function searching a node with a given value inside a linked list?

<div class="row">
<div class="column">
\`\`\`cpp
node* search(intlist* ml, int data) {
	
    
           
    (...)
    
	
    
    return (...);
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-1.png">
</div>
</div>
`,title:"Search",level:2,content:`# Search

Can you code a function searching a node with a given value inside a linked list?

<div class="row">
<div class="column">
\`\`\`cpp
node* search(intlist* ml, int data) {
	
    
           
    (...)
    
	
    
    return (...);
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-1.png">
</div>
</div>`,frontmatter:{level:2},index:59,start:1819,end:1847,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:MF,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Search

Can you code a function searching a node with a given value inside a linked list?

<div class="row">
<div class="column">
\`\`\`cpp
node* search(intlist* ml, int data) {
	
    node* current = ml->first;
    while (current != nullptr && current->data != data)       
	{
        current = current->next;
    }
    
    return current;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-1.png">
</div>
</div>

<div v-click="1">

Search is a linear scan, just like searching in unsorted array. So what is the complexity ?
</div>
<div v-click="2">
	
$$\\text{linked list search }\\sim\\mathcal{O}(n)$$
</div>
`,title:"Search",level:2,content:`# Search

Can you code a function searching a node with a given value inside a linked list?

<div class="row">
<div class="column">
\`\`\`cpp
node* search(intlist* ml, int data) {
	
    node* current = ml->first;
    while (current != nullptr && current->data != data)       
	{
        current = current->next;
    }
    
    return current;
}
\`\`\`
</div>
<div class="column">
<img src="/chap7/access-1.png">
</div>
</div>

<div v-click="1">

Search is a linear scan, just like searching in unsorted array. So what is the complexity ?
</div>
<div v-click="2">
	
$$\\text{linked list search }\\sim\\mathcal{O}(n)$$
</div>`,frontmatter:{level:2,hideInToc:!0},index:60,start:1847,end:1885,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:YF,meta:{level:2,title:"Complexity",slide:{raw:`---
level: 2
title: Complexity
---

# Complexity of Operations on Linked Lists

<center><br><br><br><br>
<img src="/chap7/linked-list-complexity.png">
</center><br><br>

Linked lists have notable advantages over arrays .. except for access




`,title:"Complexity",level:2,content:`# Complexity of Operations on Linked Lists

<center><br><br><br><br>
<img src="/chap7/linked-list-complexity.png">
</center><br><br>

Linked lists have notable advantages over arrays .. except for access`,frontmatter:{level:2,title:"Complexity"},index:61,start:1885,end:1902,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:XF,meta:{layout:"intro",level:2,hideInToc:!0,slide:{raw:`---
layout: intro
level: 2
hideInToc: true
---
	
<center>
Let's practice!
	
	
<div class="fieldset-box">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT7
</div>
</center>	



`,level:2,content:`<center>
Let's practice!
	
	
<div class="fieldset-box">
	<div class="legend">Wooclap</div>
    Event: DATASTRUCT7
</div>
</center>`,frontmatter:{layout:"intro",level:2,hideInToc:!0},index:62,start:1902,end:1921,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:lT,meta:{layout:"intro",title:"Advanced Linked Lists",level:1,slide:{raw:`---
layout: intro
title: Advanced Linked Lists
level: 1
---
<center>
<span style="font-weight:700;font-size:30px">3. Advanced Linked Lists</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>



`,title:"Advanced Linked Lists",level:1,content:`<center>
<span style="font-weight:700;font-size:30px">3. Advanced Linked Lists</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>`,frontmatter:{layout:"intro",title:"Advanced Linked Lists",level:1},index:63,start:1921,end:1937,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:vT,meta:{level:2,title:"Doubly linked lists",slide:{raw:`---
level: 2
title: Doubly linked lists
---

# Doubly Linked Lists

<center>
<img src="/chap7/double-linked-list.png">
</center><br><br>

<div class="row">
<div class="column">
<img src="/chap7/wagon-double.png" style="height:100px">
</div>
<div class="column">
\`\`\`cpp
typedef struct node
{
    node* previous;
    int data;      
    node* next;
} node;
\`\`\`
</div>
</div>
	

<div class="row">
<div class="column">
<img src="/chap7/head-double.png" style="height:100px">
</div>
<div class="column">
\`\`\`cpp
typedef struct intlist 
{
    struct node* start;
    int size;
    struct node* end;
} intlist
\`\`\`
</div>
</div>
	`,title:"Doubly linked lists",level:2,content:`# Doubly Linked Lists

<center>
<img src="/chap7/double-linked-list.png">
</center><br><br>

<div class="row">
<div class="column">
<img src="/chap7/wagon-double.png" style="height:100px">
</div>
<div class="column">
\`\`\`cpp
typedef struct node
{
    node* previous;
    int data;      
    node* next;
} node;
\`\`\`
</div>
</div>
	

<div class="row">
<div class="column">
<img src="/chap7/head-double.png" style="height:100px">
</div>
<div class="column">
\`\`\`cpp
typedef struct intlist 
{
    struct node* start;
    int size;
    struct node* end;
} intlist
\`\`\`
</div>
</div>`,frontmatter:{level:2,title:"Doubly linked lists"},index:64,start:1937,end:1981,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:FT,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# Doubly linked lists

<center>
<img src="/chap7/double-linked-list.png">
</center><br><br>

**Advantages:**
- Deletion of a node given its pointer becomes O(1)
- Insertion before a given pointer to a node becomes O(1)
- Easier to reverse the linked list (swap pointers in each item)

**Drawbacks:**
- Stores n additional pointers
- Maintains n additional pointers (or not if you use XOR double-linked lists)
`,title:"Doubly linked lists",level:2,content:`# Doubly linked lists

<center>
<img src="/chap7/double-linked-list.png">
</center><br><br>

**Advantages:**
- Deletion of a node given its pointer becomes O(1)
- Insertion before a given pointer to a node becomes O(1)
- Easier to reverse the linked list (swap pointers in each item)

**Drawbacks:**
- Stores n additional pointers
- Maintains n additional pointers (or not if you use XOR double-linked lists)`,frontmatter:{level:2,hideInToc:!0},index:65,start:1981,end:2001,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:qT,meta:{level:2,title:"Circular linked lists",slide:{raw:`---
level: 2
title: Circular linked lists
---

# Circular Linked Lists

<center>
<img style="height:100px" src="/chap7/circular-list.png">
</center><br>
<i>In which circumstances can it be useful ?</i><br><br>
<div v-click="1">
<div class="row">
<div class="column">
<center>
Game development
<img src="/chap7/monopoly.png" style="height:150px">
</center>
</div>
<div class="column">
  
- Resource allocations
- Music playlists
- ...
</div>
</div>
</div>

<br>
<i>One can go even further with circular doubly linked lists, etc.</i>

`,title:"Circular linked lists",level:2,content:`# Circular Linked Lists

<center>
<img style="height:100px" src="/chap7/circular-list.png">
</center><br>
<i>In which circumstances can it be useful ?</i><br><br>
<div v-click="1">
<div class="row">
<div class="column">
<center>
Game development
<img src="/chap7/monopoly.png" style="height:150px">
</center>
</div>
<div class="column">
  
- Resource allocations
- Music playlists
- ...
</div>
</div>
</div>

<br>
<i>One can go even further with circular doubly linked lists, etc.</i>`,frontmatter:{level:2,title:"Circular linked lists"},index:66,start:2001,end:2033,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:lS,meta:{level:2,title:"Skip lists",slide:{raw:`---
level: 2
title: Skip lists
---

# Skip Lists

<center><br><br><br>
<img src="/chap7/skip-list.png" style="width:500px">
<br><br>
<img src="/chap7/skip-list-complexity.png" style="width:500px">
</center>

`,title:"Skip lists",level:2,content:`# Skip Lists

<center><br><br><br>
<img src="/chap7/skip-list.png" style="width:500px">
<br><br>
<img src="/chap7/skip-list-complexity.png" style="width:500px">
</center>`,frontmatter:{level:2,title:"Skip lists"},index:67,start:2033,end:2047,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:gS,meta:{level:2,title:"Unrolled lists",slide:{raw:`---
level: 2
title: Unrolled lists
---

# Unrolled Lists

<center><br><br><br>
<img src="/chap7/unrolled-list.png" style="width:700px">
</center><br><br><br><br>

<div class="row">
<div class="column">
<img src="/chap7/unrolled-list-wagon.png">
</div>
<div class="column">
\`\`\`cpp
typedef struct node
{
    node*next;
	const int number_elements;
    int data[number_elements];      
} node;
\`\`\`
</div>
</div>

`,title:"Unrolled lists",level:2,content:`# Unrolled Lists

<center><br><br><br>
<img src="/chap7/unrolled-list.png" style="width:700px">
</center><br><br><br><br>

<div class="row">
<div class="column">
<img src="/chap7/unrolled-list-wagon.png">
</div>
<div class="column">
\`\`\`cpp
typedef struct node
{
    node*next;
	const int number_elements;
    int data[number_elements];      
} node;
\`\`\`
</div>
</div>`,frontmatter:{level:2,title:"Unrolled lists"},index:68,start:2047,end:2075,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:kS,meta:{layout:"intro",title:"Conclusion",level:1,hideInToc:!0,slide:{raw:`---
layout: intro
title: Conclusion
level: 1
hideInToc: true
---	
	
<center>
<span style="font-weight:700;font-size:30px">5. Conclusion</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>



	`,title:"Conclusion",level:1,content:`<center>
<span style="font-weight:700;font-size:30px">5. Conclusion</span>
<br><br>
 <div style="text-align: left; display: inline-block;">
    <Toc minDepth="2" mode="onlyCurrentTree" />
 </div>
</center>`,frontmatter:{layout:"intro",title:"Conclusion",level:1,hideInToc:!0},index:69,start:2075,end:2093,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:MS,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# To recap
	
We have seen...

<center>
a <u>linear</u> data structure where elements are stored in <u>non-contiguous</u> memory locations<br>
<b>Linked Lists</b>
</center>

<br><br>

- It has many advantages over arrays... except for accessing elements
- It extensively relies on pointers

`,title:"To recap",level:2,content:`# To recap
	
We have seen...

<center>
a <u>linear</u> data structure where elements are stored in <u>non-contiguous</u> memory locations<br>
<b>Linked Lists</b>
</center>

<br><br>

- It has many advantages over arrays... except for accessing elements
- It extensively relies on pointers`,frontmatter:{level:2,hideInToc:!0},index:70,start:2093,end:2113,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:WS,meta:{level:2,hideInToc:!0,slide:{raw:`---
level: 2
hideInToc: true
---

# To Go Further

<br><br>
1. <u>Practice:</u> Implement all operations without looking at the course
2. <u>Exercice:</u> Implement a function that tests if a given linked list is circular


<center><br>

*Is there a curious programmer who would like to present<br> an application with advanced linked lists?*
</center>
`,title:"To Go Further",level:2,content:`# To Go Further

<br><br>
1. <u>Practice:</u> Implement all operations without looking at the course
2. <u>Exercice:</u> Implement a function that tests if a given linked list is circular


<center><br>

*Is there a curious programmer who would like to present<br> an application with advanced linked lists?*
</center>`,frontmatter:{level:2,hideInToc:!0},index:71,start:2113,end:2130,noteHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/7-linked-lists.md",id:71,no:72},__clicksElements:[],__preloaded:!1}}],qS=[],Ze=US,pl=[{name:"play",path:"/",component:e9,children:[...Ze,...qS]},{name:"print",path:"/print",component:k6},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let s=function(n){if(!il.remote||il.remote===n.query.password)return!0;if(il.remote&&n.query.password===void 0){const t=prompt("Enter password");if(il.remote===t)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};pl.push({path:"/presenter/print",component:()=>Ln(()=>import("./PresenterPrint-ca966b00.js"),["assets/PresenterPrint-ca966b00.js","assets/NoteDisplay-3de0a9e4.js"])}),pl.push({name:"notes",path:"/notes",component:()=>Ln(()=>import("./NotesView-bdebf435.js"),["assets/NotesView-bdebf435.js","assets/NoteDisplay-3de0a9e4.js"]),beforeEnter:s}),pl.push({name:"presenter",path:"/presenter/:no",component:()=>Ln(()=>import("./Presenter-d181448e.js"),["assets/Presenter-d181448e.js","assets/NoteDisplay-3de0a9e4.js","assets/DrawingControls-effa453d.js","assets/Presenter-aa6741a8.css"]),beforeEnter:s}),pl.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const gs=$_({history:xA("/courses/data-structure/linked-lists/"),routes:pl});function GS(s,n,{mode:t="replace"}={}){return O({get(){const l=gs.currentRoute.value.query[s];return l==null?n??null:Array.isArray(l)?l.filter(Boolean):l},set(l){os(()=>{gs[T(t)]({query:{...gs.currentRoute.value.query,[s]:l}})})}})}const a8=Y(0);os(()=>{gs.afterEach(async()=>{await os(),a8.value+=1})});const c8=Y(0),Rs=O(()=>gs.currentRoute.value),An=O(()=>Rs.value.query.print!==void 0),KS=O(()=>Rs.value.query.print==="clicks"),fn=O(()=>Rs.value.query.embedded!==void 0),_s=O(()=>Rs.value.path.startsWith("/presenter")),YS=O(()=>Rs.value.path.startsWith("/notes")),Al=O(()=>An.value&&!KS.value),Ra=O(()=>Rs.value.query.password),ZS=O(()=>!_s.value&&(!Se.remote||Ra.value===Se.remote)),Gp=GS("clicks","0"),JS=O(()=>Ze.length),XS=O(()=>Rs.value.path),Ge=O(()=>Number.parseInt(XS.value.split(/\//g).slice(-1)[0])||1);O(()=>hr(Ge.value));const ys=O(()=>Ze.find(s=>s.path===`${Ge.value}`));O(()=>{var s,n,t;return(t=(n=(s=ys.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:t.id});O(()=>{var s,n;return((n=(s=ys.value)==null?void 0:s.meta)==null?void 0:n.layout)||(Ge.value===1?"cover":"default")});const Hr=O(()=>Ze.find(s=>s.path===`${Math.min(Ze.length,Ge.value+1)}`)),QS=O(()=>Ze.find(s=>s.path===`${Math.max(1,Ge.value-1)}`)),eO=O(()=>{var s,n;return a8.value,((n=(s=ys.value)==null?void 0:s.meta)==null?void 0:n.__clicksElements)||[]}),Ps=O({get(){if(Al.value)return 99999;let s=+(Gp.value||0);return Number.isNaN(s)&&(s=0),s},set(s){Gp.value=s.toString()}}),Ko=O(()=>{var s,n;return+(((n=(s=ys.value)==null?void 0:s.meta)==null?void 0:n.clicks)??eO.value.length)}),sO=O(()=>Ge.value<Ze.length||Ps.value<Ko.value),nO=O(()=>Ge.value>1||Ps.value>0),tO=O(()=>Ze.filter(s=>{var n,t;return(t=(n=s.meta)==null?void 0:n.slide)==null?void 0:t.title}).reduce((s,n)=>(Rc(s,n),s),[])),lO=O(()=>Hc(tO.value,ys.value));O(()=>Nc(lO.value));const oO=O(()=>pO(c8.value,ys.value,QS.value));ve(ys,(s,n)=>{c8.value=Number(s==null?void 0:s.path)-Number(n==null?void 0:n.path)});function Mn(){Ko.value<=Ps.value?Ll():Ps.value+=1}async function jn(){Ps.value<=0?await Pl():Ps.value-=1}function hr(s){return _s.value?`/presenter/${s}`:`/${s}`}function Ll(){const s=Math.min(Ze.length,Ge.value+1);return Ht(s)}async function Pl(s=!0){const n=Math.max(1,Ge.value-1);await Ht(n),s&&Ko.value&&gs.replace({query:{...Rs.value.query,clicks:Ko.value}})}function Ht(s,n){return gs.push({path:hr(s),query:{...Rs.value.query,clicks:n}})}function rO(s){const n=Y(0),{direction:t,distanceX:l,distanceY:o}=JB(s,{onSwipeStart(r){r.pointerType==="touch"&&(Sl.value||(n.value=ga()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Sl.value)return;const c=Math.abs(l.value),i=Math.abs(o.value);c/window.innerWidth>.3||c>100?t.value==="left"?Mn():jn():(i/window.innerHeight>.4||i>200)&&(t.value==="down"?Pl():Ll())}})}async function Ha(){const{saveAs:s}=await Ln(()=>import("./FileSaver.min-23a5d44b.js").then(n=>n.F),[]);s(typeof Se.download=="string"?Se.download:Se.exportFilename?`${Se.exportFilename}.pdf`:"/courses/data-structure/linked-lists/slidev-exported.pdf",`${Se.title}.pdf`)}async function aO(s){var n,t;if(s==null){const l=(t=(n=ys.value)==null?void 0:n.meta)==null?void 0:t.slide;if(!(l!=null&&l.filepath))return!1;s=`${l.filepath}:${l.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(s)}`),!0}function Rc(s,n,t=1){var o,r,c,i,p;const l=(r=(o=n.meta)==null?void 0:o.slide)==null?void 0:r.level;l&&l>t&&s.length>0?Rc(s[s.length-1].children,n,t+1):s.push({children:[],level:t,path:n.path,hideInToc:!!((c=n.meta)!=null&&c.hideInToc),title:(p=(i=n.meta)==null?void 0:i.slide)==null?void 0:p.title})}function Hc(s,n,t=!1,l){return s.map(o=>{const r={...o,active:o.path===(n==null?void 0:n.path),hasActiveParent:t};return r.children.length>0&&(r.children=Hc(r.children,n,r.active||r.hasActiveParent,r)),l&&(r.active||r.activeParent)&&(l.activeParent=!0),r})}function Nc(s,n=1){return s.filter(t=>!t.hideInToc).map(t=>({...t,children:Nc(t.children,n+1)}))}const cO={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function iO(s,n=!1){if(!s||(typeof s=="string"&&(s={name:s}),!s.name))return;let t=s.name.includes("|")?s.name:cO[s.name]||s.name;if(t.includes("|")){const[l,o]=t.split("|").map(r=>r.trim());t=n?o:l}if(t)return{...s,name:t}}function pO(s,n,t){var o,r;let l=s>0?(o=t==null?void 0:t.meta)==null?void 0:o.transition:(r=n==null?void 0:n.meta)==null?void 0:r.transition;return l||(l=Se.transition),iO(l,s<0)}function uO(){const s=Se.titleTemplate.replace("%s",Se.title||"Slidev");Ky({title:s,htmlAttrs:Se.htmlAttrs}),k3(`${s} - shared`),T3(`${s} - drawings`);const n=`${location.origin}_${v3()}`;function t(){YS.value||!_s.value&&!_3.includes(location.host.split(":")[0])||(_s.value?(Jt("page",+Ge.value),Jt("clicks",Ps.value)):(Jt("viewerPage",+Ge.value),Jt("viewerClicks",Ps.value)),Jt("lastUpdate",{id:n,type:_s.value?"presenter":"viewer",time:new Date().getTime()}))}gs.afterEach(t),ve(Ps,t),x3(l=>{var r;gs.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=l.lastUpdate)==null?void 0:r.type)==="presenter"&&(+l.page!=+Ge.value||+Ps.value!=+l.clicks)&&gs.replace({path:hr(l.page),query:{...gs.currentRoute.value.query,clicks:l.clicks||0}})})}const yO=$e({__name:"App",setup(s){return P(R),uO(),(n,t)=>{const l=He("RouterView"),o=He("StarportCarrier");return A(),E(Te,null,[k(l),k(o)],64)}}}),dO=H(yO,[["__file","/home/fj103585/Documents/GitHub/course-data-structure/node_modules/@slidev/client/App.vue"]]);function Nr(s){return s!==null&&typeof s=="object"}function Na(s,n,t=".",l){if(!Nr(n))return Na(s,{},t,l);const o=Object.assign({},n);for(const r in s){if(r==="__proto__"||r==="constructor")continue;const c=s[r];c!=null&&(l&&l(o,r,c,t)||(Array.isArray(c)&&Array.isArray(o[r])?o[r]=[...c,...o[r]]:Nr(c)&&Nr(o[r])?o[r]=Na(c,o[r],(t?`${t}.`:"")+r.toString(),l):o[r]=c))}return o}function fO(s){return(...n)=>n.reduce((t,l)=>Na(t,l,"",s),{})}const hO=fO(),i8=1/60*1e3,mO=typeof performance<"u"?()=>performance.now():()=>Date.now(),p8=typeof window<"u"?s=>window.requestAnimationFrame(s):s=>setTimeout(()=>s(mO()),i8);function BO(s){let n=[],t=[],l=0,o=!1,r=!1;const c=new WeakSet,i={schedule:(p,u=!1,y=!1)=>{const d=y&&o,f=d?n:t;return u&&c.add(p),f.indexOf(p)===-1&&(f.push(p),d&&o&&(l=n.length)),p},cancel:p=>{const u=t.indexOf(p);u!==-1&&t.splice(u,1),c.delete(p)},process:p=>{if(o){r=!0;return}if(o=!0,[n,t]=[t,n],t.length=0,l=n.length,l)for(let u=0;u<l;u++){const y=n[u];y(p),c.has(y)&&(i.schedule(y),s())}o=!1,r&&(r=!1,i.process(p))}};return i}const AO=40;let Va=!0,Ml=!1,Wa=!1;const jt={delta:0,timestamp:0},Kl=["read","update","preRender","render","postRender"],mr=Kl.reduce((s,n)=>(s[n]=BO(()=>Ml=!0),s),{}),Ua=Kl.reduce((s,n)=>{const t=mr[n];return s[n]=(l,o=!1,r=!1)=>(Ml||gO(),t.schedule(l,o,r)),s},{}),_O=Kl.reduce((s,n)=>(s[n]=mr[n].cancel,s),{});Kl.reduce((s,n)=>(s[n]=()=>mr[n].process(jt),s),{});const vO=s=>mr[s].process(jt),u8=s=>{Ml=!1,jt.delta=Va?i8:Math.max(Math.min(s-jt.timestamp,AO),1),jt.timestamp=s,Wa=!0,Kl.forEach(vO),Wa=!1,Ml&&(Va=!1,p8(u8))},gO=()=>{Ml=!0,Va=!0,Wa||p8(u8)},y8=()=>jt;function d8(s,n){var t={};for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&n.indexOf(l)<0&&(t[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(s);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(s,l[o])&&(t[l[o]]=s[l[o]]);return t}var Vc=function(){},jl=function(){};Vc=function(s,n){!s&&typeof console<"u"&&console.warn(n)},jl=function(s,n){if(!s)throw new Error(n)};const qa=(s,n,t)=>Math.min(Math.max(t,s),n),Vr=.001,CO=.01,Kp=10,DO=.05,bO=1;function wO({duration:s=800,bounce:n=.25,velocity:t=0,mass:l=1}){let o,r;Vc(s<=Kp*1e3,"Spring duration must be 10 seconds or less");let c=1-n;c=qa(DO,bO,c),s=qa(CO,Kp,s/1e3),c<1?(o=u=>{const y=u*c,d=y*s,f=y-t,h=Ga(u,c),m=Math.exp(-d);return Vr-f/h*m},r=u=>{const d=u*c*s,f=d*t+t,h=Math.pow(c,2)*Math.pow(u,2)*s,m=Math.exp(-d),g=Ga(Math.pow(u,2),c);return(-o(u)+Vr>0?-1:1)*((f-h)*m)/g}):(o=u=>{const y=Math.exp(-u*s),d=(u-t)*s+1;return-Vr+y*d},r=u=>{const y=Math.exp(-u*s),d=(t-u)*(s*s);return y*d});const i=5/s,p=kO(o,r,i);if(s=s*1e3,isNaN(p))return{stiffness:100,damping:10,duration:s};{const u=Math.pow(p,2)*l;return{stiffness:u,damping:c*2*Math.sqrt(l*u),duration:s}}}const EO=12;function kO(s,n,t){let l=t;for(let o=1;o<EO;o++)l=l-s(l)/n(l);return l}function Ga(s,n){return s*Math.sqrt(1-n*n)}const xO=["duration","bounce"],$O=["stiffness","damping","mass"];function Yp(s,n){return n.some(t=>s[t]!==void 0)}function FO(s){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},s);if(!Yp(s,$O)&&Yp(s,xO)){const t=wO(s);n=Object.assign(Object.assign(Object.assign({},n),t),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function Wc(s){var{from:n=0,to:t=1,restSpeed:l=2,restDelta:o}=s,r=d8(s,["from","to","restSpeed","restDelta"]);const c={done:!1,value:n};let{stiffness:i,damping:p,mass:u,velocity:y,duration:d,isResolvedFromDuration:f}=FO(r),h=Zp,m=Zp;function g(){const C=y?-(y/1e3):0,D=t-n,b=p/(2*Math.sqrt(i*u)),v=Math.sqrt(i/u)/1e3;if(o===void 0&&(o=Math.min(Math.abs(t-n)/100,.4)),b<1){const x=Ga(v,b);h=$=>{const S=Math.exp(-b*v*$);return t-S*((C+b*v*D)/x*Math.sin(x*$)+D*Math.cos(x*$))},m=$=>{const S=Math.exp(-b*v*$);return b*v*S*(Math.sin(x*$)*(C+b*v*D)/x+D*Math.cos(x*$))-S*(Math.cos(x*$)*(C+b*v*D)-x*D*Math.sin(x*$))}}else if(b===1)h=x=>t-Math.exp(-v*x)*(D+(C+v*D)*x);else{const x=v*Math.sqrt(b*b-1);h=$=>{const S=Math.exp(-b*v*$),N=Math.min(x*$,300);return t-S*((C+b*v*D)*Math.sinh(N)+x*D*Math.cosh(N))/x}}}return g(),{next:C=>{const D=h(C);if(f)c.done=C>=d;else{const b=m(C)*1e3,v=Math.abs(b)<=l,x=Math.abs(t-D)<=o;c.done=v&&x}return c.value=c.done?t:D,c},flipTarget:()=>{y=-y,[n,t]=[t,n],g()}}}Wc.needsInterpolation=(s,n)=>typeof s=="string"||typeof n=="string";const Zp=s=>0,f8=(s,n,t)=>{const l=n-s;return l===0?1:(t-s)/l},Uc=(s,n,t)=>-t*s+t*n+s,h8=(s,n)=>t=>Math.max(Math.min(t,n),s),_l=s=>s%1?Number(s.toFixed(5)):s,zl=/(-)?([\d]*\.?[\d])+/g,Ka=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,TO=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Yl(s){return typeof s=="string"}const Zl={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},vl=Object.assign(Object.assign({},Zl),{transform:h8(0,1)}),ho=Object.assign(Object.assign({},Zl),{default:1}),qc=s=>({test:n=>Yl(n)&&n.endsWith(s)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${s}`}),Jn=qc("deg"),gl=qc("%"),Ce=qc("px"),Jp=Object.assign(Object.assign({},gl),{parse:s=>gl.parse(s)/100,transform:s=>gl.transform(s*100)}),Gc=(s,n)=>t=>!!(Yl(t)&&TO.test(t)&&t.startsWith(s)||n&&Object.prototype.hasOwnProperty.call(t,n)),m8=(s,n,t)=>l=>{if(!Yl(l))return l;const[o,r,c,i]=l.match(zl);return{[s]:parseFloat(o),[n]:parseFloat(r),[t]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},pt={test:Gc("hsl","hue"),parse:m8("hue","saturation","lightness"),transform:({hue:s,saturation:n,lightness:t,alpha:l=1})=>"hsla("+Math.round(s)+", "+gl.transform(_l(n))+", "+gl.transform(_l(t))+", "+_l(vl.transform(l))+")"},SO=h8(0,255),Wr=Object.assign(Object.assign({},Zl),{transform:s=>Math.round(SO(s))}),Fn={test:Gc("rgb","red"),parse:m8("red","green","blue"),transform:({red:s,green:n,blue:t,alpha:l=1})=>"rgba("+Wr.transform(s)+", "+Wr.transform(n)+", "+Wr.transform(t)+", "+_l(vl.transform(l))+")"};function OO(s){let n="",t="",l="",o="";return s.length>5?(n=s.substr(1,2),t=s.substr(3,2),l=s.substr(5,2),o=s.substr(7,2)):(n=s.substr(1,1),t=s.substr(2,1),l=s.substr(3,1),o=s.substr(4,1),n+=n,t+=t,l+=l,o+=o),{red:parseInt(n,16),green:parseInt(t,16),blue:parseInt(l,16),alpha:o?parseInt(o,16)/255:1}}const Ya={test:Gc("#"),parse:OO,transform:Fn.transform},As={test:s=>Fn.test(s)||Ya.test(s)||pt.test(s),parse:s=>Fn.test(s)?Fn.parse(s):pt.test(s)?pt.parse(s):Ya.parse(s),transform:s=>Yl(s)?s:s.hasOwnProperty("red")?Fn.transform(s):pt.transform(s)},B8="${c}",A8="${n}";function IO(s){var n,t,l,o;return isNaN(s)&&Yl(s)&&((t=(n=s.match(zl))===null||n===void 0?void 0:n.length)!==null&&t!==void 0?t:0)+((o=(l=s.match(Ka))===null||l===void 0?void 0:l.length)!==null&&o!==void 0?o:0)>0}function _8(s){typeof s=="number"&&(s=`${s}`);const n=[];let t=0;const l=s.match(Ka);l&&(t=l.length,s=s.replace(Ka,B8),n.push(...l.map(As.parse)));const o=s.match(zl);return o&&(s=s.replace(zl,A8),n.push(...o.map(Zl.parse))),{values:n,numColors:t,tokenised:s}}function v8(s){return _8(s).values}function g8(s){const{values:n,numColors:t,tokenised:l}=_8(s),o=n.length;return r=>{let c=l;for(let i=0;i<o;i++)c=c.replace(i<t?B8:A8,i<t?As.transform(r[i]):_l(r[i]));return c}}const LO=s=>typeof s=="number"?0:s;function PO(s){const n=v8(s);return g8(s)(n.map(LO))}const Jl={test:IO,parse:v8,createTransformer:g8,getAnimatableNone:PO},MO=new Set(["brightness","contrast","saturate","opacity"]);function jO(s){let[n,t]=s.slice(0,-1).split("(");if(n==="drop-shadow")return s;const[l]=t.match(zl)||[];if(!l)return s;const o=t.replace(l,"");let r=MO.has(n)?1:0;return l!==t&&(r*=100),n+"("+r+o+")"}const zO=/([a-z-]*)\(.*?\)/g,Za=Object.assign(Object.assign({},Jl),{getAnimatableNone:s=>{const n=s.match(zO);return n?n.map(jO).join(" "):s}});function Ur(s,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(n-s)*6*t:t<1/2?n:t<2/3?s+(n-s)*(2/3-t)*6:s}function Xp({hue:s,saturation:n,lightness:t,alpha:l}){s/=360,n/=100,t/=100;let o=0,r=0,c=0;if(!n)o=r=c=t;else{const i=t<.5?t*(1+n):t+n-t*n,p=2*t-i;o=Ur(p,i,s+1/3),r=Ur(p,i,s),c=Ur(p,i,s-1/3)}return{red:Math.round(o*255),green:Math.round(r*255),blue:Math.round(c*255),alpha:l}}const RO=(s,n,t)=>{const l=s*s,o=n*n;return Math.sqrt(Math.max(0,t*(o-l)+l))},HO=[Ya,Fn,pt],Qp=s=>HO.find(n=>n.test(s)),eu=s=>`'${s}' is not an animatable color. Use the equivalent color code instead.`,C8=(s,n)=>{let t=Qp(s),l=Qp(n);jl(!!t,eu(s)),jl(!!l,eu(n));let o=t.parse(s),r=l.parse(n);t===pt&&(o=Xp(o),t=Fn),l===pt&&(r=Xp(r),l=Fn);const c=Object.assign({},o);return i=>{for(const p in c)p!=="alpha"&&(c[p]=RO(o[p],r[p],i));return c.alpha=Uc(o.alpha,r.alpha,i),t.transform(c)}},NO=s=>typeof s=="number",VO=(s,n)=>t=>n(s(t)),D8=(...s)=>s.reduce(VO);function b8(s,n){return NO(s)?t=>Uc(s,n,t):As.test(s)?C8(s,n):E8(s,n)}const w8=(s,n)=>{const t=[...s],l=t.length,o=s.map((r,c)=>b8(r,n[c]));return r=>{for(let c=0;c<l;c++)t[c]=o[c](r);return t}},WO=(s,n)=>{const t=Object.assign(Object.assign({},s),n),l={};for(const o in t)s[o]!==void 0&&n[o]!==void 0&&(l[o]=b8(s[o],n[o]));return o=>{for(const r in l)t[r]=l[r](o);return t}};function su(s){const n=Jl.parse(s),t=n.length;let l=0,o=0,r=0;for(let c=0;c<t;c++)l||typeof n[c]=="number"?l++:n[c].hue!==void 0?r++:o++;return{parsed:n,numNumbers:l,numRGB:o,numHSL:r}}const E8=(s,n)=>{const t=Jl.createTransformer(n),l=su(s),o=su(n);return l.numHSL===o.numHSL&&l.numRGB===o.numRGB&&l.numNumbers>=o.numNumbers?D8(w8(l.parsed,o.parsed),t):(Vc(!0,`Complex values '${s}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),c=>`${c>0?n:s}`)},UO=(s,n)=>t=>Uc(s,n,t);function qO(s){if(typeof s=="number")return UO;if(typeof s=="string")return As.test(s)?C8:E8;if(Array.isArray(s))return w8;if(typeof s=="object")return WO}function GO(s,n,t){const l=[],o=t||qO(s[0]),r=s.length-1;for(let c=0;c<r;c++){let i=o(s[c],s[c+1]);if(n){const p=Array.isArray(n)?n[c]:n;i=D8(p,i)}l.push(i)}return l}function KO([s,n],[t]){return l=>t(f8(s,n,l))}function YO(s,n){const t=s.length,l=t-1;return o=>{let r=0,c=!1;if(o<=s[0]?c=!0:o>=s[l]&&(r=l-1,c=!0),!c){let p=1;for(;p<t&&!(s[p]>o||p===l);p++);r=p-1}const i=f8(s[r],s[r+1],o);return n[r](i)}}function k8(s,n,{clamp:t=!0,ease:l,mixer:o}={}){const r=s.length;jl(r===n.length,"Both input and output ranges must be the same length"),jl(!l||!Array.isArray(l)||l.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),s[0]>s[r-1]&&(s=[].concat(s),n=[].concat(n),s.reverse(),n.reverse());const c=GO(n,l,o),i=r===2?KO(s,c):YO(s,c);return t?p=>i(qa(s[0],s[r-1],p)):i}const Br=s=>n=>1-s(1-n),Kc=s=>n=>n<=.5?s(2*n)/2:(2-s(2*(1-n)))/2,ZO=s=>n=>Math.pow(n,s),x8=s=>n=>n*n*((s+1)*n-s),JO=s=>{const n=x8(s);return t=>(t*=2)<1?.5*n(t):.5*(2-Math.pow(2,-10*(t-1)))},$8=1.525,XO=4/11,QO=8/11,eI=9/10,F8=s=>s,Yc=ZO(2),sI=Br(Yc),T8=Kc(Yc),S8=s=>1-Math.sin(Math.acos(s)),O8=Br(S8),nI=Kc(O8),Zc=x8($8),tI=Br(Zc),lI=Kc(Zc),oI=JO($8),rI=4356/361,aI=35442/1805,cI=16061/1805,Yo=s=>{if(s===1||s===0)return s;const n=s*s;return s<XO?7.5625*n:s<QO?9.075*n-9.9*s+3.4:s<eI?rI*n-aI*s+cI:10.8*s*s-20.52*s+10.72},iI=Br(Yo),pI=s=>s<.5?.5*(1-Yo(1-s*2)):.5*Yo(s*2-1)+.5;function uI(s,n){return s.map(()=>n||T8).splice(0,s.length-1)}function yI(s){const n=s.length;return s.map((t,l)=>l!==0?l/(n-1):0)}function dI(s,n){return s.map(t=>t*n)}function wo({from:s=0,to:n=1,ease:t,offset:l,duration:o=300}){const r={done:!1,value:s},c=Array.isArray(n)?n:[s,n],i=dI(l&&l.length===c.length?l:yI(c),o);function p(){return k8(i,c,{ease:Array.isArray(t)?t:uI(c,t)})}let u=p();return{next:y=>(r.value=u(y),r.done=y>=o,r),flipTarget:()=>{c.reverse(),u=p()}}}function fI({velocity:s=0,from:n=0,power:t=.8,timeConstant:l=350,restDelta:o=.5,modifyTarget:r}){const c={done:!1,value:n};let i=t*s;const p=n+i,u=r===void 0?p:r(p);return u!==p&&(i=u-n),{next:y=>{const d=-i*Math.exp(-y/l);return c.done=!(d>o||d<-o),c.value=c.done?u:u+d,c},flipTarget:()=>{}}}const nu={keyframes:wo,spring:Wc,decay:fI};function hI(s){if(Array.isArray(s.to))return wo;if(nu[s.type])return nu[s.type];const n=new Set(Object.keys(s));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?wo:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?Wc:wo}function I8(s,n,t=0){return s-n-t}function mI(s,n,t=0,l=!0){return l?I8(n+-s,n,t):n-(s-n)+t}function BI(s,n,t,l){return l?s>=n+t:s<=-t}const AI=s=>{const n=({delta:t})=>s(t);return{start:()=>Ua.update(n,!0),stop:()=>_O.update(n)}};function L8(s){var n,t,{from:l,autoplay:o=!0,driver:r=AI,elapsed:c=0,repeat:i=0,repeatType:p="loop",repeatDelay:u=0,onPlay:y,onStop:d,onComplete:f,onRepeat:h,onUpdate:m}=s,g=d8(s,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:C}=g,D,b=0,v=g.duration,x,$=!1,S=!0,N;const L=hI(g);!((t=(n=L).needsInterpolation)===null||t===void 0)&&t.call(n,l,C)&&(N=k8([0,100],[l,C],{clamp:!1}),l=0,C=100);const U=L(Object.assign(Object.assign({},g),{from:l,to:C}));function le(){b++,p==="reverse"?(S=b%2===0,c=mI(c,v,u,S)):(c=I8(c,v,u),p==="mirror"&&U.flipTarget()),$=!1,h&&h()}function ye(){D.stop(),f&&f()}function Z(ge){if(S||(ge=-ge),c+=ge,!$){const De=U.next(Math.max(0,c));x=De.value,N&&(x=N(x)),$=S?De.done:c<=0}m==null||m(x),$&&(b===0&&(v??(v=c)),b<i?BI(c,v,u,S)&&le():ye())}function _e(){y==null||y(),D=r(Z),D.start()}return o&&_e(),{stop:()=>{d==null||d(),D.stop()}}}function P8(s,n){return n?s*(1e3/n):0}function _I({from:s=0,velocity:n=0,min:t,max:l,power:o=.8,timeConstant:r=750,bounceStiffness:c=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:u,driver:y,onUpdate:d,onComplete:f,onStop:h}){let m;function g(v){return t!==void 0&&v<t||l!==void 0&&v>l}function C(v){return t===void 0?l:l===void 0||Math.abs(t-v)<Math.abs(l-v)?t:l}function D(v){m==null||m.stop(),m=L8(Object.assign(Object.assign({},v),{driver:y,onUpdate:x=>{var $;d==null||d(x),($=v.onUpdate)===null||$===void 0||$.call(v,x)},onComplete:f,onStop:h}))}function b(v){D(Object.assign({type:"spring",stiffness:c,damping:i,restDelta:p},v))}if(g(s))b({from:s,velocity:n,to:C(s)});else{let v=o*n+s;typeof u<"u"&&(v=u(v));const x=C(v),$=x===t?-1:1;let S,N;const L=U=>{S=N,N=U,n=P8(U-S,y8().delta),($===1&&U>x||$===-1&&U<x)&&b({from:U,to:x,velocity:n})};D({type:"decay",from:s,velocity:n,timeConstant:r,power:o,restDelta:p,modifyTarget:u,onUpdate:g(v)?L:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const M8=(s,n)=>1-3*n+3*s,j8=(s,n)=>3*n-6*s,z8=s=>3*s,Zo=(s,n,t)=>((M8(n,t)*s+j8(n,t))*s+z8(n))*s,R8=(s,n,t)=>3*M8(n,t)*s*s+2*j8(n,t)*s+z8(n),vI=1e-7,gI=10;function CI(s,n,t,l,o){let r,c,i=0;do c=n+(t-n)/2,r=Zo(c,l,o)-s,r>0?t=c:n=c;while(Math.abs(r)>vI&&++i<gI);return c}const DI=8,bI=.001;function wI(s,n,t,l){for(let o=0;o<DI;++o){const r=R8(n,t,l);if(r===0)return n;const c=Zo(n,t,l)-s;n-=c/r}return n}const Eo=11,mo=1/(Eo-1);function EI(s,n,t,l){if(s===n&&t===l)return F8;const o=new Float32Array(Eo);for(let c=0;c<Eo;++c)o[c]=Zo(c*mo,s,t);function r(c){let i=0,p=1;const u=Eo-1;for(;p!==u&&o[p]<=c;++p)i+=mo;--p;const y=(c-o[p])/(o[p+1]-o[p]),d=i+y*mo,f=R8(d,s,t);return f>=bI?wI(c,d,s,t):f===0?d:CI(c,i,i+mo,s,t)}return c=>c===0||c===1?c:Zo(r(c),n,l)}const qr={};class kI{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,t,l){if(this.subscriptions.size)for(const o of this.subscriptions)o(n,t,l)}clear(){this.subscriptions.clear()}}function tu(s){return!isNaN(parseFloat(s))}class xI{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new kI,this.canTrackVelocity=!1,this.updateAndNotify=t=>{this.prev=this.current,this.current=t;const{delta:l,timestamp:o}=y8();this.lastUpdated!==o&&(this.timeDelta=l,this.lastUpdated=o),Ua.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ua.postRender(this.velocityCheck),this.velocityCheck=({timestamp:t})=>{this.canTrackVelocity||(this.canTrackVelocity=tu(this.current)),t!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=tu(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?P8(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(t=>{const{stop:l}=n(t);this.stopAnimation=l}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function $I(s){return new xI(s)}const{isArray:FI}=Array;function TI(){const s=Y({}),n=l=>{const o=r=>{s.value[r]&&(s.value[r].stop(),s.value[r].destroy(),delete s.value[r])};l?FI(l)?l.forEach(o):o(l):Object.keys(s.value).forEach(o)},t=(l,o,r)=>{if(s.value[l])return s.value[l];const c=$I(o);return c.onChange(i=>r[l]=i),s.value[l]=c,c};return Q3(n),{motionValues:s,get:t,stop:n}}function SI(s){return Array.isArray(s)}function Xn(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Gr(s){return{type:"spring",stiffness:550,damping:s===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function OI(s){return{type:"spring",stiffness:550,damping:s===0?100:30,restDelta:.01,restSpeed:10}}function Kr(){return{type:"keyframes",ease:"linear",duration:300}}function II(s){return{type:"keyframes",duration:800,values:s}}const lu={default:OI,x:Xn,y:Xn,z:Xn,rotate:Xn,rotateX:Xn,rotateY:Xn,rotateZ:Xn,scaleX:Gr,scaleY:Gr,scale:Gr,backgroundColor:Kr,color:Kr,opacity:Kr};function H8(s,n){let t;return SI(n)?t=II:t=lu[s]||lu.default,{to:n,...t(n)}}const ou={...Zl,transform:Math.round},N8={color:As,backgroundColor:As,outlineColor:As,fill:As,stroke:As,borderColor:As,borderTopColor:As,borderRightColor:As,borderBottomColor:As,borderLeftColor:As,borderWidth:Ce,borderTopWidth:Ce,borderRightWidth:Ce,borderBottomWidth:Ce,borderLeftWidth:Ce,borderRadius:Ce,radius:Ce,borderTopLeftRadius:Ce,borderTopRightRadius:Ce,borderBottomRightRadius:Ce,borderBottomLeftRadius:Ce,width:Ce,maxWidth:Ce,height:Ce,maxHeight:Ce,size:Ce,top:Ce,right:Ce,bottom:Ce,left:Ce,padding:Ce,paddingTop:Ce,paddingRight:Ce,paddingBottom:Ce,paddingLeft:Ce,margin:Ce,marginTop:Ce,marginRight:Ce,marginBottom:Ce,marginLeft:Ce,rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scale:ho,scaleX:ho,scaleY:ho,scaleZ:ho,skew:Jn,skewX:Jn,skewY:Jn,distance:Ce,translateX:Ce,translateY:Ce,translateZ:Ce,x:Ce,y:Ce,z:Ce,perspective:Ce,transformPerspective:Ce,opacity:vl,originX:Jp,originY:Jp,originZ:Ce,zIndex:ou,filter:Za,WebkitFilter:Za,fillOpacity:vl,strokeOpacity:vl,numOctaves:ou},Jc=s=>N8[s];function V8(s,n){return n&&typeof s=="number"&&n.transform?n.transform(s):s}function LI(s,n){let t=Jc(s);return t!==Za&&(t=Jl),t.getAnimatableNone?t.getAnimatableNone(n):void 0}const PI={linear:F8,easeIn:Yc,easeInOut:T8,easeOut:sI,circIn:S8,circInOut:nI,circOut:O8,backIn:Zc,backInOut:lI,backOut:tI,anticipate:oI,bounceIn:iI,bounceInOut:pI,bounceOut:Yo};function ru(s){if(Array.isArray(s)){const[n,t,l,o]=s;return EI(n,t,l,o)}else if(typeof s=="string")return PI[s];return s}function MI(s){return Array.isArray(s)&&typeof s[0]!="number"}function au(s,n){return s==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Jl.test(n)&&!n.startsWith("url("))}function jI(s){return Array.isArray(s.to)&&s.to[0]===null&&(s.to=[...s.to],s.to[0]=s.from),s}function zI({ease:s,times:n,delay:t,...l}){const o={...l};return n&&(o.offset=n),s&&(o.ease=MI(s)?s.map(ru):ru(s)),t&&(o.elapsed=-t),o}function RI(s,n,t){return Array.isArray(n.to)&&(s.duration||(s.duration=800)),jI(n),HI(s)||(s={...s,...H8(t,n.to)}),{...n,...zI(s)}}function HI({delay:s,repeat:n,repeatType:t,repeatDelay:l,from:o,...r}){return!!Object.keys(r).length}function NI(s,n){return s[n]||s.default||s}function VI(s,n,t,l,o){const r=NI(l,s);let c=r.from===null||r.from===void 0?n.get():r.from;const i=au(s,t);c==="none"&&i&&typeof t=="string"&&(c=LI(s,t));const p=au(s,c);function u(d){const f={from:c,to:t,velocity:l.velocity?l.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return r.type==="inertia"||r.type==="decay"?_I({...f,...r}):L8({...RI(r,f,s),onUpdate:h=>{f.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{l.onComplete&&l.onComplete(),o&&o(),d&&d()}})}function y(d){return n.set(t),l.onComplete&&l.onComplete(),o&&o(),d&&d(),{stop:()=>{}}}return!p||!i||r.type===!1?y:u}function WI(){const{motionValues:s,stop:n,get:t}=TI();return{motionValues:s,stop:n,push:(o,r,c,i={},p)=>{const u=c[o],y=t(o,u,c);if(i&&i.immediate){y.set(r);return}const d=VI(o,y,r,i,p);y.start(d)}}}function UI(s,n={},{motionValues:t,push:l,stop:o}=WI()){const r=T(n),c=Y(!1);ve(t,d=>{c.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const i=d=>{if(!r||!r[d])throw new Error(`The variant ${d} does not exist.`);return r[d]},p=d=>(typeof d=="string"&&(d=i(d)),Promise.all(Object.entries(d).map(([f,h])=>{if(f!=="transition")return new Promise(m=>l(f,h,s,d.transition||H8(f,d[f]),m))}).filter(Boolean)));return{isAnimating:c,apply:p,set:d=>{const f=va(d)?d:i(d);Object.entries(f).forEach(([h,m])=>{h!=="transition"&&l(h,m,s,{immediate:!0})})},leave:async d=>{let f;if(r&&(r.leave&&(f=r.leave),!r.leave&&r.initial&&(f=r.initial)),!f){d();return}await p(f),d()},stop:o}}const Xc=typeof window<"u",qI=()=>Xc&&window.onpointerdown===null,GI=()=>Xc&&window.ontouchstart===null,KI=()=>Xc&&window.onmousedown===null;function YI({target:s,state:n,variants:t,apply:l}){const o=T(t),r=Y(!1),c=Y(!1),i=Y(!1),p=O(()=>{let y=[];return o&&(o.hovered&&(y=[...y,...Object.keys(o.hovered)]),o.tapped&&(y=[...y,...Object.keys(o.tapped)]),o.focused&&(y=[...y,...Object.keys(o.focused)])),y}),u=O(()=>{const y={};Object.assign(y,n.value),r.value&&o.hovered&&Object.assign(y,o.hovered),c.value&&o.tapped&&Object.assign(y,o.tapped),i.value&&o.focused&&Object.assign(y,o.focused);for(const d in y)p.value.includes(d)||delete y[d];return y});o.hovered&&(be(s,"mouseenter",()=>r.value=!0),be(s,"mouseleave",()=>{r.value=!1,c.value=!1}),be(s,"mouseout",()=>{r.value=!1,c.value=!1})),o.tapped&&(KI()&&(be(s,"mousedown",()=>c.value=!0),be(s,"mouseup",()=>c.value=!1)),qI()&&(be(s,"pointerdown",()=>c.value=!0),be(s,"pointerup",()=>c.value=!1)),GI()&&(be(s,"touchstart",()=>c.value=!0),be(s,"touchend",()=>c.value=!1))),o.focused&&(be(s,"focus",()=>i.value=!0),be(s,"blur",()=>i.value=!1)),ve(u,l)}function ZI({set:s,target:n,variants:t,variant:l}){const o=T(t);ve(()=>n,()=>{o&&(o.initial&&s("initial"),o.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function JI({state:s,apply:n}){ve(s,t=>{t&&n(t)},{immediate:!0})}function XI({target:s,variants:n,variant:t}){const l=T(n);l&&(l.visible||l.visibleOnce)&&qB(s,([{isIntersecting:o}])=>{l.visible?o?t.value="visible":t.value="initial":l.visibleOnce&&(o&&t.value!=="visibleOnce"?t.value="visibleOnce":t.value||(t.value="initial"))})}function QI(s,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&ZI(s),n.syncVariants&&JI(s),n.visibilityHooks&&XI(s),n.eventListeners&&YI(s)}function W8(s={}){const n=qe({...s}),t=Y({});return ve(n,()=>{const l={};for(const[o,r]of Object.entries(n)){const c=Jc(o),i=V8(r,c);l[o]=i}t.value=l},{immediate:!0,deep:!0}),{state:n,style:t}}function Qc(s,n){ve(()=>rs(s),t=>{t&&n(t)},{immediate:!0})}const eL={x:"translateX",y:"translateY",z:"translateZ"};function U8(s={},n=!0){const t=qe({...s}),l=Y("");return ve(t,o=>{let r="",c=!1;if(n&&(o.x||o.y||o.z)){const i=[o.x||0,o.y||0,o.z||0].map(Ce.transform).join(",");r+=`translate3d(${i}) `,c=!0}for(const[i,p]of Object.entries(o)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=Jc(i),y=V8(p,u);r+=`${eL[i]||i}(${y}) `}n&&!c&&(r+="translateZ(0px) "),l.value=r.trim()},{immediate:!0,deep:!0}),{state:t,transform:l}}const sL=["","X","Y","Z"],nL=["perspective","translate","scale","rotate","skew"],q8=["transformPerspective","x","y","z"];nL.forEach(s=>{sL.forEach(n=>{const t=s+n;q8.push(t)})});const tL=new Set(q8);function ei(s){return tL.has(s)}const lL=new Set(["originX","originY","originZ"]);function G8(s){return lL.has(s)}function oL(s){const n={},t={};return Object.entries(s).forEach(([l,o])=>{ei(l)||G8(l)?n[l]=o:t[l]=o}),{transform:n,style:t}}function K8(s){const{transform:n,style:t}=oL(s),{transform:l}=U8(n),{style:o}=W8(t);return l.value&&(o.value.transform=l.value),o.value}function rL(s,n){let t,l;const{state:o,style:r}=W8();return Qc(s,c=>{l=c;for(const i of Object.keys(N8))c.style[i]===null||c.style[i]===""||ei(i)||G8(i)||(o[i]=c.style[i]);t&&Object.entries(t).forEach(([i,p])=>c.style[i]=p),n&&n(o)}),ve(r,c=>{if(!l){t=c;return}for(const i in c)l.style[i]=c[i]},{immediate:!0}),{style:o}}function aL(s){const n=s.trim().split(/\) |\)/);if(n.length===1)return{};const t=l=>l.endsWith("px")||l.endsWith("deg")?parseFloat(l):isNaN(Number(l))?Number(l):l;return n.reduce((l,o)=>{if(!o)return l;const[r,c]=o.split("("),p=c.split(",").map(y=>t(y.endsWith(")")?y.replace(")",""):y.trim())),u=p.length===1?p[0]:p;return{...l,[r]:u}},{})}function cL(s,n){Object.entries(aL(n)).forEach(([t,l])=>{const o=["x","y","z"];if(t==="translate3d"){if(l===0){o.forEach(r=>s[r]=0);return}l.forEach((r,c)=>s[o[c]]=r);return}if(l=parseFloat(l),t==="translateX"){s.x=l;return}if(t==="translateY"){s.y=l;return}if(t==="translateZ"){s.z=l;return}s[t]=l})}function iL(s,n){let t,l;const{state:o,transform:r}=U8();return Qc(s,c=>{l=c,c.style.transform&&cL(o,c.style.transform),t&&(c.style.transform=t),n&&n(o)}),ve(r,c=>{if(!l){t=c;return}l.style.transform=c},{immediate:!0}),{transform:o}}function pL(s,n){const t=qe({}),l=c=>Object.entries(c).forEach(([i,p])=>t[i]=p),{style:o}=rL(s,l),{transform:r}=iL(s,l);return ve(t,c=>{Object.entries(c).forEach(([i,p])=>{const u=ei(i)?r:o;u[i]&&u[i]===p||(u[i]=p)})},{immediate:!0,deep:!0}),Qc(s,()=>n&&l(n)),{motionProperties:t,style:o,transform:r}}function uL(s={}){const n=T(s),t=Y();return{state:O(()=>{if(t.value)return n[t.value]}),variant:t}}function Y8(s,n={},t){const{motionProperties:l}=pL(s),{variant:o,state:r}=uL(n),c=UI(l,n),i={target:s,variant:o,variants:n,state:r,motionProperties:l,...c};return QI(i,t),i}const yL=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function dL(s,n){const t=s.props?s.props:s.data&&s.data.attrs?s.data.attrs:{};t&&(t.variants&&va(t.variants)&&(n.value={...n.value,...t.variants}),yL.forEach(l=>{if(l==="delay"){if(t&&t[l]&&typeof t[l]=="number"){const o=t[l];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:o,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:o,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:o,...n.value.visibleOnce.transition}))}return}l==="visible-once"&&(l="visibleOnce"),t&&t[l]&&va(t[l])&&(n.value[l]=t[l])}))}function Yr(s){return{created:(t,l,o)=>{const r=l.value&&typeof l.value=="string"?l.value:o.key;r&&qr[r]&&qr[r].stop();const c=Y(s||{});typeof l.value=="object"&&(c.value=l.value),dL(o,c);const i=Y8(t,c);t.motionInstance=i,r&&(qr[r]=i)},getSSRProps(t,l){let{initial:o}=t.value||l&&(l==null?void 0:l.props)||{};o=T(o);const r=hO((s==null?void 0:s.initial)||{},o||{});return!r||Object.keys(r).length===0?void 0:{style:K8(r)}}}}const fL={initial:{opacity:0},enter:{opacity:1}},hL={initial:{opacity:0},visible:{opacity:1}},mL={initial:{opacity:0},visibleOnce:{opacity:1}},BL={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},AL={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},_L={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},vL={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},gL={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},CL={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},DL={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},bL={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},wL={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},EL={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},kL={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},xL={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},$L={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},FL={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},TL={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},SL={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},OL={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},IL={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},LL={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},PL={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},ML={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},jL={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},zL={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},RL={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},HL={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},NL={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},VL={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ja={__proto__:null,fade:fL,fadeVisible:hL,fadeVisibleOnce:mL,pop:BL,popVisible:AL,popVisibleOnce:_L,rollBottom:$L,rollLeft:vL,rollRight:DL,rollTop:EL,rollVisibleBottom:FL,rollVisibleLeft:gL,rollVisibleOnceBottom:TL,rollVisibleOnceLeft:CL,rollVisibleOnceRight:wL,rollVisibleOnceTop:xL,rollVisibleRight:bL,rollVisibleTop:kL,slideBottom:HL,slideLeft:SL,slideRight:LL,slideTop:jL,slideVisibleBottom:NL,slideVisibleLeft:OL,slideVisibleOnceBottom:VL,slideVisibleOnceLeft:IL,slideVisibleOnceRight:ML,slideVisibleOnceTop:RL,slideVisibleRight:PL,slideVisibleTop:zL},WL=$e({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(s){var i;const n=Yh(),t=qe({});if(!s.is&&!n.default)return()=>hs("div",{});const l=O(()=>{let p;return s.preset&&(p=Ja[s.preset]),p}),o=O(()=>({initial:s.initial,enter:s.enter,leave:s.leave,visible:s.visible,visibleOnce:s.visibleOnce,hovered:s.hovered,tapped:s.tapped,focused:s.focused})),r=O(()=>{const p={...o.value,...l.value||{},...s.variants||{}};return s.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(s.delay)),p}),c=O(()=>{if(!s.is)return;let p=s.is;return typeof c.value=="string"&&!Eu(p)&&(p=He(p)),p});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const p=u=>{var y;(y=u.variants)!=null&&y.initial&&u.set("initial"),setTimeout(()=>{var d,f,h;(d=u.variants)!=null&&d.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};ir(()=>Object.entries(t).forEach(([u,y])=>p(y)))}return{slots:n,component:c,motionConfig:r,instances:t}},render({slots:s,motionConfig:n,instances:t,component:l}){var i;const o=K8(n.initial||{}),r=(p,u)=>(p.props||(p.props={}),p.props.style=o,p.props.onVnodeMounted=({el:y})=>{const d=Y8(y,n);t[u]=d},p);if(l){const p=hs(l,void 0,s);return r(p,0),p}return(((i=s.default)==null?void 0:i.call(s))||[]).map((p,u)=>r(p,u))}});function UL(s){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",t="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",l=new RegExp(n.split("").join("|"),"g");return s.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(l,o=>t.charAt(n.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const qL={install(s,n){if(s.directive("motion",Yr()),s.component("Motion",WL),!n||n&&!n.excludePresets)for(const t in Ja){const l=Ja[t];s.directive(`motion-${UL(t)}`,Yr(l))}if(n&&n.directives)for(const t in n.directives){const l=n.directives[t];l.initial,s.directive(`motion-${t}`,Yr(l))}}};var cu;const Cl=typeof window<"u",GL=Object.prototype.toString,KL=s=>GL.call(s)==="[object Object]";Cl&&((cu=window==null?void 0:window.navigator)!=null&&cu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function YL(s){return tc()?(Fu(s),!0):!1}function ZL(s){var n;const t=T(s);return(n=t==null?void 0:t.$el)!=null?n:t}const JL=Cl?window:void 0,iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pu="__vueuse_ssr_handlers__";iu[pu]=iu[pu]||{};function XL(s,n={}){const{immediate:t=!0,window:l=JL}=n,o=Y(!1);let r=null;function c(){!o.value||!l||(s(),r=l.requestAnimationFrame(c))}function i(){!o.value&&l&&(o.value=!0,c())}function p(){o.value=!1,r!=null&&l&&(l.cancelAnimationFrame(r),r=null)}return t&&i(),YL(p),{isActive:o,pause:p,resume:i}}var uu;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(uu||(uu={}));const Ar="vue-starport-injection",Z8="vue-starport-options",QL={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},J8={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var eP=Object.defineProperty,Jo=Object.getOwnPropertySymbols,X8=Object.prototype.hasOwnProperty,Q8=Object.prototype.propertyIsEnumerable,yu=(s,n,t)=>n in s?eP(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,sP=(s,n)=>{for(var t in n||(n={}))X8.call(n,t)&&yu(s,t,n[t]);if(Jo)for(var t of Jo(n))Q8.call(n,t)&&yu(s,t,n[t]);return s},du=(s,n)=>{var t={};for(var l in s)X8.call(s,l)&&n.indexOf(l)<0&&(t[l]=s[l]);if(s!=null&&Jo)for(var l of Jo(s))n.indexOf(l)<0&&Q8.call(s,l)&&(t[l]=s[l]);return t};const nP=$e({name:"StarportProxy",props:sP({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},J8),setup(s,n){const t=P(Ar),l=O(()=>t.getInstance(s.port,s.component)),o=Y(),r=l.value.generateId(),c=Y(!1);return l.value.isVisible||(l.value.land(),c.value=!0),Wn(async()=>{if(l.value.el){console.error(`[Vue Starport] Multiple proxies of "${l.value.componentName}" with port "${s.port}" detected. The later one will be ignored.`);return}if(l.value.el=o.value,await os(),c.value=!0,l.value.rect.update(),l.value.rect.width===0||l.value.rect.height===0){const i=l.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${l.value.componentName}" (port "${s.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",l.value.el),console.warn("rect:",l.value.rect)}}),Vl(async()=>{l.value.rect.update(),l.value.liftOff(),l.value.el=void 0,c.value=!1,!l.value.options.keepAlive&&(await os(),await os(),!l.value.el&&t.dispose(l.value.port))}),ve(()=>s,async()=>{l.value.props&&await os();const i=s,{props:p}=i,u=du(i,["props"]);l.value.props=p||{},l.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=s,{initialProps:p,mountedProps:u}=i,y=du(i,["initialProps","mountedProps"]),d=oe(y,(c.value?u:p)||{});return hs("div",oe(d,{id:r,ref:o,"data-starport-proxy":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true"}),n.slots.default?hs(n.slots.default):void 0)}}});var tP=Object.defineProperty,lP=Object.defineProperties,oP=Object.getOwnPropertyDescriptors,fu=Object.getOwnPropertySymbols,rP=Object.prototype.hasOwnProperty,aP=Object.prototype.propertyIsEnumerable,hu=(s,n,t)=>n in s?tP(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,cP=(s,n)=>{for(var t in n||(n={}))rP.call(n,t)&&hu(s,t,n[t]);if(fu)for(var t of fu(n))aP.call(n,t)&&hu(s,t,n[t]);return s},iP=(s,n)=>lP(s,oP(n));const pP=$e({name:"Starport",inheritAttrs:!0,props:J8,setup(s,n){const t=Y(!1);return Wn(()=>{if(t.value=!0,!P(Ar))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var c,i;const l=(i=(c=n.slots).default)==null?void 0:i.call(c);if(!l)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(l.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${l.length}`);const o=l[0];let r=o.type;return(!KL(r)||Hn(r))&&(r={render(){return l}}),hs(nP,iP(cP({},s),{key:s.port,component:tr(r),props:o.props}))}}});function uP(s){const n=qe({height:0,width:0,left:0,top:0,update:l,listen:r,pause:c,margin:"0px",padding:"0px"}),t=Cl?document.documentElement||document.body:void 0;function l(){if(!Cl)return;const i=ZL(s);if(!i)return;const{height:p,width:u,left:y,top:d}=i.getBoundingClientRect(),f=window.getComputedStyle(i),h=f.margin,m=f.padding;Object.assign(n,{height:p,width:u,left:y,top:t.scrollTop+d,margin:h,padding:m})}const o=XL(l,{immediate:!1});function r(){Cl&&(l(),o.resume())}function c(){o.pause()}return n}let yP=(s,n=21)=>(t=n)=>{let l="",o=t;for(;o--;)l+=s[Math.random()*s.length|0];return l};const mu=yP("abcdefghijklmnopqrstuvwxyz",5);function Bu(s){return s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function dP(s){var n;return s.name||((n=s.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var fP=Object.defineProperty,Au=Object.getOwnPropertySymbols,hP=Object.prototype.hasOwnProperty,mP=Object.prototype.propertyIsEnumerable,_u=(s,n,t)=>n in s?fP(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,Zr=(s,n)=>{for(var t in n||(n={}))hP.call(n,t)&&_u(s,t,n[t]);if(Au)for(var t of Au(n))mP.call(n,t)&&_u(s,t,n[t]);return s};function BP(s,n,t={}){const l=dP(n),o=Bu(l)||mu(),r=Y(),c=Y(null),i=Y(!1),p=Y(!1),u=Af(!0),y=Y({}),d=O(()=>Zr(Zr(Zr({},QL),t),y.value)),f=Y(0);let h;u.run(()=>{h=uP(r),ve(r,async D=>{D&&(p.value=!0),await os(),r.value||(p.value=!1)})});const m=Bu(s);function g(){return`starport-${o}-${m}-${mu()}`}const C=g();return qe({el:r,id:C,port:s,props:c,rect:h,scope:u,isLanded:i,isVisible:p,options:d,liftOffTime:f,component:n,componentName:l,componentId:o,generateId:g,setLocalOptions(D={}){y.value=JSON.parse(JSON.stringify(D))},elRef(){return r},liftOff(){i.value&&(i.value=!1,f.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function AP(s){const n=qe(new Map);function t(o,r){let c=n.get(o);return c||(c=BP(o,r,s),n.set(o,c)),c.component=r,c}function l(o){var r;(r=n.get(o))==null||r.scope.stop(),n.delete(o)}return{portMap:n,dispose:l,getInstance:t}}var _P=Object.defineProperty,vP=Object.defineProperties,gP=Object.getOwnPropertyDescriptors,vu=Object.getOwnPropertySymbols,CP=Object.prototype.hasOwnProperty,DP=Object.prototype.propertyIsEnumerable,gu=(s,n,t)=>n in s?_P(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,bP=(s,n)=>{for(var t in n||(n={}))CP.call(n,t)&&gu(s,t,n[t]);if(vu)for(var t of vu(n))DP.call(n,t)&&gu(s,t,n[t]);return s},wP=(s,n)=>vP(s,gP(n));const EP=$e({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(s){const n=P(Ar);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const t=O(()=>n.getInstance(s.port,s.component)),l=O(()=>{var c;return((c=t.value.el)==null?void 0:c.id)||t.value.id}),o=O(()=>{const c=Date.now()-t.value.liftOffTime,i=Math.max(0,t.value.options.duration-c),p=t.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!t.value.isVisible||!t.value.el?wP(bP({},u),{zIndex:-1,display:"none"}):(t.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:t.value.options.easing}),u)}),r={onTransitionend(c){t.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${t.value.componentName}" is too short (${c.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${t.value.options.duration/1e3}s).`)}};return()=>{const c=!!(t.value.isLanded&&t.value.el);return hs("div",{style:o.value,"data-starport-craft":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true",onTransitionend:t.value.land},hs(Dm,{to:c?`#${l.value}`:"body",disabled:!c},hs(t.value.component,oe(r,t.value.props))))}}}),kP=$e({name:"StarportCarrier",setup(s,{slots:n}){const t=AP(P(Z8,{}));return Fs().appContext.app.provide(Ar,t),()=>{var o;return[(o=n.default)==null?void 0:o.call(n),Array.from(t.portMap.entries()).map(([r,{component:c}])=>hs(EP,{key:r,port:r,component:c}))]}}});function xP(s={}){return{install(n){n.provide(Z8,s),n.component("Starport",pP),n.component("StarportCarrier",kP)}}}function $P(s){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),s.app.use(qL),s.app.use(xP({keepAlive:!0}))}function Ds(s,n,t){var l;return((l=s.instance)==null?void 0:l.$).provides[n]??t}function FP(){return{install(s){s.directive("click",{name:"v-click",mounted(n,t){var y,d,f,h,m,g;if(Al.value||(y=Ds(t,fl))!=null&&y.value)return;const l=Ds(t,lt),o=Ds(t,dl),r=Ds(t,Aa),c=t.modifiers.hide!==!1&&t.modifiers.hide!=null,i=t.modifiers.fade!==!1&&t.modifiers.fade!=null,p=((d=l==null?void 0:l.value)==null?void 0:d.length)||0,u=i?A3:Fr;if(l&&!((f=l==null?void 0:l.value)!=null&&f.includes(n))&&l.value.push(n),t.value==null&&(t.value=(h=l==null?void 0:l.value)==null?void 0:h.length),typeof t.value=="string"&&(t.value.startsWith("+")||t.value.startsWith("-"))&&(t.value=(((m=l==null?void 0:l.value)==null?void 0:m.length)||0)+Number(t.value)),!(r!=null&&r.value.has(t.value)))r==null||r.value.set(t.value,[n]);else if(!((g=r==null?void 0:r.value.get(t.value))!=null&&g.includes(n))){const C=(r==null?void 0:r.value.get(t.value))||[];r==null||r.value.set(t.value,[n].concat(C))}n==null||n.classList.toggle(et,!0),o&&ve(o,()=>{const C=(o==null?void 0:o.value)??0,D=t.value!=null?C>=t.value:C>p;n.classList.contains(Tr)||n.classList.toggle(u,!D),c!==!1&&c!==void 0&&n.classList.toggle(u,D),n.classList.toggle(Zt,!1);const b=r==null?void 0:r.value.get(C);b==null||b.forEach((v,x)=>{v.classList.toggle(co,!1),x===b.length-1?v.classList.toggle(Zt,!0):v.classList.toggle(co,!0)}),n.classList.contains(Zt)||n.classList.toggle(co,D)},{immediate:!0})},unmounted(n,t){n==null||n.classList.toggle(et,!1);const l=Ds(t,lt);l!=null&&l.value&&_a(l.value,n)}}),s.directive("after",{name:"v-after",mounted(n,t){var i,p,u;if(Al.value||(i=Ds(t,fl))!=null&&i.value)return;const l=Ds(t,lt),o=Ds(t,dl),r=Ds(t,Aa),c=l==null?void 0:l.value.length;t.value==null&&(t.value=l==null?void 0:l.value.length),typeof t.value=="string"&&(t.value.startsWith("+")||t.value.startsWith("-"))&&(t.value=(((p=l==null?void 0:l.value)==null?void 0:p.length)||0)+Number(t.value)),r!=null&&r.value.has(t.value)?(u=r==null?void 0:r.value.get(t.value))==null||u.push(n):r==null||r.value.set(t.value,[n]),n==null||n.classList.toggle(et,!0),o&&ve(o,()=>{const y=(o.value??0)>=(t.value??c??0);n.classList.contains(Tr)||n.classList.toggle(Fr,!y),n.classList.toggle(Zt,!1),n.classList.contains(Zt)||n.classList.toggle(co,y)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(et,!0)}}),s.directive("click-hide",{name:"v-click-hide",mounted(n,t){var c,i,p;if(Al.value||(c=Ds(t,fl))!=null&&c.value)return;const l=Ds(t,lt),o=Ds(t,dl),r=((i=l==null?void 0:l.value)==null?void 0:i.length)||0;l&&!((p=l==null?void 0:l.value)!=null&&p.includes(n))&&l.value.push(n),n==null||n.classList.toggle(et,!0),o&&ve(o,()=>{const u=(o==null?void 0:o.value)??0,y=t.value!=null?u>=t.value:u>r;n.classList.toggle(Fr,y),n.classList.toggle(Tr,y)},{immediate:!0})},unmounted(n,t){n==null||n.classList.toggle(et,!1);const l=Ds(t,lt);l!=null&&l.value&&_a(l.value,n)}})}}}function TP(s,n){const t=e8(s),l=s8(n,t.currentRoute,t.currentPage);return{nav:{...t,...l},configs:Se,themeConfigs:O(()=>Se.themeConfig)}}function SP(){return{install(s){const n=TP(Rs,Ps);s.provide(R,qe(n))}}}const Wt=g5(dO);Wt.use(gs);Wt.use(h3());Wt.use(FP());Wt.use(SP());$P({app:Wt,router:gs});Wt.mount("#app");export{JC as $,nC as A,Y as B,jP as C,ys as D,We as E,Te as F,Cv as G,rO as H,Ps as I,Ko as J,sO as K,Hr as L,Wn as M,qe as N,PP as O,zP as P,ve as Q,w as R,Id as S,Oe as T,us as U,Lv as V,OP as W,IP as X,Sl as Y,Mr as Z,H as _,R as a,Fc as a0,Tc as a1,OC as a2,Ge as a3,P1 as a4,LP as a5,zs as a6,tl as a7,fo as a8,it as a9,nn as aa,Ta as ab,iv as ac,pv as ad,uv as ae,dv as af,js as ag,jy as ah,RP as ai,ms as aj,Bg as ak,Yy as al,fv as am,Vl as an,Ky as b,Se as c,$e as d,th as e,E as f,e as g,T as h,P as i,Ze as j,JS as k,a as l,k as m,es as n,A as o,he as p,bc as q,bt as r,Ys as s,Cs as t,MP as u,O as v,Sr as w,z as x,Ed as y,aC as z};
