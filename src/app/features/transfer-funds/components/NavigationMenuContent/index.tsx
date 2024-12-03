import styles from "./index.module.scss";

type NavigationMenuContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

export function NavigationMenuContent({
  children,
  isOpen,
}: NavigationMenuContentProps) {
  return (
    <div className={`${styles.content} ${isOpen ? styles.isOpen : ""}`}>
      {children}
    </div>
  );
}
