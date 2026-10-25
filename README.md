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
npm run build    # builds the finished site into the dist/ folder
npm run check    # looks for mistakes in the code (typos in data files, missing fields)
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
| Team members | `src/data/team.ts` |
| Open positions and the application form link | `src/data/positions.ts` |
| Team email, finance contact, location | `src/data/site.ts` |
| Photos | `public/images/` |
| Videos | `public/videos/` |
| Page wrapper (head, header, footer) used by every page | `src/layouts/BaseLayout.astro` |
| Pages | `src/pages/` (one file per page) |

## Common edits

**Change a link in the nav or footer, or add the team email / social links:**
open `src/data/site.ts` and edit the text between the quotes. Social links left as `''` show as plain text until filled in.

**Change a color or font:** open `src/styles/global.css` and change the value next to the variable (for example `--color-accent`).

## Edit team members

Open `src/data/team.ts`. Each person is one `{ ... }` block with their name, role, major and year, photo filename and LinkedIn link. To add someone, copy a block and edit it; to remove someone, delete their block. The order in the file is the order on the page. Leave `linkedin: ''` empty to hide the LinkedIn link. Put their photo (portrait, about 800 × 1000 px) in `public/images/team/` with the filename you wrote in `photo`.

## Edit open positions

Open `src/data/positions.ts`. Each role is one `{ ... }` block with a title, "What you'd do" and "Helpful skills". Copy a block to add a role, delete it to close one. The **Apply now** button at the top of the page opens the Google Form saved in `applicationFormUrl`; change that line if the form ever moves. If you add or rename a role, also update the "Position applying for" dropdown in the Google Form so they match.

## Add or swap a photo

Cards and team members show a photo only when the file exists; otherwise they're solid text panels. To add one, save a JPG (about 1600 px wide, under 500 KB) in `public/images/` with the filename written in the data file:

- Home cards: the `photo` name in `src/data/home.ts` (for example `home-edna.jpg`, `home-live.jpg`, `home-team.jpg`, `home-positions.jpg`, `home-meet-the-team.jpg`, `home-get-in-touch.jpg`)
- Team members: the `photo` name in `src/data/team.ts`, saved in `public/images/team/`
- News posts: add `image: name.jpg` to the post and save the file in `public/images/news/`

To replace a photo, overwrite the file and keep the same name. Photos already in place: `home-turtle.jpg`, `home-build-log.jpg`, `home-twilight-zone.jpg`, the hero poster and the share-preview image (`og-image.jpg`).

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

The current video is 1280 × 720, 51 seconds and 13 MB. It works, but a shorter, smaller file (see below) loads faster on phones. If `hero.mp4` is ever removed, the site shows the still image instead.

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

## Deploy (put the site online)

The site is static, so free hosting works. Both options below rebuild and republish the site automatically every time you push to GitHub.

**Vercel**
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New → Project**.
3. Pick the repository. Vercel detects Astro on its own: leave the build command (`npm run build`) and output folder (`dist`) as they are.
4. Click **Deploy**. You get an address like `talosaur.vercel.app`. To use your own domain, open the project's **Settings → Domains**.

**Netlify**
1. Push this project to a GitHub repository.
2. Go to [netlify.com](https://netlify.com), sign in with GitHub, and click **Add new site → Import an existing project**.
3. Pick the repository. Netlify detects Astro: build command `npm run build`, publish directory `dist`.
4. Click **Deploy**. Your own domain goes under **Domain management**.

**After the site has an address:** put it in `astro.config.mjs` (the `site` line) so link previews on social media point to the right place. Then push again.

**Updating the live site:** edit, run `npm run build` to make sure it still builds, commit, push. The host rebuilds in about a minute.

## Placeholders

See `PLACEHOLDERS.md` for everything that still needs real content.
