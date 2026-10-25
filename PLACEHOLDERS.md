# Placeholders

Everything the Content doc leaves in [brackets], and the file where you fill it in. Photos and video are not
listed here: every Home card already has a photo (stills from the hero video and the team's artwork), and the
README's "Add or swap a photo" table says which file is which so they can be swapped for real team photos.

| Placeholder | Where it shows | File to edit |
|---|---|---|
| `[team email]` | Footer, Work with us page, Privacy page | `src/data/site.ts` (`teamEmail`) |
| `[finance email or form]` | Donate, "Contact our finance team" button (greyed out until filled in) | `src/data/site.ts` (`financeContact`) |
| Instagram, LinkedIn, YouTube links | Footer, "Connect with us" (plain text until filled in) | `src/data/site.ts` (`socialLinks`) |
| `[Live stream link]` | Home, "Talosaur Live" card (not clickable until filled in) | `src/data/home.ts` |
| `[Name]` (3 people) and `[Major, year]` (all 4) | Who we are | `src/data/team.ts` |
| Team LinkedIn links (optional, hidden until filled in) | Who we are | `src/data/team.ts` (`linkedin`) |
| `[X]` hours a week | Positions intro | `src/data/positions.ts` (`positionsIntro`) |
| `[Add a source for these numbers.]` (cost figures) | The Problem, under the big numbers | `src/data/problem.ts` (`statsSource`) |
| `[Date]` and `[One line on how Talosaur started.]` | "Project kicks off" news entry | `src/content/news/project-kicks-off.md` |
| `[Credits for any third-party footage or photos...]` | Image credits page | `src/pages/image-credits.astro` |
| Site address (`https://talosaur.example`) | Social-share previews only; set it after deploying | `astro.config.mjs` (`site`) |
| Logo: text "TALOSAUR" and a simple "T" favicon | Header, footer, hero, browser tab | `src/components/Header.astro`, `Footer.astro`, `HeroVideo.astro`, `public/favicon.*` |
