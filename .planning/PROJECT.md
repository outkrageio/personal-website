# Blog Post: Software Quality in the Age of AI

## What This Is

A published manifesto-style blog post (1,702 words) arguing that AI doesn't replace quality professionals — it elevates them. Written for SDETs and quality engineers navigating the shift AI is bringing to their craft. Published on Kraig Britton's personal website at /blog/software-quality-age-of-ai.

## Core Value

Convince quality professionals that their role is more important than ever — AI shifts the job from manual test execution to quality systems thinking, and that's a promotion, not a pink slip.

## Requirements

### Validated

- ✓ MDX blog post pipeline — existing
- ✓ Blog listing and individual post pages — existing
- ✓ Design doc process in docs/plans/ — existing
- ✓ Dark theme with warm typography and prose styling — existing
- ✓ Design doc outlining post structure, key arguments, and narrative arc — v1.0
- ✓ Implementation plan with section-by-section writing approach — v1.0
- ✓ MDX blog post with metadata (title, date, description) — v1.0
- ✓ Post reads well at 1,702 words — v1.0
- ✓ Manifesto tone — assertive, direct, call to action — v1.0
- ✓ Two anchor examples woven into the argument — v1.0
- ✓ Reader walks away feeling both reassured AND challenged to evolve — v1.0

### Active

- [ ] Social media summary/thread version of the post
- [ ] Follow-up post with practical "quality systems thinking" framework

### Out of Scope

- Site design changes — post uses existing styling and layout
- New components — standard prose rendering is sufficient
- Portfolio or other page updates — blog post only
- Code samples or technical tutorials — this is an argument piece, not a how-to

## Context

Shipped v1.0 with 1,702 words of published prose plus 7,835 lines of planning artifacts.
Tech stack: Next.js 16, MDX, Tailwind CSS v4, static export to Cloudflare Pages.
Post live at /blog/software-quality-age-of-ai.

**Post thesis:** AI shifts quality work into quality systems thinking — designing quality gates, owning risk assessment, shifting left AND right. The post uses two anchor examples (force multiplier and blind spot) to earn the framework before naming it.

**Build approach validated:** Examples-first, hook-last build order produced a tighter argument than writing linearly. Design doc with declarative claim headers kept every phase aligned without re-reading prior prose.

## Constraints

- **Format**: MDX blog post following existing conventions in `src/content/posts/`
- **Length**: 1500-2000 words (landed at 1,702)
- **Process**: Design doc first, then implementation plan, then post
- **Static export**: Must work with Next.js static export — no dynamic features

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Manifesto tone over reflective | User wants assertive call to action, departure from usual style | ✓ Good — produced direct, practitioner-authority voice |
| Two-example structure | One showing opportunity, one showing risk — creates natural tension | ✓ Good — escalation pivot connected them without reversal |
| Quality systems thinking as framework | Encompasses gates, risk assessment, shift left/right — not just automation | ✓ Good — three activities wired to specific example details |
| Examples-first build order | Hook works when the destination is known; synthesis can only be written after examples prove it | ✓ Good — research-confirmed, avoided thesis-first trap |
| Declarative claim headers | Topic labels are skimmable; claims demand engagement | ✓ Good — each header stakes a position readers engage with |
| ESCALATION pivot (not reversal) | "Yes, and" logic prevents bait-and-switch reader experience | ✓ Good — same force, different angle |
| Business rule validation for blind spot | Domain-agnostic, closest to actual experience, no specialized knowledge required | ✓ Good — discount eligibility with lapse condition was specific and concrete |
| Hook uses abstract register | "Floor of your role disappear" metaphor over specific capability moment | ✓ Good — stronger intimate resonance than naming test matrices |
| Vacuum image for close | Design doc recommended, creates stronger inaction stakes than mirror image | ✓ Good — visceral stakes of professional vacuum |

---
*Last updated: 2026-03-01 after v1.0 milestone*
