import { ReactNode } from "react";
import styles from "./index.module.scss";
import { AngleDown } from "../../icons/AngleDown";
import { Button } from "../Button";

export function DropdownMenuTrigger({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <Button className={styles.button} onClick={onClick} variant="outline">
      {children}
      <AngleDown className={styles.icon} />
    </Button>
  );
}
