export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "src/assets/files": "assets/files" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Inline the stylesheet: one small file, no render-blocking request.
  eleventyConfig.addNunjucksAsyncShortcode("inlineCss", async () => {
    const { readFile } = await import("node:fs/promises");
    const css = await readFile("src/assets/css/site.css", "utf8");
    return css.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").trim();
  });

  // A visible marker for a fact Ryan still has to supply or confirm.
  // `npm run gaps` lists every marker in the built site.
  eleventyConfig.addShortcode("gap", (text) =>
    `<mark class="gap" data-gap>Gap: ${text}</mark>`
  );

  eleventyConfig.addFilter("absoluteUrl", (path, base) => new URL(path, base).href);
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v));
  eleventyConfig.addFilter("setAttribute", (obj, k, v) => ({ ...obj, [k]: v }));

  eleventyConfig.addCollection("caseStudies", (api) =>
    api.getFilteredByTag("case-study").sort((a, b) => a.data.order - b.data.order)
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
