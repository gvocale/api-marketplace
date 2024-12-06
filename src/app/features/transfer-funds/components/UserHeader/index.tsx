import { SectionId } from "@/app/features/types";
import { Code } from "../Code";
import { Eyebrow } from "../Eyebrow";
import { Paragraph } from "../Paragraph";
import styles from "./index.module.scss";

export function UserHeader() {
  const CODE = `{ 3: {{ 121: 28191b19-c5ef-44fe-a35c-172cfa997a3e }} }`;

  return (
    <div>
      <Eyebrow className={styles.eyebrow}>Third Block</Eyebrow>
      <h4 className={styles.h4} id={SectionId.USER_HEADER}>
        User Header
      </h4>
      <Code code={CODE} language="bash" className={styles.code} />
      <Paragraph>
        This block contains the mandatory UETR (tag 121) used for end-to-end
        tracking of the payment.
      </Paragraph>
    </div>
  );
}
