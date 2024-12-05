import { useEffect, useRef, useState } from "react";
import { InViewItem } from "../../context/in-view";
import { Tag } from "../Tag";
import styles from "./index.module.scss";
import { motion, useInView } from "motion/react";
import { Paragraph } from "../Paragraph";

export function TimelineItem({
  icon,
  tag,
  title,
  description,
}: {
  icon: React.ReactNode;
  itemId: InViewItem;
  tag: string;
  title: string;
  description: React.ReactNode;
}) {
  const [position, setPosition] = useState("");
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const { boundingClientRect } = entry;
      const { top, bottom } = boundingClientRect;

      if (bottom < 0) {
        setPosition("above");
      } else if (top > window.innerHeight) {
        setPosition("below");
      } else {
        setPosition("inView");
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return (
    <li className={`${styles.root}`} ref={ref} data-position={position}>
      <div className={styles.container}>
        <div className={styles.before}>
          <div className={styles.circle} />
        </div>
        <motion.div
          animate={{ transform: isInView ? "scale(1.1)" : "scale(1)" }}
          className={styles.card}
        >
          <motion.div
            animate={{ opacity: isInView ? 1 : 0 }}
            className={styles.iconContainer}
          >
            <div className={styles.icon}>{icon}</div>
          </motion.div>
          <div className={styles.contentInner}>
            <h3 className={styles.title}>{title}</h3>
            <motion.div
              animate={{ height: isInView ? "auto" : 0 }}
              className={styles.mask}
            >
              <Tag className={styles.tag}>{tag}</Tag>
              <Paragraph>{description}</Paragraph>
            </motion.div>
          </div>
        </motion.div>
        <div className={styles.after}>
          <div className={styles.circle} />
        </div>
      </div>
    </li>
  );
}
