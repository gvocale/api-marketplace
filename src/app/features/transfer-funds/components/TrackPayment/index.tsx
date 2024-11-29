import { Container } from "../Container";
import { TextLink } from "../TextLink";
import styles from "./index.module.scss";

export function TrackPayment() {
  return (
    <Container variant="narrow">
      <h3 className={styles.h3}>Track Your Payment</h3>
      <p className={styles.paragraph}>
        Next up,{" "}
        <TextLink href="https://marketplace.bnymellon.com/treasury/api-central/#/tracking-page">
          track your payment
        </TextLink>{" "}
        and{" "}
        <TextLink href="https://marketplace.bnymellon.com/treasury/api-central/#/fundsTransfer-notif">
          set up your funds transfer notifications
        </TextLink>
        .
      </p>
    </Container>
  );
}
