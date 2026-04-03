import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";
import projectsData from "@/public/data/projects.json";
import { projectSlug, type Project } from "@/lib/projects";

const featuredProjects = (projectsData as Project[]).filter(
  (p) => p.featured
);

const Projects = () => {
  return (
    <div className={styles.list}>
      {featuredProjects.map((project) => (
        <Link
          key={project.title}
          href={`/projects/${projectSlug(project.title)}`}
          className={styles.cardLink}
        >
          <div className={styles.card}>
            <div className={styles.thumbCluster}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="200px"
                  className={styles.image}
                />
              </div>
              <span className={styles.viewHint} aria-hidden>
                <span className={styles.viewHintLine}>View</span>
                <span className={styles.viewHintLine}>project</span>
                <span className={styles.viewHintLine}>→</span>
              </span>
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>
                {project.title}
                {project.tagline && (
                  <span className={styles.tagline}> - {project.tagline}</span>
                )}
              </h3>
              <p className={styles.skills}>{project.skills.join(", ")}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
