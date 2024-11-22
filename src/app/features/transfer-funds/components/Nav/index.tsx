import Image from "next/image";
import styles from "./index.module.scss";
import { Button } from "../Button";
import Link from "next/link";
import { TextLink } from "../TextLink";

export function Nav() {
  return (
    <nav className={styles.root}>
      <Image
        src="/bny-marketplace-logo.svg"
        alt="Logo"
        width={230}
        height={21}
        unoptimized
        className={styles.logo}
      />
      <ul className={styles.links}>
        <li>Solutions</li>
        <li>Developer</li>
        <li>Resources</li>
      </ul>
      <input type="search" />
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
