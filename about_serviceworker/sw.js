//ネットワーク リクエスト時の呼び出し
self.addEventListener('fetch', (e) => {
  e.respondWith(
    cachs.match(e.request).then(response =>
      response ? reponse : fetch(e.request)
    )
  )
})
