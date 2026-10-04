---
title: Woodfox Coffee
summary: Website and shop for a young specialty coffee company. Four versions in 2026, from a hand-built page to a content-driven site with a shop, cart and subscriptions in preview.
status: live
statusNote: Shop in preview
year: "2026"
type: Web product · ecommerce
categories: [web]
tech: [Astro, TypeScript, CSS, Markdown content, Browser-stored cart, Stripe-ready checkout]
links:
  - { label: Visit live site, href: "https://woodfoxroasters.com/", primary: true }
  - { label: View on GitHub, href: "https://github.com/JRPENA99/woodfox-roasters" }
cover: ../../assets/projects/woodfox-home.png
coverAlt: Woodfox Coffee homepage with a full-bleed photo of coffee cherries and the headline "Thoughtfully selected. Roasted with intention."
gallery:
  - src: ../../assets/projects/woodfox-shop.png
    alt: The Woodfox shop page with filters and a preview notice explaining products are placeholders and checkout isn't taking payments yet.
    caption: Shop, with an up-front preview notice.
  - src: ../../assets/projects/woodfox-product.png
    alt: A Woodfox product page with size, grind, one-time or subscribe-and-save options, quantity and Add to cart.
    caption: Product page with size, grind and subscribe-and-save. Placeholder product.
timeline:
  - when: Mar 2026
    title: "Version one: hand-built"
    body: A single hand-edited HTML and CSS site under the name Woodfox Roasters, with a hero video, product photos and a custom domain. It shipped, but every change meant editing markup, and a dozen commits in a row went to nudging the header logo.
    image: ../../assets/projects/woodfox-v1.png
    alt: The March 2026 Woodfox Roasters homepage with a large bold headline over a coffee photo.
    caption: March 2026, rendered from git history.
  - when: Sep 2026
    title: "Version two: a new voice"
    body: A redesigned landing page that moved from loud, all-caps type to an editorial serif and a calmer palette. The look got closer, but it was still static pages.
    image: ../../assets/projects/woodfox-v2.png
    alt: The September 2026 Woodfox homepage with a serif headline over coffee cherries on the branch.
    caption: September 2026, rendered from git history.
  - when: Oct 2026
    title: "Version three: rebuilt on Astro"
    body: Rebuilt as a content-driven site. Each coffee is a Markdown file with a status, so the menu changes with the harvest without touching the layout. Forms say plainly when nothing was sent, and the whole site ships about 3 KB of JavaScript.
    image: ../../assets/projects/woodfox-v3.png
    alt: The October 2026 Woodfox Roasters homepage built on Astro.
    caption: October 1, 2026.
  - when: Oct 2026
    title: "Woodfox Coffee: shop in preview"
    current: true
    body: Renamed to Woodfox Coffee and added commerce, clearly marked as preview. Products, prices and bag art are placeholders, and checkout explains that payments aren't live.
    points:
      - Filterable shop and product pages with size, grind, and subscribe-and-save (15%)
      - Cart stored in the visitor's browser, so no accounts or server are needed
      - Checkout hands off to a hosted payment page through a configurable endpoint, so card details never touch the site
      - "Next: real products, then Stripe through a small serverless function"
featured: true
order: 1
---

## Overview

Woodfox Coffee is a young specialty coffee company. The site has to introduce the brand, explain how the coffees are chosen, collect interest before the first release, give wholesale buyers a way in, and, now, sell coffee.

It went through four versions in 2026, shown in the progression above. Each one was a response to what the previous one got wrong.

## The Problem

A roaster that buys by season has a menu that keeps changing. The early versions were hand-built pages, so every change to the lineup meant editing markup, and the copy leaned on generic coffee language.

## The Idea

Treat the site as a brand story that rarely changes, plus a small content system for the coffees that changes all the time. Then add commerce without adding a backend: the shop and cart run in the browser, and payment happens on a hosted checkout page.

## What I Built

- **Information architecture** around how people arrive: Shop, Coffee, Sourcing, About, Wholesale, Contact.
- **A coffee content collection.** One Markdown file per coffee, with a status (`upcoming`, `available`, `sold-out`) that drives listings and pages.
- **A shop in preview mode.** Product pages with size, grind and subscribe-and-save; a browser-stored cart; and a checkout page ready to hand off to Stripe or another hosted provider. A visible notice on every shop page says products are placeholders and no payment can be taken.
- **Copy refinement.** Most of the iteration was in the words. "How we choose" became five short principles instead of a paragraph of adjectives.
- **Fast, responsive pages.** Static HTML with very little JavaScript, plus a pause control on the hero video.

## Ecommerce Considerations

GitHub Pages only serves static files, and a payment provider needs a small piece of server code to create a checkout session securely. The plan is a tiny serverless function that holds the secret key, so the website itself never does. Until real products exist, the checkout says so instead of pretending.

## Challenges

- **Restraint.** Coffee branding tends toward the same visual clichés. Most of the design work was removing things.
- **Truthful copy and commerce.** No sourcing claims the business can't stand behind, and no shop that looks like it takes orders when it doesn't.
- **A build bug worth remembering.** The production build silently dropped all CSS when the project sat inside a redirected folder. The fix was one Vite setting (`preserveSymlinks`); finding it meant comparing dev and production output file by file.

## What I Learned

Separating what changes from what doesn't was the best structural decision. Once coffees and products were data, the design could stay quiet and the business could move at the speed of the harvest.

## What's Next

- Replace placeholder products and photography with Woodfox's own
- Connect the list and inquiry forms
- First coffee release, then switch on hosted checkout
