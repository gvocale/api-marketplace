import { TimelineId } from "@/app/features/types";
import { motion } from "motion/react";
import Link from "next/link";
import { useContext } from "react";
import { InViewContext } from "../../context/in-view";
import styles from "./index.module.scss";

export function TimelineIndexItem({
  id,
  children,
  className,
}: {
  id: TimelineId;
  children: React.ReactNode;
  className?: string;
}) {
  const { inView } = useContext(InViewContext);
  const isActive = inView === id;

  return (
    <li
      className={`${styles.timelineIndexItem} ${
        isActive ? styles.isActive : ""
      } ${className}`}
      data-active={isActive}
    >
      <Link className={styles.label} href={`#${id}`}>
        {children}
      </Link>
      <motion.span
        animate={{
          height: isActive ? "1.5rem" : "0.75rem",
          width: isActive ? "1.5rem" : "0.75rem",
        }}
        className={styles.indicator}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className={styles.indicatorInner} />
      </motion.span>
      <span className={styles.spacer} />
    </li>
  );
}
