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
| Home page video hero | `src/components/HeroVideo.astro` |
| Home page cards, buttons and featured heading | `src/data/home.ts` |
| News posts | `src/content/news/` (one `.md` file per post) |
| The Problem page text, big numbers and depth bands | `src/data/problem.ts` |
| Photos | `public/images/` |
| Videos | `public/videos/` |
| Page wrapper (head, header, footer) used by every page | `src/layouts/BaseLayout.astro` |
| Pages | `src/pages/` (one file per page) |

## Common edits

**Change a link in the nav or footer, or add the team email / social links:**
open `src/data/site.ts` and edit the text between the quotes. Social links left as `''` show as plain text until filled in.

**Change a color or font:** open `src/styles/global.css` and change the value next to the variable (for example `--color-accent`).

## Swap a photo

Every photo spot shows a striped placeholder box with a label like `public/images/home-turtle.jpg`. To fill it, save your photo in `public/images/` with **exactly that filename** (JPG, about 1600 px wide, under 500 KB). It replaces the box the next time the site builds. To replace a photo that's already there, overwrite the file and keep the same name.

## Add a news post

Create a new file in `src/content/news/`, for example `first-dive.md`. The filename becomes the post's web address, so use lowercase words and hyphens. Paste this in and edit it:

```md
---
title: First dive
date: 2026-11-20
---

One or two sentences about what happened.
```

- `date` is year-month-day. The site sorts newest first and shows it as "Nov 20, 2026".
- For something planned but not done yet, swap the `date:` line for `upcoming: true` and `dateLabel: Coming soon`. Upcoming posts show at the top.
- Optional photo: add `image: first-dive.jpg` and put the photo in `public/images/news/`.

The News page (`src/pages/news.astro`) lists every post, and the Home page automatically shows the four newest, each linking to that post on the News page.

## Swap the Home page video

The full-screen video at the top of the Home page uses two files. Replace them and keep the exact same names:

| File | What it is |
|---|---|
| `public/videos/hero.mp4` | The background video |
| `public/images/hero-poster.jpg` | A still frame from the video. It shows while the video loads, and instead of the video for visitors who have "reduce motion" turned on in their phone or computer settings |

Until `hero.mp4` exists, the site shows the still image with a small "Placeholder" tag. Once you add the file, the video appears the next time the site is built (automatically when you deploy, or restart `npm run dev` on your computer).

**Video file checklist**

- **Format:** MP4 (H.264 video). This plays on every browser, including iPhones.
- **Size on screen:** 1920 × 1080 (landscape, 16:9).
- **Length:** 10 to 20 seconds. It loops, so pick a clip where the end flows back into the start.
- **No sound.** Browsers only autoplay muted video, and the site never plays audio. Remove the audio track to save space.
- **File size:** aim for under 5 MB (10 MB at most). Big files load slowly on phones.
- **Framing:** on phones the left and right sides get cropped, so keep the subject near the center. The headline sits over the bottom-left, so keep that area fairly dark and calm.

**Poster image checklist:** JPG, 1920 × 1080, under 300 KB, ideally the first frame of the video.

**Compressing a video** with the free tool [ffmpeg](https://ffmpeg.org) (`brew install ffmpeg` on a Mac):

```sh
ffmpeg -i original.mov -an -vf "scale=1920:-2" -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart hero.mp4
```

`-an` removes the sound, `-crf 26` sets the quality (higher number = smaller file, try 23 to 30), and `-movflags +faststart` lets it start playing before it fully downloads. To grab the first frame as the poster:

```sh
ffmpeg -i hero.mp4 -frames:v 1 -q:v 3 hero-poster.jpg
```

Still to come in this README: editing team members and positions, and deploying.

## Placeholders

See `PLACEHOLDERS.md` for everything that still needs real content.
