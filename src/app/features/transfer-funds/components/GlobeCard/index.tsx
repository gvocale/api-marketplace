import Link from "next/link";
import { ArrowDown } from "../../icons/ArrowDown";
import { ArrowRight } from "../../icons/ArrowRight";
import styles from "./index.module.scss";

type GlobeCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
};

export function GlobeCard({
  title,
  description,
  href,
  icon,
  isActive,
}: GlobeCardProps) {
  return (
    <Link
      className={`${styles.globeCard} ${isActive ? styles.isActive : ""}`}
      href={href}
    >
      <div className={styles.iconContainer}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonIconMask}>
        <div className={styles.buttonIconContainer}>
          <div className={styles.buttonIcon}>
            {isActive ? <ArrowDown /> : <ArrowRight />}
          </div>
          <div className={styles.buttonIcon}>
            {isActive ? <ArrowDown /> : <ArrowRight />}
          </div>
        </div>
      </div>
    </Link>
  );
}
