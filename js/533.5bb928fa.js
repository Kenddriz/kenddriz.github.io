(self["webpackChunktropik_vtc"]=self["webpackChunktropik_vtc"]||[]).push([[533],{4093:e=>{const t={send:function(e){return new Promise((function(a,l){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var n=JSON.stringify(e);t.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",n,(function(e){a(e)}))}))},ajaxPost:function(e,a,l){var n=t.createCORSRequest("POST",e);n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.onload=function(){var e=n.responseText;null!=l&&l(e)},n.send(a)},ajax:function(e,a){var l=t.createCORSRequest("GET",e);l.onload=function(){var e=l.responseText;null!=a&&a(e)},l.send()},createCORSRequest:function(e,t){var a=new XMLHttpRequest;return"withCredentials"in a?a.open(e,t,!0):"undefined"!=typeof XDomainRequest?(a=new XDomainRequest).open(e,t):a=null,a}};e.exports=t},870:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var l=a(3673);const n={class:"row no-wrap q-mb-md q-gutter-x-md"},o=(0,l._)("img",{src:"images/google_play.ico"},null,-1),s=(0,l._)("div",{class:"col-9 q-ml-xs"},[(0,l._)("div",{class:"q-pr-xs"},"Télécharger sur"),(0,l._)("div",null,"Google play")],-1),r=(0,l._)("img",{style:{color:"white"},src:"images/social_apple.png"},null,-1),i=(0,l._)("div",{class:"col-9 q-ml-xs"},[(0,l._)("div",{class:"q-pr-xs"},"Télécharger dans"),(0,l._)("div",null,"l'App Store")],-1);function u(e,t,a,u,m,d){const c=(0,l.up)("q-card");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(c,{flat:"",class:"flex q-pa-xs no-wrap items-center",dark:""},{default:(0,l.w5)((()=>[o,s])),_:1}),(0,l.Wm)(c,{flat:"",class:"flex q-pa-xs no-wrap items-center",dark:""},{default:(0,l.w5)((()=>[r,i])),_:1})])}const m=(0,l.aZ)({name:"DownloadLink",props:{}});var d=a(151),c=a(7518),p=a.n(c);m.render=u;const w=m;p()(m,"components",{QCard:d.Z})},3533:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>te});var l=a(3673);const n=(0,l._)("img",{alt:"tropik vtc",src:"images/logo.png"},null,-1),o=(0,l.Uk)("Tropik VTC"),s=(0,l.Uk)(" Déplacez-vous librement "),r=(0,l.Uk)("06 92 48 57 13"),i=(0,l.Uk)("Assistance par téléphone"),u=(0,l._)("img",{alt:"tropik vtc",src:"images/flag.jpg"},null,-1),m={class:"row justify-center q-my-md q-px-sm"},d={class:"row justify-between",style:{width:"100%","max-width":"1100px"}},c={class:"col-xs-12 col-sm-6 row items-center justify-between"},p=(0,l._)("img",{alt:"tropik vtc",src:"images/logo.png"},null,-1),w=(0,l._)("h3",{style:{margin:"unset!important"},class:"text-subtitle1 text-weight-bold text-dark"}," Tropik VTC ",-1),f=(0,l.Uk)(" Déplacez-vous librement "),g=(0,l.Uk)("Assistance par téléphone"),v=(0,l.Uk)("06 92 48 57 13"),_=(0,l.Uk)("Disponibilité"),W=(0,l.Uk)("Service 24h/24 & 7jours/7"),h={class:"flex flex-center q-gutter-x-lg q-mt-md"},x=(0,l._)("img",{height:"40",src:"images/facebook1.png"},null,-1),q=(0,l._)("img",{height:"40",src:"images/facebook.png"},null,-1);function b(e,t,a,b,k,y){const Z=(0,l.up)("q-avatar"),F=(0,l.up)("q-item-section"),Q=(0,l.up)("q-item-label"),S=(0,l.up)("q-item"),j=(0,l.up)("q-space"),T=(0,l.up)("q-toolbar"),C=(0,l.up)("q-header"),U=(0,l.up)("router-view"),V=(0,l.up)("q-page-container"),L=(0,l.up)("q-separator"),R=(0,l.up)("q-icon"),D=(0,l.up)("q-list"),M=(0,l.up)("DownloadLink"),O=(0,l.up)("ContactForm"),z=(0,l.up)("q-btn"),B=(0,l.up)("q-footer"),E=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(E,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(T,{class:"bg-white text-dark"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,{side:"",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[n])),_:1})])),_:1}),(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"text-subtitle1 text-bold"},{default:(0,l.w5)((()=>[o])),_:1}),(0,l.Wm)(Q,{class:"text-warning",caption:""},{default:(0,l.w5)((()=>[s])),_:1})])),_:1})])),_:1}),(0,l.Wm)(j),(0,l.Wm)(F,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"text-right text-weight-bold"},{default:(0,l.w5)((()=>[r])),_:1}),(0,l.Wm)(Q,{class:"text-warning",caption:""},{default:(0,l.w5)((()=>[i])),_:1})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[u])),_:1})])),_:1})])),_:1}),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U)])),_:1}),(0,l.Wm)(B,{class:"bg-white footer",style:{position:"relative"}},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{color:"warning",inset:""}),(0,l._)("div",m,[(0,l._)("div",d,[(0,l._)("div",c,[(0,l.Wm)(D,{class:"col-12"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"q-pl-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{side:"",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[p])),_:1})])),_:1}),(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[w,(0,l.Wm)(Q,{class:"text-warning",caption:""},{default:(0,l.w5)((()=>[f])),_:1})])),_:1})])),_:1}),(0,l.Wm)(S,{class:"text-dark q-pl-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{color:"primary",name:"phone"})])),_:1}),(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[v])),_:1})])),_:1})])),_:1}),(0,l.Wm)(S,{class:"text-dark q-pl-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{color:"primary",name:"access_time"})])),_:1}),(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[_])),_:1}),(0,l.Wm)(Q,{class:"text-warning"},{default:(0,l.w5)((()=>[W])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(M)]),(0,l.Wm)(O)])]),(0,l.Wm)(L,{color:"warning",inset:""}),(0,l._)("div",h,[(0,l.Wm)(z,{flat:"",dense:""},{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)(z,{flat:"",dense:""},{default:(0,l.w5)((()=>[q])),_:1})])])),_:1})])),_:1})}var k=a(870);const y={class:"flex justify-end"};function Z(e,t,a,n,o,s){const r=(0,l.up)("q-input"),i=(0,l.up)("q-spinner-bars"),u=(0,l.up)("q-btn"),m=(0,l.up)("q-form");return(0,l.wg)(),(0,l.j4)(m,{onSubmit:e.send,style:{"max-width":"400px"},class:"col col-xs-12 q-gutter-y-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{dense:"",rounded:"",outlined:"",placeholder:"Nom *","model-value":e.inputForm.name,modelValue:e.inputForm.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.inputForm.name=t),"lazy-rules":"",rules:[e=>e&&e.length>0||"Entrer votre nom"]},null,8,["model-value","modelValue","rules"]),(0,l.Wm)(r,{dense:"",rounded:"",outlined:"",placeholder:"Email *","model-value":e.inputForm.From,modelValue:e.inputForm.From,"onUpdate:modelValue":t[1]||(t[1]=t=>e.inputForm.From=t),"lazy-rules":"",rules:[()=>e.validMail()||"Email invalide"]},null,8,["model-value","modelValue","rules"]),(0,l.Wm)(r,{"model-value":e.inputForm.Body,modelValue:e.inputForm.Body,"onUpdate:modelValue":t[2]||(t[2]=t=>e.inputForm.Body=t),dense:"",type:"textarea",rounded:"",outlined:"",placeholder:"Message","lazy-rules":"",rules:[e=>e&&e.length>0||"Saisir votre message"]},null,8,["model-value","modelValue","rules"]),(0,l._)("div",y,[(0,l.Wm)(u,{type:"submit","icon-right":"send","no-caps":"",color:"warning",size:"md",rounded:"",unelevated:"",label:"Envoyer","text-color":"white",loading:e.loading,disable:e.loading},{loading:(0,l.w5)((()=>[(0,l.Wm)(i,{color:"white"})])),_:1},8,["loading","disable"])])])),_:1},8,["onSubmit"])}var F=a(1959),Q=a(9140);const S=a(4093),j={SecureToken:"8543d244-bb26-420a-8685-83c5202c60e9",To:"tropicvtc@gmail.com"},T=()=>{const e=(0,F.qj)({From:"",name:"",Body:"",Subject:"Tropik vtc"});function t(){const t=/^[^\s()<>@,;:\/]+@\w[\w.-]+\.[a-z]{2,}$/i;return t.test(e.From)}const a=(0,F.iH)(!1);function l(){a.value=!0,S.send(Object.assign(Object.assign(Object.assign({},j),e),{From:e.name+"<"+e.From+">"})).then((e=>{a.value=!1,"ok"===e.toLowerCase()?Q.Z.create({message:"Votre email a bien été envoyé !",color:"primary",position:"bottom-right"}):Q.Z.create({message:"Echec d'envoi",caption:"Erreur de service SMTP.",color:"warning",position:"bottom-right"})})).catch((()=>{Q.Z.create({message:"Serveur SMTP ne répond pas !",color:"warning",position:"bottom-right"}),a.value=!1}))}return{inputForm:e,send:l,loading:a,validMail:t}},C=(0,l.aZ)({name:"ContactForm",setup(){return Object.assign({},T())}});var U=a(8689),V=a(4553),L=a(6114),R=a(4752),D=a(6115),M=a(7518),O=a.n(M);C.render=Z;const z=C;O()(C,"components",{QForm:U.Z,QInput:V.Z,QBtn:L.Z,QSpinnerBars:R.Z,QField:D.Z});const B=(0,l.aZ)({name:"MainLayout",components:{DownloadLink:k.Z,ContactForm:z}});var E=a(2936),P=a(3812),A=a(9570),H=a(3414),I=a(2035),X=a(5096),G=a(2350),N=a(2025),J=a(2652),$=a(1762),K=a(5869),Y=a(7011),ee=a(4554);B.render=b;const te=B;O()(B,"components",{QLayout:E.Z,QHeader:P.Z,QToolbar:A.Z,QItem:H.Z,QItemSection:I.Z,QAvatar:X.Z,QItemLabel:G.Z,QSpace:N.Z,QPageContainer:J.Z,QFooter:$.Z,QSeparator:K.Z,QList:Y.Z,QIcon:ee.Z,QBtn:L.Z})}}]);