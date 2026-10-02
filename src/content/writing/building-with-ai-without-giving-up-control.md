---
title: Building With AI Without Giving Up Control of the Code
date: 2026-10-02
summary: AI makes me faster. It doesn't get to decide what the system is. A few rules I use to keep it that way.
topics: [AI, Software, Development Workflow]
---

I use AI-assisted development constantly. It's changed how fast I can go from an idea to something running. But there's a failure mode I try hard to avoid: ending up with a project that works and that I don't understand.

If I can't explain why the code is shaped the way it is, I don't really own it. And when it breaks, which it will, I'm debugging someone else's decisions.

## The rules I use

**I decide the architecture.** Before asking for code, I know what the pieces are and how they connect. For the [Content Engine](/projects/content-engine/), that meant deciding up front that the config file is the single source of truth and that each stage does one job. AI helps fill in the stages. It doesn't get to invent a different shape.

**Small, reviewable changes.** One function, one component, one fix at a time. A thousand generated lines at once is a thousand lines I didn't really review.

**Read everything before keeping it.** If I don't understand a line, I ask about it or rewrite it. "It works" isn't the bar. "I know why it works" is.

**Run it, don't trust it.** Generated code is confidently wrong often enough that the only real check is running it: the build, the tests, the actual output. Especially for anything with a side effect.

**Keep the hard calls human.** What to build, what to leave out, what's true enough to say on a website, how to treat other people's data. Those are judgment calls, and they stay mine.

## Where it helps most

- Getting unstuck on unfamiliar APIs and flags (FFmpeg especially)
- Boilerplate I've already written enough times to understand
- A second opinion on a bug I've been staring at too long
- Explaining *why* something works, which speeds up the actual learning

## Where I slow down

- Anything touching data integrity or user data
- Architecture and naming, which are hard to change later
- Copy that makes claims. AI is very good at writing confident sentences that aren't true.

The goal isn't to use less AI. It's to stay the person who understands the system, so that going faster doesn't mean knowing less.
