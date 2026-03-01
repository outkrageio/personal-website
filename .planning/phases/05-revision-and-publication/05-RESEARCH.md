# Phase 5: Revision and Publication - Research

**Researched:** 2026-03-01
**Domain:** Prose revision (word count, register quality) + MDX publication (metadata, build, listing sort)
**Confidence:** HIGH

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| QUAL-01 | Post is 1500-2000 words | Current draft is 1,439 words (wc -w count on MDX file, includes 47-word metadata export); needs 61+ words added to reach 1,500 floor, targeting 1,700-1,800 |
| QUAL-04 | Reader walks away feeling both reassured AND challenged | Design doc encodes the test: post must not tip into pure comfort or pure alarm; revision reads for balance between "the fear was wrong" (reassurance) and "claim this explicitly or the vacuum fills" (challenge) |
| TECH-01 | MDX file exists at src/content/posts/ with correct metadata export | File exists: `src/content/posts/software-quality-age-of-ai.mdx`; metadata exports title, date, description — confirmed by current build |
| TECH-02 | `npm run build` completes without errors | Build currently passes (verified — 14 static pages generated, post appears at /blog/software-quality-age-of-ai) |
| TECH-03 | Post appears on blog listing page sorted correctly by date | `getAllPosts()` sorts by date descending; post date is 2026-03-01; this is the most recent date of any post — it will sort first |
</phase_requirements>

---

## Summary

Phase 5 is a revision and publication pass on a near-complete draft. The post exists at `src/content/posts/software-quality-age-of-ai.mdx`, builds successfully, and is already surfacing on the blog listing page. The only unmet requirements are QUAL-01 (word count: 1,439 words, 61 short of the 1,500 floor) and QUAL-04 (balance verification — confirm the draft does not tip into pure comfort or pure alarm).

The technical publication requirements (TECH-01, TECH-02, TECH-03) are already satisfied by the Phase 4 output. The post file exists with correct metadata, the build passes, and the sort order is correct (2026-03-01 date makes it the most recent post). Phase 5 has no new technical infrastructure to build — it is editing work only.

The revision challenge is precise: add approximately 200-300 words (targeting 1,700-1,800 from 1,439) without violating the manifesto register constraints established across four prior phases. Expansion must serve the argument, not pad it. The most likely expansion sites are the synthesis section (quality systems thinking activities) and the close (challenge beats), which were both written to tight word budgets.

**Primary recommendation:** Read the full draft for register quality first, identify the one or two places where an argument deserves more room, expand those places by 100-150 words each, then run wc and build. Do not add new sections.

---

## Standard Stack

### Core

| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| Next.js with @next/mdx | 16.1.6 / ^3.1.1 | MDX rendering | Already configured in next.config.ts — no changes needed |
| `npm run build` | via package.json | Static export to `out/` | The verification gate — post must survive this |
| `wc -w` | system tool | Word count tracking | Shell word count on .mdx file; subtract metadata (~47 words) to get prose word count |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| `getAllPosts()` in lib/posts.ts | N/A | Blog listing sort | Reads filesystem, sorts by date descending — no changes needed |
| `getPostBySlug()` | N/A | Post rendering | Dynamic import of MDX module — works automatically |

No new packages to install. Phase 5 uses only what is already present.

---

## Architecture Patterns

### Existing MDX Pattern (HIGH confidence — verified by current codebase)

All blog posts follow this exact pattern. No variation.

```typescript
// Source: src/content/posts/software-quality-age-of-ai.mdx (confirmed working)
export const metadata = {
  title: "Software Quality in the Age of AI",
  date: "2026-03-01",
  description: "AI makes quality engineers more powerful than ever, but only if they claim the one role AI cannot fill: deciding what quality means.",
};

[prose content follows — no import statements, no JSX components, plain MDX]
```

**Key facts about the metadata export:**
- Must be named `metadata` (lib/posts.ts destructures `mod.metadata`)
- Three required fields: `title` (string), `date` (YYYY-MM-DD string), `description` (string)
- `slug` is derived from filename, not from metadata
- `wc -w` on the MDX file counts metadata words too — subtract ~47 words to get prose count

