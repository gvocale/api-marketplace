import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { TextLink } from "../TextLink";

export function TrackPayment() {
  return (
    <div>
      <Heading as="h3" id="track-your-payment" size="xl">
        Track Your Payment
      </Heading>
      <Paragraph>
        Next up,{" "}
        <TextLink href="https://marketplace.bnymellon.com/treasury/api-central/#/tracking-page">
          track your payment
        </TextLink>{" "}
        and{" "}
        <TextLink href="https://marketplace.bnymellon.com/treasury/api-central/#/fundsTransfer-notif">
          set up your funds transfer notifications
        </TextLink>
        .
      </Paragraph>
    </div>
  );
}
