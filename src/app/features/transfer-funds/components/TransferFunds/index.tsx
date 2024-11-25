"use client";

import { FinancialMessagingStandard } from "@/app/features/types";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../Button";
import { Cards } from "../Cards";
import { Clients } from "../Clients";
import { HowItWorks } from "../HowItWorks";
import { TextLink } from "../TextLink";
import Toggle from "../Toggle";
import styles from "./index.module.scss";
import { Container } from "../Container";

export function TransferFunds() {
  const [selected, setSelected] = useState<FinancialMessagingStandard>(
    FinancialMessagingStandard.SWIFT
  );

  return (
    <article className={styles.page}>
      <Container>
        <header className={styles.header}>
          <h1 className={styles.h1}>Transfer Funds</h1>
          <p className={styles.subhead}>
            Send a wire payment with the industry standard Swift MT 103 and
            CBPR+ pacs.008 message format in more then 30 currency.
          </p>

          <div className={styles.toggle}>
            <Toggle
              defaultValue={selected}
              name="financial-messaging-standard"
              onChange={(value) =>
                setSelected(value as FinancialMessagingStandard)
              }
              options={[
                { label: "Swift", value: FinancialMessagingStandard.SWIFT },
                { label: "Pacs.008", value: FinancialMessagingStandard.PACS },
              ]}
            />
          </div>
        </header>
      </Container>

      <section>
        <Container className={styles.cards}>
          <Cards />
        </Container>
        <Container variant="narrow">
          <p className={styles.paragraph}>
            With the&nbsp;
            <TextLink href="">Funds Transfer API</TextLink>, you gain access to
            a secure and reliable solution that combines flexibility and global
            connectivity for all of your Funds Transfer needs. The Treasury
            Services Funds Transfer API solution enables you to send payments
            via high-value payment networks, either on your behalf or for your
            clients, in USD and more than 30 other currencies, using various MT
            and ISO 20022 (MX) CBPR+ formats.
          </p>
          {selected === FinancialMessagingStandard.SWIFT && (
            <div>
              <p className={styles.paragraph}>
                This API specification takes industry standard financial payment
                instructions for Wires (i.e., Swift) as payloads and wraps them
                in our modern RESTful API structure. When using this API, you
                are sending instructions directly to BNY. The payment
                instructions, although they are in Swift format, may go over the
                Swift network or other clearing channels such as Fedwire or
                CHIPS.
              </p>
              <p className={styles.paragraph}>
                This use case takes you through the steps of executing a wire
                transfer using the BNY Funds Transfer API and the Swift MT 103
                message format.
              </p>
            </div>
          )}
          {selected === FinancialMessagingStandard.PACS && (
            <div>
              <p className={styles.paragraph}>
                We developed our pacs.008 message schema based on Swift, a
                telecommunications company that specializes in connecting banks.
                The Swift messages are very flexible and built to accommodate
                many applications. To support this, in the pacs.008 message
                itself, there is an “envelope” - used just like the post office
                uses an actual envelope - it tells the delivery agent where to
                send the message.
              </p>
              <p className={styles.paragraph}>
                This use case takes you through the steps of executing a wire
                transfer using the BNY Funds Transfer API and the pacs.008
                message format.
              </p>
            </div>
          )}
        </Container>
      </section>

      <section>
        <HowItWorks selected={selected} />
      </section>

      <section>
        <Clients />
      </section>

      <section>
        <Container variant="narrow">
          <h3 className={styles.h2}>Steps to Initiate a Wire Payment</h3>
          <Button variant="primary" as={Link} href="/">
            Get Started
          </Button>
        </Container>
      </section>
    </article>
  );
}
