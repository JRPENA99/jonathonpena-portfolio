/**
 * SAMPLE DATA for the demo interfaces.
 * Every company, person and number here is invented for illustration.
 * None of it represents real customers, prospects, results or production systems.
 */

export const stages = ['Prospect', 'Qualified', 'Proposal', 'Negotiation', 'Won'] as const;
export type Stage = (typeof stages)[number];

export interface Deal {
  id: string;
  account: string;
  contact: string;
  stage: Stage;
  value: number;
  industry: string;
  next: string;
  due: string;
  owner: string;
}

export const deals: Deal[] = [
  { id: 'd1', account: 'Bayline Polymers', contact: 'R. Okafor', stage: 'Proposal', value: 48000, industry: 'Chemicals', next: 'Send revised lane pricing', due: 'Today', owner: 'JP' },
  { id: 'd2', account: 'Gulf Reach Distribution', contact: 'M. Alvarez', stage: 'Qualified', value: 22000, industry: 'Distribution', next: 'Discovery call', due: 'Tomorrow', owner: 'JP' },
  { id: 'd3', account: 'Northfork Coatings', contact: 'S. Patel', stage: 'Negotiation', value: 71000, industry: 'Chemicals', next: 'Review contract terms', due: 'Fri', owner: 'JP' },
  { id: 'd4', account: 'Cedar Point Resins', contact: 'L. Chen', stage: 'Prospect', value: 15000, industry: 'Chemicals', next: 'Intro email', due: 'Today', owner: 'JP' },
  { id: 'd5', account: 'Harbor Steelworks', contact: 'D. Brooks', stage: 'Proposal', value: 39000, industry: 'Metals', next: 'Follow up on proposal', due: 'Mon', owner: 'JP' },
  { id: 'd6', account: 'Lonestar Agro Inputs', contact: 'A. Reyes', stage: 'Won', value: 26000, industry: 'Agriculture', next: 'Kickoff & onboarding', due: 'Wed', owner: 'JP' },
  { id: 'd7', account: 'Meridian Lubricants', contact: 'K. Novak', stage: 'Qualified', value: 33000, industry: 'Chemicals', next: 'Confirm volumes', due: 'Thu', owner: 'JP' },
  { id: 'd8', account: 'Ship Channel Packaging', contact: 'T. Nguyen', stage: 'Prospect', value: 12000, industry: 'Packaging', next: 'Research decision maker', due: 'Fri', owner: 'JP' },
  { id: 'd9', account: 'Brazos Specialty Gases', contact: 'J. Haddad', stage: 'Negotiation', value: 54000, industry: 'Chemicals', next: 'Final pricing call', due: 'Tomorrow', owner: 'JP' },
  { id: 'd10', account: 'Trinity Food Ingredients', contact: 'P. Laurent', stage: 'Won', value: 18000, industry: 'Food & Bev', next: 'First shipment check-in', due: 'Mon', owner: 'JP' },
];

/** Weekly pipeline value (USD thousands), last 12 weeks. */
export const pipelineTrend = [182, 190, 186, 204, 211, 208, 226, 231, 244, 239, 252, 268];
export const pipelineTrend90 = [120, 128, 141, 150, 147, 158, 163, 171, 176, 182, 204, 226, 268];

export const activity = [
  { when: '9:42 AM', who: 'Bayline Polymers', what: 'Proposal opened (3rd view)', kind: 'signal' },
  { when: '9:10 AM', who: 'Northfork Coatings', what: 'Call logged · 18 min', kind: 'call' },
  { when: 'Yesterday', who: 'Gulf Reach Distribution', what: 'Moved to Qualified', kind: 'stage' },
  { when: 'Yesterday', who: 'Cedar Point Resins', what: 'Added from Lead Engine', kind: 'lead' },
  { when: 'Mon', who: 'Lonestar Agro Inputs', what: 'Marked Won', kind: 'stage' },
];

export interface Lead {
  company: string;
  industry: string;
  region: string;
  trade: 'Import' | 'Export' | 'Both' | 'Unknown';
  services: string;
  fit: number; // 0-100
  priority: 'High' | 'Medium' | 'Low';
  research: 'New' | 'Enriched' | 'Researched' | 'Ready';
  signal: string;
}

