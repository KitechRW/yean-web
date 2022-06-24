import React from 'react';
import NavbarProvider from './NavbarContext';
import WindowProvider from './WindowContext';

const AppProviders = ({ children }: any) => {
  return (
    <WindowProvider>
      <NavbarProvider>{children}</NavbarProvider>
    </WindowProvider>
  );
};

export default AppProviders;
