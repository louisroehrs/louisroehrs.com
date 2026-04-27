import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://louisroehrs.com',
  outDir: './docs',
  vite: {
    server: {
      watch: {
        ignored: ['**/#*.*#', '**/node-modules/**','**/temp-folder/**'], //
      },
    },
  },

});
