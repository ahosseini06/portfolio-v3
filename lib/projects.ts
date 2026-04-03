import projectsData from "@/public/data/projects.json";

export type Project = (typeof projectsData)[number];

export const projects = projectsData as Project[];

/** URL segment derived from project title (stable, lowercase, hyphenated). */
export function projectSlug(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProjectBySlug(slug: string): Project | undefined {
  const normalized = slug.trim().toLowerCase();
  return projects.find((p) => projectSlug(p.title) === normalized);
}
