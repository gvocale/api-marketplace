"use client";

import { Suspense, useRef } from "react";
import { Footer } from "../features/transfer-funds/components/Footer";
import { Navigation } from "../features/transfer-funds/components/Navigation";
import { InViewProvider } from "../features/transfer-funds/context/in-view";
import { IsScrolledProvider } from "../features/transfer-funds/context/is-scrolled";
import { UserConfigProvider } from "../features/transfer-funds/context/user-config";
import styles from "./layout.module.scss";
import { useInView } from "motion/react";
import { motion } from "motion/react";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <Suspense>
      <UserConfigProvider>
        <IsScrolledProvider>
          <InViewProvider>
            <div className={styles.page}>
              <Navigation />
              <motion.div
                animate={{
                  paddingLeft: isInView ? "2rem" : "0",
                  paddingRight: isInView ? "2rem" : "0",
                }}
              >
                <main className={styles.main}>{children}</main>
              </motion.div>
              <div ref={ref}></div>
              <Footer />
            </div>
          </InViewProvider>
        </IsScrolledProvider>
      </UserConfigProvider>
    </Suspense>
  );
}
