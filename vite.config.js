import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.html',  // Assurez-vous que le chemin de votre fichier index.html est correct
    },
  },
});
