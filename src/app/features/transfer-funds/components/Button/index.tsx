import { ReactNode, ElementType } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export interface ButtonProps {
  as?: ElementType | typeof Link;
  children: ReactNode;
  variant: "primary" | "secondary";
  size?: "sm" | "lg";
  href: ButtonProps["as"] extends typeof Link ? string : string | undefined;
}

export function Button({
  as,
  href,
  children,
  variant,
  size = "lg",
}: ButtonProps) {
  const Component = as ?? "button";

  return (
    <Component
      className={`${styles.root} ${styles[variant]} ${styles[size]}`}
      href={href}
    >
      {children}
    </Component>
  );
}
