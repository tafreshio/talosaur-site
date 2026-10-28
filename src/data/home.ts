// Cards and buttons on the Home page (copy from the Content doc).
// "photo" is a filename in public/images/. Every card shows its photo; to swap one, replace the
// file and keep the same name. If a file is missing, the card shows a plain dark panel of the same shape.
// A link in [brackets] is a placeholder: the card shows but isn't clickable yet.
// "standIn" says what the photo should show. Until that file is in public/images/, the card shows a
// "photo to come" panel with these words (no borrowed picture). Once the photo is in, the line can go.
import { twitchUrl } from './site';

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
