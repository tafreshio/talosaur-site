# Placeholders

Everything the Content doc leaves in [brackets], and the file where you fill it in. Photos and video are not
listed here: every Home card and inner page already has a photo (stills from the hero video and edited footage),
and the README's "Add or swap a photo" section says which file is which so they can be swapped for real team photos.

| Placeholder | Where it shows | File to edit |
|---|---|---|
| `[team email]` | Footer, Work with us page, Privacy page | `src/data/site.ts` (`teamEmail`) |
| `[finance email or form]` | Donate, "Contact our finance team" button (greyed out until filled in) | `src/data/site.ts` (`financeContact`) |
| Instagram, LinkedIn, YouTube links | Footer, "Connect with us" (plain text until filled in) | `src/data/site.ts` (`socialLinks`) |
| `[Name]` (3 people) and `[Major, year]` (all 5) | Who we are | `src/data/team.ts` |
| Team photos (initials show until a photo is added) | Who we are | `public/images/team/` (file names are in `src/data/team.ts`) |
| Team LinkedIn links (optional, hidden until filled in) | Who we are | `src/data/team.ts` (`linkedin`) |
| `[Add a source for these numbers.]` (cost figures) | The Problem, under the big numbers | `src/data/problem.ts` (`statsSource`) |
| `[Date]` and `[One line on how Talosaur started.]` | "Project kicks off" news entry | `src/content/news/project-kicks-off.md` |
| `[Credits for the remaining third-party stills...]` | Image credits page | `src/pages/image-credits.astro` |
