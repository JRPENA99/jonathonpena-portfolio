---
title: Woodfox Roasters
summary: Website for a young specialty coffee roaster, rebuilt three times as the brand found its voice. Static, fast, and structured so the menu can change with the harvest.
status: live
year: "2026"
type: Web product
categories: [web]
tech: [Astro, TypeScript, CSS, Markdown content, Responsive design]
links:
  - { label: Visit live site, href: "https://woodfoxroasters.com/", primary: true }
  - { label: View on GitHub, href: "https://github.com/JRPENA99/woodfox-roasters" }
cover: ../../assets/projects/woodfox-home.png
coverAlt: Woodfox Roasters homepage with a full-bleed photo of coffee cherries and the headline "Thoughtfully selected. Roasted with intention."
workflowTitle: How a coffee gets onto the site
workflow:
  - "Markdown file | one file per coffee"
  - "Status | upcoming · available · sold out"
  - "Coffee page | generated automatically"
  - "Listings | homepage + coffee page update"
  - "Checkout | hosted link, when ready"
featured: true
order: 1
---

## Overview

Woodfox Roasters is a young specialty coffee company. The site has to do a few jobs at once: introduce the brand, explain how the coffees are chosen, let people join a list before the first release, and give wholesale buyers a way to get in touch. Later it needs to sell coffee.

It went through three versions in 2026: a quick static first site in March, a redesigned landing page in September, and a full rebuild on Astro in October. Each one was a response to what the previous one got wrong.

## The Problem

The first version looked like a coffee site but didn't say much. It leaned on product photos and generic coffee language, and it was built as one hand-edited HTML page, so every change to the lineup meant editing markup.

A roaster that buys by season has a menu that keeps changing. The site needed to make that a feature of the brand rather than a maintenance problem.

## The Idea

Treat the site as two things: a brand story that rarely changes, and a small content system for the coffees that changes all the time.

The brand side should be calm, editorial and specific: why these coffees, how they're chosen, what "seasonal" actually means. The coffee side should be data: one file per coffee, with a status, so adding, releasing or retiring a coffee never touches the layout.

## What I Built

- **Information architecture** around how people actually arrive: Coffee, Sourcing, About, Wholesale, Contact, plus a persistent "Join the list".
- **A coffee content collection.** Each coffee is a Markdown file with origin, process, tasting notes and a status (`upcoming`, `available`, `sold-out`). Pages and listings generate from it, and a "coming soon" panel shows automatically until the first coffee is published.
- **A sourcing page** that explains the buying approach in plain terms, with a harvest-season calendar marked clearly as general, approximate guidance rather than a claim about specific purchases.
- **Copy refinement.** Most of the iteration was in the words. "How we choose" became five short principles (quality, character, season, availability, freshness) instead of a paragraph of adjectives.
- **Responsive, fast pages.** The site builds to static HTML with about 3 KB of JavaScript, and the full-bleed hero video has a pause control.

## How It Works

Astro builds every page at deploy time. Content lives in Markdown with a typed schema, so a missing field just hides that row instead of breaking the page. Site settings (email, location, form endpoints, navigation) live in one config file.

## Ecommerce Considerations

Checkout isn't live yet, and that's deliberate. The site is structured so each coffee can carry a hosted checkout link (Stripe Payment Links or Shopify). When a coffee is `available` and has a link, its page shows a Buy button. That keeps the site free of a backend, a cart, or stored payment details until the business actually needs them.

The forms work the same way: they validate input today and tell the visitor plainly that nothing was sent, until a form endpoint is connected. No fake success messages.

## Challenges

- **Restraint.** Coffee branding tends toward the same visual clichés. Most of the design work was removing things.
- **Truthful copy.** It's easy to write "ethically sourced, direct trade" on a coffee site. I kept every sourcing claim to what the business can actually stand behind.
- **A build bug worth remembering.** The production build silently dropped all CSS when the project sat inside a redirected folder. The fix was one Vite setting (`preserveSymlinks`), but finding it meant comparing dev and production output file by file.

## What I Learned

The best structural decision was separating what changes from what doesn't. Once the coffees were data, the design could stay quiet and the business could move at the speed of the harvest.

## What's Next

- Replace placeholder photography with Woodfox's own
- Connect the list and inquiry forms
- First coffee release, then hosted checkout
