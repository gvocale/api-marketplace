import { ReactNode } from "react";
import { AngleDown } from "../../icons/AngleDown";
import styles from "./index.module.scss";

export function DropdownMenuTrigger({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
      <AngleDown className={styles.icon} />
    </button>
  );
}
