import { ReactNode, ElementType } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export interface IconButtonProps {
  as?: ElementType | typeof Link;
  children: ReactNode;
  variant: "primary" | "secondary" | "ghost";
  size: "sm" | "lg";
  href?: IconButtonProps["as"] extends typeof Link
    ? string
    : string | undefined;
  onClick?: () => void;
  title?: string;
  className?: string;
}

export function IconButton({
  as,
  href,
  children,
  variant,
  size,
  onClick,
  title,
  className,
}: IconButtonProps) {
  const Component = as ?? "button";

  return (
    <Component
      className={`${styles.root} ${styles[variant]} ${styles[size]} ${
        className ?? ""
      }`}
      href={href}
      onClick={onClick}
      title={title}
    >
      {children}
    </Component>
  );
}
