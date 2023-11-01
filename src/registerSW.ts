// https://vite-pwa-org.netlify.app/guide/service-worker-without-pwa-capabilities.html


export function registerSW() {
  const isProd = import.meta.env.MODE === 'production'
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(
      isProd ? '/service-worker.js' : '/dev-sw.js?dev-sw',
      {
        type: isProd ? 'classic' : 'module'
      }
    )
  }
}