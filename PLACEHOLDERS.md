# Placeholders

Everything the Content doc leaves in [brackets], and the file where you fill it in. Photos and video are not
listed here: every Home card and inner page already has a photo (stills from the hero video and edited footage),
and the README's "Add or swap a photo" section says which file is which so they can be swapped for real team photos.

| Placeholder | Where it shows | File to edit |
|---|---|---|
| `[team email]` | Footer, Work with us page, Privacy page | `src/data/site.ts` (`teamEmail`) |
| `[finance email or form]` | Donate, "Contact our finance team" button (greyed out until filled in) | `src/data/site.ts` (`financeContact`) |
| Instagram, LinkedIn, YouTube links | Footer, "Connect with us" (plain text until filled in) | `src/data/site.ts` (`socialLinks`) |
| `[Major, year]` (all 5 people) | Who we are | `src/data/team.ts` |
| Team photos (initials show until a photo is added) | Who we are | `public/images/team/` (file names are in `src/data/team.ts`) |
| Team LinkedIn links (optional, hidden until filled in) | Who we are | `src/data/team.ts` (`linkedin`) |
| `[Date]` and `[One line on how Talosaur started.]` | "Project kicks off" news entry | `src/content/news/project-kicks-off.md` |
| `[Credits for the remaining third-party stills...]` | Image credits page | `src/pages/image-credits.astro` |
| `[Photographer and source for these four photos.]` (zoanthids, porcelain crab, soft coral, pygmy seahorse headers) | Image credits page | `src/pages/image-credits.astro` |
| `[A short paragraph about the deep reefs...]` and the second paragraph | The Problem, Section 04 "Habitat" | `src/data/problem.ts` (`habitat.paragraphs`) |
| `[distance] km` (College Station to Flower Garden Banks) | The Problem, Section 03 | `src/data/problem.ts` (`habitat.facts`) |
| Temperature, "Who lives here" and "Surveys a year" values | The Problem, Section 03 "At a glance" | `src/data/problem.ts` (`glance`) |
| Four `[One or two sentences on...]` lines (Research, Conservation, Fisheries, Offshore energy) | Work with us, Section 01 "Who we work with" | `src/pages/work-with-us.astro` (`audiences`) |
| Three `[What ... costs]` lines (Parts, Testing, Field trips) | Donate, Section 02 "Where it goes" | `src/pages/donate.astro` (`support`) |
| `[A few lines on what being on the team is like...]` and `[A line on who to ask...]` | Positions, Section 01 "Life on the team" | `src/pages/positions.astro` (`life`) |
| Four `[When, and what this test shows.]` lines (Pool, Lake Bryan and Lake Travis, Galveston, Offshore) | News, Section 01 "Where we test" | `src/pages/news.astro` (`tests`) |
| Stand-in photos in the new sections (NOAA and Pexels footage); swap for the team's own when you have them | Work with us, Donate, Positions, News | `public/images/sections/` (same file names) |
| Photos whose tag says what should go there: `[ Photo: Turtle in the pool ]` (`support-testing.jpg`, a NOAA vehicle for now), `[ Photo: the team at a build day ]` (`team-build.jpg`, a lathe for now; `team-lab.jpg` beside it is a microscope), and `[ Photo: pool test ]`, `[ Photo: lake test ]`, `[ Photo: Galveston ]`, `[ Photo: first offshore footage ]` (`test-*.jpg`) | Donate, Positions, News | `public/images/sections/` (same file names); change the tag text in the page's list when the real photo is in |

## To confirm

- **Ocean Image Bank photos** (the animals in The Problem depth graphic): free for non-commercial use with credit to the photographer and Ocean Image Bank. Check that the site counts as non-commercial (it has a Donate page, but no payments). Credits are on the Image credits page.
- **Sources on The Problem page.** Every number and fact now links to a source (the `sources` list at the top of `src/data/problem.ts`). Give them a read before launch. The closest match for the robot cost range is Deep Trekker's ROV buying guide (inspection ROVs $15,000 to $300,000, work-class ROVs $250,000 up to millions); swap in the team's own source if the $50,000 figure came from somewhere specific.
- **New section titles** ("At a glance", "Habitat", "Who we work with", "Where it goes", "Life on the team", "Where we test" and its four steps) and the small photo tags were written as stand-ins, not Content doc copy. Change them where each section is.
- **Patch captions** ("On deck", "Making parts" and so on) are short labels written for the inset photos, not Content doc copy. Change them where each page uses `<Patch>`.
