import styles from "../css/About.module.css";

export function AboutView() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.paragraph}>
        I&apos;m a software engineer with experience across the full stack,
        from React and Next.js frontends to Node.js and database-backed
        APIs.
      </p>
      <p className={styles.paragraph}>
        This portfolio is built with Next.js, TypeScript, and Tailwind CSS.
      </p>
    </section>
  );
}
