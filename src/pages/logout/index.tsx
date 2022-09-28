import React from 'react';
import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useNavbar } from 'modules/contexts/NavbarContext';
import Secure from 'system/helpers/secureLs';
import Keys from 'apis/utils/constants/keys';

const Logout: NextPage = () => {
  const { push } = useRouter();
  const { setProfile } = useNavbar();
  const resetProfile = React.useRef(() => {});
  resetProfile.current = () => {
    axios.post('/api/logout').then(() => {
      setProfile(null);
      Secure.remove(Keys.USER_INFO as string);
      push('/');
    });
  };
  React.useEffect(() => {
    resetProfile.current();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 md:p-8">
      <p className="text-xl font-medium tracking-wide text-brand-red">
        Logout...
      </p>
    </div>
  );
};

export default Logout;
