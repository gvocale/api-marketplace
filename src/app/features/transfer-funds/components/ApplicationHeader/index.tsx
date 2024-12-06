import { SectionId } from "@/app/features/types";
import { Code } from "../Code";
import { Eyebrow } from "../Eyebrow";
import { InlineCode } from "../InlineCode";
import { Notice } from "../Notice";
import { Paragraph } from "../Paragraph";
import { Table } from "../Table";
import styles from "./index.module.scss";
import { Heading } from "../Heading";

export function ApplicationHeader() {
  const CODE = `{ 2: O1030224141031IRVTUS3NAXXX00005580671410310224N }`;

  return (
    <div>
      <Eyebrow className={styles.eyebrow}>Second Block</Eyebrow>
      <Heading
        as="h4"
        id={SectionId.APPLICATION_HEADER}
        className={styles.h4}
        size="lg"
      >
        Application Header
      </Heading>
      <Code code={CODE} language="bash" className={styles.code} />
      <Table className={styles.table}>
        <tbody>
          <tr>
            <td>
              <InlineCode>O</InlineCode>
            </td>
            <th>Message type</th>
          </tr>
          <tr>
            <td>
              <InlineCode>103</InlineCode>
            </td>
            <th>Message format</th>
          </tr>
          <tr>
            <td>
              <InlineCode>0224</InlineCode>
            </td>
            <th>Input Time</th>
          </tr>
          <tr>
            <td>
              <InlineCode>141031</InlineCode>
            </td>
            <th>Input Date</th>
          </tr>
          <tr>
            <td>
              <InlineCode>IRVTUS3NAXXX</InlineCode>
            </td>
            <th>LTAddress</th>
          </tr>
          <tr>
            <td>
              <InlineCode>0000</InlineCode>
            </td>
            <th>Session number</th>
          </tr>
          <tr>
            <td>
              <InlineCode>55806</InlineCode>
            </td>
            <th>Sequence number</th>
          </tr>
          <tr>
            <td>
              <InlineCode>714103</InlineCode>
            </td>
            <th>Output Date</th>
          </tr>
          <tr>
            <td>
              <InlineCode>0224</InlineCode>
            </td>
            <th>Output Time</th>
          </tr>
          <tr>
            <td>
              <InlineCode>N</InlineCode>
            </td>
            <th>Priority</th>
          </tr>
        </tbody>
      </Table>
      <Notice className={styles.notice}>
        Contains the sender’s and receiver’s bank information, including bank
        identifiers and branch information.
      </Notice>
      <Paragraph>
        This is the Application Header Block for Sender (Instructing Agent) BIC.
        MT Messages: Block 2, using the LTA (12 character) format
        (IRVTUS3NAXXX). It indicates the message type (O103 for Outbound and
        MT103), sender’s and receiver’s information, and date and time of
        sending.
      </Paragraph>
      <Paragraph>
        All payment initiation instructions require a Sender BIC. If you are a
        Financial Institution and have a Swift-connected BIC, use that as the
        Sender BIC. The BIC used must be set up during the client onboarding
        process.
      </Paragraph>
      <Paragraph>
        NOTE: If you do not have an assigned Swift BIC, use IRVTUS3NXXX as the
        Sender BIC (the Payment API will still perform account validations based
        on the Nexen API Processing Id, based on the Client Profile setup).
      </Paragraph>
    </div>
  );
}
