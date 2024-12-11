import styles from "./index.module.scss";

export function Grid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${styles.grid} ${className ?? ""}`}>{children}</div>;
}
