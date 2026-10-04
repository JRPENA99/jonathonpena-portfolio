---
title: The CRM Is a Working App Now
date: 2026-10-04
project: crm
status: building
tags: [sales-tech, product, pwa, typescript]
summary: Two days after the clickable concept, the CRM has real accounts, a database, a Today view built around daily routines, and push reminders that arrive even when the app is closed. Not launched yet.
images:
  - { src: ../../assets/projects/crm-today.png, alt: "The CRM's Today view with tasks, a daily routine and pipeline value. Sample data." }
---

The CRM went from a front-end mockup to a working application.

The biggest change from the concept: the home screen is no longer the pipeline. It's **Today**: what's due, what's overdue, and a short *daily routine* of habits like "review today's follow-ups" that resets each morning and keeps a streak. Building the mockup made it obvious that's what an independent rep actually opens the app for.

What exists now:

- Sign-up, login, password reset, data export and account deletion
- Today view, pipeline board, accounts with notes, tasks
- **Push reminders** at a set time, even with the app closed, in each user's own time zone
- Installable on a phone as an app (PWA)
- Stripe billing wired in but switched off
- Docker setup with health check and daily backups

What doesn't exist yet: a public URL, a real name ("Dayline" is a placeholder), pricing, and legal pages. That's the pre-launch list.

Stack: Astro in server mode, TypeScript, SQLite via Node's built-in driver. No UI framework.

The original concept is still in the [Lab](/lab/crm-concept-prototype/) for comparison.
