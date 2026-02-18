export interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
}

export const projects: Project[] = [];
