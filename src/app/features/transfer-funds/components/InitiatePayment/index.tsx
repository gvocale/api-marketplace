"use client";

import { Anchors, FinancialMessagingStandard } from "@/app/features/types";
import { useContext } from "react";
import { UserConfigContext } from "../../context/user-config";
import { MESSAGING_STANDARD_OPTIONS } from "../../data/optons";
import { Container } from "../Container";
import { TextLink } from "../TextLink";
import Toggle from "../Toggle";
import styles from "./index.module.scss";

export function InitiatePayment() {
  const { config, setConfig } = useContext(UserConfigContext);
  const { messagingStandard } = config;

  return (
    <Container variant="narrow">
      <h2 className={styles.h2} id={Anchors.INITIATE_A_PAYMENT}>
        Initiate a Payment
      </h2>
      <p className={styles.paragraph}>
        With the&nbsp;
        <TextLink href="">Funds Transfer API</TextLink>, you gain access to a
        secure and reliable solution that combines flexibility and global
        connectivity for all of your Funds Transfer needs. The Treasury Services
        Funds Transfer API solution enables you to send payments via high-value
        payment networks, either on your behalf or for your clients, in USD and
        more than 30 other currencies, using various MT and ISO 20022 (MX) CBPR+
        formats.
      </p>
      <Toggle
        className={styles.toggle}
        size="large"
        defaultValue={messagingStandard}
        name="financial-messaging-standard"
        onChange={(value) =>
          setConfig({
            ...config,
            messagingStandard: value as FinancialMessagingStandard,
          })
        }
        options={MESSAGING_STANDARD_OPTIONS}
      />
      {messagingStandard === FinancialMessagingStandard.SWIFT && (
        <div>
          <p className={styles.paragraph}>
            This API specification takes industry standard financial payment
            instructions for Wires (i.e., Swift) as payloads and wraps them in
            our modern RESTful API structure. When using this API, you are
            sending instructions directly to BNY. The payment instructions,
            although they are in Swift format, may go over the Swift network or
            other clearing channels such as Fedwire or CHIPS.
          </p>
          <p className={styles.paragraph}>
            This use case takes you through the steps of executing a wire
            transfer using the BNY Funds Transfer API and the Swift MT 103
            message format.
          </p>
        </div>
      )}
      {messagingStandard === FinancialMessagingStandard.PACS && (
        <div>
          <p className={styles.paragraph}>
            We developed our pacs.008 message schema based on Swift, a
            telecommunications company that specializes in connecting banks. The
            Swift messages are very flexible and built to accommodate many
            applications. To support this, in the pacs.008 message itself, there
            is an “envelope” - used just like the post office uses an actual
            envelope - it tells the delivery agent where to send the message.
          </p>
          <p className={styles.paragraph}>
            This use case takes you through the steps of executing a wire
            transfer using the BNY Funds Transfer API and the pacs.008 message
            format.
          </p>
        </div>
      )}
    </Container>
  );
}
