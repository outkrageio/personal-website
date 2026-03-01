# Phase 1: Design Doc - Research

**Researched:** 2026-03-01
**Domain:** Technical writing design doc — argument structure, voice constraints, and implementation planning for a manifesto-style blog post
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Argument arc:**
- Pivot between examples is escalation, not reversal — the success (force multiplier) CAUSES the blind spot. Same force, different angle. Not a "but" — a "yes, and this is exactly why."
- After the blind spot example, reader should feel personal recognition first ("I've done this"), then zoom out to industry-wide alarm ("this is happening everywhere"). Layered, not one or the other.
- The argument resolves into clarity with weight — reader knows exactly what to do, and it feels hard. "This is the work now, and it's yours." No comfort, no ambiguity.
- The fear narrative (AI replaces QA) is surfaced as the reader's unspoken thought — "You've been thinking it." Author names what the reader won't say, building trust before the reframe.

**Section structure:**
- Declarative claim headers — each section title stakes a position the reader must engage with (e.g., "The Test Suite Lied" not "About Testing")
- 4-5 tight sections total, matching the phase build order: Hook/reframe, Force multiplier, Blind spot, Synthesis, Close
- Draft candidate header text in the design doc, marked as provisional — prose phases can revise as the argument develops
- Include target word counts per section to maintain proportions (blind spot gets equal or more space than force multiplier)

**Example sketch depth:**
- FastAPI force multiplier: lock key technical details (what it ingests, what AI does, build time) AND emotional beats (where the reader feels the impact). More than bullets, less than prose.
- Blind spot example: composite/representative — combine real patterns into one clean example. Grounded in reality, shaped for maximum argument clarity.
- Sketch 2-3 candidate technical domains for the blind spot (e.g., payment edge case, data migration, business rule validation). Phase 2 picks the strongest during drafting.
- Key language approach: lock 1-2 essential phrases per example that must survive into the final post. Describe the rest by intent (what the moment must communicate), not exact words.

**Voice and register:**
- Author speaks as practitioner with authority — "I've built these systems. I've seen this fail." Authority comes from direct experience, not theory.
- Controlled heat — measured authority with deliberate sharp moments. Mostly calm, but when a point needs to land hard, it lands hard. The sharpness earns impact through selectivity.
- Strategic first-person — "I" for examples and key claims, "you" and "we" for synthesis and challenge. Shifts to include the reader when the argument demands it.
- Design doc includes both explicit register constraints (no hedging, no passive on claims, no tool names, no "adapt or die" rhetoric) AND 2-3 reference pieces whose tone to match.

### Claude's Discretion
- Specific section word budget allocations (within the 1500-2000 total)
- Selection of reference pieces for voice/register calibration
- Exact candidate header language (provisional, user approved the approach)
- Design doc formatting and internal organization

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| PLAN-01 | Design doc created in `docs/plans/` outlining post structure, thesis, section arguments, and narrative arc | Design doc format pattern fully established from 3 existing examples; section structure, thesis framing, and argument arc are documented in Architecture Patterns |
| PLAN-02 | Implementation plan with section-by-section writing approach | Implementation plan format pattern fully established from 2 existing examples; task-per-section structure, word counts, commit steps, and verification steps are documented in Architecture Patterns |
</phase_requirements>

---

## Summary

Phase 1 produces two documents: a design doc that locks argument structure before any prose is written, and an implementation plan that sequences the writing work section by section. This is a planning and structuring phase — no MDX prose is written here.

The project has an established design doc and implementation plan format, demonstrated across three prior blog posts ("The Process Is the Problem," "The Shrinking Room," "The Same Blind Spot Twice"). These existing artifacts are the primary source of truth for format. The format is well-specified, internally consistent, and directly inspectable in the repository.

The design doc for this post has specific constraints beyond the format: the thesis must be stated as tension (opportunity AND risk), the section headers must be declarative claims rather than topic labels, and the example sketches must include both technical details and emotional beats. The implementation plan must reflect the research-confirmed build order — examples first, pivot second, hook and close last — with word budgets per section to enforce the structural balance (blind spot gets equal or more space than force multiplier).

