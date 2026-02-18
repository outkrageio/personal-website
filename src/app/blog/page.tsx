import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Kraig Britton",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-widest text-teal-600">
        Blog
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
        Writing
      </h1>
      <p className="mt-4 text-stone-500">
        Thoughts on software engineering, testing, and more.
      </p>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
