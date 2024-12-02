import styles from "./index.module.scss";

export function Table({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <table className={`${styles.table} ${className ?? ""}`}>{children}</table>
  );
}
