import { Step } from "../Step";
import styles from "./index.module.scss";
export function Steps() {
  return (
    <ol className={styles.steps}>
      <li>
        <Step title="Debtor" />
      </li>
      <li>
        <Step title="Client Host Application" />
      </li>
      <li>
        <Step title="Debtor Agent" />
      </li>
      <li>
        <Step title="Intermediary Agent 1" />
      </li>
      <li>
        <Step title="Creditor Agent" />
      </li>
      <li>
        <Step title="Creditor" />
      </li>
    </ol>
  );
}
