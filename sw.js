self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('mws-restaurant-stage-1').then(function(cache) {
     return cache.addAll([
      'index.html',
      'restaurant.html',
      '/css/main.css',
      '/js/dbhelper.js',
      '/js/main.js',
      '/js/restaurant_info.js',
      '/img/*',
      '/js/register.js'
     ]);
   })
 );
});
self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});
