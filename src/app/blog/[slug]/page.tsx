import Link from "next/link";
import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/posts";
import { SITE_URL, SITE_NAME, jsonLdString } from "@/lib/site";

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
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `/blog/${slug}`,
      siteName: SITE_NAME,
      title: meta.title,
      description: meta.description,
      publishedTime: meta.date,
      authors: [SITE_NAME],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta, default: Content } = await getPostBySlug(slug);

  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    url: `${SITE_URL}/blog/${slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <article className="stagger">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(postJsonLd) }}
      />
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">&larr;</span>
        Back to blog
      </Link>
      <header className="mt-8 mb-12">
        <time className="font-mono text-xs tracking-wide text-muted/60">
          {formatDate(meta.date)}
        </time>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-foreground sm:text-5xl">
          {meta.title}
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">{meta.description}</p>
        <div className="accent-line mt-8 w-16" />
      </header>
      <div className="prose prose-invert max-w-none prose-headings:font-[family-name:var(--font-display)] prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted prose-p:leading-[1.8] prose-a:text-accent prose-a:decoration-accent/30 prose-a:underline-offset-4 hover:prose-a:text-accent-hover hover:prose-a:decoration-accent-hover prose-strong:text-foreground prose-blockquote:border-accent/40 prose-blockquote:text-muted prose-code:text-accent prose-code:font-[family-name:var(--font-mono)] prose-li:text-muted prose-hr:border-border">
        <Content />
      </div>
    </article>
  );
}
