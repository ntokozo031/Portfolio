import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons/BrandIcons";
import { Button } from "@/components/Button/Button";
import { PROFILE } from "@/lib/data";
import styles from "../css/Contact.module.css";

export function ContactView() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <h2 className={styles.title}>Let&apos;s Build Something</h2>
          <p className={styles.paragraph}>
            {PROFILE.availability}. Whether it&apos;s a full product build, a
            focused contract engagement, or just a technical chat — I&apos;d
            love to hear from you.
          </p>
          <div className={styles.actions}>
            <Button href={`mailto:${PROFILE.email}`} external>
              <Mail size={16} />
              Email Me
            </Button>
            <Button href={PROFILE.linkedin} variant="secondary" external>
              <LinkedinIcon size={16} />
              LinkedIn
            </Button>
            <Button href={PROFILE.github} variant="secondary" external>
              <GithubIcon size={16} />
              GitHub
            </Button>
          </div>
          <div className={styles.details}>
            <span className={styles.detail}>
              <MapPin size={14} /> {PROFILE.location}
            </span>
            <span className={styles.detail}>
              <Phone size={14} /> {PROFILE.phone}
            </span>
            <span className={styles.detail}>
              <Mail size={14} /> {PROFILE.email}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
