import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import styles from "./layout.module.scss";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
