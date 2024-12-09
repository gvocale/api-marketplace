import { DecorationItem, ShikiTransformer } from "shiki";
import { Code } from "../Code";
import { Heading } from "../Heading";
import { InlineCode } from "../InlineCode";
import { Paragraph } from "../Paragraph";
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

  const decorations1: DecorationItem[] = [
    {
      start: { line: 2, character: 4 },
      end: { line: 2, character: 15 },
      properties: {
        "data-tooltip-title": "Unique identifer for the request",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 3, character: 4 },
      end: { line: 3, character: 20 },
      properties: {
        "data-tooltip-title": "For avoidance of duplicate payment submittal",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 4, character: 4 },
      end: { line: 4, character: 24 },
      properties: {
        "data-tooltip-title": "Digital signature algorithm",
        tabindex: 0,
        id: "application-header-1",
        "data-mandatory": true,
      },
    },
    {
      start: { line: 5, character: 4 },
      end: { line: 5, character: 15 },
      properties: {
        "data-tooltip-title": "Digital signature to sign the payload",
        tabindex: 0,
        id: "application-header-1",
        "data-mandatory": true,
      },
    },
  ];

  const decorations2: DecorationItem[] = [
    {
      start: { line: 2, character: 4 },
      end: { line: 2, character: 20 },
      properties: {
        "data-tooltip-title": "Payment product used to initiate the payment",
        tabindex: 0,
        id: "application-header-1",
        "data-mandatory": true,
      },
    },
    {
      start: { line: 3, character: 4 },
      end: { line: 3, character: 20 },
      properties: {
        "data-tooltip-title": "Type of payment being initiated.",
        tabindex: 0,
        id: "application-header-1",
        "data-mandatory": true,
      },
    },
    {
      start: { line: 4, character: 4 },
      end: { line: 4, character: 23 },
      properties: {
        "data-tooltip-title": "Client-assigned reference ID to links payment to your system.",
        tabindex: 0,
        id: "application-header-1",        
      },
    },
    {
      start: { line: 5, character: 4 },
      end: { line: 5, character: 23 },
      properties: {
        "data-tooltip-title":
          "Memo field for your reference",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 6, character: 4 },
      end: { line: 6, character: 19 },
      properties: {
        "data-tooltip-title": "Format of the message being sent.",
        tabindex: 0,
        id: "application-header-1",
        "data-mandatory": true,
      },
    },
    {
      start: { line: 7, character: 4 },
      end: { line: 7, character: 13 },
      properties: {
        "data-tooltip-title": "The Swift MT 103 formatted payment instruction, converted into a JSON string.",
        tabindex: 0,
        id: "application-header-1",
        "data-mandatory": true,
      },
    },
  ];

  const transformer: ShikiTransformer = {
    span(node, line, col) {
      node.properties["data-line"] = line;
      node.properties["data-col"] = col;
    },
  };

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
        request.
        {/* Fields marked with an asterisk (*) are mandatory. */}
      </Paragraph>
      {/* <Table className={styles.table}>
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
      </Table> */}
      <Code
        code={JSON_1}
        lang="json"
        className={styles.code}
        decorations={decorations1}
        transformers={[transformer]}
      />
      <Paragraph>The request body represents the payment details.</Paragraph>
      <Code
        code={JSON_2}
        lang="json"
        className={styles.code}
        decorations={decorations2}
        transformers={[transformer]}
      />
      {/* <Table className={styles.table}>
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
      </Table> */}
    </div>
  );
}
