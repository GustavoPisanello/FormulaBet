import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/src/data/menulinkData.json'],
      external: ['/src/data/newsData.json'],
      external: ['/src/data/pilotsBetData.json'],
      external: ['/src/data/raceData.json']
    },
  },
});
