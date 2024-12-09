import { SectionId } from "@/app/features/types";
import { DecorationItem, ShikiTransformer } from "shiki/bundle/web";
import { Code } from "../Code";
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
        "data-tooltip-title": "Message type",
        tabindex: 0,
        id: "application-header-1",
      },
      tagName: "span",
    },
    {
      start: { line: 1, character: 6 },
      end: { line: 1, character: 9 },
      properties: {
        "data-tooltip-title": "Message format",
        tabindex: 0,
        id: "application-header-2",
      },
      tagName: "span",
    },
    {
      start: { line: 1, character: 9 },
      end: { line: 1, character: 13 },
      properties: {
        "data-tooltip-title": "Input Time",
        tabindex: 0,
        id: "application-header-3",
      },
      tagName: "span",
    },
    {
      start: { line: 1, character: 13 },
      end: { line: 1, character: 19 },
      properties: {
        "data-tooltip-title": "Input Date",
        tabindex: 0,
        id: "application-header-4",
      },
      tagName: "span",
    },
    {
      start: { line: 1, character: 19 },
      end: { line: 1, character: 31 },
      properties: {
        "data-tooltip-title": "LTAddress",
        tabindex: 0,
        id: "application-header-5",
      },
      tagName: "span",
    },
    {
      start: { line: 1, character: 31 },
      end: { line: 1, character: 35 },
      properties: {
        "data-tooltip-title": "Session number",
        tabindex: 0,
        id: "application-header-6",
      },
      tagName: "span",
    },
    {
      start: { line: 1, character: 35 },
      end: { line: 1, character: 40 },
      properties: {
        "data-tooltip-title": "Sequence number",
        tabindex: 0,
        id: "application-header-7",
      },
      tagName: "span",
    },
    {
      start: { line: 1, character: 40 },
      end: { line: 1, character: 46 },
      properties: {
        "data-tooltip-title": "Output Date",
        tabindex: 0,
        id: "application-header-8",
      },
      tagName: "span",
    },
    {
      start: { line: 1, character: 47 },
      end: { line: 1, character: 51 },
      properties: {
        "data-tooltip-title": "Output Time",
        tabindex: 0,
        id: "application-header-9",
      },
      tagName: "span",
    },
    {
      start: { line: 1, character: 51 },
      end: { line: 1, character: 52 },
      properties: {
        "data-tooltip-title": "Priority",
        tabindex: 0,
        id: "application-header-10",
      },
      tagName: "span",
    },
  ];

  const transformer: ShikiTransformer = {
    span(node, line, col) {
      node.properties["data-line"] = line;
      node.properties["data-col"] = col;
    },
  };

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
      <Notice className={styles.notice}>
        Contains the sender&apos;s and receiver&apos;s bank information, including bank
        identifiers and branch information.
      </Notice>
      <Code
        code={CODE}
        lang="bash"
        className={styles.code}
        decorations={decorations}
        transformers={[transformer]}
      />

      {/* <RightSidebar>
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
      </RightSidebar> */}

      <Paragraph>
        This is the Application Header Block for Sender (Instructing Agent) BIC.
        MT Messages: Block 2, using the LTA (12 character) format
        (<InlineCode>IRVTUS3NAXXX</InlineCode>). It indicates the message type (<InlineCode>O103</InlineCode> for Outbound and
        MT103), sender&apos;s and receiver&apos;s information, and date and time of
        sending.
      </Paragraph>
      <Paragraph>
        All payment initiation instructions require a Sender BIC. If you are a
        Financial Institution and have a Swift-connected BIC, use that as the
        Sender BIC. The BIC used must be set up during the client onboarding
        process.
      </Paragraph>

      <Paragraph>
        <span className={styles.note}>NOTE</span>
        If you do not have an assigned Swift BIC, use <InlineCode>IRVTUS3NXXX</InlineCode> as the Sender
        BIC (the Payment API will still perform account validations based on the
        Nexen API Processing Id, based on the Client Profile setup).
      </Paragraph>
    </>
  );
}
