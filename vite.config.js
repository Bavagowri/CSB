import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'], // Include all image types in src
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure this matches your entry point
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Output assets to dist/assets/
      },
    },
  },
});