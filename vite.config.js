import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/static_pages_portifolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hub: resolve(__dirname, 'portfolio-hub/index.html'),
        agency: resolve(__dirname, 'landing-pages/agency-software/index.html'),
        crm: resolve(__dirname, 'landing-pages/saas-crm/index.html'),
        restaurant: resolve(__dirname, 'landing-pages/restaurant/index.html'),
        clothing: resolve(__dirname, 'landing-pages/clothing-store/index.html'),
        education: resolve(__dirname, 'landing-pages/education-institution/index.html')
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    port: 5173
  }
});
