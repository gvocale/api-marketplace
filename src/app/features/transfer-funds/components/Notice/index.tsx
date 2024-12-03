import styles from "./index.module.scss";

export function Notice({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <p className={styles.notice}>
      <em>{children}</em>
    </p>
  );
}
