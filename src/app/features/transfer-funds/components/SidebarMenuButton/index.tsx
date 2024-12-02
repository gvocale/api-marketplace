import { ReactNode } from "react";
import styles from "./index.module.scss";
import Link, { LinkProps } from "next/link";

export function SidebarMenuButton({
  children,
  href,
  icon,
}: {
  children: ReactNode;
  href?: LinkProps["href"];
  icon?: React.ReactNode;
}) {
  if (href) {
    return (
      <Link className={styles.button} href={href}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <div className={styles.button}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </div>
  );
}
