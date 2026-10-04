---
title: Content Engine
summary: A creator tool that renders long-form and short-form ambience videos from reusable scenes, overlays and audio. The render engine works; the web app is in early-access testing. Not public yet.
status: building
statusNote: Engine working · web app in early access
year: "2026"
type: Creator tool · automation pipeline
categories: [automation, web, experiments]
tech: [Python, FFmpeg, Astro (server mode), TypeScript, SQLite, Better Auth, Zod]
cover: ../../assets/projects/ce-editor.png
coverAlt: Content Engine's project view for "Rainy High-Rise Fireplace" showing a rendered frame of a high-rise loft with a fireplace and rainy city view, audio levels for rain and room tone, a 3-hour output length, and a render plan of head, loop ×173 and tail.
demo: content-pipeline
timeline:
  - when: Jun 2026
    title: "V1: topic in, script out"
    body: The first Content Engine was a different idea entirely. A Python script that asks for a topic and writes a templated title, hook, script outline and hashtags to a file. The plan was AI-generated short-form videos.
    points:
      - Taught me the basics of Python file output and project structure
      - Showed that a template isn't content. The output was generic by design.
    code: |
      $ python script_generator.py
      Enter a topic: SAP careers

      TITLE:
      3 Things You Didn't Know About SAP careers

      HOOK:
      What if I told you most people completely
      misunderstand SAP careers?

      SCRIPT:
      Fact number one...
      Fact number two...
    caption: Actual output of the June version.
  - when: Sep 2026
    title: Pivot to ambience video
    body: Instead of generating scripts, automate the part of video production that is genuinely repetitive. Long-form ambience channels publish the same kind of video again and again, a scene plus sound for hours, and the editing is mostly mechanical. New repository, new direction.
  - when: Oct 2026
    title: "v0.4: the first render"
    body: One still image, ten seconds, 1080p at 30 fps, with a slow camera zoom, rendered by Python driving FFmpeg. The important part was the project file. The video is described in JSON, not assembled by hand.
    code: |
      {
        "title": "Rainy High-Rise Fireplace",
        "assets": {
          "visual": "assets/visuals/loft_master.png",
          "overlays": { "rain": "assets/overlays/rain_loop.mp4" }
        },
        "scene": {
          "motion": { "camera": "slow_zoom", "intensity": 0.03 }
        },
        "audio": { "fireplace": true, "rain": true, ... }
      }
    caption: The first project file, from the v0.4 commit.
  - when: Oct 2026
    title: A real render engine
    body: Restructured into a proper package. Overlays composite through masks, audio is layered and levelled, and long videos stop being expensive.
    points:
      - Rain overlay composited through a window mask (screen blend, feathered edges)
      - Multi-layer audio with fades, generated room tone and loudness normalization
      - "3-hour renders: encode head + loop + tail once, then join by stream copy"
      - Cached segments, so an interrupted render resumes instead of restarting
      - Unit and integration tests that render tiny clips with FFmpeg
    video: /media/content-engine/rainy-high-rise-fireplace-wide.mp4
    poster: /media/content-engine/rainy-high-rise-fireplace-wide.jpg
    alt: Rendered clip of a high-rise loft at night with a fireplace and rain on the windows.
    caption: Actual engine output, slow zoom only. Muted here.
  - when: Oct 2026
    title: Render worker and vertical shorts
    body: A Python worker picks up queued renders, translates a project's settings into an engine project, reports progress, and re-queues jobs from workers that die. The engine learned to crop to 9:16 with a chosen focus point, with masks staying aligned.
    video: /media/content-engine/rainy-high-rise-fireplace-short.mp4
    poster: /media/content-engine/rainy-high-rise-fireplace-short.jpg
    vertical: true
    alt: The same scene rendered as a vertical 9:16 short.
    caption: Same scene, rendered 9:16.
  - when: Oct 2026
    title: A web app around the engine
    body: The engine became a product. A marketing site with honest feature labels, accounts, a creator dashboard, a project editor, and a render queue with live progress, preview and download. It runs locally and is ready for early-access testing.
    points:
      - Per-user authorization, input validated against the asset catalog, rate and render limits
      - Pricing tiers shown as "Coming soon". Nothing can be bought.
    image: ../../assets/projects/ce-editor.png
    alt: The project view from Content Engine's site, showing a rendered frame, audio levels and the render plan.
    caption: Product preview from the Content Engine site. The frame is real engine output.
  - when: Oct 2026
    title: What's next
    current: true
    body: The masked rain overlay left patchy drops on the windows, so the website samples now use camera motion only until the overlay is fixed. Before a public launch, it needs hosting, real email, user uploads and account export/deletion. Billing comes after that.
featured: true
current: true
order: 2
---

## Overview

Content Engine is a tool for creators that renders ambience videos (rainy apartments, fireplaces, cities at night) from reusable assets instead of hand-editing every video. It produces anything from a 10-second preview to a 3-hour render, in 16:9 or 9:16.

**Status: early development, not public.** The render engine works and has tests. The web app runs locally and is ready for early-access testing. Payments, user uploads and hosting aren't built yet.

## The Problem

Long-form ambience content is simple to watch and tedious to make. Producing it by hand means looping footage, layering audio, lining everything up, and waiting on long renders, and the same work repeats for every scene and every length.

## The Idea

Describe the video, don't edit it. A project is a set of choices (scene, overlays, camera motion, audio layers and levels, length, format, fades), and the engine turns those choices into a finished file.

## What Works Today

- **Render engine.** Composites a background with masked overlays and slow camera motion, mixes layered audio with fades and loudness levelling, and renders 10 s to 3 h.
- **Long renders without long waits.** Only a short head, one loop and a tail are encoded. The rest is joined without re-encoding, and interrupted renders resume from cached segments.
- **Vertical shorts.** The same project renders as 9:16 with a chosen crop focus.
- **Render worker.** Takes queued jobs from the app, reports progress, and recovers jobs from dead workers.
- **Web app (local).** Accounts, dashboard, project editor, render queue with live progress, preview, download and render history.

Measured on the development PC at 1080p30: a 10-second test renders in about 7 seconds and a 5-minute render in about 3 minutes.

## Challenges

- **FFmpeg filter graphs** for masked compositing and multi-layer audio are powerful and unforgiving. Short test renders before every long one.
- **Masked rain.** The overlay looked patchy through the window mask, so it's off in the public samples until it looks right.
- **One shared database** between a Node web app and a Python worker keeps the first deployment simple, but needs a migration path (Postgres, object storage, a hosted queue) to scale.

## What I've Learned

The June version taught me the difference between generating *text that looks like content* and building a tool that removes real, repetitive work. The second one is worth building.

## What's Next

1. Early-access testing; more scenes and sounds (fireplace, thunder, snow, café)
2. Hosting, real email, account export and deletion, user uploads with quotas
3. Billing with Stripe, plan-based limits
4. Later: describe-a-scene project creation, batch generation, publishing integrations
