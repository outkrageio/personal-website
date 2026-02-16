import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

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
      <header className="mb-8">
        <time className="text-sm text-gray-500">{meta.date}</time>
        <h1 className="mt-1 text-3xl font-bold text-gray-900">{meta.title}</h1>
        <p className="mt-2 text-gray-600">{meta.description}</p>
      </header>
      <div className="prose prose-gray max-w-none">
        <Content />
      </div>
    </article>
  );
}
