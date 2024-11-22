import Image from "next/image";
import styles from "./index.module.scss";

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
          <a href="">Sign up</a>
        </li>
        <li>
          <a href="">Log in</a>
        </li>
      </ul>
    </nav>
  );
}
