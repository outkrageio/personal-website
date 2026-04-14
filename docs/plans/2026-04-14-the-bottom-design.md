# The Bottom — Design Doc

**Date:** 2026-04-14
**Slug:** `the-bottom`
**File:** `src/content/posts/the-bottom.mdx`
**Target length:** 2,400–2,800 words
**Tone:** Somber. Observational. Not despairing. Not a manifesto. The tone of someone who has seen what's coming and is writing it down before it arrives.

## Metadata

```ts
export const metadata = {
  title: "The Bottom",
  date: "2026-04-14",
  description:
    "Measurement becomes ranking. Ranking becomes fear. And the bottom is structural — no matter how fast you run.",
};
```

## Thesis

A future is being built in which AI agents don't just assist knowledge workers — they manage them. They watch, measure, compare, and rank. The rankings get wrapped in the language of fairness and shipped as dashboards. The dashboards restructure life around the fear of falling below a line. And the cruelest thing about the line is that it is, by definition, always there. Even if everyone improves, someone is still last. The piece traces this descent — grounded in early signals already in the wild — and lands on a quiet observation: the people being measured are also the people building the tools that will measure them, and every dashboard is a choice someone pushed.

## Structural Approach

Linear descent with a structural spine: *the bottom is relative, and relative means inescapable.* The piece keeps that fact present from the opening thesis line through the final beat. Each section tightens the screw one turn.

## Section Outline

### Opening (no header)

**Length:** ~250 words.

**Beat:** Anchor in a present-day signal the reader can verify. Specifically: the pivot of existing developer analytics platforms (LinearB, Jellyfish, Faros, Cursor's usage telemetry, GitHub's Copilot metrics) toward AI-era "productivity scores" aggregated per-engineer. Pick one — developer analytics platforms pivoting — and stay concrete. Don't list them all; gesture at the category.

**Move:** Two or three paragraphs. First: I keep seeing the same thing. A new kind of dashboard is shipping. It doesn't measure code quality or delivery health or team velocity. It measures *you*, against the person sitting next to you. Second: this is not speculation. This is a category of product with a sales motion. Third: the thesis line — *someone always has to be last.* That line does the work of a section header. It sets the spine.

**Voice note:** Mirror the opening moves from *The Shrinking Room* and *The Shepherd and the Sheep*. Start with "I keep noticing" or a close variant. Ground in observation. Let the reader feel that this is reporting, not prophecy.

---

### ## The Measurement Was Always the Trap

**Length:** ~400 words.

**Beat:** The small-sounding move from *absolute measurement* to *relative ranking* is the whole trap. An engineer whose agent session logs are used to help them debug is being helped by a tool. The same logs, sent to a dashboard that ranks them against their peers, are a different object entirely. Same software, different gravitational pull. The moment your agent's logs leave your machine and land in a dashboard someone else reads, the nature of the tool has changed — it is no longer yours.

**Move:** Open with the distinction in plain language. Then trace the chain: measurement is neutral; comparison is competitive; competition produces a winner and a loser; a loser is a structural requirement of the system. Close the section by noting that every "productivity dashboard" ever built, in any industry, has followed this path. Once you've added the second monitor, you don't go back.

**Voice note:** This section is the logical skeleton of the piece. It should feel quiet and sure. No rhetoric. The sentences do the work.

---

### ## Sold as Fair

**Length:** ~400 words.

**Beat:** The specific lie: *objective*. Anyone who tells you the new system is objective is telling you it's a ranking system and hoping you don't notice. Fair measurement and comparative ranking are not the same thing, and the people selling this will blur that on purpose. Not out of malice. Out of incentive. The vendors profit when the dashboard gets bought. The executives profit when the ranking justifies the cuts. The engineers profit briefly, until they're the ones on the wrong side of the line.

**Move:** Name the words to watch. *Objective. Data-driven. Blind to bias. Meritocratic.* Each one is the same trick wearing a different outfit. The piece pauses here to note the seduction of the framing: of course we want fair measurement. Of course we're tired of opaque performance reviews driven by personality and politics. That is exactly why this sells. The pitch is aimed at a real pain. The product is something else.

**Voice note:** Resist the urge to sneer. The framing is effective because it's partly true. Acknowledge that, then name where it breaks.

---

### ## The Scare Factory

**Length:** ~250 words. Short, image-driven.

**Beat:** The Monsters Inc reference. The scoreboard on the wall. The scarers ranked by screams. The applause when Sulley takes the top spot. One paragraph holding the image, one paragraph landing the joke: *we watched that movie as kids and thought the joke was the monsters. The joke was the factory.*

**Move:** Don't over-explain. Set the image, land the inversion, move on. This is the cultural touchstone that makes the abstract concrete — readers who wouldn't feel the dashboard will feel the scoreboard, because they've already seen it.

**Voice note:** This is the most stylized section. Let the prose slow down for one beat, then speed back up. Don't linger past the turn.

---

### ## What Fear Does to a Week

**Length:** ~450 words.

**Beat:** The personal cost, rendered as a small concrete scene rather than a list. The horror is voluntary. Nobody made you open the laptop on Saturday. You remembered where you were on the board Friday afternoon, and you could feel the weekend slipping through your fingers if you didn't close the gap. The surveillance isn't what breaks people. The *comparison* is.

