# Talosaur website

The Talosaur team website, built with [Astro](https://astro.build). It is a static site: no server or database, just pages.

**Live site:** https://tafreshio.github.io/talosaur-site/ (published automatically from the `main` branch, see "Deploy" below).

## Run the site on your computer

You need [Node.js](https://nodejs.org) installed (version 22 or newer).

```sh
npm install      # first time only: downloads Astro
npm run dev      # starts the site at http://localhost:4321/talosaur-site/
```

The address ends in `/talosaur-site/` because that is the folder the site lives in on GitHub Pages (see "Deploy" below). `http://localhost:4321/` on its own shows a "not found" page.

Edits show up in the browser as soon as you save a file. Stop the server with `Ctrl + C`.

To check that the site builds without errors before publishing:

```sh
npm run build    # builds the finished site into the dist/ folder
npm run preview  # serves that finished site so you can click through it before publishing
npm run check    # looks for mistakes in the code (typos in data files, missing fields)
```

## Where things live

| What | File |
|---|---|
| Colors, fonts, spacing | `src/styles/global.css` (the `:root` block at the top) |
| Top navigation and footer links, team email, social links, Twitch link | `src/data/site.ts` |
| Logo files and browser-tab icons | `public/brand/`, `public/favicon.*`, `public/apple-touch-icon.png` |
| Page-header photos | `public/images/pages/` |
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
| Site address and the `/talosaur-site` folder (`site`, `base`) | `astro.config.mjs` |
| Helper that adds `/talosaur-site` to links and image paths | `src/lib/url.ts` |
| Automatic deploy to GitHub Pages | `.github/workflows/deploy.yml` |
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

All photos live in `public/images/`. To swap one, overwrite the file and keep the same name. Save JPGs about 1600 px wide and under 300 KB.

**Home page cards.** Every card shows a photo; the filename is the `photo` line in `src/data/home.ts`. Section 02 is a feature layout: the first card (Turtle) is big and square (1200 × 1200), and the other two stack beside it at 16:9 (1600 × 900). Section 03 is a stepped row (each card a little lower than the last) and Section 06 a plain row, both 16:9 (1600 × 900). The layouts are the `card-grid--feature` and `card-grid--stepped` rules in `src/pages/index.astro`. If a file is missing, the card shows a plain dark panel of the same shape.

| File | Card | What is in it now |
|---|---|---|
| `home-turtle.jpg` | Turtle | Green schematic of Turtle's outside (side view, end view, test ladder), redrawn from the team's vehicle layout sheet with no electronics or wiring labels |
| `home-edna.jpg` | Deep eDNA possibilities | DNA helix |
| `home-live.jpg` | Talosaur Live | A lathe at work, with a "● LIVE" badge on top (links to Twitch; the badge is the `badge` line in `src/data/home.ts`) |
| `home-team.jpg` | Who we are | A school of fish |
| `home-positions.jpg` | Open positions | Pipette and well plate |
| `home-build-log.jpg` | Our build log | Hands at a microscope |
| `home-twilight-zone.jpg` | The twilight zone | Sea nettle jellyfish |
| `home-meet-the-team.jpg` | Meet the team | Crew and rover on a research ship deck (NOAA) |
| `home-get-in-touch.jpg` | Get in touch | A ship offshore |

Swap any of these for real team photos whenever you have them.

**Page headers.** Every page in the top menu opens with a full-width photo band. The photos live in `public/images/pages/` and are named after the page: `who-we-are.jpg`, `the-problem.jpg`, `news.jpg`, `work-with-us.jpg`, `positions.jpg`, `donate.jpg`. Each is 2400 × 1350 and is a nature photo with an edit: Who we are (zoanthids, a full negative), The Problem (sunbeams, false color), News (porcelain crab, a negative lens around it), Work with us (soft coral, a full negative recoloured with a left-to-right colour sweep: teal, then sand, then magenta and blue, like Colossal's "Gratitude is in our genes" page), Positions (pygmy seahorse, negative glitch slices) and Donate (anemone, false color). The script that makes the inverted ones keeps the original's dark lower-left so the white title stays readable. The title sits over the bottom-left of the photo, so keep that area calm and darkish. To change which part of a photo stays visible on phones, edit `imagePosition` where the page uses `<PageHeader>` (for example `imagePosition="60% 50%"` keeps a bit right of center). Delete a page's photo and that page goes back to a plain title.

**Photo rule (natural vs edited).** Like Colossal: photos of people, lab work and machines stay natural, with no filter. False-color edits (gradient maps, halftone dots, shifted slices) are only for nature and animals and for graphic "stickers". So the Home cards and the inset photos are natural (except the fish eye on Home), while every page header and every big photo band is a nature photo with a false-color edit. A replacement for an edited photo needs the same treatment (ask for it, or use a gradient map in any photo app).

**Big photo bands.** Like Colossal's elephant and mammoth sections, some pages give one good photo a whole screen, with a headline and button over it: Home (Section 04, "How can we help?"), and the end of Who we are, Work with us, Positions and Donate. The component is `src/components/PhotoBand.astro`; the photos are in `public/images/bands/` (2400 × 1500, named after the page) and pan slowly as you scroll. Each headline reuses copy from the Content doc or the page.

**Inset photos across section edges ("patches").** Smaller photos sit across the edge between two sections, each in a different shape so they don't repeat: a round lens with crosshair ticks (Home, under the shark photo), a film strip of three frames (Who we are), a tall strip running off the edge of the screen (Work with us), a panoramic strip with corner brackets (Positions) and two stacked photos (Donate). Like Colossal, never on the edge right under a page header or the Home video. The component is `src/components/Patch.astro` (the top of the file lists the shapes); photos are in `public/images/patches/`. Example: `<Patch variant="lens" image="fish-eye-lens.jpg" caption="Fish eye" side="center" straddle />` between two sections.

**Light and dark bands.** Like Colossal's pages, the site switches between light and dark stretches. Home: dark video, then light (Sections 01 and 02), dark (03), photo band (04), dark (05), light (06), dark footer. Inner pages: dark photo header, then a light band for the content. A band is a `<div class="band theme-light">` (light) or `<div class="band">` (dark) around sections; the light colors are the `--light-...` variables in `src/styles/global.css`.

**Page-header captions.** Each page header has a thin line under the title with a hatched `//////` stripe and a short caption in [ brackets ], for example `[ 50–300 M · THE TWILIGHT ZONE ]`. Change or remove it with the `caption` text where the page uses `<PageHeader>`.

**The depth graphic (The Problem, Section 02).** The whole section is the sea, drawn to scale from the surface to 400 m. Its top edge is the water surface, and the research ship sits on it, poking up into the light band above. A line stays in the middle of the screen as you scroll and reads out the depth and water pressure under it; the notes outside the band you are in fade back. The code is `src/components/DepthBands.astro`; all the words are in `src/data/problem.ts`:
- `depthBands`: the three bands (Content doc copy) and where each starts and ends (`from`, `to` in meters).
- `reasons`: the three "why it's hard to study" notes (Content doc copy), each with a `depth` (where it sits), an extra sourced `fact` and its `source` link.
- `depthMarks` (dashed lines at 40 m and 200 m), `depthRanges` (the bars beside the ruler), `pressureNote` and `talosaurNote`.
- Move anything up or down by changing its `depth`. Leave about 50 m between notes so they don't overlap on phones.
- Make the whole drawing taller or shorter: change `--m` (pixels per meter) at the top of the component's styles.
- The animals are cut-outs of Ocean Image Bank photos in `public/images/depth/` (transparent backgrounds; the jellyfish has a false-color edit and the squid the same teal-to-magenta colour sweep as the Work with us header). Replace a file with one of the same name. Each one's depth is in the `animals` list at the top of the component.
- The ship is a simple drawing inside the component (the `<svg class="ship">`), not a photo.

**Scroll-under effect.** Like Colossal, some pictures move at a slightly different speed from the page, and the next section slides over them. Add `data-parallax="0.4"` to a picture at the very top of a page (it lags behind the scroll), or `data-drift="100"` to anything else (it starts 100 px low and rises into place as you scroll past). Used on the Home video, every page header photo, the Home card grids and The Problem's big numbers. This only works because every `.band` has `position: relative` and its own background, so the next band paints on top. It's switched off for visitors with "reduce motion" turned on. The code is at the bottom of `src/layouts/BaseLayout.astro`.

**Team members:** the `photo` name in `src/data/team.ts`, saved in `public/images/team/` (portrait, about 800 × 1000 px). Until the file exists the card shows a panel with the person's initials.

**News posts:** add `image: name.jpg` to the post and save the file in `public/images/news/`.

Other files in `public/images/`: `hero-poster.jpg` (the still behind the Home video) and `og-image.jpg` (the preview image when a link to the site is shared: the logo over a jellyfish, 1200 × 630).

## Logo and icons

The logo files are in `public/brand/` and come from the Talosaur brand pack (striped disc plus the lowercase wordmark):

| File | Where it shows |
|---|---|
| `talosaur-lockup-reverse.svg` | Top menu (light stripes for the dark background) |
| `talosaur-lockup-white.svg` | Giant logo over the Home video (inverted against the video, so keep it pure white) and the faint full-width logo in the footer |
| `talosaur-mark-reverse.svg` | The disc on its own, for anywhere a small mark is needed |

The browser-tab icons are `public/favicon.svg`, `public/favicon.png` (64 × 64) and `public/apple-touch-icon.png` (180 × 180, used when someone saves the site to a phone home screen): the disc on a navy rounded square. To update the logo, replace these files and keep the names.

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

- Linking to another page from inside a post? Include the site folder: write `[the problem](/talosaur-site/the-problem)`, not `/the-problem`. (Links in data files and pages get the folder added automatically; links typed inside Markdown posts don't.)

The News page (`src/pages/news.astro`) lists every post, and the Home page automatically shows the four newest, each linking to that post on the News page.

## Swap the Home page video

The full-screen video at the top of the Home page is the same video saved in two sizes, plus a still image. Each visitor downloads only one of the videos: big screens get a sharp 1080p file, phones get a lighter 720p one. Replace the files and keep the exact same names:

| File | What it is | Who gets it |
|---|---|---|
| `public/videos/hero-1080.mp4` | 1920 × 1080 MP4 (H.264), about 25 MB | Screens 900 px wide or more |
| `public/videos/hero.mp4` | 1280 × 720 MP4 (H.264), about 13 MB | Phones, small windows, and everything else |
| `public/images/hero-poster.jpg` | 1920 × 1080 still frame from the video | Shows while the video loads, and instead of the video for visitors who have "reduce motion" turned on |

The list of files lives at the top of `src/components/HeroVideo.astro`. If a file is missing it is skipped, and if both videos are missing the site shows the still image instead.

**Video file checklist**

- **Format:** MP4 (H.264 video) for both files. This plays on every browser, including iPhones. `hero.mp4` is the safety net, so always keep it.
- **Size on screen:** 1920 × 1080 (landscape, 16:9), and 1280 × 720 for `hero.mp4`.
- **Length:** 10 to 20 seconds. It loops, so pick a clip where the end flows back into the start.
- **No sound.** Browsers only autoplay muted video, and the site never plays audio. Remove the audio track to save space.
- **File size:** phones get `hero.mp4`, so keep that one as small as you can (the current 51-second loop is 13 MB). `hero-1080.mp4` can be bigger (around 25 MB) because only wide screens download it.
- **Framing:** on phones the left and right sides get cropped, so keep the subject near the center. The big TALOSAUR wordmark sits across the bottom and shows the video inverted through its letters, so it stays readable over light or dark shots. Very busy textures right under it make it harder to read.

**Poster image checklist:** JPG, 1920 × 1080, under 300 KB, ideally the first frame of the video.

**Compressing a video** with the free tool [ffmpeg](https://ffmpeg.org) (`brew install ffmpeg` on a Mac):

```sh
# 1080p MP4 for wide screens
ffmpeg -i original.mov -an -vf "scale=1920:-2" -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart hero-1080.mp4
# 720p MP4 for phones and everything else
ffmpeg -i original.mov -an -vf "scale=1280:-2" -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart hero.mp4
```

`-an` removes the sound, `-crf 26` sets the quality (higher number = smaller file, try 23 to 30), and `-movflags +faststart` lets it start playing before it fully downloads. To grab a frame as the poster (here, the frame 25.5 seconds in):

```sh
ffmpeg -ss 25.5 -i original.mov -frames:v 1 -vf "scale=1920:-2" -q:v 3 hero-poster.jpg
```

## Deploy (put the site online)

The site is hosted for free on **GitHub Pages** at **https://tafreshio.github.io/talosaur-site/**.

### How deploys work

You don't upload anything by hand. Every push to the `main` branch publishes the site:

1. You push to `main` on GitHub.
2. GitHub Actions runs the workflow in `.github/workflows/deploy.yml` (copied from [Astro's official GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/)). It installs the packages, runs `npm run build`, and uploads the finished `dist/` folder.
3. A second step publishes that upload to GitHub Pages. The live site updates about a minute after you push.

**Watch a deploy:** open the repository on GitHub and click the **Actions** tab. A green check means it's live; a red X means the build failed and the old version of the site stays up. Click the red run to see the error. You can also re-run the deploy from there with **Run workflow**.

**Before you push**, run `npm run build` (and `npm run preview` to click around). If it fails on your computer, it will fail on GitHub too.

**One-time setting (already done):** in the repository's **Settings → Pages**, **Source** is set to **GitHub Actions**. If deploys ever stop appearing, check that first.

### Why every address starts with /talosaur-site

GitHub Pages puts this site in a folder named after the repository, so pages live at `/talosaur-site/news`, images at `/talosaur-site/images/...`, and so on. Two settings in `astro.config.mjs` handle this:

- `site: 'https://tafreshio.github.io'` is the domain, used for the full links in social-share previews.
- `base: '/talosaur-site'` is the folder.

In the code, internal links and image paths are written without the folder (for example `'/news'` in `src/data/site.ts`) and passed through `url()` from `src/lib/url.ts`, which adds `/talosaur-site` in front. **If you add a new link or image in a page or component, wrap it in `url()`** or it will point at the wrong place once it's online. Outside links (`https://...`) and email links don't need it.

### Using a custom domain later

If the team buys a domain (say `talosaur.org`), the site can move to it without changing any pages:

1. **Tell GitHub:** repository **Settings → Pages → Custom domain**, enter the domain and save. Tick **Enforce HTTPS** once it's available.
2. **Point the domain at GitHub:** in your domain provider's DNS settings, add the records from GitHub's guide, [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). (For a root domain that's four `A` records; for `www.` it's a `CNAME` to `tafreshio.github.io`.)
3. **Add `public/CNAME`:** a file named `CNAME` (no extension) in `public/`, containing just the domain on one line, for example `talosaur.org`.
4. **Edit `astro.config.mjs`:** change `site` to `'https://talosaur.org'` and **delete the `base` line**. Because every link goes through `url()`, the `/talosaur-site` folder disappears from all of them automatically.
5. **Fix Markdown links:** search `src/content/news/` for `/talosaur-site` and remove it from any links typed in posts.
6. Run `npm run dev` (the site is now at `http://localhost:4321/`), then `npm run build`, commit and push.

DNS changes can take a few hours to reach everyone. Until then the old `github.io` address keeps working and GitHub redirects it to the new domain.

## Placeholders

See `PLACEHOLDERS.md` for everything that still needs real content.
