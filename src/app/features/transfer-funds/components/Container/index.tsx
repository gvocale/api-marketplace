import styles from "./index.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`${styles.cotnainer} ${className ?? ""}`}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
