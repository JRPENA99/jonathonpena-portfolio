---
title: Why I Learn by Building
date: 2026-10-02
summary: Tutorials teach you the happy path. Building something real teaches you what happens when the path runs out, and that's most of the job.
topics: [Learning, Software, Product Development]
---

When I run into something I don't know how to do, my instinct isn't to find a course. It's to pick a small, real problem, start building, and figure out what I'm missing along the way.

That's not a rejection of structured learning. It's that I learn most from the moment something doesn't work.

## Tutorials end where the work starts

A tutorial is a path someone already cleared. Every step works because the author made sure it would. That's useful for learning syntax, but it hides the part that actually takes time: the gap between "this should work" and "this works."

Building something real means walking into that gap constantly. The render setting you only discover was wrong after a long render finishes. The production build that drops all its CSS while the dev server looks perfect. The data that's clean in the sample and a mess in reality.

You don't learn to handle those from a tutorial, because the tutorial was written to avoid them.

## A real problem gives you a reason to care

When the project is real (a coffee company's website, a pipeline I'll actually use, a sales workflow I've watched people struggle with), every decision has a consequence I can see. That makes it easier to tell which details matter.

It also keeps the scope honest. A practice project can grow forever. A real one has to ship.

## Systems over steps

A lot of my background is operations: inventory, project execution, documentation, figuring out why something broke. That work taught me to look at the whole system before fixing a single step, because the problem is usually in a handoff, not in a task.

Building software works the same way for me. I start by understanding the process, find where the friction is, and build a small version that touches every part of it. Then I improve the part that hurts most.

## What this looks like in practice

1. Pick a problem I actually have, or have watched someone else have.
2. Build the smallest version that runs end to end, even if it's ugly.
3. Break it on purpose, or let reality break it.
4. Fix it, and write down what I learned.

Step four is why this site has a [Build Log](/build/). Writing it down is how a fix turns into understanding instead of just a patch.

## The trade-off

Learning this way has gaps. You can end up knowing a lot about the parts you hit and very little about the parts you didn't. The answer, for me, has been to go back and read properly once I know *why* something matters. Documentation makes a lot more sense when you've already been burned by the thing it's warning you about.
