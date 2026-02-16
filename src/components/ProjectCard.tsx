import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
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
              className="text-sm text-blue-600 hover:underline"
            >
              Live Site
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Source Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
