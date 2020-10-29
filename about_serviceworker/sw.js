self.addEventListener('fetch', function (e) {
  console.info('fetch', e);

  if (e.request.url.indexOf('test') != -1) {
    e.respondWith(new Response('Hellow world'));
  }
});
