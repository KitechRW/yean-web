import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Custom404: NextPage = () => {
  const { push } = useRouter();
  // React.useEffect(() => {
  //   push('/');
  // }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-primary text-2xl md:text-4xl font-black tracking-wider">
        Page is not found!
      </p>
    </div>
  );
};

export default Custom404;
