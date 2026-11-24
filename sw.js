const CACHE='python-pocket-lab-v0.2';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install', e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate', e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('python-pocket-lab-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', e=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===location.origin&&new URL(e.request.url).pathname.startsWith(new URL(self.registration.scope).pathname))e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
