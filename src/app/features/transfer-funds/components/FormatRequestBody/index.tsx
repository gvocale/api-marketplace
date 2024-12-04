import { Code } from "../Code";
import { Container } from "../Container";
import { InlineCode } from "../InlineCode";
import { Paragraph } from "../Paragraph";
import { Table } from "../Table";
import styles from "./index.module.scss";

export function FormatRequestBody() {
  const JSON_1 = `
    {
      "metadata": {
        "requestId": "dbbae877-2895-4f7b-b720-66d0efeeca34",
        "idempotencyKey": "20230707123456",
        "signatureAlgorithm": "SHA256withRSA",
        "signature": "1sFcfzXWo25XFRMCShFfTcvfYO8b2DML1UBVmNam=="
      }
    }
    `;
  const JSON_2 = `
    {
      "request": {
        "paymentProduct": "WIRE",
        "paymentMessage": "CREDIT_TRANSFER",
        "clientReferenceId": "49728698-67a2-4bb5-826e-7a44f01527e5",
        "clientDescription": "Payment for Services",
        "messageFormat": "SWIFT.MT103",
        "message": "{1:F01IRVTUS3NAXXX0000182491}{2:O1030224141031IRVTUS3NAXXX00005580671410310224N}{3:{121:28191b19-c5ef-44fe-a35c-172cfa997a3e}}{4: :20:UF9CKT53FROE8KTA :23B:CRED :32A:230922USD12, :33B:USD12, :50K:/78787878 NBOKKWKW :53B:/1111112222 :54A:IRVTUS3NXXX :57A:IRVTUS3NXXX :59:/90909090 BNYM - LONDON BRANCH BNY MELLON CENTRE 160 QUEEN VICTORIA STREET LONDON, EC4V 4LA :70:BAX REFERENCE:BAX000009366 :71A:OUR -}"
      }
    }
    `;

  return (
    <Container variant="narrow">
      <h3 className={styles.h3} id="format-the-request-body">
        Format The Request Body
      </h3>
      <Paragraph>
        This API request body contains two required elements:{" "}
        <InlineCode>metadata</InlineCode> and <InlineCode>request</InlineCode>.
      </Paragraph>
      <Paragraph>
        The metadata represents the identifier and security controls for the
        request. Fields marked with an asterisk (*) are mandatory.
      </Paragraph>
      <Table>
        <tbody>
          <tr>
            <th>
              <InlineCode>requestId</InlineCode>
            </th>
            <td>Unique identifer for the request</td>
          </tr>
          <tr>
            <th>
              <InlineCode>idempotencyKey</InlineCode>
            </th>
            <td>For avoidance of duplicate payment submittal</td>
          </tr>
          <tr>
            <th>
              <InlineCode>signatureAlgorithm</InlineCode>
              <span className={styles.mandatory}>Mandatory</span>
            </th>
            <td>Digital signature algorithm</td>
          </tr>
          <tr>
            <th>
              <InlineCode>signature</InlineCode>
              <span className={styles.mandatory}>Mandatory</span>
            </th>
            <td>Digital signature to sign the payloa.</td>
          </tr>
        </tbody>
      </Table>
      <Code code={JSON_1} language="json" />
      <Paragraph>The request body represents the payment details.</Paragraph>
      <Table>
        <tbody>
          <tr>
            <th>
              <InlineCode>paymentProduct</InlineCode>
              <span className={styles.mandatory}>Mandatory</span>
            </th>
            <td>
              Payment product used to initiate the payment. In this case, WIRE
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>paymentMessage</InlineCode>
              <span className={styles.mandatory}>Mandatory</span>
            </th>
            <td>
              Type of payment being initiated. In this case, CREDIT_TRANSFER
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>messageFormat</InlineCode>
              <span className={styles.mandatory}>Mandatory</span>
            </th>
            <td>
              Format of the message being sent. In this case, Swift MT 103
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>clientReferenceID</InlineCode>
            </th>
            <td>
              Client-assigned reference ID to links payment to your system
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>clientDescription</InlineCode>
            </th>
            <td>Memo field for your reference</td>
          </tr>
          <tr>
            <th>
              <InlineCode>message</InlineCode>
              <span className={styles.mandatory}>Mandatory</span>
            </th>
            <td>
              The Swift MT 103 formatted payment instruction, converted into a
              JSON string.
            </td>
          </tr>
        </tbody>
      </Table>
      <Paragraph>Example:</Paragraph>
      <Code code={JSON_2} language="json" />
    </Container>
  );
}
