import { useId, useState } from "react";
import { Check } from "../../icons/Check";
import { Copy } from "../../icons/Copy";
import { IconButton } from "../IconButton";
import styles from "./index.module.scss";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const id = useId();
  const uniqueId = id.replace(/[^a-zA-Z0-9]/g, "");

  function copyToClipboard(code: string) {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <>
      <IconButton
        id={uniqueId}
        variant="ghost"
        onClick={() => copyToClipboard(code)}
        title="Copy to clipboard"
        size="sm"
        className={`${isCopied ? styles.isCopied : ""}`}
        icon={
          <div className={styles.iconContainer}>
            <Copy className={`${styles.icon} ${styles.iconCopy}`} />
            <Check className={`${styles.icon} ${styles.iconCheck}`} />
          </div>
        }
        // @ts-expect-error anchorName is not a valid prop
        style={{ anchorName: `--${uniqueId}` }}
      />
      <div
        className={`${styles.tooltip} ${isCopied ? styles.isCopied : ""}`}
        // @ts-expect-error positionAnchor is not a valid prop
        style={{ positionAnchor: `--${uniqueId}` }}
      >
        Copied!
      </div>
    </>
  );
}
