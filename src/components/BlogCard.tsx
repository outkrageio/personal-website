import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="rounded-lg border border-gray-200 p-6 transition-colors group-hover:border-gray-400">
        <time className="text-sm text-gray-500">{post.date}</time>
        <h2 className="mt-1 text-lg font-semibold text-gray-900">
          {post.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600">{post.description}</p>
      </article>
    </Link>
  );
}
