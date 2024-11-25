import styles from "./index.module.scss";

export function ConnectingLine() {
  return (
    <div className={styles.root}>
      <div className={`${styles.circle} ${styles.before}`}></div>
      <div className={styles.divider}>
        <div className={styles.triangle}></div>
      </div>
      <div className={`${styles.circle} ${styles.after}`}></div>
    </div>
  );
}
