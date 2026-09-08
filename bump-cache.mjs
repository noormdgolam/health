#!/usr/bin/env node
// Rewrites the ?v=<hash> query on style.css / app.js in index.html to match the
// current file contents. Run before every deploy:  node bump-cache.mjs
// Zero dependencies. When the multi-page build lands, fold this into build.mjs.

import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const hash = (file) => createHash('sha1').update(readFileSync(file)).digest('hex').slice(0, 8);

const pages = ['index.html']; // add generated pages here once the site is split
const assets = { 'style.css': hash('style.css'), 'app.js': hash('app.js') };

for (const page of pages) {
  let html = readFileSync(page, 'utf8');
  for (const [name, h] of Object.entries(assets)) {
    html = html.replace(
      new RegExp(`(${name.replace('.', '\\.')})(\\?v=[0-9a-f]+)?`, 'g'),
      `$1?v=${h}`
    );
  }
  writeFileSync(page, html);
  console.log(`${page}  ->  ${Object.entries(assets).map(([n, h]) => `${n}?v=${h}`).join('  ')}`);
}
