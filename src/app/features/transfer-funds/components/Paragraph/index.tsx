import styles from "./index.module.scss";

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className={styles.paragraph}>{children}</p>;
}
