"use client";

import { Id } from "@/app/features/types";
import { ApplicationHeader } from "../ApplicationHeader";
import { StepsSidebar } from "../StepsSidebar";
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
import { InView } from "../InView";
import { useContext } from "react";
import { InViewContext } from "../../context/in-view";
import { CallToAction } from "../CallToAction";

export function TransferFunds() {
  const { inView } = useContext(InViewContext);

  return (
    <article className={styles.page}>
      <div className={styles.debug}>{inView}</div>
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
            <aside className={styles.aside}>
              <div className={styles.sticky}>
                <StepsSidebar />
              </div>
            </aside>
            <Narrow className={styles.narrow}>
              <div>
                <InView id={Id.STEPS_TO_INITIATE_A_WIRE_PAYMENT}>
                  <Heading
                    as="h3"
                    id={Id.STEPS_TO_INITIATE_A_WIRE_PAYMENT}
                    size="2xl"
                    className={styles.h2}
                  >
                    Steps to initiate a Wire Payment
                  </Heading>
                </InView>
                <div className={styles.contents}>
                  <InView id={Id.ENDPOINT}>
                    <Endpoint />
                  </InView>
                  <InView id={Id.FORMAT_THE_REQUEST_BODY}>
                    <FormatRequestBody />
                  </InView>
                  <InView id={Id.FORMAT_THE_MESSAGE_FIELD}>
                    <FormatMessageField />
                  </InView>
                  <InView id={Id.BASIC_HEADER}>
                    <BasicHeader />
                  </InView>
                  <InView id={Id.APPLICATION_HEADER}>
                    <ApplicationHeader />
                  </InView>
                  <InView id={Id.USER_HEADER}>
                    <UserHeader />
                  </InView>
                  <InView id={Id.TEXT_BLOCK}>
                    <TextBlock />
                  </InView>
                </div>
              </div>
              <InView id={Id.RECEIVE_AN_API_RESPONSE}>
                <ReceiveApiResponse />
              </InView>
              <InView id={Id.TRACK_YOUR_PAYMENT}>
                <TrackPayment />
              </InView>
            </Narrow>
          </Grid>
        </Container>
      </section>
      <section>
        <CallToAction />
      </section>
    </article>
  );
}
