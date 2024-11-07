import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Desarrollar sin la subcarpeta
  build: {
    outDir: 'dist',
  }
});
