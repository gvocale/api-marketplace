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

export function ApplicationHeader() {
  const CODE = `{ 
  2: O1030224141031IRVTUS3NAXXX00005580671410310224N 
}`;

  const decorations: DecorationItem[] = [
    {
      start: { line: 1, character: 5 },
      end: { line: 1, character: 6 },
      properties: {
        dataTooltipId: TooltipId.APPLICATION_HEADER_MESSAGE_TYPE,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APPLICATION_HEADER_MESSAGE_TYPE}`,
        },
      },
    },
    {
      start: { line: 1, character: 6 },
      end: { line: 1, character: 9 },
      properties: {
        dataTooltipId: TooltipId.APPLICATION_HEADER_MESSAGE_FORMAT,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APPLICATION_HEADER_MESSAGE_FORMAT}`,
        },
      },
    },
    {
      start: { line: 1, character: 9 },
      end: { line: 1, character: 13 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.APPLICATION_HEADER_INPUT_TIME,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APPLICATION_HEADER_INPUT_TIME}`,
        },
      },
    },
    {
      start: { line: 1, character: 13 },
      end: { line: 1, character: 19 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.APPLICATION_HEADER_INPUT_DATE,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APPLICATION_HEADER_INPUT_DATE}`,
        },
      },
    },
    {
      start: { line: 1, character: 19 },
      end: { line: 1, character: 31 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.APPLICATION_HEADER_LT_ADDRESS,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APPLICATION_HEADER_LT_ADDRESS}`,
        },
      },
    },
    {
      start: { line: 1, character: 31 },
      end: { line: 1, character: 35 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.APPLICATION_HEADER_SESSION_NUMBER,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APPLICATION_HEADER_SESSION_NUMBER}`,
        },
      },
    },
    {
      start: { line: 1, character: 35 },
      end: { line: 1, character: 40 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.APPLICATION_HEADER_SEQUENCE_NUMBER,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APPLICATION_HEADER_SEQUENCE_NUMBER}`,
        },
      },
    },
    {
      start: { line: 1, character: 40 },
      end: { line: 1, character: 46 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.APPLICATION_HEADER_OUTPUT_DATE,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APPLICATION_HEADER_OUTPUT_DATE}`,
        },
      },
    },
    {
      start: { line: 1, character: 47 },
      end: { line: 1, character: 51 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.APPLICATION_HEADER_OUTPUT_TIME,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APPLICATION_HEADER_OUTPUT_TIME}`,
        },
      },
    },
    {
      start: { line: 1, character: 51 },
      end: { line: 1, character: 52 },
      properties: {
        tabindex: 0,
        dataTooltipId: TooltipId.APPLICATION_HEADER_PRIORITY,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.APPLICATION_HEADER_PRIORITY}`,
        },
      },
    },
  ];

  return (
    <>
      <Eyebrow className={styles.eyebrow}>Second Block</Eyebrow>
      <Heading
        as="h4"
        id={SectionId.APPLICATION_HEADER}
        className={styles.h4}
        size="lg"
      >
        Application Header
      </Heading>
      <Notice className={styles.notice} size="lg">
        Contains the sender&apos;s and receiver&apos;s bank information,
        including bank identifiers and branch information.
      </Notice>
      <Code
        code={CODE}
        lang="bash"
        className={styles.code}
        decorations={decorations}
      />
      <CodeTooltip id={TooltipId.APPLICATION_HEADER_MESSAGE_TYPE}>
        <Heading as="h5" size="md">
          Message type
        </Heading>
      </CodeTooltip>
      <CodeTooltip id={TooltipId.APPLICATION_HEADER_MESSAGE_FORMAT}>
        <Heading as="h5" size="md">
          Message format
        </Heading>
      </CodeTooltip>
      <CodeTooltip id={TooltipId.APPLICATION_HEADER_INPUT_TIME}>
        <Heading as="h5" size="md">
          Input Time
        </Heading>
      </CodeTooltip>
      <CodeTooltip id={TooltipId.APPLICATION_HEADER_INPUT_DATE}>
        <Heading as="h5" size="md">
          Input Date
        </Heading>
      </CodeTooltip>
      <CodeTooltip id={TooltipId.APPLICATION_HEADER_LT_ADDRESS}>
        <Heading as="h5" size="md">
          LTAddress
        </Heading>
      </CodeTooltip>
      <CodeTooltip id={TooltipId.APPLICATION_HEADER_SESSION_NUMBER}>
        <Heading as="h5" size="md">
          Session number
        </Heading>
      </CodeTooltip>
      <CodeTooltip id={TooltipId.APPLICATION_HEADER_SEQUENCE_NUMBER}>
        <Heading as="h5" size="md">
          Sequence number
        </Heading>
      </CodeTooltip>
      <CodeTooltip id={TooltipId.APPLICATION_HEADER_OUTPUT_DATE}>
        <Heading as="h5" size="md">
          Output Date
        </Heading>
      </CodeTooltip>
      <CodeTooltip id={TooltipId.APPLICATION_HEADER_OUTPUT_TIME}>
        <Heading as="h5" size="md">
          Output Time
        </Heading>
      </CodeTooltip>
      <CodeTooltip id={TooltipId.APPLICATION_HEADER_PRIORITY}>
        <Heading as="h5" size="md">
          Priority
        </Heading>
      </CodeTooltip>

      <Paragraph size="lg">
        This is the Application Header Block for Sender (Instructing Agent) BIC.
        MT Messages: Block 2, using the LTA (12 character) format (
        <InlineCode>IRVTUS3NAXXX</InlineCode>). It indicates the message type (
        <InlineCode>O103</InlineCode> for Outbound and MT103), sender&apos;s and
        receiver&apos;s information, and date and time of sending.
      </Paragraph>
      <Paragraph size="lg">
        All payment initiation instructions require a Sender BIC. If you are a
        Financial Institution and have a Swift-connected BIC, use that as the
        Sender BIC. The BIC used must be set up during the client onboarding
        process.
      </Paragraph>

      <Paragraph size="lg">
        <span className={styles.note}>NOTE</span>
        If you do not have an assigned Swift BIC, use{" "}
        <InlineCode>IRVTUS3NXXX</InlineCode> as the Sender BIC (the Payment API
        will still perform account validations based on the Nexen API Processing
        Id, based on the Client Profile setup).
      </Paragraph>
    </>
  );
}
