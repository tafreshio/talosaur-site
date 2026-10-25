# Placeholders

Everything on the site that still needs real content, and the file where you fill it in.

| Placeholder | Where it shows | File to edit |
|---|---|---|
| `[team email]` | Footer, "Can we help?" column | `src/data/site.ts` (`teamEmail`) |
| Instagram link | Footer, "Connect with us" | `src/data/site.ts` (`socialLinks`) |
| LinkedIn link | Footer, "Connect with us" | `src/data/site.ts` (`socialLinks`) |
| YouTube link | Footer, "Connect with us" | `src/data/site.ts` (`socialLinks`) |
| Logo (text "TALOSAUR" for now) | Header and big footer wordmark | `src/components/Header.astro`, `src/components/Footer.astro` |
| Favicon (Astro default icon) | Browser tab | `public/favicon.svg`, `public/favicon.ico` |
| Hero background video | Home, full-screen top section | Add `public/videos/hero.mp4` (see README for format) |
| Hero still image (plain blue gradient for now) | Home hero, shown while the video loads and to people with reduced motion on | Replace `public/images/hero-poster.jpg` |
| `[List each photo or video on the site and who took it.]` | Image credits page | `src/pages/image-credits.astro` |
| `[Privacy policy: ...]` | Privacy page | `src/pages/privacy.astro` |
| `[Live stream link]` | Home, "Talosaur Live" card (not clickable until filled in) | `src/data/home.ts` |
| `[Featured content heading]` (not given in the Content doc) | Home, Section 03 | `src/data/home.ts` (`featuredHeading`) |
| 9 Home card photos: `home-turtle.jpg`, `home-edna.jpg`, `home-live.jpg`, `home-team.jpg`, `home-positions.jpg`, `home-build-log.jpg`, `home-twilight-zone.jpg`, `home-meet-the-team.jpg`, `home-get-in-touch.jpg` | Home, Sections 02, 03 and 06 | Add each file to `public/images/` with that exact name |
| News photos (none yet; each entry can have one) | News page | Add `image: name.jpg` to the entry and put the photo in `public/images/news/` |
| "Project kicks off" news entry: `[Date]` and `[One line on how Talosaur started.]` | News page and Home "Latest news" | `src/content/news/project-kicks-off.md` |
