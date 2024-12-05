import { Check } from "../../icons/Check";
import styles from "./index.module.scss";

export type DropdownMenuItemProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  tabIndex?: number;
};

export function DropdownMenuItem({
  isActive,
  children,
  onClick,
  tabIndex,
}: DropdownMenuItemProps) {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
      <Check className={styles.icon} />
    </button>
  );
}
