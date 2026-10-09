---
layout: layouts/case-study.njk
tags: case-study
order: 2
permalink: /work/programmatic-seo/
title: "A 1.7M-page programmatic SEO system built for people and AI search"
shortTitle: "Programmatic SEO"
description: "How Ryan Deverman designed the taxonomy, entity model and governance behind 1.7M programmatic company and project pages at ConstructConnect, about 1M of them indexed, structured for both search engines and LLMs."
role: "Growth Product Manager"
organization: "ConstructConnect"
summary: "ConstructConnect’s data was locked behind the product, and the market was far too large to cover by hand. I owned the strategy and delivery of an API-powered page system that scaled to 1.7M pages, about 1M of them indexed, as an entry point into the self-serve product."
article:
  organization: "ConstructConnect"
  about: ["Programmatic SEO", "Information architecture", "Entity modeling", "AI search optimization", "HubSpot CMS"]
crumbs:
  - { name: "Work", url: "/work/" }
  - { name: "Programmatic SEO", url: "/work/programmatic-seo/" }
facts:
  - { k: "Company", v: "ConstructConnect, B2B construction data and bidding software" }
  - { k: "My role", v: "Growth Product Manager. Owned strategy, delivery and performance reporting" }
  - { k: "When", v: "First pages live in early 2023" }
  - { k: "Platform", v: "HubSpot CMS, fed by the product’s data through an API" }
  - { k: "Scale", v: "1.7M pages, about 1M indexed, 87 audience personas" }
sections:
  - { id: "situation", label: "The situation" }
  - { id: "owned", label: "What I owned" }
  - { id: "bet", label: "The bet" }
  - { id: "decisions", label: "Key decisions" }
  - { id: "results", label: "Results" }
  - { id: "learned", label: "What I learned" }
next:
  title: "Adding a self-serve business to a sales-led SaaS company: $10M+ ARR"
  url: "/work/self-serve-subscriptions/"
---

<h2 id="situation">The situation</h2>

ConstructConnect held valuable data on companies and construction projects, but reaching it meant getting through onboarding and discovery inside the product. People who found value couldn’t easily find more of it without a hand-off, so organic growth was blocked.

The market was also far larger than any hand-written content strategy could cover. For long stretches there was no dedicated SEO resource: at different points the work ran with no in-house SEO specialist, then an in-house hire, then a vendor. Reporting stayed with me throughout.

<h2 id="owned">What I owned</h2>

- Strategy and delivery for an API-powered page system in HubSpot.
- SEO architecture, page taxonomy and the entity model.
- A localized market-report framework built around 87 audience personas.
- Automated quality-control and data-governance workflows.
- Performance tracking and regular reporting to leadership.

<h2 id="bet">The bet</h2>

Content structured well enough for a person to navigate could also be structured well enough for a search engine or an LLM to understand. I treated those as one design problem, not two competing requirements.

The hypothesis: a taxonomy-driven, entity-modeled architecture would let the system grow to the size of the market without production cost or headcount growing with it.

<h2 id="decisions">Key decisions</h2>

<div class="decision">
<h3>Model entities from how people actually search</h3>
<p>The entity model came from mapping how different audiences searched for companies and projects, not from an SEO template. That same structure served human navigation and machine indexing.</p>
</div>

<div class="decision">
<h3>Pilot small, then improve quality before scaling</h3>
<p>The pilot validated programmatic content as a way to make ConstructConnect’s data discoverable through organic search and to create entry points into the self-serve product. It also confirmed that SEO had to connect search intent, local market information, product value and conversion paths, rather than run as a standalone traffic project.</p>
<p><span class="label">What changed before scaling</span> We improved the taxonomy, page templates, relevance, internal linking, structured data, and the paths from discovery into Project Intelligence. The goal was to scale useful landing pages, not to generate more URLs.</p>
</div>

<div class="decision">
<h3>Automate quality at volume</h3>
<p>At 1.7M pages, manual review is impossible. I built automated quality-control and governance workflows to keep content accurate as the system grew.</p>
</div>

<div class="decision">
<h3>Add localized market reports</h3>
<p>The market-report framework came later, in response to an unmet need, and became one of the strongest-performing organic surfaces in the system. Reports matched specific geographic and construction-market interests, which gave visitors a more relevant way in than generic product or category pages.</p>
</div>

<h2 id="results">Results</h2>

<table class="result-table">
  <thead><tr><th scope="col">Measure</th><th scope="col">What changed</th></tr></thead>
  <tbody>
    <tr><td>1.7M</td><td>Programmatic company and project pages published.</td></tr>
    <tr><td>~1M</td><td>Pages indexed.</td></tr>
    <tr><td>87</td><td>Audience personas behind the localized market reports.</td></tr>
    <tr><td>Acquisition</td><td>A large organic discovery surface supporting the product-led growth strategy, as the self-serve business grew past $10M ARR. That is a company-level result: revenue attributable to these pages alone isn’t claimed here.</td></tr>
  </tbody>
</table>

<h2 id="learned">What I learned</h2>

Machine readability and clarity for people are the same design problem stated two ways. Solve one without the other and the system only works for half its audience.

What I’d do differently: measure page quality and downstream conversion from the first pilot. At this scale, the number of pages published or indexed says little about success. I would set performance tiers for page types, connect organic landing-page cohorts to sign-up and activation, use that to decide which templates to grow, and make indexation and content-quality monitoring part of the operating model from day one.
