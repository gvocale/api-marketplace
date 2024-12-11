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
import { TimelineIndexDivider } from "../TimelineIndexDivider";
import { Grid } from "../Grid";

export function Timeline() {
  const { config } = useContext(UserConfigContext);
  const { messagingStandard } = config;

  function renderTimeline() {
    switch (messagingStandard) {
      case FinancialMessagingStandard.SWIFT:
        return (
          <>
            <TimelineItem
              id={TimelineId.SWIFT_1_CUSTOMER}
              icon={<Customer />}
              title="Initiate Transfer"
              description="A customer initiates a wire transfer."
            />

            <TimelineItem
              icon={<WebsiteEndpoint />}
              id={TimelineId.SWIFT_2_CLIENT_HOST_APPLICATION}
              title="Details Received"
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
              title="Message Created"
              description={
                <>
                  The <InlineCode>MT 103</InlineCode> message is created,
                  containing all necessary details for the transfer.
                </>
              }
            />

            <TimelineItem
              icon={<IntermediaryBank />}
              id={TimelineId.SWIFT_4_INTERMEDIARY_BANK_A}
              title="Transmitted to Bank"
              description="The message is transmitted through the Swift network to the recipient's bank."
            />

            <TimelineItem
              id={TimelineId.SWIFT_5_INTERMEDIARY_BANK_B}
              icon={<Currencies />}
              title="Currency Exchanged"
              description="Multiple intermediary banks can be involved in case of currency exchange."
            />

            <TimelineItem
              icon={<BeneficiaryBank />}
              id={TimelineId.SWIFT_6_BENEFICIARY_BANK}
              title="Recipient Account Credited"
              description="The recipient's bank processes the message and credits the recipient's account."
            />

            <TimelineItem
              icon={<Beneficiary />}
              id={TimelineId.SWIFT_7_BENEFICIARY}
              title="Transfer Confirmed"
              description="Confirmation of the transfer is sent back to the sender, completing the transaction."
            />
          </>
        );
      case FinancialMessagingStandard.PACS:
        return (
          <>
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
          </>
        );
    }
  }

  function renderTimelineIndex() {
    switch (messagingStandard) {
      case FinancialMessagingStandard.SWIFT:
        return (
          <>
            <TimelineIndexItem id={TimelineId.SWIFT_1_CUSTOMER}>
              Initiate Transfer
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.SWIFT_2_CLIENT_HOST_APPLICATION}>
              Details Received
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.SWIFT_3_ORDERING_CUSTOMER}>
              Message Created
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.SWIFT_4_INTERMEDIARY_BANK_A}>
              Transmitted to Bank
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.SWIFT_5_INTERMEDIARY_BANK_B}>
              Currency Exchanged
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.SWIFT_6_BENEFICIARY_BANK}>
              Recipient Account Credited
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.SWIFT_7_BENEFICIARY}>
              Transfer Confirmed
            </TimelineIndexItem>
          </>
        );
      case FinancialMessagingStandard.PACS:
        return (
          <>
            <TimelineIndexItem id={TimelineId.PACS_1_CUSTOMER}>
              Debtor
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.PACS_2_CLIENT_HOST_APPLICATION}>
              Client Host Application
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.PACS_3_DEBTOR_AGENT}>
              Debtor Agent
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.PACS_4_INTERMEDIARY_AGENT}>
              Intermediary Agent 1
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.PACS_5_CREDITOR_AGENT}>
              Creditor Agent
            </TimelineIndexItem>
            <TimelineIndexDivider />
            <TimelineIndexItem id={TimelineId.PACS_6_CREDITOR}>
              Creditor
            </TimelineIndexItem>
          </>
        );
    }
  }

  return (
    <Container>
      <Grid>
        <div className={styles.indexContainer}>
          <ol className={styles.index}>{renderTimelineIndex()}</ol>
        </div>
        <ol className={styles.timeline}>{renderTimeline()}</ol>
      </Grid>
    </Container>
  );
}
