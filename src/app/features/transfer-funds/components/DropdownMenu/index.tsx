import { ReactNode } from "react";
import styles from "./index.module.scss";

export function DropdownMenu({ children }: { children: ReactNode }) {
  return <div className={styles.dropdownMenu}>{children}</div>;
}
