# Feature Landscape: Manifesto Blog Post on Software Quality in the Age of AI

**Domain:** Manifesto-style tech opinion essay targeting software quality professionals (SDETs, QA engineers, test leads)
**Researched:** 2026-03-01
**Research mode:** Ecosystem — what makes compelling manifesto-style tech posts, and what differentiates this one from existing discourse

---

## Table Stakes

Structural elements every good manifesto post needs. Missing any of these and the post feels incomplete or unconvincing.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Clear, falsifiable thesis stated early | Readers need to know within the first paragraph what they're being asked to believe. Manifestos that bury the argument feel like essays, not calls to action. | Low | PROJECT.md thesis: "AI shifts QA from execution to quality systems thinking — that's a promotion, not a pink slip." State it plainly. |
| A named enemy or opposing belief | Manifestos argue against something. The reader needs to know what wrong belief is being replaced. Without an antagonist, the post has no tension. | Low | The enemy here is the fear narrative: "AI is coming for QA jobs." Name it directly. Don't strawman it — acknowledge it has real basis. |
| Concrete, specific examples (not analogies) | Abstract arguments about AI and quality are everywhere. What makes a manifesto land is evidence that the author has lived in the problem. Generic examples signal generic thinking. | Medium | The two anchor examples (FastAPI diagnostic service, AI testing its own blind spots) are the core asset. Both must appear and be rendered specifically, not summarized. |
| Emotional acknowledgment of reader's fear | Quality professionals are genuinely anxious about AI. A manifesto that doesn't acknowledge that anxiety before challenging it will feel dismissive and lose the reader before the turn. | Low | One or two sentences is sufficient — acknowledge the job market pressure is real, then redirect. |
| Internal logic / argument structure | Each section must build on the previous one. If the reader can't follow the chain of reasoning, the manifesto reads as ranting. | Medium | The two examples work as thesis (opportunity) + antithesis (risk) → synthesis (QA as quality systems thinking). That's the logical spine. |
| Call to action | A manifesto without a call to action is a philosophical essay. The reader must finish knowing what to DO differently, not just what to think. | Low | Should be concrete: what does a quality professional actually do on Monday morning to embrace this shift? |
| Section breaks / scannable structure | Readers skim before they commit. Headers signal that there's structure to the argument. Kraig's existing posts all use h2 sections. | Low | Follow the existing site pattern: h2 subheadings, bold for key claims. |
| Readable length (1500-2000 words) | Too short = not credible. Too long = loses the reader before the turn. Manifestos are dense. This range is the sweet spot for this audience. | Low | Hard constraint from PROJECT.md. The two examples + argument will fill this naturally. |
| Author credibility established through specificity | The reader needs to trust that the author has been in the room. Vague claims about "I've seen AI transform QA" don't establish credibility. Specific numbers, timeframes, and outcomes do. | Medium | "Built in one week" and "FastAPI service that ingests test results, logs, and historical trends" are more credible than "AI made me faster." |

---

## Differentiators

