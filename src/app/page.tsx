import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900">
        Hi, I&apos;m Kraig Britton
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Software engineer passionate about building reliable, well-tested
        software. I enjoy working across the stack and care deeply about quality
        engineering and developer experience.
      </p>
      <p className="mt-4 text-gray-600">
        I write about software development, testing, and lessons learned along
        the way. Check out my{" "}
        <Link href="/blog" className="text-blue-600 hover:underline">
          blog
        </Link>{" "}
        or take a look at my{" "}
        <Link href="/portfolio" className="text-blue-600 hover:underline">
          portfolio
        </Link>{" "}
        to see what I&apos;ve been working on.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/portfolio"
          className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
        >
          View Portfolio
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
