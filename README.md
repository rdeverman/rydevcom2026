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

Built for any static host. `_headers` and `_redirects` use the Cloudflare Pages / Netlify format and redirect the old `.html` URLs to the new ones. Build command `npm run build`, output directory `_site`.
