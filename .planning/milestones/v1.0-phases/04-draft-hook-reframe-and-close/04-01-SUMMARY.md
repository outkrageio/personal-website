---
phase: 04-draft-hook-reframe-and-close
plan: 01
subsystem: content
tags: [blog, mdx, prose, writing]

# Dependency graph
requires:
  - phase: 03-draft-pivot-and-synthesis
    provides: synthesis section and quality systems thinking framework that hook brackets and close lands
provides:
  - 182-word opening hook (second-person, fear named flat, reframe within two paragraphs)
  - 170-word three-beat close ending with vacuum image and locked closing line
  - Complete assembled draft with fear narrative placeholder deleted
affects: 05-revision-pass

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Three-beat close structure: validate fear, name explicit job, challenge with consequence of inaction"
    - "No-announcement opening: drop reader into named internal state before any thesis announcement"
    - "Fear-first reframe-second: fear validated before reframe mechanism named"

key-files:
  created: []
  modified:
    - src/content/posts/software-quality-age-of-ai.mdx

key-decisions:
  - "Hook uses abstract register (not specific capability moment) — 'floor of your role disappear' metaphor produces stronger intimacy than naming test matrices or edge case enumeration"
  - "All three middle-section headers survive — each creates a strong cognitive anchor (declarative claim, failure state name, synthesis name) without interrupting flow"
  - "First example header acts as register bridge from 'you' (hook) to 'I' (examples) — no additional bridge sentence needed"
  - "Close integrated into synthesis section without a section break — 'The fear was real' beat flows from synthesis's final activity description"
  - "Vacuum image chosen as final sharp image over mirror image — matches design doc recommendation and creates stronger stakes of inaction"

patterns-established:
  - "Close pattern: three beats without header, appended to final synthesis section, locked line as absolute final sentence"

requirements-completed: [ARG-01, ARG-04]

# Metrics
duration: 2min
completed: 2026-03-01
---

# Phase 4 Plan 01: Draft Hook, Reframe, and Close Summary

**Complete assembled draft with 182-word second-person hook (fear named, reframe within two paragraphs) and 170-word three-beat close ending verbatim: "This is the work now, and it's yours."**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-01T22:13:49Z
- **Completed:** 2026-03-01T22:16:16Z
- **Tasks:** 2 (executed as integrated single pass)
- **Files modified:** 1

## Accomplishments

- Hook opens in second-person intimate register, names professional unease without analytical specifics, states fear flat ("AI is coming for QA jobs. That is the fear. Stated plainly."), and reframes mechanism within two paragraphs: "Not replacement. Irrelevance by default."
- Close delivers three beats (validate: fear real but mechanism wrong; name: quality systems thinking is the explicit job; challenge: vacuum consequence of inaction), vacuum image, and locked closing line verbatim as the final sentence
- Fear narrative placeholder fully deleted; all three essential phrases verified present; no em dashes; build passes

## Task Commits

Each task was committed atomically:

1. **Task 1 + 2: Write hook, close, and assemble full draft** - `8172098` (feat)

**Plan metadata:** (pending docs commit)

## Files Created/Modified

- `src/content/posts/software-quality-age-of-ai.mdx` - Complete assembled draft: hook at top, three middle sections with evaluated headers, close at bottom, fear narrative placeholder deleted

## Decisions Made

- Abstract unease register chosen over specific capability moment for hook paragraph 1: "You have been watching the floor of your role disappear" produces stronger intimate resonance than naming test matrices or edge case enumeration (which would shift the hook's register from emotional to informational)
- All three middle-section headers retained: each functions as a declarative cognitive anchor that helps the reader track the argument without interrupting momentum
- First example header (`## AI Gave One Engineer the Power of a Team`) serves as the register bridge from second-person hook to first-person example — no additional bridge sentence needed
- Close appended directly to synthesis section: "The fear was real" follows naturally from the synthesis activities, creating smooth synthesis-to-close transition without a header
- Vacuum image selected as the final sharp image per design doc recommendation — stakes of inaction are more visceral than the mirror image from the-same-blind-spot-twice.mdx (which already belongs to that post)

## Deviations from Plan

None — plan executed exactly as written. Hook and close written within word targets (182 and 170 words respectively). All verification checks passed. Build succeeded.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- Complete assembled draft ready for Phase 5 revision pass
- Total post word count: approximately 1,491 words (below the 1,500 minimum target — Phase 5 QUAL-01 validation may require expansion)
- All essential phrases present and verified
- Build verified passing

## Self-Check: PASSED

- FOUND: src/content/posts/software-quality-age-of-ai.mdx
- FOUND: .planning/phases/04-draft-hook-reframe-and-close/04-01-SUMMARY.md
- FOUND commit: 8172098 (feat(04-01): write hook and close for software-quality-age-of-ai)
- Essential phrase "capability threshold shifted": present
- Essential phrase "tests confirmed what the code": present
- Locked closing line "This is the work now, and it's yours.": present as final sentence
- Fear narrative placeholder deleted: confirmed
- No em dashes: confirmed
- Build passes: confirmed

---
*Phase: 04-draft-hook-reframe-and-close*
*Completed: 2026-03-01*
