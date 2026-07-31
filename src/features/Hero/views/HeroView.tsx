"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons/BrandIcons";
import { Button } from "@/components/Button/Button";
import { PROFILE, SOCIAL_LINKS } from "@/lib/data";
import styles from "../css/Hero.module.css";

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail };

export function HeroView() {
  return (
    <section id="hero" className={`${styles.section} section-glow`}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>
            <span className={styles.dot} />
            {PROFILE.availability}
          </span>

          <h1 className={styles.title}>
            Hi, I&apos;m <span className="text-gradient">{PROFILE.name}</span>
          </h1>
          <p className={styles.subtitle}>{PROFILE.title}</p>
          <p className={styles.summary}>{PROFILE.tagline}</p>

          <div className={styles.actions}>
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>

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
        </motion.div>

        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.glow} />
          <div className={styles.photo}>
            <Image
              src={PROFILE.photo}
              alt={PROFILE.name}
              fill
              sizes="256px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
