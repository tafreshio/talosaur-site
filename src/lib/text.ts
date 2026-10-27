// Small text helpers for the [ bracket ] tags.

// Glues each " · " separator to the word before it (with a no-break space), so when a tag wraps
// onto a second line on a phone, the line breaks after a dot instead of starting with one:
// "Research · Conservation · Fisheries" -> "Research ·" / "Conservation · Fisheries"
export const keepDots = (text: string) => text.replaceAll(' · ', ' · ');
