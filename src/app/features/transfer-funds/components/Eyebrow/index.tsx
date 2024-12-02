import styles from "./index.module.scss";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${styles.eyebrow} ${className}`}>{children}</div>;
}
