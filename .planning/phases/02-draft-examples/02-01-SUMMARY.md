---
phase: 02-draft-examples
plan: 01
subsystem: content
tags: [mdx, blog, prose, quality-engineering, force-multiplier]

requires:
  - phase: 01-design-doc
    provides: Design doc with locked technical details, word budgets, voice constraints, and essential phrases for force multiplier example

provides:
  - MDX blog post stub at src/content/posts/software-quality-age-of-ai.mdx with metadata export
  - Force multiplier example section (348 words) with full technical texture

affects:
  - 02-02 (blind spot example, must be >= 348 words)
  - 02-03 onwards (pivot, synthesis, hook, close all depend on this section existing)
  - 04-draft-hook-close (hook needs force multiplier destination before it can be written)

tech-stack:
  added: []
  patterns:
    - "Practitioner authority voice: first-person 'I built this' with specific technical details, no tool names"
    - "Show impact through specifics, not announcement: give the reader the weight, don't tell them to feel it"

key-files:
  created:
    - src/content/posts/software-quality-age-of-ai.mdx
  modified: []

key-decisions:
  - "Header retained from design doc: 'AI Gave One Engineer the Power of a Team'"
  - "Force multiplier opens with 'I built a diagnostic service last year that I could not have built without AI' — practitioner claim before any technical detail"
  - "Used ninety days pass/fail history window as specific technical anchor (implied by design doc, made concrete)"
  - "Essential phrase 'The capability threshold shifted' placed at the end of the section as the landing beat"

patterns-established:
  - "Pattern: open with a specific claim before scene-setting; don't announce the topic"
  - "Pattern: use sentence fragments for emphasis ('I had a laptop and a week.') sparingly and deliberately"

requirements-completed: [EXMP-01]

duration: 1min
completed: 2026-03-01
---

# Phase 02 Plan 01: Draft Examples (Force Multiplier) Summary

**MDX stub created and 348-word force multiplier example written with specific technical texture, practitioner authority voice, and all locked constraints satisfied.**

## Performance

- **Duration:** ~1 min
- **Started:** 2026-03-01T17:42:08Z
- **Completed:** 2026-03-01T17:43:29Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments

- Created `src/content/posts/software-quality-age-of-ai.mdx` with correct metadata export
- Wrote 348-word force multiplier example with locked technical details (three ingestion inputs, AI inference pattern, confidence ranking)
- Essential phrases landed: "The capability threshold shifted." and "I built it in one week. Solo." vs "requires months"
- All constraint checks passed: no tool names, no vendor names, no em dashes, first-person voice throughout
- Build succeeds with the new post rendering on blog listing and individual post page

## Task Commits

Each task was committed atomically:

1. **Task 1: Create MDX file with metadata stub** - `bd06f22` (chore)
2. **Task 2: Write force multiplier example (EXMP-01)** - `1ecd6b8` (feat)

## Files Created/Modified

- `src/content/posts/software-quality-age-of-ai.mdx` - New MDX blog post with metadata export and force multiplier example section

## Decisions Made

- Opened the force multiplier section with a direct practitioner claim ("I built a diagnostic service last year that I could not have built without AI. Not because I lacked the skills. Because I lacked the time and the headcount.") before any technical setup. This establishes authority and creates a curiosity gap that pulls the reader into the technical details.
- Used "ninety days" as a concrete window for the pass/fail history, giving texture the design doc left implicit.
- Placed "The capability threshold shifted." as a standalone sentence ending the section, making it a landing beat rather than a buried clause.

## Deviations from Plan

None - plan executed exactly as written. The plan called for a metadata stub then force multiplier prose, both committed separately, both verified with build check and grep checks. Word count landed at 348, within the 300-350 target.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Force multiplier section is complete and committed. The 348-word count sets the minimum bar for the blind spot example (must be >= 348 words per structural constraint).
- `src/content/posts/software-quality-age-of-ai.mdx` exists and renders correctly.
- Plan 02-02 (blind spot example) can proceed immediately.

---
*Phase: 02-draft-examples*
*Completed: 2026-03-01*

## Self-Check: PASSED

- `src/content/posts/software-quality-age-of-ai.mdx` - FOUND
- `.planning/phases/02-draft-examples/02-01-SUMMARY.md` - FOUND
- Commit `bd06f22` - FOUND
- Commit `1ecd6b8` - FOUND
