import { ProgressItem } from "../ProgressItem";
import styles from "./index.module.scss";

export function Progress({
  size,
  className,
}: {
  size: "sm" | "lg";
  className?: string;
}) {
  return (
    <ol className={`${styles.progress} ${className}`}>
      <li>
        <ProgressItem
          href="/products/transfer-funds/initiate-a-payment"
          size={size}
        >
          Initiate a payment
        </ProgressItem>
      </li>
      <li>
        <ProgressItem
          href="/products/transfer-funds/track-a-payment"
          size={size}
        >
          Track a payment
        </ProgressItem>
      </li>
      <li>
        <ProgressItem
          href="/products/transfer-funds/reconcile-a-payment"
          size={size}
        >
          Reconcile a payment
        </ProgressItem>
      </li>
    </ol>
  );
}
