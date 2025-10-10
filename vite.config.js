import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Africa Job Agency',
        short_name: 'Africa Job',
        description: 'Application de gestion en PWA',
        theme_color: '#211ee0ff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/logo.jpeg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo.jpeg',
            sizes: '512x512',
            type: 'logo/jpeg'
          }
        ]
      }
    })
  ]
})
