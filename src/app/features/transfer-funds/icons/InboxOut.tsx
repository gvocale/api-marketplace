import { SVGProps } from "react";

export function InboxOut(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
      fill="currentColor"
    >
      <path d="M280 288c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9l-63 63c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 7c9.4-9.4 24.6-9.4 33.9 0L377 111c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-63-63V288zM149.1 405.5 130.3 368H48v96h416v-96h-82.3L363 405.5c-8.2 16.2-24.8 26.5-43 26.5H192c-18.2 0-34.8-10.3-42.9-26.5m24.2-58.9L192 384h128l18.7-37.5c8.1-16.3 24.8-26.5 42.9-26.5H464c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h82.3c18.2 0 34.8 10.3 42.9 26.5z"></path>
    </svg>
  );
}