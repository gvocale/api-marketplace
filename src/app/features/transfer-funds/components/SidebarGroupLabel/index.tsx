import { ReactNode } from "react";
import styles from "./index.module.scss";

export function SidebarGroupLabel({ children }: { children: ReactNode }) {
  return <h4 className={styles.sidebarGroupLabel}>{children}</h4>;
}
