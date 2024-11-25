import Image from "next/image";
import styles from "./index.module.scss";

export interface ClientProps {
  logoImg: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  quote: string;
  name: string;
  role: string;
}

export function Client({ logoImg, quote, name, role }: ClientProps) {
  return (
    <div className={styles.root}>
      <Image {...logoImg} className={styles.logo} />
      <blockquote>
        <p className={styles.quote}>{quote}</p>
        <div className={styles.attribution}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </div>
      </blockquote>
    </div>
  );
}
