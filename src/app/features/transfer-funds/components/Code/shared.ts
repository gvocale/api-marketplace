import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { codeToHast, ShikiTransformer, DecorationItem } from "shiki/bundle/web";

export interface HighlightOptions {
  transformers?: ShikiTransformer[];
  decorations?: DecorationItem[];
  code: string;
  lang: string;
}

export async function highlight({
  transformers,
  decorations,
  code,
  lang,
}: HighlightOptions) {
  const out = await codeToHast(code, {
    lang,
    theme: "github-light",
    decorations: [...(decorations ? decorations : [])],
    transformers: [...(transformers ? transformers : [])],
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
  });
}
