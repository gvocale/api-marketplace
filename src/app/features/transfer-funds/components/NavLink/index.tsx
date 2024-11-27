import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

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
