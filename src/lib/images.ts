// Checks whether a photo exists in public/images/ when the site is built.
// Cards and team members only show a photo when the file is actually there.
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export const imageExists = (file: string) => existsSync(join(process.cwd(), 'public', 'images', file));
