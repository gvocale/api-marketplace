import Image from "next/image";
import { TextLink } from "../TextLink";
import styles from "./index.module.scss";
import { Divider } from "../Divider";

export function Footer() {
  return (
    <footer className={styles.root}>
      <Divider className={styles.divider} />
      <div className={styles.content}>
        <div>
          <Image
            src="/bny-marketplace-logo.svg"
            alt="Logo"
            width={230}
            height={21}
            className={styles.logo}
          />
        </div>
        <div>
          <h3 className={styles.sectionTitle}>Solutions</h3>
          <ul className={styles.sectionLinks}>
            <li className={styles.sectionLink}>
              <TextLink href="/">One BNY</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Treasury Services</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Wove Connect</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Custody & Settlement</TextLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>Developer</h3>
          <ul className={styles.sectionLinks}>
            <li className={styles.sectionLink}>
              <TextLink href="/">Documentation Overview</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Treasury Services Documentation</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Wove Connect Documentation</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Sandbox</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">API Keys & Authentication</TextLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>Resources</h3>
          <ul className={styles.sectionLinks}>
            <li className={styles.sectionLink}>
              <TextLink href="/">Help Center</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Case Studies</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Guides</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Treasury Services Quick Start Guide</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Wave Connect Quick Start Guide</TextLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>Company</h3>
          <ul className={styles.sectionLinks}>
            <li className={styles.sectionLink}>
              <TextLink href="/">About Us</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">News</TextLink>
            </li>
            <li className={styles.sectionLink}>
              <TextLink href="/">Careers</TextLink>
            </li>
          </ul>
        </div>
      </div>
      <Divider />
      <div className={styles.legal}>
        <ul className={styles.legalLinks}>
          <li className={styles.legalLink}>
            <TextLink href="/">Privacy Policy</TextLink>
          </li>
          <li className={styles.legalLink}>
            <TextLink href="/">Terms of Service</TextLink>
          </li>
          <li className={styles.legalLink}>
            <TextLink href="/">Cookie Notice</TextLink>
          </li>
        </ul>
        <p className={styles.legalText}>©2024 the Bank of New York Mellon.</p>
      </div>
    </footer>
  );
}
