# Testing Patterns

**Analysis Date:** 2026-03-01

## Test Framework

**Status:** No testing framework configured

- No Jest, Vitest, Playwright, or Cypress configuration detected
- No test dependencies in `package.json`
- No test files in source directory (`src/`)

**Why Not Tested:**
- Static site deployment via Cloudflare Pages
- Build-time rendering only (Next.js static export)
- Limited dynamic behavior (filesystem reads, MDX imports)
- Content-driven architecture without runtime state

## Run Commands

```bash
npm run lint              # Run ESLint checks (only code quality tool)
```

Testing-related commands are not configured.

## Test Coverage

**Requirements:** Not enforced

**Current Coverage:** 0%
- No unit tests exist
- No integration tests exist
- No E2E tests exist

## What Is Not Tested

**Filesystem Operations:**
- `getAllPostSlugs()` reads from `src/content/posts/` directory
- `getPostBySlug()` uses dynamic `import()` to load MDX files
- No validation of post metadata structure
- Files: `src/lib/posts.ts`

**Dynamic Routes:**
- Blog post slug generation via `generateStaticParams()` not verified
- Metadata generation not tested
- File: `src/app/blog/[slug]/page.tsx`

**Component Rendering:**
- React components not tested:
  - `src/components/Header.tsx` - Active link detection
  - `src/components/BlogCard.tsx` - Post card rendering
  - `src/components/ProjectCard.tsx` - Project card rendering
  - `src/components/Footer.tsx` - Footer layout
  - `src/app/blog/page.tsx` - Post listing
  - `src/app/page.tsx` - Home page

**Data Utilities:**
- `formatDate()` not tested (critical for date display)
- Date formatting logic: `new Date(dateStr + "T00:00:00").toLocaleDateString(...)`

**Type Safety:**
- No runtime validation of post metadata
- Interfaces defined but not validated: `PostMeta`, `Project`
- MDX import structure assumed but not verified

## Risk Assessment: Untested Areas

### High Risk

**Post Loading Pipeline:**
- Files: `src/lib/posts.ts`, `src/app/blog/[slug]/page.tsx`
- What's untested: Complete flow from MDX file → parsed metadata → rendered page
- Risk: A single malformed post could break entire blog
- Failure mode: Missing `metadata` export in MDX file → `undefined.title` error at runtime

**Date Formatting:**
- Files: `src/lib/posts.ts`
- What's untested: Date parsing and formatting edge cases
- Risk: Invalid dates in post metadata (e.g., `"2026-13-45"`) could render incorrectly
- Failure mode: `new Date()` produces invalid date, `toLocaleDateString()` returns "Invalid Date"

**Navigation Links:**
- Files: `src/components/Header.tsx`
- What's untested: Active link detection logic
- Risk: Incorrect active state based on pathname matching
- Failure mode: Active link highlighting fails for dynamic routes like `/blog/[slug]`

### Medium Risk

**Component Props:**
- Files: All component files
- What's untested: Type safety at runtime
- Risk: Props passed incorrectly could break rendering
- Failure mode: Silent failures due to missing optional properties

**Static Generation:**
- Files: `src/app/blog/[slug]/page.tsx`
- What's untested: `generateStaticParams()` completeness
- Risk: Some blog posts might not generate static pages
- Failure mode: 404s for existing posts in production

### Low Risk

**Styling/CSS:**
- Files: `src/app/globals.css`
- What's untested: Visual rendering (animation timing, gradients)
- Risk: Low - CSS errors won't crash the app
- Failure mode: Visual inconsistencies

## Testing Recommendations

### Immediate Priority (High Risk)

**1. Post Loading Tests**
```typescript
// Test: getAllPostSlugs returns actual MDX files
// Test: getPostBySlug loads metadata correctly
// Test: getPostBySlug returns both meta and default component
// Test: getAllPosts sorts by date descending
```

**2. Date Formatting Tests**
```typescript
// Test: formatDate("2026-03-01") → "Mar 1, 2026"
// Test: formatDate handles year boundary dates
// Test: formatDate handles leap years
// Test: formatDate rejects invalid dates
```

**3. Navigation Active State Tests**
```typescript
// Test: pathname="/" matches href="/"
// Test: pathname="/blog" matches href="/blog"
// Test: pathname="/blog/post-slug" matches href="/blog"
// Test: pathname="/contact" doesn't match href="/blog"
```

### Medium Priority

**Component Props & Rendering**
```typescript
// Test: BlogCard renders with PostMeta
// Test: ProjectCard renders with Project
// Test: Header renders all nav links
// Test: Footer renders social links
```

**Static Generation**
```typescript
// Test: generateStaticParams returns all post slugs
// Test: generateMetadata correctly extracts post info
// Test: generateStaticParams never returns duplicates
```

### Implementation Notes

**Recommended Tools:**
- Vitest for unit testing (lightweight, fast)
- React Testing Library for component testing
- No E2E testing needed (static site, no runtime interactions)

**Test Location Pattern:**
- `src/lib/__tests__/posts.test.ts` for utilities
- `src/components/__tests__/Header.test.tsx` for components
- `src/app/__tests__/[slug].test.ts` for route generation

---

*Testing analysis: 2026-03-01*
