import styles from "./index.module.scss";
import { Card } from "../Card";

export function Cards() {
  return (
    <ul className={styles.root}>
      <li className={styles.item}>
        <Card
          index={1}
          title="Initiate a payment"
          description="Send payments via high&#x2011;value payment networks, in more than 30 currencies."
          isActive={true}
        />
      </li>
      <li className={styles.item}>
        <Card
          index={2}
          title="Track a payment"
          description="Track the status of Funds Transfers on real&#x2011;time basis."
          isActive={false}
        />
      </li>
      <li className={styles.item}>
        <Card
          index={3}
          title="Reconcile a payment"
          description="Filter your report request based on time stamps, UETR, sender, receiver, and more."
          isActive={false}
        />
      </li>
    </ul>
  );
}
