if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),f={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-40edcd36"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5xD0sokYMcCnvjXvoIZNu/_buildManifest.js",revision:"5c96b459e3c0cc01e0e049a5349567ff"},{url:"/_next/static/5xD0sokYMcCnvjXvoIZNu/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/5xD0sokYMcCnvjXvoIZNu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/108-617af795a374c4e6.js",revision:"617af795a374c4e6"},{url:"/_next/static/chunks/269-9d32ec2ccd990f2a.js",revision:"9d32ec2ccd990f2a"},{url:"/_next/static/chunks/29107295-fbcfe2172188e46f.js",revision:"fbcfe2172188e46f"},{url:"/_next/static/chunks/535-34bab88dc7c72384.js",revision:"34bab88dc7c72384"},{url:"/_next/static/chunks/675-d39e3391c373bc5e.js",revision:"d39e3391c373bc5e"},{url:"/_next/static/chunks/75fc9c18-289ba7b5fb63f228.js",revision:"289ba7b5fb63f228"},{url:"/_next/static/chunks/8710b798-2721551ef9e5f84f.js",revision:"2721551ef9e5f84f"},{url:"/_next/static/chunks/971-f586afe640b68013.js",revision:"f586afe640b68013"},{url:"/_next/static/chunks/a9a7754c-4f6fa1fe8bbfe8f8.js",revision:"4f6fa1fe8bbfe8f8"},{url:"/_next/static/chunks/cb1608f2-b19589434004d366.js",revision:"b19589434004d366"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-973619922b2f14fd.js",revision:"973619922b2f14fd"},{url:"/_next/static/chunks/pages/404-2d88f41417c5885e.js",revision:"2d88f41417c5885e"},{url:"/_next/static/chunks/pages/500-aa69337e6ec2ecc5.js",revision:"aa69337e6ec2ecc5"},{url:"/_next/static/chunks/pages/_app-95ea64a676e6b054.js",revision:"95ea64a676e6b054"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/berita-a8533f865be43cd1.js",revision:"a8533f865be43cd1"},{url:"/_next/static/chunks/pages/berita/%5Bid%5D-b60ab9eb9fb19154.js",revision:"b60ab9eb9fb19154"},{url:"/_next/static/chunks/pages/berita/%5Bid%5D/%5Bberita%5D-bfd2fc05fa61cf18.js",revision:"bfd2fc05fa61cf18"},{url:"/_next/static/chunks/pages/index-5353f6d6ed9d21a2.js",revision:"5353f6d6ed9d21a2"},{url:"/_next/static/chunks/pages/kategori-0e6e61c739f98313.js",revision:"0e6e61c739f98313"},{url:"/_next/static/chunks/pages/kontak-3fb83aa86a84d3f2.js",revision:"3fb83aa86a84d3f2"},{url:"/_next/static/chunks/pages/layanan/Call-Center-020b0c0866a90f65.js",revision:"020b0c0866a90f65"},{url:"/_next/static/chunks/pages/layanan/Izin-Keramaian-f8a2251fb25c116a.js",revision:"f8a2251fb25c116a"},{url:"/_next/static/chunks/pages/layanan/Pengamanan-Objek-Khusus-f1795e9a0f7e253f.js",revision:"f1795e9a0f7e253f"},{url:"/_next/static/chunks/pages/layanan/Pengawalan-Jalan-de06417041aa4357.js",revision:"de06417041aa4357"},{url:"/_next/static/chunks/pages/layanan/SKCK-7d59c9996e536f91.js",revision:"7d59c9996e536f91"},{url:"/_next/static/chunks/pages/layanan/SPKT-9bf34c5d8796d0c3.js",revision:"9bf34c5d8796d0c3"},{url:"/_next/static/chunks/pages/polsek-jajaran/%5Bid%5D-3ccfca3681c2d593.js",revision:"3ccfca3681c2d593"},{url:"/_next/static/chunks/pages/satker/%5Bid%5D-931460dc44252abd.js",revision:"931460dc44252abd"},{url:"/_next/static/chunks/pages/search-b4c71ca74248e7f6.js",revision:"b4c71ca74248e7f6"},{url:"/_next/static/chunks/pages/vidio-82fdf188ee924584.js",revision:"82fdf188ee924584"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-cb7634a8b6194820.js",revision:"cb7634a8b6194820"},{url:"/_next/static/css/1c2a605af19f6f13.css",revision:"1c2a605af19f6f13"},{url:"/_next/static/css/e383a0bcc5615da0.css",revision:"e383a0bcc5615da0"},{url:"/_next/static/css/eaa3e5e2cfd34164.css",revision:"eaa3e5e2cfd34164"},{url:"/favicon.ico",revision:"8e587b60b8622115c6fea50216490539"},{url:"/icons/poldametrobekasi (1).png",revision:"7c3f78879e3154a42bf03c00699dd646"},{url:"/icons/poldametrobekasi (2).png",revision:"029315ef75af44a5ac4a4ed5024d1191"},{url:"/icons/poldametrobekasi (3).png",revision:"7dae98de6c4ee05150c77e3780ec2a0f"},{url:"/icons/poldametrobekasi.png",revision:"70d5f2e15348c774f960e67c13a55681"},{url:"/images/145ae4e5-c5fe-468c-9378-398493e88141.webp",revision:"030bfd94c9c9c94343afc3acc7764083"},{url:"/images/16-PROGRAM-PRIORITAS-KAPOLRI.webp",revision:"9e76531aa3b59d83be45302225eba278"},{url:"/images/404.webp",revision:"5ecb7ea990dc3b131cf78ce41427eace"},{url:"/images/5-m.gif",revision:"9f6a8eb0b74e4a854b425dbb99845739"},{url:"/images/8baf0cde-85f9-46e6-8553-0426c775eb61.webp",revision:"2c890f00ccefcb766db05226d2e9351c"},{url:"/images/b02f5119-9fbd-46ed-bf68-37c1b3193539.gif",revision:"ea0b6f07932eea1cab3b7fbe552e36ef"},{url:"/images/default.webp",revision:"8a77a0449b296f4197727ef656987ea6"},{url:"/images/ede7a4a3-0756-4162-8414-cb6b1676a9fb.webp",revision:"7a02b402461254088ae54df369720e09"},{url:"/images/footer_logo.webp",revision:"8666f6f4dca1b557013000fc3cc9f9e8"},{url:"/images/polisiradio.webm",revision:"4ec3b83f5214c9924f98b2e92cf2b40a"},{url:"/images/presisi-logo-239x300.png",revision:"d28c0c8b4387c5d372e1c31561098e8c"},{url:"/images/presisi-logo-239x300.webp",revision:"61325937e3feedd3309474356aa95594"},{url:"/images/skckonline.jpeg",revision:"7de3b816b92c4d813be6a16ce4ea8c7a"},{url:"/locales/en/common.json",revision:"86b8ea238c37d3428461535a3f53928c"},{url:"/locales/id/common.json",revision:"5dc5404c3f2503c0f30b976a1e2f6914"},{url:"/manifest.json",revision:"2e2ac092f4e8da2721a4273ffc5d4163"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
