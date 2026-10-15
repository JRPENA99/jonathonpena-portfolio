/**
 * Private card files at unguessable paths, generated only when the build has the profile's secrets:
 *   /card/p/<id>.json  phone number + a QR code that carries the private link
 *   /card/p/<id>.vcf   full vCard including the phone number
 * <id> is derived from the share key (see src/lib/cardPrivate.ts). Nothing links here publicly.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { cards, cardUrl, type CardProfile } from '../../../data/cards';
import { getCardPrivate, type CardPrivate } from '../../../lib/cardPrivate';
import { buildVCard } from '../../../lib/vcard';
import { qrSvg } from '../../../lib/qr';

interface Props { profile: CardProfile; priv: CardPrivate; kind: 'json' | 'vcf' }

export const getStaticPaths: GetStaticPaths = () =>
  cards.flatMap((profile) => {
    const priv = getCardPrivate(profile);
    if (!priv) return [];
    return (['json', 'vcf'] as const).map((kind) => ({ params: { file: `${priv.id}.${kind}` }, props: { profile, priv, kind } }));
  });

export const GET: APIRoute = async ({ props }) => {
  const { profile, priv, kind } = props as Props;
  if (kind === 'vcf') {
    return new Response(buildVCard(profile, priv.phone), { headers: { 'Content-Type': 'text/vcard; charset=utf-8' } });
  }
  const privateLink = `${cardUrl(profile)}#k=${priv.key}`;
  return new Response(
    JSON.stringify({
      phone: priv.phone,
      phoneDisplay: priv.phoneDisplay,
      vcf: `/card/p/${priv.id}.vcf`,
      qr: await qrSvg(privateLink),
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};
