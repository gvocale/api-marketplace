import { TooltipId } from "@/app/features/types";
import { DecorationItem } from "shiki";
import { Code } from "../Code";
import { CodeTooltip } from "../CodeTooltip";
import { Heading } from "../Heading";
import { InlineCode } from "../InlineCode";
import { Paragraph } from "../Paragraph";
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

  const decorations1: DecorationItem[] = [
    {
      start: { line: 2, character: 4 },
      end: { line: 2, character: 15 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.REQUEST_ID,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.REQUEST_ID}`,
        },
      },
    },
    {
      start: { line: 3, character: 4 },
      end: { line: 3, character: 20 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.IDEMPOTENCY_KEY,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.IDEMPOTENCY_KEY}`,
        },
      },
    },
    {
      start: { line: 4, character: 4 },
      end: { line: 4, character: 24 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.SIGNATURE_ALGORITHM,
        dataMandatory: true,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.SIGNATURE_ALGORITHM}`,
        },
      },
    },
    {
      start: { line: 5, character: 4 },
      end: { line: 5, character: 15 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.SIGNATURE,
        dataMandatory: true,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.SIGNATURE}`,
        },
      },
    },
  ];

  const decorations2: DecorationItem[] = [
    {
      start: { line: 2, character: 4 },
      end: { line: 2, character: 20 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.PAYMENT_PRODUCT,
        dataMandatory: true,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.PAYMENT_PRODUCT}`,
        },
      },
    },
    {
      start: { line: 3, character: 4 },
      end: { line: 3, character: 20 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.PAYMENT_MESSAGE,
        dataMandatory: true,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.PAYMENT_MESSAGE}`,
        },
      },
    },
    {
      start: { line: 4, character: 4 },
      end: { line: 4, character: 23 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.CLIENT_REFERENCE_ID,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.CLIENT_REFERENCE_ID}`,
        },
      },
    },
    {
      start: { line: 5, character: 4 },
      end: { line: 5, character: 23 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.CLIENT_DESCRIPTION,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.CLIENT_DESCRIPTION}`,
        },
      },
    },
    {
      start: { line: 6, character: 4 },
      end: { line: 6, character: 19 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.MESSAGE_FORMAT,
        dataMandatory: true,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.MESSAGE_FORMAT}`,
        },
      },
    },
    {
      start: { line: 7, character: 4 },
      end: { line: 7, character: 13 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.MESSAGE,
        dataMandatory: true,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.MESSAGE}`,
        },
      },
    },
  ];

  return (
    <div>
      <Heading as="h3" id="format-the-request-body" size="xl">
        Format The Request Body
      </Heading>
      <Paragraph size="lg">
        This API request body contains two required elements:{" "}
        <InlineCode>metadata</InlineCode> and <InlineCode>request</InlineCode>.
      </Paragraph>
      <Paragraph size="lg">
        The metadata represents the identifier and security controls for the
        request.
        {/* Fields marked with an asterisk (*) are mandatory. */}
      </Paragraph>

      <Code
        code={JSON_1}
        lang="json"
        className={styles.code}
        decorations={decorations1}
      />

      {/* requestId  */}
      <CodeTooltip id={TooltipId.REQUEST_ID}>
        <Paragraph size="sm">Unique identifer for the request</Paragraph>
      </CodeTooltip>

      {/* idempotencyKey */}
      <CodeTooltip id={TooltipId.IDEMPOTENCY_KEY}>
        <Paragraph size="sm">
          For avoidance of duplicate payment submittal
        </Paragraph>
      </CodeTooltip>

      {/* signatureAlgorithm */}
      <CodeTooltip id={TooltipId.SIGNATURE_ALGORITHM}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Paragraph size="sm">Digital signature algorithm</Paragraph>
      </CodeTooltip>

      {/* signature */}
      <CodeTooltip id={TooltipId.SIGNATURE}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Paragraph size="sm">Digital signature to sign the payload.</Paragraph>
      </CodeTooltip>

      <Paragraph size="lg">
        The request body represents the payment details.
      </Paragraph>

      <Code
        code={JSON_2}
        lang="json"
        className={styles.code}
        decorations={decorations2}
      />

      {/* paymentProduct */}
      <CodeTooltip id={TooltipId.PAYMENT_PRODUCT}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Paragraph size="sm">
          Payment product used to initiate the payment
        </Paragraph>
      </CodeTooltip>

      {/* paymentMessage */}
      <CodeTooltip id={TooltipId.PAYMENT_MESSAGE}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Paragraph size="sm">Type of payment being initiated</Paragraph>
      </CodeTooltip>

      {/* clientReferenceID */}
      <CodeTooltip id={TooltipId.CLIENT_REFERENCE_ID}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Paragraph size="sm">
          Client-assigned reference ID to links payment to your system
        </Paragraph>
      </CodeTooltip>

      {/* clientDescription */}
      <CodeTooltip id={TooltipId.CLIENT_DESCRIPTION}>
        <Paragraph size="sm">Memo field for your reference</Paragraph>
      </CodeTooltip>

      {/* messageFormat */}
      <CodeTooltip id={TooltipId.MESSAGE_FORMAT}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Paragraph size="sm">Format of the message being sent</Paragraph>
      </CodeTooltip>

      {/* message */}
      <CodeTooltip id={TooltipId.MESSAGE}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Paragraph size="sm">
          The Swift MT 103 formatted payment instruction, converted into a JSON
          string.
        </Paragraph>
      </CodeTooltip>
    </div>
  );
}
