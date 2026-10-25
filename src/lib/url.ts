// The site lives in a folder on GitHub Pages: https://tafreshio.github.io/talosaur-site/
// so every internal address has to start with /talosaur-site. That folder name (the "base")
// is set once in astro.config.mjs and Astro exposes it as import.meta.env.BASE_URL.
//
// Data files and pages write plain addresses like '/news' or '/images/home-turtle.jpg',
// and pass them through url() when they put them in the page:
//
//   url('/news')                 -> '/talosaur-site/news'
//   url('/images/photo.jpg')     -> '/talosaur-site/images/photo.jpg'
//   url('/')                     -> '/talosaur-site/'
//   url('https://example.com')   -> unchanged (outside links, mailto:, #anchors are left alone)
//
// If the base ever changes or is removed (custom domain), nothing else needs editing.

// BASE_URL may or may not end in "/", so strip it and add it back where needed.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  // Leave outside links, email links and in-page anchors (#top) untouched
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  return base + (path.startsWith('/') ? path : `/${path}`);
}

// The opposite: turns the current address back into a plain one, so it can be compared with
// the addresses in the data files. '/talosaur-site/news/' -> '/news', '/talosaur-site/' -> '/'
export function withoutBase(pathname: string): string {
  const path = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return path.replace(/\/$/, '') || '/';
}
