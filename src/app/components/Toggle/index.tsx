"use client";

import React, { CSSProperties, useEffect, useState } from "react";
import styles from "./index.module.scss";

export interface ToggleProps {
  defaultValue: FinancialMessagingStandard;
}

export type FinancialMessagingStandard = "swift" | "pacs";

export default function Toggle({ defaultValue = "swift" }: ToggleProps) {
  const [selected, setSelected] =
    useState<FinancialMessagingStandard>(defaultValue);
  const [width, setWidth] = useState<number>();
  const [left, setLeft] = useState<number>();

  useEffect(() => {
    const selectedButton = document.querySelector(
      `label:has(input[value="${selected}"])`
    );
    if (selectedButton) {
      const rect = selectedButton.getBoundingClientRect();
      setWidth(rect.width);
      setLeft(rect.left);
    }
  }, [selected]);

  function handleClick(e: React.MouseEvent<HTMLLabelElement>) {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();

    console.log({
      width: rect.width,
      left: rect.left,
      top: rect.top,
      // Relative to the viewport
      position: {
        x: rect.x,
        y: rect.y,
      },
    });
  }

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Financial messaging standards</legend>
      <div
        className={styles.buttons}
        style={
          {
            "--ghost-width": width ? `${width}px` : "auto",
            "--ghost-left": left ? `${left}px` : "auto",
          } as CSSProperties
        }
      >
        <label htmlFor="swift" className={styles.button} onClick={handleClick}>
          <div className={styles.ghost}></div>
          <input
            type="radio"
            id="swift"
            name="standard"
            value="swift"
            checked={selected === "swift"}
            onChange={(e) =>
              setSelected(e.target.value as FinancialMessagingStandard)
            }
            className={styles.input}
          />
        </label>

        <label htmlFor="pacs" className={styles.button} onClick={handleClick}>
          <input
            type="radio"
            id="pacs"
            name="standard"
            value="pacs"
            checked={selected === "pacs"}
            onChange={(e) =>
              setSelected(e.target.value as FinancialMessagingStandard)
            }
            className={styles.input}
          />
          <div className={styles.label}>PACS.008</div>
        </label>

        <div className={styles.label}>SWIFT MT103</div>
      </div>
    </fieldset>
  );
}
