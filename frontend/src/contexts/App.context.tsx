import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTitle } from '@frontend/contexts/app-hooks';

export interface AppContextInterface {
  initialized: boolean;
  pageTitle: string;
  setPageTitle: (title: string) => void;
}

export type AppContextType = AppContextInterface | null;
export const AppContext = createContext<AppContextType>(null);

export const useApp = () => useContext(AppContext);

export interface AppContextProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppContextProps) {
  const [initialized, setIsInitialized] = useState<Date | null>(null);

  const {
    pageTitle,
    setPageTitle, //
  } = useTitle();

  useEffect(() => {
    if (!initialized) setIsInitialized(new Date());
  }, []);

  return (
    <AppContext.Provider
      value={{
        initialized: !!initialized,
        pageTitle,
        setPageTitle,
      }}
    >
      {initialized && children}
    </AppContext.Provider>
  );
}
