import { TransferFunds } from "@/app/features/transfer-funds/components/TransferFunds";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Initiate a Payment",
};

export default function TransferFundsPage() {
  return <TransferFunds />;
}
