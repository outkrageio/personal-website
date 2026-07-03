import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software engineering, testing, and the shifting nature of the craft.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="stagger">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Blog
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-foreground">
        Writing
      </h1>
      <p className="mt-4 text-muted">
        Thoughts on software engineering, testing, and more.
      </p>
      <div className="accent-line mt-6 w-16" />
      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
