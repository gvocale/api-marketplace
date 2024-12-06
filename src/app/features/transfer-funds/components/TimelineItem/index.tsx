import { TimelineId } from "@/app/features/types";
import { motion } from "motion/react";
import { useContext, useRef } from "react";
import { InViewContext } from "../../context/in-view";
import { InView } from "../InView";
import { Paragraph } from "../Paragraph";
import { Tag } from "../Tag";
import styles from "./index.module.scss";
import Link from "next/link";

export function TimelineItem({
  icon,
  tag,
  title,
  description,
  id,
}: {
  icon: React.ReactNode;
  id: TimelineId;
  tag?: string;
  title: string;
  description: React.ReactNode;
}) {
  const { inView } = useContext(InViewContext);
  const isActive = inView === id;
  const ref = useRef<HTMLLIElement>(null);

  function handleFocus() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <li className={`${styles.root}`} id={id} ref={ref}>
      <InView id={id} type="timeline">
        <Link className={styles.card} href={`#${id}`} onFocus={handleFocus}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            {tag && <Tag className={styles.tag}>{tag}</Tag>}
          </div>
          <motion.div
            animate={{ height: isActive ? "auto" : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className={styles.content}
          >
            <Paragraph>{description}</Paragraph>
            <div className={styles.icon}>{icon}</div>
          </motion.div>
        </Link>
      </InView>
    </li>
  );
}
