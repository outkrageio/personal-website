# Codebase Structure

**Analysis Date:** 2026-03-01

## Directory Layout

```
personal-website/
├── .planning/
│   └── codebase/              # GSD codebase analysis documents
├── docs/
│   └── plans/                 # Design docs and implementation plans for blog posts
├── scripts/
│   └── generate-rss.mjs       # Build script to generate RSS feed from posts
├── src/
│   ├── app/                   # Next.js App Router pages and layout
│   │   ├── layout.tsx         # Root layout (fonts, metadata, Header/Footer wrapper)
│   │   ├── globals.css        # Tailwind theme, custom animations, prose styles
│   │   ├── page.tsx           # Home page (/)
│   │   ├── blog/
│   │   │   ├── page.tsx       # Blog listing (/blog)
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Individual post (/blog/{slug})
│   │   ├── portfolio/
│   │   │   └── page.tsx       # Portfolio listing (/portfolio)
│   │   └── contact/
│   │       └── page.tsx       # Contact page (/contact)
│   ├── components/            # Reusable React components
│   │   ├── Header.tsx         # Navigation header with active link detection
│   │   ├── Footer.tsx         # Footer with social links
│   │   ├── BlogCard.tsx       # Blog post preview card
│   │   └── ProjectCard.tsx    # Portfolio project card
│   ├── content/
│   │   └── posts/             # MDX blog post files
│   │       ├── the-shrinking-room.mdx
│   │       ├── the-process-is-the-problem.mdx
│   │       ├── the-same-blind-spot-twice.mdx
│   │       ├── the-shepherd-and-the-sheep.mdx
│   │       ├── just-say-you-dont-know.mdx
│   │       └── dont-build-agents-build-skills.mdx
│   └── lib/                   # Shared utilities and data
│       ├── posts.ts           # Post reading/sorting/filtering utilities
│       └── projects.ts        # Project data definitions
├── .env                       # Environment variables (committed for static site)
├── next.config.mjs            # Next.js configuration (static export, MDX)
├── tsconfig.json              # TypeScript configuration
├── postcss.config.mjs         # PostCSS configuration
├── wrangler.toml              # Cloudflare Pages deployment config
├── package.json               # Dependencies and scripts
└── mdx-components.tsx         # MDX component customization (passthrough)
```

## Directory Purposes

**src/app:**
- Purpose: Next.js App Router pages — defines URL routes and renders page content
- Contains: React Server Components (default) and one Client Component (Header)
- Key files: `layout.tsx` (root wrapper), `globals.css` (theme/animations), page files

**src/components:**
- Purpose: Shared React components used across pages
- Contains: Layout components (Header, Footer), content display components (BlogCard, ProjectCard)
- Key files: All typed with TypeScript, use Tailwind classes, imported by page components

**src/content/posts:**
- Purpose: Blog post content in MDX format
- Contains: `.mdx` files with inline metadata exports and markdown content
- Key files: Six published posts as of 2026-03-01

**src/lib:**
- Purpose: Reusable utilities, data structures, and helpers
- Contains: Post metadata handling, project definitions
- Key files: `posts.ts` (filesystem-based post management), `projects.ts` (empty array for future projects)

## Key File Locations

**Entry Points:**
- `src/app/layout.tsx`: Root layout — wraps all pages, loads fonts, includes Header/Footer
- `src/app/page.tsx`: Home page (/)
- `src/app/blog/page.tsx`: Blog listing (/blog)
- `src/app/blog/[slug]/page.tsx`: Individual blog post (/blog/{slug})
- `src/app/portfolio/page.tsx`: Portfolio page (/portfolio)
- `src/app/contact/page.tsx`: Contact page (/contact)

**Configuration:**
- `next.config.mjs`: Enables static export (`output: "export"`), MDX support, image optimization disabled
- `tsconfig.json`: Strict mode, path alias `@/` → `src/`
- `postcss.config.mjs`: Tailwind CSS integration
- `wrangler.toml`: Cloudflare Pages deployment settings
- `package.json`: Dependencies (Next.js 16, React 19, Tailwind CSS 4)

**Core Logic:**
- `src/lib/posts.ts`: Reads `.mdx` files from `src/content/posts/`, extracts metadata, generates slugs, sorts chronologically
- `src/lib/projects.ts`: Defines `Project` interface and empty projects array
- `src/app/globals.css`: Tailwind theme setup, color variables, custom animations (grain overlay, stagger, card hover, accent line)

**Styling:**
- `src/app/globals.css`: Only CSS file — contains all custom styles, theme variables, Tailwind directives
- Color palette defined as CSS custom properties in `@theme inline` block
- Font variables set in `src/app/layout.tsx` and used throughout components

