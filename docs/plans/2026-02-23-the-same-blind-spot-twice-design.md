# Blog Post Design: The Same Blind Spot Twice

## Meta

- **Title:** The Same Blind Spot Twice
- **Description:** When AI writes your code and your tests, it makes the same mistakes in both. Your green test suite might be lying to you.
- **Audience:** Engineers using AI tools to write code and tests, engineering managers evaluating AI-generated test suites
- **Tone:** Technical and direct. More code examples than previous posts. Same first-person, experience-grounded voice but with concrete demonstrations of the failure mode. Willing to challenge both the "AI can do everything" and "humans must do everything" camps.
- **Length:** ~3,500-4,500 words (longer than usual due to code examples)
- **Approach:** Demonstrate the correlated failure mode concretely, acknowledge the counterarguments honestly, provide practical mitigation strategies

## Core Thesis

When the same AI model generates both application code and tests from the same context, it creates correlated failure modes — bugs that are systematically invisible to the test suite because the tests share the same misunderstanding as the code. This is structurally different from the human version of the same problem because AI failures are systematic and reproducible, not incidental and varied. The fix isn't "humans must write all tests" — it's breaking the correlation between test authorship and code authorship.

## Structure

### Opening — The Green Suite That Lies

Concrete scenario grounded in experience: AI writes a feature, AI writes e2e tests for that feature, all tests pass, bug ships to production. The specific failure: the tests validated what the code DID, not what the code SHOULD HAVE DONE. Open with the visceral experience of seeing a green test suite and trusting it, then finding out the tests were as wrong as the code.

Set the stakes: this isn't a theoretical concern. This is happening now, on real teams, shipping real bugs behind the false confidence of comprehensive-looking test suites.

### Section: "How Correlated Failures Work"

Technical deep-dive with actual code examples. Three concrete demonstrations:

1. **The timezone assumption** — AI builds a scheduling feature assuming UTC everywhere. AI writes tests that also assume UTC. Tests pass. Users in other timezones get wrong meeting times. Show the code, show the test, show why the test passes, show what the correct test looks like.

2. **The auth edge case** — AI implements "users can only edit their own posts" but misses that soft-deleted users' posts should become uneditable by anyone. AI writes tests for the happy path and the obvious negative case. The edge case is invisible to both the code and the test because neither considered it. Show the test that looks thorough but has a gap.

3. **The pagination off-by-one** — AI implements cursor-based pagination but handles the boundary condition incorrectly when the last page has exactly `pageSize` items. AI writes pagination tests that all pass because the test data never hits that exact boundary. Show how the test data was generated with the same assumptions as the code.

Key insight to hammer: these aren't random bugs. They're systematic. The model's misunderstanding propagates from code to test because both were generated from the same context and the same model's interpretation of the requirements.

### Section: "But Humans Do This Too"

Honest engagement with the strongest counterargument. Yes, a human developer who misunderstands a requirement will also write wrong code and wrong tests. This problem predates AI by decades. The "same brain, same blind spot" phenomenon is well-known in testing literature. This is why we've always said "don't let the developer who wrote the code write the only tests."

Then explain why AI makes it structurally worse:
- **Systematic vs. incidental**: Two human engineers will typically misunderstand a spec in different ways. Their blind spots are uncorrelated. An AI model's blind spots are reproducible — same model, same context, same mistake, every time.
- **Speed amplifies risk**: AI generates tests so fast there's no natural pause to reconsider assumptions. A human writing tests manually sometimes catches their own mistakes during the slow process of typing.
- **Uniform confidence**: AI-generated tests look equally polished whether they're testing the right thing or the wrong thing. No hesitation markers, no "TODO: check this edge case" comments. The false confidence is indistinguishable from real confidence.
- **Coverage theater**: AI is excellent at generating tests that hit high coverage numbers. High coverage of the wrong behavior is worse than low coverage, because it creates false confidence.
- **Scale**: When AI writes 50 tests in the time a human writes 5, the ratio of reviewed-to-unreviewed tests drops. The sheer volume encourages skimming.

