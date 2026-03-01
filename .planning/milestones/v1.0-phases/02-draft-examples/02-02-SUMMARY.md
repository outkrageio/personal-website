---
phase: 02-draft-examples
plan: 02
subsystem: content
tags: [mdx, blog, prose, quality-engineering, blind-spot, pivot]

requires:
  - phase: 02-draft-examples
    plan: 01
    provides: MDX file with force multiplier example (348 words) as word count floor for blind spot

provides:
  - Blind spot example section (398 words) with business rule validation domain, discovery moment structure, essential phrases
  - Pivot sentence (61 words) using escalation logic connecting both examples through shared mechanism
  - Fear narrative placeholder (134 words) clearly labeled for Phase 4 integration

affects:
  - 02-03 onwards (synthesis must address the shared mechanism named in pivot)
  - 03-synthesis (quality systems thinking section builds directly on both examples)
  - 04-draft-hook-close (hook will integrate fear narrative from placeholder; close must resolve the pivot's implicit question)

tech-stack:
  added: []
  patterns:
    - "Blind spot with two discovery beats: personal recognition (I've done this) before industry alarm — earns the right to make the broader claim"
    - "Escalation pivot: same force, different angle — force multiplier EXPLAINS the blind spot, not contradicts it"
    - "Placeholder sections: JSX comment blocks with explicit Phase N attribution for deferred content"

key-files:
  created: []
  modified:
    - src/content/posts/software-quality-age-of-ai.mdx

key-decisions:
  - "Used Option A (business rule validation) — discount eligibility with lapse logic — as the blind spot domain. The 'plausible wrong' reading (active at time of check vs. twelve consecutive months without lapse) creates clear texture without requiring specialized domain knowledge."
  - "Pivot placed as prose paragraph after blind spot (not as a heading section) to maintain flow and keep structural weight light at 61 words."
  - "Fear narrative labeled with JSX block comments rather than a markdown heading, keeping Phase 4 integration responsibility explicit without polluting the rendered post structure."
  - "The specific business rule: fifteen percent renewal discount requires twelve consecutive months with a lapse tolerance of seven days. The AI missed the lapse condition — a plausible-but-wrong interpretation of the requirement."

patterns-established:
  - "Pattern: false confidence rendered before reveal — show green CI, satisfied team, time passing — then the discovery"
  - "Pattern: two-beat discovery moment — personal (I've done this) then industry (every team running this risk) — in that order"
  - "Pattern: pivot as escalation naming the shared mechanism explicitly ('velocity without human quality gates')"

requirements-completed: [EXMP-02, EXMP-03, ARG-02]

duration: 5min
completed: 2026-03-01
---

# Phase 02 Plan 02: Draft Examples (Blind Spot, Pivot, Fear Narrative) Summary

**Blind spot example (398 words, business rule validation domain) with two-beat discovery moment, escalation pivot (61 words) naming shared mechanism, and fear narrative placeholder (134 words) labeled for Phase 4 integration — all voice and register constraints satisfied.**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-03-01T17:45:31Z
- **Completed:** 2026-03-01T17:50:00Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments

- Wrote 398-word blind spot example using Option A (business rule validation): discount eligibility with lapse condition the AI missed
- Discovery moment follows required two-beat structure: "I've done this." (personal) before "This is not one team's mistake." (industry alarm)
- Both essential phrases present: "The tests confirmed what the code *did*. Not what the system was supposed to do." and "I've done this."
- Pivot (61 words) uses escalation logic: "The same force that let one engineer build... is the same force that produced a test suite validating wrong behavior." Names the mechanism: velocity without human quality gates.
- Fear narrative placeholder (134 words) clearly labeled with JSX comments for Phase 4 integration, acknowledges fear honestly without resolving it
- All constraint checks passed: no tool names, no vendor names, no em dashes, no forbidden connectives in pivot
- Build succeeds with updated post rendering correctly

## Task Commits

Each task was committed atomically:

1. **Task 1: Write blind spot example (EXMP-02)** - `12053bc` (feat)
2. **Task 2: Write pivot sentence (EXMP-03) and fear narrative placeholder (ARG-02)** - `e0cf673` (feat)

## Files Created/Modified

- `src/content/posts/software-quality-age-of-ai.mdx` - Added blind spot example section, pivot sentence, and fear narrative placeholder

## Decisions Made

- Domain selection: Option A (business rule validation) worked on first attempt. The discount eligibility scenario with lapse condition gave the "plausible wrong" reading the plan required — an AI misreading "twelve consecutive months of active subscription" as "active at time of check" rather than "without any lapse exceeding seven days." The specificity made the failure concrete without needing specialized domain knowledge.
- Discovery moment sequence: personal recognition opens ("I've done this. I have shipped the green suite...") before zooming to industry alarm ("This is not one team's mistake. Every team using AI..."). This order was locked in the design doc and respected exactly.
- Pivot placement: written as a standalone prose paragraph after the blind spot, not under a heading, to maintain momentum before the fear narrative placeholder.
- Ninety-four percent coverage as the specific false confidence anchor in the blind spot — mirrors the "ninety days" specificity from the force multiplier, creating a parallel texture pattern.

## Deviations from Plan

None - plan executed exactly as written. Both tasks committed separately, all verification checks passed. Word counts landed within target ranges on first draft.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All Phase 2 prose content complete: force multiplier (350 words), blind spot (398 words), pivot (61 words), fear narrative placeholder (134 words).
- `src/content/posts/software-quality-age-of-ai.mdx` contains the full Phase 2 material and renders correctly.
- Phase 3 (synthesis: quality systems thinking) can proceed immediately. The pivot's named mechanism — velocity without human quality gates — is the entry point the synthesis section must address.
- Fear narrative placeholder is at the bottom of the file, labeled for Phase 4 integration. Phase 4 (hook and close) will move it to its final position before the force multiplier, integrated into the hook.

---
*Phase: 02-draft-examples*
*Completed: 2026-03-01*

## Self-Check: PASSED

- `src/content/posts/software-quality-age-of-ai.mdx` - FOUND
- `.planning/phases/02-draft-examples/02-02-SUMMARY.md` - FOUND
- Commit `12053bc` - FOUND
- Commit `e0cf673` - FOUND
