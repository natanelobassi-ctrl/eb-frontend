const CACHE="eb-v1";

const FILES=[
"/eb-frontend/",
"/eb-frontend/index.html",
"/eb-frontend/ecole.html",
"/eb-frontend/cycles.html",
"/eb-frontend/inscription.html",
"/eb-frontend/resultats.html",
"/eb-frontend/galerie.html",
"/eb-frontend/actualites.html",
"/eb-frontend/manifest.json",
"/eb-frontend/admin/",
"/eb-frontend/admin/index.html",
"/eb-frontend/admin/eleves.html",
"/eb-frontend/admin/paiements.html",
"/eb-frontend/admin/bulletins.html",
"/eb-frontend/admin/cartes.html",
"/eb-frontend/admin/internat.html",
"/eb-frontend/admin/emplois.html",
"/eb-frontend/admin/messages.html",
"/eb-frontend/admin/sauvegarde.html",
"/eb-frontend/admin/parametres.html"
];

self.addEventListener("install",event=>{
 event.waitUntil(
  caches.open(CACHE).then(cache=>cache.addAll(FILES))
 );
 self.skipWaiting();
});

self.addEventListener("activate",event=>{
 event.waitUntil(
  caches.keys().then(keys=>
   Promise.all(
    keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
   )
  )
 );
 self.clients.claim();
});

self.addEventListener("fetch",event=>{
 event.respondWith(
  caches.match(event.request).then(r=>r||fetch(event.request))
 );
});
