const CACHE='aca925-v2-cache';
const ASSETS=['./','./index.html','./styles.css','./app.js','./question-bank.js','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
