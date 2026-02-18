import Link from "next/link";
import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta } = await getPostBySlug(slug);
  return {
    title: `${meta.title} | Kraig Britton`,
    description: meta.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta, default: Content } = await getPostBySlug(slug);

  return (
    <article>
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 transition-colors hover:text-teal-700"
      >
        &larr; Back to blog
      </Link>
      <header className="mt-6 mb-10">
        <time className="text-xs font-medium uppercase tracking-wide text-stone-400">
          {formatDate(meta.date)}
        </time>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
          {meta.title}
        </h1>
        <p className="mt-3 text-lg text-stone-500">{meta.description}</p>
        <div className="mt-6 h-px bg-gradient-to-r from-teal-600/20 via-stone-200 to-transparent" />
      </header>
      <div className="prose prose-stone max-w-none prose-headings:tracking-tight prose-a:text-teal-600 prose-a:decoration-teal-600/30 hover:prose-a:text-teal-700 hover:prose-a:decoration-teal-700">
        <Content />
      </div>
    </article>
  );
}
