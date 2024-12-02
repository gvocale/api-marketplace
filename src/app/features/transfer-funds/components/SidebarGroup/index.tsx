import { ReactNode } from "react";
import styles from "./index.module.scss";

export function SidebarGroup({ children }: { children: ReactNode }) {
  return <div className={styles.sidebarGroup}>{children}</div>;
}
