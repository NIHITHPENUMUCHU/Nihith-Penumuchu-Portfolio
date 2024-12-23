import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit to 1000 KB
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Group node_modules in a separate chunk for better cacheability
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
