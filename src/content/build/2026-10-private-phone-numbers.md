---
title: Keeping a Phone Number Off the Public Web
date: 2026-10-15
project: nfc-cards
status: live
tags: [privacy, security, static-sites]
summary: A business card needs a phone number, but a static site in a public repo can't keep secrets. Here's how the number stays private anyway, and why I removed the QR code.
---

The first version of my NFC card had the phone number right in the page. Then I realized the obvious: the repository is public, the page is public, and anything on it can be scraped.

The constraint: static hosting, so no server and no login.

The approach:

1. **The number isn't in the code.** It comes from repository secrets at build time.
2. **It's published only at an unguessable path**, derived by hashing the card's id with a private key.
3. **The NFC tag carries the key** after a `#` in the URL. Browsers never send that part to the server, so it never appears in logs or search results.
4. **With the key**, the card fetches the number and a full contact file. Without it, there's simply no phone number on the card.

Rotating the key retires every old link: generate a new one, rebuild, rewrite the tag.

I also **removed the QR code**. It was a nice touch, but an always-visible QR code makes the card easy to pass around in ways the owner didn't choose. A tap from a card in your hand is more deliberate.

Honest limitation: anyone you share the link with can forward it. This doesn't make a number secret. It keeps it off the open web and out of search engines, which is the actual goal.
