const CACHE_NAME = 'sudoku-v1';
const FILES = ['index.html','manifest.json','icon-192.svg','icon-512.svg'];
self.addEventListener('install', (e)=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES))) });
self.addEventListener('fetch', (e)=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))) });
