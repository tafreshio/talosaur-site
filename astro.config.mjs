// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The site is hosted on GitHub Pages at the team's own domain, https://talosaur.com/
  // (the custom domain is set in the repository's Settings → Pages; see "Deploy" in README.md).
  //
  // site: the domain. Used to build full links in social-share previews (Open Graph tags).
  site: 'https://talosaur.com',
  // No `base`: on its own domain the site sits at the root, so pages are /news, /donate...
  // (On the old address, tafreshio.github.io/talosaur-site/, base was '/talosaur-site'.
  // Links in the code go through url() in src/lib/url.ts, so they follow whatever this is.)
});
