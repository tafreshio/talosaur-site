// Small text helpers for the [ bracket ] tags.

// Glues each " · " separator to the word after it (with a no-break space), so when a tag wraps
// onto a second line on a phone, no line ends on a dangling dot; the next line starts with it:
// "Research · Conservation · Fisheries" -> "Research · Conservation" / "· Fisheries"
export const keepDots = (text: string) => text.replaceAll(' · ', ' ·\u00a0');

// Glues a number to its unit with a no-break space, so "200 m" never splits across two lines:
// "below 200 m" -> "below 200 m" (the space before "m" can't break)
export const keepUnits = (text: string) => text.replace(/(\d) (m|km|ft|atm)\b/g, '$1\u00a0$2');
