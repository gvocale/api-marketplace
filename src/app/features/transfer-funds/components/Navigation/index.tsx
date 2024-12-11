"use client";

import Link from "next/link";
import { useContext } from "react";
import { IsScrolledContext } from "../../context/is-scrolled";
import { MagnifyingGlass } from "../../icons/MagnifyingGlass";
import { BNYMarketplaceLogo } from "../../svg-images/BNYMarketplaceLogo";
import { Button } from "../Button";
import { NavigationMenuItem } from "../NavigationMenuLink";
import { TextLink } from "../TextLink";
import styles from "./index.module.scss";

export function Navigation() {
  const { isScrolled } = useContext(IsScrolledContext);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.isScrolled : ""}`}>
      <Link href="/" className={styles.logoLink}>
        <BNYMarketplaceLogo className={styles.logo} />
      </Link>

      <ul className={styles.links}>
        <li>
          <NavigationMenuItem
            label="Solutions"
            href="/solutions"
            isOpen={false}
          />
        </li>
        <li>
          <NavigationMenuItem
            label="Developer"
            href="/developer"
            isOpen={false}
          />
        </li>
        <li>
          <NavigationMenuItem
            label="Resources"
            href="/resources"
            isOpen={false}
          />
        </li>
      </ul>

      <div className={styles.secondaryLinks}>
        <button className={styles.searchButton}>
          <MagnifyingGlass className={styles.searchIcon} />
        </button>

        <ul className={styles.authLinks}>
          <li>
            <TextLink href="" currentColor={true}>
              Sign up
            </TextLink>
          </li>
          <li>
            <Button as={Link} href="/login" variant="primary" size="sm">
              Log in
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
