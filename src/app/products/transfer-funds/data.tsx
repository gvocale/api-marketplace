export const CURL_EXAMPLE_1 = `curl -X POST https://apigateway.bnymellon.com/payments/v1/payments
-H 'authorization: Bearer {Access_Token}'
-H 'content-type: application/json'
-d '
`;

export const JSON_1 = {
  metadata: {
    requestId: "64533ec3-463e-4bc8-b28e-d69ea312de2b",
    idempotencyKey: "aacbd7a97eed457",
    signatureAlgorithm: "SHA256withRSA",
    signature: "sWQzj1ov4oufwntat9KloOiFEki71aSfrAl21oxd0yg==",
  },
};

export const JSON_2 = {
  request: {
    paymentProduct: "WIRE",
    paymentMessage: "CREDIT_TRANSFER",
    clientReferenceId: "49728698-67a2-4bb5-826e-7a44f01527e5",
    clientDescription: "Payment for Services",
    messageFormat: "ISO20022.Pacs.008",
    message:
      '<?xml version="1.0" encoding="UTF-8"?><Envelope xmlns="urn:swift:xsd:envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:swift:xsd:envelope ../../../../March21Schemas/Translator_envelope.xsd">\n<AppHdr xmlns="urn:iso:std:iso:20022:tech:xsd:head.001.001.02" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><Fr><FIId><FinInstnId><BICFI>IRVTGB2XGTM</BICFI></FinInstnId></FIId></Fr><To><FIId><FinInstnId><BICFI>IRVTUS3NAMS</BICFI></FinInstnId></FIId></To><BizMsgIdr>SS04044506000000</BizMsgIdr><MsgDefIdr>pacs.008.001.08</MsgDefIdr><BizSvc>swift.cbprplus.02</BizSvc><CreDt>2020-01-11T12:43:41.960+00:00</CreDt></AppHdr><Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.008.001.08" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><FIToFICstmrCdtTrf><GrpHdr><MsgId>SS04044000000008</MsgId><CreDtTm>2020-01-11T12:43:41.960+00:00</CreDtTm><NbOfTxs>1</NbOfTxs><SttlmInf><SttlmMtd>INDA</SttlmMtd><!-- This adds the Settlement Account (MT103 Tag 53B eq.) required by UP API --><SttlmAcct><Id><Othr><Id>9794728400</Id></Othr></Id></SttlmAcct><!-- This ends the Settlement Account addition --></SttlmInf></GrpHdr><CdtTrfTxInf><PmtId><InstrId>SS04044506272708</InstrId><EndToEndId>KK04044506200000</EndToEndId><UETR>12345678-0000-4000-B000-123456781234</UETR></PmtId><IntrBkSttlmAmt Ccy="USD">300000</IntrBkSttlmAmt><IntrBkSttlmDt>2020-01-11</IntrBkSttlmDt><InstdAmt Ccy="USD">300000</InstdAmt><ChrgBr>DEBT</ChrgBr><InstgAgt><FinInstnId><BICFI>IRVTGB2XGTM</BICFI></FinInstnId></InstgAgt><InstdAgt><FinInstnId><BICFI>IRVTUS3NAMS</BICFI></FinInstnId></InstdAgt><IntrmyAgt1><FinInstnId><BICFI>FTSBUS33XXX</BICFI></FinInstnId></IntrmyAgt1><Dbtr><Nm>ACME INC.</Nm><PstlAdr><StrtNm>ROAD PKWY</StrtNm><PstCd>32034</PstCd><TwnNm>TOWN</TwnNm><TwnLctnNm>TOWN3</TwnLctnNm><Ctry>US</Ctry></PstlAdr></Dbtr><DbtrAgt><FinInstnId><BICFI>CHASGB2LXXX</BICFI></FinInstnId></DbtrAgt><CdtrAgt><FinInstnId><BICFI>ABNANL2AXXX</BICFI></FinInstnId></CdtrAgt><Cdtr><Nm>DELTA LLOYD</Nm><PstlAdr><StrtNm>OMVAL 300</StrtNm><PstCd>00000</PstCd><TwnNm>TOWN2</TwnNm><Ctry>NL</Ctry></PstlAdr></Cdtr><CdtrAcct><Id><Othr><Id>NL00ABNA0123456789</Id></Othr></Id></CdtrAcct><RmtInf><Ustrd>INVOICE A000,0000/04,991/05</Ustrd></RmtInf></CdtTrfTxInf></FIToFICstmrCdtTrf></Document></Envelope>',
  },
};

