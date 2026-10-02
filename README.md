# jonathonpena.dev

Personal site of Jonathon Pena. Built with [Astro](https://astro.build): static HTML, Markdown content, no client framework.

## Run it

Requires Node.js 20+.

```bash
npm install
npm run dev       # http://localhost:4321 (drafts are visible here)
npm run check     # type check
npm run lint      # eslint
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Deploying

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.
One-time setup: **GitHub → repo Settings → Pages → Source: GitHub Actions**.
The custom domain comes from `public/CNAME`.

## Adding content

Every content folder has a `_TEMPLATE.md`. Copy it, rename it (the file name becomes the URL), and fill it in.
Files starting with `_` are ignored. Set `draft: true` to keep something off the live site.

| To add | Put a Markdown file in | Shows up at |
| --- | --- | --- |
| A project / case study | `src/content/projects/` | `/projects/<file-name>/`, plus homepage if `featured: true` |
| A build log entry | `src/content/build/` | `/build/<file-name>/`, newest first, homepage and the project's page |
| A writing post | `src/content/writing/` | `/writing/<file-name>/` |
| A lab experiment | `src/content/lab/` | `/lab/<file-name>/` |

A build log entry is linked to a project with `project: <project-file-name>`. A typo fails the build instead of breaking a link.

**Status values** (used everywhere): `live`, `building`, `prototype`, `experiment`, `concept`.

### Screenshots and images

- Project covers: put the image in `src/assets/projects/` and set `cover: ../../assets/projects/name.png` plus `coverAlt`.
- Build log screenshots: put them in `src/assets/build/` and list them under `images:` in the entry.
- Images are resized and converted to WebP automatically at build time. Use PNG/JPG at roughly 1440px wide.

### Other things you might edit

| What | Where |
| --- | --- |
| Email, social links, nav, "now building" | `src/data/site.ts` |
| Capabilities and toolkit | `src/data/site.ts` |
| GitHub repo list on /projects | `repos` in `src/data/site.ts` |
| Sample data for the demos | `src/data/demo.ts` (invented, keep it labeled) |
| Colors, fonts, spacing | top of `src/styles/global.css` |
| Content schemas | `src/content.config.ts` |
| Portrait | `src/assets/jonathon.png` |
| Social preview image | `public/og.png` (1200×630) |