What would make this post stand out from the existing conversation. The "AI won't replace QA" argument has been made hundreds of times. The existing discourse clusters around three generic claims: (1) AI handles routine testing, humans do strategy; (2) QA professionals need to learn AI tools; (3) the job will change but not disappear. This post must do something different.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| The "AI tested its own assumptions" framing | The correlated blind spot failure mode is genuinely underrepresented in QA discourse. Most posts say "AI augments testers." Few say "here is a specific failure mode that proves humans must remain the quality definers." This framing is new. | Medium | This is the post's strongest differentiator. The business logic bug — where AI-generated tests validated AI-generated code against the wrong requirements — is a concrete proof that human quality judgment cannot be delegated. Render this example in full. |
| Quality systems thinking as the reframe (not just "strategy") | Everyone says "shift to strategy." Quality systems thinking is a more specific and actionable reframe: pipelines, observability, feedback loops, risk assessment frameworks. It's the difference between telling someone to "think bigger" and telling them what bigger thinking looks like. | Medium | Define it: designing quality gates, owning risk assessment, shifting left AND right. Not just "be more strategic." |
| The force multiplier example as ambition, not reassurance | Most posts reassure. "Your job is safe because AI can't replace human judgment." This post should do the opposite: "AI is your leverage, and if you're not using it, you're leaving capability on the table." The FastAPI diagnostic service example argues that an SDET with AI can now build quality infrastructure that would have been out of reach — that's an argument for expansion, not just survival. | High | This requires a tone shift from Kraig's usual reflective style. The example needs to land as "here's what's now possible" not "here's what some AI did for me." |
| The "this is a promotion, not a pink slip" framing | Existing posts soften the threat. This post should name it plainly: yes, AI is changing what QA does day-to-day. Here's why that's good news if you're willing to move. This is more honest and more galvanizing than the reassurance-first approach. | Low | The phrase "promotion, not a pink slip" from PROJECT.md is strong. Use it explicitly in the post. |
| Tension between the two examples | The two examples work as structural tension: AI as force multiplier (example 1) and AI as blind spot (example 2). Most posts only carry one of these. The combination creates an argument that is neither naively optimistic nor fear-mongering. It says: this is powerful AND dangerous, and your judgment is what makes the difference. | High | This is the post's structural strength. The examples must be sequenced so the first creates optimism and the second deflates easy optimism — before the synthesis argues for quality systems thinking as the resolution. |
| Direct address to the reader's identity | Most "AI and QA" posts address QA professionals as a category. A manifesto with energy addresses the reader directly: "If you're reading this, you probably already understand quality..." This makes the reader feel seen, not lectured at. | Low | Kraig's existing posts use second person occasionally (see "The Same Blind Spot Twice" ending). Use it more in this post. |
| Written from practitioner experience, not prediction | Most posts in this space are predictive ("by 2027, 80% of enterprises will..."). This post is grounded in things that already happened. The FastAPI service was built. The AI testing its own blind spots happened. Present tense authority beats future tense speculation for manifesto credibility. | Low | Stay in past/present tense for the examples. Avoid "will" and "may" in the core argument. |

---

## Anti-Features

Things to deliberately NOT include. Each of these would dilute the manifesto energy or make the post blend into the existing discourse.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Numbered "tips" or listicles | Lists of "5 ways to adapt to AI" read as content marketing, not manifestos. The format signals generic advice. The existing conversation is full of listicles. | Use narrative argument structure with bold claims inside prose sections, like Kraig's other posts. |
| Reassurance as the primary move | "Your job is safe" is the weakest version of this argument. It's also what every other post says. Reassurance without challenge is not a manifesto — it's a LinkedIn comment. | Lead with the opportunity (example 1), complicate with the risk (example 2), resolve with the challenge: "Here's what you have to own." |
| AI tool recommendations | "Use Playwright, use Copilot, learn prompt engineering" — this turns the post into a how-to guide, not a manifesto. It also dates immediately. | The post is about the mindset shift, not the toolchain. Keep it tool-agnostic. |
| Prediction statistics | "By 2027, 80% of enterprises will..." These numbers are sourced from analyst reports, sound authoritative, date badly, and undermine the practitioner credibility the post is building. | Kraig's own observations and specific examples are more credible than cited statistics for a manifesto. |
| The "humans are still needed" argument | This is the weakest possible version of the thesis. Of course humans are still needed. The interesting argument is WHY and for WHAT specifically. | Argue for the specific value of quality systems thinking, not the generic value of human judgment. |
| Hedging language | "This might not apply to everyone." "Your mileage may vary." "It depends on your organization." Hedges are honest, but they kill manifesto energy. A manifesto makes claims and owns them. | State the argument directly. If there are real limitations, acknowledge them in a sentence and move on. Don't let caveats dilute the core claim. |
| Code samples or technical tutorial content | PROJECT.md explicitly excludes this. More importantly, code samples shift the register from argument to instruction. This is a call to arms, not a tutorial. | If a technical concept needs to be concrete, describe it in a sentence. Don't illustrate it. |
| A both-sides conclusion | "AI is a tool, and like any tool, it's only as good as the person using it." This is the safe landing that makes no one uncomfortable and convinces no one. | End with a clear challenge to the reader: the opportunity is real, the risk is real, and quality professionals who understand both are exactly what software needs right now. |

