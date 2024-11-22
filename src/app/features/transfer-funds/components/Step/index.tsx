import styles from "./index.module.scss";

export interface StepProps {
  title: string;
}

export function Step({ title }: StepProps) {
  return (
    <div className={styles.root}>
      <h3>{title}</h3>
      <p>description</p>
    </div>
  );
}
