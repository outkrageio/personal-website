# External Integrations

**Analysis Date:** 2026-03-01

## APIs & External Services

**None configured**

The site is a static website with no runtime API calls or external service integrations. All content is generated at build time.

## Data Storage

**Databases:**
- Not applicable - no database required

**File Storage:**
- Local filesystem only
- Blog posts stored as MDX files in `src/content/posts/`
- RSS feed generated at build time and saved to `out/feed.xml`

**Caching:**
- Not applicable

## Authentication & Identity

**Auth Provider:**
- Not applicable - no authentication required
- Static site accessible to all visitors

**Social Links (outbound only):**
- GitHub - Link to https://github.com/outkrageio in `src/app/contact/page.tsx`
- Email contact - mailto link to kraigbritton@gmail.com

## Monitoring & Observability

**Error Tracking:**
- None configured

**Logs:**
- Console logging only (in build scripts)
- RSS generation logs to stdout via `console.log()` in `scripts/generate-rss.mjs`

**Analytics:**
- Not detected

## CI/CD & Deployment

**Hosting:**
- Cloudflare Pages
- Static site deployment; no server-side rendering

**CI Pipeline:**
- Not configured (deploy via manual `wrangler pages deploy` command)

**Build Process:**
- `npm run build` runs `next build && node scripts/generate-rss.mjs`
- Outputs static files to `out/` directory
- RSS feed generated post-build from MDX metadata

## Environment Configuration

**Required env vars:**
- `CLOUDFLARE_API_TOKEN` - For Cloudflare Pages deployment (in `.env`)
  - Used by wrangler CLI only; not required at runtime

**Secrets location:**
- `.env` file (not committed to git)

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

## Third-Party Services

**Font Hosting:**
- Google Fonts (via Next.js `next/font/google`)
- Loaded fonts: DM Sans (body), Instrument Serif (display), JetBrains Mono (code)
- Fonts optimized and self-hosted by Next.js build process

## Content Distribution

**RSS Feed:**
- Generated at build time from MDX metadata
- Published to `feed.xml` at site root
- Not a live external feed service; static file

---

*Integration audit: 2026-03-01*
