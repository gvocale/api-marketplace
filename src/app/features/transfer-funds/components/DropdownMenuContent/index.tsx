import { ReactNode } from "react";
import styles from "./index.module.scss";

export function DropdownMenuContent({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) {
  return (
    <div className={`${styles.popover} ${isOpen ? styles.open : ""}`}>
      {children}
    </div>
  );
}
