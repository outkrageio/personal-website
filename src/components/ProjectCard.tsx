import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-hover rounded-lg border border-border bg-surface p-6 overflow-hidden transition-all duration-300">
      <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-background px-2.5 py-0.5 font-mono text-xs text-accent"
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
              className="text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
            >
              Live Site
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
            >
              Source Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
