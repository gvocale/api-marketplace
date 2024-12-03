import { motion } from "motion/react";
import styles from "./index.module.scss";

export function TimelineItem({
  children,
  icon,
  isActive,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <li className={`${styles.root} ${isActive ? styles.isActive : ""}`}>
      <div className={styles.spacer} />
      <motion.div
        className={styles.icon}
        animate={{
          width: isActive ? "3rem" : "0.1rem",
          height: isActive ? "3rem" : "0.1rem",
        }}
      >
        {icon}
      </motion.div>
      <h3 className={styles.label}>{children}</h3>
    </li>
  );
}
