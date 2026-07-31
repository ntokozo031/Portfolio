import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        Ntokozo Ngcobo
      </Link>
      <ul className={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
