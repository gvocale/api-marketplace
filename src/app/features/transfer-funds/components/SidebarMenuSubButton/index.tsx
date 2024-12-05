"use client";
import { Id } from "@/app/features/types";
import Link, { LinkProps } from "next/link";
import { ReactNode, useContext } from "react";
import { InViewContext } from "../../context/in-view";
import styles from "./index.module.scss";

export function SidebarMenuSubButton({
  children,
  href,
  id,
}: {
  children: ReactNode;
  href: LinkProps["href"];
  id: Id;
}) {
  const { inView } = useContext(InViewContext);
  const isActive = id === inView;

  return (
    <li className={styles.item}>
      <Link
        className={`${styles.button} ${isActive ? styles.isActive : ""}`}
        href={href}
      >
        <span className={styles.label}>{children}</span>
      </Link>
    </li>
  );
}
