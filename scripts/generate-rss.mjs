import fs from "fs";
import path from "path";

const SITE_URL = "https://kraigbritton.com";
const SITE_TITLE = "Kraig Britton";
const SITE_DESCRIPTION =
  "Staff engineer with 14 years across startups and enterprise. Writing about software engineering, quality engineering, and the shifting nature of the craft.";

const postsDir = path.join(process.cwd(), "src/content/posts");
const outDir = path.join(process.cwd(), "out");

// Extract metadata from MDX files by reading the exported metadata object
function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(
    /export\s+const\s+metadata\s*=\s*\{([^}]+)\}/s
  );
  if (!match) return null;

  const block = match[1];
  const title = block.match(/title:\s*"([^"]+)"/)?.[1];
  const date = block.match(/date:\s*"([^"]+)"/)?.[1];
  const description = block.match(/description:\s*"([^"]+)"/)?.[1];

  if (!title || !date || !description) return null;
  return { title, date, description };
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Read all posts and sort newest-first
const posts = fs
  .readdirSync(postsDir)
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => {
    const slug = f.replace(/\.mdx$/, "");
    const meta = extractMetadata(path.join(postsDir, f));
    return meta ? { slug, ...meta } : null;
  })
  .filter(Boolean)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Build RSS XML
const items = posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date + "T00:00:00Z").toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`
  )
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(outDir, "feed.xml"), rss);
console.log(`Generated feed.xml with ${posts.length} posts`);
