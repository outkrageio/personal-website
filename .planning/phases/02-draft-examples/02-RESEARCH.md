# Phase 2: Draft Examples - Research

**Researched:** 2026-03-01
**Domain:** Argumentative prose writing — rendering concrete examples that carry an argument without stating it
**Confidence:** HIGH

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| EXMP-01 | Force multiplier example (FastAPI diagnostic service) rendered with full texture — timing, specifics, what it demonstrates | Design doc locks all technical details; voice patterns from existing posts establish how to render specifics with authority |
| EXMP-02 | Blind spot example rendered with equal or greater depth than EXMP-01, capturing the discovery moment (green test suite, confident CI, wrong business logic) | Design doc selects Option A (business rule validation) as default; "The Same Blind Spot Twice" provides direct prose model for this exact failure mode |
| EXMP-03 | Pivot sentence (1-3 sentences) connecting both examples as escalation, not reversal | Design doc encodes the "yes, and exactly why" logic; constraint is specific and checkable |
| ARG-02 | Fear narrative (AI replaces QA) named and acknowledged honestly before the reframe | Design doc specifies "You've been thinking it" approach; fear is surfaced, not resolved — resolution belongs to later phases |
</phase_requirements>

---

## Summary

Phase 2 is a prose writing phase, not a software engineering phase. The "standard stack" is the design doc produced in Phase 1, the voice conventions established by existing blog posts, and the word budget allocations already locked. No new libraries, tools, or technology decisions are required. The MDX file may or may not be created in this phase — the implementation plan (PLAN-02) creates it in Task 1, so it may already exist as a stub or need creation before the examples are written.

The central challenge of this phase is not technical — it is narrative. Writing examples that carry an argument without announcing it. The force multiplier example must make the reader feel the impact, not be told to feel it. The blind spot example must land the discovery moment viscerally — the specific texture of green CI output, confident test reporting, and the slow realization that the business logic was wrong the entire time. The pivot sentence is the most constrained artifact: it must read as escalation ("yes, and this is exactly why") rather than reversal ("but here's the problem"), and it is 50-75 words of structural weight.

The design doc decisions from Phase 1 are locked and constitute the primary constraint for this phase. The planner does not need to relitigate them — it needs to sequence tasks that produce the required artifacts in the right order, with the right word counts, and with review steps that verify the structural constraints.

**Primary recommendation:** Plan three writing tasks (force multiplier, blind spot, pivot sentence) plus a word count and constraint verification step. The examples are written before the hook and close (which belong to Phase 4) — the implementation plan already confirms this sequence. The fear narrative (ARG-02) is part of the hook section (Phase 4), but the design doc places it adjacent to the hook — clarification is needed on whether ARG-02 is drafted here or in Phase 4. Based on the ROADMAP, ARG-02 belongs to this phase's success criteria but the design doc places fear narrative content in the hook section. Resolution: draft the fear narrative framing as a brief standalone passage alongside the examples, to be integrated into the hook in Phase 4.

---

## Standard Stack

This is a prose writing phase. There are no libraries to install. The "stack" is:

### Core Artifacts

| Artifact | Location | Status | Notes |
|----------|----------|--------|-------|
| MDX post file | `src/content/posts/software-quality-age-of-ai.mdx` | May exist as stub (Task 1 of PLAN-02) or need creation | Check for existence before writing |
| Design doc | `docs/plans/2026-03-01-software-quality-age-of-ai-design.md` | EXISTS | Primary constraint document — all example details locked here |
| Implementation plan | `docs/plans/2026-03-01-software-quality-age-of-ai.md` | EXISTS | Sequence of tasks and commit steps — verified, follow it |

### No Installation Required

```bash
# No packages to install.
# Verify dev server works if checking rendering:
npm run dev
# Visit http://localhost:3000/blog/software-quality-age-of-ai
```

### Alternatives Considered

Not applicable — this phase writes prose into an MDX file using the existing pipeline. There are no technology choices.

---

## Architecture Patterns

### Recommended Task Sequence

```
Phase 2 tasks:
├── Task 1: Create MDX stub (if not exists) + verify renders
├── Task 2: Write force multiplier example (300-350 words)
├── Task 3: Write blind spot example (350-400 words, >= Task 2 count)
├── Task 4: Write pivot sentence (50-75 words)
├── Task 5: Draft fear narrative framing (100-150 words, placeholder)
└── Task 6: Verify word counts and structural constraints
```

Each task commits independently. The MDX file is assembled section by section. The hook and close are NOT written in this phase — the file will have only the example sections, pivot, and a placeholder for the fear narrative when this phase ends.

### Pattern 1: Example Rendering — Show the Impact, Don't Announce It

**What:** Render concrete examples by giving the reader the specific details and letting them feel the weight, rather than telling them what to feel.

