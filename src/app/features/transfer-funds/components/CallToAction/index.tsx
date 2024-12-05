"use client";

import { Button } from "../Button";
import { Container } from "../Container";
import { Globe } from "../Globe";
import { Heading } from "../Heading";
import styles from "./styles.module.scss";

export function CallToAction() {
  return (
    <Container className={styles.callToAction}>
      <div className={styles.background}>
        <div className={styles.globe}>
          <Globe />
        </div>
        <div className={styles.contents}>
          <Heading as="h3" size="2xl" className={styles.heading}>
            Ready to connect?
          </Heading>
          <p className={styles.paragraph}>
            Reach out to learn more about our Treasury Services APIs.
          </p>
          <Button variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </Container>
  );
}
