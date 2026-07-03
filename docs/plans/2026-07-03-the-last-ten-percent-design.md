# The Last Ten Percent — Design Doc

**Date:** 2026-07-03
**Slug:** `the-last-ten-percent`
**File:** `src/content/posts/the-last-ten-percent.mdx`
**Target length:** 1,800–2,200 words
**Tone:** Observational, wry at the turn, earnest by the close. The register of *The Bottom* but lighter — this piece is about work, not dread. The awe at AI's speed is genuine and stays genuine; the essay complicates it without retracting it.

## Metadata

```ts
export const metadata = {
  title: "The Last Ten Percent",
  date: "2026-07-03",
  description:
    "AI made the first 90% of software nearly free. That didn't shrink the job — it distilled it.",
};
```

## Thesis

AI has collapsed the first 90% of software development into a fraction of the time it used to take. That didn't make software 90% easier — it moved the entire weight of the job into the last 10%: the refinements, the bug fixes, the interface that was right until someone used it. The last 10% stays slow because its bottlenecks were never generation. They are judgment (knowing what right looks like), human feedback loops (refinement runs at the speed of people), and a moving definition of done (you discover what the product is by shipping it). Engineering didn't shrink. It got distilled to the part that was always hardest.

## Anchor

A real project: an internal service built at work to assist dev teams. The first stretch was astonishing — working code, real tests, CI/CD wired up, in a couple of weeks. The long tail was refinements, bug fixes, and reworking the UI/UX after people actually used it. The extra mile took months. The piece opens inside this story and returns to it throughout as evidence.

## Structural Approach

Story-spine. Open inside the project's fast first act, turn on the long tail, pull back to the inverted ninety-ninety rule, walk the three mechanisms one section each, land on the redefinition of the job. Matches the established pattern of prior posts: observation first, argument earned.

## Section Outline

### Opening (no header)

**Length:** ~300 words.

**Beat:** Inside the project. An internal service to assist dev teams — and in the first stretch it simply *materialized*: working code, real tests, CI/CD, the kind of first fortnight that would have been a quarter's roadmap three years ago. Told concretely, with the genuine awe intact. No irony yet.

**Move:** Two or three paragraphs of the fast act, rendered specifically enough to be felt (the service standing up, the pipeline going green, the demo that impressed people). Then the turn, one short paragraph: months later, still on it. Not because it was broken — because of everything after "it works." Land the thesis line: **the first 90% took 10% of the time; the last 10% took the rest.**

**Voice note:** Open in first person, grounded in the specific project. The awe must read as sincere — the turn only works if the reader has bought the speed first.

---

### ## The Joke Became a Description

**Length:** ~350 words.

**Beat:** Tom Cargill's ninety-ninety rule (1985): "The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time." It was always a joke about optimism — a way of saying *you're underestimating*. AI turned the joke into an accurate spec.

**Move:** Introduce the rule and its original register: a punchline engineers told each other about their own estimates. Then the inversion: the rule didn't break under AI — its *meaning inverted*. The first 90% genuinely is fast now. The punchline stopped being an exaggeration and became a project plan. It used to warn you about your estimates; now it tells you where your job went.

**Voice note:** This is the one section that leans essayistic. Keep it short and keep the project in peripheral vision — one sentence tying the rule back to the service.

---

### ## Knowing What Right Looks Like

**Length:** ~350 words.

**Beat:** First mechanism. Generation was never the bottleneck in the last 10%. Judgment was, and judgment didn't get faster. AI can produce ten variants of a screen in a minute; deciding which one is right — and noticing what is subtly wrong — runs at human speed.

**Move:** Ground in the project's UI/UX rework. The model would happily produce another version, and another, each plausible. The slow part was never getting a candidate; it was knowing which candidate was correct, and being able to articulate why the current one wasn't. Close on the asymmetry: generation scaled, discernment didn't.

**Voice note:** Concrete before abstract. One real-feeling example of a plausible-but-wrong variant beats a paragraph of theory.

