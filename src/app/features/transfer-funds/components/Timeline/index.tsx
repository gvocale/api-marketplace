"use client";

import { FinancialMessagingStandard } from "@/app/features/types";
import { useContext } from "react";
import { InViewItem } from "../../context/in-view";
import { UserConfigContext } from "../../context/user-config";
import { Beneficiary } from "../../icons/Beneficiary";
import { BeneficiaryBank } from "../../icons/BeneficiaryBank";
import { Currencies } from "../../icons/Currencies";
import { Customer } from "../../icons/Customer";
import { IntermediaryBank } from "../../icons/IntermediaryBank";
import { MoneyTransaction } from "../../icons/MoneyTransaction";
import { WebsiteEndpoint } from "../../icons/WebsiteEndpoint";
import { InlineCode } from "../InlineCode";
import { TimelineItem } from "../TimelineItem";
import styles from "./index.module.scss";

export function Timeline() {
  const { config } = useContext(UserConfigContext);
  const { messagingStandard } = config;

  function renderTimeline() {
    switch (messagingStandard) {
      case FinancialMessagingStandard.SWIFT:
        return (
          <ul className={styles.timeline}>
            <TimelineItem
              itemId={InViewItem.Customer}
              icon={<Customer />}
              tag="Initiation"
              title="Ordering Customer"
              description="A customer initiates a wire transfer."
            />

            <TimelineItem
              icon={<WebsiteEndpoint />}
              itemId={InViewItem.ClientHostApplication}
              tag="Initiation"
              title="Client Host Application"
              description={
                <>
                  Our <InlineCode>/payments</InlineCode> API endpoint, receives
                  details such as the sender&apos;s and recipient&apos;s bank
                  information, amount, and currency.
                </>
              }
            />

            <TimelineItem
              icon={<MoneyTransaction />}
              itemId={InViewItem.OrderingInstitution}
              tag="Message Creation"
              title="Ordering Institution"
              description="The MT 103 message is created, containing all necessary details for the transfer."
            />

            <TimelineItem
              icon={<IntermediaryBank />}
              itemId={InViewItem.IntermediaryBankA}
              tag="Transmission"
              title="Intermediary Bank A"
              description="The message is transmitted through the Swift network to the recipient's bank."
            />

            <TimelineItem
              itemId={InViewItem.IntermediaryBankB}
              icon={<Currencies />}
              tag="Transmission"
              title="Intermediary Bank B"
              description="Multiple intermediary banks can be involved in case of currency exchange."
            />

            <TimelineItem
              icon={<BeneficiaryBank />}
              itemId={InViewItem.BeneficiaryBank}
              tag="Processing"
              title="Beneficiary Bank"
              description="The recipient's bank processes the message and credits the recipient's account."
            />

            <TimelineItem
              icon={<Beneficiary />}
              itemId={InViewItem.Beneficiary}
              tag="Confirmation"
              title="Beneficiary"
              description="Confirmation of the transfer is sent back to the sender, completing the transaction."
            />
          </ul>
        );
      case FinancialMessagingStandard.PACS:
        return (
          <ul className={styles.timeline}>
            <TimelineItem
              icon={<Customer />}
              itemId={InViewItem.Customer}
              tag="Initiation"
              title="Debtor"
              description="The ordering customer or institution initiates the wire transfer request through their financial institution, providing all necessary payment details, such as the amount, currency, and beneficiary information."
            />

            <TimelineItem
              icon={<WebsiteEndpoint />}
              itemId={InViewItem.ClientHostApplication}
              tag="Initiation"
              title="Client Host Application"
              description={
                <>
                  Our <InlineCode>/payments</InlineCode> API endpoint, receives
                  details such as the sender&apos;s and recipient&apos;s bank
                  information, amount, and currency.
                </>
              }
            />

            <TimelineItem
              icon={<MoneyTransaction />}
              itemId={InViewItem.DebtorAgent}
              tag="Message Creation"
              title="Debtor Agent"
              description="The message is created by the debtor's bank, containing all necessary details for the transfer."
            />

            <TimelineItem
              icon={<IntermediaryBank />}
              itemId={InViewItem.IntermediaryAgent}
              tag="Transmission"
              title="Intermediary Agent 1"
              description="Any intermediary banks involved in the payment chain also receive the message."
            />

            <TimelineItem
              icon={<IntermediaryBank />}
              itemId={InViewItem.CreditorAgent}
              tag="Transmission"
              title="Creditor Agent"
              description="Upon receiving the pacs.008 message, the beneficiary's bank processes the payment according to the instructions provided."
            />

            <TimelineItem
              icon={<BeneficiaryBank />}
              itemId={InViewItem.Creditor}
              tag="Confirmation"
              title="Creditor"
              description="After processing, a confirmation message is sent back to the initiating bank, confirming that the payment has been successfully completed."
            />
          </ul>
        );
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.lineContainer}>
        <div className={styles.line} />
      </div>
      <div className={styles.timelineContainer}>{renderTimeline()}</div>
    </div>
  );
}
