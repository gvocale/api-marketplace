import { DecorationItem, ShikiTransformer } from "shiki";
import { Code } from "../Code";
import { Heading } from "../Heading";
import { InlineCode } from "../InlineCode";
import { Paragraph } from "../Paragraph";
import { TextLink } from "../TextLink";
import styles from "./index.module.scss";

export function ReceiveApiResponse() {
  const JSON_1 = `{
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
}`;

  const JSON_2 = `{
  "metadata": {
    "success": false,
    "requestId": "08ce944f-8ac2-44fd-b8ea-5e59056b309c",
    "count": 0
  },
  "error": {
    "code": "1003",
    "description": "Invalid digital signature: the request must be signed with client specific private key"
  }
}`;

  const decorations1: DecorationItem[] = [
    {
      start: { line: 2, character: 4 },
      end: { line: 2, character: 13 },
      properties: {
        "data-tooltip-title": "Indicates whether the API call was successful",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 3, character: 4 },
      end: { line: 3, character: 15 },
      properties: {
        "data-tooltip-title":
          "Request identifier that was sent in the API request",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 4, character: 4 },
      end: { line: 4, character: 11 },
      properties: {
        "data-tooltip-title": "Number of records returned in the response",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 7, character: 4 },
      end: { line: 7, character: 12 },
      properties: {
        "data-tooltip-title":
          "Unique system-generated reference ID for the payment initiation request",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 8, character: 4 },
      end: { line: 8, character: 23 },
      properties: {
        "data-tooltip-title":
          "Internal reference ID of the client that links the payment to their system",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 9, character: 4 },
      end: { line: 9, character: 18 },
      properties: {
        "data-tooltip-title":
          "Date and time the payment request was received by the system",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 10, character: 4 },
      end: { line: 10, character: 23 },
      properties: {
        "data-tooltip-title": "Memo field for client reference",
        tabindex: 0,
        id: "application-header-1",
      },
    },
    {
      start: { line: 11, character: 4 },
      end: { line: 11, character: 12 },
      properties: {
        "data-tooltip-title":
          "Payment status; “Received” is the only valid response for a successful request. Otherwise, an error will be returned.",
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
      <Heading as="h3" id="receive-an-api-response" size="xl">
        Receive An API Response
      </Heading>
      <Paragraph>
        The Response Body contains two elements:{" "}
        <InlineCode>metadata</InlineCode> and <InlineCode>request</InlineCode>.
      </Paragraph>
      {/* <Table className={styles.table}>
        <tbody>
          <tr>
            <th>
              <InlineCode>success</InlineCode>
            </th>
            <td>Indicates whether the API call was successful</td>
          </tr>
          <tr>
            <th>
              <InlineCode>requestId</InlineCode>
            </th>
            <td>Request identifier that was sent in the API request</td>
          </tr>
          <tr>
            <th>
              <InlineCode>count</InlineCode>
            </th>
            <td>Number of records returned in the response</td>
          </tr>
          <tr>
            <th>
              <InlineCode>xrefID</InlineCode>
            </th>
            <td>
              Unique system-generated reference ID for the payment initiation
              request
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>clientReferenceId</InlineCode>
            </th>
            <td>
              Internal reference ID of the client that links the payment to
              their system
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>timeReceived</InlineCode>
            </th>
            <td>
              Date and time the payment request was received by the system
            </td>
          </tr>
          <tr>
            <th>
              <InlineCode>clientDescription</InlineCode>
            </th>
            <td>Memo field for client reference</td>
          </tr>
          <tr>
            <th>
              <InlineCode>status</InlineCode>
            </th>
            <td>
              Payment status; &ldquo;Received&rdquo; is the only valid response
              for a successful request. Otherwise, an error will be returned.
            </td>
          </tr>
        </tbody>
      </Table> */}
      <Code
        code={JSON_1}
        lang="json"
        className={styles.code}
        decorations={decorations1}
        transformers={[transformer]}
      />
      <Paragraph>
        If you receive an error, the <InlineCode>success</InlineCode> field in
        the response will be returned as <InlineCode>false</InlineCode>. An
        example of a{" "}
        <TextLink href="https://marketplace.bnymellon.com/treasury/api-central/#/swiftMt103-page:~:text=example%20of%20a-,General%20API%20Error,-is%20found%20below">
          General API Error
        </TextLink>{" "}
        is found below.
      </Paragraph>
      <Code code={JSON_2} lang="json" className={styles.code} />
      <Paragraph>
        You may also receive an{" "}
        <TextLink href="https://marketplace.bnymellon.com/treasury/api-central/#/swiftMt103-page:~:text=You%20may%20also%20receive%20an%20API%20Gateway%20error%20which%20are%20caused%20by%20authorization%20problems%20with%20the%20request%20at%20the%20BNY%20API%20Gateway.">
          API Gateway error
        </TextLink>{" "}
        which are caused by authorization problems with the request at the BNY
        API Gateway.
      </Paragraph>
    </div>
  );
}
