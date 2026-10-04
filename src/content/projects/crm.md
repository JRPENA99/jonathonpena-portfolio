---
title: Independent CRM
summary: A lightweight, phone-first CRM for independent salespeople and small teams, built around the salesperson's day. Now a working app with accounts, a pipeline, tasks and push reminders. Pre-launch.
status: building
statusNote: Working app · pre-launch
year: "2026"
type: SaaS product
categories: [sales-tech, data, web]
tech: [Astro (server mode), TypeScript, SQLite, PWA, Web Push, Stripe, Docker]
cover: ../../assets/projects/crm-today.png
coverAlt: The CRM's Today view showing due and overdue tasks, a daily routine with reminder times and a streak, and open pipeline value. Sample data.
gallery:
  - src: ../../assets/projects/crm-pipeline.png
    alt: The CRM's pipeline board with deals in Prospect, Qualified, Proposal and Negotiation columns, each with a value and next step. Sample data.
    caption: Pipeline board. Deals move a stage with one tap, and overdue next steps are flagged.
  - src: ../../assets/projects/crm-mobile.png
    alt: The CRM's Today view on a phone, with tabs for Today, Pipeline, Accounts and Tasks. Sample data.
    caption: Phone-first, installable as an app from the browser.
    narrow: true
workflowTitle: Where it fits
workflow:
  - "Lead Engine | finds & ranks accounts"
  - "Qualified account | with research attached"
  - "CRM | contacts, notes, context"
  - "Pipeline | stage & value"
  - "Today | follow-ups that happen"
featured: true
current: true
order: 4
---

## Overview

A lightweight CRM for people who sell on their own or in small teams: independent reps, young entrepreneurs, small sales teams, and anyone graduating from a spreadsheet.

It started as a [clickable front-end concept](/lab/crm-concept-prototype/) on this site. It's now a **working application** with real accounts, a database and push reminders. It is **not launched yet**: it isn't hosted publicly, billing is switched off, and the product name ("Dayline" in the screenshots) is a placeholder.

All screenshots use sample data. The companies and people are invented.

## The Problem

Enterprise CRMs are built around the database and the manager's report. For an independent salesperson they're heavy, expensive, and full of fields nobody fills in. So people fall back to spreadsheets, which are flexible but forget everything: no reminders, no history, no sense of what's next.

## The Idea

Build the CRM around the salesperson's day instead of the database. Three questions, answered fast:

- **What do I need to do today?**
- **Where is each deal?**
- **What do I know about this account?**

And make it work on a phone, because that's where follow-ups actually happen.

## What I've Built

- **Today view.** Due and overdue tasks first, plus a *daily routine*: recurring habits like "review follow-ups" that reset each morning and track a streak.
- **Push reminders.** Set a time on a task or routine and a notification arrives at that time, even when the app is closed. The server checks every minute in each user's own time zone.
- **Pipeline board.** Deals move between stages in one tap, with stage totals and next steps on every card.
- **Accounts.** Searchable list, with notes, tasks, and call/email buttons on each account.
- **Accounts and security.** Sign-up, login, password reset, and settings to export your data or delete your account. Passwords are hashed with scrypt, sessions are random tokens stored hashed in an httpOnly cookie, and forms have cross-site and rate-limit protection.
- **Installable app (PWA).** Add it to a phone's home screen and it opens full-screen with its own icon.
- **Billing, built but off.** Stripe Checkout, the customer portal and webhooks are wired up but stay disabled until pricing is decided.
- **Hosting-ready.** A Dockerfile, health check, and daily database backups, ready for a host with a persistent disk.

## How It Works

Astro runs in server mode with the Node adapter, in plain TypeScript with no UI framework. Data lives in SQLite using Node's built-in driver, with every query kept in one place so a later move to hosted Postgres stays contained. The same workspace script renders both the real app and the sample-data demo on its homepage.

## Challenges

- **Scope.** Every CRM wants to become every CRM. The hardest part is deciding what to leave out.
- **Speed of updates.** If moving a deal or logging a call takes more than a couple of seconds, people stop doing it.
- **Web push on iPhone.** Apple only delivers web push to apps added to the Home Screen, so onboarding has to explain that step clearly.
- **Data model vs. user model.** The schema serves the workflow, not the other way around.

## What's Next

Pre-launch checklist, in order:

1. Pick the real name and domain
2. Host it publicly with a persistent disk (or move to hosted Postgres)
3. Connect transactional email for password resets
4. Decide pricing and switch on Stripe
5. Real Terms and Privacy Policy
6. Feed qualified accounts in from the [Sales Lead Engine](/projects/lead-engine/)
7. Later: native app-store builds
