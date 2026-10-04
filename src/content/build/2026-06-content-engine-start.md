---
title: "Content Engine V1: Topic In, Script Out"
date: 2026-06-04
project: content-engine
status: building
tags: [python, automation]
summary: The first version of Content Engine was a Python script that turns a topic into a templated video script. It worked, and it showed me the wrong problem to solve.
---

Started a project called Content Engine. The plan was an AI-powered pipeline for short-form video: topic → research → script → voiceover → images → video → upload.

Version 1 is the first step of that plan: a Python script that asks for a topic and writes a title, hook, script outline, scene list and hashtags to a text file.

```
Enter a topic: SAP careers

TITLE:
3 Things You Didn't Know About SAP careers
HOOK:
What if I told you most people completely misunderstand SAP careers?
```

It does exactly what it says. The output is also exactly the same shape for every topic, because it's a template. That's fine for learning file handling and project structure. It's not a product.

The useful question for next time: which part of making videos is *actually* repetitive?
