# The Same Blind Spot Twice — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Write and publish a ~3,500-4,500 word blog post arguing that when AI generates both application code and tests from the same context, it creates correlated failure modes — bugs that are systematically invisible to the test suite. This is a more technical post than previous ones, with code examples demonstrating the failure mode and concrete mitigation strategies.

**Architecture:** Single MDX file following existing blog post conventions. Export metadata object, write content in markdown with fenced code blocks for examples. No components or imports needed.

**Tech Stack:** MDX, Next.js content pipeline (existing)

---

### Task 1: Create the MDX file with metadata

**Files:**
- Create: `src/content/posts/the-same-blind-spot-twice.mdx`

**Step 1: Create the file with frontmatter**

```mdx
export const metadata = {
  title: "The Same Blind Spot Twice",
  date: "2026-02-23",
  description: "When AI writes your code and your tests, it makes the same mistakes in both. Your green test suite might be lying to you.",
};
```

**Step 2: Verify it renders**

Run: `cd /Users/kraigbritton/working/personal-website && npm run dev`
Visit: `http://localhost:3000/blog` — confirm the post appears in the listing.
Visit: `http://localhost:3000/blog/the-same-blind-spot-twice` — confirm the page loads.

**Step 3: Commit**

```bash
git add src/content/posts/the-same-blind-spot-twice.mdx
git commit -m "Add blog post stub: The Same Blind Spot Twice"
```

---

### Task 2: Write the opening hook — "The Green Suite That Lies"

**Files:**
- Modify: `src/content/posts/the-same-blind-spot-twice.mdx`

**Step 1: Write the opening paragraphs (~400-600 words)**

After the metadata block, write 4-6 paragraphs that establish the problem through a concrete scenario:

- Open with a specific moment: the author asks an AI agent to build a feature and write e2e tests for it. Tests pass. Green across the board. Ship it.
- Then the bug report comes in. Something obvious in hindsight. The code was wrong and the tests were wrong in the same way.
- The key realization: this isn't the normal "I wrote a bad test" situation. The tests didn't miss the bug by accident. They missed it systematically, because the same model that misunderstood the requirement in the code also misunderstood it in the tests.
- Set up the stakes: this is happening on every team using AI to generate both code and tests, and most of them don't know it yet.

**Tone:** Match the opening style of the author's other posts — start with a concrete scene, not an abstraction. First person. The moment of realization should feel visceral.

**Style reference:** Match the opening energy of `src/content/posts/the-shepherd-and-the-sheep.mdx` — something shifted and you can't unshift it.

**Step 2: Commit**

```bash
git add src/content/posts/the-same-blind-spot-twice.mdx
git commit -m "Write opening hook for The Same Blind Spot Twice"
```

---

### Task 3: Write "How Correlated Failures Work" with code examples

**Files:**
- Modify: `src/content/posts/the-same-blind-spot-twice.mdx`

**Step 1: Write the section (~800-1,200 words)**

Section header: `## How Correlated Failures Work`

This is the technical core. Three concrete demonstrations with code. Use TypeScript and Playwright-style syntax. The domain should be a realistic web app (task management, scheduling, or similar).

**Example 1: The timezone assumption (~300-400 words)**

Show an AI-generated scheduling feature that assumes UTC everywhere. Then show the AI-generated e2e test that ALSO assumes UTC. The test passes. Users in other timezones get wrong meeting times.

Include:
- A short code block showing the relevant implementation logic (the part with the timezone bug)
- A short code block showing the e2e test that passes despite the bug
- A brief explanation of what the correct test would check
- Why the AI made the same assumption in both: the prompt/context said "schedule meetings" and the model defaulted to UTC in both the implementation and the test

**Example 2: The auth edge case (~300-400 words)**

Show an AI-generated authorization check: "users can only edit their own posts." The implementation is correct for the obvious cases. But it misses that soft-deleted users' posts should become uneditable by anyone (or should fall to admin-only). The AI writes tests for the happy path and the obvious negative case (user A can't edit user B's post). The edge case is invisible to both.

