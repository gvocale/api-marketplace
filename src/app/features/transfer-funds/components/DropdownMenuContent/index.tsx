import { ReactNode, RefObject } from "react";
import styles from "./index.module.scss";

export function DropdownMenuContent({
  children,
  isOpen,
  tabIndex,
  ref,
}: {
  children: ReactNode;
  isOpen: boolean;
  tabIndex?: number;
  ref: RefObject<HTMLDivElement>;
}) {
  return (
    <div
      className={`${styles.popover} ${isOpen ? styles.open : ""}`}
      tabIndex={tabIndex}
      ref={ref}
    >
      {children}
    </div>
  );
}
