import fs from "fs";
import path from "path";

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const postsDir = path.join(process.cwd(), "src/content/posts");

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string) {
  const mod = await import(`@/content/posts/${slug}.mdx`);
  const meta: PostMeta = { ...mod.metadata, slug };
  return { meta, default: mod.default };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { meta } = await getPostBySlug(slug);
      return meta;
    })
  );
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