**Move:** Begin with the scene — Saturday morning, the laptop open, nobody asked. Then pull back and generalize: PTO becomes a risk. Holidays become a risk. The recital, the appointment, the dinner. Not because any rule requires you to work through them. Because the dashboard updates on Monday and you know what you'll see. End the section with the quiet observation that a system does not need to be coercive to reshape a life. It only needs to be visible.

**Voice note:** This is the most emotional section. Keep it restrained. A single scene outperforms a catalog of sacrifices. Let the reader fill in their own list.

---

### ## The Bottom Is Structural

**Length:** ~500 words. The spine section. The longest and the hardest.

**Beat:** The math. If the policy is "cut the bottom ten percent," then ten percent of your team gets cut every cycle, forever, no matter how good the team is. If everyone on the team is excellent, ten percent of the excellent get cut. This is not a bug. This is what relative ranking means. You cannot outrun it by running faster, because the cutoff moves with you.

**Move:** State the math plainly. Sit on it. Walk through the implication: the only way to not be at the bottom is to make sure someone else is. The system does not reward improvement; it rewards *relative* improvement. It turns colleagues into competitors not because anyone is cruel but because the scoreboard requires it. Then the quiet turn — this is not a new problem. Stack ranking has been tried before, and it has been abandoned before, for exactly these reasons. What's new is that the measurement is now cheap, continuous, and invisible. The old stack rank required a manager and a meeting. The new one runs while you sleep.

**Voice note:** This is the section that has to earn the somber register of the whole piece. Don't flinch from the math. Don't soften the cruelty. The reader has to sit in it for a beat longer than is comfortable. This is the point where the piece becomes undismissable.

---

### ## The Choice

**Length:** ~500 words. The landing.

**Beat:** The inversion the piece has been building toward. Engineers are not just the measured — they are the ones being asked to build the measuring tools. The dashboards, the scoring pipelines, the ranking algorithms, the "productivity score" features that will end up grading the person shipping them. Every one of these is a choice someone pushed. Not a grand act of resistance. Just the quiet decision, in a planning meeting, of whether to be the person who ships the feature that ranks their colleagues.

**Move:** Begin with the specific moment. *You are going to be in a planning meeting, and someone is going to describe the feature, and you will recognize it, and you will have about thirty seconds to decide what kind of engineer you are.* Thirty seconds is not enough time to workshop a position. It is enough time to know whether you have one. Then the Tristan Harris line — one sentence, paraphrased or attributed cleanly: *anti-human tools build an anti-human future.* Then the close.

**Close:** The last sentence belongs to the reader, not to Tristan. Something in the register of *The dashboard is being built in a branch somewhere right now. Someone is going to push it. The only open question is who.* Cold, not despairing. A question, not a sermon. The piece ends on the reader's hand, hovering over the keyboard.

**Voice note:** Don't preach. The piece has earned its position; it doesn't need to argue it again at the end. One image, one quote, one question.

---

## Beats That Must Land

- The word "objective" as the tell.
- Same software, different gravitational pull.
- Ten percent of excellent is still ten percent.
- The scoreboard on the wall. The joke was the factory.
- Saturday morning. Nobody asked.
- Thirty seconds in a planning meeting.
- Anti-human tools build an anti-human future.

These are the load-bearing lines. Everything else is scaffolding.

## Beats to Avoid

- No "here are five things you can do." No listicle. No career advice. The piece is not *The Shrinking Room* — it is not about individual preparation. It is about a structural thing and a moral moment.
- No dystopian set dressing. No "imagine a world where." The piece stays grounded in present-day signals and near-future extrapolation. The horror is that it is already plausible, not that it is imaginative.
- No naming specific companies as villains. The piece names categories (developer analytics platforms, productivity tooling), not targets. This keeps the argument about the pattern, not about any one vendor.
- No sneering at the people who buy these tools. The fairness framing works because it answers a real pain. Acknowledge that, then show where it breaks.
- No hopeful coda. "The Choice" is the closest the piece gets to hope, and even that is framed as a moral burden, not a rescue.

## Voice Checklist (match prior posts)

- Open with observation, not argument.
- Short punchy lines used sparingly, as load-bearing turns. Not every paragraph.
- Admit uncertainty where it is real. Do not hedge where it is not.
- Let section headers do structural work; let the prose inside them stay conversational.
- No emoji. No bullet lists inside the post itself — the structure is paragraphs.
- Italics for emphasis, used rarely.
- The piece should read like it was written by someone who has watched this coming and is tired of not saying it out loud.

## Out of Scope

- Any discussion of unions, labor law, or policy responses. The piece is about the mechanism and the moral moment, not the remedy.
- Any discussion of AI capabilities beyond "agents can now measure work continuously and cheaply." The piece does not argue about what agents can or cannot do — it argues about what will happen when the measurement becomes a ranking.
- Any defense of or attack on specific companies by name.

## Open Questions for Implementation

- None. All shaping decisions are resolved. The implementation plan should cover draft → revision passes → polish → publish.
