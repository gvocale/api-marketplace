import styles from "./index.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "narrow";
  id?: string;
}

export function Container({
  children,
  variant = "default",
  className,
  id,
}: ContainerProps) {
  return (
    <div
      className={`${styles.root} ${styles[variant]} ${className ?? ""}`}
      id={id}
    >
      {variant === "narrow" ? (
        <div className={styles.inner}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
