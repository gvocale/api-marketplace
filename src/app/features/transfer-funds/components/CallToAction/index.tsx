import Link from "next/link";
import { Button } from "../Button";
import { Container } from "../Container";
import styles from "./index.module.scss";

export function CallToAction() {
  return (
    <Container>
      <div className={styles.centerAligned}>
        <h3 className={styles.h2}>Learn how to initiate a wire payment</h3>
        <Button variant="primary" as={Link} href="/">
          Get Started
        </Button>
      </div>
    </Container>
  );
}
