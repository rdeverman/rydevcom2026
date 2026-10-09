// Builds responsive photo sizes, the Open Graph card and the touch icon.
// Outputs go to src/assets/img and are skipped when already newer than their source.
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";

const out = "src/assets/img";
await mkdir(out, { recursive: true });

const newer = async (a, b) => {
  try { return (await stat(a)).mtimeMs >= (await stat(b)).mtimeMs; } catch { return false; }
};

const photo = "source-images/ryan-deverman.jpg";
for (const w of [320, 640]) {
  for (const fmt of ["jpg", "webp"]) {
    const dest = `${out}/ryan-deverman-${w}.${fmt}`;
    if (await newer(dest, photo)) continue;
    const img = sharp(photo).resize(w, w, { fit: "cover", position: "attention" });
    await (fmt === "jpg" ? img.jpeg({ quality: 78, mozjpeg: true }) : img.webp({ quality: 74 })).toFile(dest);
  }
}

const mark = `<path fill="#6cc9ac" d="M252,0H18A18,18,0,0,0,0,18V270a18,18,0,0,0,18,18H219.73a9,9,0,0,0,6.36-15.36l-51.36-51.37A18,18,0,0,0,162,216H81a9,9,0,0,1-9-9V81a9,9,0,0,1,9-9H251c39.52,0,72.42,31.44,73,71a72,72,0,0,1-42.15,66.47,9.05,9.05,0,0,0-2.51,14.62L319,263.68a9,9,0,0,0,11.28,1.18A143.82,143.82,0,0,0,396,144h0A144,144,0,0,0,252,0Z"/>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#131517"/>
  <g transform="translate(80 80) scale(0.28)">${mark}</g>
  <text x="80" y="330" font-family="Georgia, 'DejaVu Serif', serif" font-size="84" font-weight="700" fill="#ecebe6">Ryan Deverman</text>
  <text x="80" y="400" font-family="Helvetica, Arial, 'DejaVu Sans', sans-serif" font-size="34" fill="#c9cbcc">Product design and growth product</text>
  <rect x="80" y="470" width="1040" height="2" fill="#2e3236"/>
  <text x="80" y="530" font-family="Helvetica, Arial, 'DejaVu Sans', sans-serif" font-size="28" fill="#a0a6ac">$10M+ ARR self-serve  ·  1.7M-page SEO system  ·  Design team 2 → 12</text>
</svg>`;
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(`${out}/og.png`);

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="-60 -114 516 516"><rect x="-60" y="-114" width="516" height="516" fill="#131517"/>${mark}</svg>`;
await sharp(Buffer.from(icon)).png().toFile("src/static/apple-touch-icon.png");
console.log("images ok");
