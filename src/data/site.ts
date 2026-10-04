/**
 * Site-wide settings and the small amount of copy that isn't a content entry.
 * Edit here to change navigation, social links, capabilities or the toolkit.
 */
export const site = {
  name: 'Jonathon Pena',
  url: 'https://jonathonpena.dev',
  tagline: 'Building software, systems & useful things.',
  description:
    'Jonathon Pena builds software, automation, dashboards and web products around real operational and business problems. Based in Houston, Texas.',
  email: 'jon@jonathonpena.dev',
  location: 'Houston, Texas',
  github: 'https://github.com/JRPENA99',
  linkedin: 'https://www.linkedin.com/in/jonathon-pena',
  /** Short line in the homepage hero status pill. */
  nowBuilding: 'Content Engine · Sales Lead Engine',
};

export const nav = [
  { href: '/projects/', label: 'Projects' },
  { href: '/build/', label: 'Build Log' },
  { href: '/writing/', label: 'Writing' },
  { href: '/lab/', label: 'Lab' },
  { href: '/about/', label: 'About' },
];

export const capabilities = [
  {
    title: 'Systems & Automation',
    body: 'Repeatable systems for processes that would otherwise mean the same manual steps every day: pipelines, scripts and workflows that run the boring parts.',
    examples: ['Content Engine render pipeline', 'Workflow templates', 'Python utilities'],
  },
  {
    title: 'Data & Dashboards',
    body: 'Getting scattered information into views people can act on: what is open, what is late, what matters next. Operations, sales and inventory data mostly.',
    examples: ['Excel tracking systems', 'Pipeline and ops dashboards', 'Lead prioritization'],
  },
  {
    title: 'Web Products',
    body: 'Websites and interfaces built around one specific goal for one specific audience, then refined until the structure and copy actually serve it.',
    examples: ['Woodfox Coffee', 'This site', 'Brand sites'],
  },
  {
    title: 'Operations & Process Design',
    body: 'Years on the operations side taught me to map the workflow before touching software. Most friction is in the handoffs, not the tools.',
    examples: ['Inventory & tracking', 'Documentation & SOPs', 'Root-cause troubleshooting'],
  },
  {
    title: 'Product Prototyping',
    body: 'Taking an idea from a rough problem statement to something you can click on, quickly enough to find out whether it deserves more time.',
    examples: ['Sales Lead Engine', 'CRM workspace', 'Lab experiments'],
  },
];

/** Only things actually used in these projects or day-to-day work. */
export const toolkit = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Web', items: ['Astro', 'Static sites', 'Responsive design', 'SEO basics'] },
  { group: 'Automation & data', items: ['FFmpeg', 'APIs', 'Data processing', 'Excel systems', 'Power BI'] },
  { group: 'Business systems', items: ['CRM platforms', 'Microsoft 365', 'SharePoint', 'Process documentation'] },
  { group: 'Workflow', items: ['Git', 'GitHub', 'VS Code', 'AI-assisted development'] },
];

/** Snapshot of public repositories. Update by hand when something new is worth showing. */
export const repos = [
  {
    name: 'jonathonpena-portfolio',
    description: 'This site. Astro, Markdown content collections, interactive demo interfaces.',
    language: 'Astro',
    updated: '2026-10',
  },
  {
    name: 'woodfox-roasters',
    description: 'Website and shop (in preview) for Woodfox Coffee, a young specialty coffee company.',
    language: 'Astro',
    updated: '2026-10',
  },
  {
    name: 'doromezcal-site',
    description: 'Brand website for D’Oro Mezcal.',
    language: 'HTML / CSS',
    updated: '2026-03',
  },
  {
    name: 'steph-success-site',
    description: 'Multi-page professional site for Stephani Luna (stephaniluna.com). Static HTML with a small Node build script.',
    language: 'HTML / CSS',
    updated: '2026-10',
  },
];
