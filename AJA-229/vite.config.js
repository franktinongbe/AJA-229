import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'AJA 229 - Recrutement & RH',
        short_name: 'AJA229',
        description: 'Solution de recrutement et gestion RH au Bénin',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'flavicon.ico',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon.ico',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})