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

export enum TimelineId {
  PACS_1_CUSTOMER = "pacs-1-customer",
  PACS_2_CLIENT_HOST_APPLICATION = "pacs-2-client-host-application",
  PACS_3_DEBTOR_AGENT = "pacs-3-debtor-agent",
  PACS_4_INTERMEDIARY_AGENT = "pacs-4-intermediary-agent",
  PACS_5_CREDITOR_AGENT = "pacs-5-creditor-agent",
  PACS_6_CREDITOR = "pacs-6-creditor",
  SWIFT_1_CUSTOMER = "swift-1-customer",
  SWIFT_2_CLIENT_HOST_APPLICATION = "swift-2-client-host-application",
  SWIFT_3_ORDERING_CUSTOMER = "swift-3-ordering-customer",
  SWIFT_4_INTERMEDIARY_BANK_A = "swift-4-intermediary-bank-a",
  SWIFT_5_INTERMEDIARY_BANK_B = "swift-5-intermediary-bank-b",
  SWIFT_6_BENEFICIARY_BANK = "swift-6-beneficiary-bank",
  SWIFT_7_BENEFICIARY = "swift-7-beneficiary",
}

export enum SectionId {
  APPLICATION_HEADER = "application-header",
  BASIC_HEADER = "basic-header",
  ENDPOINT = "endpoint",
  FORMAT_THE_MESSAGE_FIELD = "format-the-message-field",
  FORMAT_THE_REQUEST_BODY = "format-the-request-body",
  HOW_IT_WORKS = "how-it-works",
  INITIATE_A_PAYMENT = "initiate-a-payment",
  OUR_CLIENTS = "our-clients",
  OVERVIEW = "overview",
  RECEIVE_AN_API_RESPONSE = "receive-an-api-response",
  STEPS_TO_INITIATE_A_WIRE_PAYMENT = "steps-to-initiate-a-wire-payment",
  TEXT_BLOCK = "text-block",
  TRACK_YOUR_PAYMENT = "track-your-payment",
  USER_HEADER = "user-header",
  FOOTER = "footer",
}

export type Id = TimelineId | SectionId;

export enum TooltipId {
  AMOUNT = "amount",
  APP_ID = "app-id",
  CLIENT_DESCRIPTION = "client-description",
  CLIENT_REFERENCE_ID = "client-reference-id",
  IDEMPOTENCY_KEY = "idempotency-key",
  INPUT_DATE = "input-date",
  INPUT_TIME = "input-time",
  LT_ADDRESS = "lt-address",
  MESSAGE = "message",
  MESSAGE_FORMAT = "message-format",
  MESSAGE_TYPE = "message-type",
  OUTPUT_DATE = "output-date",
  OUTPUT_TIME = "output-time",
  PAYMENT_MESSAGE = "payment-message",
  PAYMENT_PRODUCT = "payment-product",
  PRIORITY = "priority",
  RECEIVER_ACCOUNT_NUMBER = "receiver-account-number",
  RECEIVER_NAME = "receiver-name",
  REQUEST_ID = "request-id",
  SENDER_ACCOUNT_NUMBER = "sender-account-number",
  SENDER_NAME = "sender-name",
  SEQUENCE_NUMBER = "sequence-number",
  SERVICE_ID = "service-id",
  SESSION_NUMBER = "session-number",
  SIGNATURE = "signature",
  SIGNATURE_ALGORITHM = "signature-algorithm",
  APPLICATION_HEADER_MESSAGE_TYPE = "application-header-message-type",
  APPLICATION_HEADER_MESSAGE_FORMAT = "application-header-message-format",
  APPLICATION_HEADER_INPUT_TIME = "application-header-input-time",
  APPLICATION_HEADER_INPUT_DATE = "application-header-input-date",
  APPLICATION_HEADER_LT_ADDRESS = "application-header-lt-address",
  APPLICATION_HEADER_SESSION_NUMBER = "application-header-session-number",
  APPLICATION_HEADER_SEQUENCE_NUMBER = "application-header-sequence-number",
  APPLICATION_HEADER_OUTPUT_DATE = "application-header-output-date",
  APPLICATION_HEADER_OUTPUT_TIME = "application-header-output-time",
  APPLICATION_HEADER_PRIORITY = "application-header-priority",
  USER_HEADER_UETR = "user-header-uetr",
  TEXT_BLOCK_SENDER_REFERENCE = "text-block-sender-reference",
  TEXT_BLOCK_BANK_OPERATION_CODE = "text-block-bank-operation-code",
  TEXT_BLOCK_VALUE_DATE = "text-block-value-date",
  TEXT_BLOCK_CURRENCY_CODE = "text-block-currency-code",
  TEXT_BLOCK_AMOUNT = "text-block-amount",
  TEXT_BLOCK_ORDERING_CUSTOMER = "text-block-ordering-customer",
  TEXT_BLOCK_ORDERING_CUSTOMER_ACCOUNT_NUMBER = "text-block-ordering-customer-account-number",
  TEXT_BLOCK_ORDERING_CUSTOMER_NAME = "text-block-ordering-customer-name",
  TEXT_BLOCK_ORDERING_CUSTOMER_ADDRESS = "text-block-ordering-customer-address",
  TEXT_BLOCK_ORDERING_INSTITUTION = "text-block-ordering-institution",
  TEXT_BLOCK_SENDERS_CORRESPONDENT = "text-block-senders-correspondent",
  TEXT_BLOCK_RECEIVERS_CORRESPONDENT = "text-block-receivers-correspondent",
  TEXT_BLOCK_INTERMEDIARY_INSTITUTION = "text-block-intermediary-institution",
  TEXT_BLOCK_ACCOUNT_WITH_INSTITUTION = "text-block-account-with-institution",
  TEXT_BLOCK_BENEFICIARY_CUSTOMER = "text-block-beneficiary-customer",
  TEXT_BLOCK_REMITTANCE_INFORMATION = "text-block-remittance-information",
  TEXT_BLOCK_CHARGES = "text-block-charges",
  TEXT_BLOCK_SENDER_TO_RECEIVER_INFORMATION = "text-block-sender-to-receiver-information",
  API_RESPONSE_SUCCESS = "api-response-success",
  API_RESPONSE_REQUEST_ID = "api-response-request-id",
  API_RESPONSE_COUNT = "api-response-count",
  API_RESPONSE_XREF_ID = "api-response-xref-id",
  API_RESPONSE_CLIENT_REFERENCE_ID = "api-response-client-reference-id",
  API_RESPONSE_TIME_RECEIVED = "api-response-time-received",
  API_RESPONSE_CLIENT_DESCRIPTION = "api-response-client-description",
  API_RESPONSE_STATUS = "api-response-status",
}
