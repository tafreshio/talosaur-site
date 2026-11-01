// Cards and buttons on the Home page (copy from the Content doc).
// "photo" is a filename in public/images/. Every card shows its photo; to swap one, replace the
// file and keep the same name. If a file is missing, the card shows a plain dark panel of the same shape.
// A link in [brackets] is a placeholder: the card shows but isn't clickable yet.
// "standIn" says what the photo should show. Until that file is in public/images/, the card shows a
// "photo to come" panel with these words (no borrowed picture). Once the photo is in, the line can go.
import { twitchUrl } from './site';
import { sources as problemSources } from './problem';

// Three cards under the hero
export const heroCards = [
  {
    title: 'Turtle: affordable autonomous underwater vehicle for freshwater',
    text: "Talosaur's first AUV, built to prove affordable documentation is possible.",
    href: '/news',
    photo: 'home-turtle.jpg',
    photoLabel: 'Turtle AUV',
  },
  {
    title: 'Deep eDNA possibilities',
    text: 'Development of lightweight deep-sea eDNA samplers.',
    href: '/news',
    photo: 'home-edna.jpg',
    photoLabel: 'eDNA sampler',
  },
  {
    title: 'Talosaur Live',
    text: 'Join the live build stream and see our engineers at work.',
    href: twitchUrl, // set in src/data/site.ts
    badge: 'Live', // small "● LIVE" sticker on the photo
    photo: 'home-live.jpg',
    standIn: 'the live build stream',
    photoLabel: 'Live build stream',
  },
];

// Featured content
export const featuredHeading = 'Featured content';
export const featuredCards = [
  {
    title: 'Who we are',
    text: 'A Texas-based student team, mostly in College Station.',
    href: '/who-we-are',
    photo: 'home-team.jpg',
    standIn: 'the whole team',
    photoLabel: 'The team',
  },
  {
    title: 'Open positions',
    text: "We're recruiting. See what roles are open.",
    href: '/positions',
    photo: 'home-positions.jpg',
    standIn: 'team members at work',
    photoLabel: 'Team members at work',
  },
  {
    title: 'Our build log',
    text: 'Updates, photos and videos from every stage.',
    href: '/news',
    photo: 'home-build-log.jpg',
    standIn: 'Turtle mid-build',
    photoLabel: 'Build in progress',
  },
];

// "How can we help?" buttons
export const helpButtons = [
  { label: 'Talk to us', href: '/work-with-us' },
  { label: 'Join the team', href: '/positions' },
  { label: 'Support our research', href: '/donate' },
];

// "You may also be interested in"
export const interestedCards = [
  {
    title: 'The twilight zone',
    text: 'Why 50–300 m is so hard to study.',
    href: '/the-problem',
    photo: 'home-twilight-zone.jpg',
    photoLabel: 'The twilight zone',
  },
  {
    title: 'Meet the team',
    text: 'The people behind Talosaur.',
    href: '/who-we-are',
    photo: 'home-meet-the-team.jpg',
    standIn: 'a team portrait',
    photoLabel: 'Team portrait',
  },
  {
    title: 'Get in touch',
    text: "Researchers, sanctuaries and offshore teams: let's talk.",
    href: '/work-with-us',
    photo: 'home-get-in-touch.jpg',
    standIn: 'a Flower Garden Banks reef',
    photoLabel: 'Ocean or field work',
  },
];

// ---------------------------------------------------------------- Section 02: What we're doing
// The plan (src/components/Plan.astro): a statement, four steps as a "dive" that sinks a little with
// each step (src/components/Roadmap.astro) and what we'll offer once it works. Written for the site
// from the Content doc's Home text, Turtle and eDNA cards, Donate and Work with us copy; edit freely.
// In the headline, words between ** and ** get a coloured box.
export const plan = {
  tag: 'Our plan',
  headline: 'From a pool in College Station to the **twilight\u00a0zone**, and then to **anyone who needs it**.', // no-break space: "twilight zone" stays on one line
  text: "Divers can't reach the twilight zone, and robots and research ships cost too much to send often. We're building a robot that costs far less, testing it a step at a time from the pool to the reef, and then putting it in other people's hands.",
  depth: '50–300 m',
  steps: [
    {
      status: 'Building now',
      title: 'Turtle',
      text: 'Our first autonomous underwater vehicle, built for fresh water to prove affordable documentation is possible.',
      link: { label: 'Follow the build', href: '/news' },
    },
    {
      status: 'In development',
      title: 'Deep eDNA samplers',
      text: 'Lightweight samplers for deep-sea eDNA, the traces of DNA animals leave in the water. They can show what lives there, even what the camera misses.',
    },
    {
      status: 'Next',
      title: 'Into the twilight zone',
      text: 'A vehicle built for 50–300 m, starting with deep reefs close to home like Flower Garden Banks.',
    },
    {
      status: 'The goal',
      title: 'Affordable ocean exploration',
      text: 'Vehicles, research and surveys that researchers, sanctuaries, fisheries and offshore teams can afford, so they can go back again and again.',
      link: { label: "What we'll offer", href: '#offer' },
    },
  ],
  // The dark panel under the steps: what Talosaur will offer once the vehicles work. Nothing is for
  // sale on the site (no online payments); the button goes to Work with us.
  offer: {
    tag: 'Eventually',
    title: "What we'll offer",
    items: [
      { tag: 'To buy', title: 'Vehicles', text: 'Low-cost underwater vehicles that research teams, sanctuaries and companies can buy and run themselves.' },
      { tag: 'To use', title: 'Research', text: 'What we find in the twilight zone: footage, eDNA results and reports on the life we document.' },
      { tag: 'On request', title: 'Surveys', text: "Name the site and we'll go and look, for research, conservation, fisheries and offshore energy." },
    ],
    cta: { label: 'Talk to us', href: '/work-with-us' },
  },
};

