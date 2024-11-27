import styles from "./index.module.scss";

export interface ProgressLineProps {
  className?: string;
  size: "small" | "large";
}

export function ProgressLine({ className, size = "large" }: ProgressLineProps) {
  return (
    <div className={`${styles.root} ${styles[size]} ${className}`}>
      <div className={`${styles.circle} ${styles.before}`}></div>
      <div className={styles.divider}></div>
      <div className={`${styles.circle} ${styles.after}`}></div>
    </div>
  );
}
