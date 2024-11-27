import { ReactNode } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export interface TextLinkProps {
  children: ReactNode;
  href: string;
  darkMode?: boolean;
}

export function TextLink({ children, href, darkMode }: TextLinkProps) {
  return (
    <Link
      className={`${styles.root} ${darkMode ? styles.darkMode : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
}
