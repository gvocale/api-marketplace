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
