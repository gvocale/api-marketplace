import { Container } from "../Container";
import { Progress } from "../Progress";
import styles from "./index.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.h1}>Transfer Funds</h1>
          <Progress />
        </div>
      </Container>
    </header>
  );
}
