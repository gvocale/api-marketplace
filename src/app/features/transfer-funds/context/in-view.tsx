"use client";

import { createContext, ReactNode, useState } from "react";

export enum InViewItem {
  Beneficiary = "beneficiary",
  BeneficiaryBank = "beneficiary-bank",
  ClientHostApplication = "client-host-application",
  Creditor = "creditor",
  CreditorAgent = "creditor-agent",
  Customer = "customer",
  DebtorAgent = "debtor-agent",
  IntermediaryAgent = "intermediary-agent",
  IntermediaryBankA = "intermediary-bank-a",
  IntermediaryBankB = "intermediary-bank-b",
  OrderingInstitution = "ordering-institution",
  OrderingCustomer = "ordering-customer",
  Debtor = "debtor",
  IntermediaryAgent1 = "intermediary-agent-1",
  IntermediaryBank = "intermediary-bank",
}

export interface InViewContextType {
  inView: InViewItem | null;
  setInView: React.Dispatch<React.SetStateAction<InViewItem | null>>;
}

export const InViewContext = createContext<InViewContextType>({
  inView: null,
  setInView: () => {},
});

export function InViewProvider({ children }: { children: ReactNode }) {
  const [inView, setInView] = useState<InViewItem | null>(null);

  return (
    <InViewContext.Provider value={{ inView, setInView }}>
      {children}
    </InViewContext.Provider>
  );
}
