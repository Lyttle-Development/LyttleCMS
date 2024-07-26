import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMainNav } from '@frontend/contexts/app-hooks/main-nav';
import { useMobile, useTitle } from '@frontend/contexts/app-hooks';

export interface AppContextInterface {
  mainNavOpen: boolean;
  mobile: boolean;
  pageTitle: string;
  setMainNavOpen: (state: boolean) => void;
  setMobile: (state: boolean) => void;
  setPageTitle: (title: string) => void;
  toggleMainNav: () => void;
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
    mainNavOpen,
    setMainNavOpen,
    toggleMainNav, //
  } = useMainNav();

  const {
    pageTitle,
    setPageTitle, //
  } = useTitle();

  const {
    mobile,
    setMobile, //
  } = useMobile(mainNavOpen, setMainNavOpen, initialized);

  useEffect(() => {
    if (!initialized) setIsInitialized(new Date());
  }, []);

  return (
    <AppContext.Provider
      value={{
        mainNavOpen,
        mobile,
        pageTitle,
        setMainNavOpen,
        setMobile,
        setPageTitle,
        toggleMainNav,
      }}
    >
      {initialized && children}
    </AppContext.Provider>
  );
}
