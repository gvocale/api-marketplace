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
          <div className={styles.grid}>
            <div className={styles.asideContainer}>
              <Aside className={styles.aside} />
            </div>
            <div className={styles.stepsContainer}>
              <h3
                className={styles.h2}
                id={Anchors.STEPS_TO_INITIATE_A_WIRE_PAYMENT}
              >
                Steps to initiate a Wire Payment
              </h3>
              <div className={styles.steps}>
                <Endpoint />
                <FormatRequestBody />
                <FormatMessageField />
                <div className={styles.blocks}>
                  <BasicHeader />
                  <ApplicationHeader />
                  <UserHeader />
                  <TextBlock />
                </div>
                <ReceiveApiResponse />
                <TrackPayment />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
