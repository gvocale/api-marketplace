import { ReactNode } from "react";
import styles from "./index.module.scss";

export function SidebarContent({ children }: { children: ReactNode }) {
  return <div className={styles.sidebarContent}>{children}</div>;
}
