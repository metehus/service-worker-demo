/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope

console.log('Hello World from Service Worker!')

self.addEventListener('install', () => {
  console.log('Service worker instalado!')
})

self.addEventListener('activate', () => {
  console.log('Service worker ativado!')
  self.clients.claim()
})

export default null