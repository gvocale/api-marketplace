import { Footer } from "../features/transfer-funds/components/Footer";
import { Nav } from "../features/transfer-funds/components/Nav";
import { UserConfigProvider } from "../features/transfer-funds/context/user-config";
import styles from "./layout.module.scss";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserConfigProvider>
      <div className={styles.page}>
        <header className={styles.header}>
          <Nav />
        </header>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </UserConfigProvider>
  );
}
