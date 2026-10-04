---
title: From a Still Image to Three-Hour Renders
date: 2026-10-04
project: content-engine
status: building
tags: [python, ffmpeg, audio, rendering]
summary: Content Engine pivoted to ambience video and now has a real render engine with masked overlays, layered audio, vertical shorts, and long renders that only encode a few minutes of video.
images:
  - { src: ../../assets/projects/ce-editor.png, alt: "Content Engine project view showing a rendered frame, audio levels and a render plan of head, loop and tail." }
---

The answer to "which part is actually repetitive?" turned out to be long-form ambience video: the same scene and sound for hours, published again and again. So Content Engine changed direction.

Today's progression, in order:

1. **v0.4:** one still image, 10 seconds, 1080p30, slow zoom. Python builds the FFmpeg command from a JSON project file.
2. **Engine package:** rain composited through a window mask, layered audio (rain, room tone) with fades and loudness normalization.
3. **Long renders:** encode a short head, one loop and a tail, then join by stream copy. A 3-hour video only encodes about 3 minutes of footage. Segments are cached, so an interrupted render resumes.
4. **Vertical shorts:** the same project crops to 9:16 around a chosen focus point, with the masks staying aligned.
5. **Tests** that render tiny clips with FFmpeg, so changes don't silently break output.

Measured on my machine at 1080p30: a 10-second test in about 7 seconds, a 5-minute render in about 3 minutes.
