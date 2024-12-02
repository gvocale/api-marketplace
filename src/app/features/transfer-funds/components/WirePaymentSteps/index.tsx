import { CURL_EXAMPLE_1, JSON_1, JSON_2, JSON_3, JSON_4, JSON_5 } from "@/app/products/transfer-funds/data";
import styles from "./index.module.scss";
import { Code } from "../Code";
import Link from "next/link";

export function WirePaymentSteps() {
  return (
    <div>
      <section className={`${styles.narrow}`}>
        <h2 className={styles.h2}>
          Steps to Initiate a Wire Payment with Pacs.008
        </h2>
        <p className={styles.paragraph}>
          Before you begin, review the Prerequisites found on the top of this
          page.
        </p>
        <p className={styles.paragraph}>
          For full specifications for this API request, please visit the Funds
          Transfer Initiate Credit Transfer page. For full specifications on
          formatting the pacs.008 message, please visit the Swift BNY Standards
          page. Please note you must have credentials for the Swift website to
          view these. You can obtain Swift credentials by following the steps
          outlined here.
        </p>
        <p className={styles.paragraph}>
          The following depicts a high-level overview on how to structure a
          pacs.008 message.
        </p>

        <ol>
          <li>
            <h4>Endpoint</h4>
            <p className={styles.paragraph}>
              First, use this endpoint and set your headers to submit a Funds
              Transfer in the pacs.008 format.
            </p>
            <Code code={CURL_EXAMPLE_1} language="bash" />
          </li>
          <li>
            <h4>Format The Request Body</h4>
            <p className={styles.paragraph}>
              This API request body contains two required elements: metadata and
              request.
            </p>
            <p className={styles.paragraph}>
              The metadata represents the identifier and security controls for
              the request. Fields marked with an asterisk (*) are mandatory.
            </p>
            <table>
              <tbody>
                <tr>
                  <td>requestId</td>
                  <td>Unique identifer for the request</td>
                </tr>
                <tr>
                  <td>idempotencyKey</td>
                  <td>For avoidance of duplicate payment submittal</td>
                </tr>
                <tr>
                  <td>signatureAlgorithm*</td>
                  <td>Digital signature algorithm</td>
                </tr>
                <tr>
                  <td>signature*</td>
                  <td>Digital signature to sign the payload</td>
                </tr>
              </tbody>
            </table>
            <h5>Example</h5>
            <Code code={JSON_1.toString()} language="json" />
            <p className={styles.paragraph}>
              The request body represents the payment details. Fields marked
              with an asterisk (*) are mandatory.
            </p>
            <table>
              <tbody>
                <tr>
                  <td>paymentProduct*</td>
                  <td>Payment product used to initiate the payment.</td>
                </tr>
                <tr>
                  <td>paymentMessage*</td>
                  <td>Type of payment being initiated.</td>
                </tr>
                <tr>
                  <td>messageFormat*</td>
                  <td>Format of the message being sent.</td>
                </tr>
                <tr>
                  <td>clientReferenceID</td>
                  <td>
                    Client-assigned reference ID to links payment to your
                    system.
                  </td>
                </tr>
                <tr>
                  <td>clientDescription</td>
                  <td>Memo field for your reference.</td>
                </tr>
                <tr>
                  <td>message*</td>
                  <td>
                    The pacs.008 formatted payment instruction, converted into a
                    JSON string.
                  </td>
                </tr>
              </tbody>
            </table>
            <h5>Example</h5>
            <Code code={JSON_2.toString()} language="json" />
          </li>
          <li>
            <h4>Format The Message Field</h4>
            <ol>
              <li>
                <h5>Overview</h5>
                <p className={styles.paragraph}>
                  The pacs.008 message is a highly structured XML file that
                  includes detailed information about the payment, including at
                  a high level the following:
                </p>
                <ul>
                  <li>
                    Debtor Information: Details about the entity initiating the
                    payment.
                  </li>
                  <li>
                    Creditor Information: Details about the entity receiving the
                    payment.
                  </li>
                  <li>Transaction Amount: The amount being transferred.</li>
                  <li>Currency: The currency in which the payment is made.</li>
                  <li>
                    Payment Identification: Unique identifiers for the payment
                    to ensure traceability.
                  </li>
                  <li>
                    Remittance Information: Additional details that help the
                    recipient understand the purpose of the payment.
                  </li>
                </ul>
                <h5>Message Breakdown</h5>
                <p className={styles.paragraph}>
                  The pacs.008 message is composed of several main components
                  with various sub-elements within them:
                </p>
                <ol>
                  <li>Application Header (AppHdr)</li>
                  <li>Group Header (GrpHdr)</li>
                  <li>Credit Transfer Transaction Information (CdtTrfTxInf)</li>
                </ol>
                <p className={styles.paragraph}>Pacs.008 Example:</p>
                <Code code={JSON_3.toString()} language="json" />
                <p className={styles.paragraph}>
                  The below is a breakdown of this sample pacs.008 message:
                </p>
                <ul>
                  <li>
                    Originator of the transaction: IRVTGB2XGTM (BNY GB branch).
                  </li>
                  <li>
                    Sending To: IRVTUS3NAMS (Custody Branch 31, which is where
                    the debit account/settlement account sits).
                  </li>
                  <li>Debtor: Acme Inc. sending USD 300,000.</li>
                  <li>
                    To Creditor: Delta Lloyd with a Settlement Date of
                    2020-01-11
                  </li>
                  <li>
                    Debtor’s bank (agent): BIC is CHASGB2LXXX (Chase Bank)
                  </li>
                  <li>
                    Creditor’s bank (agent): BIC is ABNANL2AXXX (ABN Amro NL)
                  </li>
                  <li>
                    Intermediary bank (Agent): BIC is FTSBUS33XXX (ABN Amro US)
                    (Note: this is where Chase Bank is instructing us to send
                    the wire)
                  </li>
                </ul>
              </li>
              <li>
                <h5>Application Header</h5>
                <p className={styles.paragraph}>
                  The Application Header is important for routing and
                  identifying the message within the Swift or other financial
                  messaging systems. In ISO20022, the Application Header is used
                  by the receiving organization to figure out where to route the
                  message in the same way. In the case of our API, the “network”
                  to which you drop your message is BNY’s own, so you are
                  essentially telling us to accept this message from ourselves
                  to deliver to ourselves.
                </p>
                <p className={styles.paragraph}>
                  This header typically contains the following fields:
                </p>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <strong>General Name</strong>
                      </th>
                      <th>
                        <strong>Pacs.008 Tag Name</strong>
                      </th>
                      <th>
                        <strong>Examples</strong>
                      </th>
                      <th>
                        <strong>More Information</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>From</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>Fr.FinInstnId.BICFI</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>Example Value:</p>
                        <p className={styles.paragraph}>IRVTUS3NXXX</p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>Example Full:</p>
                        <p className={styles.paragraph}>
                          &lt;Fr&gt;&lt;FIId&gt;&lt;FinInstnId&gt;&lt;BICFI&gt;
                          IRVTUS3NXXX
                          &lt;/BICFI&gt;&lt;/FinInstnId&gt;&lt;/FIId&gt;&lt;/Fr&gt;
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          The Business Identifier Code (BIC)* of the sending
                          financial institution (where the instructions are
                          coming from). The BICFI is an 8 or 11-character code
                          that uniquely identifies financial institutions
                          globally. This field identifies the sending
                          institution in the transaction and is critical for
                          routing and identifying the origin of the message
                          within the Swift network.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          If you do not have a BIC, IRVTUS3NXXX (or another BNY
                          BIC) can be used in both the From and To fields of
                          this message.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          *Code allocated to a financial institution by the ISO
                          9362 Registration Authority as described in ISO 9362
                          &quot;Banking - Banking telecommunication messages -
                          Business identifier code (BIC)&quot;.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>To</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>To.FinInstnId.BICFI</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>Example Value:</p>
                        <p className={styles.paragraph}>IRVTUS3NAMS</p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>Example Full:</p>
                        <p className={styles.paragraph}>
                          &lt;To&gt;&lt;FIId&gt;&lt;FinInstnId&gt;&lt;BICFI&gt;
                          IRVTUS3NAMS
                          &lt;/BICFI&gt;&lt;/FinInstnId&gt;&lt;/FIId&gt;&lt;/To&gt;
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          The BIC of the receiving financial institution.
                          Ensures the message reaches the correct recipient
                          institution.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>
                          Business Message Identifier
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>BizMsgIdr</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>MSG123456789</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          A unique identifier for the message, typically a
                          combination of letters and numbers. Unambiguously
                          identifies the Business Message to the
                          MessagingEndpoint that has created the Business
                          Message.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          Min/Max Value/Length: 1 - 35 characters
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>
                          Message Definition Identifier
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>MsgDefIdr</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>pacs.008.001.08</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Contains the MessageIdentifier that defines the
                          BusinessMessage. It must contain a MessageIdentifier
                          published on the ISO 20022 website.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          For pacs.008, this will be &quot;pacs.008.001.08&quot;
                          or a similar identifier depending on the message
                          version.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Business Service</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>BizSvc</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>swift.cbprplus.02</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Specifies the business service agreed between the two
                          MessagingEndpoints under which rules this Business
                          Message is exchanged. To be used when there is a
                          choice of processing services or processing service
                          levels.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          For pacs.008, this would typically be something like
                          &quot;swiftpayment&quot; or similar.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Creation Date</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>CreDt</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          2020-01-11T12:43:41.960+00:00
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Date when this Business Message (header) was created.
                          Note Times must be normalized, using the &quot;Z&quot;
                          annotation using the ISO 8601 UTC annotation.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <h5>Group Header</h5>
                <p className={styles.paragraph}>
                  This section contains general information about the message.
                  It typically contains the following fields:
                </p>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <strong>General Description</strong>
                      </th>
                      <th>
                        <strong>Pacs.008 Tag Name</strong>
                      </th>
                      <th>
                        <strong>Example</strong>
                      </th>
                      <th>
                        <strong>More Information</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>
                          Message Identification
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>MsgId</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>SS04044000000008</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Point to point reference, as assigned by the
                          instructing party, and sent to the next party in the
                          chain to unambiguously identify the message.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          Min/Max Value/Length: 1 - 35 characters.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          Usage: The instructing party has to make sure that
                          MessageIdentification is unique per instructed party
                          for a pre-agreed period.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Creation Date Time</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>CreDtTm</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          2020-01-11T12:43:41.960+00:00
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Date and time at which the message was created. This
                          can be the same as the CreDt in the Application
                          Header.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>
                          Number Of Transactions
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>NbOfTxs</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>1</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Number of individual transactions contained in the
                          message. This remains consistent as long as you only
                          submit one transfer per message.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          Max Value/Length: 15 characters
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Settlement Method</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>SttlmInf.SttlmMtd</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>INDA</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Method used to settle the (batch of) payment
                          instructions.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          Possible Enumeration: CLRG, INDA, INGA, COVE
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>SettlementAccount</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          SttlmInf.SttlmAcct.Id.Othr.Id
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>9794728400</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          A specific purpose account used to post debit and
                          credit entries as a result of the transaction. This is
                          the actual account to be debited.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <h5>Credit Transfer Transaction Information</h5>
                <p className={styles.paragraph}>
                  This section contains details about the actual credit transfer
                  instructions. It typically contains the following fields:
                </p>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <strong>General Description</strong>
                      </th>
                      <th>
                        <strong>Pacs.008 Tag Name</strong>
                      </th>
                      <th>
                        <strong>Example Value</strong>
                      </th>
                      <th>
                        <strong>More Information</strong>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>
                          Instruction Identification
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>PmtId.InstrId</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>SS04044506272708</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Unique identification, as assigned by an instructing
                          party for an instructed party, to unambiguously
                          identify the instruction. This is an ID assigned by
                          the client and needs to be the same as the EndToEndID
                          (35 char).
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          Usage: The instruction identification is a
                          point-to-point reference that can be used between the
                          instructing party and the instructed party to refer to
                          the individual instruction. It can be included in
                          several messages related to the instruction.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>
                          End To End Identification
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>PmtId.EndToEndId</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>KK04044506200000</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Unique identification, as assigned by the initiating
                          party, to unambiguously identify the transaction. This
                          identification is passed on, unchanged, throughout the
                          entire end-to-end chain. This is an ID assigned by the
                          client and needs to be the same as the PmtId (35
                          char).
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          Usage: Usage: In case there are technical limitations
                          to pass on multiple references, the end-to-end
                          identification must be passed on throughout the entire
                          end-to-end chain.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>UETR</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>PmtId.UETR</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          12345678-0000-4000-B000-123456781234
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Universally unique identifier to provide an end-to-end
                          reference of a payment transaction. (UUID v4 format).
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>
                          Interbank Settlement Amount
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>IntrBkSttlmAmt</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>300000</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          The amount of money to be settled between the
                          financial institutions involved in the transaction.
                          Should be populated with the same amount in InstdAmt.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>
                          Interbank Settlement Date
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>IntrBkSttlmDt</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>1/11/2020</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          The date on which the settlement amount is to be
                          settled between the financial institutions involved.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Instructed Amount</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>InstdAmt</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>300000</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Amount of money to be moved between the debtor and
                          creditor, before deduction of charges, expressed in
                          the currency as ordered by the initiating party.
                          Usage: This amount has to be transported unchanged
                          through the transaction chain.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>ChargeBearer</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>ChrgBr</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>DEBT</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Specifies which party/parties will bear the charges
                          associated with the processing of the payment
                          transaction.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          Enumeration: DEBT, SHAR, or CRED.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <ul>
                          <li>DEBT : charges borne be debtor.</li>
                          <li>
                            SHAR : charges are shared between the debtor and
                            creditor.
                          </li>
                          <li>CRED : all charges borne by the creditor.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Instructed Agent</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          InstdAgt.FinInstnId.BICFI
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>IRVTGB2XGTM</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Agent that is instructed by the previous party in the
                          chain to carry out the (set of) instruction(s).
                          Clients BIC, BIC must match the BIC in the header.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Instructing Agent</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          InstgAgt.FinInstnId.BICFI
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>IRVTUS3NAMS</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Agent that instructs the next party in the chain to
                          carry out the (set of) instruction(s).
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          IRVTUS3NAMS or IRVTUS3NXXX, BIC must match the BIC in
                          the header.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Intermediary Agent 1</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          IntrmyAgt1.FinInstnId.BICFI
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>FTSBUS33XXX</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Agent between the debtor&apos;s agent and the
                          creditor&apos;s agent.
                        </p>
                        <p className={styles.paragraph}>
                          <br />
                        </p>
                        <p className={styles.paragraph}>
                          Usage: If more than one intermediary agent is present,
                          then IntermediaryAgent1 identifies the agent between
                          the DebtorAgent and the IntermediaryAgent2.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Debtor Name</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>Dbtr.Nm</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>ACME INC.</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          This is the original requestor of the funds.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Debtor Agent</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          DbtrAgt.FinInstnId.BICFI
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>CHASGB2LXXX</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Financial institution servicing an account for the
                          debtor.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Creditor Name</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>Cdtr.Nm</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>DELTA LLOYD</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          This is the final Beneficiary of the funds&apos; name
                          &amp; addressCdtr.PstlAdr.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Creditor Address</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          PstlAdr.StrtNm.PstCd.TwnNm.Ctry
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          OMVAL 30000000 TOWN2 NL
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Postal address of the creditor.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Creditor Agent</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          CdtrAgt.FinInstnId.BICFI
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>ABNANL2AXXX</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Financial institution servicing an account for the
                          creditor.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>Creditor Account</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>CdtrAcct.Id.Othr.Id</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>NL00ABNA0123456789</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Unambiguous identification of the account of the
                          creditor to which a credit entry will be posted as a
                          result of the payment transaction. This is the final
                          Beneficiary&apos;s Account.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.paragraph}>
                          Remittance Information
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>RmtInf.Ustrd</p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          INVOICE A000,0000/04,991/05
                        </p>
                      </td>
                      <td>
                        <p className={styles.paragraph}>
                          Information supplied to enable the matching of an
                          entry with the items that the transfer is intended to
                          settle, such as commercial invoices in an
                          account&apos;s receivable system.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ol>
          </li>
          <li>
            <h4 id="receive-an-api-response">Receive An API Response</h4>
            <p className={styles.paragraph}>
              The Response Body contains two elements: metadata and result.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>success</th>
                  <td>Indicates whether the API call was successful</td>
                </tr>
                <tr>
                  <th>requestId</th>
                  <td>Request identifier that was sent in the API request</td>
                </tr>
                <tr>
                  <th>count</th>
                  <td>Number of records returned in the response</td>
                </tr>
                <tr>
                  <th>xrefID</th>
                  <td>
                    Unique system-generated reference ID for the payment
                    initiation request
                  </td>
                </tr>
                <tr>
                  <th>clientReferenceId</th>
                  <td>
                    Internal reference ID of the client that links the payment
                    to their system
                  </td>
                </tr>
                <tr>
                  <th>timeReceived</th>
                  <td>
                    Date and time the payment request was received by the system
                  </td>
                </tr>
                <tr>
                  <th>clientDescription</th>
                  <td>Memo field for client reference</td>
                </tr>
                <tr>
                  <th>status</th>
                  <td>
                    Payment status; &quot;Received&quot; is the only valid
                    response for a successful request. Otherwise, an error will
                    be returned.
                  </td>
                </tr>
              </tbody>
            </table>
            <Code code={JSON_4.toString()} language="json" />
            <p className={styles.paragraph}>
              If you receive an error, the &apos;success&apos; field in the
              response will be returned as false. An example of a
              <Link href="https://marketplace.bnymellon.com/treasury/api-library/general-errors">
                General API Error
              </Link>
              is found below.
            </p>
            <Code code={JSON_5.toString()} language="json" />
            <p className={styles.paragraph}>
              You may also receive an
              <Link href="https://marketplace.bnymellon.com/treasury/api-central/#/pacs008:~:text=You%20may%20also%20receive%20an%20API%20Gateway%20error%20which%20are%20caused%20by%20authorization%20problems%20with%20the%20request%20at%20the%20BNY%20API%20Gateway.">
                API Gateway error
              </Link>
              which are caused by authorization problems with the request at the
              BNY API Gateway.
            </p>
          </li>
          <li>
            <h4>Track Your Payment</h4>
            <p className={styles.paragraph}>
              Next up,{" "}
              <Link href="https://marketplace.bnymellon.com/treasury/api-central/#/tracking">
                track your payment
              </Link>{" "}
              and{" "}
              <Link href="https://marketplace.bnymellon.com/treasury/api-central/#/pacs008:~:text=Next%20up%2C%20track%20your%20payment%20and%20set%20up%20your%20funds%20transfer%20notifications.">
                set up your funds transfer notifications
              </Link>
              .
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}
