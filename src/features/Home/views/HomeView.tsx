import { Button } from "@/components/Button/Button";
import styles from "../css/Home.module.css";

export function HomeView() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Hi, I&apos;m Ntokozo Ngcobo.</h1>
      <p className={styles.subtitle}>
        Software engineer building web applications end to end — frontend,
        backend, and everything in between.
      </p>
      <div className={styles.actions}>
        <Button href="/projects">View Projects</Button>
        <Button href="/contact" variant="secondary">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
