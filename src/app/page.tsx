import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, jsonLdString } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kraig Britton",
  jobTitle: "Staff Engineer",
  url: SITE_URL,
  sameAs: ["https://github.com/outkrageio"],
};

export default function Home() {
  return (
    <div className="stagger">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(personJsonLd) }}
      />
      <div className="mb-16">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Staff Engineer
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-tight text-foreground sm:text-6xl">
          Kraig Britton
        </h1>
        <div className="accent-line mt-6 w-24" />
        <p className="mt-6 text-base leading-[1.8] text-muted max-w-2xl">
          14 years building software at companies of every size, from
          early-stage startups to enterprise giants like VMware. I specialize in
          quality engineering, building internal tools that make
          developers&apos; lives easier, and building internal tools that make
          management&apos;s lives easier. I tend to get involved at all levels of
          the stack. If it ships, I care about it.
        </p>
      </div>

      <div className="space-y-5">
        <div className="card-hover rounded-lg border border-border bg-surface p-6 overflow-hidden">
          <h2 className="flex items-center gap-3 font-[family-name:var(--font-display)] text-xl text-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            At Home
          </h2>
          <p className="mt-3 leading-[1.8] text-muted text-sm">
            Husband and father to two daughters. They are better at keeping me
            busy than any on-call rotation ever was.
          </p>
        </div>

        <div className="card-hover rounded-lg border border-border bg-surface p-6 overflow-hidden">
          <h2 className="flex items-center gap-3 font-[family-name:var(--font-display)] text-xl text-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Off the Grid
          </h2>
          <p className="mt-3 leading-[1.8] text-muted text-sm">
            When I&apos;m not at a keyboard I&apos;m usually somewhere in the
            woods of eastern Oregon. Hunting, fishing, camping, or riding my
            quad through terrain that would void most warranties. At home I stay
            busy with DIY projects, gardening, fixing things, and working on
            cars. It&apos;s the best way I know to not think about software or
            work for a while.
          </p>
        </div>

        <div className="card-hover rounded-lg border border-border bg-surface p-6 overflow-hidden">
          <h2 className="flex items-center gap-3 font-[family-name:var(--font-display)] text-xl text-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Writing
          </h2>
          <p className="mt-3 leading-[1.8] text-muted text-sm">
            I write about software engineering, the shifting nature of the craft,
            and lessons picked up along the way. Check out my{" "}
            <Link
              href="/blog"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-hover hover:decoration-accent-hover"
            >
              blog
            </Link>{" "}
            or take a look at my{" "}
            <Link
              href="/portfolio"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-hover hover:decoration-accent-hover"
            >
              portfolio
            </Link>{" "}
            to see what I&apos;ve been working on.
          </p>
        </div>
      </div>

      <div className="mt-12 flex gap-4">
        <Link
          href="/portfolio"
          className="group relative rounded-md bg-accent px-6 py-3 text-sm font-medium text-background tracking-wide transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
        >
          View Portfolio
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-border px-6 py-3 text-sm font-medium text-muted tracking-wide transition-all duration-300 hover:border-border-light hover:text-foreground"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
