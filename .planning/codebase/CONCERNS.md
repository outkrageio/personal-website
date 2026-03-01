# Codebase Concerns

**Analysis Date:** 2026-03-01

## Tech Debt

**Empty projects array:**
- Issue: `src/lib/projects.ts` exports an empty array, but portfolio page (`src/app/portfolio/page.tsx`) maps over it expecting populated data
- Files: `src/lib/projects.ts`, `src/app/portfolio/page.tsx`
- Impact: Portfolio page renders with zero projects despite having a dedicated page and ProjectCard component (`src/components/ProjectCard.tsx`). The portfolio section exists but is non-functional
- Fix approach: Either populate the projects array with actual project data or create a dynamic content system similar to blog posts (read from `src/content/projects/` MDX files)

**Hardcoded contact information:**
- Issue: Contact details and social links are hardcoded inline in component files instead of centralized
- Files: `src/app/contact/page.tsx` (contacts array), `src/components/Footer.tsx` (socialLinks array)
- Impact: Updating contact info requires editing multiple component files; prone to inconsistency (both have GitHub links but defined separately)
- Fix approach: Extract to `src/lib/contact.ts` or `src/content/` and import from single source of truth

**Regex-based MDX metadata extraction:**
- Issue: `scripts/generate-rss.mjs` extracts metadata using regex pattern matching instead of proper parsing
- Files: `scripts/generate-rss.mjs` (lines 14-24)
- Impact: Fragile to formatting changes; if metadata format in MDX posts changes slightly, RSS generation silently fails with incomplete data (line 24 filters out posts without complete metadata)
- Fix approach: Use proper MDX/AST parsing or a YAML frontmatter approach, or unify with the TypeScript-based post loading in `src/lib/posts.ts`

**Navigation link management duplication:**
- Issue: Navigation links hardcoded in `src/components/Header.tsx` (navLinks array on line 6)
- Files: `src/components/Header.tsx`
- Impact: Adding new routes requires modifying the Header component; no centralized routing configuration; active link detection uses string matching that could break if routes change
- Fix approach: Extract to `src/lib/routes.ts` for DRY principle and easier maintenance

## Known Bugs

**Navigation active state logic edge case:**
- Issue: `src/components/Header.tsx` line 28 uses `pathname.startsWith(href)` for active link detection
- Files: `src/components/Header.tsx`
- Symptoms: If a route like `/blog-archive` were added, the blog link (`/blog`) would incorrectly activate as "active" due to string prefix matching
- Trigger: Add any route starting with an existing route path
- Workaround: Currently no routes with overlapping prefixes exist, so this is latent but not active
- Fix approach: Use exact path matching with segment-aware comparison instead of `startsWith`

**Stagger animation hard limit:**
- Issue: `src/app/globals.css` stagger animation supports only 10 child elements (lines 68-77)
- Files: `src/app/globals.css`
- Symptoms: On pages with more than 10 direct children within a `.stagger` container, elements 11+ will not animate in; they appear immediately
- Trigger: Any `.stagger` container with >10 direct children
- Workaround: Keep page sections to <10 items or restructure markup
- Fix approach: Generate stagger delays dynamically with CSS or use CSS `nth-child(n)` selector syntax for unlimited support

## Security Considerations

**Email address exposed in contact page:**
- Risk: Primary contact email `kraigbritton@gmail.com` is hardcoded in plain text in HTML and easily harvested by email scrapers
- Files: `src/app/contact/page.tsx` (line 10), `src/components/Footer.tsx` (potentially other links)
- Current mitigation: None; email is fully visible in page source and markup
- Recommendations:
  - For personal site this may be acceptable, but consider mailto link obfuscation if spam becomes an issue
  - Monitor email for spam and consider dedicated contact form with server-side email validation
  - Consider email masking services (e.g., SimpleLogin) for public exposure

**No input validation on contact form:**
- Risk: Contact page lacks a dedicated form handler; no server-side validation
- Files: `src/app/contact/page.tsx`
- Current mitigation: Static site deployment means no backend attack surface
- Recommendations: If contact functionality is added via form, implement server-side validation before any data processing

## Performance Bottlenecks

**Dynamic imports on every blog page render:**
- Problem: `src/lib/posts.ts` uses dynamic `import()` to load MDX files at runtime (line 30)
- Files: `src/lib/posts.ts`, `src/app/blog/[slug]/page.tsx`
- Cause: Each blog post page render triggers an async import of the full MDX module, which includes parsing and compiling MDX content
- Improvement path: Pre-compile and cache posts at build time; consider using `next/dynamic` with `ssr: false` if needed, or implement post file caching layer

**Filesystem metadata extraction on every build:**
- Problem: `scripts/generate-rss.mjs` reads all files from disk and applies regex extraction on each build
- Files: `scripts/generate-rss.mjs`
- Cause: No caching; all post files are re-read and re-parsed during every build even if unchanged
- Improvement path: Implement build-time caching, or unify with TypeScript post loading system that already has metadata

**No service worker or offline support:**
- Problem: Site requires network access to load; no offline caching
- Cause: Static export doesn't include service worker registration
- Improvement path: Add manifest.json and service worker for offline reading of blog posts

## Fragile Areas

**Blog post metadata extraction:**
- Files: `src/lib/posts.ts` (line 31), `scripts/generate-rss.mjs` (lines 14-26)
- Why fragile: Two separate implementations extract metadata in different ways:
  - `posts.ts` relies on runtime MDX import accessing `mod.metadata` property
  - `generate-rss.mjs` uses regex to find metadata in file text
  - If a post's metadata format changes, one system may fail silently
