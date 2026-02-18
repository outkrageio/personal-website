import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-stone-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <time className="text-xs font-medium uppercase tracking-wide text-stone-400">
          {formatDate(post.date)}
        </time>
        <h2 className="mt-2 flex items-center justify-between text-lg font-semibold text-stone-900">
          {post.title}
          <span className="ml-4 text-stone-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-teal-600">
            &rarr;
          </span>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-500">
          {post.description}
        </p>
      </article>
    </Link>
  );
}
