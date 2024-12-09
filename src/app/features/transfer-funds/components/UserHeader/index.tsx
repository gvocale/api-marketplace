import { SectionId } from "@/app/features/types";
import { Code } from "../Code";
import { Eyebrow } from "../Eyebrow";
import { Paragraph } from "../Paragraph";
import styles from "./index.module.scss";
import { ShikiTransformer } from "shiki";
import { DecorationItem } from "shiki";

export function UserHeader() {
  const CODE = `{ 
  3: {{ 
    121: 28191b19-c5ef-44fe-a35c-172cfa997a3e 
  }} 
}`;

  const transformer: ShikiTransformer = {
    span(node, line, col) {
      node.properties["data-line"] = line;
      node.properties["data-col"] = col;
    },
  };

  const decorations: DecorationItem[] = [
    {
      start: { line: 2, character: 4 },
      end: { line: 2, character: 7 },
      properties: {
        "data-tooltip-title": "Mandatory UETR",
        tabindex: 0,
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
        transformers={[transformer]}
      />
      <Paragraph>
        This block contains the mandatory UETR (tag 121) used for end-to-end
        tracking of the payment.
      </Paragraph>
    </div>
  );
}
