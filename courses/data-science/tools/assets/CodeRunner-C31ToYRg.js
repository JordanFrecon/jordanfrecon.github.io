const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/shiki-DDeBxluJ.js","assets/monaco/bundled-types-CMhMiWVJ.js","assets/modules/file-saver-BzOOqXCn.js","assets/modules/vue-_6YKVfr-.js","assets/monaco/bundled-types-BVfkNsNv.css","assets/modules/shiki-B3Uugotu.js","assets/modules/shiki-Bxv373Z5.css"])))=>i.map(i=>d[i]);
import{r as x,d as M,G as V,f as m,o as p,af as D,z as J,U as z,P as H,aR as U,S as Q,E as G,ai as q,i as R,an as W,g as T,t as j,X as b,F as E,ak as L,b as K,n as Z,H as X,k as Y,e as ee,w as te}from"./modules/vue-_6YKVfr-.js";import{l as ne,_ as F,k as se,n as O}from"./monaco/bundled-types-CMhMiWVJ.js";import{a as ie,a8 as oe}from"./index-BKX-UxhU.js";import{u as ae}from"./slidev/context-CpfYa5gO.js";import{_ as re}from"./slidev/IconButton.vue_vue_type_script_setup_true_lang-DCHZhS-3.js";import"./modules/file-saver-BzOOqXCn.js";import"./modules/shiki-B3Uugotu.js";const B={};function le(s){return s}var ce=le;let g=null;async function ue(){if(g)return g;let s="/pyodide/",t=s+"pyodide.js";try{const n=await fetch(t,{method:"GET"}),i=(n.headers.get("Content-Type")||"").includes("javascript");if(!n.ok||!i)throw new Error("Not valid JS file")}catch{s="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",t=s+"pyodide.js"}if(await new Promise((n,c)=>{const i=document.createElement("script");i.src=t,i.onload=n,i.onerror=c,document.head.appendChild(i)}),typeof window.loadPyodide!="function")throw new Error(`loadPyodide not available from ${t}`);return g=await window.loadPyodide({indexURL:s}),await g.loadPackage(["numpy","scikit-learn","pandas","matplotlib","micropip"]),await g.runPythonAsync(`
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
`),g}const de="/courses/data-science/tools/assets/movie_metadata-eE3iEw3E.csv",pe="/courses/data-science/tools/assets/movie_metadata_clean-QULovPml.csv",me="/courses/data-science/tools/assets/movies-CekC_PaI.csv",fe="/courses/data-science/tools/assets/9kmovies-89YQW5GB.csv",_e="/courses/data-science/tools/assets/9kratings-DLxWZ5yJ.csv",he="/courses/data-science/tools/assets/README-Cyq7KvM_.txt",ve="/courses/data-science/tools/assets/links-Cvske5Ai.csv",ye="/courses/data-science/tools/assets/tags-BSdIJN40.csv";function ge(s){return s.split("?")[0]}const we=Object.assign({"/public/data/imdb5000/movie_metadata.csv":de,"/public/data/imdb5000/movie_metadata_clean.csv":pe,"/public/data/movies.csv":me,"/public/data/movieslens9k/9kmovies.csv":fe,"/public/data/movieslens9k/9kratings.csv":_e,"/public/data/movieslens9k/README.txt":he,"/public/data/movieslens9k/links.csv":ve,"/public/data/movieslens9k/tags.csv":ye}),be=Object.values(we).map(ge),I=[];let P=!1;function xe(){if(P)return;P=!0;const s=async()=>{const t=I.shift();t?(await t(),s()):P=!1};s()}function ke(s){return s.split("/").pop().replace(/-[A-Za-z0-9_]{6,12}(?=\.[^.]+$)/,"")}async function Se(s,t){const n=ke(t),i=await(await fetch(t,{method:"GET",cache:"no-store"})).text(),u=i.slice(0,500).toLowerCase();if(u.includes("<html")||u.includes("doctype html"))throw new Error(`Fetched HTML instead of CSV from ${t}. Check path/base.`);s.FS.writeFile(n,i)}const Ee=ce(()=>({python:async s=>new Promise(t=>{I.push(async()=>{var u;const n=await ue();for(const a of be)try{await Se(n,a)}catch(r){console.warn(`Failed to preload ${a}:`,r)}let c="",i="";n.setStdout({batched:a=>c+=a});try{await n.runPythonAsync(`
def _is_expr(code):
  try:
    compile(code, '<input>', 'eval')
    return True
  except:
    return False
`);const r=[...s.trim().split(`
`)].reverse().find(l=>l.trim())||"",e=/^\s*\w+\s*=/.test(r),o=/^\s*print\(/.test(r);if(await n.runPythonAsync(s),!o&&!e&&r?await n.runPythonAsync(`_is_expr(${JSON.stringify(r)})`):!1){const l=await n.runPythonAsync(`_ = ${r}
_`);((u=l==null?void 0:l.__class__)==null?void 0:u.__name__)==="DataFrame"?i=await n.runPythonAsync("_.to_html()"):l!==void 0&&(c+=l.toString()+`
`)}const d=c.replace(/\n/g,"<br>");t(i?{html:`
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
    tr:nth-child(even) { background-color: #f9f9f9; }
    th { background-color: #f2f2f2; font-weight: bold; }
  </style>
  ${i}
</div>`}:{html:`<div style="font-size: 10px; font-family: monospace; overflow-x: auto;">${d}</div>`})}catch(a){t({text:a.toString()})}}),xe()})})),Ce=[Ee],$e=ne(async()=>{const s={javascript:$,js:$,typescript:$,ts:$},{getHighlighter:t}=await F(async()=>{const{getHighlighter:i}=await import("./slidev/shiki-DDeBxluJ.js");return{getHighlighter:i}},__vite__mapDeps([0,1,2,3,4,5,6])),n=await t(),c=async(i,u,a)=>{try{const r=s[u];if(!r)throw new Error(`Runner for language "${u}" not found`);return await r(i,{options:a,highlight:n,run:async(e,o)=>await c(e,o,a)})}catch(r){return console.error(r),{error:`${r}`}}};for(const i of Ce){const u=await i(s);Object.assign(s,u)}return{highlight:n,run:c}});function je(s){const t=x([]),n=e=>t.value.push({error:String(e)}),c=(...e)=>t.value.push(e.map(u)),i=Object.assign({},console);i.info=i.log=i.debug=i.warn=i.error=c,i.clear=()=>t.value.length=0;try{const e=`return async (console, __slidev_import, __slidev_on_error) => {
      try {
        ${r(s)}
      } catch (e) {
        __slidev_on_error(e)
      }
    }`;new Function(e)()(i,o=>{const f=B[o];if(!f)throw new Error(`Module not found: ${o}.
Available modules: ${Object.keys(B).join(", ")}. Please refer to https://sli.dev/custom/config-code-runners#additional-runner-dependencies`);return f},n)}catch(e){n(e)}function u(e){return typeof e=="string"?{text:e}:{text:a(e),highlightLang:"javascript"}}function a(e){var f;let o="";if(e instanceof Error)o=`Error: ${JSON.stringify(e.message)}`;else if(e==null||typeof e=="symbol")o=String(e);else if(Array.isArray(e))o=`[${e.map(a).join(", ")}]`;else if(e instanceof Set){const d=[...e];o=`Set (${e.size}) {${d.map(a).join(", ")}}`}else if(e instanceof Map){const d=[...e.entries()];o=`Map (${e.size}) {${d.map(([l,_])=>`${a(l)} => ${a(_)}`).join(", ")}}`}else if(e instanceof RegExp)o=e.toString();else if(typeof e=="string")o=JSON.stringify(e);else if(typeof e=="object"){const d=((f=e.constructor)==null?void 0:f.name)??"",l=d&&d==="Object"?"":d;o=(l?`${l}: `:"")+JSON.stringify(e,(w,v)=>v===void 0?"__undefined__":v,2).replace(/"__undefined__"/g,"undefined"),o=String(o)}else o=String(e);return o}function r(e){return e=e.replace('import "reflect-metadata"',"").replace('require("reflect-metadata")',""),e=e.replace("export {};",""),e}return t}let C;async function $(s){C??(C=await F(()=>import("./monaco/bundled-types-CMhMiWVJ.js").then(n=>n.t),__vite__mapDeps([1,2,3,4]))),s=C.transpileModule(s,{compilerOptions:{module:C.ModuleKind.ESNext,target:C.ScriptTarget.ES2022},transformers:{after:[Oe]}}).outputText;const t=/import\s*\((.+)\)/g;return s=s.replace(t,(n,c)=>`__slidev_import(${c})`),je(s)}function Oe(s){const{factory:t}=s,{isImportDeclaration:n,isNamedImports:c,NodeFlags:i}=C;return u=>{var r,e;const a=[...u.statements];for(let o=0;o<a.length;o++){const f=a[o];if(!n(f))continue;let d;const l=(r=f.importClause)==null?void 0:r.namedBindings,_=[];if((e=f.importClause)!=null&&e.name&&_.push(t.createBindingElement(void 0,t.createIdentifier("default"),f.importClause.name)),l)if(c(l)){for(const v of l.elements)_.push(t.createBindingElement(void 0,v.propertyName,v.name));d=t.createObjectBindingPattern(_)}else d=t.createIdentifier(l.name.text);else d=t.createObjectBindingPattern(_);const w=t.createVariableStatement(void 0,t.createVariableDeclarationList([t.createVariableDeclaration(d,void 0,void 0,t.createAwaitExpression(t.createCallExpression(t.createIdentifier("import"),void 0,[f.moduleSpecifier])))],i.Const));a[o]=w}return t.updateSourceFile(u,a)}}const Pe=M({__name:"DomElement",props:{element:{}},setup(s){const t=s,n=x();return V(()=>{n.value&&n.value.appendChild(t.element)}),(c,i)=>(p(),m("div",{ref_key:"container",ref:n},null,512))}}),Ae={key:0,class:"text-sm text-center opacity-50"},Re={key:1,class:"text-sm text-center opacity-50"},Te={key:2,class:"text-sm text-center opacity-50"},Le=["innerHTML"],Be={key:1,class:"text-red-500"},Me={key:3,class:"output-line"},Fe=["innerHTML"],Ie={key:2,class:"separator"},Ne={key:0,class:"absolute right-1 top-1 max-h-full flex gap-1"},Ge=M({__name:"CodeRunner",props:{modelValue:{},lang:{},autorun:{type:[Boolean,String]},height:{},showOutputAt:{type:[null,Boolean,String,Number,Array]},highlightOutput:{type:Boolean},runnerOptions:{}},emits:["update:modelValue"],setup(s,{emit:t}){const n=s,c=t,{isPrintMode:i}=ie(),u=D(n,"modelValue",c),{$renderContext:a,$clicksContext:r}=ae(),e=J(()=>!["slide","presenter"].includes(a.value)),o=i.value?"once":n.autorun,f=x(o),d=z(),l=x(0),_=x(),w=x(n.showOutputAt);if(n.showOutputAt){const k=oe();H(()=>{const y=r.calculate(n.showOutputAt);y?(r.register(k,y),U(()=>{w.value=!y.isActive.value})):w.value=!1}),Q(()=>r.unregister(k))}const v=se(200,async()=>{if(e.value)return;const{highlight:k,run:y}=await $e();_.value=k;const h=setTimeout(()=>{f.value=!0},500);d.value=await y(u.value,n.lang,n.runnerOptions??{}),l.value+=1,f.value=!1,clearTimeout(h)});return o==="once"?v():o&&G(u,v,{immediate:!0}),(k,y)=>(p(),m(E,null,[q(T("div",{class:"relative flex flex-col rounded-b border-t border-main",style:Y({height:n.height}),"data-waitfor":".slidev-runner-output"},[e.value?(p(),m("div",Ae,' Code is disabled in the "'+j(b(a))+'" mode ',1)):f.value?(p(),m("div",Re," Running... ")):d.value?(p(),m("div",{key:`run-${l.value}`,class:"slidev-runner-output"},[(p(!0),m(E,null,L(b(O)(X(d.value)),(h,N)=>(p(),m(E,{key:N},["html"in h?(p(),m("div",{key:0,innerHTML:h.html},null,8,Le)):"error"in h?(p(),m("div",Be,j(h.error),1)):"element"in h?(p(),K(Pe,{key:2,element:h.element},null,8,["element"])):(p(),m("div",Me,[(p(!0),m(E,null,L(b(O)(h),(S,A)=>(p(),m(E,{key:A},[S.highlightLang&&_.value?(p(),m("span",{key:0,class:"highlighted",innerHTML:_.value(S.text,S.highlightLang)},null,8,Fe)):(p(),m("span",{key:1,class:Z(S.class)},j(S.text),3)),A<b(O)(h).length-1?(p(),m("span",Ie,",")):R("v-if",!0)],64))),128))]))],64))),128))])):(p(),m("div",Te," Click the play button to run the code "))],4),[[W,!w.value]]),b(u).trim()?(p(),m("div",Ne,[ee(re,{class:"w-8 h-8 max-h-full flex justify-center items-center",title:"Run code",onClick:b(v)},{default:te(()=>y[0]||(y[0]=[T("div",{class:"i-carbon:play"},null,-1)])),_:1},8,["onClick"])])):R("v-if",!0)],64))}});export{Ge as default};
