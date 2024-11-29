"use client";

import { useLayoutEffect, useState } from "react";
import { highlight } from "./shared";
import { CopyButton } from "../CopyButton";
import styles from "./index.module.scss";
import { Terminal } from "../../icons/Terminal";
import { Code as CodeIcon } from "../../icons/Code";

export interface CodeProps {
  code: string;
  language: string;
}

export function Code({ code, language }: CodeProps) {
  const [nodes, setNodes] = useState<JSX.Element>();

  useLayoutEffect(() => {
    if (code) {
      void highlight(code, language).then(setNodes);
    }
  }, [code, language]);

  function prettifyLanguage(language: string) {
    switch (language) {
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
            {language}
          </>
        );
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <span className={styles.language}>{prettifyLanguage(language)}</span>
        <CopyButton code={code} />
      </div>
      <div className={styles.code}>{nodes}</div>
    </div>
  );
}
