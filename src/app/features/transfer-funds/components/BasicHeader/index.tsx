import { SectionId, TooltipId } from "@/app/features/types";
import { DecorationItem } from "shiki/bundle/web";
import { Code } from "../Code";
import { CodeTooltip } from "../CodeTooltip";
import { Eyebrow } from "../Eyebrow";
import { Heading } from "../Heading";
import { InlineCode } from "../InlineCode";
import { Notice } from "../Notice";
import { Paragraph } from "../Paragraph";
import styles from "./index.module.scss";

export function BasicHeader() {
  const CODE = `{
  1:F01IRVTUS3NAXXX0000182491
}`;

  const decorations: DecorationItem[] = [
    {
      start: { line: 1, character: 4 },
      end: { line: 1, character: 5 },
      properties: {
        dataTooltipId: TooltipId.APP_ID,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APP_ID}`,
        },
      },
    },
    {
      start: { line: 1, character: 5 },
      end: { line: 1, character: 7 },
      properties: {
        dataTooltipId: TooltipId.SERVICE_ID,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.SERVICE_ID}`,
        },
      },
    },
    {
      start: { line: 1, character: 7 },
      end: { line: 1, character: 19 },
      properties: {
        dataTooltipId: TooltipId.LT_ADDRESS,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.LT_ADDRESS}`,
        },
      },
    },
    {
      start: { line: 1, character: 19 },
      end: { line: 1, character: 23 },
      properties: {
        dataTooltipId: TooltipId.SESSION_NUMBER,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.SESSION_NUMBER}`,
        },
      },
    },
    {
      start: { line: 1, character: 23 },
      end: { line: 1, character: 29 },
      properties: {
        dataTooltipId: TooltipId.SEQUENCE_NUMBER,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.SEQUENCE_NUMBER}`,
        },
      },
    },
  ];

  return (
    <div>
      <Eyebrow className={styles.eyebrow}>First Block</Eyebrow>
      <Heading as="h4" id={SectionId.BASIC_HEADER} size="lg">
        Basic Header
      </Heading>
      <Notice className={styles.notice} size="lg">
        Contains the message type.
      </Notice>
      <Code
        code={CODE}
        lang="bash"
        className={styles.code}
        decorations={decorations}
      />

      {/* appId */}
      <CodeTooltip id={TooltipId.APP_ID}>
        <Heading as="h5" size="md">
          AppID
        </Heading>
      </CodeTooltip>

      {/* serviceId */}
      <CodeTooltip id={TooltipId.SERVICE_ID}>
        <Heading as="h5" size="md">
          ServiceID
        </Heading>
      </CodeTooltip>

      {/* ltAddress */}
      <CodeTooltip id={TooltipId.LT_ADDRESS}>
        <Heading as="h5" size="md">
          LTAddress
        </Heading>
      </CodeTooltip>

      {/* sessionNumber */}
      <CodeTooltip id={TooltipId.SESSION_NUMBER}>
        <Heading as="h5" size="md">
          Session Number
        </Heading>
      </CodeTooltip>

      {/* sequenceNumber */}
      <CodeTooltip id={TooltipId.SEQUENCE_NUMBER}>
        <Heading as="h5" size="md">
          Sequence Number
        </Heading>
      </CodeTooltip>

      <Paragraph size="lg">
        The Basic Header Block includes the Receiver (Instructed Agent) BIC. All
        Funds Transfer payment initiation instructions require a Receiver BIC.
        Use the LTA format (12 characters, i.e.,{" "}
        <InlineCode>IRVTUS3NAXXX</InlineCode>). The API does not make use of the
        session and sequence numbers, but they are needed to maintain the
        formatting rules.
      </Paragraph>
      <Paragraph size="lg">
        If you are a Financial Institution, you should use your desired Receiver
        BIC (BNY Branch, such as <InlineCode>IRVTUS3N</InlineCode> or{" "}
        <InlineCode>IRVTBEBB</InlineCode>), based on how you want the payment to
        be routed for processing. Use <InlineCode>IRVTUS3N</InlineCode> (
        <InlineCode>IRVTUS3NAXXX</InlineCode>) as a default Receiver BIC if you
        do not know the BIC of the BNY Branch associated with your debit
        account. The debit account (Tag <InlineCode>53B</InlineCode>) is
        mandatory for API transactions.
      </Paragraph>
    </div>
  );
}
