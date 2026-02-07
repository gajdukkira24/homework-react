import { defineConfig } from 'vite'        // <- ОБОВ'ЯЗКОВО
import react from '@vitejs/plugin-react'  // <- для React

export default defineConfig({
  base: '/homework-react/',  // <- важливо для GitHub Pages
  plugins: [react()],
})
