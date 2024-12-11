import styles from "./index.module.scss";

export interface ConnectingLineProps {
  className?: string;
  size: "small" | "large";
}

export function ConnectingLine({
  className,
  size = "large",
}: ConnectingLineProps) {
  return (
    <div className={`${styles.root} ${styles[size]} ${className ?? ""}`}>
      <div className={`${styles.circle} ${styles.before}`}></div>
      <div className={styles.divider}>
        <div className={styles.triangle}></div>
      </div>
      <div className={`${styles.circle} ${styles.after}`}></div>
    </div>
  );
}
