import React from 'react';

export interface INavbar {
  currentTab?: number;
  viewHeader?: boolean;
  setCurrentTab?: React.Dispatch<React.SetStateAction<number>>;
  setViewHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValue: Readonly<INavbar> = {
  currentTab: 0,
  setViewHeader() {},
};

export const NavbarContext =
  React.createContext<INavbar>(defaultValue);
export const useNavbar = () => {
  return React.useContext(NavbarContext);
};

const NavbarProvider = ({ children }: any) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [viewHeader, setViewHeader] = React.useState(true);

  const value = React.useMemo(() => {
    return {
      currentTab,
      viewHeader,
      setViewHeader,
      setCurrentTab,
    };
  }, [currentTab, viewHeader]);

  return (
    <NavbarContext.Provider value={value}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
