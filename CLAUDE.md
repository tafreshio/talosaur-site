# Talosaur Website

## About the project
Talosaur is a Texas A&M student team building a low-cost underwater robot that finds and films marine life in the ocean's twilight zone (50 to 300 m deep). This website explains the problem, shows the team and progress, recruits new members, and makes it easy to contact the team.

The full requirements are in `docs/`. **`docs/Talosaur Website Content.pdf` is the source of truth for pages and copy.** The "Look" section of the Build Brief (colors, fonts, Shell-style design) has been scrapped. Ignore it.

## About me
I'm a CS student but this is my first website. Work in small steps, tell me what you changed and why, and explain web concepts (Astro components, layouts, CSS) when they come up so I can maintain this myself.

## Tech stack
- Astro, static output, no backend
- Hosted free on Vercel or Netlify from GitHub
- Plain CSS (no Tailwind) unless I ask otherwise
- All colors, fonts and spacing defined as CSS variables in one global stylesheet so they are easy to change later

## Design direction
- Inspired by https://colossal.com: bold editorial "startup" look
  - Numbered navigation and section labels (for example "01 Who we are", "Section 01")
  - Large uppercase headlines, big stat callouts, full-width photos
  - Dated news list
  - Clean layout with generous spacing and subtle motion
  - Home hero: full-width background video (autoplay, muted, looping) with the headline over it, like Colossal's opening video. Our own footage will be provided; use a labeled placeholder until then.
- Colossal replaces shell.com as the reference. Where the Content doc says "same layout as shell.com" (home hero, footer), follow the Colossal-style layout instead but keep the Content doc's copy.
- Use it for inspiration only. Never copy Colossal's images, logos, text or code.
- Theme fits the deep ocean / twilight zone. Before building, propose a palette and font pairing (free Google Fonts) for me to approve.
- Must look and work well on phones. Check every page at mobile width.

## Pages (from the Content doc)
Top navigation: Talosaur logo · Who we are · The Problem · News · Work with us · Positions · Donate

1. **Home**: hero, three cards, featured content, "How can we help?" buttons, latest 4 news entries, "You may also be interested in" cards
2. **The Problem**: the gap in the water column, cost and depth facts, depth bands graphic
3. **News**: newest first; date, title, one or two sentences, optional photo
4. **Who we are**: team cards (photo, name, role, major and year, optional LinkedIn)
5. **Positions**: intro plus open roles, each with an Apply button linking to the application form
6. **Donate**: ways to help plus a contact button. No online payments.
7. **Work with us**: contact page with email and location
8. **Footer** on every page: Explore / Can we help? / Connect with us columns plus bottom row

Use the exact copy from the Content doc unless I say otherwise.

## Hard rules
- **No em dashes (—) anywhere on the site.** Use a period, comma, colon or parentheses. En dashes in number ranges (50–300 m) are fine.
- **No technical details about how the robot works** (code, wiring, electronics, AI).
- No online payments.

## Placeholders
Anything missing (photos, names, emails, links, dates, the cost-figures source) becomes a clear placeholder:
- Text: keep the [bracket] style from the Content doc
- Photos: neutral boxes with the correct aspect ratio, labeled with what goes there
- Keep a running list of every placeholder and the file it lives in, in `PLACEHOLDERS.md`

## Must be easy for the team to update
- Each news entry is its own Markdown file in an Astro content collection (`src/content/news/`). Adding an update = adding one file.
- Team members and open positions live in simple data files, not hard-coded in page markup.
- All images go in one predictable folder so swapping a photo = replacing a file with the same name.
- Keep `README.md` updated with plain-language instructions for: running the site locally, adding a news post, swapping a photo, editing team/positions, and deploying.

## Before finishing any task
- Search the project for "—" and remove any em dashes
- Check the page at phone width
- Make sure `npm run build` succeeds
