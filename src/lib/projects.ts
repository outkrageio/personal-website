export interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "This website — built with Next.js, Tailwind CSS, and MDX. Statically exported and deployed on Cloudflare Pages.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    repo: "https://github.com/kraigbritton/personal-website",
  },
];
