const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/shiki-ByTBDq8B.js","assets/monaco/bundled-types-BJl6nbJV.js","assets/modules/file-saver-BzOOqXCn.js","assets/modules/vue-_6YKVfr-.js","assets/monaco/bundled-types-vsNEzU0U.css","assets/modules/shiki-B3Uugotu.js","assets/modules/shiki-Bxv373Z5.css"])))=>i.map(i=>d[i]);
import{r as x,d as M,G as V,f as p,o as d,af as D,z as J,U as z,P as H,aR as U,S as q,E as G,ai as Q,i as R,an as W,g as T,t as $,X as b,F as E,ak as B,b as K,n as X,H as Y,k as Z,e as ee,w as te}from"../modules/vue-_6YKVfr-.js";import{l as ne,_ as F,k as ie,n as C}from"../monaco/bundled-types-BJl6nbJV.js";import{a as se,a8 as oe}from"../index-BBKoT5vP.js";import{u as ae}from"./context-nJtCgQNu.js";import{_ as re}from"./IconButton.vue_vue_type_script_setup_true_lang-DCHZhS-3.js";import"../modules/file-saver-BzOOqXCn.js";import"../modules/shiki-B3Uugotu.js";const L={};function le(i){return i}var ce=le;let g=null;async function ue(){if(g)return g;let i="/pyodide/",t=i+"pyodide.js";try{const n=await fetch(t,{method:"GET"}),s=(n.headers.get("Content-Type")||"").includes("javascript");if(!n.ok||!s)throw new Error("Not valid JS file")}catch{i="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",t=i+"pyodide.js"}if(await new Promise((n,c)=>{const s=document.createElement("script");s.src=t,s.onload=n,s.onerror=c,document.head.appendChild(s)}),typeof window.loadPyodide!="function")throw new Error(`loadPyodide not available from ${t}`);return g=await window.loadPyodide({indexURL:i}),await g.loadPackage(["numpy","scikit-learn","pandas","matplotlib","micropip"]),await g.runPythonAsync(`
async def _install_plotly():
    import micropip
    await micropip.install("plotly")
await _install_plotly()
`),await g.runPythonAsync(`
import numpy as np
np.set_printoptions(linewidth=10000)
from js import document, URL, Blob, setTimeout

def save_plot(fig, id="monaco-fig", filename="plot.html"):
    fig.write_html(filename, full_html=False, include_plotlyjs='cdn', config={'displayModeBar': False,'responsive': True})
    with open(filename, "r") as f:
        html = f.read()
    blob = Blob.new([html], { "type": "text/html" })
    url = URL.createObjectURL(blob)
    def insert_iframe():
        container = document.getElementById(id)
        if container:
            iframe = document.createElement("iframe")
            iframe.src = url
            iframe.style = "width: 100%; height: 100%; border: none;"
            container.innerHTML = ""
            container.appendChild(iframe)
    def wait_for_target(callback, retries=20):
        if document.getElementById(id):
            callback()
        elif retries > 0:
            setTimeout(lambda: wait_for_target(callback, retries - 1), 100)
    wait_for_target(insert_iframe)
`),g}const de=Object.keys({"/public/data/imdb5000/movie_metadata.csv":0,"/public/data/imdb5000/movie_metadata_clean.csv":0,"/public/data/movies.csv":0,"/public/data/movieslens9k/9kmovies.csv":0,"/public/data/movieslens9k/9kratings.csv":0,"/public/data/movieslens9k/README.txt":0,"/public/data/movieslens9k/links.csv":0,"/public/data/movieslens9k/tags.csv":0}).filter(i=>i.endsWith(".csv")),I=[];let P=!1;function pe(){if(P)return;P=!0;const i=async()=>{const t=I.shift();t?(await t(),i()):P=!1};i()}async function fe(i,t){const n=t.split("/").pop();if(!n)return;const s=await(await fetch(t.replace("/public",""))).text();i.FS.writeFile(n,s)}const me=ce(()=>({python:async i=>new Promise(t=>{I.push(async()=>{var f;const n=await ue();for(const a of de)try{await fe(n,a)}catch(r){console.warn(`Failed to preload ${a}:`,r)}let c="",s="";n.setStdout({batched:a=>c+=a});try{await n.runPythonAsync(`
def _is_expr(code):
  try:
    compile(code, '<input>', 'eval')
    return True
  except:
    return False
`);const r=[...i.trim().split(`
`)].reverse().find(l=>l.trim())||"",e=/^\s*\w+\s*=/.test(r),o=/^\s*print\(/.test(r);if(await n.runPythonAsync(i),!o&&!e&&r?await n.runPythonAsync(`_is_expr(${JSON.stringify(r)})`):!1){const l=await n.runPythonAsync(`_ = ${r}
_`);((f=l==null?void 0:l.__class__)==null?void 0:f.__name__)==="DataFrame"?s=await n.runPythonAsync("_.to_html()"):l!==void 0&&(c+=l.toString()+`
`)}const u=c.replace(/\n/g,"<br>");t(s?{html:`
<div style="overflow:auto; max-height:300px; border:1px solid #ccc; padding:0.5em;">
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      font-family: sans-serif;
      font-size: 8px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 1px;
      text-align: left;
    }
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }
  </style>
  ${s}
</div>`}:{html:`<div style="font-size: 10px; font-family: monospace; overflow-x: auto;">${u}</div>`})}catch(a){t({text:a.toString()})}}),pe()})})),he=[me],ye=ne(async()=>{const i={javascript:O,js:O,typescript:O,ts:O},{getHighlighter:t}=await F(async()=>{const{getHighlighter:s}=await import("./shiki-ByTBDq8B.js");return{getHighlighter:s}},__vite__mapDeps([0,1,2,3,4,5,6])),n=await t(),c=async(s,f,a)=>{try{const r=i[f];if(!r)throw new Error(`Runner for language "${f}" not found`);return await r(s,{options:a,highlight:n,run:async(e,o)=>await c(e,o,a)})}catch(r){return console.error(r),{error:`${r}`}}};for(const s of he){const f=await s(i);Object.assign(i,f)}return{highlight:n,run:c}});function _e(i){const t=x([]),n=e=>t.value.push({error:String(e)}),c=(...e)=>t.value.push(e.map(f)),s=Object.assign({},console);s.info=s.log=s.debug=s.warn=s.error=c,s.clear=()=>t.value.length=0;try{const e=`return async (console, __slidev_import, __slidev_on_error) => {
      try {
        ${r(i)}
      } catch (e) {
        __slidev_on_error(e)
      }
    }`;new Function(e)()(s,o=>{const m=L[o];if(!m)throw new Error(`Module not found: ${o}.
Available modules: ${Object.keys(L).join(", ")}. Please refer to https://sli.dev/custom/config-code-runners#additional-runner-dependencies`);return m},n)}catch(e){n(e)}function f(e){return typeof e=="string"?{text:e}:{text:a(e),highlightLang:"javascript"}}function a(e){var m;let o="";if(e instanceof Error)o=`Error: ${JSON.stringify(e.message)}`;else if(e==null||typeof e=="symbol")o=String(e);else if(Array.isArray(e))o=`[${e.map(a).join(", ")}]`;else if(e instanceof Set){const u=[...e];o=`Set (${e.size}) {${u.map(a).join(", ")}}`}else if(e instanceof Map){const u=[...e.entries()];o=`Map (${e.size}) {${u.map(([l,h])=>`${a(l)} => ${a(h)}`).join(", ")}}`}else if(e instanceof RegExp)o=e.toString();else if(typeof e=="string")o=JSON.stringify(e);else if(typeof e=="object"){const u=((m=e.constructor)==null?void 0:m.name)??"",l=u&&u==="Object"?"":u;o=(l?`${l}: `:"")+JSON.stringify(e,(w,_)=>_===void 0?"__undefined__":_,2).replace(/"__undefined__"/g,"undefined"),o=String(o)}else o=String(e);return o}function r(e){return e=e.replace('import "reflect-metadata"',"").replace('require("reflect-metadata")',""),e=e.replace("export {};",""),e}return t}let j;async function O(i){j??(j=await F(()=>import("../monaco/bundled-types-BJl6nbJV.js").then(n=>n.t),__vite__mapDeps([1,2,3,4]))),i=j.transpileModule(i,{compilerOptions:{module:j.ModuleKind.ESNext,target:j.ScriptTarget.ES2022},transformers:{after:[ve]}}).outputText;const t=/import\s*\((.+)\)/g;return i=i.replace(t,(n,c)=>`__slidev_import(${c})`),_e(i)}function ve(i){const{factory:t}=i,{isImportDeclaration:n,isNamedImports:c,NodeFlags:s}=j;return f=>{var r,e;const a=[...f.statements];for(let o=0;o<a.length;o++){const m=a[o];if(!n(m))continue;let u;const l=(r=m.importClause)==null?void 0:r.namedBindings,h=[];if((e=m.importClause)!=null&&e.name&&h.push(t.createBindingElement(void 0,t.createIdentifier("default"),m.importClause.name)),l)if(c(l)){for(const _ of l.elements)h.push(t.createBindingElement(void 0,_.propertyName,_.name));u=t.createObjectBindingPattern(h)}else u=t.createIdentifier(l.name.text);else u=t.createObjectBindingPattern(h);const w=t.createVariableStatement(void 0,t.createVariableDeclarationList([t.createVariableDeclaration(u,void 0,void 0,t.createAwaitExpression(t.createCallExpression(t.createIdentifier("import"),void 0,[m.moduleSpecifier])))],s.Const));a[o]=w}return t.updateSourceFile(f,a)}}const ge=M({__name:"DomElement",props:{element:{}},setup(i){const t=i,n=x();return V(()=>{n.value&&n.value.appendChild(t.element)}),(c,s)=>(d(),p("div",{ref_key:"container",ref:n},null,512))}}),we={key:0,class:"text-sm text-center opacity-50"},be={key:1,class:"text-sm text-center opacity-50"},xe={key:2,class:"text-sm text-center opacity-50"},ke=["innerHTML"],Se={key:1,class:"text-red-500"},Ee={key:3,class:"output-line"},je=["innerHTML"],Oe={key:2,class:"separator"},$e={key:0,class:"absolute right-1 top-1 max-h-full flex gap-1"},Me=M({__name:"CodeRunner",props:{modelValue:{},lang:{},autorun:{type:[Boolean,String]},height:{},showOutputAt:{type:[null,Boolean,String,Number,Array]},highlightOutput:{type:Boolean},runnerOptions:{}},emits:["update:modelValue"],setup(i,{emit:t}){const n=i,c=t,{isPrintMode:s}=se(),f=D(n,"modelValue",c),{$renderContext:a,$clicksContext:r}=ae(),e=J(()=>!["slide","presenter"].includes(a.value)),o=s.value?"once":n.autorun,m=x(o),u=z(),l=x(0),h=x(),w=x(n.showOutputAt);if(n.showOutputAt){const k=oe();H(()=>{const v=r.calculate(n.showOutputAt);v?(r.register(k,v),U(()=>{w.value=!v.isActive.value})):w.value=!1}),q(()=>r.unregister(k))}const _=ie(200,async()=>{if(e.value)return;const{highlight:k,run:v}=await ye();h.value=k;const y=setTimeout(()=>{m.value=!0},500);u.value=await v(f.value,n.lang,n.runnerOptions??{}),l.value+=1,m.value=!1,clearTimeout(y)});return o==="once"?_():o&&G(f,_,{immediate:!0}),(k,v)=>(d(),p(E,null,[Q(T("div",{class:"relative flex flex-col rounded-b border-t border-main",style:Z({height:n.height}),"data-waitfor":".slidev-runner-output"},[e.value?(d(),p("div",we,' Code is disabled in the "'+$(b(a))+'" mode ',1)):m.value?(d(),p("div",be," Running... ")):u.value?(d(),p("div",{key:`run-${l.value}`,class:"slidev-runner-output"},[(d(!0),p(E,null,B(b(C)(Y(u.value)),(y,N)=>(d(),p(E,{key:N},["html"in y?(d(),p("div",{key:0,innerHTML:y.html},null,8,ke)):"error"in y?(d(),p("div",Se,$(y.error),1)):"element"in y?(d(),K(ge,{key:2,element:y.element},null,8,["element"])):(d(),p("div",Ee,[(d(!0),p(E,null,B(b(C)(y),(S,A)=>(d(),p(E,{key:A},[S.highlightLang&&h.value?(d(),p("span",{key:0,class:"highlighted",innerHTML:h.value(S.text,S.highlightLang)},null,8,je)):(d(),p("span",{key:1,class:X(S.class)},$(S.text),3)),A<b(C)(y).length-1?(d(),p("span",Oe,",")):R("v-if",!0)],64))),128))]))],64))),128))])):(d(),p("div",xe," Click the play button to run the code "))],4),[[W,!w.value]]),b(f).trim()?(d(),p("div",$e,[ee(re,{class:"w-8 h-8 max-h-full flex justify-center items-center",title:"Run code",onClick:b(_)},{default:te(()=>v[0]||(v[0]=[T("div",{class:"i-carbon:play"},null,-1)])),_:1},8,["onClick"])])):R("v-if",!0)],64))}});export{Me as default};
