/**
 * vCard 3.0 builder (RFC 2426). 3.0 rather than 4.0 because iOS Contacts handles it reliably.
 * Output uses CRLF line endings and folds lines longer than 75 octets, as the spec requires.
 */
import type { CardProfile } from '../data/cards';
import { cardUrl, fullName } from '../data/cards';

/** Escape text values: backslash, comma, semicolon and newlines. */
const esc = (v: string) => v.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');

/** Fold a content line to 75 octets per line, continuation lines starting with a space. */
function fold(line: string): string {
  const enc = new TextEncoder();
  const out: string[] = [];
  let cur = '';
  let curLen = 0;
  for (const ch of line) {
    const len = enc.encode(ch).length;
    const limit = out.length === 0 ? 75 : 74; // continuation lines lose one octet to the leading space
    if (curLen + len > limit) {
      out.push(cur);
      cur = '';
      curLen = 0;
    }
    cur += ch;
    curLen += len;
  }
  out.push(cur);
  return out.join('\r\n ');
}

export function buildVCard(c: CardProfile): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(c.name.family)};${esc(c.name.given)};;;`,
    `FN:${esc(fullName(c))}`,
  ];
  if (c.org) lines.push(`ORG:${esc(c.org)}`);
  if (c.title) lines.push(`TITLE:${esc(c.title)}`);
  if (c.phone) lines.push(`TEL;TYPE=CELL,VOICE:${c.phone}`);
  if (c.email) lines.push(`EMAIL;TYPE=INTERNET,PREF:${c.email}`);
  if (c.website) lines.push(`URL:${c.website}`);
  for (const l of c.links) {
    if (l.href === c.website) continue;
    if (l.kind === 'linkedin') lines.push(`X-SOCIALPROFILE;TYPE=linkedin:${l.href}`);
    lines.push(`URL;TYPE=${esc(l.label)}:${l.href}`);
  }
  if (c.bio) lines.push(`NOTE:${esc(`${c.bio}\nDigital card: ${cardUrl(c)}`)}`);
  lines.push('END:VCARD');
  return lines.map(fold).join('\r\n') + '\r\n';
}
