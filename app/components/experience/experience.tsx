import React from "react";
import styles from "./experience.module.css";

const experiences = [
  {
    role: "Product Engineer",
    company: "Kazuo Corp.",
    date: "Nov 2025 - Mar 2026",
  },
  {
    role: "Software Engineering Intern",
    company: "ElementeraAI",
    date: "Nov 2025 - Mar 2026",
  },
  {
    role: "Founding Engineer",
    company: "Playsync Software",
    date: "Nov 2025 - Mar 2026",
  },
];

const Experience = () => {
  return (
    <div className={styles.list}>
      {experiences.map((exp) => (
        <div key={exp.role} className={styles.row}>
          <span className={styles.role}>{exp.role}</span>
          <span className={styles.company}>@ {exp.company}</span>
          <span className={styles.date}>{exp.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
