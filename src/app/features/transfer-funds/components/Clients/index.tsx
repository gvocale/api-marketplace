import { SectionId } from "@/app/features/types";
import { Client } from "../Client";
import { Container } from "../Container";
import styles from "./index.module.scss";
import { Heading } from "../Heading";

export function Clients() {
  return (
    <Container>
      <div className={styles.header}>
        <Heading
          as="h2"
          id={SectionId.OUR_CLIENTS}
          className={styles.heading}
          size="2xl"
        >
          Our Clients
        </Heading>
        <p className={styles.subhead}>
          Trusted by the world&apos;s leading financial institutions.
        </p>
      </div>
      <ul className={styles.list}>
        <li>
          <Client
            logoImg={{
              src: "/transfer-funds/images/vanguard-logo.svg",
              alt: "Wells Fargo",
              width: 302,
              height: 302,
            }}
            quote="“Partnering with BNY's asset management APIs has been transformative for our operations. Since integrating, we've improved tracking efficiency by 40%, delivering real-time insights that keep our investors informed instantly. It's a solution that's taken our service to a new level of responsiveness and reliability.”"
            name="Alex Morgan"
            role="Director of Technology Innovation, Vanguard"
          />
        </li>
        <li>
          <Client
            logoImg={{
              src: "/transfer-funds/images/wells-fargo-logo.svg",
              alt: "Wells Fargo",
              width: 302,
              height: 302,
            }}
            quote="Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced."
            name="Aldous Huxley"
            role="CTO"
          />
        </li>
        <li>
          <Client
            logoImg={{
              src: "/transfer-funds/images/wells-fargo-logo.svg",
              alt: "Wells Fargo",
              width: 302,
              height: 302,
            }}
            quote="Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced."
            name="Aldous Huxley"
            role="CTO"
          />
        </li>
        <li>
          <Client
            logoImg={{
              src: "/transfer-funds/images/wells-fargo-logo.svg",
              alt: "Wells Fargo",
              width: 302,
              height: 302,
            }}
            quote="Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced."
            name="Aldous Huxley"
            role="CTO"
          />
        </li>
      </ul>
    </Container>
  );
}