**When to use:** Every descriptive passage in both examples.

**Model from "The Shepherd and the Sheep":**
```
"I've watched it happen. I've done it."
"Give a senior engineer Claude Code and clear autonomy, and they will build in a week
what used to take a team a quarter. That's not hyperbole."
```

**Model from "The Same Blind Spot Twice":**
```
"The tests confirmed what the code did. Not what the system was supposed to do."
"The agent that wrote the code misunderstood the requirement. The agent that wrote the
tests misunderstood it in the exact same way. Same model, same context, same blind spot."
```

**Apply to the force multiplier example:**
- Don't write: "This was impressive because it saved a lot of time."
- Do write: "One engineer. One week. The kind of system that used to require a team and a quarter."

**Apply to the blind spot example:**
- Don't write: "The tests were wrong because the AI made an error."
- Do write: "The tests were green. CI was green. The dashboard said everything passed. The business logic had been wrong from the first line of code."

### Pattern 2: Discovery Moment Structure (for Blind Spot Example)

The design doc locks a two-beat discovery structure. Every plan task for the blind spot must enforce this sequence:

**Beat 1 — Personal recognition (first-person):**
```
"I've done this. I've shipped the green suite and moved on. I've felt the satisfaction
of watching CI complete without catching what I missed."
```

**Beat 2 — Industry alarm (zooms out):**
```
"This is not one team's mistake. Every team that uses AI to generate code and tests
from the same context is running this exact risk right now."
```

The personal recognition MUST come before the alarm. The design doc is explicit: "Author names it as a first-person failure before zooming out." This earns the right to the alarm.

### Pattern 3: Pivot Sentence Logic

The pivot is 50-75 words. It is the most constrained artifact in this phase.

**Constraint:** Must use "yes, and" logic, not "but" or "however."

