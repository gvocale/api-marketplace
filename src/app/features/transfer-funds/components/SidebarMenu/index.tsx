import { ReactNode } from "react";
import styles from "./index.module.scss";

export type SidebarMenuProps = {
  as?: "ol" | "ul";
  children: ReactNode;
};

export function SidebarMenu({ as, children }: SidebarMenuProps) {
  const Tag = as ?? "ol";

  return <Tag className={styles.sidebarMenu}>{children}</Tag>;
}
