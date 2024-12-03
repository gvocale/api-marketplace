import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import styles from "./index.module.scss";

export function SidebarMenuButton({
  children,
  href,
  icon,
}: {
  children: ReactNode;
  href?: LinkProps["href"];
  icon?: React.ReactNode;
}) {
  const pathname = usePathname();

  if (href) {
    const isActive = pathname.includes(href.toString());

    return (
      <Link
        className={`${styles.button} ${isActive ? styles.isActive : ""}`}
        href={href}
      >
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
