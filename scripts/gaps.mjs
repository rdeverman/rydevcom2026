// Lists every unresolved "Gap:" marker in the built site, by page.
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (p.endsWith(".html")) yield p;
  }
}

let total = 0;
for await (const file of walk("_site")) {
  const html = await readFile(file, "utf8");
  const gaps = [...html.matchAll(/<mark class="gap" data-gap>Gap: ([\s\S]*?)<\/mark>/g)].map((m) => m[1]);
  if (!gaps.length) continue;
  console.log(`\n${file.replace(/^_site/, "").replace(/index\.html$/, "")}`);
  for (const g of gaps) console.log(`  - ${g}`);
  total += gaps.length;
}
console.log(`\n${total} gaps to resolve before launch.`);
