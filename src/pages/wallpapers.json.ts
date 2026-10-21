import { wallpapers } from '../data/wallpapers';

// Static JSON feed for wallpaper clients (desktop-sync scripts, agents).
// Newest first: clients read [0] as "latest".
const feed = wallpapers
  .slice()
  .reverse()
  .map((w) => ({
    slug: w.slug,
    title: w.title,
    theme: w.theme,
    width: w.width,
    height: w.height,
    file: `https://reddtools.com${w.file}`,
    page: `https://reddtools.com/wallpapers/${w.slug}/`,
  }));

export async function GET() {
  return new Response(JSON.stringify({ updated: wallpapers.length, wallpapers: feed }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}