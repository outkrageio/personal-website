# Phase 1: Design Doc - Context

**Gathered:** 2026-03-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Create a design doc at `docs/plans/` that locks the argument structure, section sequencing, key language, and voice constraints for a manifesto-style blog post about software quality in the age of AI. The thesis frames tension (opportunity AND risk), not reassurance. No prose is written in this phase — only the structural skeleton and writing constraints.

</domain>

<decisions>
## Implementation Decisions

### Argument arc
- Pivot between examples is escalation, not reversal — the success (force multiplier) CAUSES the blind spot. Same force, different angle. Not a "but" — a "yes, and this is exactly why."
- After the blind spot example, reader should feel personal recognition first ("I've done this"), then zoom out to industry-wide alarm ("this is happening everywhere"). Layered, not one or the other.
- The argument resolves into clarity with weight — reader knows exactly what to do, and it feels hard. "This is the work now, and it's yours." No comfort, no ambiguity.
- The fear narrative (AI replaces QA) is surfaced as the reader's unspoken thought — "You've been thinking it." Author names what the reader won't say, building trust before the reframe.

### Section structure
- Declarative claim headers — each section title stakes a position the reader must engage with (e.g., "The Test Suite Lied" not "About Testing")
- 4-5 tight sections total, matching the phase build order: Hook/reframe, Force multiplier, Blind spot, Synthesis, Close
- Draft candidate header text in the design doc, marked as provisional — prose phases can revise as the argument develops
- Include target word counts per section to maintain proportions (blind spot gets equal or more space than force multiplier)

### Example sketch depth
- FastAPI force multiplier: lock key technical details (what it ingests, what AI does, build time) AND emotional beats (where the reader feels the impact). More than bullets, less than prose.
- Blind spot example: composite/representative — combine real patterns into one clean example. Grounded in reality, shaped for maximum argument clarity.
- Sketch 2-3 candidate technical domains for the blind spot (e.g., payment edge case, data migration, business rule validation). Phase 2 picks the strongest during drafting.
- Key language approach: lock 1-2 essential phrases per example that must survive into the final post. Describe the rest by intent (what the moment must communicate), not exact words.

### Voice and register
- Author speaks as practitioner with authority — "I've built these systems. I've seen this fail." Authority comes from direct experience, not theory.
- Controlled heat — measured authority with deliberate sharp moments. Mostly calm, but when a point needs to land hard, it lands hard. The sharpness earns impact through selectivity.
- Strategic first-person — "I" for examples and key claims, "you" and "we" for synthesis and challenge. Shifts to include the reader when the argument demands it.
- Design doc includes both explicit register constraints (no hedging, no passive on claims, no tool names, no "adapt or die" rhetoric) AND 2-3 reference pieces whose tone to match.

### Claude's Discretion
- Specific section word budget allocations (within the 1500-2000 total)
- Selection of reference pieces for voice/register calibration
- Exact candidate header language (provisional, user approved the approach)
- Design doc formatting and internal organization

</decisions>

<specifics>
## Specific Ideas

- The escalation pivot is key: the power of AI in Example 1 is the SAME force that creates the blind spot in Example 2. The connection must feel inevitable, not coincidental.
- Fear narrative framed as "You've been thinking it" — intimate, not confrontational. Reader feels seen, not attacked.
- Resolution lands as "this is the work now, and it's yours" — a professional directive, not a pep talk.
- Voice reference calibration: Paul Graham-level clarity with selective sharpness. Not DHH-level heat throughout.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-design-doc*
*Context gathered: 2026-03-01*
