"use client";

import { FinancialMessagingStandard } from "@/app/features/types";
import { useContext } from "react";
import { InViewContext, InViewItem } from "../../context/in-view";
import { UserConfigContext } from "../../context/user-config";
import { Beneficiary } from "../../icons/Beneficiary";
import { BeneficiaryBank } from "../../icons/BeneficiaryBank";
import { Customer } from "../../icons/Customer";
import { IntermediaryBank } from "../../icons/IntermediaryBank";
import { MoneyTransaction } from "../../icons/MoneyTransaction";
import { WebsiteEndpoint } from "../../icons/WebsiteEndpoint";
import { TimelineItem } from "../TimelineItem";
import styles from "./index.module.scss";

export function Timeline() {
  const { config } = useContext(UserConfigContext);
  const { messagingStandard } = config;
  const { inView } = useContext(InViewContext);

  switch (messagingStandard) {
    case FinancialMessagingStandard.SWIFT:
      return (
        <ul className={styles.timeline}>
          <TimelineItem
            isActive={inView === InViewItem.OrderingCustomer}
            icon={<Customer />}
          >
            Ordering Customer
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.ClientHostApplication}
            icon={<WebsiteEndpoint />}
          >
            Client Host Application
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.OrderingInstitution}
            icon={<MoneyTransaction />}
          >
            Ordering Institution
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.IntermediaryBankA}
            icon={<IntermediaryBank />}
          >
            Intermediary Bank A
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.IntermediaryBankB}
            icon={<IntermediaryBank />}
          >
            Intermediary Bank B
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.BeneficiaryBank}
            icon={<BeneficiaryBank />}
          >
            Beneficiary Bank
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.Beneficiary}
            icon={<Beneficiary />}
          >
            Beneficiary
          </TimelineItem>
        </ul>
      );
    case FinancialMessagingStandard.PACS:
      return (
        <ul className={styles.timeline}>
          <TimelineItem
            isActive={inView === InViewItem.Debtor}
            icon={<Customer />}
          >
            Debtor
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.ClientHostApplication}
            icon={<WebsiteEndpoint />}
          >
            Client Host Application
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.DebtorAgent}
            icon={<MoneyTransaction />}
          >
            Debtor Agent
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.IntermediaryAgent1}
            icon={<IntermediaryBank />}
          >
            Intermediary Agent 1
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.IntermediaryBank}
            icon={<IntermediaryBank />}
          >
            Creditor Agent
          </TimelineItem>
          <div className={styles.divider}></div>
          <TimelineItem
            isActive={inView === InViewItem.Creditor}
            icon={<BeneficiaryBank />}
          >
            Creditor
          </TimelineItem>
        </ul>
      );
  }
}
