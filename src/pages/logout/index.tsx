import React from 'react';
import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Logout: NextPage = () => {
  const { push } = useRouter();
  React.useEffect(() => {
    axios.post('/api/logout').then(() => {
      push('/');
    });
  }, [push]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 md:p-8">
      <p className="text-xl font-medium tracking-wide text-brand-red">
        Logout...
      </p>
    </div>
  );
};

export default Logout;