**Primary recommendation:** Model the design doc and implementation plan exactly on the existing `2026-02-23-the-same-blind-spot-twice-design.md` and `2026-02-23-the-same-blind-spot-twice.md` patterns — they are the most structurally similar to this post's two-example, argument-driven format.

---

## Standard Stack

### Core

| Artifact | Format | Purpose | Why Standard |
|----------|--------|---------|--------------|
| Design doc | Markdown (`.md`) | Lock argument structure, thesis, section arguments, narrative arc | Established project convention — all posts have a design doc in `docs/plans/` before prose writing |
| Implementation plan | Markdown (`.md`) | Section-by-section writing tasks with word counts, commit steps, verification steps | Established project convention — all posts have a companion implementation plan |

### File Naming Convention

| File | Location | Pattern |
|------|----------|---------|
| Design doc | `docs/plans/` | `YYYY-MM-DD-{post-slug}-design.md` |
| Implementation plan | `docs/plans/` | `YYYY-MM-DD-{post-slug}.md` |

**Example from existing posts:**
```
docs/plans/2026-02-23-the-same-blind-spot-twice-design.md   ← design doc
docs/plans/2026-02-23-the-same-blind-spot-twice.md          ← implementation plan
```

**For this post, the date is 2026-03-01:**
```
docs/plans/2026-03-01-software-quality-age-of-ai-design.md   ← design doc (PLAN-01)
docs/plans/2026-03-01-software-quality-age-of-ai.md          ← implementation plan (PLAN-02)
```

### No Installation Required

This phase produces only Markdown files in `docs/plans/`. No package installation, no MDX file, no build step. The implementation plan will include MDX creation and build verification steps, but those are future-phase tasks referenced in the plan — not executed in Phase 1.

---

## Architecture Patterns

### Design Doc Structure (from existing examples)

The design doc follows a consistent structure across all existing posts:

```
# Blog Post Design: {Title}

## Meta
- Title, Description, Audience, Tone, Length, Approach

## Core Thesis
[One or two paragraphs — the exact argument, what it claims, why it matters]

## Structure
### {Section Name}
[Section-by-section breakdown: what each section does, key points, how it connects to argument]

## Technical Details (optional)
[Code example guidance, diagram notes — for technical posts]

## Key Risks
[What could go wrong in execution: being wrong, sounding wrong, evidence feeling contrived]
```

### What Changes for This Post

The CONTEXT.md locked several structural decisions that override generic design doc conventions:

**Headers must be declarative claims**, not topic labels. The existing design docs use topic labels ("Opening Hook," "Section: The Math Is Changing"). This post's design doc must use headers that stake a position:

| Generic (avoid) | Declarative Claim (use) |
|-----------------|------------------------|
| "Opening" | "Hook — The Moment Before the Problem Has a Name" |
| "Force Multiplier Example" | "AI Made This Possible. That's the Problem." |
| "Blind Spot Example" | "The Test Suite Lied" |
| "Synthesis" | "This Is the Work Now" |

**Word budgets per section** — not in existing design docs but required here. The blind spot example must get equal or more space than the force multiplier. Budgets should be written into the design doc to enforce this.

**Example sketches are more detailed** than existing design docs. Existing docs describe sections abstractly. This doc must include:
- FastAPI example: what it ingests, what AI does with it, specific timing (one week), the emotional beat where the reader feels the force multiplier impact
- Blind spot example: candidate technical domains (payment edge case, data migration, business rule validation), the specific discovery moment (green tests, confident CI, fundamentally wrong business logic), 2-3 candidate language phrases that must survive into the final post

**Thesis stated as tension**, not summary. The "Core Thesis" section must name both the opportunity (AI makes quality engineers more powerful) AND the risk (only if humans remain the ones defining what quality means), resolved by quality systems thinking — not as reassurance, but as a professional imperative.

### Implementation Plan Structure (from existing examples)

