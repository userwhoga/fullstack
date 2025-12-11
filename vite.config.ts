import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/testSetup.ts']
  },
  server: {
    port: 5173,
    // Proxy для API запросов (опционально, но удобно для разработки)
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
      '/login': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      }
    }
  }
})







