# The Process Is the Problem — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Write and publish a ~3,000-4,000 word blog post arguing that traditional engineering processes (Jira, sprint planning, estimation) are obsolete in the age of AI, and proposing a concrete replacement workflow.

**Architecture:** Single MDX file following existing blog post conventions. Export metadata object, write content in markdown. No components or imports needed.

**Tech Stack:** MDX, Next.js content pipeline (existing)

---

### Task 1: Create the MDX file with metadata

**Files:**
- Create: `src/content/posts/the-process-is-the-problem.mdx`

**Step 1: Create the file with frontmatter**

```mdx
export const metadata = {
  title: "The Process Is the Problem",
  date: "2026-02-22",
  description: "Jira, sprint planning, and story points were built for a world that doesn't exist anymore. Here's what replaces them.",
};
```

**Step 2: Verify it renders**

Run: `cd /Users/kraigbritton/working/personal-website && npm run dev`
Visit: `http://localhost:3000/blog` — confirm the post appears in the listing.
Visit: `http://localhost:3000/blog/the-process-is-the-problem` — confirm the page loads.

**Step 3: Commit**

```bash
git add src/content/posts/the-process-is-the-problem.mdx
git commit -m "Add blog post stub: The Process Is the Problem"
```

---

### Task 2: Write the opening hook

**Files:**
- Modify: `src/content/posts/the-process-is-the-problem.mdx`

**Step 1: Write the opening paragraphs**

After the metadata block, write 3-5 paragraphs (~300-500 words):
- Open with a specific, visceral moment of frustration with engineering process (Jira ticket updates, sprint planning meetings, story point estimation)
- Establish that this feeling isn't laziness — something fundamental has changed
- Set up the central argument: these processes were designed for a different world

**Style reference:** Match the opening style of `src/content/posts/just-say-you-dont-know.mdx` — personal anecdote, conversational, draws the reader in with a specific scene before broadening to the argument.

**Tone:** Frustrated, honest, first-person. The author has partially adopted new ways of working but still deals with legacy processes.

**Step 2: Commit**

```bash
git add src/content/posts/the-process-is-the-problem.mdx
git commit -m "Write opening hook for Process Is the Problem"
```

---

### Task 3: Write "These Processes Were Built for a Different Bottleneck"

**Files:**
- Modify: `src/content/posts/the-process-is-the-problem.mdx`

**Step 1: Write the section (~500-800 words)**

Section header: `## These Processes Were Built for a Different Bottleneck`

Content:
- Scrum, Jira, sprint planning, estimation were designed when the bottleneck was coordination
- Making sure the right people worked on the right things, stakeholder visibility, nothing fell through cracks
- Building software was expensive, so careful planning before committing engineering time made sense
- AI has moved the bottleneck: the hard part is now "how clearly can I define what needs to exist"
- Going from idea to working code is collapsing from days to hours
- When iteration is cheap, planning apparatus built around expensive iteration becomes dead weight
- Draw on personal experience where the old process actively slowed things down

**Step 2: Commit**

```bash
git add src/content/posts/the-process-is-the-problem.mdx
git commit -m "Add bottleneck diagnosis section"
```

---

### Task 4: Write "What's Already Dead"

**Files:**
- Modify: `src/content/posts/the-process-is-the-problem.mdx`

**Step 1: Write the section (~600-900 words)**

Section header: `## What's Already Dead`

Cover each of these with punchy, specific arguments:

1. **Story points / estimation** — When you can prototype something in an afternoon with an agent, estimating it in a planning meeting is theater. The cost of just doing the thing approaches the cost of estimating it.

2. **Jira as source of truth** — The real plan lives in a markdown file you're editing with an agent. Jira becomes a stale second copy you update for someone else's dashboard. The work and the tracking of the work have diverged.

3. **Sprint planning as a ceremony** — Two-week batches made sense when starting a task had high setup cost. When you can context-switch by handing an agent a different plan file, the sprint boundary is arbitrary.

