"use client";

import { createContext, ReactNode, useState } from "react";
import { Id } from "../../types";

export interface InViewContextType {
  inView: Id | null;
  setInView: React.Dispatch<React.SetStateAction<Id | null>>;
}

export const InViewContext = createContext<InViewContextType>({
  inView: null,
  setInView: () => {},
});

export function InViewProvider({ children }: { children: ReactNode }) {
  const [inView, setInView] = useState<Id | null>(null);

  return (
    <InViewContext.Provider value={{ inView, setInView }}>
      {children}
    </InViewContext.Provider>
  );
}
