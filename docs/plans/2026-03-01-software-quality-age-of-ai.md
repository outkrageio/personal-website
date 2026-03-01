# Software Quality in the Age of AI — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Write and publish a 1500-2000 word manifesto-style blog post arguing that AI elevates quality professionals into quality systems thinkers — but only if they claim that role. Two anchor examples create the tension (force multiplier and blind spot); quality systems thinking resolves it. Build order is research-confirmed: examples first, pivot second, synthesis third, hook and close last, review and polish final.

**Architecture:** Single MDX file following existing blog post conventions. Export metadata object, write content in markdown. No components or imports needed.

**Tech Stack:** MDX, Next.js content pipeline (existing)

---

### Task 1: Create the MDX file with metadata

**Files:**
- Create: `src/content/posts/software-quality-age-of-ai.mdx`

**Step 1: Create the file with frontmatter**

```mdx
export const metadata = {
  title: "Software Quality in the Age of AI",
  date: "2026-03-01",
  description: "AI makes quality engineers more powerful than ever — but only if they claim the one role AI cannot fill: deciding what quality means.",
};
```

**Step 2: Verify it renders**

Run: `cd /Users/kraigbritton/working/personal-website && npm run dev`
Visit: `http://localhost:3000/blog` — confirm post appears in the listing.
Visit: `http://localhost:3000/blog/software-quality-age-of-ai` — confirm page loads.

**Step 3: Commit**

```bash
git add src/content/posts/software-quality-age-of-ai.mdx
git commit -m "Add blog post stub: Software Quality in the Age of AI"
```

---

### Task 2: Write the force multiplier example

**Files:**
- Modify: `src/content/posts/software-quality-age-of-ai.mdx`

**Reference:** Design doc section "AI Gave One Engineer the Power of a Team"

**Step 1: Write 300-350 words**

After the metadata block, write the force multiplier section. This is the first prose content in the file. It is written before the hook and close because the examples must exist before the hook can know its destination.

Content guidance from the design doc:
- A diagnostic service for quality analysis. What it ingests: test results (pass/fail history), runtime logs, historical failure trends across builds.
- What AI does: infers failure cause (pattern matching across the three inputs), proposes fix suggestions ranked by confidence.
- Build time: one week solo. Traditional equivalent: months with a dedicated team.
- No tool names. No vendor names. The pattern is the point.
- Emotional beat: the capability threshold shifted. Things that required a team and months are now within reach of one engineer who knows how to direct AI. Reader must feel this, not be told it is impressive.
- Essential phrases that must survive: "The capability threshold shifted." (or close equivalent); "one week" vs "months with a team" stated plainly.
- Voice: author as practitioner. "I've built this. I watched it happen." Authority from direct experience.

**Step 2: Commit**

```bash
git add src/content/posts/software-quality-age-of-ai.mdx
git commit -m "Write force multiplier example for Software Quality in the Age of AI"
```

---

### Task 3: Write the blind spot example

**Files:**
- Modify: `src/content/posts/software-quality-age-of-ai.mdx`

**Reference:** Design doc section "The Test Suite Said Green. The Business Logic Was Wrong."

**Step 1: Write 350-400 words** (required: equal or greater than Task 2 word count)

Continue the MDX file after the force multiplier example. The blind spot section must match or exceed the force multiplier word count — this is a structural constraint, not a stylistic preference.

**Select the domain during drafting.** Three candidates are in the design doc. Default to Option A (business rule validation) — domain-agnostic, closest to the PROJECT.md actual experience. Switch to Option B (payment edge case) if business rule validation does not produce sufficient emotional texture during drafting.

Content guidance from the design doc:
- AI generated code. AI generated tests from the code. Tests passed. CI was green. Confidence was high.
- Acceptance criteria tests — written from the product requirement, not from the code — revealed the failure. The tests confirmed what the code did, not what the system was supposed to do.
- Discovery moment in two beats: personal recognition first ("I've done this"), then industry alarm ("this is the pattern, and it is happening everywhere").
- Essential phrases that must survive: "The tests confirmed what the code *did*. Not what the system was supposed to do." and "I've done this."
- Voice constraint: personal recognition before the alarm. The author names their own failure before claiming it is widespread. This earns the right to the alarm.

**Step 2: Commit**

```bash
git add src/content/posts/software-quality-age-of-ai.mdx
git commit -m "Write blind spot example for Software Quality in the Age of AI"
```

---

### Task 4: Write the pivot sentence

**Files:**
- Modify: `src/content/posts/software-quality-age-of-ai.mdx`

**Reference:** Design doc section "The Power That Multiplied You Is the Power That Blinded You"

**Step 1: Write 50-75 words**

Add the pivot immediately after the blind spot example. This is structural weight, not length. One to three sentences.

**Critical constraint:** ESCALATION, not reversal. The pivot connects the two examples by showing they share the same mechanism. The force that made the diagnostic service possible in one week is the same force that produced a green suite validating wrong behavior. Velocity without human quality gates is the mechanism.

Forbidden connectives: "but," "however," "on the other hand." These read as reversal.
Required logic: "yes, and this is exactly why" — the force multiplier explains the blind spot. The success caused the risk. Same force. Different angle.

**Step 2: Commit**

```bash
git add src/content/posts/software-quality-age-of-ai.mdx
git commit -m "Write escalation pivot for Software Quality in the Age of AI"
```

---

### Task 5: Write the synthesis — quality systems thinking

**Files:**
- Modify: `src/content/posts/software-quality-age-of-ai.mdx`

**Reference:** Design doc section "Quality Systems Thinking Is the Job Now"

**Step 1: Write 200-250 words**

