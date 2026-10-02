---
title: Rebuilding Woodfox on Astro
date: 2026-10-01
project: woodfox-roasters
status: live
tags: [web, astro, content]
summary: Third version of the Woodfox site. Coffees are now Markdown files with a status, so the menu can change with the harvest without touching layout.
images:
  - { src: ../../assets/projects/woodfox-sourcing.png, alt: "The Woodfox Roasters sourcing page" }
---

Rebuilt woodfoxroasters.com on Astro.

The big change is structural: each coffee is now a Markdown file with a status (`upcoming`, `available`, `sold-out`). Pages and listings generate from those files. Until the first coffee is published, a "coming soon" panel shows automatically.

Other things that changed:

- Forms validate and then **say plainly that nothing was sent** until an endpoint is connected. No fake "thanks!"
- Checkout is designed as a per-coffee hosted link (Stripe or Shopify), so there's no cart or backend to maintain yet.
- About 3 KB of JavaScript for the whole site.

One bug worth writing down: the production build silently dropped *all* CSS because the project lived in a redirected folder. The dev server was fine. Fix was `vite.resolve.preserveSymlinks: true`. Took longer to find than to fix.
