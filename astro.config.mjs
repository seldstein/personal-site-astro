import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://samfeldstein.xyz',
    vite: {
        css: {
          transformer: "sass",
        },
      },
});