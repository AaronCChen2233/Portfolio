import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'Portfolio/',
  server: {
    host: true,
    port: 5174
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          i18n: ['vue-i18n'],
          gsap: ['gsap']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-i18n', 'gsap']
  }
})
