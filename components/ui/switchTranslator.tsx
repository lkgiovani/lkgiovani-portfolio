"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { US, BR } from "country-flag-icons/react/3x2";

export interface OptionsParams {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface OptionsProps {
  options: OptionsParams[];
}

export interface SwitcherProps
  extends Omit<React.ComponentProps<"input">, "ref" | "onChange">,
    OptionsProps {
  handleChange(value?: string): void;
  label?: string;
  value?: string;
}

function SwitchTranslator({ options, handleChange, value }: SwitcherProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {value === "en" ? (
            <US className="h-[1.2rem] w-[1.2rem]" aria-label="English" />
          ) : (
            <BR className="h-[1.2rem] w-[1.2rem]" aria-label="Português" />
          )}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleChange(option.value)}
          >
            {option.icon} <span className="ml-2">{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SwitchTranslator;
