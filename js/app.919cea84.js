(()=>{"use strict";var e={1582:(e,r,t)=>{t(5363),t(71);var o=t(8880),n=t(9592),a=t(3673);function s(e,r,t,o,n,s){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}const i=(0,a.aZ)({name:"App"});i.render=s;const l=i;var u=t(7083),c=t(9582);const p=[{path:"/",component:()=>Promise.all([t.e(736),t.e(337)]).then(t.bind(t,4337)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(461)]).then(t.bind(t,1461))}]},{path:"/:catchAll(.*)*",redirect:"/"}],d=p,f=(0,u.BC)((function(){const e=c.r5,r=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:d,history:e("")});return r}));async function v(e,r){const t="function"===typeof f?await f({}):f,o=e(l);return o.use(n.Z,r),{app:o,router:t}}var h=t(9140);const m={config:{},plugins:{Notify:h.Z}},b="";async function g({app:e,router:r},t){let o=!1;const n=e=>{o=!0;const t=Object(e)===e?r.resolve(e).fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,"");for(let i=0;!1===o&&i<t.length;i++)try{await t[i]({app:e,router:r,ssrContext:null,redirect:n,urlPath:a,publicPath:b})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&(e.use(r),e.mount("#q-app"))}v(o.ri,m).then((e=>Promise.all([Promise.resolve().then(t.bind(t,6451))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));g(e,t)}))))},6451:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l,i18n:()=>i});var o=t(7083),n=t(5948);const a={failed:"Action failed",success:"Action was successful",description:['<span class="text-weight-bold">Tropik VTC</span> est une société Réunionnaise qui met à disposition de ses clients une application de chauffeurs privés.\n     Nos <span class="text-weight-bold">chauffeurs VTC</span> à L’île de La Réunion sont disponibles sur simple demande de votre part. Par téléphone pour nous communiquer votre besoin ou via notre application, réserver rapidement votre chauffeur VTC et TAXI Réunion.','Nos chauffeurs connaissent parfaitement l’île. Que vous soyez seul, à deux, ou en famille, que vous désiriez regagner votre domicile, ou partir à l’autre bout de l’île, une simple demande de votre part suffit.\n     Qu’il s’agisse de vous emmener à la gare, ou de venir vous chercher à l\'aéroport, ou encore de vous accompagner faire votre shopping, vous trouverez toujours un chauffeur VTC disponible. De même, n’hésitez pas à faire appel à nos services pour vous raccompagner à votre domicile en toute sécurité après une soirée bien arrosée.\n     Nous disposons de plusieurs types de véhicules type berline et Van afin de nous adapter à vos envies et vos besoins\n     Réservez sur notre application <span class="text-weight-bold">Tropik VTC</span> ou en nous appelant au <span class="text-weight-bold">06 92 48 57 13</span>.','<span class="text-weight-bold">Tropik VTC</span> vous offre la possibilité de créer un compte partenaire professionnel afin dans un premier temps de vous faciliter et de transporter sereinement vos salariés, partenaires, clients ou encore collaborateurs sans le moindre règlement à bord de nos véhicules.\n     Pour cela il vous suffit de prendre contact avec nous par téléphone.','<span class="text-weight-bold">Tropik VTC</span> n\'a aucun lien avec Uber à la réunion 974.\n     <span class="text-weight-bold">Tropik VTC</span> c\'est l\'application de transport local.']},s={"en-US":a},i=(0,n.o)({locale:"en-US",messages:s}),l=(0,o.xr)((({app:e})=>{e.use(i)}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var s=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(t.O).every((e=>t.O[e](o[l])))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var u=n();void 0!==u&&(r=u)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{337:"2073bfa1",461:"3a6f26f0"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"9e0bb1fb",337:"44543329",461:"f3a1225f",736:"94c91b3a"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="tropik-vtc:";t.l=(o,n,a,s)=>{if(e[o])e[o].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==r+a){i=p;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",r+a),i.src=o),e[o]=[n];var d=(r,t)=>{i.onerror=i.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e=(e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,n.parentNode.removeChild(n),o(l)}};return n.onerror=n.onload=a,n.href=r,document.head.appendChild(n),n},r=(e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=t[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===r))return n}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){n=s[o],a=n.getAttribute("data-href");if(a===e||a===r)return n}},o=o=>new Promise(((n,a)=>{var s=t.miniCssF(o),i=t.p+s;if(r(s,i))return n();e(o,i,n,a)})),n={143:0};t.f.miniCss=(e,r)=>{var t={337:1,461:1};n[e]?r.push(n[e]):0!==n[e]&&t[e]&&r.push(n[e]=o(e).then((()=>{n[e]=0}),(r=>{throw delete n[e],r})))}})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var s=t.p+t.u(r),i=new Error,l=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,n[1](i)}};t.l(s,l,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[s,i,l]=o,u=0;if(s.some((r=>0!==e[r]))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(l)var c=l(t)}for(r&&r(o);u<s.length;u++)a=s[u],t.o(e,a)&&e[a]&&e[a][0](),e[s[u]]=0;return t.O(c)},o=self["webpackChunktropik_vtc"]=self["webpackChunktropik_vtc"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(1582)));o=t.O(o)})();