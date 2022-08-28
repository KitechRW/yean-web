import Keys from 'apis/utils/constants/keys';
import { useRouter } from 'next/router';
import React from 'react';
import Secure from 'system/helpers/secureLs';

export interface INavbar {
  currentTab?: number;
  viewHeader?: boolean;
  recentPages: string[];
  profile: any;
  setCurrentTab?: React.Dispatch<React.SetStateAction<number>>;
  setViewHeader: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
}

export const defaultValue: Readonly<INavbar> = {
  currentTab: 0,
  recentPages: [],
  profile: null,
  setProfile() {},
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
  const [profile, setProfile] = React.useState<any>(null);

  React.useEffect(() => {
    setRecentPages(prev =>
      Array.from(new Set([pathname, ...prev].slice(0, 5))),
    );
  }, [pathname]);

  React.useEffect(() => {
    const user = Secure.get(Keys.USER_INFO as string);
    if (user) {
      setProfile((prev: any) => {
        if (!prev) {
          return user;
        }
        return prev;
      });
    }
  }, []);

  const value = React.useMemo(() => {
    return {
      currentTab,
      viewHeader,
      recentPages,
      profile,
      setProfile,
      setViewHeader,
      setCurrentTab,
    };
  }, [currentTab, profile, recentPages, viewHeader]);

  return (
    <NavbarContext.Provider value={value}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
