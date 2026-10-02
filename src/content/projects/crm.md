---
title: Independent CRM
summary: A lightweight sales workspace for independent salespeople and small teams who've outgrown spreadsheets but don't need an enterprise CRM.
status: concept
statusNote: Early development
year: "2026"
type: Product concept
categories: [sales-tech, data]
tech: [Interface design, Data modeling, TypeScript]
workflowTitle: Where it fits
workflow:
  - "Lead Engine | finds & ranks accounts"
  - "Qualified account | with research attached"
  - "CRM | contacts, notes, context"
  - "Pipeline | stage & value"
  - "Activity | follow-ups that happen"
demo: crm
featured: true
current: true
order: 4
---

## Overview

A working name for now. This is a lightweight CRM and sales workspace for people who sell on their own or in small teams: independent reps, young entrepreneurs, small sales teams, and anyone graduating from a spreadsheet.

It's a **concept in early development**. The interactive prototype below is front-end only, with sample data and no backend.

## The Problem

Enterprise CRMs are built around the database and the manager's report. For an independent salesperson they're heavy, expensive, and full of fields nobody fills in. So people fall back to spreadsheets, which are flexible but forget everything: no follow-up reminders, no history, no sense of what's next.

## The Idea

Build the CRM around the salesperson's day instead of the database:

- **What do I need to do today?** Tasks and follow-ups first.
- **Where is each deal?** A pipeline that's quick to update.
- **What do I know about this account?** Notes, contacts and research in one place.

Planned modules: Dashboard, Leads, Companies, Contacts, Pipeline, Tasks, Notes, Activity, Research, Outreach.

It connects naturally to the [Sales Lead Engine](/projects/lead-engine/): qualified accounts, with their research, could flow straight into the CRM instead of being copy-pasted.

## What I'm Building

The prototype demonstrates the interface and workflow thinking:

- a **pipeline board** where deals move between stages
- an **account drawer** with contacts, next steps and notes
- a **task list** that drives the day
- a **dashboard** that summarizes what matters this morning

Everything resets on reload. Nothing is saved anywhere.

## Challenges

- **Scope.** Every CRM wants to become every CRM. The discipline is deciding what to leave out.
- **Fast updates.** If moving a deal or logging a call takes more than a couple of seconds, people stop doing it.
- **Data model vs. user model.** The schema should serve the workflow, not the other way around.

## What's Next

- Validate the core workflow with a few real independent salespeople
- Data model and persistence
- Lead Engine → CRM handoff
