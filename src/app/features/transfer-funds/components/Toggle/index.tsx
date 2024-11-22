"use client";

import React, { CSSProperties, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { FinancialMessagingStandard } from "@/app/features/types";

export interface ToggleProps {
  defaultValue: FinancialMessagingStandard;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
}

export default function Toggle({
  defaultValue = "swift",
  options,
  onChange,
}: ToggleProps) {
  const [width, setWidth] = useState<number>();
  const [left, setLeft] = useState<number>();

  useEffect(() => {
    const selectedButton = document.querySelector(
      `label:has(input[value="${defaultValue}"])`
    );
    if (selectedButton) {
      const rect = selectedButton.getBoundingClientRect();
      setWidth(rect.width);
      setLeft(rect.left);
    }
  }, [defaultValue]);

  function handleClick(e: React.MouseEvent<HTMLLabelElement>) {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const parentRect = element.parentElement?.getBoundingClientRect();

    console.log({
      width: rect.width,
      left: rect.left - (parentRect?.left || 0),
      top: rect.top - (parentRect?.top || 0),
      // Relative to parent element
      position: {
        x: rect.x - (parentRect?.x || 0),
        y: rect.y - (parentRect?.y || 0),
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
        {options.map((option) => (
          <label
            htmlFor={option.value}
            className={styles.button}
            onClick={handleClick}
            key={option.value}
          >
            <div className={styles.ghost}></div>
            <input
              type="radio"
              id="swift"
              name="standard"
              value="swift"
              checked={defaultValue === "swift"}
              onChange={(e) => onChange(e.target.value)}
              className={styles.input}
            />
          </label>
        ))}

        <div className={styles.label}>SWIFT MT103</div>
      </div>
    </fieldset>
  );
}
