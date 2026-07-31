import styles from "../css/Contact.module.css";

export function ContactView() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.paragraph}>
        Feel free to reach out — I&apos;m always open to discussing new
        projects and opportunities.
      </p>
      <div className={styles.links}>
        <a className={styles.link} href="mailto:ntokozotko7@gmail.com">
          ntokozotko7@gmail.com
        </a>
        <a
          className={styles.link}
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className={styles.link}
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
