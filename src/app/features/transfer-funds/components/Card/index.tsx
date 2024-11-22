import styles from "./index.module.scss";

export interface CardProps {
  index: number;
  title: string;
  description: string;
  isActive: boolean;
}

export function Card({ index, title, description, isActive }: CardProps) {
  return (
    <div className={`${styles.root} ${isActive && styles.active}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.index}>{index}</div>
    </div>
  );
}
