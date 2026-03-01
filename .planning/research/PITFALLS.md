# Domain Pitfalls: Blog Post — Software Quality in the Age of AI

**Domain:** Opinion/manifesto blog post about AI and software quality
**Researched:** 2026-03-01
**Research focus:** Writing pitfalls specific to this topic and format

---

## Critical Pitfalls

Mistakes that will make the post indistinguishable from the hundreds of others covering the same territory.

---

### Pitfall 1: The "AI Won't Replace You, It'll Augment You" Thesis

**What goes wrong:** The post makes its central argument — "QA professionals are more important than ever" — but doesn't differentiate it from the wave of near-identical posts published in 2024–2025. Every vendor blog, LinkedIn thought leader, and QA conference talk has run some version of this argument. Readers have built up antibodies to it. They've heard it from tool vendors who wanted them to buy testing software, from consultants selling transformation engagements, from managers who didn't want to address headcount questions honestly. The argument is correct but has been so thoroughly colonized by defensive, self-interested voices that being correct isn't enough.

**Why it happens:** Writers conflate having the right position with making a convincing argument. They focus on what to say rather than how to earn the reader's belief. The premise sounds logical so the reasoning feels done.

**Consequences:** Quality professionals — the target audience — will recognize the pattern immediately and stop reading. They've seen this movie. The post becomes the kind of content people share without conviction: "Yeah, here's another one saying we're safe." No conversion. No challenge. No change in thinking.

**Warning signs:**
- The phrase "more important than ever" appears in the draft
- The post's core movement is: "AI is scary" → "but actually QA people will be fine" → reassurance
- There are no paragraphs where a quality professional would disagree with anything
- The examples are generic or sourced from reports rather than lived experience
- The post could have been written by a QA tool vendor's marketing team

**Prevention:**
- The argument isn't "you'll be fine" — it's "your job is fundamentally different now, and that's a promotion IF you see it that way." The threat and the opportunity are real simultaneously.
- Lead with the two specific examples from the author's experience. The AI-built FastAPI service and the business logic failure are not generic — nobody else has those exact stories. If the examples could have come from a conference talk or a vendor blog, they're not specific enough.
- The post should make the reader feel *challenged*, not *reassured*. Reassurance is the genre of defensive vendor content. Challenge is the genre of people who've actually done the work.
- Check: does anything in the post require the author to have done anything? If the same post could have been written by someone who has never shipped a quality system, the specificity is insufficient.

**Phase mapping:** Design doc phase. The framing of the thesis must distinguish itself before outlining the structure. If the design doc sounds like "AI won't replace QA, here's why," rewrite it before writing the post.

---

### Pitfall 2: Preaching to the Audience About What They Should Do

**What goes wrong:** The manifesto tone tips into lecturing. The post tells quality professionals what they *need* to evolve into, what *must* change, what they *should* be thinking about. The reader ends up feeling like a student getting corrected rather than a peer being invited to think. This is the most common failure mode of "here's how to survive AI" writing: it positions the author as the one who figured it out and the reader as the one who hasn't yet.

**Why it happens:** Manifesto energy gets mistaken for authority. Writers feel that strong assertions require a lecturing posture. They want to sound confident so they lean on prescriptive language: "must," "need to," "you have to." This also happens when the writer is more interested in the argument than in the audience — they're building a case instead of having a conversation.

**Consequences:** The reader feels talked down to and disengages. Quality professionals in particular are skeptical of outsiders telling them what their job should look like — they know their own domain. The post reads as someone who built one quality system telling them how QA should work. That's not earned authority. It's overreach.

**Warning signs:**
- Sections structured as "What You Must Do" or numbered imperatives
- Second person prescriptive language in the first half of the post ("You need to...", "If you're still doing X you're already behind...")
- The examples are used to prove the author's point rather than to explore a tension
- The call to action is more about behavior change than about perspective change

**Prevention:**
- Use the author's own experience as the primary lens. "Here's what I built. Here's what failed. Here's what I concluded." The reader draws their own conclusions about what that means for them.
- Manifesto energy comes from conviction, not from imperative grammar. "The perception that AI replaces QA is wrong" is assertive. "You need to shift to systems thinking" is preachy. Same idea, completely different register.
- The two anchor examples carry this: they're firsthand, specific, and open to interpretation. Let them do the persuading. The author's job is to frame them, not to moralize about what they mean.
- Test by reading the draft and asking: does the author *demonstrate* the argument or *assert* it? Demonstration earns trust. Assertion requires it.

**Phase mapping:** Implementation phase. First draft check. Read each paragraph and flag any that are asserting rather than demonstrating. The antidote is always: go back to the specific story.

---

### Pitfall 3: Making the Two Examples Generic

