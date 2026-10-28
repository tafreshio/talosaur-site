// Team members on the Who we are page, in the order they appear.
//
// To add someone, copy one { ... } block and edit it.
// photo:    filename in public/images/team/ (portrait, about 800 x 1000 px). Until the file exists,
//           the card shows a panel with the person's initials instead.
// linkedin: full LinkedIn URL, or leave as '' to hide the link
// lead:     true for the one person shown on their own at the top, with a description box beside them
// bio:      the text in that description box (only used for the lead)

export const teamIntro =
  "We're a team of students from Texas A&M and UT Austin. Most of us build in College Station.";

export interface TeamMember {
  name: string;
  role: string;
  majorYear: string;
  photo: string;
  linkedin: string;
  lead?: boolean;
  bio?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Fernando Guzman',
    role: 'Founder',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'fernando-guzman.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
    lead: true,
    // In Fernando's own words (first person)
    bio: 'I started Talosaur to discover a fish, the Talosaur, and to allow for cheaper ocean surveying. I think that when we build an AUV to get down to the mesopelagic region, we will show how efficient engineering can really be. Also, my team is very good.',
  },
  {
    name: 'Sam Cakici',
    role: 'Mechanical Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'sam-cakici.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
  {
    name: 'Kabir Muzumdar',
    role: 'Hydraulics Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'kabir-muzumdar.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
  {
    name: 'Nicholas Khu',
    role: 'Electrical Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'nicholas-khu.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
  {
    name: 'Omeed Tafreshi',
    role: 'Software Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'omeed-tafreshi.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
];
