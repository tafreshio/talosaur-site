# Placeholders

Everything on the site that still needs real content, and the file where you fill it in.

| Placeholder | Where it shows | File to edit |
|---|---|---|
| Instagram link | Footer, "Connect with us" | `src/data/site.ts` (`socialLinks`) |
| LinkedIn link | Footer, "Connect with us" | `src/data/site.ts` (`socialLinks`) |
| YouTube link | Footer, "Connect with us" | `src/data/site.ts` (`socialLinks`) |
| Logo (text "TALOSAUR" for now) | Header, big footer wordmark, Home hero | `src/components/Header.astro`, `src/components/Footer.astro`, `src/components/HeroVideo.astro` |
| Favicon (simple cyan "T" for now) | Browser tab, phone home screen | `public/favicon.svg`, `public/favicon.png`, `public/apple-touch-icon.png` |
| Site address (`https://talosaur.example`) | Social-share previews (links in chat apps and social media) | `astro.config.mjs` (`site`) |
| Social-share image (wordmark on blue for now; swap for a real photo if you like) | Previews when the site is shared | `public/images/og-image.jpg` (1200 × 630) |
| `[List each photo or video on the site and who took it.]` | Image credits page | `src/pages/image-credits.astro` |
| `[Privacy policy: ...]` | Privacy page | `src/pages/privacy.astro` |
| `[Live stream link]` | Home, "Talosaur Live" card (not clickable until filled in) | `src/data/home.ts` |
| `[Featured content heading]` (not given in the Content doc) | Home, Section 03 | `src/data/home.ts` (`featuredHeading`) |
| 6 Home card photos still missing: `home-edna.jpg`, `home-live.jpg`, `home-team.jpg`, `home-positions.jpg`, `home-meet-the-team.jpg`, `home-get-in-touch.jpg` | Home, Sections 02, 03 and 06 | Add each file to `public/images/` with that exact name |
| News photos (none yet; each entry can have one) | News page | Add `image: name.jpg` to the entry and put the photo in `public/images/news/` |
| "Project kicks off" news entry: `[Date]` and `[One line on how Talosaur started.]` | News page and Home "Latest news" | `src/content/news/project-kicks-off.md` |
| `[Add a source for these numbers.]` (cost figures) | The Problem, under the big numbers | `src/data/problem.ts` (`statsSource`) |
| Team: `[Name]` (3 people) and `[Major, year]` (all 4) | Who we are | `src/data/team.ts` |
| Team LinkedIn links (optional, hidden until filled in) | Who we are | `src/data/team.ts` (`linkedin`) |
| 4 team photos: `fernando-guzman.jpg`, `ocean-engineer.jpg`, `electrical-engineer.jpg`, `cad-lead.jpg` | Who we are | Add to `public/images/team/` (rename to match a person's name if you also change `photo` in `team.ts`) |
| `[X]` hours a week | Positions intro | `src/data/positions.ts` (`positionsIntro`) |
| `[finance email or form]` | Donate, "Contact our finance team" button (greyed out until filled in) | `src/data/site.ts` (`financeContact`) |
| `[team email]` | Work with us page (also the footer) | `src/data/site.ts` (`teamEmail`) |
| Hero video is 1280 × 720, 51 s, 13 MB. Works, but a shorter, smaller file (see README) would load faster on phones | Home hero | `public/videos/hero.mp4` |
| Image credits for the hero video footage and the three Home photos | Image credits page | `src/pages/image-credits.astro` |
