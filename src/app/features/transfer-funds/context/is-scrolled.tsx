"use client";

import { createContext, ReactNode, useState } from "react";

export interface IsScrolledContextType {
  isScrolled: boolean;
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsScrolledContext = createContext<IsScrolledContextType>({
  isScrolled: false,
  setIsScrolled: () => {},
});

export function IsScrolledProvider({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <IsScrolledContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </IsScrolledContext.Provider>
  );
}
