# Blog Post Design: The Process Is the Problem

## Meta

- **Title:** The Process Is the Problem
- **Description:** Jira, sprint planning, and story points were built for a world that doesn't exist anymore. Here's what replaces them.
- **Audience:** IC engineers frustrated with legacy processes in the age of AI
- **Tone:** Frustrated but constructive. Personal, opinionated, conversational. Honest about partial experience.
- **Length:** ~3,000-4,000 words
- **Approach:** Diagnose why current processes are broken, then propose a concrete alternative workflow

## Structure

### Opening Hook

A specific moment of frustration — updating a Jira ticket that took longer than the code, or sitting in a sprint planning session estimating a task an agent could finish before the meeting ends. Visceral, personal, every IC recognizes it.

First few paragraphs establish: these processes feel wrong now, and it's not laziness — something fundamental changed about how the work gets done.

### Section: "These Processes Were Built for a Different Bottleneck"

The diagnosis. Scrum/Jira/estimation were designed when the bottleneck was coordination — right people on right things, nothing through cracks, stakeholder visibility. Building software was expensive, so you planned carefully before committing engineering time.

AI moved the bottleneck. The hard part is now "how clearly can I define what needs to exist," not "who's doing what." Going from idea to working code is collapsing from days to hours. When iteration is cheap, the planning apparatus built around expensive iteration becomes dead weight.

Draw on personal experience — where the shift has been felt, where old process actively slowed things down.

### Section: "What's Already Dead"

Punchy arguments against specific ceremonies:

- **Story points / estimation** — Prototyping in an afternoon with an agent makes estimation theater. Cost of doing approaches cost of estimating.
- **Jira as source of truth** — Real plan lives in markdown edited with an agent. Jira is a stale second copy updated for someone else's dashboard.
- **Sprint planning** — Two-week batches made sense with high setup cost. Agent context-switching makes sprint boundaries arbitrary.
- **Standups as status updates** — If the plan is in a markdown file in the repo, the status is the diff.

### Section: "What Actually Works Now"

The concrete replacement — patterns, not a rigid framework:

- **Markdown-driven plans as the unit of work** — Plan document describes problem, approach, acceptance criteria. Lives in the repo, version-controlled, next to the code. Replaces Jira tickets.
- **Agent-refined specs** — Back and forth with an agent to pressure-test approach, catch edge cases, refine scope. Plan improves through iteration, not committee review.
- **Ship, then coordinate** — Bias toward getting something working, then align around the result. Working prototype > thousand Jira comments.
- **Async over ceremonies** — Written updates in PRs, plan files, Slack threads replace meetings. People read when useful to them.

### Section: "But What About Chaos?"

Anticipate the objection: "This is cowboy coding with extra steps." Acknowledge directly. The answer isn't no process — it's process that matches how work actually happens now. The plan document IS the coordination mechanism. The repo IS the source of truth. Code review still exists. Discipline shifts from "did you follow the process" to "is the plan clear and is the code good."

Brief manager perspective — what they lose (granular tracking, velocity charts) vs. what they gain (faster delivery, engineers not demoralized by busywork).

### Closing

Bring it back to the feeling. Frustration isn't laziness — it's the gap between how fast you CAN work and how fast the process LETS you work. Engineers who figure out the new workflow first will build circles around teams still doing two-week sprints. End sharp — challenge or prediction.
