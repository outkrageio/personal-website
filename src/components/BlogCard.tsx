import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="card-hover rounded-lg border border-border bg-surface p-6 overflow-hidden transition-all duration-300">
        <div className="flex items-center gap-3">
          <time className="font-mono text-xs tracking-wide text-muted/60">
            {formatDate(post.date)}
          </time>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h2 className="mt-3 flex items-center justify-between font-[family-name:var(--font-display)] text-xl text-foreground">
          {post.title}
          <span className="ml-4 text-muted/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
            &rarr;
          </span>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {post.description}
        </p>
      </article>
    </Link>
  );
}
