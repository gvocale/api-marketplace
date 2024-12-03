import { Suspense } from "react";
import { Footer } from "../features/transfer-funds/components/Footer";
import { Navigation } from "../features/transfer-funds/components/Navigation";
import { InViewProvider } from "../features/transfer-funds/context/in-view";
import { IsScrolledProvider } from "../features/transfer-funds/context/is-scrolled";
import { UserConfigProvider } from "../features/transfer-funds/context/user-config";
import styles from "./layout.module.scss";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <UserConfigProvider>
        <IsScrolledProvider>
          <InViewProvider>
            <div className={styles.page}>
              <Navigation />
              <main className={styles.main}>{children}</main>
              <Footer />
            </div>
          </InViewProvider>
        </IsScrolledProvider>
      </UserConfigProvider>
    </Suspense>
  );
}
