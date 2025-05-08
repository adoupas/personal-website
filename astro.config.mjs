// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://adoupas.github.io',
  // Use '/personal-website' in production, '/' in development
  // We use import.meta.env which is supported by Vite/Astro
  base: import.meta.env.PROD ? '/personal-website' : '',
  vite: {
    build: {
      assetsInlineLimit: 4000,
    }
  },
});
