"use client";

import { useState } from "react";
import { AngleDown } from "../../icons/AngleDown";
import styles from "./index.module.scss";

export interface VerticalToggleProps {
  options: {
    label: string;
    value: string;
  }[];
  defaultValue: string;
  onChange: (value: string) => void;
  name: string;
}

export function VerticalToggle({
  options,
  defaultValue,
  onChange,
  name,
}: VerticalToggleProps) {
  const selectedOption = options.find(
    (option) => option.value === defaultValue
  );

  const [isOpen, setIsOpen] = useState(false);

  function handleOptionClick(value: string) {
    onChange(value);
    setIsOpen(false);
  }

  return (
    <>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption?.label}</span>
        <AngleDown className={styles.icon} />
      </button>

      <div className={`${styles.popover} ${isOpen ? styles.open : ""}`}>
        {options.map((option) => (
          <label
            htmlFor={option.value}
            className={styles.button}
            onClick={() => handleOptionClick(option.value)}
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
      </div>
    </>
  );
}