// ---------------------------------------------------------------- Under FIND / FOLLOW / FILM
// Three boxed numbers under the stacked words, one for each word (sources in src/data/problem.ts)

export const echoFigures = [
  {
    label: 'Find',
    value: '67–91%',
    text: 'of ocean species have yet to be formally described.',
    sources: [problemSources.explored, problemSources.mora],
  },
  {
    label: 'Follow',
    value: '40 m',
    text: 'is as deep as recreational divers go. The twilight zone runs on to 300 m.',
    sources: [problemSources.diving],
  },
  {
    // not a price: a cost figure here read as if it were what Talosaur charges
    label: 'Film',
    value: '97%',
    text: 'of deep-sea observations come from just five countries, because exploring is so expensive.',
    sources: [problemSources.bell],
  },
];

// ---------------------------------------------------------------- Section 03: Why it matters
// New copy (not from the Content doc): edit freely. Every fact links to its source.
// The statement puts **double stars** around the phrase that gets the violet highlight block.
// Careful with depths: WHOI's "twilight zone" is 200–1,000 m, ours is 50–300 m, so the rows only
// claim things that are true of the water Talosaur works in (the migration passes through it).
export const whyItMatters = {
  statement: 'Every night, **the largest migration on Earth** rises through this water.',
  intro:
    'Fish, squid, shrimp and plankton spend the day in the dark and swim up to feed at night, passing through 50–300 m on the way. What happens down here feeds the ocean and helps keep carbon out of the air, yet it is one of the least watched places on the planet.',
  // The reef panorama behind the statement: the shallow reef divers know, with the water column above it.
  // © The Ocean Agency (photo: Christophe Bailhache, XL Catlin Seaview Survey / 50 Reefs). The file is only
  // resized, not edited; the page crops its credit stamp out of view and credits it in text instead.
  // PERMISSION TO CHECK: The Ocean Agency's licence is non-commercial, with credit and no edits.
  panorama: {
    image: 'sections/why-reef-pano.jpg',
    credit: 'Reef panorama · Christophe Bailhache / The Ocean Agency',
  },
  // A natural inset across the bottom edge of the panorama. SOURCE TO CONFIRM (added by the team).
  fish: {
    image: 'sections/why-lanternfish.jpg',
    tag: 'Lanternfish',
    caption: 'One of the animals that rise toward the surface every night.',
  },
  dial: {
    value: '98%',
    caption: 'Over 98% of Flower Garden Banks National Marine Sanctuary, off Texas, is deep habitat below the coral reefs divers know. That is where Talosaur is headed.',
    source: { label: 'NOAA', href: 'https://sanctuaries.noaa.gov/science/condition/fgbnms/history.html' },
  },
  rows: [
    {
      title: 'The largest migration on Earth',
      text: 'At dusk, animals from the deep swim up to feed near the surface, and sink back before dawn. It happens every night, in every ocean.',
      source: { label: 'WHOI', href: 'https://divediscover.whoi.edu/interactives/otz-migration.html' },
    },
    {
      title: 'Carbon, carried down',
      text: 'Animals that feed at the surface and return to the deep take carbon with them. Some of it stays down for hundreds, even thousands, of years.',
      source: { label: 'WHOI', href: 'https://divediscover.whoi.edu/interactives/otz-migration.html' },
    },
    {
      title: 'Dinner for the giants',
      text: 'Whales, tuna, swordfish and sharks dive hundreds of feet down to feed on the animals that live there.',
      source: { label: 'WHOI', href: 'https://www.whoi.edu/know-your-ocean/ocean-topics/ocean-life/ocean-twilight-zone/' },
    },
  ],
};

// ---------------------------------------------------------------- Section 09: Partners
// New copy (not from the Content doc). A row of partner logos that grows: the partners who have signed
// on, in the order they joined. To add one, put its logo in public/images/partners/ (white on a
// transparent background, PNG or SVG) and add it to `members`; `href` is its website (leave it empty
// for no link).
export const partners = {
  title: 'Partners',
  lead: 'Build it with us.',
  text: "Talosaur is new, so this wall is only just starting. We're looking for more labs, sanctuaries, companies and makers to help build an affordable way into the twilight zone.",
  cta: { label: 'Become a partner', href: '/work-with-us' },
  secondary: { label: 'Or support the build', href: '/donate' },
  members: [
    { name: 'Sustainable Building Initiative', logo: 'sbi.png', href: '' },
  ],
};
