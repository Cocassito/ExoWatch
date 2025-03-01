import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.html',  
      chunkSizeWarningLimit: 1000  // Augmente la limite à 1 Mo, par exemple

    },
  },
});
