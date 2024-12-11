"use client";

import { FinancialMessagingStandard, TimelineId } from "@/app/features/types";
import { useContext } from "react";
import { UserConfigContext } from "../../context/user-config";
import { CurrencyExchanged } from "../../svg-images/CurrencyExchanged";
import { DetailsReceived } from "../../svg-images/DetailsReceived";
import { InitiateTransfer } from "../../svg-images/InitiateTransfer";
import { MessageCreated } from "../../svg-images/MessageCreated";
import { RecipientAccountCredited } from "../../svg-images/RecipientAccountCredited";
import { TransferConfirmed } from "../../svg-images/TransferConfirmed";
import { TransmittedToBank } from "../../svg-images/TransmittedToBank";
import { Container } from "../Container";
import { Grid } from "../Grid";
import { InlineCode } from "../InlineCode";
import { TimelineIndexDivider } from "../TimelineIndexDivider";
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
          <>
            <TimelineItem
              id={TimelineId.SWIFT_1_CUSTOMER}
              icon={<InitiateTransfer />}
              title="Initiate Transfer"
              description="A customer initiates a wire transfer."
            />

            <TimelineItem
              icon={<DetailsReceived />}
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
              icon={<MessageCreated />}
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
              icon={<TransmittedToBank />}
              id={TimelineId.SWIFT_4_INTERMEDIARY_BANK_A}
              title="Transmitted to Bank"
              description="The message is transmitted through the Swift network to the recipient's bank."
            />

            <TimelineItem
              id={TimelineId.SWIFT_5_INTERMEDIARY_BANK_B}
              icon={<CurrencyExchanged />}
              title="Currency Exchanged"
              description="Multiple intermediary banks can be involved in case of currency exchange."
            />

            <TimelineItem
              icon={<RecipientAccountCredited />}
              id={TimelineId.SWIFT_6_BENEFICIARY_BANK}
              title="Recipient Account Credited"
              description="The recipient's bank processes the message and credits the recipient's account."
            />

            <TimelineItem
              icon={<TransferConfirmed />}
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
              icon={<InitiateTransfer />}
              id={TimelineId.PACS_1_CUSTOMER}
              tag="Initiation"
              title="Debtor"
              description="The ordering customer or institution initiates the wire transfer request through their financial institution, providing all necessary payment details, such as the amount, currency, and beneficiary information."
            />

            <TimelineItem
              icon={<DetailsReceived />}
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
              icon={<MessageCreated />}
              id={TimelineId.PACS_3_DEBTOR_AGENT}
              title="Debtor Agent"
              tag="Message Creation"
              description="The message is created by the debtor's bank, containing all necessary details for the transfer."
            />

            <TimelineItem
              icon={<TransmittedToBank />}
              id={TimelineId.PACS_4_INTERMEDIARY_AGENT}
              tag="Transmission"
              title="Intermediary Agent 1"
              description="Any intermediary banks involved in the payment chain also receive the message."
            />

            <TimelineItem
              icon={<CurrencyExchanged />}
              id={TimelineId.PACS_5_CREDITOR_AGENT}
              title="Creditor Agent"
              tag="Processing"
              description="Upon receiving the pacs.008 message, the beneficiary's bank processes the payment according to the instructions provided."
            />

            <TimelineItem
              icon={<RecipientAccountCredited />}
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
