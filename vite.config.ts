import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirige las solicitudes que comienzan con "/api" al backend
      '/api': {
        target: 'http://localhost:3000', // Dirección del backend
        changeOrigin: true,  // Cambia el origen de las solicitudes
        rewrite: (path: string) => path.replace(/^\/api/, '')  // Elimina "/api" del comienzo de la URL
      }
     
  }
  }
  })
