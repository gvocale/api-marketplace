import { ReactNode } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export interface TextLinkProps {
  children: ReactNode;
  currentColor?: boolean;
  className?: string;
  href: string;
  darkMode?: boolean;
}

export function TextLink({
  children,
  href,
  darkMode,
  currentColor,
  className,
}: TextLinkProps) {
  return (
    <Link
      className={`${styles.root} ${darkMode ? styles.darkMode : ""} ${
        currentColor ? styles.currentColor : ""
      } ${className ?? ""}`}
      href={href}
    >
      {children}
    </Link>
  );
}
