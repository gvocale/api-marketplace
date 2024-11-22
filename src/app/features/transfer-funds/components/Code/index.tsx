import { codeToHtml } from "@/utils/shiki";

export function Code({ code, language }: { code: string; language: string }) {
  const html = codeToHtml({
    code,
    language,
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
