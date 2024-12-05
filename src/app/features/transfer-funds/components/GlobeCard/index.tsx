import { ArrowRight } from "../../icons/ArrowRight";
import { IconButton } from "../IconButton";
import styles from "./index.module.scss";

type GlobeCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function GlobeCard({ title, description, icon }: GlobeCardProps) {
  return (
    <div className={styles.globeCard}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      <IconButton
        variant="ghost"
        size="sm"
        icon={<ArrowRight />}
        className={styles.iconButton}
      />
    </div>
  );
}
