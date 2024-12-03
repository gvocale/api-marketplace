import { usePathname } from "next/navigation";
import styles from "./index.module.scss";
import Link from "next/link";

export function ProgressItem({
  children,
  href,
  size,
}: {
  children: React.ReactNode;
  href: string;
  size: "sm" | "lg";
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${styles.link} ${styles[size]} ${
        isActive ? styles.isActive : ""
      }`}
    >
      <span className={styles.label}>{children}</span>
      <div className={styles.progress}>
        <span className={styles.lineBefore}></span>
        <span className={styles.bullet}></span>
        <span className={styles.lineAfter}></span>
      </div>
    </Link>
  );
}
