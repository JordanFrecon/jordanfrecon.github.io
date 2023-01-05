const Pu=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}};Pu();function zr(e,n){const l=Object.create(null),o=e.split(",");for(let t=0;t<o.length;t++)l[o[t]]=!0;return n?t=>!!l[t.toLowerCase()]:t=>!!l[t]}const Lu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tu=zr(Lu);function ji(e){return!!e||e===""}function Js(e){if(rs(e)){const n={};for(let l=0;l<e.length;l++){const o=e[l],t=Rs(o)?Ru(o):Js(o);if(t)for(const a in t)n[a]=t[a]}return n}else{if(Rs(e))return e;if(Us(e))return e}}const Mu=/;(?![^(]*\))/g,ju=/:(.+)/;function Ru(e){const n={};return e.split(Mu).forEach(l=>{if(l){const o=l.split(ju);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function js(e){let n="";if(Rs(e))n=e;else if(rs(e))for(let l=0;l<e.length;l++){const o=js(e[l]);o&&(n+=o+" ")}else if(Us(e))for(const l in e)e[l]&&(n+=l+" ");return n.trim()}function q(e){if(!e)return null;let{class:n,style:l}=e;return n&&!Rs(n)&&(e.class=js(n)),l&&(e.style=Js(l)),e}const Ee=e=>Rs(e)?e:e==null?"":rs(e)||Us(e)&&(e.toString===Hi||!ys(e.toString))?JSON.stringify(e,Ri,2):String(e),Ri=(e,n)=>n&&n.__v_isRef?Ri(e,n.value):Xn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((l,[o,t])=>(l[`${o} =>`]=t,l),{})}:Ii(n)?{[`Set(${n.size})`]:[...n.values()]}:Us(n)&&!rs(n)&&!Vi(n)?String(n):n,zs={},Zn=[],Se=()=>{},Iu=()=>!1,Nu=/^on[^a-z]/,Ko=e=>Nu.test(e),Pr=e=>e.startsWith("onUpdate:"),te=Object.assign,Lr=(e,n)=>{const l=e.indexOf(n);l>-1&&e.splice(l,1)},Hu=Object.prototype.hasOwnProperty,Cs=(e,n)=>Hu.call(e,n),rs=Array.isArray,Xn=e=>Yo(e)==="[object Map]",Ii=e=>Yo(e)==="[object Set]",ys=e=>typeof e=="function",Rs=e=>typeof e=="string",Tr=e=>typeof e=="symbol",Us=e=>e!==null&&typeof e=="object",Ni=e=>Us(e)&&ys(e.then)&&ys(e.catch),Hi=Object.prototype.toString,Yo=e=>Hi.call(e),Vu=e=>Yo(e).slice(8,-1),Vi=e=>Yo(e)==="[object Object]",Mr=e=>Rs(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,go=zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Go=e=>{const n=Object.create(null);return l=>n[l]||(n[l]=e(l))},Wu=/-(\w)/g,Ve=Go(e=>e.replace(Wu,(n,l)=>l?l.toUpperCase():"")),Uu=/\B([A-Z])/g,Tn=Go(e=>e.replace(Uu,"-$1").toLowerCase()),Zo=Go(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bt=Go(e=>e?`on${Zo(e)}`:""),Vl=(e,n)=>!Object.is(e,n),Jn=(e,n)=>{for(let l=0;l<e.length;l++)e[l](n)},Oo=(e,n,l)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:l})},Ht=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Pa;const qu=()=>Pa||(Pa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ue;class Wi{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&ue&&(this.parent=ue,this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}run(n){if(this.active){const l=ue;try{return ue=this,n()}finally{ue=l}}}on(){ue=this}off(){ue=this.parent}stop(n){if(this.active){let l,o;for(l=0,o=this.effects.length;l<o;l++)this.effects[l].stop();for(l=0,o=this.cleanups.length;l<o;l++)this.cleanups[l]();if(this.scopes)for(l=0,o=this.scopes.length;l<o;l++)this.scopes[l].stop(!0);if(this.parent&&!n){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function Ku(e){return new Wi(e)}function Yu(e,n=ue){n&&n.active&&n.effects.push(e)}function Gu(){return ue}function Zu(e){ue&&ue.cleanups.push(e)}const jr=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Ui=e=>(e.w&Bn)>0,qi=e=>(e.n&Bn)>0,Xu=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Bn},Ju=e=>{const{deps:n}=e;if(n.length){let l=0;for(let o=0;o<n.length;o++){const t=n[o];Ui(t)&&!qi(t)?t.delete(e):n[l++]=t,t.w&=~Bn,t.n&=~Bn}n.length=l}},Vt=new WeakMap;let bl=0,Bn=1;const Wt=30;let $e;const On=Symbol(""),Ut=Symbol("");class Rr{constructor(n,l=null,o){this.fn=n,this.scheduler=l,this.active=!0,this.deps=[],this.parent=void 0,Yu(this,o)}run(){if(!this.active)return this.fn();let n=$e,l=cn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=$e,$e=this,cn=!0,Bn=1<<++bl,bl<=Wt?Xu(this):La(this),this.fn()}finally{bl<=Wt&&Ju(this),Bn=1<<--bl,$e=this.parent,cn=l,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(La(this),this.onStop&&this.onStop(),this.active=!1)}}function La(e){const{deps:n}=e;if(n.length){for(let l=0;l<n.length;l++)n[l].delete(e);n.length=0}}let cn=!0;const Ki=[];function il(){Ki.push(cn),cn=!1}function pl(){const e=Ki.pop();cn=e===void 0?!0:e}function Ce(e,n,l){if(cn&&$e){let o=Vt.get(e);o||Vt.set(e,o=new Map);let t=o.get(l);t||o.set(l,t=jr()),Yi(t)}}function Yi(e,n){let l=!1;bl<=Wt?qi(e)||(e.n|=Bn,l=!Ui(e)):l=!e.has($e),l&&(e.add($e),$e.deps.push(e))}function Xe(e,n,l,o,t,a){const c=Vt.get(e);if(!c)return;let i=[];if(n==="clear")i=[...c.values()];else if(l==="length"&&rs(e))c.forEach((p,y)=>{(y==="length"||y>=o)&&i.push(p)});else switch(l!==void 0&&i.push(c.get(l)),n){case"add":rs(e)?Mr(l)&&i.push(c.get("length")):(i.push(c.get(On)),Xn(e)&&i.push(c.get(Ut)));break;case"delete":rs(e)||(i.push(c.get(On)),Xn(e)&&i.push(c.get(Ut)));break;case"set":Xn(e)&&i.push(c.get(On));break}if(i.length===1)i[0]&&qt(i[0]);else{const p=[];for(const y of i)y&&p.push(...y);qt(jr(p))}}function qt(e,n){const l=rs(e)?e:[...e];for(const o of l)o.computed&&Ta(o);for(const o of l)o.computed||Ta(o)}function Ta(e,n){(e!==$e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Qu=zr("__proto__,__v_isRef,__isVue"),Gi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Tr)),s8=Ir(),e8=Ir(!1,!0),n8=Ir(!0),Ma=l8();function l8(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...l){const o=bs(this);for(let a=0,c=this.length;a<c;a++)Ce(o,"get",a+"");const t=o[n](...l);return t===-1||t===!1?o[n](...l.map(bs)):t}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...l){il();const o=bs(this)[n].apply(this,l);return pl(),o}}),e}function Ir(e=!1,n=!1){return function(o,t,a){if(t==="__v_isReactive")return!e;if(t==="__v_isReadonly")return e;if(t==="__v_isShallow")return n;if(t==="__v_raw"&&a===(e?n?C8:sp:n?Qi:Ji).get(o))return o;const c=rs(o);if(!e&&c&&Cs(Ma,t))return Reflect.get(Ma,t,a);const i=Reflect.get(o,t,a);return(Tr(t)?Gi.has(t):Qu(t))||(e||Ce(o,"get",t),n)?i:ws(i)?c&&Mr(t)?i:i.value:Us(i)?e?Yn(i):Ms(i):i}}const o8=Zi(),t8=Zi(!0);function Zi(e=!1){return function(l,o,t,a){let c=l[o];if(Wl(c)&&ws(c)&&!ws(t))return!1;if(!e&&!Wl(t)&&(Kt(t)||(t=bs(t),c=bs(c)),!rs(l)&&ws(c)&&!ws(t)))return c.value=t,!0;const i=rs(l)&&Mr(o)?Number(o)<l.length:Cs(l,o),p=Reflect.set(l,o,t,a);return l===bs(a)&&(i?Vl(t,c)&&Xe(l,"set",o,t):Xe(l,"add",o,t)),p}}function r8(e,n){const l=Cs(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&l&&Xe(e,"delete",n,void 0),o}function a8(e,n){const l=Reflect.has(e,n);return(!Tr(n)||!Gi.has(n))&&Ce(e,"has",n),l}function c8(e){return Ce(e,"iterate",rs(e)?"length":On),Reflect.ownKeys(e)}const Xi={get:s8,set:o8,deleteProperty:r8,has:a8,ownKeys:c8},i8={get:n8,set(e,n){return!0},deleteProperty(e,n){return!0}},p8=te({},Xi,{get:e8,set:t8}),Nr=e=>e,Xo=e=>Reflect.getPrototypeOf(e);function yo(e,n,l=!1,o=!1){e=e.__v_raw;const t=bs(e),a=bs(n);l||(n!==a&&Ce(t,"get",n),Ce(t,"get",a));const{has:c}=Xo(t),i=o?Nr:l?Wr:Ul;if(c.call(t,n))return i(e.get(n));if(c.call(t,a))return i(e.get(a));e!==t&&e.get(n)}function uo(e,n=!1){const l=this.__v_raw,o=bs(l),t=bs(e);return n||(e!==t&&Ce(o,"has",e),Ce(o,"has",t)),e===t?l.has(e):l.has(e)||l.has(t)}function fo(e,n=!1){return e=e.__v_raw,!n&&Ce(bs(e),"iterate",On),Reflect.get(e,"size",e)}function ja(e){e=bs(e);const n=bs(this);return Xo(n).has.call(n,e)||(n.add(e),Xe(n,"add",e,e)),this}function Ra(e,n){n=bs(n);const l=bs(this),{has:o,get:t}=Xo(l);let a=o.call(l,e);a||(e=bs(e),a=o.call(l,e));const c=t.call(l,e);return l.set(e,n),a?Vl(n,c)&&Xe(l,"set",e,n):Xe(l,"add",e,n),this}function Ia(e){const n=bs(this),{has:l,get:o}=Xo(n);let t=l.call(n,e);t||(e=bs(e),t=l.call(n,e)),o&&o.call(n,e);const a=n.delete(e);return t&&Xe(n,"delete",e,void 0),a}function Na(){const e=bs(this),n=e.size!==0,l=e.clear();return n&&Xe(e,"clear",void 0,void 0),l}function Bo(e,n){return function(o,t){const a=this,c=a.__v_raw,i=bs(c),p=n?Nr:e?Wr:Ul;return!e&&Ce(i,"iterate",On),c.forEach((y,u)=>o.call(t,p(y),p(u),a))}}function Ao(e,n,l){return function(...o){const t=this.__v_raw,a=bs(t),c=Xn(a),i=e==="entries"||e===Symbol.iterator&&c,p=e==="keys"&&c,y=t[e](...o),u=l?Nr:n?Wr:Ul;return!n&&Ce(a,"iterate",p?Ut:On),{next(){const{value:f,done:d}=y.next();return d?{value:f,done:d}:{value:i?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function nn(e){return function(...n){return e==="delete"?!1:this}}function y8(){const e={get(a){return yo(this,a)},get size(){return fo(this)},has:uo,add:ja,set:Ra,delete:Ia,clear:Na,forEach:Bo(!1,!1)},n={get(a){return yo(this,a,!1,!0)},get size(){return fo(this)},has:uo,add:ja,set:Ra,delete:Ia,clear:Na,forEach:Bo(!1,!0)},l={get(a){return yo(this,a,!0)},get size(){return fo(this,!0)},has(a){return uo.call(this,a,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Bo(!0,!1)},o={get(a){return yo(this,a,!0,!0)},get size(){return fo(this,!0)},has(a){return uo.call(this,a,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Ao(a,!1,!1),l[a]=Ao(a,!0,!1),n[a]=Ao(a,!1,!0),o[a]=Ao(a,!0,!0)}),[e,l,n,o]}const[u8,d8,f8,B8]=y8();function Hr(e,n){const l=n?e?B8:f8:e?d8:u8;return(o,t,a)=>t==="__v_isReactive"?!e:t==="__v_isReadonly"?e:t==="__v_raw"?o:Reflect.get(Cs(l,t)&&t in o?l:o,t,a)}const A8={get:Hr(!1,!1)},h8={get:Hr(!1,!0)},m8={get:Hr(!0,!1)},Ji=new WeakMap,Qi=new WeakMap,sp=new WeakMap,C8=new WeakMap;function _8(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function D8(e){return e.__v_skip||!Object.isExtensible(e)?0:_8(Vu(e))}function Ms(e){return Wl(e)?e:Vr(e,!1,Xi,A8,Ji)}function v8(e){return Vr(e,!1,p8,h8,Qi)}function Yn(e){return Vr(e,!0,i8,m8,sp)}function Vr(e,n,l,o,t){if(!Us(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const a=t.get(e);if(a)return a;const c=D8(e);if(c===0)return e;const i=new Proxy(e,c===2?o:l);return t.set(e,i),i}function Qn(e){return Wl(e)?Qn(e.__v_raw):!!(e&&e.__v_isReactive)}function Wl(e){return!!(e&&e.__v_isReadonly)}function Kt(e){return!!(e&&e.__v_isShallow)}function ep(e){return Qn(e)||Wl(e)}function bs(e){const n=e&&e.__v_raw;return n?bs(n):e}function Jo(e){return Oo(e,"__v_skip",!0),e}const Ul=e=>Us(e)?Ms(e):e,Wr=e=>Us(e)?Yn(e):e;function Ur(e){cn&&$e&&(e=bs(e),Yi(e.dep||(e.dep=jr())))}function qr(e,n){e=bs(e),e.dep&&qt(e.dep)}function ws(e){return!!(e&&e.__v_isRef===!0)}function K(e){return np(e,!1)}function We(e){return np(e,!0)}function np(e,n){return ws(e)?e:new g8(e,n)}class g8{constructor(n,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?n:bs(n),this._value=l?n:Ul(n)}get value(){return Ur(this),this._value}set value(n){n=this.__v_isShallow?n:bs(n),Vl(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Ul(n),qr(this))}}function v(e){return ws(e)?e.value:e}const b8={get:(e,n,l)=>v(Reflect.get(e,n,l)),set:(e,n,l,o)=>{const t=e[n];return ws(t)&&!ws(l)?(t.value=l,!0):Reflect.set(e,n,l,o)}};function lp(e){return Qn(e)?e:new Proxy(e,b8)}class E8{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:o}=n(()=>Ur(this),()=>qr(this));this._get=l,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function w8(e){return new E8(e)}function x8(e){const n=rs(e)?new Array(e.length):{};for(const l in e)n[l]=F8(e,l);return n}class k8{constructor(n,l,o){this._object=n,this._key=l,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function F8(e,n,l){const o=e[n];return ws(o)?o:new k8(e,n,l)}class $8{constructor(n,l,o,t){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Rr(n,()=>{this._dirty||(this._dirty=!0,qr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=o}get value(){const n=bs(this);return Ur(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function O8(e,n,l=!1){let o,t;const a=ys(e);return a?(o=e,t=Se):(o=e.get,t=e.set),new $8(o,t,a||!t,l)}function pn(e,n,l,o){let t;try{t=o?e(...o):e()}catch(a){Qo(a,n,l)}return t}function ze(e,n,l,o){if(ys(e)){const a=pn(e,n,l,o);return a&&Ni(a)&&a.catch(c=>{Qo(c,n,l)}),a}const t=[];for(let a=0;a<e.length;a++)t.push(ze(e[a],n,l,o));return t}function Qo(e,n,l,o=!0){const t=n?n.vnode:null;if(n){let a=n.parent;const c=n.proxy,i=l;for(;a;){const y=a.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](e,c,i)===!1)return}a=a.parent}const p=n.appContext.config.errorHandler;if(p){pn(p,null,10,[e,c,i]);return}}S8(e,l,t,o)}function S8(e,n,l,o=!0){console.error(e)}let So=!1,Yt=!1;const Be=[];let Ge=0;const kl=[];let El=null,Wn=0;const Fl=[];let on=null,Un=0;const op=Promise.resolve();let Kr=null,Gt=null;function Ys(e){const n=Kr||op;return e?n.then(this?e.bind(this):e):n}function z8(e){let n=Ge+1,l=Be.length;for(;n<l;){const o=n+l>>>1;ql(Be[o])<e?n=o+1:l=o}return n}function tp(e){(!Be.length||!Be.includes(e,So&&e.allowRecurse?Ge+1:Ge))&&e!==Gt&&(e.id==null?Be.push(e):Be.splice(z8(e.id),0,e),rp())}function rp(){!So&&!Yt&&(Yt=!0,Kr=op.then(ip))}function P8(e){const n=Be.indexOf(e);n>Ge&&Be.splice(n,1)}function ap(e,n,l,o){rs(e)?l.push(...e):(!n||!n.includes(e,e.allowRecurse?o+1:o))&&l.push(e),rp()}function L8(e){ap(e,El,kl,Wn)}function T8(e){ap(e,on,Fl,Un)}function st(e,n=null){if(kl.length){for(Gt=n,El=[...new Set(kl)],kl.length=0,Wn=0;Wn<El.length;Wn++)El[Wn]();El=null,Wn=0,Gt=null,st(e,n)}}function cp(e){if(st(),Fl.length){const n=[...new Set(Fl)];if(Fl.length=0,on){on.push(...n);return}for(on=n,on.sort((l,o)=>ql(l)-ql(o)),Un=0;Un<on.length;Un++)on[Un]();on=null,Un=0}}const ql=e=>e.id==null?1/0:e.id;function ip(e){Yt=!1,So=!0,st(e),Be.sort((l,o)=>ql(l)-ql(o));const n=Se;try{for(Ge=0;Ge<Be.length;Ge++){const l=Be[Ge];l&&l.active!==!1&&pn(l,null,14)}}finally{Ge=0,Be.length=0,cp(),So=!1,Kr=null,(Be.length||kl.length||Fl.length)&&ip(e)}}function M8(e,n,...l){if(e.isUnmounted)return;const o=e.vnode.props||zs;let t=l;const a=n.startsWith("update:"),c=a&&n.slice(7);if(c&&c in o){const u=`${c==="modelValue"?"model":c}Modifiers`,{number:f,trim:d}=o[u]||zs;d&&(t=l.map(B=>B.trim())),f&&(t=l.map(Ht))}let i,p=o[i=Bt(n)]||o[i=Bt(Ve(n))];!p&&a&&(p=o[i=Bt(Tn(n))]),p&&ze(p,e,6,t);const y=o[i+"Once"];if(y){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,ze(y,e,6,t)}}function pp(e,n,l=!1){const o=n.emitsCache,t=o.get(e);if(t!==void 0)return t;const a=e.emits;let c={},i=!1;if(!ys(e)){const p=y=>{const u=pp(y,n,!0);u&&(i=!0,te(c,u))};!l&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}return!a&&!i?(o.set(e,null),null):(rs(a)?a.forEach(p=>c[p]=null):te(c,a),o.set(e,c),c)}function et(e,n){return!e||!Ko(n)?!1:(n=n.slice(2).replace(/Once$/,""),Cs(e,n[0].toLowerCase()+n.slice(1))||Cs(e,Tn(n))||Cs(e,n))}let Zs=null,nt=null;function zo(e){const n=Zs;return Zs=e,nt=e&&e.type.__scopeId||null,n}function lk(e){nt=e}function ok(){nt=null}function _(e,n=Zs,l){if(!n||e._n)return e;const o=(...t)=>{o._d&&Ja(-1);const a=zo(n),c=e(...t);return zo(a),o._d&&Ja(1),c};return o._n=!0,o._c=!0,o._d=!0,o}function At(e){const{type:n,vnode:l,proxy:o,withProxy:t,props:a,propsOptions:[c],slots:i,attrs:p,emit:y,render:u,renderCache:f,data:d,setupState:B,ctx:h,inheritAttrs:g}=e;let D,k;const w=zo(e);try{if(l.shapeFlag&4){const $=t||o;D=Re(u.call($,$,f,a,B,d,h)),k=p}else{const $=n;D=Re($.length>1?$(a,{attrs:p,slots:i,emit:y}):$(a,null)),k=n.props?p:j8(p)}}catch($){Ol.length=0,Qo($,e,1),D=b(An)}let x=D;if(k&&g!==!1){const $=Object.keys(k),{shapeFlag:N}=x;$.length&&N&7&&(c&&$.some(Pr)&&(k=R8(k,c)),x=Ln(x,k))}return l.dirs&&(x=Ln(x),x.dirs=x.dirs?x.dirs.concat(l.dirs):l.dirs),l.transition&&(x.transition=l.transition),D=x,zo(w),D}const j8=e=>{let n;for(const l in e)(l==="class"||l==="style"||Ko(l))&&((n||(n={}))[l]=e[l]);return n},R8=(e,n)=>{const l={};for(const o in e)(!Pr(o)||!(o.slice(9)in n))&&(l[o]=e[o]);return l};function I8(e,n,l){const{props:o,children:t,component:a}=e,{props:c,children:i,patchFlag:p}=n,y=a.emitsOptions;if(n.dirs||n.transition)return!0;if(l&&p>=0){if(p&1024)return!0;if(p&16)return o?Ha(o,c,y):!!c;if(p&8){const u=n.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(c[d]!==o[d]&&!et(y,d))return!0}}}else return(t||i)&&(!i||!i.$stable)?!0:o===c?!1:o?c?Ha(o,c,y):!0:!!c;return!1}function Ha(e,n,l){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let t=0;t<o.length;t++){const a=o[t];if(n[a]!==e[a]&&!et(l,a))return!0}return!1}function N8({vnode:e,parent:n},l){for(;n&&n.subTree===e;)(e=n.vnode).el=l,n=n.parent}const yp=e=>e.__isSuspense;function H8(e,n){n&&n.pendingBranch?rs(e)?n.effects.push(...e):n.effects.push(e):T8(e)}function fe(e,n){if(qs){let l=qs.provides;const o=qs.parent&&qs.parent.provides;o===l&&(l=qs.provides=Object.create(o)),l[e]=n}}function F(e,n,l=!1){const o=qs||Zs;if(o){const t=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(t&&e in t)return t[e];if(arguments.length>1)return l&&ys(n)?n.call(o.proxy):n}}function oo(e,n){return Yr(e,null,n)}const Va={};function fs(e,n,l){return Yr(e,n,l)}function Yr(e,n,{immediate:l,deep:o,flush:t,onTrack:a,onTrigger:c}=zs){const i=qs;let p,y=!1,u=!1;if(ws(e)?(p=()=>e.value,y=Kt(e)):Qn(e)?(p=()=>e,o=!0):rs(e)?(u=!0,y=e.some(k=>Qn(k)||Kt(k)),p=()=>e.map(k=>{if(ws(k))return k.value;if(Qn(k))return xn(k);if(ys(k))return pn(k,i,2)})):ys(e)?n?p=()=>pn(e,i,2):p=()=>{if(!(i&&i.isUnmounted))return f&&f(),ze(e,i,3,[d])}:p=Se,n&&o){const k=p;p=()=>xn(k())}let f,d=k=>{f=D.onStop=()=>{pn(k,i,4)}};if(Yl)return d=Se,n?l&&ze(n,i,3,[p(),u?[]:void 0,d]):p(),Se;let B=u?[]:Va;const h=()=>{if(!!D.active)if(n){const k=D.run();(o||y||(u?k.some((w,x)=>Vl(w,B[x])):Vl(k,B)))&&(f&&f(),ze(n,i,3,[k,B===Va?void 0:B,d]),B=k)}else D.run()};h.allowRecurse=!!n;let g;t==="sync"?g=h:t==="post"?g=()=>Ks(h,i&&i.suspense):g=()=>L8(h);const D=new Rr(p,g);return n?l?h():B=D.run():t==="post"?Ks(D.run.bind(D),i&&i.suspense):D.run(),()=>{D.stop(),i&&i.scope&&Lr(i.scope.effects,D)}}function V8(e,n,l){const o=this.proxy,t=Rs(e)?e.includes(".")?up(o,e):()=>o[e]:e.bind(o,o);let a;ys(n)?a=n:(a=n.handler,l=n);const c=qs;tl(this);const i=Yr(t,a.bind(o),l);return c?tl(c):Sn(),i}function up(e,n){const l=n.split(".");return()=>{let o=e;for(let t=0;t<l.length&&o;t++)o=o[l[t]];return o}}function xn(e,n){if(!Us(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),ws(e))xn(e.value,n);else if(rs(e))for(let l=0;l<e.length;l++)xn(e[l],n);else if(Ii(e)||Xn(e))e.forEach(l=>{xn(l,n)});else if(Vi(e))for(const l in e)xn(e[l],n);return e}function dp(e,n){e.shapeFlag&6&&e.component?dp(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function xs(e){return ys(e)?{setup:e,name:e.name}:e}const sl=e=>!!e.type.__asyncLoader,fp=e=>e.type.__isKeepAlive,W8={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const l=Mn(),o=l.ctx;if(!o.renderer)return()=>{const w=n.default&&n.default();return w&&w.length===1?w[0]:w};const t=new Map,a=new Set;let c=null;const i=l.suspense,{renderer:{p,m:y,um:u,o:{createElement:f}}}=o,d=f("div");o.activate=(w,x,$,N,T)=>{const X=w.component;y(w,x,$,0,i),p(X.vnode,w,x,$,X,i,N,w.slotScopeIds,T),Ks(()=>{X.isDeactivated=!1,X.a&&Jn(X.a);const is=w.props&&w.props.onVnodeMounted;is&&ve(is,X.parent,w)},i)},o.deactivate=w=>{const x=w.component;y(w,d,null,1,i),Ks(()=>{x.da&&Jn(x.da);const $=w.props&&w.props.onVnodeUnmounted;$&&ve($,x.parent,w),x.isDeactivated=!0},i)};function B(w){ht(w),u(w,l,i,!0)}function h(w){t.forEach((x,$)=>{const N=nr(x.type);N&&(!w||!w(N))&&g($)})}function g(w){const x=t.get(w);!c||x.type!==c.type?B(x):c&&ht(c),t.delete(w),a.delete(w)}fs(()=>[e.include,e.exclude],([w,x])=>{w&&h($=>wl(w,$)),x&&h($=>!wl(x,$))},{flush:"post",deep:!0});let D=null;const k=()=>{D!=null&&t.set(D,mt(l.subTree))};return yl(k),mp(k),ot(()=>{t.forEach(w=>{const{subTree:x,suspense:$}=l,N=mt(x);if(w.type===N.type){ht(N);const T=N.component.da;T&&Ks(T,$);return}B(w)})}),()=>{if(D=null,!n.default)return null;const w=n.default(),x=w[0];if(w.length>1)return c=null,w;if(!ol(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return c=null,x;let $=mt(x);const N=$.type,T=nr(sl($)?$.type.__asyncResolved||{}:N),{include:X,exclude:is,max:Bs}=e;if(X&&(!T||!wl(X,T))||is&&T&&wl(is,T))return c=$,x;const hs=$.key==null?N:$.key,_s=t.get(hs);return $.el&&($=Ln($),x.shapeFlag&128&&(x.ssContent=$)),D=hs,_s?($.el=_s.el,$.component=_s.component,$.transition&&dp($,$.transition),$.shapeFlag|=512,a.delete(hs),a.add(hs)):(a.add(hs),Bs&&a.size>parseInt(Bs,10)&&g(a.values().next().value)),$.shapeFlag|=256,c=$,yp(x.type)?x:$}}},Bp=W8;function wl(e,n){return rs(e)?e.some(l=>wl(l,n)):Rs(e)?e.split(",").includes(n):e.test?e.test(n):!1}function U8(e,n){Ap(e,"a",n)}function q8(e,n){Ap(e,"da",n)}function Ap(e,n,l=qs){const o=e.__wdc||(e.__wdc=()=>{let t=l;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(lt(n,o,l),l){let t=l.parent;for(;t&&t.parent;)fp(t.parent.vnode)&&K8(o,n,l,t),t=t.parent}}function K8(e,n,l,o){const t=lt(n,e,o,!0);tt(()=>{Lr(o[n],t)},l)}function ht(e){let n=e.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),e.shapeFlag=n}function mt(e){return e.shapeFlag&128?e.ssContent:e}function lt(e,n,l=qs,o=!1){if(l){const t=l[e]||(l[e]=[]),a=n.__weh||(n.__weh=(...c)=>{if(l.isUnmounted)return;il(),tl(l);const i=ze(n,l,e,c);return Sn(),pl(),i});return o?t.unshift(a):t.push(a),a}}const Qe=e=>(n,l=qs)=>(!Yl||e==="sp")&&lt(e,n,l),hp=Qe("bm"),yl=Qe("m"),Y8=Qe("bu"),mp=Qe("u"),ot=Qe("bum"),tt=Qe("um"),G8=Qe("sp"),Z8=Qe("rtg"),X8=Qe("rtc");function J8(e,n=qs){lt("ec",e,n)}function _e(e,n){const l=Zs;if(l===null)return e;const o=at(l)||l.proxy,t=e.dirs||(e.dirs=[]);for(let a=0;a<n.length;a++){let[c,i,p,y=zs]=n[a];ys(c)&&(c={mounted:c,updated:c}),c.deep&&xn(i),t.push({dir:c,instance:o,value:i,oldValue:void 0,arg:p,modifiers:y})}return e}function mn(e,n,l,o){const t=e.dirs,a=n&&n.dirs;for(let c=0;c<t.length;c++){const i=t[c];a&&(i.oldValue=a[c].value);let p=i.dir[o];p&&(il(),ze(p,l,8,[e.el,i,e,n]),pl())}}const Cp="components",Q8="directives";function Is(e,n){return _p(Cp,e,!0,n)||e}const sd=Symbol();function hn(e){return _p(Q8,e)}function _p(e,n,l=!0,o=!1){const t=Zs||qs;if(t){const a=t.type;if(e===Cp){const i=nr(a,!1);if(i&&(i===n||i===Ve(n)||i===Zo(Ve(n))))return a}const c=Wa(t[e]||a[e],n)||Wa(t.appContext[e],n);return!c&&o?a:c}}function Wa(e,n){return e&&(e[n]||e[Ve(n)]||e[Zo(Ve(n))])}function to(e,n,l,o){let t;const a=l&&l[o];if(rs(e)||Rs(e)){t=new Array(e.length);for(let c=0,i=e.length;c<i;c++)t[c]=n(e[c],c,void 0,a&&a[c])}else if(typeof e=="number"){t=new Array(e);for(let c=0;c<e;c++)t[c]=n(c+1,c,void 0,a&&a[c])}else if(Us(e))if(e[Symbol.iterator])t=Array.from(e,(c,i)=>n(c,i,void 0,a&&a[i]));else{const c=Object.keys(e);t=new Array(c.length);for(let i=0,p=c.length;i<p;i++){const y=c[i];t[i]=n(e[y],y,i,a&&a[i])}}else t=[];return l&&(l[o]=t),t}function Ue(e,n,l={},o,t){if(Zs.isCE||Zs.parent&&sl(Zs.parent)&&Zs.parent.isCE)return b("slot",n==="default"?null:{name:n},o&&o());let a=e[n];a&&a._c&&(a._d=!1),m();const c=a&&Dp(a(l)),i=P(ks,{key:l.key||`_${n}`},c||(o?o():[]),c&&e._===1?64:-2);return!t&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function Dp(e){return e.some(n=>ol(n)?!(n.type===An||n.type===ks&&!Dp(n.children)):!0)?e:null}const Zt=e=>e?Sp(e)?at(e)||e.proxy:Zt(e.parent):null,Po=te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zt(e.parent),$root:e=>Zt(e.root),$emit:e=>e.emit,$options:e=>gp(e),$forceUpdate:e=>e.f||(e.f=()=>tp(e.update)),$nextTick:e=>e.n||(e.n=Ys.bind(e.proxy)),$watch:e=>V8.bind(e)}),ed={get({_:e},n){const{ctx:l,setupState:o,data:t,props:a,accessCache:c,type:i,appContext:p}=e;let y;if(n[0]!=="$"){const B=c[n];if(B!==void 0)switch(B){case 1:return o[n];case 2:return t[n];case 4:return l[n];case 3:return a[n]}else{if(o!==zs&&Cs(o,n))return c[n]=1,o[n];if(t!==zs&&Cs(t,n))return c[n]=2,t[n];if((y=e.propsOptions[0])&&Cs(y,n))return c[n]=3,a[n];if(l!==zs&&Cs(l,n))return c[n]=4,l[n];Xt&&(c[n]=0)}}const u=Po[n];let f,d;if(u)return n==="$attrs"&&Ce(e,"get",n),u(e);if((f=i.__cssModules)&&(f=f[n]))return f;if(l!==zs&&Cs(l,n))return c[n]=4,l[n];if(d=p.config.globalProperties,Cs(d,n))return d[n]},set({_:e},n,l){const{data:o,setupState:t,ctx:a}=e;return t!==zs&&Cs(t,n)?(t[n]=l,!0):o!==zs&&Cs(o,n)?(o[n]=l,!0):Cs(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(a[n]=l,!0)},has({_:{data:e,setupState:n,accessCache:l,ctx:o,appContext:t,propsOptions:a}},c){let i;return!!l[c]||e!==zs&&Cs(e,c)||n!==zs&&Cs(n,c)||(i=a[0])&&Cs(i,c)||Cs(o,c)||Cs(Po,c)||Cs(t.config.globalProperties,c)},defineProperty(e,n,l){return l.get!=null?e._.accessCache[n]=0:Cs(l,"value")&&this.set(e,n,l.value,null),Reflect.defineProperty(e,n,l)}};let Xt=!0;function nd(e){const n=gp(e),l=e.proxy,o=e.ctx;Xt=!1,n.beforeCreate&&Ua(n.beforeCreate,e,"bc");const{data:t,computed:a,methods:c,watch:i,provide:p,inject:y,created:u,beforeMount:f,mounted:d,beforeUpdate:B,updated:h,activated:g,deactivated:D,beforeDestroy:k,beforeUnmount:w,destroyed:x,unmounted:$,render:N,renderTracked:T,renderTriggered:X,errorCaptured:is,serverPrefetch:Bs,expose:hs,inheritAttrs:_s,components:Ts,directives:Ns,filters:Gs}=n;if(y&&ld(y,o,null,e.appContext.config.unwrapInjectedRef),c)for(const as in c){const os=c[as];ys(os)&&(o[as]=os.bind(l))}if(t){const as=t.call(l,l);Us(as)&&(e.data=Ms(as))}if(Xt=!0,a)for(const as in a){const os=a[as],ms=ys(os)?os.bind(l,l):ys(os.get)?os.get.bind(l,l):Se,Me=!ys(os)&&ys(os.set)?os.set.bind(l):Se,se=O({get:ms,set:Me});Object.defineProperty(o,as,{enumerable:!0,configurable:!0,get:()=>se.value,set:De=>se.value=De})}if(i)for(const as in i)vp(i[as],o,l,as);if(p){const as=ys(p)?p.call(l):p;Reflect.ownKeys(as).forEach(os=>{fe(os,as[os])})}u&&Ua(u,e,"c");function ts(as,os){rs(os)?os.forEach(ms=>as(ms.bind(l))):os&&as(os.bind(l))}if(ts(hp,f),ts(yl,d),ts(Y8,B),ts(mp,h),ts(U8,g),ts(q8,D),ts(J8,is),ts(X8,T),ts(Z8,X),ts(ot,w),ts(tt,$),ts(G8,Bs),rs(hs))if(hs.length){const as=e.exposed||(e.exposed={});hs.forEach(os=>{Object.defineProperty(as,os,{get:()=>l[os],set:ms=>l[os]=ms})})}else e.exposed||(e.exposed={});N&&e.render===Se&&(e.render=N),_s!=null&&(e.inheritAttrs=_s),Ts&&(e.components=Ts),Ns&&(e.directives=Ns)}function ld(e,n,l=Se,o=!1){rs(e)&&(e=Jt(e));for(const t in e){const a=e[t];let c;Us(a)?"default"in a?c=F(a.from||t,a.default,!0):c=F(a.from||t):c=F(a),ws(c)&&o?Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:()=>c.value,set:i=>c.value=i}):n[t]=c}}function Ua(e,n,l){ze(rs(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,l)}function vp(e,n,l,o){const t=o.includes(".")?up(l,o):()=>l[o];if(Rs(e)){const a=n[e];ys(a)&&fs(t,a)}else if(ys(e))fs(t,e.bind(l));else if(Us(e))if(rs(e))e.forEach(a=>vp(a,n,l,o));else{const a=ys(e.handler)?e.handler.bind(l):n[e.handler];ys(a)&&fs(t,a,e)}}function gp(e){const n=e.type,{mixins:l,extends:o}=n,{mixins:t,optionsCache:a,config:{optionMergeStrategies:c}}=e.appContext,i=a.get(n);let p;return i?p=i:!t.length&&!l&&!o?p=n:(p={},t.length&&t.forEach(y=>Lo(p,y,c,!0)),Lo(p,n,c)),a.set(n,p),p}function Lo(e,n,l,o=!1){const{mixins:t,extends:a}=n;a&&Lo(e,a,l,!0),t&&t.forEach(c=>Lo(e,c,l,!0));for(const c in n)if(!(o&&c==="expose")){const i=od[c]||l&&l[c];e[c]=i?i(e[c],n[c]):n[c]}return e}const od={data:qa,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:vn,directives:vn,watch:rd,provide:qa,inject:td};function qa(e,n){return n?e?function(){return te(ys(e)?e.call(this,this):e,ys(n)?n.call(this,this):n)}:n:e}function td(e,n){return vn(Jt(e),Jt(n))}function Jt(e){if(rs(e)){const n={};for(let l=0;l<e.length;l++)n[e[l]]=e[l];return n}return e}function ee(e,n){return e?[...new Set([].concat(e,n))]:n}function vn(e,n){return e?te(te(Object.create(null),e),n):n}function rd(e,n){if(!e)return n;if(!n)return e;const l=te(Object.create(null),e);for(const o in n)l[o]=ee(e[o],n[o]);return l}function ad(e,n,l,o=!1){const t={},a={};Oo(a,rt,1),e.propsDefaults=Object.create(null),bp(e,n,t,a);for(const c in e.propsOptions[0])c in t||(t[c]=void 0);l?e.props=o?t:v8(t):e.type.props?e.props=t:e.props=a,e.attrs=a}function cd(e,n,l,o){const{props:t,attrs:a,vnode:{patchFlag:c}}=e,i=bs(t),[p]=e.propsOptions;let y=!1;if((o||c>0)&&!(c&16)){if(c&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(et(e.emitsOptions,d))continue;const B=n[d];if(p)if(Cs(a,d))B!==a[d]&&(a[d]=B,y=!0);else{const h=Ve(d);t[h]=Qt(p,i,h,B,e,!1)}else B!==a[d]&&(a[d]=B,y=!0)}}}else{bp(e,n,t,a)&&(y=!0);let u;for(const f in i)(!n||!Cs(n,f)&&((u=Tn(f))===f||!Cs(n,u)))&&(p?l&&(l[f]!==void 0||l[u]!==void 0)&&(t[f]=Qt(p,i,f,void 0,e,!0)):delete t[f]);if(a!==i)for(const f in a)(!n||!Cs(n,f)&&!0)&&(delete a[f],y=!0)}y&&Xe(e,"set","$attrs")}function bp(e,n,l,o){const[t,a]=e.propsOptions;let c=!1,i;if(n)for(let p in n){if(go(p))continue;const y=n[p];let u;t&&Cs(t,u=Ve(p))?!a||!a.includes(u)?l[u]=y:(i||(i={}))[u]=y:et(e.emitsOptions,p)||(!(p in o)||y!==o[p])&&(o[p]=y,c=!0)}if(a){const p=bs(l),y=i||zs;for(let u=0;u<a.length;u++){const f=a[u];l[f]=Qt(t,p,f,y[f],e,!Cs(y,f))}}return c}function Qt(e,n,l,o,t,a){const c=e[l];if(c!=null){const i=Cs(c,"default");if(i&&o===void 0){const p=c.default;if(c.type!==Function&&ys(p)){const{propsDefaults:y}=t;l in y?o=y[l]:(tl(t),o=y[l]=p.call(null,n),Sn())}else o=p}c[0]&&(a&&!i?o=!1:c[1]&&(o===""||o===Tn(l))&&(o=!0))}return o}function Ep(e,n,l=!1){const o=n.propsCache,t=o.get(e);if(t)return t;const a=e.props,c={},i=[];let p=!1;if(!ys(e)){const u=f=>{p=!0;const[d,B]=Ep(f,n,!0);te(c,d),B&&i.push(...B)};!l&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!p)return o.set(e,Zn),Zn;if(rs(a))for(let u=0;u<a.length;u++){const f=Ve(a[u]);Ka(f)&&(c[f]=zs)}else if(a)for(const u in a){const f=Ve(u);if(Ka(f)){const d=a[u],B=c[f]=rs(d)||ys(d)?{type:d}:d;if(B){const h=Za(Boolean,B.type),g=Za(String,B.type);B[0]=h>-1,B[1]=g<0||h<g,(h>-1||Cs(B,"default"))&&i.push(f)}}}const y=[c,i];return o.set(e,y),y}function Ka(e){return e[0]!=="$"}function Ya(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Ga(e,n){return Ya(e)===Ya(n)}function Za(e,n){return rs(n)?n.findIndex(l=>Ga(l,e)):ys(n)&&Ga(n,e)?0:-1}const wp=e=>e[0]==="_"||e==="$stable",Gr=e=>rs(e)?e.map(Re):[Re(e)],id=(e,n,l)=>{if(n._n)return n;const o=_((...t)=>Gr(n(...t)),l);return o._c=!1,o},xp=(e,n,l)=>{const o=e._ctx;for(const t in e){if(wp(t))continue;const a=e[t];if(ys(a))n[t]=id(t,a,o);else if(a!=null){const c=Gr(a);n[t]=()=>c}}},kp=(e,n)=>{const l=Gr(n);e.slots.default=()=>l},pd=(e,n)=>{if(e.vnode.shapeFlag&32){const l=n._;l?(e.slots=bs(n),Oo(n,"_",l)):xp(n,e.slots={})}else e.slots={},n&&kp(e,n);Oo(e.slots,rt,1)},yd=(e,n,l)=>{const{vnode:o,slots:t}=e;let a=!0,c=zs;if(o.shapeFlag&32){const i=n._;i?l&&i===1?a=!1:(te(t,n),!l&&i===1&&delete t._):(a=!n.$stable,xp(n,t)),c=n}else n&&(kp(e,n),c={default:1});if(a)for(const i in t)!wp(i)&&!(i in c)&&delete t[i]};function Fp(){return{app:null,config:{isNativeTag:Iu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ud=0;function dd(e,n){return function(o,t=null){ys(o)||(o=Object.assign({},o)),t!=null&&!Us(t)&&(t=null);const a=Fp(),c=new Set;let i=!1;const p=a.app={_uid:ud++,_component:o,_props:t,_container:null,_context:a,_instance:null,version:Od,get config(){return a.config},set config(y){},use(y,...u){return c.has(y)||(y&&ys(y.install)?(c.add(y),y.install(p,...u)):ys(y)&&(c.add(y),y(p,...u))),p},mixin(y){return a.mixins.includes(y)||a.mixins.push(y),p},component(y,u){return u?(a.components[y]=u,p):a.components[y]},directive(y,u){return u?(a.directives[y]=u,p):a.directives[y]},mount(y,u,f){if(!i){const d=b(o,t);return d.appContext=a,u&&n?n(d,y):e(d,y,f),i=!0,p._container=y,y.__vue_app__=p,at(d.component)||d.component.proxy}},unmount(){i&&(e(null,p._container),delete p._container.__vue_app__)},provide(y,u){return a.provides[y]=u,p}};return p}}function sr(e,n,l,o,t=!1){if(rs(e)){e.forEach((d,B)=>sr(d,n&&(rs(n)?n[B]:n),l,o,t));return}if(sl(o)&&!t)return;const a=o.shapeFlag&4?at(o.component)||o.component.proxy:o.el,c=t?null:a,{i,r:p}=e,y=n&&n.r,u=i.refs===zs?i.refs={}:i.refs,f=i.setupState;if(y!=null&&y!==p&&(Rs(y)?(u[y]=null,Cs(f,y)&&(f[y]=null)):ws(y)&&(y.value=null)),ys(p))pn(p,i,12,[c,u]);else{const d=Rs(p),B=ws(p);if(d||B){const h=()=>{if(e.f){const g=d?u[p]:p.value;t?rs(g)&&Lr(g,a):rs(g)?g.includes(a)||g.push(a):d?(u[p]=[a],Cs(f,p)&&(f[p]=u[p])):(p.value=[a],e.k&&(u[e.k]=p.value))}else d?(u[p]=c,Cs(f,p)&&(f[p]=c)):B&&(p.value=c,e.k&&(u[e.k]=c))};c?(h.id=-1,Ks(h,l)):h()}}}const Ks=H8;function fd(e){return Bd(e)}function Bd(e,n){const l=qu();l.__VUE__=!0;const{insert:o,remove:t,patchProp:a,createElement:c,createText:i,createComment:p,setText:y,setElementText:u,parentNode:f,nextSibling:d,setScopeId:B=Se,cloneNode:h,insertStaticContent:g}=e,D=(A,C,E,M=null,L=null,V=null,Y=!1,H=null,W=!!C.dynamicChildren)=>{if(A===C)return;A&&!Al(A,C)&&(M=Q(A),re(A,L,V,!0),A=null),C.patchFlag===-2&&(W=!1,C.dynamicChildren=null);const{type:j,ref:ns,shapeFlag:ss}=C;switch(j){case Xr:k(A,C,E,M);break;case An:w(A,C,E,M);break;case Ct:A==null&&x(C,E,M,Y);break;case ks:Ns(A,C,E,M,L,V,Y,H,W);break;default:ss&1?T(A,C,E,M,L,V,Y,H,W):ss&6?Gs(A,C,E,M,L,V,Y,H,W):(ss&64||ss&128)&&j.process(A,C,E,M,L,V,Y,H,W,Ps)}ns!=null&&L&&sr(ns,A&&A.ref,V,C||A,!C)},k=(A,C,E,M)=>{if(A==null)o(C.el=i(C.children),E,M);else{const L=C.el=A.el;C.children!==A.children&&y(L,C.children)}},w=(A,C,E,M)=>{A==null?o(C.el=p(C.children||""),E,M):C.el=A.el},x=(A,C,E,M)=>{[A.el,A.anchor]=g(A.children,C,E,M,A.el,A.anchor)},$=({el:A,anchor:C},E,M)=>{let L;for(;A&&A!==C;)L=d(A),o(A,E,M),A=L;o(C,E,M)},N=({el:A,anchor:C})=>{let E;for(;A&&A!==C;)E=d(A),t(A),A=E;t(C)},T=(A,C,E,M,L,V,Y,H,W)=>{Y=Y||C.type==="svg",A==null?X(C,E,M,L,V,Y,H,W):hs(A,C,L,V,Y,H,W)},X=(A,C,E,M,L,V,Y,H)=>{let W,j;const{type:ns,props:ss,shapeFlag:ls,transition:cs,patchFlag:Ds,dirs:$s}=A;if(A.el&&h!==void 0&&Ds===-1)W=A.el=h(A.el);else{if(W=A.el=c(A.type,V,ss&&ss.is,ss),ls&8?u(W,A.children):ls&16&&Bs(A.children,W,null,M,L,V&&ns!=="foreignObject",Y,H),$s&&mn(A,null,M,"created"),ss){for(const Ls in ss)Ls!=="value"&&!go(Ls)&&a(W,Ls,null,ss[Ls],V,A.children,M,L,R);"value"in ss&&a(W,"value",null,ss.value),(j=ss.onVnodeBeforeMount)&&ve(j,M,A)}is(W,A,A.scopeId,Y,M)}$s&&mn(A,null,M,"beforeMount");const Os=(!L||L&&!L.pendingBranch)&&cs&&!cs.persisted;Os&&cs.beforeEnter(W),o(W,C,E),((j=ss&&ss.onVnodeMounted)||Os||$s)&&Ks(()=>{j&&ve(j,M,A),Os&&cs.enter(W),$s&&mn(A,null,M,"mounted")},L)},is=(A,C,E,M,L)=>{if(E&&B(A,E),M)for(let V=0;V<M.length;V++)B(A,M[V]);if(L){let V=L.subTree;if(C===V){const Y=L.vnode;is(A,Y,Y.scopeId,Y.slotScopeIds,L.parent)}}},Bs=(A,C,E,M,L,V,Y,H,W=0)=>{for(let j=W;j<A.length;j++){const ns=A[j]=H?tn(A[j]):Re(A[j]);D(null,ns,C,E,M,L,V,Y,H)}},hs=(A,C,E,M,L,V,Y)=>{const H=C.el=A.el;let{patchFlag:W,dynamicChildren:j,dirs:ns}=C;W|=A.patchFlag&16;const ss=A.props||zs,ls=C.props||zs;let cs;E&&Cn(E,!1),(cs=ls.onVnodeBeforeUpdate)&&ve(cs,E,C,A),ns&&mn(C,A,E,"beforeUpdate"),E&&Cn(E,!0);const Ds=L&&C.type!=="foreignObject";if(j?_s(A.dynamicChildren,j,H,E,M,Ds,V):Y||ms(A,C,H,null,E,M,Ds,V,!1),W>0){if(W&16)Ts(H,C,ss,ls,E,M,L);else if(W&2&&ss.class!==ls.class&&a(H,"class",null,ls.class,L),W&4&&a(H,"style",ss.style,ls.style,L),W&8){const $s=C.dynamicProps;for(let Os=0;Os<$s.length;Os++){const Ls=$s[Os],xe=ss[Ls],In=ls[Ls];(In!==xe||Ls==="value")&&a(H,Ls,xe,In,L,A.children,E,M,R)}}W&1&&A.children!==C.children&&u(H,C.children)}else!Y&&j==null&&Ts(H,C,ss,ls,E,M,L);((cs=ls.onVnodeUpdated)||ns)&&Ks(()=>{cs&&ve(cs,E,C,A),ns&&mn(C,A,E,"updated")},M)},_s=(A,C,E,M,L,V,Y)=>{for(let H=0;H<C.length;H++){const W=A[H],j=C[H],ns=W.el&&(W.type===ks||!Al(W,j)||W.shapeFlag&70)?f(W.el):E;D(W,j,ns,null,M,L,V,Y,!0)}},Ts=(A,C,E,M,L,V,Y)=>{if(E!==M){for(const H in M){if(go(H))continue;const W=M[H],j=E[H];W!==j&&H!=="value"&&a(A,H,j,W,Y,C.children,L,V,R)}if(E!==zs)for(const H in E)!go(H)&&!(H in M)&&a(A,H,E[H],null,Y,C.children,L,V,R);"value"in M&&a(A,"value",E.value,M.value)}},Ns=(A,C,E,M,L,V,Y,H,W)=>{const j=C.el=A?A.el:i(""),ns=C.anchor=A?A.anchor:i("");let{patchFlag:ss,dynamicChildren:ls,slotScopeIds:cs}=C;cs&&(H=H?H.concat(cs):cs),A==null?(o(j,E,M),o(ns,E,M),Bs(C.children,E,ns,L,V,Y,H,W)):ss>0&&ss&64&&ls&&A.dynamicChildren?(_s(A.dynamicChildren,ls,E,L,V,Y,H),(C.key!=null||L&&C===L.subTree)&&Zr(A,C,!0)):ms(A,C,E,ns,L,V,Y,H,W)},Gs=(A,C,E,M,L,V,Y,H,W)=>{C.slotScopeIds=H,A==null?C.shapeFlag&512?L.ctx.activate(C,E,M,Y,W):Fs(C,E,M,L,V,Y,W):ts(A,C,W)},Fs=(A,C,E,M,L,V,Y)=>{const H=A.component=Ed(A,M,L);if(fp(A)&&(H.ctx.renderer=Ps),wd(H),H.asyncDep){if(L&&L.registerDep(H,as),!A.el){const W=H.subTree=b(An);w(null,W,C,E)}return}as(H,A,C,E,L,V,Y)},ts=(A,C,E)=>{const M=C.component=A.component;if(I8(A,C,E))if(M.asyncDep&&!M.asyncResolved){os(M,C,E);return}else M.next=C,P8(M.update),M.update();else C.el=A.el,M.vnode=C},as=(A,C,E,M,L,V,Y)=>{const H=()=>{if(A.isMounted){let{next:ns,bu:ss,u:ls,parent:cs,vnode:Ds}=A,$s=ns,Os;Cn(A,!1),ns?(ns.el=Ds.el,os(A,ns,Y)):ns=Ds,ss&&Jn(ss),(Os=ns.props&&ns.props.onVnodeBeforeUpdate)&&ve(Os,cs,ns,Ds),Cn(A,!0);const Ls=At(A),xe=A.subTree;A.subTree=Ls,D(xe,Ls,f(xe.el),Q(xe),A,L,V),ns.el=Ls.el,$s===null&&N8(A,Ls.el),ls&&Ks(ls,L),(Os=ns.props&&ns.props.onVnodeUpdated)&&Ks(()=>ve(Os,cs,ns,Ds),L)}else{let ns;const{el:ss,props:ls}=C,{bm:cs,m:Ds,parent:$s}=A,Os=sl(C);if(Cn(A,!1),cs&&Jn(cs),!Os&&(ns=ls&&ls.onVnodeBeforeMount)&&ve(ns,$s,C),Cn(A,!0),ss&&us){const Ls=()=>{A.subTree=At(A),us(ss,A.subTree,A,L,null)};Os?C.type.__asyncLoader().then(()=>!A.isUnmounted&&Ls()):Ls()}else{const Ls=A.subTree=At(A);D(null,Ls,E,M,A,L,V),C.el=Ls.el}if(Ds&&Ks(Ds,L),!Os&&(ns=ls&&ls.onVnodeMounted)){const Ls=C;Ks(()=>ve(ns,$s,Ls),L)}(C.shapeFlag&256||$s&&sl($s.vnode)&&$s.vnode.shapeFlag&256)&&A.a&&Ks(A.a,L),A.isMounted=!0,C=E=M=null}},W=A.effect=new Rr(H,()=>tp(j),A.scope),j=A.update=()=>W.run();j.id=A.uid,Cn(A,!0),j()},os=(A,C,E)=>{C.component=A;const M=A.vnode.props;A.vnode=C,A.next=null,cd(A,C.props,M,E),yd(A,C.children,E),il(),st(void 0,A.update),pl()},ms=(A,C,E,M,L,V,Y,H,W=!1)=>{const j=A&&A.children,ns=A?A.shapeFlag:0,ss=C.children,{patchFlag:ls,shapeFlag:cs}=C;if(ls>0){if(ls&128){se(j,ss,E,M,L,V,Y,H,W);return}else if(ls&256){Me(j,ss,E,M,L,V,Y,H,W);return}}cs&8?(ns&16&&R(j,L,V),ss!==j&&u(E,ss)):ns&16?cs&16?se(j,ss,E,M,L,V,Y,H,W):R(j,L,V,!0):(ns&8&&u(E,""),cs&16&&Bs(ss,E,M,L,V,Y,H,W))},Me=(A,C,E,M,L,V,Y,H,W)=>{A=A||Zn,C=C||Zn;const j=A.length,ns=C.length,ss=Math.min(j,ns);let ls;for(ls=0;ls<ss;ls++){const cs=C[ls]=W?tn(C[ls]):Re(C[ls]);D(A[ls],cs,E,null,L,V,Y,H,W)}j>ns?R(A,L,V,!0,!1,ss):Bs(C,E,M,L,V,Y,H,W,ss)},se=(A,C,E,M,L,V,Y,H,W)=>{let j=0;const ns=C.length;let ss=A.length-1,ls=ns-1;for(;j<=ss&&j<=ls;){const cs=A[j],Ds=C[j]=W?tn(C[j]):Re(C[j]);if(Al(cs,Ds))D(cs,Ds,E,null,L,V,Y,H,W);else break;j++}for(;j<=ss&&j<=ls;){const cs=A[ss],Ds=C[ls]=W?tn(C[ls]):Re(C[ls]);if(Al(cs,Ds))D(cs,Ds,E,null,L,V,Y,H,W);else break;ss--,ls--}if(j>ss){if(j<=ls){const cs=ls+1,Ds=cs<ns?C[cs].el:M;for(;j<=ls;)D(null,C[j]=W?tn(C[j]):Re(C[j]),E,Ds,L,V,Y,H,W),j++}}else if(j>ls)for(;j<=ss;)re(A[j],L,V,!0),j++;else{const cs=j,Ds=j,$s=new Map;for(j=Ds;j<=ls;j++){const ie=C[j]=W?tn(C[j]):Re(C[j]);ie.key!=null&&$s.set(ie.key,j)}let Os,Ls=0;const xe=ls-Ds+1;let In=!1,Oa=0;const Bl=new Array(xe);for(j=0;j<xe;j++)Bl[j]=0;for(j=cs;j<=ss;j++){const ie=A[j];if(Ls>=xe){re(ie,L,V,!0);continue}let je;if(ie.key!=null)je=$s.get(ie.key);else for(Os=Ds;Os<=ls;Os++)if(Bl[Os-Ds]===0&&Al(ie,C[Os])){je=Os;break}je===void 0?re(ie,L,V,!0):(Bl[je-Ds]=j+1,je>=Oa?Oa=je:In=!0,D(ie,C[je],E,null,L,V,Y,H,W),Ls++)}const Sa=In?Ad(Bl):Zn;for(Os=Sa.length-1,j=xe-1;j>=0;j--){const ie=Ds+j,je=C[ie],za=ie+1<ns?C[ie+1].el:M;Bl[j]===0?D(null,je,E,za,L,V,Y,H,W):In&&(Os<0||j!==Sa[Os]?De(je,E,za,2):Os--)}}},De=(A,C,E,M,L=null)=>{const{el:V,type:Y,transition:H,children:W,shapeFlag:j}=A;if(j&6){De(A.component.subTree,C,E,M);return}if(j&128){A.suspense.move(C,E,M);return}if(j&64){Y.move(A,C,E,Ps);return}if(Y===ks){o(V,C,E);for(let ss=0;ss<W.length;ss++)De(W[ss],C,E,M);o(A.anchor,C,E);return}if(Y===Ct){$(A,C,E);return}if(M!==2&&j&1&&H)if(M===0)H.beforeEnter(V),o(V,C,E),Ks(()=>H.enter(V),L);else{const{leave:ss,delayLeave:ls,afterLeave:cs}=H,Ds=()=>o(V,C,E),$s=()=>{ss(V,()=>{Ds(),cs&&cs()})};ls?ls(V,Ds,$s):$s()}else o(V,C,E)},re=(A,C,E,M=!1,L=!1)=>{const{type:V,props:Y,ref:H,children:W,dynamicChildren:j,shapeFlag:ns,patchFlag:ss,dirs:ls}=A;if(H!=null&&sr(H,null,E,A,!0),ns&256){C.ctx.deactivate(A);return}const cs=ns&1&&ls,Ds=!sl(A);let $s;if(Ds&&($s=Y&&Y.onVnodeBeforeUnmount)&&ve($s,C,A),ns&6)J(A.component,E,M);else{if(ns&128){A.suspense.unmount(E,M);return}cs&&mn(A,null,C,"beforeUnmount"),ns&64?A.type.remove(A,C,E,L,Ps,M):j&&(V!==ks||ss>0&&ss&64)?R(j,C,E,!1,!0):(V===ks&&ss&384||!L&&ns&16)&&R(W,C,E),M&&en(A)}(Ds&&($s=Y&&Y.onVnodeUnmounted)||cs)&&Ks(()=>{$s&&ve($s,C,A),cs&&mn(A,null,C,"unmounted")},E)},en=A=>{const{type:C,el:E,anchor:M,transition:L}=A;if(C===ks){S(E,M);return}if(C===Ct){N(A);return}const V=()=>{t(E),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(A.shapeFlag&1&&L&&!L.persisted){const{leave:Y,delayLeave:H}=L,W=()=>Y(E,V);H?H(A.el,V,W):W()}else V()},S=(A,C)=>{let E;for(;A!==C;)E=d(A),t(A),A=E;t(C)},J=(A,C,E)=>{const{bum:M,scope:L,update:V,subTree:Y,um:H}=A;M&&Jn(M),L.stop(),V&&(V.active=!1,re(Y,A,C,E)),H&&Ks(H,C),Ks(()=>{A.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},R=(A,C,E,M=!1,L=!1,V=0)=>{for(let Y=V;Y<A.length;Y++)re(A[Y],C,E,M,L)},Q=A=>A.shapeFlag&6?Q(A.component.subTree):A.shapeFlag&128?A.suspense.next():d(A.anchor||A.el),vs=(A,C,E)=>{A==null?C._vnode&&re(C._vnode,null,null,!0):D(C._vnode||null,A,C,null,null,null,E),cp(),C._vnode=A},Ps={p:D,um:re,m:De,r:en,mt:Fs,mc:Bs,pc:ms,pbc:_s,n:Q,o:e};let As,us;return n&&([As,us]=n(Ps)),{render:vs,hydrate:As,createApp:dd(vs,As)}}function Cn({effect:e,update:n},l){e.allowRecurse=n.allowRecurse=l}function Zr(e,n,l=!1){const o=e.children,t=n.children;if(rs(o)&&rs(t))for(let a=0;a<o.length;a++){const c=o[a];let i=t[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=t[a]=tn(t[a]),i.el=c.el),l||Zr(c,i))}}function Ad(e){const n=e.slice(),l=[0];let o,t,a,c,i;const p=e.length;for(o=0;o<p;o++){const y=e[o];if(y!==0){if(t=l[l.length-1],e[t]<y){n[o]=t,l.push(o);continue}for(a=0,c=l.length-1;a<c;)i=a+c>>1,e[l[i]]<y?a=i+1:c=i;y<e[l[a]]&&(a>0&&(n[o]=l[a-1]),l[a]=o)}}for(a=l.length,c=l[a-1];a-- >0;)l[a]=c,c=n[c];return l}const hd=e=>e.__isTeleport,$l=e=>e&&(e.disabled||e.disabled===""),Xa=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,er=(e,n)=>{const l=e&&e.to;return Rs(l)?n?n(l):null:l},md={__isTeleport:!0,process(e,n,l,o,t,a,c,i,p,y){const{mc:u,pc:f,pbc:d,o:{insert:B,querySelector:h,createText:g,createComment:D}}=y,k=$l(n.props);let{shapeFlag:w,children:x,dynamicChildren:$}=n;if(e==null){const N=n.el=g(""),T=n.anchor=g("");B(N,l,o),B(T,l,o);const X=n.target=er(n.props,h),is=n.targetAnchor=g("");X&&(B(is,X),c=c||Xa(X));const Bs=(hs,_s)=>{w&16&&u(x,hs,_s,t,a,c,i,p)};k?Bs(l,T):X&&Bs(X,is)}else{n.el=e.el;const N=n.anchor=e.anchor,T=n.target=e.target,X=n.targetAnchor=e.targetAnchor,is=$l(e.props),Bs=is?l:T,hs=is?N:X;if(c=c||Xa(T),$?(d(e.dynamicChildren,$,Bs,t,a,c,i),Zr(e,n,!0)):p||f(e,n,Bs,hs,t,a,c,i,!1),k)is||ho(n,l,N,y,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const _s=n.target=er(n.props,h);_s&&ho(n,_s,null,y,0)}else is&&ho(n,T,X,y,1)}},remove(e,n,l,o,{um:t,o:{remove:a}},c){const{shapeFlag:i,children:p,anchor:y,targetAnchor:u,target:f,props:d}=e;if(f&&a(u),(c||!$l(d))&&(a(y),i&16))for(let B=0;B<p.length;B++){const h=p[B];t(h,n,l,!0,!!h.dynamicChildren)}},move:ho,hydrate:Cd};function ho(e,n,l,{o:{insert:o},m:t},a=2){a===0&&o(e.targetAnchor,n,l);const{el:c,anchor:i,shapeFlag:p,children:y,props:u}=e,f=a===2;if(f&&o(c,n,l),(!f||$l(u))&&p&16)for(let d=0;d<y.length;d++)t(y[d],n,l,2);f&&o(i,n,l)}function Cd(e,n,l,o,t,a,{o:{nextSibling:c,parentNode:i,querySelector:p}},y){const u=n.target=er(n.props,p);if(u){const f=u._lpa||u.firstChild;if(n.shapeFlag&16)if($l(n.props))n.anchor=y(c(e),n,i(e),l,o,t,a),n.targetAnchor=f;else{n.anchor=c(e);let d=f;for(;d;)if(d=c(d),d&&d.nodeType===8&&d.data==="teleport anchor"){n.targetAnchor=d,u._lpa=n.targetAnchor&&c(n.targetAnchor);break}y(f,n,u,l,o,t,a)}}return n.anchor&&c(n.anchor)}const _d=md,ks=Symbol(void 0),Xr=Symbol(void 0),An=Symbol(void 0),Ct=Symbol(void 0),Ol=[];let Oe=null;function m(e=!1){Ol.push(Oe=e?null:[])}function Dd(){Ol.pop(),Oe=Ol[Ol.length-1]||null}let Kl=1;function Ja(e){Kl+=e}function $p(e){return e.dynamicChildren=Kl>0?Oe||Zn:null,Dd(),Kl>0&&Oe&&Oe.push(e),e}function I(e,n,l,o,t,a){return $p(s(e,n,l,o,t,a,!0))}function P(e,n,l,o,t){return $p(b(e,n,l,o,t,!0))}function ol(e){return e?e.__v_isVNode===!0:!1}function Al(e,n){return e.type===n.type&&e.key===n.key}const rt="__vInternal",Op=({key:e})=>e!=null?e:null,bo=({ref:e,ref_key:n,ref_for:l})=>e!=null?Rs(e)||ws(e)||ys(e)?{i:Zs,r:e,k:n,f:!!l}:e:null;function s(e,n=null,l=null,o=0,t=null,a=e===ks?0:1,c=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Op(n),ref:n&&bo(n),scopeId:nt,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:t,dynamicChildren:null,appContext:null};return i?(Jr(p,l),a&128&&e.normalize(p)):l&&(p.shapeFlag|=Rs(l)?8:16),Kl>0&&!c&&Oe&&(p.patchFlag>0||a&6)&&p.patchFlag!==32&&Oe.push(p),p}const b=vd;function vd(e,n=null,l=null,o=0,t=null,a=!1){if((!e||e===sd)&&(e=An),ol(e)){const i=Ln(e,n,!0);return l&&Jr(i,l),Kl>0&&!a&&Oe&&(i.shapeFlag&6?Oe[Oe.indexOf(e)]=i:Oe.push(i)),i.patchFlag|=-2,i}if($d(e)&&(e=e.__vccOpts),n){n=U(n);let{class:i,style:p}=n;i&&!Rs(i)&&(n.class=js(i)),Us(p)&&(ep(p)&&!rs(p)&&(p=te({},p)),n.style=Js(p))}const c=Rs(e)?1:yp(e)?128:hd(e)?64:Us(e)?4:ys(e)?2:0;return s(e,n,l,o,t,c,a,!0)}function U(e){return e?ep(e)||rt in e?te({},e):e:null}function Ln(e,n,l=!1){const{props:o,ref:t,patchFlag:a,children:c}=e,i=n?G(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Op(i),ref:n&&n.ref?l&&t?rs(t)?t.concat(bo(n)):[t,bo(n)]:bo(n):t,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==ks?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ln(e.ssContent),ssFallback:e.ssFallback&&Ln(e.ssFallback),el:e.el,anchor:e.anchor}}function r(e=" ",n=0){return b(Xr,null,e,n)}function ds(e="",n=!1){return n?(m(),P(An,null,e)):b(An,null,e)}function Re(e){return e==null||typeof e=="boolean"?b(An):rs(e)?b(ks,null,e.slice()):typeof e=="object"?tn(e):b(Xr,null,String(e))}function tn(e){return e.el===null||e.memo?e:Ln(e)}function Jr(e,n){let l=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(rs(n))l=16;else if(typeof n=="object")if(o&65){const t=n.default;t&&(t._c&&(t._d=!1),Jr(e,t()),t._c&&(t._d=!0));return}else{l=32;const t=n._;!t&&!(rt in n)?n._ctx=Zs:t===3&&Zs&&(Zs.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ys(n)?(n={default:n,_ctx:Zs},l=32):(n=String(n),o&64?(l=16,n=[r(n)]):l=8);e.children=n,e.shapeFlag|=l}function G(...e){const n={};for(let l=0;l<e.length;l++){const o=e[l];for(const t in o)if(t==="class")n.class!==o.class&&(n.class=js([n.class,o.class]));else if(t==="style")n.style=Js([n.style,o.style]);else if(Ko(t)){const a=n[t],c=o[t];c&&a!==c&&!(rs(a)&&a.includes(c))&&(n[t]=a?[].concat(a,c):c)}else t!==""&&(n[t]=o[t])}return n}function ve(e,n,l,o=null){ze(e,n,7,[l,o])}const gd=Fp();let bd=0;function Ed(e,n,l){const o=e.type,t=(n?n.appContext:e.appContext)||gd,a={uid:bd++,vnode:e,type:o,parent:n,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ep(o,t),emitsOptions:pp(o,t),emit:null,emitted:null,propsDefaults:zs,inheritAttrs:o.inheritAttrs,ctx:zs,data:zs,props:zs,attrs:zs,slots:zs,refs:zs,setupState:zs,setupContext:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=n?n.root:a,a.emit=M8.bind(null,a),e.ce&&e.ce(a),a}let qs=null;const Mn=()=>qs||Zs,tl=e=>{qs=e,e.scope.on()},Sn=()=>{qs&&qs.scope.off(),qs=null};function Sp(e){return e.vnode.shapeFlag&4}let Yl=!1;function wd(e,n=!1){Yl=n;const{props:l,children:o}=e.vnode,t=Sp(e);ad(e,l,t,n),pd(e,o);const a=t?xd(e,n):void 0;return Yl=!1,a}function xd(e,n){const l=e.type;e.accessCache=Object.create(null),e.proxy=Jo(new Proxy(e.ctx,ed));const{setup:o}=l;if(o){const t=e.setupContext=o.length>1?Fd(e):null;tl(e),il();const a=pn(o,e,0,[e.props,t]);if(pl(),Sn(),Ni(a)){if(a.then(Sn,Sn),n)return a.then(c=>{Qa(e,c,n)}).catch(c=>{Qo(c,e,0)});e.asyncDep=a}else Qa(e,a,n)}else zp(e,n)}function Qa(e,n,l){ys(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Us(n)&&(e.setupState=lp(n)),zp(e,l)}let sc;function zp(e,n,l){const o=e.type;if(!e.render){if(!n&&sc&&!o.render){const t=o.template;if(t){const{isCustomElement:a,compilerOptions:c}=e.appContext.config,{delimiters:i,compilerOptions:p}=o,y=te(te({isCustomElement:a,delimiters:i},c),p);o.render=sc(t,y)}}e.render=o.render||Se}tl(e),il(),nd(e),pl(),Sn()}function kd(e){return new Proxy(e.attrs,{get(n,l){return Ce(e,"get","$attrs"),n[l]}})}function Fd(e){const n=o=>{e.exposed=o||{}};let l;return{get attrs(){return l||(l=kd(e))},slots:e.slots,emit:e.emit,expose:n}}function at(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(lp(Jo(e.exposed)),{get(n,l){if(l in n)return n[l];if(l in Po)return Po[l](e)}}))}function nr(e,n=!0){return ys(e)?e.displayName||e.name:e.name||n&&e.__name}function $d(e){return ys(e)&&"__vccOpts"in e}const O=(e,n)=>O8(e,n,Yl);function Ae(e,n,l){const o=arguments.length;return o===2?Us(n)&&!rs(n)?ol(n)?b(e,null,[n]):b(e,n):b(e,null,n):(o>3?l=Array.prototype.slice.call(arguments,2):o===3&&ol(l)&&(l=[l]),b(e,n,l))}const Od="3.2.37",Sd="http://www.w3.org/2000/svg",bn=typeof document!="undefined"?document:null,ec=bn&&bn.createElement("template"),zd={insert:(e,n,l)=>{n.insertBefore(e,l||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,l,o)=>{const t=n?bn.createElementNS(Sd,e):bn.createElement(e,l?{is:l}:void 0);return e==="select"&&o&&o.multiple!=null&&t.setAttribute("multiple",o.multiple),t},createText:e=>bn.createTextNode(e),createComment:e=>bn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},cloneNode(e){const n=e.cloneNode(!0);return"_value"in e&&(n._value=e._value),n},insertStaticContent(e,n,l,o,t,a){const c=l?l.previousSibling:n.lastChild;if(t&&(t===a||t.nextSibling))for(;n.insertBefore(t.cloneNode(!0),l),!(t===a||!(t=t.nextSibling)););else{ec.innerHTML=o?`<svg>${e}</svg>`:e;const i=ec.content;if(o){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}n.insertBefore(i,l)}return[c?c.nextSibling:n.firstChild,l?l.previousSibling:n.lastChild]}};function Pd(e,n,l){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):l?e.setAttribute("class",n):e.className=n}function Ld(e,n,l){const o=e.style,t=Rs(l);if(l&&!t){for(const a in l)lr(o,a,l[a]);if(n&&!Rs(n))for(const a in n)l[a]==null&&lr(o,a,"")}else{const a=o.display;t?n!==l&&(o.cssText=l):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=a)}}const nc=/\s*!important$/;function lr(e,n,l){if(rs(l))l.forEach(o=>lr(e,n,o));else if(l==null&&(l=""),n.startsWith("--"))e.setProperty(n,l);else{const o=Td(e,n);nc.test(l)?e.setProperty(Tn(o),l.replace(nc,""),"important"):e[o]=l}}const lc=["Webkit","Moz","ms"],_t={};function Td(e,n){const l=_t[n];if(l)return l;let o=Ve(n);if(o!=="filter"&&o in e)return _t[n]=o;o=Zo(o);for(let t=0;t<lc.length;t++){const a=lc[t]+o;if(a in e)return _t[n]=a}return n}const oc="http://www.w3.org/1999/xlink";function Md(e,n,l,o,t){if(o&&n.startsWith("xlink:"))l==null?e.removeAttributeNS(oc,n.slice(6,n.length)):e.setAttributeNS(oc,n,l);else{const a=Tu(n);l==null||a&&!ji(l)?e.removeAttribute(n):e.setAttribute(n,a?"":l)}}function jd(e,n,l,o,t,a,c){if(n==="innerHTML"||n==="textContent"){o&&c(o,t,a),e[n]=l==null?"":l;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=l;const p=l==null?"":l;(e.value!==p||e.tagName==="OPTION")&&(e.value=p),l==null&&e.removeAttribute(n);return}let i=!1;if(l===""||l==null){const p=typeof e[n];p==="boolean"?l=ji(l):l==null&&p==="string"?(l="",i=!0):p==="number"&&(l=0,i=!0)}try{e[n]=l}catch{}i&&e.removeAttribute(n)}const[Pp,Rd]=(()=>{let e=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const l=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(l&&Number(l[1])<=53)}return[e,n]})();let or=0;const Id=Promise.resolve(),Nd=()=>{or=0},Hd=()=>or||(Id.then(Nd),or=Pp());function qn(e,n,l,o){e.addEventListener(n,l,o)}function Vd(e,n,l,o){e.removeEventListener(n,l,o)}function Wd(e,n,l,o,t=null){const a=e._vei||(e._vei={}),c=a[n];if(o&&c)c.value=o;else{const[i,p]=Ud(n);if(o){const y=a[n]=qd(o,t);qn(e,i,y,p)}else c&&(Vd(e,i,c,p),a[n]=void 0)}}const tc=/(?:Once|Passive|Capture)$/;function Ud(e){let n;if(tc.test(e)){n={};let l;for(;l=e.match(tc);)e=e.slice(0,e.length-l[0].length),n[l[0].toLowerCase()]=!0}return[Tn(e.slice(2)),n]}function qd(e,n){const l=o=>{const t=o.timeStamp||Pp();(Rd||t>=l.attached-1)&&ze(Kd(o,l.value),n,5,[o])};return l.value=e,l.attached=Hd(),l}function Kd(e,n){if(rs(n)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},n.map(o=>t=>!t._stopped&&o&&o(t))}else return n}const rc=/^on[a-z]/,Yd=(e,n,l,o,t=!1,a,c,i,p)=>{n==="class"?Pd(e,o,t):n==="style"?Ld(e,l,o):Ko(n)?Pr(n)||Wd(e,n,l,o,c):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Gd(e,n,o,t))?jd(e,n,o,a,c,i,p):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),Md(e,n,o,t))};function Gd(e,n,l,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&rc.test(n)&&ys(l)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||rc.test(n)&&Rs(l)?!1:n in e}const ac=e=>{const n=e.props["onUpdate:modelValue"]||!1;return rs(n)?l=>Jn(n,l):n};function Zd(e){e.target.composing=!0}function cc(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Xd={created(e,{modifiers:{lazy:n,trim:l,number:o}},t){e._assign=ac(t);const a=o||t.props&&t.props.type==="number";qn(e,n?"change":"input",c=>{if(c.target.composing)return;let i=e.value;l&&(i=i.trim()),a&&(i=Ht(i)),e._assign(i)}),l&&qn(e,"change",()=>{e.value=e.value.trim()}),n||(qn(e,"compositionstart",Zd),qn(e,"compositionend",cc),qn(e,"change",cc))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:l,trim:o,number:t}},a){if(e._assign=ac(a),e.composing||document.activeElement===e&&e.type!=="range"&&(l||o&&e.value.trim()===n||(t||e.type==="number")&&Ht(e.value)===n))return;const c=n==null?"":n;e.value!==c&&(e.value=c)}},Jd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ic=(e,n)=>l=>{if(!("key"in l))return;const o=Tn(l.key);if(n.some(t=>t===o||Jd[t]===o))return e(l)},Lp={beforeMount(e,{value:n},{transition:l}){e._vod=e.style.display==="none"?"":e.style.display,l&&n?l.beforeEnter(e):hl(e,n)},mounted(e,{value:n},{transition:l}){l&&n&&l.enter(e)},updated(e,{value:n,oldValue:l},{transition:o}){!n!=!l&&(o?n?(o.beforeEnter(e),hl(e,!0),o.enter(e)):o.leave(e,()=>{hl(e,!1)}):hl(e,n))},beforeUnmount(e,{value:n}){hl(e,n)}};function hl(e,n){e.style.display=n?e._vod:"none"}const Qd=te({patchProp:Yd},zd);let pc;function s5(){return pc||(pc=fd(Qd))}const e5=(...e)=>{const n=s5().createApp(...e),{mount:l}=n;return n.mount=o=>{const t=n5(o);if(!t)return;const a=n._component;!ys(a)&&!a.render&&!a.template&&(a.template=t.innerHTML),t.innerHTML="";const c=l(t,!1,t instanceof SVGElement);return t instanceof Element&&(t.removeAttribute("v-cloak"),t.setAttribute("data-v-app","")),c},n};function n5(e){return Rs(e)?document.querySelector(e):e}var l5=Object.defineProperty,yc=Object.getOwnPropertySymbols,o5=Object.prototype.hasOwnProperty,t5=Object.prototype.propertyIsEnumerable,uc=(e,n,l)=>n in e?l5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,r5=(e,n)=>{for(var l in n||(n={}))o5.call(n,l)&&uc(e,l,n[l]);if(yc)for(var l of yc(n))t5.call(n,l)&&uc(e,l,n[l]);return e},Tp="usehead",dc="head:count",Dt="data-head-attrs",a5=(e,n,l)=>{const o=l.createElement(e);for(const t of Object.keys(n)){let a=n[t];t==="key"||a===!1||(t==="children"?o.textContent=a:o.setAttribute(t,a))}return o};function c5(e,n){if(e instanceof HTMLElement&&n instanceof HTMLElement){const l=n.getAttribute("nonce");if(l&&!e.getAttribute("nonce")){const o=n.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=l,l===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(n)}var i5=e=>{const n=["key","id","name","property"];for(const l of n){const o=typeof e.getAttribute=="function"?e.hasAttribute(l)?e.getAttribute(l):void 0:e[l];if(o!==void 0)return{name:l,value:o}}},p5=()=>{const e=F(Tp);if(!e)throw new Error("You may forget to apply app.use(head)");return e},y5=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],u5=e=>{const n=[];for(const l of Object.keys(e))if(e[l]!=null){if(l==="title")n.push({tag:l,props:{children:e[l]}});else if(l==="base")n.push({tag:l,props:r5({key:"default"},e[l])});else if(y5.includes(l)){const o=e[l];Array.isArray(o)?o.forEach(t=>{n.push({tag:l,props:t})}):o&&n.push({tag:l,props:o})}}return n},fc=(e,n)=>{const l=e.getAttribute(Dt);if(l)for(const t of l.split(","))t in n||e.removeAttribute(t);const o=[];for(const t in n){const a=n[t];a!=null&&(a===!1?e.removeAttribute(t):e.setAttribute(t,a),o.push(t))}o.length?e.setAttribute(Dt,o.join(",")):e.removeAttribute(Dt)},d5=(e=window.document,n,l)=>{var o;const t=e.head;let a=t.querySelector(`meta[name="${dc}"]`);const c=a?Number(a.getAttribute("content")):0,i=[];if(a)for(let y=0,u=a.previousElementSibling;y<c;y++,u=(u==null?void 0:u.previousElementSibling)||null)((o=u==null?void 0:u.tagName)==null?void 0:o.toLowerCase())===n&&i.push(u);else a=e.createElement("meta"),a.setAttribute("name",dc),a.setAttribute("content","0"),t.append(a);let p=l.map(y=>a5(y.tag,y.props,e));p=p.filter(y=>{for(let u=0;u<i.length;u++){const f=i[u];if(c5(f,y))return i.splice(u,1),!1}return!0}),i.forEach(y=>{var u;return(u=y.parentNode)==null?void 0:u.removeChild(y)}),p.forEach(y=>{t.insertBefore(y,a)}),a.setAttribute("content",""+(c-i.length+p.length))},f5=()=>{let e=[],n=new Set;const l={install(o){o.config.globalProperties.$head=l,o.provide(Tp,l)},get headTags(){const o=[];return e.forEach(t=>{u5(t.value).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const i=i5(c.props);if(i){let p=-1;for(let y=0;y<o.length;y++){const u=o[y],f=u.props[i.name],d=c.props[i.name];if(u.tag===c.tag&&f===d){p=y;break}}p!==-1&&o.splice(p,1)}}o.push(c)})}),o},addHeadObjs(o){e.push(o)},removeHeadObjs(o){e=e.filter(t=>t!==o)},updateDOM(o=window.document){let t,a={},c={};const i={};for(const y of l.headTags){if(y.tag==="title"){t=y.props.children;continue}if(y.tag==="htmlAttrs"){Object.assign(a,y.props);continue}if(y.tag==="bodyAttrs"){Object.assign(c,y.props);continue}i[y.tag]=i[y.tag]||[],i[y.tag].push(y)}t!==void 0&&(o.title=t),fc(o.documentElement,a),fc(o.body,c);const p=new Set([...Object.keys(i),...n]);for(const y of p)d5(o,y,i[y]||[]);n.clear(),Object.keys(i).forEach(y=>n.add(y))}};return l},B5=typeof window!="undefined",A5=e=>{const n=K(e),l=p5();l.addHeadObjs(n),B5&&(oo(()=>{l.updateDOM()}),ot(()=>{l.removeHeadObjs(n),l.updateDOM()}))};const Sl=Symbol("v-click-clicks"),En=Symbol("v-click-clicks-elements"),tr=Symbol("v-click-clicks-order-map"),zl=Symbol("v-click-clicks-disabled"),Mp=Symbol("slidev-slide-scale"),z=Symbol("slidev-slidev-context"),h5=Symbol("slidev-route"),m5=Symbol("slidev-slide-context"),gn="slidev-vclick-target",vt="slidev-vclick-hidden",C5="slidev-vclick-fade",gt="slidev-vclick-hidden-explicitly",ml="slidev-vclick-current",mo="slidev-vclick-prior";function rr(e,n){if(!e)return!1;const l=e.indexOf(n);return l>=0?(e.splice(l,1),!0):!1}function _5(...e){let n,l,o;e.length===1?(n=0,o=1,[l]=e):[n,l,o=1]=e;const t=[];let a=n;for(;a<l;)t.push(a),a+=o||1;return t}function D5(e){return e!=null}function v5(e,n){return Object.fromEntries(Object.entries(e).map(([l,o])=>n(l,o)).filter(D5))}var kn={theme:"./slidev-theme-academic-1.1.1",title:"Linked lists",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},fonts:{sans:['"Montserrat"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Roboto Slab"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Roboto Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Montserrat","Roboto Slab","Roboto Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",hightlighter:"prism",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap5/cover.png",class:"text-white",coverDate:null};const gs=kn;var Ti;const yn=(Ti=gs.aspectRatio)!=null?Ti:16/9;var Mi;const zn=(Mi=gs.canvasWidth)!=null?Mi:980,jp=Math.round(zn/yn),Rp=O(()=>v5(gs.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function we(e,n,l){Object.defineProperty(e,n,{value:l,writable:!0,enumerable:!1})}const jn=Ms({page:0,clicks:0});let g5=[],b5=[];we(jn,"$syncUp",!0);we(jn,"$syncDown",!0);we(jn,"$paused",!1);we(jn,"$onSet",e=>g5.push(e));we(jn,"$onPatch",e=>b5.push(e));we(jn,"$patch",async()=>!1);function Ip(e,n,l=!1){const o=[];let t=!1,a=!1,c,i;const p=Ms(n);function y(B){o.push(B)}function u(B,h){clearTimeout(c),t=!0,p[B]=h,c=setTimeout(()=>t=!1,0)}function f(B){t||(clearTimeout(i),a=!0,Object.entries(B).forEach(([h,g])=>{p[h]=g}),i=setTimeout(()=>a=!1,0))}function d(B){let h;l?l&&window.addEventListener("storage",D=>{D&&D.key===B&&D.newValue&&f(JSON.parse(D.newValue))}):(h=new BroadcastChannel(B),h.addEventListener("message",D=>f(D.data)));function g(){!l&&h&&!a?h.postMessage(bs(p)):l&&!a&&window.localStorage.setItem(B,JSON.stringify(p)),t||o.forEach(D=>D(p))}if(fs(p,g,{deep:!0}),l){const D=window.localStorage.getItem(B);D&&f(JSON.parse(D))}}return{init:d,onPatch:y,patch:u,state:p}}const{init:E5,onPatch:w5,patch:Bc,state:bt}=Ip(jn,{page:1,clicks:0}),Rn=Ms({});let x5=[],k5=[];we(Rn,"$syncUp",!0);we(Rn,"$syncDown",!0);we(Rn,"$paused",!1);we(Rn,"$onSet",e=>x5.push(e));we(Rn,"$onPatch",e=>k5.push(e));we(Rn,"$patch",async()=>!1);const{init:F5,onPatch:$5,patch:Np,state:To}=Ip(Rn,{},!1),O5="modulepreload",Ac={},S5="/courses/data-structure/linked-lists/",ul=function(n,l){return!l||l.length===0?n():Promise.all(l.map(o=>{if(o=`${S5}${o}`,o in Ac)return;Ac[o]=!0;const t=o.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":O5,t||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),t)return new Promise((i,p)=>{c.addEventListener("load",i),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())};function ae(e,n,l){return Array.isArray(e)?(e.length=Math.max(e.length,n),e.splice(n,1,l),l):(e[n]=l,l)}function z5(e,n){if(Array.isArray(e)){e.splice(n,1);return}delete e[n]}var hc;const ce=typeof window!="undefined",P5=e=>typeof e!="undefined",L5=Object.prototype.toString,T5=e=>typeof e=="number",Hp=e=>typeof e=="string",Mo=e=>L5.call(e)==="[object Object]",ar=()=>+Date.now(),un=()=>{};ce&&((hc=window==null?void 0:window.navigator)==null?void 0:hc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function M5(e,n){function l(...o){e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})}return l}const Vp=e=>e();function j5(e=Vp){const n=K(!0);function l(){n.value=!1}function o(){n.value=!0}return{isActive:n,pause:l,resume:o,eventFilter:(...a)=>{n.value&&e(...a)}}}function R5(e,n){var l;if(typeof e=="number")return e+n;const o=((l=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:l[0])||"",t=e.slice(o.length),a=parseFloat(o)+n;return Number.isNaN(a)?e:a+t}function Je(e){return Gu()?(Zu(e),!0):!1}function Hs(...e){return O(()=>e.every(n=>v(n)))}function ye(e){return O(()=>!v(e))}function I5(e){if(!ws(e))return Ms(e);const n=new Proxy({},{get(l,o,t){return v(Reflect.get(e.value,o,t))},set(l,o,t){return ws(e.value[o])&&!ws(t)?e.value[o].value=t:e.value[o]=t,!0},deleteProperty(l,o){return Reflect.deleteProperty(e.value,o)},has(l,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ms(n)}var N5=Object.defineProperty,H5=Object.defineProperties,V5=Object.getOwnPropertyDescriptors,mc=Object.getOwnPropertySymbols,W5=Object.prototype.hasOwnProperty,U5=Object.prototype.propertyIsEnumerable,Cc=(e,n,l)=>n in e?N5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,q5=(e,n)=>{for(var l in n||(n={}))W5.call(n,l)&&Cc(e,l,n[l]);if(mc)for(var l of mc(n))U5.call(n,l)&&Cc(e,l,n[l]);return e},K5=(e,n)=>H5(e,V5(n));function Y5(e){if(!ws(e))return x8(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const l in e.value)n[l]=w8(()=>({get(){return e.value[l]},set(o){if(Array.isArray(e.value)){const t=[...e.value];t[l]=o,e.value=t}else{const t=K5(q5({},e.value),{[l]:o});Object.setPrototypeOf(t,e.value),e.value=t}}}));return n}function G5(e,n=!0){Mn()?hp(e):n?e():Ys(e)}function Z5(e,n=!0){Mn()?yl(e):n?e():Ys(e)}function Qr(e){Mn()&&tt(e)}function X5(e,n=1e3,l={}){const{immediate:o=!0,immediateCallback:t=!1}=l;let a=null;const c=K(!1);function i(){a&&(clearInterval(a),a=null)}function p(){c.value=!1,i()}function y(){v(n)<=0||(c.value=!0,t&&e(),i(),a=setInterval(e,v(n)))}if(o&&ce&&y(),ws(n)){const u=fs(n,()=>{c.value&&ce&&y()});Je(u)}return Je(p),{isActive:c,pause:p,resume:y}}function J5(e,n,l={}){const{immediate:o=!0}=l,t=K(!1);let a=null;function c(){a&&(clearTimeout(a),a=null)}function i(){t.value=!1,c()}function p(...y){c(),t.value=!0,a=setTimeout(()=>{t.value=!1,a=null,e(...y)},v(n))}return o&&(t.value=!0,ce&&p()),Je(i),{isPending:t,start:p,stop:i}}function Wp(e=!1,n={}){const{truthyValue:l=!0,falsyValue:o=!1}=n,t=ws(e),a=K(e);function c(i){return arguments.length?(a.value=i,a.value):(a.value=a.value===v(l)?v(o):v(l),a.value)}return t?c:[a,c]}var _c=Object.getOwnPropertySymbols,Q5=Object.prototype.hasOwnProperty,sf=Object.prototype.propertyIsEnumerable,ef=(e,n)=>{var l={};for(var o in e)Q5.call(e,o)&&n.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&_c)for(var o of _c(e))n.indexOf(o)<0&&sf.call(e,o)&&(l[o]=e[o]);return l};function nf(e,n,l={}){const o=l,{eventFilter:t=Vp}=o,a=ef(o,["eventFilter"]);return fs(e,M5(t,n),a)}function lf(e,n,l){const o=fs(e,(...t)=>(Ys(()=>o()),n(...t)),l)}var of=Object.defineProperty,tf=Object.defineProperties,rf=Object.getOwnPropertyDescriptors,jo=Object.getOwnPropertySymbols,Up=Object.prototype.hasOwnProperty,qp=Object.prototype.propertyIsEnumerable,Dc=(e,n,l)=>n in e?of(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,af=(e,n)=>{for(var l in n||(n={}))Up.call(n,l)&&Dc(e,l,n[l]);if(jo)for(var l of jo(n))qp.call(n,l)&&Dc(e,l,n[l]);return e},cf=(e,n)=>tf(e,rf(n)),pf=(e,n)=>{var l={};for(var o in e)Up.call(e,o)&&n.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&jo)for(var o of jo(e))n.indexOf(o)<0&&qp.call(e,o)&&(l[o]=e[o]);return l};function yf(e,n,l={}){const o=l,{eventFilter:t}=o,a=pf(o,["eventFilter"]),{eventFilter:c,pause:i,resume:p,isActive:y}=j5(t);return{stop:nf(e,n,cf(af({},a),{eventFilter:c})),pause:i,resume:p,isActive:y}}function le(e){var n;const l=v(e);return(n=l==null?void 0:l.$el)!=null?n:l}const Qs=ce?window:void 0,uf=ce?window.document:void 0,df=ce?window.navigator:void 0;function Es(...e){let n,l,o,t;if(Hp(e[0])?([l,o,t]=e,n=Qs):[n,l,o,t]=e,!n)return un;let a=un;const c=fs(()=>le(n),p=>{a(),p&&(p.addEventListener(l,o,t),a=()=>{p.removeEventListener(l,o,t),a=un})},{immediate:!0,flush:"post"}),i=()=>{c(),a()};return Je(i),i}function ff(e,n,l={}){const{window:o=Qs,ignore:t,capture:a=!0,detectIframe:c=!1}=l;if(!o)return;const i=K(!0);let p;const y=d=>{o.clearTimeout(p);const B=le(e),h=d.composedPath();!B||B===d.target||h.includes(B)||!i.value||t&&t.length>0&&t.some(g=>{const D=le(g);return D&&(d.target===D||h.includes(D))})||n(d)},u=[Es(o,"click",y,{passive:!0,capture:a}),Es(o,"pointerdown",d=>{const B=le(e);i.value=!!B&&!d.composedPath().includes(B)},{passive:!0}),Es(o,"pointerup",d=>{if(d.button===0){const B=d.composedPath();d.composedPath=()=>B,p=o.setTimeout(()=>y(d),50)}},{passive:!0}),c&&Es(o,"blur",d=>{var B;const h=le(e);((B=document.activeElement)==null?void 0:B.tagName)==="IFRAME"&&!(h!=null&&h.contains(document.activeElement))&&n(d)})].filter(Boolean);return()=>u.forEach(d=>d())}const Bf=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):e?()=>!0:()=>!1;function Af(e,n,l={}){const{target:o=Qs,eventName:t="keydown",passive:a=!1}=l,c=Bf(e);return Es(o,t,p=>{c(p)&&n(p)},a)}function hf(e={}){const{window:n=Qs}=e,l=K(0);return n&&(Es(n,"blur",()=>l.value+=1,!0),Es(n,"focus",()=>l.value+=1,!0)),O(()=>(l.value,n==null?void 0:n.document.activeElement))}function Eo(e,n={}){const{window:l=Qs}=n,o=Boolean(l&&"matchMedia"in l&&typeof l.matchMedia=="function");let t;const a=K(!1),c=()=>{!o||(t||(t=l.matchMedia(e)),a.value=t.matches)};return G5(()=>{c(),t&&("addEventListener"in t?t.addEventListener("change",c):t.addListener(c),Je(()=>{"removeEventListener"in t?t.removeEventListener("change",c):t.removeListener(c)}))}),a}const mf={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Cf=Object.defineProperty,vc=Object.getOwnPropertySymbols,_f=Object.prototype.hasOwnProperty,Df=Object.prototype.propertyIsEnumerable,gc=(e,n,l)=>n in e?Cf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,vf=(e,n)=>{for(var l in n||(n={}))_f.call(n,l)&&gc(e,l,n[l]);if(vc)for(var l of vc(n))Df.call(n,l)&&gc(e,l,n[l]);return e};function gf(e,n={}){function l(i,p){let y=e[i];return p!=null&&(y=R5(y,p)),typeof y=="number"&&(y=`${y}px`),y}const{window:o=Qs}=n;function t(i){return o?o.matchMedia(i).matches:!1}const a=i=>Eo(`(min-width: ${l(i)})`,n),c=Object.keys(e).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>a(p),enumerable:!0,configurable:!0}),i),{});return vf({greater:a,smaller(i){return Eo(`(max-width: ${l(i,-.1)})`,n)},between(i,p){return Eo(`(min-width: ${l(i)}) and (max-width: ${l(p,-.1)})`,n)},isGreater(i){return t(`(min-width: ${l(i)})`)},isSmaller(i){return t(`(max-width: ${l(i,-.1)})`)},isInBetween(i,p){return t(`(min-width: ${l(i)}) and (max-width: ${l(p,-.1)})`)}},c)}function bf(e={}){const{navigator:n=df,read:l=!1,source:o,copiedDuring:t=1500}=e,a=["copy","cut"],c=Boolean(n&&"clipboard"in n),i=K(""),p=K(!1),y=J5(()=>p.value=!1,t);function u(){n.clipboard.readText().then(d=>{i.value=d})}if(c&&l)for(const d of a)Es(d,u);async function f(d=v(o)){c&&d!=null&&(await n.clipboard.writeText(d),i.value=d,p.value=!0,y.start())}return{isSupported:c,text:i,copied:p,copy:f}}const cr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ir="__vueuse_ssr_handlers__";cr[ir]=cr[ir]||{};const Ef=cr[ir];function wf(e,n){return Ef[e]||n}function xf(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const kf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Te(e,n,l,o={}){var t;const{flush:a="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,shallow:y,window:u=Qs,eventFilter:f,onError:d=T=>{console.error(T)}}=o,B=(y?We:K)(n);if(!l)try{l=wf("getDefaultStorage",()=>{var T;return(T=Qs)==null?void 0:T.localStorage})()}catch(T){d(T)}if(!l)return B;const h=v(n),g=xf(h),D=(t=o.serializer)!=null?t:kf[g],{pause:k,resume:w}=yf(B,()=>x(B.value),{flush:a,deep:c,eventFilter:f});return u&&i&&Es(u,"storage",N),N(),B;function x(T){try{T==null?l.removeItem(e):l.setItem(e,D.write(T))}catch(X){d(X)}}function $(T){if(!(T&&T.key!==e)){k();try{const X=T?T.newValue:l.getItem(e);return X==null?(p&&h!==null&&l.setItem(e,D.write(h)),h):typeof X!="string"?X:D.read(X)}catch(X){d(X)}finally{w()}}}function N(T){T&&T.key!==e||(B.value=$(T))}}function Ff(e){return Eo("(prefers-color-scheme: dark)",e)}var $f=Object.defineProperty,Of=Object.defineProperties,Sf=Object.getOwnPropertyDescriptors,bc=Object.getOwnPropertySymbols,zf=Object.prototype.hasOwnProperty,Pf=Object.prototype.propertyIsEnumerable,Ec=(e,n,l)=>n in e?$f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Lf=(e,n)=>{for(var l in n||(n={}))zf.call(n,l)&&Ec(e,l,n[l]);if(bc)for(var l of bc(n))Pf.call(n,l)&&Ec(e,l,n[l]);return e},Tf=(e,n)=>Of(e,Sf(n));function tk(e,n={}){var l,o;const t=(l=n.draggingElement)!=null?l:Qs,a=K((o=n.initialValue)!=null?o:{x:0,y:0}),c=K(),i=d=>n.pointerTypes?n.pointerTypes.includes(d.pointerType):!0,p=d=>{v(n.preventDefault)&&d.preventDefault(),v(n.stopPropagation)&&d.stopPropagation()},y=d=>{var B;if(!i(d)||v(n.exact)&&d.target!==v(e))return;const h=v(e).getBoundingClientRect(),g={x:d.pageX-h.left,y:d.pageY-h.top};((B=n.onStart)==null?void 0:B.call(n,g,d))!==!1&&(c.value=g,p(d))},u=d=>{var B;!i(d)||!c.value||(a.value={x:d.pageX-c.value.x,y:d.pageY-c.value.y},(B=n.onMove)==null||B.call(n,a.value,d),p(d))},f=d=>{var B;!i(d)||!c.value||(c.value=void 0,(B=n.onEnd)==null||B.call(n,a.value,d),p(d))};return ce&&(Es(e,"pointerdown",y,!0),Es(t,"pointermove",u,!0),Es(t,"pointerup",f,!0)),Tf(Lf({},Y5(a)),{position:a,isDragging:O(()=>!!c.value),style:O(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var wc=Object.getOwnPropertySymbols,Mf=Object.prototype.hasOwnProperty,jf=Object.prototype.propertyIsEnumerable,Rf=(e,n)=>{var l={};for(var o in e)Mf.call(e,o)&&n.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&wc)for(var o of wc(e))n.indexOf(o)<0&&jf.call(e,o)&&(l[o]=e[o]);return l};function If(e,n,l={}){const o=l,{window:t=Qs}=o,a=Rf(o,["window"]);let c;const i=t&&"ResizeObserver"in t,p=()=>{c&&(c.disconnect(),c=void 0)},y=fs(()=>le(e),f=>{p(),i&&t&&f&&(c=new ResizeObserver(n),c.observe(f,a))},{immediate:!0,flush:"post"}),u=()=>{p(),y()};return Je(u),{isSupported:i,stop:u}}function Kp(e,n={}){const{immediate:l=!0,window:o=Qs}=n,t=K(!1);let a=null;function c(){!t.value||!o||(e(),a=o.requestAnimationFrame(c))}function i(){!t.value&&o&&(t.value=!0,c())}function p(){t.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return l&&i(),Je(p),{isActive:t,pause:p,resume:i}}function Nf(e,n={width:0,height:0},l={}){const o=K(n.width),t=K(n.height);return If(e,([a])=>{o.value=a.contentRect.width,t.value=a.contentRect.height},l),fs(()=>le(e),a=>{o.value=a?n.width:0,t.value=a?n.height:0}),{width:o,height:t}}const xc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Hf(e,n={}){const{document:l=uf,autoExit:o=!1}=n,t=e||(l==null?void 0:l.querySelector("html")),a=K(!1);let c=!1,i=xc[0];if(!l)c=!1;else for(const g of xc)if(g[1]in l){i=g,c=!0;break}const[p,y,u,,f]=i;async function d(){!c||(l!=null&&l[u]&&await l[y](),a.value=!1)}async function B(){if(!c)return;await d();const g=le(t);g&&(await g[p](),a.value=!0)}async function h(){a.value?await d():await B()}return l&&Es(l,f,()=>{a.value=!!(l!=null&&l[u])},!1),o&&Je(d),{isSupported:c,isFullscreen:a,enter:B,exit:d,toggle:h}}function Vf(e,n,l={}){const{root:o,rootMargin:t="0px",threshold:a=.1,window:c=Qs}=l,i=c&&"IntersectionObserver"in c;let p=un;const y=i?fs(()=>({el:le(e),root:le(o)}),({el:f,root:d})=>{if(p(),!f)return;const B=new IntersectionObserver(n,{root:d,rootMargin:t,threshold:a});B.observe(f),p=()=>{B.disconnect(),p=un}},{immediate:!0,flush:"post"}):un,u=()=>{p(),y()};return Je(u),{isSupported:i,stop:u}}const Wf={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Uf(e={}){const{reactive:n=!1,target:l=Qs,aliasMap:o=Wf,passive:t=!0,onEventFired:a=un}=e,c=Ms(new Set),i={toJSON(){return{}},current:c},p=n?Ms(i):i,y=new Set,u=new Set;function f(g,D){g in p&&(n?p[g]=D:p[g].value=D)}function d(){for(const g of u)f(g,!1)}function B(g,D){var k,w;const x=(k=g.key)==null?void 0:k.toLowerCase(),$=(w=g.code)==null?void 0:w.toLowerCase(),N=[$,x].filter(Boolean);$&&(D?c.add(g.code):c.delete(g.code));for(const T of N)u.add(T),f(T,D);x==="meta"&&!D?(y.forEach(T=>{c.delete(T),f(T,!1)}),y.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&D&&[...c,...N].forEach(T=>y.add(T))}l&&(Es(l,"keydown",g=>(B(g,!0),a(g)),{passive:t}),Es(l,"keyup",g=>(B(g,!1),a(g)),{passive:t}),Es("blur",d,{passive:!0}),Es("focus",d,{passive:!0}));const h=new Proxy(p,{get(g,D,k){if(typeof D!="string")return Reflect.get(g,D,k);if(D=D.toLowerCase(),D in o&&(D=o[D]),!(D in p))if(/[+_-]/.test(D)){const x=D.split(/[+_-]/g).map($=>$.trim());p[D]=O(()=>x.every($=>v(h[$])))}else p[D]=K(!1);const w=Reflect.get(g,D,k);return n?v(w):w}});return h}function rk(e={}){const{type:n="page",touch:l=!0,resetOnTouchEnds:o=!1,initialValue:t={x:0,y:0},window:a=Qs,eventFilter:c}=e,i=K(t.x),p=K(t.y),y=K(null),u=g=>{n==="page"?(i.value=g.pageX,p.value=g.pageY):n==="client"&&(i.value=g.clientX,p.value=g.clientY),y.value="mouse"},f=()=>{i.value=t.x,p.value=t.y},d=g=>{if(g.touches.length>0){const D=g.touches[0];n==="page"?(i.value=D.pageX,p.value=D.pageY):n==="client"&&(i.value=D.clientX,p.value=D.clientY),y.value="touch"}},B=g=>c===void 0?u(g):c(()=>u(g),{}),h=g=>c===void 0?d(g):c(()=>d(g),{});return a&&(Es(a,"mousemove",B,{passive:!0}),Es(a,"dragover",B,{passive:!0}),l&&(Es(a,"touchstart",h,{passive:!0}),Es(a,"touchmove",h,{passive:!0}),o&&Es(a,"touchend",f,{passive:!0}))),{x:i,y:p,sourceType:y}}var Ze;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ze||(Ze={}));function qf(e,n={}){const l=K(e),{threshold:o=50,onSwipe:t,onSwipeEnd:a,onSwipeStart:c}=n,i=Ms({x:0,y:0}),p=(T,X)=>{i.x=T,i.y=X},y=Ms({x:0,y:0}),u=(T,X)=>{y.x=T,y.y=X},f=O(()=>i.x-y.x),d=O(()=>i.y-y.y),{max:B,abs:h}=Math,g=O(()=>B(h(f.value),h(d.value))>=o),D=K(!1),k=K(!1),w=O(()=>g.value?h(f.value)>h(d.value)?f.value>0?Ze.LEFT:Ze.RIGHT:d.value>0?Ze.UP:Ze.DOWN:Ze.NONE),x=T=>n.pointerTypes?n.pointerTypes.includes(T.pointerType):!0,$=[Es(e,"pointerdown",T=>{var X,is;if(!x(T))return;k.value=!0,(is=(X=l.value)==null?void 0:X.style)==null||is.setProperty("touch-action","none");const Bs=T.target;Bs==null||Bs.setPointerCapture(T.pointerId);const{clientX:hs,clientY:_s}=T;p(hs,_s),u(hs,_s),c==null||c(T)}),Es(e,"pointermove",T=>{if(!x(T)||!k.value)return;const{clientX:X,clientY:is}=T;u(X,is),!D.value&&g.value&&(D.value=!0),D.value&&(t==null||t(T))}),Es(e,"pointerup",T=>{var X,is;!x(T)||(D.value&&(a==null||a(T,w.value)),k.value=!1,D.value=!1,(is=(X=l.value)==null?void 0:X.style)==null||is.setProperty("touch-action","initial"))})],N=()=>$.forEach(T=>T());return{isSwiping:Yn(D),direction:Yn(w),posStart:Yn(i),posEnd:Yn(y),distanceX:f,distanceY:d,stop:N}}var Kf=Object.defineProperty,kc=Object.getOwnPropertySymbols,Yf=Object.prototype.hasOwnProperty,Gf=Object.prototype.propertyIsEnumerable,Fc=(e,n,l)=>n in e?Kf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Zf=(e,n)=>{for(var l in n||(n={}))Yf.call(n,l)&&Fc(e,l,n[l]);if(kc)for(var l of kc(n))Gf.call(n,l)&&Fc(e,l,n[l]);return e};function ak(e={}){const{controls:n=!1,offset:l=0,immediate:o=!0,interval:t="requestAnimationFrame"}=e,a=K(ar()+l),c=()=>a.value=ar()+l,i=t==="requestAnimationFrame"?Kp(c,{immediate:o}):X5(c,t,{immediate:o});return n?Zf({timestamp:a},i):a}function Ne(e,n,l,o={}){var t,a,c;const{passive:i=!1,eventName:p,deep:y=!1,defaultValue:u}=o,f=Mn(),d=l||(f==null?void 0:f.emit)||((t=f==null?void 0:f.$emit)==null?void 0:t.bind(f))||((c=(a=f==null?void 0:f.proxy)==null?void 0:a.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let B=p;n||(n="modelValue"),B=p||B||`update:${n.toString()}`;const h=()=>P5(e[n])?e[n]:u;if(i){const g=K(h());return fs(()=>e[n],D=>g.value=D),fs(g,D=>{(D!==e[n]||y)&&d(B,D)},{deep:y}),g}else return O({get(){return h()},set(g){d(B,g)}})}function ck({window:e=Qs}={}){if(!e)return K(!1);const n=K(e.document.hasFocus());return Es(e,"blur",()=>{n.value=!1}),Es(e,"focus",()=>{n.value=!0}),n}function Xf(e={}){const{window:n=Qs,initialWidth:l=1/0,initialHeight:o=1/0,listenOrientation:t=!0}=e,a=K(l),c=K(o),i=()=>{n&&(a.value=n.innerWidth,c.value=n.innerHeight)};return i(),Z5(i),Es("resize",i,{passive:!0}),t&&Es("orientationchange",i,{passive:!0}),{width:a,height:c}}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kn=typeof window!="undefined";function Jf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ss=Object.assign;function Et(e,n){const l={};for(const o in n){const t=n[o];l[o]=Le(t)?t.map(e):e(t)}return l}const Pl=()=>{},Le=Array.isArray,Qf=/\/$/,s3=e=>e.replace(Qf,"");function wt(e,n,l="/"){let o,t={},a="",c="";const i=n.indexOf("#");let p=n.indexOf("?");return i<p&&i>=0&&(p=-1),p>-1&&(o=n.slice(0,p),a=n.slice(p+1,i>-1?i:n.length),t=e(a)),i>-1&&(o=o||n.slice(0,i),c=n.slice(i,n.length)),o=o3(o!=null?o:n,l),{fullPath:o+(a&&"?")+a+c,path:o,query:t,hash:c}}function e3(e,n){const l=n.query?e(n.query):"";return n.path+(l&&"?")+l+(n.hash||"")}function $c(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function n3(e,n,l){const o=n.matched.length-1,t=l.matched.length-1;return o>-1&&o===t&&rl(n.matched[o],l.matched[t])&&Yp(n.params,l.params)&&e(n.query)===e(l.query)&&n.hash===l.hash}function rl(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Yp(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const l in e)if(!l3(e[l],n[l]))return!1;return!0}function l3(e,n){return Le(e)?Oc(e,n):Le(n)?Oc(n,e):e===n}function Oc(e,n){return Le(n)?e.length===n.length&&e.every((l,o)=>l===n[o]):e.length===1&&e[0]===n}function o3(e,n){if(e.startsWith("/"))return e;if(!e)return n;const l=n.split("/"),o=e.split("/");let t=l.length-1,a,c;for(a=0;a<o.length;a++)if(c=o[a],c!==".")if(c==="..")t>1&&t--;else break;return l.slice(0,t).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Gl;(function(e){e.pop="pop",e.push="push"})(Gl||(Gl={}));var Ll;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ll||(Ll={}));function t3(e){if(!e)if(Kn){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),s3(e)}const r3=/^[^#]+#/;function a3(e,n){return e.replace(r3,"#")+n}function c3(e,n){const l=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-l.left-(n.left||0),top:o.top-l.top-(n.top||0)}}const ct=()=>({left:window.pageXOffset,top:window.pageYOffset});function i3(e){let n;if("el"in e){const l=e.el,o=typeof l=="string"&&l.startsWith("#"),t=typeof l=="string"?o?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!t)return;n=c3(t,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Sc(e,n){return(history.state?history.state.position-n:-1)+e}const pr=new Map;function p3(e,n){pr.set(e,n)}function y3(e){const n=pr.get(e);return pr.delete(e),n}let u3=()=>location.protocol+"//"+location.host;function Gp(e,n){const{pathname:l,search:o,hash:t}=n,a=e.indexOf("#");if(a>-1){let i=t.includes(e.slice(a))?e.slice(a).length:1,p=t.slice(i);return p[0]!=="/"&&(p="/"+p),$c(p,"")}return $c(l,e)+o+t}function d3(e,n,l,o){let t=[],a=[],c=null;const i=({state:d})=>{const B=Gp(e,location),h=l.value,g=n.value;let D=0;if(d){if(l.value=B,n.value=d,c&&c===h){c=null;return}D=g?d.position-g.position:0}else o(B);t.forEach(k=>{k(l.value,h,{delta:D,type:Gl.pop,direction:D?D>0?Ll.forward:Ll.back:Ll.unknown})})};function p(){c=l.value}function y(d){t.push(d);const B=()=>{const h=t.indexOf(d);h>-1&&t.splice(h,1)};return a.push(B),B}function u(){const{history:d}=window;!d.state||d.replaceState(Ss({},d.state,{scroll:ct()}),"")}function f(){for(const d of a)d();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:p,listen:y,destroy:f}}function zc(e,n,l,o=!1,t=!1){return{back:e,current:n,forward:l,replaced:o,position:window.history.length,scroll:t?ct():null}}function f3(e){const{history:n,location:l}=window,o={value:Gp(e,l)},t={value:n.state};t.value||a(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function a(p,y,u){const f=e.indexOf("#"),d=f>-1?(l.host&&document.querySelector("base")?e:e.slice(f))+p:u3()+e+p;try{n[u?"replaceState":"pushState"](y,"",d),t.value=y}catch(B){console.error(B),l[u?"replace":"assign"](d)}}function c(p,y){const u=Ss({},n.state,zc(t.value.back,p,t.value.forward,!0),y,{position:t.value.position});a(p,u,!0),o.value=p}function i(p,y){const u=Ss({},t.value,n.state,{forward:p,scroll:ct()});a(u.current,u,!0);const f=Ss({},zc(o.value,p,null),{position:u.position+1},y);a(p,f,!1),o.value=p}return{location:o,state:t,push:i,replace:c}}function B3(e){e=t3(e);const n=f3(e),l=d3(e,n.state,n.location,n.replace);function o(a,c=!0){c||l.pauseListeners(),history.go(a)}const t=Ss({location:"",base:e,go:o,createHref:a3.bind(null,e)},n,l);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>n.state.value}),t}function A3(e){return typeof e=="string"||e&&typeof e=="object"}function Zp(e){return typeof e=="string"||typeof e=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xp=Symbol("");var Pc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Pc||(Pc={}));function al(e,n){return Ss(new Error,{type:e,[Xp]:!0},n)}function qe(e,n){return e instanceof Error&&Xp in e&&(n==null||!!(e.type&n))}const Lc="[^/]+?",h3={sensitive:!1,strict:!1,start:!0,end:!0},m3=/[.+*?^${}()[\]/\\]/g;function C3(e,n){const l=Ss({},h3,n),o=[];let t=l.start?"^":"";const a=[];for(const y of e){const u=y.length?[]:[90];l.strict&&!y.length&&(t+="/");for(let f=0;f<y.length;f++){const d=y[f];let B=40+(l.sensitive?.25:0);if(d.type===0)f||(t+="/"),t+=d.value.replace(m3,"\\$&"),B+=40;else if(d.type===1){const{value:h,repeatable:g,optional:D,regexp:k}=d;a.push({name:h,repeatable:g,optional:D});const w=k||Lc;if(w!==Lc){B+=10;try{new RegExp(`(${w})`)}catch($){throw new Error(`Invalid custom RegExp for param "${h}" (${w}): `+$.message)}}let x=g?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(x=D&&y.length<2?`(?:/${x})`:"/"+x),D&&(x+="?"),t+=x,B+=20,D&&(B+=-8),g&&(B+=-20),w===".*"&&(B+=-50)}u.push(B)}o.push(u)}if(l.strict&&l.end){const y=o.length-1;o[y][o[y].length-1]+=.7000000000000001}l.strict||(t+="/?"),l.end?t+="$":l.strict&&(t+="(?:/|$)");const c=new RegExp(t,l.sensitive?"":"i");function i(y){const u=y.match(c),f={};if(!u)return null;for(let d=1;d<u.length;d++){const B=u[d]||"",h=a[d-1];f[h.name]=B&&h.repeatable?B.split("/"):B}return f}function p(y){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const B of d)if(B.type===0)u+=B.value;else if(B.type===1){const{value:h,repeatable:g,optional:D}=B,k=h in y?y[h]:"";if(Le(k)&&!g)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const w=Le(k)?k.join("/"):k;if(!w)if(D)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);u+=w}}return u||"/"}return{re:c,score:o,keys:a,parse:i,stringify:p}}function _3(e,n){let l=0;for(;l<e.length&&l<n.length;){const o=n[l]-e[l];if(o)return o;l++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function D3(e,n){let l=0;const o=e.score,t=n.score;for(;l<o.length&&l<t.length;){const a=_3(o[l],t[l]);if(a)return a;l++}if(Math.abs(t.length-o.length)===1){if(Tc(o))return 1;if(Tc(t))return-1}return t.length-o.length}function Tc(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const v3={type:0,value:""},g3=/[a-zA-Z0-9_]/;function b3(e){if(!e)return[[]];if(e==="/")return[[v3]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(B){throw new Error(`ERR (${l})/"${y}": ${B}`)}let l=0,o=l;const t=[];let a;function c(){a&&t.push(a),a=[]}let i=0,p,y="",u="";function f(){!y||(l===0?a.push({type:0,value:y}):l===1||l===2||l===3?(a.length>1&&(p==="*"||p==="+")&&n(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:y,regexp:u,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):n("Invalid state to consume buffer"),y="")}function d(){y+=p}for(;i<e.length;){if(p=e[i++],p==="\\"&&l!==2){o=l,l=4;continue}switch(l){case 0:p==="/"?(y&&f(),c()):p===":"?(f(),l=1):d();break;case 4:d(),l=o;break;case 1:p==="("?l=2:g3.test(p)?d():(f(),l=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+p:l=3:u+=p;break;case 3:f(),l=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,u="";break;default:n("Unknown state");break}}return l===2&&n(`Unfinished custom RegExp for param "${y}"`),f(),c(),t}function E3(e,n,l){const o=C3(b3(e.path),l),t=Ss(o,{record:e,parent:n,children:[],alias:[]});return n&&!t.record.aliasOf==!n.record.aliasOf&&n.children.push(t),t}function w3(e,n){const l=[],o=new Map;n=jc({strict:!1,end:!0,sensitive:!1},n);function t(u){return o.get(u)}function a(u,f,d){const B=!d,h=k3(u);h.aliasOf=d&&d.record;const g=jc(n,u),D=[h];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const $ of x)D.push(Ss({},h,{components:d?d.record.components:h.components,path:$,aliasOf:d?d.record:h}))}let k,w;for(const x of D){const{path:$}=x;if(f&&$[0]!=="/"){const N=f.record.path,T=N[N.length-1]==="/"?"":"/";x.path=f.record.path+($&&T+$)}if(k=E3(x,f,g),d?d.alias.push(k):(w=w||k,w!==k&&w.alias.push(k),B&&u.name&&!Mc(k)&&c(u.name)),h.children){const N=h.children;for(let T=0;T<N.length;T++)a(N[T],k,d&&d.children[T])}d=d||k,p(k)}return w?()=>{c(w)}:Pl}function c(u){if(Zp(u)){const f=o.get(u);f&&(o.delete(u),l.splice(l.indexOf(f),1),f.children.forEach(c),f.alias.forEach(c))}else{const f=l.indexOf(u);f>-1&&(l.splice(f,1),u.record.name&&o.delete(u.record.name),u.children.forEach(c),u.alias.forEach(c))}}function i(){return l}function p(u){let f=0;for(;f<l.length&&D3(u,l[f])>=0&&(u.record.path!==l[f].record.path||!Jp(u,l[f]));)f++;l.splice(f,0,u),u.record.name&&!Mc(u)&&o.set(u.record.name,u)}function y(u,f){let d,B={},h,g;if("name"in u&&u.name){if(d=o.get(u.name),!d)throw al(1,{location:u});g=d.record.name,B=Ss(x3(f.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),h=d.stringify(B)}else if("path"in u)h=u.path,d=l.find(w=>w.re.test(h)),d&&(B=d.parse(h),g=d.record.name);else{if(d=f.name?o.get(f.name):l.find(w=>w.re.test(f.path)),!d)throw al(1,{location:u,currentLocation:f});g=d.record.name,B=Ss({},f.params,u.params),h=d.stringify(B)}const D=[];let k=d;for(;k;)D.unshift(k.record),k=k.parent;return{name:g,path:h,params:B,matched:D,meta:$3(D)}}return e.forEach(u=>a(u)),{addRoute:a,resolve:y,removeRoute:c,getRoutes:i,getRecordMatcher:t}}function x3(e,n){const l={};for(const o of n)o in e&&(l[o]=e[o]);return l}function k3(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:F3(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function F3(e){const n={},l=e.props||!1;if("component"in e)n.default=l;else for(const o in e.components)n[o]=typeof l=="boolean"?l:l[o];return n}function Mc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $3(e){return e.reduce((n,l)=>Ss(n,l.meta),{})}function jc(e,n){const l={};for(const o in e)l[o]=o in n?n[o]:e[o];return l}function Jp(e,n){return n.children.some(l=>l===e||Jp(e,l))}const Qp=/#/g,O3=/&/g,S3=/\//g,z3=/=/g,P3=/\?/g,sy=/\+/g,L3=/%5B/g,T3=/%5D/g,ey=/%5E/g,M3=/%60/g,ny=/%7B/g,j3=/%7C/g,ly=/%7D/g,R3=/%20/g;function sa(e){return encodeURI(""+e).replace(j3,"|").replace(L3,"[").replace(T3,"]")}function I3(e){return sa(e).replace(ny,"{").replace(ly,"}").replace(ey,"^")}function yr(e){return sa(e).replace(sy,"%2B").replace(R3,"+").replace(Qp,"%23").replace(O3,"%26").replace(M3,"`").replace(ny,"{").replace(ly,"}").replace(ey,"^")}function N3(e){return yr(e).replace(z3,"%3D")}function H3(e){return sa(e).replace(Qp,"%23").replace(P3,"%3F")}function V3(e){return e==null?"":H3(e).replace(S3,"%2F")}function Ro(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function W3(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let t=0;t<o.length;++t){const a=o[t].replace(sy," "),c=a.indexOf("="),i=Ro(c<0?a:a.slice(0,c)),p=c<0?null:Ro(a.slice(c+1));if(i in n){let y=n[i];Le(y)||(y=n[i]=[y]),y.push(p)}else n[i]=p}return n}function Rc(e){let n="";for(let l in e){const o=e[l];if(l=N3(l),o==null){o!==void 0&&(n+=(n.length?"&":"")+l);continue}(Le(o)?o.map(a=>a&&yr(a)):[o&&yr(o)]).forEach(a=>{a!==void 0&&(n+=(n.length?"&":"")+l,a!=null&&(n+="="+a))})}return n}function U3(e){const n={};for(const l in e){const o=e[l];o!==void 0&&(n[l]=Le(o)?o.map(t=>t==null?null:""+t):o==null?o:""+o)}return n}const q3=Symbol(""),Ic=Symbol(""),ea=Symbol(""),oy=Symbol(""),ur=Symbol("");function Cl(){let e=[];function n(o){return e.push(o),()=>{const t=e.indexOf(o);t>-1&&e.splice(t,1)}}function l(){e=[]}return{add:n,list:()=>e,reset:l}}function rn(e,n,l,o,t){const a=o&&(o.enterCallbacks[t]=o.enterCallbacks[t]||[]);return()=>new Promise((c,i)=>{const p=f=>{f===!1?i(al(4,{from:l,to:n})):f instanceof Error?i(f):A3(f)?i(al(2,{from:n,to:f})):(a&&o.enterCallbacks[t]===a&&typeof f=="function"&&a.push(f),c())},y=e.call(o&&o.instances[t],n,l,p);let u=Promise.resolve(y);e.length<3&&(u=u.then(p)),u.catch(f=>i(f))})}function xt(e,n,l,o){const t=[];for(const a of e)for(const c in a.components){let i=a.components[c];if(!(n!=="beforeRouteEnter"&&!a.instances[c]))if(K3(i)){const y=(i.__vccOpts||i)[n];y&&t.push(rn(y,l,o,a,c))}else{let p=i();t.push(()=>p.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const u=Jf(y)?y.default:y;a.components[c]=u;const d=(u.__vccOpts||u)[n];return d&&rn(d,l,o,a,c)()}))}}return t}function K3(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Nc(e){const n=F(ea),l=F(oy),o=O(()=>n.resolve(v(e.to))),t=O(()=>{const{matched:p}=o.value,{length:y}=p,u=p[y-1],f=l.matched;if(!u||!f.length)return-1;const d=f.findIndex(rl.bind(null,u));if(d>-1)return d;const B=Hc(p[y-2]);return y>1&&Hc(u)===B&&f[f.length-1].path!==B?f.findIndex(rl.bind(null,p[y-2])):d}),a=O(()=>t.value>-1&&X3(l.params,o.value.params)),c=O(()=>t.value>-1&&t.value===l.matched.length-1&&Yp(l.params,o.value.params));function i(p={}){return Z3(p)?n[v(e.replace)?"replace":"push"](v(e.to)).catch(Pl):Promise.resolve()}return{route:o,href:O(()=>o.value.href),isActive:a,isExactActive:c,navigate:i}}const Y3=xs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nc,setup(e,{slots:n}){const l=Ms(Nc(e)),{options:o}=F(ea),t=O(()=>({[Vc(e.activeClass,o.linkActiveClass,"router-link-active")]:l.isActive,[Vc(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const a=n.default&&n.default(l);return e.custom?a:Ae("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:t.value},a)}}}),G3=Y3;function Z3(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function X3(e,n){for(const l in n){const o=n[l],t=e[l];if(typeof o=="string"){if(o!==t)return!1}else if(!Le(t)||t.length!==o.length||o.some((a,c)=>a!==t[c]))return!1}return!0}function Hc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Vc=(e,n,l)=>e!=null?e:n!=null?n:l,J3=xs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:l}){const o=F(ur),t=O(()=>e.route||o.value),a=F(Ic,0),c=O(()=>{let y=v(a);const{matched:u}=t.value;let f;for(;(f=u[y])&&!f.components;)y++;return y}),i=O(()=>t.value.matched[c.value]);fe(Ic,O(()=>c.value+1)),fe(q3,i),fe(ur,t);const p=K();return fs(()=>[p.value,i.value,e.name],([y,u,f],[d,B,h])=>{u&&(u.instances[f]=y,B&&B!==u&&y&&y===d&&(u.leaveGuards.size||(u.leaveGuards=B.leaveGuards),u.updateGuards.size||(u.updateGuards=B.updateGuards))),y&&u&&(!B||!rl(u,B)||!d)&&(u.enterCallbacks[f]||[]).forEach(g=>g(y))},{flush:"post"}),()=>{const y=t.value,u=e.name,f=i.value,d=f&&f.components[u];if(!d)return Wc(l.default,{Component:d,route:y});const B=f.props[u],h=B?B===!0?y.params:typeof B=="function"?B(y):B:null,D=Ae(d,Ss({},h,n,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:p}));return Wc(l.default,{Component:D,route:y})||D}}});function Wc(e,n){if(!e)return null;const l=e(n);return l.length===1?l[0]:l}const Q3=J3;function sB(e){const n=w3(e.routes,e),l=e.parseQuery||W3,o=e.stringifyQuery||Rc,t=e.history,a=Cl(),c=Cl(),i=Cl(),p=We(ln);let y=ln;Kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Et.bind(null,S=>""+S),f=Et.bind(null,V3),d=Et.bind(null,Ro);function B(S,J){let R,Q;return Zp(S)?(R=n.getRecordMatcher(S),Q=J):Q=S,n.addRoute(Q,R)}function h(S){const J=n.getRecordMatcher(S);J&&n.removeRoute(J)}function g(){return n.getRoutes().map(S=>S.record)}function D(S){return!!n.getRecordMatcher(S)}function k(S,J){if(J=Ss({},J||p.value),typeof S=="string"){const us=wt(l,S,J.path),A=n.resolve({path:us.path},J),C=t.createHref(us.fullPath);return Ss(us,A,{params:d(A.params),hash:Ro(us.hash),redirectedFrom:void 0,href:C})}let R;if("path"in S)R=Ss({},S,{path:wt(l,S.path,J.path).path});else{const us=Ss({},S.params);for(const A in us)us[A]==null&&delete us[A];R=Ss({},S,{params:f(S.params)}),J.params=f(J.params)}const Q=n.resolve(R,J),vs=S.hash||"";Q.params=u(d(Q.params));const Ps=e3(o,Ss({},S,{hash:I3(vs),path:Q.path})),As=t.createHref(Ps);return Ss({fullPath:Ps,hash:vs,query:o===Rc?U3(S.query):S.query||{}},Q,{redirectedFrom:void 0,href:As})}function w(S){return typeof S=="string"?wt(l,S,p.value.path):Ss({},S)}function x(S,J){if(y!==S)return al(8,{from:J,to:S})}function $(S){return X(S)}function N(S){return $(Ss(w(S),{replace:!0}))}function T(S){const J=S.matched[S.matched.length-1];if(J&&J.redirect){const{redirect:R}=J;let Q=typeof R=="function"?R(S):R;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=w(Q):{path:Q},Q.params={}),Ss({query:S.query,hash:S.hash,params:"path"in Q?{}:S.params},Q)}}function X(S,J){const R=y=k(S),Q=p.value,vs=S.state,Ps=S.force,As=S.replace===!0,us=T(R);if(us)return X(Ss(w(us),{state:vs,force:Ps,replace:As}),J||R);const A=R;A.redirectedFrom=J;let C;return!Ps&&n3(o,Q,R)&&(C=al(16,{to:A,from:Q}),Me(Q,Q,!0,!1)),(C?Promise.resolve(C):Bs(A,Q)).catch(E=>qe(E)?qe(E,2)?E:ms(E):as(E,A,Q)).then(E=>{if(E){if(qe(E,2))return X(Ss({replace:As},w(E.to),{state:vs,force:Ps}),J||A)}else E=_s(A,Q,!0,As,vs);return hs(A,Q,E),E})}function is(S,J){const R=x(S,J);return R?Promise.reject(R):Promise.resolve()}function Bs(S,J){let R;const[Q,vs,Ps]=eB(S,J);R=xt(Q.reverse(),"beforeRouteLeave",S,J);for(const us of Q)us.leaveGuards.forEach(A=>{R.push(rn(A,S,J))});const As=is.bind(null,S,J);return R.push(As),Nn(R).then(()=>{R=[];for(const us of a.list())R.push(rn(us,S,J));return R.push(As),Nn(R)}).then(()=>{R=xt(vs,"beforeRouteUpdate",S,J);for(const us of vs)us.updateGuards.forEach(A=>{R.push(rn(A,S,J))});return R.push(As),Nn(R)}).then(()=>{R=[];for(const us of S.matched)if(us.beforeEnter&&!J.matched.includes(us))if(Le(us.beforeEnter))for(const A of us.beforeEnter)R.push(rn(A,S,J));else R.push(rn(us.beforeEnter,S,J));return R.push(As),Nn(R)}).then(()=>(S.matched.forEach(us=>us.enterCallbacks={}),R=xt(Ps,"beforeRouteEnter",S,J),R.push(As),Nn(R))).then(()=>{R=[];for(const us of c.list())R.push(rn(us,S,J));return R.push(As),Nn(R)}).catch(us=>qe(us,8)?us:Promise.reject(us))}function hs(S,J,R){for(const Q of i.list())Q(S,J,R)}function _s(S,J,R,Q,vs){const Ps=x(S,J);if(Ps)return Ps;const As=J===ln,us=Kn?history.state:{};R&&(Q||As?t.replace(S.fullPath,Ss({scroll:As&&us&&us.scroll},vs)):t.push(S.fullPath,vs)),p.value=S,Me(S,J,R,As),ms()}let Ts;function Ns(){Ts||(Ts=t.listen((S,J,R)=>{if(!en.listening)return;const Q=k(S),vs=T(Q);if(vs){X(Ss(vs,{replace:!0}),Q).catch(Pl);return}y=Q;const Ps=p.value;Kn&&p3(Sc(Ps.fullPath,R.delta),ct()),Bs(Q,Ps).catch(As=>qe(As,12)?As:qe(As,2)?(X(As.to,Q).then(us=>{qe(us,20)&&!R.delta&&R.type===Gl.pop&&t.go(-1,!1)}).catch(Pl),Promise.reject()):(R.delta&&t.go(-R.delta,!1),as(As,Q,Ps))).then(As=>{As=As||_s(Q,Ps,!1),As&&(R.delta&&!qe(As,8)?t.go(-R.delta,!1):R.type===Gl.pop&&qe(As,20)&&t.go(-1,!1)),hs(Q,Ps,As)}).catch(Pl)}))}let Gs=Cl(),Fs=Cl(),ts;function as(S,J,R){ms(S);const Q=Fs.list();return Q.length?Q.forEach(vs=>vs(S,J,R)):console.error(S),Promise.reject(S)}function os(){return ts&&p.value!==ln?Promise.resolve():new Promise((S,J)=>{Gs.add([S,J])})}function ms(S){return ts||(ts=!S,Ns(),Gs.list().forEach(([J,R])=>S?R(S):J()),Gs.reset()),S}function Me(S,J,R,Q){const{scrollBehavior:vs}=e;if(!Kn||!vs)return Promise.resolve();const Ps=!R&&y3(Sc(S.fullPath,0))||(Q||!R)&&history.state&&history.state.scroll||null;return Ys().then(()=>vs(S,J,Ps)).then(As=>As&&i3(As)).catch(As=>as(As,S,J))}const se=S=>t.go(S);let De;const re=new Set,en={currentRoute:p,listening:!0,addRoute:B,removeRoute:h,hasRoute:D,getRoutes:g,resolve:k,options:e,push:$,replace:N,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:c.add,afterEach:i.add,onError:Fs.add,isReady:os,install(S){const J=this;S.component("RouterLink",G3),S.component("RouterView",Q3),S.config.globalProperties.$router=J,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>v(p)}),Kn&&!De&&p.value===ln&&(De=!0,$(t.location).catch(vs=>{}));const R={};for(const vs in ln)R[vs]=O(()=>p.value[vs]);S.provide(ea,J),S.provide(oy,Ms(R)),S.provide(ur,p);const Q=S.unmount;re.add(S),S.unmount=function(){re.delete(S),re.size<1&&(y=ln,Ts&&Ts(),Ts=null,p.value=ln,De=!1,ts=!1),Q()}}};return en}function Nn(e){return e.reduce((n,l)=>n.then(()=>l()),Promise.resolve())}function eB(e,n){const l=[],o=[],t=[],a=Math.max(n.matched.length,e.matched.length);for(let c=0;c<a;c++){const i=n.matched[c];i&&(e.matched.find(y=>rl(y,i))?o.push(i):l.push(i));const p=e.matched[c];p&&(n.matched.find(y=>rl(y,p))||t.push(p))}return[l,o,t]}const kt=K(!1),Tl=K(!1),Gn=K(!1),nB=K(!0),dr=gf({xs:460,...mf}),Pn=Xf(),ty=Uf(),lB=O(()=>Pn.height.value-Pn.width.value/yn>180),ry=Hf(ce?document.body:null),el=hf(),oB=O(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=el.value)==null?void 0:e.tagName)||"")||((n=el.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),tB=O(()=>{var e;return["BUTTON","A"].includes(((e=el.value)==null?void 0:e.tagName)||"")});Te("slidev-camera","default");Te("slidev-mic","default");const wo=Te("slidev-scale",0),ne=Te("slidev-show-overview",!1),Ft=Te("slidev-presenter-cursor",!0),Uc=Te("slidev-show-editor",!1);Te("slidev-editor-width",ce?window.innerWidth*.4:100);const ay=Wp(ne);function qc(e,n,l,o=t=>t){return e*o(.5-n*(.5-l))}function rB(e){return[-e[0],-e[1]]}function Fe(e,n){return[e[0]+n[0],e[1]+n[1]]}function be(e,n){return[e[0]-n[0],e[1]-n[1]]}function ke(e,n){return[e[0]*n,e[1]*n]}function aB(e,n){return[e[0]/n,e[1]/n]}function _l(e){return[e[1],-e[0]]}function cB(e,n){return e[0]*n[0]+e[1]*n[1]}function iB(e,n){return e[0]===n[0]&&e[1]===n[1]}function pB(e){return Math.hypot(e[0],e[1])}function yB(e){return e[0]*e[0]+e[1]*e[1]}function Kc(e,n){return yB(be(e,n))}function cy(e){return aB(e,pB(e))}function uB(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function Dl(e,n,l){let o=Math.sin(l),t=Math.cos(l),a=e[0]-n[0],c=e[1]-n[1],i=a*t-c*o,p=a*o+c*t;return[i+n[0],p+n[1]]}function fr(e,n,l){return Fe(e,ke(be(n,e),l))}function Yc(e,n,l){return Fe(e,ke(n,l))}var{min:Hn,PI:dB}=Math,Gc=.275,vl=dB+1e-4;function fB(e,n={}){let{size:l=16,smoothing:o=.5,thinning:t=.5,simulatePressure:a=!0,easing:c=ts=>ts,start:i={},end:p={},last:y=!1}=n,{cap:u=!0,easing:f=ts=>ts*(2-ts)}=i,{cap:d=!0,easing:B=ts=>--ts*ts*ts+1}=p;if(e.length===0||l<=0)return[];let h=e[e.length-1].runningLength,g=i.taper===!1?0:i.taper===!0?Math.max(l,h):i.taper,D=p.taper===!1?0:p.taper===!0?Math.max(l,h):p.taper,k=Math.pow(l*o,2),w=[],x=[],$=e.slice(0,10).reduce((ts,as)=>{let os=as.pressure;if(a){let ms=Hn(1,as.distance/l),Me=Hn(1,1-ms);os=Hn(1,ts+(Me-ts)*(ms*Gc))}return(ts+os)/2},e[0].pressure),N=qc(l,t,e[e.length-1].pressure,c),T,X=e[0].vector,is=e[0].point,Bs=is,hs=is,_s=Bs;for(let ts=0;ts<e.length;ts++){let{pressure:as}=e[ts],{point:os,vector:ms,distance:Me,runningLength:se}=e[ts];if(ts<e.length-1&&h-se<3)continue;if(t){if(a){let R=Hn(1,Me/l),Q=Hn(1,1-R);as=Hn(1,$+(Q-$)*(R*Gc))}N=qc(l,t,as,c)}else N=l/2;T===void 0&&(T=N);let De=se<g?f(se/g):1,re=h-se<D?B((h-se)/D):1;if(N=Math.max(.01,N*Math.min(De,re)),ts===e.length-1){let R=ke(_l(ms),N);w.push(be(os,R)),x.push(Fe(os,R));continue}let en=e[ts+1].vector,S=cB(ms,en);if(S<0){let R=ke(_l(X),N);for(let Q=1/13,vs=0;vs<=1;vs+=Q)hs=Dl(be(os,R),os,vl*vs),w.push(hs),_s=Dl(Fe(os,R),os,vl*-vs),x.push(_s);is=hs,Bs=_s;continue}let J=ke(_l(fr(en,ms,S)),N);hs=be(os,J),(ts<=1||Kc(is,hs)>k)&&(w.push(hs),is=hs),_s=Fe(os,J),(ts<=1||Kc(Bs,_s)>k)&&(x.push(_s),Bs=_s),$=as,X=ms}let Ts=e[0].point.slice(0,2),Ns=e.length>1?e[e.length-1].point.slice(0,2):Fe(e[0].point,[1,1]),Gs=[],Fs=[];if(e.length===1){if(!(g||D)||y){let ts=Yc(Ts,cy(_l(be(Ts,Ns))),-(T||N)),as=[];for(let os=1/13,ms=os;ms<=1;ms+=os)as.push(Dl(ts,Ts,vl*2*ms));return as}}else{if(!(g||D&&e.length===1))if(u)for(let as=1/13,os=as;os<=1;os+=as){let ms=Dl(x[0],Ts,vl*os);Gs.push(ms)}else{let as=be(w[0],x[0]),os=ke(as,.5),ms=ke(as,.51);Gs.push(be(Ts,os),be(Ts,ms),Fe(Ts,ms),Fe(Ts,os))}let ts=_l(rB(e[e.length-1].vector));if(D||g&&e.length===1)Fs.push(Ns);else if(d){let as=Yc(Ns,ts,N);for(let os=1/29,ms=os;ms<1;ms+=os)Fs.push(Dl(as,Ns,vl*3*ms))}else Fs.push(Fe(Ns,ke(ts,N)),Fe(Ns,ke(ts,N*.99)),be(Ns,ke(ts,N*.99)),be(Ns,ke(ts,N)))}return w.concat(Fs,x.reverse(),Gs)}function BB(e,n={}){var l;let{streamline:o=.5,size:t=16,last:a=!1}=n;if(e.length===0)return[];let c=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:B,y:h,pressure:g=.5})=>[B,h,g]);if(i.length===2){let B=i[1];i=i.slice(0,-1);for(let h=1;h<5;h++)i.push(fr(i[0],B,h/4))}i.length===1&&(i=[...i,[...Fe(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],y=!1,u=0,f=p[0],d=i.length-1;for(let B=1;B<i.length;B++){let h=a&&B===d?i[B].slice(0,2):fr(f.point,i[B],c);if(iB(f.point,h))continue;let g=uB(h,f.point);if(u+=g,B<d&&!y){if(u<t)continue;y=!0}f={point:h,pressure:i[B][2]>=0?i[B][2]:.5,vector:cy(be(f.point,h)),distance:g,runningLength:u},p.push(f)}return p[0].vector=((l=p[1])==null?void 0:l.vector)||[0,0],p}function AB(e,n={}){return fB(BB(e,n),n)}var hB=AB,mB=Object.defineProperty,Zc=Object.getOwnPropertySymbols,CB=Object.prototype.hasOwnProperty,_B=Object.prototype.propertyIsEnumerable,Xc=(e,n,l)=>n in e?mB(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Br=(e,n)=>{for(var l in n||(n={}))CB.call(n,l)&&Xc(e,l,n[l]);if(Zc)for(var l of Zc(n))_B.call(n,l)&&Xc(e,l,n[l]);return e},DB=()=>({events:{},emit(e,...n){(this.events[e]||[]).forEach(l=>l(...n))},on(e,n){return(this.events[e]=this.events[e]||[]).push(n),()=>this.events[e]=(this.events[e]||[]).filter(l=>l!==n)}});function Io(e,n){return e-n}function vB(e){return e<0?-1:1}function No(e){return[Math.abs(e),vB(e)]}function iy(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var gB=2,Ye=gB,dl=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n,l;const o=this.drauu.el,t=(n=this.drauu.options.coordinateScale)!=null?n:1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*t,y:(e.pageY-a.top)*t,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const c=a.matrixTransform((l=o.getScreenCTM())==null?void 0:l.inverse());return{x:c.x*t,y:c.y*t,pressure:e.pressure}}}createElement(e,n){var l;const o=document.createElementNS("http://www.w3.org/2000/svg",e),t=n?Br(Br({},this.brush),n):this.brush;return o.setAttribute("fill",(l=t.fill)!=null?l:"transparent"),o.setAttribute("stroke",t.color),o.setAttribute("stroke-width",t.size.toString()),o.setAttribute("stroke-linecap","round"),t.dasharray&&o.setAttribute("stroke-dasharray",t.dasharray),o}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(Ye))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},bB=class extends dl{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=hB(e,Br({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!n.length)return"";const l=n.reduce((o,[t,a],c,i)=>{const[p,y]=i[(c+1)%i.length];return o.push(t,a,(t+p)/2,(a+y)/2),o},["M",...n[0],"Q"]);return l.push("Z"),l.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},EB=class extends dl{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,l]=No(e.x-this.start.x),[o,t]=No(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(n,o);n=a,o=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[a,c]=[this.start.x,this.start.x+n*l].sort(Io),[i,p]=[this.start.y,this.start.y+o*t].sort(Io);this.attr("cx",(a+c)/2),this.attr("cy",(i+p)/2),this.attr("rx",(c-a)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function py(e,n){const l=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("fill",n),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),t.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(t),l.appendChild(o),l}var wB=class extends dl{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=iy(),l=document.createElementNS("http://www.w3.org/2000/svg","g");return l.append(py(n,this.brush.color)),l.append(this.el),this.attr("marker-end",`url(#${n})`),l}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:l}=e;if(this.shiftPressed){const o=e.x-this.start.x,t=e.y-this.start.y;if(t!==0){let a=o/t;a=Math.round(a),Math.abs(a)<=1?(n=this.start.x+t*a,l=this.start.y+t):(n=this.start.x+o,l=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-l),this.attr("x2",n),this.attr("y2",l)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",l)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},xB=class extends dl{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,l]=No(e.x-this.start.x),[o,t]=No(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(n,o);n=a,o=a}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[a,c]=[this.start.x,this.start.x+n*l].sort(Io),[i,p]=[this.start.y,this.start.y+o*t].sort(Io);this.attr("x",a),this.attr("y",i),this.attr("width",c-a),this.attr("height",p-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function kB(e,n){const l=e.x-n.x,o=e.y-n.y;return l*l+o*o}function FB(e,n,l){let o=n.x,t=n.y,a=l.x-o,c=l.y-t;if(a!==0||c!==0){const i=((e.x-o)*a+(e.y-t)*c)/(a*a+c*c);i>1?(o=l.x,t=l.y):i>0&&(o+=a*i,t+=c*i)}return a=e.x-o,c=e.y-t,a*a+c*c}function $B(e,n){let l=e[0];const o=[l];let t;for(let a=1,c=e.length;a<c;a++)t=e[a],kB(t,l)>n&&(o.push(t),l=t);return l!==t&&t&&o.push(t),o}function Ar(e,n,l,o,t){let a=o,c=0;for(let i=n+1;i<l;i++){const p=FB(e[i],e[n],e[l]);p>a&&(c=i,a=p)}a>o&&(c-n>1&&Ar(e,n,c,o,t),t.push(e[c]),l-c>1&&Ar(e,c,l,o,t))}function OB(e,n){const l=e.length-1,o=[e[0]];return Ar(e,0,l,n,o),o.push(e[l]),o}function Jc(e,n,l=!1){if(e.length<=2)return e;const o=n!==void 0?n*n:1;return e=l?e:$B(e,o),e=OB(e,o),e}var SB=class extends dl{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=iy();const n=py(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Jc(this.points,1,!0),this.count=0),this.attr("d",si(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",si(Jc(this.points,1,!0))),!e.getTotalLength()))}};function zB(e,n){const l=n.x-e.x,o=n.y-e.y;return{length:Math.sqrt(Math.pow(l,2)+Math.pow(o,2)),angle:Math.atan2(o,l)}}function Qc(e,n,l,o){const t=n||e,a=l||e,c=.2,i=zB(t,a),p=i.angle+(o?Math.PI:0),y=i.length*c,u=e.x+Math.cos(p)*y,f=e.y+Math.sin(p)*y;return{x:u,y:f}}function PB(e,n,l){const o=Qc(l[n-1],l[n-2],e),t=Qc(e,l[n-1],l[n+1],!0);return`C ${o.x.toFixed(Ye)},${o.y.toFixed(Ye)} ${t.x.toFixed(Ye)},${t.y.toFixed(Ye)} ${e.x.toFixed(Ye)},${e.y.toFixed(Ye)}`}function si(e){return e.reduce((n,l,o,t)=>o===0?`M ${l.x.toFixed(Ye)},${l.y.toFixed(Ye)}`:`${n} ${PB(l,o,t)}`,"")}var LB=class extends dl{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(l,o)=>{if(l&&l.length)for(let t=0;t<l.length;t++){const a=l[t];if(a.getTotalLength){const c=a.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=a.getPointAtLength(c*i/this.pathSubFactor),y=a.getPointAtLength(c*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:y.x,y1:p.y,y2:y.y,segment:i,element:o||a})}}else a.children&&n(a.children,a)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const l=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(l,o)&&(l.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,l)=>!e.includes(l))),e.length>0}lineLineIntersect(e,n){const l=e.x1,o=e.x2,t=n.x1,a=n.x2,c=e.y1,i=e.y2,p=n.y1,y=n.y2,u=(l-o)*(p-y)-(c-i)*(t-a),f=(l*i-c*o)*(t-a)-(l-o)*(t*y-p*a),d=(l*i-c*o)*(p-y)-(c-i)*(t*y-p*a),B=(h,g,D)=>h>=g&&h<=D?!0:h>=D&&h<=g;if(u===0)return!1;{const h={x:f/u,y:d/u};return B(h.x,l,o)&&B(h.y,c,i)&&B(h.x,t,a)&&B(h.y,p,y)}}};function TB(e){return{draw:new SB(e),stylus:new bB(e),line:new wB(e),rectangle:new xB(e),ellipse:new EB(e),eraseLine:new LB(e)}}var MB=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=DB(),this._models=TB(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const l=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),t=this.eventMove.bind(this),a=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);l.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",t,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{l.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function jB(e){return new MB(e)}const hr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],He=Te("slidev-drawing-enabled",!1),ik=Te("slidev-drawing-pinned",!1),RB=K(!1),IB=K(!1),NB=K(!1),Zl=K(!1),Fn=I5(Te("slidev-drawing-brush",{color:hr[0],size:4,mode:"stylus"})),ei=K("stylus"),yy=O(()=>gs.drawings.syncAll||Ie.value);let Xl=!1;const gl=O({get(){return ei.value},set(e){ei.value=e,e==="arrow"?(Fn.mode="line",Fn.arrowEnd=!0):(Fn.mode=e,Fn.arrowEnd=!1)}}),HB=Ms({brush:Fn,acceptsInputTypes:O(()=>He.value?void 0:["pen"]),coordinateTransform:!1}),oe=Jo(jB(HB));function VB(){oe.clear(),yy.value&&Np(Ws.value,"")}function uy(){var e;IB.value=oe.canRedo(),RB.value=oe.canUndo(),NB.value=!!((e=oe.el)!=null&&e.children.length)}function WB(e){Xl=!0;const n=To[e||Ws.value];n!=null?oe.load(n):oe.clear(),Xl=!1}oe.on("changed",()=>{if(uy(),!Xl){const e=oe.dump(),n=Ws.value;(To[n]||"")!==e&&yy.value&&Np(n,oe.dump())}});$5(e=>{Xl=!0,e[Ws.value]!=null&&oe.load(e[Ws.value]||""),Xl=!1,uy()});Ys(()=>{fs(Ws,()=>{!oe.mounted||WB()},{immediate:!0})});oe.on("start",()=>Zl.value=!0);oe.on("end",()=>Zl.value=!1);window.addEventListener("keydown",e=>{if(!He.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let l=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?oe.redo():oe.undo():e.code==="Escape"?He.value=!1:e.code==="KeyL"&&n?gl.value="line":e.code==="KeyA"&&n?gl.value="arrow":e.code==="KeyS"&&n?gl.value="stylus":e.code==="KeyR"&&n?gl.value="rectangle":e.code==="KeyE"&&n?gl.value="ellipse":e.code==="KeyC"&&n?VB():e.code.startsWith("Digit")&&n&&+e.code[5]<=hr.length?Fn.color=hr[+e.code[5]-1]:l=!1,l&&(e.preventDefault(),e.stopPropagation())},!1);const ni=Ff(),$t=Te("slidev-color-schema","auto"),mr=O(()=>gs.colorSchema!=="auto"),na=O({get(){return mr.value?gs.colorSchema==="dark":$t.value==="auto"?ni.value:$t.value==="dark"},set(e){mr.value||($t.value=e===ni.value?"auto":e?"dark":"light")}}),dy=Wp(na);ce&&fs(na,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});function UB(){return[]}const xo=K(1),ko=O(()=>Vs.length-1),he=K(0),la=K(0);function qB(){he.value>xo.value&&(he.value-=1)}function KB(){he.value<ko.value&&(he.value+=1)}function YB(){if(he.value>xo.value){let e=he.value-la.value;e<xo.value&&(e=xo.value),he.value=e}}function GB(){if(he.value<ko.value){let e=he.value+la.value;e>ko.value&&(e=ko.value),he.value=e}}const fy=Hs(ye(oB),ye(tB),nB);function ZB(e,n,l=!1){typeof e=="string"&&(e=ty[e]);const o=Hs(e,fy);let t=0,a;const c=()=>{if(clearTimeout(a),!o.value){t=0;return}l&&(a=setTimeout(c,Math.max(1e3-t*250,150)),t++),n()};return fs(o,c,{flush:"sync"})}function XB(e,n){return Af(e,l=>{!fy.value||l.repeat||n()})}function JB(){const e=UB(),{escape:n,space:l,shift:o,left:t,right:a,up:c,down:i,enter:p,d:y,g:u,o:f}=ty;new Map([{key:Hs(l,ye(o)),fn:dn,autoRepeat:!0},{key:Hs(l,o),fn,autoRepeat:!0},{key:Hs(a,ye(o),ye(ne)),fn:dn,autoRepeat:!0},{key:Hs(t,ye(o),ye(ne)),fn,autoRepeat:!0},{key:"pageDown",fn:dn,autoRepeat:!0},{key:"pageUp",fn,autoRepeat:!0},{key:Hs(c,ye(ne)),fn:()=>so(!1),autoRepeat:!0},{key:Hs(i,ye(ne)),fn:Ql,autoRepeat:!0},{key:Hs(t,o),fn:()=>so(!1),autoRepeat:!0},{key:Hs(a,o),fn:Ql,autoRepeat:!0},{key:Hs(y,ye(He)),fn:dy},{key:Hs(f,ye(He)),fn:ay},{key:Hs(n,ye(He)),fn:()=>ne.value=!1},{key:Hs(u,ye(He)),fn:()=>Gn.value=!Gn.value},{key:Hs(t,ne),fn:qB},{key:Hs(a,ne),fn:KB},{key:Hs(c,ne),fn:YB},{key:Hs(i,ne),fn:GB},{key:Hs(p,ne),fn:()=>{cl(he.value),ne.value=!1}},...e].map(B=>[B.key,B])).forEach(B=>{B.fn&&ZB(B.key,B.fn,B.autoRepeat)}),XB("f",()=>ry.toggle())}const QB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},sA=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),eA=[sA];function nA(e,n){return m(),I("svg",QB,eA)}var lA={name:"carbon-close",render:nA};function oa(e){var l,o;const n=(o=(l=e==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:o.no;return n!=null?`slidev-page-${n}`:""}const By=xs({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;F(z);const l=K(),o=Nf(l),t=O(()=>n.width?n.width:o.width.value),a=O(()=>n.width?n.width/yn:o.height.value);n.width&&oo(()=>{l.value&&(l.value.style.width=`${t.value}px`,l.value.style.height=`${a.value}px`)});const c=O(()=>t.value/a.value),i=O(()=>n.scale?n.scale:c.value<yn?t.value/zn:a.value*yn/zn),p=O(()=>({height:`${jp}px`,width:`${zn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),y=O(()=>({"select-none":!gs.selectable,"slidev-code-line-numbers":gs.lineNumbers}));return fe(Mp,i),(u,f)=>(m(),I("div",{id:"slide-container",ref_key:"root",ref:l,class:js(v(y))},[s("div",{id:"slide-content",style:Js(v(p))},[Ue(u.$slots,"default")],4),Ue(u.$slots,"controls")],2))}});var ta=xs({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const l=Ne(e,"clicks",n),o=Ne(e,"clicksElements",n),t=Ne(e,"clicksDisabled",n),a=Ne(e,"clicksOrderMap",n);o.value.length=0,fe(h5,e.route),fe(m5,e.context),fe(Sl,l),fe(zl,t),fe(En,o),fe(tr,a)},render(){var e,n;return this.$props.is?Ae(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}});const oA=["innerHTML"],Ay=xs({__name:"DrawingPreview",props:{page:null},setup(e){return F(z),(n,l)=>v(To)[e.page]?(m(),I("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(To)[e.page]},null,8,oA)):ds("v-if",!0)}});var tA=Object.freeze(Object.defineProperty({__proto__:null,default:Ay},Symbol.toStringTag,{value:"Module"}));const rA={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},aA=["onClick"],cA=xs({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:n}){const l=e;F(z);const o=Ne(l,"modelValue",n);function t(){o.value=!1}function a(B){cl(B),t()}function c(B){return B===he.value}const i=dr.smaller("xs"),p=dr.smaller("sm"),y=4*16*2,u=2*16,f=O(()=>i.value?Pn.width.value-y:p.value?(Pn.width.value-y-u)/2:300),d=O(()=>Math.floor((Pn.width.value-y)/(f.value+u)));return oo(()=>{he.value=Ws.value,la.value=d.value}),(B,h)=>{const g=lA;return m(),I(ks,null,[_e(s("div",rA,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Js(`grid-template-columns: repeat(auto-fit,minmax(${v(f)}px,1fr))`)},[(m(!0),I(ks,null,to(v(Vs).slice(0,-1),(D,k)=>(m(),I("div",{key:D.path,class:"relative"},[s("div",{class:js(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(k+1)}]),onClick:w=>a(+D.path)},[(m(),P(By,{key:D.path,width:v(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:_(()=>[b(v(ta),{is:D==null?void 0:D.component,"clicks-disabled":!0,class:js(v(oa)(D)),route:D,context:"overview"},null,8,["is","class","route"]),b(Ay,{page:+D.path},null,8,["page"])]),_:2},1032,["width"]))],10,aA),s("div",{class:"absolute top-0 opacity-50",style:Js(`left: ${v(f)+5}px`)},Ee(k+1),5)]))),128))],4)],512),[[Lp,v(o)]]),v(o)?(m(),I("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:t},[b(g)])):ds("v-if",!0)],64)}}});var iA="/courses/data-structure/linked-lists/assets/logo.b72bde5d.png";const pA={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},yA=xs({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const l=e;F(z);const o=Ne(l,"modelValue",n);function t(){o.value=!1}return(a,c)=>(m(),P(Bp,null,[v(o)?(m(),I("div",pA,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=i=>t())}),s("div",{class:js(["m-auto rounded-md bg-main shadow",l.class]),"dark:border":"~ gray-400 opacity-10"},[Ue(a.$slots,"default")],2)])):ds("v-if",!0)],1024))}});const uA={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},dA=["innerHTML"],fA=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:iA,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),r("dev ")])])],-1),BA=xs({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const l=e;F(z);const o=Ne(l,"modelValue",n),t=O(()=>typeof gs.info=="string");return(a,c)=>(m(),P(yA,{modelValue:v(o),"onUpdate:modelValue":c[0]||(c[0]=i=>ws(o)?o.value=i:null),class:"px-6 py-4"},{default:_(()=>[s("div",uA,[v(t)?(m(),I("div",{key:0,class:"mb-4",innerHTML:v(gs).info},null,8,dA)):ds("v-if",!0),fA])]),_:1},8,["modelValue"]))}}),AA=["disabled","onKeydown"],hA=xs({__name:"Goto",setup(e){F(z);const n=K(),l=K(""),o=O(()=>{if(l.value.startsWith("/"))return!!Vs.find(c=>c.path===l.value.substring(1));{const c=+l.value;return!isNaN(c)&&c>0&&c<=zy.value}});function t(){o.value&&(l.value.startsWith("/")?cl(l.value.substring(1)):cl(+l.value)),a()}function a(){Gn.value=!1}return fs(Gn,async c=>{var i,p;c?(await Ys(),l.value="",(i=n.value)==null||i.focus()):(p=n.value)==null||p.blur()}),fs(l,c=>{c.match(/^[^0-9/]/)&&(l.value=l.value.substring(1))}),(c,i)=>(m(),I("div",{id:"slidev-goto-dialog",class:js(["fixed right-5 bg-main transform transition-all",v(Gn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[_e(s("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=p=>l.value=p),type:"text",disabled:!v(Gn),class:js(["outline-none bg-transparent",{"text-red-400":!v(o)&&l.value}]),placeholder:"Goto...",onKeydown:[ic(t,["enter"]),ic(a,["escape"])],onBlur:a},null,42,AA),[[Xd,l.value]])],2))}}),mA=xs({__name:"Controls",setup(e){F(z);const n=We(),l=We();return(o,t)=>(m(),I(ks,null,[b(cA,{modelValue:v(ne),"onUpdate:modelValue":t[0]||(t[0]=a=>ws(ne)?ne.value=a:null)},null,8,["modelValue"]),b(hA),v(n)?(m(),P(v(n),{key:0})):ds("v-if",!0),v(l)?(m(),P(v(l),{key:1,modelValue:v(kt),"onUpdate:modelValue":t[1]||(t[1]=a=>ws(kt)?kt.value=a:null)},null,8,["modelValue"])):ds("v-if",!0),v(gs).info?(m(),P(BA,{key:2,modelValue:v(Tl),"onUpdate:modelValue":t[2]||(t[2]=a=>ws(Tl)?Tl.value=a:null)},null,8,["modelValue"])):ds("v-if",!0)],64))}}),CA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_A=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),DA=[_A];function vA(e,n){return m(),I("svg",CA,DA)}var gA={name:"carbon-settings-adjust",render:vA};const bA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},EA=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),wA=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xA=[EA,wA];function kA(e,n){return m(),I("svg",bA,xA)}var FA={name:"carbon-information",render:kA};const $A={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},OA=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),SA=[OA];function zA(e,n){return m(),I("svg",$A,SA)}var PA={name:"carbon-download",render:zA};const LA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},TA=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),MA=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),jA=[TA,MA];function RA(e,n){return m(),I("svg",LA,jA)}var IA={name:"carbon-user-speaker",render:RA};const NA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},HA=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),VA=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),WA=[HA,VA];function UA(e,n){return m(),I("svg",NA,WA)}var qA={name:"carbon-presentation-file",render:UA};const KA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},YA=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),GA=[YA];function ZA(e,n){return m(),I("svg",KA,GA)}var XA={name:"carbon-pen",render:ZA};const JA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},QA=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),sh=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),eh=[QA,sh];function nh(e,n){return m(),I("svg",JA,eh)}var lh={name:"ph-cursor-duotone",render:nh};const oh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},th=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),rh=[th];function ah(e,n){return m(),I("svg",oh,rh)}var hy={name:"ph-cursor-fill",render:ah};const ch={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ih=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),ph=[ih];function yh(e,n){return m(),I("svg",ch,ph)}var uh={name:"carbon-sun",render:yh};const dh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fh=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Bh=[fh];function Ah(e,n){return m(),I("svg",dh,Bh)}var hh={name:"carbon-moon",render:Ah};const mh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ch=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),_h=[Ch];function Dh(e,n){return m(),I("svg",mh,_h)}var vh={name:"carbon-apps",render:Dh};const gh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bh=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Eh=[bh];function wh(e,n){return m(),I("svg",gh,Eh)}var xh={name:"carbon-arrow-right",render:wh};const kh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fh=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),$h=[Fh];function Oh(e,n){return m(),I("svg",kh,$h)}var Sh={name:"carbon-arrow-left",render:Oh};const zh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ph=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Lh=[Ph];function Th(e,n){return m(),I("svg",zh,Lh)}var Mh={name:"carbon-maximize",render:Th};const jh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rh=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Ih=[Rh];function Nh(e,n){return m(),I("svg",jh,Ih)}var Hh={name:"carbon-minimize",render:Nh};const Vh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wh=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Uh=[Wh];function qh(e,n){return m(),I("svg",Vh,Uh)}var Kh={name:"carbon-checkmark",render:qh};var my=(e,n)=>{const l=e.__vccOpts||e;for(const[o,t]of n)l[o]=t;return l};const Yh={class:"select-list"},Gh={class:"title"},Zh={class:"items"},Xh=["onClick"],Jh=xs({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const l=e;F(z);const o=Ne(l,"modelValue",n,{passive:!0});return(t,a)=>{const c=Kh;return m(),I("div",Yh,[s("div",Gh,Ee(e.title),1),s("div",Zh,[(m(!0),I(ks,null,to(e.items,i=>(m(),I("div",{key:i.value,class:js(["item",{active:v(o)===i.value}]),onClick:()=>{var p;o.value=i.value,(p=i.onClick)==null||p.call(i)}},[b(c,{class:js(["text-green-500",{"opacity-0":v(o)!==i.value}])},null,8,["class"]),r(" "+Ee(i.display||i.value),1)],10,Xh))),128))])])}}});var Qh=my(Jh,[["__scopeId","data-v-427604ef"]]);const sm={class:"text-sm"},em=xs({__name:"Settings",setup(e){F(z);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(l,o)=>(m(),I("div",sm,[b(Qh,{modelValue:v(wo),"onUpdate:modelValue":o[0]||(o[0]=t=>ws(wo)?wo.value=t:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),nm={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},lm=xs({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const l=e;F(z);const o=Ne(l,"modelValue",n,{passive:!0}),t=K();return ff(t,()=>{o.value=!1}),(a,c)=>(m(),I("div",{ref_key:"el",ref:t,class:"flex relative"},[s("button",{class:js({disabled:e.disabled}),onClick:c[0]||(c[0]=i=>o.value=!v(o))},[Ue(a.$slots,"button",{class:js({disabled:e.disabled})})],2),(m(),P(Bp,null,[v(o)?(m(),I("div",nm,[Ue(a.$slots,"menu")])):ds("v-if",!0)],1024))],512))}}),om={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Co={__name:"VerticalDivider",setup(e){return F(z),(n,l)=>(m(),I("div",om))}};var tm={render(){return[]}};const rm={class:"icon-btn"},am={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},cm={class:"my-auto"},im={class:"opacity-50"},pm=xs({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;F(z);const l=dr.smaller("md"),{isFullscreen:o,toggle:t}=ry,a=O(()=>_r.value?`?password=${_r.value}`:""),c=O(()=>`/presenter/${Ws.value}${a.value}`),i=O(()=>`/${Ws.value}${a.value}`),p=K(),y=()=>{p.value&&el.value&&p.value.contains(el.value)&&el.value.blur()},u=O(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=We(),d=We();return ul(()=>import("./DrawingControls.c49632d4.js"),[]).then(B=>d.value=B.default),(B,h)=>{const g=Hh,D=Mh,k=Sh,w=xh,x=vh,$=hh,N=uh,T=hy,X=lh,is=XA,Bs=qA,hs=Is("RouterLink"),_s=IA,Ts=PA,Ns=FA,Gs=gA;return m(),I("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[s("div",{class:js(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(u)]),onMouseleave:y},[v(Ke)?ds("v-if",!0):(m(),I("button",{key:0,class:"icon-btn",onClick:h[0]||(h[0]=(...Fs)=>v(t)&&v(t)(...Fs))},[v(o)?(m(),P(g,{key:0})):(m(),P(D,{key:1}))])),s("button",{class:js(["icon-btn",{disabled:!v(Db)}]),onClick:h[1]||(h[1]=(...Fs)=>v(fn)&&v(fn)(...Fs))},[b(k)],2),s("button",{class:js(["icon-btn",{disabled:!v(_b)}]),title:"Next",onClick:h[2]||(h[2]=(...Fs)=>v(dn)&&v(dn)(...Fs))},[b(w)],2),v(Ke)?ds("v-if",!0):(m(),I("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=Fs=>v(ay)())},[b(x)])),v(mr)?ds("v-if",!0):(m(),I("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=Fs=>v(dy)())},[v(na)?(m(),P($,{key:0})):(m(),P(N,{key:1}))])),b(Co),v(Ke)?ds("v-if",!0):(m(),I(ks,{key:3},[!v(Ie)&&!v(l)&&v(f)?(m(),I(ks,{key:0},[b(v(f)),b(Co)],64)):ds("v-if",!0),v(Ie)?(m(),I("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=Fs=>Ft.value=!v(Ft))},[v(Ft)?(m(),P(T,{key:0})):(m(),P(X,{key:1,class:"opacity-50"}))])):ds("v-if",!0)],64)),!v(gs).drawings.presenterOnly&&!v(Ke)?(m(),I(ks,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=Fs=>He.value=!v(He))},[b(is),v(He)?(m(),I("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Js({background:v(Fn).color})},null,4)):ds("v-if",!0)]),b(Co)],64)):ds("v-if",!0),v(Ke)?ds("v-if",!0):(m(),I(ks,{key:5},[v(Ie)?(m(),P(hs,{key:0,to:v(i),class:"icon-btn",title:"Play Mode"},{default:_(()=>[b(Bs)]),_:1},8,["to"])):ds("v-if",!0),v(hb)?(m(),P(hs,{key:1,to:v(c),class:"icon-btn",title:"Presenter Mode"},{default:_(()=>[b(_s)]),_:1},8,["to"])):ds("v-if",!0),ds("v-if",!0)],64)),(m(),I(ks,{key:6},[v(gs).download?(m(),I("button",{key:0,class:"icon-btn",onClick:h[8]||(h[8]=(...Fs)=>v(Dr)&&v(Dr)(...Fs))},[b(Ts)])):ds("v-if",!0)],64)),!v(Ie)&&v(gs).info&&!v(Ke)?(m(),I("button",{key:7,class:"icon-btn",onClick:h[9]||(h[9]=Fs=>Tl.value=!v(Tl))},[b(Ns)])):ds("v-if",!0),!v(Ie)&&!v(Ke)?(m(),P(lm,{key:8},{button:_(()=>[s("button",rm,[b(Gs)])]),menu:_(()=>[b(em)]),_:1})):ds("v-if",!0),v(Ke)?ds("v-if",!0):(m(),P(Co,{key:9})),s("div",am,[s("div",cm,[r(Ee(v(Ws))+" ",1),s("span",im,"/ "+Ee(v(zy)),1)])]),b(v(tm))],34)],512)}}}),ym={__name:"SlidesTotal",setup(e){const n=F(z);return(l,o)=>(m(),I("span",null,Ee(v(n).nav.total),1))}},um={__name:"SlideCurrentNo",setup(e){const n=F(z);return(l,o)=>(m(),I("span",null,Ee(v(n).nav.currentPage),1))}},dm=r(" / "),fm=xs({__name:"Pagination",props:{classNames:{type:[Array,String]},x:{default:"r",type:String,validator:e=>e==="l"||e==="r"},y:{default:"t",type:String,validator:e=>e==="b"||e==="t"}},setup(e){const{classNames:n,x:l,y:o}=e;F(z);const t=O(()=>[...n?Array.isArray(n)?n:[n]:[],l==="l"&&"left-0",l==="r"&&"right-0",o==="t"&&"top-0",o==="b"&&"bottom-0"]);return(a,c)=>{const i=um,p=ym;return m(),I("div",{class:js(["absolute p-2 text-xs",v(t)])},[b(i),dm,b(p)],2)}}}),Bm={__name:"global-top",setup(e){const n=F(z);return(l,o)=>{var a;const t=fm;return v(n).nav.currentPage!==v(n).nav.total+1&&!((a=v(n).themeConfigs.paginationPagesDisabled)!=null&&a.includes(v(n).nav.currentPage))&&(v(n).themeConfigs.paginationX||v(n).themeConfigs.paginationY)?(m(),P(t,{key:0,x:v(n).themeConfigs.paginationX,y:v(n).themeConfigs.paginationY},null,8,["x","y"])):ds("v-if",!0)}}};var Cy={render(){return[Ae(Bm)]}};const Am={class:"absolute bottom-0 left-0 right-0 p-2"},hm=s("p",{style:{"font-size":"8px"}},[s("a",{rel:"license",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"(cc) BY-NC-SA - Jordan Frecon-Deloire (2022)")],-1),mm=[hm],Cm={__name:"global-bottom",setup(e){return F(z),(n,l)=>(m(),I("footer",Am,mm))}};var _y={render(){return[Ae(Cm)]}};const _m={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Dm=xs({__name:"PresenterMouse",setup(e){return F(z),(n,l)=>{const o=hy;return v(bt).cursor?(m(),I("div",_m,[b(o,{class:"absolute",style:Js({left:`${v(bt).cursor.x}%`,top:`${v(bt).cursor.y}%`})},null,8,["style"])])):ds("v-if",!0)}}}),vm=xs({__name:"SlidesShow",props:{context:null},setup(e){F(z),fs(de,()=>{var l,o;((l=de.value)==null?void 0:l.meta)&&de.value.meta.preload!==!1&&(de.value.meta.__preloaded=!0),((o=Ot.value)==null?void 0:o.meta)&&Ot.value.meta.preload!==!1&&(Ot.value.meta.__preloaded=!0)},{immediate:!0});const n=We();return ul(()=>import("./DrawingLayer.472a676b.js"),[]).then(l=>n.value=l.default),(l,o)=>(m(),I(ks,null,[ds(" Global Bottom "),b(v(_y)),ds(" Slides "),(m(!0),I(ks,null,to(v(Vs),t=>{var a,c;return m(),I(ks,{key:t.path},[((a=t.meta)==null?void 0:a.__preloaded)||t===v(de)?_e((m(),P(v(ta),{key:0,is:t==null?void 0:t.component,clicks:t===v(de)?v(Pe):0,"clicks-elements":((c=t.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:js(v(oa)(t)),route:t,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Lp,t===v(de)]]):ds("v-if",!0)],64)}),128)),ds(" Global Top "),b(v(Cy)),v(n)?(m(),P(v(n),{key:0})):ds("v-if",!0),v(Ie)?ds("v-if",!0):(m(),P(Dm,{key:1}))],64))}}),gm=xs({__name:"Play",setup(e){F(z),JB();const n=K();function l(a){var c;Uc.value||((c=a.target)==null?void 0:c.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?dn():fn())}bb(n);const o=O(()=>lB.value||Uc.value);We();const t=We();return ul(()=>import("./DrawingControls.c49632d4.js"),[]).then(a=>t.value=a.default),(a,c)=>(m(),I(ks,null,[s("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:Js(v(Rp))},[b(By,{class:"w-full h-full",style:Js({background:"var(--slidev-slide-container-background, black)"}),width:v(fa)?v(Pn).width.value:void 0,scale:v(wo),onPointerdown:l},{default:_(()=>[b(vm,{context:"slide"})]),controls:_(()=>[s("div",{class:js(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(o)?"opacity-100 right-0":"opacity-0 p-2",v(Zl)?"pointer-events-none":""]])},[b(pm,{class:"m-auto",persist:v(o)},null,8,["persist"])],2),!v(gs).drawings.presenterOnly&&!v(Ke)&&v(t)?(m(),P(v(t),{key:0,class:"ml-0"})):ds("v-if",!0)]),_:1},8,["style","width","scale"]),ds("v-if",!0)],4),b(mA)],64))}});function Dy(e){const n=O(()=>e.value.path),l=O(()=>Vs.length-1),o=O(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),t=O(()=>it(o.value)),a=O(()=>Vs.find(d=>d.path===`${o.value}`)),c=O(()=>{var d,B,h;return(h=(B=(d=a.value)==null?void 0:d.meta)==null?void 0:B.slide)==null?void 0:h.id}),i=O(()=>{var d,B;return(B=(d=a.value)==null?void 0:d.meta)==null?void 0:B.layout}),p=O(()=>Vs.find(d=>d.path===`${Math.min(Vs.length,o.value+1)}`)),y=O(()=>Vs.filter(d=>{var B,h;return(h=(B=d.meta)==null?void 0:B.slide)==null?void 0:h.title}).reduce((d,B)=>(Ba(d,B),d),[])),u=O(()=>Aa(y.value,a.value)),f=O(()=>ha(u.value));return{route:e,path:n,total:l,currentPage:o,currentPath:t,currentRoute:a,currentSlideId:c,currentLayout:i,nextRoute:p,rawTree:y,treeWithActiveStatuses:u,tree:f}}function vy(e,n,l){const o=K(0);Ys(()=>{me.afterEach(async()=>{await Ys(),o.value+=1})});const t=O(()=>{var p,y;return o.value,((y=(p=n.value)==null?void 0:p.meta)==null?void 0:y.__clicksElements)||[]}),a=O(()=>{var p,y,u;return+((u=(y=(p=n.value)==null?void 0:p.meta)==null?void 0:y.clicks)!=null?u:t.value.length)}),c=O(()=>l.value<Vs.length-1||e.value<a.value),i=O(()=>l.value>1||e.value>0);return{clicks:e,clicksElements:t,clicksTotal:a,hasNext:c,hasPrev:i}}const bm=["id"],li=xs({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:n}){const l=e,o=Ne(l,"clicksElements",n),t=O(()=>({height:`${jp}px`,width:`${zn}px`})),a=We();ul(()=>Promise.resolve().then(function(){return tA}),void 0).then(y=>a.value=y.default);const c=O(()=>l.clicks),i=vy(c,l.nav.currentRoute,l.nav.currentPage),p=O(()=>`${l.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return fe(z,Ms({nav:{...l.nav,...i},configs:gs,themeConfigs:O(()=>gs.themeConfig)})),(y,u)=>{var f;return m(),I("div",{id:v(p),class:"slide-container",style:Js(v(t))},[b(v(_y)),b(v(ta),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":v(o),"onUpdate:clicks-elements":u[0]||(u[0]=d=>ws(o)?o.value=d:null),clicks:v(c),"clicks-disabled":!1,class:js(v(oa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),v(a)?(m(),P(v(a),{key:0,page:+e.route.path},null,8,["page"])):ds("v-if",!0),b(v(Cy))],12,bm)}}}),Em=xs({__name:"PrintSlide",props:{route:null},setup(e){var a;const n=e;F(z);const l=Ms(((a=n.route.meta)==null?void 0:a.__clicksElements)||[]),o=O(()=>n.route),t=Dy(o);return(c,i)=>(m(),I(ks,null,[b(li,{"clicks-elements":l,"onUpdate:clicks-elements":i[0]||(i[0]=p=>ws(l)?l.value=p:null),clicks:0,nav:v(t),route:v(o)},null,8,["clicks-elements","nav","route"]),v(Ml)?ds("v-if",!0):(m(!0),I(ks,{key:0},to(l.length,p=>(m(),P(li,{key:p,clicks:p,nav:v(t),route:v(o)},null,8,["clicks","nav","route"]))),128))],64))}});const wm={id:"print-content"},xm=xs({__name:"PrintContainer",props:{width:null},setup(e){const n=e;F(z);const l=O(()=>n.width),o=O(()=>n.width/yn),t=O(()=>l.value/o.value),a=O(()=>t.value<yn?l.value/zn:o.value*yn/zn),c=Vs.slice(0,-1),i=O(()=>({"select-none":!gs.selectable,"slidev-code-line-numbers":gs.lineNumbers}));return fe(Mp,a),(p,y)=>(m(),I("div",{id:"print-container",class:js(v(i))},[s("div",wm,[(m(!0),I(ks,null,to(v(c),u=>(m(),P(Em,{key:u.path,route:u},null,8,["route"]))),128))]),Ue(p.$slots,"controls")],2))}});const km=xs({__name:"Print",setup(e){F(z);const n=kn.canvasWidth,l=Math.round(n/kn.aspectRatio)+1;function o(t,{slots:a}){if(a.default)return Ae("style",a.default())}return oo(()=>{fa?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,a)=>(m(),I(ks,null,[b(o,null,{default:_(()=>[r(" @page { size: "+Ee(v(n))+"px "+Ee(l)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Js(v(Rp))},[b(xm,{class:"w-full h-full",style:Js({background:"var(--slidev-slide-container-background, black)"}),width:v(Pn).width.value},null,8,["style","width"])],4)],64))}});const Fm={class:"slidev-layout end"},$m={__name:"end",setup(e){return F(z),(n,l)=>(m(),I("div",Fm," END "))}};var Om=my($m,[["__scopeId","data-v-024c70b4"]]),Sm="/courses/data-structure/linked-lists/front/logo.png";const zm={key:0},Pm=["href"],Lm=xs({__name:"TextWithOptionalLink",props:{link:null,text:null},setup(e){return F(z),(n,l)=>e.link?(m(),I("a",{key:1,href:e.link,rel:"noreferrer",target:"_blank"},Ee(e.text),9,Pm)):(m(),I("span",zm,Ee(e.text),1))}});function oi(e){return e.startsWith("/")?"/courses/data-structure/linked-lists/"+e.slice(1):e}function Tm(e,n=!1){const l=e&&["#","rgb","hsl"].some(t=>e.indexOf(t)===0),o={background:l?e:void 0,backgroundImage:l?void 0:e?n?`linear-gradient(#0009, #0009), url(${oi(e)})`:`url("${oi(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const Mm={class:"my-auto w-full"},jm={key:0,class:"absolute bottom-12"},Rm={key:0},Im={key:1,class:"absolute bottom-0 font-extralight mb-1 mr-2 right-0 text-xs"},Nm=xs({__name:"cover",props:{coverAuthor:null,coverAuthorUrl:null,coverBackgroundUrl:null,coverBackgroundSource:null,coverBackgroundSourceUrl:null,coverDate:{default:new Date().toLocaleDateString()}},setup(e){const{coverBackgroundUrl:n}=e;F(z);const l=O(()=>Tm(n,!0));return(o,t)=>{const a=Lm;return m(),I("div",{class:"slidev-layout cover",style:Js(v(l))},[s("div",Mm,[Ue(o.$slots,"default")]),e.coverAuthor||e.coverDate?(m(),I("div",jm,[b(a,{link:e.coverAuthorUrl,text:e.coverAuthor},null,8,["link","text"]),e.coverDate?(m(),I("span",Rm,Ee(e.coverAuthor&&e.coverDate?`, ${e.coverDate}`:e.coverDate),1)):ds("v-if",!0)])):ds("v-if",!0),e.coverBackgroundSource?(m(),I("div",Im,[b(a,{link:e.coverBackgroundSourceUrl,text:e.coverBackgroundSource},null,8,["link","text"])])):ds("v-if",!0)],4)}}}),Hm=s("h1",null,"Data Structures in C/C++",-1),Vm=s("h2",null,"Chapter 5: Linked Lists",-1),Wm=s("img",{src:Sm,class:"image-bottom",style:{height:"70px",width:"auto"}},null,-1),Um={__name:"1",setup(e){const n={theme:"./slidev-theme-academic-1.1.1",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap5/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},coverDate:null};return F(z),(l,o)=>(m(),P(Nm,q(U(n)),{default:_(()=>[Hm,Vm,Wm]),_:1},16))}},qm={class:"slidev-layout default"},Z={__name:"default",setup(e){return F(z),(n,l)=>(m(),I("div",qm,[Ue(n.$slots,"default")]))}},Km=s("h1",null,"Table of contents",-1),Ym=s("ol",null,[s("li",null,"Limitations of arrays"),s("li",null,[r("Linked lists "),s("ul",null,[s("li",null,"Principle"),s("li",null,"Primitive operations (Creation, Display, Insertion, Deletion, Access, Search)")])]),s("li",null,[r("Advanced linked lists "),s("ul",null,[s("li",null,"Double linked lists"),s("li",null,"Circular linked lists"),s("li",null,"Skip linked lists"),s("li",null,"Unrolled linked lists")])])],-1),Gm={__name:"2",setup(e){const n={};return F(z),(l,o)=>(m(),P(Z,q(U(n)),{default:_(()=>[Km,Ym]),_:1},16))}},Zm={class:"slidev-layout intro"},Xm={class:"my-auto"},ra={__name:"intro",setup(e){return F(z),(n,l)=>(m(),I("div",Zm,[s("div",Xm,[Ue(n.$slots,"default")])]))}},Jm=s("span",{style:{"font-weight":"700","font-size":"30px"}},"1. Limitations of arrays",-1),Qm={__name:"3",setup(e){const n={layout:"intro"};return F(z),(l,o)=>{const t=Is("center");return m(),P(ra,q(U(n)),{default:_(()=>[b(t,null,{default:_(()=>[Jm]),_:1})]),_:1},16)}}},s9={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},e9=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),n9=[e9];function l9(e,n){return m(),I("svg",s9,n9)}var o9={name:"ph-clipboard",render:l9};const t9={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},r9=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),a9=[r9];function c9(e,n){return m(),I("svg",t9,a9)}var i9={name:"ph-check-circle",render:c9};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function gy(e){return typeof e=="undefined"||e===null}function p9(e){return typeof e=="object"&&e!==null}function y9(e){return Array.isArray(e)?e:gy(e)?[]:[e]}function u9(e,n){var l,o,t,a;if(n)for(a=Object.keys(n),l=0,o=a.length;l<o;l+=1)t=a[l],e[t]=n[t];return e}function d9(e,n){var l="",o;for(o=0;o<n;o+=1)l+=e;return l}function f9(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var B9=gy,A9=p9,h9=y9,m9=d9,C9=f9,_9=u9,aa={isNothing:B9,isObject:A9,toArray:h9,repeat:m9,isNegativeZero:C9,extend:_9};function by(e,n){var l="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(l+='in "'+e.mark.name+'" '),l+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(l+=`

`+e.mark.snippet),o+" "+l):o}function Jl(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=by(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Jl.prototype=Object.create(Error.prototype);Jl.prototype.constructor=Jl;Jl.prototype.toString=function(n){return this.name+": "+by(this,n)};var wn=Jl,D9=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],v9=["scalar","sequence","mapping"];function g9(e){var n={};return e!==null&&Object.keys(e).forEach(function(l){e[l].forEach(function(o){n[String(o)]=l})}),n}function b9(e,n){if(n=n||{},Object.keys(n).forEach(function(l){if(D9.indexOf(l)===-1)throw new wn('Unknown option "'+l+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(l){return l},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=g9(n.styleAliases||null),v9.indexOf(this.kind)===-1)throw new wn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Xs=b9;function ti(e,n){var l=[];return e[n].forEach(function(o){var t=l.length;l.forEach(function(a,c){a.tag===o.tag&&a.kind===o.kind&&a.multi===o.multi&&(t=c)}),l[t]=o}),l}function E9(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,l;function o(t){t.multi?(e.multi[t.kind].push(t),e.multi.fallback.push(t)):e[t.kind][t.tag]=e.fallback[t.tag]=t}for(n=0,l=arguments.length;n<l;n+=1)arguments[n].forEach(o);return e}function Cr(e){return this.extend(e)}Cr.prototype.extend=function(n){var l=[],o=[];if(n instanceof Xs)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(l=l.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new wn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(a){if(!(a instanceof Xs))throw new wn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new wn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new wn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(a){if(!(a instanceof Xs))throw new wn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var t=Object.create(Cr.prototype);return t.implicit=(this.implicit||[]).concat(l),t.explicit=(this.explicit||[]).concat(o),t.compiledImplicit=ti(t,"implicit"),t.compiledExplicit=ti(t,"explicit"),t.compiledTypeMap=E9(t.compiledImplicit,t.compiledExplicit),t};var w9=Cr,x9=new Xs("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),k9=new Xs("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),F9=new Xs("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),$9=new w9({explicit:[x9,k9,F9]});function O9(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function S9(){return null}function z9(e){return e===null}var P9=new Xs("tag:yaml.org,2002:null",{kind:"scalar",resolve:O9,construct:S9,predicate:z9,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function L9(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function T9(e){return e==="true"||e==="True"||e==="TRUE"}function M9(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var j9=new Xs("tag:yaml.org,2002:bool",{kind:"scalar",resolve:L9,construct:T9,predicate:M9,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function R9(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function I9(e){return 48<=e&&e<=55}function N9(e){return 48<=e&&e<=57}function H9(e){if(e===null)return!1;var n=e.length,l=0,o=!1,t;if(!n)return!1;if(t=e[l],(t==="-"||t==="+")&&(t=e[++l]),t==="0"){if(l+1===n)return!0;if(t=e[++l],t==="b"){for(l++;l<n;l++)if(t=e[l],t!=="_"){if(t!=="0"&&t!=="1")return!1;o=!0}return o&&t!=="_"}if(t==="x"){for(l++;l<n;l++)if(t=e[l],t!=="_"){if(!R9(e.charCodeAt(l)))return!1;o=!0}return o&&t!=="_"}if(t==="o"){for(l++;l<n;l++)if(t=e[l],t!=="_"){if(!I9(e.charCodeAt(l)))return!1;o=!0}return o&&t!=="_"}}if(t==="_")return!1;for(;l<n;l++)if(t=e[l],t!=="_"){if(!N9(e.charCodeAt(l)))return!1;o=!0}return!(!o||t==="_")}function V9(e){var n=e,l=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(l=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return l*parseInt(n.slice(2),2);if(n[1]==="x")return l*parseInt(n.slice(2),16);if(n[1]==="o")return l*parseInt(n.slice(2),8)}return l*parseInt(n,10)}function W9(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!aa.isNegativeZero(e)}var U9=new Xs("tag:yaml.org,2002:int",{kind:"scalar",resolve:H9,construct:V9,predicate:W9,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),q9=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function K9(e){return!(e===null||!q9.test(e)||e[e.length-1]==="_")}function Y9(e){var n,l;return n=e.replace(/_/g,"").toLowerCase(),l=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?l===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:l*parseFloat(n,10)}var G9=/^[-+]?[0-9]+e/;function Z9(e,n){var l;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(aa.isNegativeZero(e))return"-0.0";return l=e.toString(10),G9.test(l)?l.replace("e",".e"):l}function X9(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||aa.isNegativeZero(e))}var J9=new Xs("tag:yaml.org,2002:float",{kind:"scalar",resolve:K9,construct:Y9,predicate:X9,represent:Z9,defaultStyle:"lowercase"}),Q9=$9.extend({implicit:[P9,j9,U9,J9]}),s6=Q9,Ey=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),wy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function e6(e){return e===null?!1:Ey.exec(e)!==null||wy.exec(e)!==null}function n6(e){var n,l,o,t,a,c,i,p=0,y=null,u,f,d;if(n=Ey.exec(e),n===null&&(n=wy.exec(e)),n===null)throw new Error("Date resolve error");if(l=+n[1],o=+n[2]-1,t=+n[3],!n[4])return new Date(Date.UTC(l,o,t));if(a=+n[4],c=+n[5],i=+n[6],n[7]){for(p=n[7].slice(0,3);p.length<3;)p+="0";p=+p}return n[9]&&(u=+n[10],f=+(n[11]||0),y=(u*60+f)*6e4,n[9]==="-"&&(y=-y)),d=new Date(Date.UTC(l,o,t,a,c,i,p)),y&&d.setTime(d.getTime()-y),d}function l6(e){return e.toISOString()}var o6=new Xs("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:e6,construct:n6,instanceOf:Date,represent:l6});function t6(e){return e==="<<"||e===null}var r6=new Xs("tag:yaml.org,2002:merge",{kind:"scalar",resolve:t6}),ca=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function a6(e){if(e===null)return!1;var n,l,o=0,t=e.length,a=ca;for(l=0;l<t;l++)if(n=a.indexOf(e.charAt(l)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function c6(e){var n,l,o=e.replace(/[\r\n=]/g,""),t=o.length,a=ca,c=0,i=[];for(n=0;n<t;n++)n%4===0&&n&&(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)),c=c<<6|a.indexOf(o.charAt(n));return l=t%4*6,l===0?(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)):l===18?(i.push(c>>10&255),i.push(c>>2&255)):l===12&&i.push(c>>4&255),new Uint8Array(i)}function i6(e){var n="",l=0,o,t,a=e.length,c=ca;for(o=0;o<a;o++)o%3===0&&o&&(n+=c[l>>18&63],n+=c[l>>12&63],n+=c[l>>6&63],n+=c[l&63]),l=(l<<8)+e[o];return t=a%3,t===0?(n+=c[l>>18&63],n+=c[l>>12&63],n+=c[l>>6&63],n+=c[l&63]):t===2?(n+=c[l>>10&63],n+=c[l>>4&63],n+=c[l<<2&63],n+=c[64]):t===1&&(n+=c[l>>2&63],n+=c[l<<4&63],n+=c[64],n+=c[64]),n}function p6(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var y6=new Xs("tag:yaml.org,2002:binary",{kind:"scalar",resolve:a6,construct:c6,predicate:p6,represent:i6}),u6=Object.prototype.hasOwnProperty,d6=Object.prototype.toString;function f6(e){if(e===null)return!0;var n=[],l,o,t,a,c,i=e;for(l=0,o=i.length;l<o;l+=1){if(t=i[l],c=!1,d6.call(t)!=="[object Object]")return!1;for(a in t)if(u6.call(t,a))if(!c)c=!0;else return!1;if(!c)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function B6(e){return e!==null?e:[]}var A6=new Xs("tag:yaml.org,2002:omap",{kind:"sequence",resolve:f6,construct:B6}),h6=Object.prototype.toString;function m6(e){if(e===null)return!0;var n,l,o,t,a,c=e;for(a=new Array(c.length),n=0,l=c.length;n<l;n+=1){if(o=c[n],h6.call(o)!=="[object Object]"||(t=Object.keys(o),t.length!==1))return!1;a[n]=[t[0],o[t[0]]]}return!0}function C6(e){if(e===null)return[];var n,l,o,t,a,c=e;for(a=new Array(c.length),n=0,l=c.length;n<l;n+=1)o=c[n],t=Object.keys(o),a[n]=[t[0],o[t[0]]];return a}var _6=new Xs("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:m6,construct:C6}),D6=Object.prototype.hasOwnProperty;function v6(e){if(e===null)return!0;var n,l=e;for(n in l)if(D6.call(l,n)&&l[n]!==null)return!1;return!0}function g6(e){return e!==null?e:{}}var b6=new Xs("tag:yaml.org,2002:set",{kind:"mapping",resolve:v6,construct:g6});s6.extend({implicit:[o6,r6],explicit:[y6,A6,_6,b6]});function ri(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var E6=new Array(256),w6=new Array(256);for(var Vn=0;Vn<256;Vn++)E6[Vn]=ri(Vn)?1:0,w6[Vn]=ri(Vn);function x6(e){return Array.from(new Set(e))}function ai(...e){let n,l,o;e.length===1?(n=0,o=1,[l]=e):[n,l,o=1]=e;const t=[];let a=n;for(;a<l;)t.push(a),a+=o||1;return t}function k6(e,n){if(!n||n==="all"||n==="*")return ai(1,e+1);const l=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))l.push(+o);else{const[t,a]=o.split("-",2);l.push(...ai(+t,a?+a+1:e+1))}return x6(l).filter(o=>o<=e).sort((o,t)=>o-t)}const F6=["title"],es=xs({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;F(z);const l=F(Sl),o=F(En),t=F(zl);function a(f=5){const d=[],B="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=B.length;for(let g=0;g<f;g++)d.push(B.charAt(Math.floor(Math.random()*h)));return d.join("")}const c=K(),i=Mn();yl(()=>{const f=n.at==null?o==null?void 0:o.value.length:n.at,d=O(()=>t!=null&&t.value?n.ranges.length-1:Math.min(Math.max(0,((l==null?void 0:l.value)||0)-(f||0)),n.ranges.length-1)),B=O(()=>n.ranges[d.value]||"");if(n.ranges.length>=2&&!(t!=null&&t.value)){const h=a(),g=_5(n.ranges.length-1).map(D=>h+D);o!=null&&o.value&&(o.value.push(...g),tt(()=>g.forEach(D=>rr(o.value,D)),i))}oo(()=>{if(!c.value)return;const g=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const D of g){const k=Array.from(D.querySelectorAll(".line")),w=k6(k.length,B.value);if(k.forEach((x,$)=>{const N=w.includes($+1);x.classList.toggle(gn,!0),x.classList.toggle("highlighted",N),x.classList.toggle("dishonored",!N)}),n.maxHeight){const x=D.querySelector(".line.highlighted");x&&x.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:y}=bf();function u(){var d,B;const f=(B=(d=c.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:B.textContent;f&&y(f)}return(f,d)=>{const B=i9,h=o9;return m(),I("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:Js({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[Ue(f.$slots,"default"),v(gs).codeCopy?(m(),I("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:v(p)?"Copied":"Copy",onClick:d[0]||(d[0]=g=>u())},[v(p)?(m(),P(B,{key:0,class:"p-2 w-8 h-8"})):(m(),P(h,{key:1,class:"p-2 w-8 h-8"}))],8,F6)):ds("v-if",!0)],4)}}}),$6=s("h1",null,"Arrays limitations",-1),O6=s("p",null,"Can you code a function which \u2026",-1),S6=s("ul",null,[s("li",null,"copy one array into another one ?"),s("li",null,"append two arrays ?"),s("li",null,"\u2026")],-1),z6=s("p",null,"What is the time complexity of such operation ?",-1),P6=s("p",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"copy/append\xA0arrays"),s("mo",null,"\u223C"),s("mi",{mathvariant:"script"},"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\text{copy/append arrays}\\sim \\mathcal{O}(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"copy/append\xA0arrays")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"\u223C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])],-1),L6=[P6],T6=s("p",null,[r("That\u2019s because arrays are stored in a contiguous memory block"),s("br"),r(" Which is also their strength !")],-1),M6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"&"),s("span",{style:{color:"#B8A965"}},"tab"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#DBD7CA"}},"i"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&"),s("span",{style:{color:"#B8A965"}},"tab"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#CB7676"}},"*sizeof"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"tab"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},"])")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"&"),s("span",{style:{color:"#8C862B"}},"tab"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#393A34"}},"i"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&"),s("span",{style:{color:"#8C862B"}},"tab"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#AB5959"}},"*sizeof"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"tab"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},"])")])])])],-1),j6={__name:"4",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center"),a=es,c=hn("click");return m(),P(Z,q(U(n)),{default:_(()=>[$6,O6,S6,z6,b(t,null,{default:_(()=>[_e((m(),I("div",null,L6)),[[c,1]])]),_:1}),_e((m(),I("div",null,[T6,b(t,null,{default:_(()=>[b(a,G({},{ranges:[""]}),{default:_(()=>[M6]),_:1},16)]),_:1})])),[[c,2]])]),_:1},16)}}},R6=s("h1",null,"Arrays limitations",-1),I6=s("p",null,[r("Let us be smarter to append two arrays. Let\u2019s use "),s("code",null,"memcpy"),r(" from the library "),s("code",null,"string.h")],-1),N6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},'// Copies "numBytes" bytes from address "from" to address "to"')]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"memcpy"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#B8A965"}},"to"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#B8A965"}},"from"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"size_t"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"numBytes"),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},'// Copies "numBytes" bytes from address "from" to address "to"')]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"memcpy"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#8C862B"}},"to"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#8C862B"}},"from"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"size_t"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"numBytes"),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),H6=s("p",null,[r("Note that this function returns "),s("code",null,"void *"),r(", a pointer to the targeted memory location of unspecified type. You will have to cast such a void pointer to be able to access the data at the memory location it refers to.")],-1),V6=s("p",null,[r("How to append "),s("code",null,"scnd_array"),r(" to "),s("code",null,"first_array"),r(" ?")],-1),W6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"first_array"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#6394BF"}},"45"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"48"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"6"),s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"scnd_array"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"5"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#6394BF"}},"8"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"14"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"69"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"23"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"5"),s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"first_array"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#296AA3"}},"45"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"48"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"6"),s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"scnd_array"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"5"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#296AA3"}},"8"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"14"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"69"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"23"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"5"),s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),U6={__name:"5",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[R6,I6,b(t,G({},{ranges:[""]}),{default:_(()=>[N6]),_:1},16),H6,V6,b(t,G({},{ranges:[""]}),{default:_(()=>[W6]),_:1},16)]),_:1},16)}}},q6=s("h1",null,"Memcopy: Example 1",-1),K6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"#"),s("span",{style:{color:"#4D9375"}},"include"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"<stdio.h>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"#"),s("span",{style:{color:"#4D9375"}},"include"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"<stdlib.h>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"#"),s("span",{style:{color:"#4D9375"}},"include"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"<string.h>")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"first_array"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"45"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"48"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"6"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," scnd_array[] "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"8"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"14"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"69"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"23"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"5"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// 5 is the number of the elements which are going to be appended")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"memcpy"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"first_array "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"5"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," scnd_array"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"5"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"sizeof"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#858585"}},"));")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// loop through and print all the array")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"i "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," i "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"printf"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#D4976C"}},"%d\\n"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"first_array"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#DBD7CA"}},"i"),s("span",{style:{color:"#858585"}},"]);")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"#"),s("span",{style:{color:"#1C6B48"}},"include"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"<stdio.h>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"#"),s("span",{style:{color:"#1C6B48"}},"include"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"<stdlib.h>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"#"),s("span",{style:{color:"#1C6B48"}},"include"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"<string.h>")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"first_array"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"45"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"48"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"6"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," scnd_array[] "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"8"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"14"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"69"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"23"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"5"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// 5 is the number of the elements which are going to be appended")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"memcpy"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"first_array "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"5"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," scnd_array"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"5"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"sizeof"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#8E8F8B"}},"));")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// loop through and print all the array")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"i "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," i "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"printf"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#A65E2B"}},"%d\\n"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"first_array"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#393A34"}},"i"),s("span",{style:{color:"#8E8F8B"}},"]);")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Y6={__name:"6",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[q6,b(t,G({},{ranges:[""]}),{default:_(()=>[K6]),_:1},16)]),_:1},16)}}},G6=s("h1",null,"Memcopy: Example 2",-1),Z6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"#"),s("span",{style:{color:"#4D9375"}},"include"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"<stdio.h>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"#"),s("span",{style:{color:"#4D9375"}},"include"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"<stdlib.h>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"#"),s("span",{style:{color:"#4D9375"}},"include"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"<string.h>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," array [] "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"54"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"85"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"20"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"63"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," copy "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"NULL"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," length "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"sizeof"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"5"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"       ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"    /* Memory allocation and copy */")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    copy "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"malloc"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}}," length "),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"memcpy"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}}," copy"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," array"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," length "),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"    /* Display the copied values */")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}}," length"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," length"),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#6394BF"}},"5"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," length"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#A1B567"}},"printf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#D4976C"}},"%d"),s("span",{style:{color:"#C98A7D"}},' "'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"copy"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#DBD7CA"}}," length "),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"printf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#D4976C"}},"\\n"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"free"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}}," copy "),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"#"),s("span",{style:{color:"#1C6B48"}},"include"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"<stdio.h>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"#"),s("span",{style:{color:"#1C6B48"}},"include"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"<stdlib.h>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"#"),s("span",{style:{color:"#1C6B48"}},"include"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"<string.h>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," array [] "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"54"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"85"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"20"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"63"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," copy "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"NULL"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," length "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"sizeof"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"5"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"       ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"    /* Memory allocation and copy */")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    copy "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"malloc"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}}," length "),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"memcpy"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}}," copy"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," array"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," length "),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"    /* Display the copied values */")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}}," length"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," length"),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#296AA3"}},"5"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," length"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#6C7834"}},"printf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#A65E2B"}},"%d"),s("span",{style:{color:"#B56959"}},' "'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"copy"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#393A34"}}," length "),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"printf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#A65E2B"}},"\\n"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"free"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}}," copy "),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),X6={__name:"7",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[G6,b(t,G({},{ranges:[""]}),{default:_(()=>[Z6]),_:1},16)]),_:1},16)}}};var J6="/courses/data-structure/linked-lists/chap5/array_complexity.png";const Q6=s("h1",null,"Arrays limitations",-1),s1=s("img",{src:J6,border:"rounded"},null,-1),e1=s("p",null,[s("br"),s("br"),s("br")],-1),n1=s("p",null,"Can we do better ?",-1),l1={__name:"8",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center");return m(),P(Z,q(U(n)),{default:_(()=>[Q6,s1,e1,b(t,null,{default:_(()=>[n1]),_:1})]),_:1},16)}}},o1=s("span",{style:{"font-weight":"700","font-size":"30px"}},"2. Linked Lists",-1),t1={__name:"9",setup(e){const n={layout:"intro"};return F(z),(l,o)=>{const t=Is("center");return m(),P(ra,q(U(n)),{default:_(()=>[b(t,null,{default:_(()=>[o1]),_:1})]),_:1},16)}}};var r1="/courses/data-structure/linked-lists/chap5/wagon.png",a1="/courses/data-structure/linked-lists/chap5/linked-wagons.png";const c1=s("h1",null,"Linked Lists",-1),i1=s("img",{src:r1},null,-1),p1=s("br",null,null,-1),y1=s("p",null,[r("Store each item in memory independently from the others: "),s("strong",null,"not contiguous in memory")],-1),u1=s("p",null,[s("br"),s("br"),s("br")],-1),d1=s("img",{src:a1},null,-1),f1=s("br",null,null,-1),B1=r(" Since all items are not stored contiguously, link them, i.e. each item provides a link to its successor making a sequence of items (a single successor per item) "),A1={__name:"10",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center");return m(),P(Z,q(U(n)),{default:_(()=>[c1,b(t,null,{default:_(()=>[i1]),_:1}),p1,y1,u1,b(t,null,{default:_(()=>[d1]),_:1}),f1,B1]),_:1},16)}}};var h1="/courses/data-structure/linked-lists/chap5/linked-wagons-representation.png";const m1=s("h1",null,"Linked Lists",-1),C1=s("br",null,null,-1),_1=s("br",null,null,-1),D1=s("p",null,[r("Each item has a "),s("strong",null,"pointer"),r(" to the next item (its successor in the sequence)")],-1),v1=s("br",null,null,-1),g1=s("br",null,null,-1),b1=s("img",{src:h1},null,-1),E1=s("br",null,null,-1),w1=s("br",null,null,-1),x1=s("p",null,[r("Don\u2019t forget a "),s("strong",null,"NULL"),r(" pointer at the end in order to test when the sequence ends")],-1),k1={__name:"11",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center");return m(),P(Z,q(U(n)),{default:_(()=>[m1,b(t,null,{default:_(()=>[C1,_1,D1]),_:1}),b(t,null,{default:_(()=>[v1,g1,b1]),_:1}),E1,w1,b(t,null,{default:_(()=>[x1]),_:1})]),_:1},16)}}};var ia="/courses/data-structure/linked-lists/chap5/linked-wagons-head.png";const F1=s("h1",null,"Linked Lists",-1),$1=s("br",null,null,-1),O1=s("br",null,null,-1),S1=s("p",null,"There is one missing piece \u2026 Why is it necessary ?",-1),z1=s("br",null,null,-1),P1=s("br",null,null,-1),L1=s("img",{src:ia},null,-1),T1=s("br",null,null,-1),M1=s("br",null,null,-1),j1=s("p",null,[r("How else would you find the size of the list ("),s("code",null," size(.)"),r(") without knowing the start ?")],-1),R1={__name:"12",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center"),a=hn("click");return m(),P(Z,q(U(n)),{default:_(()=>[F1,b(t,null,{default:_(()=>[$1,O1,S1]),_:1}),b(t,null,{default:_(()=>[z1,P1,L1]),_:1}),T1,M1,_e((m(),I("div",null,[b(t,null,{default:_(()=>[j1]),_:1})])),[[a,1]])]),_:1},16)}}};var I1="/courses/data-structure/linked-lists/chap5/memory-1.png";const N1=s("h1",null,"Memory representation",-1),H1=s("p",null,"Linked lists are stored noncontigously !",-1),V1=s("img",{src:ia},null,-1),W1=s("br",null,null,-1),U1=s("br",null,null,-1),q1=s("p",null,"So this scenario may happen",-1),K1=s("img",{src:I1},null,-1),Y1={__name:"13",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center");return m(),P(Z,q(U(n)),{default:_(()=>[N1,H1,b(t,null,{default:_(()=>[V1]),_:1}),W1,U1,q1,b(t,null,{default:_(()=>[K1]),_:1})]),_:1},16)}}};var G1="/courses/data-structure/linked-lists/chap5/memory-2.png";const Z1=s("h1",null,"Memory representation",-1),X1=s("p",null,"Linked lists are stored noncontigously !",-1),J1=s("img",{src:ia},null,-1),Q1=s("br",null,null,-1),sC=s("br",null,null,-1),eC=s("p",null,"And this one also",-1),nC=s("img",{src:G1},null,-1),lC={__name:"14",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center");return m(),P(Z,q(U(n)),{default:_(()=>[Z1,X1,b(t,null,{default:_(()=>[J1]),_:1}),Q1,sC,eC,b(t,null,{default:_(()=>[nC]),_:1})]),_:1},16)}}};var oC="/courses/data-structure/linked-lists/chap5/wagon-only.png",tC="/courses/data-structure/linked-lists/chap5/head-only.png";const rC=s("h1",null,"Linked lists in C/C++",-1),aC={class:"row"},cC=s("div",{class:"column"},[s("img",{src:oC})],-1),iC={class:"column"},pC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"typedef"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"struct"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#DBD7CA"}}," ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," data"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#758575"}},"    // Assume we store int\u2019s")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," next"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#758575"}},"  // Pointer to the successor of this item")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"typedef"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"struct"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#393A34"}}," ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," data"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#A0ADA0"}},"    // Assume we store int\u2019s")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," next"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#A0ADA0"}},"  // Pointer to the successor of this item")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),yC=s("br",null,null,-1),uC=s("br",null,null,-1),dC=s("br",null,null,-1),fC={class:"row"},BC=s("div",{class:"column"},[s("img",{src:tC})],-1),AC={class:"column"},hC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"typedef"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"struct"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"intlist")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," size"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#758575"}},"    // count of inserted values")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," first"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#758575"}}," // pointer to the first list element")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"typedef"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"struct"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"intlist")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," size"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#A0ADA0"}},"    // count of inserted values")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," first"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#A0ADA0"}}," // pointer to the first list element")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),mC={__name:"15",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[rC,s("div",aC,[cC,s("div",iC,[b(t,G({},{ranges:[""]}),{default:_(()=>[pC]),_:1},16)])]),yC,uC,dC,s("div",fC,[BC,s("div",AC,[b(t,G({},{ranges:[""]}),{default:_(()=>[hC]),_:1},16)])])]),_:1},16)}}},CC=s("h1",null,"Creation of Linked lists",-1),_C={class:"row"},DC={class:"column"},vC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),gC={class:"column"},bC=s("p",null,[r("Here we have used the "),s("strong",null,"arrow operator")],-1),EC={class:"row"},wC={class:"column"},xC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),kC=s("p",null,"The Arrow(->) operator exists to access the members of the structure or the unions using pointers.",-1),FC={class:"column"},$C=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}},"ml"),s("span",{style:{color:"#858585"}},")."),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}},"ml"),s("span",{style:{color:"#8E8F8B"}},")."),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),OC=s("p",null,"The Dot(.) operator is used to normally access members of a structure or union",-1),SC={__name:"16",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[CC,s("div",_C,[s("div",DC,[b(t,G({},{ranges:[""]}),{default:_(()=>[vC]),_:1},16)]),s("div",gC,[bC,s("div",EC,[s("div",wC,[b(t,G({},{ranges:[""]}),{default:_(()=>[xC]),_:1},16),kC]),s("div",FC,[b(t,G({},{ranges:[""]}),{default:_(()=>[$C]),_:1},16),OC])])])])]),_:1},16)}}};var zC="/courses/data-structure/linked-lists/chap5/ll-1.png";const PC=s("h1",null,"Creation of Linked lists",-1),LC={class:"row"},TC={class:"column"},MC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),jC=s("div",{class:"column"},[s("img",{src:zC})],-1),RC=s("p",null,[r("Dynamic allocation of a variable of type "),s("code",null,"intlist"),s("br"),r(" Returns a pointer "),s("code",null,"ml"),r(" to the corresponding memory emplacement")],-1),IC={__name:"17",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[PC,s("div",LC,[s("div",TC,[b(t,G({},{ranges:["2"]}),{default:_(()=>[MC]),_:1},16)]),jC]),RC]),_:1},16)}}};var NC="/courses/data-structure/linked-lists/chap5/ll-2.png";const HC=s("h1",null,"Creation of Linked lists",-1),VC={class:"row"},WC={class:"column"},UC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),qC=s("div",{class:"column"},[s("img",{src:NC})],-1),KC=s("p",null,[r("The member "),s("code",null,"first"),r(" of the variable pointed by "),s("code",null,"ml"),r(" is assigned to the "),s("strong",null,"null pointer"),r(", i.e., "),s("code",null,"nullptr")],-1),YC={__name:"18",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[HC,s("div",VC,[s("div",WC,[b(t,G({},{ranges:["3"]}),{default:_(()=>[UC]),_:1},16)]),qC]),KC]),_:1},16)}}};var GC="/courses/data-structure/linked-lists/chap5/ll-3.png";const ZC=s("h1",null,"Creation of Linked lists",-1),XC={class:"row"},JC={class:"column"},QC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),s_=s("div",{class:"column"},[s("img",{src:GC})],-1),e_=s("p",null,[r("The member "),s("code",null,"size"),r(" of the variable pointed by "),s("code",null,"ml"),r(" is assigned to 0")],-1),n_={__name:"19",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[ZC,s("div",XC,[s("div",JC,[b(t,G({},{ranges:["4"]}),{default:_(()=>[QC]),_:1},16)]),s_]),e_]),_:1},16)}}};var l_="/courses/data-structure/linked-lists/chap5/ll-4.png";const o_=s("h1",null,"Creation of Linked lists",-1),t_={class:"row"},r_={class:"column"},a_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),c_=s("div",{class:"column"},[s("img",{src:l_})],-1),i_=s("p",null,[r("Dynamic allocation of a variable of type "),s("code",null,"node"),s("br"),r(" Returns a pointer "),s("code",null,"n1"),r(" to the corresponding memory emplacement")],-1),p_={__name:"20",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[o_,s("div",t_,[s("div",r_,[b(t,G({},{ranges:["6"]}),{default:_(()=>[a_]),_:1},16)]),c_]),i_]),_:1},16)}}};var y_="/courses/data-structure/linked-lists/chap5/ll-5.png";const u_=s("h1",null,"Creation of Linked lists",-1),d_={class:"row"},f_={class:"column"},B_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),A_=s("div",{class:"column"},[s("img",{src:y_})],-1),h_=s("p",null,[r("The member "),s("code",null,"data"),r(" of the variable pointed by "),s("code",null,"n1"),r(" is assigned to 10")],-1),m_={__name:"21",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[u_,s("div",d_,[s("div",f_,[b(t,G({},{ranges:["7"]}),{default:_(()=>[B_]),_:1},16)]),A_]),h_]),_:1},16)}}};var C_="/courses/data-structure/linked-lists/chap5/ll-6.png";const __=s("h1",null,"Creation of Linked lists",-1),D_={class:"row"},v_={class:"column"},g_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),b_=s("div",{class:"column"},[s("img",{src:C_})],-1),E_=s("p",null,[r("The member "),s("code",null,"next"),r(" of the variable pointed by "),s("code",null,"n1"),r(" is assigned to the null pointer")],-1),w_={__name:"22",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[__,s("div",D_,[s("div",v_,[b(t,G({},{ranges:["8"]}),{default:_(()=>[g_]),_:1},16)]),b_]),E_]),_:1},16)}}};var x_="/courses/data-structure/linked-lists/chap5/ll-7.png";const k_=s("h1",null,"Creation of Linked lists",-1),F_={class:"row"},$_={class:"column"},O_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),S_=s("div",{class:"column"},[s("img",{src:x_})],-1),z_=s("p",null,[r("The member "),s("code",null,"first"),r(" of the variable pointed by "),s("code",null,"ml"),r(" is assigned to the value of "),s("code",null,"n1"),r(", that is the address of the variable pointed by "),s("code",null,"n1")],-1),P_={__name:"23",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[k_,s("div",F_,[s("div",$_,[b(t,G({},{ranges:["9"]}),{default:_(()=>[O_]),_:1},16)]),S_]),z_]),_:1},16)}}};var L_="/courses/data-structure/linked-lists/chap5/ll-8.png";const T_=s("h1",null,"Creation of Linked lists",-1),M_={class:"row"},j_={class:"column"},R_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),I_=s("div",{class:"column"},[s("img",{src:L_})],-1),N_=s("p",null,[r("The member "),s("code",null,"size"),r(" of the variable pointed by "),s("code",null,"ml"),r(" is incremented")],-1),H_={__name:"24",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[T_,s("div",M_,[s("div",j_,[b(t,G({},{ranges:["10"]}),{default:_(()=>[R_]),_:1},16)]),I_]),N_]),_:1},16)}}};var V_="/courses/data-structure/linked-lists/chap5/ll-9.png";const W_=s("h1",null,"Creation of Linked lists",-1),U_={class:"row"},q_={class:"column"},K_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Y_=s("div",{class:"column"},[s("img",{src:V_})],-1),G_=s("p",null,[r("Dynamic allocation of a variable of type "),s("code",null,"node"),s("br"),r(" Returns a pointer "),s("code",null,"n2"),r(" to the corresponding memory emplacement")],-1),Z_={__name:"25",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[W_,s("div",U_,[s("div",q_,[b(t,G({},{ranges:["12"]}),{default:_(()=>[K_]),_:1},16)]),Y_]),G_]),_:1},16)}}};var X_="/courses/data-structure/linked-lists/chap5/ll-10.png";const J_=s("h1",null,"Creation of Linked lists",-1),Q_={class:"row"},sD={class:"column"},eD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),nD=s("div",{class:"column"},[s("img",{src:X_})],-1),lD=s("p",null,[r("The member "),s("code",null,"data"),r(" of the variable pointed by "),s("code",null,"n2"),r(" is assigned to 21")],-1),oD={__name:"26",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[J_,s("div",Q_,[s("div",sD,[b(t,G({},{ranges:["13"]}),{default:_(()=>[eD]),_:1},16)]),nD]),lD]),_:1},16)}}};var tD="/courses/data-structure/linked-lists/chap5/ll-11.png";const rD=s("h1",null,"Creation of Linked lists",-1),aD={class:"row"},cD={class:"column"},iD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),pD=s("div",{class:"column"},[s("img",{src:tD})],-1),yD=s("p",null,[r("The member "),s("code",null,"next"),r(" of the variable pointed by "),s("code",null,"n2"),r(" is assigned to the null pointer")],-1),uD={__name:"27",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[rD,s("div",aD,[s("div",cD,[b(t,G({},{ranges:["14"]}),{default:_(()=>[iD]),_:1},16)]),pD]),yD]),_:1},16)}}};var dD="/courses/data-structure/linked-lists/chap5/ll-12.png";const fD=s("h1",null,"Creation of Linked lists",-1),BD={class:"row"},AD={class:"column"},hD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),mD=s("div",{class:"column"},[s("img",{src:dD})],-1),CD=s("p",null,[r("The member "),s("code",null,"next"),r(" of the variable pointed by "),s("code",null,"n1"),r(" is assigned to the value of "),s("code",null,"n2"),r(", that is the address of the variable pointed by "),s("code",null,"n2")],-1),_D={__name:"28",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[fD,s("div",BD,[s("div",AD,[b(t,G({},{ranges:["15"]}),{default:_(()=>[hD]),_:1},16)]),mD]),CD]),_:1},16)}}};var pa="/courses/data-structure/linked-lists/chap5/ll-13.png";const DD=s("h1",null,"Creation of Linked lists",-1),vD={class:"row"},gD={class:"column"},bD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," ml "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," intlist"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n1 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," n2 "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"21"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n2"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"n1"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," n2"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," ml "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," intlist"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n1 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," n2 "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"21"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n2"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"n1"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," n2"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ED=s("div",{class:"column"},[s("img",{src:pa})],-1),wD=s("p",null,[r("The member "),s("code",null,"size"),r(" of the variable pointed by "),s("code",null,"ml"),r(" is incremented")],-1),xD={__name:"29",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[DD,s("div",vD,[s("div",gD,[b(t,G({},{ranges:["16"]}),{default:_(()=>[bD]),_:1},16)]),ED]),wD]),_:1},16)}}};var xy="/courses/data-structure/linked-lists/chap5/question-memory-1-true.png",kD="/courses/data-structure/linked-lists/chap5/question-memory-2-false.png",FD="/courses/data-structure/linked-lists/chap5/question-memory-3-false.png",$D="/courses/data-structure/linked-lists/chap5/question-memory-4-false.png";const OD=s("h1",null,"How does it look like in memory ?",-1),SD=s("img",{src:pa,style:{width:"250px"}},null,-1),zD=s("br",null,null,-1),PD=s("br",null,null,-1),LD=s("div",{class:"row"},[s("div",{class:"column"},[r(" a) "),s("img",{src:xy,style:{width:"430px"}}),s("br"),r(" b) "),s("img",{src:kD,style:{width:"430px"}})]),s("div",{class:"column"},[r(" c) "),s("img",{src:FD,style:{width:"430px"}}),s("br"),r(" d) "),s("img",{src:$D,style:{width:"430px"}})])],-1),TD=s("br",null,null,-1),MD=s("br",null,null,-1),jD=s("br",null,null,-1),RD=r(" Your answers at "),ID=s("a",{href:"www.wooclap.com/CPP5"},"www.wooclap.com/CPP5",-1),ND={__name:"30",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center");return m(),P(Z,q(U(n)),{default:_(()=>[OD,b(t,null,{default:_(()=>[SD]),_:1}),zD,PD,LD,b(t,null,{default:_(()=>[TD,MD,jD,RD,ID]),_:1})]),_:1},16)}}},HD=s("h1",null,"How does it look like in memory ?",-1),VD=s("img",{src:pa,style:{width:"250px"}},null,-1),WD=s("br",null,null,-1),UD=s("br",null,null,-1),qD=s("p",null,"The correct answer is a)",-1),KD=s("img",{src:xy,style:{width:"600px"}},null,-1),YD=s("ul",null,[s("li",null,[s("code",null,"ml"),r(", "),s("code",null,"n1"),r(" and "),s("code",null,"n2"),r(" are pointers. They return the address of the variables dynamically allocated")]),s("li",null,[r("The variable pointed by "),s("code",null,"ml"),r(" starts at the address 59 and is of type intlist "),s("ul",null,[s("li",null,"member size: 2"),s("li",null,"member next: 55 = value of n1 = address of the variable pointed by n1")])])],-1),GD={__name:"31",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center");return m(),P(Z,q(U(n)),{default:_(()=>[HD,b(t,null,{default:_(()=>[VD]),_:1}),WD,UD,qD,b(t,null,{default:_(()=>[KD]),_:1}),YD]),_:1},16)}}},ZD=s("h1",null,"Primitives operations on linked lists",-1),XD=s("ul",null,[s("li",null,"Display"),s("li",null,"Insertion"),s("li",null,"Deletion"),s("li",null,"Access"),s("li",null,"Search"),s("li",null,"\u2026")],-1),JD={__name:"32",setup(e){const n={};return F(z),(l,o)=>(m(),P(Z,q(U(n)),{default:_(()=>[ZD,XD]),_:1},16))}};var QD="/courses/data-structure/linked-lists/chap5/display-1.png";const s7=s("h1",null,"Display",-1),e7={class:"row"},n7={class:"column"},l7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		cout "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," endl"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		cout "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," endl"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),o7=s("div",{class:"column"},[s("img",{src:QD})],-1),t7={__name:"33",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[s7,s("div",e7,[s("div",n7,[b(t,G({},{ranges:[""]}),{default:_(()=>[l7]),_:1},16)]),o7])]),_:1},16)}}};var ya="/courses/data-structure/linked-lists/chap5/display-2.png";const r7=s("h1",null,"Display",-1),a7={class:"row"},c7={class:"column"},i7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		cout "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," endl"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		cout "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," endl"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),p7=s("div",{class:"column"},[s("img",{src:ya})],-1),y7={__name:"34",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[r7,s("div",a7,[s("div",c7,[b(t,G({},{ranges:["6"]}),{default:_(()=>[i7]),_:1},16)]),p7])]),_:1},16)}}},u7=s("h1",null,"Display",-1),d7={class:"row"},f7={class:"column"},B7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		cout "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," endl"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		cout "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," endl"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),A7=s("div",{class:"column"},[s("img",{src:ya})],-1),h7={__name:"35",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[u7,s("div",d7,[s("div",f7,[b(t,G({},{ranges:["7"]}),{default:_(()=>[B7]),_:1},16)]),A7])]),_:1},16)}}},m7=s("h1",null,"Display",-1),C7={class:"row"},_7={class:"column"},D7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		cout "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," endl"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		cout "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," endl"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),v7=s("div",{class:"column"},[s("img",{src:ya})],-1),g7=s("p",null,"Display in console:",-1),b7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"C:"),s("span",{style:{color:"#D4976C"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"10")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"C:"),s("span",{style:{color:"#A65E2B"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"10")])])])],-1),E7={__name:"36",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[m7,s("div",C7,[s("div",_7,[b(t,G({},{ranges:["8"]}),{default:_(()=>[D7]),_:1},16)]),v7]),g7,b(t,G({},{ranges:[""]}),{default:_(()=>[b7]),_:1},16)]),_:1},16)}}};var ua="/courses/data-structure/linked-lists/chap5/display-3.png";const w7=s("h1",null,"Display",-1),x7={class:"row"},k7={class:"column"},F7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		cout "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," endl"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		cout "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," endl"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$7=s("div",{class:"column"},[s("img",{src:ua})],-1),O7=s("p",null,"Display in console:",-1),S7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"C:"),s("span",{style:{color:"#D4976C"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"10")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"C:"),s("span",{style:{color:"#A65E2B"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"10")])])])],-1),z7={__name:"37",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[w7,s("div",x7,[s("div",k7,[b(t,G({},{ranges:["9"]}),{default:_(()=>[F7]),_:1},16)]),$7]),O7,b(t,G({},{ranges:[""]}),{default:_(()=>[S7]),_:1},16)]),_:1},16)}}},P7=s("h1",null,"Display",-1),L7={class:"row"},T7={class:"column"},M7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		cout "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," endl"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		cout "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," endl"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),j7=s("div",{class:"column"},[s("img",{src:ua})],-1),R7=s("p",null,"Display in console:",-1),I7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"C:"),s("span",{style:{color:"#D4976C"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"10")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"C:"),s("span",{style:{color:"#A65E2B"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"10")])])])],-1),N7={__name:"38",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[P7,s("div",L7,[s("div",T7,[b(t,G({},{ranges:["7"]}),{default:_(()=>[M7]),_:1},16)]),j7]),R7,b(t,G({},{ranges:[""]}),{default:_(()=>[I7]),_:1},16)]),_:1},16)}}},H7=s("h1",null,"Display",-1),V7={class:"row"},W7={class:"column"},U7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		cout "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," endl"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		cout "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," endl"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),q7=s("div",{class:"column"},[s("img",{src:ua})],-1),K7=s("p",null,"Display in console:",-1),Y7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"C:"),s("span",{style:{color:"#D4976C"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"10")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"21")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"C:"),s("span",{style:{color:"#A65E2B"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"10")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"21")])])])],-1),G7={__name:"39",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[H7,s("div",V7,[s("div",W7,[b(t,G({},{ranges:["8"]}),{default:_(()=>[U7]),_:1},16)]),q7]),K7,b(t,G({},{ranges:[""]}),{default:_(()=>[Y7]),_:1},16)]),_:1},16)}}};var da="/courses/data-structure/linked-lists/chap5/display-4.png";const Z7=s("h1",null,"Display",-1),X7={class:"row"},J7={class:"column"},Q7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		cout "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," endl"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		cout "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," endl"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),sv=s("div",{class:"column"},[s("img",{src:da})],-1),ev=s("p",null,"Display in console:",-1),nv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"C:"),s("span",{style:{color:"#D4976C"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"10")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"21")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"C:"),s("span",{style:{color:"#A65E2B"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"10")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"21")])])])],-1),lv={__name:"40",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[Z7,s("div",X7,[s("div",J7,[b(t,G({},{ranges:["9"]}),{default:_(()=>[Q7]),_:1},16)]),sv]),ev,b(t,G({},{ranges:[""]}),{default:_(()=>[nv]),_:1},16)]),_:1},16)}}},ov=s("h1",null,"Display",-1),tv={class:"row"},rv={class:"column"},av=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		cout "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," endl"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		cout "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," endl"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),cv=s("div",{class:"column"},[s("img",{src:da})],-1),iv=s("p",null,"Display in console:",-1),pv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"C:"),s("span",{style:{color:"#D4976C"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"10")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"21")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"C:"),s("span",{style:{color:"#A65E2B"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"10")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"21")])])])],-1),yv={__name:"41",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[ov,s("div",tv,[s("div",rv,[b(t,G({},{ranges:["7"]}),{default:_(()=>[av]),_:1},16)]),cv]),iv,b(t,G({},{ranges:[""]}),{default:_(()=>[pv]),_:1},16)]),_:1},16)}}},uv=s("h1",null,"Display",-1),dv={class:"row"},fv={class:"column"},Bv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		cout "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<<"),s("span",{style:{color:"#DBD7CA"}}," endl"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"		current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"	// supposed the list initialized as before")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		cout "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<<"),s("span",{style:{color:"#393A34"}}," endl"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"		current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Av=s("div",{class:"column"},[s("img",{src:da})],-1),hv=s("p",null,"Display in console:",-1),mv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"C:"),s("span",{style:{color:"#D4976C"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"10")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"21")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"...Program finished with "),s("span",{style:{color:"#E0A569"}},"exit"),s("span",{style:{color:"#DBD7CA"}}," code 0")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"Press ENTER to "),s("span",{style:{color:"#E0A569"}},"exit"),s("span",{style:{color:"#DBD7CA"}}," console.")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"C:"),s("span",{style:{color:"#A65E2B"}},"\\>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"10")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"21")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"...Program finished with "),s("span",{style:{color:"#B58451"}},"exit"),s("span",{style:{color:"#393A34"}}," code 0")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"Press ENTER to "),s("span",{style:{color:"#B58451"}},"exit"),s("span",{style:{color:"#393A34"}}," console.")])])])],-1),Cv={__name:"42",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[uv,s("div",dv,[s("div",fv,[b(t,G({},{ranges:["10"]}),{default:_(()=>[Bv]),_:1},16)]),Av]),hv,b(t,G({},{ranges:[""]}),{default:_(()=>[mv]),_:1},16)]),_:1},16)}}};var ky="/courses/data-structure/linked-lists/chap5/insert-1.png";const _v=s("h1",null,"Insertion",-1),Dv=s("p",null,"Can you code a function to insert a new element to the beginning of a list ?",-1),vv={class:"row"},gv={class:"column"},bv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"insert"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"newnode"),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"newnode"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"insert"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"newnode"),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"newnode"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Ev=s("div",{class:"column"},[s("img",{src:ky,style:{height:"200px"}})],-1),wv=s("p",null,[r("Answers at "),s("a",{href:"www.wooclap.com/CPP5B"},"www.wooclap.com/CPP5B")],-1),xv={__name:"43",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[_v,Dv,s("div",vv,[s("div",gv,[b(t,G({},{ranges:[""]}),{default:_(()=>[bv]),_:1},16)]),Ev]),wv]),_:1},16)}}},kv=s("h1",null,"Insertion",-1),Fv=s("p",null,"Can you code a function to insert a new element to the beginning of a list ?",-1),$v={class:"row"},Ov={class:"column"},Sv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"insert"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"newnode"),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"newnode"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," newnode"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"insert"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"newnode"),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"newnode"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," newnode"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),zv=s("div",{class:"column"},[s("img",{src:ky,style:{height:"200px"}})],-1),Pv={__name:"44",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[kv,Fv,s("div",$v,[s("div",Ov,[b(t,G({},{ranges:[""]}),{default:_(()=>[Sv]),_:1},16)]),zv])]),_:1},16)}}};var Lv="/courses/data-structure/linked-lists/chap5/insert-2.png";const Tv=s("h1",null,"Insertion",-1),Mv=s("p",null,"Can you code a function to insert a new element to the beginning of a list ?",-1),jv={class:"row"},Rv={class:"column"},Iv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"insert"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"newnode"),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"newnode"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," newnode"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"insert"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"newnode"),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"newnode"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," newnode"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Nv=s("div",{class:"column"},[s("img",{src:Lv,style:{height:"200px"}})],-1),Hv={__name:"45",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[Tv,Mv,s("div",jv,[s("div",Rv,[b(t,G({},{ranges:["3"]}),{default:_(()=>[Iv]),_:1},16)]),Nv])]),_:1},16)}}};var Vv="/courses/data-structure/linked-lists/chap5/insert-3.png";const Wv=s("h1",null,"Insertion",-1),Uv=s("p",null,"Can you code a function to insert a new element to the beginning of a list ?",-1),qv={class:"row"},Kv={class:"column"},Yv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"insert"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"newnode"),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"newnode"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," newnode"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"insert"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"newnode"),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"newnode"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," newnode"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Gv=s("div",{class:"column"},[s("img",{src:Vv,style:{height:"200px"}})],-1),Zv={__name:"46",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[Wv,Uv,s("div",qv,[s("div",Kv,[b(t,G({},{ranges:["4"]}),{default:_(()=>[Yv]),_:1},16)]),Gv])]),_:1},16)}}};var Xv="/courses/data-structure/linked-lists/chap5/insert-4.png";const Jv=s("h1",null,"Insertion",-1),Qv=s("p",null,"Can you code a function to insert a new element to the beginning of a list ?",-1),sg={class:"row"},eg={class:"column"},ng=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"insert"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"newnode"),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"newnode"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," newnode"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"insert"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"newnode"),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"newnode"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," newnode"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),lg=s("div",{class:"column"},[s("img",{src:Xv,style:{height:"200px"}})],-1),og={__name:"47",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[Jv,Qv,s("div",sg,[s("div",eg,[b(t,G({},{ranges:["5"]}),{default:_(()=>[ng]),_:1},16)]),lg])]),_:1},16)}}};var tg="/courses/data-structure/linked-lists/chap5/delete-1.png";const rg=s("h1",null,"Deletion",-1),ag=s("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),cg={class:"row"},ig={class:"column"},pg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),yg=s("div",{class:"column"},[s("img",{src:tg})],-1),ug={__name:"48",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[rg,ag,s("div",cg,[s("div",ig,[b(t,G({},{ranges:[""]}),{default:_(()=>[pg]),_:1},16)]),yg])]),_:1},16)}}};var dg="/courses/data-structure/linked-lists/chap5/delete-2.png";const fg=s("h1",null,"Deletion",-1),Bg=s("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),Ag={class:"row"},hg={class:"column"},mg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"obsolete_node"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"delete"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"obsolete_node"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"delete"),s("span",{style:{color:"#393A34"}}," obsolete_node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Cg=s("div",{class:"column"},[s("img",{src:dg})],-1),_g={__name:"49",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[fg,Bg,s("div",Ag,[s("div",hg,[b(t,G({},{ranges:["2"]}),{default:_(()=>[mg]),_:1},16)]),Cg])]),_:1},16)}}};var Dg="/courses/data-structure/linked-lists/chap5/delete-3.png";const vg=s("h1",null,"Deletion",-1),gg=s("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),bg={class:"row"},Eg={class:"column"},wg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"obsolete_node"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"delete"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"obsolete_node"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"delete"),s("span",{style:{color:"#393A34"}}," obsolete_node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),xg=s("div",{class:"column"},[s("img",{src:Dg})],-1),kg={__name:"50",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[vg,gg,s("div",bg,[s("div",Eg,[b(t,G({},{ranges:["3"]}),{default:_(()=>[wg]),_:1},16)]),xg])]),_:1},16)}}};var Fg="/courses/data-structure/linked-lists/chap5/delete-4.png";const $g=s("h1",null,"Deletion",-1),Og=s("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),Sg={class:"row"},zg={class:"column"},Pg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"obsolete_node"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"delete"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"obsolete_node"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"delete"),s("span",{style:{color:"#393A34"}}," obsolete_node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Lg=s("div",{class:"column"},[s("img",{src:Fg})],-1),Tg={__name:"51",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[$g,Og,s("div",Sg,[s("div",zg,[b(t,G({},{ranges:["4"]}),{default:_(()=>[Pg]),_:1},16)]),Lg])]),_:1},16)}}};var Mg="/courses/data-structure/linked-lists/chap5/delete-5.png";const jg=s("h1",null,"Deletion",-1),Rg=s("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),Ig={class:"row"},Ng={class:"column"},Hg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"obsolete_node"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"delete"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"obsolete_node"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"delete"),s("span",{style:{color:"#393A34"}}," obsolete_node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Vg=s("div",{class:"column"},[s("img",{src:Mg})],-1),Wg={__name:"52",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[jg,Rg,s("div",Ig,[s("div",Ng,[b(t,G({},{ranges:["5"]}),{default:_(()=>[Hg]),_:1},16)]),Vg])]),_:1},16)}}};var Ug="/courses/data-structure/linked-lists/chap5/delete-6.png";const qg=s("h1",null,"Deletion",-1),Kg=s("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),Yg={class:"row"},Gg={class:"column"},Zg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"obsolete_node"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"delete"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"obsolete_node"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"delete"),s("span",{style:{color:"#393A34"}}," obsolete_node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Xg=s("div",{class:"column"},[s("img",{src:Ug})],-1),Jg={__name:"53",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[qg,Kg,s("div",Yg,[s("div",Gg,[b(t,G({},{ranges:["6"]}),{default:_(()=>[Zg]),_:1},16)]),Xg])]),_:1},16)}}},Qg=s("h1",null,"Deletion",-1),s4=s("p",null,"Can you code a function which, given p (the pointer to the 2nd item), delete the 3rd item ?",-1),e4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"obsolete_node"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"delete"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"obsolete_node"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"delete"),s("span",{style:{color:"#393A34"}}," obsolete_node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),n4=s("p",null,"What is the complexity?",-1),l4=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"linked\xA0list\xA0deletion\xA0"),s("mo",null,"\u223C"),s("mi",{mathvariant:"script"},"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\text{linked list deletion }\\sim\\mathcal{O}(1) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"linked\xA0list\xA0deletion\xA0")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"\u223C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])])],-1),o4=[l4],t4={__name:"54",setup(e){const n={};return F(z),(l,o)=>{const t=es,a=hn("click");return m(),P(Z,q(U(n)),{default:_(()=>[Qg,s4,b(t,G({},{ranges:[""]}),{default:_(()=>[e4]),_:1},16),n4,_e((m(),I("div",null,o4)),[[a,1]])]),_:1},16)}}},r4=s("h1",null,"Deletion (improved)",-1),a4=s("p",null,"Actually a better version of the function is as follow, why?",-1),c4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"delete_next_given_ptr"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"p "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        obsolete_node "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"obsolete_node "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"            "),s("span",{style:{color:"#B8A965"}},"p"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"obsolete_node"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"   			"),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"size"),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"           	"),s("span",{style:{color:"#CB7676"}},"delete"),s("span",{style:{color:"#DBD7CA"}}," obsolete_node"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"delete_next_given_ptr"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"p "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        obsolete_node "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"obsolete_node "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"            "),s("span",{style:{color:"#8C862B"}},"p"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"obsolete_node"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"   			"),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"size"),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"           	"),s("span",{style:{color:"#AB5959"}},"delete"),s("span",{style:{color:"#393A34"}}," obsolete_node"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),i4=s("p",null,[r("Because it handle the cases where "),s("code",null,"p"),r(" is a null pointer or the last element of the linked list")],-1),p4=[i4],y4={__name:"55",setup(e){const n={};return F(z),(l,o)=>{const t=es,a=hn("click");return m(),P(Z,q(U(n)),{default:_(()=>[r4,a4,b(t,G({},{ranges:[""]}),{default:_(()=>[c4]),_:1},16),_e((m(),I("div",null,p4)),[[a,1]])]),_:1},16)}}},u4=s("h1",null,"Access",-1),d4=s("p",null,"Can you code a function to access the i-th element of a linked list?",-1),f4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        j"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"j "),s("span",{style:{color:"#CB7676"}},"=="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," current"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        j"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"j "),s("span",{style:{color:"#AB5959"}},"=="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," current"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),B4={__name:"56",setup(e){const n={};return F(z),(l,o)=>{const t=es,a=hn("click");return m(),P(Z,q(U(n)),{default:_(()=>[u4,d4,_e((m(),I("div",null,[b(t,G({},{ranges:[""]}),{default:_(()=>[f4]),_:1},16)])),[[a,1]])]),_:1},16)}}};var A4="/courses/data-structure/linked-lists/chap5/access-2.png";const h4=s("h1",null,"Access",-1),m4=s("p",null,"Can you code a function to access the i-th element of a linked list?",-1),C4={class:"row"},_4={class:"column"},D4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        j"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"j "),s("span",{style:{color:"#CB7676"}},"=="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," current"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        j"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"j "),s("span",{style:{color:"#AB5959"}},"=="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," current"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),v4=s("div",{class:"column"},[s("img",{src:A4})],-1),g4={__name:"57",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[h4,m4,s("div",C4,[s("div",_4,[b(t,G({},{ranges:["3,4"]}),{default:_(()=>[D4]),_:1},16)]),v4])]),_:1},16)}}};var b4="/courses/data-structure/linked-lists/chap5/access-3.png";const E4=s("h1",null,"Access",-1),w4=s("p",null,"Can you code a function to access the i-th element of a linked list?",-1),x4={class:"row"},k4={class:"column"},F4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        j"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"j "),s("span",{style:{color:"#CB7676"}},"=="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," current"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        j"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"j "),s("span",{style:{color:"#AB5959"}},"=="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," current"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$4=s("div",{class:"column"},[s("img",{src:b4})],-1),O4={__name:"58",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[E4,w4,s("div",x4,[s("div",k4,[b(t,G({},{ranges:["6"]}),{default:_(()=>[F4]),_:1},16)]),$4])]),_:1},16)}}};var S4="/courses/data-structure/linked-lists/chap5/access-4.png";const z4=s("h1",null,"Access",-1),P4=s("p",null,"Can you code a function to access the i-th element of a linked list?",-1),L4={class:"row"},T4={class:"column"},M4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        j"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"j "),s("span",{style:{color:"#CB7676"}},"=="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," current"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        j"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"j "),s("span",{style:{color:"#AB5959"}},"=="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," current"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),j4=s("div",{class:"column"},[s("img",{src:S4})],-1),R4={__name:"59",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[z4,P4,s("div",L4,[s("div",T4,[b(t,G({},{ranges:["7"]}),{default:_(()=>[M4]),_:1},16)]),j4])]),_:1},16)}}};var I4="/courses/data-structure/linked-lists/chap5/access-5.png";const N4=s("h1",null,"Access",-1),H4=s("p",null,"Can you code a function to access the i-th element of a linked list?",-1),V4={class:"row"},W4={class:"column"},U4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        j"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"j "),s("span",{style:{color:"#CB7676"}},"=="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," current"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        j"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"j "),s("span",{style:{color:"#AB5959"}},"=="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," current"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),q4=s("div",{class:"column"},[s("img",{src:I4})],-1),K4={__name:"60",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[N4,H4,s("div",V4,[s("div",W4,[b(t,G({},{ranges:["6"]}),{default:_(()=>[U4]),_:1},16)]),q4])]),_:1},16)}}};var Fy="/courses/data-structure/linked-lists/chap5/access-6.png";const Y4=s("h1",null,"Access",-1),G4=s("p",null,"Can you code a function to access the i-th element of a linked list?",-1),Z4={class:"row"},X4={class:"column"},J4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        j"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"j "),s("span",{style:{color:"#CB7676"}},"=="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," current"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        j"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"j "),s("span",{style:{color:"#AB5959"}},"=="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," current"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Q4=s("div",{class:"column"},[s("img",{src:Fy})],-1),s0=s("p",null,[r("Since "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"j"),s("mo",null,"="),s("mi",null,"i"),s("mo",null,"="),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"j=i=2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])]),r(", it get outs the loop \u2026")],-1),e0={__name:"61",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[Y4,G4,s("div",Z4,[s("div",X4,[b(t,G({},{ranges:["7"]}),{default:_(()=>[J4]),_:1},16)]),Q4]),s0]),_:1},16)}}},n0=s("h1",null,"Access",-1),l0=s("p",null,"Can you code a function to access the i-th element of a linked list?",-1),o0={class:"row"},t0={class:"column"},r0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        j"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"j "),s("span",{style:{color:"#CB7676"}},"=="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," current"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        j"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"j "),s("span",{style:{color:"#AB5959"}},"=="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," current"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),a0=s("div",{class:"column"},[s("img",{src:Fy})],-1),c0=s("p",null,[r("Since "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"j"),s("mo",null,"="),s("mi",null,"i"),s("mo",null,"="),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"j=i=2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])]),r(", it get outs the loop \u2026 and return "),s("code",null,"current")],-1),i0={__name:"62",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[n0,l0,s("div",o0,[s("div",t0,[b(t,G({},{ranges:["10,11"]}),{default:_(()=>[r0]),_:1},16)]),a0]),c0]),_:1},16)}}},p0=s("h1",null,"Access",-1),y0=s("p",null,"Can you code a function to access the i-th element of a linked list?",-1),u0={class:"row"},d0={class:"column"},f0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," j "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        j"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"j "),s("span",{style:{color:"#CB7676"}},"=="),s("span",{style:{color:"#DBD7CA"}}," i"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," current"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," j "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        j"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"j "),s("span",{style:{color:"#AB5959"}},"=="),s("span",{style:{color:"#393A34"}}," i"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," current"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),B0=s("div",{class:"column"},null,-1),A0=s("p",null,"What is the complexity?",-1),h0=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"linked\xA0list\xA0access\xA0"),s("mo",null,"\u223C"),s("mi",{mathvariant:"script"},"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\text{linked list access }\\sim\\mathcal{O}(n) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"linked\xA0list\xA0access\xA0")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"\u223C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])])],-1),m0=[h0],C0={__name:"63",setup(e){const n={};return F(z),(l,o)=>{const t=es,a=hn("click");return m(),P(Z,q(U(n)),{default:_(()=>[p0,y0,s("div",u0,[s("div",d0,[b(t,G({},{ranges:[""]}),{default:_(()=>[f0]),_:1},16)]),B0]),A0,_e((m(),I("div",null,m0)),[[a,1]])]),_:1},16)}}};var $y="/courses/data-structure/linked-lists/chap5/access-1.png";const _0=s("h1",null,"Search",-1),D0=s("p",null,"Can you code a function searching a node with a given value inside a linked list?",-1),v0={class:"row"},g0={class:"column"},b0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"search"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"           ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"..."),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"search"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"           ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},")")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"..."),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),E0=s("div",{class:"column"},[s("img",{src:$y})],-1),w0={__name:"64",setup(e){const n={};return F(z),(l,o)=>{const t=es;return m(),P(Z,q(U(n)),{default:_(()=>[_0,D0,s("div",v0,[s("div",g0,[b(t,G({},{ranges:[""]}),{default:_(()=>[b0]),_:1},16)]),E0])]),_:1},16)}}},x0=s("h1",null,"Search",-1),k0=s("p",null,"Can you code a function searching a node with a given value inside a linked list?",-1),F0={class:"row"},$0={class:"column"},O0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"search"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ml"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"first"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"while"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"current "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"nullptr"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"!="),s("span",{style:{color:"#DBD7CA"}}," data"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}},"       ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        current "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},"->"),s("span",{style:{color:"#B8A965"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," current"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"search"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ml"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"first"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"while"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"current "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"nullptr"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"!="),s("span",{style:{color:"#393A34"}}," data"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}},"       ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        current "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},"->"),s("span",{style:{color:"#8C862B"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," current"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),S0=s("div",{class:"column"},[s("img",{src:$y})],-1),z0=s("p",null,"Search is a linear scan, just like searching in unsorted array. So what is the complexity ?",-1),P0=[z0],L0=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"linked\xA0list\xA0search\xA0"),s("mo",null,"\u223C"),s("mi",{mathvariant:"script"},"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\text{linked list search }\\sim\\mathcal{O}(n) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"linked\xA0list\xA0search\xA0")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"\u223C"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])])],-1),T0=[L0],M0={__name:"65",setup(e){const n={};return F(z),(l,o)=>{const t=es,a=hn("click");return m(),P(Z,q(U(n)),{default:_(()=>[x0,k0,s("div",F0,[s("div",$0,[b(t,G({},{ranges:[""]}),{default:_(()=>[O0]),_:1},16)]),S0]),_e((m(),I("div",null,P0)),[[a,1]]),_e((m(),I("div",null,T0)),[[a,2]])]),_:1},16)}}};var j0="/courses/data-structure/linked-lists/chap5/linked-list-complexity.png";const R0=s("h1",null,"Linked list summary",-1),I0=s("br",null,null,-1),N0=s("br",null,null,-1),H0=s("br",null,null,-1),V0=s("br",null,null,-1),W0=s("img",{src:j0},null,-1),U0=s("br",null,null,-1),q0=s("br",null,null,-1),K0=s("p",null,"Linked lists have notable advantages over arrays \u2026 except for access",-1),Y0={__name:"66",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center");return m(),P(Z,q(U(n)),{default:_(()=>[R0,b(t,null,{default:_(()=>[I0,N0,H0,V0,W0]),_:1}),U0,q0,K0]),_:1},16)}}},G0=s("span",{style:{"font-weight":"700","font-size":"30px"}},"3. Advanced Linked Lists",-1),Z0={__name:"67",setup(e){const n={layout:"intro"};return F(z),(l,o)=>{const t=Is("center");return m(),P(ra,q(U(n)),{default:_(()=>[b(t,null,{default:_(()=>[G0]),_:1})]),_:1},16)}}};var Oy="/courses/data-structure/linked-lists/chap5/double-linked-list.png",X0="/courses/data-structure/linked-lists/chap5/wagon-double.png",J0="/courses/data-structure/linked-lists/chap5/head-double.png";const Q0=s("h1",null,"Double linked lists",-1),s2=s("img",{src:Oy},null,-1),e2=s("br",null,null,-1),n2=s("br",null,null,-1),l2={class:"row"},o2=s("div",{class:"column"},[s("img",{src:X0,style:{height:"100px"}})],-1),t2={class:"column"},r2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"typedef"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"struct"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," previous"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," data"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}},"      ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"typedef"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"struct"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," previous"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," data"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}},"      ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),a2={class:"row"},c2=s("div",{class:"column"},[s("img",{src:J0,style:{height:"100px"}})],-1),i2={class:"column"},p2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"typedef"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"struct"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"intlist"),s("span",{style:{color:"#DBD7CA"}}," ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"struct"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"start"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," size"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"struct"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"end"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"intlist")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"typedef"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"struct"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"intlist"),s("span",{style:{color:"#393A34"}}," ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"struct"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"start"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," size"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"struct"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"end"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"intlist")])])])],-1),y2={__name:"68",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center"),a=es;return m(),P(Z,q(U(n)),{default:_(()=>[Q0,b(t,null,{default:_(()=>[s2]),_:1}),e2,n2,s("div",l2,[o2,s("div",t2,[b(a,G({},{ranges:[""]}),{default:_(()=>[r2]),_:1},16)])]),s("div",a2,[c2,s("div",i2,[b(a,G({},{ranges:[""]}),{default:_(()=>[p2]),_:1},16)])])]),_:1},16)}}},u2=s("h1",null,"Doubly linked lists",-1),d2=s("img",{src:Oy},null,-1),f2=s("br",null,null,-1),B2=s("br",null,null,-1),A2=s("p",null,[s("strong",null,"Advantages:")],-1),h2=s("ul",null,[s("li",null,"Deletion of a node given its pointer becomes O(1)"),s("li",null,"Insertion before a given pointer to a node becomes O(1)"),s("li",null,"Easier to reverse the linked list (swap pointers in each item)")],-1),m2=s("p",null,[s("strong",null,"Drawbacks:")],-1),C2=s("ul",null,[s("li",null,"Stores n additional pointers"),s("li",null,"Maintains n additional pointers (or not if you use XOR double-linked lists)")],-1),_2={__name:"69",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center");return m(),P(Z,q(U(n)),{default:_(()=>[u2,b(t,null,{default:_(()=>[d2]),_:1}),f2,B2,A2,h2,m2,C2]),_:1},16)}}};var D2="/courses/data-structure/linked-lists/chap5/circular-list.png",v2="/courses/data-structure/linked-lists/chap5/monopoly.png",g2="/courses/data-structure/linked-lists/chap5/web.png";const b2=s("h1",null,"Circular linked lists",-1),E2=s("img",{src:D2},null,-1),w2=s("br",null,null,-1),x2=s("br",null,null,-1),k2=r(" In which circumstances can it be useful ?"),F2=s("br",null,null,-1),$2=s("br",null,null,-1),O2=s("br",null,null,-1),S2=s("div",{class:"row"},[s("div",{class:"column"},[s("img",{src:v2,style:{height:"200px"}})]),s("div",{class:"column"},[s("img",{src:g2,style:{height:"120px"}})])],-1),z2=[S2],P2=s("p",null,"One can go even further with dcircular doubly linked lists, etc.",-1),L2={__name:"70",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center"),a=hn("click");return m(),P(Z,q(U(n)),{default:_(()=>[b2,b(t,null,{default:_(()=>[E2]),_:1}),w2,x2,k2,F2,$2,O2,_e((m(),I("div",null,z2)),[[a,1]]),P2]),_:1},16)}}};var T2="/courses/data-structure/linked-lists/chap5/skip-list.png",M2="/courses/data-structure/linked-lists/chap5/skip-list-complexity.png";const j2=s("h1",null,"Skip Lists",-1),R2=s("br",null,null,-1),I2=s("br",null,null,-1),N2=s("br",null,null,-1),H2=s("img",{src:T2,style:{width:"700px"}},null,-1),V2=s("br",null,null,-1),W2=s("br",null,null,-1),U2=s("img",{src:M2,style:{width:"500px"}},null,-1),q2={__name:"71",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center");return m(),P(Z,q(U(n)),{default:_(()=>[j2,b(t,null,{default:_(()=>[R2,I2,N2,H2,V2,W2,U2]),_:1})]),_:1},16)}}};var K2="/courses/data-structure/linked-lists/chap5/unrolled-list.png",Y2="/courses/data-structure/linked-lists/chap5/unrolled-list-wagon.png";const G2=s("h1",null,"Unrolled Lists",-1),Z2=s("br",null,null,-1),X2=s("br",null,null,-1),J2=s("br",null,null,-1),Q2=s("img",{src:K2,style:{width:"700px"}},null,-1),sb=s("br",null,null,-1),eb=s("br",null,null,-1),nb=s("br",null,null,-1),lb=s("br",null,null,-1),ob={class:"row"},tb=s("div",{class:"column"},[s("img",{src:Y2})],-1),rb={class:"column"},ab=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"typedef"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"struct"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    node"),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}},"next"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	"),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," number_elements"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"int"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#DBD7CA"}},"number_elements"),s("span",{style:{color:"#858585"}},"];"),s("span",{style:{color:"#DBD7CA"}},"      ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"node"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"typedef"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"struct"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    node"),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}},"next"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	"),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," number_elements"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"int"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#393A34"}},"number_elements"),s("span",{style:{color:"#8E8F8B"}},"];"),s("span",{style:{color:"#393A34"}},"      ")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"node"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),cb={__name:"72",setup(e){const n={};return F(z),(l,o)=>{const t=Is("center"),a=es;return m(),P(Z,q(U(n)),{default:_(()=>[G2,b(t,null,{default:_(()=>[Z2,X2,J2,Q2]),_:1}),sb,eb,nb,lb,s("div",ob,[tb,s("div",rb,[b(a,G({},{ranges:[""]}),{default:_(()=>[ab]),_:1},16)])])]),_:1},16)}}},ib=s("h1",null,"Time to practice",-1),pb=s("p",null,[r("Exercice yourself!"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),yb=s("p",null,"Implement a function that tests if a given linked list is circular",-1),ub={__name:"73",setup(e){const n={};return F(z),(l,o)=>(m(),P(Z,q(U(n)),{default:_(()=>[ib,pb,yb]),_:1},16))}};var db=[{path:"1",name:"page-1",component:Um,meta:{theme:"./slidev-theme-academic-1.1.1",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap5/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},title:"Linked lists",coverDate:null,slide:{raw:`---
theme: ./slidev-theme-academic-1.1.1
layout: cover
coverAuthor: Jordan Frecon-Deloire
coverBackgroundUrl: chap5/cover.png
highlighter: shiki
lineNumbers: false
class: 'text-white'
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled: [1]
title: Linked lists
coverDate:
---


# Data Structures in C/C++
## Chapter 5: Linked Lists
<img src="/front/logo.png" class="image-bottom" style="height:70px;width:auto"/>
`,title:"Linked lists",level:1,content:`# Data Structures in C/C++
## Chapter 5: Linked Lists
<img src="/front/logo.png" class="image-bottom" style="height:70px;width:auto"/>`,frontmatter:{theme:"./slidev-theme-academic-1.1.1",layout:"cover",coverAuthor:"Jordan Frecon-Deloire",coverBackgroundUrl:"chap5/cover.png",highlighter:"shiki",lineNumbers:!1,class:"text-white",themeConfig:{paginationX:"r",paginationY:"t",paginationPagesDisabled:[1]},title:"Linked lists",coverDate:null},index:0,start:0,end:21,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Gm,meta:{slide:{raw:`
# Table of contents

1. Limitations of arrays
2. Linked lists
	- Principle
	- Primitive operations (Creation, Display, Insertion, Deletion, Access, Search)
4. Advanced linked lists 
	- Double linked lists
	- Circular linked lists
	- Skip linked lists
	- Unrolled linked lists

`,title:"Table of contents",level:1,content:`# Table of contents

1. Limitations of arrays
2. Linked lists
	- Principle
	- Primitive operations (Creation, Display, Insertion, Deletion, Access, Search)
4. Advanced linked lists 
	- Double linked lists
	- Circular linked lists
	- Skip linked lists
	- Unrolled linked lists`,frontmatter:{},index:1,start:22,end:36,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Qm,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

<center>
<span style="font-weight:700;font-size:30px">1. Limitations of arrays</span>
</center>
`,content:`<center>
<span style="font-weight:700;font-size:30px">1. Limitations of arrays</span>
</center>`,frontmatter:{layout:"intro"},index:2,start:36,end:44,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:j6,meta:{slide:{raw:`
# Arrays limitations

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

That\u2019s because arrays are stored in a contiguous memory block<br>
Which is also their strength ! 
<center>
\`\`\`cpp
&tab[i] = &tab[0] + i*sizeof(tab[0])
\`\`\`
</center>
</div>
`,title:"Arrays limitations",level:1,content:`# Arrays limitations

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

That\u2019s because arrays are stored in a contiguous memory block<br>
Which is also their strength ! 
<center>
\`\`\`cpp
&tab[i] = &tab[0] + i*sizeof(tab[0])
\`\`\`
</center>
</div>`,frontmatter:{},index:3,start:45,end:72,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:U6,meta:{slide:{raw:'\n# Arrays limitations\n\nLet us be smarter to append two arrays. Let\'s use `memcpy` from the library `string.h`\n\n```cpp\n// Copies "numBytes" bytes from address "from" to address "to"\nvoid * memcpy(void *to, const void *from, size_t numBytes);\n```\n\nNote that this function returns `void *`, a pointer to the targeted memory location of unspecified type. You will have to cast such a void pointer to be able to access the data at the memory location it refers to.\n\nHow to append `scnd_array` to `first_array` ?\n\n```cpp\nint first_array[10] = {45, 2, 48, 3, 6};\nint scnd_array[5] = {8, 14, 69, 23, 5};\n```\n',title:"Arrays limitations",level:1,content:'# Arrays limitations\n\nLet us be smarter to append two arrays. Let\'s use `memcpy` from the library `string.h`\n\n```cpp\n// Copies "numBytes" bytes from address "from" to address "to"\nvoid * memcpy(void *to, const void *from, size_t numBytes);\n```\n\nNote that this function returns `void *`, a pointer to the targeted memory location of unspecified type. You will have to cast such a void pointer to be able to access the data at the memory location it refers to.\n\nHow to append `scnd_array` to `first_array` ?\n\n```cpp\nint first_array[10] = {45, 2, 48, 3, 6};\nint scnd_array[5] = {8, 14, 69, 23, 5};\n```',frontmatter:{},index:4,start:73,end:92,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Y6,meta:{slide:{raw:`
# Memcopy: Example 1

\`\`\`cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main ()
{

  int first_array[10] = { 45, 2, 48, 3, 6 };
  int scnd_array[] = { 8, 14, 69, 23, 5 };
  int i;

// 5 is the number of the elements which are going to be appended
  memcpy (first_array + 5, scnd_array, 5 * sizeof (int));

// loop through and print all the array
  for (i = 0; i < 10; i++)
    {
      printf ("%d\\n", first_array[i]);
    }

  return 0;
}
\`\`\`

`,title:"Memcopy: Example 1",level:1,content:`# Memcopy: Example 1

\`\`\`cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main ()
{

  int first_array[10] = { 45, 2, 48, 3, 6 };
  int scnd_array[] = { 8, 14, 69, 23, 5 };
  int i;

// 5 is the number of the elements which are going to be appended
  memcpy (first_array + 5, scnd_array, 5 * sizeof (int));

// loop through and print all the array
  for (i = 0; i < 10; i++)
    {
      printf ("%d\\n", first_array[i]);
    }

  return 0;
}
\`\`\``,frontmatter:{},index:5,start:93,end:122,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:X6,meta:{slide:{raw:`
# Memcopy: Example 2

\`\`\`cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main() {

    int array [] = { 54, 85, 20, 63, 21 };
    int * copy = NULL;
    int length = sizeof( int ) * 5;
       
    /* Memory allocation and copy */
    copy = (int *) malloc( length );
    memcpy( copy, array, length );
        
    /* Display the copied values */
    for( length=0; length<5; length++ ) {
        printf( "%d ", copy[ length ] );
    }
    printf( "\\n" );
        
    free( copy );
    
    return 0;
}

\`\`\`

`,title:"Memcopy: Example 2",level:1,content:`# Memcopy: Example 2

\`\`\`cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main() {

    int array [] = { 54, 85, 20, 63, 21 };
    int * copy = NULL;
    int length = sizeof( int ) * 5;
       
    /* Memory allocation and copy */
    copy = (int *) malloc( length );
    memcpy( copy, array, length );
        
    /* Display the copied values */
    for( length=0; length<5; length++ ) {
        printf( "%d ", copy[ length ] );
    }
    printf( "\\n" );
        
    free( copy );
    
    return 0;
}

\`\`\``,frontmatter:{},index:6,start:123,end:154,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:l1,meta:{slide:{raw:`
# Arrays limitations

<img src="/chap5/array_complexity.png" border="rounded">

<br><br><br>
<center>
	
Can we do better ?
</center>
`,title:"Arrays limitations",level:1,content:`# Arrays limitations

<img src="/chap5/array_complexity.png" border="rounded">

<br><br><br>
<center>
	
Can we do better ?
</center>`,frontmatter:{},index:7,start:155,end:166,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:t1,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

<center>
<span style="font-weight:700;font-size:30px">2. Linked Lists</span>
</center>
`,content:`<center>
<span style="font-weight:700;font-size:30px">2. Linked Lists</span>
</center>`,frontmatter:{layout:"intro"},index:8,start:166,end:174,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:A1,meta:{slide:{raw:`
# Linked Lists

<center>
<img src="/chap5/wagon.png"></center><br>

Store each item in memory independently from the others: **not contiguous in memory**

<br><br><br>
<center>
<img src="/chap5/linked-wagons.png"></center><br>
Since all items are not stored contiguously, link them, i.e. each item provides a link to its successor making a sequence of items (a single successor per item)
`,title:"Linked Lists",level:1,content:`# Linked Lists

<center>
<img src="/chap5/wagon.png"></center><br>

Store each item in memory independently from the others: **not contiguous in memory**

<br><br><br>
<center>
<img src="/chap5/linked-wagons.png"></center><br>
Since all items are not stored contiguously, link them, i.e. each item provides a link to its successor making a sequence of items (a single successor per item)`,frontmatter:{},index:9,start:175,end:188,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:k1,meta:{slide:{raw:`
# Linked Lists

<center><br><br>
	
Each item has a **pointer** to the next item (its successor in the sequence)
</center>
	
<center><br><br>
<img src="/chap5/linked-wagons-representation.png">
</center><br><br>

<center>
	
Don't forget a **NULL** pointer at the end in order to test when the sequence ends
</center>
`,title:"Linked Lists",level:1,content:`# Linked Lists

<center><br><br>
	
Each item has a **pointer** to the next item (its successor in the sequence)
</center>
	
<center><br><br>
<img src="/chap5/linked-wagons-representation.png">
</center><br><br>

<center>
	
Don't forget a **NULL** pointer at the end in order to test when the sequence ends
</center>`,frontmatter:{},index:10,start:189,end:206,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:R1,meta:{slide:{raw:`
# Linked Lists

<center><br><br>
	
There is one missing piece ... Why is it necessary ?
</center>

<center><br><br>
<img src="/chap5/linked-wagons-head.png">
</center><br><br>

<div v-click="1"><center>
	
How else would you find the size of the list (\` size(.)\`) without knowing the start ?
	
</center></div>
`,title:"Linked Lists",level:1,content:`# Linked Lists

<center><br><br>
	
There is one missing piece ... Why is it necessary ?
</center>

<center><br><br>
<img src="/chap5/linked-wagons-head.png">
</center><br><br>

<div v-click="1"><center>
	
How else would you find the size of the list (\` size(.)\`) without knowing the start ?
	
</center></div>`,frontmatter:{},index:11,start:207,end:225,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Y1,meta:{slide:{raw:`
# Memory representation

Linked lists are stored noncontigously !

<center>
<img src="/chap5/linked-wagons-head.png">
</center><br><br>

So this scenario may happen

<center>
<img src="/chap5/memory-1.png">
</center>

`,title:"Memory representation",level:1,content:`# Memory representation

Linked lists are stored noncontigously !

<center>
<img src="/chap5/linked-wagons-head.png">
</center><br><br>

So this scenario may happen

<center>
<img src="/chap5/memory-1.png">
</center>`,frontmatter:{},index:12,start:226,end:242,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:lC,meta:{slide:{raw:`
# Memory representation

Linked lists are stored noncontigously !

<center>
<img src="/chap5/linked-wagons-head.png">
</center><br><br>

And this one also

<center>
<img src="/chap5/memory-2.png">
</center>
`,title:"Memory representation",level:1,content:`# Memory representation

Linked lists are stored noncontigously !

<center>
<img src="/chap5/linked-wagons-head.png">
</center><br><br>

And this one also

<center>
<img src="/chap5/memory-2.png">
</center>`,frontmatter:{},index:13,start:243,end:258,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:mC,meta:{slide:{raw:`
# Linked lists in C/C++

<div class="row">
<div class="column">
<img src="/chap5/wagon-only.png">
</div>
<div class="column">
\`\`\`cpp
typedef struct node 
{
    int data;    // Assume we store int\u2019s
    node* next;  // Pointer to the successor of this item
} node;
\`\`\`
</div>
</div>
<br><br><br>	
<div class="row">
<div class="column">
<img src="/chap5/head-only.png">
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
`,title:"Linked lists in C/C++",level:1,content:`# Linked lists in C/C++

<div class="row">
<div class="column">
<img src="/chap5/wagon-only.png">
</div>
<div class="column">
\`\`\`cpp
typedef struct node 
{
    int data;    // Assume we store int\u2019s
    node* next;  // Pointer to the successor of this item
} node;
\`\`\`
</div>
</div>
<br><br><br>	
<div class="row">
<div class="column">
<img src="/chap5/head-only.png">
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
</div>`,frontmatter:{},index:14,start:259,end:292,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:SC,meta:{slide:{raw:`
# Creation of Linked lists

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
	
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
</div>`,frontmatter:{},index:15,start:293,end:346,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:IC,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-1.png">
</div>
</div>

Dynamic allocation of a variable of type \`intlist\`<br>
Returns a pointer \`ml\` to the corresponding memory emplacement
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-1.png">
</div>
</div>

Dynamic allocation of a variable of type \`intlist\`<br>
Returns a pointer \`ml\` to the corresponding memory emplacement`,frontmatter:{},index:16,start:347,end:380,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:YC,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-2.png">
</div>
</div>

The member \`first\` of the variable pointed by \`ml\` is assigned to the **null pointer**, i.e., \`nullptr\`
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-2.png">
</div>
</div>

The member \`first\` of the variable pointed by \`ml\` is assigned to the **null pointer**, i.e., \`nullptr\``,frontmatter:{},index:17,start:381,end:413,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:n_,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-3.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is assigned to 0
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-3.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is assigned to 0`,frontmatter:{},index:18,start:414,end:446,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:p_,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-4.png">
</div>
</div>

Dynamic allocation of a variable of type \`node\`<br>
Returns a pointer \`n1\` to the corresponding memory emplacement
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-4.png">
</div>
</div>

Dynamic allocation of a variable of type \`node\`<br>
Returns a pointer \`n1\` to the corresponding memory emplacement`,frontmatter:{},index:19,start:447,end:480,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:m_,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-5.png">
</div>
</div>

The member \`data\` of the variable pointed by \`n1\` is assigned to 10
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-5.png">
</div>
</div>

The member \`data\` of the variable pointed by \`n1\` is assigned to 10`,frontmatter:{},index:20,start:481,end:513,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:w_,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-6.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n1\` is assigned to the null pointer
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-6.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n1\` is assigned to the null pointer`,frontmatter:{},index:21,start:514,end:546,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:P_,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-7.png">
</div>
</div>

The member \`first\` of the variable pointed by \`ml\` is assigned to the value of \`n1\`, that is the address of the variable pointed by \`n1\`
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-7.png">
</div>
</div>

The member \`first\` of the variable pointed by \`ml\` is assigned to the value of \`n1\`, that is the address of the variable pointed by \`n1\``,frontmatter:{},index:22,start:547,end:579,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:H_,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-8.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is incremented
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-8.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is incremented`,frontmatter:{},index:23,start:580,end:612,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Z_,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-9.png">
</div>
</div>

Dynamic allocation of a variable of type \`node\`<br>
Returns a pointer \`n2\` to the corresponding memory emplacement
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-9.png">
</div>
</div>

Dynamic allocation of a variable of type \`node\`<br>
Returns a pointer \`n2\` to the corresponding memory emplacement`,frontmatter:{},index:24,start:613,end:646,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:oD,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-10.png">
</div>
</div>

The member \`data\` of the variable pointed by \`n2\` is assigned to 21
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-10.png">
</div>
</div>

The member \`data\` of the variable pointed by \`n2\` is assigned to 21`,frontmatter:{},index:25,start:647,end:679,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:uD,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-11.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n2\` is assigned to the null pointer
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-11.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n2\` is assigned to the null pointer`,frontmatter:{},index:26,start:680,end:712,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:_D,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-12.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n1\` is assigned to the value of \`n2\`, that is the address of the variable pointed by \`n2\`
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-12.png">
</div>
</div>

The member \`next\` of the variable pointed by \`n1\` is assigned to the value of \`n2\`, that is the address of the variable pointed by \`n2\``,frontmatter:{},index:27,start:713,end:745,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:xD,meta:{slide:{raw:`
# Creation of Linked lists

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
<img src="/chap5/ll-13.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is incremented
`,title:"Creation of Linked lists",level:1,content:`# Creation of Linked lists

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
<img src="/chap5/ll-13.png">
</div>
</div>

The member \`size\` of the variable pointed by \`ml\` is incremented`,frontmatter:{},index:28,start:746,end:778,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:ND,meta:{slide:{raw:`
# How does it look like in memory ?

<center>
<img src="/chap5/ll-13.png" style="width:250px">
</center><br><br>


<div class="row">
<div class="column">
a) <img src="/chap5/question-memory-1-true.png" style="width:430px"><br>
b) <img src="/chap5/question-memory-2-false.png" style="width:430px">
</div>
<div class="column">
c) <img src="/chap5/question-memory-3-false.png" style="width:430px"><br>
d) <img src="/chap5/question-memory-4-false.png" style="width:430px">
</div>
</div>

<center><br><br><br>
Your answers at <a href="www.wooclap.com/CPP5">www.wooclap.com/CPP5</a>
</center>


`,title:"How does it look like in memory ?",level:1,content:`# How does it look like in memory ?

<center>
<img src="/chap5/ll-13.png" style="width:250px">
</center><br><br>


<div class="row">
<div class="column">
a) <img src="/chap5/question-memory-1-true.png" style="width:430px"><br>
b) <img src="/chap5/question-memory-2-false.png" style="width:430px">
</div>
<div class="column">
c) <img src="/chap5/question-memory-3-false.png" style="width:430px"><br>
d) <img src="/chap5/question-memory-4-false.png" style="width:430px">
</div>
</div>

<center><br><br><br>
Your answers at <a href="www.wooclap.com/CPP5">www.wooclap.com/CPP5</a>
</center>`,frontmatter:{},index:29,start:779,end:804,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:GD,meta:{slide:{raw:`
# How does it look like in memory ?

<center>
<img src="/chap5/ll-13.png" style="width:250px">
</center><br><br>

The correct answer is a) 
<center>
<img src="/chap5/question-memory-1-true.png" style="width:600px">
</center>

- \`ml\`, \`n1\` and \`n2\` are pointers. They return the address of the variables dynamically allocated
- The variable pointed by \`ml\` starts at the address 59 and is of type intlist
	- member size: 2
	- member next: 55 = value of n1 = address of the variable pointed by n1

`,title:"How does it look like in memory ?",level:1,content:`# How does it look like in memory ?

<center>
<img src="/chap5/ll-13.png" style="width:250px">
</center><br><br>

The correct answer is a) 
<center>
<img src="/chap5/question-memory-1-true.png" style="width:600px">
</center>

- \`ml\`, \`n1\` and \`n2\` are pointers. They return the address of the variables dynamically allocated
- The variable pointed by \`ml\` starts at the address 59 and is of type intlist
	- member size: 2
	- member next: 55 = value of n1 = address of the variable pointed by n1`,frontmatter:{},index:30,start:805,end:823,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:JD,meta:{slide:{raw:`
# Primitives operations on linked lists

- Display
- Insertion
- Deletion
- Access
- Search
- ...

`,title:"Primitives operations on linked lists",level:1,content:`# Primitives operations on linked lists

- Display
- Insertion
- Deletion
- Access
- Search
- ...`,frontmatter:{},index:31,start:824,end:835,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:t7,meta:{slide:{raw:`
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
<img src="/chap5/display-1.png">
</div>
</div>
	
	`,title:"Display",level:1,content:`# Display

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
<img src="/chap5/display-1.png">
</div>
</div>`,frontmatter:{},index:32,start:836,end:861,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:y7,meta:{slide:{raw:`
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
<img src="/chap5/display-2.png">
</div>
</div>
	`,title:"Display",level:1,content:`# Display

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
<img src="/chap5/display-2.png">
</div>
</div>`,frontmatter:{},index:33,start:862,end:886,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:h7,meta:{slide:{raw:`
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
<img src="/chap5/display-2.png">
</div>
</div>
`,title:"Display",level:1,content:`# Display

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
<img src="/chap5/display-2.png">
</div>
</div>`,frontmatter:{},index:34,start:887,end:911,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:E7,meta:{slide:{raw:`
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
<img src="/chap5/display-2.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\`
`,title:"Display",level:1,content:`# Display

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
<img src="/chap5/display-2.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\``,frontmatter:{},index:35,start:912,end:942,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:z7,meta:{slide:{raw:`
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
<img src="/chap5/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\`
`,title:"Display",level:1,content:`# Display

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
<img src="/chap5/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\``,frontmatter:{},index:36,start:943,end:973,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:N7,meta:{slide:{raw:`
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
<img src="/chap5/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\`
`,title:"Display",level:1,content:`# Display

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
<img src="/chap5/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
\`\`\``,frontmatter:{},index:37,start:974,end:1004,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:G7,meta:{slide:{raw:`
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
<img src="/chap5/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\`
`,title:"Display",level:1,content:`# Display

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
<img src="/chap5/display-3.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\``,frontmatter:{},index:38,start:1005,end:1036,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:lv,meta:{slide:{raw:`
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
<img src="/chap5/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\`
`,title:"Display",level:1,content:`# Display

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
<img src="/chap5/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\``,frontmatter:{},index:39,start:1037,end:1068,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:yv,meta:{slide:{raw:`
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
<img src="/chap5/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\`
`,title:"Display",level:1,content:`# Display

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
<img src="/chap5/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21
\`\`\``,frontmatter:{},index:40,start:1069,end:1100,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Cv,meta:{slide:{raw:`
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
<img src="/chap5/display-4.png">
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


`,title:"Display",level:1,content:`# Display

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
<img src="/chap5/display-4.png">
</div>
</div>

Display in console:
\`\`\`sh
C:\\>
10
21

...Program finished with exit code 0
Press ENTER to exit console.
\`\`\``,frontmatter:{},index:41,start:1101,end:1137,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:xv,meta:{slide:{raw:`
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
<img src="/chap5/insert-1.png" style="height:200px">
</div>
</div>
	
Answers at <a href="www.wooclap.com/CPP5B">www.wooclap.com/CPP5B</a>

`,title:"Insertion",level:1,content:`# Insertion

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
<img src="/chap5/insert-1.png" style="height:200px">
</div>
</div>
	
Answers at <a href="www.wooclap.com/CPP5B">www.wooclap.com/CPP5B</a>`,frontmatter:{},index:42,start:1138,end:1162,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:Pv,meta:{slide:{raw:`
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
<img src="/chap5/insert-1.png" style="height:200px">
</div>
</div>

`,title:"Insertion",level:1,content:`# Insertion

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
<img src="/chap5/insert-1.png" style="height:200px">
</div>
</div>`,frontmatter:{},index:43,start:1163,end:1185,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:Hv,meta:{slide:{raw:`
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
<img src="/chap5/insert-2.png" style="height:200px">
</div>
</div>
`,title:"Insertion",level:1,content:`# Insertion

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
<img src="/chap5/insert-2.png" style="height:200px">
</div>
</div>`,frontmatter:{},index:44,start:1186,end:1207,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:Zv,meta:{slide:{raw:`
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
<img src="/chap5/insert-3.png" style="height:200px">
</div>
</div>
`,title:"Insertion",level:1,content:`# Insertion

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
<img src="/chap5/insert-3.png" style="height:200px">
</div>
</div>`,frontmatter:{},index:45,start:1208,end:1229,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:og,meta:{slide:{raw:`
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
<img src="/chap5/insert-4.png" style="height:200px">
</div>
</div>


`,title:"Insertion",level:1,content:`# Insertion

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
<img src="/chap5/insert-4.png" style="height:200px">
</div>
</div>`,frontmatter:{},index:46,start:1230,end:1253,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:ug,meta:{slide:{raw:`
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
<img src="/chap5/delete-1.png">
</div>
</div>

`,title:"Deletion",level:1,content:`# Deletion


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
<img src="/chap5/delete-1.png">
</div>
</div>`,frontmatter:{},index:47,start:1254,end:1279,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:_g,meta:{slide:{raw:`
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
<img src="/chap5/delete-2.png">
</div>
</div>
	
	`,title:"Deletion",level:1,content:`# Deletion


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
<img src="/chap5/delete-2.png">
</div>
</div>`,frontmatter:{},index:48,start:1280,end:1304,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:kg,meta:{slide:{raw:`
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
<img src="/chap5/delete-3.png">
</div>
</div>
	`,title:"Deletion",level:1,content:`# Deletion


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
<img src="/chap5/delete-3.png">
</div>
</div>`,frontmatter:{},index:49,start:1305,end:1328,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Tg,meta:{slide:{raw:`
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
<img src="/chap5/delete-4.png">
</div>
</div>
`,title:"Deletion",level:1,content:`# Deletion


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
<img src="/chap5/delete-4.png">
</div>
</div>`,frontmatter:{},index:50,start:1329,end:1352,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:Wg,meta:{slide:{raw:`
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
<img src="/chap5/delete-5.png">
</div>
</div>
`,title:"Deletion",level:1,content:`# Deletion


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
<img src="/chap5/delete-5.png">
</div>
</div>`,frontmatter:{},index:51,start:1353,end:1376,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:Jg,meta:{slide:{raw:`
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
<img src="/chap5/delete-6.png">
</div>
</div>

`,title:"Deletion",level:1,content:`# Deletion


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
<img src="/chap5/delete-6.png">
</div>
</div>`,frontmatter:{},index:52,start:1377,end:1401,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:t4,meta:{slide:{raw:`
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
`,title:"Deletion",level:1,content:`# Deletion


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
</div>`,frontmatter:{},index:53,start:1402,end:1425,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:y4,meta:{slide:{raw:`
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
`,title:"Deletion (improved)",level:1,content:`# Deletion (improved)

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
</div>`,frontmatter:{},index:54,start:1426,end:1450,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:B4,meta:{slide:{raw:`
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

`,title:"Access",level:1,content:`# Access

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
</div>`,frontmatter:{},index:55,start:1451,end:1477,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:g4,meta:{slide:{raw:`
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
<img src="/chap5/access-2.png">
</div>
</div>
	`,title:"Access",level:1,content:`# Access

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
<img src="/chap5/access-2.png">
</div>
</div>`,frontmatter:{},index:56,start:1478,end:1508,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:O4,meta:{slide:{raw:`
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
<img src="/chap5/access-3.png">
</div>
</div>
`,title:"Access",level:1,content:`# Access

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
<img src="/chap5/access-3.png">
</div>
</div>`,frontmatter:{},index:57,start:1509,end:1539,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:R4,meta:{slide:{raw:`
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
<img src="/chap5/access-4.png">
</div>
</div>
`,title:"Access",level:1,content:`# Access

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
<img src="/chap5/access-4.png">
</div>
</div>`,frontmatter:{},index:58,start:1540,end:1570,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:K4,meta:{slide:{raw:`
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
<img src="/chap5/access-5.png">
</div>
</div>
`,title:"Access",level:1,content:`# Access

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
<img src="/chap5/access-5.png">
</div>
</div>`,frontmatter:{},index:59,start:1571,end:1601,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:e0,meta:{slide:{raw:`
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
<img src="/chap5/access-6.png">
</div>
</div>

Since $j=i=2$, it get outs the loop ...
`,title:"Access",level:1,content:`# Access

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
<img src="/chap5/access-6.png">
</div>
</div>

Since $j=i=2$, it get outs the loop ...`,frontmatter:{},index:60,start:1602,end:1634,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:i0,meta:{slide:{raw:`
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
<img src="/chap5/access-6.png">
</div>
</div>

Since $j=i=2$, it get outs the loop ... and return \`current\`

`,title:"Access",level:1,content:`# Access

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
<img src="/chap5/access-6.png">
</div>
</div>

Since $j=i=2$, it get outs the loop ... and return \`current\``,frontmatter:{},index:61,start:1635,end:1668,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:C0,meta:{slide:{raw:`
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
`,title:"Access",level:1,content:`# Access

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
</div>`,frontmatter:{},index:62,start:1669,end:1704,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:w0,meta:{slide:{raw:`
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
<img src="/chap5/access-1.png">
</div>
</div>
`,title:"Search",level:1,content:`# Search

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
<img src="/chap5/access-1.png">
</div>
</div>`,frontmatter:{},index:63,start:1705,end:1730,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:M0,meta:{slide:{raw:`
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
<img src="/chap5/access-1.png">
</div>
</div>

<div v-click="1">

Search is a linear scan, just like searching in unsorted array. So what is the complexity ?
</div>
<div v-click="2">
	
$$\\text{linked list search }\\sim\\mathcal{O}(n)$$
</div>
`,title:"Search",level:1,content:`# Search

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
<img src="/chap5/access-1.png">
</div>
</div>

<div v-click="1">

Search is a linear scan, just like searching in unsorted array. So what is the complexity ?
</div>
<div v-click="2">
	
$$\\text{linked list search }\\sim\\mathcal{O}(n)$$
</div>`,frontmatter:{},index:64,start:1731,end:1765,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:Y0,meta:{slide:{raw:`
# Linked list summary

<center><br><br><br><br>
<img src="/chap5/linked-list-complexity.png">
</center><br><br>

Linked lists have notable advantages over arrays .. except for access

`,title:"Linked list summary",level:1,content:`# Linked list summary

<center><br><br><br><br>
<img src="/chap5/linked-list-complexity.png">
</center><br><br>

Linked lists have notable advantages over arrays .. except for access`,frontmatter:{},index:65,start:1766,end:1776,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:Z0,meta:{layout:"intro",slide:{raw:`---
layout: intro
---

<center>
<span style="font-weight:700;font-size:30px">3. Advanced Linked Lists</span>
</center>

`,content:`<center>
<span style="font-weight:700;font-size:30px">3. Advanced Linked Lists</span>
</center>`,frontmatter:{layout:"intro"},index:66,start:1776,end:1785,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:y2,meta:{slide:{raw:`
# Double linked lists

<center>
<img src="/chap5/double-linked-list.png">
</center><br><br>

<div class="row">
<div class="column">
<img src="/chap5/wagon-double.png" style="height:100px">
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
<img src="/chap5/head-double.png" style="height:100px">
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
	`,title:"Double linked lists",level:1,content:`# Double linked lists

<center>
<img src="/chap5/double-linked-list.png">
</center><br><br>

<div class="row">
<div class="column">
<img src="/chap5/wagon-double.png" style="height:100px">
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
<img src="/chap5/head-double.png" style="height:100px">
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
</div>`,frontmatter:{},index:67,start:1786,end:1826,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:_2,meta:{slide:{raw:`
# Doubly linked lists

<center>
<img src="/chap5/double-linked-list.png">
</center><br><br>

**Advantages:**
- Deletion of a node given its pointer becomes O(1)
- Insertion before a given pointer to a node becomes O(1)
- Easier to reverse the linked list (swap pointers in each item)

**Drawbacks:**
- Stores n additional pointers
- Maintains n additional pointers (or not if you use XOR double-linked lists)
`,title:"Doubly linked lists",level:1,content:`# Doubly linked lists

<center>
<img src="/chap5/double-linked-list.png">
</center><br><br>

**Advantages:**
- Deletion of a node given its pointer becomes O(1)
- Insertion before a given pointer to a node becomes O(1)
- Easier to reverse the linked list (swap pointers in each item)

**Drawbacks:**
- Stores n additional pointers
- Maintains n additional pointers (or not if you use XOR double-linked lists)`,frontmatter:{},index:68,start:1827,end:1843,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:L2,meta:{slide:{raw:`
# Circular linked lists

<center>
<img src="/chap5/circular-list.png">
</center><br><br>
In which circumstances can it be useful ?<br><br><br>
<div v-click="1">
<div class="row">
<div class="column">
<img src="/chap5/monopoly.png" style="height:200px">
</div>
<div class="column">
<img src="/chap5/web.png" style="height:120px">
</div>
</div>
</div>

One can go even further with dcircular doubly linked lists, etc.
`,title:"Circular linked lists",level:1,content:`# Circular linked lists

<center>
<img src="/chap5/circular-list.png">
</center><br><br>
In which circumstances can it be useful ?<br><br><br>
<div v-click="1">
<div class="row">
<div class="column">
<img src="/chap5/monopoly.png" style="height:200px">
</div>
<div class="column">
<img src="/chap5/web.png" style="height:120px">
</div>
</div>
</div>

One can go even further with dcircular doubly linked lists, etc.`,frontmatter:{},index:69,start:1844,end:1864,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:q2,meta:{slide:{raw:`
# Skip Lists

<center><br><br><br>
<img src="/chap5/skip-list.png" style="width:700px">
<br><br>
<img src="/chap5/skip-list-complexity.png" style="width:500px">
</center>
`,title:"Skip Lists",level:1,content:`# Skip Lists

<center><br><br><br>
<img src="/chap5/skip-list.png" style="width:700px">
<br><br>
<img src="/chap5/skip-list-complexity.png" style="width:500px">
</center>`,frontmatter:{},index:70,start:1865,end:1874,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:cb,meta:{slide:{raw:`
# Unrolled Lists

<center><br><br><br>
<img src="/chap5/unrolled-list.png" style="width:700px">
</center><br><br><br><br>

<div class="row">
<div class="column">
<img src="/chap5/unrolled-list-wagon.png">
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
`,title:"Unrolled Lists",level:1,content:`# Unrolled Lists

<center><br><br><br>
<img src="/chap5/unrolled-list.png" style="width:700px">
</center><br><br><br><br>

<div class="row">
<div class="column">
<img src="/chap5/unrolled-list-wagon.png">
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
</div>`,frontmatter:{},index:71,start:1875,end:1898,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:ub,meta:{slide:{raw:`
# Time to practice

Exercice yourself!<br><br><br><br><br><br>

Implement a function that tests if a given linked list is circular
`,title:"Time to practice",level:1,content:`# Time to practice

Exercice yourself!<br><br><br><br><br><br>

Implement a function that tests if a given linked list is circular`,frontmatter:{},index:72,start:1899,end:1906,notesHTML:"",filepath:"/home/fj103585/Documents/GitHub/course-data-structure/5-linked-lists.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",component:Om,meta:{layout:"end"}}];const Vs=db,fb=[{name:"play",path:"/",component:gm,children:[...Vs]},{name:"print",path:"/print",component:km},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ul(()=>import("./Presenter.08bbdff4.js"),["assets/Presenter.08bbdff4.js","assets/Presenter.55f76449.css","assets/DrawingControls.c49632d4.js"]),beforeEnter:e=>{if(!kn.remote||kn.remote===e.query.password)return!0;if(kn.remote&&e.query.password===void 0){const n=prompt("Enter password");if(kn.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],me=sB({history:B3("/courses/data-structure/linked-lists/"),routes:fb});function Bb(e,n,{mode:l="replace"}={}){return O({get(){const o=me.currentRoute.value.query[e];return o==null?n!=null?n:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Ys(()=>{me[v(l)]({query:{...me.currentRoute.value.query,[e]:o}})})}})}const Sy=K(0);Ys(()=>{me.afterEach(async()=>{await Ys(),Sy.value+=1})});const sn=O(()=>me.currentRoute.value),fa=O(()=>sn.value.query.print!==void 0),Ab=O(()=>sn.value.query.print==="clicks"),Ke=O(()=>sn.value.query.embedded!==void 0),Ie=O(()=>sn.value.path.startsWith("/presenter")),Ml=O(()=>fa.value&&!Ab.value),_r=O(()=>sn.value.query.password),hb=O(()=>!Ie.value&&(!gs.remote||_r.value===gs.remote)),ci=Bb("clicks","0"),zy=O(()=>Vs.length-1),mb=O(()=>sn.value.path),Ws=O(()=>parseInt(mb.value.split(/\//g).slice(-1)[0])||1);O(()=>it(Ws.value));const de=O(()=>Vs.find(e=>e.path===`${Ws.value}`));O(()=>{var e,n,l;return(l=(n=(e=de.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:l.id});O(()=>{var e,n;return(n=(e=de.value)==null?void 0:e.meta)==null?void 0:n.layout});const Ot=O(()=>Vs.find(e=>e.path===`${Math.min(Vs.length,Ws.value+1)}`)),Cb=O(()=>{var e,n;return Sy.value,((n=(e=de.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Pe=O({get(){if(Ml.value)return 99999;let e=+(ci.value||0);return isNaN(e)&&(e=0),e},set(e){ci.value=e.toString()}}),Ho=O(()=>{var e,n,l;return+((l=(n=(e=de.value)==null?void 0:e.meta)==null?void 0:n.clicks)!=null?l:Cb.value.length)}),_b=O(()=>Ws.value<Vs.length-1||Pe.value<Ho.value),Db=O(()=>Ws.value>1||Pe.value>0),vb=O(()=>Vs.filter(e=>{var n,l;return(l=(n=e.meta)==null?void 0:n.slide)==null?void 0:l.title}).reduce((e,n)=>(Ba(e,n),e),[])),gb=O(()=>Aa(vb.value,de.value));O(()=>ha(gb.value));function dn(){Ho.value<=Pe.value?Ql():Pe.value+=1}async function fn(){Pe.value<=0?await so():Pe.value-=1}function it(e){return Ie.value?`/presenter/${e}`:`/${e}`}function Ql(){const e=Math.min(Vs.length,Ws.value+1);return cl(e)}async function so(e=!0){const n=Math.max(1,Ws.value-1);await cl(n),e&&Ho.value&&me.replace({query:{...sn.value.query,clicks:Ho.value}})}function cl(e,n){return me.push({path:it(e),query:{...sn.value.query,clicks:n}})}function bb(e){const n=K(0),{direction:l,distanceX:o,distanceY:t}=qf(e,{onSwipeStart(a){a.pointerType==="touch"&&(Zl.value||(n.value=ar()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!n.value||Zl.value)return;const c=Math.abs(o.value),i=Math.abs(t.value);c/window.innerWidth>.3||c>100?l.value===Ze.LEFT?dn():fn():(i/window.innerHeight>.4||i>200)&&(l.value===Ze.DOWN?so():Ql())}})}async function Dr(){const{saveAs:e}=await ul(()=>import("./FileSaver.min.4f92ed14.js").then(function(n){return n.F}),[]);e(Hp(gs.download)?gs.download:gs.exportFilename?`${gs.exportFilename}.pdf`:"/courses/data-structure/linked-lists/slidev-exported.pdf",`${gs.title}.pdf`)}async function Eb(e){var n,l;if(e==null){const o=(l=(n=de.value)==null?void 0:n.meta)==null?void 0:l.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ba(e,n,l=1){var t,a,c,i,p;const o=(a=(t=n.meta)==null?void 0:t.slide)==null?void 0:a.level;o&&o>l&&e.length>0?Ba(e[e.length-1].children,n,l+1):e.push({children:[],level:l,path:n.path,hideInToc:Boolean((c=n.meta)==null?void 0:c.hideInToc),title:(p=(i=n.meta)==null?void 0:i.slide)==null?void 0:p.title})}function Aa(e,n,l=!1,o){return e.map(t=>{const a={...t,active:t.path===(n==null?void 0:n.path),hasActiveParent:l};return a.children.length>0&&(a.children=Aa(a.children,n,a.active||a.hasActiveParent,a)),o&&(a.active||a.activeParent)&&(o.activeParent=!0),a})}function ha(e,n=1){return e.filter(l=>!l.hideInToc).map(l=>({...l,children:ha(l.children,n+1)}))}function wb(){const e=gs.titleTemplate.replace("%s",gs.title||"Slidev");A5({title:e}),E5(`${e} - shared`),F5(`${e} - drawings`);function n(){Ie.value&&(Bc("page",+Ws.value),Bc("clicks",Pe.value))}me.afterEach(n),fs(Pe,n),w5(l=>{(+l.page!=+Ws.value||Pe.value!==l.clicks)&&me.replace({path:it(l.page),query:{...me.currentRoute.value.query,clicks:l.clicks||0}})})}const xb=xs({__name:"App",setup(e){return F(z),wb(),(n,l)=>{const o=Is("RouterView"),t=Is("StarportCarrier");return m(),I(ks,null,[b(o),b(t)],64)}}});function St(e){return e!==null&&typeof e=="object"}function vr(e,n,l=".",o){if(!St(n))return vr(e,{},l,o);const t=Object.assign({},n);for(const a in e){if(a==="__proto__"||a==="constructor")continue;const c=e[a];c!=null&&(o&&o(t,a,c,l)||(Array.isArray(c)&&Array.isArray(t[a])?t[a]=c.concat(t[a]):St(c)&&St(t[a])?t[a]=vr(c,t[a],(l?`${l}.`:"")+a.toString(),o):t[a]=c))}return t}function kb(e){return(...n)=>n.reduce((l,o)=>vr(l,o,"",e),{})}const Fb=kb(),Py=1/60*1e3,$b=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Ly=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e($b()),Py);function Ob(e){let n=[],l=[],o=0,t=!1,a=!1;const c=new WeakSet,i={schedule:(p,y=!1,u=!1)=>{const f=u&&t,d=f?n:l;return y&&c.add(p),d.indexOf(p)===-1&&(d.push(p),f&&t&&(o=n.length)),p},cancel:p=>{const y=l.indexOf(p);y!==-1&&l.splice(y,1),c.delete(p)},process:p=>{if(t){a=!0;return}if(t=!0,[n,l]=[l,n],l.length=0,o=n.length,o)for(let y=0;y<o;y++){const u=n[y];u(p),c.has(u)&&(i.schedule(u),e())}t=!1,a&&(a=!1,i.process(p))}};return i}const Sb=40;let gr=!0,eo=!1,br=!1;const nl={delta:0,timestamp:0},ro=["read","update","preRender","render","postRender"],pt=ro.reduce((e,n)=>(e[n]=Ob(()=>eo=!0),e),{}),ii=ro.reduce((e,n)=>{const l=pt[n];return e[n]=(o,t=!1,a=!1)=>(eo||Pb(),l.schedule(o,t,a)),e},{});ro.reduce((e,n)=>(e[n]=pt[n].cancel,e),{});ro.reduce((e,n)=>(e[n]=()=>pt[n].process(nl),e),{});const zb=e=>pt[e].process(nl),Ty=e=>{eo=!1,nl.delta=gr?Py:Math.max(Math.min(e-nl.timestamp,Sb),1),nl.timestamp=e,br=!0,ro.forEach(zb),br=!1,eo&&(gr=!1,Ly(Ty))},Pb=()=>{eo=!0,gr=!0,br||Ly(Ty)},Lb=()=>nl;function My(e,n){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(l[o[t]]=e[o[t]]);return l}var Tb=function(){},pi=function(){};const Er=(e,n,l)=>Math.min(Math.max(l,e),n),zt=.001,Mb=.01,yi=10,jb=.05,Rb=1;function Ib({duration:e=800,bounce:n=.25,velocity:l=0,mass:o=1}){let t,a;Tb(e<=yi*1e3);let c=1-n;c=Er(jb,Rb,c),e=Er(Mb,yi,e/1e3),c<1?(t=y=>{const u=y*c,f=u*e,d=u-l,B=wr(y,c),h=Math.exp(-f);return zt-d/B*h},a=y=>{const f=y*c*e,d=f*l+l,B=Math.pow(c,2)*Math.pow(y,2)*e,h=Math.exp(-f),g=wr(Math.pow(y,2),c);return(-t(y)+zt>0?-1:1)*((d-B)*h)/g}):(t=y=>{const u=Math.exp(-y*e),f=(y-l)*e+1;return-zt+u*f},a=y=>{const u=Math.exp(-y*e),f=(l-y)*(e*e);return u*f});const i=5/e,p=Hb(t,a,i);if(e=e*1e3,isNaN(p))return{stiffness:100,damping:10,duration:e};{const y=Math.pow(p,2)*o;return{stiffness:y,damping:c*2*Math.sqrt(o*y),duration:e}}}const Nb=12;function Hb(e,n,l){let o=l;for(let t=1;t<Nb;t++)o=o-e(o)/n(o);return o}function wr(e,n){return e*Math.sqrt(1-n*n)}const Vb=["duration","bounce"],Wb=["stiffness","damping","mass"];function ui(e,n){return n.some(l=>e[l]!==void 0)}function Ub(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ui(e,Wb)&&ui(e,Vb)){const l=Ib(e);n=Object.assign(Object.assign(Object.assign({},n),l),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function ma(e){var{from:n=0,to:l=1,restSpeed:o=2,restDelta:t}=e,a=My(e,["from","to","restSpeed","restDelta"]);const c={done:!1,value:n};let{stiffness:i,damping:p,mass:y,velocity:u,duration:f,isResolvedFromDuration:d}=Ub(a),B=di,h=di;function g(){const D=u?-(u/1e3):0,k=l-n,w=p/(2*Math.sqrt(i*y)),x=Math.sqrt(i/y)/1e3;if(t===void 0&&(t=Math.min(Math.abs(l-n)/100,.4)),w<1){const $=wr(x,w);B=N=>{const T=Math.exp(-w*x*N);return l-T*((D+w*x*k)/$*Math.sin($*N)+k*Math.cos($*N))},h=N=>{const T=Math.exp(-w*x*N);return w*x*T*(Math.sin($*N)*(D+w*x*k)/$+k*Math.cos($*N))-T*(Math.cos($*N)*(D+w*x*k)-$*k*Math.sin($*N))}}else if(w===1)B=$=>l-Math.exp(-x*$)*(k+(D+x*k)*$);else{const $=x*Math.sqrt(w*w-1);B=N=>{const T=Math.exp(-w*x*N),X=Math.min($*N,300);return l-T*((D+w*x*k)*Math.sinh(X)+$*k*Math.cosh(X))/$}}}return g(),{next:D=>{const k=B(D);if(d)c.done=D>=f;else{const w=h(D)*1e3,x=Math.abs(w)<=o,$=Math.abs(l-k)<=t;c.done=x&&$}return c.value=c.done?l:k,c},flipTarget:()=>{u=-u,[n,l]=[l,n],g()}}}ma.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const di=e=>0,jy=(e,n,l)=>{const o=n-e;return o===0?1:(l-e)/o},Ca=(e,n,l)=>-l*e+l*n+e,Ry=(e,n)=>l=>Math.max(Math.min(l,n),e),jl=e=>e%1?Number(e.toFixed(5)):e,Vo=/(-)?([\d]*\.?[\d])+/g,xr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,qb=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function ao(e){return typeof e=="string"}const yt={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Iy=Object.assign(Object.assign({},yt),{transform:Ry(0,1)});Object.assign(Object.assign({},yt),{default:1});const Kb=e=>({test:n=>ao(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),Rl=Kb("%");Object.assign(Object.assign({},Rl),{parse:e=>Rl.parse(e)/100,transform:e=>Rl.transform(e*100)});const _a=(e,n)=>l=>Boolean(ao(l)&&qb.test(l)&&l.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(l,n)),Ny=(e,n,l)=>o=>{if(!ao(o))return o;const[t,a,c,i]=o.match(Vo);return{[e]:parseFloat(t),[n]:parseFloat(a),[l]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},$n={test:_a("hsl","hue"),parse:Ny("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:l,alpha:o=1})=>"hsla("+Math.round(e)+", "+Rl.transform(jl(n))+", "+Rl.transform(jl(l))+", "+jl(Iy.transform(o))+")"},Yb=Ry(0,255),Pt=Object.assign(Object.assign({},yt),{transform:e=>Math.round(Yb(e))}),an={test:_a("rgb","red"),parse:Ny("red","green","blue"),transform:({red:e,green:n,blue:l,alpha:o=1})=>"rgba("+Pt.transform(e)+", "+Pt.transform(n)+", "+Pt.transform(l)+", "+jl(Iy.transform(o))+")"};function Gb(e){let n="",l="",o="",t="";return e.length>5?(n=e.substr(1,2),l=e.substr(3,2),o=e.substr(5,2),t=e.substr(7,2)):(n=e.substr(1,1),l=e.substr(2,1),o=e.substr(3,1),t=e.substr(4,1),n+=n,l+=l,o+=o,t+=t),{red:parseInt(n,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:t?parseInt(t,16)/255:1}}const kr={test:_a("#"),parse:Gb,transform:an.transform},ut={test:e=>an.test(e)||kr.test(e)||$n.test(e),parse:e=>an.test(e)?an.parse(e):$n.test(e)?$n.parse(e):kr.parse(e),transform:e=>ao(e)?e:e.hasOwnProperty("red")?an.transform(e):$n.transform(e)},Hy="${c}",Vy="${n}";function Zb(e){var n,l,o,t;return isNaN(e)&&ao(e)&&((l=(n=e.match(Vo))===null||n===void 0?void 0:n.length)!==null&&l!==void 0?l:0)+((t=(o=e.match(xr))===null||o===void 0?void 0:o.length)!==null&&t!==void 0?t:0)>0}function Wy(e){typeof e=="number"&&(e=`${e}`);const n=[];let l=0;const o=e.match(xr);o&&(l=o.length,e=e.replace(xr,Hy),n.push(...o.map(ut.parse)));const t=e.match(Vo);return t&&(e=e.replace(Vo,Vy),n.push(...t.map(yt.parse))),{values:n,numColors:l,tokenised:e}}function Uy(e){return Wy(e).values}function qy(e){const{values:n,numColors:l,tokenised:o}=Wy(e),t=n.length;return a=>{let c=o;for(let i=0;i<t;i++)c=c.replace(i<l?Hy:Vy,i<l?ut.transform(a[i]):jl(a[i]));return c}}const Xb=e=>typeof e=="number"?0:e;function Jb(e){const n=Uy(e);return qy(e)(n.map(Xb))}const Ky={test:Zb,parse:Uy,createTransformer:qy,getAnimatableNone:Jb};function Lt(e,n,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?e+(n-e)*6*l:l<1/2?n:l<2/3?e+(n-e)*(2/3-l)*6:e}function fi({hue:e,saturation:n,lightness:l,alpha:o}){e/=360,n/=100,l/=100;let t=0,a=0,c=0;if(!n)t=a=c=l;else{const i=l<.5?l*(1+n):l+n-l*n,p=2*l-i;t=Lt(p,i,e+1/3),a=Lt(p,i,e),c=Lt(p,i,e-1/3)}return{red:Math.round(t*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:o}}const Qb=(e,n,l)=>{const o=e*e,t=n*n;return Math.sqrt(Math.max(0,l*(t-o)+o))},sE=[kr,an,$n],Bi=e=>sE.find(n=>n.test(e)),Yy=(e,n)=>{let l=Bi(e),o=Bi(n),t=l.parse(e),a=o.parse(n);l===$n&&(t=fi(t),l=an),o===$n&&(a=fi(a),o=an);const c=Object.assign({},t);return i=>{for(const p in c)p!=="alpha"&&(c[p]=Qb(t[p],a[p],i));return c.alpha=Ca(t.alpha,a.alpha,i),l.transform(c)}},eE=e=>typeof e=="number",nE=(e,n)=>l=>n(e(l)),Gy=(...e)=>e.reduce(nE);function Zy(e,n){return eE(e)?l=>Ca(e,n,l):ut.test(e)?Yy(e,n):Jy(e,n)}const Xy=(e,n)=>{const l=[...e],o=l.length,t=e.map((a,c)=>Zy(a,n[c]));return a=>{for(let c=0;c<o;c++)l[c]=t[c](a);return l}},lE=(e,n)=>{const l=Object.assign(Object.assign({},e),n),o={};for(const t in l)e[t]!==void 0&&n[t]!==void 0&&(o[t]=Zy(e[t],n[t]));return t=>{for(const a in o)l[a]=o[a](t);return l}};function Ai(e){const n=Ky.parse(e),l=n.length;let o=0,t=0,a=0;for(let c=0;c<l;c++)o||typeof n[c]=="number"?o++:n[c].hue!==void 0?a++:t++;return{parsed:n,numNumbers:o,numRGB:t,numHSL:a}}const Jy=(e,n)=>{const l=Ky.createTransformer(n),o=Ai(e),t=Ai(n);return o.numHSL===t.numHSL&&o.numRGB===t.numRGB&&o.numNumbers>=t.numNumbers?Gy(Xy(o.parsed,t.parsed),l):c=>`${c>0?n:e}`},oE=(e,n)=>l=>Ca(e,n,l);function tE(e){if(typeof e=="number")return oE;if(typeof e=="string")return ut.test(e)?Yy:Jy;if(Array.isArray(e))return Xy;if(typeof e=="object")return lE}function rE(e,n,l){const o=[],t=l||tE(e[0]),a=e.length-1;for(let c=0;c<a;c++){let i=t(e[c],e[c+1]);if(n){const p=Array.isArray(n)?n[c]:n;i=Gy(p,i)}o.push(i)}return o}function aE([e,n],[l]){return o=>l(jy(e,n,o))}function cE(e,n){const l=e.length,o=l-1;return t=>{let a=0,c=!1;if(t<=e[0]?c=!0:t>=e[o]&&(a=o-1,c=!0),!c){let p=1;for(;p<l&&!(e[p]>t||p===o);p++);a=p-1}const i=jy(e[a],e[a+1],t);return n[a](i)}}function Qy(e,n,{clamp:l=!0,ease:o,mixer:t}={}){const a=e.length;pi(a===n.length),pi(!o||!Array.isArray(o)||o.length===a-1),e[0]>e[a-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const c=rE(n,o,t),i=a===2?aE(e,c):cE(e,c);return l?p=>i(Er(e[0],e[a-1],p)):i}const dt=e=>n=>1-e(1-n),Da=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,iE=e=>n=>Math.pow(n,e),su=e=>n=>n*n*((e+1)*n-e),pE=e=>{const n=su(e);return l=>(l*=2)<1?.5*n(l):.5*(2-Math.pow(2,-10*(l-1)))},eu=1.525,yE=4/11,uE=8/11,dE=9/10,nu=e=>e,va=iE(2),fE=dt(va),lu=Da(va),ou=e=>1-Math.sin(Math.acos(e)),tu=dt(ou),BE=Da(tu),ga=su(eu),AE=dt(ga),hE=Da(ga),mE=pE(eu),CE=4356/361,_E=35442/1805,DE=16061/1805,Wo=e=>{if(e===1||e===0)return e;const n=e*e;return e<yE?7.5625*n:e<uE?9.075*n-9.9*e+3.4:e<dE?CE*n-_E*e+DE:10.8*e*e-20.52*e+10.72},vE=dt(Wo),gE=e=>e<.5?.5*(1-Wo(1-e*2)):.5*Wo(e*2-1)+.5;function bE(e,n){return e.map(()=>n||lu).splice(0,e.length-1)}function EE(e){const n=e.length;return e.map((l,o)=>o!==0?o/(n-1):0)}function wE(e,n){return e.map(l=>l*n)}function Fo({from:e=0,to:n=1,ease:l,offset:o,duration:t=300}){const a={done:!1,value:e},c=Array.isArray(n)?n:[e,n],i=wE(o&&o.length===c.length?o:EE(c),t);function p(){return Qy(i,c,{ease:Array.isArray(l)?l:bE(c,l)})}let y=p();return{next:u=>(a.value=y(u),a.done=u>=t,a),flipTarget:()=>{c.reverse(),y=p()}}}function xE({velocity:e=0,from:n=0,power:l=.8,timeConstant:o=350,restDelta:t=.5,modifyTarget:a}){const c={done:!1,value:n};let i=l*e;const p=n+i,y=a===void 0?p:a(p);return y!==p&&(i=y-n),{next:u=>{const f=-i*Math.exp(-u/o);return c.done=!(f>t||f<-t),c.value=c.done?y:y+f,c},flipTarget:()=>{}}}const hi={keyframes:Fo,spring:ma,decay:xE};function kE(e){if(Array.isArray(e.to))return Fo;if(hi[e.type])return hi[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Fo:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?ma:Fo}const ru=1/60*1e3,FE=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),au=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(FE()),ru);function $E(e){let n=[],l=[],o=0,t=!1,a=!1;const c=new WeakSet,i={schedule:(p,y=!1,u=!1)=>{const f=u&&t,d=f?n:l;return y&&c.add(p),d.indexOf(p)===-1&&(d.push(p),f&&t&&(o=n.length)),p},cancel:p=>{const y=l.indexOf(p);y!==-1&&l.splice(y,1),c.delete(p)},process:p=>{if(t){a=!0;return}if(t=!0,[n,l]=[l,n],l.length=0,o=n.length,o)for(let y=0;y<o;y++){const u=n[y];u(p),c.has(u)&&(i.schedule(u),e())}t=!1,a&&(a=!1,i.process(p))}};return i}const OE=40;let Fr=!0,no=!1,$r=!1;const ll={delta:0,timestamp:0},co=["read","update","preRender","render","postRender"],ft=co.reduce((e,n)=>(e[n]=$E(()=>no=!0),e),{}),SE=co.reduce((e,n)=>{const l=ft[n];return e[n]=(o,t=!1,a=!1)=>(no||LE(),l.schedule(o,t,a)),e},{}),zE=co.reduce((e,n)=>(e[n]=ft[n].cancel,e),{});co.reduce((e,n)=>(e[n]=()=>ft[n].process(ll),e),{});const PE=e=>ft[e].process(ll),cu=e=>{no=!1,ll.delta=Fr?ru:Math.max(Math.min(e-ll.timestamp,OE),1),ll.timestamp=e,$r=!0,co.forEach(PE),$r=!1,no&&(Fr=!1,au(cu))},LE=()=>{no=!0,Fr=!0,$r||au(cu)},TE=()=>ll;function iu(e,n,l=0){return e-n-l}function ME(e,n,l=0,o=!0){return o?iu(n+-e,n,l):n-(e-n)+l}function jE(e,n,l,o){return o?e>=n+l:e<=-l}const RE=e=>{const n=({delta:l})=>e(l);return{start:()=>SE.update(n,!0),stop:()=>zE.update(n)}};function pu(e){var n,l,{from:o,autoplay:t=!0,driver:a=RE,elapsed:c=0,repeat:i=0,repeatType:p="loop",repeatDelay:y=0,onPlay:u,onStop:f,onComplete:d,onRepeat:B,onUpdate:h}=e,g=My(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:D}=g,k,w=0,x=g.duration,$,N=!1,T=!0,X;const is=kE(g);!((l=(n=is).needsInterpolation)===null||l===void 0)&&l.call(n,o,D)&&(X=Qy([0,100],[o,D],{clamp:!1}),o=0,D=100);const Bs=is(Object.assign(Object.assign({},g),{from:o,to:D}));function hs(){w++,p==="reverse"?(T=w%2===0,c=ME(c,x,y,T)):(c=iu(c,x,y),p==="mirror"&&Bs.flipTarget()),N=!1,B&&B()}function _s(){k.stop(),d&&d()}function Ts(Gs){if(T||(Gs=-Gs),c+=Gs,!N){const Fs=Bs.next(Math.max(0,c));$=Fs.value,X&&($=X($)),N=T?Fs.done:c<=0}h==null||h($),N&&(w===0&&(x!=null||(x=c)),w<i?jE(c,x,y,T)&&hs():_s())}function Ns(){u==null||u(),k=a(Ts),k.start()}return t&&Ns(),{stop:()=>{f==null||f(),k.stop()}}}function yu(e,n){return n?e*(1e3/n):0}function IE({from:e=0,velocity:n=0,min:l,max:o,power:t=.8,timeConstant:a=750,bounceStiffness:c=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:y,driver:u,onUpdate:f,onComplete:d,onStop:B}){let h;function g(x){return l!==void 0&&x<l||o!==void 0&&x>o}function D(x){return l===void 0?o:o===void 0||Math.abs(l-x)<Math.abs(o-x)?l:o}function k(x){h==null||h.stop(),h=pu(Object.assign(Object.assign({},x),{driver:u,onUpdate:$=>{var N;f==null||f($),(N=x.onUpdate)===null||N===void 0||N.call(x,$)},onComplete:d,onStop:B}))}function w(x){k(Object.assign({type:"spring",stiffness:c,damping:i,restDelta:p},x))}if(g(e))w({from:e,velocity:n,to:D(e)});else{let x=t*n+e;typeof y!="undefined"&&(x=y(x));const $=D(x),N=$===l?-1:1;let T,X;const is=Bs=>{T=X,X=Bs,n=yu(Bs-T,TE().delta),(N===1&&Bs>$||N===-1&&Bs<$)&&w({from:Bs,to:$,velocity:n})};k({type:"decay",from:e,velocity:n,timeConstant:a,power:t,restDelta:p,modifyTarget:y,onUpdate:g(x)?is:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const uu=(e,n)=>1-3*n+3*e,du=(e,n)=>3*n-6*e,fu=e=>3*e,Uo=(e,n,l)=>((uu(n,l)*e+du(n,l))*e+fu(n))*e,Bu=(e,n,l)=>3*uu(n,l)*e*e+2*du(n,l)*e+fu(n),NE=1e-7,HE=10;function VE(e,n,l,o,t){let a,c,i=0;do c=n+(l-n)/2,a=Uo(c,o,t)-e,a>0?l=c:n=c;while(Math.abs(a)>NE&&++i<HE);return c}const WE=8,UE=.001;function qE(e,n,l,o){for(let t=0;t<WE;++t){const a=Bu(n,l,o);if(a===0)return n;n-=(Uo(n,l,o)-e)/a}return n}const $o=11,_o=1/($o-1);function KE(e,n,l,o){if(e===n&&l===o)return nu;const t=new Float32Array($o);for(let c=0;c<$o;++c)t[c]=Uo(c*_o,e,l);function a(c){let i=0,p=1;const y=$o-1;for(;p!==y&&t[p]<=c;++p)i+=_o;--p;const u=(c-t[p])/(t[p+1]-t[p]),f=i+u*_o,d=Bu(f,e,l);return d>=UE?qE(c,f,e,l):d===0?f:VE(c,i,i+_o,e,l)}return c=>c===0||c===1?c:Uo(a(c),n,o)}const Au=(e,n)=>l=>Math.max(Math.min(l,n),e),Il=e=>e%1?Number(e.toFixed(5)):e,lo=/(-)?([\d]*\.?[\d])+/g,Or=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,YE=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function io(e){return typeof e=="string"}const po={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Nl=Object.assign(Object.assign({},po),{transform:Au(0,1)}),Do=Object.assign(Object.assign({},po),{default:1}),ba=e=>({test:n=>io(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),_n=ba("deg"),Hl=ba("%"),ps=ba("px"),mi=Object.assign(Object.assign({},Hl),{parse:e=>Hl.parse(e)/100,transform:e=>Hl.transform(e*100)}),Ea=(e,n)=>l=>Boolean(io(l)&&YE.test(l)&&l.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(l,n)),hu=(e,n,l)=>o=>{if(!io(o))return o;const[t,a,c,i]=o.match(lo);return{[e]:parseFloat(t),[n]:parseFloat(a),[l]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},vo={test:Ea("hsl","hue"),parse:hu("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:l,alpha:o=1})=>"hsla("+Math.round(e)+", "+Hl.transform(Il(n))+", "+Hl.transform(Il(l))+", "+Il(Nl.transform(o))+")"},GE=Au(0,255),Tt=Object.assign(Object.assign({},po),{transform:e=>Math.round(GE(e))}),xl={test:Ea("rgb","red"),parse:hu("red","green","blue"),transform:({red:e,green:n,blue:l,alpha:o=1})=>"rgba("+Tt.transform(e)+", "+Tt.transform(n)+", "+Tt.transform(l)+", "+Il(Nl.transform(o))+")"};function ZE(e){let n="",l="",o="",t="";return e.length>5?(n=e.substr(1,2),l=e.substr(3,2),o=e.substr(5,2),t=e.substr(7,2)):(n=e.substr(1,1),l=e.substr(2,1),o=e.substr(3,1),t=e.substr(4,1),n+=n,l+=l,o+=o,t+=t),{red:parseInt(n,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:t?parseInt(t,16)/255:1}}const Ci={test:Ea("#"),parse:ZE,transform:xl.transform},ge={test:e=>xl.test(e)||Ci.test(e)||vo.test(e),parse:e=>xl.test(e)?xl.parse(e):vo.test(e)?vo.parse(e):Ci.parse(e),transform:e=>io(e)?e:e.hasOwnProperty("red")?xl.transform(e):vo.transform(e)},mu="${c}",Cu="${n}";function XE(e){var n,l,o,t;return isNaN(e)&&io(e)&&((l=(n=e.match(lo))===null||n===void 0?void 0:n.length)!==null&&l!==void 0?l:0)+((t=(o=e.match(Or))===null||o===void 0?void 0:o.length)!==null&&t!==void 0?t:0)>0}function _u(e){typeof e=="number"&&(e=`${e}`);const n=[];let l=0;const o=e.match(Or);o&&(l=o.length,e=e.replace(Or,mu),n.push(...o.map(ge.parse)));const t=e.match(lo);return t&&(e=e.replace(lo,Cu),n.push(...t.map(po.parse))),{values:n,numColors:l,tokenised:e}}function Du(e){return _u(e).values}function vu(e){const{values:n,numColors:l,tokenised:o}=_u(e),t=n.length;return a=>{let c=o;for(let i=0;i<t;i++)c=c.replace(i<l?mu:Cu,i<l?ge.transform(a[i]):Il(a[i]));return c}}const JE=e=>typeof e=="number"?0:e;function QE(e){const n=Du(e);return vu(e)(n.map(JE))}const wa={test:XE,parse:Du,createTransformer:vu,getAnimatableNone:QE},sw=new Set(["brightness","contrast","saturate","opacity"]);function ew(e){let[n,l]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=l.match(lo)||[];if(!o)return e;const t=l.replace(o,"");let a=sw.has(n)?1:0;return o!==l&&(a*=100),n+"("+a+t+")"}const nw=/([a-z-]*)\(.*?\)/g,Sr=Object.assign(Object.assign({},wa),{getAnimatableNone:e=>{const n=e.match(nw);return n?n.map(ew).join(" "):e}}),Mt={};class lw{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,l,o){if(!!this.subscriptions.size)for(const t of this.subscriptions)t(n,l,o)}clear(){this.subscriptions.clear()}}const _i=e=>!isNaN(parseFloat(e));class ow{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new lw,this.canTrackVelocity=!1,this.updateAndNotify=l=>{this.prev=this.current,this.current=l;const{delta:o,timestamp:t}=Lb();this.lastUpdated!==t&&(this.timeDelta=o,this.lastUpdated=t),ii.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ii.postRender(this.velocityCheck),this.velocityCheck=({timestamp:l})=>{this.canTrackVelocity||(this.canTrackVelocity=_i(this.current)),l!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=_i(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?yu(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(l=>{const{stop:o}=n(l);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function tw(e){return new ow(e)}const{isArray:rw}=Array;function aw(){const e=K({}),n=o=>{const t=a=>{!e.value[a]||(e.value[a].stop(),e.value[a].destroy(),z5(e.value,a))};o?rw(o)?o.forEach(t):t(o):Object.keys(e.value).forEach(t)},l=(o,t,a)=>{if(e.value[o])return e.value[o];const c=tw(t);return c.onChange(i=>{ae(a,o,i)}),ae(e.value,o,c),c};return Qr(n),{motionValues:e,get:l,stop:n}}const cw=e=>Array.isArray(e),Dn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),jt=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),iw=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Rt=()=>({type:"keyframes",ease:"linear",duration:300}),pw=e=>({type:"keyframes",duration:800,values:e}),Di={default:iw,x:Dn,y:Dn,z:Dn,rotate:Dn,rotateX:Dn,rotateY:Dn,rotateZ:Dn,scaleX:jt,scaleY:jt,scale:jt,backgroundColor:Rt,color:Rt,opacity:Rt},gu=(e,n)=>{let l;return cw(n)?l=pw:l=Di[e]||Di.default,{to:n,...l(n)}},vi={...po,transform:Math.round},bu={color:ge,backgroundColor:ge,outlineColor:ge,fill:ge,stroke:ge,borderColor:ge,borderTopColor:ge,borderRightColor:ge,borderBottomColor:ge,borderLeftColor:ge,borderWidth:ps,borderTopWidth:ps,borderRightWidth:ps,borderBottomWidth:ps,borderLeftWidth:ps,borderRadius:ps,radius:ps,borderTopLeftRadius:ps,borderTopRightRadius:ps,borderBottomRightRadius:ps,borderBottomLeftRadius:ps,width:ps,maxWidth:ps,height:ps,maxHeight:ps,size:ps,top:ps,right:ps,bottom:ps,left:ps,padding:ps,paddingTop:ps,paddingRight:ps,paddingBottom:ps,paddingLeft:ps,margin:ps,marginTop:ps,marginRight:ps,marginBottom:ps,marginLeft:ps,rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scale:Do,scaleX:Do,scaleY:Do,scaleZ:Do,skew:_n,skewX:_n,skewY:_n,distance:ps,translateX:ps,translateY:ps,translateZ:ps,x:ps,y:ps,z:ps,perspective:ps,transformPerspective:ps,opacity:Nl,originX:mi,originY:mi,originZ:ps,zIndex:vi,filter:Sr,WebkitFilter:Sr,fillOpacity:Nl,strokeOpacity:Nl,numOctaves:vi},xa=e=>bu[e],Eu=(e,n)=>n&&typeof e=="number"&&n.transform?n.transform(e):e;function yw(e,n){let l=xa(e);return l!==Sr&&(l=wa),l.getAnimatableNone?l.getAnimatableNone(n):void 0}const uw={linear:nu,easeIn:va,easeInOut:lu,easeOut:fE,circIn:ou,circInOut:BE,circOut:tu,backIn:ga,backInOut:hE,backOut:AE,anticipate:mE,bounceIn:vE,bounceInOut:gE,bounceOut:Wo},gi=e=>{if(Array.isArray(e)){const[n,l,o,t]=e;return KE(n,l,o,t)}else if(typeof e=="string")return uw[e];return e},dw=e=>Array.isArray(e)&&typeof e[0]!="number",bi=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&wa.test(n)&&!n.startsWith("url("));function fw(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Bw({ease:e,times:n,delay:l,...o}){const t={...o};return n&&(t.offset=n),e&&(t.ease=dw(e)?e.map(gi):gi(e)),l&&(t.elapsed=-l),t}function Aw(e,n,l){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),fw(n),hw(e)||(e={...e,...gu(l,n.to)}),{...n,...Bw(e)}}function hw({delay:e,repeat:n,repeatType:l,repeatDelay:o,from:t,...a}){return!!Object.keys(a).length}function mw(e,n){return e[n]||e.default||e}function Cw(e,n,l,o,t){const a=mw(o,e);let c=a.from===null||a.from===void 0?n.get():a.from;const i=bi(e,l);c==="none"&&i&&typeof l=="string"&&(c=yw(e,l));const p=bi(e,c);function y(f){const d={from:c,to:l,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:B=>n.set(B)};return a.type==="inertia"||a.type==="decay"?IE({...d,...a}):pu({...Aw(a,d,e),onUpdate:B=>{d.onUpdate(B),a.onUpdate&&a.onUpdate(B)},onComplete:()=>{o.onComplete&&o.onComplete(),t&&t(),f&&f()}})}function u(f){return n.set(l),o.onComplete&&o.onComplete(),t&&t(),f&&f(),{stop:()=>{}}}return!p||!i||a.type===!1?u:y}function _w(){const{motionValues:e,stop:n,get:l}=aw();return{motionValues:e,stop:n,push:(t,a,c,i={},p)=>{const y=c[t],u=l(t,y,c);if(i&&i.immediate){u.set(a);return}const f=Cw(t,u,a,i,p);u.start(f)}}}function Dw(e,n={},{motionValues:l,push:o,stop:t}=_w()){const a=v(n),c=K(!1),i=fs(l,d=>{c.value=Object.values(d).filter(B=>B.isAnimating()).length>0},{immediate:!0,deep:!0}),p=d=>{if(!a||!a[d])throw new Error(`The variant ${d} does not exist.`);return a[d]},y=d=>(typeof d=="string"&&(d=p(d)),Promise.all(Object.entries(d).map(([B,h])=>{if(B!=="transition")return new Promise(g=>{o(B,h,e,d.transition||gu(B,d[B]),g)})}).filter(Boolean)));return{isAnimating:c,apply:y,set:d=>{const B=Mo(d)?d:p(d);Object.entries(B).forEach(([h,g])=>{h!=="transition"&&o(h,g,e,{immediate:!0})})},stopTransitions:()=>{i(),t()},leave:async d=>{let B;if(a&&(a.leave&&(B=a.leave),!a.leave&&a.initial&&(B=a.initial)),!B){d();return}await y(B),d()}}}const ka=typeof window!="undefined",vw=()=>ka&&window.onpointerdown===null,gw=()=>ka&&window.ontouchstart===null,bw=()=>ka&&window.onmousedown===null;function Ew({target:e,state:n,variants:l,apply:o}){const t=v(l),a=[],c=(...h)=>{const g=Es.apply(null,h);return a.push(g),g},i=K(!1),p=K(!1),y=K(!1),u=O(()=>{let h=[];return t&&(t.hovered&&(h=[...h,...Object.keys(t.hovered)]),t.tapped&&(h=[...h,...Object.keys(t.tapped)]),t.focused&&(h=[...h,...Object.keys(t.focused)])),h}),f=O(()=>{const h={};Object.assign(h,n.value),i.value&&t.hovered&&Object.assign(h,t.hovered),p.value&&t.tapped&&Object.assign(h,t.tapped),y.value&&t.focused&&Object.assign(h,t.focused);for(const g in h)u.value.includes(g)||delete h[g];return h});t.hovered&&(c(e,"mouseenter",()=>{i.value=!0}),c(e,"mouseleave",()=>{i.value=!1,p.value=!1}),c(e,"mouseout",()=>{i.value=!1,p.value=!1})),t.tapped&&(bw()&&(c(e,"mousedown",()=>{p.value=!0}),c(e,"mouseup",()=>{p.value=!1})),vw()&&(c(e,"pointerdown",()=>{p.value=!0}),c(e,"pointerup",()=>{p.value=!1})),gw()&&(c(e,"touchstart",()=>{p.value=!0}),c(e,"touchend",()=>{p.value=!1}))),t.focused&&(c(e,"focus",()=>{y.value=!0}),c(e,"blur",()=>{y.value=!1}));const d=fs(f,o);return{stop:()=>{a.forEach(h=>h()),d()}}}function ww({set:e,target:n,variants:l,variant:o}){const t=v(l);return{stop:fs(()=>n,()=>{!t||(t.initial&&e("initial"),t.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}}function xw({state:e,apply:n}){return{stop:fs(e,o=>{o&&n(o)},{immediate:!0})}}function kw({target:e,variants:n,variant:l}){const o=v(n);let t=un;if(o&&(o.visible||o.visibleOnce)){const{stop:a}=Vf(e,([{isIntersecting:c}])=>{o.visible?c?l.value="visible":l.value="initial":o.visibleOnce&&(c?l.value!=="visibleOnce"&&(l.value="visibleOnce"):l.value||(l.value="initial"))});t=a}return{stop:t}}function Fw(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const l=K([]);if(n.lifeCycleHooks){const{stop:t}=ww(e);l.value.push(t)}if(n.syncVariants){const{stop:t}=xw(e);l.value.push(t)}if(n.visibilityHooks){const{stop:t}=kw(e);l.value.push(t)}if(n.eventListeners){const{stop:t}=Ew(e);l.value.push(t)}const o=()=>l.value.forEach(t=>t());return Qr(o),{stop:o}}function wu(e={}){const n=Ms({...e}),l=K({});return fs(n,()=>{const o={};for(const[t,a]of Object.entries(n)){const c=xa(t),i=Eu(a,c);o[t]=i}l.value=o},{immediate:!0,deep:!0}),{state:n,style:l}}const $w=["","X","Y","Z"],Ow=["perspective","translate","scale","rotate","skew"],xu=["transformPerspective","x","y","z"];Ow.forEach(e=>{$w.forEach(n=>{const l=e+n;xu.push(l)})});const Sw=new Set(xu);function Fa(e){return Sw.has(e)}const zw=new Set(["originX","originY","originZ"]);function ku(e){return zw.has(e)}function Pw(e){const n={},l={};return Object.entries(e).forEach(([o,t])=>{Fa(o)||ku(o)?n[o]=t:l[o]=t}),{transform:n,style:l}}function Lw(e,n){let l,o;const{state:t,style:a}=wu(),c=fs(()=>le(e),y=>{if(!!y){o=y;for(const u of Object.keys(bu))y.style[u]===null||y.style[u]===""||Fa(u)||ku(u)||ae(t,u,y.style[u]);l&&Object.entries(l).forEach(([u,f])=>ae(y.style,u,f)),n&&n(t)}},{immediate:!0}),i=fs(a,y=>{if(!o){l=y;return}for(const u in y)ae(o.style,u,y[u])},{immediate:!0});return{style:t,stop:()=>{o=void 0,l=void 0,c(),i()}}}const Tw={x:"translateX",y:"translateY",z:"translateZ"};function Fu(e={},n=!0){const l=Ms({...e}),o=K("");return fs(l,t=>{let a="",c=!1;n&&(t.x||t.y||t.z)&&(a+=`translate3d(${[t.x||0,t.y||0,t.z||0].map(ps.transform).join(",")}) `,c=!0);for(const[i,p]of Object.entries(t)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const y=xa(i),u=Eu(p,y);a+=`${Tw[i]||i}(${u}) `}n&&!c&&(a+="translateZ(0px) "),o.value=a.trim()},{immediate:!0,deep:!0}),{state:l,transform:o}}function Mw(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const l=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,t)=>{if(!t)return o;const[a,c]=t.split("("),p=c.split(",").map(u=>l(u.endsWith(")")?u.replace(")",""):u.trim())),y=p.length===1?p[0]:p;return{...o,[a]:y}},{})}function jw(e,n){Object.entries(Mw(n)).forEach(([l,o])=>{o=parseFloat(o);const t=["x","y","z"];if(l==="translate3d"){if(o===0){t.forEach(a=>{ae(e,a,0)});return}o.forEach((a,c)=>{ae(e,t[c],a)});return}if(l==="translateX"){ae(e,"x",o);return}if(l==="translateY"){ae(e,"y",o);return}if(l==="translateZ"){ae(e,"z",o);return}ae(e,l,o)})}function Rw(e,n){let l,o;const{state:t,transform:a}=Fu(),c=fs(()=>le(e),y=>{!y||(o=y,y.style.transform&&jw(t,y.style.transform),l&&(y.style.transform=l),n&&n(t))},{immediate:!0}),i=fs(a,y=>{if(!o){l=y;return}o.style.transform=y},{immediate:!0});return{transform:t,stop:()=>{l=void 0,o=void 0,c(),i()}}}function Iw(e,n){const l=Ms({}),o=f=>{Object.entries(f).forEach(([d,B])=>{ae(l,d,B)})},{style:t,stop:a}=Lw(e,o),{transform:c,stop:i}=Rw(e,o),p=fs(l,f=>{Object.entries(f).forEach(([d,B])=>{const h=Fa(d)?c:t;h[d]&&h[d]===B||ae(h,d,B)})},{immediate:!0,deep:!0}),y=fs(()=>le(e),f=>{!f||n&&o(n)},{immediate:!0});return{motionProperties:l,style:t,transform:c,stop:()=>{a(),i(),p(),y()}}}function Nw(e={}){const n=v(e),l=K();return{state:O(()=>{if(!!l.value)return n[l.value]}),variant:l}}function Hw(e,n={},l){const{motionProperties:o,stop:t}=Iw(e),{variant:a,state:c}=Nw(n),i=Dw(o,n),p={target:e,variant:a,variants:n,state:c,motionProperties:o,...i,stop:(u=!1)=>{}},{stop:y}=Fw(p,l);return p.stop=(u=!1)=>{const f=()=>{p.stopTransitions(),t(),y()};if(!u&&n.value&&n.value.leave){const d=fs(p.isAnimating,B=>{B||(d(),f())})}else f()},Qr(()=>p.stop()),lf(()=>le(e),u=>{!u||u!=null&&u.motionInstance&&(p.stop(),Object.assign(p,u.motionInstance))}),p}const Vw=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],Ww=(e,n)=>{const l=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};l&&(l.variants&&Mo(l.variants)&&(n.value={...n.value,...l.variants}),Vw.forEach(o=>{if(o==="delay"){if(l&&l[o]&&T5(l[o])){const t=l[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={...n.value.enter.transition,delay:t}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={...n.value.visible.transition,delay:t}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={...n.value.visibleOnce.transition,delay:t}))}return}o==="visible-once"&&(o="visibleOnce"),l&&l[o]&&Mo(l[o])&&(n.value[o]=l[o])}))},It=e=>{const n=(o,t,a)=>{const c=t.value&&typeof t.value=="string"?t.value:a.key;c&&Mt[c]&&Mt[c].stop();const i=K(e||{});typeof t.value=="object"&&(i.value=t.value),Ww(a,i);const p=Hw(o,i);o.motionInstance=p,c&&ae(Mt,c,p)},l=o=>{o.motionInstance&&o.motionInstance.stop()};return{created:n,unmounted:l,bind:n,unbind:l,getSSRProps(o,t){const{initial:a}=o.value||t&&t.props||{},c=Fb((e==null?void 0:e.initial)||{},a||{});if(!c||Object.keys(c).length===0)return;const{transform:i,style:p}=Pw(c),{transform:y}=Fu(i),{style:u}=wu(p);return y.value&&(u.value.transform=y.value),{style:u.value}}}},Uw={initial:{opacity:0},enter:{opacity:1}},qw={initial:{opacity:0},visible:{opacity:1}},Kw={initial:{opacity:0},visibleOnce:{opacity:1}},Yw={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Gw={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Zw={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Xw={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Jw={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Qw={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},sx={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},ex={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},nx={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},lx={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},ox={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},tx={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},rx={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},ax={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},cx={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},ix={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},px={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},yx={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},ux={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},dx={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},fx={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Bx={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Ax={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},hx={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},mx={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Cx={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},_x={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ei={__proto__:null,fade:Uw,fadeVisible:qw,fadeVisibleOnce:Kw,pop:Yw,popVisible:Gw,popVisibleOnce:Zw,rollBottom:rx,rollLeft:Xw,rollRight:sx,rollTop:lx,rollVisibleBottom:ax,rollVisibleLeft:Jw,rollVisibleRight:ex,rollVisibleTop:ox,rollVisibleOnceBottom:cx,rollVisibleOnceLeft:Qw,rollVisibleOnceRight:nx,rollVisibleOnceTop:tx,slideBottom:mx,slideLeft:ix,slideRight:ux,slideTop:Bx,slideVisibleBottom:Cx,slideVisibleLeft:px,slideVisibleRight:dx,slideVisibleTop:Ax,slideVisibleOnceBottom:_x,slideVisibleOnceLeft:yx,slideVisibleOnceRight:fx,slideVisibleOnceTop:hx};function Dx(e){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",l="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,t=>`-${t}`).toLowerCase().replace(/\s+/g,"-").replace(o,t=>l.charAt(n.indexOf(t))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const vx={install(e,n){if(e.directive("motion",It()),!n||n&&!n.excludePresets)for(const l in Ei){const o=Ei[l];e.directive(`motion-${Dx(l)}`,It(o))}if(n&&n.directives)for(const l in n.directives){const o=n.directives[l];o.initial,e.directive(`motion-${l}`,It(o))}}},$a="vue-starport-injection",$u="vue-starport-options",gx={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Ou={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var bx=Object.defineProperty,qo=Object.getOwnPropertySymbols,Su=Object.prototype.hasOwnProperty,zu=Object.prototype.propertyIsEnumerable,wi=(e,n,l)=>n in e?bx(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Ex=(e,n)=>{for(var l in n||(n={}))Su.call(n,l)&&wi(e,l,n[l]);if(qo)for(var l of qo(n))zu.call(n,l)&&wi(e,l,n[l]);return e},xi=(e,n)=>{var l={};for(var o in e)Su.call(e,o)&&n.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&qo)for(var o of qo(e))n.indexOf(o)<0&&zu.call(e,o)&&(l[o]=e[o]);return l};const wx=xs({name:"StarportProxy",props:Ex({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Ou),setup(e,n){const l=F($a),o=O(()=>l.getInstance(e.port,e.component)),t=K(),a=o.value.generateId(),c=K(!1);return o.value.isVisible||(o.value.land(),c.value=!0),yl(async()=>{o.value.el||(o.value.el=t.value,await Ys(),c.value=!0,o.value.rect.update())}),ot(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,c.value=!1,!o.value.options.keepAlive&&(await Ys(),await Ys(),!o.value.el&&l.dispose(o.value.port))}),fs(()=>e,async()=>{o.value.props&&await Ys();const i=e,{props:p}=i,y=xi(i,["props"]);o.value.props=p||{},o.value.setLocalOptions(y)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:p,mountedProps:y}=i,u=xi(i,["initialProps","mountedProps"]),f=G(u,(c.value?y:p)||{});return Ae("div",G(f,{id:a,ref:t,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?Ae(n.slots.default):void 0)}}});var xx=Object.defineProperty,kx=Object.defineProperties,Fx=Object.getOwnPropertyDescriptors,ki=Object.getOwnPropertySymbols,$x=Object.prototype.hasOwnProperty,Ox=Object.prototype.propertyIsEnumerable,Fi=(e,n,l)=>n in e?xx(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Sx=(e,n)=>{for(var l in n||(n={}))$x.call(n,l)&&Fi(e,l,n[l]);if(ki)for(var l of ki(n))Ox.call(n,l)&&Fi(e,l,n[l]);return e},zx=(e,n)=>kx(e,Fx(n));const Px=xs({name:"Starport",inheritAttrs:!0,props:Ou,setup(e,n){const l=K(!1);return yl(()=>{l.value=!0}),()=>{var c,i;const o=(i=(c=n.slots).default)==null?void 0:i.call(c);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const t=o[0];let a=t.type;return(!Mo(a)||ol(a))&&(a={render(){return o}}),Ae(wx,zx(Sx({},e),{key:e.port,component:Jo(a),props:t.props}))}}});function Lx(e){const n=Ms({height:0,width:0,left:0,top:0,update:o,listen:a,pause:c,margin:"0px",padding:"0px"}),l=ce?document.documentElement||document.body:void 0;function o(){if(!ce)return;const i=le(e);if(!i)return;const{height:p,width:y,left:u,top:f}=i.getBoundingClientRect(),d=window.getComputedStyle(i),B=d.margin,h=d.padding;Object.assign(n,{height:p,width:y,left:u,top:l.scrollTop+f,margin:B,padding:h})}const t=Kp(o,{immediate:!1});function a(){!ce||(o(),t.resume())}function c(){t.pause()}return n}let Tx=(e,n=21)=>(l=n)=>{let o="",t=l;for(;t--;)o+=e[Math.random()*e.length|0];return o};const $i=Tx("abcdefghijklmnopqrstuvwxyz",5);function Oi(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function Mx(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var jx=Object.defineProperty,Si=Object.getOwnPropertySymbols,Rx=Object.prototype.hasOwnProperty,Ix=Object.prototype.propertyIsEnumerable,zi=(e,n,l)=>n in e?jx(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Nt=(e,n)=>{for(var l in n||(n={}))Rx.call(n,l)&&zi(e,l,n[l]);if(Si)for(var l of Si(n))Ix.call(n,l)&&zi(e,l,n[l]);return e};function Nx(e,n,l={}){const o=Mx(n),t=Oi(o)||$i(),a=K(),c=K(null),i=K(!1),p=K(!1),y=Ku(!0),u=K({}),f=O(()=>Nt(Nt(Nt({},gx),l),u.value)),d=K(0);let B;y.run(()=>{B=Lx(a),fs(a,async k=>{k&&(p.value=!0),await Ys(),a.value||(p.value=!1)})});const h=Oi(e);function g(){return`starport-${t}-${h}-${$i()}`}const D=g();return Ms({el:a,id:D,port:e,props:c,rect:B,scope:y,isLanded:i,isVisible:p,options:f,liftOffTime:d,component:n,componentName:o,componentId:t,generateId:g,setLocalOptions(k={}){u.value=JSON.parse(JSON.stringify(k))},elRef(){return a},liftOff(){!i.value||(i.value=!1,d.value=Date.now(),B.listen())},land(){i.value||(i.value=!0,B.pause())}})}function Hx(e){const n=Ms(new Map);function l(t,a){let c=n.get(t);return c||(c=Nx(t,a,e),n.set(t,c)),c.component=a,c}function o(t){var a;(a=n.get(t))==null||a.scope.stop(),n.delete(t)}return{portMap:n,dispose:o,getInstance:l}}var Vx=Object.defineProperty,Wx=Object.defineProperties,Ux=Object.getOwnPropertyDescriptors,Pi=Object.getOwnPropertySymbols,qx=Object.prototype.hasOwnProperty,Kx=Object.prototype.propertyIsEnumerable,Li=(e,n,l)=>n in e?Vx(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Yx=(e,n)=>{for(var l in n||(n={}))qx.call(n,l)&&Li(e,l,n[l]);if(Pi)for(var l of Pi(n))Kx.call(n,l)&&Li(e,l,n[l]);return e},Gx=(e,n)=>Wx(e,Ux(n));const Zx=xs({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=F($a);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const l=O(()=>n.getInstance(e.port,e.component)),o=O(()=>{var c;return((c=l.value.el)==null?void 0:c.id)||l.value.id}),t=O(()=>{const c=Date.now()-l.value.liftOffTime,i=Math.max(0,l.value.options.duration-c),p=l.value.rect,y={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!l.value.isVisible||!l.value.el?Gx(Yx({},y),{zIndex:-1,display:"none"}):(l.value.isLanded?y.display="none":Object.assign(y,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:l.value.options.easing}),y)}),a={};return()=>{const c=!!(l.value.isLanded&&l.value.el);return Ae("div",{style:t.value,"data-starport-craft":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true",onTransitionend:l.value.land},Ae(_d,{to:c?`#${o.value}`:"body",disabled:!c},Ae(l.value.component,G(a,l.value.props))))}}}),Xx=xs({name:"StarportCarrier",setup(e,{slots:n}){const l=Hx(F($u,{}));return Mn().appContext.app.provide($a,l),()=>{var t;return[(t=n.default)==null?void 0:t.call(n),Array.from(l.portMap.entries()).map(([a,{component:c}])=>Ae(Zx,{key:a,port:a,component:c}))]}}});function Jx(e={}){return{install(n){n.provide($u,e),n.component("Starport",Px),n.component("StarportCarrier",Xx)}}}function Qx(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(vx),e.app.use(Jx({keepAlive:!0}))}function pe(e,n,l){var o,t;return(t=((o=e.instance)==null?void 0:o.$).provides[n])!=null?t:l}function sk(){return{install(e){e.directive("click",{name:"v-click",mounted(n,l){var u,f,d,B;if(Ml.value||((u=pe(l,zl))==null?void 0:u.value))return;const o=pe(l,En),t=pe(l,Sl),a=pe(l,tr),c=l.modifiers.hide!==!1&&l.modifiers.hide!=null,i=l.modifiers.fade!==!1&&l.modifiers.fade!=null,p=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,y=i?C5:vt;if(o&&!((d=o==null?void 0:o.value)!=null&&d.includes(n))&&o.value.push(n),l.value===null&&(l.value=o==null?void 0:o.value.length),!(a!=null&&a.value.has(l.value)))a==null||a.value.set(l.value,[n]);else if(!((B=a==null?void 0:a.value.get(l.value))!=null&&B.includes(n))){const h=(a==null?void 0:a.value.get(l.value))||[];a==null||a.value.set(l.value,[n].concat(h))}n==null||n.classList.toggle(gn,!0),t&&fs(t,()=>{var k;const h=(k=t==null?void 0:t.value)!=null?k:0,g=l.value!=null?h>=l.value:h>p;n.classList.contains(gt)||n.classList.toggle(y,!g),c!==!1&&c!==void 0&&n.classList.toggle(y,g),n.classList.toggle(ml,!1);const D=a==null?void 0:a.value.get(h);D==null||D.forEach((w,x)=>{w.classList.toggle(mo,!1),x===D.length-1?w.classList.toggle(ml,!0):w.classList.toggle(mo,!0)}),n.classList.contains(ml)||n.classList.toggle(mo,g)},{immediate:!0})},unmounted(n,l){n==null||n.classList.toggle(gn,!1);const o=pe(l,En);o!=null&&o.value&&rr(o.value,n)}}),e.directive("after",{name:"v-after",mounted(n,l){var i,p;if(Ml.value||((i=pe(l,zl))==null?void 0:i.value))return;const o=pe(l,En),t=pe(l,Sl),a=pe(l,tr),c=o==null?void 0:o.value.length;l.value===void 0&&(l.value=o==null?void 0:o.value.length),a!=null&&a.value.has(l.value)?(p=a==null?void 0:a.value.get(l.value))==null||p.push(n):a==null||a.value.set(l.value,[n]),n==null||n.classList.toggle(gn,!0),t&&fs(t,()=>{var u,f,d;const y=((u=t.value)!=null?u:0)>=((d=(f=l.value)!=null?f:c)!=null?d:0);n.classList.contains(gt)||n.classList.toggle(vt,!y),n.classList.toggle(ml,!1),n.classList.contains(ml)||n.classList.toggle(mo,y)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(gn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,l){var c,i,p;if(Ml.value||((c=pe(l,zl))==null?void 0:c.value))return;const o=pe(l,En),t=pe(l,Sl),a=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(n))&&o.value.push(n),n==null||n.classList.toggle(gn,!0),t&&fs(t,()=>{var f;const y=(f=t==null?void 0:t.value)!=null?f:0,u=l.value!=null?y>=l.value:y>a;n.classList.toggle(vt,u),n.classList.toggle(gt,u)},{immediate:!0})},unmounted(n,l){n==null||n.classList.toggle(gn,!1);const o=pe(l,En);o!=null&&o.value&&rr(o.value,n)}})}}}function ek(e,n){const l=Dy(e),o=vy(n,l.currentRoute,l.currentPage);return{nav:{...l,...o,downloadPDF:Dr,next:dn,nextSlide:Ql,openInEditor:Eb,prev:fn,prevSlide:so},configs:gs,themeConfigs:O(()=>gs.themeConfig)}}function nk(){return{install(e){const n=ek(sn,Pe);e.provide(z,Ms(n))}}}const fl=e5(xb);fl.use(me);fl.use(f5());fl.use(sk());fl.use(nk());Qx({app:fl,router:me});fl.mount("#app");export{gl as $,_ as A,By as B,ds as C,pm as D,Ws as E,zy as F,hA as G,ne as H,ws as I,cA as J,ks as K,Pe as L,Ho as M,_b as N,Ot as O,bt as P,Zl as Q,Ft as R,vm as S,oa as T,ta as U,lk as V,ok as W,Te as X,tk as Y,Ue as Z,my as _,s as a,Co as a0,to as a1,hr as a2,RB as a3,IB as a4,NB as a5,VB as a6,_e as a7,Lp as a8,ik as a9,He as aa,oe as ab,XA as ac,Fn as ad,Mp as ae,WB as af,ot as ag,O as b,I as c,xs as d,z as e,de as f,P as g,v as h,F as i,JB as j,bb as k,gs as l,A5 as m,js as n,m as o,yl as p,Ms as q,K as r,rk as s,Ee as t,ak as u,ck as v,fs as w,b as x,Js as y,Rp as z};
