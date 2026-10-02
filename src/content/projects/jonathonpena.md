---
title: JonathonPena.dev
summary: This site, treated as a product. Built as a living record of what I'm building, testing and learning, not a static resume.
status: live
statusNote: Continuously evolving
year: "2026"
type: Web product
categories: [web]
tech: [Astro, TypeScript, Markdown, CSS, SEO]
links:
  - { label: View on GitHub, href: "https://github.com/JRPENA99/jonathonpena-portfolio", primary: true }
cover: ../../assets/projects/jonathonpena-home.png
coverAlt: The jonathonpena.dev homepage, showing the headline and a "Now" panel listing projects with their status.
workflowTitle: Content architecture
workflow:
  - "Projects | case studies with status"
  - "Build Log | what I did"
  - "Writing | what I think"
  - "Lab | small experiments"
  - "Pages | generated from content"
featured: true
order: 5
---

## Overview

Most personal portfolios turn into static resumes: a hero, three project cards, a contact button, and no reason to come back.

I wanted mine to work more like a living record. Projects show the major work, the Build Log shows progress as it happens, Writing holds what I've learned, and the Lab is a place to publish small experiments without pretending each one is a startup.

## The Problem

The first version of this site was a single HTML page. It listed tools instead of showing work, and every change meant editing markup by hand. That's fine for a business card. It doesn't work as a home base for ongoing projects.

## The Idea

Make the site content-driven, so publishing is cheap:

- A new project is one Markdown file with a status and a few fields.
- A Build Log entry is a short Markdown file with a date and the project it belongs to.
- The design never has to change for the content to grow.

And make status explicit. Every project carries one of **Live**, **Building**, **Prototype**, **Experiment** or **Concept**, so visitors can see what is shipped and what is still being figured out.

## What I Built

- **Content architecture**: four typed Markdown collections (projects, build log, writing, lab) with schemas validated at build time. A typo in a status or a broken project reference fails the build instead of shipping.
- **A reusable status system** used on cards, case studies and log entries.
- **A consistent case-study template**: overview, problem, idea, what I built, how it works, workflow, interface, technology, challenges, lessons, next steps.
- **Interactive demo interfaces** built from sample data: a sales pipeline, lead intelligence, operations board and a CRM workspace. Clearly labeled as demos.
- **Responsive design** with mobile treated as a first-class layout, light and dark themes, visible focus states, and reduced-motion support.
- **SEO**: per-page titles and descriptions, OpenGraph tags, canonical URLs, sitemap, robots.txt, RSS, and Person structured data.

## How It Works

Astro builds static HTML at deploy time. Markdown files in `src/content/` become pages, and GitHub Actions builds and deploys to GitHub Pages on every push to `main`. Interactive pieces ship only the small amount of JavaScript they need.

## Performance

No framework runtime on the client, self-hosted variable fonts, responsive images generated at build time and lazy-loaded below the fold. Animations are CSS-only, never block content, and switch off when the visitor prefers reduced motion.

## What I Learned

Writing the case-study template forced me to answer the same questions for every project: what was the problem, what actually exists, what's next. It's a useful discipline beyond the website.

## What's Next

- Real screenshots and short screen recordings as projects progress
- Build Log entries as each project moves
- More Lab experiments
