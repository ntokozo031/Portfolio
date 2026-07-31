import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import styles from "../css/Projects.module.css";

export function ProjectsView() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="Production systems spanning fintech, healthcare, logistics, and government sectors."
        />
        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
