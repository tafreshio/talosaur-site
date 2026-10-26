// Text for The Problem page (copy from the Content doc).

// Sources for every number and fact on The Problem page. Each shows as a small [ link ] under what it backs up.
const sources = {
  zones: { label: 'Smithsonian', href: 'https://dashboard.si.edu/newsdesk/releases/smithsonian-researchers-name-new-ocean-zone-rariphotic' },
  robots: { label: 'Deep Trekker', href: 'https://www.deeptrekker.com/learn/rov-buying-guide' },
  ship: { label: 'Dialogue Earth', href: 'https://dialogue.earth/en/ocean/scientists-are-becoming-ocean-hitchhikers-to-fill-data-gaps/' },
  diving: { label: 'Scuba Diving', href: 'https://www.scubadiving.com/why-is-130-feet-depth-limit-for-recreational-scuba-diving' },
  fgb: { label: 'NOAA', href: 'https://flowergarden.noaa.gov/about/mesophotic.html' },
  light: { label: 'NOAA', href: 'https://oceanservice.noaa.gov/facts/light_travel.html' },
  pressure: { label: 'NOAA', href: 'https://oceanservice.noaa.gov/facts/pressure.html' },
};

export const problemIntro =
  "Between 50 and 300 meters lies the ocean's twilight zone. It's full of marine life, yet few people ever get to look at it.";

// Big number callouts. "value" is the big text, "caption" explains it.
export const stats = [
  {
    value: '50–300 m',
    caption: "The ocean's twilight zone. Too deep for divers, too costly to revisit.",
    // Smithsonian: deep reefs run through the mesophotic (40–150 m) and rariphotic (130–309 m) zones
    source: sources.zones,
  },
  {
    value: '$50K–$1M+',
    caption: 'What commercial underwater robots cost: $50,000 to over $1 million.',
    // Deep Trekker: inspection and survey ROVs $15,000–$300,000; work-class ROVs $250,000 up to millions
    source: sources.robots,
  },
  {
    value: '$10K+',
    unit: 'a day',
    caption: 'Ship time costs tens of thousands of dollars a day.',
    // Dialogue Earth (2024): "running a research ship can easily cost tens of thousands of dollars a day or more"
    source: sources.ship,
  },
];


// Why the twilight zone is hard to study. These sit inside the depth graphic, at "depth" meters.
// "title" and "text" are the Content doc copy; "fact" is an extra sourced line added under it.
export const reasons = [
  {
    depth: 92,
    title: 'Too deep for divers.',
    text: 'Most of this zone is beyond safe diving limits.',
    fact: 'Recreational scuba divers stop at 40 m (130 ft), a limit that goes back to the U.S. Navy in the 1950s.',
    sources: [sources.diving],
  },
  {
    depth: 142,
    title: 'Too expensive to visit often.',
    text: 'Remotely operated vehicles need pilots and boats, commercial underwater robots cost $50,000 to over $1 million, and ship time costs tens of thousands of dollars a day.',
    fact: '',
    sources: [sources.robots, sources.ship],
  },
  {
    depth: 210,
    title: 'Close to home.',
    text: 'Deep reefs off Texas and Louisiana, including Flower Garden Banks, sit in this zone.',
    fact: "Most of the sanctuary's habitats lie 40 to 221 m down, and in the past 20 years researchers have found new species of shrimp, squat lobster and black coral there.",
    sources: [sources.fgb],
  },
];

// Thin lines across the water at an exact depth
export const depthMarks = [
  { depth: 40, text: 'Recreational dive limit', source: sources.diving },
  { depth: 200, text: 'Rarely any significant sunlight below here', source: sources.light },
];

// Bars beside the ruler showing a depth range
export const depthRanges = [
  { from: 18, to: 50, label: 'Reef · 18–50 m', source: sources.fgb },
  { from: 40, to: 221, label: 'Flower Garden Banks · 40–221 m', source: sources.fgb },
];

// The last note, in the deep band
export const pressureNote = {
  depth: 335,
  title: 'About 31 atmospheres.',
  text: 'Every 10 m of seawater adds about one atmosphere of pressure. At 300 m it is about 31 times the pressure at the surface.',
  source: sources.pressure,
};

// Next to the Talosaur mark in the twilight zone (Content doc, Home hero text)
export const talosaurNote = {
  depth: 268,
  text: 'Talosaur is a Texas-based student team building a low-cost underwater robot that finds, follows and films marine life there.',
};

// Depth bands graphic, top to bottom. The graphic is drawn to scale:
// "from" and "to" are depths in meters and decide where each band starts and ends.
// The last band has no real bottom, so "to" is just where the drawing stops.
export const depthBands = [
  { depth: '0–50 m', name: 'Sunlit', text: 'Within reach of divers.', zone: 'sunlit', from: 0, to: 50 },
  { depth: '50–300 m', name: 'Twilight zone', text: 'Too deep for divers, too costly to revisit.', zone: 'twilight', from: 50, to: 300 },
  { depth: '300 m+', name: '', text: 'Reached by research ships and deep vehicles.', zone: 'deep', from: 300, to: 400 },
];
