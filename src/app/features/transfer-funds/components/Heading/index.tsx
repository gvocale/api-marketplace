import styles from "./index.module.scss";

export function Heading({
  as,
  children,
  className,
  id,
  size,
}: {
  as: "h2" | "h3" | "h4" | "h5";
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "xl" | "2xl" | "lg" | "md";
}) {
  const Tag = as;

  let sizeClass: "xl" | "xxl" | "lg" | "md" | undefined;

  switch (size) {
    case "2xl":
      sizeClass = "xxl";
      break;
    default:
      sizeClass = size;
      break;
  }

  return (
    <Tag
      className={`${styles.heading} ${sizeClass ? styles[sizeClass] : ""}  ${
        className ?? ""
      }`}
      id={id}
    >
      {children}
    </Tag>
  );
}
