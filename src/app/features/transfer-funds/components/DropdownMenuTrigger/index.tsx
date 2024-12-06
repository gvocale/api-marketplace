import { ReactNode, RefObject } from "react";
import { AngleDown } from "../../icons/AngleDown";
import styles from "./index.module.scss";

export function DropdownMenuTrigger({
  children,
  isOpen,
  onClick,
  ref,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  ref: RefObject<HTMLButtonElement>;
}) {
  return (
    <button
      className={`${styles.button} ${isOpen ? styles.isOpen : ""}`}
      onClick={onClick}
      aria-expanded={isOpen}
      ref={ref}
    >
      {children}
      <AngleDown className={styles.icon} />
    </button>
  );
}
