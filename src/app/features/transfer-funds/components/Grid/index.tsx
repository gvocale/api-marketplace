import styles from "./index.module.scss";

export function Grid({ children }: { children: React.ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}
