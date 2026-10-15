import type { APIRoute, GetStaticPaths } from 'astro';
import { cards, type CardProfile } from '../../data/cards';
import { buildVCard } from '../../lib/vcard';

/** /card/<slug>.vcf for every profile, generated at build time. */
export const getStaticPaths: GetStaticPaths = () => cards.map((profile) => ({ params: { slug: profile.slug }, props: { profile } }));

export const GET: APIRoute = ({ props }) =>
  new Response(buildVCard((props as { profile: CardProfile }).profile), {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  });
