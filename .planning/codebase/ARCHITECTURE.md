# Architecture

**Analysis Date:** 2026-03-01

## Pattern Overview

**Overall:** Static site generation (SSG) with hybrid rendering - Next.js App Router configured for static export with MDX content layer

**Key Characteristics:**
- No server-side rendering or API routes — everything must be static HTML/CSS/JS for Cloudflare Pages
- Content-driven architecture — blog posts are MDX files read at build time via dynamic imports
- Layout-based composition — single root layout with nested page routes
- Client-side interactivity only where necessary (navigation state detection)

## Layers

**Routing & Pages:**
- Purpose: Define URL routes and page entry points
- Location: `src/app/` (Next.js App Router)
- Contains: Layout wrapper, page components, dynamic routes
- Depends on: Component library, lib utilities, content
- Used by: Browser requests (statically rendered to HTML)

**Components:**
- Purpose: Reusable UI building blocks for layout, content display, and navigation
- Location: `src/components/`
- Contains: Header, Footer, BlogCard, ProjectCard (all typed React components)
- Depends on: Tailwind utility classes, Next.js navigation APIs
- Used by: Page routes and other components

**Content Layer:**
- Purpose: Manage and provide access to MDX blog posts
- Location: `src/content/posts/` (content) + `src/lib/posts.ts` (utilities)
- Contains: MDX files with inline metadata exports, post reading/sorting functions
- Depends on: Node.js filesystem, dynamic import resolution
- Used by: Blog pages, RSS generation script

**Utilities & Libraries:**
- Purpose: Shared functions, types, and data structures
- Location: `src/lib/`
- Contains: `posts.ts` (post metadata extraction, sorting, slug management), `projects.ts` (project data definitions)
- Depends on: Standard Node.js APIs
- Used by: Page routes, components, build scripts

**Styling:**
- Purpose: Define theme, animations, and global styles
- Location: `src/app/globals.css` (Tailwind + custom CSS)
- Contains: Theme variables (colors, fonts), grain overlay, stagger animation, card hover effects, prose customization
- Depends on: Tailwind CSS v4, font variables from layout
- Used by: All components via class names

## Data Flow

**Blog Post Rendering:**

1. Build time: `src/app/blog/[slug]/page.tsx` calls `generateStaticParams()` to get all post slugs from `src/lib/posts.ts`
2. For each slug: `generateMetadata()` and the page component call `getPostBySlug(slug)` to dynamically import `src/content/posts/{slug}.mdx`
3. Post component extracts `metadata` export and `default` (MDX content component) from the module
4. Metadata is used for HTML head (title, description) and page header (title, date, description)
5. MDX content is rendered inside a styled prose container with custom typography rules from `globals.css`
6. Static output: Each blog post becomes a pre-rendered HTML file in `out/blog/{slug}/index.html`

**Navigation State Detection:**

1. Client-side: `src/components/Header.tsx` uses `"use client"` directive and `usePathname()` hook
2. Reads current pathname and checks against nav link routes
3. Applies active styling (`text-accent`) to matching link
4. Re-renders only when route changes (dynamic route segments like blog slugs are handled correctly)

**Page Listing:**

1. Build time: List pages (`src/app/blog/page.tsx`, `src/app/portfolio/page.tsx`) call async library functions
2. `getAllPosts()` reads all `.mdx` files from disk, dynamically imports each, extracts metadata, sorts by date (newest first)
3. `projects` array imported from `src/lib/projects.ts`
4. Components rendered with data and statically exported
5. Each listing becomes a pre-rendered HTML file with no hydration overhead

**State Management:**

- **No persistent state** — site is purely presentational
- **Navigation state:** Client-side only, determined by URL pathname via Next.js navigation APIs
- **Build-time state:** Content is read from filesystem during build and baked into static output
- **Runtime state:** None — static HTML + CSS + JS for interactivity

## Key Abstractions

**PostMeta:**
- Purpose: Type-safe representation of blog post metadata
- Examples: `src/lib/posts.ts` exports `interface PostMeta`
- Pattern: Extracted from `export const metadata = {...}` in each MDX file, combined with slug for routing

**MDX Content Module:**
- Purpose: Wraps blog post as importable React component with metadata
- Examples: `src/content/posts/the-shrinking-room.mdx`
- Pattern: MDX file exports `metadata` object + default component; resolved at build time via dynamic import

**Link Navigation:**
- Purpose: Next.js Link component for client-side navigation without full page reload
- Examples: Used throughout `src/components/Header.tsx`, page components, BlogCard, ProjectCard
- Pattern: Wraps route paths, integrates with Header for active state detection

## Entry Points

**Root Layout:**
- Location: `src/app/layout.tsx`
- Triggers: Every page request
- Responsibilities: Sets up HTML structure, loads Google Fonts, renders global Header/Footer, wraps page content with styled container, applies font variables to body, adds grain overlay

**Home Page:**
- Location: `src/app/page.tsx`
- Triggers: GET `/`
- Responsibilities: Displays introduction, featured sections (At Home, Off the Grid, Writing), call-to-action buttons

**Blog Listing:**
- Location: `src/app/blog/page.tsx`
- Triggers: GET `/blog`
- Responsibilities: Fetches all posts, renders ordered list of BlogCard components

**Blog Post:**
- Location: `src/app/blog/[slug]/page.tsx`
- Triggers: GET `/blog/{slug}`
- Responsibilities: Generates static params for all posts, renders individual post with metadata header and styled prose content

**Other Pages:**
- `src/app/portfolio/page.tsx` — GET `/portfolio` — displays project cards (currently empty array)
- `src/app/contact/page.tsx` — GET `/contact` — displays contact links with icons

## Error Handling

**Strategy:** No explicit error handling — all code paths assume static generation success

**Patterns:**
- Build-time failures (missing MDX file, invalid metadata) surface as build errors
- Dynamic imports in `src/lib/posts.ts` use standard import resolution — missing files cause build to fail
- No try-catch blocks in post utilities — failures bubble up to Next.js build process
- At runtime: No error states — static HTML is always present (no dynamic fetching that could fail)

## Cross-Cutting Concerns

**Logging:** Not applicable — static site with no runtime logging

**Validation:** Minimal — relies on TypeScript strict mode (`tsconfig.json: strict: true`) to catch type mismatches at build time. Post metadata must match `PostMeta` interface.

**Authentication:** Not applicable — no auth, no protected routes

**Styling Consistency:** Tailwind utility classes + custom CSS classes from `globals.css`. All color references use theme variables (`--color-accent`, `--color-background`, etc.) defined in `@theme inline` block. Font usage enforced via custom Tailwind utilities like `font-[family-name:var(--font-display)]`.

---

*Architecture analysis: 2026-03-01*
