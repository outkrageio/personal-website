import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A selection of projects Kraig Britton has worked on.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="stagger">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Portfolio
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-foreground">
        Projects
      </h1>
      <p className="mt-4 text-muted">
        A selection of projects I&apos;ve worked on.
      </p>
      <div className="accent-line mt-6 w-16" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