---

### ## The Speed of People

**Length:** ~300 words.

**Beat:** Second mechanism. Refinement needed real users trying the tool, reacting, asking for changes. Those loops run at the speed of calendars and meetings, not tokens.

**Move:** The rhythm of the long tail: ship a change, wait for the team to actually use it, hear what's wrong in a standup or a Slack thread days later, adjust. You cannot prompt your way past a week of waiting to watch someone use the thing. The machine's cycle time is seconds; the loop's cycle time is people.

**Voice note:** Short section. The point is simple; don't inflate it.

---

### ## The Moving Target

**Length:** ~300 words.

**Beat:** Third mechanism. "Done" wasn't a fixed point being approached; it moved every time someone used the tool. The last 10% is partly *discovering what the product actually is* — which cannot be front-loaded, no matter how fast the front is.

**Move:** In the project, features that were requested turned out not to be what was needed once they existed; the act of using the tool changed what the tool needed to be. This is not scope creep as a failure of discipline — it is how anyone learns what they actually want: by reacting to something real. AI compresses the time to something real; it does not compress the reacting.

**Voice note:** Distinguish clearly from the feedback-loops section: that one is about the *speed* of the loop, this one is about the *destination* moving. One sentence should draw that line explicitly.

---

### ## The Job Now

**Length:** ~350 words. The landing.

**Beat:** Synthesis. Engineering didn't shrink — it got distilled. The parts AI absorbed were the parts that were always, in retrospect, scaffolding: the boilerplate, the plumbing, the first draft of everything. What's left is the extra mile: taste, judgment, sitting with users, knowing when it's actually done. The skills the last 10% demands were always the ones that separated shipping from demoing; now they are most of what the job is.

**Move:** Pull the three mechanisms together in a paragraph — judgment, human loops, moving targets — and name what they have in common: none of them are generation problems. Then the reframe: the ninety-ninety rule used to be a complaint; it is now a job description. Close cold and personal, no advice: something in the register of *the last 10% was always the job; we were just too busy with the other 90% to notice.*

**Voice note:** No listicle, no career advice, no "here's what this means for hiring." The close belongs to the observation, not to a program.

---

## Beats That Must Land

- The service materialized in a fortnight — tests, CI/CD, everything.
- Months later, still on it. Not because it was broken.
- The first 90% took 10% of the time; the last 10% took the rest.
- The joke became a description. Its meaning inverted.
- Generation scaled; discernment didn't.
- The machine's cycle time is seconds; the loop's cycle time is people.
- "Done" moved every time someone used the tool.
- The last 10% was always the job; we were just too busy with the other 90% to notice.

These are the load-bearing lines. Everything else is scaffolding.

## Beats to Avoid

- No listicle. No "five skills for the AI era." Paragraphs only.
- No AI hype and no AI doom. The speed is real and the essay says so; the point is where the job went, not whether AI is good.
- No naming of specific tools, models, or vendors. "The model" and "the agent" are as specific as it gets.
- No identifying detail about the employer or the internal service beyond "an internal tool to assist dev teams."
- No bitterness. The tone toward the long tail is respect, not complaint — the last 10% is the interesting part.

## Voice Checklist (match prior posts)

- Open with observation, not argument.
- Short punchy lines used sparingly, as load-bearing turns.
- Admit uncertainty where it is real. Do not hedge where it is not.
- Section headers do structural work; prose inside stays conversational.
- No emoji. No bullet lists inside the post itself.
- Italics for emphasis, used rarely.
- First person throughout; the project story is told as lived, not reported.

## Out of Scope

- Predictions about whether AI will eventually absorb the last 10% too. The piece observes the present shape of the work; it does not forecast.
- Team-process or estimation advice. The inverted rule's implications for planning are gestured at in one sentence at most, not developed.
- Any inventory of AI coding tools or comparison between them.

## Open Questions for Implementation

- None. All shaping decisions are resolved. The implementation plan should cover draft → revision passes → polish → publish.
