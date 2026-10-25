// Site-wide links used by the header and footer.
// Edit this file to rename a link, change where it goes, or fill in a placeholder.

export const teamEmail = '[team email]'; // PLACEHOLDER: replace with the real address, e.g. 'team@talosaur.org'

// Top navigation, in order. Numbers ("01", "02"...) are added automatically.
export const mainNav = [
  { label: 'Who we are', href: '/who-we-are' },
  { label: 'The Problem', href: '/the-problem' },
  { label: 'News', href: '/news' },
  { label: 'Work with us', href: '/work-with-us' },
  { label: 'Positions', href: '/positions' },
  { label: 'Donate', href: '/donate' },
];

// Footer columns
export const footerColumns = [
  {
    title: 'Explore Talosaur',
    links: [
      { label: 'Who we are', href: '/who-we-are' },
      { label: 'The Problem', href: '/the-problem' },
      { label: 'News', href: '/news' },
    ],
  },
  {
    title: 'Can we help?',
    links: [
      { label: 'Work with us', href: '/work-with-us' },
      { label: 'Positions', href: '/positions' },
      { label: 'Donate', href: '/donate' },
    ],
  },
];

// Social links. Leave href empty ('') until the account exists; it shows as plain text.
export const socialLinks = [
  { label: 'Instagram', href: '' }, // PLACEHOLDER: Instagram URL
  { label: 'LinkedIn', href: '' },  // PLACEHOLDER: LinkedIn URL
  { label: 'YouTube', href: '' },   // PLACEHOLDER: YouTube URL
];

// Bottom row of the footer
export const footerLegal = [
  { label: 'Image credits', href: '/image-credits' },
  { label: 'Privacy', href: '/privacy' },
];

// True if a value is still a [bracket] placeholder
export const isPlaceholder = (value: string) => value.trim().startsWith('[');
