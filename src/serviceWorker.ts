/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope

console.log('Hello World from Service Worker!')

const cacheKey = 'app-precache'

self.addEventListener('install', (event) => {
  console.log('Service worker instalado!')

  event.waitUntil(caches.open(cacheKey).then(async (cache) => {
    for (const cacheItem of await cache.keys()) {
      await cache.delete(cacheItem)
    }

    await cache.addAll([
      '/vite.svg',
      '/vue.svg',
      '/react.svg',
    ])
  }))
})

self.addEventListener('activate', () => {
  console.log('Service worker ativado!')
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(async (response) => {
      if (response) {
        return response
      } else {
        return fetch(event.request)
      }
    })
  )
})

export default null