"use client";

import { createContext, ReactNode, useState } from "react";
import { FinancialMessagingStandard } from "../../types";

export interface UserConfig {
  isScrolled: boolean;
  messagingStandard: FinancialMessagingStandard;
}

export interface UserConfigContextType {
  config: UserConfig;
  setConfig: React.Dispatch<React.SetStateAction<UserConfig>>;
}

export const UserConfigContext = createContext<UserConfigContextType>({
  config: {
    isScrolled: false,
    messagingStandard: FinancialMessagingStandard.SWIFT,
  },
  setConfig: () => {},
});

export function UserConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<UserConfig>({
    isScrolled: false,
    messagingStandard: FinancialMessagingStandard.SWIFT,
  });

  return (
    <UserConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </UserConfigContext.Provider>
  );
}
