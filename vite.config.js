import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/edu-frontend/',  // 👈 this MUST match your GitHub repo name
  plugins: [react()],
})
