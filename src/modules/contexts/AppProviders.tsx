import React from 'react';
import NavbarProvider from './NavbarContext';
import SearchbarProvider from './SearchbarContext';
import WindowProvider from './WindowContext';

const AppProviders = ({ children }: any) => {
  return (
    <WindowProvider>
      <NavbarProvider>
        <SearchbarProvider>{children}</SearchbarProvider>
      </NavbarProvider>
    </WindowProvider>
  );
};

export default AppProviders;
