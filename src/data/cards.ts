/**
 * Digital business cards. Each profile becomes:
 *   - a page:   /card/ for the default profile, /card/<slug>/ for the others
 *   - a vCard:  /card/<slug>.vcf  (the "Save contact" button)
 *   - a QR code pointing at its page, generated at build time
 *
 * To add a card, add an entry below. Only add someone else's details with their permission.
 * Card pages are noindex and left out of the sitemap (see astro.config.mjs).
 */
import { site } from './site';

export interface CardLink {
  label: string;
  href: string;
  kind: 'linkedin' | 'github' | 'web' | 'other';
}

export interface CardProfile {
  /** URL id. The default profile is served at /card/ and still has /card/<slug>.vcf. */
  slug: string;
  name: { given: string; family: string };
  title: string;
  bio?: string;
  /** Shown in the monogram, e.g. "JP". */
  initials: string;
  /** E.164 format, e.g. +18322736907. */
  phone?: string;
  /** How the number is shown on the page. */
  phoneDisplay?: string;
  email?: string;
  website?: string;
  org?: string;
  links: CardLink[];
  /** Optional accent override (CSS color). Defaults to the site accent. */
  accent?: string;
}

export const defaultCardSlug = 'jonathon';

export const cards: CardProfile[] = [
  {
    slug: 'jonathon',
    name: { given: 'Jonathon', family: 'Pena' },
    title: 'Software Developer | Business Systems',
    bio: site.tagline,
    initials: 'JP',
    phone: '+18322736907',
    phoneDisplay: '+1 832-273-6907',
    email: site.email,
    website: site.url,
    links: [
      { label: 'LinkedIn', href: site.linkedin, kind: 'linkedin' },
      { label: 'GitHub', href: site.github, kind: 'github' },
      { label: 'Portfolio', href: site.url, kind: 'web' },
    ],
  },
];

export const cardPath = (c: CardProfile) => (c.slug === defaultCardSlug ? '/card/' : `/card/${c.slug}/`);
export const cardUrl = (c: CardProfile) => new URL(cardPath(c), site.url).href;
export const vcardPath = (c: CardProfile) => `/card/${c.slug}.vcf`;
export const fullName = (c: CardProfile) => `${c.name.given} ${c.name.family}`;
