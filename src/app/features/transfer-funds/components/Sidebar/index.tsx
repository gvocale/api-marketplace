import { ReactNode } from "react";
import styles from "./index.module.scss";

export function Sidebar({ children }: { children: ReactNode }) {
  return <div className={styles.sidebar}>{children}</div>;
}
