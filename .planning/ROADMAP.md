# Roadmap: Software Quality in the Age of AI

## Overview

This roadmap delivers a 1500-2000 word manifesto-style blog post for Kraig Britton's personal website. Phases follow the research-recommended build order: design doc first to lock argument structure, then examples (the load-bearing content), then pivot and synthesis, then hook and close written last when the destination is known, then a revision pass to enforce manifesto register. Every phase delivers something verifiable before the next begins.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Design Doc** - Lock argument structure, section sequencing, and key language before any prose is written (completed 2026-03-01)
- [x] **Phase 2: Draft Examples** - Write the two anchor examples in full — they are the post's load-bearing content (completed 2026-03-01)
- [x] **Phase 3: Draft Pivot and Synthesis** - Write the pivot sentence and quality systems thinking synthesis after examples are complete (completed 2026-03-01)
- [ ] **Phase 4: Draft Hook, Reframe, and Close** - Write opening and close last, when the destination and challenge are fully known
- [ ] **Phase 5: Revision and Publication** - Manifesto register check, word count validation, and publish to site

## Phase Details

### Phase 1: Design Doc
**Goal**: A design doc that locks in the argument structure, section sequencing, and key language before prose writing begins — establishing the thesis as tension rather than reassurance
**Depends on**: Nothing (first phase)
**Requirements**: PLAN-01, PLAN-02
**Success Criteria** (what must be TRUE):
  1. Design doc exists at `docs/plans/` with section headers that are arguments, not topic labels
  2. Both anchor examples appear in the outline with specific details sketched (FastAPI service timing, business logic discovery moment)
  3. Implementation plan exists with section-by-section writing approach and build order matching the research-recommended sequence (examples first, hook last)
  4. The thesis is stated as tension — opportunity AND risk, resolved by quality systems thinking — not as reassurance
**Plans:** 1/1 plans complete

Plans:
- [x] 01-01-PLAN.md — Write design doc and implementation plan for the blog post

### Phase 2: Draft Examples
**Goal**: Two complete, fully-rendered example sections that work as standalone stories before surrounding argument is written
**Depends on**: Phase 1
**Requirements**: EXMP-01, EXMP-02, EXMP-03, ARG-02
**Success Criteria** (what must be TRUE):
  1. Force multiplier example (FastAPI diagnostic service) is 300+ words with specific technical detail — what it ingests, what AI does with it, build time versus traditional equivalent
  2. Blind spot example (AI testing its own assumptions, business logic incorrect) is equal or greater length to Example 1 and captures the discovery moment — the green test suite, the confident CI output, the fundamentally wrong business logic
  3. A pivot sentence (1-3 sentences) connects both examples and acknowledges Example 1's power while introducing the condition that makes it real, without reading as a reversal
  4. The fear narrative (AI replaces QA) is named and acknowledged honestly before the reframe
**Plans:** 2/2 plans complete

Plans:
- [x] 02-01-PLAN.md — Create MDX stub and write force multiplier example (EXMP-01)
- [x] 02-02-PLAN.md — Write blind spot example, pivot sentence, and fear narrative placeholder (EXMP-02, EXMP-03, ARG-02)

### Phase 3: Draft Pivot and Synthesis
**Goal**: The argument's resolution — quality systems thinking defined through three specific activities, arriving after the examples have earned the name
**Depends on**: Phase 2
**Requirements**: ARG-03, ARG-05, QUAL-02, QUAL-03
**Success Criteria** (what must be TRUE):
  1. Quality systems thinking is named and defined AFTER the examples — the synthesis section arrives from the examples, not as a standalone framework statement
  2. Three specific activities (designing quality gates, owning risk assessment, shifting left AND right) are present in the synthesis
  3. No hedging language, no "adapt or die" urgency rhetoric, no tool recommendations anywhere in the drafted sections
  4. The blind spot example occupies equal or greater word count than the force multiplier example
**Plans:** 1/1 plans complete

Plans:
- [x] 03-01-PLAN.md — Write quality systems thinking synthesis section (ARG-03, ARG-05, QUAL-02, QUAL-03)

### Phase 4: Draft Hook, Reframe, and Close
**Goal**: A complete draft — hook that establishes the frame to be broken, reframe that states the thesis flatly, and a close that challenges rather than reassures
**Depends on**: Phase 3
**Requirements**: ARG-01, ARG-04
**Success Criteria** (what must be TRUE):
  1. Hook (150-200 words) drops reader into the professional moment without announcing the thesis
  2. Reframe states the thesis flatly within the first two paragraphs of the full post
  3. Call to action issues a directive and challenges the reader's professional identity — it does not comfort or reassure
  4. The full draft is assembled and reads as a continuous argument, not disconnected sections
**Plans**: TBD

### Phase 5: Revision and Publication
**Goal**: Final post at 1700-1800 words, free of manifesto register violations, published to the blog
**Depends on**: Phase 4
**Requirements**: QUAL-01, QUAL-04, TECH-01, TECH-02, TECH-03
**Success Criteria** (what must be TRUE):
  1. Post is 1500-2000 words (target 1700-1800)
  2. Reader can finish the post feeling both reassured AND challenged — the post does not tip into either pure comfort or pure alarm
  3. MDX file exists at `src/content/posts/` with correct metadata export (title, date, description)
  4. `npm run build` completes without errors
  5. Post appears on the blog listing page sorted correctly by date
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Design Doc | 1/1 | Complete   | 2026-03-01 |
| 2. Draft Examples | 2/2 | Complete   | 2026-03-01 |
| 3. Draft Pivot and Synthesis | 1/1 | Complete | 2026-03-01 |
| 4. Draft Hook, Reframe, and Close | 0/TBD | Not started | - |
| 5. Revision and Publication | 0/TBD | Not started | - |
