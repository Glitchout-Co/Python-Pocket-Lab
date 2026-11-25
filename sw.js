const CACHE='python-pocket-lab-v0.6.0';
const FILES=['./','./index.html','./manifest.webmanifest','./manifest.webmanifest?v=034','./assets/pocket-lab-icon-v034-180.png','./assets/pocket-lab-icon-v034-192.png','./assets/pocket-lab-icon-v034-512.png','./assets/glitchout-co.webp'];
self.addEventListener('install', e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate', e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('python-pocket-lab-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', e=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===location.origin&&new URL(e.request.url).pathname.startsWith(new URL(self.registration.scope).pathname))e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
