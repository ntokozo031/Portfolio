import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons/BrandIcons";
import { PROFILE, SOCIAL_LINKS } from "@/lib/data";
import styles from "./Footer.module.css";

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail };

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className={styles.socials}>
          {SOCIAL_LINKS.map((social) => {
            const Icon = ICONS[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={social.label}
                className={styles.iconLink}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
