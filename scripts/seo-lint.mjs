#!/usr/bin/env node
/**
 * SEO lint for the built site (run after `npm run build`).
 * Fails when a page exceeds the SERP budgets the site audit flags:
 *   - <title> longer than 60 characters
 *   - meta description longer than 160 characters
 *   - heading order skips a level (h1 -> h3, h2 -> h4, ...)
 *   - a page has 0 or >1 <h1>
 *
 * Usage: node scripts/seo-lint.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../dist', import.meta.url).pathname;
const TITLE_MAX = 60;
const DESC_MAX = 160;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name === 'index.html') out.push(p);
  }
  return out;
}

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');

const problems = [];
let pages = 0;

for (const file of walk(root)) {
  pages++;
  const html = readFileSync(file, 'utf8');
  const url = '/' + relative(root, file).replace(/index\.html$/, '').replace(/\\/g, '/');

  const title = decode((html.match(/<title>(.*?)<\/title>/s) || [])[1] || '');
  if (!title) problems.push(`${url} — missing <title>`);
  else if (title.length > TITLE_MAX) problems.push(`${url} — title ${title.length} chars: ${title}`);

  const desc = decode((html.match(/<meta name="description" content="(.*?)"/s) || [])[1] || '');
  if (!desc) problems.push(`${url} — missing meta description`);
  else if (desc.length > DESC_MAX) problems.push(`${url} — description ${desc.length} chars`);

  const headings = [...html.matchAll(/<h([1-6])[ >]/g)].map((m) => Number(m[1]));
  const h1 = headings.filter((h) => h === 1).length;
  if (h1 !== 1) problems.push(`${url} — ${h1} <h1> elements`);
  let prev = null;
  for (const h of headings) {
    if (prev !== null && h > prev + 1) problems.push(`${url} — heading skip h${prev} -> h${h}`);
    prev = h;
  }
}

if (problems.length) {
  console.error(`seo-lint: ${problems.length} problem(s) across ${pages} pages`);
  for (const p of problems) console.error('  ' + p);
  process.exit(1);
}
console.log(`seo-lint: clean — ${pages} pages, titles <= ${TITLE_MAX}, descriptions <= ${DESC_MAX}, heading order valid`);
