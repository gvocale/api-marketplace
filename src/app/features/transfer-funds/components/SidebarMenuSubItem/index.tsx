import { ReactNode } from "react";
import styles from "./index.module.scss";

export function SidebarMenuSubItem({ children }: { children: ReactNode }) {
  return (
    <div className={styles.sidebarMenuSubItem}>
      <span className={styles.lineContainer}>
        <span className={styles.line}></span>
      </span>
      {children}
    </div>
  );
}