export const JSON_3 = {
  message:
    '<?xml version="1.0" encoding="UTF-8"?><Envelope xmlns="urn:swift:xsd:envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:swift:xsd:envelope ../../../../March21Schemas/Translator_envelope.xsd">\n<AppHdr xmlns="urn:iso:std:iso:20022:tech:xsd:head.001.001.02" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><Fr><FIId><FinInstnId><BICFI>IRVTGB2XGTM</BICFI></FinInstnId></FIId></Fr><To><FIId><FinInstnId><BICFI>IRVTUS3NAMS</BICFI></FinInstnId></FIId></To><BizMsgIdr>SS04044506000000</BizMsgIdr><MsgDefIdr>pacs.008.001.08</MsgDefIdr><BizSvc>swift.cbprplus.02</BizSvc><CreDt>2020-01-11T12:43:41.960+00:00</CreDt></AppHdr><Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.008.001.08" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><FIToFICstmrCdtTrf><GrpHdr><MsgId>SS04044000000008</MsgId><CreDtTm>2020-01-11T12:43:41.960+00:00</CreDtTm><NbOfTxs>1</NbOfTxs><SttlmInf><SttlmMtd>INDA</SttlmMtd><!-- This adds the Settlement Account (MT103 Tag 53B eq.) required by UP API --><SttlmAcct><Id><Othr><Id>9794728400</Id></Othr></Id></SttlmAcct><!-- This ends the Settlement Account addition --></SttlmInf></GrpHdr><CdtTrfTxInf><PmtId><InstrId>SS04044506272708</InstrId><EndToEndId>KK04044506200000</EndToEndId><UETR>12345678-0000-4000-B000-123456781234</UETR></PmtId><IntrBkSttlmAmt Ccy="USD">300000</IntrBkSttlmAmt><IntrBkSttlmDt>2020-01-11</IntrBkSttlmDt><InstdAmt Ccy="USD">300000</InstdAmt><ChrgBr>DEBT</ChrgBr><InstgAgt><FinInstnId><BICFI>IRVTGB2XGTM</BICFI></FinInstnId></InstgAgt><InstdAgt><FinInstnId><BICFI>IRVTUS3NAMS</BICFI></FinInstnId></InstdAgt><IntrmyAgt1><FinInstnId><BICFI>FTSBUS33XXX</BICFI></FinInstnId></IntrmyAgt1><Dbtr><Nm>ACME INC.</Nm><PstlAdr><StrtNm>ROAD PKWY</StrtNm><PstCd>32034</PstCd><TwnNm>TOWN</TwnNm><TwnLctnNm>TOWN3</TwnLctnNm><Ctry>US</Ctry></PstlAdr></Dbtr><DbtrAgt><FinInstnId><BICFI>CHASGB2LXXX</BICFI></FinInstnId></DbtrAgt><CdtrAgt><FinInstnId><BICFI>ABNANL2AXXX</BICFI></FinInstnId></CdtrAgt><Cdtr><Nm>DELTA LLOYD</Nm><PstlAdr><StrtNm>OMVAL 300</StrtNm><PstCd>00000</PstCd><TwnNm>TOWN2</TwnNm><Ctry>NL</Ctry></PstlAdr></Cdtr><CdtrAcct><Id><Othr><Id>NL00ABNA0123456789</Id></Othr></Id></CdtrAcct><RmtInf><Ustrd>INVOICE A000,0000/04,991/05</Ustrd></RmtInf></CdtTrfTxInf></FIToFICstmrCdtTrf></Document></Envelope>',
};

export const JSON_4 = {
  metadata: {
    success: true,
    requestId: "dbbae877-2895-4f7b-b720-66d0efeeca34",
    count: 1,
  },
  result: {
    xrefId: "1e2c5156-7ffd-4cbc-931f-2a7b57d91e70",
    clientReferenceId: "96f9213e-b8e1-41ac-a8a4-71cc4d21bd57",
    timeReceived: "2022-08-11T18:35:59.711Z",
    clientDescription: "Payment for Services",
    status: "Received",
  },
};

export const JSON_5 = {
  metadata: {
    success: false,
    requestId: "08ce944f-8ac2-44fd-b8ea-5e59056b309c",
    count: 0,
  },
  error: {
    code: "1003",
    description:
      "Invalid digital signature: the request must be signed with client specific private key",
  },
};
