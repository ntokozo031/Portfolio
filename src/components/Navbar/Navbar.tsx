"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} glass ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="#hero" className={styles.brand} onClick={() => setOpen(false)}>
          {PROFILE.initials}
        </Link>

        <nav className={styles.desktopLinks}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={PROFILE.resumeUrl}
          target="_blank"
          rel="noreferrer"
          download
          className={styles.resumeButton}
        >
          <Download size={16} />
          Resume
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className={styles.mobileLinks}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            download
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}
