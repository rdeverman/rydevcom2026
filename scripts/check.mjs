// Post-build checks: broken internal links, missing alt or image dimensions, and gap count.
import { readdir, readFile, access } from "node:fs/promises";
import { join } from "node:path";

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (p.endsWith(".html")) yield p;
  }
}
const exists = (p) => access(p).then(() => true, () => false);

let problems = 0, gaps = 0;
for await (const file of walk("_site")) {
  const html = await readFile(file, "utf8");
  gaps += (html.match(/data-gap>/g) || []).length;
  for (const href of new Set([...html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)].map((m) => m[1]))) {
    const target = join("_site", href.endsWith("/") ? href + "index.html" : href);
    if (!(await exists(target))) { console.log(`Broken link in ${file}: ${href}`); problems++; }
  }
  for (const [img] of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(img) || !/\bwidth="/.test(img) || !/\bheight="/.test(img)) {
      console.log(`Image missing alt or dimensions in ${file}: ${img}`); problems++;
    }
  }
}
console.log(`${problems} problems, ${gaps} gap markers (run npm run gaps for the list).`);
process.exitCode = problems ? 1 : 0;
