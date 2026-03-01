---
phase: 01-design-doc
plan: 01
subsystem: content-planning
tags: [design-doc, implementation-plan, blog-post, manifesto, quality-engineering]
dependency_graph:
  requires: []
  provides: [design-doc, implementation-plan]
  affects: [02-examples, 03-pivot-synthesis, 04-hook-close, 05-review]
tech_stack:
  added: []
  patterns: [design-doc-format, implementation-plan-format, declarative-claim-headers]
key_files:
  created:
    - docs/plans/2026-03-01-software-quality-age-of-ai-design.md
    - docs/plans/2026-03-01-software-quality-age-of-ai.md
  modified: []
decisions:
  - "Declarative claim headers used throughout design doc structure section — all section titles stake a position readers must engage with"
  - "Thesis stated as tension (opportunity AND condition), not reassurance — 'only if humans remain arbiters of what quality means'"
  - "ESCALATION pivot encoded explicitly — same force, different angle — not reversal via 'but' or 'however'"
  - "Three blind spot candidate domains documented (business rule validation recommended); Phase 2 selects during drafting"
  - "Build order locked: examples (Tasks 2-3) before hook (Task 6) — research-confirmed sequence"
  - "Voice and register constraints encoded as checkable rules, not vibes — explicit forbidden/required list"
metrics:
  duration: 4 minutes
  completed_date: 2026-03-01
  tasks_completed: 2
  files_created: 2
  files_modified: 0
---

# Phase 1 Plan 1: Design Doc and Implementation Plan for "Software Quality in the Age of AI" Summary

**One-liner:** Design doc and implementation plan locking argument structure (two-example tension arc with ESCALATION pivot), declarative claim headers, and examples-first build order for an 1800-word manifesto-style post targeting quality professionals.

---

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Write the design doc (PLAN-01) | 8e5fe18 | docs/plans/2026-03-01-software-quality-age-of-ai-design.md |
| 2 | Write the implementation plan (PLAN-02) | 3ed2f70 | docs/plans/2026-03-01-software-quality-age-of-ai.md |

---

## What Was Built

**Task 1 — Design doc (`docs/plans/2026-03-01-software-quality-age-of-ai-design.md`):**

A structural blueprint for the "Software Quality in the Age of AI" blog post. Key contents:

- **Core Thesis:** Framed as tension (opportunity AND condition) — AI makes quality engineers more powerful, *but only if* they remain the arbiters of what quality means. The resolution is "this is the work now, and it's yours" — a professional directive, not reassurance.
- **Structure section with declarative claim headers:** Six sections with provisional headers that stake positions ("AI Gave One Engineer the Power of a Team," "The Test Suite Said Green. The Business Logic Was Wrong."). Each can be responded to with agreement or disagreement.
- **Word budgets per section:** Enforces structural balance — blind spot section (350-400 words) must meet or exceed force multiplier section (300-350 words).
- **Force multiplier example sketch:** Technical details locked — what the diagnostic service ingests (test results, logs, historical failure trends), what AI does (infers failure cause, proposes fix suggestions), build time (one week vs. months with a team). Emotional beat locked: "the capability threshold shifted."
- **Blind spot example sketch:** Three candidate domains documented (business rule validation RECOMMENDED, payment edge case, data migration). Discovery moment specified in detail — green CI, acceptance criteria tests revealing wrong business logic. Phase 2 selection point explicitly marked.
- **Escalation pivot constraint:** "Yes, and this is exactly why" logic encoded. "But" and "however" explicitly forbidden.
- **Voice and register constraints:** Explicit forbidden/required list — no hedging on claims, no passive voice on claims, no tool names, no em dashes, no "adapt or die" rhetoric. Author speaks as practitioner.

**Task 2 — Implementation plan (`docs/plans/2026-03-01-software-quality-age-of-ai.md`):**

A section-by-section writing schedule for Phases 2-5. Eight tasks:

1. Create MDX file with metadata stub (Phase 2, first task)
2. Write force multiplier example, 300-350 words (Phase 2)
3. Write blind spot example, 350-400 words, domain selected during drafting (Phase 2)
4. Write escalation pivot, 50-75 words (Phase 3)
5. Write quality systems thinking synthesis, 200-250 words (Phase 3)
6. Write hook and fear narrative, 250-350 words combined (Phase 4)
7. Write closing challenge, 150-200 words (Phase 4)
8. Review, polish, build verification, final commit (Phase 5)

Each task includes: file targets, content guidance referencing design doc sections by header name, word count targets, and commit steps. Task 8 includes `npm run build` verification.

---

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| Thesis as tension, not reassurance | "Still valuable" as a conclusion kills manifesto energy; tension creates the engagement that earns the conclusion |
| ESCALATION pivot, not reversal | Two-example structures default to thesis/antithesis; encoding "yes, and" logic prevents "bait-and-switch" reader experience |
| Three blind spot domains, Phase 2 selects | Design doc cannot pick without reading the prose in context; providing all three with relative strengths gives Phase 2 a real choice with guidance |
| Business rule validation recommended | Domain-agnostic, closest to PROJECT.md actual experience, no specialized domain knowledge required to feel the stakes |
| Declarative claim headers throughout | Topic labels are skimmable; claims demand engagement. Each header tests: "Can reader agree or disagree?" |
| Voice constraints as explicit rules | Implicit tone guidance gets diluted across phases; checkable rules are verifiable at review time |
| Examples-first build order | Hook works when the destination is known; synthesis can only be written after examples prove it |

---

## Deviations from Plan

None — plan executed exactly as written.

---

## Self-Check

**Files created:**
- docs/plans/2026-03-01-software-quality-age-of-ai-design.md — EXISTS
- docs/plans/2026-03-01-software-quality-age-of-ai.md — EXISTS

**Commits verified:**
- 8e5fe18 — EXISTS (design doc)
- 3ed2f70 — EXISTS (implementation plan)

**Design doc structure checks:**
- Has Meta section: YES
- Has Core Thesis section: YES
- Has Structure section with word budgets: YES
- Has Key Risks section: YES
- Has Voice and Register Constraints section: YES
- Section headers are declarative claims: YES — all six structural headers stake positions
- Core Thesis contains opportunity AND risk resolved by quality systems thinking: YES
- FastAPI sketch has technical details AND emotional beat: YES
- Blind spot sketch has 2-3 candidate domains with Phase 2 selection point: YES (3 domains, business rule validation recommended)

**Implementation plan checks:**
- Has header with Goal, Architecture, Tech Stack: YES
- Has 8 tasks: YES
- Build order examples-first (Tasks 2-3) before hook (Task 6): YES
- Each task has word count target: YES
- Each task has content guidance and commit step: YES
- Task 8 includes npm run build verification: YES

## Self-Check: PASSED
