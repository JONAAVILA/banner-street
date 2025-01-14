import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: 'https://pasacalleslamancha.com.ar',
  integrations: [
    react(),
    sitemap({
      hostname:'https://pasacalleslamancha.com.ar',
      lastmod: new Date(),
      priority: 1,
    })
  ]
});
