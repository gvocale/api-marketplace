import Link from "next/link";
import { useContext } from "react";
import { IsScrolledContext } from "../../context/is-scrolled";
import { BNYMarketplaceLogo } from "../../svg-images/BNYMarketplaceLogo";
import { Progress } from "../Progress";
import styles from "./index.module.scss";

export function SecondaryNavigation() {
  const { isScrolled } = useContext(IsScrolledContext);

  return (
    <nav
      className={`${styles.nav} ${isScrolled ? styles.isScrolled : ""}`}
      inert={!isScrolled}
    >
      <Link href="/" className={styles.logoLink}>
        <BNYMarketplaceLogo className={styles.logo} />
      </Link>

      <div className={styles.progress}>
        <Progress />
      </div>
      <div></div>
    </nav>
  );
}
