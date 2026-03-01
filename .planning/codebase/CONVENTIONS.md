# Coding Conventions

**Analysis Date:** 2026-03-01

## Naming Patterns

**Files:**
- PascalCase for React components: `Header.tsx`, `Footer.tsx`, `BlogCard.tsx`, `ProjectCard.tsx`
- camelCase for utility/library files: `posts.ts`, `projects.ts`
- Page files use standard Next.js patterns: `page.tsx`, `layout.tsx`, `[slug]` for dynamic segments
- CSS modules: `globals.css` (no separate module files, single global stylesheet)

**Functions:**
- camelCase for all function names: `getAllPosts()`, `getPostBySlug()`, `formatDate()`
- Exported function pattern: `export function getAllPostSlugs(): string[]`
- Async functions clearly marked with `async` keyword
- Default exports for React components: `export default function Header()`

**Variables:**
- camelCase for constants and variables: `postsDir`, `navLinks`, `socialLinks`, `contacts`
- Object properties use camelCase: `{ href, label, display, icon }`
- Destructured imports: `import { getAllPosts } from "@/lib/posts"`

**Types:**
- PascalCase for interface names: `PostMeta`, `Project`
- Export interfaces for reusable types: `export interface PostMeta { ... }`
- Props interfaces inline or as separate declarations: `{ post: PostMeta }` in function signature
- Next.js metadata type: `export const metadata: Metadata = { ... }`

## Code Style

**Formatting:**
- ESLint 9 with Next.js core rules and TypeScript support
- Config: `eslint.config.mjs` using `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- No Prettier config detected; formatting handled by ESLint
- 2-space indentation (standard Next.js)

**Linting:**
- ESLint enforces Next.js best practices and Web Vitals compliance
- TypeScript strict mode enabled in `tsconfig.json`
- Commands: `npm run lint` runs ESLint checks

## Import Organization

**Order:**
1. Built-in/third-party imports (`import fs from "fs"`, `import Link from "next/link"`)
2. Next.js-specific imports (`import type { Metadata } from "next"`)
3. Local utility/lib imports (`import { getAllPosts } from "@/lib/posts"`)
4. Component imports (`import Header from "@/components/Header"`)
5. CSS imports (`import "./globals.css"`)

**Path Aliases:**
- `@/` maps to `src/` directory (defined in `tsconfig.json`)
- Usage pattern: `import { formatDate } from "@/lib/posts"` not relative paths
- Example from `src/app/blog/page.tsx`: `import { getAllPosts } from "@/lib/posts"`

## Error Handling

**Patterns:**
- No explicit try-catch blocks detected in source files
- Filesystem operations wrapped in utility functions that handle results directly
- Dynamic imports (`await import(...)`) used for MDX content loading without error handling wrappers
- Component-level error handling deferred to Next.js error boundaries
- Functions assume success path: `getPostBySlug()` directly returns result without error type

## Logging

**Framework:** No logging framework detected

**Patterns:**
- `console` methods not used in source code
- Minimal debugging output required due to static site nature
- No observability/logging infrastructure in place

## Comments

**When to Comment:**
- Minimal comments in codebase
- Comments used for section headers in CSS: `/* ── Base ────────────────────────── */`
- Code is self-documenting through clear naming and TypeScript types
- No JSDoc comments detected

**JSDoc/TSDoc:**
- Not used in this codebase
- TypeScript interfaces serve as documentation

## Function Design

**Size:** Functions are small and focused
- `formatDate()`: 8 lines (single responsibility)
- `getAllPostSlugs()`: 6 lines (single responsibility)
- Helper functions in `lib/` are 5-10 lines typically

**Parameters:**
- Minimal parameters, often destructured objects
- Pattern: `function BlogCard({ post }: { post: PostMeta })`
- Async functions receive `params` prop (Next.js pattern)
- No more than 2-3 parameters per function

**Return Values:**
- Explicit return types on all exported functions
- Async functions return `Promise<Type>`: `Promise<PostMeta[]>`
- Consistent structure: `{ meta, default: Content }` for MDX modules

## Module Design

**Exports:**
- Default export for React components
- Named exports for utilities: `export function getAllPosts()`
- Interface exports: `export interface PostMeta`
- Mixed exports pattern when component + type needed: `export interface Project`, then `export const projects: Project[] = []`

**Barrel Files:**
- No barrel files used
- Direct imports from source files: `import { formatDate } from "@/lib/posts"`

## Tailwind CSS Patterns

**Styling Approach:**
- Utility-first with Tailwind CSS v4 via `@tailwindcss/postcss`
- Custom theme defined via `@theme inline` in `globals.css`
- Custom CSS classes for complex animations/effects: `.grain`, `.stagger`, `.accent-line`, `.card-hover`
- No CSS modules; all Tailwind + global CSS

**Custom Classes:**
- `.grain` - Fixed grain texture overlay
- `.stagger` - Staggered child animation with nth-child delays
- `.accent-line` - Gradient line decoration (0-100% opacity from left to right)
- `.card-hover` - Card glow effect on hover with ::before pseudo-element
- `.page-enter` - Page entrance animation
- `.stagger-in` - Child entrance animation keyframes

**Theme Variables:**
- Colors: `--color-background`, `--color-foreground`, `--color-muted`, `--color-accent`, `--color-surface`, `--color-border`, `--color-border-light`
- Fonts: `--font-sans`, `--font-display`, `--font-mono`
- Applied via `font-[family-name:var(--font-display)]` in Tailwind

---

*Convention analysis: 2026-03-01*