**What goes wrong:** The post references the FastAPI service and the business logic failure, but treats them as illustrations of a point rather than the actual argument. They get one paragraph each, lightly summarized, and the post moves on to abstract claims. The examples become examples *of* the thesis rather than *the source of* the thesis. This is the difference between "here's a story that proves my point" and "here's what actually happened and what I took from it."

**Why it happens:** Writers are more comfortable in the abstract register — it feels more authoritative, more broad, more like a real argument. The specific story feels small, personal, particular. So they give it a paragraph and then climb back to the general claim. This is backwards. In opinion writing, the specific is where the power is.

**Consequences:** The post loses its primary competitive advantage. The reason this post can say something the vendor blog posts can't is because the author built the thing and lived through the failure. If the examples are reduced to a sentence or two, that advantage disappears. The post reads like every other post, just with a brief anecdote in the middle.

**Warning signs:**
- The FastAPI service gets less than 300 words
- The business logic failure is described without capturing what it felt like to discover it
- The examples appear in a section clearly marked "Examples" rather than being woven throughout
- The reader doesn't learn anything new about how the failure happened — just that it happened

**Prevention:**
- Spend real time on both examples. The FastAPI service should convey what the author actually did: what the system ingests, what AI does with the data, what the output looks like, how long it actually took versus how long the traditional version would have taken. The specificity makes it real.
- The business logic failure is the more important example and should get more weight. The reader should understand: what was the service supposed to do? How did the agent mock the business logic? What made the AI-generated tests all pass? What was the moment of realization that something was wrong? How bad was the underlying problem?
- These examples aren't in the post to prove the thesis. The thesis *emerged from* these experiences. Treat them that way.
- Rule of thumb: if you can replace either example with "imagine an SDET who..." without losing anything, the example is too thin.

**Phase mapping:** Design doc phase and implementation phase. The design doc should sketch out what each example will actually contain. The implementation draft should be checked against that sketch.

---

## Moderate Pitfalls

Mistakes that weaken the post without killing it.

---

### Pitfall 4: Treating "Quality Systems Thinking" as Self-Explanatory

**What goes wrong:** The framework of "quality systems thinking" — designing quality gates, owning risk assessment, shifting left and right — gets stated but not inhabited. The post lists the components without showing what they look like in practice. The reader understands the category but can't picture what it means to actually do this work differently.

**Why it happens:** The writer assumes the audience knows what "quality systems thinking" means because they're quality professionals. But the point of the post is that the *form* of quality work is changing — which means the reader needs help seeing what the new form looks like, not just its name.

**Warning signs:**
- "Quality systems thinking" is defined in a bulleted list
- The reader could paraphrase the framework but couldn't describe a day in the life of someone practicing it
- The FastAPI service is the only concrete instance of the framework

**Prevention:**
- The FastAPI example is a complete instantiation of quality systems thinking. Use it to show the framework rather than naming the framework and then showing the example. Invert the structure: show the work first, name the pattern after.
- The second example (business logic failure) shows the limit of what AI can do without quality thinking. That's the other half of what the framework means. Make that explicit.

**Phase mapping:** Implementation phase. Check whether the framework section (if it exists as a standalone section) could be collapsed into the examples instead.

---

### Pitfall 5: The "Adapt or Die" Register

**What goes wrong:** The call to action section adopts the urgency-inflating language common to AI career writing: "the window is closing," "the engineers who figure this out first," "adapt or get left behind." This register has been used so much in AI career writing that it triggers skepticism rather than urgency. It's the written equivalent of a fire alarm that goes off every day — eventually people stop treating it as a signal.

**Why it happens:** Manifesto energy gets confused with urgency rhetoric. Writers want to create momentum, so they borrow the vocabulary of inflection points and windows and waves. It sounds serious without being specific.

**Warning signs:**
- Phrases like "the window is closing," "competitive advantage," "early adopters," "wave"
- The call to action is addressed to quality professionals as a group rather than to an individual reader
- The urgency is about job survival rather than about the quality of the work itself
- The post ends with a statement about the profession's future rather than a specific challenge to the reader

**Prevention:**
- Ground urgency in the specific examples, not in abstract claims about the industry. "The team that would have spent months building what I built in a week — what are they doing with the time they're getting back?" is specific. "AI is changing the profession and those who don't adapt will be left behind" is generic.
- The emotional target for the reader at the end of the post is "challenged to think differently" not "scared about my career." Challenge energizes. Fear paralyzes.

**Phase mapping:** Implementation phase. Read the final section specifically for urgency rhetoric. Replace each instance with either a specific question or a concrete observation.

---

### Pitfall 6: Underweighting the Failure Example

**What goes wrong:** Because the post's thesis is optimistic (QA is more important, not less), the failure example gets softer treatment than the success example. The AI-built service is shown in full. The business logic failure gets a paragraph. The post feels like it's selling an answer rather than wrestling with a problem.

