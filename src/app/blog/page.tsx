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
      <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
      <p className="mt-4 text-gray-600">
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
