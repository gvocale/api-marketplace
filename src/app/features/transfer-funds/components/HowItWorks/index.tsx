import { FinancialMessagingStandard } from "@/app/features/types";
import { Step } from "../Step";
import styles from "./index.module.scss";
import { ConnectingLine } from "../ConnetingLine";
import { TextLink } from "../TextLink";
import { Container } from "../Container";
import { Beneficiary } from "../../icons/Beneficiary";
import { BeneficiaryBank } from "../../icons/BeneficiaryBank";
import { Currencies } from "../../icons/Currencies";
import { IntermediaryBank } from "../../icons/IntermediaryBank";
import { MoneyTransaction } from "../../icons/MoneyTransaction";
import { WebsiteEndpoint } from "../../icons/WebsiteEndpoint";
import { Customer } from "../../icons/Customer";

export function HowItWorks({
  selected,
}: {
  selected: FinancialMessagingStandard;
}) {
  return (
    <div className={styles.root}>
      <div className={styles.sticky}>
        <Container variant="narrow" className={styles.header}>
          <h2 className={styles.h2}>How It Works</h2>
          {selected === FinancialMessagingStandard.SWIFT && (
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
          {selected === FinancialMessagingStandard.PACS && (
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
        </Container>
        {/* SWIFT */}
        {selected === FinancialMessagingStandard.SWIFT && (
          <ol className={styles.steps}>
            <li className={styles.step}>
              <Step
                icon={<Customer />}
                title="Initiation"
                author="Ordering Customer"
                description="A customer initiates a wire transfer"
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<WebsiteEndpoint />}
                title="Initiation"
                author="Client Host Application"
                path="/payments"
                description="Our /payments API endpoint, receives details such as the sender's and recipient's bank information, amount, and currency."
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<MoneyTransaction />}
                title="Message Creation"
                author="Ordering Institution"
                description="The MT 103 message is created, containing all necessary details for the transfer."
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<IntermediaryBank />}
                title="Transmission"
                author="Intermediary Bank A"
                description="The message is transmitted through the Swift network to the recipient's bank."
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<Currencies />}
                title="Transmission"
                author="Intermediary Bank B"
                description="Multiple intermediary banks can be involved in case of currency exchange"
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<BeneficiaryBank />}
                title="Processing"
                author="Beneficiary Bank"
                description="The recipient's bank processes the message and credits the recipient's account."
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<Beneficiary />}
                title="Confirmation"
                author="Beneficiary"
                description="Confirmation of the transfer is sent back to the sender, completing the transaction"
              />
            </li>
          </ol>
        )}

        
        {/* PACS */}
        {selected === FinancialMessagingStandard.PACS && (
          <ol className={styles.steps}>
            <li className={styles.step}>
              <Step
                icon={<Customer />}
                title="Initiation"
                author="Debtor"
                description="The ordering customer or institution initiates the wire transfer request through their financial institution, providing all necessary payment details, such as the amount, currency, and beneficiary information."
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<WebsiteEndpoint />}
                title="Message Creation"
                author="Client Host Application"
                path="/payments"
                description="The pacs.008 message is generated by the initiating bank. This
                message is structured according to the ISO 20022 standard,
                including all relevant details such as debtor and creditor
                information, transaction amount, and any remittance information."
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<Currencies />}
                title="Transmission"
                author="Debtor Agent"
                description="The message is securely transmitted to the beneficiary's
                bank through the Swift network or another secure financial
                messaging system."
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<IntermediaryBank />}
                title="Transmission"
                author="Intermediary Agent 1"
                description="Any intermediary banks
                involved in the payment chain also receive the message."
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<BeneficiaryBank />}
                title="Processing"
                author="Creditor Agent"
                description="Upon receiving the pacs.008 message, the beneficiary's bank
                processes the payment according to the instructions provided.
                This includes verifying the details, ensuring compliance with
                local and international regulations, and applying the funds to
                the beneficiary's account."
              />
            </li>
            <ConnectingLine />
            <li className={styles.step}>
              <Step
                icon={<Beneficiary />}
                title="Confirmation"
                author="Creditor"
                description="After processing, a confirmation message is sent back to the
                initiating bank, confirming that the payment has been
                successfully completed. The confirmation may include details of
                the payment status, any deductions (such as fees), and the final
                credited amount."
              />
            </li>
          </ol>
        )}
      </div>
    </div>
  );
}