**Content:**
- `src/content/posts/*.mdx`: Each file exports `metadata = { title, date, description }` and default MDX component
- Filename becomes slug (e.g., `the-shrinking-room.mdx` → `/blog/the-shrinking-room`)

**Build & Deployment:**
- `scripts/generate-rss.mjs`: Post-build script to create RSS feed from post metadata
- `out/`: Build output directory (static export), deployed to Cloudflare Pages

## Naming Conventions

**Files:**
- **Pages:** lowercase with hyphens (`blog/page.tsx`, `portfolio/page.tsx`), dynamic routes in brackets (`[slug]/page.tsx`)
- **Components:** PascalCase matching export name (`Header.tsx`, `BlogCard.tsx`)
- **Content (MDX):** lowercase with hyphens (`the-shrinking-room.mdx`)
- **Utilities:** lowercase with descriptive names (`posts.ts`, `projects.ts`)

**Directories:**
- **App routes:** lowercase matching path segments (`blog/`, `contact/`, `portfolio/`)
- **Dynamic routes:** bracketed parameter names (`[slug]/`)
- **Reusable:** plural for collections (`components/`, `content/posts/`, `scripts/`)
- **Internal utilities:** lowercase (`lib/`)

**Variables & Functions:**
- **React components:** PascalCase (`Header`, `BlogCard`, `BlogPage`)
- **Functions:** camelCase (`getAllPosts`, `getPostBySlug`, `formatDate`)
- **Types & Interfaces:** PascalCase (`PostMeta`, `Project`)
- **CSS classes:** lowercase with hyphens (`card-hover`, `accent-line`, `stagger`)
- **CSS custom properties:** kebab-case prefixed with double dash (`--color-accent`, `--font-display`)

## Where to Add New Code

**New Blog Post:**
1. Create `src/content/posts/{slug}.mdx`
2. Add `export const metadata = { title, date: "YYYY-MM-DD", description }`
3. Write MDX content below metadata
4. (Optional) Create design doc in `docs/plans/{slug}-design.md` before writing
5. Run `npm run build` to generate static HTML + RSS feed

**New Page Route:**
1. Create directory in `src/app/{route-name}/`
2. Create `page.tsx` with React Server Component by default
3. Use `"use client"` only if accessing browser APIs (like `usePathname()` in Header)
4. Export `metadata` for page title/description
5. Import and use shared components from `src/components/`
6. Page is automatically routed and statically generated

**New Component:**
1. Create `src/components/{ComponentName}.tsx`
2. Export default function component with typed props (TypeScript interface)
3. Use Tailwind utility classes for styling
4. Use custom CSS classes from `globals.css` for complex styles (`.card-hover`, `.stagger`, etc.)
5. Mark as Server Component by default; add `"use client"` only if using client-side APIs
6. Import and use in page components

**New Utility Function:**
1. Add to appropriate file in `src/lib/` (or create new `{feature}.ts`)
2. Export typed functions and interfaces
3. Document with JSDoc comments if complex
4. Import and use in components/pages via `@/lib/{feature}` path alias

**Portfolio Projects:**
1. Import `projects` array from `src/lib/projects.ts`
2. Add `Project` objects to array (or fetch from external data source at build time)
3. Component in `src/app/portfolio/page.tsx` maps over projects and renders `ProjectCard`

**Styling Updates:**
- Global styles: Add to `src/app/globals.css`
- New theme colors: Add to `@theme inline` block in `globals.css`
- New animations: Define `@keyframes` in `globals.css`
- Component-specific: Use Tailwind classes in component JSX

## Special Directories

**docs/plans/:**
- Purpose: Design documents and implementation plans for blog posts
- Generated: No — created manually before writing posts
- Committed: Yes — used for plan-first development approach
- Format: Markdown with title, outline, key points

**scripts/:**
- Purpose: Build-time scripts (run after `next build`)
- Generated: No — hand-written utilities
- Committed: Yes — required for RSS feed generation
- Content: `generate-rss.mjs` reads posts and creates `out/feed.xml`

**out/:**
- Purpose: Static export output — HTML, CSS, JS ready for deployment
- Generated: Yes — created by `npm run build`
- Committed: No — gitignored
- Deployment: Entire `out/` directory deployed to Cloudflare Pages

**.next/:**
- Purpose: Next.js build cache and type definitions
- Generated: Yes — created by build process
- Committed: No — gitignored
- Contents: Compiled modules, type artifacts, intermediate build data

**node_modules/:**
- Purpose: Installed dependencies
- Generated: Yes — created by `npm install`
- Committed: No — gitignored
- Managed by: `package-lock.json`

---

*Structure analysis: 2026-03-01*
