import { Code } from "../Code";
import { Heading } from "../Heading";
import { InlineCode } from "../InlineCode";
import { Paragraph } from "../Paragraph";
import { Table } from "../Table";
import { Tag } from "../Tag";
import styles from "./index.module.scss";

export function FormatRequestBody() {
  const JSON_1 = `{
  "metadata": {
    "requestId": "dbbae877-2895-4f7b-b720-66d0efeeca34",
    "idempotencyKey": "20230707123456",
    "signatureAlgorithm": "SHA256withRSA",
    "signature": "1sFcfzXWo25XFRMCShFfTcvfYO8b2DML1UBVmNam=="
  }
}`;

  const JSON_2 = `{
  "request": {
    "paymentProduct": "WIRE",
    "paymentMessage": "CREDIT_TRANSFER",
    "clientReferenceId": "49728698-67a2-4bb5-826e-7a44f01527e5",
    "clientDescription": "Payment for Services",
    "messageFormat": "SWIFT.MT103",
    "message": "{1:F01IRVTUS3NAXXX0000182491}{2:O1030224141031IRVTUS3NAXXX00005580671410310224N}{3:{121:28191b19-c5ef-44fe-a35c-172cfa997a3e}}{4: :20:UF9CKT53FROE8KTA :23B:CRED :32A:230922USD12, :33B:USD12, :50K:/78787878 NBOKKWKW :53B:/1111112222 :54A:IRVTUS3NXXX :57A:IRVTUS3NXXX :59:/90909090 BNYM - LONDON BRANCH BNY MELLON CENTRE 160 QUEEN VICTORIA STREET LONDON, EC4V 4LA :70:BAX REFERENCE:BAX000009366 :71A:OUR -}"
  }
}`;

  return (
    <div>
      <Heading as="h3" id="format-the-request-body" size="xl">
        Format The Request Body
      </Heading>
      <Paragraph>
        This API request body contains two required elements:{" "}
        <InlineCode>metadata</InlineCode> and <InlineCode>request</InlineCode>.
      </Paragraph>
      <Paragraph>
        The metadata represents the identifier and security controls for the
        request. Fields marked with an asterisk (*) are tag.
      </Paragraph>
      <Table className={styles.table}>
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
            </th>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Paragraph>Digital signature algorithm</Paragraph>
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>signature</InlineCode>
            </th>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Paragraph>Digital signature to sign the payload.</Paragraph>
            </td>
          </tr>
        </tbody>
      </Table>
      <Code code={JSON_1} language="json" className={styles.code} />
      <Paragraph>The request body represents the payment details.</Paragraph>
      <Table className={styles.table}>
        <tbody>
          <tr>
            <th>
              <InlineCode>paymentProduct</InlineCode>
            </th>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Paragraph>
                Payment product used to initiate the payment. In this case, WIRE
              </Paragraph>
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>paymentMessage</InlineCode>
            </th>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Paragraph>
                Type of payment being initiated. In this case, CREDIT_TRANSFER
              </Paragraph>
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>messageFormat</InlineCode>
            </th>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Paragraph>
                Format of the message being sent. In this case, Swift MT 103
              </Paragraph>
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>clientReferenceID</InlineCode>
            </th>
            <td>
              <Paragraph>
                Client-assigned reference ID to links payment to your system
              </Paragraph>
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>clientDescription</InlineCode>
            </th>
            <td>
              <Paragraph>Memo field for your reference</Paragraph>
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>message</InlineCode>
            </th>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Paragraph>
                The Swift MT 103 formatted payment instruction, converted into a
                JSON string.
              </Paragraph>
            </td>
          </tr>
        </tbody>
      </Table>
      <Paragraph>Example:</Paragraph>
      <Code code={JSON_2} language="json" />
    </div>
  );
}
