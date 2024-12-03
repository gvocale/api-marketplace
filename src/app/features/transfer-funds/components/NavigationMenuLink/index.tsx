import { CaretDownSolid } from "../../icons/CaretDownSolid";
import { TextLink } from "../TextLink";
import styles from "./index.module.scss";

type NavigationMenuItemProps = {
  href: string;
  label: string;
  isOpen: boolean;
};

export function NavigationMenuItem({
  label,
  href,
  isOpen,
}: NavigationMenuItemProps) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.isOpen : ""}`}>
      <TextLink href={href} className={styles.link} currentColor={true}>
        {label}
      </TextLink>
      <button className={styles.iconButton} aria-label={`${label} menu`}>
        <CaretDownSolid className={styles.icon} />
      </button>
    </div>
  );
}
