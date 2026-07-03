# CLAUDE.md

## Project Overview

Personal website and blog for Kraig Britton. Built with Next.js, styled with Tailwind CSS, deployed as a static site on Cloudflare Pages.

**Live site:** Deployed via Cloudflare Pages
**Repo:** git@github.com:outkrageio/personal-website.git

## Tech Stack

- **Framework:** Next.js 16 (App Router) with static export (`output: "export"`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with `@tailwindcss/typography` for prose
- **Content:** MDX via `@next/mdx` — blog posts live in `src/content/posts/`
- **Deployment:** Cloudflare Pages via Wrangler — output dir is `out/`

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build (static export to out/)
npm run lint      # ESLint
```

Deploy: `npx wrangler pages deploy out/ --project-name personal-website`

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata, Header/Footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind theme, custom animations, prose styles
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/page.tsx # Individual blog post (dynamic route)
│   ├── contact/page.tsx
│   └── portfolio/page.tsx
├── components/             # Shared React components
│   ├── Header.tsx          # Client component — nav with active link detection
│   ├── Footer.tsx          # Server component — social links
│   ├── BlogCard.tsx        # Blog post preview card
│   └── ProjectCard.tsx     # Portfolio project card
├── content/posts/          # MDX blog posts
└── lib/
    ├── posts.ts            # Post reading/sorting utilities (filesystem-based)
    └── projects.ts         # Project data (currently empty array)
docs/plans/                 # Design docs and implementation plans for blog posts
```

## Key Conventions

### Blog Posts
- Written in MDX at `src/content/posts/<slug>.mdx`
- Export metadata inline: `export const metadata = { title, date, description }`
- Date format: `YYYY-MM-DD`
- Posts are sorted newest-first
- Follow a plan-first process: create a design doc in `docs/plans/` before writing the post

### Components
- Server components by default; only use `"use client"` when client APIs are needed
- Props typed with TypeScript interfaces
- Styling via Tailwind utility classes + custom CSS classes from `globals.css`

### Styling
- Dark theme with warm color palette defined via `@theme inline` in `globals.css`
- Key colors: `background` (#0c0b0a), `foreground` (#e8e4de), `accent` (#c49a6c), `muted` (#8a8478)
- Three fonts: Instrument Serif (display/headings), DM Sans (body), JetBrains Mono (code)
- Custom effects: grain overlay, page-enter animation, stagger animation, card-hover glow, accent-line gradient

### Imports
- Use `@/` path alias (maps to `src/`)
- Example: `import { getAllPosts } from "@/lib/posts"`

## Architecture Notes

- **Static export only** — no server-side rendering, no API routes. Everything must work as static HTML/JS/CSS for Cloudflare Pages.
- **No image optimization** — `images.unoptimized: true` since static export doesn't support Next.js image optimization.
- **Filesystem-based content** — blog posts are read from the filesystem at build time via dynamic imports. No CMS or database.
- **MDX page extensions** — `pageExtensions: ["ts", "tsx", "md", "mdx"]` in next.config.

## Git & Deployment

- Single branch: `main`
- Commit messages: imperative mood, descriptive (e.g., "Add blog post: The Shrinking Room")
- Deploy target: Cloudflare Pages with build output from `out/`
- Wrangler config in `wrangler.toml`
