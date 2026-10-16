---
title: Woodfox Coffee
summary: Website for a young specialty coffee company, now on its own domain and getting ready to launch. Five versions in 2026, from a hand-built page to a production-ready site with packaging concepts, a plainer voice and NFC event cards.
status: live
statusNote: Pre-launch · ordering off
year: "2026"
type: Web product · ecommerce
categories: [web]
tech: [Astro, TypeScript, CSS, Markdown content, Browser-stored cart, Stripe-ready checkout]
links:
  - { label: Visit live site, href: "https://woodfoxcoffee.com/", primary: true }
  - { label: View on GitHub, href: "https://github.com/JRPENA99/woodfox-roasters" }
cover: ../../assets/projects/woodfox-home.png
coverAlt: Woodfox Coffee homepage with a full-bleed photo of coffee cherries and the headline "Coffee you can actually taste."
gallery:
  - src: ../../assets/projects/woodfox-packaging.png
    alt: The Woodfox Coffee site showing a Single Origin bag mockup labeled In Development and Not on sale yet, with House Blend No. 01 and Espresso Blend listed below.
    caption: Packaging concepts, clearly labeled as in development and not on sale.
  - src: ../../assets/build/card-woodfox-event.png
    alt: A Woodfox Coffee event-team NFC card with Save Contact, call, email and website buttons. Contact details replaced with placeholders.
    caption: Shared event-team NFC card. Contact details replaced for this screenshot.
    narrow: true
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
    body: Renamed to Woodfox Coffee and added commerce, clearly marked as preview. Products, prices and bag art are placeholders, and checkout explains that payments aren't live.
    points:
      - Filterable shop and product pages with size, grind, and subscribe-and-save (15%)
      - Cart stored in the visitor's browser, so no accounts or server are needed
      - Checkout hands off to a hosted payment page through a configurable endpoint, so card details never touch the site
      - "Next: real products, then Stripe through a small serverless function"
    image: ../../assets/projects/woodfox-shop.png
    alt: The Woodfox shop page in preview mode, with a notice that products are placeholders and checkout isn't taking payments.
    caption: October 4, 2026. The preview shop.
  - when: Oct 2026
    title: Getting ready to launch
    current: true
    body: Moved to woodfoxcoffee.com and prepared for production. Packaging mockups replaced the drawn placeholders, the palette shifted to forest, rust and copper, and every page was rewritten in a plainer, more human voice. Online ordering is switched off behind a config flag until payments are approved.
    points:
      - Three packaging concepts, labeled in development and not on sale
      - Copy rewrite with no new factual claims
      - Separate inboxes for general inquiries and orders
      - NFC cards for the owner and a shared event team
    image: ../../assets/projects/woodfox-home.png
    alt: The current Woodfox Coffee homepage with the headline "Coffee you can actually taste." over coffee cherries.
    caption: woodfoxcoffee.com today.
featured: true
order: 1
---

## Overview

Woodfox Coffee is a young specialty coffee company. The site has to introduce the brand, explain how the coffees are chosen, collect interest before the first release, give wholesale buyers a way in, and, now, sell coffee.

It went through five versions in 2026, shown in the progression above. Each one was a response to what the previous one got wrong.

## The Problem

A roaster that buys by season has a menu that keeps changing. The early versions were hand-built pages, so every change to the lineup meant editing markup, and the copy leaned on generic coffee language.

## The Idea

Treat the site as a brand story that rarely changes, plus a small content system for the coffees that changes all the time. Commerce is built but switched off until the business is ready: the shop and cart run in the browser, and payment will happen on a hosted checkout page.

## What I Built

- **Information architecture** around how people arrive: Shop, Coffee, Sourcing, About, Wholesale, Contact.
- **A coffee content collection.** One Markdown file per coffee, with a status (`upcoming`, `available`, `sold-out`) that drives listings and pages.
- **A shop, built and switched off.** Product pages with size, grind and subscribe-and-save, a browser-stored cart, and a checkout ready to hand off to a hosted provider. It sits behind a config flag, so the live site shows coffees with no prices, cart or checkout until payments are approved.
- **Packaging concepts** for three coffees, labeled in development and never presented as product specs.
- **NFC cards** for the owner and a shared event team. See [NFC Digital Business Cards](/projects/nfc-cards/).
- **Copy refinement.** Most of the iteration was in the words. "How we choose" became five short principles instead of a paragraph of adjectives.
- **Fast, responsive pages.** Static HTML with very little JavaScript, plus a pause control on the hero video.

## Ecommerce Considerations

GitHub Pages only serves static files, and a payment provider needs a small piece of server code to create a checkout session securely. The plan is a tiny serverless function that holds the secret key, so the website itself never does. Until that's approved, ordering stays off rather than pretending to work.

## Challenges

- **Restraint.** Coffee branding tends toward the same visual clichés. Most of the design work was removing things.
- **Truthful copy and commerce.** No sourcing claims the business can't stand behind, and no shop that looks like it takes orders when it doesn't.
- **A build bug worth remembering.** The production build silently dropped all CSS when the project sat inside a redirected folder. The fix was one Vite setting (`preserveSymlinks`); finding it meant comparing dev and production output file by file.

## What I Learned

Separating what changes from what doesn't was the best structural decision. Once coffees and products were data, the design could stay quiet and the business could move at the speed of the harvest.

## What's Next

- Finalize the first three coffees and their packaging
- Connect the inquiry forms to a form service
- Approve payments, then switch ordering on
