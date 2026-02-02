import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/Dyna-LandingPage/' : '/'
  
  return {
    plugins: [react()],
    publicDir: 'public',
    base, // Use '/Dyna-LandingPage/' for production, '/' for development
    define: {
      // Define BASE_URL as a constant that will be replaced at build time
      '__BASE_URL__': JSON.stringify(base)
    },
    server: {
      port: 3000,
      open: true
    },
    build: {
      assetsDir: 'assets',
      outDir: 'dist'
    }
  }
})
