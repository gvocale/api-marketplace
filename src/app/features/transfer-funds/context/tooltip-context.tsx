"use client";

import { createContext, ReactNode, useState } from "react";

export interface TooltipContextType {
  tooltipId: string | null;
  setTooltipId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const TooltipContext = createContext<TooltipContextType>({
  tooltipId: null,
  setTooltipId: () => {},
});

export function TooltipProvider({ children }: { children: ReactNode }) {
  const [tooltipId, setTooltipId] = useState<string | null>(null);

  return (
    <TooltipContext.Provider value={{ tooltipId, setTooltipId }}>
      {children}
    </TooltipContext.Provider>
  );
}
