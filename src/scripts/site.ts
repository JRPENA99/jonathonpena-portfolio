// The only site-wide JavaScript: theme toggle, mobile menu, scroll reveals, footer year.
// Interactive demos ship their own small scripts.

const root = document.documentElement;

document.querySelector<HTMLButtonElement>('[data-theme-toggle]')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* storage unavailable: theme still applies for this page */
  }
});

const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const setMenu = (open: boolean) => {
  menuBtn?.setAttribute('aria-expanded', String(open));
  root.classList.toggle('menu-open', open);
};
menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && root.classList.contains('menu-open')) {
    setMenu(false);
    menuBtn?.focus();
  }
});
document.querySelectorAll('#site-nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
matchMedia('(min-width: 901px)').addEventListener('change', (e) => e.matches && setMenu(false));

// Scroll reveal. Anything already on screen shows immediately; nothing waits on animation.
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-in'));
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
