const CACHE='python-pocket-lab-v0.6.1';
const FILES=['./','./index.html','./manifest.webmanifest','./manifest.webmanifest?v=034','./assets/pocket-lab-icon-v034-180.png','./assets/pocket-lab-icon-v034-192.png','./assets/pocket-lab-icon-v034-512.png','./assets/glitchout-co.webp'];
self.addEventListener('install', e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(path=>new Request(new URL(path,self.registration.scope),{cache:'reload'})))).then(()=>self.skipWaiting())));
self.addEventListener('activate', e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('python-pocket-lab-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
async function refreshNavigation(request){
 try{const response=await fetch(request,{cache:'no-store'});if(response.ok)return response}catch{}
 const cache=await caches.open(CACHE);
 return await cache.match(new URL('./index.html',self.registration.scope))||await cache.match(new URL('./',self.registration.scope))||Response.error();
}
self.addEventListener('fetch', e=>{
 const url=new URL(e.request.url),scope=new URL(self.registration.scope);
 if(e.request.method!=='GET'||url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
 if(e.request.mode==='navigate'&&url.searchParams.has('ppl-refresh')){e.respondWith(refreshNavigation(e.request));return}
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
