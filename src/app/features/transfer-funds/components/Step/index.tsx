import styles from "./index.module.scss";

export interface StepProps {
  path?: string;
  title: string;
  description: string;
  author: string;
}

export function Step({ title, path, description, author }: StepProps) {
  return (
    <div className={styles.root}>
      <div className={styles.icon}></div>
      <div className={styles.author}>{author}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {path && <code className={styles.path}>{path}</code>}
    </div>
  );
}
