export enum FinancialMessagingStandard {
  SWIFT = "swift",
  PACS = "pacs",
}

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export enum Anchors {
  BASIC_HEADER = "basic-header",
  APPLICATION_HEADER = "application-header",
  USER_HEADER = "user-header",
  TEXT_BLOCK = "text-block",
  RECEIVE_AN_API_RESPONSE = "receive-an-api-response",
  TRACK_YOUR_PAYMENT = "track-your-payment",
  OVERVIEW = "overview",
  FORMAT_THE_REQUEST_BODY = "format-the-request-body",
  FORMAT_THE_MESSAGE_FIELD = "format-the-message-field",
  ENDPOINT = "endpoint",
}
