import { ReactNode } from "react";
import { AngleDown } from "../../icons/AngleDown";
import styles from "./index.module.scss";

export function DropdownMenuTrigger({
  children,
  isOpen,
  onClick,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${styles.button} ${isOpen ? styles.isOpen : ""}`}
      onClick={onClick}
      aria-expanded={isOpen}
    >
      {children}
      <AngleDown className={styles.icon} />
    </button>
  );
}
