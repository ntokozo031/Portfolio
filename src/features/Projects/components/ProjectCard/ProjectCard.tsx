import type { ProjectItem } from "../../types";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className={`${styles.card} ${project.featured ? styles.featured : ""}`}>
      {project.featured && <span className={styles.badge}>Featured</span>}
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.tags}>
        {project.tech.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
