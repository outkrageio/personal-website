# The Last Ten Percent — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Write and publish a 1,800–2,200 word personal essay arguing that AI collapsed the first 90% of software development, which didn't shrink the job — it moved the entire weight of engineering into the last 10%, whose bottlenecks (judgment, human feedback loops, a moving definition of done) were never generation problems.

**Architecture:** Single MDX file following existing blog post conventions. Export metadata object, write content in markdown. No components or imports needed. Story-spine structure: sections are written in reading order because the opening anchor story drives every later section; the close is written last, then a full review-and-polish pass.

**Tech Stack:** MDX, Next.js content pipeline (existing)

## Global Constraints

These apply to every task. They are copied from the design doc at `docs/plans/2026-07-03-the-last-ten-percent-design.md` — the implementer should read that doc in full before starting.

- Total length 1,800–2,200 words of prose (excluding metadata).
- Tone: observational, wry at the turn, earnest by the close. The awe at AI's speed is sincere and is never retracted — only complicated.
- First person throughout; the project story is told as lived, not reported.
- No listicles, no bullet lists inside the post, no career advice, no emoji.
- No AI hype and no AI doom. No naming of specific tools, models, or vendors — "the model" and "the agent" are as specific as it gets.
- No identifying detail about the employer or the internal service beyond "an internal tool to assist dev teams."
- No bitterness toward the long tail — the register is respect, not complaint.
- Italics for emphasis, used rarely. Short punchy lines used sparingly, as load-bearing turns.
- Date and slug: `2026-07-03`, `the-last-ten-percent`.

---

### Task 1: Create the MDX file with metadata

**Files:**
- Create: `src/content/posts/the-last-ten-percent.mdx`

**Interfaces:**
- Produces: the MDX file all later tasks append prose to. Metadata object exactly as below — later tasks must not modify it.

- [ ] **Step 1: Create the file with metadata**

```mdx
export const metadata = {
  title: "The Last Ten Percent",
  date: "2026-07-03",
  description:
    "AI made the first 90% of software nearly free. That didn't shrink the job — it distilled it.",
};
```

- [ ] **Step 2: Verify it renders**

Run: `cd /Users/kraigbritton/working/personal-website && npm run dev`
Visit: `http://localhost:3000/blog` — confirm the post appears in the listing, dated 2026-07-03, sorted newest-first.
Visit: `http://localhost:3000/blog/the-last-ten-percent` — confirm the page loads without MDX errors.

- [ ] **Step 3: Commit**

```bash
git add src/content/posts/the-last-ten-percent.mdx
git commit -m "Add blog post stub: The Last Ten Percent"
```

---

### Task 2: Write the opening (no header)

**Files:**
- Modify: `src/content/posts/the-last-ten-percent.mdx`

**Reference:** Design doc section "Opening (no header)"

- [ ] **Step 1: Write ~300 words**

After the metadata block, write the opening. No section header — the post opens directly in prose, matching `the-bottom.mdx`.

Content guidance from the design doc:
- Open inside the project: an internal service built at work to assist dev teams. In the first stretch it simply *materialized* — working code, real tests, CI/CD wired up, the kind of first fortnight that would have been a quarter's roadmap three years ago.
- Two or three paragraphs of the fast act, rendered concretely enough to be felt: the service standing up, the pipeline going green, the demo that impressed people.
- The awe must read as sincere. No irony yet — the turn only works if the reader has bought the speed first.
- Then the turn, one short paragraph: months later, still on it. Not because it was broken — because of everything after "it works": the refinements, the bug fixes, the UI that was right until someone used it.
- Land the thesis line at the end of the opening: **"The first 90% took 10% of the time. The last 10% took the rest."** (or a very close equivalent — this is a load-bearing line).

Voice references:
- `the-bottom.mdx` opening: grounded observation before any argument, short declarative paragraphs, thesis line standing alone.

- [ ] **Step 2: Commit**

```bash
git add src/content/posts/the-last-ten-percent.mdx
git commit -m "Write opening for The Last Ten Percent"
```

