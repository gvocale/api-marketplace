import { usePathname } from "next/navigation";
import styles from "./index.module.scss";
import Link from "next/link";

export function ProgressItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  console.log(pathname, href, isActive);

  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.isActive : ""}`}
    >
      <span className={styles.text}>{children}</span>
      <div className={styles.progress}>
        <span className={styles.lineBefore}></span>
        <span className={styles.bullet}></span>
        <span className={styles.lineAfter}></span>
      </div>
    </Link>
  );
}
