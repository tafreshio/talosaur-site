// Text for The Problem page (copy from the Content doc).

export const problemIntro =
  "Between 50 and 300 meters lies the ocean's twilight zone. It's full of marine life, yet few people ever get to look at it.";

// Big number callouts. "value" is the big text, "caption" explains it.
export const stats = [
  {
    value: '50–300 m',
    caption: "The ocean's twilight zone. Too deep for divers, too costly to revisit.",
  },
  {
    value: '$50K–$1M+',
    caption: 'What commercial underwater robots cost: $50,000 to over $1 million.',
  },
  {
    value: '$10K+',
    unit: 'a day',
    caption: 'Ship time costs tens of thousands of dollars a day.',
  },
];

// PLACEHOLDER: replace with the real source (a name and, ideally, a link)
export const statsSource = '[Add a source for these numbers.]';

// Why the twilight zone is hard to study
export const reasons = [
  {
    title: 'Too deep for divers.',
    text: 'Most of this zone is beyond safe diving limits.',
  },
  {
    title: 'Too expensive to visit often.',
    text: 'Remotely operated vehicles need pilots and boats, commercial underwater robots cost $50,000 to over $1 million, and ship time costs tens of thousands of dollars a day.',
  },
  {
    title: 'Close to home.',
    text: 'Deep reefs off Texas and Louisiana, including Flower Garden Banks, sit in this zone.',
  },
];

// Depth bands graphic, top to bottom
export const depthBands = [
  { depth: '0–50 m', name: 'Sunlit', text: 'Within reach of divers.', zone: 'sunlit' },
  { depth: '50–300 m', name: 'Twilight zone', text: 'Too deep for divers, too costly to revisit.', zone: 'twilight' },
  { depth: '300 m+', name: '', text: 'Reached by research ships and deep vehicles.', zone: 'deep' },
];
