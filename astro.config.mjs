// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.deploshark.com',
  integrations: [sitemap()],
  markdown: {
    // Un solo tema de código (siempre oscuro) en vez del dual light/dark de
    // Shiki: ese modo depende de `prefers-color-scheme` del SO, no de
    // nuestro toggle manual, así que quedaba desincronizado con el tema
    // del sitio. Dracula fijo es más simple y consistente.
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
});
