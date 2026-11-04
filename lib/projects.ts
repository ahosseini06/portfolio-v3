import projectsData from "@/public/data/projects.json";

export type Project = {
  title: string;
  tagline: string;
  where?: string;
  /** Square icon in public/, e.g. "/logos/motif.svg". Leave "" for none. */
  logo?: string;
  featured?: boolean;
  projectLink?: string;
};

export const projects: Project[] = projectsData;

/** Absolute URL for a project's link ("playsyncsports.com" → "https://playsyncsports.com"). */
export function projectHref(link?: string): string | undefined {
  if (!link?.trim()) return undefined;
  return /^[a-z]+:\/\//i.test(link) ? link : `https://${link}`;
}
