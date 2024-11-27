import { ProgressItem } from "../ProgressItem";
import styles from "./index.module.scss";

export function Progress({ className }: { className?: string }) {
  return (
    <ol className={`${styles.progress} ${className}`}>
      <li>
        <ProgressItem href="/products/transfer-funds/initiate-a-payment">
          Initiate a payment
        </ProgressItem>
      </li>
      <li>
        <ProgressItem href="/products/transfer-funds/track-a-payment">
          Track a payment
        </ProgressItem>
      </li>
      <li>
        <ProgressItem href="/products/transfer-funds/reconcile-a-payment">
          Reconcile a payment
        </ProgressItem>
      </li>
    </ol>
  );
}
