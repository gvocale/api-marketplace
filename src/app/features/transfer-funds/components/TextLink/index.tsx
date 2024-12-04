import { ReactNode } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export interface TextLinkProps {
  children: ReactNode;
  currentColor?: boolean;
  className?: string;
  href: string;
}

export function TextLink({
  children,
  href,
  currentColor,
  className,
}: TextLinkProps) {
  return (
    <Link
      className={`${styles.root} ${currentColor ? styles.currentColor : ""} ${
        className ?? ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
