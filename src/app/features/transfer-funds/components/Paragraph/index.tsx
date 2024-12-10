import styles from "./index.module.scss";

export function Paragraph({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size: "xs" | "sm" | "lg";
}) {
  return (
    <p
      className={`${styles.paragraph} ${size ? styles[size] : ""} ${
        className ?? ""
      }`}
    >
      {children}
    </p>
  );
}
