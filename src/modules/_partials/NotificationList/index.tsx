import React from 'react';
import Popover from '@mui/material/Popover';
import { Close, Notifications } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Avatar, Divider } from '@mui/material';

const NotificationList = () => {
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
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
        className="relative bg-cyan-201 px-4 py-3 flex items-center rounded rounded-tl-3xl rounded-br-3xl"
      >
        <Notifications />
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
        <div className="flex flex-col items-center py-4 px-3">
          <div className="flex space-x-3 w-full py-2 items-start">
            <Avatar src="/assets/images/user.png" alt="Jackson" />
            <div className="flex flex-col">
              <h2>Yellow Sweet Corn Stock out, please check!</h2>
              <div className="flex items-center space-x-1">
                <p className="text-sm text-brand-red px-2 bg-[#FDE8E8] p-0.5 rounded-full">
                  Stock Out
                </p>
                <p className="text-[#9E9E9E] text-xs">
                  Dec 12 2021 - 12:40PM
                </p>
              </div>
            </div>
            <button type="button" className="text-black-200">
              <Close />
            </button>
          </div>

          <Divider className="w-full" />

          {/* second */}
          <div className="flex space-x-3 w-full py-2 items-start">
            <Avatar src="/assets/images/user.png" alt="Jackson" />
            <div className="flex flex-col">
              <h2>Yellow Sweet Corn Stock out, please check!</h2>
              <div className="flex items-center space-x-1">
                <p className="text-sm text-brand-red px-2 bg-[#FDE8E8] p-0.5 rounded-full">
                  Stock Out
                </p>
                <p className="text-[#9E9E9E] text-xs">
                  Dec 12 2021 - 12:40PM
                </p>
              </div>
            </div>
            <button type="button" className="text-black-200">
              <Close />
            </button>
          </div>
          <button
            type="button"
            className="mt-3 px-3 rounded-full p-1 text-brand-green bg-[#24262D26] bg-opacity-[0.15] text-sm"
          >
            View more
          </button>
        </div>
      </Popover>
    </>
  );
};

export default NotificationList;