**The mechanism to name:** The same force (AI's ability to generate fast, with confidence) that built the diagnostic service in one week is the same force that produced a green suite validating wrong behavior. Velocity without human quality gates is the mechanism. Same force. Different angle.

**Forbidden pivot words:** "but," "however," "on the other hand," "yet," "although"

**Required logic pattern:**
```
"The same force that [did X] is the same force that [did Y].
[The mechanism] is the same. [The stakes] are different."
```

### Pattern 4: MDX File Construction (Build Order)

The implementation plan (Task 1 of PLAN-02) calls for creating the MDX stub first:

```mdx
export const metadata = {
  title: "Software Quality in the Age of AI",
  date: "2026-03-01",
  description: "AI makes quality engineers more powerful than ever — but only if they claim the one role AI cannot fill: deciding what quality means.",
};
```

Phase 2 then appends prose sections. The hook goes FIRST in the final file but is written LAST (Phase 4). In Phase 2, the file contains only: metadata stub, then force multiplier example, then blind spot example, then pivot sentence. The fear narrative placeholder can be a comment or brief note in the file.

### Anti-Patterns to Avoid

- **Announcing emotion:** "This was remarkable," "That is the astonishing thing" — never tell the reader how to feel. Give them the specific and let them feel it.
- **Using "but" in the pivot:** The pivot reads as reversal if it uses reversal words. Test the pivot sentence: does it say "yes, and"? Or does it say "however"?
- **Writing the hook in this phase:** The hook belongs to Phase 4. Starting with the opening paragraph is a trap — write the examples first.
- **Under-writing the blind spot:** The design doc requires it to be equal to or longer than the force multiplier. Plan tasks must include a word count check.
- **Tool names or vendor names:** "FastAPI," any AI provider name, any vendor. The design doc is explicit: "The pattern is the point." These are not source material for product names.
- **Em dashes:** Project-wide style prohibition. No em dashes anywhere. Use periods or commas.
- **Hedging on claims:** "might," "could," "perhaps" — allowed within examples to describe uncertainty, forbidden in thesis statements and section-level claims.

---

## Don't Hand-Roll

This is a prose writing phase. There are no libraries. The analogous guidance:

| Problem | Don't Do | Do Instead | Why |
|---------|----------|------------|-----|
| Word count enforcement | Trust intuition about length | Count words explicitly in the verification task | "Equal or greater" is a structural requirement, not a suggestion |
| Pivot sentence | Write a transitional paragraph | Write 1-3 tight sentences only — 50-75 words | More words dilute the structural weight the pivot must carry |
| Fear narrative placement | Write it as a full section | Draft as a brief placeholder (100-150 words) for Phase 4 integration | Full fear narrative rendering belongs to Phase 4's hook task |
| Example domain selection | Reopen the question | Use Option A (business rule validation) — already selected in design doc | Phase 2 makes the call during drafting, but starts with Option A |
| Voice registration | Leave tone as implicit | Check against the design doc's forbidden list after each example is written | Implicit tone gets diluted; explicit checklist is the guard |

**Key insight:** Prose phases fail when they re-do planning work. The design doc locked the decisions. Phase 2's job is execution against locked constraints — not reconsideration.

---

## Common Pitfalls

### Pitfall 1: Starting with the Hook

**What goes wrong:** The writer (or planner) treats the MDX file as a sequential document and starts at the top — writing the hook before the examples.

**Why it happens:** MDX files read top-to-bottom. It is natural to write top-to-bottom.

**How to avoid:** The implementation plan (PLAN-02) already encodes the correct sequence: Task 2 writes the force multiplier, Task 3 writes the blind spot, Task 6 writes the hook (in Phase 4). The planner must follow this order in Phase 2 plans. Task 1 creates only the metadata stub.

**Warning signs:** Any Phase 2 task plan writes content for the hook section or the opening paragraph.

### Pitfall 2: Pivot Reads as Reversal

**What goes wrong:** The pivot sentence uses reversal language ("but," "however") and the reader experiences the force multiplier as setup and the blind spot as "the real message." The force multiplier becomes bait.

**Why it happens:** The natural two-example structure (thesis/antithesis) invites reversal language. Writers default to "but."

**How to avoid:** The verification task for the pivot must test it against the "yes, and" logic explicitly. Read the pivot aloud: does it say "the same force caused both"? Or does it say "but this is the problem"?

**Warning signs:** The pivot sentence contains the word "but," "however," "unfortunately," or "on the other hand."

### Pitfall 3: Blind Spot Example Shorter than Force Multiplier

**What goes wrong:** The force multiplier is vivid and easy to write (it's a success story with clear technical details). The blind spot requires more narrative setup. Writers run out of steam and the blind spot is shorter.

**Why it happens:** Success stories are easier to render than failure discovery moments. The failure requires showing the false confidence (green CI, satisfied team) before the reveal.

**How to avoid:** The verification task must count words in both examples before the phase is considered complete. If blind spot < force multiplier, the blind spot must be expanded before the phase closes.

**Warning signs:** The blind spot section skips the false confidence setup and jumps straight to the discovery. "Green CI, confident team" must be rendered before the reveal.

### Pitfall 4: Naming Tools or Vendors

**What goes wrong:** A plan or execution step refers to "FastAPI" (the web framework name in the PROJECT.md) or an AI provider name. This kills the argument's generality — the post is for all quality professionals, not Python web developers.

**Why it happens:** The PROJECT.md uses "FastAPI" as a concrete anchor. The design doc explicitly suppresses it.

**How to avoid:** The plan should reference "the diagnostic service" or "the diagnostic tool" — not the framework name. The design doc's constraint is explicit: "No tool names. No vendor names."

**Warning signs:** Any plan task uses "FastAPI," "GitHub Actions," any AI provider name, or any specific technology brand in the content guidance.

### Pitfall 5: First-Person Authority Lost in Passive Voice

**What goes wrong:** Claims become passive: "A service was built that could..." instead of "One engineer built a system that..."

**Why it happens:** Passive voice is a common hedging mechanism. It feels less boastful.

**How to avoid:** Review each example for passive voice on claims. The design doc is explicit: "Author speaks as practitioner. 'I've built these systems. I've seen this fail.' Authority from direct experience, not theory."

**Warning signs:** Any sentence about the force multiplier or blind spot uses passive voice for the key claim.

---

## Code Examples

This is a prose writing phase. There are no code examples. The relevant "examples" are prose patterns.

### Force Multiplier Example — Key Technical Details (Locked in Design Doc)

The planner must include these specific details in the writing task guidance:

```
What the service ingests:
- Test results (pass/fail history across builds)
- Runtime logs
- Historical failure trends

What AI does with the inputs:
- Infers failure cause (pattern matching across all three inputs)
- Proposes fix suggestions ranked by confidence

Build time: one week, solo
Traditional equivalent: months with a dedicated team and dedicated infrastructure

Essential phrase that must survive: "The capability threshold shifted."
Essential contrast: "one week" vs "months with a team" — stated plainly, not dressed up
```

### Blind Spot Example — Key Technical Details (Locked in Design Doc)

```
Selected domain: Option A — Business rule validation (domain-agnostic, closest to
actual experience in PROJECT.md, no specialized domain knowledge required)

What happened:
- AI generated code
- AI generated tests from the same code
- Tests passed; CI was green; confidence was high
- Acceptance criteria tests (written from the product requirement, not the code)
  revealed the failure

The specific failure: AI interpreted a business rule plausibly but incorrectly.
The tests confirmed what the code DID, not what the system was SUPPOSED to do.

Discovery moment beat 1 (personal): "I've done this."
Discovery moment beat 2 (industry): "This is the pattern. Every team running AI
to generate code and tests from the same context is running this risk."

Essential phrases that must survive:
- "The tests confirmed what the code did. Not what the system was supposed to do."
- "I've done this."
```

### Pivot Sentence — Constraint Specification

```
Word count: 50-75 words
Structure: 1-3 sentences
Logic: "Yes, and this is exactly why" — not "but"
Mechanism to name: velocity without human quality gates
Required: the same force appears in both examples
Forbidden: "but," "however," "on the other hand," "yet," "unfortunately"

The pivot must feel inevitable, not surprising. Reader should think: "of course."
```

---

## State of the Art

This phase operates on established internal project conventions. No external technology shifts apply.

| Convention | Status | Source |
|-----------|--------|--------|
| Write examples before hook | Locked — research-confirmed build order | ROADMAP.md, PLAN-02 |
| Blind spot >= force multiplier in word count | Required structural constraint | REQUIREMENTS.md QUAL-03, design doc |
| No tool names anywhere | Explicit voice constraint | Design doc Voice and Register section |
| No em dashes | Project-wide style preference | Design doc Voice and Register section |
| Option A (business rule validation) as default blind spot domain | Phase 2 selection point | Design doc blind spot section |
| First-person authority ("I've built this") | Voice requirement | Design doc Voice and Register section |

---

## Open Questions

1. **ARG-02 placement in this phase**
   - What we know: ROADMAP.md lists ARG-02 (fear narrative) as a Phase 2 requirement. The design doc places the fear narrative in the "Hook/reframe" section — which the build order assigns to Phase 4.
   - What's unclear: Does ARG-02 require the full fear narrative section to be written in Phase 2, or does it require a draft/placeholder that is integrated in Phase 4?
   - Recommendation: Draft a 100-150 word fear narrative passage in Phase 2 as a standalone placeholder. This satisfies ARG-02 ("named and acknowledged honestly") without writing the full hook integration, which belongs to Phase 4 when the destination is known. The planner should include this as a distinct task.

2. **MDX stub existence**
   - What we know: PLAN-02 Task 1 creates the MDX stub. It is unclear whether this task was executed during Phase 1 (it was not in scope for Phase 1) or is still pending.
   - What's unclear: Whether `src/content/posts/software-quality-age-of-ai.mdx` exists.
   - Recommendation: The planner's first task should check for the file's existence and create the stub if absent. The stub creation is a prerequisite for all writing tasks.

3. **Where fear narrative placeholder lives in the file**
   - What we know: The final post places fear narrative at the top (after hook), before the force multiplier example. Phase 2 writes examples first, hook later.
   - What's unclear: Should the fear narrative placeholder go at the bottom of the Phase 2 file (to be moved in Phase 4) or be noted as a comment?
   - Recommendation: Write the fear narrative draft as a comment block or clearly labeled placeholder section at the bottom of the Phase 2 file. Phase 4's task will move it to its final position. This preserves the content without disrupting the build-order rationale.

---

## Sources

### Primary (HIGH confidence)

- Direct inspection of `docs/plans/2026-03-01-software-quality-age-of-ai-design.md` — all example technical details, word budgets, voice constraints, domain selection guidance, and pivot sentence constraints
- Direct inspection of `docs/plans/2026-03-01-software-quality-age-of-ai.md` — task sequence, word count targets, commit steps, and build order
- Direct inspection of `.planning/ROADMAP.md` — Phase 2 success criteria and requirement assignments
- Direct inspection of `.planning/REQUIREMENTS.md` — EXMP-01, EXMP-02, EXMP-03, ARG-02 specifications
- Direct inspection of `.planning/phases/01-design-doc/01-CONTEXT.md` — locked decisions inherited by Phase 2
- Direct inspection of `src/content/posts/the-same-blind-spot-twice.mdx` — prose model for the blind spot failure mode (green CI, correlated blind spots, discovery moment structure)
- Direct inspection of `src/content/posts/the-shepherd-and-the-sheep.mdx` — prose model for force multiplier (practitioner authority, "I've watched it happen. I've done it.", impact without announcement)

### Secondary (MEDIUM confidence)

None — all findings sourced from primary project inspection.

### Tertiary (LOW confidence)

None.

---

## Metadata

**Confidence breakdown:**
- Task sequence: HIGH — locked in PLAN-02, confirmed by ROADMAP build order
- Example technical details: HIGH — locked in design doc with specific bullets
- Voice constraints: HIGH — locked in design doc with explicit forbidden/required lists
- ARG-02 placement: MEDIUM — open question resolved by recommendation, planner should confirm
- Blind spot domain: HIGH — Option A selected as default in design doc; Phase 2 may switch to Option B during drafting if texture does not emerge

**Research date:** 2026-03-01
**Valid until:** End of Phase 2 — conventions are stable within this project scope
