import { ReactNode } from "react";
import styles from "./index.module.scss";

export function DropdownMenu({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${styles.dropdownMenu} ${className ?? ""}`}>
      {children}
    </div>
  );
}
