import styles from "./index.module.scss";

export function Notice({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={`${styles.notice} ${className}`}>{children}</div>;
}
