import React from 'react';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/router';

const ProfilePopup = () => {
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const onLogout = () => {
    push('/logout');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        <Avatar src="/assets/images/user.png" alt="Jackson" />
      </button>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handleClose}
        open={open}
        anchorEl={anchorEl}
        // className="rounded-3xl bg-white shadow"
      >
        <div className="flex flex-col py-4 px-3">
          <button
            type="button"
            onClick={onLogout}
            className="flex text-sm items-center space-x-3 rounded-3xl py-2 px-12 bg-red-400 text-white"
          >
            <LogoutIcon fontSize="small" />
            <span>Logout</span>
          </button>
        </div>
      </Popover>
    </>
  );
};

export default ProfilePopup;
