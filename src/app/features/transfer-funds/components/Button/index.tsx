import { ReactNode, ElementType } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export interface ButtonProps {
  as?: ElementType | typeof Link;
  children: ReactNode;
  variant: "primary" | "secondary";
  href?: string;
}

export function Button({ as, href, children, variant }: ButtonProps) {
  const Component = as ?? "button";

  return (
    <Component className={`${styles.root} ${styles[variant]}`} href={href}>
      {children}
    </Component>
  );
}
