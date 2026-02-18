import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Portfolio | Kraig Britton",
};

export default function PortfolioPage() {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-widest text-teal-600">
        Portfolio
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
        Projects
      </h1>
      <p className="mt-4 text-stone-500">
        A selection of projects I&apos;ve worked on.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
