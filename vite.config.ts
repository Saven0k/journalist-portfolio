import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/journalist-portfolio/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('framer-motion')) {
              return 'vendor';
            }
            if (id.includes('sass')) {
              return 'styles';
            }
          }
          if (id.includes('src/components')) {
            return 'components';
          }
        }
      }
    }
  }
})