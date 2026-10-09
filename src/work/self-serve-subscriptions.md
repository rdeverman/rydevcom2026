---
layout: layouts/case-study.njk
tags: case-study
order: 1
permalink: /work/self-serve-subscriptions/
title: "Adding a self-serve business to a sales-led SaaS company: $10M+ ARR"
shortTitle: "Self-serve subscriptions"
description: "How Ryan Deverman, as Growth Product Manager at ConstructConnect, built the business case for product-led growth and the self-serve subscription experience that scaled to $10M+ ARR."
role: "Growth Product Manager"
organization: "ConstructConnect"
summary: "Every new subscription depended on a sales conversation. I built the case for a self-serve motion, got it resourced by the C-suite, and designed and ran the subscription experience that grew to $10M+ ARR."
article:
  organization: "ConstructConnect"
  about: ["Product-led growth", "Self-serve subscriptions", "Activation design", "Pricing and packaging"]
crumbs:
  - { name: "Work", url: "/work/" }
  - { name: "Self-serve subscriptions", url: "/work/self-serve-subscriptions/" }
facts:
  - { k: "Company", v: "ConstructConnect, B2B construction data and bidding software" }
  - { k: "My role", v: "Growth Product Manager. Senior individual contributor with ownership of experience, funnel and revenue outcomes" }
  - { k: "When", v: "Nov 2022 – Jan 2026 <mark class=\"gap\" data-gap>Gap: did the self-serve work start before the PM role?</mark>" }
  - { k: "Team", v: "<mark class=\"gap\" data-gap>Gap: who you worked with (engineering, analytics, CS, sales) and team size</mark>" }
  - { k: "Result", v: "$10M+ ARR in self-serve revenue" }
sections:
  - { id: "situation", label: "The situation" }
  - { id: "owned", label: "What I owned" }
  - { id: "bet", label: "The bet" }
  - { id: "decisions", label: "Key decisions" }
  - { id: "buy-in", label: "Getting buy-in" }
  - { id: "results", label: "Results" }
  - { id: "learned", label: "What I learned" }
next:
  title: "A 1.7M-page programmatic SEO system built for people and AI search"
  url: "/work/programmatic-seo/"
---

<h2 id="situation">The situation</h2>

ConstructConnect makes construction project data and bidding software. For most of its history, growth ran through sales: every new subscription needed a conversation with a rep. That caps growth at the size of the sales team.

There was no self-serve way to buy. The web properties and journeys that did exist were fragmented, which added cost and friction to every acquisition path. Research showed where buyer intent was highest and confidence was lowest. That gap became the brief.

<h2 id="owned">What I owned</h2>

- The business case for moving from sales-led to product-led growth, presented to VP and C-suite leadership.
- Experience design for self-serve pricing, purchase and upgrade flows.
- Funnel performance and revenue outcomes for the self-serve platform, without a direct-report structure.
- The experimentation program across the self-serve funnel: hypotheses, test design, statistical validation and executive readouts.

<h2 id="bet">The bet</h2>

The organization assumed self-serve buyers needed the same guided, high-touch path as sales-led buyers. I treated that as untested.

The hypothesis: if we could find the behavior that predicted long-term retention, a product-qualified lead (PQL), and rebuild onboarding so more people reached it with less friction, those users would convert without a sales conversation.

To find it, I combined behavioral analytics from Pendo, Gainsight PX and Hotjar with HubSpot data, NPS, and what Sales and Customer Success heard from customers.

<h2 id="decisions">Key decisions</h2>

<div class="decision">
<h3>One adaptive flow instead of a flow per entry point</h3>
<p>I designed a single self-serve subscription flow that adapts to entry point, fluency level and firmographic segment, rather than separate flows for each path in. It was the first test of whether one flow could do what a sales conversation used to.</p>
<p><span class="label">Trade-off</span> {% gap "What you gave up by not building separate flows, and what alternatives you considered" %}</p>
</div>

<div class="decision">
<h3>Define the PQL with Analytics and Customer Success before redesigning</h3>
<p>Instrumentation had to exist before the redesign, not after it shipped. I defined PQL criteria with Analytics and CS first, so activation changes could be judged against the behavior that actually predicted retention.</p>
</div>

<div class="decision">
<h3>Step-gated activation and a persistent dashboard</h3>
<p>I redesigned activation around step-gated progression and a persistent dashboard, and introduced a behavioral match score that personalized contractor search using profile completeness and usage data.</p>
</div>

<div class="decision">
<h3>Let behavior shape pricing and packaging</h3>
<p>Behavioral evidence fed tier structure and feature-gating decisions, which affected conversion directly.</p>
<p><span class="label">Example</span> {% gap "One specific pricing or gating change and what it did" %}</p>
</div>

<div class="decision">
<h3>Design for incomplete data</h3>
<p>Construction data is often partial or wrong. I designed UI states for incomplete or corrupted records, so users could still act on what they were seeing.</p>
</div>

<h2 id="buy-in">Getting buy-in</h2>

I built and presented the case for the shift from sales-led to product-led growth to VP and C-suite leadership. It was accepted and resourced.

{% gap "What the case argued, the objection you had to answer, and what was committed (people, budget, timeline)" %}

<h2 id="results">Results</h2>

<table class="result-table">
  <thead><tr><th scope="col">Measure</th><th scope="col">What changed</th></tr></thead>
  <tbody>
    <tr><td>$10M+ ARR</td><td>Self-serve subscription revenue. {% gap "Starting point and how long it took" %}</td></tr>
    <tr><td>CAC</td><td>Reduced by consolidating fragmented web properties into one conversion architecture. {% gap "By how much" %}</td></tr>
    <tr><td>PQL conversion</td><td>Improved. {% gap "Before and after rate" %}</td></tr>
  </tbody>
</table>

<h2 id="learned">What I learned</h2>

A tested behavioral threshold beats an onboarding pattern borrowed from somewhere else. And measurement has to be in place before the redesign, or you can’t tell whether the redesign worked.

{% gap "Something that didn't work, or what you would do differently" %}
