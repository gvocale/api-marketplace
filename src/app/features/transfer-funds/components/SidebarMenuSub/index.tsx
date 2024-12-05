import { ReactNode } from "react";
import styles from "./index.module.scss";

export type SidebarMenuSubItem = {
  children: ReactNode;
  as?: "ol" | "ul";
  isOpen?: boolean;
};

export function SidebarMenuSub({ as, children, isOpen }: SidebarMenuSubItem) {
  const Element = as ?? "ol";

  return (
    <div
      className={`${styles.sidebarMenuSub} ${isOpen ? styles.isOpen : ""}`}
    >
      <Element className={styles.list}>{children}</Element>
    </div>
  );
}
