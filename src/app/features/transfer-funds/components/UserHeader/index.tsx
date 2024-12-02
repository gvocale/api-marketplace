import { Anchors } from "@/app/features/types";
import { Code } from "../Code";
import { Container } from "../Container";
import { Eyebrow } from "../Eyebrow";
import styles from "./index.module.scss";

export function UserHeader() {
  const CODE = `{ 3: {{ 121: 28191b19-c5ef-44fe-a35c-172cfa997a3e }} }`;

  return (
    <Container variant="narrow">
      <Eyebrow className={styles.eyebrow}>Third Block</Eyebrow>
      <h4 className={styles.h4} id={Anchors.USER_HEADER}>
        User Header
      </h4>
      <Code code={CODE} language="bash" className={styles.code} />
      <p className={styles.paragraph}>
        This block contains the mandatory UETR (tag 121) used for end-to-end
        tracking of the payment.
      </p>
    </Container>
  );
}