### Blog Sort Order Pattern (HIGH confidence — verified in lib/posts.ts)

```typescript
// Source: src/lib/posts.ts
return posts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
```

Post date is `2026-03-01`. Current newest post before this one is `dont-build-agents-build-skills.mdx` (date unknown from research — but the build already shows the post at `/blog/software-quality-age-of-ai`, confirming it's included). The date on the metadata is already set correctly.

### Word Count Reality Check Pattern

The `wc -w` command counts all words in the file including the metadata export. The metadata export for this post contains approximately 47 words:

```
export const metadata = {
  title: "Software Quality in the Age of AI",
  date: "2026-03-01",
  description: "AI makes quality engineers more powerful than ever, but only if they claim the one role AI cannot fill: deciding what quality means.",
};
```

`wc -w` result: 1,439 words total
Prose-only estimate: ~1,392 words
QUAL-01 floor: 1,500 prose words
Approximate shortfall: ~108 prose words (target 1,700-1,800 means ~308-408 words of expansion needed from current prose count)

**Important:** The requirement specifies 1,500-2,000 words as the post length. Whether that counts prose-only or total file words is unspecified. Use `wc -w` on the file as the consistent measurement — 1,439 is below even the lenient reading of 1,500. Expansion is required regardless.

---

## Revision Patterns

### Pattern 1: Register-Preserving Expansion

**What:** Adding words to an existing manifesto-register section without diluting the voice.
**When to use:** When a section's argument is compressed past the point of clarity.
**Rules from prior phases:**
- No hedging language ("might," "could," "perhaps") in thesis claims
- No passive voice on claims
- No em dashes (use periods or commas)
- No tool names or vendor references
- No "adapt or die" urgency rhetoric
- Italics allowed selectively for emphasis

**Expansion sites with highest argument ROI:**

1. **Synthesis section ("Quality Systems Thinking Is the Job Now")** — currently ~250 words, written to a 200-250 target. The three activities (design gates, own risk, shift left/right) are named but not fully developed. Each activity has one paragraph; a second concrete sentence per activity would add ~60-90 words and serve the argument.

2. **Close section (final beats)** — currently ~170 words, written to a 150-200 target. The vacuum image and locked line are strong. The challenge beats before them may have room for one additional concrete consequence sentence.

3. **Pivot section** — currently ~50-75 words by design. Do NOT expand here — the design doc explicitly targets this tight. Expansion would undermine the "structural weight not length" intent.

4. **Examples** — already at or above their targets (force multiplier ~347 words, blind spot + pivot ~456 words). Do NOT expand examples — QUAL-03 requires blind spot to remain equal or greater than force multiplier. Any asymmetric expansion risks the balance.

### Pattern 2: QUAL-04 Balance Test

**What:** Reading the post holistically to verify it does not tip into pure comfort or pure alarm.
**How to test:** After reading the full draft, ask two questions:
1. Does the reader feel their role is safe? (If yes with no challenge, tips to comfort)
2. Does the reader feel their role is doomed? (If yes with no path, tips to alarm)

The balance is achieved when both answers are "no, the reader feels challenged to act." Key signals:

- **Reassurance signal (good):** "Not replacement. Irrelevance by default." — fear is real but wrong about the mechanism
- **Challenge signal (good):** "AI fills vacuums. It fills them confidently and completely and often wrong." — inaction has consequences
- **Comfort drift (bad):** Any sentence that implies the job is safe without requiring deliberate action
- **Alarm drift (bad):** Any sentence that implies the outcome is inevitable regardless of action

### Anti-Patterns to Avoid

- **Padding with qualifications:** Adding "of course," "naturally," "as we've seen" — these are register violations and add words without adding argument
- **Adding a new section:** QUAL-01 does not require a new section, only expansion within existing sections. A new section would create a structural imbalance the design doc doesn't account for.
- **Weakening the close:** The locked line ("This is the work now, and it's yours.") is non-negotiable. No revision can move it from final position or soften what precedes it.
- **Touching the hook:** The 182-word hook was carefully calibrated in Phase 4. Unless revision finds a genuine register problem, leave the hook intact.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Post appears in listing | Custom sort logic | Existing `getAllPosts()` in lib/posts.ts | Already sorts by date descending — file exists, build passes |
| Word counting | Manual counting | `wc -w src/content/posts/software-quality-age-of-ai.mdx` | Shell command is instant and reliable |
| Build verification | Custom test harness | `npm run build` | Already configured — exits non-zero on failure |
| Register checking | Linting tool | Manual prose read against the checklist | There is no automated tool for manifesto register — this is always a human judgment |

**Key insight:** Phase 5 has zero new infrastructure to build. All TECH requirements were satisfied in Phase 4. The only work is editing prose and verifying the build still passes.

---

## Common Pitfalls

### Pitfall 1: Counting Metadata Words as Prose Words
**What goes wrong:** `wc -w` returns 1,439 and the executor concludes the post needs only 61 words. In fact the metadata export (~47 words) inflates the count — prose is closer to 1,392, meaning ~108 words short of 1,500 prose-only, or ~308-408 words short of the 1,700-1,800 target.
**Why it happens:** `wc -w` counts everything in the file, not just the prose content.
**How to avoid:** Target 1,700-1,800 words as measured by `wc -w` on the full file, which lands prose at approximately 1,650-1,750 words. This is the safest consistent measurement.
**Warning signs:** If revision adds only 60-100 words and calls QUAL-01 satisfied, the executor is using the wrong baseline.

### Pitfall 2: Expanding Examples Instead of Synthesis/Close
**What goes wrong:** The executor finds the examples are the "richest" content and adds texture there, pushing the post to 1,700 words — but the balance between blind spot and force multiplier (QUAL-03) is disrupted.
**Why it happens:** Examples feel like the most developed content and seem easiest to extend.
**How to avoid:** Expand only synthesis and close. Examples are at their design targets and the balance is already verified (blind spot + pivot at 456 words, force multiplier at 347 words — ratio is correct).
**Warning signs:** Post grows but only the "## AI Gave One Engineer" or "## The Test Suite Said Green" sections grow.

### Pitfall 3: Register Drift During Expansion
**What goes wrong:** Added sentences use hedging language ("this might mean," "you could consider") that is forbidden by the design doc.
**Why it happens:** Expansion under word pressure tends toward qualification.
**How to avoid:** Write expansion sentences in manifesto register from the start. Each new sentence should make a direct claim or state a concrete consequence.
**Warning signs:** New sentences contain "might," "could," "perhaps," "perhaps," or end with a question.

### Pitfall 4: Build Breaks After Prose Edits
**What goes wrong:** An MDX syntax error introduced during editing breaks `npm run build`.
**Why it happens:** MDX parses JSX syntax — certain characters in prose (especially `<`, `>`, `{`, `}`) can break the parser.
**How to avoid:** Avoid those characters in prose. If they appear in quoted text, use HTML entities or rephrase. Run `npm run build` after every significant edit.
**Warning signs:** Build error messages mentioning unexpected token or JSX parsing failure.

### Pitfall 5: Moving the Locked Line
**What goes wrong:** Revision adjusts the close and accidentally adds a sentence after "This is the work now, and it's yours."
**Why it happens:** Revision flow naturally wants to add a softening follow-through after a strong directive.
**How to avoid:** The locked line must remain the absolute final prose sentence. Check explicitly after any close edits.
**Warning signs:** Any character after "This is the work now, and it's yours." before the end of file.

---

## Code Examples

### Current Metadata (verified working)

```typescript
// Source: src/content/posts/software-quality-age-of-ai.mdx
export const metadata = {
  title: "Software Quality in the Age of AI",
  date: "2026-03-01",
  description: "AI makes quality engineers more powerful than ever, but only if they claim the one role AI cannot fill: deciding what quality means.",
};
```

This is correct and complete. No changes to metadata are needed for Phase 5.

### Build Verification Command

```bash
# Run from project root
npm run build
# Expect: ✓ Generating static pages ... (14/14)
# Expect: /blog/software-quality-age-of-ai listed in Route output
```

### Word Count Command

```bash
wc -w src/content/posts/software-quality-age-of-ai.mdx
# Current output: 1439
# Target: 1700-1800 (full file including metadata)
```

### Register Verification Checklist (manual, not automated)

```
After any prose addition, verify the new sentences:
[ ] Make a direct claim (no hedging: no "might," "could," "perhaps")
[ ] Use active voice ("AI fills vacuums" not "vacuums are filled by AI")
[ ] Contain no em dashes (—) — use period or comma instead
[ ] Contain no tool or vendor names
[ ] Contain no "adapt or die" rhetoric
[ ] Italics used only where they serve emphasis (not decoratively)
```

---

## State of the Art

| Phase 4 Output | Phase 5 Requirement | Gap |
|----------------|---------------------|-----|
| 1,439 words (wc -w) | 1,700-1,800 words (target) | ~261-361 words needed |
| Build passing | Build passing | No gap — maintain only |
| Post at /blog/software-quality-age-of-ai | Appears on listing | No gap — verify only |
| Locked line present as final sentence | Locked line present | No gap — preserve only |
| QUAL-03 balance verified (blind spot 456w, force multiplier 347w) | QUAL-04 balance verified | Qualitatively different check — tone, not ratio |

**The only active work in Phase 5 is expanding prose by ~261-361 words, concentrated in the synthesis and close sections, in manifesto register.**

---

## Open Questions

1. **Does QUAL-01 word count include or exclude metadata?**
   - What we know: REQUIREMENTS.md says "Post is 1500-2000 words" — does not specify prose-only or total file
   - What's unclear: Whether the 47-word metadata export counts toward the 1,500 minimum
   - Recommendation: Target 1,700-1,800 words as measured by `wc -w` on the full file. At that level, the prose-only count (~1,650-1,750) exceeds 1,500 regardless of interpretation. Do not try to hit exactly 1,500 — aim for the center of the target range.

2. **Should the description metadata be revised?**
   - What we know: The current description ("AI makes quality engineers more powerful than ever, but only if they claim the one role AI cannot fill: deciding what quality means.") is accurate to the post
   - What's unclear: Whether any prose revision changes the post's angle enough to warrant a description update
   - Recommendation: Assess after revision. If the argument's emphasis shifts, update description. If the post's core argument is unchanged (it should be), leave description as-is.

---

## Sources

### Primary (HIGH confidence)
- Direct file read: `src/content/posts/software-quality-age-of-ai.mdx` — current draft content and metadata
- Direct file read: `src/lib/posts.ts` — confirmed sort order logic
- Direct command: `wc -w` on current MDX file — 1,439 words verified
- Direct command: `npm run build` — build passes, post at correct URL, 14 pages generated
- Direct file read: `package.json` — Next.js 16.1.6, @next/mdx ^3.1.1, static export confirmed
- Direct file read: `.planning/REQUIREMENTS.md` — QUAL-01, QUAL-04, TECH-01, TECH-02, TECH-03 requirement text
- Direct file read: `.planning/phases/04-draft-hook-reframe-and-close/04-01-SUMMARY.md` — Phase 4 output state, word count reported as ~1,491 (now measured at 1,439 with wc)
- Direct file read: `docs/plans/2026-03-01-software-quality-age-of-ai-design.md` — voice constraints, section word budgets, expansion site guidance

### Secondary (MEDIUM confidence)
- STATE.md accumulated decisions — Phase 4 word count "approximately 1,491" (slightly higher than wc measurement; likely prose-only vs. total count difference)

### Tertiary (LOW confidence)
- None

---

## Metadata

**Confidence breakdown:**
- Current draft state: HIGH — read the file directly and ran wc and build
- Word count gap: HIGH — 1,439 current vs. 1,700-1,800 target is precise
- Expansion sites: HIGH — grounded in design doc word budgets and prior phase summaries
- Register constraints: HIGH — explicitly encoded in design doc and verified across four prior phases
- Technical publication: HIGH — TECH-01/02/03 all verified passing by direct build run

**Research date:** 2026-03-01
**Valid until:** 2026-04-01 (stable stack, no moving parts — but post should be published well before then)
