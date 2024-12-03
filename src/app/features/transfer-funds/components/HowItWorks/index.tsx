"use client";

import { Anchors, FinancialMessagingStandard } from "@/app/features/types";
import { useContext } from "react";
import { UserConfigContext } from "../../context/user-config";
import { TextLink } from "../TextLink";
import { Timeline } from "../Timeline";
import { TimelineCards } from "../TimelineCards";
import styles from "./index.module.scss";

export function HowItWorks() {
  const { config } = useContext(UserConfigContext);
  const { messagingStandard } = config;

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.header}>
          <h2 className={styles.h2} id={Anchors.HOW_IT_WORKS}>
            How It Works
          </h2>

          {messagingStandard === FinancialMessagingStandard.SWIFT && (
            <div>
              <p className={styles.paragraph}>
                The Swift MT 103 is an international standard for message
                formatting that facilitates secure and efficient cross-border
                wire transfers between banks for single-customer credit
                transfers used in various types of payments. In the flow seen
                above, an ordering financial institution transmits the Funds
                Transfer instructions (i.e., a Swift MT 103 message) to the next
                financial institution in the payment flow.
              </p>
              <p className={styles.paragraph}>
                See the{" "}
                <TextLink href="https://www2.swift.com/knowledgecentre/publications/usgf_20180720/3.0?topic=finmt103.htm">
                  Swift website
                </TextLink>{" "}
                for full details on the MT 103 specification.
              </p>
            </div>
          )}

          {messagingStandard === FinancialMessagingStandard.PACS && (
            <div>
              <p className={styles.paragraph}>
                The pacs.008.001.0X (pacs.008) message - the{" "}
                <TextLink href="https://www.bnymellon.com/us/en/iso-20022.html">
                  ISO 20022
                </TextLink>{" "}
                equivalent of existing MT 103, MT 103+, MT 103 Remit, MT 102 and
                MT 102+ messages - is part of the CBPR+ portfolio and is
                exchanged in the interbank cross-border leg of payments. It is
                sent by the debtor agent to the creditor agent - directly or
                through other agents and/or a payment clearing and settlement
                system - and is used to move funds from a debtor account to a
                creditor. It provides a structured way to communicate detailed
                payment instructions between financial institutions, ensuring
                accuracy and consistency in cross-border and domestic
                transactions. To use a pacs.008 message either the debtor, the
                creditor or both must be a non-financial institution.
              </p>
              <p className={styles.paragraph}>
                The message travels through the payment chain, ensuring that all
                intermediary banks and the final receiving bank have the
                necessary information to process the payment accurately. The
                structured format reduces the risk of errors and ensures
                compliance with various regulatory requirements.
              </p>
            </div>
          )}
        </div>
        <TimelineCards />
      </div>
      <div className={styles.right}>
        <Timeline />
      </div>
    </div>
  );
}
