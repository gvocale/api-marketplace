import { SectionId, TooltipId } from "@/app/features/types";
import { DecorationItem, ShikiTransformer } from "shiki";
import { Code } from "../Code";
import { CodeTooltip } from "../CodeTooltip";
import { Eyebrow } from "../Eyebrow";
import { Heading } from "../Heading";
import { InlineCode } from "../InlineCode";
import { Notice } from "../Notice";
import { Paragraph } from "../Paragraph";
import { Tag } from "../Tag";
import styles from "./index.module.scss";

export function TextBlock() {
  const CODE = `{ 4:
      20:   UF9CKT53FROE8KTA
      23B:  CRED
      32A:  210117USD10000
      50K:  /78787878
            JOHN DEBTOR
            DEBTORTOWN
      52A:  CIBCCATTXXX
      53B:  /1111112222
      56A:  IRVTUS3NXXX
      57A:  IRVTUS3NXXX
      59:   /90909090
            JANE CREDITOR
            CREDITORVILLE
      70:   BAX REFERENCE: BAX000009366
      71A:  OUR
      72:   /FULLPAY/
  }`;

  const transformer: ShikiTransformer = {
    span(node, line, col) {
      node.properties["data-line"] = line;
      node.properties["data-col"] = col;
    },
  };

  const decorations: DecorationItem[] = [
    {
      start: { line: 1, character: 6 },
      end: { line: 1, character: 8 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_SENDER_REFERENCE,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_SENDER_REFERENCE}`,
        },
      },
    },
    {
      start: { line: 2, character: 6 },
      end: { line: 2, character: 9 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_BANK_OPERATION_CODE,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_BANK_OPERATION_CODE}`,
        },
      },
    },
    {
      start: { line: 3, character: 12 },
      end: { line: 3, character: 18 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_VALUE_DATE,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_VALUE_DATE}`,
        },
      },
    },
    {
      start: { line: 3, character: 18 },
      end: { line: 3, character: 21 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_CURRENCY_CODE,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_CURRENCY_CODE}`,
        },
      },
    },
    {
      start: { line: 3, character: 21 },
      end: { line: 3, character: 26 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_AMOUNT,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_AMOUNT}`,
        },
      },
    },
    {
      start: { line: 4, character: 6 },
      end: { line: 4, character: 9 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER}`,
        },
      },
    },
    {
      start: { line: 4, character: 12 },
      end: { line: 4, character: 21 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER_ACCOUNT_NUMBER,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER_ACCOUNT_NUMBER}`,
        },
      },
    },
    {
      start: { line: 5, character: 12 },
      end: { line: 5, character: 23 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER_NAME,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER_NAME}`,
        },
      },
    },
    {
      start: { line: 6, character: 12 },
      end: { line: 6, character: 22 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER_ADDRESS,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER_ADDRESS}`,
        },
      },
    },
    {
      start: { line: 7, character: 12 },
      end: { line: 7, character: 23 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_ORDERING_INSTITUTION,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_ORDERING_INSTITUTION}`,
        },
      },
    },
    {
      start: { line: 8, character: 12 },
      end: { line: 8, character: 23 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_SENDERS_CORRESPONDENT,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_SENDERS_CORRESPONDENT}`,
        },
      },
    },
    {
      start: { line: 9, character: 12 },
      end: { line: 9, character: 23 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_INTERMEDIARY_INSTITUTION,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_INTERMEDIARY_INSTITUTION}`,
        },
      },
    },
    {
      start: { line: 10, character: 12 },
      end: { line: 10, character: 23 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_ACCOUNT_WITH_INSTITUTION,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_ACCOUNT_WITH_INSTITUTION}`,
        },
      },
    },
    {
      start: { line: 11, character: 12 },
      end: { line: 11, character: 21 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_BENEFICIARY_CUSTOMER,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_BENEFICIARY_CUSTOMER}`,
        },
      },
    },
    {
      start: { line: 14, character: 12 },
      end: { line: 14, character: 39 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_REMITTANCE_INFORMATION,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_REMITTANCE_INFORMATION}`,
        },
      },
    },
    {
      start: { line: 15, character: 12 },
      end: { line: 15, character: 15 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_CHARGES,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_CHARGES}`,
        },
      },
    },
    {
      start: { line: 16, character: 12 },
      end: { line: 16, character: 21 },
      properties: {
        dataTooltipId: TooltipId.TEXT_BLOCK_SENDER_TO_RECEIVER_INFORMATION,
        tabindex: 0,
        style: {
          // @ts-expect-error --anchor-name is not a valid CSS property
          "--anchor-name": `--${TooltipId.TEXT_BLOCK_SENDER_TO_RECEIVER_INFORMATION}`,
        },
      },
    },
  ];

  return (
    <div>
      <Eyebrow className={styles.eyebrow}>Fourth Block</Eyebrow>
      <h4 className={styles.h4} id={SectionId.TEXT_BLOCK}>
        Text Block
      </h4>
      <Code
        code={CODE}
        lang="bash"
        className={styles.code}
        decorations={decorations}
        transformers={[transformer]}
      />
      {/* <Paragraph size="lg">
        See the table below for more details on these fields.
      </Paragraph> */}

      {/* 20: */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_SENDER_REFERENCE}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h5" size="md">
          Sender&apos;s Reference
        </Heading>
        <Paragraph size="sm">
          This is a reference number assigned by the sender to unambiguously
          identify the message to the receiver.
        </Paragraph>
        {/* <InlineCode>:20:Ref254</InlineCode> */}
        <Notice className={styles.notice} size="sm">
          As this reference is point-to-point, BNY always substitutes our
          reference number in Field 20 of any outgoing advice.
        </Notice>
      </CodeTooltip>

      {/* 23B: */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_BANK_OPERATION_CODE}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h4" size="md">
          Bank Operation Code
        </Heading>
        <Paragraph size="sm">
          This field identifies the type of service level to be applied.
        </Paragraph>
        {/* <InlineCode>:23B:CRED</InlineCode> */}
        <Notice className={styles.notice} size="sm">
          <InlineCode>CRED</InlineCode>&nbsp;is the only code currently
          supported.
        </Notice>
      </CodeTooltip>

      {/* 210117 */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_VALUE_DATE}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h4" size="md">
          Value date
        </Heading>
        <Notice className={styles.notice} size="sm">
          BNY will accept a value date up to 30 days in the future.
        </Notice>
      </CodeTooltip>

      {/* USD */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_CURRENCY_CODE}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h4" size="md">
          Currency code
        </Heading>
      </CodeTooltip>

      {/* 10000 */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_AMOUNT}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h4" size="md">
          Settlement amount of the payment
        </Heading>
      </CodeTooltip>

      {/* 50K: */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h4" size="md">
          Ordering customer
        </Heading>
        <Paragraph size="sm">
          This field specifies the customer ordering the transaction (e.g.: the
          organization or person who is requesting the payment initiation).
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>50A</InlineCode>&nbsp;Account / BIC of ordering customer
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>50F</InlineCode>&nbsp;Party Identifier name, address, and
          country (formatted)
          <br />
          <InlineCode>50F:/1234567890</InlineCode>
          <br />
          <InlineCode>1/NAME OF ORIGINATOR</InlineCode>
          <br />
          <InlineCode>2/STREET OF ORG</InlineCode>
          <br />
          <InlineCode>3/US/NEW YORK</InlineCode>
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>50K</InlineCode>&nbsp;Name and address of ordering
          customer
        </Paragraph>

        <Notice className={styles.notice} size="sm">
          <p>All format options are supported.</p>
          <p>
            BNY requires meaningful name and address information to be provided
            in line with regulatory requirements and global market practice.
            Street, town, and country are expected minimum address details.
          </p>
        </Notice>
      </CodeTooltip>

      {/* Account number of ordering customer */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER_ACCOUNT_NUMBER}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h4" size="md">
          Account number of ordering customer
        </Heading>
      </CodeTooltip>

      {/* Name of ordering customer */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER_NAME}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h4" size="md">
          Name of ordering customer (Payer)
        </Heading>
      </CodeTooltip>

      {/* Address of ordering customer */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_ORDERING_CUSTOMER_ADDRESS}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h4" size="md">
          Address of ordering customer
        </Heading>
      </CodeTooltip>

      {/* :52A: */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_ORDERING_INSTITUTION}>
        <Tag className={styles.tag}>Optional</Tag>

        <Heading as="h4" size="md">
          <InlineCode>52A/D</InlineCode> Ordering Institution (Payer&apos;s
          Bank)
        </Heading>
        <Paragraph size="sm">
          This optional field identifies the ordering financial institution when
          different than the Sender of the message.
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>52A:IRVTGB2X</InlineCode>&nbsp;BIC code of ordering
          institution
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>52D Bank of New York Mellon, London Branch</InlineCode>
          &nbsp;Name of ordering institution
        </Paragraph>
        <Notice className={styles.notice} size="sm">
          This field is to be used when the account servicing institution of the
          originator is different than the sender. Option A is preferred.
        </Notice>
      </CodeTooltip>

      {/* :53B */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_SENDERS_CORRESPONDENT}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h4" size="md">
          Sender&apos;s Correspondent (Bank)
        </Heading>
        <Paragraph size="sm">
          This MANDATORY field identifies the account or branch of the Sender or
          another financial institution through which the Sender will reimburse
          the Receiver.
        </Paragraph>
      </CodeTooltip>

      {/* :56A */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_INTERMEDIARY_INSTITUTION}>
        <Tag className={styles.tag}>Optional</Tag>
        <Heading as="h4" size="md">
          Intermediary Institution (Bank)
        </Heading>
        <Paragraph size="sm">
          This field specifies the financial institution used to pass the
          transaction to the Account With institution (beneficiary bank).
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>{`//FW021000018`}</InlineCode>&nbsp; is USD clearing ABA
          used in the examples but any national clearing code can be used
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>:56A:BKCHCNBJ</InlineCode>&nbsp; BIC of beneficiary
          bank&apos;s agent{" "}
          <span className={styles.option}>(Option A - 1)</span>
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>:56A:/1234567890</InlineCode>
          <br />
          <InlineCode>BKCHCNBJ</InlineCode>
          <br />
          Account and BIC of beneficiary bank&apos;s agent&nbsp;
          <span className={styles.option}>(Option A - 2)</span>
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>:56A://FW021000018</InlineCode>
          <br />
          <InlineCode>FW021000018</InlineCode>
          <br /> National Clearing Code and BIC of beneficiary bank&apos;s
          agent&nbsp;<span className={styles.option}>(Option A - 3)</span>
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>:56D:/1234567890</InlineCode>
          &nbsp;Account, Name and Address&nbsp;
          <span className={styles.option}>(Option D - 1)</span>
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>:56D://FW021000018</InlineCode>
          &nbsp;National Clearing Code, Name and Address&nbsp;
          <span className={styles.option}>(Option D - 2)</span>
        </Paragraph>

        <Notice className={styles.notice} size="sm">
          <p>
            Option A is the preferred option and should be used with party
            identifier and BIC.
          </p>
          <p>
            Option A is the preferred option and should be used with party
            identifier and BIC.
          </p>
          <p>
            Option D can be used with a party identifier, name, and address.
          </p>
          <p>
            If the beneficiary bank&apos;s account is held with an intermediary
            bank other than BNY, providing the BIC of the intermediary bank is
            recommended to ensure STP.
          </p>
          <p>
            If Field 56 is not present, BNY will identify the intermediary bank
            on client&apos;s behalf.
          </p>
        </Notice>
      </CodeTooltip>

      {/* 57A/B/C/D */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_ACCOUNT_WITH_INSTITUTION}>
        <InlineCode>57A/B/C/D</InlineCode>
        <Tag className={styles.tag}>Optional</Tag>
        <Heading as="h4" size="md">
          Account with Institution
        </Heading>
        <Paragraph size="sm">
          This field identifies the financial institution of the ultimate
          beneficiary customer. This field applies even if Field 59 contains an
          IBAN.
        </Paragraph>
        <Paragraph size="sm">
          When Field 57 is not present, it means that the Receiver is also the
          Account With institution. It is mandatory for any payment where Field
          56 is used.
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>{"//FW021000018"}</InlineCode> is USD clearing ABA used in
          the examples but any national clearing code can be used
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>:57A:BANKUSFX</InlineCode>
          <br /> BIC of beneficiary bank
          <br /> (Option A - 1)
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>:57A:/1234567890</InlineCode>
          <br />
          <InlineCode>BANKUSFX</InlineCode>
          <br /> Account and BIC of beneficiary bank
          <br /> (Option A - 2)
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>:57A://FW0123456789</InlineCode>
          <br />
          <InlineCode>BANKUSFX</InlineCode>
          <br /> National Clearing Code and BIC of beneficiary bank
          <br /> (Option A - 3)
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>:57A://FW0123456789</InlineCode>
          <br />
          <InlineCode>BANKUSFX</InlineCode>
          <br /> National Clearing Code and BIC of beneficiary bank
          <br /> (Option A - 3)
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>:57B://FW0123456789&nbsp;</InlineCode>
          <br /> New York Branch
        </Paragraph>

        <Paragraph size="sm">National Clearing Code and location</Paragraph>

        <Paragraph size="sm">
          <InlineCode>:57C://FW021000018</InlineCode>
          <br /> New York Branch
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>:57D:/9876543210</InlineCode>
          <br /> Name and address (Option D - 1)
        </Paragraph>

        <Paragraph size="sm">
          <InlineCode>:57D://FW0123456789</InlineCode>
          <br /> National Clearing Code, Name and Address (Option D - 2)
        </Paragraph>

        <Notice className={styles.notice} size="sm">
          <p>
            Option A is the preferred option and should be used with party
            identifier and BIC.
          </p>
          <p>Option B should be used with party identifier and location</p>
          <p>Option C can be used with any unique identifier</p>
          <p>Option D can be used with a party identifier, name, and address</p>
        </Notice>
      </CodeTooltip>

      {/* 59A/F or 59 */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_BENEFICIARY_CUSTOMER}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <InlineCode>59A/F</InlineCode> or <InlineCode>59</InlineCode>
        <Heading as="h4" size="md">
          Beneficiary Customer
        </Heading>
        <Paragraph size="sm">
          This field specifies the customer who will be paid.
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>:59A:</InlineCode> Account number of final beneficiary
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>:59F:</InlineCode> Preferred option, as it provides
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>:59:</InlineCode> Name and address of final
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>:59F:/1234567890</InlineCode>
          <br /> <InlineCode>1/NAME OF BENEFICIARY</InlineCode>
          <br /> <InlineCode>2/STREET ADDRESS OF BNF</InlineCode>
          <br /> <InlineCode>3/US/NEW YORK</InlineCode>
        </Paragraph>
        <Notice className={styles.notice} size="sm">
          <p>
            For regulatory reasons the account number and name of the ultimate
            beneficiary must be provided.
          </p>
          <p>
            To achieve the highest STP rate, BNY recommends that clients provide
            the full beneficiary address.
          </p>
        </Notice>
      </CodeTooltip>

      {/* 70 */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_REMITTANCE_INFORMATION}>
        <Tag className={styles.tag}>Optional</Tag>
        <Heading as="h4" size="md">
          Remittance Information
        </Heading>
        <InlineCode>:70:/RFB/BET072</InlineCode>
        <Paragraph size="sm">
          This field provides the details of the transaction or reference to
          another message containing such details, to be shared with the
          beneficiary.
        </Paragraph>
      </CodeTooltip>

      {/* 71A */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_CHARGES}>
        <Tag className={styles.tag}>Mandatory</Tag>
        <Heading as="h4" size="md">
          Details of charges
        </Heading>
        <Paragraph size="sm">
          This field details who will incur the fees associated with this
          payment.
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>BEN</InlineCode> – charges are borne by the beneficiary,
          through a deduction of principal.
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>SHA</InlineCode> – originating bank charges are borne by
          originator and beneficiary bank charges are borne by beneficiary.
          beneficiary bank charges are borne by beneficiary.
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>OUR</InlineCode> – all charges are borne by originator
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>:71A:BEN</InlineCode>
        </Paragraph>
        <Notice className={styles.notice} size="sm">
          BNY offers a wide range of pricing services and options which can be
          further provided by your dedicated Relationship Officer.
        </Notice>
      </CodeTooltip>

      {/* 72 */}
      <CodeTooltip id={TooltipId.TEXT_BLOCK_SENDER_TO_RECEIVER_INFORMATION}>
        <Tag className={styles.tag}>Optional</Tag>
        <Paragraph size="sm">
          <InlineCode>:72:/FULLPAY/</InlineCode>
        </Paragraph>
        <Heading as="h4" size="md">
          Sender to Receiver Information
        </Heading>
        <Paragraph size="sm">
          This optional field provides additional information for the Receiver
          or other party specified.
        </Paragraph>
        <Paragraph size="sm">
          For specific services, we accept the following code words in this
          field:
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>/INS/</InlineCode>{" "}
          <InlineCode>&lt;followed by a literal&gt;</InlineCode>
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>/DEDUCT/</InlineCode>
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>/FULLPAY/</InlineCode>
        </Paragraph>
        <Paragraph size="sm">
          <InlineCode>/RATE/</InlineCode>
          for FX related payments
        </Paragraph>

        <Notice className={styles.notice} size="sm">
          <p>
            Bilaterally agreed codewords must be placed at the start of the
            first line. Additional bank to bank information included on
            subsequent lines preceded by the appropriate code word.
          </p>
          <p>
            Note: The use of any other code words may result in payments
            processing as non-STP with BNY or any other downstream bank,
            resulting in potential payment delays and additional fees.
          </p>
        </Notice>
      </CodeTooltip>

      <Paragraph size="lg">
        The Basic Header Block includes the Receiver (Instructed Agent) BIC. All
        Funds Transfer payment initiation instructions require a Receiver BIC.e
        Use the LTA format (12 characters, i.e., IRVTUS3NAXXX). The API does not
        make use of the session and sequence numbers, but they are needed to
        maintain the formatting rules.
      </Paragraph>
      <Paragraph size="lg">
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
