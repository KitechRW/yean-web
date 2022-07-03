import React from 'react';
import Popover from '@mui/material/Popover';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowDropDown } from '@mui/icons-material';

const WedoPopup = ({
  icon = <React.Fragment />,
  active = false,
  label = 'What we do?',
}) => {
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

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
        onMouseEnter={handleClick}
        className={`whitespace-nowrap border-r border-opacity-06 px-2 md:px-4 flex items-center font-medium space-x-2 py-4 hover:opacity-75 bg-brand-green text-white cursor-pointer ${
          active ? 'bg-opacity-30' : ''
        }`}
      >
        {icon}
        <span>{label}</span>
        <ArrowDropDown />
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
      >
        <div
          onMouseLeave={handleClose}
          className="flex flex-col py-4 px-3 text-brand-green bg-green-200 min-w-[150px]"
        >
          <Link href="/services">
            <p className="cursor-pointer hover:opacity-80 border-b pb-3 border-brand-green">
              Services
            </p>
          </Link>
          <Link href="/projects">
            <p className="cursor-pointer hover:opacity-80 border-b py-3 border-brand-green">
              Projects
            </p>
          </Link>
          <Link href="/models">
            <p className="cursor-pointer hover:opacity-80 border-b py-3 border-brand-green">
              Models
            </p>
          </Link>
          <Link href="/impacts">
            <p className="cursor-pointer hover:opacity-80 border-b pt-3">Impacts</p>
          </Link>
        </div>
      </Popover>
    </>
  );
};

export default WedoPopup;
