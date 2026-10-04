---
title: Content Engine Gets a Web App (and Loses Its Rain)
date: 2026-10-04
project: content-engine
status: building
tags: [web, astro, python, product]
summary: The render engine now sits behind a web app with accounts, a project editor and a render queue. The masked rain overlay came out of the public samples because it didn't look right yet.
---

Content Engine is now a product you can click through, locally:

- **Marketing site** with feature labels that say what works and what's "coming soon"
- **Accounts:** sign up, sign in, verification, password reset
- **Creator app:** dashboard, project editor (scene, overlays, audio, length, resolution, fades, vertical framing), render history
- **Render queue:** "Generate" queues a job, a Python worker renders it and reports live progress, and the owner downloads the MP4 through an access-checked route

The web app (Node) and the worker (Python) share one SQLite database. That keeps the first deployment to a single machine, with a clear path to Postgres and a hosted queue later.

**The rain problem.** Composited through the window mask, the rain overlay left patchy drops on the glass. Instead of shipping samples that looked wrong, the site samples now use the clean scene with camera motion only, and the overlay goes back on the list.

Not built yet: hosting, uploads, payments. Pricing on the site says "Coming soon" because nothing can be bought.