Add the synthesis section after the pivot. The synthesis names quality systems thinking ONLY here — after both examples have earned the framework.

Three specific activities from the design doc:
1. Design quality gates: deciding what "done" means before AI starts generating. Human decisions requiring judgment about what matters, not just what is testable.
2. Own risk assessment: determining which failures are catastrophic (the business rule, the money) vs. acceptable (a cosmetic issue). AI cannot assign business stakes. Humans do.
3. Shift left AND right: quality thinking enters before requirements are locked (left) and after deployment (right). AI tools extend the surface area; quality professionals must extend with them.

Voice constraints:
- Name the three activities without hedging. No "might include" or "could involve."
- No tool names in the synthesis.
- "You" and "we" for synthesis — shift from first-person to inclusive register.

**Step 2: Commit**

```bash
git add src/content/posts/software-quality-age-of-ai.mdx
git commit -m "Write quality systems thinking synthesis for Software Quality in the Age of AI"
```

---

### Task 6: Write the hook and fear narrative

**Files:**
- Modify: `src/content/posts/software-quality-age-of-ai.mdx`

**Reference:** Design doc section "You Have Been Thinking About This Wrong"

**Step 1: Write 150-200 words (hook) + 100-150 words (fear narrative)**

Move this content to the TOP of the file, before the force multiplier example. This task is written last (of the content sections) because the hook works when you know the destination.

Hook guidance from the design doc:
- Open without announcing the topic. Drop into the professional moment. A quality professional, mid-career, watching AI tools eat through tasks that used to define their value.
- Surface the fear as "the thing you've been thinking." Intimate register, not confrontational. "You've been thinking it."
- State the reframe flatly: the fear is wrong about the mechanism. Not replacement — irrelevance by default.
- State the thesis: AI makes quality engineers more powerful than ever, *but only if* humans remain the arbiters of what quality means.
- Do NOT resolve the tension in the hook. The examples earn the resolution.

Voice references:
- `the-shepherd-and-the-sheep.mdx`: opening structure ("Something broke in the last few months...") — personal, unambiguous, no announcement
- `the-shepherd-and-the-sheep.mdx`: first-person authority ("I've watched it happen. I've *done* it.")

**Step 2: Commit**

```bash
git add src/content/posts/software-quality-age-of-ai.mdx
git commit -m "Write hook and fear narrative for Software Quality in the Age of AI"
```

---

### Task 7: Write the close

**Files:**
- Modify: `src/content/posts/software-quality-age-of-ai.mdx`

**Reference:** Design doc section "This Is the Work Now. Claim It."

**Step 1: Write 150-200 words**

Add the close at the END of the file, after the synthesis. The closing is the final professional directive.

Content guidance from the design doc:
- The fear was real. The mechanism was wrong. The job is not gone. The job is harder.
- Quality systems thinking is not passive. It requires claiming authority over what quality means — not waiting for AI to define it by default.
- "This is the work now, and it's yours." Direct address. Professional directive. No softening.
- Final image: the quality professional who does not claim this role leaves a vacuum. AI fills vacuums. It fills them confidently and completely and often wrong.

Voice references:
- `the-same-blind-spot-twice.mdx`: closing challenge structure — three direct beats, final sharp image. Match that energy.
- Challenge, not comfort. Reader leaves knowing the path and knowing it requires deliberate choice.

**Step 2: Commit**

```bash
git add src/content/posts/software-quality-age-of-ai.mdx
git commit -m "Write closing challenge for Software Quality in the Age of AI"
```

---

### Task 8: Review and polish the full post

**Files:**
- Modify: `src/content/posts/software-quality-age-of-ai.mdx`

**Step 1: Read the full post end to end**

Check for:
- Argument flow: Hook sets frame -> Force multiplier earns "more powerful" -> Pivot escalates (same force, different angle) -> Blind spot earns the alarm -> Synthesis names the work -> Close challenges the reader. Each section must connect to the next.
- Register violations (check against design doc Voice and Register Constraints):
  - No hedging on claims ("might," "could," "perhaps")
  - No passive voice on claims
  - No tool names, no vendor names
  - No "adapt or die" rhetoric
  - No em dashes
  - "Still valuable" or "more important than ever" only as earned argument, not comfort statement
- Proportions: blind spot section must be equal or longer than force multiplier section. Count words if uncertain.
- Essential phrases present: "The capability threshold shifted" (or equivalent) in the force multiplier section; "The tests confirmed what the code *did*. Not what the system was supposed to do." in the blind spot section.
- Pivot reads as escalation, not reversal. No "but" or "however" connecting the examples.
- Word count: 1500-2000 total. Target 1700-1800.
- Paragraph length variety: mix of short punchy and longer explanatory.
- Hook does not resolve the tension (resolution belongs to synthesis + close).

**Step 2: Polish**

- Tighten any sections that drag
- Strengthen any weak transitions
- Ensure strategic first-person: "I" in examples and key claims, "you" and "we" in synthesis and challenge
- Verify italics are selective (emphasis, not decoration)
- No em dashes anywhere in the post

**Step 3: Verify it renders correctly**

Run: `cd /Users/kraigbritton/working/personal-website && npm run dev`
Visit: `http://localhost:3000/blog/software-quality-age-of-ai`
Confirm: renders correctly, no MDX errors, reads well in the site's typography.

**Step 4: Build check**

Run: `cd /Users/kraigbritton/working/personal-website && npm run build`
Confirm: no build errors, static export succeeds.

**Step 5: Final commit**

```bash
git add src/content/posts/software-quality-age-of-ai.mdx
git commit -m "Add blog post: Software Quality in the Age of AI"
```
