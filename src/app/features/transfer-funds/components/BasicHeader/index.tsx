import { Code } from "../Code";
import { Container } from "../Container";
import { Eyebrow } from "../Eyebrow";
import { InlineCode } from "../InlineCode";
import { Table } from "../Table";
import styles from "./index.module.scss";

export function BasicHeader() {
  const CODE = `{{1:F01IRVTUS3NAXXX0000182491}:`;

  return (
    <Container variant="narrow">
      <Eyebrow className={styles.eyebrow}>First Block</Eyebrow>
      <h4 className={styles.h4} id="basic-header">
        Basic Header
      </h4>
      <Code code={CODE} language="bash" className={styles.code} />
      <Table className={styles.table}>
        <thead>
          <tr>
            <th>AppID</th>
            <th>ServiceID</th>
            <th>LTAddress</th>
            <th>Session Number</th>
            <th>Sequence Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>F</td>
            <td>01</td>
            <td>IRVTUS3NAXXX</td>
            <td>0000</td>
            <td>182491</td>
          </tr>
        </tbody>
      </Table>
      <p className={styles.paragraph}>
        <em className={styles.em}>Contains the message type.</em>
      </p>
      <p className={styles.paragraph}>
        The Basic Header Block includes the Receiver (Instructed Agent) BIC. All
        Funds Transfer payment initiation instructions require a Receiver BIC.e
        Use the LTA format (12 characters, i.e., IRVTUS3NAXXX). The API does not
        make use of the session and sequence numbers, but they are needed to
        maintain the formatting rules.
      </p>
      <p className={styles.paragraph}>
        If you are a Financial Institution, you should use your desired Receiver
        BIC (BNY Branch, such as IRVTUS3N or IRVTBEBB), based on how you want
        the payment to be routed for processing. Use IRVTUS3N (IRVTUS3NAXXX) as
        a default Receiver BIC if you do not know the BIC of the BNY Branch
        associated with your debit account. The debit account (Tag{" "}
        <InlineCode language="bash">53B</InlineCode>) is mandatory for API
        transactions.
      </p>
    </Container>
  );
}
