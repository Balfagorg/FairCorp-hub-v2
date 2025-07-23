import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': './src',
    },
  },
  server: {
    port: 3000,
    host: true, // Allow connections from all hosts
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Optimized for production deployment
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  publicDir: 'public',
  base: '/',
}) 