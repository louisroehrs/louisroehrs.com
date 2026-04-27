import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://louisroehrs.com',
  vite: {
    server: {
      watch: {
        ignored: ['**/#*.*#', '**/node-modules/**','**/temp-folder/**'], //
      },
    },
  },

});
