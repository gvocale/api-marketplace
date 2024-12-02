import { ReactNode } from "react";
import styles from "./index.module.scss";

export type SidebarMenuSubItem = {
  children: ReactNode;
  as?: "ol" | "ul";
};

export function SidebarMenuSub({ as, children }: SidebarMenuSubItem) {
  const Tag = as ?? "ol";
  
  return <Tag className={styles.sidebarMenuSub}>{children}</Tag>;
}
