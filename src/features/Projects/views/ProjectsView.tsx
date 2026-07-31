import { getProjects } from "../api";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import styles from "../css/Projects.module.css";

export async function ProjectsView() {
  const projects = await getProjects();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
