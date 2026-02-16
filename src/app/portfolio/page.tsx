import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Portfolio | Kraig Britton",
};

export default function PortfolioPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
      <p className="mt-4 text-gray-600">
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
