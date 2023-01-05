const Dd=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}};Dd();function Fl(e,n){const s=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)s[r[o]]=!0;return n?o=>!!s[o.toLowerCase()]:o=>!!s[o]}const Sd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Td=Fl(Sd);function Mc(e){return!!e||e===""}function Je(e){if(oe(e)){const n={};for(let s=0;s<e.length;s++){const r=e[s],o=He(r)?Fd(r):Je(r);if(o)for(const l in o)n[l]=o[l]}return n}else{if(He(e))return e;if(qe(e))return e}}const Od=/;(?![^(]*\))/g,Nd=/:(.+)/;function Fd(e){const n={};return e.split(Od).forEach(s=>{if(s){const r=s.split(Nd);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Le(e){let n="";if(He(e))n=e;else if(oe(e))for(let s=0;s<e.length;s++){const r=Le(e[s]);r&&(n+=r+" ")}else if(qe(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function X(e){if(!e)return null;let{class:n,style:s}=e;return n&&!He(n)&&(e.class=Le(n)),s&&(e.style=Je(s)),e}const kt=e=>He(e)?e:e==null?"":oe(e)||qe(e)&&(e.toString===Rc||!ue(e.toString))?JSON.stringify(e,Pc,2):String(e),Pc=(e,n)=>n&&n.__v_isRef?Pc(e,n.value):Xn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[r,o])=>(s[`${r} =>`]=o,s),{})}:Ic(n)?{[`Set(${n.size})`]:[...n.values()]}:qe(n)&&!oe(n)&&!Hc(n)?String(n):n,Ne={},Qn=[],Ot=()=>{},Md=()=>!1,Pd=/^on[^a-z]/,Kr=e=>Pd.test(e),Ml=e=>e.startsWith("onUpdate:"),lt=Object.assign,Pl=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},Id=Object.prototype.hasOwnProperty,_e=(e,n)=>Id.call(e,n),oe=Array.isArray,Xn=e=>Yr(e)==="[object Map]",Ic=e=>Yr(e)==="[object Set]",ue=e=>typeof e=="function",He=e=>typeof e=="string",Il=e=>typeof e=="symbol",qe=e=>e!==null&&typeof e=="object",Lc=e=>qe(e)&&ue(e.then)&&ue(e.catch),Rc=Object.prototype.toString,Yr=e=>Rc.call(e),Ld=e=>Yr(e).slice(8,-1),Hc=e=>Yr(e)==="[object Object]",Ll=e=>He(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ar=Fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},Rd=/-(\w)/g,Vt=Gr(e=>e.replace(Rd,(n,s)=>s?s.toUpperCase():"")),Hd=/\B([A-Z])/g,Pn=Gr(e=>e.replace(Hd,"-$1").toLowerCase()),Zr=Gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),yo=Gr(e=>e?`on${Zr(e)}`:""),Us=(e,n)=>!Object.is(e,n),Jn=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},Tr=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},Vo=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Ta;const jd=()=>Ta||(Ta=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ft;class jc{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&ft&&(this.parent=ft,this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}run(n){if(this.active){const s=ft;try{return ft=this,n()}finally{ft=s}}}on(){ft=this}off(){ft=this.parent}stop(n){if(this.active){let s,r;for(s=0,r=this.effects.length;s<r;s++)this.effects[s].stop();for(s=0,r=this.cleanups.length;s<r;s++)this.cleanups[s]();if(this.scopes)for(s=0,r=this.scopes.length;s<r;s++)this.scopes[s].stop(!0);if(this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function zd(e){return new jc(e)}function Vd(e,n=ft){n&&n.active&&n.effects.push(e)}function Ud(){return ft}function qd(e){ft&&ft.cleanups.push(e)}const Rl=e=>{const n=new Set(e);return n.w=0,n.n=0,n},zc=e=>(e.w&yn)>0,Vc=e=>(e.n&yn)>0,Wd=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=yn},Kd=e=>{const{deps:n}=e;if(n.length){let s=0;for(let r=0;r<n.length;r++){const o=n[r];zc(o)&&!Vc(o)?o.delete(e):n[s++]=o,o.w&=~yn,o.n&=~yn}n.length=s}},Uo=new WeakMap;let ks=0,yn=1;const qo=30;let St;const Tn=Symbol(""),Wo=Symbol("");class Hl{constructor(n,s=null,r){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Vd(this,r)}run(){if(!this.active)return this.fn();let n=St,s=un;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=St,St=this,un=!0,yn=1<<++ks,ks<=qo?Wd(this):Oa(this),this.fn()}finally{ks<=qo&&Kd(this),yn=1<<--ks,St=this.parent,un=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(Oa(this),this.onStop&&this.onStop(),this.active=!1)}}function Oa(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let un=!0;const Uc=[];function us(){Uc.push(un),un=!1}function ps(){const e=Uc.pop();un=e===void 0?!0:e}function bt(e,n,s){if(un&&St){let r=Uo.get(e);r||Uo.set(e,r=new Map);let o=r.get(s);o||r.set(s,o=Rl()),qc(o)}}function qc(e,n){let s=!1;ks<=qo?Vc(e)||(e.n|=yn,s=!zc(e)):s=!e.has(St),s&&(e.add(St),St.deps.push(e))}function Qt(e,n,s,r,o,l){const a=Uo.get(e);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&oe(e))a.forEach((c,u)=>{(u==="length"||u>=r)&&i.push(c)});else switch(s!==void 0&&i.push(a.get(s)),n){case"add":oe(e)?Ll(s)&&i.push(a.get("length")):(i.push(a.get(Tn)),Xn(e)&&i.push(a.get(Wo)));break;case"delete":oe(e)||(i.push(a.get(Tn)),Xn(e)&&i.push(a.get(Wo)));break;case"set":Xn(e)&&i.push(a.get(Tn));break}if(i.length===1)i[0]&&Ko(i[0]);else{const c=[];for(const u of i)u&&c.push(...u);Ko(Rl(c))}}function Ko(e,n){const s=oe(e)?e:[...e];for(const r of s)r.computed&&Na(r);for(const r of s)r.computed||Na(r)}function Na(e,n){(e!==St||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Yd=Fl("__proto__,__v_isRef,__isVue"),Wc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Il)),Gd=jl(),Zd=jl(!1,!0),Qd=jl(!0),Fa=Xd();function Xd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const r=Ae(this);for(let l=0,a=this.length;l<a;l++)bt(r,"get",l+"");const o=r[n](...s);return o===-1||o===!1?r[n](...s.map(Ae)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){us();const r=Ae(this)[n].apply(this,s);return ps(),r}}),e}function jl(e=!1,n=!1){return function(r,o,l){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&l===(e?n?mf:Qc:n?Zc:Gc).get(r))return r;const a=oe(r);if(!e&&a&&_e(Fa,o))return Reflect.get(Fa,o,l);const i=Reflect.get(r,o,l);return(Il(o)?Wc.has(o):Yd(o))||(e||bt(r,"get",o),n)?i:ke(i)?a&&Ll(o)?i:i.value:qe(i)?e?Gn(i):Ie(i):i}}const Jd=Kc(),ef=Kc(!0);function Kc(e=!1){return function(s,r,o,l){let a=s[r];if(qs(a)&&ke(a)&&!ke(o))return!1;if(!e&&!qs(o)&&(Yo(o)||(o=Ae(o),a=Ae(a)),!oe(s)&&ke(a)&&!ke(o)))return a.value=o,!0;const i=oe(s)&&Ll(r)?Number(r)<s.length:_e(s,r),c=Reflect.set(s,r,o,l);return s===Ae(l)&&(i?Us(o,a)&&Qt(s,"set",r,o):Qt(s,"add",r,o)),c}}function tf(e,n){const s=_e(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Qt(e,"delete",n,void 0),r}function nf(e,n){const s=Reflect.has(e,n);return(!Il(n)||!Wc.has(n))&&bt(e,"has",n),s}function sf(e){return bt(e,"iterate",oe(e)?"length":Tn),Reflect.ownKeys(e)}const Yc={get:Gd,set:Jd,deleteProperty:tf,has:nf,ownKeys:sf},rf={get:Qd,set(e,n){return!0},deleteProperty(e,n){return!0}},of=lt({},Yc,{get:Zd,set:ef}),zl=e=>e,Qr=e=>Reflect.getPrototypeOf(e);function dr(e,n,s=!1,r=!1){e=e.__v_raw;const o=Ae(e),l=Ae(n);s||(n!==l&&bt(o,"get",n),bt(o,"get",l));const{has:a}=Qr(o),i=r?zl:s?ql:Ws;if(a.call(o,n))return i(e.get(n));if(a.call(o,l))return i(e.get(l));e!==o&&e.get(n)}function fr(e,n=!1){const s=this.__v_raw,r=Ae(s),o=Ae(e);return n||(e!==o&&bt(r,"has",e),bt(r,"has",o)),e===o?s.has(e):s.has(e)||s.has(o)}function hr(e,n=!1){return e=e.__v_raw,!n&&bt(Ae(e),"iterate",Tn),Reflect.get(e,"size",e)}function Ma(e){e=Ae(e);const n=Ae(this);return Qr(n).has.call(n,e)||(n.add(e),Qt(n,"add",e,e)),this}function Pa(e,n){n=Ae(n);const s=Ae(this),{has:r,get:o}=Qr(s);let l=r.call(s,e);l||(e=Ae(e),l=r.call(s,e));const a=o.call(s,e);return s.set(e,n),l?Us(n,a)&&Qt(s,"set",e,n):Qt(s,"add",e,n),this}function Ia(e){const n=Ae(this),{has:s,get:r}=Qr(n);let o=s.call(n,e);o||(e=Ae(e),o=s.call(n,e)),r&&r.call(n,e);const l=n.delete(e);return o&&Qt(n,"delete",e,void 0),l}function La(){const e=Ae(this),n=e.size!==0,s=e.clear();return n&&Qt(e,"clear",void 0,void 0),s}function mr(e,n){return function(r,o){const l=this,a=l.__v_raw,i=Ae(a),c=n?zl:e?ql:Ws;return!e&&bt(i,"iterate",Tn),a.forEach((u,p)=>r.call(o,c(u),c(p),l))}}function yr(e,n,s){return function(...r){const o=this.__v_raw,l=Ae(o),a=Xn(l),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=o[e](...r),p=s?zl:n?ql:Ws;return!n&&bt(l,"iterate",c?Wo:Tn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:i?[p(h[0]),p(h[1])]:p(h),done:f}},[Symbol.iterator](){return this}}}}function sn(e){return function(...n){return e==="delete"?!1:this}}function lf(){const e={get(l){return dr(this,l)},get size(){return hr(this)},has:fr,add:Ma,set:Pa,delete:Ia,clear:La,forEach:mr(!1,!1)},n={get(l){return dr(this,l,!1,!0)},get size(){return hr(this)},has:fr,add:Ma,set:Pa,delete:Ia,clear:La,forEach:mr(!1,!0)},s={get(l){return dr(this,l,!0)},get size(){return hr(this,!0)},has(l){return fr.call(this,l,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:mr(!0,!1)},r={get(l){return dr(this,l,!0,!0)},get size(){return hr(this,!0)},has(l){return fr.call(this,l,!0)},add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear"),forEach:mr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=yr(l,!1,!1),s[l]=yr(l,!0,!1),n[l]=yr(l,!1,!0),r[l]=yr(l,!0,!0)}),[e,s,n,r]}const[af,cf,uf,pf]=lf();function Vl(e,n){const s=n?e?pf:uf:e?cf:af;return(r,o,l)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(_e(s,o)&&o in r?s:r,o,l)}const df={get:Vl(!1,!1)},ff={get:Vl(!1,!0)},hf={get:Vl(!0,!1)},Gc=new WeakMap,Zc=new WeakMap,Qc=new WeakMap,mf=new WeakMap;function yf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gf(e){return e.__v_skip||!Object.isExtensible(e)?0:yf(Ld(e))}function Ie(e){return qs(e)?e:Ul(e,!1,Yc,df,Gc)}function _f(e){return Ul(e,!1,of,ff,Zc)}function Gn(e){return Ul(e,!0,rf,hf,Qc)}function Ul(e,n,s,r,o){if(!qe(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const l=o.get(e);if(l)return l;const a=gf(e);if(a===0)return e;const i=new Proxy(e,a===2?r:s);return o.set(e,i),i}function es(e){return qs(e)?es(e.__v_raw):!!(e&&e.__v_isReactive)}function qs(e){return!!(e&&e.__v_isReadonly)}function Yo(e){return!!(e&&e.__v_isShallow)}function Xc(e){return es(e)||qs(e)}function Ae(e){const n=e&&e.__v_raw;return n?Ae(n):e}function Xr(e){return Tr(e,"__v_skip",!0),e}const Ws=e=>qe(e)?Ie(e):e,ql=e=>qe(e)?Gn(e):e;function Wl(e){un&&St&&(e=Ae(e),qc(e.dep||(e.dep=Rl())))}function Kl(e,n){e=Ae(e),e.dep&&Ko(e.dep)}function ke(e){return!!(e&&e.__v_isRef===!0)}function q(e){return Jc(e,!1)}function Ut(e){return Jc(e,!0)}function Jc(e,n){return ke(e)?e:new vf(e,n)}class vf{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:Ae(n),this._value=s?n:Ws(n)}get value(){return Wl(this),this._value}set value(n){n=this.__v_isShallow?n:Ae(n),Us(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Ws(n),Kl(this))}}function w(e){return ke(e)?e.value:e}const bf={get:(e,n,s)=>w(Reflect.get(e,n,s)),set:(e,n,s,r)=>{const o=e[n];return ke(o)&&!ke(s)?(o.value=s,!0):Reflect.set(e,n,s,r)}};function eu(e){return es(e)?e:new Proxy(e,bf)}class wf{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:r}=n(()=>Wl(this),()=>Kl(this));this._get=s,this._set=r}get value(){return this._get()}set value(n){this._set(n)}}function xf(e){return new wf(e)}function Af(e){const n=oe(e)?new Array(e.length):{};for(const s in e)n[s]=kf(e,s);return n}class Bf{constructor(n,s,r){this._object=n,this._key=s,this._defaultValue=r,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function kf(e,n,s){const r=e[n];return ke(r)?r:new Bf(e,n,s)}class $f{constructor(n,s,r,o){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Hl(n,()=>{this._dirty||(this._dirty=!0,Kl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const n=Ae(this);return Wl(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Cf(e,n,s=!1){let r,o;const l=ue(e);return l?(r=e,o=Ot):(r=e.get,o=e.set),new $f(r,o,l||!o,s)}function pn(e,n,s,r){let o;try{o=r?e(...r):e()}catch(l){Jr(l,n,s)}return o}function Nt(e,n,s,r){if(ue(e)){const l=pn(e,n,s,r);return l&&Lc(l)&&l.catch(a=>{Jr(a,n,s)}),l}const o=[];for(let l=0;l<e.length;l++)o.push(Nt(e[l],n,s,r));return o}function Jr(e,n,s,r=!0){const o=n?n.vnode:null;if(n){let l=n.parent;const a=n.proxy,i=s;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,a,i)===!1)return}l=l.parent}const c=n.appContext.config.errorHandler;if(c){pn(c,null,10,[e,a,i]);return}}Ef(e,s,o,r)}function Ef(e,n,s,r=!0){console.error(e)}let Or=!1,Go=!1;const yt=[];let Gt=0;const Ds=[];let $s=null,qn=0;const Ss=[];let on=null,Wn=0;const tu=Promise.resolve();let Yl=null,Zo=null;function Ge(e){const n=Yl||tu;return e?n.then(this?e.bind(this):e):n}function Df(e){let n=Gt+1,s=yt.length;for(;n<s;){const r=n+s>>>1;Ks(yt[r])<e?n=r+1:s=r}return n}function nu(e){(!yt.length||!yt.includes(e,Or&&e.allowRecurse?Gt+1:Gt))&&e!==Zo&&(e.id==null?yt.push(e):yt.splice(Df(e.id),0,e),su())}function su(){!Or&&!Go&&(Go=!0,Yl=tu.then(lu))}function Sf(e){const n=yt.indexOf(e);n>Gt&&yt.splice(n,1)}function ru(e,n,s,r){oe(e)?s.push(...e):(!n||!n.includes(e,e.allowRecurse?r+1:r))&&s.push(e),su()}function Tf(e){ru(e,$s,Ds,qn)}function Of(e){ru(e,on,Ss,Wn)}function eo(e,n=null){if(Ds.length){for(Zo=n,$s=[...new Set(Ds)],Ds.length=0,qn=0;qn<$s.length;qn++)$s[qn]();$s=null,qn=0,Zo=null,eo(e,n)}}function ou(e){if(eo(),Ss.length){const n=[...new Set(Ss)];if(Ss.length=0,on){on.push(...n);return}for(on=n,on.sort((s,r)=>Ks(s)-Ks(r)),Wn=0;Wn<on.length;Wn++)on[Wn]();on=null,Wn=0}}const Ks=e=>e.id==null?1/0:e.id;function lu(e){Go=!1,Or=!0,eo(e),yt.sort((s,r)=>Ks(s)-Ks(r));const n=Ot;try{for(Gt=0;Gt<yt.length;Gt++){const s=yt[Gt];s&&s.active!==!1&&pn(s,null,14)}}finally{Gt=0,yt.length=0,ou(),Or=!1,Yl=null,(yt.length||Ds.length||Ss.length)&&lu(e)}}function Nf(e,n,...s){if(e.isUnmounted)return;const r=e.vnode.props||Ne;let o=s;const l=n.startsWith("update:"),a=l&&n.slice(7);if(a&&a in r){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=r[p]||Ne;f&&(o=s.map(m=>m.trim())),h&&(o=s.map(Vo))}let i,c=r[i=yo(n)]||r[i=yo(Vt(n))];!c&&l&&(c=r[i=yo(Pn(n))]),c&&Nt(c,e,6,o);const u=r[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Nt(u,e,6,o)}}function au(e,n,s=!1){const r=n.emitsCache,o=r.get(e);if(o!==void 0)return o;const l=e.emits;let a={},i=!1;if(!ue(e)){const c=u=>{const p=au(u,n,!0);p&&(i=!0,lt(a,p))};!s&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!i?(r.set(e,null),null):(oe(l)?l.forEach(c=>a[c]=null):lt(a,l),r.set(e,a),a)}function to(e,n){return!e||!Kr(n)?!1:(n=n.slice(2).replace(/Once$/,""),_e(e,n[0].toLowerCase()+n.slice(1))||_e(e,Pn(n))||_e(e,n))}let Qe=null,no=null;function Nr(e){const n=Qe;return Qe=e,no=e&&e.type.__scopeId||null,n}function z6(e){no=e}function V6(){no=null}function A(e,n=Qe,s){if(!n||e._n)return e;const r=(...o)=>{r._d&&Ga(-1);const l=Nr(n),a=e(...o);return Nr(l),r._d&&Ga(1),a};return r._n=!0,r._c=!0,r._d=!0,r}function go(e){const{type:n,vnode:s,proxy:r,withProxy:o,props:l,propsOptions:[a],slots:i,attrs:c,emit:u,render:p,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:x}=e;let b,E;const k=Nr(e);try{if(s.shapeFlag&4){const D=o||r;b=Rt(p.call(D,D,h,l,m,f,g)),E=c}else{const D=n;b=Rt(D.length>1?D(l,{attrs:c,slots:i,emit:u}):D(l,null)),E=n.props?c:Ff(c)}}catch(D){Os.length=0,Jr(D,e,1),b=C(gn)}let $=b;if(E&&x!==!1){const D=Object.keys(E),{shapeFlag:j}=$;D.length&&j&7&&(a&&D.some(Ml)&&(E=Mf(E,a)),$=Mn($,E))}return s.dirs&&($=Mn($),$.dirs=$.dirs?$.dirs.concat(s.dirs):s.dirs),s.transition&&($.transition=s.transition),b=$,Nr(k),b}const Ff=e=>{let n;for(const s in e)(s==="class"||s==="style"||Kr(s))&&((n||(n={}))[s]=e[s]);return n},Mf=(e,n)=>{const s={};for(const r in e)(!Ml(r)||!(r.slice(9)in n))&&(s[r]=e[r]);return s};function Pf(e,n,s){const{props:r,children:o,component:l}=e,{props:a,children:i,patchFlag:c}=n,u=l.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return r?Ra(r,a,u):!!a;if(c&8){const p=n.dynamicProps;for(let h=0;h<p.length;h++){const f=p[h];if(a[f]!==r[f]&&!to(u,f))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:r===a?!1:r?a?Ra(r,a,u):!0:!!a;return!1}function Ra(e,n,s){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const l=r[o];if(n[l]!==e[l]&&!to(s,l))return!0}return!1}function If({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const iu=e=>e.__isSuspense;function Lf(e,n){n&&n.pendingBranch?oe(e)?n.effects.push(...e):n.effects.push(e):Of(e)}function mt(e,n){if(We){let s=We.provides;const r=We.parent&&We.parent.provides;r===s&&(s=We.provides=Object.create(r)),s[e]=n}}function F(e,n,s=!1){const r=We||Qe;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return s&&ue(n)?n.call(r.proxy):n}}function or(e,n){return Gl(e,null,n)}const Ha={};function fe(e,n,s){return Gl(e,n,s)}function Gl(e,n,{immediate:s,deep:r,flush:o,onTrack:l,onTrigger:a}=Ne){const i=We;let c,u=!1,p=!1;if(ke(e)?(c=()=>e.value,u=Yo(e)):es(e)?(c=()=>e,r=!0):oe(e)?(p=!0,u=e.some(E=>es(E)||Yo(E)),c=()=>e.map(E=>{if(ke(E))return E.value;if(es(E))return Cn(E);if(ue(E))return pn(E,i,2)})):ue(e)?n?c=()=>pn(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return h&&h(),Nt(e,i,3,[f])}:c=Ot,n&&r){const E=c;c=()=>Cn(E())}let h,f=E=>{h=b.onStop=()=>{pn(E,i,4)}};if(Gs)return f=Ot,n?s&&Nt(n,i,3,[c(),p?[]:void 0,f]):c(),Ot;let m=p?[]:Ha;const g=()=>{if(!!b.active)if(n){const E=b.run();(r||u||(p?E.some((k,$)=>Us(k,m[$])):Us(E,m)))&&(h&&h(),Nt(n,i,3,[E,m===Ha?void 0:m,f]),m=E)}else b.run()};g.allowRecurse=!!n;let x;o==="sync"?x=g:o==="post"?x=()=>Ye(g,i&&i.suspense):x=()=>Tf(g);const b=new Hl(c,x);return n?s?g():m=b.run():o==="post"?Ye(b.run.bind(b),i&&i.suspense):b.run(),()=>{b.stop(),i&&i.scope&&Pl(i.scope.effects,b)}}function Rf(e,n,s){const r=this.proxy,o=He(e)?e.includes(".")?cu(r,e):()=>r[e]:e.bind(r,r);let l;ue(n)?l=n:(l=n.handler,s=n);const a=We;ls(this);const i=Gl(o,l.bind(r),s);return a?ls(a):On(),i}function cu(e,n){const s=n.split(".");return()=>{let r=e;for(let o=0;o<s.length&&r;o++)r=r[s[o]];return r}}function Cn(e,n){if(!qe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),ke(e))Cn(e.value,n);else if(oe(e))for(let s=0;s<e.length;s++)Cn(e[s],n);else if(Ic(e)||Xn(e))e.forEach(s=>{Cn(s,n)});else if(Hc(e))for(const s in e)Cn(e[s],n);return e}function uu(e,n){e.shapeFlag&6&&e.component?uu(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function $e(e){return ue(e)?{setup:e,name:e.name}:e}const ts=e=>!!e.type.__asyncLoader,pu=e=>e.type.__isKeepAlive,Hf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=In(),r=s.ctx;if(!r.renderer)return()=>{const k=n.default&&n.default();return k&&k.length===1?k[0]:k};const o=new Map,l=new Set;let a=null;const i=s.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:h}}}=r,f=h("div");r.activate=(k,$,D,j,M)=>{const K=k.component;u(k,$,D,0,i),c(K.vnode,k,$,D,K,i,j,k.slotScopeIds,M),Ye(()=>{K.isDeactivated=!1,K.a&&Jn(K.a);const ie=k.props&&k.props.onVnodeMounted;ie&&xt(ie,K.parent,k)},i)},r.deactivate=k=>{const $=k.component;u(k,f,null,1,i),Ye(()=>{$.da&&Jn($.da);const D=k.props&&k.props.onVnodeUnmounted;D&&xt(D,$.parent,k),$.isDeactivated=!0},i)};function m(k){_o(k),p(k,s,i,!0)}function g(k){o.forEach(($,D)=>{const j=sl($.type);j&&(!k||!k(j))&&x(D)})}function x(k){const $=o.get(k);!a||$.type!==a.type?m($):a&&_o(a),o.delete(k),l.delete(k)}fe(()=>[e.include,e.exclude],([k,$])=>{k&&g(D=>Cs(k,D)),$&&g(D=>!Cs($,D))},{flush:"post",deep:!0});let b=null;const E=()=>{b!=null&&o.set(b,vo(s.subTree))};return ds(E),mu(E),ro(()=>{o.forEach(k=>{const{subTree:$,suspense:D}=s,j=vo($);if(k.type===j.type){_o(j);const M=j.component.da;M&&Ye(M,D);return}m(k)})}),()=>{if(b=null,!n.default)return null;const k=n.default(),$=k[0];if(k.length>1)return a=null,k;if(!os($)||!($.shapeFlag&4)&&!($.shapeFlag&128))return a=null,$;let D=vo($);const j=D.type,M=sl(ts(D)?D.type.__asyncResolved||{}:j),{include:K,exclude:ie,max:he}=e;if(K&&(!M||!Cs(K,M))||ie&&M&&Cs(ie,M))return a=D,$;const ye=D.key==null?j:D.key,ve=o.get(ye);return D.el&&(D=Mn(D),$.shapeFlag&128&&($.ssContent=D)),b=ye,ve?(D.el=ve.el,D.component=ve.component,D.transition&&uu(D,D.transition),D.shapeFlag|=512,l.delete(ye),l.add(ye)):(l.add(ye),he&&l.size>parseInt(he,10)&&x(l.values().next().value)),D.shapeFlag|=256,a=D,iu($.type)?$:D}}},du=Hf;function Cs(e,n){return oe(e)?e.some(s=>Cs(s,n)):He(e)?e.split(",").includes(n):e.test?e.test(n):!1}function jf(e,n){fu(e,"a",n)}function zf(e,n){fu(e,"da",n)}function fu(e,n,s=We){const r=e.__wdc||(e.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(so(n,r,s),s){let o=s.parent;for(;o&&o.parent;)pu(o.parent.vnode)&&Vf(r,n,s,o),o=o.parent}}function Vf(e,n,s,r){const o=so(n,e,r,!0);oo(()=>{Pl(r[n],o)},s)}function _o(e){let n=e.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),e.shapeFlag=n}function vo(e){return e.shapeFlag&128?e.ssContent:e}function so(e,n,s=We,r=!1){if(s){const o=s[e]||(s[e]=[]),l=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;us(),ls(s);const i=Nt(n,s,e,a);return On(),ps(),i});return r?o.unshift(l):o.push(l),l}}const Jt=e=>(n,s=We)=>(!Gs||e==="sp")&&so(e,n,s),hu=Jt("bm"),ds=Jt("m"),Uf=Jt("bu"),mu=Jt("u"),ro=Jt("bum"),oo=Jt("um"),qf=Jt("sp"),Wf=Jt("rtg"),Kf=Jt("rtc");function Yf(e,n=We){so("ec",e,n)}function Ee(e,n){const s=Qe;if(s===null)return e;const r=ao(s)||s.proxy,o=e.dirs||(e.dirs=[]);for(let l=0;l<n.length;l++){let[a,i,c,u=Ne]=n[l];ue(a)&&(a={mounted:a,updated:a}),a.deep&&Cn(i),o.push({dir:a,instance:r,value:i,oldValue:void 0,arg:c,modifiers:u})}return e}function _n(e,n,s,r){const o=e.dirs,l=n&&n.dirs;for(let a=0;a<o.length;a++){const i=o[a];l&&(i.oldValue=l[a].value);let c=i.dir[r];c&&(us(),Nt(c,s,8,[e.el,i,e,n]),ps())}}const yu="components",Gf="directives";function re(e,n){return gu(yu,e,!0,n)||e}const Zf=Symbol();function Ke(e){return gu(Gf,e)}function gu(e,n,s=!0,r=!1){const o=Qe||We;if(o){const l=o.type;if(e===yu){const i=sl(l,!1);if(i&&(i===n||i===Vt(n)||i===Zr(Vt(n))))return l}const a=ja(o[e]||l[e],n)||ja(o.appContext[e],n);return!a&&r?l:a}}function ja(e,n){return e&&(e[n]||e[Vt(n)]||e[Zr(Vt(n))])}function lr(e,n,s,r){let o;const l=s&&s[r];if(oe(e)||He(e)){o=new Array(e.length);for(let a=0,i=e.length;a<i;a++)o[a]=n(e[a],a,void 0,l&&l[a])}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=n(a+1,a,void 0,l&&l[a])}else if(qe(e))if(e[Symbol.iterator])o=Array.from(e,(a,i)=>n(a,i,void 0,l&&l[i]));else{const a=Object.keys(e);o=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];o[i]=n(e[u],u,i,l&&l[i])}}else o=[];return s&&(s[r]=o),o}function qt(e,n,s={},r,o){if(Qe.isCE||Qe.parent&&ts(Qe.parent)&&Qe.parent.isCE)return C("slot",n==="default"?null:{name:n},r&&r());let l=e[n];l&&l._c&&(l._d=!1),_();const a=l&&_u(l(s)),i=H(Ce,{key:s.key||`_${n}`},a||(r?r():[]),a&&e._===1?64:-2);return!o&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),l&&l._c&&(l._d=!0),i}function _u(e){return e.some(n=>os(n)?!(n.type===gn||n.type===Ce&&!_u(n.children)):!0)?e:null}const Qo=e=>e?Du(e)?ao(e)||e.proxy:Qo(e.parent):null,Fr=lt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qo(e.parent),$root:e=>Qo(e.root),$emit:e=>e.emit,$options:e=>bu(e),$forceUpdate:e=>e.f||(e.f=()=>nu(e.update)),$nextTick:e=>e.n||(e.n=Ge.bind(e.proxy)),$watch:e=>Rf.bind(e)}),Qf={get({_:e},n){const{ctx:s,setupState:r,data:o,props:l,accessCache:a,type:i,appContext:c}=e;let u;if(n[0]!=="$"){const m=a[n];if(m!==void 0)switch(m){case 1:return r[n];case 2:return o[n];case 4:return s[n];case 3:return l[n]}else{if(r!==Ne&&_e(r,n))return a[n]=1,r[n];if(o!==Ne&&_e(o,n))return a[n]=2,o[n];if((u=e.propsOptions[0])&&_e(u,n))return a[n]=3,l[n];if(s!==Ne&&_e(s,n))return a[n]=4,s[n];Xo&&(a[n]=0)}}const p=Fr[n];let h,f;if(p)return n==="$attrs"&&bt(e,"get",n),p(e);if((h=i.__cssModules)&&(h=h[n]))return h;if(s!==Ne&&_e(s,n))return a[n]=4,s[n];if(f=c.config.globalProperties,_e(f,n))return f[n]},set({_:e},n,s){const{data:r,setupState:o,ctx:l}=e;return o!==Ne&&_e(o,n)?(o[n]=s,!0):r!==Ne&&_e(r,n)?(r[n]=s,!0):_e(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(l[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:r,appContext:o,propsOptions:l}},a){let i;return!!s[a]||e!==Ne&&_e(e,a)||n!==Ne&&_e(n,a)||(i=l[0])&&_e(i,a)||_e(r,a)||_e(Fr,a)||_e(o.config.globalProperties,a)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:_e(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};let Xo=!0;function Xf(e){const n=bu(e),s=e.proxy,r=e.ctx;Xo=!1,n.beforeCreate&&za(n.beforeCreate,e,"bc");const{data:o,computed:l,methods:a,watch:i,provide:c,inject:u,created:p,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:x,deactivated:b,beforeDestroy:E,beforeUnmount:k,destroyed:$,unmounted:D,render:j,renderTracked:M,renderTriggered:K,errorCaptured:ie,serverPrefetch:he,expose:ye,inheritAttrs:ve,components:Pe,directives:je,filters:Ze}=n;if(u&&Jf(u,r,null,e.appContext.config.unwrapInjectedRef),a)for(const le in a){const te=a[le];ue(te)&&(r[le]=te.bind(s))}if(o){const le=o.call(s,s);qe(le)&&(e.data=Ie(le))}if(Xo=!0,l)for(const le in l){const te=l[le],ge=ue(te)?te.bind(s,s):ue(te.get)?te.get.bind(s,s):Ot,It=!ue(te)&&ue(te.set)?te.set.bind(s):Ot,tt=S({get:ge,set:It});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>tt.value,set:wt=>tt.value=wt})}if(i)for(const le in i)vu(i[le],r,s,le);if(c){const le=ue(c)?c.call(s):c;Reflect.ownKeys(le).forEach(te=>{mt(te,le[te])})}p&&za(p,e,"c");function ne(le,te){oe(te)?te.forEach(ge=>le(ge.bind(s))):te&&le(te.bind(s))}if(ne(hu,h),ne(ds,f),ne(Uf,m),ne(mu,g),ne(jf,x),ne(zf,b),ne(Yf,ie),ne(Kf,M),ne(Wf,K),ne(ro,k),ne(oo,D),ne(qf,he),oe(ye))if(ye.length){const le=e.exposed||(e.exposed={});ye.forEach(te=>{Object.defineProperty(le,te,{get:()=>s[te],set:ge=>s[te]=ge})})}else e.exposed||(e.exposed={});j&&e.render===Ot&&(e.render=j),ve!=null&&(e.inheritAttrs=ve),Pe&&(e.components=Pe),je&&(e.directives=je)}function Jf(e,n,s=Ot,r=!1){oe(e)&&(e=Jo(e));for(const o in e){const l=e[o];let a;qe(l)?"default"in l?a=F(l.from||o,l.default,!0):a=F(l.from||o):a=F(l),ke(a)&&r?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):n[o]=a}}function za(e,n,s){Nt(oe(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,s)}function vu(e,n,s,r){const o=r.includes(".")?cu(s,r):()=>s[r];if(He(e)){const l=n[e];ue(l)&&fe(o,l)}else if(ue(e))fe(o,e.bind(s));else if(qe(e))if(oe(e))e.forEach(l=>vu(l,n,s,r));else{const l=ue(e.handler)?e.handler.bind(s):n[e.handler];ue(l)&&fe(o,l,e)}}function bu(e){const n=e.type,{mixins:s,extends:r}=n,{mixins:o,optionsCache:l,config:{optionMergeStrategies:a}}=e.appContext,i=l.get(n);let c;return i?c=i:!o.length&&!s&&!r?c=n:(c={},o.length&&o.forEach(u=>Mr(c,u,a,!0)),Mr(c,n,a)),l.set(n,c),c}function Mr(e,n,s,r=!1){const{mixins:o,extends:l}=n;l&&Mr(e,l,s,!0),o&&o.forEach(a=>Mr(e,a,s,!0));for(const a in n)if(!(r&&a==="expose")){const i=eh[a]||s&&s[a];e[a]=i?i(e[a],n[a]):n[a]}return e}const eh={data:Va,props:xn,emits:xn,methods:xn,computed:xn,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:xn,directives:xn,watch:nh,provide:Va,inject:th};function Va(e,n){return n?e?function(){return lt(ue(e)?e.call(this,this):e,ue(n)?n.call(this,this):n)}:n:e}function th(e,n){return xn(Jo(e),Jo(n))}function Jo(e){if(oe(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function nt(e,n){return e?[...new Set([].concat(e,n))]:n}function xn(e,n){return e?lt(lt(Object.create(null),e),n):n}function nh(e,n){if(!e)return n;if(!n)return e;const s=lt(Object.create(null),e);for(const r in n)s[r]=nt(e[r],n[r]);return s}function sh(e,n,s,r=!1){const o={},l={};Tr(l,lo,1),e.propsDefaults=Object.create(null),wu(e,n,o,l);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);s?e.props=r?o:_f(o):e.type.props?e.props=o:e.props=l,e.attrs=l}function rh(e,n,s,r){const{props:o,attrs:l,vnode:{patchFlag:a}}=e,i=Ae(o),[c]=e.propsOptions;let u=!1;if((r||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let h=0;h<p.length;h++){let f=p[h];if(to(e.emitsOptions,f))continue;const m=n[f];if(c)if(_e(l,f))m!==l[f]&&(l[f]=m,u=!0);else{const g=Vt(f);o[g]=el(c,i,g,m,e,!1)}else m!==l[f]&&(l[f]=m,u=!0)}}}else{wu(e,n,o,l)&&(u=!0);let p;for(const h in i)(!n||!_e(n,h)&&((p=Pn(h))===h||!_e(n,p)))&&(c?s&&(s[h]!==void 0||s[p]!==void 0)&&(o[h]=el(c,i,h,void 0,e,!0)):delete o[h]);if(l!==i)for(const h in l)(!n||!_e(n,h)&&!0)&&(delete l[h],u=!0)}u&&Qt(e,"set","$attrs")}function wu(e,n,s,r){const[o,l]=e.propsOptions;let a=!1,i;if(n)for(let c in n){if(Ar(c))continue;const u=n[c];let p;o&&_e(o,p=Vt(c))?!l||!l.includes(p)?s[p]=u:(i||(i={}))[p]=u:to(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,a=!0)}if(l){const c=Ae(s),u=i||Ne;for(let p=0;p<l.length;p++){const h=l[p];s[h]=el(o,c,h,u[h],e,!_e(u,h))}}return a}function el(e,n,s,r,o,l){const a=e[s];if(a!=null){const i=_e(a,"default");if(i&&r===void 0){const c=a.default;if(a.type!==Function&&ue(c)){const{propsDefaults:u}=o;s in u?r=u[s]:(ls(o),r=u[s]=c.call(null,n),On())}else r=c}a[0]&&(l&&!i?r=!1:a[1]&&(r===""||r===Pn(s))&&(r=!0))}return r}function xu(e,n,s=!1){const r=n.propsCache,o=r.get(e);if(o)return o;const l=e.props,a={},i=[];let c=!1;if(!ue(e)){const p=h=>{c=!0;const[f,m]=xu(h,n,!0);lt(a,f),m&&i.push(...m)};!s&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!l&&!c)return r.set(e,Qn),Qn;if(oe(l))for(let p=0;p<l.length;p++){const h=Vt(l[p]);Ua(h)&&(a[h]=Ne)}else if(l)for(const p in l){const h=Vt(p);if(Ua(h)){const f=l[p],m=a[h]=oe(f)||ue(f)?{type:f}:f;if(m){const g=Ka(Boolean,m.type),x=Ka(String,m.type);m[0]=g>-1,m[1]=x<0||g<x,(g>-1||_e(m,"default"))&&i.push(h)}}}const u=[a,i];return r.set(e,u),u}function Ua(e){return e[0]!=="$"}function qa(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Wa(e,n){return qa(e)===qa(n)}function Ka(e,n){return oe(n)?n.findIndex(s=>Wa(s,e)):ue(n)&&Wa(n,e)?0:-1}const Au=e=>e[0]==="_"||e==="$stable",Zl=e=>oe(e)?e.map(Rt):[Rt(e)],oh=(e,n,s)=>{if(n._n)return n;const r=A((...o)=>Zl(n(...o)),s);return r._c=!1,r},Bu=(e,n,s)=>{const r=e._ctx;for(const o in e){if(Au(o))continue;const l=e[o];if(ue(l))n[o]=oh(o,l,r);else if(l!=null){const a=Zl(l);n[o]=()=>a}}},ku=(e,n)=>{const s=Zl(n);e.slots.default=()=>s},lh=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=Ae(n),Tr(n,"_",s)):Bu(n,e.slots={})}else e.slots={},n&&ku(e,n);Tr(e.slots,lo,1)},ah=(e,n,s)=>{const{vnode:r,slots:o}=e;let l=!0,a=Ne;if(r.shapeFlag&32){const i=n._;i?s&&i===1?l=!1:(lt(o,n),!s&&i===1&&delete o._):(l=!n.$stable,Bu(n,o)),a=n}else n&&(ku(e,n),a={default:1});if(l)for(const i in o)!Au(i)&&!(i in a)&&delete o[i]};function $u(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ih=0;function ch(e,n){return function(r,o=null){ue(r)||(r=Object.assign({},r)),o!=null&&!qe(o)&&(o=null);const l=$u(),a=new Set;let i=!1;const c=l.app={_uid:ih++,_component:r,_props:o,_container:null,_context:l,_instance:null,version:Ch,get config(){return l.config},set config(u){},use(u,...p){return a.has(u)||(u&&ue(u.install)?(a.add(u),u.install(c,...p)):ue(u)&&(a.add(u),u(c,...p))),c},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),c},component(u,p){return p?(l.components[u]=p,c):l.components[u]},directive(u,p){return p?(l.directives[u]=p,c):l.directives[u]},mount(u,p,h){if(!i){const f=C(r,o);return f.appContext=l,p&&n?n(f,u):e(f,u,h),i=!0,c._container=u,u.__vue_app__=c,ao(f.component)||f.component.proxy}},unmount(){i&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,p){return l.provides[u]=p,c}};return c}}function tl(e,n,s,r,o=!1){if(oe(e)){e.forEach((f,m)=>tl(f,n&&(oe(n)?n[m]:n),s,r,o));return}if(ts(r)&&!o)return;const l=r.shapeFlag&4?ao(r.component)||r.component.proxy:r.el,a=o?null:l,{i,r:c}=e,u=n&&n.r,p=i.refs===Ne?i.refs={}:i.refs,h=i.setupState;if(u!=null&&u!==c&&(He(u)?(p[u]=null,_e(h,u)&&(h[u]=null)):ke(u)&&(u.value=null)),ue(c))pn(c,i,12,[a,p]);else{const f=He(c),m=ke(c);if(f||m){const g=()=>{if(e.f){const x=f?p[c]:c.value;o?oe(x)&&Pl(x,l):oe(x)?x.includes(l)||x.push(l):f?(p[c]=[l],_e(h,c)&&(h[c]=p[c])):(c.value=[l],e.k&&(p[e.k]=c.value))}else f?(p[c]=a,_e(h,c)&&(h[c]=a)):m&&(c.value=a,e.k&&(p[e.k]=a))};a?(g.id=-1,Ye(g,s)):g()}}}const Ye=Lf;function uh(e){return ph(e)}function ph(e,n){const s=jd();s.__VUE__=!0;const{insert:r,remove:o,patchProp:l,createElement:a,createText:i,createComment:c,setText:u,setElementText:p,parentNode:h,nextSibling:f,setScopeId:m=Ot,cloneNode:g,insertStaticContent:x}=e,b=(y,v,B,P=null,N=null,V=null,W=!1,z=null,U=!!v.dynamicChildren)=>{if(y===v)return;y&&!gs(y,v)&&(P=G(y),at(y,N,V,!0),y=null),v.patchFlag===-2&&(U=!1,v.dynamicChildren=null);const{type:I,ref:J,shapeFlag:Z}=v;switch(I){case Xl:E(y,v,B,P);break;case gn:k(y,v,B,P);break;case bo:y==null&&$(v,B,P,W);break;case Ce:je(y,v,B,P,N,V,W,z,U);break;default:Z&1?M(y,v,B,P,N,V,W,z,U):Z&6?Ze(y,v,B,P,N,V,W,z,U):(Z&64||Z&128)&&I.process(y,v,B,P,N,V,W,z,U,Fe)}J!=null&&N&&tl(J,y&&y.ref,V,v||y,!v)},E=(y,v,B,P)=>{if(y==null)r(v.el=i(v.children),B,P);else{const N=v.el=y.el;v.children!==y.children&&u(N,v.children)}},k=(y,v,B,P)=>{y==null?r(v.el=c(v.children||""),B,P):v.el=y.el},$=(y,v,B,P)=>{[y.el,y.anchor]=x(y.children,v,B,P,y.el,y.anchor)},D=({el:y,anchor:v},B,P)=>{let N;for(;y&&y!==v;)N=f(y),r(y,B,P),y=N;r(v,B,P)},j=({el:y,anchor:v})=>{let B;for(;y&&y!==v;)B=f(y),o(y),y=B;o(v)},M=(y,v,B,P,N,V,W,z,U)=>{W=W||v.type==="svg",y==null?K(v,B,P,N,V,W,z,U):ye(y,v,N,V,W,z,U)},K=(y,v,B,P,N,V,W,z)=>{let U,I;const{type:J,props:Z,shapeFlag:ee,transition:ae,patchFlag:be,dirs:Se}=y;if(y.el&&g!==void 0&&be===-1)U=y.el=g(y.el);else{if(U=y.el=a(y.type,V,Z&&Z.is,Z),ee&8?p(U,y.children):ee&16&&he(y.children,U,null,P,N,V&&J!=="foreignObject",W,z),Se&&_n(y,null,P,"created"),Z){for(const Me in Z)Me!=="value"&&!Ar(Me)&&l(U,Me,null,Z[Me],V,y.children,P,N,R);"value"in Z&&l(U,"value",null,Z.value),(I=Z.onVnodeBeforeMount)&&xt(I,P,y)}ie(U,y,y.scopeId,W,P)}Se&&_n(y,null,P,"beforeMount");const Te=(!N||N&&!N.pendingBranch)&&ae&&!ae.persisted;Te&&ae.beforeEnter(U),r(U,v,B),((I=Z&&Z.onVnodeMounted)||Te||Se)&&Ye(()=>{I&&xt(I,P,y),Te&&ae.enter(U),Se&&_n(y,null,P,"mounted")},N)},ie=(y,v,B,P,N)=>{if(B&&m(y,B),P)for(let V=0;V<P.length;V++)m(y,P[V]);if(N){let V=N.subTree;if(v===V){const W=N.vnode;ie(y,W,W.scopeId,W.slotScopeIds,N.parent)}}},he=(y,v,B,P,N,V,W,z,U=0)=>{for(let I=U;I<y.length;I++){const J=y[I]=z?ln(y[I]):Rt(y[I]);b(null,J,v,B,P,N,V,W,z)}},ye=(y,v,B,P,N,V,W)=>{const z=v.el=y.el;let{patchFlag:U,dynamicChildren:I,dirs:J}=v;U|=y.patchFlag&16;const Z=y.props||Ne,ee=v.props||Ne;let ae;B&&vn(B,!1),(ae=ee.onVnodeBeforeUpdate)&&xt(ae,B,v,y),J&&_n(v,y,B,"beforeUpdate"),B&&vn(B,!0);const be=N&&v.type!=="foreignObject";if(I?ve(y.dynamicChildren,I,z,B,P,be,V):W||ge(y,v,z,null,B,P,be,V,!1),U>0){if(U&16)Pe(z,v,Z,ee,B,P,N);else if(U&2&&Z.class!==ee.class&&l(z,"class",null,ee.class,N),U&4&&l(z,"style",Z.style,ee.style,N),U&8){const Se=v.dynamicProps;for(let Te=0;Te<Se.length;Te++){const Me=Se[Te],Ct=Z[Me],jn=ee[Me];(jn!==Ct||Me==="value")&&l(z,Me,Ct,jn,N,y.children,B,P,R)}}U&1&&y.children!==v.children&&p(z,v.children)}else!W&&I==null&&Pe(z,v,Z,ee,B,P,N);((ae=ee.onVnodeUpdated)||J)&&Ye(()=>{ae&&xt(ae,B,v,y),J&&_n(v,y,B,"updated")},P)},ve=(y,v,B,P,N,V,W)=>{for(let z=0;z<v.length;z++){const U=y[z],I=v[z],J=U.el&&(U.type===Ce||!gs(U,I)||U.shapeFlag&70)?h(U.el):B;b(U,I,J,null,P,N,V,W,!0)}},Pe=(y,v,B,P,N,V,W)=>{if(B!==P){for(const z in P){if(Ar(z))continue;const U=P[z],I=B[z];U!==I&&z!=="value"&&l(y,z,I,U,W,v.children,N,V,R)}if(B!==Ne)for(const z in B)!Ar(z)&&!(z in P)&&l(y,z,B[z],null,W,v.children,N,V,R);"value"in P&&l(y,"value",B.value,P.value)}},je=(y,v,B,P,N,V,W,z,U)=>{const I=v.el=y?y.el:i(""),J=v.anchor=y?y.anchor:i("");let{patchFlag:Z,dynamicChildren:ee,slotScopeIds:ae}=v;ae&&(z=z?z.concat(ae):ae),y==null?(r(I,B,P),r(J,B,P),he(v.children,B,J,N,V,W,z,U)):Z>0&&Z&64&&ee&&y.dynamicChildren?(ve(y.dynamicChildren,ee,B,N,V,W,z),(v.key!=null||N&&v===N.subTree)&&Ql(y,v,!0)):ge(y,v,B,J,N,V,W,z,U)},Ze=(y,v,B,P,N,V,W,z,U)=>{v.slotScopeIds=z,y==null?v.shapeFlag&512?N.ctx.activate(v,B,P,W,U):De(v,B,P,N,V,W,U):ne(y,v,U)},De=(y,v,B,P,N,V,W)=>{const z=y.component=wh(y,P,N);if(pu(y)&&(z.ctx.renderer=Fe),xh(z),z.asyncDep){if(N&&N.registerDep(z,le),!y.el){const U=z.subTree=C(gn);k(null,U,v,B)}return}le(z,y,v,B,N,V,W)},ne=(y,v,B)=>{const P=v.component=y.component;if(Pf(y,v,B))if(P.asyncDep&&!P.asyncResolved){te(P,v,B);return}else P.next=v,Sf(P.update),P.update();else v.el=y.el,P.vnode=v},le=(y,v,B,P,N,V,W)=>{const z=()=>{if(y.isMounted){let{next:J,bu:Z,u:ee,parent:ae,vnode:be}=y,Se=J,Te;vn(y,!1),J?(J.el=be.el,te(y,J,W)):J=be,Z&&Jn(Z),(Te=J.props&&J.props.onVnodeBeforeUpdate)&&xt(Te,ae,J,be),vn(y,!0);const Me=go(y),Ct=y.subTree;y.subTree=Me,b(Ct,Me,h(Ct.el),G(Ct),y,N,V),J.el=Me.el,Se===null&&If(y,Me.el),ee&&Ye(ee,N),(Te=J.props&&J.props.onVnodeUpdated)&&Ye(()=>xt(Te,ae,J,be),N)}else{let J;const{el:Z,props:ee}=v,{bm:ae,m:be,parent:Se}=y,Te=ts(v);if(vn(y,!1),ae&&Jn(ae),!Te&&(J=ee&&ee.onVnodeBeforeMount)&&xt(J,Se,v),vn(y,!0),Z&&pe){const Me=()=>{y.subTree=go(y),pe(Z,y.subTree,y,N,null)};Te?v.type.__asyncLoader().then(()=>!y.isUnmounted&&Me()):Me()}else{const Me=y.subTree=go(y);b(null,Me,B,P,y,N,V),v.el=Me.el}if(be&&Ye(be,N),!Te&&(J=ee&&ee.onVnodeMounted)){const Me=v;Ye(()=>xt(J,Se,Me),N)}(v.shapeFlag&256||Se&&ts(Se.vnode)&&Se.vnode.shapeFlag&256)&&y.a&&Ye(y.a,N),y.isMounted=!0,v=B=P=null}},U=y.effect=new Hl(z,()=>nu(I),y.scope),I=y.update=()=>U.run();I.id=y.uid,vn(y,!0),I()},te=(y,v,B)=>{v.component=y;const P=y.vnode.props;y.vnode=v,y.next=null,rh(y,v.props,P,B),ah(y,v.children,B),us(),eo(void 0,y.update),ps()},ge=(y,v,B,P,N,V,W,z,U=!1)=>{const I=y&&y.children,J=y?y.shapeFlag:0,Z=v.children,{patchFlag:ee,shapeFlag:ae}=v;if(ee>0){if(ee&128){tt(I,Z,B,P,N,V,W,z,U);return}else if(ee&256){It(I,Z,B,P,N,V,W,z,U);return}}ae&8?(J&16&&R(I,N,V),Z!==I&&p(B,Z)):J&16?ae&16?tt(I,Z,B,P,N,V,W,z,U):R(I,N,V,!0):(J&8&&p(B,""),ae&16&&he(Z,B,P,N,V,W,z,U))},It=(y,v,B,P,N,V,W,z,U)=>{y=y||Qn,v=v||Qn;const I=y.length,J=v.length,Z=Math.min(I,J);let ee;for(ee=0;ee<Z;ee++){const ae=v[ee]=U?ln(v[ee]):Rt(v[ee]);b(y[ee],ae,B,null,N,V,W,z,U)}I>J?R(y,N,V,!0,!1,Z):he(v,B,P,N,V,W,z,U,Z)},tt=(y,v,B,P,N,V,W,z,U)=>{let I=0;const J=v.length;let Z=y.length-1,ee=J-1;for(;I<=Z&&I<=ee;){const ae=y[I],be=v[I]=U?ln(v[I]):Rt(v[I]);if(gs(ae,be))b(ae,be,B,null,N,V,W,z,U);else break;I++}for(;I<=Z&&I<=ee;){const ae=y[Z],be=v[ee]=U?ln(v[ee]):Rt(v[ee]);if(gs(ae,be))b(ae,be,B,null,N,V,W,z,U);else break;Z--,ee--}if(I>Z){if(I<=ee){const ae=ee+1,be=ae<J?v[ae].el:P;for(;I<=ee;)b(null,v[I]=U?ln(v[I]):Rt(v[I]),B,be,N,V,W,z,U),I++}}else if(I>ee)for(;I<=Z;)at(y[I],N,V,!0),I++;else{const ae=I,be=I,Se=new Map;for(I=be;I<=ee;I++){const ut=v[I]=U?ln(v[I]):Rt(v[I]);ut.key!=null&&Se.set(ut.key,I)}let Te,Me=0;const Ct=ee-be+1;let jn=!1,Ea=0;const ys=new Array(Ct);for(I=0;I<Ct;I++)ys[I]=0;for(I=ae;I<=Z;I++){const ut=y[I];if(Me>=Ct){at(ut,N,V,!0);continue}let Lt;if(ut.key!=null)Lt=Se.get(ut.key);else for(Te=be;Te<=ee;Te++)if(ys[Te-be]===0&&gs(ut,v[Te])){Lt=Te;break}Lt===void 0?at(ut,N,V,!0):(ys[Lt-be]=I+1,Lt>=Ea?Ea=Lt:jn=!0,b(ut,v[Lt],B,null,N,V,W,z,U),Me++)}const Da=jn?dh(ys):Qn;for(Te=Da.length-1,I=Ct-1;I>=0;I--){const ut=be+I,Lt=v[ut],Sa=ut+1<J?v[ut+1].el:P;ys[I]===0?b(null,Lt,B,Sa,N,V,W,z,U):jn&&(Te<0||I!==Da[Te]?wt(Lt,B,Sa,2):Te--)}}},wt=(y,v,B,P,N=null)=>{const{el:V,type:W,transition:z,children:U,shapeFlag:I}=y;if(I&6){wt(y.component.subTree,v,B,P);return}if(I&128){y.suspense.move(v,B,P);return}if(I&64){W.move(y,v,B,Fe);return}if(W===Ce){r(V,v,B);for(let Z=0;Z<U.length;Z++)wt(U[Z],v,B,P);r(y.anchor,v,B);return}if(W===bo){D(y,v,B);return}if(P!==2&&I&1&&z)if(P===0)z.beforeEnter(V),r(V,v,B),Ye(()=>z.enter(V),N);else{const{leave:Z,delayLeave:ee,afterLeave:ae}=z,be=()=>r(V,v,B),Se=()=>{Z(V,()=>{be(),ae&&ae()})};ee?ee(V,be,Se):Se()}else r(V,v,B)},at=(y,v,B,P=!1,N=!1)=>{const{type:V,props:W,ref:z,children:U,dynamicChildren:I,shapeFlag:J,patchFlag:Z,dirs:ee}=y;if(z!=null&&tl(z,null,B,y,!0),J&256){v.ctx.deactivate(y);return}const ae=J&1&&ee,be=!ts(y);let Se;if(be&&(Se=W&&W.onVnodeBeforeUnmount)&&xt(Se,v,y),J&6)Y(y.component,B,P);else{if(J&128){y.suspense.unmount(B,P);return}ae&&_n(y,null,v,"beforeUnmount"),J&64?y.type.remove(y,v,B,N,Fe,P):I&&(V!==Ce||Z>0&&Z&64)?R(I,v,B,!1,!0):(V===Ce&&Z&384||!N&&J&16)&&R(U,v,B),P&&nn(y)}(be&&(Se=W&&W.onVnodeUnmounted)||ae)&&Ye(()=>{Se&&xt(Se,v,y),ae&&_n(y,null,v,"unmounted")},B)},nn=y=>{const{type:v,el:B,anchor:P,transition:N}=y;if(v===Ce){T(B,P);return}if(v===bo){j(y);return}const V=()=>{o(B),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(y.shapeFlag&1&&N&&!N.persisted){const{leave:W,delayLeave:z}=N,U=()=>W(B,V);z?z(y.el,V,U):U()}else V()},T=(y,v)=>{let B;for(;y!==v;)B=f(y),o(y),y=B;o(v)},Y=(y,v,B)=>{const{bum:P,scope:N,update:V,subTree:W,um:z}=y;P&&Jn(P),N.stop(),V&&(V.active=!1,at(W,y,v,B)),z&&Ye(z,v),Ye(()=>{y.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},R=(y,v,B,P=!1,N=!1,V=0)=>{for(let W=V;W<y.length;W++)at(y[W],v,B,P,N)},G=y=>y.shapeFlag&6?G(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),we=(y,v,B)=>{y==null?v._vnode&&at(v._vnode,null,null,!0):b(v._vnode||null,y,v,null,null,null,B),ou(),v._vnode=y},Fe={p:b,um:at,m:wt,r:nn,mt:De,mc:he,pc:ge,pbc:ve,n:G,o:e};let me,pe;return n&&([me,pe]=n(Fe)),{render:we,hydrate:me,createApp:ch(we,me)}}function vn({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function Ql(e,n,s=!1){const r=e.children,o=n.children;if(oe(r)&&oe(o))for(let l=0;l<r.length;l++){const a=r[l];let i=o[l];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[l]=ln(o[l]),i.el=a.el),s||Ql(a,i))}}function dh(e){const n=e.slice(),s=[0];let r,o,l,a,i;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(o=s[s.length-1],e[o]<u){n[r]=o,s.push(r);continue}for(l=0,a=s.length-1;l<a;)i=l+a>>1,e[s[i]]<u?l=i+1:a=i;u<e[s[l]]&&(l>0&&(n[r]=s[l-1]),s[l]=r)}}for(l=s.length,a=s[l-1];l-- >0;)s[l]=a,a=n[a];return s}const fh=e=>e.__isTeleport,Ts=e=>e&&(e.disabled||e.disabled===""),Ya=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,nl=(e,n)=>{const s=e&&e.to;return He(s)?n?n(s):null:s},hh={__isTeleport:!0,process(e,n,s,r,o,l,a,i,c,u){const{mc:p,pc:h,pbc:f,o:{insert:m,querySelector:g,createText:x,createComment:b}}=u,E=Ts(n.props);let{shapeFlag:k,children:$,dynamicChildren:D}=n;if(e==null){const j=n.el=x(""),M=n.anchor=x("");m(j,s,r),m(M,s,r);const K=n.target=nl(n.props,g),ie=n.targetAnchor=x("");K&&(m(ie,K),a=a||Ya(K));const he=(ye,ve)=>{k&16&&p($,ye,ve,o,l,a,i,c)};E?he(s,M):K&&he(K,ie)}else{n.el=e.el;const j=n.anchor=e.anchor,M=n.target=e.target,K=n.targetAnchor=e.targetAnchor,ie=Ts(e.props),he=ie?s:M,ye=ie?j:K;if(a=a||Ya(M),D?(f(e.dynamicChildren,D,he,o,l,a,i),Ql(e,n,!0)):c||h(e,n,he,ye,o,l,a,i,!1),E)ie||gr(n,s,j,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const ve=n.target=nl(n.props,g);ve&&gr(n,ve,null,u,0)}else ie&&gr(n,M,K,u,1)}},remove(e,n,s,r,{um:o,o:{remove:l}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:p,target:h,props:f}=e;if(h&&l(p),(a||!Ts(f))&&(l(u),i&16))for(let m=0;m<c.length;m++){const g=c[m];o(g,n,s,!0,!!g.dynamicChildren)}},move:gr,hydrate:mh};function gr(e,n,s,{o:{insert:r},m:o},l=2){l===0&&r(e.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:u,props:p}=e,h=l===2;if(h&&r(a,n,s),(!h||Ts(p))&&c&16)for(let f=0;f<u.length;f++)o(u[f],n,s,2);h&&r(i,n,s)}function mh(e,n,s,r,o,l,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const p=n.target=nl(n.props,c);if(p){const h=p._lpa||p.firstChild;if(n.shapeFlag&16)if(Ts(n.props))n.anchor=u(a(e),n,i(e),s,r,o,l),n.targetAnchor=h;else{n.anchor=a(e);let f=h;for(;f;)if(f=a(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,p._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(h,n,p,s,r,o,l)}}return n.anchor&&a(n.anchor)}const yh=hh,Ce=Symbol(void 0),Xl=Symbol(void 0),gn=Symbol(void 0),bo=Symbol(void 0),Os=[];let Tt=null;function _(e=!1){Os.push(Tt=e?null:[])}function gh(){Os.pop(),Tt=Os[Os.length-1]||null}let Ys=1;function Ga(e){Ys+=e}function Cu(e){return e.dynamicChildren=Ys>0?Tt||Qn:null,gh(),Ys>0&&Tt&&Tt.push(e),e}function O(e,n,s,r,o,l){return Cu(t(e,n,s,r,o,l,!0))}function H(e,n,s,r,o){return Cu(C(e,n,s,r,o,!0))}function os(e){return e?e.__v_isVNode===!0:!1}function gs(e,n){return e.type===n.type&&e.key===n.key}const lo="__vInternal",Eu=({key:e})=>e!=null?e:null,Br=({ref:e,ref_key:n,ref_for:s})=>e!=null?He(e)||ke(e)||ue(e)?{i:Qe,r:e,k:n,f:!!s}:e:null;function t(e,n=null,s=null,r=0,o=null,l=e===Ce?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Eu(n),ref:n&&Br(n),scopeId:no,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return i?(Jl(c,s),l&128&&e.normalize(c)):s&&(c.shapeFlag|=He(s)?8:16),Ys>0&&!a&&Tt&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Tt.push(c),c}const C=_h;function _h(e,n=null,s=null,r=0,o=null,l=!1){if((!e||e===Zf)&&(e=gn),os(e)){const i=Mn(e,n,!0);return s&&Jl(i,s),Ys>0&&!l&&Tt&&(i.shapeFlag&6?Tt[Tt.indexOf(e)]=i:Tt.push(i)),i.patchFlag|=-2,i}if($h(e)&&(e=e.__vccOpts),n){n=Q(n);let{class:i,style:c}=n;i&&!He(i)&&(n.class=Le(i)),qe(c)&&(Xc(c)&&!oe(c)&&(c=lt({},c)),n.style=Je(c))}const a=He(e)?1:iu(e)?128:fh(e)?64:qe(e)?4:ue(e)?2:0;return t(e,n,s,r,o,a,l,!0)}function Q(e){return e?Xc(e)||lo in e?lt({},e):e:null}function Mn(e,n,s=!1){const{props:r,ref:o,patchFlag:l,children:a}=e,i=n?Re(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Eu(i),ref:n&&n.ref?s&&o?oe(o)?o.concat(Br(n)):[o,Br(n)]:Br(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ce?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mn(e.ssContent),ssFallback:e.ssFallback&&Mn(e.ssFallback),el:e.el,anchor:e.anchor}}function d(e=" ",n=0){return C(Xl,null,e,n)}function de(e="",n=!1){return n?(_(),H(gn,null,e)):C(gn,null,e)}function Rt(e){return e==null||typeof e=="boolean"?C(gn):oe(e)?C(Ce,null,e.slice()):typeof e=="object"?ln(e):C(Xl,null,String(e))}function ln(e){return e.el===null||e.memo?e:Mn(e)}function Jl(e,n){let s=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(oe(n))s=16;else if(typeof n=="object")if(r&65){const o=n.default;o&&(o._c&&(o._d=!1),Jl(e,o()),o._c&&(o._d=!0));return}else{s=32;const o=n._;!o&&!(lo in n)?n._ctx=Qe:o===3&&Qe&&(Qe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ue(n)?(n={default:n,_ctx:Qe},s=32):(n=String(n),r&64?(s=16,n=[d(n)]):s=8);e.children=n,e.shapeFlag|=s}function Re(...e){const n={};for(let s=0;s<e.length;s++){const r=e[s];for(const o in r)if(o==="class")n.class!==r.class&&(n.class=Le([n.class,r.class]));else if(o==="style")n.style=Je([n.style,r.style]);else if(Kr(o)){const l=n[o],a=r[o];a&&l!==a&&!(oe(l)&&l.includes(a))&&(n[o]=l?[].concat(l,a):a)}else o!==""&&(n[o]=r[o])}return n}function xt(e,n,s,r=null){Nt(e,n,7,[s,r])}const vh=$u();let bh=0;function wh(e,n,s){const r=e.type,o=(n?n.appContext:e.appContext)||vh,l={uid:bh++,vnode:e,type:r,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xu(r,o),emitsOptions:au(r,o),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=Nf.bind(null,l),e.ce&&e.ce(l),l}let We=null;const In=()=>We||Qe,ls=e=>{We=e,e.scope.on()},On=()=>{We&&We.scope.off(),We=null};function Du(e){return e.vnode.shapeFlag&4}let Gs=!1;function xh(e,n=!1){Gs=n;const{props:s,children:r}=e.vnode,o=Du(e);sh(e,s,o,n),lh(e,r);const l=o?Ah(e,n):void 0;return Gs=!1,l}function Ah(e,n){const s=e.type;e.accessCache=Object.create(null),e.proxy=Xr(new Proxy(e.ctx,Qf));const{setup:r}=s;if(r){const o=e.setupContext=r.length>1?kh(e):null;ls(e),us();const l=pn(r,e,0,[e.props,o]);if(ps(),On(),Lc(l)){if(l.then(On,On),n)return l.then(a=>{Za(e,a,n)}).catch(a=>{Jr(a,e,0)});e.asyncDep=l}else Za(e,l,n)}else Su(e,n)}function Za(e,n,s){ue(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:qe(n)&&(e.setupState=eu(n)),Su(e,s)}let Qa;function Su(e,n,s){const r=e.type;if(!e.render){if(!n&&Qa&&!r.render){const o=r.template;if(o){const{isCustomElement:l,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=r,u=lt(lt({isCustomElement:l,delimiters:i},a),c);r.render=Qa(o,u)}}e.render=r.render||Ot}ls(e),us(),Xf(e),ps(),On()}function Bh(e){return new Proxy(e.attrs,{get(n,s){return bt(e,"get","$attrs"),n[s]}})}function kh(e){const n=r=>{e.exposed=r||{}};let s;return{get attrs(){return s||(s=Bh(e))},slots:e.slots,emit:e.emit,expose:n}}function ao(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eu(Xr(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in Fr)return Fr[s](e)}}))}function sl(e,n=!0){return ue(e)?e.displayName||e.name:e.name||n&&e.__name}function $h(e){return ue(e)&&"__vccOpts"in e}const S=(e,n)=>Cf(e,n,Gs);function gt(e,n,s){const r=arguments.length;return r===2?qe(n)&&!oe(n)?os(n)?C(e,null,[n]):C(e,n):C(e,null,n):(r>3?s=Array.prototype.slice.call(arguments,2):r===3&&os(s)&&(s=[s]),C(e,n,s))}const Ch="3.2.37",Eh="http://www.w3.org/2000/svg",Bn=typeof document!="undefined"?document:null,Xa=Bn&&Bn.createElement("template"),Dh={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,r)=>{const o=n?Bn.createElementNS(Eh,e):Bn.createElement(e,s?{is:s}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Bn.createTextNode(e),createComment:e=>Bn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Bn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},cloneNode(e){const n=e.cloneNode(!0);return"_value"in e&&(n._value=e._value),n},insertStaticContent(e,n,s,r,o,l){const a=s?s.previousSibling:n.lastChild;if(o&&(o===l||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),s),!(o===l||!(o=o.nextSibling)););else{Xa.innerHTML=r?`<svg>${e}</svg>`:e;const i=Xa.content;if(r){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Sh(e,n,s){const r=e._vtc;r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function Th(e,n,s){const r=e.style,o=He(s);if(s&&!o){for(const l in s)rl(r,l,s[l]);if(n&&!He(n))for(const l in n)s[l]==null&&rl(r,l,"")}else{const l=r.display;o?n!==s&&(r.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(r.display=l)}}const Ja=/\s*!important$/;function rl(e,n,s){if(oe(s))s.forEach(r=>rl(e,n,r));else if(s==null&&(s=""),n.startsWith("--"))e.setProperty(n,s);else{const r=Oh(e,n);Ja.test(s)?e.setProperty(Pn(r),s.replace(Ja,""),"important"):e[r]=s}}const ei=["Webkit","Moz","ms"],wo={};function Oh(e,n){const s=wo[n];if(s)return s;let r=Vt(n);if(r!=="filter"&&r in e)return wo[n]=r;r=Zr(r);for(let o=0;o<ei.length;o++){const l=ei[o]+r;if(l in e)return wo[n]=l}return n}const ti="http://www.w3.org/1999/xlink";function Nh(e,n,s,r,o){if(r&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(ti,n.slice(6,n.length)):e.setAttributeNS(ti,n,s);else{const l=Td(n);s==null||l&&!Mc(s)?e.removeAttribute(n):e.setAttribute(n,l?"":s)}}function Fh(e,n,s,r,o,l,a){if(n==="innerHTML"||n==="textContent"){r&&a(r,o,l),e[n]=s==null?"":s;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s==null?"":s;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(n);return}let i=!1;if(s===""||s==null){const c=typeof e[n];c==="boolean"?s=Mc(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{e[n]=s}catch{}i&&e.removeAttribute(n)}const[Tu,Mh]=(()=>{let e=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(s&&Number(s[1])<=53)}return[e,n]})();let ol=0;const Ph=Promise.resolve(),Ih=()=>{ol=0},Lh=()=>ol||(Ph.then(Ih),ol=Tu());function Kn(e,n,s,r){e.addEventListener(n,s,r)}function Rh(e,n,s,r){e.removeEventListener(n,s,r)}function Hh(e,n,s,r,o=null){const l=e._vei||(e._vei={}),a=l[n];if(r&&a)a.value=r;else{const[i,c]=jh(n);if(r){const u=l[n]=zh(r,o);Kn(e,i,u,c)}else a&&(Rh(e,i,a,c),l[n]=void 0)}}const ni=/(?:Once|Passive|Capture)$/;function jh(e){let n;if(ni.test(e)){n={};let s;for(;s=e.match(ni);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[Pn(e.slice(2)),n]}function zh(e,n){const s=r=>{const o=r.timeStamp||Tu();(Mh||o>=s.attached-1)&&Nt(Vh(r,s.value),n,5,[r])};return s.value=e,s.attached=Lh(),s}function Vh(e,n){if(oe(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(r=>o=>!o._stopped&&r&&r(o))}else return n}const si=/^on[a-z]/,Uh=(e,n,s,r,o=!1,l,a,i,c)=>{n==="class"?Sh(e,r,o):n==="style"?Th(e,s,r):Kr(n)?Ml(n)||Hh(e,n,s,r,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):qh(e,n,r,o))?Fh(e,n,r,l,a,i,c):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Nh(e,n,r,o))};function qh(e,n,s,r){return r?!!(n==="innerHTML"||n==="textContent"||n in e&&si.test(n)&&ue(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||si.test(n)&&He(s)?!1:n in e}const ri=e=>{const n=e.props["onUpdate:modelValue"]||!1;return oe(n)?s=>Jn(n,s):n};function Wh(e){e.target.composing=!0}function oi(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Kh={created(e,{modifiers:{lazy:n,trim:s,number:r}},o){e._assign=ri(o);const l=r||o.props&&o.props.type==="number";Kn(e,n?"change":"input",a=>{if(a.target.composing)return;let i=e.value;s&&(i=i.trim()),l&&(i=Vo(i)),e._assign(i)}),s&&Kn(e,"change",()=>{e.value=e.value.trim()}),n||(Kn(e,"compositionstart",Wh),Kn(e,"compositionend",oi),Kn(e,"change",oi))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:s,trim:r,number:o}},l){if(e._assign=ri(l),e.composing||document.activeElement===e&&e.type!=="range"&&(s||r&&e.value.trim()===n||(o||e.type==="number")&&Vo(e.value)===n))return;const a=n==null?"":n;e.value!==a&&(e.value=a)}},Yh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},li=(e,n)=>s=>{if(!("key"in s))return;const r=Pn(s.key);if(n.some(o=>o===r||Yh[o]===r))return e(s)},Ou={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):_s(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:r}){!n!=!s&&(r?n?(r.beforeEnter(e),_s(e,!0),r.enter(e)):r.leave(e,()=>{_s(e,!1)}):_s(e,n))},beforeUnmount(e,{value:n}){_s(e,n)}};function _s(e,n){e.style.display=n?e._vod:"none"}const Gh=lt({patchProp:Uh},Dh);let ai;function Zh(){return ai||(ai=uh(Gh))}const Qh=(...e)=>{const n=Zh().createApp(...e),{mount:s}=n;return n.mount=r=>{const o=Xh(r);if(!o)return;const l=n._component;!ue(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.innerHTML="";const a=s(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},n};function Xh(e){return He(e)?document.querySelector(e):e}var Jh=Object.defineProperty,ii=Object.getOwnPropertySymbols,em=Object.prototype.hasOwnProperty,tm=Object.prototype.propertyIsEnumerable,ci=(e,n,s)=>n in e?Jh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,nm=(e,n)=>{for(var s in n||(n={}))em.call(n,s)&&ci(e,s,n[s]);if(ii)for(var s of ii(n))tm.call(n,s)&&ci(e,s,n[s]);return e},Nu="usehead",ui="head:count",xo="data-head-attrs",sm=(e,n,s)=>{const r=s.createElement(e);for(const o of Object.keys(n)){let l=n[o];o==="key"||l===!1||(o==="children"?r.textContent=l:r.setAttribute(o,l))}return r};function rm(e,n){if(e instanceof HTMLElement&&n instanceof HTMLElement){const s=n.getAttribute("nonce");if(s&&!e.getAttribute("nonce")){const r=n.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=s,s===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(n)}var om=e=>{const n=["key","id","name","property"];for(const s of n){const r=typeof e.getAttribute=="function"?e.hasAttribute(s)?e.getAttribute(s):void 0:e[s];if(r!==void 0)return{name:s,value:r}}},lm=()=>{const e=F(Nu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},am=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],im=e=>{const n=[];for(const s of Object.keys(e))if(e[s]!=null){if(s==="title")n.push({tag:s,props:{children:e[s]}});else if(s==="base")n.push({tag:s,props:nm({key:"default"},e[s])});else if(am.includes(s)){const r=e[s];Array.isArray(r)?r.forEach(o=>{n.push({tag:s,props:o})}):r&&n.push({tag:s,props:r})}}return n},pi=(e,n)=>{const s=e.getAttribute(xo);if(s)for(const o of s.split(","))o in n||e.removeAttribute(o);const r=[];for(const o in n){const l=n[o];l!=null&&(l===!1?e.removeAttribute(o):e.setAttribute(o,l),r.push(o))}r.length?e.setAttribute(xo,r.join(",")):e.removeAttribute(xo)},cm=(e=window.document,n,s)=>{var r;const o=e.head;let l=o.querySelector(`meta[name="${ui}"]`);const a=l?Number(l.getAttribute("content")):0,i=[];if(l)for(let u=0,p=l.previousElementSibling;u<a;u++,p=(p==null?void 0:p.previousElementSibling)||null)((r=p==null?void 0:p.tagName)==null?void 0:r.toLowerCase())===n&&i.push(p);else l=e.createElement("meta"),l.setAttribute("name",ui),l.setAttribute("content","0"),o.append(l);let c=s.map(u=>sm(u.tag,u.props,e));c=c.filter(u=>{for(let p=0;p<i.length;p++){const h=i[p];if(rm(h,u))return i.splice(p,1),!1}return!0}),i.forEach(u=>{var p;return(p=u.parentNode)==null?void 0:p.removeChild(u)}),c.forEach(u=>{o.insertBefore(u,l)}),l.setAttribute("content",""+(a-i.length+c.length))},um=()=>{let e=[],n=new Set;const s={install(r){r.config.globalProperties.$head=s,r.provide(Nu,s)},get headTags(){const r=[];return e.forEach(o=>{im(o.value).forEach(a=>{if(a.tag==="meta"||a.tag==="base"||a.tag==="script"){const i=om(a.props);if(i){let c=-1;for(let u=0;u<r.length;u++){const p=r[u],h=p.props[i.name],f=a.props[i.name];if(p.tag===a.tag&&h===f){c=u;break}}c!==-1&&r.splice(c,1)}}r.push(a)})}),r},addHeadObjs(r){e.push(r)},removeHeadObjs(r){e=e.filter(o=>o!==r)},updateDOM(r=window.document){let o,l={},a={};const i={};for(const u of s.headTags){if(u.tag==="title"){o=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(l,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(a,u.props);continue}i[u.tag]=i[u.tag]||[],i[u.tag].push(u)}o!==void 0&&(r.title=o),pi(r.documentElement,l),pi(r.body,a);const c=new Set([...Object.keys(i),...n]);for(const u of c)cm(r,u,i[u]||[]);n.clear(),Object.keys(i).forEach(u=>n.add(u))}};return s},pm=typeof window!="undefined",dm=e=>{const n=q(e),s=lm();s.addHeadObjs(n),pm&&(or(()=>{s.updateDOM()}),ro(()=>{s.removeHeadObjs(n),s.updateDOM()}))};const Ns=Symbol("v-click-clicks"),kn=Symbol("v-click-clicks-elements"),ll=Symbol("v-click-clicks-order-map"),Fs=Symbol("v-click-clicks-disabled"),Fu=Symbol("slidev-slide-scale"),L=Symbol("slidev-slidev-context"),fm=Symbol("slidev-route"),hm=Symbol("slidev-slide-context"),An="slidev-vclick-target",Ao="slidev-vclick-hidden",mm="slidev-vclick-fade",Bo="slidev-vclick-hidden-explicitly",vs="slidev-vclick-current",_r="slidev-vclick-prior";function al(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function ym(...e){let n,s,r;e.length===1?(n=0,r=1,[s]=e):[n,s,r=1]=e;const o=[];let l=n;for(;l<s;)o.push(l),l+=r||1;return o}function gm(e){return e!=null}function _m(e,n){return Object.fromEntries(Object.entries(e).map(([s,r])=>n(s,r)).filter(gm))}var En={theme:"./slidev-theme-academic-1.1.1",title:"Binary Search Trees",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},fonts:{sans:['"Montserrat"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Roboto Slab"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Roboto Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Montserrat","Roboto Slab","Roboto Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",hightlighter:"prism",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap8/cover.png",class:"text-white",coverDate:null};const xe=En;var Nc;const dn=(Nc=xe.aspectRatio)!=null?Nc:16/9;var Fc;const Nn=(Fc=xe.canvasWidth)!=null?Fc:980,Mu=Math.round(Nn/dn),Pu=S(()=>_m(xe.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function $t(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const Ln=Ie({page:0,clicks:0});let vm=[],bm=[];$t(Ln,"$syncUp",!0);$t(Ln,"$syncDown",!0);$t(Ln,"$paused",!1);$t(Ln,"$onSet",e=>vm.push(e));$t(Ln,"$onPatch",e=>bm.push(e));$t(Ln,"$patch",async()=>!1);function Iu(e,n,s=!1){const r=[];let o=!1,l=!1,a,i;const c=Ie(n);function u(m){r.push(m)}function p(m,g){clearTimeout(a),o=!0,c[m]=g,a=setTimeout(()=>o=!1,0)}function h(m){o||(clearTimeout(i),l=!0,Object.entries(m).forEach(([g,x])=>{c[g]=x}),i=setTimeout(()=>l=!1,0))}function f(m){let g;s?s&&window.addEventListener("storage",b=>{b&&b.key===m&&b.newValue&&h(JSON.parse(b.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",b=>h(b.data)));function x(){!s&&g&&!l?g.postMessage(Ae(c)):s&&!l&&window.localStorage.setItem(m,JSON.stringify(c)),o||r.forEach(b=>b(c))}if(fe(c,x,{deep:!0}),s){const b=window.localStorage.getItem(m);b&&h(JSON.parse(b))}}return{init:f,onPatch:u,patch:p,state:c}}const{init:wm,onPatch:xm,patch:di,state:ko}=Iu(Ln,{page:1,clicks:0}),Rn=Ie({});let Am=[],Bm=[];$t(Rn,"$syncUp",!0);$t(Rn,"$syncDown",!0);$t(Rn,"$paused",!1);$t(Rn,"$onSet",e=>Am.push(e));$t(Rn,"$onPatch",e=>Bm.push(e));$t(Rn,"$patch",async()=>!1);const{init:km,onPatch:$m,patch:Lu,state:Pr}=Iu(Rn,{},!1),Cm="modulepreload",fi={},Em="/courses/data-structure/binary-search-trees/",fs=function(n,s){return!s||s.length===0?n():Promise.all(s.map(r=>{if(r=`${Em}${r}`,r in fi)return;fi[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Cm,o||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),o)return new Promise((i,c)=>{a.addEventListener("load",i),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};function it(e,n,s){return Array.isArray(e)?(e.length=Math.max(e.length,n),e.splice(n,1,s),s):(e[n]=s,s)}function Dm(e,n){if(Array.isArray(e)){e.splice(n,1);return}delete e[n]}var hi;const ct=typeof window!="undefined",Sm=e=>typeof e!="undefined",Tm=Object.prototype.toString,Om=e=>typeof e=="number",Ru=e=>typeof e=="string",Ir=e=>Tm.call(e)==="[object Object]",il=()=>+Date.now(),fn=()=>{};ct&&((hi=window==null?void 0:window.navigator)==null?void 0:hi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Nm(e,n){function s(...r){e(()=>n.apply(this,r),{fn:n,thisArg:this,args:r})}return s}const Hu=e=>e();function Fm(e=Hu){const n=q(!0);function s(){n.value=!1}function r(){n.value=!0}return{isActive:n,pause:s,resume:r,eventFilter:(...l)=>{n.value&&e(...l)}}}function Mm(e,n){var s;if(typeof e=="number")return e+n;const r=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",o=e.slice(r.length),l=parseFloat(r)+n;return Number.isNaN(l)?e:l+o}function Xt(e){return Ud()?(qd(e),!0):!1}function ze(...e){return S(()=>e.every(n=>w(n)))}function dt(e){return S(()=>!w(e))}function Pm(e){if(!ke(e))return Ie(e);const n=new Proxy({},{get(s,r,o){return w(Reflect.get(e.value,r,o))},set(s,r,o){return ke(e.value[r])&&!ke(o)?e.value[r].value=o:e.value[r]=o,!0},deleteProperty(s,r){return Reflect.deleteProperty(e.value,r)},has(s,r){return Reflect.has(e.value,r)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ie(n)}var Im=Object.defineProperty,Lm=Object.defineProperties,Rm=Object.getOwnPropertyDescriptors,mi=Object.getOwnPropertySymbols,Hm=Object.prototype.hasOwnProperty,jm=Object.prototype.propertyIsEnumerable,yi=(e,n,s)=>n in e?Im(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,zm=(e,n)=>{for(var s in n||(n={}))Hm.call(n,s)&&yi(e,s,n[s]);if(mi)for(var s of mi(n))jm.call(n,s)&&yi(e,s,n[s]);return e},Vm=(e,n)=>Lm(e,Rm(n));function Um(e){if(!ke(e))return Af(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=xf(()=>({get(){return e.value[s]},set(r){if(Array.isArray(e.value)){const o=[...e.value];o[s]=r,e.value=o}else{const o=Vm(zm({},e.value),{[s]:r});Object.setPrototypeOf(o,e.value),e.value=o}}}));return n}function qm(e,n=!0){In()?hu(e):n?e():Ge(e)}function Wm(e,n=!0){In()?ds(e):n?e():Ge(e)}function ea(e){In()&&oo(e)}function Km(e,n=1e3,s={}){const{immediate:r=!0,immediateCallback:o=!1}=s;let l=null;const a=q(!1);function i(){l&&(clearInterval(l),l=null)}function c(){a.value=!1,i()}function u(){w(n)<=0||(a.value=!0,o&&e(),i(),l=setInterval(e,w(n)))}if(r&&ct&&u(),ke(n)){const p=fe(n,()=>{a.value&&ct&&u()});Xt(p)}return Xt(c),{isActive:a,pause:c,resume:u}}function Ym(e,n,s={}){const{immediate:r=!0}=s,o=q(!1);let l=null;function a(){l&&(clearTimeout(l),l=null)}function i(){o.value=!1,a()}function c(...u){a(),o.value=!0,l=setTimeout(()=>{o.value=!1,l=null,e(...u)},w(n))}return r&&(o.value=!0,ct&&c()),Xt(i),{isPending:o,start:c,stop:i}}function ju(e=!1,n={}){const{truthyValue:s=!0,falsyValue:r=!1}=n,o=ke(e),l=q(e);function a(i){return arguments.length?(l.value=i,l.value):(l.value=l.value===w(s)?w(r):w(s),l.value)}return o?a:[l,a]}var gi=Object.getOwnPropertySymbols,Gm=Object.prototype.hasOwnProperty,Zm=Object.prototype.propertyIsEnumerable,Qm=(e,n)=>{var s={};for(var r in e)Gm.call(e,r)&&n.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&gi)for(var r of gi(e))n.indexOf(r)<0&&Zm.call(e,r)&&(s[r]=e[r]);return s};function Xm(e,n,s={}){const r=s,{eventFilter:o=Hu}=r,l=Qm(r,["eventFilter"]);return fe(e,Nm(o,n),l)}function Jm(e,n,s){const r=fe(e,(...o)=>(Ge(()=>r()),n(...o)),s)}var ey=Object.defineProperty,ty=Object.defineProperties,ny=Object.getOwnPropertyDescriptors,Lr=Object.getOwnPropertySymbols,zu=Object.prototype.hasOwnProperty,Vu=Object.prototype.propertyIsEnumerable,_i=(e,n,s)=>n in e?ey(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,sy=(e,n)=>{for(var s in n||(n={}))zu.call(n,s)&&_i(e,s,n[s]);if(Lr)for(var s of Lr(n))Vu.call(n,s)&&_i(e,s,n[s]);return e},ry=(e,n)=>ty(e,ny(n)),oy=(e,n)=>{var s={};for(var r in e)zu.call(e,r)&&n.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&Lr)for(var r of Lr(e))n.indexOf(r)<0&&Vu.call(e,r)&&(s[r]=e[r]);return s};function ly(e,n,s={}){const r=s,{eventFilter:o}=r,l=oy(r,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=Fm(o);return{stop:Xm(e,n,ry(sy({},l),{eventFilter:a})),pause:i,resume:c,isActive:u}}function rt(e){var n;const s=w(e);return(n=s==null?void 0:s.$el)!=null?n:s}const et=ct?window:void 0,ay=ct?window.document:void 0,iy=ct?window.navigator:void 0;function Be(...e){let n,s,r,o;if(Ru(e[0])?([s,r,o]=e,n=et):[n,s,r,o]=e,!n)return fn;let l=fn;const a=fe(()=>rt(n),c=>{l(),c&&(c.addEventListener(s,r,o),l=()=>{c.removeEventListener(s,r,o),l=fn})},{immediate:!0,flush:"post"}),i=()=>{a(),l()};return Xt(i),i}function cy(e,n,s={}){const{window:r=et,ignore:o,capture:l=!0,detectIframe:a=!1}=s;if(!r)return;const i=q(!0);let c;const u=f=>{r.clearTimeout(c);const m=rt(e),g=f.composedPath();!m||m===f.target||g.includes(m)||!i.value||o&&o.length>0&&o.some(x=>{const b=rt(x);return b&&(f.target===b||g.includes(b))})||n(f)},p=[Be(r,"click",u,{passive:!0,capture:l}),Be(r,"pointerdown",f=>{const m=rt(e);i.value=!!m&&!f.composedPath().includes(m)},{passive:!0}),Be(r,"pointerup",f=>{if(f.button===0){const m=f.composedPath();f.composedPath=()=>m,c=r.setTimeout(()=>u(f),50)}},{passive:!0}),a&&Be(r,"blur",f=>{var m;const g=rt(e);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&n(f)})].filter(Boolean);return()=>p.forEach(f=>f())}const uy=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):e?()=>!0:()=>!1;function py(e,n,s={}){const{target:r=et,eventName:o="keydown",passive:l=!1}=s,a=uy(e);return Be(r,o,c=>{a(c)&&n(c)},l)}function dy(e={}){const{window:n=et}=e,s=q(0);return n&&(Be(n,"blur",()=>s.value+=1,!0),Be(n,"focus",()=>s.value+=1,!0)),S(()=>(s.value,n==null?void 0:n.document.activeElement))}function kr(e,n={}){const{window:s=et}=n,r=Boolean(s&&"matchMedia"in s&&typeof s.matchMedia=="function");let o;const l=q(!1),a=()=>{!r||(o||(o=s.matchMedia(e)),l.value=o.matches)};return qm(()=>{a(),o&&("addEventListener"in o?o.addEventListener("change",a):o.addListener(a),Xt(()=>{"removeEventListener"in o?o.removeEventListener("change",a):o.removeListener(a)}))}),l}const fy={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var hy=Object.defineProperty,vi=Object.getOwnPropertySymbols,my=Object.prototype.hasOwnProperty,yy=Object.prototype.propertyIsEnumerable,bi=(e,n,s)=>n in e?hy(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,gy=(e,n)=>{for(var s in n||(n={}))my.call(n,s)&&bi(e,s,n[s]);if(vi)for(var s of vi(n))yy.call(n,s)&&bi(e,s,n[s]);return e};function _y(e,n={}){function s(i,c){let u=e[i];return c!=null&&(u=Mm(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:r=et}=n;function o(i){return r?r.matchMedia(i).matches:!1}const l=i=>kr(`(min-width: ${s(i)})`,n),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>l(c),enumerable:!0,configurable:!0}),i),{});return gy({greater:l,smaller(i){return kr(`(max-width: ${s(i,-.1)})`,n)},between(i,c){return kr(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return o(`(min-width: ${s(i)})`)},isSmaller(i){return o(`(max-width: ${s(i,-.1)})`)},isInBetween(i,c){return o(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function vy(e={}){const{navigator:n=iy,read:s=!1,source:r,copiedDuring:o=1500}=e,l=["copy","cut"],a=Boolean(n&&"clipboard"in n),i=q(""),c=q(!1),u=Ym(()=>c.value=!1,o);function p(){n.clipboard.readText().then(f=>{i.value=f})}if(a&&s)for(const f of l)Be(f,p);async function h(f=w(r)){a&&f!=null&&(await n.clipboard.writeText(f),i.value=f,c.value=!0,u.start())}return{isSupported:a,text:i,copied:c,copy:h}}const cl=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ul="__vueuse_ssr_handlers__";cl[ul]=cl[ul]||{};const by=cl[ul];function wy(e,n){return by[e]||n}function xy(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Ay={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Pt(e,n,s,r={}){var o;const{flush:l="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,shallow:u,window:p=et,eventFilter:h,onError:f=M=>{console.error(M)}}=r,m=(u?Ut:q)(n);if(!s)try{s=wy("getDefaultStorage",()=>{var M;return(M=et)==null?void 0:M.localStorage})()}catch(M){f(M)}if(!s)return m;const g=w(n),x=xy(g),b=(o=r.serializer)!=null?o:Ay[x],{pause:E,resume:k}=ly(m,()=>$(m.value),{flush:l,deep:a,eventFilter:h});return p&&i&&Be(p,"storage",j),j(),m;function $(M){try{M==null?s.removeItem(e):s.setItem(e,b.write(M))}catch(K){f(K)}}function D(M){if(!(M&&M.key!==e)){E();try{const K=M?M.newValue:s.getItem(e);return K==null?(c&&g!==null&&s.setItem(e,b.write(g)),g):typeof K!="string"?K:b.read(K)}catch(K){f(K)}finally{k()}}}function j(M){M&&M.key!==e||(m.value=D(M))}}function By(e){return kr("(prefers-color-scheme: dark)",e)}var ky=Object.defineProperty,$y=Object.defineProperties,Cy=Object.getOwnPropertyDescriptors,wi=Object.getOwnPropertySymbols,Ey=Object.prototype.hasOwnProperty,Dy=Object.prototype.propertyIsEnumerable,xi=(e,n,s)=>n in e?ky(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Sy=(e,n)=>{for(var s in n||(n={}))Ey.call(n,s)&&xi(e,s,n[s]);if(wi)for(var s of wi(n))Dy.call(n,s)&&xi(e,s,n[s]);return e},Ty=(e,n)=>$y(e,Cy(n));function U6(e,n={}){var s,r;const o=(s=n.draggingElement)!=null?s:et,l=q((r=n.initialValue)!=null?r:{x:0,y:0}),a=q(),i=f=>n.pointerTypes?n.pointerTypes.includes(f.pointerType):!0,c=f=>{w(n.preventDefault)&&f.preventDefault(),w(n.stopPropagation)&&f.stopPropagation()},u=f=>{var m;if(!i(f)||w(n.exact)&&f.target!==w(e))return;const g=w(e).getBoundingClientRect(),x={x:f.pageX-g.left,y:f.pageY-g.top};((m=n.onStart)==null?void 0:m.call(n,x,f))!==!1&&(a.value=x,c(f))},p=f=>{var m;!i(f)||!a.value||(l.value={x:f.pageX-a.value.x,y:f.pageY-a.value.y},(m=n.onMove)==null||m.call(n,l.value,f),c(f))},h=f=>{var m;!i(f)||!a.value||(a.value=void 0,(m=n.onEnd)==null||m.call(n,l.value,f),c(f))};return ct&&(Be(e,"pointerdown",u,!0),Be(o,"pointermove",p,!0),Be(o,"pointerup",h,!0)),Ty(Sy({},Um(l)),{position:l,isDragging:S(()=>!!a.value),style:S(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var Ai=Object.getOwnPropertySymbols,Oy=Object.prototype.hasOwnProperty,Ny=Object.prototype.propertyIsEnumerable,Fy=(e,n)=>{var s={};for(var r in e)Oy.call(e,r)&&n.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&Ai)for(var r of Ai(e))n.indexOf(r)<0&&Ny.call(e,r)&&(s[r]=e[r]);return s};function My(e,n,s={}){const r=s,{window:o=et}=r,l=Fy(r,["window"]);let a;const i=o&&"ResizeObserver"in o,c=()=>{a&&(a.disconnect(),a=void 0)},u=fe(()=>rt(e),h=>{c(),i&&o&&h&&(a=new ResizeObserver(n),a.observe(h,l))},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return Xt(p),{isSupported:i,stop:p}}function Uu(e,n={}){const{immediate:s=!0,window:r=et}=n,o=q(!1);let l=null;function a(){!o.value||!r||(e(),l=r.requestAnimationFrame(a))}function i(){!o.value&&r&&(o.value=!0,a())}function c(){o.value=!1,l!=null&&r&&(r.cancelAnimationFrame(l),l=null)}return s&&i(),Xt(c),{isActive:o,pause:c,resume:i}}function Py(e,n={width:0,height:0},s={}){const r=q(n.width),o=q(n.height);return My(e,([l])=>{r.value=l.contentRect.width,o.value=l.contentRect.height},s),fe(()=>rt(e),l=>{r.value=l?n.width:0,o.value=l?n.height:0}),{width:r,height:o}}const Bi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Iy(e,n={}){const{document:s=ay,autoExit:r=!1}=n,o=e||(s==null?void 0:s.querySelector("html")),l=q(!1);let a=!1,i=Bi[0];if(!s)a=!1;else for(const x of Bi)if(x[1]in s){i=x,a=!0;break}const[c,u,p,,h]=i;async function f(){!a||(s!=null&&s[p]&&await s[u](),l.value=!1)}async function m(){if(!a)return;await f();const x=rt(o);x&&(await x[c](),l.value=!0)}async function g(){l.value?await f():await m()}return s&&Be(s,h,()=>{l.value=!!(s!=null&&s[p])},!1),r&&Xt(f),{isSupported:a,isFullscreen:l,enter:m,exit:f,toggle:g}}function Ly(e,n,s={}){const{root:r,rootMargin:o="0px",threshold:l=.1,window:a=et}=s,i=a&&"IntersectionObserver"in a;let c=fn;const u=i?fe(()=>({el:rt(e),root:rt(r)}),({el:h,root:f})=>{if(c(),!h)return;const m=new IntersectionObserver(n,{root:f,rootMargin:o,threshold:l});m.observe(h),c=()=>{m.disconnect(),c=fn}},{immediate:!0,flush:"post"}):fn,p=()=>{c(),u()};return Xt(p),{isSupported:i,stop:p}}const Ry={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Hy(e={}){const{reactive:n=!1,target:s=et,aliasMap:r=Ry,passive:o=!0,onEventFired:l=fn}=e,a=Ie(new Set),i={toJSON(){return{}},current:a},c=n?Ie(i):i,u=new Set,p=new Set;function h(x,b){x in c&&(n?c[x]=b:c[x].value=b)}function f(){for(const x of p)h(x,!1)}function m(x,b){var E,k;const $=(E=x.key)==null?void 0:E.toLowerCase(),D=(k=x.code)==null?void 0:k.toLowerCase(),j=[D,$].filter(Boolean);D&&(b?a.add(x.code):a.delete(x.code));for(const M of j)p.add(M),h(M,b);$==="meta"&&!b?(u.forEach(M=>{a.delete(M),h(M,!1)}),u.clear()):typeof x.getModifierState=="function"&&x.getModifierState("Meta")&&b&&[...a,...j].forEach(M=>u.add(M))}s&&(Be(s,"keydown",x=>(m(x,!0),l(x)),{passive:o}),Be(s,"keyup",x=>(m(x,!1),l(x)),{passive:o}),Be("blur",f,{passive:!0}),Be("focus",f,{passive:!0}));const g=new Proxy(c,{get(x,b,E){if(typeof b!="string")return Reflect.get(x,b,E);if(b=b.toLowerCase(),b in r&&(b=r[b]),!(b in c))if(/[+_-]/.test(b)){const $=b.split(/[+_-]/g).map(D=>D.trim());c[b]=S(()=>$.every(D=>w(g[D])))}else c[b]=q(!1);const k=Reflect.get(x,b,E);return n?w(k):k}});return g}function q6(e={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:r=!1,initialValue:o={x:0,y:0},window:l=et,eventFilter:a}=e,i=q(o.x),c=q(o.y),u=q(null),p=x=>{n==="page"?(i.value=x.pageX,c.value=x.pageY):n==="client"&&(i.value=x.clientX,c.value=x.clientY),u.value="mouse"},h=()=>{i.value=o.x,c.value=o.y},f=x=>{if(x.touches.length>0){const b=x.touches[0];n==="page"?(i.value=b.pageX,c.value=b.pageY):n==="client"&&(i.value=b.clientX,c.value=b.clientY),u.value="touch"}},m=x=>a===void 0?p(x):a(()=>p(x),{}),g=x=>a===void 0?f(x):a(()=>f(x),{});return l&&(Be(l,"mousemove",m,{passive:!0}),Be(l,"dragover",m,{passive:!0}),s&&(Be(l,"touchstart",g,{passive:!0}),Be(l,"touchmove",g,{passive:!0}),r&&Be(l,"touchend",h,{passive:!0}))),{x:i,y:c,sourceType:u}}var Zt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Zt||(Zt={}));function jy(e,n={}){const s=q(e),{threshold:r=50,onSwipe:o,onSwipeEnd:l,onSwipeStart:a}=n,i=Ie({x:0,y:0}),c=(M,K)=>{i.x=M,i.y=K},u=Ie({x:0,y:0}),p=(M,K)=>{u.x=M,u.y=K},h=S(()=>i.x-u.x),f=S(()=>i.y-u.y),{max:m,abs:g}=Math,x=S(()=>m(g(h.value),g(f.value))>=r),b=q(!1),E=q(!1),k=S(()=>x.value?g(h.value)>g(f.value)?h.value>0?Zt.LEFT:Zt.RIGHT:f.value>0?Zt.UP:Zt.DOWN:Zt.NONE),$=M=>n.pointerTypes?n.pointerTypes.includes(M.pointerType):!0,D=[Be(e,"pointerdown",M=>{var K,ie;if(!$(M))return;E.value=!0,(ie=(K=s.value)==null?void 0:K.style)==null||ie.setProperty("touch-action","none");const he=M.target;he==null||he.setPointerCapture(M.pointerId);const{clientX:ye,clientY:ve}=M;c(ye,ve),p(ye,ve),a==null||a(M)}),Be(e,"pointermove",M=>{if(!$(M)||!E.value)return;const{clientX:K,clientY:ie}=M;p(K,ie),!b.value&&x.value&&(b.value=!0),b.value&&(o==null||o(M))}),Be(e,"pointerup",M=>{var K,ie;!$(M)||(b.value&&(l==null||l(M,k.value)),E.value=!1,b.value=!1,(ie=(K=s.value)==null?void 0:K.style)==null||ie.setProperty("touch-action","initial"))})],j=()=>D.forEach(M=>M());return{isSwiping:Gn(b),direction:Gn(k),posStart:Gn(i),posEnd:Gn(u),distanceX:h,distanceY:f,stop:j}}var zy=Object.defineProperty,ki=Object.getOwnPropertySymbols,Vy=Object.prototype.hasOwnProperty,Uy=Object.prototype.propertyIsEnumerable,$i=(e,n,s)=>n in e?zy(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,qy=(e,n)=>{for(var s in n||(n={}))Vy.call(n,s)&&$i(e,s,n[s]);if(ki)for(var s of ki(n))Uy.call(n,s)&&$i(e,s,n[s]);return e};function W6(e={}){const{controls:n=!1,offset:s=0,immediate:r=!0,interval:o="requestAnimationFrame"}=e,l=q(il()+s),a=()=>l.value=il()+s,i=o==="requestAnimationFrame"?Uu(a,{immediate:r}):Km(a,o,{immediate:r});return n?qy({timestamp:l},i):l}function jt(e,n,s,r={}){var o,l,a;const{passive:i=!1,eventName:c,deep:u=!1,defaultValue:p}=r,h=In(),f=s||(h==null?void 0:h.emit)||((o=h==null?void 0:h.$emit)==null?void 0:o.bind(h))||((a=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let m=c;n||(n="modelValue"),m=c||m||`update:${n.toString()}`;const g=()=>Sm(e[n])?e[n]:p;if(i){const x=q(g());return fe(()=>e[n],b=>x.value=b),fe(x,b=>{(b!==e[n]||u)&&f(m,b)},{deep:u}),x}else return S({get(){return g()},set(x){f(m,x)}})}function K6({window:e=et}={}){if(!e)return q(!1);const n=q(e.document.hasFocus());return Be(e,"blur",()=>{n.value=!1}),Be(e,"focus",()=>{n.value=!0}),n}function Wy(e={}){const{window:n=et,initialWidth:s=1/0,initialHeight:r=1/0,listenOrientation:o=!0}=e,l=q(s),a=q(r),i=()=>{n&&(l.value=n.innerWidth,a.value=n.innerHeight)};return i(),Wm(i),Be("resize",i,{passive:!0}),o&&Be("orientationchange",i,{passive:!0}),{width:l,height:a}}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yn=typeof window!="undefined";function Ky(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function $o(e,n){const s={};for(const r in n){const o=n[r];s[r]=Mt(o)?o.map(e):e(o)}return s}const Ms=()=>{},Mt=Array.isArray,Yy=/\/$/,Gy=e=>e.replace(Yy,"");function Co(e,n,s="/"){let r,o={},l="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(r=n.slice(0,c),l=n.slice(c+1,i>-1?i:n.length),o=e(l)),i>-1&&(r=r||n.slice(0,i),a=n.slice(i,n.length)),r=Jy(r!=null?r:n,s),{fullPath:r+(l&&"?")+l+a,path:r,query:o,hash:a}}function Zy(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Ci(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Qy(e,n,s){const r=n.matched.length-1,o=s.matched.length-1;return r>-1&&r===o&&as(n.matched[r],s.matched[o])&&qu(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function as(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function qu(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!Xy(e[s],n[s]))return!1;return!0}function Xy(e,n){return Mt(e)?Ei(e,n):Mt(n)?Ei(n,e):e===n}function Ei(e,n){return Mt(n)?e.length===n.length&&e.every((s,r)=>s===n[r]):e.length===1&&e[0]===n}function Jy(e,n){if(e.startsWith("/"))return e;if(!e)return n;const s=n.split("/"),r=e.split("/");let o=s.length-1,l,a;for(l=0;l<r.length;l++)if(a=r[l],a!==".")if(a==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var Zs;(function(e){e.pop="pop",e.push="push"})(Zs||(Zs={}));var Ps;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ps||(Ps={}));function eg(e){if(!e)if(Yn){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gy(e)}const tg=/^[^#]+#/;function ng(e,n){return e.replace(tg,"#")+n}function sg(e,n){const s=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-s.left-(n.left||0),top:r.top-s.top-(n.top||0)}}const io=()=>({left:window.pageXOffset,top:window.pageYOffset});function rg(e){let n;if("el"in e){const s=e.el,r=typeof s=="string"&&s.startsWith("#"),o=typeof s=="string"?r?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!o)return;n=sg(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Di(e,n){return(history.state?history.state.position-n:-1)+e}const pl=new Map;function og(e,n){pl.set(e,n)}function lg(e){const n=pl.get(e);return pl.delete(e),n}let ag=()=>location.protocol+"//"+location.host;function Wu(e,n){const{pathname:s,search:r,hash:o}=n,l=e.indexOf("#");if(l>-1){let i=o.includes(e.slice(l))?e.slice(l).length:1,c=o.slice(i);return c[0]!=="/"&&(c="/"+c),Ci(c,"")}return Ci(s,e)+r+o}function ig(e,n,s,r){let o=[],l=[],a=null;const i=({state:f})=>{const m=Wu(e,location),g=s.value,x=n.value;let b=0;if(f){if(s.value=m,n.value=f,a&&a===g){a=null;return}b=x?f.position-x.position:0}else r(m);o.forEach(E=>{E(s.value,g,{delta:b,type:Zs.pop,direction:b?b>0?Ps.forward:Ps.back:Ps.unknown})})};function c(){a=s.value}function u(f){o.push(f);const m=()=>{const g=o.indexOf(f);g>-1&&o.splice(g,1)};return l.push(m),m}function p(){const{history:f}=window;!f.state||f.replaceState(Oe({},f.state,{scroll:io()}),"")}function h(){for(const f of l)f();l=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:u,destroy:h}}function Si(e,n,s,r=!1,o=!1){return{back:e,current:n,forward:s,replaced:r,position:window.history.length,scroll:o?io():null}}function cg(e){const{history:n,location:s}=window,r={value:Wu(e,s)},o={value:n.state};o.value||l(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(c,u,p){const h=e.indexOf("#"),f=h>-1?(s.host&&document.querySelector("base")?e:e.slice(h))+c:ag()+e+c;try{n[p?"replaceState":"pushState"](u,"",f),o.value=u}catch(m){console.error(m),s[p?"replace":"assign"](f)}}function a(c,u){const p=Oe({},n.state,Si(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});l(c,p,!0),r.value=c}function i(c,u){const p=Oe({},o.value,n.state,{forward:c,scroll:io()});l(p.current,p,!0);const h=Oe({},Si(r.value,c,null),{position:p.position+1},u);l(c,h,!1),r.value=c}return{location:r,state:o,push:i,replace:a}}function ug(e){e=eg(e);const n=cg(e),s=ig(e,n.state,n.location,n.replace);function r(l,a=!0){a||s.pauseListeners(),history.go(l)}const o=Oe({location:"",base:e,go:r,createHref:ng.bind(null,e)},n,s);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function pg(e){return typeof e=="string"||e&&typeof e=="object"}function Ku(e){return typeof e=="string"||typeof e=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yu=Symbol("");var Ti;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ti||(Ti={}));function is(e,n){return Oe(new Error,{type:e,[Yu]:!0},n)}function Wt(e,n){return e instanceof Error&&Yu in e&&(n==null||!!(e.type&n))}const Oi="[^/]+?",dg={sensitive:!1,strict:!1,start:!0,end:!0},fg=/[.+*?^${}()[\]/\\]/g;function hg(e,n){const s=Oe({},dg,n),r=[];let o=s.start?"^":"";const l=[];for(const u of e){const p=u.length?[]:[90];s.strict&&!u.length&&(o+="/");for(let h=0;h<u.length;h++){const f=u[h];let m=40+(s.sensitive?.25:0);if(f.type===0)h||(o+="/"),o+=f.value.replace(fg,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:x,optional:b,regexp:E}=f;l.push({name:g,repeatable:x,optional:b});const k=E||Oi;if(k!==Oi){m+=10;try{new RegExp(`(${k})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${g}" (${k}): `+D.message)}}let $=x?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||($=b&&u.length<2?`(?:/${$})`:"/"+$),b&&($+="?"),o+=$,m+=20,b&&(m+=-8),x&&(m+=-20),k===".*"&&(m+=-50)}p.push(m)}r.push(p)}if(s.strict&&s.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}s.strict||(o+="/?"),s.end?o+="$":s.strict&&(o+="(?:/|$)");const a=new RegExp(o,s.sensitive?"":"i");function i(u){const p=u.match(a),h={};if(!p)return null;for(let f=1;f<p.length;f++){const m=p[f]||"",g=l[f-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function c(u){let p="",h=!1;for(const f of e){(!h||!p.endsWith("/"))&&(p+="/"),h=!1;for(const m of f)if(m.type===0)p+=m.value;else if(m.type===1){const{value:g,repeatable:x,optional:b}=m,E=g in u?u[g]:"";if(Mt(E)&&!x)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const k=Mt(E)?E.join("/"):E;if(!k)if(b)f.length<2&&(p.endsWith("/")?p=p.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);p+=k}}return p||"/"}return{re:a,score:r,keys:l,parse:i,stringify:c}}function mg(e,n){let s=0;for(;s<e.length&&s<n.length;){const r=n[s]-e[s];if(r)return r;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function yg(e,n){let s=0;const r=e.score,o=n.score;for(;s<r.length&&s<o.length;){const l=mg(r[s],o[s]);if(l)return l;s++}if(Math.abs(o.length-r.length)===1){if(Ni(r))return 1;if(Ni(o))return-1}return o.length-r.length}function Ni(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const gg={type:0,value:""},_g=/[a-zA-Z0-9_]/;function vg(e){if(!e)return[[]];if(e==="/")return[[gg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(m){throw new Error(`ERR (${s})/"${u}": ${m}`)}let s=0,r=s;const o=[];let l;function a(){l&&o.push(l),l=[]}let i=0,c,u="",p="";function h(){!u||(s===0?l.push({type:0,value:u}):s===1||s===2||s===3?(l.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&s!==2){r=s,s=4;continue}switch(s){case 0:c==="/"?(u&&h(),a()):c===":"?(h(),s=1):f();break;case 4:f(),s=r;break;case 1:c==="("?s=2:_g.test(c)?f():(h(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:s=3:p+=c;break;case 3:h(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),h(),a(),o}function bg(e,n,s){const r=hg(vg(e.path),s),o=Oe(r,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function wg(e,n){const s=[],r=new Map;n=Mi({strict:!1,end:!0,sensitive:!1},n);function o(p){return r.get(p)}function l(p,h,f){const m=!f,g=Ag(p);g.aliasOf=f&&f.record;const x=Mi(n,p),b=[g];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const D of $)b.push(Oe({},g,{components:f?f.record.components:g.components,path:D,aliasOf:f?f.record:g}))}let E,k;for(const $ of b){const{path:D}=$;if(h&&D[0]!=="/"){const j=h.record.path,M=j[j.length-1]==="/"?"":"/";$.path=h.record.path+(D&&M+D)}if(E=bg($,h,x),f?f.alias.push(E):(k=k||E,k!==E&&k.alias.push(E),m&&p.name&&!Fi(E)&&a(p.name)),g.children){const j=g.children;for(let M=0;M<j.length;M++)l(j[M],E,f&&f.children[M])}f=f||E,c(E)}return k?()=>{a(k)}:Ms}function a(p){if(Ku(p)){const h=r.get(p);h&&(r.delete(p),s.splice(s.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=s.indexOf(p);h>-1&&(s.splice(h,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function i(){return s}function c(p){let h=0;for(;h<s.length&&yg(p,s[h])>=0&&(p.record.path!==s[h].record.path||!Gu(p,s[h]));)h++;s.splice(h,0,p),p.record.name&&!Fi(p)&&r.set(p.record.name,p)}function u(p,h){let f,m={},g,x;if("name"in p&&p.name){if(f=r.get(p.name),!f)throw is(1,{location:p});x=f.record.name,m=Oe(xg(h.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),p.params),g=f.stringify(m)}else if("path"in p)g=p.path,f=s.find(k=>k.re.test(g)),f&&(m=f.parse(g),x=f.record.name);else{if(f=h.name?r.get(h.name):s.find(k=>k.re.test(h.path)),!f)throw is(1,{location:p,currentLocation:h});x=f.record.name,m=Oe({},h.params,p.params),g=f.stringify(m)}const b=[];let E=f;for(;E;)b.unshift(E.record),E=E.parent;return{name:x,path:g,params:m,matched:b,meta:kg(b)}}return e.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:o}}function xg(e,n){const s={};for(const r of n)r in e&&(s[r]=e[r]);return s}function Ag(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bg(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const r in e.components)n[r]=typeof s=="boolean"?s:s[r];return n}function Fi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function kg(e){return e.reduce((n,s)=>Oe(n,s.meta),{})}function Mi(e,n){const s={};for(const r in e)s[r]=r in n?n[r]:e[r];return s}function Gu(e,n){return n.children.some(s=>s===e||Gu(e,s))}const Zu=/#/g,$g=/&/g,Cg=/\//g,Eg=/=/g,Dg=/\?/g,Qu=/\+/g,Sg=/%5B/g,Tg=/%5D/g,Xu=/%5E/g,Og=/%60/g,Ju=/%7B/g,Ng=/%7C/g,ep=/%7D/g,Fg=/%20/g;function ta(e){return encodeURI(""+e).replace(Ng,"|").replace(Sg,"[").replace(Tg,"]")}function Mg(e){return ta(e).replace(Ju,"{").replace(ep,"}").replace(Xu,"^")}function dl(e){return ta(e).replace(Qu,"%2B").replace(Fg,"+").replace(Zu,"%23").replace($g,"%26").replace(Og,"`").replace(Ju,"{").replace(ep,"}").replace(Xu,"^")}function Pg(e){return dl(e).replace(Eg,"%3D")}function Ig(e){return ta(e).replace(Zu,"%23").replace(Dg,"%3F")}function Lg(e){return e==null?"":Ig(e).replace(Cg,"%2F")}function Rr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Rg(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const l=r[o].replace(Qu," "),a=l.indexOf("="),i=Rr(a<0?l:l.slice(0,a)),c=a<0?null:Rr(l.slice(a+1));if(i in n){let u=n[i];Mt(u)||(u=n[i]=[u]),u.push(c)}else n[i]=c}return n}function Pi(e){let n="";for(let s in e){const r=e[s];if(s=Pg(s),r==null){r!==void 0&&(n+=(n.length?"&":"")+s);continue}(Mt(r)?r.map(l=>l&&dl(l)):[r&&dl(r)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+s,l!=null&&(n+="="+l))})}return n}function Hg(e){const n={};for(const s in e){const r=e[s];r!==void 0&&(n[s]=Mt(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return n}const jg=Symbol(""),Ii=Symbol(""),na=Symbol(""),tp=Symbol(""),fl=Symbol("");function bs(){let e=[];function n(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function an(e,n,s,r,o){const l=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,i)=>{const c=h=>{h===!1?i(is(4,{from:s,to:n})):h instanceof Error?i(h):pg(h)?i(is(2,{from:n,to:h})):(l&&r.enterCallbacks[o]===l&&typeof h=="function"&&l.push(h),a())},u=e.call(r&&r.instances[o],n,s,c);let p=Promise.resolve(u);e.length<3&&(p=p.then(c)),p.catch(h=>i(h))})}function Eo(e,n,s,r){const o=[];for(const l of e)for(const a in l.components){let i=l.components[a];if(!(n!=="beforeRouteEnter"&&!l.instances[a]))if(zg(i)){const u=(i.__vccOpts||i)[n];u&&o.push(an(u,s,r,l,a))}else{let c=i();o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${l.path}"`));const p=Ky(u)?u.default:u;l.components[a]=p;const f=(p.__vccOpts||p)[n];return f&&an(f,s,r,l,a)()}))}}return o}function zg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Li(e){const n=F(na),s=F(tp),r=S(()=>n.resolve(w(e.to))),o=S(()=>{const{matched:c}=r.value,{length:u}=c,p=c[u-1],h=s.matched;if(!p||!h.length)return-1;const f=h.findIndex(as.bind(null,p));if(f>-1)return f;const m=Ri(c[u-2]);return u>1&&Ri(p)===m&&h[h.length-1].path!==m?h.findIndex(as.bind(null,c[u-2])):f}),l=S(()=>o.value>-1&&Wg(s.params,r.value.params)),a=S(()=>o.value>-1&&o.value===s.matched.length-1&&qu(s.params,r.value.params));function i(c={}){return qg(c)?n[w(e.replace)?"replace":"push"](w(e.to)).catch(Ms):Promise.resolve()}return{route:r,href:S(()=>r.value.href),isActive:l,isExactActive:a,navigate:i}}const Vg=$e({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Li,setup(e,{slots:n}){const s=Ie(Li(e)),{options:r}=F(na),o=S(()=>({[Hi(e.activeClass,r.linkActiveClass,"router-link-active")]:s.isActive,[Hi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=n.default&&n.default(s);return e.custom?l:gt("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:o.value},l)}}}),Ug=Vg;function qg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Wg(e,n){for(const s in n){const r=n[s],o=e[s];if(typeof r=="string"){if(r!==o)return!1}else if(!Mt(o)||o.length!==r.length||r.some((l,a)=>l!==o[a]))return!1}return!0}function Ri(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hi=(e,n,s)=>e!=null?e:n!=null?n:s,Kg=$e({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){const r=F(fl),o=S(()=>e.route||r.value),l=F(Ii,0),a=S(()=>{let u=w(l);const{matched:p}=o.value;let h;for(;(h=p[u])&&!h.components;)u++;return u}),i=S(()=>o.value.matched[a.value]);mt(Ii,S(()=>a.value+1)),mt(jg,i),mt(fl,o);const c=q();return fe(()=>[c.value,i.value,e.name],([u,p,h],[f,m,g])=>{p&&(p.instances[h]=u,m&&m!==p&&u&&u===f&&(p.leaveGuards.size||(p.leaveGuards=m.leaveGuards),p.updateGuards.size||(p.updateGuards=m.updateGuards))),u&&p&&(!m||!as(p,m)||!f)&&(p.enterCallbacks[h]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=o.value,p=e.name,h=i.value,f=h&&h.components[p];if(!f)return ji(s.default,{Component:f,route:u});const m=h.props[p],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,b=gt(f,Oe({},g,n,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[p]=null)},ref:c}));return ji(s.default,{Component:b,route:u})||b}}});function ji(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const Yg=Kg;function Gg(e){const n=wg(e.routes,e),s=e.parseQuery||Rg,r=e.stringifyQuery||Pi,o=e.history,l=bs(),a=bs(),i=bs(),c=Ut(rn);let u=rn;Yn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=$o.bind(null,T=>""+T),h=$o.bind(null,Lg),f=$o.bind(null,Rr);function m(T,Y){let R,G;return Ku(T)?(R=n.getRecordMatcher(T),G=Y):G=T,n.addRoute(G,R)}function g(T){const Y=n.getRecordMatcher(T);Y&&n.removeRoute(Y)}function x(){return n.getRoutes().map(T=>T.record)}function b(T){return!!n.getRecordMatcher(T)}function E(T,Y){if(Y=Oe({},Y||c.value),typeof T=="string"){const pe=Co(s,T,Y.path),y=n.resolve({path:pe.path},Y),v=o.createHref(pe.fullPath);return Oe(pe,y,{params:f(y.params),hash:Rr(pe.hash),redirectedFrom:void 0,href:v})}let R;if("path"in T)R=Oe({},T,{path:Co(s,T.path,Y.path).path});else{const pe=Oe({},T.params);for(const y in pe)pe[y]==null&&delete pe[y];R=Oe({},T,{params:h(T.params)}),Y.params=h(Y.params)}const G=n.resolve(R,Y),we=T.hash||"";G.params=p(f(G.params));const Fe=Zy(r,Oe({},T,{hash:Mg(we),path:G.path})),me=o.createHref(Fe);return Oe({fullPath:Fe,hash:we,query:r===Pi?Hg(T.query):T.query||{}},G,{redirectedFrom:void 0,href:me})}function k(T){return typeof T=="string"?Co(s,T,c.value.path):Oe({},T)}function $(T,Y){if(u!==T)return is(8,{from:Y,to:T})}function D(T){return K(T)}function j(T){return D(Oe(k(T),{replace:!0}))}function M(T){const Y=T.matched[T.matched.length-1];if(Y&&Y.redirect){const{redirect:R}=Y;let G=typeof R=="function"?R(T):R;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=k(G):{path:G},G.params={}),Oe({query:T.query,hash:T.hash,params:"path"in G?{}:T.params},G)}}function K(T,Y){const R=u=E(T),G=c.value,we=T.state,Fe=T.force,me=T.replace===!0,pe=M(R);if(pe)return K(Oe(k(pe),{state:we,force:Fe,replace:me}),Y||R);const y=R;y.redirectedFrom=Y;let v;return!Fe&&Qy(r,G,R)&&(v=is(16,{to:y,from:G}),It(G,G,!0,!1)),(v?Promise.resolve(v):he(y,G)).catch(B=>Wt(B)?Wt(B,2)?B:ge(B):le(B,y,G)).then(B=>{if(B){if(Wt(B,2))return K(Oe({replace:me},k(B.to),{state:we,force:Fe}),Y||y)}else B=ve(y,G,!0,me,we);return ye(y,G,B),B})}function ie(T,Y){const R=$(T,Y);return R?Promise.reject(R):Promise.resolve()}function he(T,Y){let R;const[G,we,Fe]=Zg(T,Y);R=Eo(G.reverse(),"beforeRouteLeave",T,Y);for(const pe of G)pe.leaveGuards.forEach(y=>{R.push(an(y,T,Y))});const me=ie.bind(null,T,Y);return R.push(me),zn(R).then(()=>{R=[];for(const pe of l.list())R.push(an(pe,T,Y));return R.push(me),zn(R)}).then(()=>{R=Eo(we,"beforeRouteUpdate",T,Y);for(const pe of we)pe.updateGuards.forEach(y=>{R.push(an(y,T,Y))});return R.push(me),zn(R)}).then(()=>{R=[];for(const pe of T.matched)if(pe.beforeEnter&&!Y.matched.includes(pe))if(Mt(pe.beforeEnter))for(const y of pe.beforeEnter)R.push(an(y,T,Y));else R.push(an(pe.beforeEnter,T,Y));return R.push(me),zn(R)}).then(()=>(T.matched.forEach(pe=>pe.enterCallbacks={}),R=Eo(Fe,"beforeRouteEnter",T,Y),R.push(me),zn(R))).then(()=>{R=[];for(const pe of a.list())R.push(an(pe,T,Y));return R.push(me),zn(R)}).catch(pe=>Wt(pe,8)?pe:Promise.reject(pe))}function ye(T,Y,R){for(const G of i.list())G(T,Y,R)}function ve(T,Y,R,G,we){const Fe=$(T,Y);if(Fe)return Fe;const me=Y===rn,pe=Yn?history.state:{};R&&(G||me?o.replace(T.fullPath,Oe({scroll:me&&pe&&pe.scroll},we)):o.push(T.fullPath,we)),c.value=T,It(T,Y,R,me),ge()}let Pe;function je(){Pe||(Pe=o.listen((T,Y,R)=>{if(!nn.listening)return;const G=E(T),we=M(G);if(we){K(Oe(we,{replace:!0}),G).catch(Ms);return}u=G;const Fe=c.value;Yn&&og(Di(Fe.fullPath,R.delta),io()),he(G,Fe).catch(me=>Wt(me,12)?me:Wt(me,2)?(K(me.to,G).then(pe=>{Wt(pe,20)&&!R.delta&&R.type===Zs.pop&&o.go(-1,!1)}).catch(Ms),Promise.reject()):(R.delta&&o.go(-R.delta,!1),le(me,G,Fe))).then(me=>{me=me||ve(G,Fe,!1),me&&(R.delta&&!Wt(me,8)?o.go(-R.delta,!1):R.type===Zs.pop&&Wt(me,20)&&o.go(-1,!1)),ye(G,Fe,me)}).catch(Ms)}))}let Ze=bs(),De=bs(),ne;function le(T,Y,R){ge(T);const G=De.list();return G.length?G.forEach(we=>we(T,Y,R)):console.error(T),Promise.reject(T)}function te(){return ne&&c.value!==rn?Promise.resolve():new Promise((T,Y)=>{Ze.add([T,Y])})}function ge(T){return ne||(ne=!T,je(),Ze.list().forEach(([Y,R])=>T?R(T):Y()),Ze.reset()),T}function It(T,Y,R,G){const{scrollBehavior:we}=e;if(!Yn||!we)return Promise.resolve();const Fe=!R&&lg(Di(T.fullPath,0))||(G||!R)&&history.state&&history.state.scroll||null;return Ge().then(()=>we(T,Y,Fe)).then(me=>me&&rg(me)).catch(me=>le(me,T,Y))}const tt=T=>o.go(T);let wt;const at=new Set,nn={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:b,getRoutes:x,resolve:E,options:e,push:D,replace:j,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:l.add,beforeResolve:a.add,afterEach:i.add,onError:De.add,isReady:te,install(T){const Y=this;T.component("RouterLink",Ug),T.component("RouterView",Yg),T.config.globalProperties.$router=Y,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>w(c)}),Yn&&!wt&&c.value===rn&&(wt=!0,D(o.location).catch(we=>{}));const R={};for(const we in rn)R[we]=S(()=>c.value[we]);T.provide(na,Y),T.provide(tp,Ie(R)),T.provide(fl,c);const G=T.unmount;at.add(T),T.unmount=function(){at.delete(T),at.size<1&&(u=rn,Pe&&Pe(),Pe=null,c.value=rn,wt=!1,ne=!1),G()}}};return nn}function zn(e){return e.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function Zg(e,n){const s=[],r=[],o=[],l=Math.max(n.matched.length,e.matched.length);for(let a=0;a<l;a++){const i=n.matched[a];i&&(e.matched.find(u=>as(u,i))?r.push(i):s.push(i));const c=e.matched[a];c&&(n.matched.find(u=>as(u,c))||o.push(c))}return[s,r,o]}const Do=q(!1),Is=q(!1),Zn=q(!1),Qg=q(!0),hl=_y({xs:460,...fy}),Fn=Wy(),np=Hy(),Xg=S(()=>Fn.height.value-Fn.width.value/dn>180),sp=Iy(ct?document.body:null),ns=dy(),Jg=S(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=ns.value)==null?void 0:e.tagName)||"")||((n=ns.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),e_=S(()=>{var e;return["BUTTON","A"].includes(((e=ns.value)==null?void 0:e.tagName)||"")});Pt("slidev-camera","default");Pt("slidev-mic","default");const $r=Pt("slidev-scale",0),st=Pt("slidev-show-overview",!1),So=Pt("slidev-presenter-cursor",!0),zi=Pt("slidev-show-editor",!1);Pt("slidev-editor-width",ct?window.innerWidth*.4:100);const rp=ju(st);function Vi(e,n,s,r=o=>o){return e*r(.5-n*(.5-s))}function t_(e){return[-e[0],-e[1]]}function Dt(e,n){return[e[0]+n[0],e[1]+n[1]]}function Bt(e,n){return[e[0]-n[0],e[1]-n[1]]}function Et(e,n){return[e[0]*n,e[1]*n]}function n_(e,n){return[e[0]/n,e[1]/n]}function ws(e){return[e[1],-e[0]]}function s_(e,n){return e[0]*n[0]+e[1]*n[1]}function r_(e,n){return e[0]===n[0]&&e[1]===n[1]}function o_(e){return Math.hypot(e[0],e[1])}function l_(e){return e[0]*e[0]+e[1]*e[1]}function Ui(e,n){return l_(Bt(e,n))}function op(e){return n_(e,o_(e))}function a_(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function xs(e,n,s){let r=Math.sin(s),o=Math.cos(s),l=e[0]-n[0],a=e[1]-n[1],i=l*o-a*r,c=l*r+a*o;return[i+n[0],c+n[1]]}function ml(e,n,s){return Dt(e,Et(Bt(n,e),s))}function qi(e,n,s){return Dt(e,Et(n,s))}var{min:Vn,PI:i_}=Math,Wi=.275,As=i_+1e-4;function c_(e,n={}){let{size:s=16,smoothing:r=.5,thinning:o=.5,simulatePressure:l=!0,easing:a=ne=>ne,start:i={},end:c={},last:u=!1}=n,{cap:p=!0,easing:h=ne=>ne*(2-ne)}=i,{cap:f=!0,easing:m=ne=>--ne*ne*ne+1}=c;if(e.length===0||s<=0)return[];let g=e[e.length-1].runningLength,x=i.taper===!1?0:i.taper===!0?Math.max(s,g):i.taper,b=c.taper===!1?0:c.taper===!0?Math.max(s,g):c.taper,E=Math.pow(s*r,2),k=[],$=[],D=e.slice(0,10).reduce((ne,le)=>{let te=le.pressure;if(l){let ge=Vn(1,le.distance/s),It=Vn(1,1-ge);te=Vn(1,ne+(It-ne)*(ge*Wi))}return(ne+te)/2},e[0].pressure),j=Vi(s,o,e[e.length-1].pressure,a),M,K=e[0].vector,ie=e[0].point,he=ie,ye=ie,ve=he;for(let ne=0;ne<e.length;ne++){let{pressure:le}=e[ne],{point:te,vector:ge,distance:It,runningLength:tt}=e[ne];if(ne<e.length-1&&g-tt<3)continue;if(o){if(l){let R=Vn(1,It/s),G=Vn(1,1-R);le=Vn(1,D+(G-D)*(R*Wi))}j=Vi(s,o,le,a)}else j=s/2;M===void 0&&(M=j);let wt=tt<x?h(tt/x):1,at=g-tt<b?m((g-tt)/b):1;if(j=Math.max(.01,j*Math.min(wt,at)),ne===e.length-1){let R=Et(ws(ge),j);k.push(Bt(te,R)),$.push(Dt(te,R));continue}let nn=e[ne+1].vector,T=s_(ge,nn);if(T<0){let R=Et(ws(K),j);for(let G=1/13,we=0;we<=1;we+=G)ye=xs(Bt(te,R),te,As*we),k.push(ye),ve=xs(Dt(te,R),te,As*-we),$.push(ve);ie=ye,he=ve;continue}let Y=Et(ws(ml(nn,ge,T)),j);ye=Bt(te,Y),(ne<=1||Ui(ie,ye)>E)&&(k.push(ye),ie=ye),ve=Dt(te,Y),(ne<=1||Ui(he,ve)>E)&&($.push(ve),he=ve),D=le,K=ge}let Pe=e[0].point.slice(0,2),je=e.length>1?e[e.length-1].point.slice(0,2):Dt(e[0].point,[1,1]),Ze=[],De=[];if(e.length===1){if(!(x||b)||u){let ne=qi(Pe,op(ws(Bt(Pe,je))),-(M||j)),le=[];for(let te=1/13,ge=te;ge<=1;ge+=te)le.push(xs(ne,Pe,As*2*ge));return le}}else{if(!(x||b&&e.length===1))if(p)for(let le=1/13,te=le;te<=1;te+=le){let ge=xs($[0],Pe,As*te);Ze.push(ge)}else{let le=Bt(k[0],$[0]),te=Et(le,.5),ge=Et(le,.51);Ze.push(Bt(Pe,te),Bt(Pe,ge),Dt(Pe,ge),Dt(Pe,te))}let ne=ws(t_(e[e.length-1].vector));if(b||x&&e.length===1)De.push(je);else if(f){let le=qi(je,ne,j);for(let te=1/29,ge=te;ge<1;ge+=te)De.push(xs(le,je,As*3*ge))}else De.push(Dt(je,Et(ne,j)),Dt(je,Et(ne,j*.99)),Bt(je,Et(ne,j*.99)),Bt(je,Et(ne,j)))}return k.concat(De,$.reverse(),Ze)}function u_(e,n={}){var s;let{streamline:r=.5,size:o=16,last:l=!1}=n;if(e.length===0)return[];let a=.15+(1-r)*.85,i=Array.isArray(e[0])?e:e.map(({x:m,y:g,pressure:x=.5})=>[m,g,x]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let g=1;g<5;g++)i.push(ml(i[0],m,g/4))}i.length===1&&(i=[...i,[...Dt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,p=0,h=c[0],f=i.length-1;for(let m=1;m<i.length;m++){let g=l&&m===f?i[m].slice(0,2):ml(h.point,i[m],a);if(r_(h.point,g))continue;let x=a_(g,h.point);if(p+=x,m<f&&!u){if(p<o)continue;u=!0}h={point:g,pressure:i[m][2]>=0?i[m][2]:.5,vector:op(Bt(h.point,g)),distance:x,runningLength:p},c.push(h)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function p_(e,n={}){return c_(u_(e,n),n)}var d_=p_,f_=Object.defineProperty,Ki=Object.getOwnPropertySymbols,h_=Object.prototype.hasOwnProperty,m_=Object.prototype.propertyIsEnumerable,Yi=(e,n,s)=>n in e?f_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,yl=(e,n)=>{for(var s in n||(n={}))h_.call(n,s)&&Yi(e,s,n[s]);if(Ki)for(var s of Ki(n))m_.call(n,s)&&Yi(e,s,n[s]);return e},y_=()=>({events:{},emit(e,...n){(this.events[e]||[]).forEach(s=>s(...n))},on(e,n){return(this.events[e]=this.events[e]||[]).push(n),()=>this.events[e]=(this.events[e]||[]).filter(s=>s!==n)}});function Hr(e,n){return e-n}function g_(e){return e<0?-1:1}function jr(e){return[Math.abs(e),g_(e)]}function lp(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var __=2,Yt=__,hs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n,s;const r=this.drauu.el,o=(n=this.drauu.options.coordinateScale)!=null?n:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const a=l.matrixTransform((s=r.getScreenCTM())==null?void 0:s.inverse());return{x:a.x*o,y:a.y*o,pressure:e.pressure}}}createElement(e,n){var s;const r=document.createElementNS("http://www.w3.org/2000/svg",e),o=n?yl(yl({},this.brush),n):this.brush;return r.setAttribute("fill",(s=o.fill)!=null?s:"transparent"),r.setAttribute("stroke",o.color),r.setAttribute("stroke-width",o.size.toString()),r.setAttribute("stroke-linecap","round"),o.dasharray&&r.setAttribute("stroke-dasharray",o.dasharray),r}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(Yt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},v_=class extends hs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=d_(e,yl({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!n.length)return"";const s=n.reduce((r,[o,l],a,i)=>{const[c,u]=i[(a+1)%i.length];return r.push(o,l,(o+c)/2,(l+u)/2),r},["M",...n[0],"Q"]);return s.push("Z"),s.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},b_=class extends hs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=jr(e.x-this.start.x),[r,o]=jr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,r);n=l,r=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",r);else{const[l,a]=[this.start.x,this.start.x+n*s].sort(Hr),[i,c]=[this.start.y,this.start.y+r*o].sort(Hr);this.attr("cx",(l+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-l)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function ap(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",n),r.setAttribute("id",e),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(o),s.appendChild(r),s}var w_=class extends hs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=lp(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(ap(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const r=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let l=r/o;l=Math.round(l),Math.abs(l)<=1?(n=this.start.x+o*l,s=this.start.y+o):(n=this.start.x+r,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},x_=class extends hs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=jr(e.x-this.start.x),[r,o]=jr(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,r);n=l,r=l}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-r),this.attr("width",n*2),this.attr("height",r*2);else{const[l,a]=[this.start.x,this.start.x+n*s].sort(Hr),[i,c]=[this.start.y,this.start.y+r*o].sort(Hr);this.attr("x",l),this.attr("y",i),this.attr("width",a-l),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function A_(e,n){const s=e.x-n.x,r=e.y-n.y;return s*s+r*r}function B_(e,n,s){let r=n.x,o=n.y,l=s.x-r,a=s.y-o;if(l!==0||a!==0){const i=((e.x-r)*l+(e.y-o)*a)/(l*l+a*a);i>1?(r=s.x,o=s.y):i>0&&(r+=l*i,o+=a*i)}return l=e.x-r,a=e.y-o,l*l+a*a}function k_(e,n){let s=e[0];const r=[s];let o;for(let l=1,a=e.length;l<a;l++)o=e[l],A_(o,s)>n&&(r.push(o),s=o);return s!==o&&o&&r.push(o),r}function gl(e,n,s,r,o){let l=r,a=0;for(let i=n+1;i<s;i++){const c=B_(e[i],e[n],e[s]);c>l&&(a=i,l=c)}l>r&&(a-n>1&&gl(e,n,a,r,o),o.push(e[a]),s-a>1&&gl(e,a,s,r,o))}function $_(e,n){const s=e.length-1,r=[e[0]];return gl(e,0,s,n,r),r.push(e[s]),r}function Gi(e,n,s=!1){if(e.length<=2)return e;const r=n!==void 0?n*n:1;return e=s?e:k_(e,r),e=$_(e,r),e}var C_=class extends hs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=lp();const n=ap(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Gi(this.points,1,!0),this.count=0),this.attr("d",Qi(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Qi(Gi(this.points,1,!0))),!e.getTotalLength()))}};function E_(e,n){const s=n.x-e.x,r=n.y-e.y;return{length:Math.sqrt(Math.pow(s,2)+Math.pow(r,2)),angle:Math.atan2(r,s)}}function Zi(e,n,s,r){const o=n||e,l=s||e,a=.2,i=E_(o,l),c=i.angle+(r?Math.PI:0),u=i.length*a,p=e.x+Math.cos(c)*u,h=e.y+Math.sin(c)*u;return{x:p,y:h}}function D_(e,n,s){const r=Zi(s[n-1],s[n-2],e),o=Zi(e,s[n-1],s[n+1],!0);return`C ${r.x.toFixed(Yt)},${r.y.toFixed(Yt)} ${o.x.toFixed(Yt)},${o.y.toFixed(Yt)} ${e.x.toFixed(Yt)},${e.y.toFixed(Yt)}`}function Qi(e){return e.reduce((n,s,r,o)=>r===0?`M ${s.x.toFixed(Yt)},${s.y.toFixed(Yt)}`:`${n} ${D_(s,r,o)}`,"")}var S_=class extends hs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,r)=>{if(s&&s.length)for(let o=0;o<s.length;o++){const l=s[o];if(l.getTotalLength){const a=l.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=l.getPointAtLength(a*i/this.pathSubFactor),u=l.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:r||l})}}else l.children&&n(l.children,l)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],r={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,r)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,r=e.x2,o=n.x1,l=n.x2,a=e.y1,i=e.y2,c=n.y1,u=n.y2,p=(s-r)*(c-u)-(a-i)*(o-l),h=(s*i-a*r)*(o-l)-(s-r)*(o*u-c*l),f=(s*i-a*r)*(c-u)-(a-i)*(o*u-c*l),m=(g,x,b)=>g>=x&&g<=b?!0:g>=b&&g<=x;if(p===0)return!1;{const g={x:h/p,y:f/p};return m(g.x,s,r)&&m(g.y,a,i)&&m(g.x,o,l)&&m(g.y,c,u)}}};function T_(e){return{draw:new C_(e),stylus:new v_(e),line:new w_(e),rectangle:new x_(e),ellipse:new b_(e),eraseLine:new S_(e)}}var O_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=y_(),this._models=T_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,r=this.eventStart.bind(this),o=this.eventMove.bind(this),l=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",r,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",r),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function N_(e){return new O_(e)}const _l=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],zt=Pt("slidev-drawing-enabled",!1),Y6=Pt("slidev-drawing-pinned",!1),F_=q(!1),M_=q(!1),P_=q(!1),Qs=q(!1),Dn=Pm(Pt("slidev-drawing-brush",{color:_l[0],size:4,mode:"stylus"})),Xi=q("stylus"),ip=S(()=>xe.drawings.syncAll||Ht.value);let Xs=!1;const Bs=S({get(){return Xi.value},set(e){Xi.value=e,e==="arrow"?(Dn.mode="line",Dn.arrowEnd=!0):(Dn.mode=e,Dn.arrowEnd=!1)}}),I_=Ie({brush:Dn,acceptsInputTypes:S(()=>zt.value?void 0:["pen"]),coordinateTransform:!1}),ot=Xr(N_(I_));function L_(){ot.clear(),ip.value&&Lu(Ue.value,"")}function cp(){var e;M_.value=ot.canRedo(),F_.value=ot.canUndo(),P_.value=!!((e=ot.el)!=null&&e.children.length)}function R_(e){Xs=!0;const n=Pr[e||Ue.value];n!=null?ot.load(n):ot.clear(),Xs=!1}ot.on("changed",()=>{if(cp(),!Xs){const e=ot.dump(),n=Ue.value;(Pr[n]||"")!==e&&ip.value&&Lu(n,ot.dump())}});$m(e=>{Xs=!0,e[Ue.value]!=null&&ot.load(e[Ue.value]||""),Xs=!1,cp()});Ge(()=>{fe(Ue,()=>{!ot.mounted||R_()},{immediate:!0})});ot.on("start",()=>Qs.value=!0);ot.on("end",()=>Qs.value=!1);window.addEventListener("keydown",e=>{if(!zt.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ot.redo():ot.undo():e.code==="Escape"?zt.value=!1:e.code==="KeyL"&&n?Bs.value="line":e.code==="KeyA"&&n?Bs.value="arrow":e.code==="KeyS"&&n?Bs.value="stylus":e.code==="KeyR"&&n?Bs.value="rectangle":e.code==="KeyE"&&n?Bs.value="ellipse":e.code==="KeyC"&&n?L_():e.code.startsWith("Digit")&&n&&+e.code[5]<=_l.length?Dn.color=_l[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);const Ji=By(),To=Pt("slidev-color-schema","auto"),vl=S(()=>xe.colorSchema!=="auto"),sa=S({get(){return vl.value?xe.colorSchema==="dark":To.value==="auto"?Ji.value:To.value==="dark"},set(e){vl.value||(To.value=e===Ji.value?"auto":e?"dark":"light")}}),up=ju(sa);ct&&fe(sa,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});function H_(){return[]}const Cr=q(1),Er=S(()=>Ve.length-1),_t=q(0),ra=q(0);function j_(){_t.value>Cr.value&&(_t.value-=1)}function z_(){_t.value<Er.value&&(_t.value+=1)}function V_(){if(_t.value>Cr.value){let e=_t.value-ra.value;e<Cr.value&&(e=Cr.value),_t.value=e}}function U_(){if(_t.value<Er.value){let e=_t.value+ra.value;e>Er.value&&(e=Er.value),_t.value=e}}const pp=ze(dt(Jg),dt(e_),Qg);function q_(e,n,s=!1){typeof e=="string"&&(e=np[e]);const r=ze(e,pp);let o=0,l;const a=()=>{if(clearTimeout(l),!r.value){o=0;return}s&&(l=setTimeout(a,Math.max(1e3-o*250,150)),o++),n()};return fe(r,a,{flush:"sync"})}function W_(e,n){return py(e,s=>{!pp.value||s.repeat||n()})}function K_(){const e=H_(),{escape:n,space:s,shift:r,left:o,right:l,up:a,down:i,enter:c,d:u,g:p,o:h}=np;new Map([{key:ze(s,dt(r)),fn:hn,autoRepeat:!0},{key:ze(s,r),fn:mn,autoRepeat:!0},{key:ze(l,dt(r),dt(st)),fn:hn,autoRepeat:!0},{key:ze(o,dt(r),dt(st)),fn:mn,autoRepeat:!0},{key:"pageDown",fn:hn,autoRepeat:!0},{key:"pageUp",fn:mn,autoRepeat:!0},{key:ze(a,dt(st)),fn:()=>tr(!1),autoRepeat:!0},{key:ze(i,dt(st)),fn:er,autoRepeat:!0},{key:ze(o,r),fn:()=>tr(!1),autoRepeat:!0},{key:ze(l,r),fn:er,autoRepeat:!0},{key:ze(u,dt(zt)),fn:up},{key:ze(h,dt(zt)),fn:rp},{key:ze(n,dt(zt)),fn:()=>st.value=!1},{key:ze(p,dt(zt)),fn:()=>Zn.value=!Zn.value},{key:ze(o,st),fn:j_},{key:ze(l,st),fn:z_},{key:ze(a,st),fn:V_},{key:ze(i,st),fn:U_},{key:ze(c,st),fn:()=>{cs(_t.value),st.value=!1}},...e].map(m=>[m.key,m])).forEach(m=>{m.fn&&q_(m.key,m.fn,m.autoRepeat)}),W_("f",()=>sp.toggle())}const Y_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},G_=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Z_=[G_];function Q_(e,n){return _(),O("svg",Y_,Z_)}var X_={name:"carbon-close",render:Q_};function oa(e){var s,r;const n=(r=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:r.no;return n!=null?`slidev-page-${n}`:""}const dp=$e({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;F(L);const s=q(),r=Py(s),o=S(()=>n.width?n.width:r.width.value),l=S(()=>n.width?n.width/dn:r.height.value);n.width&&or(()=>{s.value&&(s.value.style.width=`${o.value}px`,s.value.style.height=`${l.value}px`)});const a=S(()=>o.value/l.value),i=S(()=>n.scale?n.scale:a.value<dn?o.value/Nn:l.value*dn/Nn),c=S(()=>({height:`${Mu}px`,width:`${Nn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=S(()=>({"select-none":!xe.selectable,"slidev-code-line-numbers":xe.lineNumbers}));return mt(Fu,i),(p,h)=>(_(),O("div",{id:"slide-container",ref_key:"root",ref:s,class:Le(w(u))},[t("div",{id:"slide-content",style:Je(w(c))},[qt(p.$slots,"default")],4),qt(p.$slots,"controls")],2))}});var la=$e({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=jt(e,"clicks",n),r=jt(e,"clicksElements",n),o=jt(e,"clicksDisabled",n),l=jt(e,"clicksOrderMap",n);r.value.length=0,mt(fm,e.route),mt(hm,e.context),mt(Ns,s),mt(Fs,o),mt(kn,r),mt(ll,l)},render(){var e,n;return this.$props.is?gt(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}});const J_=["innerHTML"],fp=$e({__name:"DrawingPreview",props:{page:null},setup(e){return F(L),(n,s)=>w(Pr)[e.page]?(_(),O("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Pr)[e.page]},null,8,J_)):de("v-if",!0)}});var ev=Object.freeze(Object.defineProperty({__proto__:null,default:fp},Symbol.toStringTag,{value:"Module"}));const tv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},nv=["onClick"],sv=$e({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:n}){const s=e;F(L);const r=jt(s,"modelValue",n);function o(){r.value=!1}function l(m){cs(m),o()}function a(m){return m===_t.value}const i=hl.smaller("xs"),c=hl.smaller("sm"),u=4*16*2,p=2*16,h=S(()=>i.value?Fn.width.value-u:c.value?(Fn.width.value-u-p)/2:300),f=S(()=>Math.floor((Fn.width.value-u)/(h.value+p)));return or(()=>{_t.value=Ue.value,ra.value=f.value}),(m,g)=>{const x=X_;return _(),O(Ce,null,[Ee(t("div",tv,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Je(`grid-template-columns: repeat(auto-fit,minmax(${w(h)}px,1fr))`)},[(_(!0),O(Ce,null,lr(w(Ve).slice(0,-1),(b,E)=>(_(),O("div",{key:b.path,class:"relative"},[t("div",{class:Le(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(E+1)}]),onClick:k=>l(+b.path)},[(_(),H(dp,{key:b.path,width:w(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:A(()=>[C(w(la),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Le(w(oa)(b)),route:b,context:"overview"},null,8,["is","class","route"]),C(fp,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],10,nv),t("div",{class:"absolute top-0 opacity-50",style:Je(`left: ${w(h)+5}px`)},kt(E+1),5)]))),128))],4)],512),[[Ou,w(r)]]),w(r)?(_(),O("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:o},[C(x)])):de("v-if",!0)],64)}}});var rv="/courses/data-structure/binary-search-trees/assets/logo.b72bde5d.png";const ov={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},lv=$e({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;F(L);const r=jt(s,"modelValue",n);function o(){r.value=!1}return(l,a)=>(_(),H(du,null,[w(r)?(_(),O("div",ov,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>o())}),t("div",{class:Le(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[qt(l.$slots,"default")],2)])):de("v-if",!0)],1024))}});const av={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},iv=["innerHTML"],cv=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:rv,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),d("dev ")])])],-1),uv=$e({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;F(L);const r=jt(s,"modelValue",n),o=S(()=>typeof xe.info=="string");return(l,a)=>(_(),H(lv,{modelValue:w(r),"onUpdate:modelValue":a[0]||(a[0]=i=>ke(r)?r.value=i:null),class:"px-6 py-4"},{default:A(()=>[t("div",av,[w(o)?(_(),O("div",{key:0,class:"mb-4",innerHTML:w(xe).info},null,8,iv)):de("v-if",!0),cv])]),_:1},8,["modelValue"]))}}),pv=["disabled","onKeydown"],dv=$e({__name:"Goto",setup(e){F(L);const n=q(),s=q(""),r=S(()=>{if(s.value.startsWith("/"))return!!Ve.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=Ep.value}});function o(){r.value&&(s.value.startsWith("/")?cs(s.value.substring(1)):cs(+s.value)),l()}function l(){Zn.value=!1}return fe(Zn,async a=>{var i,c;a?(await Ge(),s.value="",(i=n.value)==null||i.focus()):(c=n.value)==null||c.blur()}),fe(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(_(),O("div",{id:"slidev-goto-dialog",class:Le(["fixed right-5 bg-main transform transition-all",w(Zn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ee(t("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!w(Zn),class:Le(["outline-none bg-transparent",{"text-red-400":!w(r)&&s.value}]),placeholder:"Goto...",onKeydown:[li(o,["enter"]),li(l,["escape"])],onBlur:l},null,42,pv),[[Kh,s.value]])],2))}}),fv=$e({__name:"Controls",setup(e){F(L);const n=Ut(),s=Ut();return(r,o)=>(_(),O(Ce,null,[C(sv,{modelValue:w(st),"onUpdate:modelValue":o[0]||(o[0]=l=>ke(st)?st.value=l:null)},null,8,["modelValue"]),C(dv),w(n)?(_(),H(w(n),{key:0})):de("v-if",!0),w(s)?(_(),H(w(s),{key:1,modelValue:w(Do),"onUpdate:modelValue":o[1]||(o[1]=l=>ke(Do)?Do.value=l:null)},null,8,["modelValue"])):de("v-if",!0),w(xe).info?(_(),H(uv,{key:2,modelValue:w(Is),"onUpdate:modelValue":o[2]||(o[2]=l=>ke(Is)?Is.value=l:null)},null,8,["modelValue"])):de("v-if",!0)],64))}}),hv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mv=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),yv=[mv];function gv(e,n){return _(),O("svg",hv,yv)}var _v={name:"carbon-settings-adjust",render:gv};const vv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bv=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),wv=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xv=[bv,wv];function Av(e,n){return _(),O("svg",vv,xv)}var Bv={name:"carbon-information",render:Av};const kv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$v=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Cv=[$v];function Ev(e,n){return _(),O("svg",kv,Cv)}var Dv={name:"carbon-download",render:Ev};const Sv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tv=t("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Ov=t("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Nv=[Tv,Ov];function Fv(e,n){return _(),O("svg",Sv,Nv)}var Mv={name:"carbon-user-speaker",render:Fv};const Pv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Iv=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Lv=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Rv=[Iv,Lv];function Hv(e,n){return _(),O("svg",Pv,Rv)}var jv={name:"carbon-presentation-file",render:Hv};const zv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vv=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Uv=[Vv];function qv(e,n){return _(),O("svg",zv,Uv)}var Wv={name:"carbon-pen",render:qv};const Kv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Yv=t("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Gv=t("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Zv=[Yv,Gv];function Qv(e,n){return _(),O("svg",Kv,Zv)}var Xv={name:"ph-cursor-duotone",render:Qv};const Jv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},e1=t("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),t1=[e1];function n1(e,n){return _(),O("svg",Jv,t1)}var hp={name:"ph-cursor-fill",render:n1};const s1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r1=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),o1=[r1];function l1(e,n){return _(),O("svg",s1,o1)}var a1={name:"carbon-sun",render:l1};const i1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c1=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),u1=[c1];function p1(e,n){return _(),O("svg",i1,u1)}var d1={name:"carbon-moon",render:p1};const f1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h1=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),m1=[h1];function y1(e,n){return _(),O("svg",f1,m1)}var g1={name:"carbon-apps",render:y1};const _1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v1=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),b1=[v1];function w1(e,n){return _(),O("svg",_1,b1)}var x1={name:"carbon-arrow-right",render:w1};const A1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B1=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),k1=[B1];function $1(e,n){return _(),O("svg",A1,k1)}var C1={name:"carbon-arrow-left",render:$1};const E1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D1=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),S1=[D1];function T1(e,n){return _(),O("svg",E1,S1)}var O1={name:"carbon-maximize",render:T1};const N1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F1=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),M1=[F1];function P1(e,n){return _(),O("svg",N1,M1)}var I1={name:"carbon-minimize",render:P1};const L1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R1=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),H1=[R1];function j1(e,n){return _(),O("svg",L1,H1)}var z1={name:"carbon-checkmark",render:j1};var mp=(e,n)=>{const s=e.__vccOpts||e;for(const[r,o]of n)s[r]=o;return s};const V1={class:"select-list"},U1={class:"title"},q1={class:"items"},W1=["onClick"],K1=$e({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;F(L);const r=jt(s,"modelValue",n,{passive:!0});return(o,l)=>{const a=z1;return _(),O("div",V1,[t("div",U1,kt(e.title),1),t("div",q1,[(_(!0),O(Ce,null,lr(e.items,i=>(_(),O("div",{key:i.value,class:Le(["item",{active:w(r)===i.value}]),onClick:()=>{var c;r.value=i.value,(c=i.onClick)==null||c.call(i)}},[C(a,{class:Le(["text-green-500",{"opacity-0":w(r)!==i.value}])},null,8,["class"]),d(" "+kt(i.display||i.value),1)],10,W1))),128))])])}}});var Y1=mp(K1,[["__scopeId","data-v-427604ef"]]);const G1={class:"text-sm"},Z1=$e({__name:"Settings",setup(e){F(L);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,r)=>(_(),O("div",G1,[C(Y1,{modelValue:w($r),"onUpdate:modelValue":r[0]||(r[0]=o=>ke($r)?$r.value=o:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),Q1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},X1=$e({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;F(L);const r=jt(s,"modelValue",n,{passive:!0}),o=q();return cy(o,()=>{r.value=!1}),(l,a)=>(_(),O("div",{ref_key:"el",ref:o,class:"flex relative"},[t("button",{class:Le({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>r.value=!w(r))},[qt(l.$slots,"button",{class:Le({disabled:e.disabled})})],2),(_(),H(du,null,[w(r)?(_(),O("div",Q1,[qt(l.$slots,"menu")])):de("v-if",!0)],1024))],512))}}),J1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},vr={__name:"VerticalDivider",setup(e){return F(L),(n,s)=>(_(),O("div",J1))}};var e0={render(){return[]}};const t0={class:"icon-btn"},n0={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},s0={class:"my-auto"},r0={class:"opacity-50"},o0=$e({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;F(L);const s=hl.smaller("md"),{isFullscreen:r,toggle:o}=sp,l=S(()=>wl.value?`?password=${wl.value}`:""),a=S(()=>`/presenter/${Ue.value}${l.value}`),i=S(()=>`/${Ue.value}${l.value}`),c=q(),u=()=>{c.value&&ns.value&&c.value.contains(ns.value)&&ns.value.blur()},p=S(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=Ut(),f=Ut();return fs(()=>import("./DrawingControls.caf7a4f8.js"),[]).then(m=>f.value=m.default),(m,g)=>{const x=I1,b=O1,E=C1,k=x1,$=g1,D=d1,j=a1,M=hp,K=Xv,ie=Wv,he=jv,ye=re("RouterLink"),ve=Mv,Pe=Dv,je=Bv,Ze=_v;return _(),O("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[t("div",{class:Le(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(p)]),onMouseleave:u},[w(Kt)?de("v-if",!0):(_(),O("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...De)=>w(o)&&w(o)(...De))},[w(r)?(_(),H(x,{key:0})):(_(),H(b,{key:1}))])),t("button",{class:Le(["icon-btn",{disabled:!w(l$)}]),onClick:g[1]||(g[1]=(...De)=>w(mn)&&w(mn)(...De))},[C(E)],2),t("button",{class:Le(["icon-btn",{disabled:!w(o$)}]),title:"Next",onClick:g[2]||(g[2]=(...De)=>w(hn)&&w(hn)(...De))},[C(k)],2),w(Kt)?de("v-if",!0):(_(),O("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=De=>w(rp)())},[C($)])),w(vl)?de("v-if",!0):(_(),O("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=De=>w(up)())},[w(sa)?(_(),H(D,{key:0})):(_(),H(j,{key:1}))])),C(vr),w(Kt)?de("v-if",!0):(_(),O(Ce,{key:3},[!w(Ht)&&!w(s)&&w(h)?(_(),O(Ce,{key:0},[C(w(h)),C(vr)],64)):de("v-if",!0),w(Ht)?(_(),O("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=De=>So.value=!w(So))},[w(So)?(_(),H(M,{key:0})):(_(),H(K,{key:1,class:"opacity-50"}))])):de("v-if",!0)],64)),!w(xe).drawings.presenterOnly&&!w(Kt)?(_(),O(Ce,{key:4},[t("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=De=>zt.value=!w(zt))},[C(ie),w(zt)?(_(),O("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Je({background:w(Dn).color})},null,4)):de("v-if",!0)]),C(vr)],64)):de("v-if",!0),w(Kt)?de("v-if",!0):(_(),O(Ce,{key:5},[w(Ht)?(_(),H(ye,{key:0,to:w(i),class:"icon-btn",title:"Play Mode"},{default:A(()=>[C(he)]),_:1},8,["to"])):de("v-if",!0),w(n$)?(_(),H(ye,{key:1,to:w(a),class:"icon-btn",title:"Presenter Mode"},{default:A(()=>[C(ve)]),_:1},8,["to"])):de("v-if",!0),de("v-if",!0)],64)),(_(),O(Ce,{key:6},[w(xe).download?(_(),O("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...De)=>w(xl)&&w(xl)(...De))},[C(Pe)])):de("v-if",!0)],64)),!w(Ht)&&w(xe).info&&!w(Kt)?(_(),O("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=De=>Is.value=!w(Is))},[C(je)])):de("v-if",!0),!w(Ht)&&!w(Kt)?(_(),H(X1,{key:8},{button:A(()=>[t("button",t0,[C(Ze)])]),menu:A(()=>[C(Z1)]),_:1})):de("v-if",!0),w(Kt)?de("v-if",!0):(_(),H(vr,{key:9})),t("div",n0,[t("div",s0,[d(kt(w(Ue))+" ",1),t("span",r0,"/ "+kt(w(Ep)),1)])]),C(w(e0))],34)],512)}}}),l0={__name:"SlidesTotal",setup(e){const n=F(L);return(s,r)=>(_(),O("span",null,kt(w(n).nav.total),1))}},a0={__name:"SlideCurrentNo",setup(e){const n=F(L);return(s,r)=>(_(),O("span",null,kt(w(n).nav.currentPage),1))}},i0=d(" / "),c0=$e({__name:"Pagination",props:{classNames:{type:[Array,String]},x:{default:"r",type:String,validator:e=>e==="l"||e==="r"},y:{default:"t",type:String,validator:e=>e==="b"||e==="t"}},setup(e){const{classNames:n,x:s,y:r}=e;F(L);const o=S(()=>[...n?Array.isArray(n)?n:[n]:[],s==="l"&&"left-0",s==="r"&&"right-0",r==="t"&&"top-0",r==="b"&&"bottom-0"]);return(l,a)=>{const i=a0,c=l0;return _(),O("div",{class:Le(["absolute p-2 text-xs",w(o)])},[C(i),i0,C(c)],2)}}}),u0={__name:"global-top",setup(e){const n=F(L);return(s,r)=>{var l;const o=c0;return w(n).nav.currentPage!==w(n).nav.total+1&&!((l=w(n).themeConfigs.paginationPagesDisabled)!=null&&l.includes(w(n).nav.currentPage))&&(w(n).themeConfigs.paginationX||w(n).themeConfigs.paginationY)?(_(),H(o,{key:0,x:w(n).themeConfigs.paginationX,y:w(n).themeConfigs.paginationY},null,8,["x","y"])):de("v-if",!0)}}};var yp={render(){return[gt(u0)]}};const p0={class:"absolute bottom-0 left-0 right-0 p-2"},d0=t("p",{style:{"font-size":"8px"}},[t("a",{rel:"license",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"(cc) BY-NC-SA - Jordan Frecon-Deloire (2022)")],-1),f0=[d0],h0={__name:"global-bottom",setup(e){return F(L),(n,s)=>(_(),O("footer",p0,f0))}};var gp={render(){return[gt(h0)]}};const m0={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},y0=$e({__name:"PresenterMouse",setup(e){return F(L),(n,s)=>{const r=hp;return w(ko).cursor?(_(),O("div",m0,[C(r,{class:"absolute",style:Je({left:`${w(ko).cursor.x}%`,top:`${w(ko).cursor.y}%`})},null,8,["style"])])):de("v-if",!0)}}}),g0=$e({__name:"SlidesShow",props:{context:null},setup(e){F(L),fe(ht,()=>{var s,r;((s=ht.value)==null?void 0:s.meta)&&ht.value.meta.preload!==!1&&(ht.value.meta.__preloaded=!0),((r=Oo.value)==null?void 0:r.meta)&&Oo.value.meta.preload!==!1&&(Oo.value.meta.__preloaded=!0)},{immediate:!0});const n=Ut();return fs(()=>import("./DrawingLayer.05c674fd.js"),[]).then(s=>n.value=s.default),(s,r)=>(_(),O(Ce,null,[de(" Global Bottom "),C(w(gp)),de(" Slides "),(_(!0),O(Ce,null,lr(w(Ve),o=>{var l,a;return _(),O(Ce,{key:o.path},[((l=o.meta)==null?void 0:l.__preloaded)||o===w(ht)?Ee((_(),H(w(la),{key:0,is:o==null?void 0:o.component,clicks:o===w(ht)?w(Ft):0,"clicks-elements":((a=o.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Le(w(oa)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ou,o===w(ht)]]):de("v-if",!0)],64)}),128)),de(" Global Top "),C(w(yp)),w(n)?(_(),H(w(n),{key:0})):de("v-if",!0),w(Ht)?de("v-if",!0):(_(),H(y0,{key:1}))],64))}}),_0=$e({__name:"Play",setup(e){F(L),K_();const n=q();function s(l){var a;zi.value||((a=l.target)==null?void 0:a.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?hn():mn())}c$(n);const r=S(()=>Xg.value||zi.value);Ut();const o=Ut();return fs(()=>import("./DrawingControls.caf7a4f8.js"),[]).then(l=>o.value=l.default),(l,a)=>(_(),O(Ce,null,[t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:Je(w(Pu))},[C(dp,{class:"w-full h-full",style:Je({background:"var(--slidev-slide-container-background, black)"}),width:w(pa)?w(Fn).width.value:void 0,scale:w($r),onPointerdown:s},{default:A(()=>[C(g0,{context:"slide"})]),controls:A(()=>[t("div",{class:Le(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(r)?"opacity-100 right-0":"opacity-0 p-2",w(Qs)?"pointer-events-none":""]])},[C(o0,{class:"m-auto",persist:w(r)},null,8,["persist"])],2),!w(xe).drawings.presenterOnly&&!w(Kt)&&w(o)?(_(),H(w(o),{key:0,class:"ml-0"})):de("v-if",!0)]),_:1},8,["style","width","scale"]),de("v-if",!0)],4),C(fv)],64))}});function _p(e){const n=S(()=>e.value.path),s=S(()=>Ve.length-1),r=S(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),o=S(()=>co(r.value)),l=S(()=>Ve.find(f=>f.path===`${r.value}`)),a=S(()=>{var f,m,g;return(g=(m=(f=l.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:g.id}),i=S(()=>{var f,m;return(m=(f=l.value)==null?void 0:f.meta)==null?void 0:m.layout}),c=S(()=>Ve.find(f=>f.path===`${Math.min(Ve.length,r.value+1)}`)),u=S(()=>Ve.filter(f=>{var m,g;return(g=(m=f.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((f,m)=>(da(f,m),f),[])),p=S(()=>fa(u.value,l.value)),h=S(()=>ha(p.value));return{route:e,path:n,total:s,currentPage:r,currentPath:o,currentRoute:l,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:p,tree:h}}function vp(e,n,s){const r=q(0);Ge(()=>{vt.afterEach(async()=>{await Ge(),r.value+=1})});const o=S(()=>{var c,u;return r.value,((u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=S(()=>{var c,u,p;return+((p=(u=(c=n.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?p:o.value.length)}),a=S(()=>s.value<Ve.length-1||e.value<l.value),i=S(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:l,hasNext:a,hasPrev:i}}const v0=["id"],ec=$e({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,r=jt(s,"clicksElements",n),o=S(()=>({height:`${Mu}px`,width:`${Nn}px`})),l=Ut();fs(()=>Promise.resolve().then(function(){return ev}),void 0).then(u=>l.value=u.default);const a=S(()=>s.clicks),i=vp(a,s.nav.currentRoute,s.nav.currentPage),c=S(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return mt(L,Ie({nav:{...s.nav,...i},configs:xe,themeConfigs:S(()=>xe.themeConfig)})),(u,p)=>{var h;return _(),O("div",{id:w(c),class:"slide-container",style:Je(w(o))},[C(w(gp)),C(w(la),{is:(h=e.route)==null?void 0:h.component,"clicks-elements":w(r),"onUpdate:clicks-elements":p[0]||(p[0]=f=>ke(r)?r.value=f:null),clicks:w(a),"clicks-disabled":!1,class:Le(w(oa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),w(l)?(_(),H(w(l),{key:0,page:+e.route.path},null,8,["page"])):de("v-if",!0),C(w(yp))],12,v0)}}}),b0=$e({__name:"PrintSlide",props:{route:null},setup(e){var l;const n=e;F(L);const s=Ie(((l=n.route.meta)==null?void 0:l.__clicksElements)||[]),r=S(()=>n.route),o=_p(r);return(a,i)=>(_(),O(Ce,null,[C(ec,{"clicks-elements":s,"onUpdate:clicks-elements":i[0]||(i[0]=c=>ke(s)?s.value=c:null),clicks:0,nav:w(o),route:w(r)},null,8,["clicks-elements","nav","route"]),w(Ls)?de("v-if",!0):(_(!0),O(Ce,{key:0},lr(s.length,c=>(_(),H(ec,{key:c,clicks:c,nav:w(o),route:w(r)},null,8,["clicks","nav","route"]))),128))],64))}});const w0={id:"print-content"},x0=$e({__name:"PrintContainer",props:{width:null},setup(e){const n=e;F(L);const s=S(()=>n.width),r=S(()=>n.width/dn),o=S(()=>s.value/r.value),l=S(()=>o.value<dn?s.value/Nn:r.value*dn/Nn),a=Ve.slice(0,-1),i=S(()=>({"select-none":!xe.selectable,"slidev-code-line-numbers":xe.lineNumbers}));return mt(Fu,l),(c,u)=>(_(),O("div",{id:"print-container",class:Le(w(i))},[t("div",w0,[(_(!0),O(Ce,null,lr(w(a),p=>(_(),H(b0,{key:p.path,route:p},null,8,["route"]))),128))]),qt(c.$slots,"controls")],2))}});const A0=$e({__name:"Print",setup(e){F(L);const n=En.canvasWidth,s=Math.round(n/En.aspectRatio)+1;function r(o,{slots:l}){if(l.default)return gt("style",l.default())}return or(()=>{pa?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,l)=>(_(),O(Ce,null,[C(r,null,{default:A(()=>[d(" @page { size: "+kt(w(n))+"px "+kt(s)+"px; margin: 0px; } ",1)]),_:1}),t("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Je(w(Pu))},[C(x0,{class:"w-full h-full",style:Je({background:"var(--slidev-slide-container-background, black)"}),width:w(Fn).width.value},null,8,["style","width"])],4)],64))}});const B0={class:"slidev-layout end"},k0={__name:"end",setup(e){return F(L),(n,s)=>(_(),O("div",B0," END "))}};var $0=mp(k0,[["__scopeId","data-v-024c70b4"]]),C0="/courses/data-structure/binary-search-trees/front/logo.png";const E0={key:0},D0=["href"],S0=$e({__name:"TextWithOptionalLink",props:{link:null,text:null},setup(e){return F(L),(n,s)=>e.link?(_(),O("a",{key:1,href:e.link,rel:"noreferrer",target:"_blank"},kt(e.text),9,D0)):(_(),O("span",E0,kt(e.text),1))}});function tc(e){return e.startsWith("/")?"/courses/data-structure/binary-search-trees/"+e.slice(1):e}function T0(e,n=!1){const s=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),r={background:s?e:void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0009, #0009), url(${tc(e)})`:`url("${tc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const O0={class:"my-auto w-full"},N0={key:0,class:"absolute bottom-12"},F0={key:0},M0={key:1,class:"absolute bottom-0 font-extralight mb-1 mr-2 right-0 text-xs"},P0=$e({__name:"cover",props:{coverAuthor:null,coverAuthorUrl:null,coverBackgroundUrl:null,coverBackgroundSource:null,coverBackgroundSourceUrl:null,coverDate:{default:new Date().toLocaleDateString()}},setup(e){const{coverBackgroundUrl:n}=e;F(L);const s=S(()=>T0(n,!0));return(r,o)=>{const l=S0;return _(),O("div",{class:"slidev-layout cover",style:Je(w(s))},[t("div",O0,[qt(r.$slots,"default")]),e.coverAuthor||e.coverDate?(_(),O("div",N0,[C(l,{link:e.coverAuthorUrl,text:e.coverAuthor},null,8,["link","text"]),e.coverDate?(_(),O("span",F0,kt(e.coverAuthor&&e.coverDate?`, ${e.coverDate}`:e.coverDate),1)):de("v-if",!0)])):de("v-if",!0),e.coverBackgroundSource?(_(),O("div",M0,[C(l,{link:e.coverBackgroundSourceUrl,text:e.coverBackgroundSource},null,8,["link","text"])])):de("v-if",!0)],4)}}}),I0=t("h1",null,"Data Structures in C/C++",-1),L0=t("h2",null,"Chapter 8: Binary Search Trees",-1),R0=t("img",{src:C0,class:"image-bottom",style:{height:"70px",width:"auto"}},null,-1),H0={__name:"1",setup(e){const n={theme:"./slidev-theme-academic-1.1.1",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap8/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},coverDate:null};return F(L),(s,r)=>(_(),H(P0,X(Q(n)),{default:A(()=>[I0,L0,R0]),_:1},16))}},j0={class:"slidev-layout default"},se={__name:"default",setup(e){return F(L),(n,s)=>(_(),O("div",j0,[qt(n.$slots,"default")]))}},z0=t("h1",null,"Table of contents",-1),V0=t("ol",null,[t("li",null,"Introduction"),t("li",null,"Trees"),t("li",null,"Binary Trees"),t("li",null,"Binary Search Trees"),t("li",null,[d("Operations on Binary Search Trees "),t("ul",null,[t("li",null,"Creation"),t("li",null,"Search"),t("li",null,"Deletion"),t("li",null,"Queries")])]),t("li",null,"Complexity"),t("li",null,"Conclusion")],-1),U0={__name:"2",setup(e){const n={};return F(L),(s,r)=>(_(),H(se,X(Q(n)),{default:A(()=>[z0,V0]),_:1},16))}},q0={class:"slidev-layout intro"},W0={class:"my-auto"},Hn={__name:"intro",setup(e){return F(L),(n,s)=>(_(),O("div",q0,[t("div",W0,[qt(n.$slots,"default")])]))}},K0=t("span",{style:{"font-weight":"700","font-size":"30px"}},"1. Introduction",-1),Y0={__name:"3",setup(e){const n={layout:"intro"};return F(L),(s,r)=>{const o=re("center");return _(),H(Hn,X(Q(n)),{default:A(()=>[C(o,null,{default:A(()=>[K0]),_:1})]),_:1},16)}}};var G0="/courses/data-structure/binary-search-trees/chap8/trees.png";const Z0=t("h1",null,"So Many Trees",-1),Q0=t("img",{src:G0},null,-1),X0=t("br",null,null,-1),J0=t("p",null,[d("Today, we will focus on a subclass of trees called "),t("strong",null,"Binary Search Trees")],-1),eb=t("p",null,"As their name suggests, they are useful for searching!",-1),tb={__name:"4",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[Z0,C(o,null,{default:A(()=>[Q0]),_:1}),X0,J0,eb]),_:1},16)}}};var bp="/courses/data-structure/binary-search-trees/chap8/example-book.png";const nb=t("h1",null,"Examples of Application",-1),sb=t("img",{src:bp},null,-1),rb=t("p",null,"Imagine you would like to search the age of your favorite fictional character in a huge dataset",-1),ob=d("Instead of "),lb=t("ul",null,[t("li",null,"Going through all the database until you find your character\u2019s name"),t("li",null,"or keeping your database sorted by character\u2019s name")],-1),ab=t("p",null,[d("Implement a "),t("b",null,"Binary Search Tree!")],-1),ib={__name:"5",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[nb,C(o,null,{default:A(()=>[sb]),_:1}),rb,Ee((_(),O("div",null,[ob,lb,C(o,null,{default:A(()=>[ab]),_:1})])),[[l,1]])]),_:1},16)}}};var cb="/courses/data-structure/binary-search-trees/chap8/doom.png";const ub=t("h1",null,"Examples of Application",-1),pb=t("p",null,[d("Almost every 3D engine uses "),t("strong",null,"binary search trees"),d(" (BST) to determine which objects should be rendered in a 3D world"),t("br"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u2192")]),t("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.3669em"}}),t("span",{class:"mrel"},"\u2192")])])]),d(" close connection with "),t("strong",null,"binary space partitioning")],-1),db=t("br",null,null,-1),fb=t("img",{src:cb,style:{height:"250px"}},null,-1),hb=t("p",null,"It\u2019s famously used in Doom 1993 as the first time a BST had even been used in a game",-1),mb={__name:"6",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[ub,pb,Ee((_(),O("div",null,[C(o,null,{default:A(()=>[db,fb,hb]),_:1})])),[[l,1]])]),_:1},16)}}};var yb="/courses/data-structure/binary-search-trees/chap8/facebook-logo.png",gb="/courses/data-structure/binary-search-trees/chap8/google-logo.png";const _b=t("h1",null,"Examples of Application",-1),vb=t("p",null,"Some other real world examples include many search engines",-1),bb=t("br",null,null,-1),wb=t("br",null,null,-1),xb={class:"row"},Ab={class:"column"},Bb=t("img",{src:yb,style:{height:"50px"}},null,-1),kb=t("p",null,"Facebook is able to search through billions of users\u2019 data so quickly",-1),$b={class:"column"},Cb=t("img",{src:gb,style:{height:"50px"}},null,-1),Eb=t("p",null,"Google search engines are able to populate suggestions as soon as you start typing",-1),Db=t("br",null,null,-1),Sb=t("p",null,[d("Once again, they rely on "),t("strong",null,"binary search trees")],-1),Tb={__name:"7",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[_b,vb,Ee((_(),O("div",null,[bb,wb,t("div",xb,[t("div",Ab,[C(o,null,{default:A(()=>[Bb]),_:1}),kb]),t("div",$b,[C(o,null,{default:A(()=>[Cb]),_:1}),Eb])]),Db,Sb])),[[l,1]])]),_:1},16)}}},Ob=t("span",{style:{"font-weight":"700","font-size":"30px"}},"2. Trees",-1),Nb={__name:"8",setup(e){const n={layout:"intro"};return F(L),(s,r)=>{const o=re("center");return _(),H(Hn,X(Q(n)),{default:A(()=>[C(o,null,{default:A(()=>[Ob]),_:1})]),_:1},16)}}};var Fb="/courses/data-structure/binary-search-trees/chap8/tree-annoted.png";const Mb=t("h1",null,"Terminology on Trees",-1),Pb=t("br",null,null,-1),Ib=t("div",{class:"row"},[t("div",{class:"column"},[t("br"),t("img",{src:Fb,style:{height:"250px"}})]),t("div",{class:"column",style:{"font-size":"13px"}},[t("ul",null,[t("li",null,[d("A is the "),t("strong",null,"root")]),t("li",null,[d("C is the "),t("strong",null,"parent"),d(" of E")]),t("li",null,[d("D, E, F are "),t("strong",null,"leaves")]),t("li",null,[d("E and F are "),t("strong",null,"siblings")])]),t("p",null,[d("The "),t("strong",null,"depth of a node"),d(" is the number of edges from the root (e.g. the depth of C is 1)")]),t("p",null,[d("The "),t("strong",null,"height of a node"),d(" is the number of edges from the deepest leaf (e.g. the height of B is 1)")]),t("p",null,[d("The "),t("strong",null,"height of the tree"),d(" is height of the root (e.g. here it is 2)")])])],-1),Lb={__name:"9",setup(e){const n={};return F(L),(s,r)=>(_(),H(se,X(Q(n)),{default:A(()=>[Mb,Pb,Ib]),_:1},16))}};var Rb="/courses/data-structure/binary-search-trees/chap8/constraints.png",Hb="/courses/data-structure/binary-search-trees/chap8/tree-v2.png";const jb=t("h1",null,"Trees",-1),zb=t("br",null,null,-1),Vb=t("br",null,null,-1),Ub=t("br",null,null,-1),qb=t("div",{class:"row"},[t("div",{class:"column"},[t("img",{src:Rb,style:{height:"230px"}})]),t("div",{class:"column"},[t("img",{src:Hb,style:{height:"230px"}})])],-1),Wb={__name:"10",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[jb,C(o,null,{default:A(()=>[zb,Vb,Ub,qb]),_:1})]),_:1},16)}}},Kb=t("span",{style:{"font-weight":"700","font-size":"30px"}},"3. Binary Trees",-1),Yb={__name:"11",setup(e){const n={layout:"intro"};return F(L),(s,r)=>{const o=re("center");return _(),H(Hn,X(Q(n)),{default:A(()=>[C(o,null,{default:A(()=>[Kb]),_:1})]),_:1},16)}}};var aa="/courses/data-structure/binary-search-trees/chap8/tree.png";const Gb=t("h1",null,"Binary Trees: Definition",-1),Zb=t("div",{class:"box-top-left"},[t("span",{class:"box-title"},"Binary Tree"),t("p",null,[d("A binary tree is a tree where each node has a "),t("strong",null,"data element"),t("br"),d(" and can have "),t("strong",null,"at most 2 children"),d(" called")]),t("ul",null,[t("li",null,[t("strong",null,"left"),d(" child")]),t("li",null,[t("strong",null,"right"),d(" child")])])],-1),Qb=t("img",{src:aa},null,-1),Xb={__name:"12",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[Gb,Zb,C(o,null,{default:A(()=>[Qb]),_:1})]),_:1},16)}}};var Jb="/courses/data-structure/binary-search-trees/chap8/tree-linkedlist.png";const e8=t("h1",null,"Binary Trees: Indexing or Indirect Addressing?",-1),t8=t("p",null,[t("em",null,[d("How would you store a binary tree?"),t("br"),d(" Can you illustrate your idea?")])],-1),n8=t("br",null,null,-1),s8=t("br",null,null,-1),r8={class:"row"},o8=t("div",{class:"column"},[t("img",{src:aa})],-1),l8={class:"column"},a8=t("img",{src:Jb},null,-1),i8=d(" We are going to use a linked list "),c8=[a8,i8],u8={__name:"13",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[e8,C(o,null,{default:A(()=>[t8]),_:1}),n8,s8,C(o,null,{default:A(()=>[t("div",r8,[o8,t("div",l8,[Ee((_(),O("div",null,c8)),[[l,1]])])])]),_:1})]),_:1},16)}}};var p8="/courses/data-structure/binary-search-trees/chap8/tree-linkedlist-full.png";const d8=t("h1",null,"Binary Trees: C/C++ Implementation",-1),f8=t("p",null,[t("em",null,[d("Here is the full picture"),t("br"),d(" How would you code that structure?")])],-1),h8=t("img",{src:p8,style:{height:"280px"}},null,-1),m8=t("p",null,[t("strong",null,"Reminder:"),d(" The size is the number of nodes. The depth of a tree is the largest depth of the leaves")],-1),y8={__name:"14",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[d8,C(o,null,{default:A(()=>[f8,h8]),_:1}),m8]),_:1},16)}}},g8={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_8=t("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),v8=[_8];function b8(e,n){return _(),O("svg",g8,v8)}var w8={name:"ph-clipboard",render:b8};const x8={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},A8=t("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),B8=[A8];function k8(e,n){return _(),O("svg",x8,B8)}var $8={name:"ph-check-circle",render:k8};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function wp(e){return typeof e=="undefined"||e===null}function C8(e){return typeof e=="object"&&e!==null}function E8(e){return Array.isArray(e)?e:wp(e)?[]:[e]}function D8(e,n){var s,r,o,l;if(n)for(l=Object.keys(n),s=0,r=l.length;s<r;s+=1)o=l[s],e[o]=n[o];return e}function S8(e,n){var s="",r;for(r=0;r<n;r+=1)s+=e;return s}function T8(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var O8=wp,N8=C8,F8=E8,M8=S8,P8=T8,I8=D8,ia={isNothing:O8,isObject:N8,toArray:F8,repeat:M8,isNegativeZero:P8,extend:I8};function xp(e,n){var s="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),r+" "+s):r}function Js(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=xp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Js.prototype=Object.create(Error.prototype);Js.prototype.constructor=Js;Js.prototype.toString=function(n){return this.name+": "+xp(this,n)};var $n=Js,L8=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],R8=["scalar","sequence","mapping"];function H8(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(r){n[String(r)]=s})}),n}function j8(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(L8.indexOf(s)===-1)throw new $n('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=H8(n.styleAliases||null),R8.indexOf(this.kind)===-1)throw new $n('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Xe=j8;function nc(e,n){var s=[];return e[n].forEach(function(r){var o=s.length;s.forEach(function(l,a){l.tag===r.tag&&l.kind===r.kind&&l.multi===r.multi&&(o=a)}),s[o]=r}),s}function z8(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function r(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(r);return e}function bl(e){return this.extend(e)}bl.prototype.extend=function(n){var s=[],r=[];if(n instanceof Xe)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new $n("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(l){if(!(l instanceof Xe))throw new $n("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new $n("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new $n("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(l){if(!(l instanceof Xe))throw new $n("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(bl.prototype);return o.implicit=(this.implicit||[]).concat(s),o.explicit=(this.explicit||[]).concat(r),o.compiledImplicit=nc(o,"implicit"),o.compiledExplicit=nc(o,"explicit"),o.compiledTypeMap=z8(o.compiledImplicit,o.compiledExplicit),o};var V8=bl,U8=new Xe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),q8=new Xe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),W8=new Xe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),K8=new V8({explicit:[U8,q8,W8]});function Y8(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function G8(){return null}function Z8(e){return e===null}var Q8=new Xe("tag:yaml.org,2002:null",{kind:"scalar",resolve:Y8,construct:G8,predicate:Z8,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function X8(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function J8(e){return e==="true"||e==="True"||e==="TRUE"}function e5(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var t5=new Xe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:X8,construct:J8,predicate:e5,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function n5(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function s5(e){return 48<=e&&e<=55}function r5(e){return 48<=e&&e<=57}function o5(e){if(e===null)return!1;var n=e.length,s=0,r=!1,o;if(!n)return!1;if(o=e[s],(o==="-"||o==="+")&&(o=e[++s]),o==="0"){if(s+1===n)return!0;if(o=e[++s],o==="b"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(o!=="0"&&o!=="1")return!1;r=!0}return r&&o!=="_"}if(o==="x"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(!n5(e.charCodeAt(s)))return!1;r=!0}return r&&o!=="_"}if(o==="o"){for(s++;s<n;s++)if(o=e[s],o!=="_"){if(!s5(e.charCodeAt(s)))return!1;r=!0}return r&&o!=="_"}}if(o==="_")return!1;for(;s<n;s++)if(o=e[s],o!=="_"){if(!r5(e.charCodeAt(s)))return!1;r=!0}return!(!r||o==="_")}function l5(e){var n=e,s=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(s=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function a5(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!ia.isNegativeZero(e)}var i5=new Xe("tag:yaml.org,2002:int",{kind:"scalar",resolve:o5,construct:l5,predicate:a5,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),c5=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function u5(e){return!(e===null||!c5.test(e)||e[e.length-1]==="_")}function p5(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var d5=/^[-+]?[0-9]+e/;function f5(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ia.isNegativeZero(e))return"-0.0";return s=e.toString(10),d5.test(s)?s.replace("e",".e"):s}function h5(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||ia.isNegativeZero(e))}var m5=new Xe("tag:yaml.org,2002:float",{kind:"scalar",resolve:u5,construct:p5,predicate:h5,represent:f5,defaultStyle:"lowercase"}),y5=K8.extend({implicit:[Q8,t5,i5,m5]}),g5=y5,Ap=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Bp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function _5(e){return e===null?!1:Ap.exec(e)!==null||Bp.exec(e)!==null}function v5(e){var n,s,r,o,l,a,i,c=0,u=null,p,h,f;if(n=Ap.exec(e),n===null&&(n=Bp.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],r=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(s,r,o));if(l=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(p=+n[10],h=+(n[11]||0),u=(p*60+h)*6e4,n[9]==="-"&&(u=-u)),f=new Date(Date.UTC(s,r,o,l,a,i,c)),u&&f.setTime(f.getTime()-u),f}function b5(e){return e.toISOString()}var w5=new Xe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:_5,construct:v5,instanceOf:Date,represent:b5});function x5(e){return e==="<<"||e===null}var A5=new Xe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:x5}),ca=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function B5(e){if(e===null)return!1;var n,s,r=0,o=e.length,l=ca;for(s=0;s<o;s++)if(n=l.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function k5(e){var n,s,r=e.replace(/[\r\n=]/g,""),o=r.length,l=ca,a=0,i=[];for(n=0;n<o;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|l.indexOf(r.charAt(n));return s=o%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function $5(e){var n="",s=0,r,o,l=e.length,a=ca;for(r=0;r<l;r++)r%3===0&&r&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+e[r];return o=l%3,o===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):o===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):o===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function C5(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var E5=new Xe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:B5,construct:k5,predicate:C5,represent:$5}),D5=Object.prototype.hasOwnProperty,S5=Object.prototype.toString;function T5(e){if(e===null)return!0;var n=[],s,r,o,l,a,i=e;for(s=0,r=i.length;s<r;s+=1){if(o=i[s],a=!1,S5.call(o)!=="[object Object]")return!1;for(l in o)if(D5.call(o,l))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function O5(e){return e!==null?e:[]}var N5=new Xe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:T5,construct:O5}),F5=Object.prototype.toString;function M5(e){if(e===null)return!0;var n,s,r,o,l,a=e;for(l=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(r=a[n],F5.call(r)!=="[object Object]"||(o=Object.keys(r),o.length!==1))return!1;l[n]=[o[0],r[o[0]]]}return!0}function P5(e){if(e===null)return[];var n,s,r,o,l,a=e;for(l=new Array(a.length),n=0,s=a.length;n<s;n+=1)r=a[n],o=Object.keys(r),l[n]=[o[0],r[o[0]]];return l}var I5=new Xe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:M5,construct:P5}),L5=Object.prototype.hasOwnProperty;function R5(e){if(e===null)return!0;var n,s=e;for(n in s)if(L5.call(s,n)&&s[n]!==null)return!1;return!0}function H5(e){return e!==null?e:{}}var j5=new Xe("tag:yaml.org,2002:set",{kind:"mapping",resolve:R5,construct:H5});g5.extend({implicit:[w5,A5],explicit:[E5,N5,I5,j5]});function sc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var z5=new Array(256),V5=new Array(256);for(var Un=0;Un<256;Un++)z5[Un]=sc(Un)?1:0,V5[Un]=sc(Un);function U5(e){return Array.from(new Set(e))}function rc(...e){let n,s,r;e.length===1?(n=0,r=1,[s]=e):[n,s,r=1]=e;const o=[];let l=n;for(;l<s;)o.push(l),l+=r||1;return o}function q5(e,n){if(!n||n==="all"||n==="*")return rc(1,e+1);const s=[];for(const r of n.split(/[,;]/g))if(!r.includes("-"))s.push(+r);else{const[o,l]=r.split("-",2);s.push(...rc(+o,l?+l+1:e+1))}return U5(s).filter(r=>r<=e).sort((r,o)=>r-o)}const W5=["title"],en=$e({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;F(L);const s=F(Ns),r=F(kn),o=F(Fs);function l(h=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=m.length;for(let x=0;x<h;x++)f.push(m.charAt(Math.floor(Math.random()*g)));return f.join("")}const a=q(),i=In();ds(()=>{const h=n.at==null?r==null?void 0:r.value.length:n.at,f=S(()=>o!=null&&o.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(h||0)),n.ranges.length-1)),m=S(()=>n.ranges[f.value]||"");if(n.ranges.length>=2&&!(o!=null&&o.value)){const g=l(),x=ym(n.ranges.length-1).map(b=>g+b);r!=null&&r.value&&(r.value.push(...x),oo(()=>x.forEach(b=>al(r.value,b)),i))}or(()=>{if(!a.value)return;const x=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const b of x){const E=Array.from(b.querySelectorAll(".line")),k=q5(E.length,m.value);if(E.forEach(($,D)=>{const j=k.includes(D+1);$.classList.toggle(An,!0),$.classList.toggle("highlighted",j),$.classList.toggle("dishonored",!j)}),n.maxHeight){const $=b.querySelector(".line.highlighted");$&&$.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=vy();function p(){var f,m;const h=(m=(f=a.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;h&&u(h)}return(h,f)=>{const m=$8,g=w8;return _(),O("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:Je({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[qt(h.$slots,"default"),w(xe).codeCopy?(_(),O("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(c)?"Copied":"Copy",onClick:f[0]||(f[0]=x=>p())},[w(c)?(_(),H(m,{key:0,class:"p-2 w-8 h-8"})):(_(),H(g,{key:1,class:"p-2 w-8 h-8"}))],8,W5)):de("v-if",!0)],4)}}});var K5="/courses/data-structure/binary-search-trees/chap8/linkedlist-elements-tree.png",Y5="/courses/data-structure/binary-search-trees/chap8/linkedlist-elements-node.png";const G5=t("h1",null,"Binary Trees: C/C++ Implementation",-1),Z5=t("p",null,[d("Here is an implementation proposal"),t("br"),t("br")],-1),Q5={class:"row"},X5={class:"column"},J5=t("img",{src:K5},null,-1),e3={class:"column"},t3=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"typedef"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"struct"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BinaryTree"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	"),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," size"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	"),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," depth"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," root"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BinaryTree"),t("span",{style:{color:"#858585"}},";")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"typedef"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"struct"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BinaryTree"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	"),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," size"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	"),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," depth"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," root"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BinaryTree"),t("span",{style:{color:"#8E8F8B"}},";")])])])],-1),n3={class:"row"},s3={class:"column"},r3=t("img",{src:Y5},null,-1),o3={class:"column"},l3=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"typedef"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"struct"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	"),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," value"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," left"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," right"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#858585"}},";")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"typedef"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"struct"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	"),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," value"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," left"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," right"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#8E8F8B"}},";")])])])],-1),a3=t("br",null,null,-1),i3=t("br",null,null,-1),c3=t("p",null,[d("Everything you have learned about linked lists, dynamic allocation and pointers"),t("br"),d(" will be of upmost importance!")],-1),u3={__name:"15",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=en;return _(),H(se,X(Q(n)),{default:A(()=>[G5,Z5,t("div",Q5,[t("div",X5,[C(o,null,{default:A(()=>[J5]),_:1})]),t("div",e3,[C(l,Re({},{ranges:[""]}),{default:A(()=>[t3]),_:1},16)])]),t("div",n3,[t("div",s3,[C(o,null,{default:A(()=>[r3]),_:1})]),t("div",o3,[C(l,Re({},{ranges:[""]}),{default:A(()=>[l3]),_:1},16)])]),a3,i3,c3]),_:1},16)}}},p3=t("h1",null,"Binary Trees: Traversals",-1),d3=t("div",{class:"row"},[t("div",{class:"column"},[t("p",null,[t("strong",null,"Depth-first traversal")]),t("div",{style:{"font-size":"14px"}},[t("ul",null,[t("li",null,[d("PreOrder: parent "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u2192")]),t("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.3669em"}}),t("span",{class:"mrel"},"\u2192")])])]),d(" left child "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u2192")]),t("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.3669em"}}),t("span",{class:"mrel"},"\u2192")])])]),d(" right child")]),t("li",null,[d("InOrder : left child "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u2192")]),t("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.3669em"}}),t("span",{class:"mrel"},"\u2192")])])]),d(" parent "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u2192")]),t("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.3669em"}}),t("span",{class:"mrel"},"\u2192")])])]),d(" right child")]),t("li",null,[d("PostOrder : left child "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u2192")]),t("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.3669em"}}),t("span",{class:"mrel"},"\u2192")])])]),d(" right child "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u2192")]),t("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.3669em"}}),t("span",{class:"mrel"},"\u2192")])])]),d(" parent")])])])]),t("div",{class:"column"},[t("p",null,[t("strong",null,"Breadth-first traversal")]),t("div",{style:{"font-size":"14px"}},[t("ul",null,[t("li",null,[d("LevelOrder: top "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u2192")]),t("annotation",{encoding:"application/x-tex"},"\\rightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.3669em"}}),t("span",{class:"mrel"},"\u2192")])])]),d(" bottom"),t("br"),d("(usually left to right)")])])])])],-1),f3=t("p",null,[t("br"),t("br")],-1),h3={class:"row"},m3={class:"column"},y3=t("img",{src:aa,style:{height:"180px"}},null,-1),g3={class:"column"},_3=d("PreOrder traversal: "),v3=d("A, B, D, C, E, F"),b3=[v3],w3=d("InOrder traversal: "),x3=d("D, B, A, E, C, F"),A3=[x3],B3=d("PostOrder traversal: "),k3=d("D, B, E, F, C, A"),$3=[k3],C3=d("LevelOrder traversal: "),E3=d("A, B, C, D, E, F"),D3=[E3],S3={__name:"16",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[p3,d3,f3,t("div",h3,[t("div",m3,[C(o,null,{default:A(()=>[y3]),_:1})]),t("div",g3,[t("ul",null,[t("li",null,[_3,Ee((_(),O("span",null,b3)),[[l,1]])]),t("li",null,[w3,Ee((_(),O("span",null,A3)),[[l,2]])]),t("li",null,[B3,Ee((_(),O("span",null,$3)),[[l,3]])]),t("li",null,[C3,Ee((_(),O("span",null,D3)),[[l,4]])])])])])]),_:1},16)}}},T3=t("span",{style:{"font-weight":"700","font-size":"30px"}},"4. Binary Search Trees",-1),O3={__name:"17",setup(e){const n={layout:"intro"};return F(L),(s,r)=>{const o=re("center");return _(),H(Hn,X(Q(n)),{default:A(()=>[C(o,null,{default:A(()=>[T3]),_:1})]),_:1},16)}}};var kp="/courses/data-structure/binary-search-trees/chap8/bst.png";const N3=t("h1",null,"Binary Search Trees (BST)",-1),F3=t("div",{class:"box-top-left"},[t("p",null,[t("span",{class:"box-title"},"Binary Search Tree")]),t("div",{style:{"font-size":"13px"}},[t("p",null,[d("A "),t("strong",null,"Binary search tree"),d(" is a Binary Tree\u2026")]),t("ul",null,[t("li",null,[d("where the value stored in a node is called a "),t("strong",null,"key")]),t("li",null,[d("with additional constraints : "),t("ul",null,[t("li",null,[d("For any node u, any key in its "),t("strong",null,"left subtree"),d(" are "),t("strong",null,"lesser"),d(" than the key of u")]),t("li",null,[d("For any node u, any key in its "),t("strong",null,"right subtree"),d(" are "),t("strong",null,"greater"),d(" than the key of u")]),t("li",null,"Usually, we consider that duplicate keys are not allowed")])])])])],-1),M3=t("img",{src:kp},null,-1),P3={__name:"18",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[N3,F3,C(o,null,{default:A(()=>[M3]),_:1})]),_:1},16)}}};var I3="/courses/data-structure/binary-search-trees/chap8/bst-1.png",L3="/courses/data-structure/binary-search-trees/chap8/bst-2.png";const R3=t("h1",null,"Binary Search Trees (BST)",-1),H3=t("img",{src:kp},null,-1),j3={class:"row"},z3={class:"column"},V3=t("img",{src:I3},null,-1),U3={class:"column"},q3=t("img",{src:L3},null,-1),W3={__name:"19",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[R3,C(o,null,{default:A(()=>[H3]),_:1}),t("div",j3,[t("div",z3,[C(o,null,{default:A(()=>[V3]),_:1})]),t("div",U3,[C(o,null,{default:A(()=>[q3]),_:1})])])]),_:1},16)}}};var K3="/courses/data-structure/binary-search-trees/chap8/conway.jpg",Y3="/courses/data-structure/binary-search-trees/chap8/wheeler.jpg";const G3=t("h1",null,"Binary Search Trees (BST)",-1),Z3=t("p",null,"We owe the binary search trees, developped in 1960, to\u2026",-1),Q3=t("br",null,null,-1),X3={class:"row"},J3={class:"column"},ew=t("img",{src:K3,style:{height:"180px"}},null,-1),tw=t("br",null,null,-1),nw=t("b",null,"Conway Berners-Lee",-1),sw=t("p",null,"Developped the world\u2019s first commercially available general-purpose digital computer",-1),rw=t("p",null,"Father of Sir Tim Berners-Lee",-1),ow=[sw,rw],lw={class:"column"},aw=t("img",{src:Y3,style:{height:"180px"}},null,-1),iw=t("br",null,null,-1),cw=t("b",null,"David Wheeler",-1),uw=t("p",null,"First PhD in Computer Science!",-1),pw=t("p",null,"Contributed to the assembly language programming",-1),dw=[uw,pw],fw={__name:"20",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[G3,Z3,Q3,C(o,null,{default:A(()=>[t("div",X3,[t("div",J3,[ew,tw,nw,Ee((_(),O("div",null,ow)),[[l,1]])]),t("div",lw,[aw,iw,cw,Ee((_(),O("div",null,dw)),[[l,2]])])])]),_:1})]),_:1},16)}}};var hw="/courses/data-structure/binary-search-trees/chap8/bst-complete.png";const mw=t("h1",null,"Complete BST",-1),yw={class:"box-top-left"},gw=t("p",null,[t("span",{class:"box-title"},"Complete BST")],-1),_w=t("p",null,[d("A binary search tree is said to be "),t("strong",null,"complete"),d(" when all links are used"),t("br"),t("span",{style:{"font-size":"13px"}},"(except maybe the last level (leaves) which are filled left to right)")],-1),vw=t("br",null,null,-1),bw=t("img",{src:hw},null,-1),ww={class:"box"},xw=d("Given n, there is only one shape for a complete BST with n nodes"),Aw={__name:"21",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[mw,t("div",yw,[gw,C(o,null,{default:A(()=>[_w]),_:1})]),vw,C(o,null,{default:A(()=>[bw]),_:1}),t("div",ww,[C(o,null,{default:A(()=>[xw]),_:1})])]),_:1},16)}}};var Bw="/courses/data-structure/binary-search-trees/chap8/quiz-not-bst-1.png";const kw=t("h1",null,"Quiz",-1),$w=t("p",null,[t("em",null,"What type of tree is it?")],-1),Cw=t("img",{src:Bw},null,-1),Ew=d(" It is a binary tree and not a binary search tree because... "),Dw=t("p",null,"2 (right subtree) > 3 (left subtree)",-1),Sw=[Ew,Dw],Tw={__name:"22",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[kw,C(o,null,{default:A(()=>[$w,Cw,Ee((_(),O("div",null,Sw)),[[l,1]])]),_:1})]),_:1},16)}}};var Ow="/courses/data-structure/binary-search-trees/chap8/quiz-bst-1.png";const Nw=t("h1",null,"Quiz",-1),Fw=t("p",null,[t("em",null,"What type of tree is it?")],-1),Mw=t("img",{src:Ow},null,-1),Pw=d(" It is a binary search tree! "),Iw=[Pw],Lw={__name:"23",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[Nw,C(o,null,{default:A(()=>[Fw,Mw,Ee((_(),O("div",null,Iw)),[[l,1]])]),_:1})]),_:1},16)}}};var Rw="/courses/data-structure/binary-search-trees/chap8/quiz-bst-2.png";const Hw=t("h1",null,"Quiz",-1),jw=t("p",null,[t("em",null,"What type of tree is it?")],-1),zw=t("img",{src:Rw},null,-1),Vw=t("br",null,null,-1),Uw=d(" It is a complete binary search tree! "),qw=[Uw],Ww={__name:"24",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[Hw,C(o,null,{default:A(()=>[jw,zw,Vw,Ee((_(),O("div",null,qw)),[[l,1]])]),_:1})]),_:1},16)}}};var Kw="/courses/data-structure/binary-search-trees/chap8/quiz-not-bst-2.png";const Yw=t("h1",null,"Quiz",-1),Gw=t("p",null,[t("em",null,"What type of tree is it?")],-1),Zw=t("img",{src:Kw},null,-1),Qw=d(" It is simply a tree and not a binary tree because... "),Xw=t("p",null,"one node as more than 2 children",-1),Jw=[Qw,Xw],ex={__name:"25",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[Yw,C(o,null,{default:A(()=>[Gw,Zw,Ee((_(),O("div",null,Jw)),[[l,1]])]),_:1})]),_:1},16)}}};var ua="/courses/data-structure/binary-search-trees/chap8/example-book-bst.png";const tx=t("h1",null,"Quiz",-1),nx=t("p",null,[t("em",null,"What type of tree is it?")],-1),sx=t("img",{src:ua},null,-1),rx=d(" It is a binary search tree! "),ox=t("p",null,[d("The key is the name"),t("br"),d(" Names are compared by alphabetical order")],-1),lx=[rx,ox],ax={__name:"26",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[tx,C(o,null,{default:A(()=>[nx,sx,Ee((_(),O("div",null,lx)),[[l,1]])]),_:1})]),_:1},16)}}},ix=t("h1",null,"Further comments",-1),cx=t("p",null,[t("br"),t("br")],-1),ux=t("div",{class:"row"},[t("div",{class:"column"},[t("img",{src:ua})]),t("div",{class:"column"},[t("img",{src:bp})])],-1),px=t("p",null,[d("This peculiar tree is useful to "),t("strong",null,"alphabetically search a name in an unsorted array"),d(". The number associated to each name is actually the index of the item in the database")],-1),dx={__name:"27",setup(e){const n={};return F(L),(s,r)=>(_(),H(se,X(Q(n)),{default:A(()=>[ix,cx,ux,px]),_:1},16))}};var fx="/courses/data-structure/binary-search-trees/chap8/bst-samekeyset.png",hx="/courses/data-structure/binary-search-trees/chap8/bst-samekeyset-1.png",$p="/courses/data-structure/binary-search-trees/chap8/bst-samekeyset-2.png";const mx=t("h1",null,"BST and Keyset",-1),yx=t("p",null,[d("The same "),t("strong",null,"keyset"),d(" {1,2,4,5,8,9} can have different valid BSTs"),t("br"),d(" However, there can be only one "),t("em",null,"complete"),d(" BST!")],-1),gx=t("div",{class:"row"},[t("div",{class:"three-column"},[t("img",{src:fx})]),t("div",{class:"three-column"},[t("img",{src:hx})]),t("div",{class:"three-column"},[t("img",{src:$p})])],-1),_x=t("br",null,null,-1),vx=t("b",null,"Question:",-1),bx=d(" Which traversal gives the "),wx=t("b",null,"sorted keyset",-1),xx=d(" {1,2,4,5,8,9} on all valid BSTS ? "),Ax=[vx,bx,wx,xx],Bx=t("br",null,null,-1),kx=t("b",null,"Answer:",-1),$x=d(" InOrder Depth-first traversal (left, parent, right) "),Cx=[kx,$x],Ex={__name:"28",setup(e){const n={};return F(L),(s,r)=>{const o=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[mx,yx,gx,_x,Ee((_(),O("div",null,Ax)),[[o,1]]),Bx,Ee((_(),O("div",null,Cx)),[[o,2]])]),_:1},16)}}},Dx=t("h1",null,"Checking BSTS",-1),Sx=t("p",null,[t("strong",null,"Question:"),d(" How to check if a tree is a binary search tree?")],-1),Tx=t("p",null,[t("strong",null,"Answer:"),d(" Perform an InOrder traversal and keep the previous value of the node. If the current node is smaller than the previous node then it is not a binary search tree."),t("br"),t("span",{style:{"font-size":"12px"}},"(Also check that you have the correct number of children)")],-1),Ox=[Tx],Nx=t("p",null,[t("br"),t("br")],-1),Fx={class:"row"},Mx={class:"column"},Px=t("img",{src:$p},null,-1),Ix=t("div",{class:"column"},[t("ul",null,[t("li",null,[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mn",null,"1")]),t("annotation",{encoding:"application/x-tex"},"1")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6444em"}}),t("span",{class:"mord"},"1")])])])]),t("li",null,[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mn",null,"1"),t("mo",null,"<"),t("mn",null,"2")]),t("annotation",{encoding:"application/x-tex"},"1 < 2")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"1"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6444em"}}),t("span",{class:"mord"},"2")])])])]),t("li",null,[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mn",null,"1"),t("mo",null,"<"),t("mn",null,"2"),t("mo",null,"<"),t("mn",null,"4")]),t("annotation",{encoding:"application/x-tex"},"1 < 2 < 4")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"1"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"2"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6444em"}}),t("span",{class:"mord"},"4")])])])]),t("li",null,[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mn",null,"1"),t("mo",null,"<"),t("mn",null,"2"),t("mo",null,"<"),t("mn",null,"4"),t("mo",null,"<"),t("mn",null,"5")]),t("annotation",{encoding:"application/x-tex"},"1 < 2 < 4 < 5")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"1"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"2"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"4"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6444em"}}),t("span",{class:"mord"},"5")])])])]),t("li",null,[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mn",null,"1"),t("mo",null,"<"),t("mn",null,"2"),t("mo",null,"<"),t("mn",null,"4"),t("mo",null,"<"),t("mn",null,"5"),t("mo",null,"<"),t("mn",null,"8")]),t("annotation",{encoding:"application/x-tex"},"1 < 2 < 4 < 5 < 8")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"1"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"2"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"4"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"5"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6444em"}}),t("span",{class:"mord"},"8")])])])]),t("li",null,[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mn",null,"1"),t("mo",null,"<"),t("mn",null,"2"),t("mo",null,"<"),t("mn",null,"4"),t("mo",null,"<"),t("mn",null,"5"),t("mo",null,"<"),t("mn",null,"8"),t("mo",null,"<"),t("mn",null,"9")]),t("annotation",{encoding:"application/x-tex"},"1 < 2 < 4 < 5 < 8 < 9")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"1"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"2"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"4"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"5"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{class:"mord"},"8"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6444em"}}),t("span",{class:"mord"},"9")])])])])])],-1),Lx={__name:"29",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[Dx,Sx,Ee((_(),O("div",null,Ox)),[[l,1]]),Nx,Ee((_(),O("div",null,[t("div",Fx,[t("div",Mx,[C(o,null,{default:A(()=>[Px]),_:1})]),Ix])])),[[l,2]])]),_:1},16)}}},Rx=t("span",{style:{"font-weight":"700","font-size":"30px"}},"5. Operations on Binary Search Trees",-1),Hx={__name:"30",setup(e){const n={layout:"intro"};return F(L),(s,r)=>{const o=re("center");return _(),H(Hn,X(Q(n)),{default:A(()=>[C(o,null,{default:A(()=>[Rx]),_:1})]),_:1},16)}}},jx=t("h1",null,"Creation",-1),zx={class:"row"},Vx={class:"column"},Ux=d(" Let us consider "),qx=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"typedef"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"struct"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	"),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," key"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," left"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," right"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#858585"}},";")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"typedef"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"struct"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	"),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," key"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," left"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," right"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#8E8F8B"}},";")])])])],-1),Wx={class:"column"},Kx=d(" How to define a function creating a new node? "),Yx=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_createNode"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"k"),t("span",{style:{color:"#858585"}},"){")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," myNewNode "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"new"),t("span",{style:{color:"#DBD7CA"}}," Node"),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}}," //Creation of new Node")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#B8A965"}},"myNewNode"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"left"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"nullptr"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#B8A965"}},"myNewNode"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"right"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"nullptr"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#B8A965"}},"myNewNode"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," k"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," myNewNode"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_createNode"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"k"),t("span",{style:{color:"#8E8F8B"}},"){")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," myNewNode "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"new"),t("span",{style:{color:"#393A34"}}," Node"),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}}," //Creation of new Node")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8C862B"}},"myNewNode"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"left"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"nullptr"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8C862B"}},"myNewNode"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"right"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"nullptr"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8C862B"}},"myNewNode"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," k"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," myNewNode"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Gx=t("p",null,"Then, in your main function, you can easily create new nodes as follows",-1),Zx={class:"row"},Qx={class:"column"},Xx=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," mySweetNewNode "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_createNode"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"5"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    cout "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"mySweetNewNode"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," mySweetNewNode "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_createNode"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"5"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    cout "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"mySweetNewNode"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Jx={class:"column"},eA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"C:"),t("span",{style:{color:"#D4976C"}},"\\>")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"5")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"C:"),t("span",{style:{color:"#A65E2B"}},"\\>")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"5")])])])],-1),tA=t("i",null,"Actually, there is a smarter way!",-1),nA={__name:"31",setup(e){const n={};return F(L),(s,r)=>{const o=en,l=re("center"),a=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[jx,t("div",zx,[t("div",Vx,[Ux,C(o,Re({},{ranges:[""]}),{default:A(()=>[qx]),_:1},16)]),t("div",Wx,[Kx,Ee((_(),O("div",null,[C(o,Re({},{ranges:[""]}),{default:A(()=>[Yx]),_:1},16)])),[[a,1]])])]),Ee((_(),O("div",null,[Gx,t("div",Zx,[t("div",Qx,[C(o,Re({},{ranges:[""]}),{default:A(()=>[Xx]),_:1},16)]),t("div",Jx,[C(o,Re({},{ranges:[""]}),{default:A(()=>[eA]),_:1},16)])]),C(l,null,{default:A(()=>[tA]),_:1})])),[[a,2]])]),_:1},16)}}},sA=t("h1",null,"Creation",-1),rA=t("p",null,"Instead, let us consider",-1),oA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"typedef"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"struct"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	"),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," key"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," left"),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#D4976C"}},"nullptr"),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}}," //Default initialization")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," right"),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#D4976C"}},"nullptr"),t("span",{style:{color:"#858585"}},";"),t("span",{style:{color:"#758575"}},"//Default initialization")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"	//Constructors and member initializer lists (see next semester) ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	"),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#858585"}},"()"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{}")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"\xA0\xA0\xA0\xA0"),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"data"),t("span",{style:{color:"#858585"}},"):"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"key"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"data"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{}")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#858585"}},";")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"typedef"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"struct"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	"),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," key"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," left"),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#A65E2B"}},"nullptr"),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}}," //Default initialization")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," right"),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#A65E2B"}},"nullptr"),t("span",{style:{color:"#8E8F8B"}},";"),t("span",{style:{color:"#A0ADA0"}},"//Default initialization")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"	//Constructors and member initializer lists (see next semester) ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	"),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#8E8F8B"}},"()"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{}")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"\xA0\xA0\xA0\xA0"),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"data"),t("span",{style:{color:"#8E8F8B"}},"):"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"key"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"data"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{}")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#8E8F8B"}},";")])])])],-1),lA=t("p",null,"Then, in your main function, you can easily create new nodes as follows",-1),aA={class:"row"},iA={class:"column"},cA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," mySweetNewNode "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"5"),t("span",{style:{color:"#858585"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    cout "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"mySweetNewNode"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," mySweetNewNode "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"5"),t("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    cout "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"mySweetNewNode"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),uA={class:"column"},pA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"C:"),t("span",{style:{color:"#D4976C"}},"\\>")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"5")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"C:"),t("span",{style:{color:"#A65E2B"}},"\\>")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"5")])])])],-1),dA={__name:"32",setup(e){const n={};return F(L),(s,r)=>{const o=en;return _(),H(se,X(Q(n)),{default:A(()=>[sA,rA,C(o,Re({},{ranges:[""]}),{default:A(()=>[oA]),_:1},16),lA,t("div",aA,[t("div",iA,[C(o,Re({},{ranges:["3"]}),{default:A(()=>[cA]),_:1},16)]),t("div",uA,[C(o,Re({},{ranges:[""]}),{default:A(()=>[pA]),_:1},16)])])]),_:1},16)}}};var fA="/courses/data-structure/binary-search-trees/chap8/bst-search.png";const hA=t("h1",null,"Search",-1),mA=t("p",null,[d("How to search the node with "),t("strong",null,"key"),d(" equals 5 starting from the root?")],-1),yA=t("br",null,null,-1),gA=t("br",null,null,-1),_A=t("img",{src:fA},null,-1),vA=t("br",null,null,-1),bA=d(" How would you code the search function? "),wA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_search"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"k"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},")")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_search"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"k"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},")")])])])],-1),xA={__name:"33",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=en;return _(),H(se,X(Q(n)),{default:A(()=>[hA,mA,C(o,null,{default:A(()=>[yA,gA,_A]),_:1}),vA,C(o,null,{default:A(()=>[bA,C(l,Re({},{ranges:[""]}),{default:A(()=>[wA]),_:1},16)]),_:1})]),_:1},16)}}},AA=t("h1",null,"Search",-1),BA={class:"row"},kA={class:"column"},$A=t("p",null,[t("strong",null,"Iterative version")],-1),CA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_search"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"k"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},"){")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"   "),t("span",{style:{color:"#4D9375"}},"while"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"v "),t("span",{style:{color:"#CB7676"}},"!="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"nullptr"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"and"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"!="),t("span",{style:{color:"#DBD7CA"}}," k"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    	"),t("span",{style:{color:"#4D9375"}},"if"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"k "),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#858585"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    	    v "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"left"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#4D9375"}},"else")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"            v "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"right"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"   "),t("span",{style:{color:"#858585"}},"}")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"   "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," v"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_search"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"k"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},"){")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"   "),t("span",{style:{color:"#1C6B48"}},"while"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"v "),t("span",{style:{color:"#AB5959"}},"!="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"nullptr"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"and"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"!="),t("span",{style:{color:"#393A34"}}," k"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    	"),t("span",{style:{color:"#1C6B48"}},"if"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"k "),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    	    v "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"left"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#1C6B48"}},"else")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"            v "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"right"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"   "),t("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"   "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," v"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),EA={class:"column"},DA=t("p",null,[t("strong",null,"Recursive version")],-1),SA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_search"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"k"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#4D9375"}},"if"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"v "),t("span",{style:{color:"#CB7676"}},"=="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"nullptr"),t("span",{style:{color:"#858585"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"            "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"nullptr"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#4D9375"}},"else"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"if"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"k "),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#858585"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"            "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_search"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"k"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"left"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#4D9375"}},"else"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"if"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"k "),t("span",{style:{color:"#CB7676"}},">"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#858585"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"            "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_search"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"k"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"right"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"      "),t("span",{style:{color:"#4D9375"}},"else"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#4D9375"}},"if"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"k "),t("span",{style:{color:"#CB7676"}},"=="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#858585"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"            "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," v"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	  "),t("span",{style:{color:"#4D9375"}},"else")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"			"),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"nullptr"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_search"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"k"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#1C6B48"}},"if"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"v "),t("span",{style:{color:"#AB5959"}},"=="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"nullptr"),t("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"            "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"nullptr"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#1C6B48"}},"else"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"if"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"k "),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"            "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_search"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"k"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"left"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#1C6B48"}},"else"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"if"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"k "),t("span",{style:{color:"#AB5959"}},">"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"            "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_search"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"k"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"right"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"      "),t("span",{style:{color:"#1C6B48"}},"else"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#1C6B48"}},"if"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"k "),t("span",{style:{color:"#AB5959"}},"=="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"            "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," v"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	  "),t("span",{style:{color:"#1C6B48"}},"else")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"			"),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"nullptr"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),TA={__name:"34",setup(e){const n={};return F(L),(s,r)=>{const o=en;return _(),H(se,X(Q(n)),{default:A(()=>[AA,t("div",BA,[t("div",kA,[$A,C(o,Re({},{ranges:[""]}),{default:A(()=>[CA]),_:1},16)]),t("div",EA,[DA,C(o,Re({},{ranges:[""]}),{default:A(()=>[SA]),_:1},16)])])]),_:1},16)}}};var OA="/courses/data-structure/binary-search-trees/chap8/bst-insert.png";const NA=t("h1",null,"Insertion",-1),FA=t("p",null,[d("How to insert the node with "),t("strong",null,"key"),d(" equals 6 starting from the root?")],-1),MA=t("br",null,null,-1),PA=t("br",null,null,-1),IA=t("img",{src:OA,style:{height:"200px"}},null,-1),LA=t("br",null,null,-1),RA=d(" How would you code the insert function? "),HA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_insert"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"k"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"v"),t("span",{style:{color:"#858585"}},")")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_insert"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"k"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"v"),t("span",{style:{color:"#8E8F8B"}},")")])])])],-1),jA=t("br",null,null,-1),zA=t("p",null,[t("strong",null,"Remark:"),d(" When you insert a node in a BST, it automatically becomes a leaf!")],-1),VA={__name:"35",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=en;return _(),H(se,X(Q(n)),{default:A(()=>[NA,FA,C(o,null,{default:A(()=>[MA,PA,IA]),_:1}),LA,C(o,null,{default:A(()=>[RA,C(l,Re({},{ranges:[""]}),{default:A(()=>[HA]),_:1},16)]),_:1}),jA,zA]),_:1},16)}}},UA=t("h1",null,"Insertion",-1),qA=t("p",null,"Here is a proposal of recursive version",-1),WA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_insert"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"k"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"current"),t("span",{style:{color:"#858585"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // if the current node is null, create a new node and return it")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#4D9375"}},"if"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"current "),t("span",{style:{color:"#CB7676"}},"=="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#D4976C"}},"nullptr"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"new"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"k"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"}")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // if the given key is less than the current node, recur for the left subtree")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#4D9375"}},"if"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"k "),t("span",{style:{color:"#CB7676"}},"<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"current"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#B8A965"}},"current"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"left"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_insert"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"k"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"current"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"left"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"}")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#758575"}},"    // if the given key is more than the current node, recur for the right subtree")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#4D9375"}},"else"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"        "),t("span",{style:{color:"#B8A965"}},"current"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"right"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_insert"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#DBD7CA"}},"k"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"current"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"right"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#858585"}},"}")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," current"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_insert"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"k"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"current"),t("span",{style:{color:"#8E8F8B"}},")")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // if the current node is null, create a new node and return it")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#1C6B48"}},"if"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"current "),t("span",{style:{color:"#AB5959"}},"=="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#A65E2B"}},"nullptr"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"new"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"k"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // if the given key is less than the current node, recur for the left subtree")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#1C6B48"}},"if"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"k "),t("span",{style:{color:"#AB5959"}},"<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"current"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#8C862B"}},"current"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"left"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_insert"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"k"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"current"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"left"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A0ADA0"}},"    // if the given key is more than the current node, recur for the right subtree")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#1C6B48"}},"else"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"        "),t("span",{style:{color:"#8C862B"}},"current"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"right"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_insert"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#393A34"}},"k"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"current"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"right"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#8E8F8B"}},"}")]),d(`
`),t("span",{class:"line"}),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," current"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),KA={__name:"36",setup(e){const n={};return F(L),(s,r)=>{const o=en;return _(),H(se,X(Q(n)),{default:A(()=>[UA,qA,C(o,Re({},{ranges:[""]}),{default:A(()=>[WA]),_:1},16)]),_:1},16)}}},YA=t("h1",null,"Insertion: Example",-1),GA=t("p",null,"Let us consider a very simple tree made of a single node with key 5.",-1),ZA=t("p",null,"We would like to add a node with key 6",-1),QA={class:"row"},XA={class:"column"},JA=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#CB7676"}},"int"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"main"),t("span",{style:{color:"#858585"}},"()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"{"),t("span",{style:{color:"#DBD7CA"}}," ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," root "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"new"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"5"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    cout "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#B8A965"}},"root"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#858585"}},")"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," endl"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," myInsertedNode "),t("span",{style:{color:"#CB7676"}},"="),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"BST_insert"),t("span",{style:{color:"#858585"}},"("),t("span",{style:{color:"#6394BF"}},"6"),t("span",{style:{color:"#858585"}},","),t("span",{style:{color:"#DBD7CA"}}," root"),t("span",{style:{color:"#858585"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    cout "),t("span",{style:{color:"#CB7676"}},"<<"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#B8A965"}},"root"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"right"),t("span",{style:{color:"#858585"}},"->"),t("span",{style:{color:"#B8A965"}},"key"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"    "),t("span",{style:{color:"#4D9375"}},"return"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#6394BF"}},"0"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#AB5959"}},"int"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"main"),t("span",{style:{color:"#8E8F8B"}},"()")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"{"),t("span",{style:{color:"#393A34"}}," ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," root "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"new"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"5"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    cout "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#8C862B"}},"root"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#8E8F8B"}},")"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," endl"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    ")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," myInsertedNode "),t("span",{style:{color:"#AB5959"}},"="),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"BST_insert"),t("span",{style:{color:"#8E8F8B"}},"("),t("span",{style:{color:"#296AA3"}},"6"),t("span",{style:{color:"#8E8F8B"}},","),t("span",{style:{color:"#393A34"}}," root"),t("span",{style:{color:"#8E8F8B"}},");")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    cout "),t("span",{style:{color:"#AB5959"}},"<<"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8C862B"}},"root"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"right"),t("span",{style:{color:"#8E8F8B"}},"->"),t("span",{style:{color:"#8C862B"}},"key"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"    "),t("span",{style:{color:"#1C6B48"}},"return"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#296AA3"}},"0"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),eB={class:"column"},tB=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"C:"),t("span",{style:{color:"#CB7676"}},">")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"5")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"6")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"C:"),t("span",{style:{color:"#AB5959"}},">")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"5")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"6")])])])],-1),nB=t("p",null,"Since 6>5, myInsertedNode is the right child of root",-1),sB=t("p",null,'So "myInsertedNode = root->right"',-1),rB={__name:"37",setup(e){const n={};return F(L),(s,r)=>{const o=en;return _(),H(se,X(Q(n)),{default:A(()=>[YA,GA,ZA,t("div",QA,[t("div",XA,[C(o,Re({},{ranges:[""]}),{default:A(()=>[JA]),_:1},16)]),t("div",eB,[C(o,Re({},{ranges:[""]}),{default:A(()=>[tB]),_:1},16)])]),nB,sB]),_:1},16)}}};var oB="/courses/data-structure/binary-search-trees/chap8/bst-deletion-init.png";const lB=t("h1",null,"Deletion",-1),aB=t("p",null,"How to delete a node in a binary tree?",-1),iB=t("br",null,null,-1),cB=t("br",null,null,-1),uB=t("img",{src:oB},null,-1),pB=t("br",null,null,-1),dB=d(" Actually, it is not that straightforward.. "),fB=t("p",null,"Can you guess the 3 different scenarios?",-1),hB={__name:"38",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[lB,aB,C(o,null,{default:A(()=>[iB,cB,uB]),_:1}),pB,C(o,null,{default:A(()=>[dB,fB]),_:1})]),_:1},16)}}};var mB="/courses/data-structure/binary-search-trees/chap8/bst-deletion-case1.png";const yB=t("h1",null,"Deletion: Case 1",-1),gB=t("p",null,[d("The simplest case is when you need to delete "),t("span",{style:{color:"darkgreen"}},[t("strong",null,"a leaf")])],-1),_B=t("br",null,null,-1),vB=t("br",null,null,-1),bB=t("img",{src:mB},null,-1),wB=t("p",null,[t("strong",null,"Solution:"),d(' Remove the "link" with its predecessor (cf. pointers)')],-1),xB=t("p",null,"Don\u2019t forget to free the memory as well (cf. memory allocation)",-1),AB={__name:"39",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[yB,gB,C(o,null,{default:A(()=>[_B,vB,bB]),_:1}),wB,xB]),_:1},16)}}};var BB="/courses/data-structure/binary-search-trees/chap8/bst-deletion-case2.png";const kB=t("h1",null,"Deletion: Case 2",-1),$B=t("p",null,[d("Another somewhat simple case concerns the deletion of "),t("span",{style:{color:"darkgreen"}},[t("strong",null,"a node with a single child")])],-1),CB=t("br",null,null,-1),EB=t("br",null,null,-1),DB=t("img",{src:BB},null,-1),SB=t("p",null,[t("strong",null,"Solution:"),d(" Replace the node by its successor")],-1),TB=t("p",null,"Be careful, it could be the root of subtree too!",-1),OB={__name:"40",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[kB,$B,C(o,null,{default:A(()=>[CB,EB,DB]),_:1}),SB,TB]),_:1},16)}}};var NB="/courses/data-structure/binary-search-trees/chap8/bst-deletion-case3.png";const FB=t("h1",null,"Deletion: Case 3",-1),MB=t("p",null,[d("The last scenario deals with the deletion of "),t("span",{style:{color:"darkgreen"}},[t("strong",null,"a node with two children")])],-1),PB=t("br",null,null,-1),IB=t("br",null,null,-1),LB=t("img",{src:NB},null,-1),RB=t("br",null,null,-1),HB=d(" There is not a unique solution "),jB={__name:"41",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[FB,MB,C(o,null,{default:A(()=>[PB,IB,LB,RB,HB]),_:1})]),_:1},16)}}};var zB="/courses/data-structure/binary-search-trees/chap8/bst-deletion-case3a.png",VB="/courses/data-structure/binary-search-trees/chap8/bst-deletion-case3b.png";const UB=t("h1",null,"Deletion: Case 3",-1),qB=t("p",null,[d("The last scenario deals with the deletion of "),t("span",{style:{color:"darkgreen"}},[t("strong",null,"a node with two children")])],-1),WB=t("br",null,null,-1),KB=d(" Solution 1:"),YB=t("img",{src:zB,style:{height:"150px"}},null,-1),GB=t("br",null,null,-1),ZB=d(" Solution 2: "),QB=t("img",{src:VB,style:{height:"150px"}},null,-1),XB={__name:"42",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[UB,qB,C(o,null,{default:A(()=>[WB,KB,YB,GB,ZB,QB]),_:1})]),_:1},16)}}};var JB="/courses/data-structure/binary-search-trees/chap8/bst-deletion-case3-hard.png";const e2=t("h1",null,"Deletion: Case 3 (hard)",-1),t2=t("p",null,[d("The last scenario deals with the deletion of "),t("span",{style:{color:"darkgreen"}},[t("strong",null,"a node with two children")])],-1),n2=t("br",null,null,-1),s2=t("br",null,null,-1),r2=t("img",{src:JB},null,-1),o2=t("br",null,null,-1),l2=d(" In this more interesting case, how would you proceed? "),a2=t("br",null,null,-1),i2=t("p",null,[t("strong",null,"Hint:"),d(" Preserves inOrder traversal of keys ("),t("em",null,"why?"),d(")")],-1),c2=[a2,i2],u2={__name:"43",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[e2,t2,C(o,null,{default:A(()=>[n2,s2,r2,o2,l2]),_:1}),Ee((_(),O("div",null,c2)),[[l,1]])]),_:1},16)}}};var p2="/courses/data-structure/binary-search-trees/chap8/bst-deletion-case3-hard-solution.png";const d2=t("h1",null,"Deletion: Case 3 (hard)",-1),f2=t("p",null,[d("The last scenario deals with the deletion of "),t("span",{style:{color:"darkgreen"}},[t("strong",null,"a node with two children")])],-1),h2=t("img",{src:p2,style:{height:"250px"}},null,-1),m2=t("br",null,null,-1),y2=t("p",null,[t("strong",null,"Solution:"),d(" Two minimal transformations preserve the InOrder traversal of keys")],-1),g2=t("ul",null,[t("li",null,[d("(a) Replace the node to delete by the "),t("em",null,"in-order successor"),d(" (left-most node in right subtree)")]),t("li",null,[d("(b) Replace the node to delete by the "),t("em",null,"in-order predecessor"),d(" (right-most node in left subtree)")])],-1),_2={__name:"44",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[d2,f2,C(o,null,{default:A(()=>[h2,m2]),_:1}),y2,g2]),_:1},16)}}};var v2="/courses/data-structure/binary-search-trees/chap8/bst-query-1.png";const b2=t("h1",null,"Other Queries",-1),w2=t("p",null,"Actually you can also ask for other queries on BST. For example:",-1),x2=t("ul",null,[t("li",null,[t("strong",null,"Range query"),d(" (find the keys between keyA and keyB)")]),t("li",null,[t("strong",null,"Range count"),d(" (count the keys between keyA and keyB)")])],-1),A2=t("br",null,null,-1),B2=t("img",{src:v2,style:{height:"230px"}},null,-1),k2=t("br",null,null,-1),$2=t("i",null,"How would you proceed to retrieve the keys between 5 and 12?",-1),C2={__name:"45",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[b2,w2,x2,A2,C(o,null,{default:A(()=>[B2,k2]),_:1}),Ee((_(),O("div",null,[C(o,null,{default:A(()=>[$2]),_:1})])),[[l,1]])]),_:1},16)}}};var E2="/courses/data-structure/binary-search-trees/chap8/bst-query-2.png",D2="/courses/data-structure/binary-search-trees/chap8/bst-query-3.png";const S2=t("h1",null,"Range Query",-1),T2=t("br",null,null,-1),O2={class:"row"},N2=t("div",{class:"column"},[d(" Find 5"),t("br"),t("span",{style:{"font-size":"12px"}},"(or its successor if it does not exist)"),t("br"),t("br"),t("img",{src:E2,style:{height:"200px"}})],-1),F2={class:"column"},M2=d(" Perform InOrderTraversal up to 12"),P2=t("br",null,null,-1),I2=d(),L2=t("span",{style:{"font-size":"12px"}},"(starting from 5)",-1),R2=t("br",null,null,-1),H2=t("br",null,null,-1),j2=t("img",{src:D2,style:{height:"200px"}},null,-1),z2=[M2,P2,I2,L2,R2,H2,j2],V2={__name:"46",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[S2,T2,C(o,null,{default:A(()=>[t("div",O2,[N2,t("div",F2,[Ee((_(),O("div",null,z2)),[[l,1]])])])]),_:1})]),_:1},16)}}},U2=t("span",{style:{"font-weight":"700","font-size":"30px"}},"6. Complexity",-1),q2={__name:"47",setup(e){const n={layout:"intro"};return F(L),(s,r)=>{const o=re("center");return _(),H(Hn,X(Q(n)),{default:A(()=>[C(o,null,{default:A(()=>[U2]),_:1})]),_:1},16)}}};var W2="/courses/data-structure/binary-search-trees/chap8/complexity-best.png",K2="/courses/data-structure/binary-search-trees/chap8/complexity-worst.png";const Y2=t("h1",null,"Complexity",-1),G2=t("p",null,[d("Most of operations are of "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"h"),t("mo",{stretchy:"false"},")")]),t("annotation",{encoding:"application/x-tex"},"O(h)")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),t("span",{class:"mopen"},"("),t("span",{class:"mord mathnormal"},"h"),t("span",{class:"mclose"},")")])])]),d(" complexity with "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"h")]),t("annotation",{encoding:"application/x-tex"},"h")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6944em"}}),t("span",{class:"mord mathnormal"},"h")])])]),d(" being the height of the tree")],-1),Z2=t("div",{class:"row"},[t("div",{class:"column"},[d(" Best case: Balanced BST "),t("img",{src:W2,style:{height:"200px"}}),t("p",null,[d("Height: "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"h"),t("mo",null,"="),t("msub",null,[t("mrow",null,[t("mi",null,"log"),t("mo",null,"\u2061")]),t("mn",null,"2")]),t("mo",{stretchy:"false"},"("),t("mi",null,"n"),t("mo",null,"+"),t("mn",null,"1"),t("mo",{stretchy:"false"},")")]),t("annotation",{encoding:"application/x-tex"},"h=\\log_2(n+1)")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6944em"}}),t("span",{class:"mord mathnormal"},"h"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mop"},[t("span",{class:"mop"},[d("lo"),t("span",{style:{"margin-right":"0.01389em"}},"g")]),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.207em"}},[t("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"\u200B")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.2441em"}},[t("span")])])])])]),t("span",{class:"mopen"},"("),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),t("span",{class:"mbin"},"+"),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord"},"1"),t("span",{class:"mclose"},")")])])])])]),t("div",{class:"column"},[d(" Worst case: Unbalanced BST "),t("img",{src:K2,style:{height:"200px"}}),t("p",null,[d("Height: "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"h"),t("mo",null,"="),t("mi",null,"n")]),t("annotation",{encoding:"application/x-tex"},"h=n")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6944em"}}),t("span",{class:"mord mathnormal"},"h"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.4306em"}}),t("span",{class:"mord mathnormal"},"n")])])])])])],-1),Q2=t("p",null,"On average, BSTs are in-between balanced and unbalanced BSTs. So the average complexity is",-1),X2=t("p",null,[t("span",{class:"katex-display"},[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("semantics",null,[t("mrow",null,[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mrow",null,[t("mi",null,"log"),t("mo",null,"\u2061")]),t("mn",null,"2")]),t("mo",{stretchy:"false"},"("),t("mi",null,"n"),t("mo",{stretchy:"false"},")"),t("mo",{stretchy:"false"},")"),t("mo",null,"\u2264"),t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"h"),t("mo",{stretchy:"false"},")"),t("mo",null,"\u2264"),t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"n"),t("mo",{stretchy:"false"},")")]),t("annotation",{encoding:"application/x-tex"},"O(\\log_2(n)) \\leq O(h) \\leq O(n) ")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),t("span",{class:"mopen"},"("),t("span",{class:"mop"},[t("span",{class:"mop"},[d("lo"),t("span",{style:{"margin-right":"0.01389em"}},"g")]),t("span",{class:"msupsub"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.207em"}},[t("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[t("span",{class:"pstrut",style:{height:"2.7em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{class:"vlist-s"},"\u200B")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.2441em"}},[t("span")])])])])]),t("span",{class:"mopen"},"("),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mclose"},"))"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"\u2264"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),t("span",{class:"mopen"},"("),t("span",{class:"mord mathnormal"},"h"),t("span",{class:"mclose"},")"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"\u2264"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),t("span",{class:"mopen"},"("),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mclose"},")")])])])])],-1),J2=[Q2,X2],ek={__name:"48",setup(e){const n={};return F(L),(s,r)=>{const o=re("center"),l=Ke("click");return _(),H(se,X(Q(n)),{default:A(()=>[Y2,G2,Ee((_(),O("div",null,[C(o,null,{default:A(()=>[Z2]),_:1})])),[[l,1]]),Ee((_(),O("div",null,J2)),[[l,2]])]),_:1},16)}}};var tk="/courses/data-structure/binary-search-trees/chap8/complexity.png";const nk=t("h1",null,"Complexity",-1),sk=t("img",{src:tk},null,-1),rk={__name:"49",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[nk,C(o,null,{default:A(()=>[sk]),_:1})]),_:1},16)}}},ok=t("span",{style:{"font-weight":"700","font-size":"30px"}},"7. Conclusion",-1),lk={__name:"50",setup(e){const n={layout:"intro"};return F(L),(s,r)=>{const o=re("center");return _(),H(Hn,X(Q(n)),{default:A(()=>[C(o,null,{default:A(()=>[ok]),_:1})]),_:1},16)}}},ak=t("h1",null,"Advantages of BSTs",-1),ik=t("br",null,null,-1),ck=t("b",null,"1. Searching is very efficient",-1),uk=t("br",null,null,-1),pk=t("span",{style:{"font-size":"14px"}},"since all the nodes are in a very specific order",-1),dk=t("p",null,[t("br"),t("br"),t("b",null,"2. More efficient than working with arrays/linked lists"),t("br"),t("span",{style:{"font-size":"13px"}},[d("For instance, when searching, at each step one subtree is dismissed, thereby drastically reducing the search space."),t("br"),d(" While in arrays/linked lists we need to sequentially compare all the items")])],-1),fk={__name:"51",setup(e){const n={};return F(L),(s,r)=>(_(),H(se,X(Q(n)),{default:A(()=>[ak,ik,ck,uk,pk,dk]),_:1},16))}};var hk="/courses/data-structure/binary-search-trees/chap8/example-expression.png",mk="/courses/data-structure/binary-search-trees/chap8/Binary_space_partition.png";const yk=t("h1",null,"Applications of BSTs",-1),gk=t("ul",null,[t("li",null,[d("BST is used to implement "),t("strong",null,"multilevel indexing"),d(" in database applications")]),t("li",null,[d("BST is also used to implement constructs like a "),t("strong",null,"dictionary")]),t("li",null,[d("BST can be used to implement various efficient "),t("strong",null,"searching algorithms")]),t("li",null,[d("BST is also used in applications that require a "),t("strong",null,"sorted list"),d(" as input like the online stores")]),t("li",null,[d("BSTs are also used to "),t("strong",null,"evaluate expressions"),d(" using expression trees")])],-1),_k=t("br",null,null,-1),vk=t("div",{class:"row"},[t("div",{class:"three-column"},[t("img",{src:ua,style:{height:"150px"}})]),t("div",{class:"three-column"},[t("img",{src:hk,style:{height:"150px"}})]),t("div",{class:"three-column"},[t("img",{src:mk,style:{height:"150px"}})])],-1),bk=t("br",null,null,-1),wk=d("BSTs are used in many search applications where data is constantly entering/leaving, such as the map and set objects in many languages' libraries"),xk={__name:"52",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[yk,gk,C(o,null,{default:A(()=>[_k,vk]),_:1}),bk,C(o,null,{default:A(()=>[wk]),_:1})]),_:1},16)}}};var Ak="/courses/data-structure/binary-search-trees/chap8/btree.png",Bk="/courses/data-structure/binary-search-trees/chap8/redblack-tree.png";const kk=t("h1",null,"To Go Further",-1),$k=t("br",null,null,-1),Ck=t("div",{class:"row"},[t("div",{class:"column"},[t("b",null,"Adelson-Velsky and Landis Tree (AVL Tree)"),t("br"),t("span",{style:{"font-size":"13px"}},"first self-balancing BST"),t("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/AVL_Tree_Example.gif/220px-AVL_Tree_Example.gif"})]),t("div",{class:"column"},[t("b",null,"B-Tree"),t("br"),t("span",{style:{"font-size":"13px"}},"generalization of BST > 2 nodes + self-balancing"),t("br"),t("br"),t("img",{src:Ak,style:{height:"90px"}})])],-1),Ek=t("br",null,null,-1),Dk=t("b",null,"Red/Black tree",-1),Sk=t("br",null,null,-1),Tk=t("span",{style:{"font-size":"13px"}},"extra bit (color)",-1),Ok=t("img",{src:Bk,style:{height:"120px"}},null,-1),Nk={__name:"53",setup(e){const n={};return F(L),(s,r)=>{const o=re("center");return _(),H(se,X(Q(n)),{default:A(()=>[kk,$k,C(o,null,{default:A(()=>[Ck]),_:1}),Ek,C(o,null,{default:A(()=>[Dk,Sk,Tk,Ok]),_:1})]),_:1},16)}}},Fk=t("h1",null,"To Go Further",-1),Mk=t("p",null,[d("Why not mixing trees and hash functions? "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u27F6")]),t("annotation",{encoding:"application/x-tex"},"\\longrightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.522em","vertical-align":"-0.011em"}}),t("span",{class:"mrel"},"\u27F6")])])]),d(),t("strong",null,"hash trees"),d("!"),t("br"),t("span",{style:{"font-size":"13px"}},"used in p2p programs and specialized image-signatures in which a hash needs to be verified, but the whole file is not available.")],-1),Pk=t("p",null,[d("Why not mixing trees and queues? "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u27F6")]),t("annotation",{encoding:"application/x-tex"},"\\longrightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.522em","vertical-align":"-0.011em"}}),t("span",{class:"mrel"},"\u27F6")])])]),d(),t("strong",null,"heap"),d("!"),t("br"),t("span",{style:{"font-size":"13px"}},"Used in implementing efficient priority-queues, which in turn are used for scheduling processes in many operating systems, Quality-of-Service in routers, and A* (path-finding algorithm used in AI applications, including robotics and video games).")],-1),Ik=t("p",null,[d("Why not mixing trees and information theory? "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"\u27F6")]),t("annotation",{encoding:"application/x-tex"},"\\longrightarrow")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.522em","vertical-align":"-0.011em"}}),t("span",{class:"mrel"},"\u27F6")])])]),d(),t("strong",null,"Huffman and Hu-Tucker coding"),d("!"),t("br"),t("span",{style:{"font-size":"13px"}},"Used in compression algorithms, such as those used by the .jpeg and .mp3 file-formats.GGM Trees - Used in cryptographic applications to generate a tree of pseudo-random numbers. ")],-1),Lk={__name:"54",setup(e){const n={};return F(L),(s,r)=>(_(),H(se,X(Q(n)),{default:A(()=>[Fk,Mk,Pk,Ik]),_:1},16))}},Rk=t("h1",null,"To Go Further",-1),Hk=t("p",null,[d("You can also take a look at the followings ("),t("em",null,"binary"),d(") ("),t("em",null,"search"),d(") trees "),t("br"),t("br")],-1),jk=t("p",null,[t("strong",null,"Binary Space Partition:"),d(" Used in almost every 3D video game to determine what objects need to be rendered.")],-1),zk=t("p",null,[t("strong",null,"Binary Tries:"),d(" Used in almost every high-bandwidth router for storing router-tables.")],-1),Vk=t("p",null,[t("strong",null,"Syntax Tree:"),d(" Constructed by compilers and (implicitly) calculators to parse expressions.")],-1),Uk=t("p",null,[t("strong",null,"Treap:"),d(" Randomized data structure used in wireless networking and memory allocation.")],-1),qk=t("p",null,[t("strong",null,"T-tree:"),d(" Though most databases use some form of B-tree to store data on the drive, databases which keep all (most) their data in memory often use T-trees to do so.")],-1),Wk={__name:"55",setup(e){const n={};return F(L),(s,r)=>(_(),H(se,X(Q(n)),{default:A(()=>[Rk,Hk,jk,zk,Vk,Uk,qk]),_:1},16))}},Kk=t("h1",null,"Exercice yourself!",-1),Yk=t("ul",null,[t("li",null,"How would you code your tree with a generic Key type instead of a integer?")],-1),Gk=t("pre",{class:"shiki-container"},[t("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#4D9375"}},"typedef"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#CB7676"}},"struct"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#858585"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	Key"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," key"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," left"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#DBD7CA"}},"	Node"),t("span",{style:{color:"#CB7676"}},"*"),t("span",{style:{color:"#DBD7CA"}}," right"),t("span",{style:{color:"#858585"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#858585"}},"}"),t("span",{style:{color:"#DBD7CA"}}," "),t("span",{style:{color:"#A1B567"}},"Node"),t("span",{style:{color:"#858585"}},";")])])]),t("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#1C6B48"}},"typedef"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#AB5959"}},"struct"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#8E8F8B"}},"{")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	Key"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," key"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," left"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#393A34"}},"	Node"),t("span",{style:{color:"#AB5959"}},"*"),t("span",{style:{color:"#393A34"}}," right"),t("span",{style:{color:"#8E8F8B"}},";")]),d(`
`),t("span",{class:"line"},[t("span",{style:{color:"#8E8F8B"}},"}"),t("span",{style:{color:"#393A34"}}," "),t("span",{style:{color:"#6C7834"}},"Node"),t("span",{style:{color:"#8E8F8B"}},";")])])])],-1),Zk=t("ul",null,[t("li",null,"How can you handle duplicate keys?")],-1),Qk={__name:"56",setup(e){const n={};return F(L),(s,r)=>{const o=en;return _(),H(se,X(Q(n)),{default:A(()=>[Kk,Yk,C(o,Re({},{ranges:[""]}),{default:A(()=>[Gk]),_:1},16),Zk]),_:1},16)}}};var Xk=[{path:"1",name:"page-1",component:H0,meta:{theme:"./slidev-theme-academic-1.1.1",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap8/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},title:"Binary Search Trees",coverDate:null,slide:{raw:`---
theme: ./slidev-theme-academic-1.1.1
layout: cover
coverAuthor: Jordan Frecon-Deloire
coverBackgroundUrl: chap8/cover.png
highlighter: shiki
lineNumbers: false
class: 'text-white'
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled: [1]
title: Binary Search Trees
coverDate:
---


# Data Structures in C/C++
## Chapter 8: Binary Search Trees
<img src="/front/logo.png" class="image-bottom" style="height:70px;width:auto"/>
`,title:"Binary Search Trees",level:1,content:`# Data Structures in C/C++
## Chapter 8: Binary Search Trees
<img src="/front/logo.png" class="image-bottom" style="height:70px;width:auto"/>`,frontmatter:{theme:"./slidev-theme-academic-1.1.1",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap8/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},title:"Binary Search Trees",coverDate:null},index:0,start:0,end:21,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:U0,meta:{slide:{raw:`
# Table of contents

1. Introduction
2. Trees
3. Binary Trees
4. Binary Search Trees
5. Operations on Binary Search Trees
	- Creation
	- Search
	- Deletion
	- Queries
6. Complexity
7. Conclusion
`,title:"Table of contents",level:1,content:`# Table of contents

1. Introduction
2. Trees
3. Binary Trees
4. Binary Search Trees
5. Operations on Binary Search Trees
	- Creation
	- Search
	- Deletion
	- Queries
6. Complexity
7. Conclusion`,frontmatter:{},index:1,start:22,end:37,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Y0,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

<center>
<span style="font-weight:700;font-size:30px">1. Introduction</span>
</center>

`,content:`<center>
<span style="font-weight:700;font-size:30px">1. Introduction</span>
</center>`,frontmatter:{layout:"intro"},index:2,start:37,end:46,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:tb,meta:{slide:{raw:`
# So Many Trees


<center>
<img src="/chap8/trees.png">
</center><br>

Today, we will focus on a subclass of trees called **Binary Search Trees**

As their name suggests, they are useful for searching!
`,title:"So Many Trees",level:1,content:`# So Many Trees


<center>
<img src="/chap8/trees.png">
</center><br>

Today, we will focus on a subclass of trees called **Binary Search Trees**

As their name suggests, they are useful for searching!`,frontmatter:{},index:3,start:47,end:59,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:ib,meta:{slide:{raw:`
# Examples of Application

<center>
<img src="/chap8/example-book.png">
</center>

Imagine you would like to search the age of your favorite fictional character in a huge dataset

<div v-click="1">Instead of

- Going through all the database until you find your character's name
- or keeping your database sorted by character's name

<center>

Implement a <b>Binary Search Tree!</b>
</center></div>
`,title:"Examples of Application",level:1,content:`# Examples of Application

<center>
<img src="/chap8/example-book.png">
</center>

Imagine you would like to search the age of your favorite fictional character in a huge dataset

<div v-click="1">Instead of

- Going through all the database until you find your character's name
- or keeping your database sorted by character's name

<center>

Implement a <b>Binary Search Tree!</b>
</center></div>`,frontmatter:{},index:4,start:60,end:79,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:mb,meta:{slide:{raw:`
# Examples of Application

Almost every 3D engine uses **binary search trees** (BST) to determine which objects should be rendered in a 3D world<br>
$\\rightarrow$ close connection with **binary space partitioning**

<div v-click="1">
<center><br>

<img src="/chap8/doom.png" style="height:250px">

It's famously used in Doom 1993 as the first time a BST had even been used in a game

</center></div>
`,title:"Examples of Application",level:1,content:`# Examples of Application

Almost every 3D engine uses **binary search trees** (BST) to determine which objects should be rendered in a 3D world<br>
$\\rightarrow$ close connection with **binary space partitioning**

<div v-click="1">
<center><br>

<img src="/chap8/doom.png" style="height:250px">

It's famously used in Doom 1993 as the first time a BST had even been used in a game

</center></div>`,frontmatter:{},index:5,start:80,end:95,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Tb,meta:{slide:{raw:`
# Examples of Application

Some other real world examples include many search engines

<div v-click="1">
<br><br>
<div class="row">
<div class="column">
<center><img src="/chap8/facebook-logo.png" style="height:50px"></center>

Facebook is able to search through billions of users\u2019 data so quickly
</div>
<div class="column">
<center><img src="/chap8/google-logo.png" style="height:50px"></center>

Google search engines are able to populate suggestions as soon as you start typing
	
</div>
</div>
<br>

Once again, they rely on **binary search trees**
</div>
	`,title:"Examples of Application",level:1,content:`# Examples of Application

Some other real world examples include many search engines

<div v-click="1">
<br><br>
<div class="row">
<div class="column">
<center><img src="/chap8/facebook-logo.png" style="height:50px"></center>

Facebook is able to search through billions of users\u2019 data so quickly
</div>
<div class="column">
<center><img src="/chap8/google-logo.png" style="height:50px"></center>

Google search engines are able to populate suggestions as soon as you start typing
	
</div>
</div>
<br>

Once again, they rely on **binary search trees**
</div>`,frontmatter:{},index:6,start:96,end:121,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Nb,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

<center>
<span style="font-weight:700;font-size:30px">2. Trees</span>
</center>
`,content:`<center>
<span style="font-weight:700;font-size:30px">2. Trees</span>
</center>`,frontmatter:{layout:"intro"},index:7,start:121,end:129,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Lb,meta:{slide:{raw:`
# Terminology on Trees

<br>
<div class="row">
<div class="column">
<br>
<img src="/chap8/tree-annoted.png" style="height:250px">
</div>
<div class="column" style="font-size:13px">

- A is the **root**
- C is the **parent** of E
- D, E, F are **leaves**
- E and F are **siblings**
	
The **depth of a node** is the number of edges from the root (e.g. the depth of C is 1)
	
The **height of a node** is the number of edges from the deepest leaf (e.g. the height of B is 1)
	
The **height of the tree** is height of the root (e.g. here it is 2)
	
</div>
</div>


`,title:"Terminology on Trees",level:1,content:`# Terminology on Trees

<br>
<div class="row">
<div class="column">
<br>
<img src="/chap8/tree-annoted.png" style="height:250px">
</div>
<div class="column" style="font-size:13px">

- A is the **root**
- C is the **parent** of E
- D, E, F are **leaves**
- E and F are **siblings**
	
The **depth of a node** is the number of edges from the root (e.g. the depth of C is 1)
	
The **height of a node** is the number of edges from the deepest leaf (e.g. the height of B is 1)
	
The **height of the tree** is height of the root (e.g. here it is 2)
	
</div>
</div>`,frontmatter:{},index:8,start:130,end:157,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Wb,meta:{slide:{raw:`
# Trees

<center><br><br><br>
<div class="row">
<div class="column">
<img src="/chap8/constraints.png" style="height:230px">
</div>
<div class="column">
<img src="/chap8/tree-v2.png" style="height:230px">
</div>
</div>
</center>

`,title:"Trees",level:1,content:`# Trees

<center><br><br><br>
<div class="row">
<div class="column">
<img src="/chap8/constraints.png" style="height:230px">
</div>
<div class="column">
<img src="/chap8/tree-v2.png" style="height:230px">
</div>
</div>
</center>`,frontmatter:{},index:9,start:158,end:173,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Yb,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

<center>
<span style="font-weight:700;font-size:30px">3. Binary Trees</span>
</center>
`,content:`<center>
<span style="font-weight:700;font-size:30px">3. Binary Trees</span>
</center>`,frontmatter:{layout:"intro"},index:10,start:173,end:181,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Xb,meta:{slide:{raw:`
# Binary Trees: Definition

<div class="box-top-left">
<span class="box-title">Binary Tree</span>
	
A binary tree is a tree where each node has a **data element**<br> and can have **at most 2 children** called
- **left** child
- **right** child
</div>

<center>
<img src="/chap8/tree.png">
</center>
`,title:"Binary Trees: Definition",level:1,content:`# Binary Trees: Definition

<div class="box-top-left">
<span class="box-title">Binary Tree</span>
	
A binary tree is a tree where each node has a **data element**<br> and can have **at most 2 children** called
- **left** child
- **right** child
</div>

<center>
<img src="/chap8/tree.png">
</center>`,frontmatter:{},index:11,start:182,end:197,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:u8,meta:{slide:{raw:`
# Binary Trees:  Indexing or Indirect Addressing?

<center>
	
*How would you store a binary tree?<br>
Can you illustrate your idea?*
</center><br><br>

<center>
<div class="row">
<div class="column">
<img src="/chap8/tree.png">
</div>
<div class="column">
<div v-click="1">
<img src="/chap8/tree-linkedlist.png">
We are going to use a linked list

</div>
</div>
</div>
</center>
`,title:"Binary Trees:  Indexing or Indirect Addressing?",level:1,content:`# Binary Trees:  Indexing or Indirect Addressing?

<center>
	
*How would you store a binary tree?<br>
Can you illustrate your idea?*
</center><br><br>

<center>
<div class="row">
<div class="column">
<img src="/chap8/tree.png">
</div>
<div class="column">
<div v-click="1">
<img src="/chap8/tree-linkedlist.png">
We are going to use a linked list

</div>
</div>
</div>
</center>`,frontmatter:{},index:12,start:198,end:222,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:y8,meta:{slide:{raw:`
# Binary Trees: C/C++ Implementation

<center>
	
*Here is the full picture<br>
How would you code that structure?*

<img src="/chap8/tree-linkedlist-full.png" style="height:280px">
</center>

**Reminder:** The size is the number of nodes. The depth of a tree is the largest depth of the leaves
`,title:"Binary Trees: C/C++ Implementation",level:1,content:`# Binary Trees: C/C++ Implementation

<center>
	
*Here is the full picture<br>
How would you code that structure?*

<img src="/chap8/tree-linkedlist-full.png" style="height:280px">
</center>

**Reminder:** The size is the number of nodes. The depth of a tree is the largest depth of the leaves`,frontmatter:{},index:13,start:223,end:236,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:u3,meta:{slide:{raw:`
# Binary Trees: C/C++ Implementation

Here is an implementation proposal<br><br>

<div class="row">
<div class="column">
<center>
<img src="/chap8/linkedlist-elements-tree.png">
</center>
</div>
<div class="column">
\`\`\`cpp
typedef struct BinaryTree {
	int size;
	int depth;
	Node* root;
} BinaryTree;
\`\`\`
</div>
</div>

<div class="row">
<div class="column">
<center>
<img src="/chap8/linkedlist-elements-node.png">
</center>
</div>
<div class="column">
\`\`\`cpp
typedef struct Node {
	int value;
	Node* left;
	Node* right;
} Node;
\`\`\`
</div>
</div>
<br><br>

Everything you have learned about linked lists, dynamic allocation and pointers<br> will be of upmost importance!
`,title:"Binary Trees: C/C++ Implementation",level:1,content:`# Binary Trees: C/C++ Implementation

Here is an implementation proposal<br><br>

<div class="row">
<div class="column">
<center>
<img src="/chap8/linkedlist-elements-tree.png">
</center>
</div>
<div class="column">
\`\`\`cpp
typedef struct BinaryTree {
	int size;
	int depth;
	Node* root;
} BinaryTree;
\`\`\`
</div>
</div>

<div class="row">
<div class="column">
<center>
<img src="/chap8/linkedlist-elements-node.png">
</center>
</div>
<div class="column">
\`\`\`cpp
typedef struct Node {
	int value;
	Node* left;
	Node* right;
} Node;
\`\`\`
</div>
</div>
<br><br>

Everything you have learned about linked lists, dynamic allocation and pointers<br> will be of upmost importance!`,frontmatter:{},index:14,start:237,end:279,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:S3,meta:{slide:{raw:`
# Binary Trees: Traversals

<div class="row">
<div class="column">

**Depth-first traversal**
<div style="font-size:14px">

- PreOrder: parent $\\rightarrow$ left child $\\rightarrow$ right child
- InOrder : left child $\\rightarrow$ parent $\\rightarrow$ right child
- PostOrder : left child $\\rightarrow$ right child $\\rightarrow$ parent
</div></div>
<div class="column">

**Breadth-first traversal**
<div style="font-size:14px">

- LevelOrder: top $\\rightarrow$ bottom<br>(usually left to right)
</div></div>
</div>

<br><br>
<div class="row">
<div class="column">
<center><img src="/chap8/tree.png" style="height:180px"></center>
</div>
<div class="column">

- PreOrder traversal: <span v-click="1">A, B, D, C, E, F</span> 
- InOrder traversal: <span v-click="2">D, B, A, E, C, F</span> 
- PostOrder traversal: <span v-click="3">D, B, E, F, C, A</span>
- LevelOrder traversal: <span v-click="4">A, B, C, D, E, F</span>
</div>
</div>


`,title:"Binary Trees: Traversals",level:1,content:`# Binary Trees: Traversals

<div class="row">
<div class="column">

**Depth-first traversal**
<div style="font-size:14px">

- PreOrder: parent $\\rightarrow$ left child $\\rightarrow$ right child
- InOrder : left child $\\rightarrow$ parent $\\rightarrow$ right child
- PostOrder : left child $\\rightarrow$ right child $\\rightarrow$ parent
</div></div>
<div class="column">

**Breadth-first traversal**
<div style="font-size:14px">

- LevelOrder: top $\\rightarrow$ bottom<br>(usually left to right)
</div></div>
</div>

<br><br>
<div class="row">
<div class="column">
<center><img src="/chap8/tree.png" style="height:180px"></center>
</div>
<div class="column">

- PreOrder traversal: <span v-click="1">A, B, D, C, E, F</span> 
- InOrder traversal: <span v-click="2">D, B, A, E, C, F</span> 
- PostOrder traversal: <span v-click="3">D, B, E, F, C, A</span>
- LevelOrder traversal: <span v-click="4">A, B, C, D, E, F</span>
</div>
</div>`,frontmatter:{},index:15,start:280,end:318,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:O3,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

<center>
<span style="font-weight:700;font-size:30px">4. Binary Search Trees</span>
</center>


`,content:`<center>
<span style="font-weight:700;font-size:30px">4. Binary Search Trees</span>
</center>`,frontmatter:{layout:"intro"},index:16,start:318,end:328,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:P3,meta:{slide:{raw:`
# Binary Search Trees (BST)

<div class="box-top-left">

<span class="box-title">Binary Search Tree</span>
<div style="font-size:13px">

A **Binary search tree** is a Binary Tree...
- where the value stored in a node is called a **key**
- with additional constraints :
	- For any node u, any key in its **left subtree** are **lesser** than the key of u
	- For any node u, any key in its **right subtree** are **greater** than the key of u
	- Usually, we consider that duplicate keys are not allowed
</div></div>

<center>
<img src="/chap8/bst.png">
</center>
`,title:"Binary Search Trees (BST)",level:1,content:`# Binary Search Trees (BST)

<div class="box-top-left">

<span class="box-title">Binary Search Tree</span>
<div style="font-size:13px">

A **Binary search tree** is a Binary Tree...
- where the value stored in a node is called a **key**
- with additional constraints :
	- For any node u, any key in its **left subtree** are **lesser** than the key of u
	- For any node u, any key in its **right subtree** are **greater** than the key of u
	- Usually, we consider that duplicate keys are not allowed
</div></div>

<center>
<img src="/chap8/bst.png">
</center>`,frontmatter:{},index:17,start:329,end:349,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:W3,meta:{slide:{raw:`
# Binary Search Trees (BST)

<center>
<img src="/chap8/bst.png">
</center>

<div class="row">
<div class="column">
<center>
<img src="/chap8/bst-1.png">
</center>
</div>
<div class="column">
<center>
<img src="/chap8/bst-2.png">
</center>
</div>
</div>
`,title:"Binary Search Trees (BST)",level:1,content:`# Binary Search Trees (BST)

<center>
<img src="/chap8/bst.png">
</center>

<div class="row">
<div class="column">
<center>
<img src="/chap8/bst-1.png">
</center>
</div>
<div class="column">
<center>
<img src="/chap8/bst-2.png">
</center>
</div>
</div>`,frontmatter:{},index:18,start:350,end:370,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:fw,meta:{slide:{raw:`
# Binary Search Trees (BST)

We owe the binary search trees, developped in 1960, to...

<br>
<center>
<div class="row">
<div class="column">
<img src="/chap8/conway.jpg" style="height:180px"><br>
<b>Conway Berners-Lee</b>
<div v-click="1">	

Developped the world's first commercially available general-purpose digital computer
	
Father of Sir Tim Berners-Lee
</div>
</div>	
<div class="column">
<img src="/chap8/wheeler.jpg" style="height:180px"><br>
<b>David Wheeler</b>
<div v-click="2">	

First PhD in Computer Science!
	
Contributed to the assembly language programming
</div>
</div>	
</div>
</center>	


`,title:"Binary Search Trees (BST)",level:1,content:`# Binary Search Trees (BST)

We owe the binary search trees, developped in 1960, to...

<br>
<center>
<div class="row">
<div class="column">
<img src="/chap8/conway.jpg" style="height:180px"><br>
<b>Conway Berners-Lee</b>
<div v-click="1">	

Developped the world's first commercially available general-purpose digital computer
	
Father of Sir Tim Berners-Lee
</div>
</div>	
<div class="column">
<img src="/chap8/wheeler.jpg" style="height:180px"><br>
<b>David Wheeler</b>
<div v-click="2">	

First PhD in Computer Science!
	
Contributed to the assembly language programming
</div>
</div>	
</div>
</center>`,frontmatter:{},index:19,start:371,end:404,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Aw,meta:{slide:{raw:`
# Complete BST

<div class="box-top-left">
	
<span class="box-title">Complete BST</span>
<center>
	
A binary search tree is said to be **complete** when all links are used<br>
<span style="font-size:13px">(except maybe the last level (leaves) which are filled left to right)</span>
</center>
</div>

<br>
<center>
<img src="/chap8/bst-complete.png">
</center>

<div class="box">
<center>Given n, there is only one shape for a complete BST with n nodes</center>
</div>
`,title:"Complete BST",level:1,content:`# Complete BST

<div class="box-top-left">
	
<span class="box-title">Complete BST</span>
<center>
	
A binary search tree is said to be **complete** when all links are used<br>
<span style="font-size:13px">(except maybe the last level (leaves) which are filled left to right)</span>
</center>
</div>

<br>
<center>
<img src="/chap8/bst-complete.png">
</center>

<div class="box">
<center>Given n, there is only one shape for a complete BST with n nodes</center>
</div>`,frontmatter:{},index:20,start:405,end:427,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Tw,meta:{slide:{raw:`
# Quiz

<center>

*What type of tree is it?*
	
<img src="/chap8/quiz-not-bst-1.png">
	
<div v-click="1">
It is a binary tree and not a binary search tree because...

2 (right subtree) > 3 (left subtree)
</div>
</center>
`,title:"Quiz",level:1,content:`# Quiz

<center>

*What type of tree is it?*
	
<img src="/chap8/quiz-not-bst-1.png">
	
<div v-click="1">
It is a binary tree and not a binary search tree because...

2 (right subtree) > 3 (left subtree)
</div>
</center>`,frontmatter:{},index:21,start:428,end:444,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Lw,meta:{slide:{raw:`
# Quiz

<center>

*What type of tree is it?*
	
<img src="/chap8/quiz-bst-1.png">
	
<div v-click="1">
It is a binary search tree!
</div>
</center>
`,title:"Quiz",level:1,content:`# Quiz

<center>

*What type of tree is it?*
	
<img src="/chap8/quiz-bst-1.png">
	
<div v-click="1">
It is a binary search tree!
</div>
</center>`,frontmatter:{},index:22,start:445,end:459,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Ww,meta:{slide:{raw:`
# Quiz

<center>

*What type of tree is it?*
	
<img src="/chap8/quiz-bst-2.png">
	
<br>
<div v-click="1">
It is a complete binary search tree!
</div>
</center>
`,title:"Quiz",level:1,content:`# Quiz

<center>

*What type of tree is it?*
	
<img src="/chap8/quiz-bst-2.png">
	
<br>
<div v-click="1">
It is a complete binary search tree!
</div>
</center>`,frontmatter:{},index:23,start:460,end:475,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:ex,meta:{slide:{raw:`
# Quiz

<center>

*What type of tree is it?*
	
<img src="/chap8/quiz-not-bst-2.png">
	
<div v-click="1">
It is simply a tree and not a binary tree because...

one node as more than 2 children
</div>
</center>
`,title:"Quiz",level:1,content:`# Quiz

<center>

*What type of tree is it?*
	
<img src="/chap8/quiz-not-bst-2.png">
	
<div v-click="1">
It is simply a tree and not a binary tree because...

one node as more than 2 children
</div>
</center>`,frontmatter:{},index:24,start:476,end:492,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:ax,meta:{slide:{raw:`
# Quiz

<center>

*What type of tree is it?*
	
<img src="/chap8/example-book-bst.png">
	
<div v-click="1">
It is a binary search tree!

The key is the name<br>
Names are compared by alphabetical order
</div>
</center>
`,title:"Quiz",level:1,content:`# Quiz

<center>

*What type of tree is it?*
	
<img src="/chap8/example-book-bst.png">
	
<div v-click="1">
It is a binary search tree!

The key is the name<br>
Names are compared by alphabetical order
</div>
</center>`,frontmatter:{},index:25,start:493,end:510,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:dx,meta:{slide:{raw:`
# Further comments

<br><br>
<div class="row">
<div class="column">
<img src="/chap8/example-book-bst.png">
</div>
<div class="column">
<img src="/chap8/example-book.png">
</div>
</div>

This peculiar tree is useful to **alphabetically search a name in an unsorted array**. The number associated to each name is actually the index of the item in the database


`,title:"Further comments",level:1,content:`# Further comments

<br><br>
<div class="row">
<div class="column">
<img src="/chap8/example-book-bst.png">
</div>
<div class="column">
<img src="/chap8/example-book.png">
</div>
</div>

This peculiar tree is useful to **alphabetically search a name in an unsorted array**. The number associated to each name is actually the index of the item in the database`,frontmatter:{},index:26,start:511,end:528,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Ex,meta:{slide:{raw:`
# BST and Keyset

The same **keyset** {1,2,4,5,8,9} can have different valid BSTs<br>
However, there can be only one *complete* BST!

<div class="row">
<div class="three-column">
<img src="/chap8/bst-samekeyset.png">
</div>
<div class="three-column">
<img src="/chap8/bst-samekeyset-1.png">
</div>
<div class="three-column">
<img src="/chap8/bst-samekeyset-2.png">
</div>
</div>

<br>
<div v-click="1">
<b>Question:</b> Which traversal gives the <b>sorted keyset</b> {1,2,4,5,8,9} on all valid BSTS ?
</div><br>
<div v-click="2">
<b>Answer:</b> InOrder Depth-first traversal (left, parent, right)
</div>

`,title:"BST and Keyset",level:1,content:`# BST and Keyset

The same **keyset** {1,2,4,5,8,9} can have different valid BSTs<br>
However, there can be only one *complete* BST!

<div class="row">
<div class="three-column">
<img src="/chap8/bst-samekeyset.png">
</div>
<div class="three-column">
<img src="/chap8/bst-samekeyset-1.png">
</div>
<div class="three-column">
<img src="/chap8/bst-samekeyset-2.png">
</div>
</div>

<br>
<div v-click="1">
<b>Question:</b> Which traversal gives the <b>sorted keyset</b> {1,2,4,5,8,9} on all valid BSTS ?
</div><br>
<div v-click="2">
<b>Answer:</b> InOrder Depth-first traversal (left, parent, right)
</div>`,frontmatter:{},index:27,start:529,end:556,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Lx,meta:{slide:{raw:`
# Checking BSTS

**Question:** How to check if a tree is a binary search tree?

<div v-click="1">

**Answer:** Perform an InOrder traversal and keep the previous value of the node. If the current node is smaller than the previous node then it is not a binary search tree.<br>	
<span style="font-size:12px">(Also check that you have the correct number of children)</span>
</div>

<br><br>
<div v-click="2">
<div class="row">
<div class="column">
<center><img src="/chap8/bst-samekeyset-2.png"></center>
</div>
<div class="column">

- $1$
- $1 < 2$
- $1 < 2 < 4$
- $1 < 2 < 4 < 5$
- $1 < 2 < 4 < 5 < 8$
- $1 < 2 < 4 < 5 < 8 < 9$
</div>
</div>
</div>
`,title:"Checking BSTS",level:1,content:`# Checking BSTS

**Question:** How to check if a tree is a binary search tree?

<div v-click="1">

**Answer:** Perform an InOrder traversal and keep the previous value of the node. If the current node is smaller than the previous node then it is not a binary search tree.<br>	
<span style="font-size:12px">(Also check that you have the correct number of children)</span>
</div>

<br><br>
<div v-click="2">
<div class="row">
<div class="column">
<center><img src="/chap8/bst-samekeyset-2.png"></center>
</div>
<div class="column">

- $1$
- $1 < 2$
- $1 < 2 < 4$
- $1 < 2 < 4 < 5$
- $1 < 2 < 4 < 5 < 8$
- $1 < 2 < 4 < 5 < 8 < 9$
</div>
</div>
</div>`,frontmatter:{},index:28,start:557,end:586,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Hx,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

<center>
<span style="font-weight:700;font-size:30px">5. Operations on Binary Search Trees</span>
</center>
`,content:`<center>
<span style="font-weight:700;font-size:30px">5. Operations on Binary Search Trees</span>
</center>`,frontmatter:{layout:"intro"},index:29,start:586,end:594,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:nA,meta:{slide:{raw:`	
# Creation
	
<div class="row">
<div class="column">
Let us consider
	
\`\`\`cpp
typedef struct Node {
	int key;
	Node* left;
	Node* right;
} Node;
\`\`\`
</div>
<div class="column">
How to define a function creating a new node?
<div v-click="1">	
\`\`\`cpp
Node* BST_createNode(int k){
    Node* myNewNode = new Node; //Creation of new Node
    myNewNode->left = nullptr;
    myNewNode->right = nullptr;
    myNewNode->key = k;
    return myNewNode;
}
\`\`\`
</div>
</div>
</div>
<div v-click="2">

Then, in your main function, you can easily create new nodes as follows
	
<div class="row">
<div class="column">
\`\`\`cpp
int main()
{
    Node* mySweetNewNode = BST_createNode(5);
    cout << (mySweetNewNode->key);
    return 0;
}
\`\`\`
</div>
<div class="column">
\`\`\`sh
C:\\>
5
\`\`\`
</div>
</div>
<center><i>Actually, there is a smarter way!</i></center>
</div>	
`,title:"Creation",level:1,content:`# Creation
	
<div class="row">
<div class="column">
Let us consider
	
\`\`\`cpp
typedef struct Node {
	int key;
	Node* left;
	Node* right;
} Node;
\`\`\`
</div>
<div class="column">
How to define a function creating a new node?
<div v-click="1">	
\`\`\`cpp
Node* BST_createNode(int k){
    Node* myNewNode = new Node; //Creation of new Node
    myNewNode->left = nullptr;
    myNewNode->right = nullptr;
    myNewNode->key = k;
    return myNewNode;
}
\`\`\`
</div>
</div>
</div>
<div v-click="2">

Then, in your main function, you can easily create new nodes as follows
	
<div class="row">
<div class="column">
\`\`\`cpp
int main()
{
    Node* mySweetNewNode = BST_createNode(5);
    cout << (mySweetNewNode->key);
    return 0;
}
\`\`\`
</div>
<div class="column">
\`\`\`sh
C:\\>
5
\`\`\`
</div>
</div>
<center><i>Actually, there is a smarter way!</i></center>
</div>`,frontmatter:{},index:30,start:595,end:650,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:dA,meta:{slide:{raw:`	
# Creation
	
Instead, let us consider
	
\`\`\`cpp
typedef struct Node {
	int key;
	Node* left=nullptr; //Default initialization
	Node* right=nullptr;//Default initialization
	
	//Constructors and member initializer lists (see next semester) 
	Node() {}
\xA0\xA0\xA0\xA0Node(int data): key(data) {}
	
} Node;
\`\`\`
	
Then, in your main function, you can easily create new nodes as follows
	
<div class="row">
<div class="column">
\`\`\`cpp{3}
int main()
{
    Node* mySweetNewNode = Node(5)
    cout << (mySweetNewNode->key);
    return 0;
}
\`\`\`
</div>
<div class="column">
\`\`\`sh
C:\\>
5
\`\`\`
</div>
</div>	
	`,title:"Creation",level:1,content:`# Creation
	
Instead, let us consider
	
\`\`\`cpp
typedef struct Node {
	int key;
	Node* left=nullptr; //Default initialization
	Node* right=nullptr;//Default initialization
	
	//Constructors and member initializer lists (see next semester) 
	Node() {}
\xA0\xA0\xA0\xA0Node(int data): key(data) {}
	
} Node;
\`\`\`
	
Then, in your main function, you can easily create new nodes as follows
	
<div class="row">
<div class="column">
\`\`\`cpp{3}
int main()
{
    Node* mySweetNewNode = Node(5)
    cout << (mySweetNewNode->key);
    return 0;
}
\`\`\`
</div>
<div class="column">
\`\`\`sh
C:\\>
5
\`\`\`
</div>
</div>`,frontmatter:{},index:31,start:651,end:690,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:xA,meta:{slide:{raw:`	
	
	
# Search
	
How to search the node with **key** equals 5 starting from the root?

<center><br><br>
<img src="/chap8/bst-search.png">	
</center>
	
<br>
<center>
How would you code the search function?
\`\`\`cpp
Node* BST_search(int k, Node* v)
\`\`\`
</center>
`,title:"Search",level:1,content:`# Search
	
How to search the node with **key** equals 5 starting from the root?

<center><br><br>
<img src="/chap8/bst-search.png">	
</center>
	
<br>
<center>
How would you code the search function?
\`\`\`cpp
Node* BST_search(int k, Node* v)
\`\`\`
</center>`,frontmatter:{},index:32,start:691,end:710,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:TA,meta:{slide:{raw:`	
# Search
	
<div class="row">
<div class="column">

**Iterative version**
	
\`\`\`cpp
Node* BST_search(int k, Node* v){

   while (v != nullptr and v->key != k) {
    	if (k < v->key)
    	    v = v->left;
        else
            v = v->right;
   }
   return v;
}
\`\`\`
</div>
<div class="column">

**Recursive version**	

\`\`\`cpp
Node* BST_search(int k, Node* v) {
      if (v == nullptr)
            return nullptr;
      else if (k < v->key)
            return BST_search(k, v->left);
      else if (k > v->key)
            return BST_search(k, v->right);
      else if (k == v->key)
            return v;
	  else
			return nullptr;
}
\`\`\`
</div>
</div>

`,title:"Search",level:1,content:`# Search
	
<div class="row">
<div class="column">

**Iterative version**
	
\`\`\`cpp
Node* BST_search(int k, Node* v){

   while (v != nullptr and v->key != k) {
    	if (k < v->key)
    	    v = v->left;
        else
            v = v->right;
   }
   return v;
}
\`\`\`
</div>
<div class="column">

**Recursive version**	

\`\`\`cpp
Node* BST_search(int k, Node* v) {
      if (v == nullptr)
            return nullptr;
      else if (k < v->key)
            return BST_search(k, v->left);
      else if (k > v->key)
            return BST_search(k, v->right);
      else if (k == v->key)
            return v;
	  else
			return nullptr;
}
\`\`\`
</div>
</div>`,frontmatter:{},index:33,start:711,end:754,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:VA,meta:{slide:{raw:`	
# Insertion
	
How to insert the node with **key** equals 6 starting from the root?

<center><br><br>
<img src="/chap8/bst-insert.png" style="height:200px">	
</center>
	
<br>
<center>
How would you code the insert function?
\`\`\`cpp
Node* BST_insert(int k, Node* v)
\`\`\`
</center>
<br>

**Remark:** When you insert a node in a BST, it automatically becomes a leaf!	
	`,title:"Insertion",level:1,content:`# Insertion
	
How to insert the node with **key** equals 6 starting from the root?

<center><br><br>
<img src="/chap8/bst-insert.png" style="height:200px">	
</center>
	
<br>
<center>
How would you code the insert function?
\`\`\`cpp
Node* BST_insert(int k, Node* v)
\`\`\`
</center>
<br>

**Remark:** When you insert a node in a BST, it automatically becomes a leaf!`,frontmatter:{},index:34,start:755,end:775,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:KA,meta:{slide:{raw:`	
# Insertion
	
Here is a proposal of recursive version
	
\`\`\`cpp
Node* BST_insert(int k, Node* current)
{
    // if the current node is null, create a new node and return it
    if (current == nullptr) {
        return new Node(k);
    }

    // if the given key is less than the current node, recur for the left subtree
    if (k < current->key) {
        current->left = BST_insert(k, current->left);
    }
    // if the given key is more than the current node, recur for the right subtree
    else {
        current->right = BST_insert(k, current->right);
    }

    return current;
}
\`\`\`
	`,title:"Insertion",level:1,content:`# Insertion
	
Here is a proposal of recursive version
	
\`\`\`cpp
Node* BST_insert(int k, Node* current)
{
    // if the current node is null, create a new node and return it
    if (current == nullptr) {
        return new Node(k);
    }

    // if the given key is less than the current node, recur for the left subtree
    if (k < current->key) {
        current->left = BST_insert(k, current->left);
    }
    // if the given key is more than the current node, recur for the right subtree
    else {
        current->right = BST_insert(k, current->right);
    }

    return current;
}
\`\`\``,frontmatter:{},index:35,start:776,end:802,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:rB,meta:{slide:{raw:`	
# Insertion: Example
	
Let us consider a very simple tree made of a single node with key 5.
	
We would like to add a node with key 6

<div class="row">
<div class="column">
\`\`\`cpp
int main()
{ 
    Node* root = new Node(5);
    cout << (root->key) << endl;
    
    Node* myInsertedNode = BST_insert(6, root);
    cout << root->right->key;
	
    return 0;
}
\`\`\`
</div>
<div class="column">
\`\`\`sh
C:>
5
6
\`\`\`
</div>
</div>
	
Since 6>5, myInsertedNode is the right child of root

So "myInsertedNode = root->right"
	`,title:"Insertion: Example",level:1,content:`# Insertion: Example
	
Let us consider a very simple tree made of a single node with key 5.
	
We would like to add a node with key 6

<div class="row">
<div class="column">
\`\`\`cpp
int main()
{ 
    Node* root = new Node(5);
    cout << (root->key) << endl;
    
    Node* myInsertedNode = BST_insert(6, root);
    cout << root->right->key;
	
    return 0;
}
\`\`\`
</div>
<div class="column">
\`\`\`sh
C:>
5
6
\`\`\`
</div>
</div>
	
Since 6>5, myInsertedNode is the right child of root

So "myInsertedNode = root->right"`,frontmatter:{},index:36,start:803,end:838,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:hB,meta:{slide:{raw:`
# Deletion
	
How to delete a node in a binary tree?

<center><br><br>
<img src="/chap8/bst-deletion-init.png">	
</center>
	
<br>
<center>
Actually, it is not that straightforward..

Can you guess the 3 different scenarios?
</center>
	`,title:"Deletion",level:1,content:`# Deletion
	
How to delete a node in a binary tree?

<center><br><br>
<img src="/chap8/bst-deletion-init.png">	
</center>
	
<br>
<center>
Actually, it is not that straightforward..

Can you guess the 3 different scenarios?
</center>`,frontmatter:{},index:37,start:839,end:855,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:AB,meta:{slide:{raw:`	
# Deletion: Case 1
	
The simplest case is when you need to delete <span style="color:darkgreen">**a leaf**</span>

<center><br><br>
<img src="/chap8/bst-deletion-case1.png">	
</center>
	
**Solution:** Remove the "link" with its predecessor (cf. pointers)

Don't forget to free the memory as well (cf. memory allocation) 
	`,title:"Deletion: Case 1",level:1,content:`# Deletion: Case 1
	
The simplest case is when you need to delete <span style="color:darkgreen">**a leaf**</span>

<center><br><br>
<img src="/chap8/bst-deletion-case1.png">	
</center>
	
**Solution:** Remove the "link" with its predecessor (cf. pointers)

Don't forget to free the memory as well (cf. memory allocation)`,frontmatter:{},index:38,start:856,end:869,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:OB,meta:{slide:{raw:`	
# Deletion: Case 2
	
Another somewhat simple case concerns the deletion of <span style="color:darkgreen">**a node with a single child**</span>

<center><br><br>
<img src="/chap8/bst-deletion-case2.png">	
</center>
	
**Solution:** Replace the node by its successor

Be careful, it could be the root of subtree too!
	`,title:"Deletion: Case 2",level:1,content:`# Deletion: Case 2
	
Another somewhat simple case concerns the deletion of <span style="color:darkgreen">**a node with a single child**</span>

<center><br><br>
<img src="/chap8/bst-deletion-case2.png">	
</center>
	
**Solution:** Replace the node by its successor

Be careful, it could be the root of subtree too!`,frontmatter:{},index:39,start:870,end:883,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:jB,meta:{slide:{raw:`	
# Deletion: Case 3
	
The last scenario deals with the deletion of <span style="color:darkgreen">**a node with two children**</span>

<center><br><br>
<img src="/chap8/bst-deletion-case3.png">	

<br>
There is not a unique solution
</center>
	

`,title:"Deletion: Case 3",level:1,content:`# Deletion: Case 3
	
The last scenario deals with the deletion of <span style="color:darkgreen">**a node with two children**</span>

<center><br><br>
<img src="/chap8/bst-deletion-case3.png">	

<br>
There is not a unique solution
</center>`,frontmatter:{},index:40,start:884,end:898,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:XB,meta:{slide:{raw:`	
# Deletion: Case 3
	
The last scenario deals with the deletion of <span style="color:darkgreen">**a node with two children**</span>

<center><br>
Solution 1:<img src="/chap8/bst-deletion-case3a.png" style="height:150px"><br>
Solution 2:
<img src="/chap8/bst-deletion-case3b.png" style="height:150px">	
</center>
	`,title:"Deletion: Case 3",level:1,content:`# Deletion: Case 3
	
The last scenario deals with the deletion of <span style="color:darkgreen">**a node with two children**</span>

<center><br>
Solution 1:<img src="/chap8/bst-deletion-case3a.png" style="height:150px"><br>
Solution 2:
<img src="/chap8/bst-deletion-case3b.png" style="height:150px">	
</center>`,frontmatter:{},index:41,start:899,end:910,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:u2,meta:{slide:{raw:`	
# Deletion: Case 3 (hard)
	
The last scenario deals with the deletion of <span style="color:darkgreen">**a node with two children**</span>
	
<center><br><br>
<img src="/chap8/bst-deletion-case3-hard.png">	

<br>
In this more interesting case, how would you proceed?
</center>
	
<div v-click="1"><br>

**Hint:** Preserves inOrder traversal of keys (*why?*)
</div>
	`,title:"Deletion: Case 3 (hard)",level:1,content:`# Deletion: Case 3 (hard)
	
The last scenario deals with the deletion of <span style="color:darkgreen">**a node with two children**</span>
	
<center><br><br>
<img src="/chap8/bst-deletion-case3-hard.png">	

<br>
In this more interesting case, how would you proceed?
</center>
	
<div v-click="1"><br>

**Hint:** Preserves inOrder traversal of keys (*why?*)
</div>`,frontmatter:{},index:42,start:911,end:928,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:_2,meta:{slide:{raw:`	
# Deletion: Case 3 (hard)
	
The last scenario deals with the deletion of <span style="color:darkgreen">**a node with two children**</span>
	
<center>
<img src="/chap8/bst-deletion-case3-hard-solution.png" style="height:250px"><br>
</center>
	
**Solution:** Two minimal transformations preserve the InOrder traversal of keys
- (a) Replace the node to delete by the *in-order successor* (left-most node in right subtree)
- (b) Replace the node to delete by the *in-order predecessor* (right-most node in left subtree)
	`,title:"Deletion: Case 3 (hard)",level:1,content:`# Deletion: Case 3 (hard)
	
The last scenario deals with the deletion of <span style="color:darkgreen">**a node with two children**</span>
	
<center>
<img src="/chap8/bst-deletion-case3-hard-solution.png" style="height:250px"><br>
</center>
	
**Solution:** Two minimal transformations preserve the InOrder traversal of keys
- (a) Replace the node to delete by the *in-order successor* (left-most node in right subtree)
- (b) Replace the node to delete by the *in-order predecessor* (right-most node in left subtree)`,frontmatter:{},index:43,start:929,end:942,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:C2,meta:{slide:{raw:`	
# Other Queries
	
Actually you can also ask for other queries on BST. For example:
- **Range query** (find the keys between keyA and keyB)
- **Range count** (count the keys between keyA and keyB)

<br>	
<center>
<img src="/chap8/bst-query-1.png" style="height:230px"><br>
</center>	
	
<div v-click="1"><center><i>How would you proceed to retrieve the keys between 5 and 12?</i></center></div>
	`,title:"Other Queries",level:1,content:`# Other Queries
	
Actually you can also ask for other queries on BST. For example:
- **Range query** (find the keys between keyA and keyB)
- **Range count** (count the keys between keyA and keyB)

<br>	
<center>
<img src="/chap8/bst-query-1.png" style="height:230px"><br>
</center>	
	
<div v-click="1"><center><i>How would you proceed to retrieve the keys between 5 and 12?</i></center></div>`,frontmatter:{},index:44,start:943,end:957,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:V2,meta:{slide:{raw:`	
# Range Query
	
<br>
<center>
<div class="row">
<div class="column">
Find 5<br>
<span style="font-size:12px">(or its successor if it does not exist)</span>
<br><br>
<img src="/chap8/bst-query-2.png" style="height:200px">
</div>
<div class="column"><div v-click="1">
Perform InOrderTraversal up to 12<br> <span style="font-size:12px">(starting from 5)</span><br><br>
<img src="/chap8/bst-query-3.png" style="height:200px">
</div></div>
</div>	
</center>
`,title:"Range Query",level:1,content:`# Range Query
	
<br>
<center>
<div class="row">
<div class="column">
Find 5<br>
<span style="font-size:12px">(or its successor if it does not exist)</span>
<br><br>
<img src="/chap8/bst-query-2.png" style="height:200px">
</div>
<div class="column"><div v-click="1">
Perform InOrderTraversal up to 12<br> <span style="font-size:12px">(starting from 5)</span><br><br>
<img src="/chap8/bst-query-3.png" style="height:200px">
</div></div>
</div>	
</center>`,frontmatter:{},index:45,start:958,end:977,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:q2,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

<center>
<span style="font-weight:700;font-size:30px">6. Complexity</span>
</center>
	
	`,content:`<center>
<span style="font-weight:700;font-size:30px">6. Complexity</span>
</center>`,frontmatter:{layout:"intro"},index:46,start:977,end:986,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:ek,meta:{slide:{raw:`	
# Complexity
	

Most of operations are of $O(h)$ complexity with $h$ being the height of the tree

<div v-click="1">
<center>
<div class="row">
<div class="column">
Best case: Balanced BST
<img src="/chap8/complexity-best.png" style="height:200px">

Height: $h=\\log_2(n+1)$
</div>
<div class="column">
Worst case: Unbalanced BST
<img src="/chap8/complexity-worst.png" style="height:200px">

Height: $h=n$
</div>
</div>
</center>
</div>	
<div v-click="2">

On average, BSTs are in-between balanced and unbalanced BSTs.
So the average complexity is
	
$$O(\\log_2(n)) \\leq O(h) \\leq O(n)$$
</div>
	`,title:"Complexity",level:1,content:`# Complexity
	

Most of operations are of $O(h)$ complexity with $h$ being the height of the tree

<div v-click="1">
<center>
<div class="row">
<div class="column">
Best case: Balanced BST
<img src="/chap8/complexity-best.png" style="height:200px">

Height: $h=\\log_2(n+1)$
</div>
<div class="column">
Worst case: Unbalanced BST
<img src="/chap8/complexity-worst.png" style="height:200px">

Height: $h=n$
</div>
</div>
</center>
</div>	
<div v-click="2">

On average, BSTs are in-between balanced and unbalanced BSTs.
So the average complexity is
	
$$O(\\log_2(n)) \\leq O(h) \\leq O(n)$$
</div>`,frontmatter:{},index:47,start:987,end:1019,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:rk,meta:{slide:{raw:`	
# Complexity
	
<center>
<img src="/chap8/complexity.png">
</center>
	

	
`,title:"Complexity",level:1,content:`# Complexity
	
<center>
<img src="/chap8/complexity.png">
</center>`,frontmatter:{},index:48,start:1020,end:1030,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:lk,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

<center>
<span style="font-weight:700;font-size:30px">7. Conclusion</span>
</center>
		
	`,content:`<center>
<span style="font-weight:700;font-size:30px">7. Conclusion</span>
</center>`,frontmatter:{layout:"intro"},index:49,start:1030,end:1039,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:fk,meta:{slide:{raw:`	
# Advantages of BSTs

<br>
<b>1. Searching is very efficient</b><br>
<span style="font-size:14px">since all the nodes are in a very specific order</span>
	
<br><br>
<b>2. More efficient than working with arrays/linked lists</b><br>
<span style="font-size:13px">For instance, when searching, at each step one subtree is dismissed, thereby drastically reducing the search space.<br> While in arrays/linked lists we need to sequentially compare all the items</span>	
	`,title:"Advantages of BSTs",level:1,content:`# Advantages of BSTs

<br>
<b>1. Searching is very efficient</b><br>
<span style="font-size:14px">since all the nodes are in a very specific order</span>
	
<br><br>
<b>2. More efficient than working with arrays/linked lists</b><br>
<span style="font-size:13px">For instance, when searching, at each step one subtree is dismissed, thereby drastically reducing the search space.<br> While in arrays/linked lists we need to sequentially compare all the items</span>`,frontmatter:{},index:50,start:1040,end:1051,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:xk,meta:{slide:{raw:`	
# Applications of BSTs
	

- BST is used to implement **multilevel indexing** in database applications
- BST is also used to implement constructs like a **dictionary**
- BST can be used to implement various efficient **searching algorithms**
- BST is also used in applications that require a **sorted list** as input like the online stores
- BSTs are also used to **evaluate expressions** using expression trees

<center>
<br>
<div class="row">
<div class="three-column">
<img src="/chap8/example-book-bst.png" style="height:150px">
</div>
<div class="three-column">
<img src="/chap8/example-expression.png" style="height:150px">
</div>
<div class="three-column">
<img src="/chap8/Binary_space_partition.png" style="height:150px">
</div>
</div></center>
<br>
<center>BSTs are used in many search applications where data is constantly entering/leaving, such as the map and set objects in many languages' libraries</center>
	
	`,title:"Applications of BSTs",level:1,content:`# Applications of BSTs
	

- BST is used to implement **multilevel indexing** in database applications
- BST is also used to implement constructs like a **dictionary**
- BST can be used to implement various efficient **searching algorithms**
- BST is also used in applications that require a **sorted list** as input like the online stores
- BSTs are also used to **evaluate expressions** using expression trees

<center>
<br>
<div class="row">
<div class="three-column">
<img src="/chap8/example-book-bst.png" style="height:150px">
</div>
<div class="three-column">
<img src="/chap8/example-expression.png" style="height:150px">
</div>
<div class="three-column">
<img src="/chap8/Binary_space_partition.png" style="height:150px">
</div>
</div></center>
<br>
<center>BSTs are used in many search applications where data is constantly entering/leaving, such as the map and set objects in many languages' libraries</center>`,frontmatter:{},index:51,start:1052,end:1079,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:Nk,meta:{slide:{raw:`	
# To Go Further

<br>
<center>
<div class="row">
<div class="column">
<b>Adelson-Velsky and Landis Tree (AVL Tree)</b><br>
<span style="font-size:13px">first self-balancing BST</span>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/AVL_Tree_Example.gif/220px-AVL_Tree_Example.gif">
</div>
<div class="column">
<b>B-Tree</b><br>
<span style="font-size:13px">generalization of BST > 2 nodes + self-balancing</span><br><br>
<img src="/chap8/btree.png" style="height:90px">
</div>
</div>
</center>

<br>
<center>
<b>Red/Black tree</b><br>
<span style="font-size:13px">extra bit (color)</span>
<img src="/chap8/redblack-tree.png" style="height:120px">

</center>	
	`,title:"To Go Further",level:1,content:`# To Go Further

<br>
<center>
<div class="row">
<div class="column">
<b>Adelson-Velsky and Landis Tree (AVL Tree)</b><br>
<span style="font-size:13px">first self-balancing BST</span>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/AVL_Tree_Example.gif/220px-AVL_Tree_Example.gif">
</div>
<div class="column">
<b>B-Tree</b><br>
<span style="font-size:13px">generalization of BST > 2 nodes + self-balancing</span><br><br>
<img src="/chap8/btree.png" style="height:90px">
</div>
</div>
</center>

<br>
<center>
<b>Red/Black tree</b><br>
<span style="font-size:13px">extra bit (color)</span>
<img src="/chap8/redblack-tree.png" style="height:120px">

</center>`,frontmatter:{},index:52,start:1080,end:1107,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:Lk,meta:{slide:{raw:`	
# To Go Further
	
Why not mixing trees and hash functions? $\\longrightarrow$ **hash trees**!<br>
<span style="font-size:13px">used in p2p programs and specialized image-signatures in which a hash needs to be verified, but the whole file is not available.</span>


Why not mixing trees and queues? $\\longrightarrow$ **heap**!<br>
<span style="font-size:13px">Used in implementing efficient priority-queues, which in turn are used for scheduling processes in many operating systems, Quality-of-Service in routers, and A* (path-finding algorithm used in AI applications, including robotics and video games).</span>
	
Why not mixing trees and information theory? $\\longrightarrow$ **Huffman and Hu-Tucker coding**!<br>
<span style="font-size:13px">Used in compression algorithms, such as those used by the .jpeg and .mp3 file-formats.GGM Trees - Used in cryptographic applications to generate a tree of pseudo-random numbers.
</span>
`,title:"To Go Further",level:1,content:`# To Go Further
	
Why not mixing trees and hash functions? $\\longrightarrow$ **hash trees**!<br>
<span style="font-size:13px">used in p2p programs and specialized image-signatures in which a hash needs to be verified, but the whole file is not available.</span>


Why not mixing trees and queues? $\\longrightarrow$ **heap**!<br>
<span style="font-size:13px">Used in implementing efficient priority-queues, which in turn are used for scheduling processes in many operating systems, Quality-of-Service in routers, and A* (path-finding algorithm used in AI applications, including robotics and video games).</span>
	
Why not mixing trees and information theory? $\\longrightarrow$ **Huffman and Hu-Tucker coding**!<br>
<span style="font-size:13px">Used in compression algorithms, such as those used by the .jpeg and .mp3 file-formats.GGM Trees - Used in cryptographic applications to generate a tree of pseudo-random numbers.
</span>`,frontmatter:{},index:53,start:1108,end:1122,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:Wk,meta:{slide:{raw:`	
# To Go Further
	
You can also take a look at the followings (*binary*) (*search*) trees
<br><br>

**Binary Space Partition:** Used in almost every 3D video game to determine what objects need to be rendered.

**Binary Tries:** Used in almost every high-bandwidth router for storing router-tables.

	
**Syntax Tree:** Constructed by compilers and (implicitly) calculators to parse expressions.

**Treap:** Randomized data structure used in wireless networking and memory allocation.

**T-tree:** Though most databases use some form of B-tree to store data on the drive, databases which keep all (most) their data in memory often use T-trees to do so.	
	
	`,title:"To Go Further",level:1,content:`# To Go Further
	
You can also take a look at the followings (*binary*) (*search*) trees
<br><br>

**Binary Space Partition:** Used in almost every 3D video game to determine what objects need to be rendered.

**Binary Tries:** Used in almost every high-bandwidth router for storing router-tables.

	
**Syntax Tree:** Constructed by compilers and (implicitly) calculators to parse expressions.

**Treap:** Randomized data structure used in wireless networking and memory allocation.

**T-tree:** Though most databases use some form of B-tree to store data on the drive, databases which keep all (most) their data in memory often use T-trees to do so.`,frontmatter:{},index:54,start:1123,end:1141,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:Qk,meta:{slide:{raw:`	
# Exercice yourself!
	
- How would you code your tree with a generic Key type instead of a integer?
	
\`\`\`cpp
typedef struct Node {
	Key* key;
	Node* left;
	Node* right;
} Node;
\`\`\`
	
- How can you handle duplicate keys?
`,title:"Exercice yourself!",level:1,content:`# Exercice yourself!
	
- How would you code your tree with a generic Key type instead of a integer?
	
\`\`\`cpp
typedef struct Node {
	Key* key;
	Node* left;
	Node* right;
} Node;
\`\`\`
	
- How can you handle duplicate keys?`,frontmatter:{},index:55,start:1142,end:1157,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/8-binary-search-trees.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",component:$0,meta:{layout:"end"}}];const Ve=Xk,Jk=[{name:"play",path:"/",component:_0,children:[...Ve]},{name:"print",path:"/print",component:A0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>fs(()=>import("./Presenter.83db1418.js"),["assets/Presenter.83db1418.js","assets/Presenter.55f76449.css","assets/DrawingControls.caf7a4f8.js"]),beforeEnter:e=>{if(!En.remote||En.remote===e.query.password)return!0;if(En.remote&&e.query.password===void 0){const n=prompt("Enter password");if(En.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],vt=Gg({history:ug("/courses/data-structure/binary-search-trees/"),routes:Jk});function e$(e,n,{mode:s="replace"}={}){return S({get(){const r=vt.currentRoute.value.query[e];return r==null?n!=null?n:null:Array.isArray(r)?r.filter(Boolean):r},set(r){Ge(()=>{vt[w(s)]({query:{...vt.currentRoute.value.query,[e]:r}})})}})}const Cp=q(0);Ge(()=>{vt.afterEach(async()=>{await Ge(),Cp.value+=1})});const tn=S(()=>vt.currentRoute.value),pa=S(()=>tn.value.query.print!==void 0),t$=S(()=>tn.value.query.print==="clicks"),Kt=S(()=>tn.value.query.embedded!==void 0),Ht=S(()=>tn.value.path.startsWith("/presenter")),Ls=S(()=>pa.value&&!t$.value),wl=S(()=>tn.value.query.password),n$=S(()=>!Ht.value&&(!xe.remote||wl.value===xe.remote)),oc=e$("clicks","0"),Ep=S(()=>Ve.length-1),s$=S(()=>tn.value.path),Ue=S(()=>parseInt(s$.value.split(/\//g).slice(-1)[0])||1);S(()=>co(Ue.value));const ht=S(()=>Ve.find(e=>e.path===`${Ue.value}`));S(()=>{var e,n,s;return(s=(n=(e=ht.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});S(()=>{var e,n;return(n=(e=ht.value)==null?void 0:e.meta)==null?void 0:n.layout});const Oo=S(()=>Ve.find(e=>e.path===`${Math.min(Ve.length,Ue.value+1)}`)),r$=S(()=>{var e,n;return Cp.value,((n=(e=ht.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Ft=S({get(){if(Ls.value)return 99999;let e=+(oc.value||0);return isNaN(e)&&(e=0),e},set(e){oc.value=e.toString()}}),zr=S(()=>{var e,n,s;return+((s=(n=(e=ht.value)==null?void 0:e.meta)==null?void 0:n.clicks)!=null?s:r$.value.length)}),o$=S(()=>Ue.value<Ve.length-1||Ft.value<zr.value),l$=S(()=>Ue.value>1||Ft.value>0),a$=S(()=>Ve.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(da(e,n),e),[])),i$=S(()=>fa(a$.value,ht.value));S(()=>ha(i$.value));function hn(){zr.value<=Ft.value?er():Ft.value+=1}async function mn(){Ft.value<=0?await tr():Ft.value-=1}function co(e){return Ht.value?`/presenter/${e}`:`/${e}`}function er(){const e=Math.min(Ve.length,Ue.value+1);return cs(e)}async function tr(e=!0){const n=Math.max(1,Ue.value-1);await cs(n),e&&zr.value&&vt.replace({query:{...tn.value.query,clicks:zr.value}})}function cs(e,n){return vt.push({path:co(e),query:{...tn.value.query,clicks:n}})}function c$(e){const n=q(0),{direction:s,distanceX:r,distanceY:o}=jy(e,{onSwipeStart(l){l.pointerType==="touch"&&(Qs.value||(n.value=il()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!n.value||Qs.value)return;const a=Math.abs(r.value),i=Math.abs(o.value);a/window.innerWidth>.3||a>100?s.value===Zt.LEFT?hn():mn():(i/window.innerHeight>.4||i>200)&&(s.value===Zt.DOWN?tr():er())}})}async function xl(){const{saveAs:e}=await fs(()=>import("./FileSaver.min.4f92ed14.js").then(function(n){return n.F}),[]);e(Ru(xe.download)?xe.download:xe.exportFilename?`${xe.exportFilename}.pdf`:"/courses/data-structure/binary-search-trees/slidev-exported.pdf",`${xe.title}.pdf`)}async function u$(e){var n,s;if(e==null){const r=(s=(n=ht.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(r!=null&&r.filepath))return!1;e=`${r.filepath}:${r.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function da(e,n,s=1){var o,l,a,i,c;const r=(l=(o=n.meta)==null?void 0:o.slide)==null?void 0:l.level;r&&r>s&&e.length>0?da(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function fa(e,n,s=!1,r){return e.map(o=>{const l={...o,active:o.path===(n==null?void 0:n.path),hasActiveParent:s};return l.children.length>0&&(l.children=fa(l.children,n,l.active||l.hasActiveParent,l)),r&&(l.active||l.activeParent)&&(r.activeParent=!0),l})}function ha(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:ha(s.children,n+1)}))}function p$(){const e=xe.titleTemplate.replace("%s",xe.title||"Slidev");dm({title:e}),wm(`${e} - shared`),km(`${e} - drawings`);function n(){Ht.value&&(di("page",+Ue.value),di("clicks",Ft.value))}vt.afterEach(n),fe(Ft,n),xm(s=>{(+s.page!=+Ue.value||Ft.value!==s.clicks)&&vt.replace({path:co(s.page),query:{...vt.currentRoute.value.query,clicks:s.clicks||0}})})}const d$=$e({__name:"App",setup(e){return F(L),p$(),(n,s)=>{const r=re("RouterView"),o=re("StarportCarrier");return _(),O(Ce,null,[C(r),C(o)],64)}}});function No(e){return e!==null&&typeof e=="object"}function Al(e,n,s=".",r){if(!No(n))return Al(e,{},s,r);const o=Object.assign({},n);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const a=e[l];a!=null&&(r&&r(o,l,a,s)||(Array.isArray(a)&&Array.isArray(o[l])?o[l]=a.concat(o[l]):No(a)&&No(o[l])?o[l]=Al(a,o[l],(s?`${s}.`:"")+l.toString(),r):o[l]=a))}return o}function f$(e){return(...n)=>n.reduce((s,r)=>Al(s,r,"",e),{})}const h$=f$(),Dp=1/60*1e3,m$=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Sp=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(m$()),Dp);function y$(e){let n=[],s=[],r=0,o=!1,l=!1;const a=new WeakSet,i={schedule:(c,u=!1,p=!1)=>{const h=p&&o,f=h?n:s;return u&&a.add(c),f.indexOf(c)===-1&&(f.push(c),h&&o&&(r=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(o){l=!0;return}if(o=!0,[n,s]=[s,n],s.length=0,r=n.length,r)for(let u=0;u<r;u++){const p=n[u];p(c),a.has(p)&&(i.schedule(p),e())}o=!1,l&&(l=!1,i.process(c))}};return i}const g$=40;let Bl=!0,nr=!1,kl=!1;const ss={delta:0,timestamp:0},ar=["read","update","preRender","render","postRender"],uo=ar.reduce((e,n)=>(e[n]=y$(()=>nr=!0),e),{}),lc=ar.reduce((e,n)=>{const s=uo[n];return e[n]=(r,o=!1,l=!1)=>(nr||v$(),s.schedule(r,o,l)),e},{});ar.reduce((e,n)=>(e[n]=uo[n].cancel,e),{});ar.reduce((e,n)=>(e[n]=()=>uo[n].process(ss),e),{});const _$=e=>uo[e].process(ss),Tp=e=>{nr=!1,ss.delta=Bl?Dp:Math.max(Math.min(e-ss.timestamp,g$),1),ss.timestamp=e,kl=!0,ar.forEach(_$),kl=!1,nr&&(Bl=!1,Sp(Tp))},v$=()=>{nr=!0,Bl=!0,kl||Sp(Tp)},b$=()=>ss;function Op(e,n){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(s[r[o]]=e[r[o]]);return s}var w$=function(){},ac=function(){};const $l=(e,n,s)=>Math.min(Math.max(s,e),n),Fo=.001,x$=.01,ic=10,A$=.05,B$=1;function k$({duration:e=800,bounce:n=.25,velocity:s=0,mass:r=1}){let o,l;w$(e<=ic*1e3);let a=1-n;a=$l(A$,B$,a),e=$l(x$,ic,e/1e3),a<1?(o=u=>{const p=u*a,h=p*e,f=p-s,m=Cl(u,a),g=Math.exp(-h);return Fo-f/m*g},l=u=>{const h=u*a*e,f=h*s+s,m=Math.pow(a,2)*Math.pow(u,2)*e,g=Math.exp(-h),x=Cl(Math.pow(u,2),a);return(-o(u)+Fo>0?-1:1)*((f-m)*g)/x}):(o=u=>{const p=Math.exp(-u*e),h=(u-s)*e+1;return-Fo+p*h},l=u=>{const p=Math.exp(-u*e),h=(s-u)*(e*e);return p*h});const i=5/e,c=C$(o,l,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const $$=12;function C$(e,n,s){let r=s;for(let o=1;o<$$;o++)r=r-e(r)/n(r);return r}function Cl(e,n){return e*Math.sqrt(1-n*n)}const E$=["duration","bounce"],D$=["stiffness","damping","mass"];function cc(e,n){return n.some(s=>e[s]!==void 0)}function S$(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!cc(e,D$)&&cc(e,E$)){const s=k$(e);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function ma(e){var{from:n=0,to:s=1,restSpeed:r=2,restDelta:o}=e,l=Op(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:c,mass:u,velocity:p,duration:h,isResolvedFromDuration:f}=S$(l),m=uc,g=uc;function x(){const b=p?-(p/1e3):0,E=s-n,k=c/(2*Math.sqrt(i*u)),$=Math.sqrt(i/u)/1e3;if(o===void 0&&(o=Math.min(Math.abs(s-n)/100,.4)),k<1){const D=Cl($,k);m=j=>{const M=Math.exp(-k*$*j);return s-M*((b+k*$*E)/D*Math.sin(D*j)+E*Math.cos(D*j))},g=j=>{const M=Math.exp(-k*$*j);return k*$*M*(Math.sin(D*j)*(b+k*$*E)/D+E*Math.cos(D*j))-M*(Math.cos(D*j)*(b+k*$*E)-D*E*Math.sin(D*j))}}else if(k===1)m=D=>s-Math.exp(-$*D)*(E+(b+$*E)*D);else{const D=$*Math.sqrt(k*k-1);m=j=>{const M=Math.exp(-k*$*j),K=Math.min(D*j,300);return s-M*((b+k*$*E)*Math.sinh(K)+D*E*Math.cosh(K))/D}}}return x(),{next:b=>{const E=m(b);if(f)a.done=b>=h;else{const k=g(b)*1e3,$=Math.abs(k)<=r,D=Math.abs(s-E)<=o;a.done=$&&D}return a.value=a.done?s:E,a},flipTarget:()=>{p=-p,[n,s]=[s,n],x()}}}ma.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const uc=e=>0,Np=(e,n,s)=>{const r=n-e;return r===0?1:(s-e)/r},ya=(e,n,s)=>-s*e+s*n+e,Fp=(e,n)=>s=>Math.max(Math.min(s,n),e),Rs=e=>e%1?Number(e.toFixed(5)):e,Vr=/(-)?([\d]*\.?[\d])+/g,El=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,T$=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function ir(e){return typeof e=="string"}const po={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Mp=Object.assign(Object.assign({},po),{transform:Fp(0,1)});Object.assign(Object.assign({},po),{default:1});const O$=e=>({test:n=>ir(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),Hs=O$("%");Object.assign(Object.assign({},Hs),{parse:e=>Hs.parse(e)/100,transform:e=>Hs.transform(e*100)});const ga=(e,n)=>s=>Boolean(ir(s)&&T$.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),Pp=(e,n,s)=>r=>{if(!ir(r))return r;const[o,l,a,i]=r.match(Vr);return{[e]:parseFloat(o),[n]:parseFloat(l),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Sn={test:ga("hsl","hue"),parse:Pp("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:r=1})=>"hsla("+Math.round(e)+", "+Hs.transform(Rs(n))+", "+Hs.transform(Rs(s))+", "+Rs(Mp.transform(r))+")"},N$=Fp(0,255),Mo=Object.assign(Object.assign({},po),{transform:e=>Math.round(N$(e))}),cn={test:ga("rgb","red"),parse:Pp("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:r=1})=>"rgba("+Mo.transform(e)+", "+Mo.transform(n)+", "+Mo.transform(s)+", "+Rs(Mp.transform(r))+")"};function F$(e){let n="",s="",r="",o="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),n+=n,s+=s,r+=r,o+=o),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Dl={test:ga("#"),parse:F$,transform:cn.transform},fo={test:e=>cn.test(e)||Dl.test(e)||Sn.test(e),parse:e=>cn.test(e)?cn.parse(e):Sn.test(e)?Sn.parse(e):Dl.parse(e),transform:e=>ir(e)?e:e.hasOwnProperty("red")?cn.transform(e):Sn.transform(e)},Ip="${c}",Lp="${n}";function M$(e){var n,s,r,o;return isNaN(e)&&ir(e)&&((s=(n=e.match(Vr))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((o=(r=e.match(El))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function Rp(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const r=e.match(El);r&&(s=r.length,e=e.replace(El,Ip),n.push(...r.map(fo.parse)));const o=e.match(Vr);return o&&(e=e.replace(Vr,Lp),n.push(...o.map(po.parse))),{values:n,numColors:s,tokenised:e}}function Hp(e){return Rp(e).values}function jp(e){const{values:n,numColors:s,tokenised:r}=Rp(e),o=n.length;return l=>{let a=r;for(let i=0;i<o;i++)a=a.replace(i<s?Ip:Lp,i<s?fo.transform(l[i]):Rs(l[i]));return a}}const P$=e=>typeof e=="number"?0:e;function I$(e){const n=Hp(e);return jp(e)(n.map(P$))}const zp={test:M$,parse:Hp,createTransformer:jp,getAnimatableNone:I$};function Po(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}function pc({hue:e,saturation:n,lightness:s,alpha:r}){e/=360,n/=100,s/=100;let o=0,l=0,a=0;if(!n)o=l=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,c=2*s-i;o=Po(c,i,e+1/3),l=Po(c,i,e),a=Po(c,i,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(a*255),alpha:r}}const L$=(e,n,s)=>{const r=e*e,o=n*n;return Math.sqrt(Math.max(0,s*(o-r)+r))},R$=[Dl,cn,Sn],dc=e=>R$.find(n=>n.test(e)),Vp=(e,n)=>{let s=dc(e),r=dc(n),o=s.parse(e),l=r.parse(n);s===Sn&&(o=pc(o),s=cn),r===Sn&&(l=pc(l),r=cn);const a=Object.assign({},o);return i=>{for(const c in a)c!=="alpha"&&(a[c]=L$(o[c],l[c],i));return a.alpha=ya(o.alpha,l.alpha,i),s.transform(a)}},H$=e=>typeof e=="number",j$=(e,n)=>s=>n(e(s)),Up=(...e)=>e.reduce(j$);function qp(e,n){return H$(e)?s=>ya(e,n,s):fo.test(e)?Vp(e,n):Kp(e,n)}const Wp=(e,n)=>{const s=[...e],r=s.length,o=e.map((l,a)=>qp(l,n[a]));return l=>{for(let a=0;a<r;a++)s[a]=o[a](l);return s}},z$=(e,n)=>{const s=Object.assign(Object.assign({},e),n),r={};for(const o in s)e[o]!==void 0&&n[o]!==void 0&&(r[o]=qp(e[o],n[o]));return o=>{for(const l in r)s[l]=r[l](o);return s}};function fc(e){const n=zp.parse(e),s=n.length;let r=0,o=0,l=0;for(let a=0;a<s;a++)r||typeof n[a]=="number"?r++:n[a].hue!==void 0?l++:o++;return{parsed:n,numNumbers:r,numRGB:o,numHSL:l}}const Kp=(e,n)=>{const s=zp.createTransformer(n),r=fc(e),o=fc(n);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?Up(Wp(r.parsed,o.parsed),s):a=>`${a>0?n:e}`},V$=(e,n)=>s=>ya(e,n,s);function U$(e){if(typeof e=="number")return V$;if(typeof e=="string")return fo.test(e)?Vp:Kp;if(Array.isArray(e))return Wp;if(typeof e=="object")return z$}function q$(e,n,s){const r=[],o=s||U$(e[0]),l=e.length-1;for(let a=0;a<l;a++){let i=o(e[a],e[a+1]);if(n){const c=Array.isArray(n)?n[a]:n;i=Up(c,i)}r.push(i)}return r}function W$([e,n],[s]){return r=>s(Np(e,n,r))}function K$(e,n){const s=e.length,r=s-1;return o=>{let l=0,a=!1;if(o<=e[0]?a=!0:o>=e[r]&&(l=r-1,a=!0),!a){let c=1;for(;c<s&&!(e[c]>o||c===r);c++);l=c-1}const i=Np(e[l],e[l+1],o);return n[l](i)}}function Yp(e,n,{clamp:s=!0,ease:r,mixer:o}={}){const l=e.length;ac(l===n.length),ac(!r||!Array.isArray(r)||r.length===l-1),e[0]>e[l-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const a=q$(n,r,o),i=l===2?W$(e,a):K$(e,a);return s?c=>i($l(e[0],e[l-1],c)):i}const ho=e=>n=>1-e(1-n),_a=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,Y$=e=>n=>Math.pow(n,e),Gp=e=>n=>n*n*((e+1)*n-e),G$=e=>{const n=Gp(e);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Zp=1.525,Z$=4/11,Q$=8/11,X$=9/10,Qp=e=>e,va=Y$(2),J$=ho(va),Xp=_a(va),Jp=e=>1-Math.sin(Math.acos(e)),ed=ho(Jp),eC=_a(ed),ba=Gp(Zp),tC=ho(ba),nC=_a(ba),sC=G$(Zp),rC=4356/361,oC=35442/1805,lC=16061/1805,Ur=e=>{if(e===1||e===0)return e;const n=e*e;return e<Z$?7.5625*n:e<Q$?9.075*n-9.9*e+3.4:e<X$?rC*n-oC*e+lC:10.8*e*e-20.52*e+10.72},aC=ho(Ur),iC=e=>e<.5?.5*(1-Ur(1-e*2)):.5*Ur(e*2-1)+.5;function cC(e,n){return e.map(()=>n||Xp).splice(0,e.length-1)}function uC(e){const n=e.length;return e.map((s,r)=>r!==0?r/(n-1):0)}function pC(e,n){return e.map(s=>s*n)}function Dr({from:e=0,to:n=1,ease:s,offset:r,duration:o=300}){const l={done:!1,value:e},a=Array.isArray(n)?n:[e,n],i=pC(r&&r.length===a.length?r:uC(a),o);function c(){return Yp(i,a,{ease:Array.isArray(s)?s:cC(a,s)})}let u=c();return{next:p=>(l.value=u(p),l.done=p>=o,l),flipTarget:()=>{a.reverse(),u=c()}}}function dC({velocity:e=0,from:n=0,power:s=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:l}){const a={done:!1,value:n};let i=s*e;const c=n+i,u=l===void 0?c:l(c);return u!==c&&(i=u-n),{next:p=>{const h=-i*Math.exp(-p/r);return a.done=!(h>o||h<-o),a.value=a.done?u:u+h,a},flipTarget:()=>{}}}const hc={keyframes:Dr,spring:ma,decay:dC};function fC(e){if(Array.isArray(e.to))return Dr;if(hc[e.type])return hc[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Dr:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?ma:Dr}const td=1/60*1e3,hC=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),nd=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(hC()),td);function mC(e){let n=[],s=[],r=0,o=!1,l=!1;const a=new WeakSet,i={schedule:(c,u=!1,p=!1)=>{const h=p&&o,f=h?n:s;return u&&a.add(c),f.indexOf(c)===-1&&(f.push(c),h&&o&&(r=n.length)),c},cancel:c=>{const u=s.indexOf(c);u!==-1&&s.splice(u,1),a.delete(c)},process:c=>{if(o){l=!0;return}if(o=!0,[n,s]=[s,n],s.length=0,r=n.length,r)for(let u=0;u<r;u++){const p=n[u];p(c),a.has(p)&&(i.schedule(p),e())}o=!1,l&&(l=!1,i.process(c))}};return i}const yC=40;let Sl=!0,sr=!1,Tl=!1;const rs={delta:0,timestamp:0},cr=["read","update","preRender","render","postRender"],mo=cr.reduce((e,n)=>(e[n]=mC(()=>sr=!0),e),{}),gC=cr.reduce((e,n)=>{const s=mo[n];return e[n]=(r,o=!1,l=!1)=>(sr||bC(),s.schedule(r,o,l)),e},{}),_C=cr.reduce((e,n)=>(e[n]=mo[n].cancel,e),{});cr.reduce((e,n)=>(e[n]=()=>mo[n].process(rs),e),{});const vC=e=>mo[e].process(rs),sd=e=>{sr=!1,rs.delta=Sl?td:Math.max(Math.min(e-rs.timestamp,yC),1),rs.timestamp=e,Tl=!0,cr.forEach(vC),Tl=!1,sr&&(Sl=!1,nd(sd))},bC=()=>{sr=!0,Sl=!0,Tl||nd(sd)},wC=()=>rs;function rd(e,n,s=0){return e-n-s}function xC(e,n,s=0,r=!0){return r?rd(n+-e,n,s):n-(e-n)+s}function AC(e,n,s,r){return r?e>=n+s:e<=-s}const BC=e=>{const n=({delta:s})=>e(s);return{start:()=>gC.update(n,!0),stop:()=>_C.update(n)}};function od(e){var n,s,{from:r,autoplay:o=!0,driver:l=BC,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:p,onStop:h,onComplete:f,onRepeat:m,onUpdate:g}=e,x=Op(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=x,E,k=0,$=x.duration,D,j=!1,M=!0,K;const ie=fC(x);!((s=(n=ie).needsInterpolation)===null||s===void 0)&&s.call(n,r,b)&&(K=Yp([0,100],[r,b],{clamp:!1}),r=0,b=100);const he=ie(Object.assign(Object.assign({},x),{from:r,to:b}));function ye(){k++,c==="reverse"?(M=k%2===0,a=xC(a,$,u,M)):(a=rd(a,$,u),c==="mirror"&&he.flipTarget()),j=!1,m&&m()}function ve(){E.stop(),f&&f()}function Pe(Ze){if(M||(Ze=-Ze),a+=Ze,!j){const De=he.next(Math.max(0,a));D=De.value,K&&(D=K(D)),j=M?De.done:a<=0}g==null||g(D),j&&(k===0&&($!=null||($=a)),k<i?AC(a,$,u,M)&&ye():ve())}function je(){p==null||p(),E=l(Pe),E.start()}return o&&je(),{stop:()=>{h==null||h(),E.stop()}}}function ld(e,n){return n?e*(1e3/n):0}function kC({from:e=0,velocity:n=0,min:s,max:r,power:o=.8,timeConstant:l=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:p,onUpdate:h,onComplete:f,onStop:m}){let g;function x($){return s!==void 0&&$<s||r!==void 0&&$>r}function b($){return s===void 0?r:r===void 0||Math.abs(s-$)<Math.abs(r-$)?s:r}function E($){g==null||g.stop(),g=od(Object.assign(Object.assign({},$),{driver:p,onUpdate:D=>{var j;h==null||h(D),(j=$.onUpdate)===null||j===void 0||j.call($,D)},onComplete:f,onStop:m}))}function k($){E(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},$))}if(x(e))k({from:e,velocity:n,to:b(e)});else{let $=o*n+e;typeof u!="undefined"&&($=u($));const D=b($),j=D===s?-1:1;let M,K;const ie=he=>{M=K,K=he,n=ld(he-M,wC().delta),(j===1&&he>D||j===-1&&he<D)&&k({from:he,to:D,velocity:n})};E({type:"decay",from:e,velocity:n,timeConstant:l,power:o,restDelta:c,modifyTarget:u,onUpdate:x($)?ie:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const ad=(e,n)=>1-3*n+3*e,id=(e,n)=>3*n-6*e,cd=e=>3*e,qr=(e,n,s)=>((ad(n,s)*e+id(n,s))*e+cd(n))*e,ud=(e,n,s)=>3*ad(n,s)*e*e+2*id(n,s)*e+cd(n),$C=1e-7,CC=10;function EC(e,n,s,r,o){let l,a,i=0;do a=n+(s-n)/2,l=qr(a,r,o)-e,l>0?s=a:n=a;while(Math.abs(l)>$C&&++i<CC);return a}const DC=8,SC=.001;function TC(e,n,s,r){for(let o=0;o<DC;++o){const l=ud(n,s,r);if(l===0)return n;n-=(qr(n,s,r)-e)/l}return n}const Sr=11,br=1/(Sr-1);function OC(e,n,s,r){if(e===n&&s===r)return Qp;const o=new Float32Array(Sr);for(let a=0;a<Sr;++a)o[a]=qr(a*br,e,s);function l(a){let i=0,c=1;const u=Sr-1;for(;c!==u&&o[c]<=a;++c)i+=br;--c;const p=(a-o[c])/(o[c+1]-o[c]),h=i+p*br,f=ud(h,e,s);return f>=SC?TC(a,h,e,s):f===0?h:EC(a,i,i+br,e,s)}return a=>a===0||a===1?a:qr(l(a),n,r)}const pd=(e,n)=>s=>Math.max(Math.min(s,n),e),js=e=>e%1?Number(e.toFixed(5)):e,rr=/(-)?([\d]*\.?[\d])+/g,Ol=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,NC=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function ur(e){return typeof e=="string"}const pr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},zs=Object.assign(Object.assign({},pr),{transform:pd(0,1)}),wr=Object.assign(Object.assign({},pr),{default:1}),wa=e=>({test:n=>ur(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),bn=wa("deg"),Vs=wa("%"),ce=wa("px"),mc=Object.assign(Object.assign({},Vs),{parse:e=>Vs.parse(e)/100,transform:e=>Vs.transform(e*100)}),xa=(e,n)=>s=>Boolean(ur(s)&&NC.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),dd=(e,n,s)=>r=>{if(!ur(r))return r;const[o,l,a,i]=r.match(rr);return{[e]:parseFloat(o),[n]:parseFloat(l),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},xr={test:xa("hsl","hue"),parse:dd("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:r=1})=>"hsla("+Math.round(e)+", "+Vs.transform(js(n))+", "+Vs.transform(js(s))+", "+js(zs.transform(r))+")"},FC=pd(0,255),Io=Object.assign(Object.assign({},pr),{transform:e=>Math.round(FC(e))}),Es={test:xa("rgb","red"),parse:dd("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:r=1})=>"rgba("+Io.transform(e)+", "+Io.transform(n)+", "+Io.transform(s)+", "+js(zs.transform(r))+")"};function MC(e){let n="",s="",r="",o="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),n+=n,s+=s,r+=r,o+=o),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const yc={test:xa("#"),parse:MC,transform:Es.transform},At={test:e=>Es.test(e)||yc.test(e)||xr.test(e),parse:e=>Es.test(e)?Es.parse(e):xr.test(e)?xr.parse(e):yc.parse(e),transform:e=>ur(e)?e:e.hasOwnProperty("red")?Es.transform(e):xr.transform(e)},fd="${c}",hd="${n}";function PC(e){var n,s,r,o;return isNaN(e)&&ur(e)&&((s=(n=e.match(rr))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((o=(r=e.match(Ol))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function md(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const r=e.match(Ol);r&&(s=r.length,e=e.replace(Ol,fd),n.push(...r.map(At.parse)));const o=e.match(rr);return o&&(e=e.replace(rr,hd),n.push(...o.map(pr.parse))),{values:n,numColors:s,tokenised:e}}function yd(e){return md(e).values}function gd(e){const{values:n,numColors:s,tokenised:r}=md(e),o=n.length;return l=>{let a=r;for(let i=0;i<o;i++)a=a.replace(i<s?fd:hd,i<s?At.transform(l[i]):js(l[i]));return a}}const IC=e=>typeof e=="number"?0:e;function LC(e){const n=yd(e);return gd(e)(n.map(IC))}const Aa={test:PC,parse:yd,createTransformer:gd,getAnimatableNone:LC},RC=new Set(["brightness","contrast","saturate","opacity"]);function HC(e){let[n,s]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[r]=s.match(rr)||[];if(!r)return e;const o=s.replace(r,"");let l=RC.has(n)?1:0;return r!==s&&(l*=100),n+"("+l+o+")"}const jC=/([a-z-]*)\(.*?\)/g,Nl=Object.assign(Object.assign({},Aa),{getAnimatableNone:e=>{const n=e.match(jC);return n?n.map(HC).join(" "):e}}),Lo={};class zC{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,r){if(!!this.subscriptions.size)for(const o of this.subscriptions)o(n,s,r)}clear(){this.subscriptions.clear()}}const gc=e=>!isNaN(parseFloat(e));class VC{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new zC,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:r,timestamp:o}=b$();this.lastUpdated!==o&&(this.timeDelta=r,this.lastUpdated=o),lc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>lc.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=gc(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=gc(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ld(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:r}=n(s);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function UC(e){return new VC(e)}const{isArray:qC}=Array;function WC(){const e=q({}),n=r=>{const o=l=>{!e.value[l]||(e.value[l].stop(),e.value[l].destroy(),Dm(e.value,l))};r?qC(r)?r.forEach(o):o(r):Object.keys(e.value).forEach(o)},s=(r,o,l)=>{if(e.value[r])return e.value[r];const a=UC(o);return a.onChange(i=>{it(l,r,i)}),it(e.value,r,a),a};return ea(n),{motionValues:e,get:s,stop:n}}const KC=e=>Array.isArray(e),wn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ro=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),YC=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Ho=()=>({type:"keyframes",ease:"linear",duration:300}),GC=e=>({type:"keyframes",duration:800,values:e}),_c={default:YC,x:wn,y:wn,z:wn,rotate:wn,rotateX:wn,rotateY:wn,rotateZ:wn,scaleX:Ro,scaleY:Ro,scale:Ro,backgroundColor:Ho,color:Ho,opacity:Ho},_d=(e,n)=>{let s;return KC(n)?s=GC:s=_c[e]||_c.default,{to:n,...s(n)}},vc={...pr,transform:Math.round},vd={color:At,backgroundColor:At,outlineColor:At,fill:At,stroke:At,borderColor:At,borderTopColor:At,borderRightColor:At,borderBottomColor:At,borderLeftColor:At,borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,size:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,rotate:bn,rotateX:bn,rotateY:bn,rotateZ:bn,scale:wr,scaleX:wr,scaleY:wr,scaleZ:wr,skew:bn,skewX:bn,skewY:bn,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:zs,originX:mc,originY:mc,originZ:ce,zIndex:vc,filter:Nl,WebkitFilter:Nl,fillOpacity:zs,strokeOpacity:zs,numOctaves:vc},Ba=e=>vd[e],bd=(e,n)=>n&&typeof e=="number"&&n.transform?n.transform(e):e;function ZC(e,n){let s=Ba(e);return s!==Nl&&(s=Aa),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const QC={linear:Qp,easeIn:va,easeInOut:Xp,easeOut:J$,circIn:Jp,circInOut:eC,circOut:ed,backIn:ba,backInOut:nC,backOut:tC,anticipate:sC,bounceIn:aC,bounceInOut:iC,bounceOut:Ur},bc=e=>{if(Array.isArray(e)){const[n,s,r,o]=e;return OC(n,s,r,o)}else if(typeof e=="string")return QC[e];return e},XC=e=>Array.isArray(e)&&typeof e[0]!="number",wc=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Aa.test(n)&&!n.startsWith("url("));function JC(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function e4({ease:e,times:n,delay:s,...r}){const o={...r};return n&&(o.offset=n),e&&(o.ease=XC(e)?e.map(bc):bc(e)),s&&(o.elapsed=-s),o}function t4(e,n,s){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),JC(n),n4(e)||(e={...e,..._d(s,n.to)}),{...n,...e4(e)}}function n4({delay:e,repeat:n,repeatType:s,repeatDelay:r,from:o,...l}){return!!Object.keys(l).length}function s4(e,n){return e[n]||e.default||e}function r4(e,n,s,r,o){const l=s4(r,e);let a=l.from===null||l.from===void 0?n.get():l.from;const i=wc(e,s);a==="none"&&i&&typeof s=="string"&&(a=ZC(e,s));const c=wc(e,a);function u(h){const f={from:a,to:s,velocity:r.velocity?r.velocity:n.getVelocity(),onUpdate:m=>n.set(m)};return l.type==="inertia"||l.type==="decay"?kC({...f,...l}):od({...t4(l,f,e),onUpdate:m=>{f.onUpdate(m),l.onUpdate&&l.onUpdate(m)},onComplete:()=>{r.onComplete&&r.onComplete(),o&&o(),h&&h()}})}function p(h){return n.set(s),r.onComplete&&r.onComplete(),o&&o(),h&&h(),{stop:()=>{}}}return!c||!i||l.type===!1?p:u}function o4(){const{motionValues:e,stop:n,get:s}=WC();return{motionValues:e,stop:n,push:(o,l,a,i={},c)=>{const u=a[o],p=s(o,u,a);if(i&&i.immediate){p.set(l);return}const h=r4(o,p,l,i,c);p.start(h)}}}function l4(e,n={},{motionValues:s,push:r,stop:o}=o4()){const l=w(n),a=q(!1),i=fe(s,f=>{a.value=Object.values(f).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0}),c=f=>{if(!l||!l[f])throw new Error(`The variant ${f} does not exist.`);return l[f]},u=f=>(typeof f=="string"&&(f=c(f)),Promise.all(Object.entries(f).map(([m,g])=>{if(m!=="transition")return new Promise(x=>{r(m,g,e,f.transition||_d(m,f[m]),x)})}).filter(Boolean)));return{isAnimating:a,apply:u,set:f=>{const m=Ir(f)?f:c(f);Object.entries(m).forEach(([g,x])=>{g!=="transition"&&r(g,x,e,{immediate:!0})})},stopTransitions:()=>{i(),o()},leave:async f=>{let m;if(l&&(l.leave&&(m=l.leave),!l.leave&&l.initial&&(m=l.initial)),!m){f();return}await u(m),f()}}}const ka=typeof window!="undefined",a4=()=>ka&&window.onpointerdown===null,i4=()=>ka&&window.ontouchstart===null,c4=()=>ka&&window.onmousedown===null;function u4({target:e,state:n,variants:s,apply:r}){const o=w(s),l=[],a=(...g)=>{const x=Be.apply(null,g);return l.push(x),x},i=q(!1),c=q(!1),u=q(!1),p=S(()=>{let g=[];return o&&(o.hovered&&(g=[...g,...Object.keys(o.hovered)]),o.tapped&&(g=[...g,...Object.keys(o.tapped)]),o.focused&&(g=[...g,...Object.keys(o.focused)])),g}),h=S(()=>{const g={};Object.assign(g,n.value),i.value&&o.hovered&&Object.assign(g,o.hovered),c.value&&o.tapped&&Object.assign(g,o.tapped),u.value&&o.focused&&Object.assign(g,o.focused);for(const x in g)p.value.includes(x)||delete g[x];return g});o.hovered&&(a(e,"mouseenter",()=>{i.value=!0}),a(e,"mouseleave",()=>{i.value=!1,c.value=!1}),a(e,"mouseout",()=>{i.value=!1,c.value=!1})),o.tapped&&(c4()&&(a(e,"mousedown",()=>{c.value=!0}),a(e,"mouseup",()=>{c.value=!1})),a4()&&(a(e,"pointerdown",()=>{c.value=!0}),a(e,"pointerup",()=>{c.value=!1})),i4()&&(a(e,"touchstart",()=>{c.value=!0}),a(e,"touchend",()=>{c.value=!1}))),o.focused&&(a(e,"focus",()=>{u.value=!0}),a(e,"blur",()=>{u.value=!1}));const f=fe(h,r);return{stop:()=>{l.forEach(g=>g()),f()}}}function p4({set:e,target:n,variants:s,variant:r}){const o=w(s);return{stop:fe(()=>n,()=>{!o||(o.initial&&e("initial"),o.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}}function d4({state:e,apply:n}){return{stop:fe(e,r=>{r&&n(r)},{immediate:!0})}}function f4({target:e,variants:n,variant:s}){const r=w(n);let o=fn;if(r&&(r.visible||r.visibleOnce)){const{stop:l}=Ly(e,([{isIntersecting:a}])=>{r.visible?a?s.value="visible":s.value="initial":r.visibleOnce&&(a?s.value!=="visibleOnce"&&(s.value="visibleOnce"):s.value||(s.value="initial"))});o=l}return{stop:o}}function h4(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const s=q([]);if(n.lifeCycleHooks){const{stop:o}=p4(e);s.value.push(o)}if(n.syncVariants){const{stop:o}=d4(e);s.value.push(o)}if(n.visibilityHooks){const{stop:o}=f4(e);s.value.push(o)}if(n.eventListeners){const{stop:o}=u4(e);s.value.push(o)}const r=()=>s.value.forEach(o=>o());return ea(r),{stop:r}}function wd(e={}){const n=Ie({...e}),s=q({});return fe(n,()=>{const r={};for(const[o,l]of Object.entries(n)){const a=Ba(o),i=bd(l,a);r[o]=i}s.value=r},{immediate:!0,deep:!0}),{state:n,style:s}}const m4=["","X","Y","Z"],y4=["perspective","translate","scale","rotate","skew"],xd=["transformPerspective","x","y","z"];y4.forEach(e=>{m4.forEach(n=>{const s=e+n;xd.push(s)})});const g4=new Set(xd);function $a(e){return g4.has(e)}const _4=new Set(["originX","originY","originZ"]);function Ad(e){return _4.has(e)}function v4(e){const n={},s={};return Object.entries(e).forEach(([r,o])=>{$a(r)||Ad(r)?n[r]=o:s[r]=o}),{transform:n,style:s}}function b4(e,n){let s,r;const{state:o,style:l}=wd(),a=fe(()=>rt(e),u=>{if(!!u){r=u;for(const p of Object.keys(vd))u.style[p]===null||u.style[p]===""||$a(p)||Ad(p)||it(o,p,u.style[p]);s&&Object.entries(s).forEach(([p,h])=>it(u.style,p,h)),n&&n(o)}},{immediate:!0}),i=fe(l,u=>{if(!r){s=u;return}for(const p in u)it(r.style,p,u[p])},{immediate:!0});return{style:o,stop:()=>{r=void 0,s=void 0,a(),i()}}}const w4={x:"translateX",y:"translateY",z:"translateZ"};function Bd(e={},n=!0){const s=Ie({...e}),r=q("");return fe(s,o=>{let l="",a=!1;n&&(o.x||o.y||o.z)&&(l+=`translate3d(${[o.x||0,o.y||0,o.z||0].map(ce.transform).join(",")}) `,a=!0);for(const[i,c]of Object.entries(o)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const u=Ba(i),p=bd(c,u);l+=`${w4[i]||i}(${p}) `}n&&!a&&(l+="translateZ(0px) "),r.value=l.trim()},{immediate:!0,deep:!0}),{state:s,transform:r}}function x4(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const s=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return n.reduce((r,o)=>{if(!o)return r;const[l,a]=o.split("("),c=a.split(",").map(p=>s(p.endsWith(")")?p.replace(")",""):p.trim())),u=c.length===1?c[0]:c;return{...r,[l]:u}},{})}function A4(e,n){Object.entries(x4(n)).forEach(([s,r])=>{r=parseFloat(r);const o=["x","y","z"];if(s==="translate3d"){if(r===0){o.forEach(l=>{it(e,l,0)});return}r.forEach((l,a)=>{it(e,o[a],l)});return}if(s==="translateX"){it(e,"x",r);return}if(s==="translateY"){it(e,"y",r);return}if(s==="translateZ"){it(e,"z",r);return}it(e,s,r)})}function B4(e,n){let s,r;const{state:o,transform:l}=Bd(),a=fe(()=>rt(e),u=>{!u||(r=u,u.style.transform&&A4(o,u.style.transform),s&&(u.style.transform=s),n&&n(o))},{immediate:!0}),i=fe(l,u=>{if(!r){s=u;return}r.style.transform=u},{immediate:!0});return{transform:o,stop:()=>{s=void 0,r=void 0,a(),i()}}}function k4(e,n){const s=Ie({}),r=h=>{Object.entries(h).forEach(([f,m])=>{it(s,f,m)})},{style:o,stop:l}=b4(e,r),{transform:a,stop:i}=B4(e,r),c=fe(s,h=>{Object.entries(h).forEach(([f,m])=>{const g=$a(f)?a:o;g[f]&&g[f]===m||it(g,f,m)})},{immediate:!0,deep:!0}),u=fe(()=>rt(e),h=>{!h||n&&r(n)},{immediate:!0});return{motionProperties:s,style:o,transform:a,stop:()=>{l(),i(),c(),u()}}}function $4(e={}){const n=w(e),s=q();return{state:S(()=>{if(!!s.value)return n[s.value]}),variant:s}}function C4(e,n={},s){const{motionProperties:r,stop:o}=k4(e),{variant:l,state:a}=$4(n),i=l4(r,n),c={target:e,variant:l,variants:n,state:a,motionProperties:r,...i,stop:(p=!1)=>{}},{stop:u}=h4(c,s);return c.stop=(p=!1)=>{const h=()=>{c.stopTransitions(),o(),u()};if(!p&&n.value&&n.value.leave){const f=fe(c.isAnimating,m=>{m||(f(),h())})}else h()},ea(()=>c.stop()),Jm(()=>rt(e),p=>{!p||p!=null&&p.motionInstance&&(c.stop(),Object.assign(c,p.motionInstance))}),c}const E4=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],D4=(e,n)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&Ir(s.variants)&&(n.value={...n.value,...s.variants}),E4.forEach(r=>{if(r==="delay"){if(s&&s[r]&&Om(s[r])){const o=s[r];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={...n.value.enter.transition,delay:o}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={...n.value.visible.transition,delay:o}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={...n.value.visibleOnce.transition,delay:o}))}return}r==="visible-once"&&(r="visibleOnce"),s&&s[r]&&Ir(s[r])&&(n.value[r]=s[r])}))},jo=e=>{const n=(r,o,l)=>{const a=o.value&&typeof o.value=="string"?o.value:l.key;a&&Lo[a]&&Lo[a].stop();const i=q(e||{});typeof o.value=="object"&&(i.value=o.value),D4(l,i);const c=C4(r,i);r.motionInstance=c,a&&it(Lo,a,c)},s=r=>{r.motionInstance&&r.motionInstance.stop()};return{created:n,unmounted:s,bind:n,unbind:s,getSSRProps(r,o){const{initial:l}=r.value||o&&o.props||{},a=h$((e==null?void 0:e.initial)||{},l||{});if(!a||Object.keys(a).length===0)return;const{transform:i,style:c}=v4(a),{transform:u}=Bd(i),{style:p}=wd(c);return u.value&&(p.value.transform=u.value),{style:p.value}}}},S4={initial:{opacity:0},enter:{opacity:1}},T4={initial:{opacity:0},visible:{opacity:1}},O4={initial:{opacity:0},visibleOnce:{opacity:1}},N4={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},F4={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},M4={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},P4={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},I4={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},L4={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},R4={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},H4={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},j4={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},z4={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},V4={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},U4={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},q4={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},W4={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},K4={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Y4={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},G4={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Z4={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Q4={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},X4={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},J4={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},e6={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},t6={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},n6={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},s6={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},r6={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},o6={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},xc={__proto__:null,fade:S4,fadeVisible:T4,fadeVisibleOnce:O4,pop:N4,popVisible:F4,popVisibleOnce:M4,rollBottom:q4,rollLeft:P4,rollRight:R4,rollTop:z4,rollVisibleBottom:W4,rollVisibleLeft:I4,rollVisibleRight:H4,rollVisibleTop:V4,rollVisibleOnceBottom:K4,rollVisibleOnceLeft:L4,rollVisibleOnceRight:j4,rollVisibleOnceTop:U4,slideBottom:s6,slideLeft:Y4,slideRight:Q4,slideTop:e6,slideVisibleBottom:r6,slideVisibleLeft:G4,slideVisibleRight:X4,slideVisibleTop:t6,slideVisibleOnceBottom:o6,slideVisibleOnceLeft:Z4,slideVisibleOnceRight:J4,slideVisibleOnceTop:n6};function l6(e){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(r,o=>s.charAt(n.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const a6={install(e,n){if(e.directive("motion",jo()),!n||n&&!n.excludePresets)for(const s in xc){const r=xc[s];e.directive(`motion-${l6(s)}`,jo(r))}if(n&&n.directives)for(const s in n.directives){const r=n.directives[s];r.initial,e.directive(`motion-${s}`,jo(r))}}},Ca="vue-starport-injection",kd="vue-starport-options",i6={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},$d={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var c6=Object.defineProperty,Wr=Object.getOwnPropertySymbols,Cd=Object.prototype.hasOwnProperty,Ed=Object.prototype.propertyIsEnumerable,Ac=(e,n,s)=>n in e?c6(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,u6=(e,n)=>{for(var s in n||(n={}))Cd.call(n,s)&&Ac(e,s,n[s]);if(Wr)for(var s of Wr(n))Ed.call(n,s)&&Ac(e,s,n[s]);return e},Bc=(e,n)=>{var s={};for(var r in e)Cd.call(e,r)&&n.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&Wr)for(var r of Wr(e))n.indexOf(r)<0&&Ed.call(e,r)&&(s[r]=e[r]);return s};const p6=$e({name:"StarportProxy",props:u6({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},$d),setup(e,n){const s=F(Ca),r=S(()=>s.getInstance(e.port,e.component)),o=q(),l=r.value.generateId(),a=q(!1);return r.value.isVisible||(r.value.land(),a.value=!0),ds(async()=>{r.value.el||(r.value.el=o.value,await Ge(),a.value=!0,r.value.rect.update())}),ro(async()=>{r.value.rect.update(),r.value.liftOff(),r.value.el=void 0,a.value=!1,!r.value.options.keepAlive&&(await Ge(),await Ge(),!r.value.el&&s.dispose(r.value.port))}),fe(()=>e,async()=>{r.value.props&&await Ge();const i=e,{props:c}=i,u=Bc(i,["props"]);r.value.props=c||{},r.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:u}=i,p=Bc(i,["initialProps","mountedProps"]),h=Re(p,(a.value?u:c)||{});return gt("div",Re(h,{id:l,ref:o,"data-starport-proxy":r.value.componentId,"data-starport-landed":r.value.isLanded?"true":void 0,"data-starport-floating":r.value.isLanded?void 0:"true"}),n.slots.default?gt(n.slots.default):void 0)}}});var d6=Object.defineProperty,f6=Object.defineProperties,h6=Object.getOwnPropertyDescriptors,kc=Object.getOwnPropertySymbols,m6=Object.prototype.hasOwnProperty,y6=Object.prototype.propertyIsEnumerable,$c=(e,n,s)=>n in e?d6(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,g6=(e,n)=>{for(var s in n||(n={}))m6.call(n,s)&&$c(e,s,n[s]);if(kc)for(var s of kc(n))y6.call(n,s)&&$c(e,s,n[s]);return e},_6=(e,n)=>f6(e,h6(n));const v6=$e({name:"Starport",inheritAttrs:!0,props:$d,setup(e,n){const s=q(!1);return ds(()=>{s.value=!0}),()=>{var a,i;const r=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!r)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(r.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${r.length}`);const o=r[0];let l=o.type;return(!Ir(l)||os(l))&&(l={render(){return r}}),gt(p6,_6(g6({},e),{key:e.port,component:Xr(l),props:o.props}))}}});function b6(e){const n=Ie({height:0,width:0,left:0,top:0,update:r,listen:l,pause:a,margin:"0px",padding:"0px"}),s=ct?document.documentElement||document.body:void 0;function r(){if(!ct)return;const i=rt(e);if(!i)return;const{height:c,width:u,left:p,top:h}=i.getBoundingClientRect(),f=window.getComputedStyle(i),m=f.margin,g=f.padding;Object.assign(n,{height:c,width:u,left:p,top:s.scrollTop+h,margin:m,padding:g})}const o=Uu(r,{immediate:!1});function l(){!ct||(r(),o.resume())}function a(){o.pause()}return n}let w6=(e,n=21)=>(s=n)=>{let r="",o=s;for(;o--;)r+=e[Math.random()*e.length|0];return r};const Cc=w6("abcdefghijklmnopqrstuvwxyz",5);function Ec(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function x6(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var A6=Object.defineProperty,Dc=Object.getOwnPropertySymbols,B6=Object.prototype.hasOwnProperty,k6=Object.prototype.propertyIsEnumerable,Sc=(e,n,s)=>n in e?A6(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,zo=(e,n)=>{for(var s in n||(n={}))B6.call(n,s)&&Sc(e,s,n[s]);if(Dc)for(var s of Dc(n))k6.call(n,s)&&Sc(e,s,n[s]);return e};function $6(e,n,s={}){const r=x6(n),o=Ec(r)||Cc(),l=q(),a=q(null),i=q(!1),c=q(!1),u=zd(!0),p=q({}),h=S(()=>zo(zo(zo({},i6),s),p.value)),f=q(0);let m;u.run(()=>{m=b6(l),fe(l,async E=>{E&&(c.value=!0),await Ge(),l.value||(c.value=!1)})});const g=Ec(e);function x(){return`starport-${o}-${g}-${Cc()}`}const b=x();return Ie({el:l,id:b,port:e,props:a,rect:m,scope:u,isLanded:i,isVisible:c,options:h,liftOffTime:f,component:n,componentName:r,componentId:o,generateId:x,setLocalOptions(E={}){p.value=JSON.parse(JSON.stringify(E))},elRef(){return l},liftOff(){!i.value||(i.value=!1,f.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function C6(e){const n=Ie(new Map);function s(o,l){let a=n.get(o);return a||(a=$6(o,l,e),n.set(o,a)),a.component=l,a}function r(o){var l;(l=n.get(o))==null||l.scope.stop(),n.delete(o)}return{portMap:n,dispose:r,getInstance:s}}var E6=Object.defineProperty,D6=Object.defineProperties,S6=Object.getOwnPropertyDescriptors,Tc=Object.getOwnPropertySymbols,T6=Object.prototype.hasOwnProperty,O6=Object.prototype.propertyIsEnumerable,Oc=(e,n,s)=>n in e?E6(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,N6=(e,n)=>{for(var s in n||(n={}))T6.call(n,s)&&Oc(e,s,n[s]);if(Tc)for(var s of Tc(n))O6.call(n,s)&&Oc(e,s,n[s]);return e},F6=(e,n)=>D6(e,S6(n));const M6=$e({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=F(Ca);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=S(()=>n.getInstance(e.port,e.component)),r=S(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),o=S(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?F6(N6({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),u)}),l={};return()=>{const a=!!(s.value.isLanded&&s.value.el);return gt("div",{style:o.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},gt(yh,{to:a?`#${r.value}`:"body",disabled:!a},gt(s.value.component,Re(l,s.value.props))))}}}),P6=$e({name:"StarportCarrier",setup(e,{slots:n}){const s=C6(F(kd,{}));return In().appContext.app.provide(Ca,s),()=>{var o;return[(o=n.default)==null?void 0:o.call(n),Array.from(s.portMap.entries()).map(([l,{component:a}])=>gt(M6,{key:l,port:l,component:a}))]}}});function I6(e={}){return{install(n){n.provide(kd,e),n.component("Starport",v6),n.component("StarportCarrier",P6)}}}function L6(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(a6),e.app.use(I6({keepAlive:!0}))}function pt(e,n,s){var r,o;return(o=((r=e.instance)==null?void 0:r.$).provides[n])!=null?o:s}function R6(){return{install(e){e.directive("click",{name:"v-click",mounted(n,s){var p,h,f,m;if(Ls.value||((p=pt(s,Fs))==null?void 0:p.value))return;const r=pt(s,kn),o=pt(s,Ns),l=pt(s,ll),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((h=r==null?void 0:r.value)==null?void 0:h.length)||0,u=i?mm:Ao;if(r&&!((f=r==null?void 0:r.value)!=null&&f.includes(n))&&r.value.push(n),s.value===null&&(s.value=r==null?void 0:r.value.length),!(l!=null&&l.value.has(s.value)))l==null||l.value.set(s.value,[n]);else if(!((m=l==null?void 0:l.value.get(s.value))!=null&&m.includes(n))){const g=(l==null?void 0:l.value.get(s.value))||[];l==null||l.value.set(s.value,[n].concat(g))}n==null||n.classList.toggle(An,!0),o&&fe(o,()=>{var E;const g=(E=o==null?void 0:o.value)!=null?E:0,x=s.value!=null?g>=s.value:g>c;n.classList.contains(Bo)||n.classList.toggle(u,!x),a!==!1&&a!==void 0&&n.classList.toggle(u,x),n.classList.toggle(vs,!1);const b=l==null?void 0:l.value.get(g);b==null||b.forEach((k,$)=>{k.classList.toggle(_r,!1),$===b.length-1?k.classList.toggle(vs,!0):k.classList.toggle(_r,!0)}),n.classList.contains(vs)||n.classList.toggle(_r,x)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(An,!1);const r=pt(s,kn);r!=null&&r.value&&al(r.value,n)}}),e.directive("after",{name:"v-after",mounted(n,s){var i,c;if(Ls.value||((i=pt(s,Fs))==null?void 0:i.value))return;const r=pt(s,kn),o=pt(s,Ns),l=pt(s,ll),a=r==null?void 0:r.value.length;s.value===void 0&&(s.value=r==null?void 0:r.value.length),l!=null&&l.value.has(s.value)?(c=l==null?void 0:l.value.get(s.value))==null||c.push(n):l==null||l.value.set(s.value,[n]),n==null||n.classList.toggle(An,!0),o&&fe(o,()=>{var p,h,f;const u=((p=o.value)!=null?p:0)>=((f=(h=s.value)!=null?h:a)!=null?f:0);n.classList.contains(Bo)||n.classList.toggle(Ao,!u),n.classList.toggle(vs,!1),n.classList.contains(vs)||n.classList.toggle(_r,u)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(An,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,c;if(Ls.value||((a=pt(s,Fs))==null?void 0:a.value))return;const r=pt(s,kn),o=pt(s,Ns),l=((i=r==null?void 0:r.value)==null?void 0:i.length)||0;r&&!((c=r==null?void 0:r.value)!=null&&c.includes(n))&&r.value.push(n),n==null||n.classList.toggle(An,!0),o&&fe(o,()=>{var h;const u=(h=o==null?void 0:o.value)!=null?h:0,p=s.value!=null?u>=s.value:u>l;n.classList.toggle(Ao,p),n.classList.toggle(Bo,p)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(An,!1);const r=pt(s,kn);r!=null&&r.value&&al(r.value,n)}})}}}function H6(e,n){const s=_p(e),r=vp(n,s.currentRoute,s.currentPage);return{nav:{...s,...r,downloadPDF:xl,next:hn,nextSlide:er,openInEditor:u$,prev:mn,prevSlide:tr},configs:xe,themeConfigs:S(()=>xe.themeConfig)}}function j6(){return{install(e){const n=H6(tn,Ft);e.provide(L,Ie(n))}}}const ms=Qh(d$);ms.use(vt);ms.use(um());ms.use(R6());ms.use(j6());L6({app:ms,router:vt});ms.mount("#app");export{Bs as $,A,dp as B,de as C,o0 as D,Ue as E,Ep as F,dv as G,st as H,ke as I,sv as J,Ce as K,Ft as L,zr as M,o$ as N,Oo as O,ko as P,Qs as Q,So as R,g0 as S,oa as T,la as U,z6 as V,V6 as W,Pt as X,U6 as Y,qt as Z,mp as _,t as a,vr as a0,lr as a1,_l as a2,F_ as a3,M_ as a4,P_ as a5,L_ as a6,Ee as a7,Ou as a8,Y6 as a9,zt as aa,ot as ab,Wv as ac,Dn as ad,Fu as ae,R_ as af,ro as ag,S as b,O as c,$e as d,L as e,ht as f,H as g,w as h,F as i,K_ as j,c$ as k,xe as l,dm as m,Le as n,_ as o,ds as p,Ie as q,q as r,q6 as s,kt as t,W6 as u,K6 as v,fe as w,C as x,Je as y,Pu as z};