4. **Standups as status updates** — If the plan is in a markdown file in the repo, the status is the diff. You don't need a meeting to say what you did yesterday.

Each should be 2-4 paragraphs. Personal anecdotes where possible. Sharp, not preachy.

**Step 2: Commit**

```bash
git add src/content/posts/the-process-is-the-problem.mdx
git commit -m "Add what's already dead section"
```

---

### Task 5: Write "What Actually Works Now"

**Files:**
- Modify: `src/content/posts/the-process-is-the-problem.mdx`

**Step 1: Write the section (~800-1,200 words)**

Section header: `## What Actually Works Now`

This is the prescriptive core. Propose concrete replacement patterns:

1. **Markdown-driven plans as the unit of work** — Instead of a Jira ticket, the artifact is a plan document. Describes problem, approach, acceptance criteria. Lives in the repo, version-controlled, next to the code.

2. **Agent-refined specs** — You don't write the plan alone. Back and forth with an agent to pressure-test the approach, catch edge cases, refine scope. The plan gets better through iteration, not through committee review.

3. **Ship, then coordinate** — Instead of planning in advance and executing later, bias toward getting something working and then aligning around the result. A working prototype is worth a thousand Jira comments.

4. **Async over ceremonies** — Short written updates in PRs, plan files, Slack threads replace meetings. People who need to know can read when useful to them.

Each pattern should be 3-5 paragraphs. Concrete enough that someone could try it. Honest about where the author is still figuring it out.

**Step 2: Commit**

```bash
git add src/content/posts/the-process-is-the-problem.mdx
git commit -m "Add what actually works now section"
```

---

### Task 6: Write "But What About Chaos?" and closing

**Files:**
- Modify: `src/content/posts/the-process-is-the-problem.mdx`

**Step 1: Write the chaos objection section (~400-600 words)**

Section header: `## But What About Chaos?`

- Anticipate the objection: "This is cowboy coding with extra steps"
- Acknowledge it directly — the answer isn't no process, it's process that matches how work actually happens now
- The plan document IS the coordination mechanism
- The repo IS the source of truth
- Code review still exists
- Discipline shifts from "did you follow the process" to "is the plan clear and is the code good"
- Brief manager perspective: what they lose (granular tracking, velocity charts) vs. what they gain (faster delivery, engineers not demoralized by busywork)

**Step 2: Write the closing (~200-400 words)**

Bring it back to the feeling. The frustration isn't laziness — it's the gap between how fast you CAN work and how fast the process LETS you work. Engineers who figure out the new workflow first will build circles around teams still doing two-week sprints.

End sharp — a challenge or prediction. Match the closing energy of existing posts (e.g., "Just Say You Don't Know" ends with "You're building the kind of reputation that makes people put you on their first list.").

**Step 3: Commit**

```bash
git add src/content/posts/the-process-is-the-problem.mdx
git commit -m "Add chaos objection and closing sections"
```

---

### Task 7: Review and polish the full post

**Files:**
- Modify: `src/content/posts/the-process-is-the-problem.mdx`

**Step 1: Read the full post end to end**

Check for:
- Flow between sections — does the argument build?
- Consistent tone (frustrated but constructive, personal, conversational)
- No corporate jargon or buzzwords
- Paragraph length variety (mix of short punchy and longer)
- Strong transitions between sections
- Total length in the 3,000-4,000 word range

**Step 2: Polish**

- Tighten any sections that drag
- Strengthen any weak transitions
- Make sure the opening and closing echo each other
- Verify no em dashes (author has been removing these in recent edits)

**Step 3: Verify it renders correctly**

Run: `cd /Users/kraigbritton/working/personal-website && npm run dev`
Visit: `http://localhost:3000/blog/the-process-is-the-problem`
Confirm: renders correctly, no MDX errors, reads well in the site's typography.

**Step 4: Final commit**

```bash
git add src/content/posts/the-process-is-the-problem.mdx
git commit -m "Polish blog post: The Process Is the Problem"
```
