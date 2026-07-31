import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { CERTIFICATIONS, EDUCATION, LANGUAGES, PROFILE } from "@/lib/data";
import styles from "../css/About.module.css";

const FACTS = [
  { label: "Location", value: PROFILE.location },
  { label: "Experience", value: "3+ years" },
  { label: "Education", value: "B. ICT Honours" },
  { label: "Languages", value: LANGUAGES.map((l) => l.name).join(", ") },
];

export function AboutView() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="About"
          title="Background & Education"
          description="A quick overview of who I am, what I've studied, and where I'm based."
        />

        <div className={styles.grid}>
          <div>
            <p className={styles.summary}>{PROFILE.summary}</p>
            <div className={styles.factList}>
              {FACTS.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <span className={styles.factLabel}>{fact.label}</span>
                  <span className={styles.factValue}>{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Education</h3>
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className={styles.eduItem}>
                  <div className={styles.eduDegree}>{edu.degree}</div>
                  <div className={styles.eduMeta}>
                    {edu.institution} · {edu.period}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Certifications</h3>
              <div className={styles.certList}>
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert} className={styles.certItem}>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
