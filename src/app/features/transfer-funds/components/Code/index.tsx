"use client";

import {
  CSSProperties,
  FocusEvent,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { BundledLanguage, DecorationItem, ShikiTransformer } from "shiki";
import { TooltipContext } from "../../context/tooltip-context";
import { Code as CodeIcon } from "../../icons/Code";
import { Terminal } from "../../icons/Terminal";
import { CopyButton } from "../CopyButton";
import styles from "./index.module.scss";
import { highlight } from "./shared";

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
  const [isHovered, setIsHovered] = useState(false);
  const { setTooltipId } = useContext(TooltipContext);

  useLayoutEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const hoveredElement = event.target as HTMLElement;

      if (hoveredElement?.getAttribute("data-tooltip-id")) {
        setTooltipId(hoveredElement?.getAttribute("data-tooltip-id"));
      }
    }

    if (isHovered) {
      addEventListener("mousemove", handleMouseMove);

      return () => {
        removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      removeEventListener("mousemove", handleMouseMove);
    }
  }, [isHovered, setTooltipId]);

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

  function onFocus(event: FocusEvent<HTMLDivElement>) {
    console.log("focus", event);
    if (document.activeElement?.getAttribute("data-tooltip-id")) {
      setTooltipId(document.activeElement?.getAttribute("data-tooltip-id"));
    } else {
      setTooltipId(null);
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={onFocus}
      >
        {nodes}
      </div>
    </div>
  );
}
