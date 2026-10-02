---
title: Sales Lead Engine
summary: A research and prioritization engine for B2B sales, so salespeople spend less time finding and qualifying accounts and more time talking to the right ones.
status: building
statusNote: In development
year: "2026"
type: Sales tech product
categories: [sales-tech, data, automation]
tech: [Python, APIs, Data enrichment, Scoring]
workflowTitle: Workflow
workflow:
  - "Discover | find candidate companies"
  - "Enrich | industry, region, services"
  - "Classify | trade activity & service fit"
  - "Prioritize | rank who matters first"
  - "Research | contacts & context"
  - "Outreach | hand off to CRM"
demo: lead-intel
featured: true
current: true
order: 3
---

## Overview

The Sales Lead Engine started from watching a real sales workflow up close. The initial focus is logistics sales into the chemical industry and adjacent manufacturers: a space where fit depends heavily on what a company ships, where, and how.

## The Problem

A lot of a B2B salesperson's week isn't selling. It's research:

- finding companies that might need the service
- figuring out what they actually do
- deciding whether they're a fit
- checking for import or export activity
- finding the right contacts
- organizing all of it into accounts
- deciding who to contact first

Most of that happens in browser tabs and spreadsheets, and most of it gets redone from scratch for every new territory.

## The Idea

A research and prioritization engine that does the repetitive parts and makes its reasoning visible:

**Discover → Enrich → Classify → Prioritize → Research → Outreach**

Each account carries the fields a salesperson actually uses: company, industry, region, services, import/export indicators, service fit, contacts, LinkedIn, account priority, research status, and notes.

The important design choice: the engine should explain *why* an account surfaced, not just give it a score. A salesperson won't trust a number they can't interrogate.

## What I'm Building

The interface below is a working front-end prototype with **sample data**. It shows how accounts would be filtered, ranked and inspected. The companies, signals and scores are invented.

The engine behind it is in development. I'm working through the data pipeline (discovery and enrichment sources) and what a defensible service-fit score should actually measure.

## Challenges

- **Data quality.** Public company data is incomplete and inconsistent. The system has to say "unknown" honestly rather than guess.
- **Scoring that earns trust.** Fit has to be explainable and adjustable by the person using it.
- **Staying a tool, not a spam cannon.** The point is better-prioritized, better-researched outreach, not more of it.

## What's Next

- Define the first version of the fit model with real sales input
- Discovery + enrichment pipeline for the initial industry
- Export qualified accounts into the [CRM workspace](/projects/crm/)
