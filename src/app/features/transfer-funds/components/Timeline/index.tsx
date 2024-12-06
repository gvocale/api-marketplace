"use client";

import { FinancialMessagingStandard, TimelineId } from "@/app/features/types";
import { useContext } from "react";
import { UserConfigContext } from "../../context/user-config";
import { Beneficiary } from "../../icons/Beneficiary";
import { BeneficiaryBank } from "../../icons/BeneficiaryBank";
import { Currencies } from "../../icons/Currencies";
import { Customer } from "../../icons/Customer";
import { IntermediaryBank } from "../../icons/IntermediaryBank";
import { MoneyTransaction } from "../../icons/MoneyTransaction";
import { WebsiteEndpoint } from "../../icons/WebsiteEndpoint";
import { Container } from "../Container";
import { InlineCode } from "../InlineCode";
import { TimelineIndexItem } from "../TimelineIndexItem";
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
              id={TimelineId.SWIFT_1_CUSTOMER}
              icon={<Customer />}
              tag="Initiation"
              title="Ordering Customer"
              description="A customer initiates a wire transfer."
            />

            <TimelineItem
              icon={<WebsiteEndpoint />}
              id={TimelineId.SWIFT_2_CLIENT_HOST_APPLICATION}
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
              id={TimelineId.SWIFT_3_ORDERING_CUSTOMER}
              tag="Message Creation"
              title="Ordering Institution"
              description="The MT 103 message is created, containing all necessary details for the transfer."
            />

            <TimelineItem
              icon={<IntermediaryBank />}
              id={TimelineId.SWIFT_4_INTERMEDIARY_BANK_A}
              tag="Transmission"
              title="Intermediary Bank A"
              description="The message is transmitted through the Swift network to the recipient's bank."
            />

            <TimelineItem
              id={TimelineId.SWIFT_5_INTERMEDIARY_BANK_B}
              icon={<Currencies />}
              title="Intermediary Bank B"
              description="Multiple intermediary banks can be involved in case of currency exchange."
            />

            <TimelineItem
              icon={<BeneficiaryBank />}
              id={TimelineId.SWIFT_6_BENEFICIARY_BANK}
              tag="Processing"
              title="Beneficiary Bank"
              description="The recipient's bank processes the message and credits the recipient's account."
            />

            <TimelineItem
              icon={<Beneficiary />}
              id={TimelineId.SWIFT_7_BENEFICIARY}
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
              id={TimelineId.PACS_1_CUSTOMER}
              tag="Initiation"
              title="Debtor"
              description="The ordering customer or institution initiates the wire transfer request through their financial institution, providing all necessary payment details, such as the amount, currency, and beneficiary information."
            />

            <TimelineItem
              icon={<WebsiteEndpoint />}
              id={TimelineId.PACS_2_CLIENT_HOST_APPLICATION}
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
              id={TimelineId.PACS_3_DEBTOR_AGENT}
              title="Debtor Agent"
              tag="Message Creation"
              description="The message is created by the debtor's bank, containing all necessary details for the transfer."
            />

            <TimelineItem
              icon={<IntermediaryBank />}
              id={TimelineId.PACS_4_INTERMEDIARY_AGENT}
              tag="Transmission"
              title="Intermediary Agent 1"
              description="Any intermediary banks involved in the payment chain also receive the message."
            />

            <TimelineItem
              icon={<IntermediaryBank />}
              id={TimelineId.PACS_5_CREDITOR_AGENT}
              title="Creditor Agent"
              tag="Processing"
              description="Upon receiving the pacs.008 message, the beneficiary's bank processes the payment according to the instructions provided."
            />

            <TimelineItem
              icon={<BeneficiaryBank />}
              id={TimelineId.PACS_6_CREDITOR}
              tag="Confirmation"
              title="Creditor"
              description="After processing, a confirmation message is sent back to the initiating bank, confirming that the payment has been successfully completed."
            />
          </ul>
        );
    }
  }

  function renderTimelineIndex() {
    switch (messagingStandard) {
      case FinancialMessagingStandard.SWIFT:
        return (
          <>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.SWIFT_1_CUSTOMER}
            >
              Customer
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.SWIFT_2_CLIENT_HOST_APPLICATION}
            >
              Client Host Application
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.SWIFT_3_ORDERING_CUSTOMER}
            >
              Ordering Institution
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.SWIFT_4_INTERMEDIARY_BANK_A}
            >
              Intermediary Bank A
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.SWIFT_5_INTERMEDIARY_BANK_B}
            >
              Intermediary Bank B
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.SWIFT_6_BENEFICIARY_BANK}
            >
              Beneficiary Bank
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.SWIFT_7_BENEFICIARY}
            >
              Beneficiary
            </TimelineIndexItem>
          </>
        );
      case FinancialMessagingStandard.PACS:
        return (
          <>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.PACS_1_CUSTOMER}
            >
              Debtor
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.PACS_2_CLIENT_HOST_APPLICATION}
            >
              Client Host Application
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.PACS_3_DEBTOR_AGENT}
            >
              Debtor Agent
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.PACS_4_INTERMEDIARY_AGENT}
            >
              Intermediary Agent 1
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.PACS_5_CREDITOR_AGENT}
            >
              Creditor Agent
            </TimelineIndexItem>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <TimelineIndexItem
              className={styles.indexItem}
              id={TimelineId.PACS_6_CREDITOR}
            >
              Creditor
            </TimelineIndexItem>
          </>
        );
    }
  }

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.indexContainer}>
          <ol className={styles.index}>{renderTimelineIndex()}</ol>
        </div>
        <div className={styles.timelineContainer}>{renderTimeline()}</div>
      </div>
    </Container>
  );
}
