import { Close } from '@mui/icons-material';
import { Drawer } from '@mui/material';
import React from 'react';

const DrawerLayout = ({
  children,
  toggle = false,
  setToggle,
  title = 'New item',
}: {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode[];
  title: string;
}) => {
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setToggle(open);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setToggle(false);
    }
  };

  return (
    <>
      <div
        role="button"
        onClick={() => setToggle(!toggle)}
        tabIndex={0}
      >
        {children[0]}
      </div>
      <Drawer
        anchor="top"
        open={toggle}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiPaper-elevation': {
            maxWidth: '100%',
            minHeight: '100vh',
            marginX: 'auto',
            padding: '8px',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // pointerEvents: 'none',
            height: 'fit-content',
          },
        }}
      >
        <div className="max-w-4xl pointer-events-auto bg-white flex py-3 px-4 md:p-8 flex-col items-center w-full">
          <div className="flex gap-x-2 justify-between w-full">
            <h1 className="font-black text-xl tracking-wide text-brand-green">
              {title}
            </h1>
            <button
              type="button"
              onKeyDown={handleKeyDown}
              onClick={toggleDrawer(false)}
              className="text-brand-green flex flex-col items-center ml-auto"
            >
              <Close fontSize="large" />
              <span className="text-sm text-brand-green">ESC</span>
            </button>
          </div>
          <div className="flex flex-col w-full">{children[1]}</div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerLayout;
