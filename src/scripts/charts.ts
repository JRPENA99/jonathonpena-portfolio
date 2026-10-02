// Tiny SVG chart helpers for the demos. Single-series only, with hover/focus tooltips.

const NS = 'http://www.w3.org/2000/svg';
const el = (tag: string, attrs: Record<string, string | number>) => {
  const n = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, String(v));
  return n;
};

function tooltip(host: HTMLElement) {
  let tip = host.querySelector<HTMLElement>('.d-tip');
  if (!tip) {
    tip = document.createElement('div');
    tip.className = 'd-tip';
    tip.setAttribute('aria-hidden', 'true');
    host.append(tip);
  }
  return tip;
}

/** Area + 2px line with a crosshair tooltip. */
export function areaChart(host: HTMLElement, values: number[], labels: string[], fmt: (v: number) => string) {
  const W = 600, H = 180, P = { t: 12, r: 8, b: 22, l: 8 };
  const min = Math.min(...values) * 0.9, max = Math.max(...values) * 1.04;
  const x = (i: number) => P.l + (i / (values.length - 1)) * (W - P.l - P.r);
  const y = (v: number) => P.t + (1 - (v - min) / (max - min)) * (H - P.t - P.b);
  const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': `Trend from ${fmt(values[0])} to ${fmt(values.at(-1)!)}` });

  for (let g = 0; g < 4; g++) {
    const gy = P.t + (g / 3) * (H - P.t - P.b);
    svg.append(el('line', { x1: P.l, x2: W - P.r, y1: gy, y2: gy, stroke: 'var(--border)', 'stroke-width': 1 }));
  }
  const pts = values.map((v, i) => `${x(i)},${y(v)}`).join(' L');
  svg.append(el('path', { d: `M${x(0)},${H - P.b} L${pts} L${x(values.length - 1)},${H - P.b} Z`, fill: 'var(--accent-soft)' }));
  svg.append(el('path', { d: `M${pts}`, fill: 'none', stroke: 'var(--accent)', 'stroke-width': 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }));
  [0, values.length - 1].forEach((i) => {
    const t = el('text', { x: x(i), y: H - 4, 'font-size': 11, fill: 'var(--text-3)', 'text-anchor': i ? 'end' : 'start', 'font-family': 'var(--font-mono)' });
    t.textContent = labels[i];
    svg.append(t);
  });
  const end = el('circle', { cx: x(values.length - 1), cy: y(values.at(-1)!), r: 4, fill: 'var(--accent)', stroke: 'var(--surface)', 'stroke-width': 2 });
  svg.append(end);

  const cross = el('line', { y1: P.t, y2: H - P.b, stroke: 'var(--text-3)', 'stroke-width': 1, 'stroke-dasharray': '3 3', opacity: 0 });
  const dot = el('circle', { r: 5, fill: 'var(--accent)', stroke: 'var(--surface)', 'stroke-width': 2, opacity: 0 });
  svg.append(cross, dot);

  host.replaceChildren(svg);
  const tip = tooltip(host);
  const show = (i: number) => {
    cross.setAttribute('x1', String(x(i))); cross.setAttribute('x2', String(x(i))); cross.setAttribute('opacity', '1');
    dot.setAttribute('cx', String(x(i))); dot.setAttribute('cy', String(y(values[i]))); dot.setAttribute('opacity', '1');
    const r = svg.getBoundingClientRect();
    tip.style.left = `${(x(i) / W) * r.width}px`;
    tip.style.top = `${(y(values[i]) / H) * r.height}px`;
    tip.textContent = `${labels[i]} · ${fmt(values[i])}`;
    tip.classList.add('on');
  };
  const hide = () => { cross.setAttribute('opacity', '0'); dot.setAttribute('opacity', '0'); tip.classList.remove('on'); };
  svg.addEventListener('pointermove', (e) => {
    const r = svg.getBoundingClientRect();
    const rel = ((e.clientX - r.left) / r.width) * W;
    show(Math.max(0, Math.min(values.length - 1, Math.round(((rel - P.l) / (W - P.l - P.r)) * (values.length - 1)))));
  });
  svg.addEventListener('pointerleave', hide);
}

/** Vertical bars with per-bar hover/focus tooltips. */
export function barChart(host: HTMLElement, values: number[], labels: string[], fmt: (v: number) => string) {
  const W = 600, H = 180, P = { t: 10, b: 22 };
  const max = Math.max(...values) * 1.1;
  const slot = W / values.length, bw = Math.min(44, slot * 0.56);
  const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': labels.map((l, i) => `${l}: ${fmt(values[i])}`).join(', ') });
  svg.append(el('line', { x1: 0, x2: W, y1: H - P.b, y2: H - P.b, stroke: 'var(--border-strong)' }));
  const tip = tooltip(host);

  values.forEach((v, i) => {
    const h = (v / max) * (H - P.t - P.b), cx = slot * i + slot / 2;
    const g = el('g', {});
    // Top-rounded bar anchored to the baseline.
    const r = 4, x0 = cx - bw / 2, y0 = H - P.b - h;
    g.append(el('path', {
      d: `M${x0},${H - P.b} V${y0 + r} Q${x0},${y0} ${x0 + r},${y0} H${x0 + bw - r} Q${x0 + bw},${y0} ${x0 + bw},${y0 + r} V${H - P.b} Z`,
      fill: 'var(--text-2)', class: 'bar',
    }));
    g.append(el('rect', { x: slot * i, y: 0, width: slot, height: H, fill: 'transparent' }));
    const t = el('text', { x: cx, y: H - 5, 'font-size': 11, fill: 'var(--text-3)', 'text-anchor': 'middle', 'font-family': 'var(--font-mono)' });
    t.textContent = labels[i];
    g.append(t);
    const on = () => {
      const rr = svg.getBoundingClientRect();
      tip.style.left = `${(cx / W) * rr.width}px`;
      tip.style.top = `${(y0 / H) * rr.height}px`;
      tip.textContent = `${labels[i]} · ${fmt(v)}`;
      tip.classList.add('on');
      g.querySelector('.bar')!.setAttribute('fill', 'var(--accent)');
    };
    const off = () => { tip.classList.remove('on'); g.querySelector('.bar')!.setAttribute('fill', 'var(--text-2)'); };
    g.addEventListener('pointerenter', on);
    g.addEventListener('pointerleave', off);
    svg.append(g);
  });
  host.replaceChildren(svg, tip);
}

export const usd = (v: number) => (v >= 1000 ? `$${(v / 1000).toFixed(v >= 100000 ? 0 : 1)}k` : `$${v}`);
