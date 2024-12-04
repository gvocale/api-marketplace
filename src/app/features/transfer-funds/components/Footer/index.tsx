import Image from "next/image";
import { TextLink } from "../TextLink";
import styles from "./index.module.scss";
import { Divider } from "../Divider";
import { Container } from "../Container";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
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
                  <TextLink currentColor={true} href="/">
                    One BNY
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Treasury Services
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Wove Connect
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Custody & Settlement
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.sectionTitle}>Developer</h3>
              <ul className={styles.sectionLinks}>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Documentation Overview
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Treasury Services Documentation
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Wove Connect Documentation
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Sandbox
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    API Keys & Authentication
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.sectionTitle}>Resources</h3>
              <ul className={styles.sectionLinks}>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Help Center
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Case Studies
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Guides
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Treasury Services Quick Start Guide
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Wave Connect Quick Start Guide
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.sectionTitle}>Company</h3>
              <ul className={styles.sectionLinks}>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    About Us
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    News
                  </TextLink>
                </li>
                <li className={styles.sectionLink}>
                  <TextLink currentColor={true} href="/">
                    Careers
                  </TextLink>
                </li>
              </ul>
            </div>
          </div>
          <Divider className={styles.divider} />
          <div className={styles.legal}>
            <ul className={styles.legalLinks}>
              <li>
                <TextLink currentColor={true} href="/">
                  Privacy Policy
                </TextLink>
              </li>
              <li>
                <TextLink currentColor={true} href="/">
                  Terms of Service
                </TextLink>
              </li>
              <li>
                <TextLink currentColor={true} href="/">
                  Cookie Notice
                </TextLink>
              </li>
            </ul>
            <p className={styles.legalText}>
              ©2024 the Bank of New York Mellon.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
