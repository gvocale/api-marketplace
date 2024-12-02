import { Code } from "../Code";
import { Container } from "../Container";
import { InlineCode } from "../InlineCode";
import { Table } from "../Table";
import { TextLink } from "../TextLink";
import styles from "./index.module.scss";

export function ReceiveApiResponse() {
  const JSON_1 = `
    {
      "metadata": {
        "success": true,
        "requestId": "dbbae877-2895-4f7b-b720-66d0efeeca34",
        "count": 1
      },
      "result": {
        "xrefId": "1e2c5156-7ffd-4cbc-931f-2a7b57d91e70",
        "clientReferenceId": "96f9213e-b8e1-41ac-a8a4-71cc4d21bd57",
        "timeReceived": "2022-08-11T18:35:59.711Z",
        "clientDescription": "Payment for Services",
        "status": "Received"
      }
    }
    `;

  const JSON_2 = `
    {
      "metadata": {
        "success": false,
        "requestId": "08ce944f-8ac2-44fd-b8ea-5e59056b309c",
        "count": 0
      },
      "error": {
        "code": "1003",
        "description": "Invalid digital signature: the request must be signed with client specific private key"
      }
    }
    `;

  return (
    <Container variant="narrow">
      <h3 className={styles.h3} id="receive-an-api-response">
        Receive An API Response
      </h3>
      <p className={styles.paragraph}>
        The Response Body contains two elements:{" "}
        <InlineCode language="tsx">metadata</InlineCode> and{" "}
        <InlineCode language="tsx">request</InlineCode>.
      </p>
      <Table>
        <tbody>
          <tr>
            <th>
              <InlineCode language="tsx">success</InlineCode>
            </th>
            <td>Indicates whether the API call was successful</td>
          </tr>
          <tr>
            <th>
              <InlineCode language="tsx">requestId</InlineCode>
            </th>
            <td>Request identifier that was sent in the API request</td>
          </tr>
          <tr>
            <th>
              <InlineCode language="tsx">count</InlineCode>
            </th>
            <td>Number of records returned in the response</td>
          </tr>
          <tr>
            <th>
              <InlineCode language="tsx">xrefID</InlineCode>
            </th>
            <td>
              Unique system-generated reference ID for the payment initiation
              request
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode language="tsx">clientReferenceId</InlineCode>
            </th>
            <td>
              Internal reference ID of the client that links the payment to
              their system
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode language="tsx">timeReceived</InlineCode>
            </th>
            <td>
              Date and time the payment request was received by the system
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode language="tsx">clientDescription</InlineCode>
            </th>
            <td>Memo field for client reference</td>
          </tr>
          <tr>
            <th>
              <InlineCode language="tsx">status</InlineCode>
            </th>
            <td>
              Payment status; &ldquo;Received&rdquo; is the only valid response
              for a successful request. Otherwise, an error will be returned.
            </td>
          </tr>
        </tbody>
      </Table>
      <Code code={JSON_1} language="json" />
      <p className={styles.paragraph}>
        If you receive an error, the &apos;success&apos; field in the response
        will be returned as false. An example of a{" "}
        <TextLink href="https://marketplace.bnymellon.com/treasury/api-central/#/swiftMt103-page:~:text=example%20of%20a-,General%20API%20Error,-is%20found%20below">
          General API Error
        </TextLink>{" "}
        is found below.
      </p>
      <Code code={JSON_2} language="json" />
      <p className={styles.paragraph}>
        You may also receive an{" "}
        <TextLink href="https://marketplace.bnymellon.com/treasury/api-central/#/swiftMt103-page:~:text=You%20may%20also%20receive%20an%20API%20Gateway%20error%20which%20are%20caused%20by%20authorization%20problems%20with%20the%20request%20at%20the%20BNY%20API%20Gateway.">
          API Gateway error
        </TextLink>{" "}
        which are caused by authorization problems with the request at the BNY
        API Gateway.
      </p>
    </Container>
  );
}
