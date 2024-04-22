(()=>{var e={9822:(e,t,a)=>{"use strict";a(6992),a(8674),a(9601),a(7727);var n=a(5010),r=a(3396),i={class:"bg-white-pastel-medium dark:bg-[#3A3845]"},o={class:"m-auto w-[80%]"};function s(e,t,a,n,s,l){var c=(0,r.up)("Menu"),d=(0,r.up)("Home"),m=(0,r.up)("Articles"),u=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(c),(0,r.Wm)(d),(0,r._)("main",o,[(0,r.Wm)(m)]),(0,r.Wm)(u)])}a(8309);var l=a(7139),c=a(4427),d=a(2874),m={class:"sticky top-0 z-10 flex items-center justify-between border-b-[0.01px] border-[#dddcdc] bg-white-pastel-light text-[1.4em] font-semibold tracking-wide text-brown-pastel-dark dark:border-[#815B5B] dark:bg-brown-pastel-darkest dark:text-[#F7CCAC] menu-md:grid menu-md:grid-cols-[minmax(7em,_1fr)_9fr_minmax(7em,_1fr)] menu-md:text-[1.2em]",id:"menu"},u=(0,r._)("div",{class:"hidden menu-md:flex menu-md:flex-row-reverse"},[(0,r._)("img",{class:"block w-[4em] justify-center dark:hidden",src:c}),(0,r._)("img",{class:"hidden w-[4em] justify-center dark:block",src:d})],-1),f={id:"socorro",class:"flex min-w-[4em] justify-end menu-md:hidden"},p={id:"barsIcon"},g={id:"arrowIcon",class:"hidden"},b={class:"flex justify-center"},v=["id","href"],h={class:"flex min-w-[4em]"},w={type:"button",id:"theme",class:"block w-[1.2em]"},x=(0,r._)("div",{id:"sideMenuBackground",class:"fixed after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:block after:bg-black after:opacity-0 after:transition-opacity after:duration-300 after:ease-in after:content-[''] menu-md:invisible"},null,-1),k={id:"sideMenu",class:"fixed z-40 hidden h-[100vh] w-[70vw] items-start justify-between border-r-[0.01px] border-[#dddcdc] bg-white-pastel-light px-[3em] pt-[2em] dark:border-[#815B5B] dark:bg-brown-pastel-darkest menu-md:invisible"},_={class:"flex flex-col justify-center"},y=["id","href"];function I(e,t,a,n,i,o){var s=(0,r.up)("Bars3Icon"),c=(0,r.up)("ArrowLeftCircleIcon"),d=(0,r.up)("SunIcon"),I=(0,r.up)("MoonIcon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",m,[u,(0,r._)("div",f,[(0,r._)("button",(0,r.dG)({type:"button"},(0,r.mx)({click:o.toggleSideMenu},!0)),[(0,r._)("div",p,[(0,r.Wm)(s,{class:"w-[1.2em]"})]),(0,r._)("div",g,[(0,r.Wm)(c,{class:"w-[1.2em]"})])],16)]),(0,r._)("nav",null,[(0,r._)("ul",b,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.menu,(function(e,t){return(0,r.wg)(),(0,r.iD)("li",{key:e.name},[(0,r._)("a",(0,r.dG)({class:[t>0?"hidden menu-md:block":"","block px-7 py-5"],id:e.name,href:e.href},(0,r.mx)(0==t?{click:o.toggleSideMenu}:{},!0)),(0,l.zw)(e.name),17,v)])})),128))])]),(0,r._)("div",h,[(0,r._)("button",w,[(0,r.Wm)(d,{class:"block dark:hidden"}),(0,r.Wm)(I,{class:"hidden dark:block"})])])]),x,(0,r._)("nav",k,[(0,r._)("ul",_,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.menu,(function(e,t){return(0,r.wg)(),(0,r.iD)("li",{key:e.name},[(0,r._)("a",(0,r.dG)({class:[0==t?"hidden":"","block px-7 py-5 text-[1.5em] font-semibold text-brown-pastel-dark dark:text-[#F7CCAC] "],id:"".concat(e.name,"sideBar"),href:e.href},(0,r.mx)({click:o.toggleSideMenu},!0)),(0,l.zw)(e.name),17,y)])})),128))])])],64)}a(9554),a(1539),a(4747),a(4916),a(5306);var E=a(3857),L=a(3847),B=a(7148),j=a(6323);const O={name:"MenuPortfolio",components:{SunIcon:E.Z,ArrowLeftCircleIcon:L.Z,Bars3Icon:B.Z,MoonIcon:j.Z},mounted:function(){var e=this;this.$nextTick((function(){var t=document.getElementById("sideMenu"),a=document.getElementById("barsIcon"),n=document.getElementById("arrowIcon"),r=document.getElementById("sideMenuBackground"),i=document.documentElement,o=document.getElementById("theme");o.addEventListener("click",(function(){i.classList.contains("dark")?i.classList.remove("dark"):i.classList.add("dark")})),t.addEventListener("animationend",(function(e){var i=e.target;if(i.classList.contains("animate__slideOutLeft"))return i.classList.remove("animate__animated","animate__slideOutLeft"),a.classList.remove("hidden"),n.classList.add("hidden"),t.classList.add("hidden"),void r.classList.remove("h-[100vh]","w-[100vw]");t.classList.remove("animate__animated","animate__slideInLeft")})),e.menu.forEach((function(e){var a=document.getElementById(e.name),n=document.getElementById("".concat(e.name,"sideBar"));a.addEventListener("click",(function(e){var t=document.getElementById("sideMenu");if(e.preventDefault(),"home"!=e.target.id||t.classList.contains("hidden")){var a=document.getElementById(e.target.id.toUpperCase());a.scrollIntoView({behavior:"smooth",block:"start"})}})),n.addEventListener("click",(function(a){if(a.preventDefault(),!t.classList.contains("animate__animated")){var n=document.getElementById(e.href);n.scrollIntoView({behavior:"smooth",block:"start"})}}))}))}))},data:function(){return{menu:[{name:"home",href:"HOME"},{name:"sobre",href:"SOBRE"},{name:"experiência",href:"EXPERIÊNCIA"},{name:"projetos",href:"PROJETOS"}]}},methods:{toggleSideMenu:function(e){var t=document.getElementById("sideMenu"),a=document.getElementById("barsIcon"),n=document.getElementById("arrowIcon"),r=document.getElementById("sideMenuBackground");if(!t.classList.contains("animate__slideInLeft")||!t.classList.contains("animate__slideOutLeft")){if(t.classList.contains("hidden")&&"home"!=e.target.id)return a.classList.add("hidden"),n.classList.remove("hidden"),r.classList.remove("after:opacity-0"),r.classList.add("after:opacity-25","dark:after:opacity-50","z-30","h-[100vh]","w-[100vw]"),t.classList.remove("hidden"),t.classList.add("animate__animated","animate__slideInLeft"),void(document.body.style.overflow="hidden");if(!t.classList.contains("hidden")&&"A"==e.target.tagName){var i=document.getElementById(e.target.id.toUpperCase().replace("SIDEBAR",""));i.scrollIntoView({behavior:"smooth",block:"start"})}t.classList.contains("animate__animated")||t.classList.contains("hidden")||t.classList.add("animate__animated","animate__slideOutLeft")}t.classList.contains("animate__slideOutLeft")&&(r.classList.remove("after:opacity-25","dark:after:opacity-50","z-30"),r.classList.add("after:opacity-0"),document.body.style.overflow="auto")}}};var C=a(89);const S=(0,C.Z)(O,[["render",I]]),M=S;var A=a(6559),D={id:"HOME",class:"animate__animated animate__fadeInUp m-auto flex w-[100%] flex-col justify-between py-[3em] pb-0 pt-[5em] text-[1.2em] text-brown-pastel-dark dark:text-[#F7CCAC] md:w-[21.5em] md:flex-row md:pt-[5em] menu-md:text-[1em]"},P=(0,r._)("img",{class:"m-auto w-[8em] rounded-full border-[0.3em] border-white-pastel-light outline outline-[0.01px] outline-[#dddcdc] dark:border-brown-pastel-darkest dark:outline-[#815B5B] md:m-0",src:A},null,-1),T={class:"flex h-[6em] flex-col justify-between self-center pt-[1em] text-center md:pt-0 md:text-start"},z=(0,r._)("div",null,[(0,r._)("h1",null,"sarah"),(0,r._)("h2",null,"desenvolvedora & artista.")],-1),F={class:"flex w-[6em] justify-between self-center md:self-start"},H=(0,r._)("a",{href:"https://github.com/piltie",target:"_blank"},[(0,r._)("i",{class:"fa-brands fa-github flex"})],-1),U={href:"EMAIL",id:"email"},W=(0,r._)("a",{href:"https://www.linkedin.com/in/sarahcarlasouza",target:"_blank"},[(0,r._)("i",{class:"fa-brands fa-linkedin flex"})],-1);function Z(e,t,a,n,i,o){var s=(0,r.up)("AtSymbolIcon");return(0,r.wg)(),(0,r.iD)("div",D,[P,(0,r._)("div",T,[z,(0,r._)("div",F,[H,(0,r._)("a",U,[(0,r.Wm)(s,{class:"w-[1.1em]"})]),W])])])}var V=a(5879);const R={name:"HomePortfolio",components:{AtSymbolIcon:V.Z},mounted:function(){var e=document.getElementById("email");e.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("EMAIL");t.scrollIntoView({behavior:"smooth",block:"start"})}))}},q=(0,C.Z)(R,[["render",Z]]),N=q;a(3710);var Y={class:"m-auto mt-[5em] flex justify-center bg-brown-pastel-light py-[3em] text-[1.3em] font-semibold tracking-wide text-brown-pastel-dark dark:bg-[#594545] dark:text-[#F7CCAC] footer-sm:text-[1em] menu-md:text-[1.2em]"},G={class:"flex h-[15.5em] w-[100%] flex-col items-center justify-between"},J=(0,r._)("img",{class:"self-top block w-[6em] dark:hidden",src:c},null,-1),K=(0,r._)("img",{class:"self-top hidden w-[6em] dark:block",src:d},null,-1),Q={class:"flex h-[12.5em] flex-col flex-wrap justify-between text-center"},X={class:"flex h-[9.5em] flex-col flex-wrap justify-between"},$=(0,r._)("h1",{class:"text-[1.2em]"},"CONTATO",-1),ee={class:"flex flex-col"},te={href:"./Curriculo.pdf",target:"_blank",class:"flex justify-center py-[0.2em] text-[1em]"},ae=(0,r.Uk)(" currículo (PDF) "),ne=(0,r._)("a",{href:"https://github.com/piltie",target:"_blank",class:"py-[0.2em] text-[1em]"},[(0,r._)("i",{class:"fa-solid fa-code-branch mr-[0.2em] text-[0.8em]"}),(0,r.Uk)("github.com/piltie")],-1),re=(0,r._)("a",{href:"https://www.linkedin.com/in/sarahcarlasouza",target:"_blank",class:"py-[0.2em] text-[1em]"},[(0,r._)("i",{class:"fa-brands fa-linkedin mr-[0.2em] text-[0.8em]"}),(0,r.Uk)("linkedin.com/in/sarahcarlasouza")],-1),ie={class:"flex justify-center py-[0.2em] text-[1em]",id:"EMAIL"},oe=(0,r.Uk)(" sarahcarlasouza.info@gmail.com "),se={class:"mt-[0.5em] text-[0.7em]"};function le(e,t,a,n,i,o){var s=(0,r.up)("PaperClipIcon"),c=(0,r.up)("EnvelopeIcon");return(0,r.wg)(),(0,r.iD)("footer",Y,[(0,r._)("div",G,[J,K,(0,r._)("div",Q,[(0,r._)("div",X,[$,(0,r._)("div",ee,[(0,r._)("a",te,[(0,r.Wm)(s,{class:"mr-[0.2em] ml-[-0.1em] w-[0.8em] self-center"}),ae]),ne,re,(0,r._)("div",ie,[(0,r.Wm)(c,{class:"mr-[0.2em] ml-[-0.1em] w-[0.8em] self-center"}),oe])])]),(0,r._)("p",se," © "+(0,l.zw)((new Date).getFullYear())+" Portfólio | Criado por Sarah Carla Souza. ",1)])])])}var ce=a(7536),de=a(2452);const me={name:"FooterPortfolio",components:{EnvelopeIcon:ce.Z,PaperClipIcon:de.Z}},ue=(0,C.Z)(me,[["render",le]]),fe=ue;a(9254);var pe=["id"],ge={class:"flex justify-center"},be={class:"text-center text-[2.1em] text-brown-pastel-dark dark:text-[#F7CCAC]"},ve=["id"],he={key:1,class:"m-auto flex w-[95%] flex-wrap justify-center pb-[2em] text-center text-[1.2em] project-img:w-[100%] project-img:flex-col"},we=["href"],xe=["src","alt"],ke={class:"p-[1em] text-[1em] text-[#888787] dark:text-[#cfc4c4]"},_e=(0,r._)("hr",{class:"dark:border-[#815B5B]"},null,-1);function ye(e,t,n,i,o,s){return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.articles,(function(e){return(0,r.wg)(),(0,r.iD)("div",{key:e.title,id:e.title,class:"animate__animated animate__fadeInUp pt-[6em]"},[(0,r._)("div",ge,[(0,r._)("h1",be,(0,l.zw)(e.title),1)]),(0,r._)("div",null,[e.text?((0,r.wg)(),(0,r.iD)("p",{key:0,id:"".concat(e.title,"Texto"),class:"py-[2em] text-[1.2em] font-semibold text-[#7c7b7b] dark:text-[#aaa7a7] menu-md:text-[1em]"},null,8,ve)):(0,r.kq)("",!0),e.images?((0,r.wg)(),(0,r.iD)("div",he,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.images,(function(e){return(0,r.wg)(),(0,r.iD)("div",{key:e.alt,class:"mx-[1em] mt-[2em] w-[38%] border-[0.3em] border-white-pastel-light bg-white-default outline outline-[0.01px] outline-[#dddcdc] dark:border-brown-pastel-darkest dark:bg-brown-pastel-darkest dark:outline-[#815B5B] project-img:mx-0 project-img:w-[100%]"},[(0,r._)("a",{href:e.link,target:"_blank"},[(0,r._)("img",{src:a(990)("./".concat(e.src)),alt:e.alt},null,8,xe)],8,we),(0,r._)("h2",ke,(0,l.zw)(e.caption),1)])})),128))])):(0,r.kq)("",!0)]),_e],8,pe)})),128)}const Ie={name:"ArticlesPortfolio",data:function(){return{articles:[{title:"SOBRE",text:"Sou uma Desenvolvedora Júnior com sede de aprendizado, além de ser estudante de Sistemas de Informação. Estou aprendendo na prática tecnologias web, tanto front-end quanto back-end. Comecei a desenvolver em ASP.NET MVC e Vue.js com Tailwind/Bootstrap 5, juntamente com Oracle/SQL Server no banco de dados.<br>Tenho também o pacote básico de linguagens de qualquer desenvolvedor web (Javascript, HTML5 e CSS), enquanto também lido com Python, SQL e C#. Também comecei a estudar Vue.js, React.js (Typescript), MongoDB e PostgreSQL (C/ Sequelize) Dockers e Tailwind, e a aplicar meus conhecimentos."},{title:"EXPERIÊNCIA",text:"Em janeiro de 2021 iniciei minha graduação no curso de S.I, na UniFOA. Em setembro do mesmo ano, comecei um estágio como programadora, também na UniFOA, e atualmente trabalho na mesma como desenvolvedora web full stack júnior, desenvolvendo sistemas webs/APIs em .NET + React/Vue.js com base de dados Oracle e SQL Server (utilizando ferramentas como git e azure), e também dando manutenção em sistemas legado (ASP clássico/VBScript).<br>Em quesito de técnicas de desenvolvimento e afins, tenho conhecimento em OOP e POP, Metodologia Ágil, Web APIs REST, Arquitetura MVC e TDD."},{title:"PROJETOS",images:[{src:"molang.png",alt:"Molang",caption:"html, css e javascript puro",link:"https://github.com/piltie/E-commerce-website"},{src:"gatteria.png",alt:"Gatteria",caption:"vue e tailwind css",link:"https://github.com/piltie/E-commerce-website-Vue-"},{src:"embreve.png",alt:"Em breve",caption:"react e asp.net core mvc"},{src:"embreve.png",alt:"Em breve",caption:"angular e asp.net core mvc"},{src:"embreve.png",alt:"Em breve",caption:" asp.net core web api"}]}]}},mounted:function(){var e=this;this.$nextTick((function(){e.articles.forEach((function(e){if(e.text){var t=document.getElementById("".concat(e.title,"Texto"));console.log(t),t.innerHTML=e.text}}))}))}},Ee=(0,C.Z)(Ie,[["render",ye]]),Le=Ee,Be={name:"App",components:{Menu:M,Home:N,Articles:Le,Footer:fe}},je=(0,C.Z)(Be,[["render",s]]),Oe=je;(0,n.ri)(Oe).mount("#app")},990:(e,t,a)=>{var n={"./embreve.png":2783,"./gatteria.png":6018,"./logo-dark.png":2874,"./logo.png":4427,"./molang.png":3884,"./sarah.jpg":6559};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=990},2783:(e,t,a)=>{"use strict";e.exports=a.p+"img/embreve.e2d6d242.png"},6018:(e,t,a)=>{"use strict";e.exports=a.p+"img/gatteria.b986c747.png"},2874:(e,t,a)=>{"use strict";e.exports=a.p+"img/logo-dark.5e49cb18.png"},4427:(e,t,a)=>{"use strict";e.exports=a.p+"img/logo.7ec241c3.png"},3884:(e,t,a)=>{"use strict";e.exports=a.p+"img/molang.747928f2.png"},6559:(e,t,a)=>{"use strict";e.exports=a.p+"img/sarah.9200e6ca.jpg"}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.m=e,(()=>{var e=[];a.O=(t,n,r,i)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){for(var[n,r,i]=e[d],s=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](n[l])))?n.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{a.p="/"})(),(()=>{var e={143:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[o,s,l]=n,c=0;if(o.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(t&&t(n);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=a.O(void 0,[998],(()=>a(9822)));n=a.O(n)})();
//# sourceMappingURL=app.3ae006f5.js.map