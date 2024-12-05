import { Id } from "@/app/features/types";
import { Client } from "../Client";
import { Container } from "../Container";
import styles from "./index.module.scss";
import { Heading } from "../Heading";

export function Clients() {
  return (
    <Container>
      <div className={styles.header}>
        <Heading as="h2" id={Id.OUR_CLIENTS} className={styles.heading} size="2xl">
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
              src: "/wells-fargo-logo.svg",
              alt: "Wells Fargo",
              width: 302,
              height: 302,
            }}
            quote="Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced."
            name="Bridget Engle"
            role="Head of Technology"
          />
        </li>
        <li>
          <Client
            logoImg={{
              src: "/wells-fargo-logo.svg",
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
              src: "/wells-fargo-logo.svg",
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
              src: "/wells-fargo-logo.svg",
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
