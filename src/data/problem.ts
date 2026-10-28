// Text for The Problem page (copy from the Content doc).

// Sources for every number and fact on The Problem page. Each shows as a small [ link ] under what it backs up.
export const sources = {
  zones: { label: 'Smithsonian', href: 'https://dashboard.si.edu/newsdesk/releases/smithsonian-researchers-name-new-ocean-zone-rariphotic' },
  robots: { label: 'Deep Trekker', href: 'https://www.deeptrekker.com/learn/rov-buying-guide' },
  ship: { label: 'Dialogue Earth', href: 'https://dialogue.earth/en/ocean/scientists-are-becoming-ocean-hitchhikers-to-fill-data-gaps/' },
  diving: { label: 'Scuba Diving', href: 'https://www.scubadiving.com/why-is-130-feet-depth-limit-for-recreational-scuba-diving' },
  fgb: { label: 'NOAA', href: 'https://flowergarden.noaa.gov/about/mesophotic.html' },
  light: { label: 'NOAA', href: 'https://oceanservice.noaa.gov/facts/light_travel.html' },
  pressure: { label: 'NOAA', href: 'https://oceanservice.noaa.gov/facts/pressure.html' },
  // NOAA's 2023 Flower Garden Banks National Marine Sanctuary poster (also the source of its photos)
  poster: { label: 'NOAA poster', href: 'https://sanctuaries.noaa.gov/media/posters/2023-flower-garden-banks-national-marine-sanctuary-poster.pdf' },
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
    depth: 136,
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
  { depth: '300 m+', name: '', text: 'Reached by research ships and deep vehicles.', zone: 'deep', from: 300, to: 380 },
];

// ---------------------------------------------------------------- Section 04: Habitat
// The map is public/images/sections/habitat-map.png; the two labels on it are placed in
// src/pages/the-problem.astro. The first paragraph and the new facts come from NOAA's 2023 sanctuary
// poster (sources.poster); the second paragraph is still a placeholder for the team to write.
export const habitat = {
  title: 'Flower Garden Banks',
  paragraphs: [
    'Flower Garden Banks National Marine Sanctuary covers 17 reefs and banks 80 to 125 miles off the Texas and Louisiana coast. The coral reefs on top are among the healthiest in the world, but they make up only 2% of the sanctuary. Most of it lies deeper, in the twilight zone, on reefs of black corals, octocorals and sponges. Reef fish, manta rays, sea turtles and sharks live across the sanctuary.',
    "[A second paragraph on why the deeper reefs are hard to visit, and what regular filming there could show.]", // PLACEHOLDER
  ],
  facts: [
    { label: 'Reef depth', value: '40–221 m', source: sources.fgb },
    { label: 'Off the coast', value: '80–125 miles south of Texas and Louisiana', source: sources.poster },
    { label: 'Protected area', value: '160 square miles', source: sources.poster },
    { label: 'Reef monitoring', value: 'Every year since 1989, on the shallow reefs', source: sources.poster },
    // straight line from College Station to East and West Flower Garden Bank (worked out from their coordinates)
    { label: 'From College Station', value: 'About 400 km (250 miles)' },
  ],
};

// Flower Garden Banks in numbers, for the story band between the habitat and the animals
export const fgbStats = [
  { title: '17', text: 'Reefs and banks in the sanctuary' },
  { title: '160', text: 'Square miles protected' },
  { title: '2%', text: 'Is the shallow coral reef divers know. Most of the rest lies deeper.' },
];

// Who lives here: four animals from the poster, each with a NOAA photo (public/images/sections/fgb-*.jpg)
export const fgbSpecies = [
  { image: 'fgb-black-coral.jpg', tag: 'NOAA / UNCW-UVP', title: 'Black coral', text: 'Lives on the deeper reefs. New species turn up during deep-sea exploration; this one was first described in 2017.' },
  { image: 'fgb-marbled-grouper.jpg', tag: 'G.P. Schmahl · NOAA', title: 'Marbled grouper', text: 'A shy fish that prefers deeper reefs, so divers rarely see one.' },
  { image: 'fgb-manta-ray.jpg', tag: 'G.P. Schmahl · NOAA', title: 'Manta ray', text: 'A common sight in the sanctuary. Each one can be told apart by the markings on its belly.' },
  { image: 'fgb-trunkfish.jpg', tag: 'Emma Hickerson · NOAA', title: 'Golden smooth trunkfish', text: 'One of the only places in the world to find the golden form of this fish.' },
];

// ---------------------------------------------------------------- Section 03: At a glance
// The twilight zone as a fact sheet (Colossal's mammoth page style). Values in [brackets] are placeholders.
export const glance = [
  { label: 'Depth', value: '50–300 m' },
  { label: 'Sunlight', value: 'Rarely any significant sunlight below 200 m', source: sources.light },
  { label: 'Pressure', value: 'About 6 to 31 times the surface', source: sources.pressure },
  { label: 'Temperature', value: '[Typical temperature range]' }, // PLACEHOLDER
  { label: 'Who lives here', value: 'At Flower Garden Banks: black corals, octocorals, sponges and reef fish', source: sources.poster },
  { label: 'Surveys a year', value: '[How often this zone gets surveyed]' }, // PLACEHOLDER
];
