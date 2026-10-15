/**
 * Private card details (phone numbers), read at BUILD TIME from environment variables.
 * Nothing here is committed: the values come from GitHub Actions secrets in CI, or from a
 * gitignored .env file locally.
 *
 * For a profile with slug "jonathon":
 *   CARD_JONATHON_PHONE  phone number in E.164 format, e.g. +1XXXXXXXXXX
 *   CARD_JONATHON_KEY    random share key (generate one with: node -e "console.log(require('crypto').randomBytes(16).toString('base64url'))")
 *
 * How it stays private on a static site:
 *   - The public card page never contains the number.
 *   - The private share link is /card/#k=<key>. Browsers never send the part after "#" to the
 *     server, so it doesn't appear in logs, analytics or search results.
 *   - With the key, the page derives a file id = sha256("<slug>:<key>") and fetches
 *     /card/p/<id>.json and /card/p/<id>.vcf. Those paths are unguessable without the key and
 *     aren't linked from anywhere.
 *   - Changing the key (and rebuilding) retires every old link.
 * If either variable is missing, the card simply builds without a phone number.
 */
import { createHash } from 'node:crypto';
import type { CardProfile } from '../data/cards';

export interface CardPrivate {
  id: string;
  key: string;
  phone: string;
  phoneDisplay: string;
}

const envName = (slug: string, field: string) => `CARD_${slug.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_${field}`;

/** Must match the browser-side derivation in BusinessCard.astro. */
export const privateId = (slug: string, key: string) => createHash('sha256').update(`${slug}:${key}`).digest('hex').slice(0, 32);

/** "+1XXXXXXXXXX" → "+1 XXX-XXX-XXXX"; other formats are shown as given. */
export function formatPhone(e164: string): string {
  const m = /^\+1(\d{3})(\d{3})(\d{4})$/.exec(e164);
  return m ? `+1 ${m[1]}-${m[2]}-${m[3]}` : e164;
}

export function getCardPrivate(c: CardProfile): CardPrivate | undefined {
  const phone = process.env[envName(c.slug, 'PHONE')]?.trim();
  const key = process.env[envName(c.slug, 'KEY')]?.trim();
  if (!phone || !key) return undefined;
  if (!/^\+\d{8,15}$/.test(phone)) throw new Error(`${envName(c.slug, 'PHONE')} must be E.164, like +1XXXXXXXXXX`);
  if (key.length < 16) throw new Error(`${envName(c.slug, 'KEY')} is too short; use at least 16 random characters`);
  return { id: privateId(c.slug, key), key, phone, phoneDisplay: formatPhone(phone) };
}
