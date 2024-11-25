import { Client } from "../Client";
import { Container } from "../Container";
import styles from "./index.module.scss";

export function Clients() {
  return (
    <Container>
      <div className={styles.heading}>
        <h2 className={styles.h2}>Our Clients</h2>
        <p className={styles.subhead}>
          Trusted by the world's leading financial institutions.
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
