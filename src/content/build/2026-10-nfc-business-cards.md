---
title: Business Cards You Tap Instead of Type
date: 2026-10-14
project: nfc-cards
status: live
tags: [web, nfc, vcard, astro]
summary: Built tap-to-open NFC business cards into three different client sites, a tech card, a logistics card and a coffee brand's event-team cards, each with one-tap Save Contact.
images:
  - { src: ../../assets/projects/nfc-cards-cover.png, alt: "Three NFC digital business cards side by side, with personal details replaced by placeholders." }
---

This week's thread: NFC business cards.

A physical card holds a single URL. Tap it with a phone and a digital card opens, with one big **Save Contact** button that drops a contact file straight into the phone's address book. No app, no account, no subscription platform holding anyone's details.

Three versions so far, each built into its owner's own website:

- **Mine**, at `/card` on this site, in the same dark, technical style
- **A logistics account executive's card**, navy with an animated silk background and separate work and personal sections
- **A coffee brand's cards**: one for the owner, plus three shared event-team cards with only business details, for markets and pop-ups

A few decisions worth writing down:

- **vCard 3.0, not 4.0.** iPhone Contacts is more reliable with 3.0. Lines are folded at 75 octets and special characters escaped, per the spec.
- **One data file per person.** Adding a card is adding an entry, not copying a page.
- **Unlisted by default.** No search indexing, no sitemap, no nav links.

Names, numbers and emails in the screenshot are placeholders.
