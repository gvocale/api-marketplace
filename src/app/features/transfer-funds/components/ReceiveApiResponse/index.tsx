import { TooltipId } from "@/app/features/types";
import { DecorationItem } from "shiki";
import { Code } from "../Code";
import { CodeTooltip } from "../CodeTooltip";
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

  const decorations: DecorationItem[] = [
    {
      start: { line: 2, character: 4 },
      end: { line: 2, character: 13 },
      properties: {
        dataTooltipId: TooltipId.API_RESPONSE_SUCCESS,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.API_RESPONSE_SUCCESS}`,
        },
      },
    },
    {
      start: { line: 3, character: 4 },
      end: { line: 3, character: 15 },
      properties: {
        dataTooltipId: TooltipId.API_RESPONSE_REQUEST_ID,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.API_RESPONSE_REQUEST_ID}`,
        },
      },
    },
    {
      start: { line: 4, character: 4 },
      end: { line: 4, character: 11 },
      properties: {
        dataTooltipId: TooltipId.API_RESPONSE_COUNT,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.API_RESPONSE_COUNT}`,
        },
      },
    },
    {
      start: { line: 7, character: 4 },
      end: { line: 7, character: 12 },
      properties: {
        dataTooltipId: TooltipId.API_RESPONSE_XREF_ID,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.API_RESPONSE_XREF_ID}`,
        },
      },
    },
    {
      start: { line: 8, character: 4 },
      end: { line: 8, character: 23 },
      properties: {
        dataTooltipId: TooltipId.API_RESPONSE_CLIENT_REFERENCE_ID,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.API_RESPONSE_CLIENT_REFERENCE_ID}`,
        },
      },
    },
    {
      start: { line: 9, character: 4 },
      end: { line: 9, character: 18 },
      properties: {
        dataTooltipId: TooltipId.API_RESPONSE_TIME_RECEIVED,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.API_RESPONSE_TIME_RECEIVED}`,
        },
      },
    },
    {
      start: { line: 10, character: 4 },
      end: { line: 10, character: 23 },
      properties: {
        dataTooltipId: TooltipId.API_RESPONSE_CLIENT_DESCRIPTION,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.API_RESPONSE_CLIENT_DESCRIPTION}`,
        },
      },
    },
    {
      start: { line: 11, character: 4 },
      end: { line: 11, character: 12 },
      properties: {
        dataTooltipId: TooltipId.API_RESPONSE_STATUS,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.API_RESPONSE_STATUS}`,
        },
      },
    },
  ];

  return (
    <div>
      <Heading as="h3" id="receive-an-api-response" size="xl">
        Receive An API Response
      </Heading>
      <Paragraph size="lg">
        The Response Body contains two elements:{" "}
        <InlineCode>metadata</InlineCode> and <InlineCode>request</InlineCode>.
      </Paragraph>

      {/* success */}
      <CodeTooltip id={TooltipId.API_RESPONSE_SUCCESS}>
        <Paragraph size="sm">
          Indicates whether the API call was successful
        </Paragraph>
      </CodeTooltip>

      {/* requestId */}
      <CodeTooltip id={TooltipId.API_RESPONSE_REQUEST_ID}>
        <Paragraph size="sm">
          Request identifier that was sent in the API request
        </Paragraph>
      </CodeTooltip>

      {/* count */}
      <CodeTooltip id={TooltipId.API_RESPONSE_COUNT}>
        <Paragraph size="sm">
          Number of records returned in the response
        </Paragraph>
      </CodeTooltip>

      {/* xrefId */}
      <CodeTooltip id={TooltipId.API_RESPONSE_XREF_ID}>
        <Paragraph size="sm">
          Unique system-generated r eference ID for the payment initiation
          request
        </Paragraph>
      </CodeTooltip>

      {/* clientReferenceId */}
      <CodeTooltip id={TooltipId.API_RESPONSE_CLIENT_REFERENCE_ID}>
        <Paragraph size="sm">
          Internal reference ID of the client that links the payment to their
          system
        </Paragraph>
      </CodeTooltip>

      {/* timeReceived */}
      <CodeTooltip id={TooltipId.API_RESPONSE_TIME_RECEIVED}>
        <Paragraph size="sm">
          Date and time the payment request was received by the system
        </Paragraph>
      </CodeTooltip>

      {/* clientDescription */}
      <CodeTooltip id={TooltipId.API_RESPONSE_CLIENT_DESCRIPTION}>
        <Paragraph size="sm">Memo field for client reference</Paragraph>
      </CodeTooltip>

      {/* status */}
      <CodeTooltip id={TooltipId.API_RESPONSE_STATUS}>
        <Paragraph size="sm">
          Payment status; <InlineCode>Received</InlineCode> is the only valid
          response for a successful request. Otherwise, an error will be
          returned.
        </Paragraph>
      </CodeTooltip>

      <Code
        code={JSON_1}
        lang="json"
        className={styles.code}
        decorations={decorations}
      />
      <Paragraph size="lg">
        If you receive an error, the <InlineCode>success</InlineCode> field in
        the response will be returned as <InlineCode>false</InlineCode>. An
        example of a{" "}
        <TextLink href="https://marketplace.bnymellon.com/treasury/api-central/#/swiftMt103-page:~:text=example%20of%20a-,General%20API%20Error,-is%20found%20below">
          General API Error
        </TextLink>{" "}
        is found below.
      </Paragraph>
      <Code code={JSON_2} lang="json" className={styles.code} />
      <Paragraph size="lg">
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
