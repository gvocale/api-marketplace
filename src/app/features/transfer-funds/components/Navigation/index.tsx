"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { IsScrolledContext } from "../../context/is-scrolled";
import { MagnifyingGlass } from "../../icons/MagnifyingGlass";
import { Button } from "../Button";
import { NavigationMenuItem } from "../NavigationMenuLink";
import { Progress } from "../Progress";
import { TextLink } from "../TextLink";
import styles from "./index.module.scss";

export function Navigation() {
  const { isScrolled } = useContext(IsScrolledContext);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      const [entry] = entries;
      if (entry) {
        setHeight(entry.contentRect.height);
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`${styles.nav} ${isScrolled ? styles.isScrolled : ""}`}
      ref={ref}
      style={{ "--nav-height": `${height}px` } as React.CSSProperties}
    >
      <div className={styles.logoMask}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/bny-marketplace-logo.svg"
              alt="Logo"
              width={230}
              height={21}
              unoptimized
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.pageName}>Transfer Funds</div>
      </div>
      <div className={styles.mask}>
        <div className={styles.primaryNav}>
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
        </div>
        <div className={styles.progress}>
          <Progress size="sm" />
        </div>
      </div>
      {/* <div className={styles.toggleMask}>
        <div className={styles.toggleContainer}>
          <Toggle
            size="small"
            defaultValue={messagingStandard}
            name="financial-messaging-standard"
            onChange={(value) =>
              setConfig({
                ...config,
                messagingStandard: value as FinancialMessagingStandard,
              })
            }
            options={[
              { label: "Swift", value: FinancialMessagingStandard.SWIFT },
              { label: "Pacs.008", value: FinancialMessagingStandard.PACS },
            ]}
          />
        </div>
      </div> */}

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
    </nav>
  );
}
