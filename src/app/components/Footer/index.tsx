import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.root}>
      <hr className={styles.divider} />
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
            <li>
              <Link href="/" className={styles.sectionLink}>
                One BNY
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Treasury Services
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Wove Connect
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Custody & Settlement
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>Developer</h3>
          <ul className={styles.sectionLinks}>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Documentation Overview
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Treasury Services Documentation
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Wove Connect Documentation
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Sandbox
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                API Keys & Authentication
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>Resources</h3>
          <ul className={styles.sectionLinks}>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Guides
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Treasury Services Quick Start Guide
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Wave Connect Quick Start Guide
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.sectionTitle}>Company</h3>
          <ul className={styles.sectionLinks}>
            <li>
              <Link href="/" className={styles.sectionLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                News
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.sectionLink}>
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.legal}>
        <ul className={styles.legalLinks}>
          <li>
            <Link href="/" className={styles.legalLink}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.legalLink}>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.legalLink}>
              Cookie Notice
            </Link>
          </li>
        </ul>
        <p className={styles.legalText}>©2024 the Bank of New York Mellon.</p>
      </div>
    </footer>
  );
}
