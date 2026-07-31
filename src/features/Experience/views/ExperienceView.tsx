import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { EXPERIENCE } from "@/lib/data";
import styles from "../css/Experience.module.css";

export function ExperienceView() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked"
          description="Full-stack delivery across academic, research, and government engagements."
        />
        <div className={styles.timeline}>
          {EXPERIENCE.map((item) => (
            <div key={item.role + item.period} className={styles.item}>
              <span className={styles.dot} />
              <div className={styles.header}>
                <span className={styles.role}>{item.role}</span>
                <span className={styles.period}>{item.period}</span>
              </div>
              <div className={styles.company}>{item.company}</div>
              <div className={styles.points}>
                {item.points.map((point) => (
                  <p key={point} className={styles.point}>
                    {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
