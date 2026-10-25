# Talosaur website

The Talosaur team website, built with [Astro](https://astro.build). It is a static site: no server or database, just pages.

## Run the site on your computer

You need [Node.js](https://nodejs.org) installed (version 22 or newer).

```sh
npm install      # first time only: downloads Astro
npm run dev      # starts the site at http://localhost:4321
```

Edits show up in the browser as soon as you save a file. Stop the server with `Ctrl + C`.

To check that the site builds without errors before publishing:

```sh
npm run build
```

## Where things live

| What | File |
|---|---|
| Colors, fonts, spacing | `src/styles/global.css` (the `:root` block at the top) |
| Top navigation and footer links, team email, social links | `src/data/site.ts` |
| Top navigation design | `src/components/Header.astro` |
| Footer design | `src/components/Footer.astro` |
| Page wrapper (head, header, footer) used by every page | `src/layouts/BaseLayout.astro` |
| Pages | `src/pages/` (one file per page) |

## Common edits

**Change a link in the nav or footer, or add the team email / social links:**
open `src/data/site.ts` and edit the text between the quotes. Social links left as `''` show as plain text until filled in.

**Change a color or font:** open `src/styles/global.css` and change the value next to the variable (for example `--color-accent`).

Still to come in this README: adding a news post, swapping a photo, editing team members and positions, and deploying.

## Placeholders

See `PLACEHOLDERS.md` for everything that still needs real content.
