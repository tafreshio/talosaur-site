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
| Rest of the Home page (cards, featured content, latest news...) | Home, below the hero | `src/pages/index.astro` (not built yet) |
