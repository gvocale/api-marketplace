"use client";
import { ReactNode } from "react";
import styles from "./index.module.scss";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export function SidebarMenuSubButton({
  children,
  href,
}: {
  children: ReactNode;
  href?: LinkProps["href"];
}) {
  const pathname = usePathname();
  
  if (href) {
    const isActive = pathname.includes(href.toString());

    return (
      <Link
        className={`${styles.button} ${isActive ? styles.isActive : ""}`}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return <div className={styles.button}>{children}</div>;
}
