import { ReactNode } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export interface TextLinkProps {
  children: ReactNode;
  href: string;
}

export function TextLink({ children, href }: TextLinkProps) {
  return (
    <Link className={styles.root} href={href}>
      {children}
    </Link>
  );
}
