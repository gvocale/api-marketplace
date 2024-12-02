"use client";

import { useState } from "react";
import { DropdownMenu } from "../DropdownMenu";
import { DropdownMenuContent } from "../DropdownMenuContent";
import { DropdownMenuItem } from "../DropdownMenuItem";
import { DropdownMenuTrigger } from "../DropdownMenuTrigger";

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
  const [isOpen, setIsOpen] = useState(false);

  function handleOptionClick(value: string) {
    setIsOpen(false);
    onChange(value);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger onClick={() => setIsOpen(!isOpen)}>
        {options.find((option) => option.value === defaultValue)?.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent isOpen={isOpen}>
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            defaultValue={defaultValue}
            onChange={handleOptionClick}
            id={option.value}
            name={name}
            value={option.value}
            label={option.label}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
