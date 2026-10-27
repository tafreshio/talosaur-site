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
    role: 'Project Lead',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'fernando-guzman.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
    lead: true,
    // PLACEHOLDER: two or three sentences about Fernando
    bio: '[Two or three sentences about Fernando: what he leads on the team, his background, and what drew him to Talosaur.]',
  },
  {
    name: 'Omeed Tafreshi',
    role: 'Software Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'omeed-tafreshi.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
  {
    name: '[Name]', // PLACEHOLDER
    role: 'Ocean Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'ocean-engineer.jpg',
    linkedin: '',
  },
  {
    name: '[Name]', // PLACEHOLDER
    role: 'Electrical Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'electrical-engineer.jpg',
    linkedin: '',
  },
  {
    name: '[Name]', // PLACEHOLDER
    role: 'CAD Lead',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'cad-lead.jpg',
    linkedin: '',
  },
];
