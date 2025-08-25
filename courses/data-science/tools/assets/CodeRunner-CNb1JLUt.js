const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/shiki-DDeBxluJ.js","assets/monaco/bundled-types-CMhMiWVJ.js","assets/modules/file-saver-BzOOqXCn.js","assets/modules/vue-_6YKVfr-.js","assets/monaco/bundled-types-BVfkNsNv.css","assets/modules/shiki-B3Uugotu.js","assets/modules/shiki-Bxv373Z5.css"])))=>i.map(i=>d[i]);
import{r as x,d as M,G as V,f,o as p,af as U,z as D,U as J,P as H,aR as z,S as W,E as G,ai as Q,i as A,an as q,g as L,t as R,X as b,F as E,ak as T,b as K,n as X,H as Y,k as Z,e as ee,w as te}from"./modules/vue-_6YKVfr-.js";import{l as ne,_ as I,k as se,n as $}from"./monaco/bundled-types-CMhMiWVJ.js";import{a as oe,a8 as ie}from"./index-D12G0Y6F.js";import{u as ae}from"./slidev/context-DiXMxAuC.js";import{_ as re}from"./slidev/IconButton.vue_vue_type_script_setup_true_lang-DCHZhS-3.js";import"./modules/file-saver-BzOOqXCn.js";import"./modules/shiki-B3Uugotu.js";const B={};function le(s){return s}var ce=le;let g=null;async function ue(){var i,l;if(g)return g;const s=((l=(i=import.meta)==null?void 0:i.env)==null?void 0:l.BASE_URL)??"/";let t=(s.endsWith("/")?s:s+"/")+"pyodide/",c=new URL("pyodide.js",new URL(t,window.location.origin)).toString();try{const o=await fetch(c,{method:"GET"}),e=(o.headers.get("Content-Type")||"").includes("javascript");if(!o.ok||!e)throw new Error("Not valid JS file")}catch{t="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",c=t+"pyodide.js"}if(await new Promise((o,r)=>{const e=document.createElement("script");e.src=c,e.onload=o,e.onerror=r,document.head.appendChild(e)}),typeof window.loadPyodide!="function")throw new Error(`loadPyodide not available from ${c}`);return g=await window.loadPyodide({indexURL:new URL(t,window.location.origin).toString()}),await g.loadPackage(["numpy","scikit-learn","pandas","matplotlib","micropip"]),await g.runPythonAsync(`
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
`),g}const de="/courses/data-science/tools/assets/movie_metadata-eE3iEw3E.csv",pe="/courses/data-science/tools/assets/movie_metadata_clean-QULovPml.csv",fe="/courses/data-science/tools/assets/movies-CekC_PaI.csv",me="/courses/data-science/tools/assets/9kmovies-89YQW5GB.csv",_e="/courses/data-science/tools/assets/9kratings-DLxWZ5yJ.csv",he="/courses/data-science/tools/assets/README-Cyq7KvM_.txt",ye="/courses/data-science/tools/assets/links-Cvske5Ai.csv",ve="/courses/data-science/tools/assets/tags-BSdIJN40.csv",ge=Object.values([de,pe,fe,me,_e,he,ye,ve]).filter(s=>s.endsWith(".csv")),F=[];let j=!1;function we(){if(j)return;j=!0;const s=async()=>{const n=F.shift();n?(await n(),s()):j=!1};s()}async function be(s,n){const t=n.split("/").pop();if(!t)return;const i=await(await fetch(n,{method:"GET",cache:"no-store"})).text(),l=i.slice(0,500).toLowerCase();if(l.includes("<html")||l.includes("doctype html"))throw new Error(`Fetched HTML instead of CSV from ${n}. Check your path / base.`);s.FS.writeFile(t,i)}const xe=ce(()=>({python:async s=>new Promise(n=>{F.push(async()=>{var l;const t=await ue();for(const o of ge)try{await be(t,o)}catch(r){console.warn(`Failed to preload ${o}:`,r)}let c="",i="";t.setStdout({batched:o=>c+=o});try{await t.runPythonAsync(`
def _is_expr(code):
  try:
    compile(code, '<input>', 'eval')
    return True
  except:
    return False
`);const r=[...s.trim().split(`
`)].reverse().find(u=>u.trim())||"",e=/^\s*\w+\s*=/.test(r),a=/^\s*print\(/.test(r);if(await t.runPythonAsync(s),!a&&!e&&r?await t.runPythonAsync(`_is_expr(${JSON.stringify(r)})`):!1){const u=await t.runPythonAsync(`_ = ${r}
_`);((l=u==null?void 0:u.__class__)==null?void 0:l.__name__)==="DataFrame"?i=await t.runPythonAsync("_.to_html()"):u!==void 0&&(c+=u.toString()+`
`)}const d=c.replace(/\n/g,"<br>");n(i?{html:`
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
  ${i}
</div>`}:{html:`<div style="font-size: 10px; font-family: monospace; overflow-x: auto;">${d}</div>`})}catch(o){n({text:o.toString()})}}),we()})})),Se=[xe],ke=ne(async()=>{const s={javascript:P,js:P,typescript:P,ts:P},{getHighlighter:n}=await I(async()=>{const{getHighlighter:i}=await import("./slidev/shiki-DDeBxluJ.js");return{getHighlighter:i}},__vite__mapDeps([0,1,2,3,4,5,6])),t=await n(),c=async(i,l,o)=>{try{const r=s[l];if(!r)throw new Error(`Runner for language "${l}" not found`);return await r(i,{options:o,highlight:t,run:async(e,a)=>await c(e,a,o)})}catch(r){return console.error(r),{error:`${r}`}}};for(const i of Se){const l=await i(s);Object.assign(s,l)}return{highlight:t,run:c}});function Ee(s){const n=x([]),t=e=>n.value.push({error:String(e)}),c=(...e)=>n.value.push(e.map(l)),i=Object.assign({},console);i.info=i.log=i.debug=i.warn=i.error=c,i.clear=()=>n.value.length=0;try{const e=`return async (console, __slidev_import, __slidev_on_error) => {
      try {
        ${r(s)}
      } catch (e) {
        __slidev_on_error(e)
      }
    }`;new Function(e)()(i,a=>{const m=B[a];if(!m)throw new Error(`Module not found: ${a}.
Available modules: ${Object.keys(B).join(", ")}. Please refer to https://sli.dev/custom/config-code-runners#additional-runner-dependencies`);return m},t)}catch(e){t(e)}function l(e){return typeof e=="string"?{text:e}:{text:o(e),highlightLang:"javascript"}}function o(e){var m;let a="";if(e instanceof Error)a=`Error: ${JSON.stringify(e.message)}`;else if(e==null||typeof e=="symbol")a=String(e);else if(Array.isArray(e))a=`[${e.map(o).join(", ")}]`;else if(e instanceof Set){const d=[...e];a=`Set (${e.size}) {${d.map(o).join(", ")}}`}else if(e instanceof Map){const d=[...e.entries()];a=`Map (${e.size}) {${d.map(([u,_])=>`${o(u)} => ${o(_)}`).join(", ")}}`}else if(e instanceof RegExp)a=e.toString();else if(typeof e=="string")a=JSON.stringify(e);else if(typeof e=="object"){const d=((m=e.constructor)==null?void 0:m.name)??"",u=d&&d==="Object"?"":d;a=(u?`${u}: `:"")+JSON.stringify(e,(w,y)=>y===void 0?"__undefined__":y,2).replace(/"__undefined__"/g,"undefined"),a=String(a)}else a=String(e);return a}function r(e){return e=e.replace('import "reflect-metadata"',"").replace('require("reflect-metadata")',""),e=e.replace("export {};",""),e}return n}let C;async function P(s){C??(C=await I(()=>import("./monaco/bundled-types-CMhMiWVJ.js").then(t=>t.t),__vite__mapDeps([1,2,3,4]))),s=C.transpileModule(s,{compilerOptions:{module:C.ModuleKind.ESNext,target:C.ScriptTarget.ES2022},transformers:{after:[Ce]}}).outputText;const n=/import\s*\((.+)\)/g;return s=s.replace(n,(t,c)=>`__slidev_import(${c})`),Ee(s)}function Ce(s){const{factory:n}=s,{isImportDeclaration:t,isNamedImports:c,NodeFlags:i}=C;return l=>{var r,e;const o=[...l.statements];for(let a=0;a<o.length;a++){const m=o[a];if(!t(m))continue;let d;const u=(r=m.importClause)==null?void 0:r.namedBindings,_=[];if((e=m.importClause)!=null&&e.name&&_.push(n.createBindingElement(void 0,n.createIdentifier("default"),m.importClause.name)),u)if(c(u)){for(const y of u.elements)_.push(n.createBindingElement(void 0,y.propertyName,y.name));d=n.createObjectBindingPattern(_)}else d=n.createIdentifier(u.name.text);else d=n.createObjectBindingPattern(_);const w=n.createVariableStatement(void 0,n.createVariableDeclarationList([n.createVariableDeclaration(d,void 0,void 0,n.createAwaitExpression(n.createCallExpression(n.createIdentifier("import"),void 0,[m.moduleSpecifier])))],i.Const));o[a]=w}return n.updateSourceFile(l,o)}}const Pe=M({__name:"DomElement",props:{element:{}},setup(s){const n=s,t=x();return V(()=>{t.value&&t.value.appendChild(n.element)}),(c,i)=>(p(),f("div",{ref_key:"container",ref:t},null,512))}}),Re={key:0,class:"text-sm text-center opacity-50"},$e={key:1,class:"text-sm text-center opacity-50"},je={key:2,class:"text-sm text-center opacity-50"},Oe=["innerHTML"],Ae={key:1,class:"text-red-500"},Le={key:3,class:"output-line"},Te=["innerHTML"],Be={key:2,class:"separator"},Me={key:0,class:"absolute right-1 top-1 max-h-full flex gap-1"},He=M({__name:"CodeRunner",props:{modelValue:{},lang:{},autorun:{type:[Boolean,String]},height:{},showOutputAt:{type:[null,Boolean,String,Number,Array]},highlightOutput:{type:Boolean},runnerOptions:{}},emits:["update:modelValue"],setup(s,{emit:n}){const t=s,c=n,{isPrintMode:i}=oe(),l=U(t,"modelValue",c),{$renderContext:o,$clicksContext:r}=ae(),e=D(()=>!["slide","presenter"].includes(o.value)),a=i.value?"once":t.autorun,m=x(a),d=J(),u=x(0),_=x(),w=x(t.showOutputAt);if(t.showOutputAt){const S=ie();H(()=>{const v=r.calculate(t.showOutputAt);v?(r.register(S,v),z(()=>{w.value=!v.isActive.value})):w.value=!1}),W(()=>r.unregister(S))}const y=se(200,async()=>{if(e.value)return;const{highlight:S,run:v}=await ke();_.value=S;const h=setTimeout(()=>{m.value=!0},500);d.value=await v(l.value,t.lang,t.runnerOptions??{}),u.value+=1,m.value=!1,clearTimeout(h)});return a==="once"?y():a&&G(l,y,{immediate:!0}),(S,v)=>(p(),f(E,null,[Q(L("div",{class:"relative flex flex-col rounded-b border-t border-main",style:Z({height:t.height}),"data-waitfor":".slidev-runner-output"},[e.value?(p(),f("div",Re,' Code is disabled in the "'+R(b(o))+'" mode ',1)):m.value?(p(),f("div",$e," Running... ")):d.value?(p(),f("div",{key:`run-${u.value}`,class:"slidev-runner-output"},[(p(!0),f(E,null,T(b($)(Y(d.value)),(h,N)=>(p(),f(E,{key:N},["html"in h?(p(),f("div",{key:0,innerHTML:h.html},null,8,Oe)):"error"in h?(p(),f("div",Ae,R(h.error),1)):"element"in h?(p(),K(Pe,{key:2,element:h.element},null,8,["element"])):(p(),f("div",Le,[(p(!0),f(E,null,T(b($)(h),(k,O)=>(p(),f(E,{key:O},[k.highlightLang&&_.value?(p(),f("span",{key:0,class:"highlighted",innerHTML:_.value(k.text,k.highlightLang)},null,8,Te)):(p(),f("span",{key:1,class:X(k.class)},R(k.text),3)),O<b($)(h).length-1?(p(),f("span",Be,",")):A("v-if",!0)],64))),128))]))],64))),128))])):(p(),f("div",je," Click the play button to run the code "))],4),[[q,!w.value]]),b(l).trim()?(p(),f("div",Me,[ee(re,{class:"w-8 h-8 max-h-full flex justify-center items-center",title:"Run code",onClick:b(y)},{default:te(()=>v[0]||(v[0]=[L("div",{class:"i-carbon:play"},null,-1)])),_:1},8,["onClick"])])):A("v-if",!0)],64))}});export{He as default};