export const leads: Lead[] = [
  { company: 'Bayline Polymers', industry: 'Chemicals', region: 'Houston, TX', trade: 'Both', services: 'Bulk liquid, drayage', fit: 92, priority: 'High', research: 'Ready', signal: 'Frequent ocean import activity; hazmat handling' },
  { company: 'Brazos Specialty Gases', industry: 'Chemicals', region: 'Freeport, TX', trade: 'Export', services: 'ISO tanks', fit: 88, priority: 'High', research: 'Researched', signal: 'Export-heavy, specialized equipment needs' },
  { company: 'Meridian Lubricants', industry: 'Chemicals', region: 'Baytown, TX', trade: 'Import', services: 'Packaged goods, warehousing', fit: 79, priority: 'High', research: 'Enriched', signal: 'New facility listed in public filings' },
  { company: 'Harbor Steelworks', industry: 'Metals', region: 'Beaumont, TX', trade: 'Import', services: 'Flatbed, project cargo', fit: 64, priority: 'Medium', research: 'Researched', signal: 'Seasonal import volume' },
  { company: 'Gulf Reach Distribution', industry: 'Distribution', region: 'Pasadena, TX', trade: 'Both', services: 'Cross-dock, LTL', fit: 71, priority: 'Medium', research: 'Ready', signal: 'Multi-region distribution footprint' },
  { company: 'Cedar Point Resins', industry: 'Chemicals', region: 'La Porte, TX', trade: 'Export', services: 'Bulk dry', fit: 83, priority: 'High', research: 'New', signal: 'Resin exporter, port-adjacent' },
  { company: 'Lakeshore Paints', industry: 'Coatings', region: 'Lake Charles, LA', trade: 'Unknown', services: 'Packaged goods', fit: 48, priority: 'Low', research: 'New', signal: 'Limited public trade data' },
  { company: 'Sabine Industrial Supply', industry: 'Distribution', region: 'Orange, TX', trade: 'Import', services: 'LTL', fit: 55, priority: 'Medium', research: 'Enriched', signal: 'Imports MRO supplies' },
  { company: 'Corpus Bay Petrochem', industry: 'Chemicals', region: 'Corpus Christi, TX', trade: 'Export', services: 'Bulk liquid', fit: 86, priority: 'High', research: 'Enriched', signal: 'High export volume through regional port' },
  { company: 'Westpark Plastics', industry: 'Plastics', region: 'Katy, TX', trade: 'Import', services: 'Drayage, warehousing', fit: 61, priority: 'Medium', research: 'Researched', signal: 'Imports resin pellets' },
];

export const ops = {
  stages: [
    { name: 'Intake', count: 14 },
    { name: 'Review', count: 9 },
    { name: 'In progress', count: 21 },
    { name: 'QA', count: 6 },
    { name: 'Done', count: 48 },
  ],
  /** Items completed per day, two sample weeks. */
  throughput: {
    'This week': [11, 14, 9, 16, 13, 6, 4],
    'Last week': [9, 12, 12, 10, 15, 5, 3],
  } as Record<string, number[]>,
  completion: { 'This week': 0.86, 'Last week': 0.81 } as Record<string, number>,
  tasks: [
    { id: 'OP-214', title: 'Reconcile inbound materials count', owner: 'Warehouse', state: 'In progress', due: 'Today' },
    { id: 'OP-209', title: 'Update quote template with new labor rates', owner: 'Ops', state: 'Review', due: 'Today' },
    { id: 'OP-201', title: 'Tag and log returned tools', owner: 'Field', state: 'QA', due: 'Tomorrow' },
    { id: 'OP-198', title: 'Close out job folder documentation', owner: 'Admin', state: 'Intake', due: 'Fri' },
    { id: 'OP-193', title: 'Audit van inventory against tracker', owner: 'Field', state: 'In progress', due: 'Fri' },
  ],
  exceptions: [
    { id: 'EX-31', title: 'Count mismatch: 3/4" fittings', severity: 'High', age: '2d' },
    { id: 'EX-29', title: 'Job missing signed scope', severity: 'Medium', age: '4d' },
    { id: 'EX-27', title: 'Material received without PO', severity: 'Low', age: '6d' },
  ],
};

export const tasks = [
  { id: 't1', title: 'Send revised lane pricing to Bayline', account: 'Bayline Polymers', due: 'Today', done: false },
  { id: 't2', title: 'Prep questions for Gulf Reach discovery call', account: 'Gulf Reach Distribution', due: 'Tomorrow', done: false },
  { id: 't3', title: 'Find logistics manager at Cedar Point', account: 'Cedar Point Resins', due: 'Today', done: false },
  { id: 't4', title: 'Log notes from Northfork call', account: 'Northfork Coatings', due: 'Today', done: true },
  { id: 't5', title: 'Onboarding checklist for Lonestar', account: 'Lonestar Agro Inputs', due: 'Wed', done: false },
];
