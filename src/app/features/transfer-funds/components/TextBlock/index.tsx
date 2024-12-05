import { Anchors } from "@/app/features/types";
import { Code } from "../Code";
import { Eyebrow } from "../Eyebrow";
import { Heading } from "../Heading";
import { InlineCode } from "../InlineCode";
import { Notice } from "../Notice";
import { Paragraph } from "../Paragraph";
import { Table } from "../Table";
import { Tag } from "../Tag";
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
    <div>
      <Eyebrow className={styles.eyebrow}>Fourth Block</Eyebrow>
      <h4 className={styles.h4} id={Anchors.TEXT_BLOCK}>
        Text Block
      </h4>
      <Code code={CODE} language="bash" className={styles.code} />
      <Paragraph>
        See the table below for more details on these fields.
      </Paragraph>
      <Table className={styles.table}>
        <tbody>
          <tr>
            <td>
              <InlineCode>20</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Heading as="h4">Sender&apos;s Reference</Heading>
              <Paragraph>
                This is a reference number assigned by the sender to
                unambiguously identify the message to the receiver.
              </Paragraph>
              <InlineCode>:20:Ref254</InlineCode>
              <Notice className={styles.notice}>
                As this reference is point-to-point, BNY always substitutes our
                reference number in Field 20 of any outgoing advice.
              </Notice>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>23B</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Heading as="h4">Bank Operation Code</Heading>
              <Paragraph>
                This field identifies the type of service level to be applied.
              </Paragraph>
              <InlineCode>:23B:CRED</InlineCode>
              <Notice className={styles.notice}>
                CRED is the only code currently supported.
              </Notice>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>32A</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Heading as="h4">Value date, currency code, amount</Heading>
              <Paragraph>
                This field specifies the value date, the currency, and the
                settlement amount of the payment.
              </Paragraph>
              <InlineCode>:32A:210117USD10000</InlineCode>
              <Notice className={styles.notice}>
                BNY will accept a value date up to 30 days in the future.
              </Notice>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>50A/F/K</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Heading as="h4">Ordering customer</Heading>
              <Paragraph>
                This field specifies the customer ordering the transaction
                (e.g.: the organization or person who is requesting the payment
                initiation).
              </Paragraph>
              <InlineCode>:50A:UF9CKT53FROE8KTA23B</InlineCode>
              <Paragraph>
                <InlineCode>:50F:</InlineCode> Party Identifier name, address,
                and country (formatted)
              </Paragraph>
              <Paragraph>
                <InlineCode>:50K:</InlineCode> Name and address of ordering
                customer.
              </Paragraph>
              <Paragraph>
                <InlineCode>:50F:/1234567890</InlineCode>
                <InlineCode>1/NAME OF ORIGINATOR</InlineCode>
                <InlineCode>2/STREET OF ORG</InlineCode>
                <InlineCode>3/US/NEW YORK</InlineCode>
              </Paragraph>

              <Notice className={styles.notice}>
                <p>All format options are supported.</p>
                <p>
                  BNY requires meaningful name and address information to be
                  provided in line with regulatory requirements and global
                  market practice. Street, town, and country are expected
                  minimum address details.
                </p>
              </Notice>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>52A/D</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Optional</Tag>
              <Heading as="h4">Ordering Institution</Heading>
              <Paragraph>
                This optional field identifies the ordering financial
                institution when different than the Sender of the message.
              </Paragraph>

              <InlineCode>:52A:IRVTGB2X</InlineCode>
              <Paragraph>BIC code of ordering institution</Paragraph>
              <Paragraph>
                <InlineCode>:52D:</InlineCode> Name of ordering institution
              </Paragraph>
              <Paragraph>Name of ordering institution</Paragraph>

              <Notice className={styles.notice}>
                This field is to be used when the account servicing institution
                of the originator is different than the sender. Option A is
                preferred.
              </Notice>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>53B</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Heading as="h4">Sender&apos;s Correspondent</Heading>

              <Paragraph>
                This MANDATORY field identifies the account or branch of the
                Sender or another financial institution through which the Sender
                will reimburse the Receiver.
              </Paragraph>
              <InlineCode>:53B:1234567890</InlineCode>
              <InlineCode>:53B:/1234567890</InlineCode>
              <Paragraph>BNY account number of Sender</Paragraph>
              <Notice className={styles.notice}>
                This field is required to indicate which account should be
                debited. It is mandatory for the API.
              </Notice>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>56A/D</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Optional</Tag>
              <Heading as="h4">Intermediary Institution</Heading>
              <Paragraph>
                This field specifies the financial institution used to pass the
                transaction to the Account With institution (beneficiary bank).
              </Paragraph>
              <Paragraph>
                <InlineCode>{`//FW021000018`}</InlineCode> is USD clearing ABA
                used in the examples but any national clearing code can be used.
              </Paragraph>
              <Paragraph>
                <InlineCode>:56A:BKCHCNBJ</InlineCode>
                <br /> BIC of beneficiary bank&apos;s agent
                <br /> (Option A - 1)
              </Paragraph>

              <Paragraph>
                <InlineCode>:56A:/1234567890</InlineCode>
                <InlineCode>BKCHCNBJ</InlineCode>
                <br /> Account and BIC of beneficiary bank&apos;s agent
                <br /> (Option A - 2)
              </Paragraph>

              <Paragraph>
                <InlineCode>:56A://FW021000018</InlineCode>
                <br />
                <InlineCode>FW021000018</InlineCode>
                <br /> National Clearing Code and BIC of beneficiary bank&apos;s
                agent
                <br /> (Option A - 3)
              </Paragraph>

              <Paragraph>
                <InlineCode>:56D:/1234567890</InlineCode>
                <br /> Account, Name and Address
                <br /> (Option D - 1)
              </Paragraph>

              <Paragraph>
                <InlineCode>:56D://FW021000018</InlineCode>
                <br /> National Clearing Code, Name and Address
                <br /> (Option D - 2)
              </Paragraph>

              <Notice className={styles.notice}>
                <p>
                  Option A is the preferred option and should be used with party
                  identifier and BIC.
                </p>
                <p>
                  Option A is the preferred option and should be used with party
                  identifier and BIC.
                </p>
                <p>
                  Option D can be used with a party identifier, name, and
                  address.
                </p>
                <p>
                  If the beneficiary bank&apos;s account is held with an
                  intermediary bank other than BNY, providing the BIC of the
                  intermediary bank is recommended to ensure STP.
                </p>
                <p>
                  If Field 56 is not present, BNY will identify the intermediary
                  bank on client&apos;s behalf.
                </p>
              </Notice>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>57A/B/C/D</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Optional</Tag>
              <Heading as="h4">Account with Institution</Heading>

              <Paragraph>
                This field identifies the financial institution of the ultimate
                beneficiary customer. This field applies even if Field 59
                contains an IBAN.
              </Paragraph>
              <Paragraph>
                When Field 57 is not present, it means that the Receiver is also
                the Account With institution. It is mandatory for any payment
                where Field 56 is used.
              </Paragraph>
              <Paragraph>
                <InlineCode>//FW021000018</InlineCode> is USD clearing ABA used
                in the examples but any national clearing code can be used
              </Paragraph>
              <Paragraph>
                <InlineCode>:57A:BANKUSFX</InlineCode>
                <br /> BIC of beneficiary bank
                <br /> (Option A - 1)
              </Paragraph>

              <Paragraph>
                <InlineCode>:57A:/1234567890</InlineCode>
                <br />
                <InlineCode>BANKUSFX</InlineCode>
                <br /> Account and BIC of beneficiary bank
                <br /> (Option A - 2)
              </Paragraph>
              <Paragraph>
                <InlineCode>:57A://FW0123456789</InlineCode>
                <br />
                <InlineCode>BANKUSFX</InlineCode>
                <br /> National Clearing Code and BIC of beneficiary bank
                <br /> (Option A - 3)
              </Paragraph>

              <Paragraph>
                <InlineCode>:57A://FW0123456789</InlineCode>
                <br />
                <InlineCode>BANKUSFX</InlineCode>
                <br /> National Clearing Code and BIC of beneficiary bank
                <br /> (Option A - 3)
              </Paragraph>

              <Paragraph>
                <InlineCode>:57B://FW0123456789&nbsp;</InlineCode>
                <br /> New York Branch
              </Paragraph>

              <Paragraph>National Clearing Code and location</Paragraph>

              <Paragraph>
                <InlineCode>:57C://FW021000018</InlineCode>
                <br /> New York Branch
              </Paragraph>

              <Paragraph>
                <InlineCode>:57D:/9876543210</InlineCode>
                <br /> Name and address (Option D - 1)
              </Paragraph>

              <Paragraph>
                <InlineCode>:57D://FW0123456789</InlineCode>
                <br /> National Clearing Code, Name and Address (Option D - 2)
              </Paragraph>

              <Notice className={styles.notice}>
                <p>
                  Option A is the preferred option and should be used with party
                  identifier and BIC.
                </p>
                <p>
                  Option B should be used with party identifier and location
                </p>
                <p>Option C can be used with any unique identifier</p>
                <p>
                  Option D can be used with a party identifier, name, and
                  address
                </p>
              </Notice>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>59A/F or 59</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Heading as="h4">Beneficiary Customer</Heading>
              <Paragraph>
                This field specifies the customer who will be paid.
              </Paragraph>
              <Paragraph>
                <InlineCode>:59A:</InlineCode> Account number of final
                beneficiary
              </Paragraph>
              <Paragraph>
                <InlineCode>:59F:</InlineCode> Preferred option, as it provides
              </Paragraph>
              <Paragraph>
                <InlineCode>:59:</InlineCode> Name and address of final
              </Paragraph>
              <Paragraph>
                <InlineCode>:59F:/1234567890</InlineCode>
                <br /> <InlineCode>1/NAME OF BENEFICIARY</InlineCode>
                <br /> <InlineCode>2/STREET ADDRESS OF BNF</InlineCode>
                <br /> <InlineCode>3/US/NEW YORK</InlineCode>
              </Paragraph>
              <Notice className={styles.notice}>
                <p>
                  For regulatory reasons the account number and name of the
                  ultimate beneficiary must be provided.
                </p>
                <p>
                  To achieve the highest STP rate, BNY recommends that clients
                  provide the full beneficiary address.
                </p>
              </Notice>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>70</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Optional</Tag>
              <Heading as="h4">Remittance Information</Heading>
              <Paragraph>
                This field provides the details of the transaction or reference
                to another message containing such details, to be shared with
                the beneficiary.
              </Paragraph>
              <Paragraph>
                <InlineCode>:70:/RFB/BET072</InlineCode>
              </Paragraph>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>71A</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Mandatory</Tag>
              <Heading as="h4">Details of charges</Heading>

              <Paragraph>
                This field details who will incur the fees associated with this
                payment.
              </Paragraph>
              <Paragraph>
                <InlineCode>BEN</InlineCode> – charges are borne by the
                beneficiary, through a deduction of principal.
              </Paragraph>
              <Paragraph>
                <InlineCode>SHA</InlineCode> – originating bank charges are
                borne by originator and beneficiary bank charges are borne by
                beneficiary. beneficiary bank charges are borne by beneficiary.
              </Paragraph>
              <Paragraph>
                <InlineCode>OUR</InlineCode> – all charges are borne by
                originator
              </Paragraph>
              <Paragraph>
                <InlineCode>:71A:BEN</InlineCode>
              </Paragraph>
              <Notice className={styles.notice}>
                BNY offers a wide range of pricing services and options which
                can be further provided by your dedicated Relationship Officer.
              </Notice>
            </td>
          </tr>
          <tr>
            <td>
              <InlineCode>72</InlineCode>
            </td>
            <td>
              <Tag className={styles.tag}>Optional</Tag>
              <Heading as="h4">Sender to Receiver Information</Heading>
              <Paragraph>
                This optional field provides additional information for the
                Receiver or other party specified.
              </Paragraph>
              <Paragraph>
                For specific services, we accept the following code words in
                this field:
              </Paragraph>
              <Paragraph>/INS/ / &lt;followed by a literal&gt;</Paragraph>
              <Paragraph>/DEDUCT/</Paragraph>
              <Paragraph>/FULLPAY/</Paragraph>
              <Paragraph>/RATE/ à for FX related payments</Paragraph>
              <Paragraph>
                <InlineCode>:72:/FULLPAY/</InlineCode>
              </Paragraph>
              <Notice className={styles.notice}>
                <p>
                  Bilaterally agreed codewords must be placed at the start of
                  the first line. Additional bank to bank information included
                  on subsequent lines preceded by the appropriate code word.
                </p>
                <p>
                  Note: The use of any other code words may result in payments
                  processing as non-STP with BNY or any other downstream bank,
                  resulting in potential payment delays and additional fees.
                </p>
              </Notice>
            </td>
          </tr>
        </tbody>
      </Table>

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
    </div>
  );
}
