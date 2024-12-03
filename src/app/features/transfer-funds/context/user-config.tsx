"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FinancialMessagingStandard } from "../../types";

export interface UserConfig {
  messagingStandard: FinancialMessagingStandard;
}

export interface UserConfigContextType {
  config: UserConfig;
  setConfig: React.Dispatch<React.SetStateAction<UserConfig>>;
}

export const UserConfigContext = createContext<UserConfigContextType>({
  config: {
    messagingStandard: FinancialMessagingStandard.SWIFT,
  },
  setConfig: () => {},
});

export function UserConfigProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [config, setConfig] = useState<UserConfig>({
    messagingStandard: FinancialMessagingStandard.SWIFT,
  });
  const { messagingStandard } = config;
  const messagingStandardFromParams = searchParams.get("messagingStandard");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (searchParams.get("messagingStandard") !== messagingStandard) {
      router.push(
        pathname +
          "?" +
          createQueryString("messagingStandard", messagingStandard),
        { scroll: false }
      );
    }
  }, [messagingStandard, router, searchParams, createQueryString, pathname]);

  useEffect(() => {
    if (messagingStandardFromParams) {
      setConfig((prev) => ({
        ...prev,
        messagingStandard:
          messagingStandardFromParams as FinancialMessagingStandard,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </UserConfigContext.Provider>
  );
}
