import { useInView } from "motion/react";
import { useContext, useEffect, useRef } from "react";
import { IsScrolledContext } from "../../context/is-scrolled";
import { Container } from "../Container";
import { Globe } from "../Globe";
import { GlobeCard } from "../GlobeCard";
import styles from "./index.module.scss";

import { AngleRight } from "../../icons/AngleRight";
import { ArrowRightFromArc } from "../../icons/ArrowRightFromArc";
import { ArrowRightToArc } from "../../icons/ArrowRightToArc";
import { MagnifyingGlassDollar } from "../../icons/MagnifyingGlassDollar";
import { Id } from "@/app/features/types";

export function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-32px 0px 0px 0px" });
  const { setIsScrolled } = useContext(IsScrolledContext);

  useEffect(() => {
    setIsScrolled(!isInView);
  }, [isInView, setIsScrolled]);

  return (
    <header className={styles.header} ref={ref}>
      <div className={styles.globe}>
        <Globe />
      </div>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.h1}>Transfer Funds</h1>
          <div className={styles.cards}>
            <GlobeCard
              title="Initiate"
              description="Send payments via high-value payment networks"
              icon={<ArrowRightToArc />}
              isActive={true}
              href={`#${Id.INITIATE_A_PAYMENT}`}
            />
            <div className={styles.divider}>
              <div className={styles.dividerLine} />
              <AngleRight className={styles.dividerIcon} />
            </div>
            <GlobeCard
              title="Track"
              description="Monitor payments at every stage of the process"
              icon={<ArrowRightFromArc />}
              href="/products/transfer-funds/track-a-payment"
            />
            <div className={styles.divider}>
              <div className={styles.dividerLine} />
              <AngleRight className={styles.dividerIcon} />
            </div>
            <GlobeCard
              title="Reconcile"
              description="Manage money thingy thungy thingy"
              icon={<MagnifyingGlassDollar />}
              href="/products/transfer-funds/reconcile-a-payment"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
