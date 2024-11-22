import { codeToHtml } from "@/utils/shiki";

export async function Code({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const html = await codeToHtml({
    code,
    language,
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