- Safe modification: Always test both blog page load AND RSS generation after metadata changes; consider unifying both systems to use same extraction method
- Test coverage: No explicit tests for metadata extraction; relies on build-time discovery

**Prose styling and Tailwind typography plugin:**
- Files: `src/app/globals.css` (lines 48-55 in blog post page), `src/app/blog/[slug]/page.tsx` (lines 48)
- Why fragile: Prose styling depends on specific class structure in blog post template; changes to heading levels, list formatting, or code block wrapping in MDX could break visual consistency
- Safe modification: Test visual rendering of blog posts; avoid changing prose plugin version without checking all post rendering
- Test coverage: No visual regression tests; relies on manual inspection

**MDX components configuration:**
- Files: `mdx-components.tsx`
- Why fragile: File is currently a passthrough with no custom components; if content requires custom MDX components (e.g., callouts, images, code blocks), adding them requires careful integration
- Safe modification: Document any custom components used in MDX; keep component registry in sync with content
- Test coverage: No tests for MDX component rendering

## Scaling Limits

**Single directory post storage:**
- Current capacity: Filesystem can handle ~1000s of files without performance degradation
- Limit: Blog post discovery uses `fs.readdirSync()` which loads all filenames into memory; with 500+ posts, this becomes noticeable
- Scaling path: Implement post indexing system or categorize posts into subdirectories (e.g., `src/content/posts/2024/`, `src/content/posts/2025/`)

**Client-side navigation on header:**
- Current capacity: Header uses `usePathname()` client-side hook in static export (no server state)
- Limit: Active link detection works fine for current route count; adding 50+ routes would still work but header would be unmaintainable
- Scaling path: Extract navigation to data-driven config; consider route guards or middleware if complex navigation logic needed

**Build-time post processing:**
- Current capacity: Post compilation happens at build time; reasonable for 10-50 posts
- Limit: Each post is dynamically imported as separate module; beyond ~100 posts, build time could extend significantly
- Scaling path: Batch post compilation or use incremental static generation if upgraded to non-static export

## Dependencies at Risk

**Next.js 16 static export mode:**
- Risk: Next.js periodically deprecates or changes static export APIs; v16 may have breaking changes in future versions
- Impact: Major version upgrade could require rewriting build configuration and post loading system
- Migration plan: Monitor Next.js changelog; consider migrating to `@next/metadata` API; test major version upgrades in separate branch before committing

**MDX loader stability:**
- Risk: `@next/mdx` (v3.1.1) and `@mdx-js/loader` (v3.1.1) are independent projects with different release cycles
- Impact: Version mismatches could cause build failures; breaking changes in MDX API could require post format changes
- Migration plan: Lock versions explicitly; test upgrades; document required post metadata format

**Tailwind CSS v4 breaking changes:**
- Risk: Tailwind v4 introduced significant changes to theme configuration and plugin system
- Impact: Current `@theme inline` syntax may not be compatible with future versions
- Migration plan: Document theme config rationale; plan for potential refactor to `tailwind.config.ts` format if syntax is deprecated

## Missing Critical Features

**No build error handling for missing posts:**
- Problem: If dynamic import in `getPostBySlug()` fails, page renders error state without clear messaging
- Blocks: Cannot debug missing blog post builds
- Fix: Add error boundary and logging to `src/app/blog/[slug]/page.tsx` generateMetadata and default export

**No 404 page for invalid blog slugs:**
- Problem: `generateStaticParams()` only generates params for existing posts, but invalid slugs still attempt dynamic import
- Blocks: Graceful error handling for typos in blog URLs
- Fix: Implement `not-found.tsx` in blog directory or add explicit validation in page component

**No sitemap generation:**
- Problem: No `sitemap.xml` or `robots.txt` for SEO
- Blocks: Search engine optimization; no explicit crawl instructions
- Fix: Add sitemap generation to build script alongside RSS generation

**No canonical URL tags:**
- Problem: Blog posts lack `rel="canonical"` meta tags
- Blocks: Risk of duplicate content issues if posts are syndicated
- Fix: Add canonical URL to metadata in `generateMetadata()` function

## Test Coverage Gaps

**No automated tests:**
- What's not tested: All functionality relies on manual testing and runtime discovery
- Files: Entire `src/` directory has zero test coverage
- Risk: Changes to post metadata format, routing, or component props could break silently; only discovered during manual verification or production deployment
- Priority: High - Given this is a personal portfolio that represents professional work, test coverage would demonstrate quality engineering practices

**No build-time validation:**
- What's not tested: Post metadata structure, date format compliance, required fields
- Risk: Invalid posts (missing title, incorrect date format, missing description) are discovered at runtime instead of build time
- Priority: Medium - Could add schema validation to `src/lib/posts.ts`

**No visual regression testing:**
- What's not tested: CSS changes, prose rendering, responsive design
- Risk: Tailwind upgrades or CSS changes could break visual layout unexpectedly
- Priority: Medium - Could use Playwright or Cypress for screenshot comparison

**No integration testing of RSS generation:**
- What's not tested: RSS feed validity, proper XML escaping, feed structure
- Files: `scripts/generate-rss.mjs`
- Risk: Feed could be malformed while page builds successfully; discovered only by feed readers or validators
- Priority: Low - Could validate output with RSS validator

---

*Concerns audit: 2026-03-01*
