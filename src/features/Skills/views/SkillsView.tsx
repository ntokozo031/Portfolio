import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { SKILL_GROUPS } from "@/lib/data";
import styles from "../css/Skills.module.css";

export function SkillsView() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Skills"
          title="Technical Toolbox"
          description="Languages, frameworks, and platforms I use to ship full-stack products."
        />
        <div className={styles.grid}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className={styles.card}>
              <div className={styles.category}>{group.category}</div>
              <div className={styles.pills}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
