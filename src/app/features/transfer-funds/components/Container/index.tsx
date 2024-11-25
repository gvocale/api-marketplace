import styles from "./index.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "narrow";
}

export function Container({
  children,
  variant = "default",
  className,
}: ContainerProps) {
  return (
    <div className={`${styles.root} ${styles[variant]} ${className ?? ""}`}>
      {variant === "narrow" ? (
        <div className={styles.inner}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
