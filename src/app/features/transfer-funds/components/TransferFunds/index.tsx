"use client";

import { Anchors } from "@/app/features/types";
import { ApplicationHeader } from "../ApplicationHeader";
import { Aside } from "../Aside";
import { BasicHeader } from "../BasicHeader";
import { Clients } from "../Clients";
import { Container } from "../Container";
import { Endpoint } from "../Endpoint";
import { FormatMessageField } from "../FormatMessageField";
import { FormatRequestBody } from "../FormatRequestBody";
import { Header } from "../Header";
import { HowItWorks } from "../HowItWorks";
import { InitiatePayment } from "../InitiatePayment";
import { ReceiveApiResponse } from "../ReceiveApiResponse";
import { TextBlock } from "../TextBlock";
import { TrackPayment } from "../TrackPayment";
import { UserHeader } from "../UserHeader";
import styles from "./index.module.scss";
import { Heading } from "../Heading";
import { Grid } from "../Grid";
import { Narrow } from "../Narrow";

export function TransferFunds() {
  return (
    <article className={styles.page}>
      <Header />
      <section>
        <InitiatePayment />
      </section>

      <section>
        <HowItWorks />
      </section>

      <section>
        <Clients />
      </section>

      <section>
        <Container>
          <Grid>
            <div className={styles.asideContainer}>
              <Aside className={styles.aside} />
            </div>
            <Narrow className={styles.narrow}>
              <div>
                <Heading
                  as="h3"
                  id={Anchors.STEPS_TO_INITIATE_A_WIRE_PAYMENT}
                  size="2xl"
                >
                  Steps to initiate a Wire Payment
                </Heading>
                <div className={styles.contents}>
                  <Endpoint />
                  <FormatRequestBody />
                  <FormatMessageField />
                  <BasicHeader />
                  <ApplicationHeader />
                  <UserHeader />
                  <TextBlock />
                </div>
              </div>
              <ReceiveApiResponse />
              <TrackPayment />
            </Narrow>
          </Grid>
        </Container>
      </section>
    </article>
  );
}
