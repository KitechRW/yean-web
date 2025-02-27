import React from 'react';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/router';
import Transition from '../Transition';
import { useNavbar } from 'modules/contexts/NavbarContext';
import UserIcon from '../_drawable/icons/userIcon';
import { AccountBox } from '@mui/icons-material';

const ProfilePopup = () => {
  const { profile } = useNavbar();
  const { push } = useRouter();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const trigger = React.useRef<any>(null);
  const dropdown = React.useRef<any>(null);

  // close on click outside
  React.useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!trigger.current || !dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  React.useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  const onLogout = () => {
    push('/logout');
  };

  return (
    <>
      <button
        ref={trigger}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <Avatar src="/assets/images/user.png" alt="" />
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        appear={true}
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className="px-4 py-2 space-y-1.5 flex flex-col"
        >
          <p>{profile?.user.email}</p>
          <button
            type="button"
            onClick={() => {
              push('/profile');
            }}
            className="flex text-sm items-center space-x-3 rounded-lg py-2 px-12 bg-green-400 text-white"
          >
            <AccountBox fontSize="small" />
            <span>Profile</span>
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="flex text-sm items-center space-x-3 rounded-lg py-2 px-12 bg-red-400 text-white"
          >
            <LogoutIcon fontSize="small" />
            <span>Logout</span>
          </button>
        </div>
      </Transition>
    </>
  );
};

export default ProfilePopup;
