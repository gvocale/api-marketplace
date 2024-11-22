"use client";

import { FinancialMessagingStandard } from "@/app/features/types";
import { CSSProperties, MouseEvent, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

export interface ToggleProps {
  defaultValue: FinancialMessagingStandard;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
}

export default function Toggle({
  defaultValue = "swift",
  name,
  options,
  onChange,
}: ToggleProps) {
  const [width, setWidth] = useState<number>();
  const [left, setLeft] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectedButton = document.querySelector(
      `label:has(input[value="${defaultValue}"])`
    );
    if (selectedButton && !width) {
      setRelativePosition(selectedButton);
    }
  }, [defaultValue, width]);

  function setRelativePosition(element: Element) {
    const rect = element.getBoundingClientRect();
    const parentRect = ref.current?.getBoundingClientRect();
    const difference = rect.x - (parentRect?.x ?? 0);
    setWidth(rect.width);
    setLeft(difference);
  }

  function handleClick(e: MouseEvent<HTMLLabelElement>) {
    setRelativePosition(e.currentTarget);
  }

  const selectedOption = options.find(
    (option) => option.value === defaultValue
  );

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Financial messaging standards</legend>
      <div
        ref={ref}
        className={styles.buttons}
        style={
          {
            ...(width
              ? {
                  "--ghost-width": `${width}px`,
                }
              : {}),
            ...(left
              ? {
                  "--ghost-left": `${left}px`,
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
        <div className={styles.ghost}>{selectedOption?.label}</div>
      </div>
    </fieldset>
  );
}
