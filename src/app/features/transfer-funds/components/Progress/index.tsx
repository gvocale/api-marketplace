import { ArrowRight } from "../../svg-images/ArrowRight";
import { ProgressItem } from "../ProgressItem";
import styles from "./index.module.scss";

export function Progress({ className }: { className?: string }) {
  return (
    <ol className={`${styles.progress} ${className ?? ""}`}>
      <li>
        <ProgressItem
          href="/products/transfer-funds/initiate-a-payment"
          isActive={true}
        >
          Initiate a payment
        </ProgressItem>
      </li>
      <ArrowRight />
      <li>
        <ProgressItem
          href="/products/transfer-funds/track-a-payment"
          isActive={false}
        >
          Track a payment
        </ProgressItem>
      </li>

      <ArrowRight />

      <li>
        <ProgressItem
          href="/products/transfer-funds/reconcile-a-payment"
          isActive={false}
        >
          Reconcile a payment
        </ProgressItem>
      </li>
    </ol>
  );
}