---

## Feature Dependencies

How the structural elements depend on each other:

```
Thesis stated early
    → Requires: Named enemy (what wrong belief is being replaced)
    → Enables: Reader knows what to watch for

Example 1 (force multiplier / FastAPI service)
    → Requires: Author credibility established first
    → Enables: Optimism / "this is possible"

Example 2 (AI testing its own blind spots)
    → Requires: Example 1 first (the antithesis needs the thesis to push against)
    → Enables: "But here's the catch" — deflates easy optimism
    → Enables: Quality systems thinking as the necessary resolution

Quality systems thinking frame
    → Requires: Both examples (to establish the tension it resolves)
    → Enables: Call to action (because the reader now knows what to do)

Call to action
    → Requires: Quality systems thinking frame (to give the action specificity)
    → Terminal: nothing depends on this, it's the exit
```

The sequence is non-negotiable: thesis → fear acknowledgment → example 1 → example 2 → resolution frame → call to action. Reordering breaks the argument.

---

## MVP Recommendation

The post lives or dies on three things. Everything else is structure around these.

**1. The "AI tested its own assumptions" story told in full detail.**
Not summarized. The reader needs to feel the failure mode viscerally — the green test suite, the confident CI output, the production bug that the tests validated as correct behavior. This is the post's strongest original contribution to the conversation.

**2. The "built a quality system in a week" story told as ambition.**
Not as a humble brag, but as evidence of what's now possible. Frame it as: here's what quality professionals can now build if they claim the leverage.

**3. The explicit synthesis: quality systems thinking as the job.**
Don't let the two examples sit next to each other without resolving the tension. The synthesis is: AI makes quality professionals more powerful (example 1), but only if humans define what quality means and catch what AI can't catch about its own blind spots (example 2). That's the argument. That's what the reader takes home.

**Defer:** Any discussion of specific AI tools, career advice about learning prompt engineering, statistics about the QA job market. These dilute the manifesto register.

---

## Sources

- Existing QA/AI discourse landscape: [Will AI Replace QA Engineers? — Momentic](https://momentic.ai/blog/will-ai-replace-qa-engineers), [QA and SDET Is the Safest Job during AI Boom](https://prepare.sh/articles/qa-and-sdet-is-the-safest-job-during-ai-boom-analysis-of-qa-2025-job-market-trends), [Facing 2025: How to Future-Proof Your QA Career](https://blog.magicpod.com/future-proof-qa-career-ai-driven-world) — MEDIUM confidence (WebSearch verified; confirms the "transformation not replacement" framing is the existing consensus this post must differentiate from)

- Quality systems evolution: [Quality Engineering vs Software Engineering — Virtuoso](https://www.virtuosoqa.com/post/quality-engineering-vs-software-engineering), [From QA to Quality Engineering: The Mindset Shift — Medium](https://medium.com/@lakindudesilva007/from-qa-to-quality-engineering-the-mindset-shift-12440d093c55) — MEDIUM confidence (WebSearch only; confirms "systems thinking" framing is directionally correct but not yet dominant)

- AI correlated blind spots in testing: [Vibe Coding? Nah, Vibe Testing — StaleElement](https://staleelement.com/2025/05/25/vibe-coding-nah-vibe-testing-leveraging-ai-is-testing/) — LOW confidence (URL found, content unverified due to tool restriction; the "AI tested its own assumptions" framing in PROJECT.md is more specific and original than anything found in search results)

- Manifesto structure and tone: [How to Write a Manifesto That Inspires Action — Richly AI](https://richlyai.com/blog/how-to-write-a-manifesto/), [Stories as Persuasion — CopyBlogger](https://copyblogger.com/stories-persuade/) — MEDIUM confidence (confirms: Problem → Vision → CTA structure; personal stories outperform generic advice; active voice and direct address are table stakes)

- Kraig's existing post style: `/Users/kraigbritton/working/personal-website/src/content/posts/the-shrinking-room.mdx`, `/Users/kraigbritton/working/personal-website/src/content/posts/the-same-blind-spot-twice.mdx` — HIGH confidence (primary source)
