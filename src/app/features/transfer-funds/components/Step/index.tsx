import { ReactNode } from "react";
import styles from "./index.module.scss";

export interface StepProps {
  icon: ReactNode;
  title: string;
  description: string;
  author: string;
  path?: string;
}

export function Step({ icon, title, description, author, path }: StepProps) {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.author}>{author}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {path && <code className={styles.path}>{path}</code>}
    </div>
  );
}
