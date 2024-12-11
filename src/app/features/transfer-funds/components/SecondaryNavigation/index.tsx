import { useContext } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { BNYMarketplaceLogo } from "../../svg-images/BNYMarketplaceLogo";
import { IsScrolledContext } from "../../context/is-scrolled";
import { Progress } from "../Progress";

export function SecondaryNavigation() {
  const { isScrolled } = useContext(IsScrolledContext);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.isScrolled : ""}`}>
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
