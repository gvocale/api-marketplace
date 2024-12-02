import styles from "./index.module.scss";
import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonBaseProps = {
  variant: "primary" | "secondary" | "outline";
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
  as: Component = "button",
  ...props
}: ButtonProps) {
  if (Component === "button") {
    return (
      <button
        className={styles[variant]}
        {...(props as ComponentProps<"button">)}
      />
    );
  }
  return (
    <Component
      className={styles[variant]}
      {...(props as ComponentProps<typeof Link>)}
    />
  );
}
