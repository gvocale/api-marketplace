import type { RehypeShikiOptions } from "@shikijs/rehype";
import rehypeShiki from "@shikijs/rehype";
import { useLayoutEffect, useState } from "react";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import styles from "./index.module.scss";

export function InlineCode({
  children,
  language,
}: {
  children: string;
  language: string;
}) {
  const [nodes, setNodes] = useState<JSX.Element>();

  useLayoutEffect(() => {
    async function processCode() {
      if (!children) return;

      const result = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeShiki, {
          theme: "github-light",
          langs: [language],
        } as RehypeShikiOptions)
        .use(rehypeStringify)
        .process(children);

      // The unified pipeline with rehype-stringify outputs HTML as a string
      // We need to parse this HTML string to get the actual code content
      const parser = new DOMParser();
      const doc = parser.parseFromString(String(result), "text/html");
      const codeContent = doc.body.textContent || "";
      setNodes(<>{codeContent}</>);
    }

    void processCode();
  }, [children, language]);

  return (
    <>
      <span className={styles.inlineCode}>{nodes}</span>
    </>
  );
}
