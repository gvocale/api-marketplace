import styles from "./index.module.scss";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`${styles.root} ${className ?? ""}`}>{children}</span>
  );
}
