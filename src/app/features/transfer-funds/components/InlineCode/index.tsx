import styles from "./index.module.scss";

export function InlineCode({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <code className={`${styles.inlineCode} ${className}`}>{children}</code>
  );
}