**Why it happens:** Writers gravitate toward evidence that supports the thesis and minimize counter-evidence. The failure example technically supports the thesis (it shows why human quality judgment is necessary) but feels like it complicates the narrative, so it gets compressed.

**Consequences:** The post feels one-sided. Quality professionals know their work includes failure. A post that only shows a success story doesn't earn their trust. The business logic failure is actually the more resonant example for this audience — they've been in rooms where coverage looked great but nothing was actually tested.

**Prevention:**
- The business logic failure should get at least as much space as the FastAPI success. It's the darker, more complex example, and that's what makes it trustworthy.
- Let the failure be genuinely uncomfortable for a paragraph before resolving it. "All the tests passed. The business logic was wrong. The AI tested its own assumptions." That's a sentence that should land, not be explained away.

**Phase mapping:** Implementation phase. Word count check: if the business logic failure section is shorter than the FastAPI service section, expand it.

---

## Minor Pitfalls

Issues that create friction without derailing the post.

---

### Pitfall 7: Hedging the Manifesto

**What goes wrong:** The manifesto tone gets undermined by qualification: "in some cases," "this may not apply to every team," "your experience may vary." These phrases are accurate but they bleed the conviction out of the piece. Readers who need the caveats can supply them; readers who need the conviction cannot.

**Prevention:** Save the qualifications for facts and data, not for the central thesis. The thesis should be stated flatly.

---

### Pitfall 8: Section Headers That Announce Rather Than Argue

**What goes wrong:** Section headers like "What AI Does Well" or "The Case for Quality Systems Thinking" announce topics instead of advancing arguments. They make the post feel like a conference slide deck.

**Prevention:** Headers should be claims or observations, not labels. "AI Writes Tests. It Doesn't Know What to Test" carries the argument. "Limitations of AI in Testing" doesn't.

**Phase mapping:** Design doc phase. Draft section headers that are arguments before outlining what goes in each section.

---

### Pitfall 9: Addressing "Some People Say" Without Naming the Argument

**What goes wrong:** The post responds to critics who believe AI will replace QA without stating the strongest version of that argument. It argues against a strawman. "Some people think QA is obsolete" is easier to rebut than "the vibe-coding workflow with AI-generated tests does, in fact, catch most bugs that matter, and headcount data already shows QA teams shrinking."

**Prevention:** State the strongest version of the opposing view before refuting it. The audience knows what the real skeptic argument sounds like. Addressing a weaker version tells them you don't.

---

## Phase-Specific Warnings

| Phase | Likely Pitfall | Mitigation |
|-------|---------------|------------|
| Design doc | Thesis sounds like vendor content ("QA is more important than ever") | Reframe thesis as tension, not reassurance. Both examples should be in the design doc outline. |
| Design doc | Section structure announced rather than argued | Write section headers as arguments before fleshing out content |
| First draft | Generic treatment of the two anchor examples | Both examples need texture, timing, and discovery moment — not just summary |
| First draft | Preachy second-person prescriptive language | Switch to first-person observation + reader draws their own conclusions |
| Revision | Business logic failure section is shorter than FastAPI section | Expand failure example, not compress it |
| Revision | Final section drifts into "adapt or die" urgency register | Replace urgency claims with specific questions or observations |
| Final check | "More important than ever" or equivalent phrase still present | Cut it. The argument earns the conclusion; don't state the conclusion first. |

---

## Sources

- Analysis of existing posts on Kraig Britton's personal website to establish voice and register benchmarks (training data, HIGH confidence)
- Survey of "Will AI replace QA" posts from 2024–2025 to document the saturated genre: [Momentic](https://momentic.ai/blog/will-ai-replace-qa-engineers), [testRigor](https://testrigor.com/blog/will-ai-replace-testers/), [Medium/Lakindu De Silva](https://medium.com/@lakindudesilva007/the-future-of-qa-in-the-age-of-ai-will-ai-replace-testers-or-make-us-stronger-3cfb7fbcee43), [QA Test Lab](https://blog.qatestlab.com/2025/09/10/when-ai-will-replace-manual-testers/) (MEDIUM confidence — documents what the genre looks like, which is the pitfall)
- AI code quality hallucination risks confirming the "AI tests its own assumptions" pitfall is a recognized real-world pattern: [CIO](https://www.cio.com/article/4135334/does-using-ai-in-qa-testing-increase-risk-for-software-companies.html) (MEDIUM confidence)
- Writing quality and moralizing pitfalls: [Writers Hearth on avoiding moralizing](https://www.writershearth.com/post/4-ways-to-avoid-moralizing-when-writing-fiction-and-poetry) (MEDIUM confidence — applies across non-fiction as well)
- Genre saturation ("not replace / augment") documented via pattern in search results (MEDIUM confidence — observable across multiple sources)
