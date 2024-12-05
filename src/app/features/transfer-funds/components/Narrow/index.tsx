import styles from "./index.module.scss";

export function Narrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${styles.narrow} ${className ?? ""}`}>{children}</div>;
}
