"use client";

import { FinancialMessagingStandard } from "@/app/features/types";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { UserConfigContext } from "../../context/user-config";
import { Button } from "../Button";
import NavLink from "../NavLink";
import { TextLink } from "../TextLink";
import Toggle from "../Toggle";
import styles from "./index.module.scss";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { config, setConfig } = useContext(UserConfigContext);
  const { messagingStandard } = config;
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={styles.nav}
      data-scrolled={isScrolled}
      ref={ref}
      style={{ "--nav-height": `${height}px` } as React.CSSProperties}
    >
      <div className={styles.logoMask}>
        <div className={styles.logoContainer}>
          <Image
            src="/bny-marketplace-logo.svg"
            alt="Logo"
            width={230}
            height={21}
            unoptimized
            className={styles.logo}
          />
        </div>
        <div className={styles.pageName}>Transfer Funds</div>
      </div>
      <div className={styles.mask}>
        <div className={styles.primaryNav}>
          <ul className={styles.links}>
            <li>Solutions</li>
            <li>Developer</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className={styles.secondaryNav}>
          <ul className={styles.productLinks}>
            <li className={styles.contents}>
              <NavLink href="/products/transfer-funds/initiate-a-payment">
                Initiate a payment
              </NavLink>
            </li>
            <li className={styles.contents}>
              <NavLink href="/products/transfer-funds/track-a-payment">
                Track a payment
              </NavLink>
            </li>
            <li className={styles.contents}>
              <NavLink href="/products/transfer-funds/reconcile-a-payment">
                Reconcile a payment
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.toggleMask}>
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
      </div>
      <ul className={styles.authLinks}>
        <li>
          <TextLink href="">Sign up</TextLink>
        </li>
        <li>
          <Button as={Link} href="/login" variant="primary">
            Log in
          </Button>
        </li>
      </ul>
    </nav>
  );
}
