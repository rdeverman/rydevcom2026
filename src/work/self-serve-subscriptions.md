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
summary: "Growth depended on sales conversations, and the self-serve channel was at zero revenue. I built the case for product-led growth, answered the C-suite's fear that self-serve customers would churn, and designed and ran the subscription experience that grew to $10M+ ARR."
article:
  organization: "ConstructConnect"
  about: ["Product-led growth", "Self-serve subscriptions", "Activation design", "Pricing and packaging"]
crumbs:
  - { name: "Work", url: "/work/" }
  - { name: "Self-serve subscriptions", url: "/work/self-serve-subscriptions/" }
facts:
  - { k: "Company", v: "ConstructConnect, B2B construction data and bidding software" }
  - { k: "My role", v: "Growth Product Manager from Nov 2022. Senior individual contributor with ownership of experience, funnel and revenue outcomes <mark class=\"gap\" data-gap>Gap: your role when the work began in 2021</mark>" }
  - { k: "When", v: "Work began in 2021; launched 2023. Ran it through Jan 2026" }
  - { k: "Team", v: "In-house engineering for the API work, Netfluence (agency) for HubSpot. I coordinated across the business" }
  - { k: "Result", v: "$0 to $10M+ ARR in the self-serve channel" }
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

A first self-serve version had existed since 2013, but the channel was producing no recurring revenue. The web properties and journeys around it were fragmented, which added cost and friction to every acquisition path. Research showed where buyer intent was highest and confidence was lowest. That gap became the brief.

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
<h3>One adaptive flow, built inside existing constraints</h3>
<p>I designed a single self-serve subscription flow that adapts to entry point, fluency level and firmographic segment. It was the first test of whether one flow could do what a sales conversation used to.</p>
<p><span class="label">Trade-off</span> We were limited by the existing payment flow. The product had to be built into the company’s proprietary system so it could work with minimal back-end changes. That was far from ideal: we wanted a more adaptive product with more options for buyers, and accepted the constraint to ship.</p>
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
<p><span class="label">Example</span> Before, buyers couldn’t see what they would pay. We introduced dynamic pricing that updated as they chose payment terms and markets. Abandonment dropped significantly compared with no price transparency.</p>
</div>

<div class="decision">
<h3>Design for incomplete data</h3>
<p>Construction data is often partial or wrong. I designed UI states for incomplete or corrupted records, so users could still act on what they were seeing.</p>
</div>

<h2 id="buy-in">Getting buy-in</h2>

I built and presented the case for the shift from sales-led to product-led growth to VP and C-suite leadership. It was accepted and resourced.

Leadership had two fears: that self-serve customers would cancel at a high rate, and that the traditional sales channel would be abandoned. Neither happened. Self-serve customers retained at 60%, against 50% for sales-led customers, and the sales channel kept its role. Once the data showed that, the objections faded.

<h2 id="results">Results</h2>

<table class="result-table">
  <thead><tr><th scope="col">Measure</th><th scope="col">What changed</th></tr></thead>
  <tbody>
    <tr><td>$0 → $10M+</td><td>Annual recurring revenue in the self-serve channel.</td></tr>
    <tr><td>60% retention</td><td>Self-serve retention, against 50% for sales-led customers.</td></tr>
    <tr><td>CAC</td><td>Under the sales-led model, acquiring a small-business customer cost almost as much as their subscription. Making those customers profitable to acquire was the point of self-serve.</td></tr>
    <tr><td>Abandonment</td><td>Dropped significantly after pricing became transparent and dynamic.</td></tr>
  </tbody>
</table>

<h2 id="learned">What I learned</h2>

A tested behavioral threshold beats an onboarding pattern borrowed from somewhere else. And measurement has to be in place before the redesign, or you can’t tell whether the redesign worked.
