---
title: Woodfox Coffee Gets a Shop (in Preview)
date: 2026-10-04
project: woodfox-roasters
status: live
tags: [web, ecommerce, astro]
summary: Renamed to Woodfox Coffee and added a shop, product pages, a cart and subscribe-and-save, all clearly marked as preview until real products and payments are ready.
images:
  - { src: ../../assets/projects/woodfox-product.png, alt: "A Woodfox product page with size, grind and subscribe-and-save options. Placeholder product." }
---

Two changes to the Woodfox site today.

**The name.** Woodfox Roasters is now **Woodfox Coffee** across the site.

**A shop, honestly labeled.** The first coffees aren't roasted yet, but the shop is built so it's ready when they are:

- Filterable shop page and product pages with size, grind, and one-time or subscribe-and-save (15%)
- Placeholder bag artwork drawn in code, so the layout works before product photography exists
- A cart stored in the visitor's browser: no accounts, no database, no server
- A checkout page that hands off to a hosted payment page through a configurable endpoint

A preview notice sits on every shop page: products are placeholders and checkout isn't taking payments. When real coffees exist, payments will go through a small serverless function, so the secret key never lives in the website.
