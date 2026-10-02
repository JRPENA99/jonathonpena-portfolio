---
title: Content Engine
summary: A configurable pipeline that turns visual assets, audio and a project config into long-form ambience videos, without hours of manual editing per render.
status: building
statusNote: Active development
year: "2026"
type: Automation pipeline
categories: [automation, experiments]
tech: [Python, FFmpeg, Config-driven rendering]
links:
  - { label: View on GitHub, href: "https://github.com/JRPENA99/content-engine" }
demo: content-pipeline
featured: true
current: true
order: 2
---

## Overview

Content Engine is a Python + FFmpeg pipeline for producing long-form ambience videos: hours of rain against a window, a fireplace, a city at night. The goal is a system where a new video comes from a configuration file, not an editing session.

The current prototype scene is **Rainy High-Rise Fireplace**.

## The Problem

Long-form ambience content is simple to watch and tedious to make. Producing it by hand means looping footage, layering audio, lining everything up, and waiting on long renders. The same work repeats for every scene and every duration.

That's exactly the kind of process that should be a system.

## The Idea

Turn the manual edit into a reusable pipeline:

- **Inputs**: visual assets, audio assets, and a project configuration describing the scene.
- **Orchestration**: Python reads the config, resolves the assets, and builds the render job.
- **Processing**: FFmpeg does the heavy lifting: looping, encoding, muxing.
- **Output**: a finished long-form video file.

A new environment should mean a new config and new assets, not new code.

## Current State

**Working prototype, in active development.**

The video side of the pipeline runs end to end for the prototype scene. Python orchestrates FFmpeg to produce a rendered output from the configured assets.

What it does **not** do yet: layered, independently configurable audio; multiple scenes driven entirely by config; or fully unattended long-duration batch renders. Those are the next milestones, listed below.

## How It Works

The pipeline is deliberately boring: plain files in, plain files out. Each stage has one job, and the configuration is the single source of truth for a render. That makes renders repeatable, so the same config produces the same video, and makes failures easier to isolate to a specific stage.

## Challenges

- **FFmpeg is powerful and unforgiving.** Getting filters, loops and encoding settings right is mostly reading documentation and testing short renders before committing to long ones.
- **Long renders punish mistakes.** A setting that's wrong in minute one is still wrong three hours later, so the workflow leans on short test renders.
- **Keeping the config honest.** It's tempting to hardcode "just this once." Every hardcoded value is a future scene that can't be generated.

## What I've Learned

The value isn't in any single render; it's in making the second, tenth and fiftieth render cheap. Designing the config first made the code simpler.

## What's Next

- **Audio layering**: separate fire, rain and music into configurable layers with their own volume
- **Configurable scenes**: new environments defined entirely in config
- **Long-duration renders**: reliable multi-hour output
- **Additional environments** beyond the prototype scene
- **More automation** around batching and output naming