```
# {Title} — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** [One paragraph — what the plan produces and why]
**Architecture:** [What kind of artifact, what pipeline it uses]
**Tech Stack:** [Technologies involved]

---

### Task 1: {First deliverable}
**Files:**
- Create/Modify: {path}

**Step 1: {Action}**
[Specific instructions]

**Step 2: Verify it renders**
Run: `cd /Users/kraigbritton/working/personal-website && npm run dev`
Visit: `http://localhost:3000/blog` — confirm post appears
Visit: `http://localhost:3000/blog/{slug}` — confirm page loads

**Step 3: Commit**
```bash
git add {file}
git commit -m "{message}"
```

### Task 2: {Next section}
...

### Task N: Review and polish the full post
**Step 1: Read end to end**
Check for: {specific quality criteria}

**Step 2: Polish**
{specific polish instructions}

**Step 3: Verify it renders correctly**
...

**Step 4: Build check**
Run: `npm run build`

**Step 5: Final commit**
```
```

### Build Order — Research-Confirmed Sequence

The ROADMAP.md and CONTEXT.md both specify the build order for prose writing phases. The implementation plan must reflect this order:

| Phase | Content | Why This Order |
|-------|---------|----------------|
| Phase 2 | Examples (force multiplier + blind spot) | Examples are load-bearing — they earn the argument |
| Phase 3 | Pivot + synthesis (quality systems thinking) | Synthesis can only be written after examples prove it |
| Phase 4 | Hook + close | Hook works when you know the destination; close when you know the challenge |
| Phase 5 | Revision + publication | Register check and word count validation last |

The implementation plan (PLAN-02) must document this sequence in its task structure, not write the prose itself.

### Section Word Budget Allocation

Claude's discretion was granted over specific word budget allocations within the 1500-2000 total. Based on the argument structure and the constraint that the blind spot gets equal or more space than the force multiplier:

| Section | Target Words | Rationale |
|---------|-------------|-----------|
| Hook / reframe | 150-200 | Drops reader in without announcing thesis; short by design |
| Fear narrative acknowledgment | 100-150 | Surfaces the unspoken thought briefly before reframe |
| Force multiplier example | 300-350 | Full texture — technical detail + emotional beat |
| Pivot sentence | 50-75 | 1-3 sentences; structural weight, not length |
| Blind spot example | 350-400 | Equal or greater than force multiplier — required by constraint |
| Synthesis (quality systems thinking) | 200-250 | Three activities named after examples earn them |
| Close (challenge) | 150-200 | Challenge, not comfort; professional directive |
| **Total** | **1300-1625** | Within 1500-2000 budget with revision headroom |

### Voice Reference Selection

Claude's discretion was granted over selection of reference pieces. Based on the existing posts and the specified calibration target (Paul Graham-level clarity with selective sharpness; not DHH-level heat throughout):

**Primary voice references (in the repository):**

| Post | What to Borrow |
|------|----------------|
| `the-shepherd-and-the-sheep.mdx` | Opening sentence structure ("Something broke in the last few months and I don't think we can put it back together") — personal, unambiguous, no announcement |
| `the-same-blind-spot-twice.mdx` | The closing challenge structure — three direct questions, final sharp image |
| `the-shepherd-and-the-sheep.mdx` | First-person authority — "I've watched it happen. I've *done* it." |

