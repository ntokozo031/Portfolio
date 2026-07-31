import type { Project } from "../../types";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.tags}>
        {project.tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {project.repoUrl && (
          <a href={project.repoUrl} className={styles.link} target="_blank" rel="noreferrer">
            Repo
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} className={styles.link} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </article>
  );
}
