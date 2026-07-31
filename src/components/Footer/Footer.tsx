import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Ntokozo Ngcobo. All rights reserved.
    </footer>
  );
}
