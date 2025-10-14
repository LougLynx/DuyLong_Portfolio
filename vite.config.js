import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses
    allowedHosts: [
      '.ngrok-free.dev', // Allow all ngrok domains
      '.ngrok.io',       // Legacy ngrok domains
    ],
  },
})

