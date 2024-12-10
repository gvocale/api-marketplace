import styles from "./index.module.scss";

export interface NoticeProps {
  children: React.ReactNode;
  className?: string;
  size: "sm" | "lg";
}

export function Notice({ children, className, size = "sm" }: NoticeProps) {
  return (
    <div className={`${styles.notice} ${styles[size]} ${className}`}>
      {children}
    </div>
  );
}
