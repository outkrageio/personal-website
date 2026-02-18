import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-teal-600">
          Staff Engineer
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-stone-900">
          Kraig Britton
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone-500">
          14 years building software at companies of every size, from
          early-stage startups to enterprise giants like VMware. I specialize in
          quality engineering, building internal tools that make
          developers&apos; lives easier, and building internal tools that make
          management&apos;s lives easier. I tend to get involved at all levels of
          the stack. If it ships, I care about it.
        </p>
      </div>

      <div className="space-y-8">
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-stone-200/60">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-stone-900">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
            At Home
          </h2>
          <p className="mt-3 leading-relaxed text-stone-500">
            Husband and father to two daughters. They are better at keeping me
            busy than any on-call rotation ever was.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-stone-200/60">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-stone-900">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
            Off the Grid
          </h2>
          <p className="mt-3 leading-relaxed text-stone-500">
            When I&apos;m not at a keyboard I&apos;m usually somewhere in the
            woods of eastern Oregon. Hunting, fishing, camping, or riding my
            quad through terrain that would void most warranties. At home I stay
            busy with DIY projects, gardening, fixing things, and working on
            cars. It&apos;s the best way I know to not think about software or
            work for a while.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-stone-200/60">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-stone-900">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
            Writing
          </h2>
          <p className="mt-3 leading-relaxed text-stone-500">
            I write about software engineering, the shifting nature of the craft,
            and lessons picked up along the way. Check out my{" "}
            <Link
              href="/blog"
              className="font-medium text-teal-600 underline decoration-teal-600/30 transition-colors hover:text-teal-700 hover:decoration-teal-700"
            >
              blog
            </Link>{" "}
            or take a look at my{" "}
            <Link
              href="/portfolio"
              className="font-medium text-teal-600 underline decoration-teal-600/30 transition-colors hover:text-teal-700 hover:decoration-teal-700"
            >
              portfolio
            </Link>{" "}
            to see what I&apos;ve been working on.
          </p>
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <Link
          href="/portfolio"
          className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md"
        >
          View Portfolio
        </Link>
        <Link
          href="/contact"
          className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-stone-600 shadow-sm ring-1 ring-stone-200/60 transition-all hover:bg-stone-50 hover:shadow-md"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
