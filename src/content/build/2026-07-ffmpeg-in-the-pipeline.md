---
title: Getting FFmpeg Into the Pipeline
date: 2026-07-15
project: content-engine
status: building
tags: [ffmpeg, python]
summary: Python now drives FFmpeg instead of me typing commands. Lesson so far is to test on thirty seconds before rendering three hours.
---

The pipeline now has Python building and running the FFmpeg job instead of me assembling commands by hand.

Biggest lesson so far: **render short first**. A wrong setting in minute one is still wrong in hour three, and you only find out after waiting for it. Every change gets tested on a short clip before a long render.

Second lesson: FFmpeg's documentation is dense, but it's precise. Most of my problems were me guessing at a flag instead of reading what it actually does.
