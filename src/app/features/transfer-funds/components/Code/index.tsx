"use client";

import { CSSProperties, useLayoutEffect, useState } from "react";
import { highlight } from "./shared";
import { CopyButton } from "../CopyButton";
import styles from "./index.module.scss";
import { Terminal } from "../../icons/Terminal";
import { Code as CodeIcon } from "../../icons/Code";
import { BundledLanguage, ShikiTransformer, DecorationItem } from "shiki";

export interface CodeProps {
  className?: string;
  code: string;
  transformers?: ShikiTransformer[];
  decorations?: DecorationItem[];
  lang: BundledLanguage;
  lineStart?: number;
}

export function Code({
  code,
  lang,
  lineStart = 1,
  className,
  transformers,
  decorations,
}: CodeProps) {
  const [nodes, setNodes] = useState<JSX.Element>();

  useLayoutEffect(() => {
    if (code) {
      void highlight({ code, lang, transformers, decorations }).then(setNodes);
    }
  }, [code, lang, transformers, decorations]);

  function prettifyLanguage(lang: string) {
    switch (lang) {
      case "ts":
        return "TypeScript";
      case "bash":
        return (
          <>
            <Terminal className={styles.icon} /> terminal
          </>
        );
      default:
        return (
          <>
            <CodeIcon className={styles.icon} />
            {lang}
          </>
        );
    }
  }

  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <div className={styles.toolbar}>
        <span className={styles.language}>{prettifyLanguage(lang)}</span>
        <CopyButton code={code} />
      </div>
      <div
        className={styles.code}
        style={{ "--start": lineStart } as CSSProperties}
      >
        {nodes}
      </div>
    </div>
  );
}
