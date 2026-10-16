---
title: NFC Digital Business Cards
summary: Tap-to-open business cards for three different clients, each built into the client's own website. One-tap Save Contact, no app, no account, and phone numbers kept off the public web.
status: live
year: "2026"
type: Web product · client work
categories: [web]
tech: [Astro, Static HTML, vCard 3.0, NFC (NTAG), Build-time generation, Privacy by design]
cover: ../../assets/projects/nfc-cards-cover.png
coverAlt: Three digital business cards side by side on phone screens, a dark technical card, a navy logistics card and a brown coffee-brand card, with names, emails and numbers replaced by placeholders.
gallery:
  - src: ../../assets/build/card-portfolio.png
    alt: A dark digital business card with a JP monogram, Save contact button, email and website rows, and LinkedIn, GitHub and Portfolio links. Personal details replaced with placeholders.
    caption: "My own card: matches this site's design. Personal details replaced for this screenshot."
    narrow: true
  - src: ../../assets/build/card-professional.png
    alt: A navy digital business card for a logistics account executive, with initials, industry and specialty panels, Save Contact, and call, email, LinkedIn and website buttons. Personal details replaced.
    caption: A logistics professional's card, with work and personal contact sections. Details replaced.
    narrow: true
  - src: ../../assets/build/card-woodfox-event.png
    alt: A brown Woodfox Coffee event-team card with a flowing silk background, Save Contact, call, email and website buttons, and a QR code. Contact details replaced.
    caption: A shared event-team card for a coffee brand, with no personal details at all. Details replaced.
    narrow: true
workflowTitle: How a tap becomes a saved contact
workflow:
  - "NFC tag | holds only a URL"
  - "Card page | static, noindex, no app"
  - "Save Contact | vCard 3.0 file"
  - "Phone contacts | one tap to add"
featured: false
order: 6
---

## Overview

A physical NFC card that opens a digital business card when someone taps it with their phone. One tap on **Save Contact** adds you to their phone. No app, no account, no subscription service.

I built three versions in October 2026, each living inside its owner's existing website and matching its design:

- **My own card**, built into this site
- **A logistics account executive's card**, with separate work and personal contact sections
- **A coffee brand's cards**: one for the owner, plus three shared **event-team** cards that carry only business details, so staff can hand them out at markets and events

The screenshots above have every name, email and phone number replaced with placeholders.

## The Problem

Paper cards get lost, and most "digital business card" products are subscriptions that host your contact details on someone else's platform. Typing a phone number from a card into Contacts is exactly the kind of small, repeated friction that should just go away.

## The Idea

The NFC tag holds nothing but a URL. Everything else is an ordinary, fast, static web page on a domain the person already owns, with a standards-based contact file behind the Save button. If the tag is lost, nothing private is on it.

## What I Built

- **One-tap Save Contact.** A vCard 3.0 file generated at build time. Version 3.0 because iPhone Contacts handles it more reliably than 4.0. Line folding and escaping follow the spec, so contacts import cleanly.
- **Reusable profile data.** Each card is one entry in a typed list. Adding a person means adding an entry, not copying a page.
- **Unlisted pages.** Cards are `noindex`, left out of the sitemap, and not linked from site navigation.
- **Design that matches each brand.** A dark technical card, a navy logistics card with an animated silk background, and copper-and-brown coffee cards with flowing ribbons, all with reduced-motion fallbacks.
- **A private phone number on a public static site.** See below.

## Keeping Phone Numbers Private

A static site can't check passwords, and these repositories are public, so a phone number in the code is a public phone number.

The number isn't in the code at all. It's injected at build time from repository secrets and published only at an unguessable path derived from a private key. The NFC tag carries that key after a `#` in the URL. Browsers never send that part to the server, so it doesn't show up in logs or search results. With the key, the card fetches the number and a full contact file. Without it, the card simply has no phone number.

Changing the key retires every old link.

## Challenges

- **Static hosting, private data.** Solved with build-time secrets and key-derived file paths instead of a server.
- **QR codes.** I added build-time QR codes, then removed them from the personal cards. An always-visible QR code makes the card easy to re-share in ways the owner didn't intend.
- **An animation bug.** A global CSS reset capped the silk-ribbon SVGs at 100% width, so the looping ribbons slid off screen and jumped back. Fixed by overriding the reset for those elements.
- **Mobile edge cases.** iPhone and Android handle contact files differently, and NFC behaves differently with the screen locked. Every card was checked at phone sizes, with reduced-motion fallbacks where they animate.

## What's Next

- **Contact exchange** (planned): an optional "Exchange Contact" form so the person tapping can share their details back, delivered by email through a free form backend, with consent and spam protection. Designed, not built yet.
- More event cards as the coffee brand starts doing markets
