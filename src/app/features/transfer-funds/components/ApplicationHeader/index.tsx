import { Anchors } from "@/app/features/types";
import { Code } from "../Code";
import { Container } from "../Container";
import { Eyebrow } from "../Eyebrow";
import { Table } from "../Table";
import styles from "./index.module.scss";

export function ApplicationHeader() {
  const CODE = `{ 2: O1030224141031IRVTUS3NAXXX00005580671410310224N }`;

  return (
    <Container variant="narrow">
      <Eyebrow className={styles.eyebrow}>Second Block</Eyebrow>
      <h4 className={styles.h4} id={Anchors.APPLICATION_HEADER}>
        Application Header
      </h4>
      <Code code={CODE} language="bash" className={styles.code} />
      <Table className={styles.table}>
        <thead>
          <tr>
            <th>Message type</th>
            <th>Message format</th>
            <th>Input Time</th>
            <th>Input Date</th>
            <th>LTAddress</th>
            <th>Session number</th>
            <th>Sequence number</th>
            <th>Output Date</th>
            <th>Output Time</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>O</td>
            <td>103</td>
            <td>0224</td>
            <td>141031</td>
            <td>IRVTUS3NAXXX</td>
            <td>0000</td>
            <td>55806</td>
            <td>714103</td>
            <td>0224</td>
            <td>N</td>
          </tr>
        </tbody>
      </Table>
      <p className={styles.paragraph}>
        <em className={styles.em}>
          Contains the sender’s and receiver’s bank information, including bank
          identifiers and branch information.
        </em>
      </p>
      <p className={styles.paragraph}>
        This is the Application Header Block for Sender (Instructing Agent) BIC.
        MT Messages: Block 2, using the LTA (12 character) format
        (IRVTUS3NAXXX). It indicates the message type (O103 for Outbound and
        MT103), sender’s and receiver’s information, and date and time of
        sending.
      </p>
      <p className={styles.paragraph}>
        All payment initiation instructions require a Sender BIC. If you are a
        Financial Institution and have a Swift-connected BIC, use that as the
        Sender BIC. The BIC used must be set up during the client onboarding
        process.
      </p>
      <p className={styles.paragraph}>
        NOTE: If you do not have an assigned Swift BIC, use IRVTUS3NXXX as the
        Sender BIC (the Payment API will still perform account validations based
        on the Nexen API Processing Id, based on the Client Profile setup).
      </p>
    </Container>
  );
}