**Voice constraints to encode in the design doc (explicit register rules):**
- No hedging language ("might," "could," "perhaps" in claims — allowed in examples)
- No passive voice on claims ("AI has been shown to..." — forbidden)
- No tool names (not FastAPI's marketing name, not any vendor)
- No "adapt or die" urgency rhetoric
- No em dashes (project-wide style preference from recent posts)
- Italics for emphasis on key words allowed (see "The Same Blind Spot Twice": *definition* of correct)

### Candidate Blind Spot Technical Domains

The design doc must sketch 2-3 candidate domains for the blind spot example. Phase 2 picks the strongest. Based on the PROJECT.md specification (AI agent mocked business logic, AI tests passed, acceptance criteria tests revealed the flaw):

| Domain | The Discovery Moment | Argument Clarity |
|--------|---------------------|-----------------|
| Payment edge case | Refund calculation logic: AI generated tests passing on standard flows, acceptance criteria tests reveal a rounding or currency edge case costing real money | HIGH — financial stakes make the cost visceral |
| Data migration | Migration logic: AI agent verified the migration against its own output, acceptance criteria tests reveal records dropped or transformed incorrectly | MEDIUM — abstract unless reader has lived it |
| Business rule validation | Core domain logic: AI generated a service with plausible-but-wrong rule interpretation, AI tests confirmed the wrong behavior, acceptance criteria tests revealed the mismatch | HIGH — closest to the PROJECT.md description, domain-agnostic |

**Recommendation for Phase 2:** Business rule validation is strongest because it is domain-agnostic (any quality professional recognizes it) and most directly matches the actual experience described in PROJECT.md. Payment edge case is the strongest alternative if Phase 2 decides more financial stakes are needed.

---

## Don't Hand-Roll

This phase produces Markdown design documents. There are no library choices, no custom solutions to avoid. The analogous guidance for a writing/planning phase:

| Problem | Don't Do | Do Instead | Why |
|---------|----------|------------|-----|
| Thesis framing | Frame the thesis as pure reassurance ("AI doesn't replace you, here's why") | State as tension — opportunity AND risk, resolved by a hard professional choice | Reassurance kills manifesto energy; tension creates the reader engagement that earns the conclusion |
| Section headers | Use topic labels ("The Examples," "The Solution") | Use declarative claims that force reader engagement ("AI Made This Possible. That's the Problem.") | Topic labels are skimmable; claims demand a response |
| Example sketches | Write abstract placeholders ("describe a scenario where...") | Lock specific details: timing, what was ingested, what the discovery moment felt like | Specificity in the design doc constrains prose phases to deliver texture, not vague narrative |
| Implementation plan tasks | Write one task per phase or one big "write the post" task | One task per section, with explicit word count targets and commit steps | Section-level tasks make work verifiable and stoppable at any point |
| Voice registration | Leave tone as implicit | Encode explicit register rules in the design doc (no hedging, no passive on claims, no tool names) | Implicit tone gets diluted across phases; explicit rules are checkable |

---

## Common Pitfalls

### Pitfall 1: Thesis Stated as Reassurance
**What goes wrong:** The design doc frames the thesis as "AI won't replace you" — a comfort statement. This undermines the manifesto register and makes the post indistinguishable from the category of content quality professionals already distrust.
**Why it happens:** Reassurance is the natural endpoint of the two-example structure if the pivot is read as "but here's why it's fine."
**How to avoid:** State the thesis in the design doc as tension: AI makes quality engineers more powerful (true) AND the only way that's true is if humans remain the arbiters of what quality means (the condition that requires hard work). The resolution is "this is the work now, and it's yours" — not "you're safe."
**Warning signs:** The thesis section uses words like "still valuable," "more important than ever" as conclusions rather than as earned arguments.

### Pitfall 2: Escalation Pivot Written as Reversal
**What goes wrong:** The pivot between examples reads as "but here's the problem with that." The force multiplier becomes a setup for the blind spot, and the reader experiences the narrative as bait-and-switch.
**Why it happens:** Two-example structures naturally read as thesis/antithesis. The word "but" or "however" makes the pivot a reversal.
**How to avoid:** The design doc must state the pivot as escalation: the same force that makes AI a force multiplier is what creates the blind spot. The FastAPI service's speed is exactly why the business logic failure happens — velocity without human quality gates is the mechanism. "Yes, and this is exactly why" not "but."
**Warning signs:** The design doc uses "however," "but," or "on the other hand" to connect the two examples.

### Pitfall 3: Headers as Topic Labels
**What goes wrong:** Section headers describe what the section is about rather than making a claim. "The Force Multiplier" announces a topic. "AI Made This Possible. That's the Problem." demands engagement.
**Why it happens:** Topic labels are the default academic and blog convention. They're safe.
**How to avoid:** Every section header in the design doc must be reviewable against the test: "Can a reader respond to this with agreement or disagreement?" If they can only respond with "okay, that's what this is," it's a topic label.
**Warning signs:** Any section header is a noun phrase ("The Examples," "The Solution," "The Conclusion") rather than a claim.

### Pitfall 4: Example Sketches Too Abstract
**What goes wrong:** The design doc describes examples in abstract terms ("describe a scenario where AI generates tests that pass but miss business logic"). Phase 2 then has insufficient constraint and writes something generic.
**Why it happens:** Design docs often describe intent, not specifics.
**How to avoid:** Lock the technical details of the FastAPI example (what it ingests — test results, logs, historical trends; what AI does — infers failure cause, proposes fix suggestions; timing — one week versus a traditional team's months). For the blind spot, sketch the discovery moment in enough detail that Phase 2 knows the exact emotional beat to hit.
**Warning signs:** Any example in the design doc is described in sentences starting with "imagine if" or "picture a scenario."

### Pitfall 5: Implementation Plan Tasks Too Large
**What goes wrong:** The implementation plan has one or two big tasks ("Write the body of the post") rather than section-level tasks. This makes the work unverifiable and forces all decisions into the prose phase.
**Why it happens:** The design doc feels like it already specified the content, so the implementation plan seems redundant to detail.
**How to avoid:** One task per section, with word count targets, explicit content guidance pointing to the design doc, and a commit step. Match the pattern from `2026-02-22-the-process-is-the-problem.md` and `2026-02-23-the-same-blind-spot-twice.md` exactly.
**Warning signs:** Any implementation plan task spans more than two sections.

### Pitfall 6: Fear Narrative Handled as Disclosure, Not Trust-Building
**What goes wrong:** "AI won't replace QA" is stated as the thesis upfront, which makes the fear narrative a setup for reassurance. Reader is primed to receive comfort, not challenge.
**Why it happens:** The natural instinct is to address the fear by resolving it quickly.
**How to avoid:** The design doc must sequence the fear narrative correctly: surface it as "the thing you've been thinking" (intimate, not confrontational), then reframe rather than resolve. The reframe does not say "don't worry." It says "the fear is wrong about the mechanism."
**Warning signs:** The design doc places the reframe immediately after naming the fear rather than after the examples have earned it.

---

## Code Examples

Not applicable — this phase produces Markdown documents, not code. The relevant "examples" are the structural patterns from existing design docs.

### Design Doc Opening Pattern (from existing posts)

```markdown
# Blog Post Design: {Title}

## Meta

- **Title:** {Title}
- **Description:** {One sentence that appears in blog listing}
- **Audience:** {Who is this for — specific, not generic}
- **Tone:** {How it sounds, what it borrows from, what it avoids}
- **Length:** {Target word count range}
- **Approach:** {The structural strategy in one sentence}

## Core Thesis

{1-2 paragraphs. The exact argument — what it claims, why it's true, what the reader should believe when done. This is NOT a summary of sections. It's the distilled claim.}

## Structure

### {Declarative Claim Header}

{2-4 paragraphs describing what this section does, key points, specific content, how it connects to the argument and previous sections}
```

### Implementation Plan Header Pattern (from existing posts)

```markdown
# {Post Title} — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** {One paragraph — the complete deliverable and why it exists}
**Architecture:** {Artifact type and pipeline — "Single MDX file following existing blog post conventions"}
**Tech Stack:** {Technologies — "MDX, Next.js content pipeline (existing)"}

---

### Task 1: Create the MDX file with metadata

**Files:**
- Create: `src/content/posts/{slug}.mdx`

**Step 1: Create the file with frontmatter**

```mdx
export const metadata = {
  title: "{Title}",
  date: "{YYYY-MM-DD}",
  description: "{description}",
};
```

**Step 2: Verify it renders**

Run: `cd /Users/kraigbritton/working/personal-website && npm run dev`
Visit: `http://localhost:3000/blog` — confirm post appears in listing.
Visit: `http://localhost:3000/blog/{slug}` — confirm page loads.

**Step 3: Commit**

```bash
git add src/content/posts/{slug}.mdx
git commit -m "Add blog post stub: {Title}"
```
```

---

## State of the Art

This phase concerns established internal project conventions, not evolving external technology. No library upgrades or ecosystem shifts apply.

| Convention | Status | Confirmed By |
|-----------|--------|-------------|
| Design doc in `docs/plans/` before prose | Established pattern | 3 existing design docs |
| Implementation plan as companion to design doc | Established pattern | 2 existing implementation plans |
| One task per section with commit steps | Established pattern | Both existing implementation plans |
| No MDX creation in Phase 1 | Required — Phase 5 handles TECH-01/02/03 | REQUIREMENTS.md traceability table |
| File naming: `YYYY-MM-DD-{slug}-design.md` + `YYYY-MM-DD-{slug}.md` | Established pattern | All existing docs/plans files |

---

## Open Questions

1. **Post slug for file naming**
   - What we know: The post title is not yet locked (PROJECT.md uses "Software Quality in the Age of AI" as working title). Slug must be chosen for `docs/plans/` file names.
   - What's unclear: Whether the final published slug will match the design doc slug — but for Phase 1 documents the slug only needs to be stable enough to name the files.
   - Recommendation: Use `software-quality-age-of-ai` as the slug for now. Phase 5 can rename if the post title changes.

2. **Voice reference pieces — external sources**
   - What we know: The CONTEXT.md specifies "2-3 reference pieces whose tone to match" and the SPECIFICS section names Paul Graham as calibration. The design doc should reference external pieces by name.
   - What's unclear: Which specific Paul Graham essays are most relevant as register references.
   - Recommendation: Use "Hackers and Painters" (directness, practitioner authority) and "What You'll Wish You'd Known" (first-person, challenge framing) as external references. Combined with the internal references (shepherd and sheep, same blind spot twice) this gives Claude full register calibration. Claude's discretion was granted here.

3. **Composite vs. single-source blind spot example**
   - What we know: The CONTEXT.md locked that the blind spot is "composite/representative — combine real patterns into one clean example." The design doc must sketch 2-3 candidate domains.
   - What's unclear: The design doc does not pick the domain — Phase 2 does. The design doc must leave the choice open while giving enough specifics that any of the candidates can be executed.
   - Recommendation: Document all three candidates (payment edge case, data migration, business rule validation) with brief sketches in the design doc. Mark Phase 2's selection point explicitly.

---

## Sources

### Primary (HIGH confidence)

- Direct inspection of `docs/plans/2026-02-23-the-same-blind-spot-twice-design.md` — design doc format and section structure
- Direct inspection of `docs/plans/2026-02-23-the-same-blind-spot-twice.md` — implementation plan format and task structure
- Direct inspection of `docs/plans/2026-02-22-the-process-is-the-problem-design.md` — design doc format (second example)
- Direct inspection of `docs/plans/2026-02-22-the-process-is-the-problem.md` — implementation plan format (second example)
- Direct inspection of `docs/plans/2026-02-22-the-shrinking-room-design.md` — design doc format (third example)
- Direct inspection of `.planning/phases/01-design-doc/01-CONTEXT.md` — locked decisions and discretion areas
- Direct inspection of `.planning/REQUIREMENTS.md` — PLAN-01 and PLAN-02 specifications
- Direct inspection of `.planning/ROADMAP.md` — build order and phase success criteria
- Direct inspection of `.planning/PROJECT.md` — post thesis, examples, and tone specification
- Direct inspection of `src/content/posts/the-same-blind-spot-twice.mdx` — voice and register reference
- Direct inspection of `src/content/posts/the-shepherd-and-the-sheep.mdx` — voice and opening pattern reference

### Secondary (MEDIUM confidence)

None — all findings are sourced from primary project inspection.

### Tertiary (LOW confidence)

None.

---

## Metadata

**Confidence breakdown:**
- Document format patterns: HIGH — three existing design docs and two existing implementation plans directly inspected; format is consistent and well-established
- Argument structure: HIGH — locked in CONTEXT.md with detailed specifics; no ambiguity
- Voice constraints: HIGH — locked in CONTEXT.md; internal voice references are inspectable in the repository
- Word budget allocations: MEDIUM — Claude's discretion area; the numbers above are reasoned estimates within the 1500-2000 constraint, not empirically derived
- Blind spot domain selection: MEDIUM — three candidates are reasoned from PROJECT.md description; Phase 2 makes the final call

**Research date:** 2026-03-01
**Valid until:** This phase; the design doc conventions are stable within this project
