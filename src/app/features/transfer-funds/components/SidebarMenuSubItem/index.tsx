import { ReactNode } from "react";
import styles from "./index.module.scss";

export function SidebarMenu({ children }: { children: ReactNode }) {
  return <div className={styles.sidebarMenu}>{children}</div>;
}
