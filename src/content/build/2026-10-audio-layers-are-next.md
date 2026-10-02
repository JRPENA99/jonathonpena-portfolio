---
title: Audio Layers Are Next
date: 2026-10-01
project: content-engine
status: building
tags: [audio, ffmpeg, config]
summary: The video side of the pipeline renders correctly for the Rainy High-Rise Fireplace prototype. Next I'm separating fire, rain and music into configurable audio layers.
---

The prototype scene, **Rainy High-Rise Fireplace**, renders through the pipeline.

Next up is audio. Right now audio isn't independently controllable. The plan is to split it into separate layers (fire, rain, music) that each live in the config with their own source and level. That's what turns one scene into many: the same visuals with heavier rain, or no music, or a quieter fire, without touching code.

After that: making scenes fully config-driven, and reliable multi-hour renders.
