import { useRouter } from 'next/router';
import React from 'react';

export interface INavbar {
  currentTab?: number;
  viewHeader?: boolean;
  recentPages: string[];
  setCurrentTab?: React.Dispatch<React.SetStateAction<number>>;
  setViewHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValue: Readonly<INavbar> = {
  currentTab: 0,
  recentPages: [],
  setViewHeader() {},
};

export const NavbarContext =
  React.createContext<INavbar>(defaultValue);
export const useNavbar = () => {
  return React.useContext(NavbarContext);
};

const NavbarProvider = ({ children }: any) => {
  const { pathname } = useRouter();
  const [currentTab, setCurrentTab] = React.useState(0);
  const [viewHeader, setViewHeader] = React.useState(true);
  const [recentPages, setRecentPages] = React.useState<string[]>([]);

  React.useEffect(() => {
    setRecentPages(prev => Array.from(new Set([pathname, ...prev].slice(0, 5))));
  }, [pathname]);

  const value = React.useMemo(() => {
    return {
      currentTab,
      viewHeader,
      recentPages,
      setViewHeader,
      setCurrentTab,
    };
  }, [currentTab, recentPages, viewHeader]);

  return (
    <NavbarContext.Provider value={value}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
