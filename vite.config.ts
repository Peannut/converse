import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// changing the port
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005
  }
})
