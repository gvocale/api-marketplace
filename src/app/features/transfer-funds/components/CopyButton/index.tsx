import { Check } from "../../icons/Check";
import { Copy } from "../../icons/Copy";
import { IconButton } from "../IconButton";
import { useState } from "react";
import styles from "./index.module.scss";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard(code: string) {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <>
      <IconButton
        variant="ghost"
        onClick={() => copyToClipboard(code)}
        title="Copy to clipboard"
        size="sm"
        className={`${styles.button} ${isCopied ? styles.isCopied : ""}`}
      >
        <div className={styles.iconContainer}>
          <Copy className={`${styles.icon} ${styles.iconCopy}`} />
          <Check className={`${styles.icon} ${styles.iconCheck}`} />
        </div>
      </IconButton>
      <div className={`${styles.tooltip} ${isCopied ? styles.isCopied : ""}`}>
        Copied!
      </div>
    </>
  );
}