---

### Task 3: Write "The Joke Became a Description"

**Files:**
- Modify: `src/content/posts/the-last-ten-percent.mdx`

**Reference:** Design doc section "The Joke Became a Description"

- [ ] **Step 1: Write ~350 words under the header `## The Joke Became a Description`**

Content guidance from the design doc:
- Introduce Tom Cargill's ninety-ninety rule (Bell Labs, 1985): "The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time." Quote it accurately; attribute it to Tom Cargill.
- Its original register: a joke about optimism — a punchline engineers told each other about their own estimates. It was funny because both 90s couldn't literally be true.
- The inversion: AI didn't break the rule — its *meaning inverted*. The first 90% genuinely is fast now. The punchline stopped being an exaggeration and became a project plan. Load-bearing framing: **the rule used to warn you about your estimates; now it tells you where your job went.**
- Keep the project in peripheral vision — one sentence tying the rule back to the internal service.
- This is the essay's one essayistic section. Keep it tight; do not let it balloon past ~350 words.

- [ ] **Step 2: Commit**

```bash
git add src/content/posts/the-last-ten-percent.mdx
git commit -m "Write ninety-ninety rule section for The Last Ten Percent"
```

---

### Task 4: Write "Knowing What Right Looks Like"

**Files:**
- Modify: `src/content/posts/the-last-ten-percent.mdx`

**Reference:** Design doc section "Knowing What Right Looks Like"

- [ ] **Step 1: Write ~350 words under the header `## Knowing What Right Looks Like`**

First mechanism: judgment. Content guidance from the design doc:
- Generation was never the bottleneck in the last 10%. Judgment was, and judgment didn't get faster.
- Ground in the project's UI/UX rework: the model would happily produce another version of a screen, and another, each plausible. The slow part was never getting a candidate; it was knowing which candidate was correct — and being able to articulate why the current one wasn't.
- Include one real-feeling example of a plausible-but-wrong variant (e.g. a layout that demoed well but buried the action users reached for most). Concrete before abstract.
- Close on the asymmetry, a load-bearing line: **generation scaled; discernment didn't.**

- [ ] **Step 2: Commit**

```bash
git add src/content/posts/the-last-ten-percent.mdx
git commit -m "Write judgment mechanism section for The Last Ten Percent"
```

---

### Task 5: Write "The Speed of People"

**Files:**
- Modify: `src/content/posts/the-last-ten-percent.mdx`

**Reference:** Design doc section "The Speed of People"

- [ ] **Step 1: Write ~300 words under the header `## The Speed of People`**

Second mechanism: human feedback loops. Content guidance from the design doc:
- Refinement needed real users trying the tool, reacting, asking for changes. Those loops run at the speed of calendars and meetings, not tokens.
- Render the rhythm of the long tail: ship a change, wait for the team to actually use it, hear what's wrong in a standup or a Slack thread days later, adjust.
- Load-bearing line: **the machine's cycle time is seconds; the loop's cycle time is people.** Also: you cannot prompt your way past a week of waiting to watch someone use the thing.
- Short section. The point is simple; don't inflate it.

- [ ] **Step 2: Commit**

```bash
git add src/content/posts/the-last-ten-percent.mdx
git commit -m "Write feedback loops section for The Last Ten Percent"
```

---

### Task 6: Write "The Moving Target"

**Files:**
- Modify: `src/content/posts/the-last-ten-percent.mdx`

**Reference:** Design doc section "The Moving Target"

- [ ] **Step 1: Write ~300 words under the header `## The Moving Target`**

Third mechanism: the definition of done moves. Content guidance from the design doc:
- "Done" wasn't a fixed point being approached; it moved every time someone used the tool. Load-bearing beat: **"done" moved every time someone used the tool.**
- In the project, features that were requested turned out not to be what was needed once they existed; the act of using the tool changed what the tool needed to be.
- Frame this without blame: not scope creep as a failure of discipline — it is how anyone learns what they actually want: by reacting to something real. AI compresses the time to something real; it does not compress the reacting.
- Draw the line from the previous section explicitly in one sentence: the last section was about the *speed* of the loop; this one is about the *destination* moving.

