import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getBuildLog, getWriting } from '../lib/content';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const [log, writing] = await Promise.all([getBuildLog(), getWriting()]);
  const items = [
    ...log.map((e) => ({ title: `Build log: ${e.data.title}`, pubDate: e.data.date, description: e.data.summary, link: `/build/${e.id}/` })),
    ...writing.map((e) => ({ title: e.data.title, pubDate: e.data.date, description: e.data.summary, link: `/writing/${e.id}/` })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: `${site.name}: Build Log & Writing`,
    description: site.description,
    site: context.site!,
    items,
  });
}
