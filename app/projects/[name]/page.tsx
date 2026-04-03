import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  projectSlug,
  projects,
} from "@/lib/projects";

type Props = {
  params: Promise<{ name: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ name: projectSlug(p.title) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const project = getProjectBySlug(name);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
  const { name } = await params;
  const project = getProjectBySlug(name);
  if (!project) notFound();

  return (
    <div className="flex flex-col flex-1 font-sans w-full max-w-2xl mx-auto px-6 gap-6 py-16">
      <Link
        href="/"
        className="text-sm font-light text-[var(--secondary)] hover:text-[var(--primary)] w-fit"
      >
        ← Back
      </Link>
      <h1 className="text-3xl font-normal text-[var(--primary)]">
        {project.title}
      </h1>
      <p className="text-base font-light text-[var(--secondary)] leading-relaxed">
        {project.description}
      </p>
    </div>
  );
}
