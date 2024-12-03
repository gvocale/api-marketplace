"use client";

import { useContext, useState } from "react";
import { DropdownMenu } from "../DropdownMenu";
import { DropdownMenuContent } from "../DropdownMenuContent";
import { DropdownMenuItem } from "../DropdownMenuItem";
import { DropdownMenuTrigger } from "../DropdownMenuTrigger";
import { UserConfigContext } from "../../context/user-config";
import { FinancialMessagingStandard } from "@/app/features/types";
import styles from "./index.module.scss";

export interface VerticalToggleProps {
  className?: string;
  options: {
    label: string;
    value: string;
  }[];
  name: string;
}

export function VerticalToggle({
  className,
  options,
  name,
}: VerticalToggleProps) {
  const { config, setConfig } = useContext(UserConfigContext);
  const { messagingStandard } = config;
  const [isOpen, setIsOpen] = useState(false);

  function handleOptionClick(value: string) {
    setIsOpen(false);
    setConfig({
      ...config,
      messagingStandard: value as FinancialMessagingStandard,
    });
  }

  return (
    <DropdownMenu className={className}>
      <DropdownMenuTrigger onClick={() => setIsOpen(!isOpen)}>
        {options.find((option) => option.value === messagingStandard)?.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent isOpen={isOpen}>
        <ul>
          {options.map((option) => (
            <li key={option.value} className={styles.listItem}>
              <DropdownMenuItem
                key={option.value}
                defaultValue={messagingStandard}
                onChange={handleOptionClick}
                id={option.value}
                name={name}
                value={option.value}
                label={option.label}
              />
            </li>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
