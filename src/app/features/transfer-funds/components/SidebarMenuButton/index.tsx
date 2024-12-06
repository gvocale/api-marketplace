import { SectionId } from "@/app/features/types";
import Link, { LinkProps } from "next/link";
import { ReactNode, useContext } from "react";
import { InViewContext } from "../../context/in-view";
import { AngleDown } from "../../icons/AngleDown";
import styles from "./index.module.scss";

export function SidebarMenuButton({
  children,
  href,
  icon,
  hasSubmenu = false,
  isOpen = true,
  id,
  onClick,
}: {
  children: ReactNode;
  href?: LinkProps["href"];
  icon?: React.ReactNode;
  hasSubmenu?: boolean;
  isOpen?: boolean;
  id?: SectionId;
  onClick?: () => void;
}) {
  const { inView } = useContext(InViewContext);

  const isActive = id && id === inView;

  const className = `${styles.button} ${isActive ? styles.isActive : ""} ${
    isOpen ? styles.isOpen : ""
  }`;

  const dataAttributes = {
    "data-sidebar-menu-button": true,
  };

  function inner() {
    return (
      <>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{children}</span>
        {hasSubmenu && (
          <div className={styles.caretContainer}>
            <AngleDown className={styles.caret} />
          </div>
        )}
      </>
    );
  }

  if (href) {
    return (
      <Link
        className={className}
        href={href}
        onClick={onClick}
        {...dataAttributes}
      >
        {inner()}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} {...dataAttributes}>
      {inner()}
    </button>
  );
}
