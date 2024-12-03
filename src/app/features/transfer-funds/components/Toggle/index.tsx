"use client";

import { FinancialMessagingStandard } from "@/app/features/types";
import { CSSProperties, MouseEvent, useRef, useState } from "react";
import styles from "./index.module.scss";

export interface ToggleProps {
  className?: string;
  defaultValue: FinancialMessagingStandard;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
  size: "small" | "large";
}

export default function Toggle({
  className,
  defaultValue = FinancialMessagingStandard.SWIFT,
  name,
  options,
  onChange,
  size = "large",
}: ToggleProps) {
  const [width, setWidth] = useState<number>();
  const [left, setLeft] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);

  function setRelativePosition(element: Element) {
    const rect = element.getBoundingClientRect();
    const parentRect = ref.current?.getBoundingClientRect();
    let left = 0;
    if (parentRect) left = rect.x - parentRect.x;

    setWidth(rect.width);
    setLeft(left);
  }

  function handleClick(e: MouseEvent<HTMLLabelElement>) {
    setRelativePosition(e.currentTarget);
  }

  const selectedOption = options.find(
    (option) => option.value === defaultValue
  );

  return (
    <fieldset
      className={`${styles.fieldset} ${styles[size]} ${className ?? ""}`}
    >
      <div
        ref={ref}
        className={styles.track}
        style={
          {
            ...(width
              ? {
                  "--handle-width": `${width}px`,
                }
              : {}),
            ...(left
              ? {
                  "--handle-left": `${left}px`,
                }
              : {}),
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
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={defaultValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              className={styles.input}
            />
            <div className={styles.label}>{option.label}</div>
          </label>
        ))}
        <div className={styles.handle}>{selectedOption?.label}</div>
      </div>
    </fieldset>
  );
}
