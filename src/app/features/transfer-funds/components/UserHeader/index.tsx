import { SectionId, TooltipId } from "@/app/features/types";
import { DecorationItem } from "shiki";
import { Code } from "../Code";
import { Eyebrow } from "../Eyebrow";
import { Paragraph } from "../Paragraph";
import styles from "./index.module.scss";
import { CodeTooltip } from "../CodeTooltip";
import { InlineCode } from "../InlineCode";

export function UserHeader() {
  const CODE = `{ 
  3: {{ 
    121: 28191b19-c5ef-44fe-a35c-172cfa997a3e 
  }} 
}`;

  const decorations: DecorationItem[] = [
    {
      start: { line: 2, character: 4 },
      end: { line: 2, character: 7 },
      properties: {
        dataTooltipId: TooltipId.USER_HEADER_UETR,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.USER_HEADER_UETR}`,
        },
      },
    },
  ];

  return (
    <div>
      <Eyebrow className={styles.eyebrow}>Third Block</Eyebrow>
      <h4 className={styles.h4} id={SectionId.USER_HEADER}>
        User Header
      </h4>
      <Code
        code={CODE}
        lang="bash"
        className={styles.code}
        decorations={decorations}
      />

      <CodeTooltip id={TooltipId.USER_HEADER_UETR}>
        <Paragraph size="sm">
          Mandatory Unique End-to-end Transaction Reference (UETR)
        </Paragraph>
      </CodeTooltip>

      <Paragraph size="lg">
        This block contains the mandatory UETR (tag <InlineCode>121</InlineCode>
        ) used for end-to-end tracking of the payment.
      </Paragraph>
    </div>
  );
}
