import { ReactNode } from "react";
import styles from "./index.module.scss";

export function DropdownMenuContent({
  children,
  isOpen,
  tabIndex,
}: {
  children: ReactNode;
  isOpen: boolean;
  tabIndex?: number;
}) {
  return (
    <div
      className={`${styles.popover} ${isOpen ? styles.open : ""}`}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  );
}
