import styles from "./index.module.scss";

export function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`${styles.paragraph}${className ?? ""}`}>{children}</p>;
}
