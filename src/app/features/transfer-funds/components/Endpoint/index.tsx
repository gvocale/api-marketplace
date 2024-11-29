import { Code } from "../Code";
import { Container } from "../Container";
import { TextLink } from "../TextLink";
import styles from "./index.module.scss";

export function Endpoint() {
  const curlCommand = `
  curl -X POST https://apigateway.bnymellon.com/payments/v1/payments
  -H 'authorization: Bearer {Access_Token}'
  -H 'content-type: application/json'
  -d '{
    "key1": "value1",
    "key2": "value2"
  }'
    `;

  return (
    <Container variant="narrow">
      <h3 className={styles.h3}>Endpoint</h3>
      <p className={styles.paragraph}>
        First, use this endpoint and set your headers to submit a{' '}
        <TextLink href="https://marketplace.bnymellon.com/treasury/api-central/#/swiftMt103-page:~:text=to%20submit%20a-,Funds%20Transfer,-in%20the%20Swift">
          Funds Transfer
        </TextLink>{' '}
        in the Swift MT 103 format.
      </p>
      <Code code={curlCommand} language="bash" />
    </Container>
  );
}
