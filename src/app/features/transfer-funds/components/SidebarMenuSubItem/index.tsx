import { ReactNode } from "react";
import styles from "./index.module.scss";

export function SidebarMenuSubItem({ children }: { children: ReactNode }) {
  return (
    <div className={styles.sidebarMenuSubItem}>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
      </div>
      {children}
    </div>
  );
}