- [ ] **Step 2: Commit**

```bash
git add src/content/posts/the-last-ten-percent.mdx
git commit -m "Write moving target section for The Last Ten Percent"
```

---

### Task 7: Write "The Job Now"

**Files:**
- Modify: `src/content/posts/the-last-ten-percent.mdx`

**Reference:** Design doc section "The Job Now"

- [ ] **Step 1: Write ~350 words under the header `## The Job Now`**

Synthesis and close. Content guidance from the design doc:
- Pull the three mechanisms together in one paragraph — judgment, human loops, moving targets — and name what they have in common: none of them are generation problems.
- The reframe: engineering didn't shrink — it got *distilled*. The parts AI absorbed were the parts that were always, in retrospect, scaffolding: the boilerplate, the plumbing, the first draft of everything.
- What's left is the extra mile: taste, judgment, sitting with users, knowing when it's actually done. These skills always separated shipping from demoing; now they are most of what the job is.
- One sentence at most gesturing at planning implications (the ninety-ninety rule used to be a complaint; it is now a job description). Do not develop estimation advice.
- Close cold and personal, no advice, no program. Final load-bearing line in the register of: **the last 10% was always the job; we were just too busy with the other 90% to notice.**

- [ ] **Step 2: Commit**

```bash
git add src/content/posts/the-last-ten-percent.mdx
git commit -m "Write synthesis and close for The Last Ten Percent"
```

---

### Task 8: Review and polish the full post

**Files:**
- Modify: `src/content/posts/the-last-ten-percent.mdx`

- [ ] **Step 1: Read the full post end to end**

Check against the design doc:
- Argument flow: opening earns the speed → turn lands the thesis line → ninety-ninety section reframes it as an inversion → three mechanism sections each explain one reason the last 10% stays slow → synthesis names what the mechanisms share and redefines the job. Each section must connect to the next.
- Load-bearing lines present (exact or close equivalent):
  - "The first 90% took 10% of the time. The last 10% took the rest."
  - "The joke became a description." / meaning inverted
  - "Generation scaled; discernment didn't."
  - "The machine's cycle time is seconds; the loop's cycle time is people."
  - "'Done' moved every time someone used the tool."
  - "The last 10% was always the job; we were just too busy with the other 90% to notice."
- Mechanism sections stay distinct: Speed of People = loop speed; Moving Target = destination moves. The explicit distinguishing sentence exists in Task 6's section.
- Register violations: no tool/vendor names; no employer-identifying detail; no listicles or bullet lists; no career advice; no hype, doom, or bitterness; italics rare; no emoji.
- The awe in the opening reads sincere, and is never retracted later — only complicated.
- Word count: 1,800–2,200. Count with: `sed '1,7d' src/content/posts/the-last-ten-percent.mdx | wc -w` (adjust the line range to skip the metadata block if it shifted).
- Paragraph length variety: mix of short punchy and longer explanatory.

- [ ] **Step 2: Polish**

- Tighten sections that drag; the two ~300-word sections must not balloon.
- Strengthen weak transitions between mechanism sections.
- Verify short punchy lines are load-bearing turns, not a tic — if more than one per section, cut.

- [ ] **Step 3: Verify it renders correctly**

Run: `cd /Users/kraigbritton/working/personal-website && npm run dev`
Visit: `http://localhost:3000/blog/the-last-ten-percent`
Confirm: renders correctly, no MDX errors, reads well in the site's typography.

- [ ] **Step 4: Build check**

Run: `cd /Users/kraigbritton/working/personal-website && npm run build`
Expected: static export to `out/` succeeds with no errors.

- [ ] **Step 5: Final commit**

```bash
git add src/content/posts/the-last-ten-percent.mdx
git commit -m "Add blog post: The Last Ten Percent"
```
