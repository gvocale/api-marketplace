import { ReactNode, ElementType, CSSProperties } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

export interface IconButtonProps {
  as?: ElementType | typeof Link;
  variant: "primary" | "secondary" | "ghost";
  size: "sm" | "lg";
  href?: IconButtonProps["as"] extends typeof Link
    ? string
    : string | undefined;
  onClick?: () => void;
  icon: ReactNode;
  title?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
  rounded?: boolean;
}

export function IconButton({
  as,
  href,
  variant,
  size,
  onClick,
  title,
  className,
  icon,
  id,
  style,
  rounded,
}: IconButtonProps) {
  const Component = as ?? "button";

  return (
    <Component
      className={`${styles.root} ${styles[variant]} ${styles[size]} ${
        rounded ? styles.rounded : ""
      } ${className ?? ""}`}
      href={href}
      onClick={onClick}
      title={title}
      id={id}
      style={style}
    >
      {icon}
    </Component>
  );
}
