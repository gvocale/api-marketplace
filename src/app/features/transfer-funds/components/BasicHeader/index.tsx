import { Code } from "../Code";
import { Eyebrow } from "../Eyebrow";
import { InlineCode } from "../InlineCode";
import { Notice } from "../Notice";
import { Paragraph } from "../Paragraph";
import { Table } from "../Table";
import styles from "./index.module.scss";

export function BasicHeader() {
  const CODE = `{{1:F01IRVTUS3NAXXX0000182491}:`;

  return (
    <div>
      <Eyebrow className={styles.eyebrow}>First Block</Eyebrow>
      <h4 className={styles.h4} id="basic-header">
        Basic Header
      </h4>
      <Code code={CODE} language="bash" className={styles.code} />
      <Table className={styles.table}>
        <tbody>
          <tr>
            <th>
              <InlineCode>F</InlineCode>
            </th>
            <td>AppID</td>
          </tr>
          <tr>
            <th>
              <InlineCode>01</InlineCode>
            </th>
            <td>ServiceID</td>
          </tr>
          <tr>
            <th>
              <InlineCode>IRVTUS3NAXXX</InlineCode>
            </th>
            <td>LTAddress</td>
          </tr>
          <tr>
            <th>
              <InlineCode>0000</InlineCode>
            </th>
            <td>Session Number</td>
          </tr>
          <tr>
            <th>
              <InlineCode>182491</InlineCode>
            </th>
            <td>Sequence Number</td>
          </tr>
        </tbody>
      </Table>
      <Notice className={styles.notice}>Contains the message type.</Notice>
      <Paragraph>
        The Basic Header Block includes the Receiver (Instructed Agent) BIC. All
        Funds Transfer payment initiation instructions require a Receiver BIC.e
        Use the LTA format (12 characters, i.e., IRVTUS3NAXXX). The API does not
        make use of the session and sequence numbers, but they are needed to
        maintain the formatting rules.
      </Paragraph>
      <Paragraph>
        If you are a Financial Institution, you should use your desired Receiver
        BIC (BNY Branch, such as IRVTUS3N or IRVTBEBB), based on how you want
        the payment to be routed for processing. Use IRVTUS3N (IRVTUS3NAXXX) as
        a default Receiver BIC if you do not know the BIC of the BNY Branch
        associated with your debit account. The debit account (Tag{" "}
        <InlineCode>53B</InlineCode>) is mandatory for API transactions.
      </Paragraph>
    </div>
  );
}
