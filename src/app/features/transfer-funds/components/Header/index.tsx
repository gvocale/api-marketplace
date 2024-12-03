import { useInView } from "motion/react";
import { useContext, useEffect, useRef } from "react";
import { Container } from "../Container";
import { Progress } from "../Progress";
import styles from "./index.module.scss";
import { IsScrolledContext } from "../../context/is-scrolled";

export function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-32px 0px 0px 0px" });
  const { setIsScrolled } = useContext(IsScrolledContext);

  useEffect(() => {
    setIsScrolled(!isInView);
  }, [isInView, setIsScrolled]);

  return (
    <header className={styles.header} ref={ref}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.h1}>Transfer Funds</h1>
          <Progress size="lg" />
        </div>
      </Container>
    </header>
  );
}
