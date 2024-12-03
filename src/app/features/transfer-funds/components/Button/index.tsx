import styles from "./index.module.scss";
import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonBaseProps = {
  variant: "primary" | "secondary" | "outline";
  size: "sm" | "lg";
};

type ButtonAsLinkProps = ButtonBaseProps & {
  as: typeof Link;
  href: string;
} & Omit<ComponentProps<typeof Link>, "as">;

type ButtonAsButtonProps = ButtonBaseProps & {
  as?: "button";
} & ComponentProps<"button">;

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button({
  variant,
  size,
  as: Component = "button",
  ...props
}: ButtonProps) {
  if (Component === "button") {
    return (
      <button
        className={`${styles[variant]} ${styles.button} ${styles[size]}`}
        {...(props as ComponentProps<"button">)}
      />
    );
  }
  return (
    <Component
      className={`${styles[variant]} ${styles.button} ${styles[size]}`}
      {...(props as ComponentProps<typeof Link>)}
    />
  );
}
