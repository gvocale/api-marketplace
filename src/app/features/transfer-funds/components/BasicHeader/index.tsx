import { SectionId } from "@/app/features/types";
import { DecorationItem, ShikiTransformer } from "shiki/bundle/web";
import { Code } from "../Code";
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

  const transformer: ShikiTransformer = {
    span(node, line, col) {
      node.properties["data-line"] = line;
      node.properties["data-col"] = col;
    },
  };

  const decorations: DecorationItem[] = [
    {
      start: { line: 1, character: 4 },
      end: { line: 1, character: 5 },
      properties: {
        "data-tooltip-title": "AppID",
        tabindex: 0,
      },
    },
    {
      start: { line: 1, character: 5 },
      end: { line: 1, character: 7 },
      properties: {
        "data-tooltip-title": "ServiceID",
        tabindex: 0,
      },
    },
    {
      start: { line: 1, character: 7 },
      end: { line: 1, character: 19 },
      properties: {
        "data-tooltip-title": "LTAddress",
        tabindex: 0,
      },
    },
    {
      start: { line: 1, character: 19 },
      end: { line: 1, character: 23 },
      properties: {
        "data-tooltip-title": "Session Number",
        tabindex: 0,
      },
    },
    {
      start: { line: 1, character: 23 },
      end: { line: 1, character: 29 },
      properties: {
        "data-tooltip-title": "Session Number",
        tabindex: 0,
      },
    },
  ];

  return (
    <div>
      <Eyebrow className={styles.eyebrow}>First Block</Eyebrow>
      <Heading as="h4" id={SectionId.BASIC_HEADER} size="lg">
        Basic Header
      </Heading>
      <Notice className={styles.notice}>Contains the message type.</Notice>
      <Code
        code={CODE}
        lang="bash"
        className={styles.code}
        decorations={decorations}
        transformers={[transformer]}
      />
      {/* <Table className={styles.table}>
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
      </Table> */}
      <Paragraph>
        The Basic Header Block includes the Receiver (Instructed Agent) BIC. All
        Funds Transfer payment initiation instructions require a Receiver BIC.
        Use the LTA format (12 characters, i.e., <InlineCode>IRVTUS3NAXXX</InlineCode>). The API does not
        make use of the session and sequence numbers, but they are needed to
        maintain the formatting rules.
      </Paragraph>
      <Paragraph>
        If you are a Financial Institution, you should use your desired Receiver
        BIC (BNY Branch, such as <InlineCode>IRVTUS3N</InlineCode> or <InlineCode>IRVTBEBB</InlineCode>), based on how you want
        the payment to be routed for processing. Use <InlineCode>IRVTUS3N</InlineCode> (<InlineCode>IRVTUS3NAXXX</InlineCode>) as
        a default Receiver BIC if you do not know the BIC of the BNY Branch
        associated with your debit account. The debit account (Tag{" "}
        <InlineCode>53B</InlineCode>) is mandatory for API transactions.
      </Paragraph>
    </div>
  );
}
