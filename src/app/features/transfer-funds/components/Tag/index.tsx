import styles from "./index.module.scss";

export function Tag({
  as = "span",
  children,
  className,
}: {
  as?: "span" | "code";
  children: React.ReactNode;
  className?: string;
}) {
  const Element = as;
  return (
    <Element className={`${styles.root} ${className ?? ""}`}>
      {children}
    </Element>
  );
}
