# Technology Stack

**Analysis Date:** 2026-03-01

## Languages

**Primary:**
- TypeScript 5 - Source code and configuration; strict mode enabled
- JavaScript (ES2017 target) - Runtime execution

**Secondary:**
- MDX (Markdown + JSX) - Blog post content in `src/content/posts/`

## Runtime

**Environment:**
- Node.js (no specific version locked in `.nvmrc`)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 16.1.6 - React framework with App Router, static export mode
- React 19.2.3 - UI component library
- React DOM 19.2.3 - React rendering to DOM

**Content:**
- @next/mdx 16.1.6 - Markdown/MDX support for Next.js
- @mdx-js/loader 3.1.1 - MDX file loader
- @mdx-js/react 3.1.1 - React integration for MDX

**Styling:**
- Tailwind CSS 4 - Utility-first CSS framework
- @tailwindcss/postcss 4 - PostCSS integration for Tailwind
- @tailwindcss/typography 0.5.19 - Prose styling for MDX blog posts

**Testing:**
- None configured

**Build/Dev:**
- ESLint 9 - JavaScript/TypeScript linter
- eslint-config-next 16.1.6 - Next.js recommended ESLint rules
- TypeScript 5 - Type checking and compilation

## Key Dependencies

**Critical:**
- next 16.1.6 - Framework and build system; defines output as static export (no server runtime)
- react 19 + react-dom 19 - UI framework
- @next/mdx - Enables MDX pages as first-class routes via `pageExtensions: ["ts", "tsx", "md", "mdx"]`

**Infrastructure:**
- postcss - CSS transformation pipeline (configured in `postcss.config.mjs`)

## Configuration

**Environment:**
- `.env` file present - contains Cloudflare API token for deployment
- No runtime environment variables required for the static site itself
- All configuration is build-time (static generation)

**Build:**
- `next.config.mjs` - Enables MDX support, static export, unoptimized images
- `tsconfig.json` - TypeScript strict mode, path aliases (`@/*` → `src/*`), ES2017 target
- `postcss.config.mjs` - Tailwind CSS plugin
- `eslint.config.mjs` - Flat config ESLint with Next.js core web vitals and TypeScript rules
- `wrangler.toml` - Cloudflare Pages configuration; pages build output from `out/` directory

## Platform Requirements

**Development:**
- Node.js
- npm
- Text editor/IDE with TypeScript support recommended

**Production:**
- Cloudflare Pages (static hosting)
- No server runtime required; outputs static HTML/CSS/JS to `out/` directory
- Deployment via `npx wrangler pages deploy out/ --project-name personal-website`

---

*Stack analysis: 2026-03-01*
