self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('calculadora-v2').then((cache) => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './assets/style.css',
      './assets/icons/favicon.svg',
      './assets/icons/icon-192.svg',
      './assets/icons/icon-512.svg',
      './assets/icons/icon-180.svg',
      './assets/script.js'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
