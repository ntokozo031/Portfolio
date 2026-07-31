import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  download?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  external = false,
  download = false,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href && external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer"
        download={download}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
