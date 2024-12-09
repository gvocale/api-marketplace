import styles from "./index.module.scss";

export function RightSidebar({ children }: { children: React.ReactNode }) {
  return <aside className={styles.rightSidebar}>{children}</aside>;
}
