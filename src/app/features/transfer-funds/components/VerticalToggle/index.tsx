"use client";

import { FinancialMessagingStandard } from "@/app/features/types";
import { useContext, useEffect, useState } from "react";
import { UserConfigContext } from "../../context/user-config";
import { MESSAGING_STANDARD_OPTIONS } from "../../data/optons";
import { DropdownMenuContent } from "../DropdownMenuContent";
import { DropdownMenuItem } from "../DropdownMenuItem";
import { DropdownMenuTrigger } from "../DropdownMenuTrigger";
import styles from "./index.module.scss";

export function VerticalToggle() {
  const options = MESSAGING_STANDARD_OPTIONS;
  const { config, setConfig } = useContext(UserConfigContext);
  const { messagingStandard } = config;
  const [isOpen, setIsOpen] = useState(false);

  function handleOptionClick(value: FinancialMessagingStandard) {
    setIsOpen(false);
    setConfig({
      ...config,
      messagingStandard: value as FinancialMessagingStandard,
    });
  }

  useEffect(() => {
    if (isOpen) {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsOpen(false);
          window.removeEventListener("keydown", handleEscapeKey);
        }
      };
      window.addEventListener("keydown", handleEscapeKey);

      return () => {
        window.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [isOpen]);

  return (
    <>
      <DropdownMenuTrigger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {options.find((option) => option.value === messagingStandard)?.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent isOpen={isOpen}>
        <ul>
          {options.map((option) => (
            <li key={option.value} className={styles.listItem}>
              <DropdownMenuItem
                tabIndex={isOpen ? 0 : -1}
                isActive={messagingStandard === option.value}
                onClick={() =>
                  handleOptionClick(option.value as FinancialMessagingStandard)
                }
              >
                {option.label}
              </DropdownMenuItem>
            </li>
          ))}
        </ul>
      </DropdownMenuContent>
    </>
  );
}
