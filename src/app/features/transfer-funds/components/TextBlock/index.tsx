import { Anchors } from "@/app/features/types";
import { Code } from "../Code";
import { Container } from "../Container";
import { Eyebrow } from "../Eyebrow";
import { InlineCode } from "../InlineCode";
import { Paragraph } from "../Paragraph";
import styles from "./index.module.scss";

export function TextBlock() {
  const CODE = `{ 4:
      20:   UF9CKT53FROE8KTA23B:CRED
      32A:  230922USD12,
      33B:  USD12000,
      50K:  /78787878
            JOHN DEBTOR
            DEBTORTOWN
      52A:  CIBCCATTXXX
      53B:  /1111112222
      57A:  IRVTUS3NXXX
      59:   /90909090
            JANE CREDITOR
            CREDITORVILLE
      70:   BAX REFERENCE: BAX000009366
      71A:  OUR -
  }`;

  return (
    <Container variant="narrow">
      <Eyebrow className={styles.eyebrow}>Fourth Block</Eyebrow>
      <h4 className={styles.h4} id={Anchors.TEXT_BLOCK}>
        Text Block
      </h4>
      <Code code={CODE} language="bash" className={styles.code} />
      <Paragraph>
        See the table below for more details on these fields.
      </Paragraph>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Mandatory / Optional</th>
            <th>Message Field/Tag</th>
            <th>Field Name</th>
            <th>Format and Description</th>
            <th>BNY Specific Recommendations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <strong>Mandatory / Optional</strong>&nbsp;
              </p>
            </td>
            <td>
              <p>
                <strong>Message Field/Tag</strong>&nbsp;
              </p>
            </td>
            <td>
              <p>
                <strong>Field Name</strong>&nbsp;
              </p>
            </td>
            <td>
              <p>
                <strong>Format and Description</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>BNY Specific Recommendations</strong>&nbsp;
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Mandatory&nbsp;</p>
            </td>
            <td>
              <p>20&nbsp;</p>
            </td>
            <td>
              <p>Sender&apos;s Reference&nbsp;</p>
            </td>
            <td>
              <p>
                This is a reference number assigned by the sender to
                unambiguously identify the message to the receiver.&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>:20:Ref254</strong>&nbsp;
              </p>
            </td>
            <td>
              <p>
                As this reference is point-to-point, BNY always substitutes our
                reference number in Field 20 of any outgoing advice.&nbsp;&nbsp;
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Mandatory&nbsp;</p>
            </td>
            <td>
              <p>23B&nbsp;</p>
            </td>
            <td>
              <p>Bank Operation Code&nbsp;</p>
            </td>
            <td>
              <p>
                This field identifies the type of service level to be
                applied.&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>:23B:CRED</strong>&nbsp;
              </p>
            </td>
            <td>
              <p>CRED is the only code currently supported.&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Mandatory&nbsp;</p>
            </td>
            <td>
              <p>32A&nbsp;</p>
            </td>
            <td>
              <p>Value date, currency code, amount&nbsp;</p>
            </td>
            <td>
              <p>
                This field specifies the value date, the currency, and the
                settlement amount of the payment.&nbsp;&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>:32A:210117USD10000&nbsp;</strong>&nbsp;
              </p>
            </td>
            <td>
              <p>
                BNY will accept a value date up to 30 days in the future.&nbsp;
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Mandatory&nbsp;</p>
            </td>
            <td>
              <p>50A/F/K&nbsp;</p>
            </td>
            <td>
              <p>Ordering customer&nbsp;</p>
            </td>
            <td>
              <p>
                This field specifies the customer ordering the transaction
                (e.g.: the organization or person who is requesting the payment
                initiation).&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>:50A: Account / BIC of ordering customer&nbsp;&nbsp;</p>
              <p>
                :50F: Party Identifier name, address, and country
                (formatted)&nbsp;
              </p>
              <p>:50K: Name and address of ordering customer.&nbsp;&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  :
                  <a
                    href="http://50F/123456789"
                    data-uw-rm-brl="FX"
                    data-uw-original-href="http://50f/123456789"
                    aria-label="50f:/123456789 - target website may not be available - target website may not be available - target website may not be available"
                    data-uw-rm-ext-link=""
                  >
                    50F:/123456789
                  </a>
                  0
                </strong>
                &nbsp;
              </p>
              <p>
                <strong>1/NAME OF ORIGINATOR</strong>&nbsp;
              </p>
              <p>
                <strong>2/STREET OF ORG</strong>&nbsp;
              </p>
              <p>
                <strong>3/US/NEW YORK</strong>&nbsp;
              </p>
            </td>
            <td>
              <p>All format options are supported.&nbsp;&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                BNY requires meaningful name and address information to be
                provided in line with regulatory requirements and global market
                practice. Street, town, and country are expected minimum address
                details.&nbsp;&nbsp;
              </p>
              <p>
                <br />
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Optional&nbsp;</p>
            </td>
            <td>
              <p>52A/D&nbsp;</p>
            </td>
            <td>
              <p>Ordering Institution&nbsp;</p>
            </td>
            <td>
              <p>
                This optional field identifies the ordering financial
                institution when different than the Sender of the
                message.&nbsp;&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>:52A:IRVTGB2X&nbsp;</strong>&nbsp;
              </p>
              <p>BIC code of ordering institution&nbsp;&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  :52D: Bank of New York Mellon, London Branch&nbsp;
                </strong>
                &nbsp;
              </p>
              <p>Name of ordering institution&nbsp;&nbsp;&nbsp;</p>
            </td>
            <td>
              <p>
                This field is to be used when the account servicing institution
                of the originator is different than the sender. Option A is
                preferred.&nbsp;&nbsp;
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Mandatory&nbsp;</p>
            </td>
            <td>
              <p>53B&nbsp;</p>
            </td>
            <td>
              <p>Sender&apos;s Correspondent&nbsp;</p>
            </td>
            <td>
              <p>
                This MANDATORY field identifies the account or branch of the
                Sender or another financial institution through which the Sender
                will reimburse the Receiver. &nbsp;&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  :
                  <a
                    href="http://53B/1234567890"
                    data-uw-rm-brl="FX"
                    data-uw-original-href="http://53b/1234567890"
                    aria-label="53b:/1234567890 - target website may not be available - target website may not be available - target website may not be available"
                    data-uw-rm-ext-link=""
                  >
                    53B:/1234567890
                  </a>
                </strong>
                &nbsp;
              </p>
              <p>BNY account number of Sender&nbsp;</p>
            </td>
            <td>
              <p>
                This field is required to indicate which account should be
                debited. It is mandatory for the API.&nbsp;
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Optional&nbsp;</p>
            </td>
            <td>
              <p>56A/D&nbsp;</p>
            </td>
            <td>
              <p>Intermediary Institution&nbsp;&nbsp;</p>
            </td>
            <td>
              <p>
                This field specifies the financial institution used to pass the
                transaction to the Account With institution (beneficiary
                bank).&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                {`//FW021000018`} is USD clearing ABA used in the examples but
                any national clearing code can be used&nbsp;
              </p>
              <p>&nbsp;&nbsp;</p>
              <p>
                <strong>:56A:BKCHCNBJ</strong>&nbsp;
              </p>
              <p>BIC of beneficiary bank&apos;s agent&nbsp;</p>
              <p>(Option A - 1)&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  :
                  <a
                    href="http://56A/1234567890"
                    data-uw-rm-brl="FX"
                    data-uw-original-href="http://56a/1234567890"
                    aria-label="56a:/1234567890 - target website may not be available - target website may not be available - target website may not be available"
                    data-uw-rm-ext-link=""
                  >
                    56A:/1234567890
                  </a>
                </strong>
                &nbsp;
              </p>
              <p>
                <strong>BKCHCNBJ</strong>&nbsp;
              </p>
              <p>Account and BIC of beneficiary bank&apos;s agent&nbsp;</p>
              <p>(Option A - 2)&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>:56A://FW021000018</strong>&nbsp;
              </p>
              <p>
                <strong>BKCHCNBJ</strong>&nbsp;
              </p>
              <p>
                National Clearing Code and BIC of beneficiary bank&apos;s
                agent&nbsp;
              </p>
              <p>(Option A - 3)&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  :
                  <a
                    href="http://56D/1234567890"
                    data-uw-rm-brl="FX"
                    data-uw-original-href="http://56d/1234567890"
                    aria-label="56d:/1234567890 - target website may not be available - target website may not be available - target website may not be available"
                    data-uw-rm-ext-link=""
                  >
                    56D:/1234567890
                  </a>
                </strong>
                &nbsp;
              </p>
              <p>
                <strong>Name and address</strong>&nbsp;
              </p>
              <p>Account, Name and Address&nbsp;</p>
              <p>(Option D - 1)&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>:56D://FW021000018</strong>&nbsp;
              </p>
              <p>
                <strong>Name and address</strong>&nbsp;
              </p>
              <p>National Clearing Code, Name and Address&nbsp;</p>
              <p>(Option D - 2)&nbsp;</p>
            </td>
            <td>
              <p>
                Option A is the preferred option and should be used with party
                identifier and BIC.&nbsp;
              </p>
              <p>
                Option D can be used with a
                party&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; identifier, name, and
                address.&nbsp;
              </p>
              <p>
                If the beneficiary bank&apos;s account is held with an
                intermediary bank other than BNY, providing the BIC of the
                intermediary bank is recommended to ensure STP.&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                If Field 56 is not present, BNY will identify the intermediary
                bank on client&apos;s behalf.&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>&nbsp;&nbsp;&nbsp;</p>
              <p>
                <br />
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Optional&nbsp;</p>
            </td>
            <td>
              <p>57A/B/C/D&nbsp;</p>
            </td>
            <td>
              <p>Account with Institution&nbsp;</p>
            </td>
            <td>
              <p>
                This field identifies the financial institution of the ultimate
                beneficiary customer. This field applies even if Field 59
                contains an IBAN.&nbsp;
              </p>
              <p>
                When Field 57 is not present, it means that the Receiver is also
                the Account With institution. It is mandatory for any payment
                where Field 56 is used.&nbsp;
              </p>
              <p>
                {`//FW021000018`} is USD clearing ABA used in the examples but
                any national clearing code can be used&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>:57A:BANKUSFX&nbsp;</strong>&nbsp;
              </p>
              <p>BIC of beneficiary bank&nbsp;</p>
              <p>(Option A - 1)&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  :
                  <a
                    href="http://57A/1234567890"
                    data-uw-rm-brl="FX"
                    data-uw-original-href="http://57a/1234567890"
                    aria-label="57a:/1234567890 - target website may not be available - target website may not be available - target website may not be available"
                    data-uw-rm-ext-link=""
                  >
                    57A:/1234567890
                  </a>
                </strong>
                &nbsp;
              </p>
              <p>
                <strong>BANKUSFX&nbsp;</strong>&nbsp;
              </p>
              <p>Account and BIC of beneficiary bank&nbsp;</p>
              <p>(Option A - 2)&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>:57A://FW0123456789</strong>&nbsp;
              </p>
              <p>
                <strong>BANKUSFX&nbsp;</strong>&nbsp;
              </p>
              <p>National Clearing Code and BIC of beneficiary bank&nbsp;</p>
              <p>(Option A - 3)&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>:57B://FW0123456789&nbsp;</strong>&nbsp;
              </p>
              <p>
                <strong>New York Branch</strong>&nbsp;
              </p>
              <p>National Clearing Code and location&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>:57C://FW021000018</strong>&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  :
                  <a
                    href="http://57D/9876543210"
                    data-uw-rm-brl="FX"
                    data-uw-original-href="http://57d/9876543210"
                    aria-label="57d:/9876543210 - target website may not be available - target website may not be available - target website may not be available"
                    data-uw-rm-ext-link=""
                  >
                    57D:/9876543210
                  </a>
                </strong>
                &nbsp;
              </p>
              <p>
                <strong>Name and address</strong>&nbsp;
              </p>
              <p>Account, Name and Address&nbsp;</p>
              <p>(Option D - 1)&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>:57D://FW0123456789</strong>&nbsp;
              </p>
              <p>
                <strong>Name and address</strong>&nbsp;
              </p>
              <p>National Clearing Code, Name and Address&nbsp;</p>
              <p>(Option D - 2)&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <br />
              </p>
            </td>
            <td>
              <p>
                Option A is the preferred option and should be used with party
                identifier and BIC&nbsp;
              </p>
              <p>
                Option B should be used with party identifier and location&nbsp;
              </p>
              <p>Option C can be used with any unique identifier&nbsp;</p>
              <p>
                Option D can be used with a party identifier, name, and
                address&nbsp;
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Mandatory&nbsp;</p>
            </td>
            <td>
              <p>59A/F or 59&nbsp;</p>
            </td>
            <td>
              <p>Beneficiary Customer&nbsp;&nbsp;</p>
            </td>
            <td>
              <p>This field specifies the customer who will be paid.&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>:59A:</strong> Account number of final beneficiary (or
                BIC)&nbsp;
              </p>
              <p>
                <strong>:59F:</strong> Preferred option, as it provides
                structure to the customer information.&nbsp;
              </p>
              <p>
                <strong>:59:</strong> Name and address of final
                beneficiary.&nbsp;&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  :
                  <a
                    href="http://59F/123456789"
                    data-uw-rm-brl="FX"
                    data-uw-original-href="http://59f/123456789"
                    aria-label="59f:/123456789 - target website may not be available - target website may not be available - target website may not be available"
                    data-uw-rm-ext-link=""
                  >
                    59F:/123456789
                  </a>
                  0
                </strong>
                &nbsp;
              </p>
              <p>
                <strong>1/NAME OF BENEFICIARY</strong>&nbsp;
              </p>
              <p>
                <strong>2/STREET ADDRESS OF BNF</strong>&nbsp;
              </p>
              <p>
                <strong>3/US/NEW YORK</strong>&nbsp;
              </p>
            </td>
            <td>
              <p>
                For regulatory reasons the account number and name of the
                ultimate beneficiary must be provided.&nbsp;&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                To achieve the highest STP rate, BNY recommends that clients
                provide the full beneficiary address.&nbsp;&nbsp;
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Optional&nbsp;</p>
            </td>
            <td>
              <p>70&nbsp;</p>
            </td>
            <td>
              <p>Remittance Information&nbsp;</p>
            </td>
            <td>
              <p>
                This field provides the details of the transaction or reference
                to another message containing such details, to be shared with
                the beneficiary.&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  :
                  <a
                    href="http://70/RFB/BET072"
                    data-uw-rm-brl="PR"
                    data-uw-original-href="http://0.0.0.70/RFB/BET072"
                  >
                    70:/RFB/BET072
                  </a>
                </strong>
                &nbsp;
              </p>
            </td>
            <td>
              <p>
                <br />
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Mandatory&nbsp;</p>
            </td>
            <td>
              <p>71A&nbsp;</p>
            </td>
            <td>
              <p>Details of charges&nbsp;</p>
            </td>
            <td>
              <p>
                This field details who will incur the fees associated with this
                payment.&nbsp;
              </p>
              <p>
                BEN – charges are borne by the beneficiary, through a deduction
                of principal.&nbsp;&nbsp;
              </p>
              <p>
                SHA – originating bank charges are borne by originator and
                beneficiary bank charges are borne by beneficiary.&nbsp;
              </p>
              <p>OUR – all charges are borne by originator&nbsp;&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>:71A:BEN&nbsp;</strong>&nbsp;
              </p>
            </td>
            <td>
              <p>
                BNY offers a wide range of pricing services and options which
                can be further provided by your dedicated Relationship
                Officer.&nbsp;&nbsp;
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Optional&nbsp;</p>
            </td>
            <td>
              <p>72&nbsp;</p>
            </td>
            <td>
              <p>Sender to Receiver Information&nbsp;</p>
            </td>
            <td>
              <p>
                This optional field provides additional information for the
                Receiver or other party specified.&nbsp;&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                For specific services, we accept the following code words in
                this field:&nbsp;&nbsp;
              </p>
              <p>/INS/ / &lt;followed by a literal&gt;</p>
              <p>/DEDUCT/&nbsp;&nbsp;</p>
              <p>/FULLPAY/&nbsp;</p>
              <p>/RATE/ à for FX related payments&nbsp;&nbsp;&nbsp;</p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  :
                  <a
                    href="http://72/FULLPAY/"
                    data-uw-rm-brl="PR"
                    data-uw-original-href="http://0.0.0.72/FULLPAY/"
                  >
                    72:/FULLPAY/
                  </a>
                  &nbsp;
                </strong>
                &nbsp;
              </p>
            </td>
            <td>
              <p>
                Bilaterally agreed codewords must be placed at the start of the
                first line. Additional bank to bank information included on
                subsequent lines preceded by the appropriate code
                word.&nbsp;&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                Note: The use of any other code words may result in payments
                processing as non-STP with BNY or any other downstream bank,
                resulting in potential payment delays and additional
                fees.&nbsp;&nbsp;
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <Paragraph>
        The Basic Header Block includes the Receiver (Instructed Agent) BIC. All
        Funds Transfer payment initiation instructions require a Receiver BIC.e
        Use the LTA format (12 characters, i.e., IRVTUS3NAXXX). The API does not
        make use of the session and sequence numbers, but they are needed to
        maintain the formatting rules.
      </Paragraph>
      <Paragraph>
        If you are a Financial Institution, you should use your desired Receiver
        BIC (BNY Branch, such as IRVTUS3N or IRVTBEBB), based on how you want
        the payment to be routed for processing. Use IRVTUS3N (IRVTUS3NAXXX) as
        a default Receiver BIC if you do not know the BIC of the BNY Branch
        associated with your debit account. The debit account (Tag{" "}
        <InlineCode>53B</InlineCode>) is mandatory for API transactions.
      </Paragraph>
    </Container>
  );
}
