import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: '/DYNA/', // Change this to your repository name
  server: {
    port: 3000,
    open: true
  },
  build: {
    assetsDir: 'assets',
    outDir: 'dist'
  }
})
