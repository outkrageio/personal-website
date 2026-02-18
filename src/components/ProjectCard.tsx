import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-stone-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-lg font-semibold text-stone-900">{project.title}</h3>
      <p className="mt-2 text-sm text-stone-500">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700"
          >
            {t}
          </span>
        ))}
      </div>
      {(project.url || project.repo) && (
        <div className="mt-4 flex gap-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-teal-600 transition-colors hover:text-teal-700"
            >
              Live Site
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-teal-600 transition-colors hover:text-teal-700"
            >
              Source Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
