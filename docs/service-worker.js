if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,f)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let n={};const t=e=>r(e,l),u={module:{uri:l},exports:n,require:t};s[l]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(f(...e),n)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fp_pwa_with_ruffle"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/fp_pwa_with_ruffle/css/app.7bd93f6e.css",revision:null},{url:"/fp_pwa_with_ruffle/css/chunk-vendors.dd1413d7.css",revision:null},{url:"/fp_pwa_with_ruffle/index.html",revision:"1a160480ed8518bb9d8d2cfe9d4e9ec8"},{url:"/fp_pwa_with_ruffle/js/app.21260ea7.js",revision:null},{url:"/fp_pwa_with_ruffle/js/chunk-vendors.200713b2.js",revision:null},{url:"/fp_pwa_with_ruffle/js/games.a5f47b67.js",revision:null},{url:"/fp_pwa_with_ruffle/manifest.json",revision:"92e72d19d649adbe1db62e9973e538ca"},{url:"/fp_pwa_with_ruffle/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
