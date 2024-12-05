import { Id } from "@/app/features/types";
import { motion, useInView } from "motion/react";
import { ReactNode, useContext, useEffect, useRef } from "react";
import { InViewContext } from "../../context/in-view";
import { InlineCode } from "../InlineCode";
import { Tag } from "../Tag";
import styles from "./index.module.scss";

export interface StepProps {
  icon: ReactNode;
  tag: string;
  title: string;
  description: string;
  path?: string;
  itemId: Id;
}

export function Step({
  icon,
  tag,
  title,
  description,
  path,
  itemId,
}: StepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setInView } = useContext(InViewContext);

  useEffect(() => {
    if (isInView) {
      setInView(itemId);
    }
  }, [isInView, setInView, itemId]);

  return (
    <div className={styles.root} ref={ref}>
      <motion.div
        className={styles.card}
        animate={{
          opacity: isInView ? 1 : 0,
          pointerEvents: isInView ? "auto" : "none",
        }}
      >
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div>
            <Tag className={styles.tag}>{tag}</Tag>
            <p className={styles.description}>{description}</p>
            {path && (
              <InlineCode className={styles.inlineCode}>{path}</InlineCode>
            )}
          </div>
          <div className={styles.icon}>{icon}</div>
        </div>
      </motion.div>
    </div>
  );
}
