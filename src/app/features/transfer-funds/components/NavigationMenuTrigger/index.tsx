import styles from "./index.module.scss";

type NavigationMenuTriggerProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

export function NavigationMenuTrigger({
  children,
  isOpen,
}: NavigationMenuTriggerProps) {
  return (
    <a className={`${styles.trigger} ${isOpen ? styles.isOpen : ""}`}>
      {children}
    </a>
  );
}
