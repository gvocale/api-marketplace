import { ReactNode } from "react";
import styles from "./index.module.scss";
import Link, { LinkProps } from "next/link";

export function SidebarMenuButton({
  children,
  href,
}: {
  children: ReactNode;
  href?: LinkProps["href"];
}) {
  if (href) {
    return (
      <Link className={styles.button} href={href}>
        {children}
      </Link>
    );
  }

  return <div className={styles.button}>{children}</div>;
}