### Section: "Mitigation Strategies That Actually Work"

Practical, concrete strategies. Each with a brief code example or scenario showing it in action:

1. **Specification separation** — Write e2e tests from product specs / user stories / acceptance criteria, NOT from the code or the same prompt that generated the code. The test specification should be an independent document. AI can translate that spec into test code, but the spec itself should come from a different source than the implementation spec.

2. **Adversarial prompting** — Use a separate AI session, with different context, explicitly tasked with finding bugs and writing tests that break the implementation. "Here's a feature. Your job is to find what's wrong with it." Separate context breaks the correlation.

3. **Model diversity** — Use a different model for test generation than for code generation. Different models have different systematic biases. Not a silver bullet (models share training data), but reduces correlated failures in practice.

4. **Human-authored test cases, AI-authored test code** — Humans write test cases in plain English (given/when/then). AI translates to executable test code. The human owns the "what to test" decision. The AI handles the "how to automate it" work. Best of both worlds.

5. **Property-based testing** — Define invariants that must hold regardless of implementation. "Pagination should return every item exactly once." "No user should see another user's private data." Properties test correctness at a higher level than specific test cases and are harder for correlated failures to evade.

6. **The "confused user" heuristic** — Write e2e tests based on real user behavior patterns, not developer-imagined happy paths. What does a user with bad timezone settings do? What does a user who double-clicks the submit button do? What does a user who navigates directly to a URL they shouldn't have access to do? These scenarios break AI assumptions because they're grounded in messy human reality.

### Section: "Where Humans Must Stay"

Not a blanket "humans must write tests" argument. Instead, a nuanced position: humans must own the specification of correct behavior. The human role in testing shifts from writing test code to:
- Defining what correct behavior looks like
- Reviewing test specifications (not test code) for completeness
- Asking "what did we miss?" rather than "does this pass?"
- Validating that test scenarios reflect real user behavior, not just implemented behavior

Connect to the broader theme across the blog: the bottleneck moved from execution to judgment. In testing, the judgment is "what should this system do?" and the execution is "automate the verification." AI is great at the execution. Humans must own the judgment.

### Closing — The Audit You're Not Running

Challenge the reader directly. Practical call to action:

Go look at your test suite. Ask three questions:
1. Did the same AI that wrote the code write these tests?
2. Were the tests derived from the code's behavior, or from an independent specification of correct behavior?
3. If you removed the code entirely and read only the tests, would you know what the system is supposed to do — or only what it currently does?

If your tests describe implementation rather than intent, they're not tests. They're mirrors. And mirrors don't catch bugs. They just reflect them back at you, green and passing.

## Technical Details

### Code Examples

All code examples should be in TypeScript/React (matching the blog's tech stack) or generic enough to be language-agnostic. Use a realistic but simplified domain — e.g., a task management app with users, tasks, and permissions.

E2e test examples should use Playwright or Cypress-like syntax (familiar to the target audience).

### Diagrams

Consider one diagram showing the "correlated context" problem: same prompt/context feeding into both code generation and test generation, producing aligned blind spots. Contrast with the "separated context" approach where tests derive from independent specification.

## Key Risks

- **Being wrong about the degree of the problem**: The correlated failure mode is real, but we should be honest that AI-generated tests also catch plenty of real bugs. Don't overstate the case. The argument is that the failure mode is systematic and underappreciated, not that AI-generated tests are useless.
- **Sounding anti-AI**: The post should be clearly pro-AI-in-testing while identifying a specific, fixable structural weakness. The solutions are all "use AI better," not "stop using AI."
- **Code examples feeling contrived**: The examples need to feel realistic, like something that would actually happen on a real project. Avoid toy examples that wouldn't occur in practice.
