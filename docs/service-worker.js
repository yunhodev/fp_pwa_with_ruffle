if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const c=s=>l(s,i),t={module:{uri:i},exports:o,require:c};e[i]=Promise.all(r.map((s=>t[s]||c(s)))).then((s=>(n(...s),o)))}}define(["./workbox-d169e1d7"],(function(s){"use strict";s.setCacheNameDetails({prefix:"fp_pwa_with_ruffle"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/Flash_PWA/css/app.a118488f.css",revision:null},{url:"/Flash_PWA/css/chunk-vendors.dd1413d7.css",revision:null},{url:"/Flash_PWA/index.html",revision:"c934c6c8eaa56d3e9b9c3509ad1a41ec"},{url:"/Flash_PWA/js/951.743fc325.js",revision:null},{url:"/Flash_PWA/js/app.8b672430.js",revision:null},{url:"/Flash_PWA/js/chunk-vendors.5df739e8.js",revision:null},{url:"/Flash_PWA/js/flashes.3b93eb5d.js",revision:null},{url:"/Flash_PWA/manifest.json",revision:"6c76f277ae336c3a8562f504598bb7cf"},{url:"/Flash_PWA/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
