import { ReactNode } from "react";
import styles from "./index.module.scss";

export function SidebarHeader({ children }: { children: ReactNode }) {
  return <div className={styles.sidebarHeader}>{children}</div>;
}
