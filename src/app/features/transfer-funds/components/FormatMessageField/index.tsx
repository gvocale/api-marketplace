import { SectionId } from "@/app/features/types";
import { Code } from "../Code";
import { Heading } from "../Heading";
import { InlineCode } from "../InlineCode";
import { Paragraph } from "../Paragraph";
import styles from "./index.module.scss";
import { InView } from "../InView";
import { DecorationItem, ShikiTransformer } from "shiki";
export function FormatMessageField() {
  const JSON_1 = `{
  { 1: F01IRVTUS3NAXXX4321123456 }
  { 2: O1031214240725IRVTUS3NAXXX43211234562407251214N }
  { 3: { 
    121: 28191b19-c5ef-44fe-a35c-172cfa997a3e }}
  { 4:
      20:   UF9CKT53FROE8KTA23B:CRED
      32A:  230922USD12,
      33B:  USD12000,
      50K:  /78787878
            JOHN DEBTOR
            DEBTORTOWN
      52A:  CIBCCATTXXX
      53B:  /1111112222
      57A:  IRVTUS3NXXX
      59:   /90909090
            JANE CREDITOR
            CREDITORVILLE
      70:   BAX REFERENCE: BAX000009366
      71A:  OUR -
  }
}`;

  const decorations: DecorationItem[] = [
    {
      start: { line: 8, character: 12 },
      end: { line: 8, character: 20 },
      properties: {
        "data-tooltip-title": "CIBC Bank is instructing BNY to send USD 12,000",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 10, character: 12 },
      end: { line: 10, character: 23 },
      properties: {
        "data-tooltip-title": "The sender's name",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 13, character: 12 },
      end: { line: 13, character: 23 },
      properties: {
        "data-tooltip-title": "The sender's account number",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 16, character: 12 },
      end: { line: 16, character: 25 },
      properties: {
        "data-tooltip-title": "The receiver's name",
        tabindex: 0,
        id: "application-header-1",
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
      <Heading
        as="h3"
        size="xl"
        className={styles.heading}
        id={SectionId.FORMAT_THE_MESSAGE_FIELD}
      >
        Format The Message Field
      </Heading>
      <InView id={SectionId.OVERVIEW} type="regular">
        <Heading as="h4" id={SectionId.OVERVIEW} size="lg">
          Overview
        </Heading>
        <Paragraph>
          Next, format the <InlineCode>message</InlineCode> field per Swift MT
          103 formatting guidelines. The MT 103 message is made up of four
          blocks. Note that the format of the MT 103 must meet the Swift
          specification but that some of the information in the message is not
          used by the API.
        </Paragraph>
        <Paragraph>
          In the example below, CIBC Bank is instructing BNY to send USD 12,000
          on behalf of its client, John Debtor to Jane Creditor, who is a client
          of BNY&apos;s Belgium branch, with a Value Date of July 24th 2024.
          CIBC&apos;s debit account at BNY is in Tag{" "}
          <InlineCode>53B</InlineCode>, which BNY will use to fund the
          transaction.
        </Paragraph>
        <Code
          code={JSON_1}
          lang="bash"
          decorations={decorations}
          transformers={[transformer]}
        />
      </InView>
    </div>
  );
}
