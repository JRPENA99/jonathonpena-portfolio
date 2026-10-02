---
title: Building an Automated Content Engine
date: 2026-06-04
project: content-engine
status: building
tags: [python, automation, ffmpeg]
summary: Starting a pipeline for long-form ambience video. The goal is to make a new render come from a config file, not an editing session.
---

Started a new project: a pipeline for producing long-form ambience videos (rain, fireplaces, city nights).

Making these by hand is mostly repetition: loop the footage, line up the audio, export, wait. The editing decisions are small. The time cost is large. That's a good sign something should be a system.

The shape I'm aiming for:

```
visual assets + audio assets + project config
        ↓
  Python orchestration
        ↓
   FFmpeg processing
        ↓
    rendered output
```

First rule for myself: anything that changes between videos goes in the config. If I hardcode a path or a duration "just for now," that's a scene I can't generate later.
