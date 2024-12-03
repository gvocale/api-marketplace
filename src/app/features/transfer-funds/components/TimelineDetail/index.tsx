import { ReactNode, useRef } from "react";
import styles from "./index.module.scss";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export interface TimelineDetailProps {
  icon: ReactNode;
  title: string;
  description: string;
  author: string;
  path?: string;
}

export function TimelineDetail({ icon, title, description, author, path }: TimelineDetailProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    <div className={styles.root} ref={ref}>
      <motion.div
        className={styles.card}
        style={{
          scale: useTransform(scale, [0, 1], [0.7, 1]),
          filter: useTransform(
            scale,
            [0, 1],
            ["brightness(0.8)", "brightness(1)"]
          ),
        }}
      >
        <div className={styles.content}>
          <div className={styles.title}>{author}</div>
          <div>
            <div className={styles.tag}>{title}</div>
            <p className={styles.description}>{description}</p>
            {path && <code className={styles.path}>{path}</code>}
          </div>
          <div className={styles.icon}>{icon}</div>
        </div>
      </motion.div>
    </div>
  );
}
