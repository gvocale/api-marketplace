"use client";

import { FinancialMessagingStandard } from "@/app/features/types";
import { useContext } from "react";
import { UserConfigContext } from "../../context/user-config";
import { MESSAGING_STANDARD_OPTIONS } from "../../data/optons";
import { CallToAction } from "../CallToAction";
import { Clients } from "../Clients";
import { Container } from "../Container";
import { Endpoint } from "../Endpoint";
import { FirstBlockBasicHeader } from "../FirstBlockBasicHeader";
import { FormatMessageField } from "../FormatMessageField";
import { FormatRequestBody } from "../FormatRequestBody";
import { Header } from "../Header";
import { HowItWorks } from "../HowItWorks";
import { ReceiveApiResponse } from "../ReceiveApiResponse";
import { Sidebar } from "../Sidebar";
import { SidebarContent } from "../SidebarContent";
import { SidebarGroup } from "../SidebarGroup";
import { SidebarGroupLabel } from "../SidebarGroupLabel";
import { SidebarHeader } from "../SidebarHeader";
import { SidebarMenu } from "../SidebarMenu";
import { SidebarMenuButton } from "../SidebarMenuButton";
import { SidebarMenuItem } from "../SidebarMenuItem";
import { SidebarMenuSub } from "../SidebarMenuSub";
import { SidebarMenuSubButton } from "../SidebarMenuSubButton";
import { TextLink } from "../TextLink";
import Toggle from "../Toggle";
import { TrackPayment } from "../TrackPayment";
import { VerticalToggle } from "../VerticalToggle";
import styles from "./index.module.scss";

export function TransferFunds() {
  const { config, setConfig } = useContext(UserConfigContext);
  const { messagingStandard } = config;

  return (
    <article className={styles.page}>
      <Header />
      <section>
        <Container variant="narrow">
          <h2 className={styles.h2}>Initiate a Payment</h2>
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
          {messagingStandard === FinancialMessagingStandard.PACS && (
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
        <HowItWorks messagingStandard={messagingStandard} />
      </section>

      <section>
        <Clients />
      </section>

      <Container>
        <div className={styles.grid}>
          <aside className={styles.aside}>
            <Sidebar>
              <SidebarHeader>
                <VerticalToggle
                  options={MESSAGING_STANDARD_OPTIONS}
                  defaultValue={messagingStandard}
                  name="messaging-standard-aside"
                  onChange={(value) =>
                    setConfig({
                      ...config,
                      messagingStandard: value as FinancialMessagingStandard,
                    })
                  }
                />
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>
                    Steps to Initiate a Wire Payment
                  </SidebarGroupLabel>
                  <SidebarMenu as="ol">
                    <SidebarMenuItem>
                      <SidebarMenuButton href="#endpoint">
                        Endpoint
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton href="#format-the-request-body">
                        Format The Request Body
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton href="#format-the-message-field">
                        Format The Message Field
                      </SidebarMenuButton>
                      <SidebarMenuSub as="ol">
                        <SidebarMenuItem>
                          <SidebarMenuSubButton href="#overview">
                            Overview
                          </SidebarMenuSubButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuSubButton href="#first-block-basic-header">
                            1. Basic Header
                          </SidebarMenuSubButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuSubButton href="#application-header">
                            2. Application Header
                          </SidebarMenuSubButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuSubButton href="#user-header">
                            3. User Header
                          </SidebarMenuSubButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuSubButton href="#text-block">
                            4. Text Block
                          </SidebarMenuSubButton>
                        </SidebarMenuItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton href="#receive-an-api-response">
                        Receive An API Response
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton href="#track-your-payment">
                        Track Your Payment
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
          </aside>
          <section className={styles.learn}>
            <CallToAction />
            <div className={styles.steps}>
              <Endpoint />
              <FormatRequestBody />
              <FormatMessageField />
              <div>
                <FirstBlockBasicHeader />
              </div>
              <ReceiveApiResponse />
              <TrackPayment />
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
