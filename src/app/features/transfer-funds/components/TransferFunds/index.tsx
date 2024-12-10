"use client";

import { SectionId } from "@/app/features/types";
import { motion } from "motion/react";
import { useContext } from "react";
import { InViewContext } from "../../context/in-view";
import { ApplicationHeader } from "../ApplicationHeader";
import { BasicHeader } from "../BasicHeader";
import { CallToAction } from "../CallToAction";
import { Container } from "../Container";
import { Endpoint } from "../Endpoint";
import { FormatMessageField } from "../FormatMessageField";
import { FormatRequestBody } from "../FormatRequestBody";
import { Grid } from "../Grid";
import { Header } from "../Header";
import { Heading } from "../Heading";
import { HowItWorks } from "../HowItWorks";
import { InitiatePayment } from "../InitiatePayment";
import { InView } from "../InView";
import { Narrow } from "../Narrow";
import { ReceiveApiResponse } from "../ReceiveApiResponse";
import { StepsSidebar } from "../StepsSidebar";
import { TextBlock } from "../TextBlock";
import { Timeline } from "../Timeline";
import { TrackPayment } from "../TrackPayment";
import { UserHeader } from "../UserHeader";
import styles from "./index.module.scss";
// import { TooltipContext } from "../../context/tooltip-context";

export function TransferFunds() {
  const { inView } = useContext(InViewContext);
  const isFooterInView = inView === SectionId.FOOTER;
  // const { tooltipId } = useContext(TooltipContext);

  return (
    <>
      {/* <div className={styles.debug}>
        timelineInView: {inView}
        <br />
        tooltipId: {tooltipId}
      </div> */}
      <motion.div
        className={styles.root}
        animate={{
          transform: isFooterInView ? "scale(0.94)" : "scaleX(1)",
        }}
        initial={{ transform: "scaleX(1)" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <article className={styles.page}>
          <Header />
          <section>
            <InitiatePayment />
          </section>

          <section>
            <HowItWorks className={styles.howItWorks} />
            <Timeline />
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
                    <InView
                      id={SectionId.STEPS_TO_INITIATE_A_WIRE_PAYMENT}
                      type="regular"
                    >
                      <Heading
                        as="h3"
                        id={SectionId.STEPS_TO_INITIATE_A_WIRE_PAYMENT}
                        size="2xl"
                        className={styles.h2}
                      >
                        Steps to initiate a Wire Payment
                      </Heading>
                    </InView>
                    <div className={styles.contents}>
                      <InView id={SectionId.ENDPOINT} type="regular">
                        <Endpoint />
                      </InView>
                      <InView
                        id={SectionId.FORMAT_THE_REQUEST_BODY}
                        type="regular"
                      >
                        <FormatRequestBody />
                      </InView>
                      <InView
                        id={SectionId.FORMAT_THE_MESSAGE_FIELD}
                        type="regular"
                      >
                        <FormatMessageField />
                      </InView>
                      <InView id={SectionId.BASIC_HEADER} type="regular">
                        <BasicHeader />
                      </InView>
                      <InView id={SectionId.APPLICATION_HEADER} type="regular">
                        <ApplicationHeader />
                      </InView>
                      <InView id={SectionId.USER_HEADER} type="regular">
                        <UserHeader />
                      </InView>
                      <InView id={SectionId.TEXT_BLOCK} type="regular">
                        <TextBlock />
                      </InView>
                    </div>
                  </div>
                  <InView id={SectionId.RECEIVE_AN_API_RESPONSE} type="regular">
                    <ReceiveApiResponse />
                  </InView>
                  <InView id={SectionId.TRACK_YOUR_PAYMENT} type="regular">
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
      </motion.div>
    </>
  );
}
