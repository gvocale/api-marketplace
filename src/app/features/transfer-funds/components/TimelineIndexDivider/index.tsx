import styles from "./index.module.scss";

export function TimelineIndexDivider() {
  return (
    <div className={styles.timelineIndexDivider}>
      <div className={styles.lineContainer}>
        <div className={styles.line} />
      </div>
    </div>
  );
}
