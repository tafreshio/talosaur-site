// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The site is hosted on GitHub Pages at https://tafreshio.github.io/talosaur-site/
  //
  // site: the domain. Used to build full links in social-share previews (Open Graph tags).
  site: 'https://tafreshio.github.io',
  // base: the folder the site lives in on that domain. Every page, image and video address
  // starts with it. Links in the code get it added automatically by url() in src/lib/url.ts.
  //
  // Custom domain later? Set site to the domain (e.g. 'https://talosaur.org') and delete
  // the base line. See "Using a custom domain" in README.md.
  base: '/talosaur-site',
});
