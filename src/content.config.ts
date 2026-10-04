import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Content lives in src/content/<collection>/ as Markdown files.
 * The file name becomes the URL: src/content/build/my-update.md -> /build/my-update/
 * Files starting with "_" are ignored, so each folder keeps a _TEMPLATE.md to copy.
 *
 * Status vocabulary is shared across the site (see src/lib/status.ts):
 *   live        – shipped and publicly available
 *   building    – actively being built
 *   prototype   – working prototype / demo, not a finished product
 *   experiment  – small test, may go nowhere
 *   concept     – designed or planned, little or no working code yet
 */
export const statuses = ['live', 'building', 'prototype', 'experiment', 'concept'] as const;

const ignoreTemplates = (base: string) => glob({ pattern: ['**/*.md', '!**/_*.md'], base });

const projects = defineCollection({
  loader: ignoreTemplates('./src/content/projects'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line shown on cards. */
      summary: z.string(),
      status: z.enum(statuses),
      /** Optional extra text next to the status badge, e.g. "Continuously evolving". */
      statusNote: z.string().optional(),
      year: z.string(),
      /** e.g. "Web product", "Automation pipeline" */
      type: z.string(),
      /** Used by the filters on /projects. */
      categories: z.array(z.enum(['web', 'automation', 'data', 'sales-tech', 'experiments'])).default([]),
      tech: z.array(z.string()).default([]),
      links: z
        .array(z.object({ label: z.string(), href: z.string(), primary: z.boolean().default(false) }))
        .default([]),
      /** Cover image in src/assets/projects/ (optimized automatically). */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Extra screenshots shown under "Interface" on the case study. */
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional(), narrow: z.boolean().default(false) }))
        .default([]),
      /** Steps rendered as the workflow diagram on the case study. */
      workflow: z.array(z.string()).optional(),
      workflowTitle: z.string().optional(),
      /** Interactive interface embedded on the case study, if any. */
      demo: z.enum(['content-pipeline', 'lead-intel', 'crm', 'sales-pipeline', 'ops']).optional(),
      /** Show on the homepage "Selected work" grid. */
      featured: z.boolean().default(false),
      /** Show in the "Currently building" section. */
      current: z.boolean().default(false),
      /** No full case study yet: card links out instead and says "Case study coming soon". */
      caseStudy: z.boolean().default(true),
      /** Lower numbers sort first. */
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

const build = defineCollection({
  loader: ignoreTemplates('./src/content/build'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      /** File name (without .md) of a project in src/content/projects. */
      project: reference('projects').optional(),
      status: z.enum(statuses).optional(),
      tags: z.array(z.string()).default([]),
      images: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      draft: z.boolean().default(false),
    }),
});

const writing = defineCollection({
  loader: ignoreTemplates('./src/content/writing'),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const lab = defineCollection({
  loader: ignoreTemplates('./src/content/lab'),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    status: z.enum(statuses).default('experiment'),
    tags: z.array(z.string()).default([]),
    /** Interactive demo to embed on the experiment page. */
    demo: z.enum(['content-pipeline', 'lead-intel', 'crm', 'sales-pipeline', 'ops']).optional(),
    /** External link (repo, live demo) if the experiment lives elsewhere. */
    href: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, build, writing, lab };
