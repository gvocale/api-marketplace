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

export enum Id {
  APPLICATION_HEADER = "application-header",
  BASIC_HEADER = "basic-header",
  DEBTOR = "debtor",
  ENDPOINT = "endpoint",
  FORMAT_THE_MESSAGE_FIELD = "format-the-message-field",
  FORMAT_THE_REQUEST_BODY = "format-the-request-body",
  HOW_IT_WORKS = "how-it-works",
  INITIATE_A_PAYMENT = "initiate-a-payment",
  INTERMEDIARY_AGENT_1 = "intermediary-agent-1",
  INTERMEDIARY_BANK_A = "intermediary-bank-a",
  ORDERING_INSTITUTION = "ordering-institution",
  OUR_CLIENTS = "our-clients",
  OVERVIEW = "overview",
  PACS_1_CUSTOMER = "pacs-1-customer",
  PACS_2_CLIENT_HOST_APPLICATION = "pacs-2-client-host-application", 
  PACS_3_DEBTOR_AGENT = "pacs-3-debtor-agent",
  PACS_4_INTERMEDIARY_AGENT = "pacs-4-intermediary-agent",
  PACS_5_CREDITOR_AGENT = "pacs-5-creditor-agent",
  PACS_6_CREDITOR = "pacs-6-creditor",
  RECEIVE_AN_API_RESPONSE = "receive-an-api-response",
  STEPS_TO_INITIATE_A_WIRE_PAYMENT = "steps-to-initiate-a-wire-payment",
  SWIFT_1_CUSTOMER = "swift-1-customer",
  SWIFT_2_CLIENT_HOST_APPLICATION = "swift-2-client-host-application",
  SWIFT_3_ORDERING_CUSTOMER = "swift-3-ordering-customer",
  SWIFT_4_INTERMEDIARY_BANK_A = "swift-4-intermediary-bank-a",
  SWIFT_5_INTERMEDIARY_BANK_B = "swift-5-intermediary-bank-b",
  SWIFT_6_BENEFICIARY_BANK = "swift-6-beneficiary-bank",
  SWIFT_7_BENEFICIARY = "swift-7-beneficiary",
  TEXT_BLOCK = "text-block",
  TRACK_YOUR_PAYMENT = "track-your-payment",
  USER_HEADER = "user-header",
}
