# rydev.com

Source for [rydev.com](https://rydev.com), the personal site of Ryan Deverman.

Static HTML built with [Eleventy](https://www.11ty.dev/). No client-side JavaScript. One inlined stylesheet and one self-hosted variable font (Source Serif 4).

## Commands

```sh
npm install
npm start        # local preview at http://localhost:8080
npm run build    # writes the site to _site/
npm run check    # build, then report broken internal links and images missing alt or dimensions
npm run gaps     # list every unresolved "Gap:" marker, by page
```

## Structure

```
src/
  _data/site.json           name, URLs, contact links, availability line
  _includes/layouts/        base page and case-study template
  _includes/partials/       header, footer, Schema.org graph
  index.njk                 home
  work/                     work index and one Markdown file per case study
  about.njk, work-with-me.njk, contact.njk, how-this-site-is-built.njk
  sitemap.njk, robots.njk, llms.njk
  static/                   copied to the site root (_headers, _redirects, favicon)
  assets/                   css, fonts, generated images, files (resume PDF)
scripts/                    image generation, gap list, post-build checks
source-images/              originals that scripts/images.mjs resizes
```

## Adding a case study

Copy `src/work/programmatic-seo.md`, change the front matter (`title`, `order`, `permalink`, `facts`, `sections`) and the body. It appears on the home page and the work index automatically, and gets its own Article structured data.

## Content rules

Every number names the role it came from. Nothing is published that isn't backed by the resume or Ryan's own confirmation. Unknowns are written as `{% gap "..." %}` in templates, which renders a yellow "Gap:" marker. `npm run gaps` lists them; the site isn't ready to launch until it prints zero.

## Deploying

rydev.com is hosted on NixiHost (Apache, cPanel), with Cloudflare in front. `src/static/.htaccess` is copied to the site root and handles the 404 page, security headers, caching, and 301 redirects from the old `.html` URLs.

**From GitHub (recommended):** Actions → "Deploy to NixiHost" → Run workflow. It builds, runs `npm run check` (so a broken link stops the deploy), and uploads `_site/` over FTPS. One-time setup in Settings → Secrets and variables → Actions:

- Secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` (a cPanel FTP account)
- Variable (optional): `FTP_SERVER_DIR`, defaults to `public_html/`

**By hand:** `npm run build`, then upload the contents of `_site/`, including the hidden `.htaccess`, to `public_html/` with cPanel File Manager or an FTP client.

Files from the old site that stay on the server are harmless: the old page URLs redirect to the new ones.

`.github/workflows/build.yml` builds every pull request and lists any gap markers.
