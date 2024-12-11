import Link from "next/link";
import styles from "./index.module.scss";

export function ProgressItem({
  isActive,
  children,
  href,
}: {
  isActive: boolean;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.isActive : ""}`}
    >
      {children}
    </Link>
  );
}
