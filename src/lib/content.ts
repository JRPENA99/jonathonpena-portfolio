import { getCollection, type CollectionEntry } from 'astro:content';
import type { statuses } from '../content.config';

export type Status = (typeof statuses)[number];

export const statusLabel: Record<Status, string> = {
  live: 'Live',
  building: 'Building',
  prototype: 'Prototype',
  experiment: 'Experiment',
  concept: 'Concept',
};

export const categoryLabel = {
  web: 'Web',
  automation: 'Automation',
  data: 'Data',
  'sales-tech': 'Sales Tech',
  experiments: 'Experiments',
} as const;

const published = <T extends { data: { draft: boolean } }>(e: T) => import.meta.env.DEV || !e.data.draft;
const newestFirst = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getProjects() {
  return (await getCollection('projects', published)).sort((a, b) => a.data.order - b.data.order);
}
export async function getBuildLog() {
  return (await getCollection('build', published)).sort(newestFirst);
}
export async function getWriting() {
  return (await getCollection('writing', published)).sort(newestFirst);
}
export async function getLab() {
  return (await getCollection('lab', published)).sort(newestFirst);
}

export const projectHref = (p: CollectionEntry<'projects'>) =>
  p.data.caseStudy ? `/projects/${p.id}/` : (p.data.links[0]?.href ?? '/projects/');

export const formatMonth = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

/** Rough reading time from raw Markdown. */
export const readingTime = (body = '') => Math.max(1, Math.round(body.split(/\s+/).length / 230));
