import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      srcDir: 'src',
      filename: 'serviceWorker.ts',
      injectRegister: null,
      strategies: 'injectManifest',
      devOptions: {
        enabled: true,
        type: 'module'
      },
      manifest: false,
      injectManifest: {
        injectionPoint: null,
      },
    })
  ],
  server: {
    port: 3030
  }
})