Include:
- A short code block showing the auth check
- A short code block showing the test suite — it looks thorough, covers positive and negative cases
- Point out the gap: no test for the soft-deleted user scenario
- The insight: the AI didn't think about soft deletes when writing the code, so it didn't think about them when writing the tests either

**Example 3: The pagination boundary (~200-300 words)**

Shorter example. Cursor-based pagination that breaks when the last page has exactly `pageSize` items (returns an empty next page or skips items). AI writes tests with data sets that never hit that exact boundary because the test data was generated with the same assumptions.

Include:
- Brief code showing the pagination logic
- Brief code showing the test with its data setup
- One line pointing out why the boundary is never hit

**Closing paragraph for this section:** Hammer the key insight — these aren't random bugs. They're systematic. The model's misunderstanding propagates from code to test because both were generated from the same context and the same model's interpretation of the requirements. The tests look comprehensive. The coverage numbers look good. But the blind spots are perfectly aligned.

**Step 2: Commit**

```bash
git add src/content/posts/the-same-blind-spot-twice.mdx
git commit -m "Add correlated failures section with code examples"
```

---

### Task 4: Write "But Humans Do This Too"

**Files:**
- Modify: `src/content/posts/the-same-blind-spot-twice.mdx`

**Step 1: Write the section (~500-700 words)**

Section header: `## But Humans Do This Too`

Honest engagement with the strongest counterargument. Structure:

1. **Acknowledge the objection directly** (~150 words): Yes, a human developer who misunderstands a requirement will also write wrong code and wrong tests. The "same brain, same blind spot" problem predates AI by decades. This is why testing literature has always said "don't let the developer who wrote the code write the only tests."

2. **Explain why AI makes it structurally worse** (~350-500 words). Cover these points, each as a short paragraph:
   - **Systematic vs. incidental**: Two different human engineers will typically misunderstand a spec in different ways. Their blind spots are uncorrelated. An AI model's blind spots are reproducible — same model, same context, same mistake, every time.
   - **Speed amplifies risk**: AI generates tests so fast there's no natural pause to reconsider. A human writing tests slowly sometimes catches their own bad assumptions during the tedious process of typing.
   - **Uniform confidence**: AI-generated tests look equally polished whether they're testing the right thing or the wrong thing. No hesitation markers, no `// TODO: check this edge case`. The false confidence is indistinguishable from real confidence.
   - **Coverage theater**: AI is excellent at generating tests that hit high coverage numbers. High coverage of the wrong behavior is worse than low coverage, because it creates false confidence that the code is verified.
   - **Scale**: When AI writes 50 tests in the time a human writes 5, the ratio of reviewed-to-unreviewed tests drops. Volume encourages skimming.

**Tone:** Fair and intellectually honest. Not dismissive of the counterargument. The author genuinely considered whether they were wrong about AI being different from humans here, and concluded the difference is structural, not just a matter of degree.

**Step 2: Commit**

```bash
git add src/content/posts/the-same-blind-spot-twice.mdx
git commit -m "Add humans do this too section"
```

---

### Task 5: Write "Breaking the Correlation"

**Files:**
- Modify: `src/content/posts/the-same-blind-spot-twice.mdx`

**Step 1: Write the section (~800-1,000 words)**

Section header: `## Breaking the Correlation`

Practical mitigation strategies. Each gets 2-4 paragraphs. Include brief code snippets or concrete scenarios for the most important ones.

1. **Specification separation** (~200 words): Write e2e tests from product specs / user stories / acceptance criteria, NOT from the code or the same prompt that generated the code. The test specification should be an independent document authored by someone (or something) that hasn't seen the implementation. AI can translate that spec into test code, but the spec itself must come from a different source than the implementation spec.

2. **Adversarial prompting** (~150 words): Use a separate AI session, with different context, explicitly tasked with breaking the implementation. "Here's a feature. Your job is to find what's wrong with it." Give it the requirements and the code, but not the existing tests. Different context breaks the correlation.

3. **Human-authored test cases, AI-authored test code** (~200 words): Humans write test cases in plain English (given/when/then format). AI translates to executable test code. The human owns the "what to test" decision. The AI handles the "how to automate it" work. Include a brief example showing a human-written test spec and the AI-generated Playwright test.

