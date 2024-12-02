import { ReactNode } from "react";
import styles from "./index.module.scss";

export function SidebarMenuItem({ children }: { children: ReactNode }) {
  return <li className={styles.sidebarMenuItem}>{children}</li>;
}
