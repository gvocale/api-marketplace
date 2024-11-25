import styles from "./index.module.scss";

export function Divider({ className }: { className?: string }) {
  return <hr className={`${styles.divider} ${className ?? ""}`} />;
}
