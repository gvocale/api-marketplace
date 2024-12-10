import { TimelineId } from "@/app/features/types";
import { motion } from "motion/react";
import Link from "next/link";
import { useContext, useRef } from "react";
import { InViewContext } from "../../context/in-view";
import { InView } from "../InView";
import { Paragraph } from "../Paragraph";
import { Tag } from "../Tag";
import styles from "./index.module.scss";

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
        <ConditionalLink
          className={`${styles.card} ${isActive ? styles.isActive : ""}`}
          href={`#${id}`}
          isActive={isActive}
          onFocus={handleFocus}
          tabIndex={isActive ? -1 : 0}
        >
          <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
            {tag && <Tag className={styles.tag}>{tag}</Tag>}
            <Paragraph size="lg">{description}</Paragraph>
          </div>
          <motion.div
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className={styles.iconContainer}
          >
            <div className={styles.icon}>{icon}</div>
          </motion.div>
        </ConditionalLink>
      </InView>
    </li>
  );
}

function ConditionalLink({
  children,
  href,
  className,
  isActive,
  onFocus,
  tabIndex,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  isActive: boolean;
  onFocus: () => void;
  tabIndex: number;
}) {
  if (isActive) {
    return <div className={className}>{children}</div>;
  } else {
    return (
      <Link
        href={href}
        className={className}
        onFocus={onFocus}
        tabIndex={tabIndex}
      >
        {children}
      </Link>
    );
  }
}
