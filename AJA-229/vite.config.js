import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ⚠️ Remplace '/app/' par le sous-dossier exact où tu déploies
export default defineConfig({
  plugins: [react()],
  base: '/', // Si ton site est à la racine du domaine, mets '/'
  build: {
    outDir: 'build',
  },
});