4. **Property-based testing** (~150 words): Define invariants that must hold regardless of implementation. "Pagination should return every item exactly once." "No user should see another user's private data." Properties test correctness at a higher level than specific test cases and are harder for correlated failures to evade.

5. **The "confused user" heuristic** (~100 words): Write e2e tests based on real user behavior patterns, not developer-imagined happy paths. What does a user with bad timezone settings do? What does a user who double-clicks submit do? What does a user who navigates directly to a URL they shouldn't access do? These scenarios break AI assumptions because they're grounded in messy human reality, not clean specifications.

**Step 2: Commit**

```bash
git add src/content/posts/the-same-blind-spot-twice.mdx
git commit -m "Add mitigation strategies section"
```

---

### Task 6: Write "Where Humans Must Stay" and closing

**Files:**
- Modify: `src/content/posts/the-same-blind-spot-twice.mdx`

**Step 1: Write "Where Humans Must Stay" (~300-500 words)**

Section header: `## Where Humans Must Stay`

Not a blanket "humans must write tests" argument. A nuanced position:

- Humans must own the specification of correct behavior — defining WHAT the system should do, not HOW to test it
- The human role in testing shifts from writing test code to: defining what correct behavior looks like, reviewing test specifications for completeness, asking "what did we miss?", validating that test scenarios reflect real user behavior
- Connect to the broader blog theme: the bottleneck moved from execution to judgment. In testing, the judgment is "what should this system do?" The execution is "automate the verification." AI is great at execution. Humans must own judgment.
- Brief callback to the opening scenario: if a human had written the test spec from the product requirements (not from the code), the timezone bug / auth edge case / pagination boundary would have been caught

**Step 2: Write the closing (~200-400 words)**

Section header: `## The Audit You're Not Running`

Challenge the reader directly. Practical call to action:

- Go look at your test suite right now
- Ask three questions:
  1. Did the same AI that wrote the code write these tests?
  2. Were the tests derived from the code's behavior, or from an independent specification of correct behavior?
  3. If you removed the code entirely and read only the tests, would you know what the system is supposed to do — or only what it currently does?
- If your tests describe implementation rather than intent, they're not tests. They're mirrors. And mirrors don't catch bugs. They reflect them back at you, green and passing.
- End sharp. Match the closing energy of the author's other posts.

**Step 3: Commit**

```bash
git add src/content/posts/the-same-blind-spot-twice.mdx
git commit -m "Add human role section and closing"
```

---

### Task 7: Review and polish the full post

**Files:**
- Modify: `src/content/posts/the-same-blind-spot-twice.mdx`

**Step 1: Read the full post end to end**

Check for:
- Flow between sections — does the argument build logically from problem to diagnosis to solution?
- Code examples are realistic, not contrived — would these bugs actually happen?
- Code examples are short enough to read in a blog context (no more than 15-20 lines each)
- Consistent tone (technical but accessible, personal, experience-grounded)
- No corporate jargon or buzzwords
- Paragraph length variety (mix of short punchy and longer explanatory)
- Strong transitions between sections
- The "But Humans Do This Too" section is genuinely fair, not a straw man
- Total length in the 3,500-4,500 word range

**Step 2: Polish**

- Tighten any sections that drag
- Strengthen any weak transitions
- Make sure code examples use consistent variable names and domain (don't switch between different imaginary apps)
- Verify code blocks have correct language annotations for syntax highlighting
- Make sure the opening scenario and the closing echo each other
- No em dashes (author's style preference from recent posts)

**Step 3: Verify it renders correctly**

Run: `cd /Users/kraigbritton/working/personal-website && npm run dev`
Visit: `http://localhost:3000/blog/the-same-blind-spot-twice`
Confirm: renders correctly, no MDX errors, code blocks display properly, reads well in the site's typography.

**Step 4: Build check**

Run: `cd /Users/kraigbritton/working/personal-website && npm run build`
Confirm: no build errors, static export succeeds.

**Step 5: Final commit**

```bash
git add src/content/posts/the-same-blind-spot-twice.mdx
git commit -m "Add blog post: The Same Blind Spot Twice"
```
