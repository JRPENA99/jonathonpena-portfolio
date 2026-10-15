// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jonathonpena.dev',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Business cards (/card) are unlisted: noindex and kept out of the sitemap.
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/card') })],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // Same guard as the Woodfox repo: keeps CSS from being dropped when the
  // project lives in a redirected/symlinked folder. Harmless elsewhere.
  vite: { resolve: { preserveSymlinks: true } },
});
