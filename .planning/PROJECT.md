# Blog Post: Software Quality in the Age of AI

## What This Is

A manifesto-style blog post (1500-2000 words) arguing that AI doesn't replace quality professionals — it elevates them. Written for SDETs and quality engineers who are navigating the shift AI is bringing to their craft. Published on Kraig Britton's personal website as an MDX blog post.

## Core Value

Convince quality professionals that their role is more important than ever — AI shifts the job from manual test execution to quality systems thinking, and that's a promotion, not a pink slip.

## Requirements

### Validated

- ✓ MDX blog post pipeline — existing
- ✓ Blog listing and individual post pages — existing
- ✓ Design doc process in docs/plans/ — existing
- ✓ Dark theme with warm typography and prose styling — existing

### Active

- [ ] Design doc outlining post structure, key arguments, and narrative arc
- [ ] Implementation plan for the blog post
- [ ] MDX blog post with metadata (title, date, description)
- [ ] Post reads well at 1500-2000 word length
- [ ] Manifesto tone — assertive, direct, call to action
- [ ] Two anchor examples woven into the argument
- [ ] Reader walks away feeling both reassured AND challenged to evolve

### Out of Scope

- Site design changes — post uses existing styling and layout
- New components — standard prose rendering is sufficient
- Portfolio or other page updates — blog post only
- Code samples or technical tutorials — this is an argument piece, not a how-to

## Context

**Post thesis:** The perception that AI will replace QA teams is wrong. AI shifts the job into quality systems thinking. With the ability to quickly automate tests and build tools, QA teams should be more empowered to evaluate quality — and it's more important than ever.

**Two anchor examples:**

1. **AI as force multiplier:** Kraig built a FastAPI service in one week that ingests test results, logs, and historical trends, then uses AI to infer what went wrong when a test fails and proposes fix suggestions. This is a quality *system* — the kind of thing that would have taken a traditional team months. An SDET with AI built it in days.

2. **AI as blind spot:** While vibe-coding a new service, the AI agent mocked up backend business logic in a way that made all AI-generated tests pass. It wasn't until tests were written from a different context — using real acceptance criteria — that the team discovered the business logic was fundamentally incorrect. The AI tested its own assumptions, not the actual requirements.

**These two examples work as thesis and antithesis:** AI makes quality engineers more powerful (example 1), but only if humans remain the ones defining what quality means (example 2). Without quality thinking, AI creates an illusion of coverage.

**Quality systems thinking includes:**
- Designing quality gates — pipelines, observability, feedback loops (not just writing tests)
- Owning risk assessment — deciding what to test deeply vs what AI-generated tests can cover
- Shifting left AND right — quality embedded in design and production monitoring, not just pre-release

**Audience:** Quality professionals broadly — SDETs, QA engineers, test leads, anyone in the quality space figuring out the future.

**Tone:** Manifesto energy. More assertive than Kraig's typical reflective posts. A call to arms for the quality community.

**Existing post pattern:** MDX files in `src/content/posts/`, metadata exported inline, design doc created first in `docs/plans/`.

## Constraints

- **Format**: MDX blog post following existing conventions in `src/content/posts/`
- **Length**: 1500-2000 words
- **Process**: Design doc first, then implementation plan, then post
- **Static export**: Must work with Next.js static export — no dynamic features

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Manifesto tone over reflective | User wants assertive call to action, departure from usual style | — Pending |
| Two-example structure | One showing opportunity, one showing risk — creates natural tension | — Pending |
| Quality systems thinking as framework | Encompasses gates, risk assessment, shift left/right — not just automation | — Pending |

---
*Last updated: 2026-03-01 after initialization*
